// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=27B file=math_jax/src/mathjax_src/util/BitField
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.bits = 0;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=327B file=math_jax/src/mathjax_src/util/BitField
// args: t
// locals: e, this
// closure: BitField
function {
  this = this;
  t = ...0;
  let e;
  for (const e of t) {
    if (!(this.has(e))) goto L_4c;
    throw new Error(("Bit already allocated for " + e));
    if (!((this.next === BitField.MAXBIT))) goto L_a4;
    throw new Error("Maximum number of bits already allocated");
    this.names.set(e, this.next);
    this.next = (this.next << 1);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/util/BitField
// args: t
// locals: this
function {
  this = this;
  return this.names.has(t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=85B file=math_jax/src/mathjax_src/util/BitField
// args: t
// locals: this
function {
  this = this;
  this.bits = (this.bits | this.getBit(t));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=86B file=math_jax/src/mathjax_src/util/BitField
// args: t
// locals: this
function {
  this = this;
  this.bits = (this.bits & ~this.getBit(t));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=math_jax/src/mathjax_src/util/BitField
// args: t
// locals: this
function {
  this = this;
  return !!(this.bits & this.getBit(t));
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/util/BitField
// locals: this
function {
  this = this;
  this.bits = 0;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=137B file=math_jax/src/mathjax_src/util/BitField
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.constructor.names.get(t);
  if (!(!e)) goto L_85;
  throw new Error(("Unknown bit-field name: " + t));
  return e;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/util/BitField
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

// fn t  args=1 vars=3 closure=1 cpool=1 bc=80B file=math_jax/src/mathjax_src/util/BitField
// args: t
// locals: e, <class_fields_init>
// closure: BitField
function {
  t = ...0;
  let e;
  let <class_fields_init>;
  class e extends BitField { ... }
  <class_fields_init> = undefined;
  <proto:e>;
  // close_loc <class_fields_init>
  e = function <atom:0>;
  // append([], 0, t)
  t;
  e.allocate.apply(e, []);
  return e;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=9 bc=245B file=math_jax/src/mathjax_src/util/BitField
// args: require, module, exports
// locals: BitField, <class_fields_init>, BitField#1, t
function {
  t = function t;
  let BitField#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BitField = undefined;
  exports.BitFieldClass = undefined;
  let BitField;
  let <class_fields_init>;
  class BitField extends undefined { ... }
  function <atom:0>.allocate = function <atom:0>;
  function <atom:0>.has = function <atom:0>;
  <proto:BitField>.set = function <atom:0>;
  <proto:BitField>.clear = function <atom:0>;
  <proto:BitField>.isSet = function <atom:0>;
  <proto:BitField>.reset = function <atom:0>;
  <proto:BitField>.getBit = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BitField>;
  BitField = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc BitField
  BitField#1 = function <atom:0>;
  exports.BitField = BitField#1;
  BitField#1.MAXBIT = (1 << 31);
  BitField#1.next = 1;
  BitField#1.names = new Map();
  exports.BitFieldClass = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/BitField
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
