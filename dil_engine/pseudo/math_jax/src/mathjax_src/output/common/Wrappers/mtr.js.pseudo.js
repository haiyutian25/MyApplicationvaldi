// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// locals: this
function {
  this = this;
  return this.childNodes.length;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
function {
  return false;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// locals: this
function {
  this = this;
  return this.childNodes;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// args: e
// locals: this
function {
  this = this;
  return this.childNodes[e];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// args: e
function {
  return e.getBBox();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=74B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// locals: this
function {
  this = this;
  return this.childNodes.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// args: e
// closure: s
function {
  return (e * s);
}

// fn <atom:0>  args=1 vars=19 closure=1 cpool=1 bc=1091B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// args: t
// locals: t#1, s, o, n, t#2, i, l, s#1, n#1, r, t#3, o#1, i#1, e, t#4, e#1, s#2, this
// closure: e
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = null;
  t#1 = null;
  let l;
  let i;
  let o;
  let s;
  s = [];
  if (!(this.labeled)) goto L_8e;
  goto L_b1;
  // [栈深重同步 1 -> 0]
  o = this.childNodes;
  let n;
  for (const n of o) {
    let t#2;
    t#2 = n.childNodes[0];
    if (!(t#2.canStretch(e.DIRECTION.Vertical))) goto L_182;
    s.push(t#2);
  }
  i = s.length;
  l = this.childNodes.length;
  if (!(i)) goto L_385;
  if (!((l > 1))) goto L_385;
  if (!(!t)) goto L_385;
  let r;
  let n#1;
  let s#1;
  s#1 = 0;
  n#1 = 0;
  if (!((i > 1))) goto L_1f0;
  r = (i === l);
  let t#3;
  for (const t#3 of o) {
    let i#1;
    let o#1;
    o#1 = t#3.childNodes[0];
    i#1 = (o#1.stretch.dir === e.DIRECTION.None);
    if ((r)) goto L_2c3;
    if (!(i#1)) continue;
    let t#4;
    let e;
    if (((undefined === undefined))) goto L_31f;
    e = <to_object>(undefined).h;
    t#4 = <to_object>(undefined).d;
    <to_object>(undefined);
    goto L_34c;
    // [栈深重同步 3 -> 4]
    <?>;
    goto L_2d3;
    // [栈深重同步 4 -> 3]
    if (!((e > s#1))) goto L_35e;
    s#1 = e;
    e;
    if (!((t#4 > n#1))) goto L_371;
    n#1 = t#4;
    t#4;
  }
  t = [s#1, n#1];
  if (!(t)) goto L_442;
  let e#1;
  for (const e#1 of s) {
    let s#2;
    s#2 = e#1.coreRScale();
    e#1.coreMO().getStretchedVariant(t.map(function <atom:0>));
    // close_loc s#2
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
function {
  return false;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
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

// fn t  args=1 vars=3 closure=1 cpool=8 bc=79B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// args: t
// locals: CommonMtrMixin, <class_fields_init>
// closure: e
function {
  let CommonMtrMixin;
  let <class_fields_init>;
  class CommonMtrMixin extends t { ... }
  <proto:CommonMtrMixin>.numCells = function <atom:0>;
  <proto:CommonMtrMixin>.labeled = function <atom:0>;
  <proto:CommonMtrMixin>.tableCells = function <atom:0>;
  <proto:CommonMtrMixin>.getChild = function <atom:0>;
  <proto:CommonMtrMixin>.getChildBBoxes = function <atom:0>;
  <proto:CommonMtrMixin>.stretchChildren = function <atom:0>;
  <proto:CommonMtrMixin>.fixesPWidth = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMtrMixin>;
  CommonMtrMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// locals: this
function {
  this = this;
  return Math.max(0, (this.childNodes.length - 1));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
function {
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// locals: this
function {
  this = this;
  return this.childNodes.slice(1);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=41B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// args: e
// locals: this
function {
  this = this;
  return this.childNodes[(e + 1)];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// args: e
function {
  return e.getBBox();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=111B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// locals: this
function {
  this = this;
  return this.childNodes.slice(1).map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
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

// fn s  args=1 vars=3 closure=0 cpool=6 bc=63B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// args: e
// locals: CommonMlabeledtrMixin, <class_fields_init>
function {
  let CommonMlabeledtrMixin;
  let <class_fields_init>;
  class CommonMlabeledtrMixin extends e { ... }
  <proto:CommonMlabeledtrMixin>.numCells = function <atom:0>;
  <proto:CommonMlabeledtrMixin>.labeled = function <atom:0>;
  <proto:CommonMlabeledtrMixin>.tableCells = function <atom:0>;
  <proto:CommonMlabeledtrMixin>.getChild = function <atom:0>;
  <proto:CommonMlabeledtrMixin>.getChildBBoxes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMlabeledtrMixin>;
  CommonMlabeledtrMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=118B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// args: require, module, exports
// locals: e, t, s
function {
  t = function t;
  s = function s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMtrMixin = undefined;
  exports.CommonMlabeledtrMixin = undefined;
  e = require("../FontData");
  exports.CommonMtrMixin = t;
  exports.CommonMlabeledtrMixin = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mtr
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
