// fn <atom:0>  args=2 vars=8 closure=0 cpool=0 bc=303B file=math_jax/src/mathjax_src/output/common/Wrappers/semantics
// args: e, t
// locals: e#1, t#1, t#2, i, o, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_14;
  t;
  t = false;
  t#1 = false;
  if (!(this.childNodes.length)) goto L_12e;
  let o;
  let i;
  let t#2;
  if (((undefined === undefined))) goto L_ba;
  t#2 = <to_object>(undefined).w;
  i = <to_object>(undefined).h;
  o = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_107;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_4c;
  // [栈深重同步 1 -> 0]
  e.w = t#2;
  e.h = i;
  e.d = o;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=212B file=math_jax/src/mathjax_src/output/common/Wrappers/semantics
// locals: this
function {
  this = this;
  if (!(this.node.isEmbellished)) goto L_8e;
  return this.coreMO().embellishedBreakCount;
  return this.childNodes[0].breakCount;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/semantics
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

// fn e  args=1 vars=3 closure=0 cpool=3 bc=39B file=math_jax/src/mathjax_src/output/common/Wrappers/semantics
// args: e
// locals: CommonSemanticsMixin, <class_fields_init>
function {
  let CommonSemanticsMixin;
  let <class_fields_init>;
  class CommonSemanticsMixin extends e { ... }
  <proto:CommonSemanticsMixin>.computeBBox = function <atom:0>;
  <proto:CommonSemanticsMixin>.breakCount = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonSemanticsMixin>;
  CommonSemanticsMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/output/common/Wrappers/semantics
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonSemanticsMixin = undefined;
  exports.CommonSemanticsMixin = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/semantics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
