// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
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
  this._core = null;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
function {
  return "mrow";
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=98B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.childNodes) {
    if (!(!e.isSpacelike)) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=199B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
// locals: e, s, t, this
function {
  this = this;
  let s;
  let e;
  e = false;
  s = 0;
  let t;
  for (const t of this.childNodes) {
    if (!(t)) goto L_b2;
    if (!(t.isEmbellished)) goto L_84;
    if (!(e)) goto L_6e;
    return false;
    // [栈深重同步 0 -> 3]
    e = true;
    true;
    this._core = s;
    goto L_b2;
    if (!(!t.isSpacelike)) goto L_b2;
    return false;
    // [栈深重同步 0 -> 3]
    s = <s_new>;
    (s++);
  }
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=148B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
// locals: this
function {
  this = this;
  if (!(this.isEmbellished)) goto L_92;
  if (!((null != this._core))) goto L_92;
  return this.childNodes[this._core];
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=187B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
// locals: this
function {
  this = this;
  if (!(this.isEmbellished)) goto L_b9;
  if (!((null != this._core))) goto L_b9;
  return this.childNodes[this._core].coreMO();
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=114B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
// locals: e, s, this
function {
  this = this;
  let e;
  e = 0;
  let s;
  for (const s of this.childNodes) {
    if (!(s)) goto L_67;
    if (!(!s.isSpacelike)) goto L_67;
    e = <e_new>;
    (e++);
  }
  return e;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=103B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.childNodes) {
    if (!(e)) continue;
    if (!(!e.isSpacelike)) continue;
    return e;
    // [栈深重同步 0 -> 3]
  }
  return null;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=145B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
// locals: e, s, this
function {
  this = this;
  let e;
  e = this.childNodes.length;
  e = (e --);
  if (!(((e --) >= 0))) goto L_8f;
  let s;
  s = this.childNodes[e];
  if (!(s)) goto L_29;
  if (!(!s.isSpacelike)) goto L_29;
  return s;
  return null;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=555B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
// args: s
// locals: e, e#1, this
// closure: e
function {
  this = this;
  if (((null != this.getProperty("open")))) goto L_5e;
  if (!((null != this.getProperty("close")))) goto L_15f;
  this.getPrevClass(s);
  s = null;
  let e;
  for (const e of this.childNodes) {
    s = e.setTeXclass(s);
  }
  if (!((null == this.texClass))) goto L_15c;
  this.texClass = e.TEXCLASS.INNER;
  e.TEXCLASS.INNER;
  return this;
  let e#1;
  for (const e#1 of this.childNodes) {
    s = e#1.setTeXclass(s);
  }
  if (!(this.childNodes[0])) goto L_228;
  this.updateTeXclass(this.childNodes[0]);
  return s;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
function {
  return "inferredMrow";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
function {
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=90B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
// locals: this
function {
  this = this;
  return (("[" + this.childNodes.join(",")) + "]");
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
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

// fn <atom:0>  args=3 vars=10 closure=0 cpool=15 bc=447B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
// args: require, module, exports
// locals: e, MmlMrow, <class_fields_init>, MmlMrow#1, MmlInferredMrow, <class_fields_init>#1, MmlInferredMrow#1
function {
  let MmlInferredMrow#1;
  let MmlMrow#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMrow = undefined;
  exports.MmlInferredMrow = undefined;
  e = require("../MmlNode");
  let MmlMrow;
  let <class_fields_init>;
  class MmlMrow extends e.AbstractMmlNode { ... }
  <proto:MmlMrow>.kind = function <atom:0>;
  <proto:MmlMrow>.isSpacelike = function <atom:0>;
  <proto:MmlMrow>.isEmbellished = function <atom:0>;
  <proto:MmlMrow>.core = function <atom:0>;
  <proto:MmlMrow>.coreMO = function <atom:0>;
  <proto:MmlMrow>.nonSpaceLength = function <atom:0>;
  <proto:MmlMrow>.firstNonSpace = function <atom:0>;
  <proto:MmlMrow>.lastNonSpace = function <atom:0>;
  <proto:MmlMrow>.setTeXclass = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMrow>;
  MmlMrow = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMrow#1 = function <atom:0>;
  exports.MmlMrow = MmlMrow#1;
  null;
  e.AbstractMmlNode.defaults;
  MmlMrow#1.defaults = {};
  let MmlInferredMrow;
  let <class_fields_init>#1;
  class MmlInferredMrow extends MmlMrow#1 { ... }
  <proto:MmlInferredMrow>.kind = function <atom:0>;
  <proto:MmlInferredMrow>.isInferred = function <atom:0>;
  <proto:MmlInferredMrow>.notParent = function <atom:0>;
  <proto:MmlInferredMrow>.toString = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:MmlInferredMrow>;
  MmlInferredMrow = function <atom:0>;
  // close_loc <class_fields_init>#1
  MmlInferredMrow#1 = function <atom:0>;
  exports.MmlInferredMrow = MmlInferredMrow#1;
  MmlInferredMrow#1.defaults = MmlMrow#1.defaults;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mrow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
