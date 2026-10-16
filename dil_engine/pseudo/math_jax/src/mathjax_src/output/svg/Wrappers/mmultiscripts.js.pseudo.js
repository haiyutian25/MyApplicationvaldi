// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/svg/Wrappers/mmultiscripts
// args: t, s
function {
  return 0;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/output/svg/Wrappers/mmultiscripts
// args: t, s
function {
  return ((s - t) / 2);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mmultiscripts
// args: t, s
function {
  return (s - t);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/svg/Wrappers/mmultiscripts
// args: t, s
function {
  return 0;
}

// fn r  args=1 vars=1 closure=0 cpool=4 bc=46B file=math_jax/src/mathjax_src/output/svg/Wrappers/mmultiscripts
// args: t
function {
  if (({left: function <atom:0>, center: function <atom:0>, right: function <atom:0>}[t])) goto L_2d;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=11 closure=1 cpool=0 bc=1163B file=math_jax/src/mathjax_src/output/svg/Wrappers/mmultiscripts
// args: t
// locals: s, i, r, o, p, c, n, l, u, this
// closure: e
function {
  this = this;
  let u;
  let l;
  let n;
  let c;
  let p;
  let o;
  let r;
  let i;
  let s;
  if (!(this.toEmbellishedSVG(t))) goto L_48;
  return;
  s = this.standardSvgNodes(t);
  i = this.scriptData;
  if ((this.node.getProperty("scriptalign"))) goto L_e9;
  r = "right left";
  if (((undefined === undefined))) goto L_fc;
  const _it1 = undefined;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  p = <value(_it1)>;
  goto L_131;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_ef;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_144;
  const _it2 = undefined;
  <done(_it2)>;
  c = <value(_it2)>;
  <done(_it2)>;
  n = <value(_it2)>;
  goto L_16d;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_136;
  // [栈深重同步 1 -> 0]
  l = 0;
  if (!(i.numPrescripts)) goto L_29f;
  l = this.addScripts(this.dom[0], this.font.params.scriptspace, c, n, this.firstPrescript, i.numPrescripts, o);
  this.addScripts(this.dom[0], this.font.params.scriptspace, c, n, this.firstPrescript, i.numPrescripts, o);
  u = this.baseChild;
  u.toSVG(s);
  u.place(l, 0);
  if (!(this.breakCount)) goto L_348;
  l = 0;
  0;
  l = (l + u.getLineBBox(u.breakCount).w);
  (l + u.getLineBBox(u.breakCount).w);
  if (!(i.numScripts)) goto L_48a;
  this.addScripts(this.dom[(this.dom.length - 1)], l, c, n, 1, i.numScripts, p);
  return;
}

// fn <atom:0>  args=7 vars=21 closure=1 cpool=0 bc=1097B file=math_jax/src/mathjax_src/output/svg/Wrappers/mmultiscripts
// args: t, s, i, e, o, p, c
// locals: n, l, u, a, d, h, t#1, s#1, i#1, e#1, r, p#1, c#1, this
// closure: r
function {
  this = this;
  let h;
  let d;
  let a;
  let u;
  let l;
  let n;
  n = this.adaptor;
  l = r(c);
  u = n.append(t, this.svg("g"));
  a = n.append(t, this.svg("g"));
  this.place(s, i, u);
  this.place(s, e, a);
  d = (o + (2 * p));
  h = 0;
  if (!((o < d))) goto L_443;
  let c#1;
  let p#1;
  let r;
  let e#1;
  let i#1;
  let s#1;
  let t#1;
  if (((undefined === undefined))) goto L_181;
  const _it1 = undefined;
  <done(_it1)>;
  t#1 = <value(_it1)>;
  <done(_it1)>;
  s#1 = <value(_it1)>;
  goto L_1dd;
  // [栈深重同步 4 -> 1]
  _it1;
  o = <o_new>;
  o = <o_new>;
  goto L_173;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_1f0;
  const _it2 = undefined;
  <done(_it2)>;
  i#1 = <value(_it2)>;
  <done(_it2)>;
  e#1 = <value(_it2)>;
  goto L_244;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_1e2;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_257;
  const _it3 = undefined;
  <done(_it3)>;
  r = <value(_it3)>;
  <done(_it3)>;
  p#1 = <value(_it3)>;
  goto L_2a5;
  // [栈深重同步 4 -> 1]
  _it3;
  goto L_249;
  // [栈深重同步 1 -> 0]
  c#1 = Math.max((i#1.w * r), (e#1.w * p#1));
  t#1.toSVG([a]);
  s#1.toSVG([u]);
  t#1.place((h + l((i#1.w * r), c#1)), 0);
  s#1.place((h + l((e#1.w * p#1), c#1)), 0);
  h = (h + c#1);
  (h + c#1);
  goto L_14d;
  return (s + h);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mmultiscripts
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

// fn <atom:0>  args=0 vars=4 closure=5 cpool=3 bc=231B file=math_jax/src/mathjax_src/output/svg/Wrappers/mmultiscripts
// locals: o, p, SvgMmultiscripts, <class_fields_init>
// closure: e, r, t, s, i
function {
  let p;
  p = t.CommonMmultiscriptsMixin(s.SvgMsubsup);
  let SvgMmultiscripts;
  let <class_fields_init>;
  class SvgMmultiscripts extends p { ... }
  <proto:SvgMmultiscripts>.toSVG = function <atom:0>;
  <proto:SvgMmultiscripts>.addScripts = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMmultiscripts>;
  SvgMmultiscripts = function <atom:0>;
  // close_loc <class_fields_init>
  o = function <atom:0>;
  function <atom:0>.kind = i.MmlMmultiscripts.prototype.kind;
  return o;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=152B file=math_jax/src/mathjax_src/output/svg/Wrappers/mmultiscripts
// args: require, module, exports
// locals: t, s, i, e, r
function {
  r = function r;
  let e;
  let i;
  let s;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AlignX = undefined;
  exports.SvgMmultiscripts = undefined;
  t = require("../../common/Wrappers/mmultiscripts");
  s = require("./msubsup");
  i = require("../../../core/MmlTree/MmlNodes/mmultiscripts");
  e = require("../../../util/string");
  exports.AlignX = r;
  exports.SvgMmultiscripts = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mmultiscripts
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
