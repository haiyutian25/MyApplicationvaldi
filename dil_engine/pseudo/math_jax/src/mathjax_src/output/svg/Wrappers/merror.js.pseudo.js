// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=910B file=math_jax/src/mathjax_src/output/svg/Wrappers/merror
// args: e
// locals: t, r, o, d, s, this
function {
  this = this;
  let s;
  let d;
  let o;
  let r;
  let t;
  t = this.standardSvgNodes(e);
  if (((undefined === undefined))) goto L_ac;
  r = <to_object>(undefined).h;
  o = <to_object>(undefined).d;
  d = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_d6;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_3f;
  // [栈深重同步 1 -> 0]
  this.adaptor.append(this.dom[0], this.svg("rect", {data-background: true, width: this.fixed(d), height: this.fixed((r + o)), y: this.fixed(-o)}));
  s = this.node.attributes.get("title");
  if (!(s)) goto L_363;
  this.adaptor.append(this.dom[0], this.svg("title", {}, [this.adaptor.text(s)]));
  this.addChildren(t);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/merror
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

// fn <atom:0>  args=0 vars=3 closure=2 cpool=2 bc=242B file=math_jax/src/mathjax_src/output/svg/Wrappers/merror
// locals: r, SvgMerror, <class_fields_init>
// closure: e, t
function {
  let SvgMerror;
  let <class_fields_init>;
  class SvgMerror extends e.SvgWrapper { ... }
  <proto:SvgMerror>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMerror>;
  SvgMerror = function <atom:0>;
  // close_loc <class_fields_init>
  r = function <atom:0>;
  function <atom:0>.kind = t.MmlMerror.prototype.kind;
  r.styles = {g[data-mml-node="merror"] > g: {fill: "red", stroke: "red"}, g[data-mml-node="merror"] > rect[data-background]: {fill: "yellow", stroke: "none"}};
  return r;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=103B file=math_jax/src/mathjax_src/output/svg/Wrappers/merror
// args: require, module, exports
// locals: e, t
function {
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMerror = undefined;
  e = require("../Wrapper");
  t = require("../../../core/MmlTree/MmlNodes/merror");
  exports.SvgMerror = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/merror
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
