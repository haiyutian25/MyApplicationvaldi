// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=115B file=dil_charts/src/widgets/SvgChart
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, d
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
  this.hasAppliedScrollPosition = false;
  this.scrollRef = new d.ElementRef();
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_charts/src/widgets/SvgChart
// locals: this
function {
  this = this;
  return (true === this.viewModel.scrollable);
}

// fn <atom:0>  args=0 vars=9 closure=8 cpool=0 bc=3749B file=dil_charts/src/widgets/SvgChart
// locals: o, n, s, a, l, c, h, d, this
// closure: At, vt, u, t, e, se, i, r
function {
  this = this;
  let d;
  let h;
  let c;
  let l;
  let a;
  let s;
  let n;
  let o;
  o = At(this.viewModel);
  n = vt(this.viewModel);
  s = u.resolveDILFlex(this.viewModel.flex);
  if (!((this.viewModel.height == null))) goto L_166;
  this.viewModel.height;
  if (!((this.viewModel.size == null))) goto L_166;
  this.viewModel.size;
  a = n;
  if (!((this.viewModel.width == null))) goto L_1fe;
  this.viewModel.width;
  if (!((this.viewModel.size == null))) goto L_1fe;
  this.viewModel.size;
  l = "100%";
  c = u.resolveDILAspectRatio(this.viewModel.aspectRatio);
  if (!((this.viewModel.maxHeight == null))) goto L_2f8;
  this.viewModel.maxHeight;
  h = this.viewModel.maxSize;
  if (!((this.viewModel.maxWidth == null))) goto L_387;
  this.viewModel.maxWidth;
  d = this.viewModel.maxSize;
  if (!((true === this.viewModel.scrollable))) goto L_a36;
  this.updateScrollPosition(o, n);
  t.beginRender(e, undefined);
  t.setAttributeRef(this.scrollRef);
  t.setAttributeStyle("style", se.scroll);
  t.setAttributes(this.baseViewAttributes);
  t.setAttributeNumber("aspectRatio", c);
  if (!((this.viewModel.minSize == null))) goto L_5e3;
  this.viewModel.minSize;
  if (!((s == null))) goto L_5c2;
  s;
  goto L_5e3;
  t.setAttribute("flexBasis", undefined.basis);
  if (!((s == null))) goto L_61b;
  s;
  goto L_63c;
  t.setAttributeNumber("flexGrow", undefined.grow);
  if (!((s == null))) goto L_674;
  s;
  goto L_695;
  t.setAttributeNumber("flexShrink", undefined.shrink);
  t.setAttribute("height", a);
  t.setAttribute("maxHeight", h);
  t.setAttribute("maxWidth", d);
  t.setAttribute("minHeight", this.viewModel.minHeight);
  t.setAttribute("minWidth", this.viewModel.minWidth);
  t.setAttribute("scrollEnabled", (true !== this.viewModel.disableUserScroll));
  t.setAttribute("width", l);
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", se.image);
  t.setAttribute("src", this.renderSvgImageSource(o, n));
  t.setAttributeNumber("height", n);
  t.setAttributeNumber("width", o);
  t.endRender();
  t.endRender();
  return;
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", se.image);
  t.setAttributes(this.baseViewAttributes);
  t.setAttribute("src", this.renderSvgImageSource(o, n));
  t.setAttributeNumber("aspectRatio", c);
  if (!((this.viewModel.minSize == null))) goto L_c25;
  this.viewModel.minSize;
  if (!((s == null))) goto L_c04;
  s;
  goto L_c25;
  t.setAttribute("flexBasis", undefined.basis);
  if (!((s == null))) goto L_c5d;
  s;
  goto L_c7e;
  t.setAttributeNumber("flexGrow", undefined.grow);
  if (!((s == null))) goto L_cb6;
  s;
  goto L_cd7;
  t.setAttributeNumber("flexShrink", undefined.shrink);
  t.setAttribute("height", a);
  t.setAttribute("maxHeight", h);
  t.setAttribute("maxWidth", d);
  t.setAttribute("minHeight", this.viewModel.minHeight);
  t.setAttribute("minWidth", this.viewModel.minWidth);
  t.setAttribute("width", l);
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=0 bc=305B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, this
// closure: O, h, o
function {
  this = this;
  let i;
  i = O(this.viewModel, t, e);
  if (!((this.cachedMarkup === i))) goto L_7a;
  if (((undefined !== this.cachedAsset))) goto L_10d;
  this.cachedMarkup = i;
  this.cachedAsset = h.makeAssetFromBytes(new o.TextEncoder().encode(i));
  h.makeAssetFromBytes(new o.TextEncoder().encode(i));
  return this.cachedAsset;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=916B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, r, o, this
// closure: Mt
function {
  this = this;
  let o;
  let r;
  let i;
  this.scrollRef.setAttribute("staticContentWidth", t);
  this.scrollRef.setAttribute("staticContentHeight", e);
  i = Mt(this.viewModel, t);
  if (!((undefined === i))) goto L_d3;
  return;
  r = "".concat(t, ":", e, ":", i);
  if (!((this.scrollPositionSignature === r))) goto L_131;
  return;
  if (!(this.hasAppliedScrollPosition)) goto L_19d;
  o = (true !== this.viewModel.disableAnimation);
  this.scrollPositionSignature = r;
  this.hasAppliedScrollPosition = true;
  if (!(o)) goto L_2aa;
  this.scrollRef.setAttribute("contentOffsetAnimated", true);
  this.scrollRef.setAttribute("contentOffsetX", i);
  this.scrollRef.setAttribute("contentOffsetY", 0);
  return;
  this.scrollRef.setAttribute("contentOffsetX", i);
  this.scrollRef.setAttribute("contentOffsetY", 0);
  this.scrollRef.setAttribute("contentOffsetAnimated", false);
  return;
}

// fn O  args=3 vars=10 closure=15 cpool=0 bc=831B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// locals: r, o, n, s, a, l, u
// closure: mt, Vt, c, D, ne, B, Z, tt, et, T, W, K, j, Q, J
function {
  let u;
  let l;
  let a;
  let s;
  let n;
  let o;
  let r;
  if (!((t.data == null))) goto L_3f;
  t.data;
  r = [];
  o = mt(t.series);
  n = Vt(t.theme);
  s = new c.XmlBuilder();
  s.beginNode("svg");
  s.addAttribute("xmlns", D);
  s.addAttribute("width", ne(e));
  s.addAttribute("height", ne(i));
  s.addAttribute("viewBox", "0 0 ".concat(ne(e), " ", ne(i)));
  if (((0 === r.length))) goto L_1e9;
  if (!((0 === o.length))) goto L_249;
  B(s, e, i, n);
  s.endNode();
  return s.build();   // tail call
  a = Z(t, e, i);
  l = tt(r, o, t);
  u = et(t, l);
  T(s, t, a, u, l, n);
  W(s, t, a, u, l, n);
  K(s, t, r, o, a, l, n);
  j(s, t, r, a, n);
  Q(s, t, u, a, l, n);
  J(s, t, o, a, n);
  s.endNode();
  return s.build();   // tail call
}

// fn B  args=4 vars=4 closure=2 cpool=0 bc=61B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r
// closure: Ot, Gt
function {
  Ot(t, {anchor: "middle", color: Gt("color-text-tertiary", r), size: 12, value: "No chart data", x: (e / 2), y: (i / 2)});
  return;
}

// fn T  args=6 vars=9 closure=5 cpool=0 bc=305B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n
// locals: s, a, r#1
// closure: Gt, St, Ht, Ft, z
function {
  let s;
  if (!((false === e.showGrid))) goto L_2b;
  return;
  s = Gt("alpha-05", n);
  let a;
  for (const a of r) {
    let r#1;
    if (!((a === o.min))) goto L_71;
    if ((St(e))) goto L_c4;
    if (!((a === o.max))) goto L_c6;
    if (((true !== e.showYAxis))) continue;
    r#1 = Ht(a, i, o);
    Ft(t, i.plotLeft, r#1, i.plotRight, r#1, s, 1, z);
  }
  return;
}

// fn W  args=6 vars=9 closure=4 cpool=0 bc=606B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n
// locals: s, a, n#1
// closure: Gt, Nt, Ft, Ht
function {
  let a;
  let s;
  s = Gt("alpha-10", n);
  a = Nt(e);
  if (!((false !== a.axisLine))) goto L_103;
  if (!((true !== a.hide))) goto L_103;
  Ft(t, i.plotLeft, i.plotBottom, i.plotRight, i.plotBottom, s, 1, undefined);
  if (!((true === e.showYAxis))) goto L_25d;
  if (!((e.yAxis == null))) goto L_15a;
  e.yAxis;
  goto L_17b;
  if (!((true === undefined.axisLine))) goto L_25d;
  let n#1;
  if (!((e.yAxis == null))) goto L_1b3;
  e.yAxis;
  goto L_1d4;
  if (!(("right" === undefined.orientation))) goto L_1fb;
  goto L_21d;
  // [栈深重同步 1 -> 0]
  n#1 = i.plotLeft;
  Ft(t, n#1, Ht(r[(r.length - 1)], i, o), n#1, i.plotBottom, s, 1, undefined);
  return;
}

// fn K  args=7 vars=11 closure=6 cpool=0 bc=204B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n, s
// locals: a, l, u, c
// closure: E, bt, it, q, G, V
function {
  E(t, e, i, r, o, n, s);
  let a;
  a = 0;
  if (!((a < r.length))) goto L_cb;
  let c;
  let u;
  let l;
  l = r[a];
  u = bt(l.type);
  if ((("bar" === u))) goto L_c0;
  c = it(i, l, e, o, n);
  if (!(("area" === u))) goto L_98;
  q(t, e, l, c, o, n, s, a);
  G(t, e, l, c, s, a);
  V(t, e, c, o, s);
  a = <a_new>;
  (a++);
  goto L_17;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=dil_charts/src/widgets/SvgChart
// args: t
// closure: bt
function {
  return ("bar" === bt(t.type));
}

// fn E  args=7 vars=28 closure=9 cpool=1 bc=1369B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n, s
// locals: a, l, u, c, h, d, f, m, b, d#1, u#1, c#1, x, g, p, l#1, u#2, c#2, h#1, d#2, m#1
// closure: bt, ft, $t, Ht, Pt, kt, zt, Tt, Gt
function {
  let m;
  let f;
  let d;
  let h;
  let c;
  let u;
  let l;
  let a;
  a = r.filter(function <atom:0>);
  if (((0 === a.length))) goto L_4e;
  if (!((0 === i.length))) goto L_51;
  return;
  l = ft(a);
  u = (o.plotWidth / i.length);
  c = $t(e.barCategoryGap, u);
  if (!((e.barGap == null))) goto L_f6;
  e.barGap;
  h = Math.max(0, 6);
  d = Math.max(2, (u - (2 * c)));
  f = Math.max(2, ((d - (h * Math.max(0, (l.length - 1)))) / l.length));
  m = Ht(Pt(0, n.min, n.max), o, n);
  let b;
  b = 0;
  if (!((b < i.length))) goto L_558;
  let d#1;
  d#1 = ((o.plotLeft + (b * u)) + c);
  let u#1;
  u#1 = 0;
  if (!((u#1 < l.length))) goto L_54d;
  let p;
  let g;
  let x;
  let c#1;
  c#1 = l[u#1];
  x = (d#1 + (u#1 * (f + h)));
  g = 0;
  p = 0;
  let l#1;
  for (const l#1 of c#1.series) {
    let m#1;
    let d#2;
    let h#1;
    let c#2;
    let u#2;
    u#2 = kt(i[b], l#1.dataKey);
    if (!((u#2 >= 0))) goto L_2ec;
    goto L_2ef;
    // [栈深重同步 4 -> 3]
    c#2 = p;
    h#1 = (c#2 + u#2);
    if (!((u#2 >= 0))) goto L_30a;
    g = h#1;
    goto L_311;
    // [栈深重同步 4 -> 3]
    p = h#1;
    h#1;
    d#2 = Ht(Pt(c#2, n.min, n.max), o, n);
    m#1 = Ht(Pt(h#1, n.min, n.max), o, n);
    if (!((e.barRadius == null))) goto L_4a6;
    e.barRadius;
    zt(t, x, Math.min(d#2, m#1), f, Math.max(1, Math.abs((m#1 - d#2))), Math.max(0, 4), Tt(i[b], l#1, r.indexOf(l#1), b, a.length, s));
  }
  if (!((0 === c#1.series.length))) goto L_541;
  zt(t, x, (m - 1), f, 1, 0, Gt("alpha-10", s));
  u#1 = <u#1_new>;
  (u#1++);
  goto L_23c;
  b = <b_new>;
  (b++);
  goto L_1f6;
  return;
}

// fn q  args=8 vars=10 closure=7 cpool=0 bc=248B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n, s, a
// locals: l, u
// closure: Ht, Wt, _t, rt, ne, Xt, P
function {
  let u;
  let l;
  if (!((0 === r.length))) goto L_d;
  return;
  l = Ht(0, o, n);
  u = Wt(i, a, s);
  _t(t, "".concat(rt(r, i.curveType), " L ", ne(r[(r.length - 1)].x), " ", ne(l), " L ", ne(r[0].x), " ", ne(l), " Z"), Xt(u, P), undefined, undefined, undefined);
  return;
}

// fn G  args=6 vars=8 closure=8 cpool=0 bc=326B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n
// locals: s, a
// closure: Bt, _t, rt, $, X, Dt, Gt, L
function {
  let s;
  if (!((0 === r.length))) goto L_a;
  return;
  s = Bt(i, n, o);
  _t(t, rt(r, i.curveType), "none", s, $, "round");
  if (!((true === e.showDots))) goto L_145;
  let a;
  for (const a of X(e, r)) {
    Dt(t, a.x, a.y, 5, Gt("color-surface", o), undefined);
    Dt(t, a.x, a.y, L, s, undefined);
  }
  return;
}

// fn V  args=5 vars=10 closure=5 cpool=1 bc=532B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o
// locals: n, s, a, l, e#1
// closure: Gt, Ot, N, Y, U
function {
  let a;
  let s;
  let n;
  if (!((true !== e.showValueLabels))) goto L_31;
  return;
  if (!((e.valueLabelInterval == null))) goto L_a6;
  e.valueLabelInterval;
  n = Math.max(1, Math.floor(1));
  if (!((e.valueLabelOffset == null))) goto L_122;
  e.valueLabelOffset;
  s = Math.max(0, Math.floor(0));
  a = Gt("color-text", o);
  let l;
  l = 0;
  if (!((l < i.length))) goto L_213;
  let e#1;
  if (((((l - s) % n) !== 0))) goto L_208;
  e#1 = i[l];
  Ot(t, {anchor: "middle", color: a, size: N, value: e#1.formattedValue, weight: "600", x: Y(e#1.x, r), y: U(e#1.y)});
  l = <l_new>;
  (l++);
  goto L_139;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=12B file=dil_charts/src/widgets/SvgChart
// args: t, e
// closure: r, i
function {
  return (((e - r) % i) === 0);
}

// fn X  args=2 vars=4 closure=0 cpool=1 bc=310B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, r
function {
  let r;
  let i;
  if (!((t.valueLabelInterval == null))) goto L_7b;
  t.valueLabelInterval;
  i = Math.max(1, Math.floor(1));
  if (!((t.valueLabelOffset == null))) goto L_f7;
  t.valueLabelOffset;
  r = Math.max(0, Math.floor(0));
  if (!((1 === i))) goto L_10e;
  if (!((0 === r))) goto L_10e;
  return e;
  return e.filter(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=18B file=dil_charts/src/widgets/SvgChart
// args: t
// closure: e
function {
  return (String(t) === String(e));
}

// fn j  args=5 vars=14 closure=7 cpool=1 bc=408B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o
// locals: n, s, a, l, u, c, h, e#1, o#1
// closure: Nt, Lt, Gt, Rt, Ot, k, It
function {
  let c;
  let u;
  let l;
  let a;
  let s;
  let n;
  n = Nt(e);
  if (!((true === n.hide))) goto L_40;
  return;
  s = Lt(e);
  if (!((n.labels == null))) goto L_6e;
  n.labels;
  a = {};
  l = n.ticks;
  u = Gt("color-text-tertiary", o);
  c = r.labelBottom;
  let h;
  h = 0;
  if (!((h < i.length))) goto L_197;
  let o#1;
  let e#1;
  e#1 = Rt(i[h], s, h);
  if (!((undefined !== l))) goto L_122;
  if (!(!l.some(function <atom:0>))) goto L_122;
  // close_loc e#1
  goto L_18c;
  if (!((a[String(e#1)] == null))) goto L_13c;
  a[String(e#1)];
  o#1 = String(e#1);
  if (!((0 !== o#1.length))) goto L_188;
  Ot(t, {anchor: "middle", color: u, size: k, value: o#1, x: It(h, i.length, r), y: c});
  // close_loc e#1
  h = <h_new>;
  (h++);
  goto L_ca;
  return;
}

// fn Y  args=2 vars=2 closure=1 cpool=0 bc=44B file=dil_charts/src/widgets/SvgChart
// args: t, e
// closure: Pt
function {
  return Pt(t, 21, (e.width - 21));   // tail call
}

// fn U  args=1 vars=1 closure=1 cpool=0 bc=48B file=dil_charts/src/widgets/SvgChart
// args: t
// closure: N
function {
  return Math.max(N, (t - 8));   // tail call
}

// fn Q  args=6 vars=12 closure=5 cpool=0 bc=351B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n
// locals: s, a, l, u, c, h
// closure: Gt, Ot, k, te, Ht
function {
  let c;
  let u;
  let l;
  let a;
  let s;
  if (!((true !== e.showYAxis))) goto L_37;
  return;
  s = e.yAxis;
  a = Gt("color-text-tertiary", n);
  if (!((s == null))) goto L_70;
  s;
  goto L_91;
  if (!((undefined.orientation == null))) goto L_9b;
  undefined.orientation;
  l = "left";
  if (!(("right" === l))) goto L_cd;
  goto L_f1;
  // [栈深重同步 1 -> 0]
  u = (r.plotLeft - 6);
  if (!(("right" === l))) goto L_104;
  goto L_109;
  // [栈深重同步 1 -> 0]
  c = "end";
  let h;
  for (const h of i) {
    Ot(t, {anchor: c, color: a, size: k, value: te(h, s), x: u, y: (Ht(h, r, o) + 3)});
  }
  return;
}

// fn J  args=5 vars=10 closure=5 cpool=0 bc=503B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o
// locals: n, s, a, e#1, l
// closure: Dt, Bt, Ot, Gt, R
function {
  let s;
  let n;
  if (!((e.showLegend == null))) goto L_31;
  e.showLegend;
  if (((true !== true))) goto L_5a;
  if (!((0 === r.legendHeight))) goto L_5d;
  return;
  n = r.plotLeft;
  s = (r.height - 9);
  let a;
  a = 0;
  if (!((a < i.length))) goto L_1f6;
  let l;
  let e#1;
  e#1 = i[a];
  if (!((e#1.label == null))) goto L_10f;
  e#1.label;
  l = e#1.dataKey;
  if (((undefined === l))) goto L_120;
  if (((0 === l.length))) goto L_1eb;
  Dt(t, (n + 4), (s - 3), 4, Bt(e#1, a, o), undefined);
  Ot(t, {anchor: "start", color: Gt("color-text-secondary", o), size: R, value: l, x: (n + 12), y: s});
  n = (n + Math.max(52, ((6 * l.length) + 22)));
  (n + Math.max(52, ((6 * l.length) + 22)));
  if (((n > (r.width - 48)))) goto L_1f6;
  a = <a_new>;
  (a++);
  goto L_ab;
  return;
}

// fn Z  args=3 vars=12 closure=7 cpool=0 bc=661B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// locals: r, o, n, s, a, l, u, c, h
// closure: Nt, y, M, v, p, x, g
function {
  let h;
  let c;
  let u;
  let l;
  let a;
  let s;
  let n;
  let o;
  let r;
  if (!((t.showLegend == null))) goto L_44;
  t.showLegend;
  r = true;
  o = Nt(t);
  if (!((true === o.hide))) goto L_75;
  goto L_a4;
  // [栈深重同步 1 -> 0]
  if (!((o.tickMargin == null))) goto L_a3;
  o.tickMargin;
  n = (y + 8);
  if (!(r)) goto L_af;
  goto L_b0;
  // [栈深重同步 1 -> 0]
  s = 0;
  if (!((true === t.showYAxis))) goto L_12d;
  if (!((t.yAxis == null))) goto L_102;
  t.yAxis;
  goto L_123;
  if (!((undefined.width == null))) goto L_12e;
  undefined.width;
  goto L_12e;
  // [栈深重同步 1 -> 0]
  a = 0;
  if (!((t.yAxis == null))) goto L_15f;
  t.yAxis;
  goto L_180;
  l = ("right" === undefined.orientation);
  if (!(l)) goto L_18e;
  goto L_191;
  // [栈深重同步 2 -> 1]
  u = (p + a);
  if (!(l)) goto L_1a3;
  goto L_1a4;
  // [栈深重同步 2 -> 1]
  c = ((e - p) - 0);
  h = Math.max(48, ((i - n) - s));
  return {height: i, labelBottom: ((i - s) - 6), legendHeight: s, plotBottom: h, plotHeight: Math.max(x, (h - g)), plotLeft: u, plotRight: c, plotTop: g, plotWidth: Math.max(1, (c - u)), width: e, yAxisWidth: a};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=dil_charts/src/widgets/SvgChart
// args: t
// closure: bt
function {
  return ("bar" === bt(t.type));
}

// fn tt  args=3 vars=20 closure=5 cpool=1 bc=971B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// locals: r, o, d, t#1, e#1, i#1, r#1, t#2, t#3, n, s, a, l, u, c, h, t#4
// closure: bt, ft, kt, xt, gt
function {
  let h;
  let c;
  let u;
  let l;
  let a;
  let s;
  let n;
  let o;
  let r;
  r = [];
  o = ft(e.filter(function <atom:0>));
  let d;
  for (const d of t) {
    let t#1;
    for (const t#1 of o) {
      let i#1;
      let e#1;
      e#1 = 0;
      i#1 = 0;
      let r#1;
      for (const r#1 of t#1.series) {
        let t#2;
        t#2 = kt(d, r#1.dataKey);
        if (!((t#2 >= 0))) goto L_d7;
        e#1 = (e#1 + t#2);
        goto L_e2;
        // [栈深重同步 4 -> 3]
        i#1 = (i#1 + t#2);
        (i#1 + t#2);
        // [栈深重同步 3 -> 6]
      }
      r.push(e#1, i#1);
      // [栈深重同步 3 -> 6]
    }
    let t#3;
    for (const t#3 of e) {
      if (!(("bar" !== bt(t#3.type)))) goto L_1aa;
      r.push(kt(d, t#3.dataKey));
      // [栈深重同步 3 -> 6]
    }
  }
  if (!((0 === r.length))) goto L_1c8;
  goto L_1fc;
  // [栈深重同步 1 -> 0]
  // append([0], 1, r)
  r;
  n = Math.min.apply(Math, [0]);
  if (!((0 === r.length))) goto L_209;
  goto L_23d;
  // [栈深重同步 1 -> 0]
  // append([0], 1, r)
  r;
  s = Math.max.apply(Math, [0]);
  if (!((i.yAxis == null))) goto L_269;
  i.yAxis;
  goto L_28a;
  a = undefined.domain;
  if (!((a == null))) goto L_297;
  a;
  goto L_299;
  l = undefined[0];
  if (!((a == null))) goto L_2a6;
  a;
  goto L_2a8;
  u = undefined[1];
  if (!((a == null))) goto L_2b6;
  a;
  goto L_2b8;
  c = xt(undefined[0], n, s, true);
  if (!((a == null))) goto L_2d1;
  a;
  goto L_2d3;
  h = xt(undefined[1], n, s, false);
  if (!((c === h))) goto L_2fe;
  c = (c - 1);
  (c - 1);
  h = (h + 1);
  (h + 1);
  if (((undefined === l))) goto L_327;
  if ((("auto" === l))) goto L_327;
  if (((undefined === u))) goto L_327;
  if (!(("auto" === u))) goto L_3b9;
  let t#4;
  t#4 = gt(c, h);
  if (!((undefined !== l))) goto L_34d;
  if ((("auto" !== l))) goto L_379;
  c = t#4.min;
  t#4.min;
  if (!((undefined !== u))) goto L_38c;
  if ((("auto" !== u))) goto L_3b8;
  h = t#4.max;
  t#4.max;
  return {max: h, min: c};
}

// fn et  args=2 vars=7 closure=2 cpool=0 bc=685B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, r, o, n, s
// closure: pt, yt
function {
  let n;
  let o;
  let r;
  let i;
  if (!((t.yAxis == null))) goto L_37;
  t.yAxis;
  goto L_58;
  if (!((undefined !== undefined.ticks))) goto L_10d;
  if (!((t.yAxis.ticks.length > 0))) goto L_10d;
  return t.yAxis.ticks.slice();   // tail call
  i = pt(((e.max - e.min) / Math.max(1, 4)), true);
  r = [];
  o = (Math.ceil((e.min / i)) * i);
  n = (e.max + (i / 2));
  let s;
  s = o;
  if (!((s <= n))) goto L_259;
  if (!((r.length < 20))) goto L_259;
  r.push(yt(s));
  s = (s + i);
  (s + i);
  goto L_20c;
  if (!((r.length > 0))) goto L_265;
  return r;
  return [e.min, e.max];
}

// fn it  args=5 vars=10 closure=6 cpool=0 bc=207B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o
// locals: n, s, a, i#1, l
// closure: Lt, kt, Ct, Rt, It, Ht
function {
  let s;
  let n;
  n = Lt(i);
  s = [];
  let a;
  a = 0;
  if (!((a < t.length))) goto L_cb;
  let l;
  let i#1;
  i#1 = t[a];
  l = kt(i#1, e.dataKey);
  s.push({formattedValue: Ct(i#1, l), rawX: Rt(i#1, n, a), value: l, x: It(a, t.length, r), y: Ht(l, r, o)});
  a = <a_new>;
  (a++);
  goto L_13;
  return s;
}

// fn rt  args=2 vars=3 closure=5 cpool=1 bc=100B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i
// closure: ot, at, lt, st, nt
function {
  let i;
  if (!((0 === t.length))) goto L_b;
  return "";
  i = ot(e);
  if (!(("natural" === i))) goto L_1e;
  return at(t);
  if (!(("monotoneX" === i))) goto L_2d;
  return lt(t);
  if (!(("stepBefore" === i))) goto L_3d;
  return st(t, 0);
  if (!(("step" === i))) goto L_4e;
  return st(t, 0.5);
  if (!(("stepAfter" === i))) goto L_5e;
  return st(t, 1);
  return nt(t);
}

// fn ot  args=1 vars=1 closure=0 cpool=0 bc=87B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if (((undefined === t))) goto L_e;
  if (!(("natural" === t))) goto L_16;
  return "natural";
  if ((("monotone" === t))) goto L_28;
  if (!(("monotoneX" === t))) goto L_30;
  return "monotoneX";
  if ((("step" === t))) goto L_4d;
  if ((("stepBefore" === t))) goto L_4d;
  if (!(("stepAfter" === t))) goto L_51;
  return t;
  return "linear";
}

// fn nt  args=1 vars=4 closure=1 cpool=0 bc=297B file=dil_charts/src/widgets/SvgChart
// args: t
// locals: e, i, r
// closure: ne
function {
  let e;
  e = "M ".concat(ne(t[0].x), " ", ne(t[0].y));
  let i;
  i = 1;
  if (!((i < t.length))) goto L_125;
  let r;
  r = t[i];
  e = (e + " L ".concat(ne(r.x), " ", ne(r.y)));
  (e + " L ".concat(ne(r.x), " ", ne(r.y)));
  i = <i_new>;
  (i++);
  goto L_83;
  return e;
}

// fn st  args=2 vars=8 closure=1 cpool=0 bc=807B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, r, o, n, s, e#1
// closure: ne
function {
  let i;
  i = "M ".concat(ne(t[0].x), " ", ne(t[0].y));
  let r;
  r = 1;
  if (!((r < t.length))) goto L_27c;
  let s;
  let n;
  let o;
  o = t[(r - 1)];
  n = t[r];
  if (!((e <= 0))) goto L_189;
  i = (i + " L ".concat(ne(o.x), " ", ne(n.y), " L ", ne(n.x), " ", ne(n.y)));
  (i + " L ".concat(ne(o.x), " ", ne(n.y), " L ", ne(n.x), " ", ne(n.y)));
  goto L_271;
  s = ((o.x * (1 - e)) + (n.x * e));
  i = (i + " L ".concat(ne(s), " ", ne(o.y), " L ", ne(s), " ", ne(n.y)));
  (i + " L ".concat(ne(s), " ", ne(o.y), " L ", ne(s), " ", ne(n.y)));
  r = <r_new>;
  (r++);
  goto L_83;
  if (!((e > 0))) goto L_323;
  if (!((e < 1))) goto L_323;
  if (!((t.length > 1))) goto L_323;
  let e#1;
  e#1 = t[(t.length - 1)];
  i = (i + " L ".concat(ne(e#1.x), " ", ne(e#1.y)));
  (i + " L ".concat(ne(e#1.x), " ", ne(e#1.y)));
  return i;
}

// fn at  args=1 vars=8 closure=3 cpool=0 bc=936B file=dil_charts/src/widgets/SvgChart
// args: t
// locals: e, i, r, t#1, o, n, s
// closure: ut, nt, ne
function {
  let i;
  let e;
  e = ut(t);
  if (!((e.length < 3))) goto L_19;
  return nt(e);   // tail call
  i = "M ".concat(ne(e[0].x), " ", ne(e[0].y));
  let r;
  r = 0;
  if (!((r < (e.length - 1)))) goto L_3a4;
  let s;
  let n;
  let o;
  let t#1;
  t#1 = e[Math.max(0, (r - 1))];
  o = e[r];
  n = e[(r + 1)];
  s = e[Math.min((e.length - 1), (r + 2))];
  i = (i + " C ".concat(ne((o.x + ((n.x - t#1.x) / 6))), " ", ne((o.y + ((n.y - t#1.y) / 6))), " ", ne((n.x - ((s.x - o.x) / 6))), " ", ne((n.y - ((s.y - o.y) / 6))), " ", ne(n.x), " ", ne(n.y)));
  (i + " C ".concat(ne((o.x + ((n.x - t#1.x) / 6))), " ", ne((o.y + ((n.y - t#1.y) / 6))), " ", ne((n.x - ((s.x - o.x) / 6))), " ", ne((n.y - ((s.y - o.y) / 6))), " ", ne(n.x), " ", ne(n.y)));
  r = <r_new>;
  (r++);
  goto L_9d;
  return i;
}

// fn lt  args=1 vars=9 closure=5 cpool=0 bc=824B file=dil_charts/src/widgets/SvgChart
// args: t
// locals: e, i, o, r, o#1, t#1, n, s
// closure: ut, nt, ct, ht, ne
function {
  let r;
  let i;
  let e;
  e = ut(t);
  if (!((e.length < 3))) goto L_1c;
  return nt(e);   // tail call
  i = Array(e.length).fill(0);
  let o;
  o = 1;
  if (!((o < (e.length - 1)))) goto L_8a;
  i[o] = ct(e[(o - 1)], e[o], e[(o + 1)]);
  o = <o_new>;
  (o++);
  goto L_51;
  i[0] = ht(e[0], e[1], i[1]);
  i[(e.length - 1)] = ht(e[(e.length - 2)], e[(e.length - 1)], i[(e.length - 2)]);
  r = "M ".concat(ne(e[0].x), " ", ne(e[0].y));
  let o#1;
  o#1 = 1;
  if (!((o#1 < e.length))) goto L_334;
  let s;
  let n;
  let t#1;
  t#1 = e[(o#1 - 1)];
  n = e[o#1];
  s = ((n.x - t#1.x) / 3);
  r = (r + " C ".concat(ne((t#1.x + s)), " ", ne((t#1.y + (s * i[(o#1 - 1)]))), " ", ne((n.x - s)), " ", ne((n.y - (s * i[o#1]))), " ", ne(n.x), " ", ne(n.y)));
  (r + " C ".concat(ne((t#1.x + s)), " ", ne((t#1.y + (s * i[(o#1 - 1)]))), " ", ne((n.x - s)), " ", ne((n.y - (s * i[o#1]))), " ", ne(n.x), " ", ne(n.y)));
  o#1 = <o#1_new>;
  (o#1++);
  goto L_155;
  return r;
}

// fn ut  args=1 vars=4 closure=0 cpool=0 bc=252B file=dil_charts/src/widgets/SvgChart
// args: t
// locals: e, i, t#1
function {
  let e;
  e = [];
  let i;
  for (const i of t) {
    let t#1;
    t#1 = e[(e.length - 1)];
    if (!((undefined !== t#1))) goto L_c0;
    if (!((t#1.x === i.x))) goto L_c0;
    if (((t#1.y === i.y))) goto L_ee;
    e.push(i);
  }
  return e;
}

// fn ct  args=3 vars=8 closure=1 cpool=1 bc=553B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// locals: r, o, n, s, a
// closure: dt
function {
  let a;
  let s;
  let n;
  let o;
  let r;
  r = (e.x - t.x);
  o = (i.x - e.x);
  if (((0 === r))) goto L_b6;
  if (((0 === o))) goto L_b6;
  if (!(((r + o) === 0))) goto L_ba;
  return 0;
  n = ((e.y - t.y) / r);
  s = ((i.y - e.y) / o);
  a = (((n * o) + (s * r)) / (r + o));
  if ((((dt(n) + dt(s)) * Math.min(Math.abs(n), Math.abs(s), (0.5 * Math.abs(a)))))) goto L_228;
  return 0;
}

// fn ht  args=3 vars=4 closure=0 cpool=0 bc=164B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// locals: r
function {
  let r;
  r = (e.x - t.x);
  if (!((0 !== r))) goto L_a2;
  return ((((3 * (e.y - t.y)) / r) / 2) - (i / 2));
  return i;
}

// fn dt  args=1 vars=1 closure=0 cpool=0 bc=9B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if (!((t < 0))) goto L_7;
  return -1;
  return 1;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=dil_charts/src/widgets/SvgChart
// args: e
// closure: t
function {
  return (e.key === t);
}

// fn ft  args=1 vars=5 closure=0 cpool=1 bc=351B file=dil_charts/src/widgets/SvgChart
// args: t
// locals: e, i, t#1, r
function {
  let e;
  e = [];
  let i;
  for (const i of t) {
    let r;
    let t#1;
    if (!((i.stack == null))) goto L_95;
    i.stack;
    if (!((i.dataKey == null))) goto L_95;
    i.dataKey;
    t#1 = "series-".concat(e.length);
    r = e.findIndex(function <atom:0>);
    if (!((r >= 0))) goto L_113;
    // append([], 0, e[r].series)
    [][e[r].series] = i;
    (i ++);
    e[r] = {key: t#1, series: []};
    goto L_14e;
    // [栈深重同步 4 -> 3]
    e.push({key: t#1, series: [i]});
    // close_loc t#1
  }
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=83B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if (!(("string" == typeof t.dataKey))) goto L_52;
  return (t.dataKey.length > 0);
}

// fn mt  args=1 vars=1 closure=0 cpool=1 bc=49B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if (!((undefined === t))) goto L_9;
  return [];
  return t.filter(function <atom:0>);
}

// fn bt  args=1 vars=1 closure=0 cpool=0 bc=36B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if (!(("line" === t))) goto L_f;
  return "line";
  if (!(("area" === t))) goto L_1e;
  return "area";
  return "bar";
}

// fn xt  args=4 vars=4 closure=0 cpool=0 bc=85B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r
function {
  if (!(("number" == typeof t))) goto L_38;
  if (!(Number.isFinite(t))) goto L_38;
  return t;
  if (!(("dataMin" === t))) goto L_43;
  return e;
  if (!(("dataMax" === t))) goto L_4e;
  return i;
  if (!(r)) goto L_53;
  return e;
  return i;
}

// fn gt  args=2 vars=4 closure=1 cpool=0 bc=195B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, r
// closure: pt
function {
  let r;
  let i;
  i = (e - t);
  if (!((i <= 0))) goto L_1f;
  return {max: e, min: t};
  r = pt((i / Math.max(1, 4)), true);
  return {max: (Math.ceil((e / r)) * r), min: (Math.floor((t / r)) * r)};
}

// fn pt  args=2 vars=5 closure=0 cpool=1 bc=363B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, r, o
function {
  let o;
  let r;
  let i;
  if ((!Number.isFinite(t))) goto L_3b;
  if (!((t <= 0))) goto L_3f;
  return 1;
  i = Math.floor((Math.log(t) / Math.LN10));
  r = (t / Math.pow(10, i));
  o = undefined;
  if (!(e)) goto L_113;
  if (!((r < 1.5))) goto L_fb;
  goto L_133;
  // [栈深重同步 1 -> 0]
  if (!((r < 3))) goto L_105;
  goto L_133;
  // [栈深重同步 1 -> 0]
  if (!((r < 7))) goto L_10f;
  goto L_133;
  // [栈深重同步 1 -> 0]
  goto L_133;
  // [栈深重同步 1 -> 0]
  if (!((r <= 1))) goto L_11d;
  goto L_133;
  // [栈深重同步 1 -> 0]
  if (!((r <= 2))) goto L_127;
  goto L_133;
  // [栈深重同步 1 -> 0]
  if (!((r <= 5))) goto L_131;
  goto L_133;
  // [栈深重同步 1 -> 0]
  o = 10;
  10;
  return (o * Math.pow(10, i));
}

// fn yt  args=1 vars=1 closure=0 cpool=1 bc=104B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if (!((Math.abs(t) < 1e-09))) goto L_31;
  return 0;
  return (Math.round((1000000000 * t)) / 1000000000);
}

// fn At  args=1 vars=5 closure=2 cpool=0 bc=542B file=dil_charts/src/widgets/SvgChart
// args: t
// locals: e, i, r, o
// closure: wt, b
function {
  let o;
  let r;
  let i;
  let e;
  if (!((true !== t.scrollable))) goto L_83;
  if (!((t.width == null))) goto L_7d;
  t.width;
  return wt(t.size, b);   // tail call
  if (!((t.data == null))) goto L_d4;
  t.data;
  goto L_d5;
  if (!((undefined.length == null))) goto L_db;
  undefined.length;
  e = Math.max(1, 1);
  if (!(("number" == typeof t.visiblePointCount))) goto L_12e;
  goto L_12f;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!((undefined !== i))) goto L_147;
  if (!((i > 0))) goto L_147;
  goto L_149;
  // [栈深重同步 1 -> 0]
  r = 48;
  if (!((t.minPointWidth == null))) goto L_19c;
  t.minPointWidth;
  o = Math.max(1, r, 0);
  if (!((t.width == null))) goto L_210;
  t.width;
  return Math.max(wt(t.size, b), (e * o));   // tail call
}

// fn vt  args=1 vars=1 closure=2 cpool=0 bc=80B file=dil_charts/src/widgets/SvgChart
// args: t
// closure: wt, m
function {
  if (!((t.height == null))) goto L_4a;
  t.height;
  return wt(t.size, m);   // tail call
}

// fn Mt  args=2 vars=9 closure=4 cpool=0 bc=461B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, r, o, l, n, s, a
// closure: Lt, Rt, wt, b
function {
  let a;
  let s;
  let n;
  let o;
  let r;
  let i;
  if (!((undefined === t.scrollToValue))) goto L_39;
  return;
  if (!((t.data == null))) goto L_63;
  t.data;
  i = [];
  if (!((0 === i.length))) goto L_6d;
  return;
  r = Lt(t);
  o = -1;
  let l;
  l = 0;
  if (!((l < i.length))) goto L_d6;
  if (!((String(Rt(i[l], r, l)) === String(t.scrollToValue)))) goto L_cc;
  o = l;
  l;
  goto L_d6;
  l = <l_new>;
  (l++);
  goto L_78;
  if (!((o < 0))) goto L_de;
  return;
  if (!((t.width == null))) goto L_128;
  t.width;
  n = wt(t.size, b);
  s = Math.max(0, (e - n));
  if (!((0 === s))) goto L_168;
  return 0;
  a = (e / i.length);
  return Math.min(s, Math.max(0, (o * a)));   // tail call
}

// fn wt  args=2 vars=3 closure=0 cpool=2 bc=183B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: e#1
function {
  if (!(("number" == typeof t))) goto L_3d;
  if (!(Number.isFinite(t))) goto L_3d;
  if (!((t > 0))) goto L_3d;
  return t;
  if (!(("string" == typeof t))) goto L_b5;
  let e#1;
  e#1 = Number(t.replace(new RegExp("px$"), ""));
  if (!(Number.isFinite(e#1))) goto L_b5;
  if (!((e#1 > 0))) goto L_b5;
  return e#1;
  return e;
}

// fn $t  args=2 vars=4 closure=1 cpool=2 bc=456B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, i#1
// closure: H
function {
  if (!(("number" == typeof t))) goto L_61;
  if (!(Number.isFinite(t))) goto L_61;
  return Math.max(0, t);   // tail call
  if (!(("string" == typeof t))) goto L_1c2;
  let i#1;
  if (!(t.endsWith("%"))) goto L_135;
  let i;
  i = Number(t.substring(0, (t.length - 1)));
  if (!(Number.isFinite(i))) goto L_135;
  return Math.max(0, ((e * i) / 200));   // tail call
  i#1 = Number(t.replace(new RegExp("px$"), ""));
  if (!(Number.isFinite(i#1))) goto L_1c2;
  return Math.max(0, i#1);   // tail call
  return (e * H);
}

// fn Lt  args=1 vars=1 closure=0 cpool=0 bc=164B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if (!(("string" == typeof t.xAxis))) goto L_4e;
  return t.xAxis;
  if (!((t.xAxis == null))) goto L_78;
  t.xAxis;
  goto L_99;
  if (!((undefined.dataKey == null))) goto L_a3;
  undefined.dataKey;
  return "label";
}

// fn Nt  args=1 vars=1 closure=0 cpool=0 bc=209B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if ((("string" == typeof t.xAxis))) goto L_51;
  if (!((undefined === t.xAxis))) goto L_ae;
  if (!(("string" == typeof t.xAxis))) goto L_a3;
  goto L_a8;
  // [栈深重同步 2 -> 1]
  return {dataKey: "label"};
  return t.xAxis;
}

// fn St  args=1 vars=2 closure=1 cpool=0 bc=90B file=dil_charts/src/widgets/SvgChart
// args: t
// locals: e
// closure: Nt
function {
  let e;
  e = Nt(t);
  if (!((true !== e.hide))) goto L_59;
  return (false !== e.axisLine);
}

// fn kt  args=2 vars=3 closure=0 cpool=0 bc=72B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i
function {
  let i;
  if (!((undefined === e))) goto L_a;
  return 0;
  i = Number(t[e]);
  if (!(Number.isFinite(i))) goto L_46;
  return i;
  return 0;
}

// fn Rt  args=3 vars=4 closure=0 cpool=0 bc=39B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// locals: r
function {
  let r;
  r = t[e];
  if ((("number" == typeof r))) goto L_1f;
  if (!(("string" == typeof r))) goto L_25;
  return r;
  return i;
}

// fn Ct  args=2 vars=3 closure=1 cpool=0 bc=66B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i
// closure: oe
function {
  let i;
  i = t.formatted;
  if (!(("string" == typeof i))) goto L_3e;
  if (!((i.length > 0))) goto L_3e;
  return i;
  return oe(e);
}

// fn It  args=3 vars=3 closure=0 cpool=1 bc=117B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
function {
  if (!((e <= 0))) goto L_28;
  return i.plotLeft;
  return (i.plotLeft + ((i.plotWidth * (t + 0.5)) / e));
}

// fn Ht  args=3 vars=4 closure=1 cpool=0 bc=254B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// locals: r
// closure: Pt
function {
  let r;
  r = ((Pt(t, i.min, i.max) - i.min) / (i.max - i.min));
  return (e.plotBottom - (r * e.plotHeight));
}

// fn Pt  args=3 vars=3 closure=0 cpool=0 bc=85B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
function {
  return Math.min(i, Math.max(e, t));   // tail call
}

// fn zt  args=7 vars=8 closure=3 cpool=0 bc=501B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n, s
// locals: a
// closure: ne, jt, Jt
function {
  let a;
  t.beginNode("rect");
  t.addAttribute("x", ne(e));
  t.addAttribute("y", ne(i));
  t.addAttribute("width", ne(r));
  t.addAttribute("height", ne(o));
  if (!((n > 0))) goto L_151;
  t.addAttribute("rx", ne(Math.min(n, (r / 2), (o / 2))));
  a = jt(s);
  t.addAttribute("fill", a.color);
  Jt(t, a.opacity);
  t.endNode();
  return;
}

// fn Dt  args=6 vars=8 closure=3 cpool=0 bc=495B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n
// locals: s, e#1
// closure: ne, jt, Zt
function {
  let s;
  t.beginNode("circle");
  t.addAttribute("cx", ne(e));
  t.addAttribute("cy", ne(i));
  t.addAttribute("r", ne(r));
  s = jt(o);
  t.addAttribute("fill", s.color);
  if (!((undefined !== n))) goto L_19c;
  let e#1;
  e#1 = jt(n);
  t.addAttribute("stroke", e#1.color);
  Zt(t, "stroke-opacity", e#1.opacity);
  Zt(t, "fill-opacity", s.opacity);
  t.endNode();
  return;
}

// fn Ft  args=8 vars=9 closure=3 cpool=0 bc=498B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n, s, a
// locals: l
// closure: ne, jt, Jt
function {
  let l;
  t.beginNode("line");
  t.addAttribute("x1", ne(e));
  t.addAttribute("y1", ne(i));
  t.addAttribute("x2", ne(r));
  t.addAttribute("y2", ne(o));
  l = jt(n);
  t.addAttribute("stroke", l.color);
  t.addAttribute("stroke-width", ne(s));
  if (!((undefined !== a))) goto L_1a3;
  t.addAttribute("stroke-dasharray", a);
  Jt(t, l.opacity);
  t.endNode();
  return;
}

// fn _t  args=6 vars=8 closure=3 cpool=0 bc=553B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n
// locals: s, e#1
// closure: jt, Zt, ne
function {
  let s;
  t.beginNode("path");
  t.addAttribute("d", e);
  s = jt(i);
  t.addAttribute("fill", s.color);
  if (!((undefined !== r))) goto L_138;
  let e#1;
  e#1 = jt(r);
  t.addAttribute("stroke", e#1.color);
  Zt(t, "stroke-opacity", e#1.opacity);
  Zt(t, "fill-opacity", s.opacity);
  if (!((undefined !== o))) goto L_19d;
  t.addAttribute("stroke-width", ne(o));
  if (!((undefined !== n))) goto L_202;
  t.addAttribute("stroke-linecap", n);
  t.addAttribute("stroke-linejoin", n);
  t.endNode();
  return;
}

// fn Ot  args=2 vars=3 closure=3 cpool=0 bc=791B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i
// closure: jt, ne, Jt
function {
  let i;
  i = jt(e.color);
  t.beginNode("text");
  t.addAttribute("x", ne(e.x));
  t.addAttribute("y", ne(e.y));
  t.addAttribute("fill", i.color);
  t.addAttribute("font-family", "system-ui, -apple-system, sans-serif");
  t.addAttribute("font-size", ne(e.size));
  t.addAttribute("text-anchor", e.anchor);
  if (!((undefined !== e.weight))) goto L_280;
  t.addAttribute("font-weight", e.weight);
  Jt(t, i.opacity);
  t.addText(e.value);
  t.endNode();
  return;
}

// fn Bt  args=3 vars=3 closure=2 cpool=0 bc=49B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// closure: Kt, F
function {
  return Kt(t.color, F[(e % F.length)], i);   // tail call
}

// fn Tt  args=6 vars=7 closure=3 cpool=0 bc=141B file=dil_charts/src/widgets/SvgChart
// args: t, e, i, r, o, n
// locals: s
// closure: Kt, F, Bt
function {
  let s;
  s = t.fill;
  if (!(("string" == typeof s))) goto L_45;
  return Kt(s, F[(r % F.length)], n);
  if (((undefined !== e.color))) goto L_72;
  if (!((o > 1))) goto L_7c;
  return Bt(e, i, n);
  return Kt(undefined, F[(r % F.length)], n);
}

// fn Wt  args=3 vars=3 closure=2 cpool=0 bc=88B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// closure: Kt, F
function {
  if (!((t.fillColor == null))) goto L_4a;
  t.fillColor;
  return Kt(t.color, F[(e % F.length)], i);   // tail call
}

// fn Kt  args=3 vars=5 closure=4 cpool=0 bc=70B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// locals: r, o
// closure: Et, qt, Gt, s
function {
  let o;
  let r;
  r = Et(t);
  o = qt(e);
  if (!((s.resolveDILColor(r, o) == null))) goto L_42;
  s.resolveDILColor(r, o);
  return Gt(o, i);   // tail call
}

// fn Et  args=1 vars=1 closure=1 cpool=0 bc=16B file=dil_charts/src/widgets/SvgChart
// args: t
// closure: qt
function {
  if (!(("string" == typeof t))) goto L_e;
  return qt(t);
  return t;
}

// fn qt  args=1 vars=1 closure=1 cpool=0 bc=12B file=dil_charts/src/widgets/SvgChart
// args: t
// closure: _
function {
  if (!((_[t] == null))) goto L_b;
  _[t];
  return t;
}

// fn Gt  args=2 vars=5 closure=0 cpool=0 bc=71B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, r, t#1
function {
  let i;
  i = t;
  let r;
  r = 0;
  if (!((r < 8))) goto L_43;
  let t#1;
  t#1 = e[i];
  if (((undefined === t#1))) goto L_2b;
  if (!((t#1 === i))) goto L_31;
  return i;
  i = t#1;
  t#1;
  r = <r_new>;
  (r++);
  goto L_a;
  return i;
}

// fn Vt  args=1 vars=1 closure=2 cpool=0 bc=130B file=dil_charts/src/widgets/SvgChart
// args: t
// closure: a, l
function {
  if (!(("dark" === t))) goto L_2e;
  return a.DIL_DARK_COLOR_PALETTE;
  if (!(("light" === t))) goto L_5c;
  return a.DIL_LIGHT_COLOR_PALETTE;
  return l.getCurrentDILPalette();
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  return "".concat(t, t);   // tail call
}

// fn Xt  args=2 vars=7 closure=1 cpool=7 bc=821B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, r, o, n, s
// closure: ne
function {
  let s;
  let n;
  let o;
  let r;
  let i;
  i = t.match(new RegExp("^rgba\\(([^,]+),([^,]+),([^,]+),([^)]+)\\)$"));
  if (!((null !== i))) goto L_ff;
  return "rgba(".concat(i[1].trim(), ", ", i[2].trim(), ", ", i[3].trim(), ", ", ne(e), ")");   // tail call
  r = t.match(new RegExp("^rgb\\(([^,]+),([^,]+),([^)]+)\\)$"));
  if (!((null !== r))) goto L_1ef;
  return "rgba(".concat(r[1].trim(), ", ", r[2].trim(), ", ", r[3].trim(), ", ", ne(e), ")");   // tail call
  o = t.match(new RegExp("^#([0-9a-f]{3}|[0-9a-f]{6})$"));
  if (!((null === o))) goto L_223;
  return t;
  if (!((3 === o[1].length))) goto L_2a4;
  goto L_2a9;
  // [栈深重同步 1 -> 0]
  n = o[1];
  s = Number.parseInt(n, 16);
  return "rgba(".concat(((s >> 16) & 255), ", ", ((s >> 8) & 255), ", ", (255 & s), ", ", ne(e), ")");   // tail call
}

// fn jt  args=1 vars=3 closure=2 cpool=4 bc=491B file=dil_charts/src/widgets/SvgChart
// args: t
// locals: e, i
// closure: Yt, Qt
function {
  let i;
  let e;
  if (!(("none" === t))) goto L_17;
  return {color: t};
  e = t.match(new RegExp("^rgba\\(([^,]+),([^,]+),([^,]+),([^)]+)\\)$"));
  if (!((null !== e))) goto L_118;
  return {color: Yt(Number(e[1].trim()), Number(e[2].trim()), Number(e[3].trim())), opacity: Qt(Number(e[4].trim()))};
  i = t.match(new RegExp("^rgb\\(([^,]+),([^,]+),([^)]+)\\)$"));
  if (!((null !== i))) goto L_1e3;
  return {color: Yt(Number(i[1].trim()), Number(i[2].trim()), Number(i[3].trim()))};
  return {color: t};
}

// fn Yt  args=3 vars=3 closure=1 cpool=0 bc=50B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// closure: Ut
function {
  return "#".concat(Ut(t), Ut(e), Ut(i));   // tail call
}

// fn Ut  args=1 vars=1 closure=0 cpool=1 bc=252B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if (!(Number.isFinite(t))) goto L_a5;
  goto L_a6;
  // [栈深重同步 9 -> 8]
  return Math.min(255, Math.max(0, Math.round(0))).toString(16).padStart(2, "0");   // tail call
}

// fn Qt  args=1 vars=1 closure=0 cpool=0 bc=132B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if (!(Number.isFinite(t))) goto L_7d;
  goto L_7e;
  // [栈深重同步 7 -> 6]
  return Math.min(1, Math.max(0, 1));   // tail call
}

// fn Jt  args=2 vars=2 closure=1 cpool=0 bc=60B file=dil_charts/src/widgets/SvgChart
// args: t, e
// closure: ne
function {
  if (!((undefined !== e))) goto L_3b;
  if (!((e < 1))) goto L_3b;
  t.addAttribute("opacity", ne(e));
  return;
}

// fn Zt  args=3 vars=3 closure=1 cpool=0 bc=56B file=dil_charts/src/widgets/SvgChart
// args: t, e, i
// closure: ne
function {
  if (!((undefined !== i))) goto L_37;
  if (!((i < 1))) goto L_37;
  t.addAttribute(e, ne(i));
  return;
}

// fn te  args=2 vars=2 closure=3 cpool=0 bc=387B file=dil_charts/src/widgets/SvgChart
// args: t, e
// closure: re, ee, oe
function {
  if (!((e == null))) goto L_e;
  e;
  goto L_58;
  if (!((undefined.tickFormatter == null))) goto L_37;
  undefined.tickFormatter;
  goto L_58;
  if (!(("percent" === undefined.type))) goto L_fe;
  if (!((e.tickFormatter.decimals == null))) goto L_f2;
  e.tickFormatter.decimals;
  return "".concat(re(t, Math.max(0, 0)), "%");   // tail call
  if (!((e == null))) goto L_10c;
  e;
  goto L_156;
  if (!((undefined.tickFormatter == null))) goto L_135;
  undefined.tickFormatter;
  goto L_156;
  if (!(("currency" === undefined.type))) goto L_17f;
  return ee(t, e.tickFormatter);
  return oe(t);
}

// fn ee  args=2 vars=7 closure=2 cpool=0 bc=456B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i, r, o, n, s
// closure: ie, re
function {
  let s;
  let n;
  let o;
  let r;
  let i;
  if (!((e.currency == null))) goto L_3b;
  e.currency;
  i = "USD";
  if (!((e.decimals == null))) goto L_b8;
  e.decimals;
  if (!(("compact" === e.notation))) goto L_b7;
  goto L_b8;
  // [栈深重同步 4 -> 3]
  r = Math.max(0, 0);
  if (!((t < 0))) goto L_c8;
  goto L_c9;
  // [栈深重同步 1 -> 0]
  o = "";
  n = Math.abs(t);
  if (!(("USD" === i))) goto L_107;
  goto L_134;
  // [栈深重同步 1 -> 0]
  s = "".concat(i, " ");
  if (!(("compact" === e.notation))) goto L_194;
  return "".concat(o, s, ie(n, r));
  return "".concat(o, s, re(n, r));
}

// fn ie  args=2 vars=2 closure=1 cpool=0 bc=187B file=dil_charts/src/widgets/SvgChart
// args: t, e
// closure: re
function {
  if (!((t >= 1000000000))) goto L_3e;
  return "".concat(re((t / 1000000000), e), "B");
  if (!((t >= 1000000))) goto L_7c;
  return "".concat(re((t / 1000000), e), "M");
  if (!((t >= 1000))) goto L_b6;
  return "".concat(re((t / 1000), e), "K");
  return re(t, e);
}

// fn re  args=2 vars=3 closure=0 cpool=4 bc=184B file=dil_charts/src/widgets/SvgChart
// args: t, e
// locals: i
function {
  let i;
  i = t.toFixed(e);
  if (!(i.includes("."))) goto L_b4;
  return i.replace(new RegExp("(\\.\\d*?[1-9])0+$"), "$1").replace(new RegExp("\\.0+$"), "");
  return i;
}

// fn oe  args=1 vars=1 closure=0 cpool=0 bc=194B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if (!((Math.abs(t) >= 1000))) goto L_57;
  return t.toFixed(0);
  if (!(Number.isInteger(t))) goto L_8b;
  return String(t);
  return String((Math.round((10 * t)) / 10));
}

// fn ne  args=1 vars=1 closure=0 cpool=1 bc=102B file=dil_charts/src/widgets/SvgChart
// args: t
function {
  if (!(Number.isFinite(t))) goto L_63;
  return String((Math.round((100 * t)) / 100));
  return "0";
}

// fn <atom:0>  args=3 vars=121 closure=0 cpool=85 bc=1556B file=dil_charts/src/widgets/SvgChart
// args: require, module, exports
// locals: t, e, i, r, o, n, s, a, l, u, c, h, d, f, m, b, x, g, p, y, A, v, M, w, $, L, N, S, k, R, C, I, H, P, z, D, F, _, Chart, <class_fields_init>, Chart#1, O, B, T, W, K, E, q, G, V, X, j, Y, U, Q, J, Z, tt, et, it, rt, ot, nt, st, at, lt, ut, ct, ht, dt, ft, mt, bt, xt, gt, pt, yt, At, vt, Mt, wt, $t, Lt, Nt, St, kt, Rt, Ct, It, Ht, Pt, zt, Dt, Ft, _t, Ot, Bt, Tt, Wt, Kt, Et, qt, Gt, Vt, Xt, jt, Yt, Ut, Qt, Jt, Zt, te, ee, ie, re, oe, ne, se
function {
  O = function O;
  B = function B;
  T = function T;
  W = function W;
  K = function K;
  E = function E;
  q = function q;
  G = function G;
  V = function V;
  X = function X;
  j = function j;
  Y = function Y;
  U = function U;
  Q = function Q;
  J = function J;
  Z = function Z;
  tt = function tt;
  et = function et;
  it = function it;
  rt = function rt;
  ot = function ot;
  nt = function nt;
  st = function st;
  at = function at;
  lt = function lt;
  ut = function ut;
  ct = function ct;
  ht = function ht;
  dt = function dt;
  ft = function ft;
  mt = function mt;
  bt = function bt;
  xt = function xt;
  gt = function gt;
  pt = function pt;
  yt = function yt;
  At = function At;
  vt = function vt;
  Mt = function Mt;
  wt = function wt;
  $t = function $t;
  Lt = function Lt;
  Nt = function Nt;
  St = function St;
  kt = function kt;
  Rt = function Rt;
  Ct = function Ct;
  It = function It;
  Ht = function Ht;
  Pt = function Pt;
  zt = function zt;
  Dt = function Dt;
  Ft = function Ft;
  _t = function _t;
  Ot = function Ot;
  Bt = function Bt;
  Tt = function Tt;
  Wt = function Wt;
  Kt = function Kt;
  Et = function Et;
  qt = function qt;
  Gt = function Gt;
  Vt = function Vt;
  Xt = function Xt;
  jt = function jt;
  Yt = function Yt;
  Ut = function Ut;
  Qt = function Qt;
  Jt = function Jt;
  Zt = function Zt;
  te = function te;
  ee = function ee;
  ie = function ie;
  re = function re;
  oe = function oe;
  ne = function ne;
  let se;
  let Chart#1;
  let _;
  let F;
  let D;
  let z;
  let P;
  let H;
  let I;
  let C;
  let R;
  let k;
  let S;
  let N;
  let L;
  let $;
  let w;
  let M;
  let v;
  let A;
  let y;
  let p;
  let g;
  let x;
  let b;
  let m;
  let f;
  let d;
  let h;
  let c;
  let u;
  let l;
  let a;
  let s;
  let n;
  let o;
  let r;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Chart = undefined;
  exports.renderChartSvg = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("scroll", undefined, "HBLQsaLPh2u1bK9p");
  i = t.makeNodePrototype("image", undefined, "OKDLTE_hK2cfHNNj");
  r = t.makeNodePrototype("image", undefined, "o2jSSwvBHLjte2GQ");
  o = require("coreutils/src/unicode/TextCoding");
  n = require("dil_core/src/DILComponent");
  s = require("dil_core/src/colors/DILColor");
  a = require("dil_core/src/colors/DILColorsDefinition");
  l = require("dil_core/src/colors/DILColorsInit");
  u = require("dil_core/src/layout/DILLayout");
  c = require("dil_core/src/utils/XmlBuilder");
  h = require("valdi_core/src/Asset");
  d = require("valdi_core/src/ElementRef");
  f = require("valdi_core/src/Style");
  m = 180;
  b = 360;
  x = 36;
  g = 12;
  p = 12;
  y = 22;
  A = 8;
  v = 34;
  M = 24;
  w = 5;
  $ = 2.25;
  L = 3.5;
  N = 10;
  S = 42;
  k = 10;
  R = 10;
  C = 4;
  I = 6;
  H = 0.18;
  P = 0.18;
  z = "4 6";
  D = "http://www.w3.org/2000/svg";
  F = ["blue", "purple", "orange", "green", "red", "yellow", "pink"];
  _ = {blue: "blue-500", green: "green-500", orange: "orange-500", pink: "pink-500", purple: "purple-500", red: "red-500", yellow: "yellow-500"};
  let Chart;
  let <class_fields_init>;
  class Chart extends n.DILComponent { ... }
  <proto:Chart>.viewportUsesContentCoordinates = function <atom:0>;
  <proto:Chart>.onRender = function <atom:0>;
  <proto:Chart>.renderSvgImageSource = function <atom:0>;
  <proto:Chart>.updateScrollPosition = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Chart>;
  Chart = function <atom:0>;
  // close_loc <class_fields_init>
  Chart#1 = function <atom:0>;
  exports.Chart = Chart#1;
  // append([], 0, n.DIL_COMPONENT_PROPERTIES)
  [][n.DIL_COMPONENT_PROPERTIES] = "aspectRatio";
  [][("aspectRatio" ++)] = "barCategoryGap";
  [][("barCategoryGap" ++)] = "barGap";
  [][("barGap" ++)] = "barRadius";
  [][("barRadius" ++)] = "data";
  [][("data" ++)] = "disableAnimation";
  [][("disableAnimation" ++)] = "disableUserScroll";
  [][("disableUserScroll" ++)] = "flex";
  [][("flex" ++)] = "height";
  [][("height" ++)] = "maxHeight";
  [][("maxHeight" ++)] = "maxSize";
  [][("maxSize" ++)] = "maxWidth";
  [][("maxWidth" ++)] = "minHeight";
  [][("minHeight" ++)] = "minPointWidth";
  [][("minPointWidth" ++)] = "minSize";
  [][("minSize" ++)] = "minWidth";
  [][("minWidth" ++)] = "hoverIndicatorDataKey";
  [][("hoverIndicatorDataKey" ++)] = "onHoverAction";
  [][("onHoverAction" ++)] = "scrollable";
  [][("scrollable" ++)] = "scrollToValue";
  [][("scrollToValue" ++)] = "series";
  [][("series" ++)] = "showDots";
  [][("showDots" ++)] = "showGrid";
  [][("showGrid" ++)] = "showHoverCursor";
  [][("showHoverCursor" ++)] = "showHoverDots";
  [][("showHoverDots" ++)] = "showIdleHoverIndicator";
  [][("showIdleHoverIndicator" ++)] = "showLegend";
  [][("showLegend" ++)] = "showTooltip";
  [][("showTooltip" ++)] = "showValueLabels";
  [][("showValueLabels" ++)] = "showYAxis";
  [][("showYAxis" ++)] = "size";
  [][("size" ++)] = "tooltipValueFormatter";
  [][("tooltipValueFormatter" ++)] = "valueLabelInterval";
  [][("valueLabelInterval" ++)] = "valueLabelOffset";
  [][("valueLabelOffset" ++)] = "visiblePointCount";
  [][("visiblePointCount" ++)] = "width";
  [][("width" ++)] = "xAxis";
  [][("xAxis" ++)] = "yAxis";
  ("yAxis" ++);
  Chart#1.properties = [];
  exports.renderChartSvg = O;
  se = {image: new f.Style({flexShrink: 0, objectFit: "contain"}), scroll: new f.Style({horizontal: true, showsHorizontalScrollIndicator: false})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_charts/src/widgets/SvgChart
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
