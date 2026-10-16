// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=333B file=math_jax/src/mathjax_src/input/tex/Stack
// args: t, s, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this._factory = t;
  this._env = s;
  this.global = {};
  this.stack = [];
  this.global = {isInner: e};
  this.stack = [this._factory.create("start", this.global)];
  if (!(s)) goto L_fc;
  this.stack[0].env = s;
  s;
  this.env = this.stack[0].env;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/input/tex/Stack
// args: t
// locals: this
function {
  this = this;
  this._env = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/Stack
// locals: this
function {
  this = this;
  return this._env;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=920B file=math_jax/src/mathjax_src/input/tex/Stack
// args: s
// locals: e, s#1, n, i, this
// closure: t
function {
  this = this;
  s = ...0;
  let e;
  const _it1 = s;
  goto L_38e;
  e = <value(_it1)>;
  let i;
  let n;
  let s#1;
  if ((!e)) goto L_38e;
  if (!(t.default.isNode(e))) goto L_c0;
  goto L_c3;
  // [栈深重同步 4 -> 3]
  s#1 = e;
  s#1.global = this.global;
  if (((undefined === undefined))) goto L_105;
  const _it2 = undefined;
  <done(_it2)>;
  n = <value(_it2)>;
  <done(_it2)>;
  i = <value(_it2)>;
  goto L_185;
  <value(_it2)>;
  if (!(this.stack.length)) goto L_17c;
  goto L_f8;
  // [栈深重同步 4 -> 3]
  goto L_f8;
  // [栈深重同步 4 -> 3]
  if (!(i)) goto L_38d;
  if (!(n)) goto L_1ee;
  this.Pop();
  // append([], 0, n)
  n;
  goto L_38d;
  // [栈深重同步 4 -> 3]
  if ((s#1.isKind("null"))) goto L_268;
  this.stack.push(s#1);
  if (!(s#1.env)) goto L_35d;
  if (!(s#1.copyEnv)) goto L_32a;
  Object.assign(s#1.env, this.env);
  this.env = s#1.env;
  goto L_38d;
  // [栈深重同步 4 -> 3]
  s#1.env = this.env;
  this.env;
  if (!(<done(_it2)>)) goto L_f;
  <value(_it2)>;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=250B file=math_jax/src/mathjax_src/input/tex/Stack
// locals: t, this
function {
  this = this;
  let t;
  t = this.stack.pop();
  if ((t.isOpen)) goto L_7d;
  // [栈深重同步 2 -> 1]
  t;
  if (!(this.stack.length)) goto L_ec;
  goto L_ed;
  // [栈深重同步 2 -> 1]
  this.env = {};
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=128B file=math_jax/src/mathjax_src/input/tex/Stack
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_d;
  t;
  t = 1;
  t#1 = 1;
  if (!((this.stack.length < t))) goto L_37;
  return null;
  return this.stack[(this.stack.length - t)];
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=123B file=math_jax/src/mathjax_src/input/tex/Stack
// args: t
// locals: s, this
function {
  this = this;
  let s;
  s = this.Top();
  if (!(t)) goto L_53;
  return s.First;
  return s.Pop();
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/input/tex/Stack
// locals: this
function {
  this = this;
  return this.stack.length;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=90B file=math_jax/src/mathjax_src/input/tex/Stack
// locals: this
function {
  this = this;
  return (("stack[
  " + this.stack.join("
  ")) + "
]");
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=9 bc=171B file=math_jax/src/mathjax_src/input/tex/Stack
// args: require, module, exports
// locals: t, Stack, <class_fields_init>, Stack#1
function {
  let Stack#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  t = require("./NodeUtil");
  let Stack;
  let <class_fields_init>;
  class Stack extends undefined { ... }
  <proto:Stack>.env = function <atom:0>;
  <proto:Stack>.env = function <atom:0>;
  <proto:Stack>.Push = function <atom:0>;
  <proto:Stack>.Pop = function <atom:0>;
  <proto:Stack>.Top = function <atom:0>;
  <proto:Stack>.Prev = function <atom:0>;
  <proto:Stack>.height = function <atom:0>;
  <proto:Stack>.toString = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Stack>;
  Stack = function <atom:0>;
  // close_loc <class_fields_init>
  Stack#1 = function <atom:0>;
  exports.default = Stack#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/Stack
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
