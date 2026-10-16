// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=283B file=math_jax/src/mathjax_src/output/common/Wrappers/mfenced
// locals: t, this
function {
  this = this;
  let t;
  t = this.node.factory.create("inferredMrow");
  t.inheritAttributesFrom(this.node);
  this.mrow = this.wrap(t);
  this.mrow.parent = this;
  return;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=674B file=math_jax/src/mathjax_src/output/common/Wrappers/mfenced
// locals: t, e, o, s, this
function {
  this = this;
  let o;
  let e;
  let t;
  t = this.node;
  e = this.mrow;
  this.addMo(t.open);
  if (!(this.childNodes.length)) goto L_134;
  e.childNodes.push(this.childNodes[0]);
  o = 0;
  let s;
  for (const s of this.childNodes.slice(1)) {
    o = <o_new>;
    this.addMo(t.separators[(o++)]);
    e.childNodes.push(s);
  }
  this.addMo(t.close);
  e.stretchChildren();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=203B file=math_jax/src/mathjax_src/output/common/Wrappers/mfenced
// args: t
// locals: e, this
function {
  this = this;
  let e;
  if (!(!t)) goto L_a;
  return;
  e = this.wrap(t);
  this.mrow.childNodes.push(e);
  e.parent = this.mrow;
  return;
}

// fn <atom:0>  args=3 vars=9 closure=1 cpool=0 bc=159B file=math_jax/src/mathjax_src/output/common/Wrappers/mfenced
// args: t, e, o
// locals: t#1, e#1, o#1, this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let o#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((o === undefined))) goto L_20;
  o;
  o = null;
  o#1 = null;
  this = new new.target(t, e, o);
  if (!(<class_fields_init>)) goto L_3c;
  <class_fields_init>.call(this);
  new new.target(t, e, o);
  this.mrow = null;
  this.createMrow();
  this.addMrowChildren();
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=167B file=math_jax/src/mathjax_src/output/common/Wrappers/mfenced
// args: t, e
// locals: t#1, e#1, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = false;
  e#1 = false;
  t.updateFrom(this.mrow.getOuterBBox());
  this.setChildPWidths(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/output/common/Wrappers/mfenced
// locals: this
function {
  this = this;
  return this.mrow.breakCount;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/output/common/Wrappers/mfenced
// args: t
// locals: this
function {
  this = this;
  return this.mrow.getLineBBox(t);   // tail call
}

// fn t  args=1 vars=3 closure=0 cpool=7 bc=71B file=math_jax/src/mathjax_src/output/common/Wrappers/mfenced
// args: t
// locals: CommonMfencedMixin, <class_fields_init>
function {
  let CommonMfencedMixin;
  let <class_fields_init>;
  class CommonMfencedMixin extends t { ... }
  <proto:CommonMfencedMixin>.createMrow = function <atom:0>;
  <proto:CommonMfencedMixin>.addMrowChildren = function <atom:0>;
  <proto:CommonMfencedMixin>.addMo = function <atom:0>;
  <proto:CommonMfencedMixin>.computeBBox = function <atom:0>;
  <proto:CommonMfencedMixin>.breakCount = function <atom:0>;
  <proto:CommonMfencedMixin>.computeLineBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMfencedMixin>;
  CommonMfencedMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=math_jax/src/mathjax_src/output/common/Wrappers/mfenced
// args: require, module, exports
// locals: t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonMfencedMixin = undefined;
  exports.CommonMfencedMixin = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mfenced
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
