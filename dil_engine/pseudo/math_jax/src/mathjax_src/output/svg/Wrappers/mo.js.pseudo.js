// fn <atom:0>  args=1 vars=9 closure=1 cpool=4 bc=1601B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t
// locals: i, s, h, r, t#1, t#2, e, this
// closure: e
function {
  this = this;
  let r;
  let h;
  let s;
  let i;
  i = this.node.attributes;
  if (!(i.get("symmetric"))) goto L_111;
  s = (this.stretch.dir !== e.DIRECTION.Horizontal);
  h = (this.stretch.dir !== e.DIRECTION.None);
  if (!(h)) goto L_1f6;
  if (!((null === this.size))) goto L_1f6;
  this.getStretchedVariant([]);
  r = this.standardSvgNodes(t);
  if (!((r.length > 1))) goto L_2e3;
  if (!(("duplicate" !== this.breakStyle))) goto L_2e3;
  let t#1;
  if (!(("after" === this.breakStyle))) goto L_289;
  goto L_28a;
  // [栈深重同步 1 -> 0]
  t#1 = 0;
  this.adaptor.remove(r[t#1]);
  r[t#1] = null;
  if (!(h)) goto L_337;
  if (!((this.size < 0))) goto L_337;
  this.stretchSvg();
  return;
  let e;
  let t#2;
  if ((s)) goto L_370;
  if (!(i.get("largeop"))) goto L_3c0;
  goto L_3c2;
  // [栈深重同步 1 -> 0]
  t#2 = "0";
  if (!(this.node.getProperty("mathaccent"))) goto L_460;
  goto L_462;
  // [栈深重同步 1 -> 0]
  e = "0";
  if (!(("0" === t#2))) goto L_474;
  if ((("0" === e))) goto L_5a8;
  if (!(r[0])) goto L_511;
  this.adaptor.setAttribute(r[0], "transform", "translate(".concat(e, " ", t#2, ")"));
  if (!(r[1])) goto L_5a8;
  this.adaptor.setAttribute(r[1], "transform", "translate(".concat(e, " ", t#2, ")"));
  if (!(r[0])) goto L_5e0;
  this.addChildren([r[0]]);
  if (!(r[1])) goto L_63f;
  if ((this.multChar)) goto L_613;
  this.addChildren([r[1]]);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=389B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// locals: t, i, s, this
// closure: e
function {
  this = this;
  let s;
  let i;
  let t;
  t = this.stretch.stretch;
  i = this.getStretchVariants();
  s = this.getBBox();
  if (!((this.stretch.dir === e.DIRECTION.Vertical))) goto L_156;
  goto L_184;
  // [栈深重同步 1 -> 0]
  this.stretchHorizontal(t, i, s);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=362B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// locals: t, i, s, this
function {
  this = this;
  let i;
  let t;
  if ((this.stretch.c)) goto L_99;
  t = this.getText().codePointAt(0);
  i = [];
  let s;
  for (const s of this.stretch.stretch.keys()) {
    i[s] = this.font.getStretchVariant(t, s);
  }
  return i;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=0 bc=503B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i, s
// locals: e, h, r, d, a, s#1, o, this
function {
  this = this;
  let a;
  let d;
  let r;
  let h;
  let e;
  if (((undefined === undefined))) goto L_84;
  e = <to_object>(undefined).h;
  h = <to_object>(undefined).d;
  r = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_88;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  d = this.addTop(t[0], i[0], e, r);
  a = this.addBot(t[2], i[2], h, r);
  if (!((4 === t.length))) goto L_1ba;
  let o;
  let s#1;
  if (((undefined === undefined))) goto L_111;
  const _it1 = undefined;
  <done(_it1)>;
  s#1 = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  goto L_143;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_103;
  // [栈深重同步 1 -> 0]
  this.addExtV(t[1], i[1], e, -s#1, d, 0, r);
  this.addExtV(t[1], i[1], -o, h, 0, a, r);
  return;
  this.addExtV(t[1], i[1], e, h, d, a, r);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=0 bc=408B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i, s
// locals: e, h, r, s#1, d, a, this
function {
  this = this;
  let r;
  let h;
  let e;
  e = s.w;
  h = this.addLeft(t[0], i[0]);
  r = this.addRight(t[2], i[2], e);
  if (!((4 === t.length))) goto L_161;
  let a;
  let d;
  let s#1;
  if (((undefined === undefined))) goto L_b0;
  const _it1 = undefined;
  <done(_it1)>;
  s#1 = <value(_it1)>;
  <done(_it1)>;
  d = <value(_it1)>;
  goto L_e2;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_a3;
  // [栈深重同步 1 -> 0]
  a = (e / 2);
  this.addExtH(t[1], i[1], a, h, (a - s#1));
  this.addExtH(t[1], i[1], a, (d - a), r, a);
  return;
  this.addExtH(t[1], i[1], e, h, r);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=118B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i
// locals: s, this
function {
  this = this;
  let s;
  if ((this.font.getChar(i, t))) goto L_58;
  s = [0, 0, 0, null];
  if ((s[3])) goto L_72;
  return [s[0], s[1], s[2], {}];
}

// fn <atom:0>  args=5 vars=12 closure=0 cpool=0 bc=339B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i, s, e, h
// locals: t#1, i#1, s#1, e#1, h#1, h#2, this
function {
  this = this;
  let h#1;
  let e#1;
  let s#1;
  let i#1;
  let t#1;
  t#1 = t;
  i#1 = i;
  s#1 = s;
  e#1 = e;
  if (!((h === undefined))) goto L_26;
  h;
  h = null;
  h#1 = null;
  if (!(h)) goto L_5a;
  return this.placeChar(t, s, e, h, i);   // tail call
  if (!(this.dom[0])) goto L_104;
  let h#2;
  h#2 = this.placeChar(t, s, e, this.dom[0], i);
  if (!(!this.dom[1])) goto L_104;
  return h#2;
  return this.placeChar(t, s, e, this.dom[1], i);   // tail call
}

// fn <atom:0>  args=4 vars=8 closure=0 cpool=0 bc=140B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i, s, e
// locals: h, r, d, this
function {
  this = this;
  let d;
  let r;
  let h;
  if (!(!t)) goto L_11;
  return 0;
  if (((undefined === undefined))) goto L_26;
  const _it1 = undefined;
  <done(_it1)>;
  h = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  d = <value(_it1)>;
  goto L_50;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_16;
  // [栈深重同步 1 -> 0]
  this.addGlyph(t, i, ((e - d) / 2), (s - h));
  return (h + r);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t
// closure: this
function {
  return this.fixed(t);   // tail call
}

// fn <atom:0>  args=7 vars=17 closure=1 cpool=2 bc=1216B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i, s, e, r, d, a
// locals: o, n, c, l, f, p, g, u, x, this
// closure: h
function {
  this = this;
  let x;
  let u;
  let g;
  let p;
  let f;
  let l;
  let c;
  let n;
  let o;
  if (!(!t)) goto L_23;
  return;
  r = Math.max(0, (r - h));
  d = Math.max(0, (d - h));
  o = this.adaptor;
  if (((undefined === undefined))) goto L_c4;
  const _it1 = undefined;
  <done(_it1)>;
  n = <value(_it1)>;
  <done(_it1)>;
  c = <value(_it1)>;
  <done(_it1)>;
  l = <value(_it1)>;
  goto L_ef;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_b4;
  // [栈深重同步 1 -> 0]
  f = (((s + e) - r) - d);
  p = ((1.5 * f) / (n + c));
  g = (((p * (n - c)) - f) / 2);
  if (!((f <= 0))) goto L_127;
  return;
  u = this.svg("svg", {width: this.fixed(l), height: this.fixed(f), y: this.fixed((d - e)), x: this.fixed(((a - l) / 2)), viewBox: [0, g, l, f].map(function <atom:0>).join(" ")});
  this.addGlyph(t, i, 0, 0, u);
  x = o.lastChild(u);
  o.setAttribute(x, "transform", "scale(1,".concat(this.jax.fixed(p), ")"));
  if (!(this.dom[0])) goto L_3f0;
  o.append(this.dom[0], u);
  if (!(this.dom[1])) goto L_4bf;
  if (!(this.dom[0])) goto L_4b9;
  goto L_4bc;
  // [栈深重同步 4 -> 3]
  o.append(this.dom[1], u);
  return;
}

// fn <atom:0>  args=4 vars=8 closure=0 cpool=0 bc=140B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i, s, e
// locals: h, r, d, this
function {
  this = this;
  let d;
  let r;
  let h;
  if (!(!t)) goto L_11;
  return 0;
  if (((undefined === undefined))) goto L_26;
  const _it1 = undefined;
  <done(_it1)>;
  h = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  d = <value(_it1)>;
  goto L_50;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_16;
  // [栈深重同步 1 -> 0]
  this.addGlyph(t, i, ((e - d) / 2), (r - s));
  return (h + r);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=270B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i, s
// locals: e, h, r, d, this
function {
  this = this;
  let d;
  let r;
  let h;
  let e;
  if (!(!t)) goto L_19;
  return [0, 0];
  if (((undefined === undefined))) goto L_2e;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  h = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_59;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_1e;
  // [栈深重同步 1 -> 0]
  d = (((h - e) / 2) + this.font.params.axis_height);
  this.addGlyph(t, i, ((s - r) / 2), d);
  return [(e + d), (h - d)];
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i
// locals: this
function {
  this = this;
  if (!(t)) goto L_2f;
  return this.addGlyph(t, i, 0, 0);
  return 0;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t
// closure: this
function {
  return this.fixed(t);   // tail call
}

// fn <atom:0>  args=6 vars=23 closure=2 cpool=3 bc=1265B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i, s, e, d, a
// locals: t#1, i#1, s#1, e#1, d#1, a#1, o, n, c, l, f, p, g, u, x, m, this
// closure: r, h
function {
  this = this;
  let a#1;
  let d#1;
  let e#1;
  let s#1;
  let i#1;
  let t#1;
  t#1 = t;
  i#1 = i;
  s#1 = s;
  e#1 = e;
  d#1 = d;
  if (!((a === undefined))) goto L_2e;
  a;
  a = 0;
  a#1 = 0;
  let m;
  let x;
  let u;
  let g;
  let p;
  let f;
  let l;
  let c;
  let n;
  let o;
  if (!(!t)) goto L_53;
  return;
  d = Math.max(0, (d - r));
  e = Math.max(0, (e - r));
  o = this.adaptor;
  if (((undefined === undefined))) goto L_f4;
  const _it1 = undefined;
  <done(_it1)>;
  n = <value(_it1)>;
  <done(_it1)>;
  c = <value(_it1)>;
  <done(_it1)>;
  l = <value(_it1)>;
  goto L_11f;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_e1;
  // [栈深重同步 1 -> 0]
  f = ((s - e) - d);
  p = ((n + c) + 0.2);
  g = ((f / l) * 1.5);
  u = -(c + h);
  if (!((f <= 0))) goto L_152;
  return;
  x = this.svg("svg", {width: this.fixed(f), height: this.fixed(p), x: this.fixed((a + e)), y: this.fixed(u), viewBox: [(((g * l) - f) / 2), u, f, p].map(function <atom:0>).join(" ")});
  this.addGlyph(t, i, 0, 0, x);
  m = o.lastChild(x);
  o.setAttribute(m, "transform", "scale(".concat(this.jax.fixed(g), ",1)"));
  if (!(this.dom[0])) goto L_421;
  o.append(this.dom[0], x);
  if (!(this.dom[1])) goto L_4f0;
  if (!(this.dom[0])) goto L_4ea;
  goto L_4ed;
  // [栈深重同步 4 -> 3]
  o.append(this.dom[1], x);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=98B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i, s
// locals: e, this
function {
  this = this;
  let e;
  if (!(!t)) goto L_b;
  return 0;
  e = this.getChar(t, i)[2];
  return this.addGlyph(t, i, (s - e), 0);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=123B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: t, i, s
// locals: e, this
function {
  this = this;
  let e;
  if (!(!t)) goto L_f;
  return [0, 0];
  e = this.getChar(t, i)[2];
  this.addGlyph(t, i, ((s - e) / 2), 0);
  return [((s - e) / 2), ((s + e) / 2)];
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
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

// fn <atom:0>  args=0 vars=4 closure=6 cpool=16 bc=335B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// locals: d, a, SvgMo, <class_fields_init>
// closure: e, h, r, i, t, s
function {
  let a;
  a = i.CommonMoMixin(t.SvgWrapper);
  let SvgMo;
  let <class_fields_init>;
  class SvgMo extends a { ... }
  <proto:SvgMo>.toSVG = function <atom:0>;
  <proto:SvgMo>.stretchSvg = function <atom:0>;
  <proto:SvgMo>.getStretchVariants = function <atom:0>;
  <proto:SvgMo>.stretchVertical = function <atom:0>;
  <proto:SvgMo>.stretchHorizontal = function <atom:0>;
  <proto:SvgMo>.getChar = function <atom:0>;
  <proto:SvgMo>.addGlyph = function <atom:0>;
  <proto:SvgMo>.addTop = function <atom:0>;
  <proto:SvgMo>.addExtV = function <atom:0>;
  <proto:SvgMo>.addBot = function <atom:0>;
  <proto:SvgMo>.addMidV = function <atom:0>;
  <proto:SvgMo>.addLeft = function <atom:0>;
  <proto:SvgMo>.addExtH = function <atom:0>;
  <proto:SvgMo>.addRight = function <atom:0>;
  <proto:SvgMo>.addMidH = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMo>;
  SvgMo = function <atom:0>;
  // close_loc <class_fields_init>
  d = function <atom:0>;
  function <atom:0>.kind = s.MmlMo.prototype.kind;
  return d;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=139B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// args: require, module, exports
// locals: t, i, s, e, h, r
function {
  let r;
  let h;
  let e;
  let s;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMo = undefined;
  t = require("../Wrapper");
  i = require("../../common/Wrappers/mo");
  s = require("../../../core/MmlTree/MmlNodes/mo");
  e = require("../FontData");
  h = 0.1;
  r = 0.1;
  exports.SvgMo = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mo
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
