// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=75B file=math_jax/src/mathjax_src/output/svg/Wrapper
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
  this.dx = 0;
  this.utext = "";
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=120B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// locals: this
function {
  this = this;
  if ((this.toEmbellishedSVG(t))) goto L_77;
  this.addChildren(this.standardSvgNodes(t));
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=608B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// locals: e, i, s, h, this
function {
  this = this;
  let i;
  let e;
  if (((t.length <= 1))) goto L_c2;
  if ((!this.node.isEmbellished)) goto L_c2;
  if (!(this.node.parent.isEmbellished)) goto L_c7;
  return false;
  e = this.coreMO().embellishedBreakStyle;
  i = [];
  let h;
  let s;
  const _it1 = [[t[0], "before"], [t[1], "after"]];
  goto L_246;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  s = <value(_it2)>;
  <done(_it2)>;
  h = <value(_it2)>;
  if (!((e !== h))) goto L_1f0;
  this.toSVG([s]);
  i.push(this.dom[0]);
  goto L_245;
  // [栈深重同步 4 -> 3]
  i.push(this.createSvgNodes([s])[0]);
  if (!(<done(_it2)>)) goto L_136;
  <value(_it2)>;
  this.dom = i;
  return true;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=457B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// locals: e, i, s, this
function {
  this = this;
  let e;
  e = 0;
  let i;
  for (const i of this.childNodes) {
    let s;
    i.toSVG(t);
    s = i.getOuterBBox();
    if (!(i.dom)) goto L_122;
    i.place((e + (s.L * s.rscale)), 0);
    e = (e + (((s.L + s.w) + s.R) * s.rscale));
    (e + (((s.L + s.w) + s.R) * s.rscale));
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=238B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.createSvgNodes(t);
  this.handleStyles();
  this.handleScale();
  this.handleBorder();
  this.handleColor();
  this.handleAttributes();
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=115B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// closure: this
function {
  return this.svg("g", {data-mml-node: this.node.kind});   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=289B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// locals: e, this
function {
  this = this;
  this.dom = t.map(function <atom:0>);
  t = this.handleHref(t);
  let e;
  for (const e of t.keys()) {
    this.adaptor.append(t[e], this.dom[e]);
  }
  return this.dom;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=0 bc=763B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// locals: h, r, d
// closure: this, e, s, i
function {
  let d;
  let r;
  let h;
  t = this.adaptor.append(t, this.svg("a", {href: e}));
  if (((undefined === undefined))) goto L_f5;
  h = <to_object>(undefined).h;
  r = <to_object>(undefined).d;
  d = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_14e;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!(s)) goto L_123;
  goto L_89;
  // [栈深重同步 1 -> 0]
  goto L_89;
  // [栈深重同步 1 -> 0]
  i = <i_new>;
  if (((1 === i))) goto L_272;
  if (!(s)) goto L_2be;
  goto L_2bf;
  // [栈深重同步 8 -> 7]
  this.adaptor.append(this.dom[(i++)], this.svg("rect", {data-hitbox: true, fill: "none", stroke: "none", pointer-events: "all", width: this.fixed(d), height: this.fixed((h + r)), x: 0, y: this.fixed(-r)}));
  return t;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=1 bc=317B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// locals: e, i, s, this
function {
  this = this;
  let s;
  let i;
  let e;
  e = this.node.attributes.get("href");
  if (!(!e)) goto L_80;
  return t;
  i = 0;
  if (!(this.node.isEmbellished)) goto L_115;
  s = !this.node.isKind("mo");
  return t.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: e
// closure: this, t
function {
  return this.adaptor.setAttribute(e, "style", t);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=1 bc=449B file=math_jax/src/mathjax_src/output/svg/Wrapper
// locals: t, e, i, this
function {
  this = this;
  let i;
  let e;
  let t;
  if (!(!this.styles)) goto L_31;
  return;
  t = this.styles.cssText;
  if (!(t)) goto L_c4;
  this.dom.forEach(function <atom:0>);
  if (!((this.styleData == null))) goto L_ef;
  this.styleData;
  goto L_110;
  if ((undefined.padding)) goto L_11b;
  e = [0, 0, 0, 0][3];
  if (!((this.styleData == null))) goto L_148;
  this.styleData;
  goto L_192;
  if (!((undefined.border == null))) goto L_171;
  undefined.border;
  goto L_192;
  if ((undefined.width)) goto L_19d;
  i = [0, 0, 0, 0][3];
  if ((e)) goto L_1aa;
  if (!(i)) goto L_1c0;
  this.dx = (e + i);
  (e + i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: e
// closure: this, t
function {
  return this.adaptor.setAttribute(e, "transform", t);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=278B file=math_jax/src/mathjax_src/output/svg/Wrapper
// locals: t, this
function {
  this = this;
  if (!((1 !== this.bbox.rscale))) goto L_115;
  let t;
  t = (("scale(" + this.fixed((this.bbox.rscale / 1000), 3)) + ")");
  this.dom.forEach(function <atom:0>);
  // close_loc t
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=98B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: e
// closure: t, i
function {
  t.setAttribute(e, "fill", i);
  t.setAttribute(e, "stroke", i);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=5 cpool=0 bc=652B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: h
// locals: r, d, o, a, n
// closure: i, this, e, s, t
function {
  let n;
  let a;
  let o;
  let d;
  let r;
  if (((undefined === undefined))) goto L_80;
  r = <to_object>(undefined).h;
  d = <to_object>(undefined).d;
  o = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_dd;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!(i)) goto L_ae;
  goto L_14;
  // [栈深重同步 1 -> 0]
  e = <e_new>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  if (((1 === e))) goto L_119;
  if (!(i)) goto L_165;
  goto L_166;
  // [栈深重同步 5 -> 4]
  a = this.svg("rect", {fill: s, x: 0, y: this.fixed(-d), width: this.fixed(o), height: this.fixed((r + d)), data-bgcolor: true});
  n = t.firstChild(h);
  if (!(n)) goto L_260;
  goto L_28b;
  // [栈深重同步 1 -> 0]
  t.append(h, a);
  return;
}

// fn <atom:0>  args=0 vars=7 closure=0 cpool=2 bc=727B file=math_jax/src/mathjax_src/output/svg/Wrapper
// locals: t, e, i, s, e#1, i#1, this
function {
  this = this;
  let s;
  let i;
  let e;
  let t;
  t = this.adaptor;
  e = this.node.attributes;
  if ((e.getExplicit("mathcolor"))) goto L_d4;
  i = e.getExplicit("color");
  if ((e.getExplicit("mathbackground"))) goto L_18c;
  if ((e.getExplicit("background"))) goto L_18c;
  if (!((this.styles == null))) goto L_163;
  this.styles;
  goto L_18c;
  s = undefined.get("background-color");
  if (!(i)) goto L_1dd;
  this.dom.forEach(function <atom:0>);
  if (!(s)) goto L_2d6;
  let i#1;
  let e#1;
  e#1 = 0;
  if (!(this.node.isEmbellished)) goto L_284;
  i#1 = !this.node.isKind("mo");
  this.dom.forEach(function <atom:0>);
  // close_loc i#1
  // close_loc e#1
  return;
}

// fn <atom:0>  args=0 vars=27 closure=1 cpool=0 bc=1809B file=math_jax/src/mathjax_src/output/svg/Wrapper
// locals: t, e, i, s, h, r, d, o, a, n, l, c, p, f, x, u, g, m, b, v, B, S, w, y, e#1, i#1, this
// closure: SvgWrapper
function {
  this = this;
  let r;
  let h;
  let s;
  let i;
  let e;
  let t;
  if (!((this.styleData == null))) goto L_40;
  this.styleData;
  goto L_61;
  t = undefined.border;
  if (!(!t)) goto L_69;
  return;
  e = SvgWrapper.borderFuzz;
  i = this.adaptor;
  s = 0;
  h = (this.dom.length - 1);
  if (!(this.node.isEmbellished)) goto L_171;
  r = !this.node.isKind("mo");
  let d;
  const _it1 = this.dom;
  goto L_707;
  d = <value(_it1)>;
  let y;
  let w;
  let S;
  let B;
  let v;
  let b;
  let m;
  let g;
  let u;
  let x;
  let f;
  let p;
  let c;
  let l;
  let n;
  let a;
  let o;
  if (!(h)) goto L_1df;
  if (!(s)) goto L_1df;
  goto L_1e0;
  // [栈深重同步 4 -> 3]
  o = 1;
  if (!(h)) goto L_1f3;
  if (!((s !== h))) goto L_1f3;
  goto L_1f4;
  // [栈深重同步 4 -> 3]
  a = 1;
  if (!(r)) goto L_223;
  goto L_250;
  // [栈深重同步 4 -> 3]
  s = <s_new>;
  n = this.getLineBBox((s++));
  if (((undefined === undefined))) goto L_26b;
  const _it2 = undefined;
  <done(_it2)>;
  l = <value(_it2)>;
  <done(_it2)>;
  c = <value(_it2)>;
  <done(_it2)>;
  p = <value(_it2)>;
  goto L_2ea;
  <value(_it2)>;
  goto L_257;
  // [栈深重同步 4 -> 3]
  f = [p, l];
  x = [-e, l];
  u = [p, -c];
  g = [-e, -c];
  m = [(p - (a * t.width[1])), (l - t.width[0])];
  b = [(-e + (o * t.width[3])), (l - t.width[0])];
  v = [(p - (a * t.width[1])), (-c + t.width[2])];
  B = [(-e + (o * t.width[3])), (-c + t.width[2])];
  S = [[x, f, m, b], [u, f, m, v], [g, u, v, B], [g, x, b, B]];
  w = i.firstChild(d);
  y = (o * this.dx);
  let e#1;
  for (const e#1 of [0, 1, 2, 3]) {
    let i#1;
    if ((!t.width[e#1])) goto L_584;
    if (!((3 === e#1))) goto L_575;
    if ((!o)) goto L_584;
    if (!((1 === e#1))) goto L_589;
    if ((!a)) continue;
    i#1 = S[e#1];
    if ((("dashed" === t.style[e#1]))) goto L_5f2;
    if (!(("dotted" === t.style[e#1]))) goto L_6a3;
    goto L_6fd;
    // [栈深重同步 4 -> 3]
    this.addBorderSolid(i#1, t.color[e#1], w, d, y);
  }
  // [栈深重同步 0 -> 3]
  if (!(<done(<?>)>)) goto L_19d;
  <value(<?>)>;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=131B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: <atom:0>
// locals: t, e
// closure: this, h
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  e = <value(_it1)>;
  return "".concat(this.fixed((t - h)), ",", this.fixed(e));   // tail call
}

// fn <atom:0>  args=5 vars=7 closure=0 cpool=1 bc=383B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t, e, i, s, h
// locals: r, this
function {
  this = this;
  let r;
  r = this.svg("polygon", {points: t.map(function <atom:0>).join(" "), stroke: "none"});
  if (!(e)) goto L_e4;
  this.adaptor.setAttribute(r, "fill", e);
  if (!(i)) goto L_134;
  goto L_17e;
  // [栈深重同步 1 -> 0]
  this.adaptor.append(s, r);
  return;
}

// fn <atom:0>  args=7 vars=26 closure=0 cpool=1 bc=1150B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t, e, i, s, h, r, d
// locals: o, a, n, l, c, p, f, x, u, g, m, b, v, B, S, w, y, k, this
function {
  this = this;
  let k;
  let y;
  let w;
  let S;
  let B;
  let v;
  let b;
  let m;
  let g;
  let u;
  let x;
  let f;
  let p;
  let c;
  let l;
  let n;
  let a;
  let o;
  o = ("dotted" === i);
  a = (s / 2);
  if (((undefined === undefined))) goto L_60;
  const _it1 = undefined;
  <done(_it1)>;
  n = <value(_it1)>;
  <done(_it1)>;
  l = <value(_it1)>;
  <done(_it1)>;
  c = <value(_it1)>;
  <done(_it1)>;
  p = <value(_it1)>;
  goto L_ae;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_4a;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_c1;
  const _it2 = undefined;
  <done(_it2)>;
  f = <value(_it2)>;
  <done(_it2)>;
  x = <value(_it2)>;
  goto L_c5;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_b3;
  // [栈深重同步 1 -> 0]
  u = ((f[0] + n) - d);
  g = (f[1] + l);
  m = ((x[0] + c) - d);
  b = (x[1] + p);
  if (!((h % 2))) goto L_12f;
  goto L_136;
  // [栈深重同步 3 -> 2]
  v = Math.abs((m - u));
  if (!(o)) goto L_172;
  goto L_1a4;
  // [栈深重同步 1 -> 0]
  B = Math.ceil(((v - s) / (4 * s)));
  S = (v / ((4 * B) + 1));
  if (!(o)) goto L_2d2;
  goto L_2d7;
  // [栈深重同步 5 -> 4]
  if (!(o)) goto L_341;
  goto L_3c1;
  // [栈深重同步 5 -> 4]
  w = this.svg("line", {x1: this.fixed(u), y1: this.fixed(g), x2: this.fixed(m), y2: this.fixed(b), stroke-width: this.fixed(s), stroke: e, stroke-linecap: "square", stroke-dasharray: [this.fixed(S), this.fixed((3 * S))].join(" ")});
  y = this.adaptor;
  k = y.firstChild(r);
  if (!(k)) goto L_450;
  goto L_47d;
  // [栈深重同步 1 -> 0]
  y.append(r, w);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=85B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: s
// closure: e, t, i
function {
  return e.setAttribute(s, t, i.getExplicit(t));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=43B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// closure: e, r
function {
  return e.addClass(t, r);   // tail call
}

// fn <atom:0>  args=0 vars=7 closure=2 cpool=2 bc=684B file=math_jax/src/mathjax_src/output/svg/Wrapper
// locals: e, i, s, h, t, r, this
// closure: SvgWrapper, t
function {
  this = this;
  let h;
  let s;
  let i;
  let e;
  e = this.adaptor;
  i = this.node.attributes;
  s = i.getAllDefaults();
  h = SvgWrapper.skipAttributes;
  let t;
  // close_loc t
  for (const t of i.getExplicitNames()) {
    if (!((false !== h[t]))) goto L_16b;
    if (((t in s))) goto L_16b;
    if ((h[t])) goto L_16b;
    if ((e.hasAttribute(this.dom[0], t))) goto L_1b8;
    this.dom.forEach(function <atom:0>);
    // close_loc t
  }
  // close_loc t
  if (!(i.get("class"))) goto L_2ab;
  let r;
  // close_loc r
  for (const r of t.split(i.get("class"))) {
    this.dom.forEach(function <atom:0>);
    // close_loc r
  }
  // close_loc r
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=0 bc=550B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t, e, i
// locals: t#1, e#1, i#1, s, h, this
function {
  this = this;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((i === undefined))) goto L_18;
  i;
  i = null;
  i#1 = null;
  let h;
  let s;
  if ((i)) goto L_8f;
  t = (t + (this.dx * this.bbox.rscale));
  (t + (this.dx * this.bbox.rscale));
  if (!(!t)) goto L_99;
  if (!(!e)) goto L_99;
  return;
  if ((i)) goto L_ec;
  i = this.dom[0];
  e = this.handleId(e);
  this.handleId(e);
  s = "translate(".concat(this.fixed(t), ",", this.fixed(e), ")");
  if ((this.adaptor.getAttribute(i, "transform"))) goto L_1c1;
  h = "";
  if (!(h)) goto L_220;
  goto L_221;
  // [栈深重同步 6 -> 5]
  this.adaptor.setAttribute(i, "transform", (s + ""));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// closure: e
function {
  return e.remove(t);   // tail call
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=1 bc=889B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// locals: e, i, s, h, r, this
function {
  this = this;
  let r;
  let h;
  let s;
  let i;
  let e;
  if ((!this.node.attributes)) goto L_c9;
  if (!(!this.node.attributes.get("id"))) goto L_cd;
  return t;
  e = this.adaptor;
  if (((undefined === undefined))) goto L_140;
  i = <to_object>(undefined).h;
  s = <to_object>(undefined).rscale;
  <to_object>(undefined);
  goto L_169;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_f6;
  // [栈深重同步 1 -> 0]
  h = e.childNodes(this.dom[0]);
  h.forEach(function <atom:0>);
  r = this.svg("g", {data-idbox: true, transform: "translate(0,".concat(this.fixed(-i), ")")}, h);
  e.append(this.dom[0], this.svg("text", {data-id-align: true}, [this.text("")]));
  e.append(this.dom[0], r);
  return (t + (i * s));
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=497B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// locals: t#1, e, i, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_30;
  t;
  t = this.dom[0];
  t#1 = this.dom[0];
  let i;
  let e;
  e = this.adaptor;
  i = e.firstChild(t);
  if (!(i)) goto L_14c;
  if (!(("text" === e.kind(i)))) goto L_14c;
  if (!(e.getAttribute(i, "data-id-align"))) goto L_14c;
  i = e.firstChild(e.next(i));
  e.firstChild(e.next(i));
  if (!(i)) goto L_1ec;
  if (!(("rect" === e.kind(i)))) goto L_1ec;
  if (!(e.getAttribute(i, "data-hitbox"))) goto L_1ec;
  i = e.next(i);
  e.next(i);
  return i;
}

// fn <atom:0>  args=6 vars=20 closure=0 cpool=0 bc=1121B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t, e, i, s, h, r
// locals: t#1, e#1, i#1, s#1, h#1, r#1, d, o, a, n, t#2, t#3, s#2, this
function {
  this = this;
  let r#1;
  let h#1;
  let s#1;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  i#1 = i;
  s#1 = s;
  if (!((h === undefined))) goto L_29;
  h;
  h = null;
  h#1 = null;
  if (!((r === undefined))) goto L_38;
  r;
  r = false;
  r#1 = false;
  let n;
  let a;
  let o;
  let d;
  if (!((null === h))) goto L_75;
  h = this.variant;
  this.variant;
  d = t.toString(16).toUpperCase();
  if (((undefined === undefined))) goto L_de;
  const _it1 = undefined;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  goto L_10b;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_c8;
  // [栈深重同步 1 -> 0]
  if (!(a.unknown)) goto L_1bf;
  this.utext = (this.utext + String.fromCodePoint(t));
  if (!(r)) goto L_192;
  return 0;
  return this.addUtext(e, i, s, h);
  n = this.addUtext(e, i, s, h);
  if (!(("p" in a))) goto L_307;
  let t#2;
  e = (e + n);
  if (!(a.p)) goto L_25c;
  goto L_25d;
  // [栈深重同步 1 -> 0]
  t#2 = "";
  this.place(e, i, this.adaptor.append(s, this.charNode(h, d, t#2)));
  return (o + n);
  if (!(("c" in a))) goto L_45d;
  let t#3;
  t#3 = this.adaptor.append(s, this.svg("g", {data-c: d}));
  this.place((e + n), i, t#3);
  e = 0;
  let s#2;
  for (const s#2 of this.unicodeChars(a.c, h)) {
    e = (e + this.placeChar(s#2, e, i, t#3, h));
  }
  return (e + n);
  return o;
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=0 bc=362B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t, e, i, s
// locals: h, r, this
function {
  this = this;
  let r;
  let h;
  h = this.utext;
  if (!(!h)) goto L_33;
  return 0;
  this.utext = "";
  r = this.adaptor.append(i, this.jax.unknownText(h, s));
  this.place(t, e, r);
  return this.jax.measureTextNodeWithCache(r, h, s).w;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=191B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t, e, i
// locals: this
function {
  this = this;
  if (!(("none" !== this.jax.options.fontCache))) goto L_97;
  return this.useNode(t, e, i);
  return this.pathNode(e, i);
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=57B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t, e
// locals: this
function {
  this = this;
  return this.svg("path", {data-c: t, d: e});   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=398B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t, e, s
// locals: h, r, this
// closure: i
function {
  this = this;
  let r;
  let h;
  h = this.svg("use", {data-c: e});
  r = ("#" + this.jax.fontCache.cachePath(t, e, s));
  if (!(this.jax.options.useXlink)) goto L_185;
  goto L_186;
  // [栈深重同步 6 -> 5]
  this.adaptor.setAttribute(h, "href", r, null);
  return h;
}

// fn <atom:0>  args=0 vars=8 closure=0 cpool=1 bc=1017B file=math_jax/src/mathjax_src/output/svg/Wrapper
// locals: t, e, i, s, h, r, d, this
function {
  this = this;
  let d;
  let r;
  let h;
  let s;
  let i;
  let e;
  let t;
  if (((undefined === undefined))) goto L_8a;
  t = <to_object>(undefined).w;
  e = <to_object>(undefined).h;
  i = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_b4;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  if (!((this.styleData == null))) goto L_df;
  this.styleData;
  goto L_129;
  if (!((undefined.border == null))) goto L_108;
  undefined.border;
  goto L_129;
  if ((undefined.width)) goto L_134;
  s = [0, 0, 0, 0][3];
  h = {style: {opacity: 0.25}};
  if (!(s)) goto L_1b3;
  h.transform = "translate(".concat(this.fixed(-s), ", 0)");
  "translate(".concat(this.fixed(-s), ", 0)");
  r = this.svg("g", h, [this.svg("rect", {fill: "red", height: this.fixed(e), width: this.fixed(t)}), this.svg("rect", {fill: "green", height: this.fixed(i), width: this.fixed(t), y: this.fixed(-i)})]);
  if ((this.dom[0])) goto L_3a9;
  d = this.parent.dom[0];
  this.adaptor.append(d, r);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=106B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t, e, i
// locals: t#1, e#1, i#1, this
function {
  this = this;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_15;
  e;
  e = {};
  e#1 = {};
  if (!((i === undefined))) goto L_20;
  i;
  i = [];
  i#1 = [];
  return this.jax.html(t, e, i);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=106B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t, e, i
// locals: t#1, e#1, i#1, this
function {
  this = this;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_15;
  e;
  e = {};
  e#1 = {};
  if (!((i === undefined))) goto L_20;
  i;
  i = [];
  i#1 = [];
  return this.jax.svg(t, e, i);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t
// locals: this
function {
  this = this;
  return this.jax.text(t);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=95B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: t, e
// locals: t#1, e#1, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_12;
  e;
  e = 1;
  e#1 = 1;
  return this.jax.fixed((1000 * t), e);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=28 bc=419B file=math_jax/src/mathjax_src/output/svg/Wrapper
// args: require, module, exports
// locals: t, e, i, SvgWrapper, <class_fields_init>, SvgWrapper#1
function {
  let SvgWrapper#1;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgWrapper = undefined;
  t = require("../../util/string");
  e = require("../common/Wrapper");
  i = require("../svg");
  let SvgWrapper;
  let <class_fields_init>;
  class SvgWrapper extends e.CommonWrapper { ... }
  <proto:SvgWrapper>.toSVG = function <atom:0>;
  <proto:SvgWrapper>.toEmbellishedSVG = function <atom:0>;
  <proto:SvgWrapper>.addChildren = function <atom:0>;
  <proto:SvgWrapper>.standardSvgNodes = function <atom:0>;
  <proto:SvgWrapper>.createSvgNodes = function <atom:0>;
  <proto:SvgWrapper>.handleHref = function <atom:0>;
  <proto:SvgWrapper>.handleStyles = function <atom:0>;
  <proto:SvgWrapper>.handleScale = function <atom:0>;
  <proto:SvgWrapper>.handleColor = function <atom:0>;
  <proto:SvgWrapper>.handleBorder = function <atom:0>;
  <proto:SvgWrapper>.addBorderSolid = function <atom:0>;
  <proto:SvgWrapper>.addBorderBroken = function <atom:0>;
  <proto:SvgWrapper>.handleAttributes = function <atom:0>;
  <proto:SvgWrapper>.place = function <atom:0>;
  <proto:SvgWrapper>.handleId = function <atom:0>;
  <proto:SvgWrapper>.firstChild = function <atom:0>;
  <proto:SvgWrapper>.placeChar = function <atom:0>;
  <proto:SvgWrapper>.addUtext = function <atom:0>;
  <proto:SvgWrapper>.charNode = function <atom:0>;
  <proto:SvgWrapper>.pathNode = function <atom:0>;
  <proto:SvgWrapper>.useNode = function <atom:0>;
  <proto:SvgWrapper>.drawBBox = function <atom:0>;
  <proto:SvgWrapper>.html = function <atom:0>;
  <proto:SvgWrapper>.svg = function <atom:0>;
  <proto:SvgWrapper>.text = function <atom:0>;
  <proto:SvgWrapper>.fixed = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgWrapper>;
  SvgWrapper = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc SvgWrapper
  SvgWrapper#1 = function <atom:0>;
  exports.SvgWrapper = SvgWrapper#1;
  SvgWrapper#1.kind = "unknown";
  SvgWrapper#1.borderFuzz = 0.005;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrapper
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
