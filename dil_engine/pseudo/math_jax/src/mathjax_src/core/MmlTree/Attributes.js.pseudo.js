// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=325B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.global = e;
  this.defaults = Object.create(e);
  this.inherited = Object.create(this.defaults);
  this.attributes = Object.create(this.inherited);
  Object.assign(this.defaults, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t, e
// locals: this
function {
  this = this;
  this.attributes[t] = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=79B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t
// locals: this
function {
  this = this;
  Object.assign(this.attributes, t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t
// locals: this
function {
  this = this;
  this.attributes;
  delete t;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=129B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t
// locals: e, this
// closure: exports
function {
  this = this;
  let e;
  e = this.attributes[t];
  if (!((e === exports.INHERIT))) goto L_7c;
  e = this.global[t];
  this.global[t];
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=81B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t
// locals: this
function {
  this = this;
  if (!(this.hasExplicit(t))) goto L_4f;
  return this.attributes[t];
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t
// locals: this
function {
  this = this;
  return Object.hasOwn(this.attributes, t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=68B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t
// locals: e, this
function {
  this = this;
  let e;
  for (const e of t) {
    if (!(this.hasExplicit(e))) continue;
    return true;
    // [栈深重同步 0 -> 3]
  }
  return false;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t
// locals: e, s, this
function {
  this = this;
  t = ...0;
  let e;
  e = {};
  let s;
  for (const s of t) {
    e[s] = this.get(s);
  }
  return e;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t, e
// locals: this
function {
  this = this;
  this.inherited[t] = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t
// locals: this
function {
  this = this;
  return this.inherited[t];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t
// locals: this
function {
  this = this;
  return this.defaults[t];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=159B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t
// locals: this
function {
  this = this;
  if ((Object.hasOwn(this.attributes, t))) goto L_9e;
  return Object.hasOwn(this.inherited, t);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: t
// locals: this
function {
  this = this;
  return (t in this.defaults);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// locals: this
function {
  this = this;
  return Object.keys(this.attributes);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// locals: this
function {
  this = this;
  return Object.keys(this.inherited);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// locals: this
function {
  this = this;
  return Object.keys(this.defaults);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// locals: this
function {
  this = this;
  return Object.keys(this.global);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// locals: this
function {
  this = this;
  return this.attributes;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// locals: this
function {
  this = this;
  return this.inherited;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// locals: this
function {
  this = this;
  return this.defaults;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// locals: this
function {
  this = this;
  return this.global;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=22 bc=301B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// args: require, module, exports
// locals: Attributes, <class_fields_init>, Attributes#1
function {
  let Attributes#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.INHERIT = undefined;
  exports.Attributes = undefined;
  exports.INHERIT = "_inherit_";
  let Attributes;
  let <class_fields_init>;
  class Attributes extends undefined { ... }
  <proto:Attributes>.set = function <atom:0>;
  <proto:Attributes>.setList = function <atom:0>;
  <proto:Attributes>.unset = function <atom:0>;
  <proto:Attributes>.get = function <atom:0>;
  <proto:Attributes>.getExplicit = function <atom:0>;
  <proto:Attributes>.hasExplicit = function <atom:0>;
  <proto:Attributes>.hasOneOf = function <atom:0>;
  <proto:Attributes>.getList = function <atom:0>;
  <proto:Attributes>.setInherited = function <atom:0>;
  <proto:Attributes>.getInherited = function <atom:0>;
  <proto:Attributes>.getDefault = function <atom:0>;
  <proto:Attributes>.isSet = function <atom:0>;
  <proto:Attributes>.hasDefault = function <atom:0>;
  <proto:Attributes>.getExplicitNames = function <atom:0>;
  <proto:Attributes>.getInheritedNames = function <atom:0>;
  <proto:Attributes>.getDefaultNames = function <atom:0>;
  <proto:Attributes>.getGlobalNames = function <atom:0>;
  <proto:Attributes>.getAllAttributes = function <atom:0>;
  <proto:Attributes>.getAllInherited = function <atom:0>;
  <proto:Attributes>.getAllDefaults = function <atom:0>;
  <proto:Attributes>.getAllGlobals = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Attributes>;
  Attributes = function <atom:0>;
  // close_loc <class_fields_init>
  Attributes#1 = function <atom:0>;
  exports.Attributes = Attributes#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/Attributes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
