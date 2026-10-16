// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=math_jax/src/mathjax_src/output/svg/Wrappers/mrow
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
  this.linebreakCount = 0;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=369B file=math_jax/src/mathjax_src/output/svg/Wrappers/mrow
// args: e
// locals: t, this
function {
  this = this;
  let t;
  this.getBBox();
  if (!(this.isStack)) goto L_53;
  goto L_75;
  // [栈深重同步 2 -> 1]
  this.linebreakCount = this.breakCount;
  t = this.breakCount;
  if ((t)) goto L_cb;
  if (!(!this.node.isInferred)) goto L_f5;
  goto L_11b;
  // [栈深重同步 1 -> 0]
  e = this.getSvgNodes(e);
  this.addChildren(e);
  if (!(t)) goto L_170;
  this.placeLines(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=303B file=math_jax/src/mathjax_src/output/svg/Wrappers/mrow
// args: e
// locals: t, this
function {
  this = this;
  if (!(this.dh)) goto L_122;
  let t;
  t = this.svg("g", {transform: "translate(0 ".concat(this.fixed(this.dh), ")")});
  e = [this.adaptor.append(e[0], t)];
  this.dom = e;
  return e;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=2 bc=573B file=math_jax/src/mathjax_src/output/svg/Wrappers/mrow
// args: e
// locals: t, o, r, s, n, this
function {
  this = this;
  let r;
  let o;
  let t;
  t = this.lineBBox;
  o = this.jax.math.display;
  r = this.dh;
  let s;
  for (const s of e.keys()) {
    let n;
    n = t[s];
    if ((n.L)) goto L_13f;
    this.place(0, r, e[s]);
    if (!(o)) goto L_1c8;
    goto L_1c9;
    // [栈深重同步 6 -> 5]
    if (!((t[(s + 1)] == null))) goto L_203;
    t[(s + 1)];
    goto L_224;
    if ((undefined.h)) goto L_229;
    r = (r - ((Math.max(0.25, n.d) + 0) + Math.max(0.75, 0)));
    (r - ((Math.max(0.25, n.d) + 0) + Math.max(0.75, 0)));
  }
  return;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=686B file=math_jax/src/mathjax_src/output/svg/Wrappers/mrow
// args: e
// locals: t, o, r, s, n, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let s;
  let r;
  let o;
  let t;
  t = this.linebreakCount;
  if (!(!t)) goto L_4c;
  return super["createSvgNodes"](e);   // tail call
  o = this.adaptor;
  if (!(this.node.isInferred)) goto L_c0;
  goto L_10a;
  // [栈深重同步 1 -> 0]
  r = {data-mml-node: this.node.kind};
  this.dom = [o.append(e[0], this.svg("g", r))];
  this.dom = [o.append(this.handleHref(e)[0], this.dom[0])];
  s = Array(t);
  let n;
  n = 0;
  if (!((n <= t))) goto L_2aa;
  s[n] = o.append(this.dom[0], this.svg("g", {data-mjx-linebox: true, data-mjx-lineno: n}));
  n = <n_new>;
  (n++);
  goto L_204;
  return s;
}

// fn <atom:0>  args=1 vars=11 closure=0 cpool=0 bc=858B file=math_jax/src/mathjax_src/output/svg/Wrappers/mrow
// args: e
// locals: t, o, r, s, e#1, o#1, s#1, n, e#2, this
function {
  this = this;
  let o;
  let t;
  t = 0;
  o = 0;
  let r;
  for (const r of this.childNodes) {
    let s;
    s = r.breakCount;
    r.toSVG(e.slice(o, ((o + s) + 1)));
    if (!(r.dom)) goto L_344;
    let e#1;
    e#1 = 0;
    let o#1;
    for (const o#1 of r.dom) {
      if (!(o#1)) goto L_280;
      let n;
      let s#1;
      if (!(e#1)) goto L_12b;
      goto L_14f;
      // [栈深重同步 4 -> 3]
      s#1 = r.dx;
      e#1 = <e#1_new>;
      n = r.getLineBBox((e#1++));
      t = (t + ((n.L + s#1) * n.rscale));
      (t + ((n.L + s#1) * n.rscale));
      this.place(t, 0, o#1);
      t = (t + (((n.w + n.R) - s#1) * n.rscale));
      (t + (((n.w + n.R) - s#1) * n.rscale));
      if (!(s)) goto L_28c;
      t = 0;
      0;
      // [栈深重同步 3 -> 6]
    }
    if (!(s)) goto L_344;
    let e#2;
    e#2 = r.getLineBBox(s);
    t = (t + ((e#2.w + e#2.R) * e#2.rscale));
    (t + ((e#2.w + e#2.R) * e#2.rscale));
    o = (o + s);
    (o + s);
  }
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=6 bc=255B file=math_jax/src/mathjax_src/output/svg/Wrappers/mrow
// locals: r, s, SvgMrow, <class_fields_init>
// closure: t, e, o
function {
  let s;
  s = t.CommonMrowMixin(e.SvgWrapper);
  let SvgMrow;
  let <class_fields_init>;
  class SvgMrow extends s { ... }
  <proto:SvgMrow>.toSVG = function <atom:0>;
  <proto:SvgMrow>.getSvgNodes = function <atom:0>;
  <proto:SvgMrow>.placeLines = function <atom:0>;
  <proto:SvgMrow>.createSvgNodes = function <atom:0>;
  <proto:SvgMrow>.addChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMrow>;
  SvgMrow = function <atom:0>;
  // close_loc <class_fields_init>
  r = function <atom:0>;
  function <atom:0>.kind = o.MmlMrow.prototype.kind;
  return r;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mrow
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=213B file=math_jax/src/mathjax_src/output/svg/Wrappers/mrow
// locals: e, r, SvgInferredMrowNTD, <class_fields_init>
// closure: t, exports, o
function {
  let r;
  r = t.CommonInferredMrowMixin(exports.SvgMrow);
  let SvgInferredMrowNTD;
  let <class_fields_init>;
  class SvgInferredMrowNTD extends r { ... }
  <class_fields_init> = undefined;
  <proto:SvgInferredMrowNTD>;
  SvgInferredMrowNTD = function <atom:0>;
  // close_loc <class_fields_init>
  e = function <atom:0>;
  function <atom:0>.kind = o.MmlInferredMrow.prototype.kind;
  return e;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=138B file=math_jax/src/mathjax_src/output/svg/Wrappers/mrow
// args: require, module, exports
// locals: e, t, o
function {
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMrow = undefined;
  exports.SvgInferredMrow = undefined;
  e = require("../Wrapper");
  t = require("../../common/Wrappers/mrow");
  o = require("../../../core/MmlTree/MmlNodes/mrow");
  exports.SvgMrow = function <atom:0>();
  exports.SvgInferredMrow = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mrow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
