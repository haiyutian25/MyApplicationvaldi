// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=246B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t, e, r
// locals: t#1, e#1, r#1, s, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let r#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_24;
  e;
  e = {};
  e#1 = {};
  if (!((r === undefined))) goto L_2f;
  r;
  r = [];
  r#1 = [];
  this.factory = t;
  this.parent = null;
  this.properties = {};
  this.childNodes = [];
  let s;
  for (const s of Object.keys(e)) {
    this.setProperty(s, e[s]);
  }
  if (!(r.length)) goto L_f5;
  this.setChildren(r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/Tree/Node
function {
  return "unknown";
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t, e
// locals: this
function {
  this = this;
  this.properties[t] = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t
// locals: this
function {
  this = this;
  return this.properties[t];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/core/Tree/Node
// locals: this
function {
  this = this;
  return Object.keys(this.properties);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/Tree/Node
// locals: this
function {
  this = this;
  return this.properties;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=60B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t
// locals: e, this
function {
  this = this;
  t = ...0;
  let e;
  for (const e of t) {
    delete e;
    // [栈深重同步 4 -> 3]
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t
// locals: this
function {
  this = this;
  return this.factory.nodeIsKind(this, t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=71B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t
// locals: e, this
function {
  this = this;
  this.childNodes = [];
  let e;
  for (const e of t) {
    this.appendChild(e);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=87B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t
// locals: this
function {
  this = this;
  this.childNodes.push(t);
  t.parent = this;
  return t;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=158B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t, e
// locals: r, this
function {
  this = this;
  let r;
  r = this.childIndex(e);
  if (!((null !== r))) goto L_9b;
  this.childNodes[r] = t;
  t.parent = this;
  if (!((e.parent === this))) goto L_9b;
  e.parent = null;
  null;
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=143B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.childIndex(t);
  if (!((null !== e))) goto L_8c;
  this.childNodes.splice(e, 1);
  t.parent = null;
  null;
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=90B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.childNodes.indexOf(t);
  if (!((-1 === e))) goto L_56;
  return null;
  return e;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=306B file=math_jax/src/mathjax_src/core/Tree/Node
// locals: t, e, this
function {
  this = this;
  let t;
  t = this.factory.create(this.kind);
  null;
  this.properties;
  t.properties = {};
  let e;
  if ((this.childNodes)) goto L_ce;
  for (const e of []) {
    if (!(e)) goto L_127;
    t.appendChild(e.copy());
  }
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=83B file=math_jax/src/mathjax_src/core/Tree/Node
// args: r
// closure: t, e
function {
  if (!(r.isKind(t))) goto L_52;
  e.push(r);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=53B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = [];
  this.walkTree(function <atom:0>);
  return e;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=105B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t, e
// locals: r, this
function {
  this = this;
  t(this, e);
  let r;
  for (const r of this.childNodes) {
    if (!(r)) goto L_60;
    r.walkTree(t, e);
  }
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=125B file=math_jax/src/mathjax_src/core/Tree/Node
// locals: this
function {
  this = this;
  return (((this.kind + "(") + this.childNodes.join(",")) + ")");
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t
function {
  return t;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t, e
function {
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t
function {
  return null;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=9B file=math_jax/src/mathjax_src/core/Tree/Node
// args: t, e
// locals: this
function {
  this = this;
  t(this, e);
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/Tree/Node
// locals: this
function {
  this = this;
  return this.kind;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/Tree/Node
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

// fn <atom:0>  args=3 vars=9 closure=0 cpool=24 bc=337B file=math_jax/src/mathjax_src/core/Tree/Node
// args: require, module, exports
// locals: AbstractNode, <class_fields_init>, AbstractNode#1, AbstractEmptyNode, <class_fields_init>#1, AbstractEmptyNode#1
function {
  let AbstractEmptyNode#1;
  let AbstractNode#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractNode = undefined;
  exports.AbstractEmptyNode = undefined;
  let AbstractNode;
  let <class_fields_init>;
  class AbstractNode extends undefined { ... }
  <proto:AbstractNode>.kind = function <atom:0>;
  <proto:AbstractNode>.setProperty = function <atom:0>;
  <proto:AbstractNode>.getProperty = function <atom:0>;
  <proto:AbstractNode>.getPropertyNames = function <atom:0>;
  <proto:AbstractNode>.getAllProperties = function <atom:0>;
  <proto:AbstractNode>.removeProperty = function <atom:0>;
  <proto:AbstractNode>.isKind = function <atom:0>;
  <proto:AbstractNode>.setChildren = function <atom:0>;
  <proto:AbstractNode>.appendChild = function <atom:0>;
  <proto:AbstractNode>.replaceChild = function <atom:0>;
  <proto:AbstractNode>.removeChild = function <atom:0>;
  <proto:AbstractNode>.childIndex = function <atom:0>;
  <proto:AbstractNode>.copy = function <atom:0>;
  <proto:AbstractNode>.findNodes = function <atom:0>;
  <proto:AbstractNode>.walkTree = function <atom:0>;
  <proto:AbstractNode>.toString = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractNode>;
  AbstractNode = function <atom:0>;
  // close_loc <class_fields_init>
  AbstractNode#1 = function <atom:0>;
  exports.AbstractNode = AbstractNode#1;
  let AbstractEmptyNode;
  let <class_fields_init>#1;
  class AbstractEmptyNode extends AbstractNode#1 { ... }
  <proto:AbstractEmptyNode>.setChildren = function <atom:0>;
  <proto:AbstractEmptyNode>.appendChild = function <atom:0>;
  <proto:AbstractEmptyNode>.replaceChild = function <atom:0>;
  <proto:AbstractEmptyNode>.childIndex = function <atom:0>;
  <proto:AbstractEmptyNode>.walkTree = function <atom:0>;
  <proto:AbstractEmptyNode>.toString = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AbstractEmptyNode>;
  AbstractEmptyNode = function <atom:0>;
  // close_loc <class_fields_init>#1
  AbstractEmptyNode#1 = function <atom:0>;
  exports.AbstractEmptyNode = AbstractEmptyNode#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/Tree/Node
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
