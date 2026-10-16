// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/output/common/Wrappers/mtd
function {
  return false;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=28B file=math_jax/src/mathjax_src/output/common/Wrappers/mtd
// locals: this
function {
  this = this;
  this.bboxComputed = false;
  this.lineBBox = [];
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=395B file=math_jax/src/mathjax_src/output/common/Wrappers/mtd
// args: t
// locals: e, i, n, this
function {
  this = this;
  let n;
  let i;
  let e;
  e = this.parent.parent;
  i = this.parent;
  if (!(i.labeled)) goto L_e1;
  goto L_e2;
  // [栈深重同步 2 -> 1]
  n = (this.node.childPosition() - 0);
  if (!(("number" == typeof e.cWidths[n]))) goto L_13e;
  return e.cWidths[n];
  return e.getTableData().W[n];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=110B file=math_jax/src/mathjax_src/output/common/Wrappers/mtd
// args: t
// locals: this
function {
  this = this;
  return this.node.attributes.get("columnalign");   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/mtd
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

// fn t  args=1 vars=3 closure=0 cpool=5 bc=55B file=math_jax/src/mathjax_src/output/common/Wrappers/mtd
// args: t
// locals: CommonMtdMixin, <class_fields_init>
function {
  let CommonMtdMixin;
  let <class_fields_init>;
  class CommonMtdMixin extends t { ... }
  <proto:CommonMtdMixin>.fixesPWidth = function <atom:0>;
  <proto:CommonMtdMixin>.invalidateBBox = function <atom:0>;
  <proto:CommonMtdMixin>.getWrapWidth = function <atom:0>;
  <proto:CommonMtdMixin>.getChildAlign = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMtdMixin>;
  CommonMtdMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/output/common/Wrappers/mtd
// args: require, module, exports
// locals: t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMtdMixin = undefined;
  exports.CommonMtdMixin = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mtd
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
