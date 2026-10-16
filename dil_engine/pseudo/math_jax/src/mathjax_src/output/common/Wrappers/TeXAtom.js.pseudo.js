// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=301B file=math_jax/src/mathjax_src/output/common/Wrappers/TeXAtom
// args: o, e
// locals: o#1, e#1, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let e#1;
  let o#1;
  o#1 = o;
  if (!((e === undefined))) goto L_16;
  e;
  e = false;
  e#1 = false;
  super["computeBBox"].call(this, o, e);
  if (!(this.childNodes[0])) goto L_12c;
  if (!(this.childNodes[0].bbox.ic)) goto L_12c;
  o.ic = this.childNodes[0].bbox.ic;
  this.childNodes[0].bbox.ic;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/TeXAtom
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

// fn o  args=1 vars=3 closure=0 cpool=2 bc=31B file=math_jax/src/mathjax_src/output/common/Wrappers/TeXAtom
// args: o
// locals: CommonTeXAtomMixin, <class_fields_init>
function {
  let CommonTeXAtomMixin;
  let <class_fields_init>;
  class CommonTeXAtomMixin extends o { ... }
  <proto:CommonTeXAtomMixin>.computeBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonTeXAtomMixin>;
  CommonTeXAtomMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/output/common/Wrappers/TeXAtom
// args: require, module, exports
// locals: o
function {
  o = function o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonTeXAtomMixin = undefined;
  exports.CommonTeXAtomMixin = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/TeXAtom
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
