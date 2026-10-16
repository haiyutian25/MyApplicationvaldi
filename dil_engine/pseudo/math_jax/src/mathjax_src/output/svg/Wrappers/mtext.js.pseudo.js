// fn <atom:0>  args=1 vars=15 closure=0 cpool=4 bc=1755B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtext
// args: t
// locals: e, o, s, i, t#1, n, r, x, d, c, l, e#1, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let s;
  let o;
  let e;
  if (!(!this.breakCount)) goto L_47;
  super["toSVG"].call(this, t);
  return;
  e = this.standardSvgNodes(t);
  o = this.textNode.node;
  s = this.childNodes;
  let i;
  const _it1 = e.keys();
  goto L_6d1;
  i = <value(_it1)>;
  let l;
  let c;
  let d;
  let x;
  let r;
  let n;
  let t#1;
  t#1 = [e[i]];
  if (((undefined === undefined))) goto L_13b;
  const _it2 = undefined;
  <done(_it2)>;
  n = <value(_it2)>;
  <done(_it2)>;
  r = <value(_it2)>;
  goto L_170;
  <value(_it2)>;
  if ((this.breakPoints[(i - 1)])) goto L_12d;
  goto L_12d;
  // [栈深重同步 4 -> 3]
  if (((undefined === undefined))) goto L_183;
  const _it3 = undefined;
  <done(_it3)>;
  x = <value(_it3)>;
  <done(_it3)>;
  d = <value(_it3)>;
  goto L_1b9;
  <value(_it3)>;
  if ((this.breakPoints[i])) goto L_175;
  goto L_175;
  // [栈深重同步 4 -> 3]
  c = s[n].node.getText().split(new RegExp(" "));
  if (!((n === x))) goto L_308;
  o.setText(c.slice(r, d).join(" "));
  this.textNode.toSVG(t#1);
  goto L_6d1;
  o.setText(c.slice(r).join(" "));
  this.textNode.toSVG(t#1);
  l = this.textNode.getBBox().w;
  n = (n ++);
  if (!(((n ++) < x))) goto L_535;
  if (!((n < s.length))) goto L_535;
  let e#1;
  e#1 = s[n];
  e#1.toSVG(t#1);
  if (!(e#1.dom)) goto L_4e0;
  e#1.place(l, 0);
  l = (l + e#1.getBBox().w);
  (l + e#1.getBBox().w);
  goto L_438;
  if (!((n < s.length))) goto L_6d0;
  c = s[n].node.getText().split(new RegExp(" "));
  s[n].node.getText().split(new RegExp(" "));
  o.setText(c.slice(0, d).join(" "));
  this.textNode.toSVG(t#1);
  this.textNode.place(l, 0);
  if (!(<done(_it3)>)) goto L_106;
  <value(_it3)>;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtext
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=223B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtext
// locals: s, i, SvgMtext, <class_fields_init>
// closure: e, t, o
function {
  let i;
  i = e.CommonMtextMixin(t.SvgWrapper);
  let SvgMtext;
  let <class_fields_init>;
  class SvgMtext extends i { ... }
  <proto:SvgMtext>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMtext>;
  SvgMtext = function <atom:0>;
  // close_loc <class_fields_init>
  s = function <atom:0>;
  function <atom:0>.kind = o.MmlMtext.prototype.kind;
  return s;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=114B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtext
// args: require, module, exports
// locals: t, e, o
function {
  let o;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMtext = undefined;
  t = require("../Wrapper");
  e = require("../../common/Wrappers/mtext");
  o = require("../../../core/MmlTree/MmlNodes/mtext");
  exports.SvgMtext = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtext
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
