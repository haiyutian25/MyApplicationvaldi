// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=97B file=math_jax/src/mathjax_src/util/FunctionList
// args: t
// locals: t#1, this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let t#1;
  if (!((t === undefined))) goto L_15;
  t;
  t = null;
  t#1 = null;
  this = new new.target();
  if (!(<class_fields_init>)) goto L_2d;
  <class_fields_init>.call(this);
  new new.target();
  if (!(t)) goto L_5c;
  this.addList(t);
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=157B file=math_jax/src/mathjax_src/util/FunctionList
// args: t
// locals: i, this
function {
  this = this;
  let i;
  for (const i of t) {
    if (!(Array.isArray(i))) goto L_6a;
    goto L_92;
    // [栈深重同步 4 -> 3]
    this.add(i);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=82B file=math_jax/src/mathjax_src/util/FunctionList
// args: t
// locals: i, this
function {
  this = this;
  t = ...0;
  let i;
  for (const i of this) {
    // append([], 0, t)
    t;
    if (!((false === i.item.apply(i, [])))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=math_jax/src/mathjax_src/util/FunctionList
// args: t
// closure: r
function {
  return r(t);   // tail call
}

// fn n  args=0 vars=2 closure=5 cpool=1 bc=196B file=math_jax/src/mathjax_src/util/FunctionList
// locals: o, n
// closure: r, i, e, t, s
function {
  n = <special_object 2>;
  i = (i ++);
  if (!(((i ++) < e.length))) goto L_bd;
  let o;
  // append([], 0, t)
  t;
  o = e[i].item.apply(e[i], []);
  if (!((o instanceof Promise))) goto L_a7;
  o.then(n).catch(function <atom:0>);
  return;
  if (!((false === o))) goto L_3;
  s(false);
  return;
  s(true);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=1 bc=5B file=math_jax/src/mathjax_src/util/FunctionList
// args: s, r
// closure: i, e, t
function {
  !function n();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=1 bc=61B file=math_jax/src/mathjax_src/util/FunctionList
// args: t
// locals: i, e, this
function {
  this = this;
  t = ...0;
  let e;
  let i;
  i = -1;
  e = this.items;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=177B file=math_jax/src/mathjax_src/util/FunctionList
// args: require, module, exports
// locals: t, FunctionList, <class_fields_init>, FunctionList#1
function {
  let FunctionList#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FunctionList = undefined;
  t = require("./PrioritizedList");
  let FunctionList;
  let <class_fields_init>;
  class FunctionList extends t.PrioritizedList { ... }
  <proto:FunctionList>.addList = function <atom:0>;
  <proto:FunctionList>.execute = function <atom:0>;
  <proto:FunctionList>.asyncExecute = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FunctionList>;
  FunctionList = function <atom:0>;
  // close_loc <class_fields_init>
  FunctionList#1 = function <atom:0>;
  exports.FunctionList = FunctionList#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/FunctionList
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
