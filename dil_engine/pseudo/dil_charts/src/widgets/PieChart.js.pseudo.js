// fn <atom:0>  args=0 vars=7 closure=7 cpool=0 bc=2242B file=dil_charts/src/widgets/PieChart
// locals: i, n, r, o, a, c, this
// closure: Y, h, u, s, e, t, ae
function {
  this = this;
  let c;
  let a;
  let o;
  let r;
  let n;
  let i;
  if (!((this.viewModel.width == null))) goto L_a3;
  this.viewModel.width;
  i = Y(this.viewModel.size, h);
  if (!((this.viewModel.height == null))) goto L_136;
  this.viewModel.height;
  n = Y(this.viewModel.size, u);
  r = s.resolveDILFlex(this.viewModel.flex);
  o = s.resolveDILAspectRatio(this.viewModel.aspectRatio);
  if (!((this.viewModel.maxHeight == null))) goto L_29c;
  this.viewModel.maxHeight;
  a = this.viewModel.maxSize;
  if (!((this.viewModel.maxWidth == null))) goto L_32b;
  this.viewModel.maxWidth;
  c = this.viewModel.maxSize;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", ae.image);
  e.setAttributes(this.baseViewAttributes);
  e.setAttribute("src", this.renderSvgImageSource(i, n));
  e.setAttributeNumber("aspectRatio", o);
  if (!((this.viewModel.minSize == null))) goto L_51c;
  this.viewModel.minSize;
  if (!((r == null))) goto L_4fb;
  r;
  goto L_51c;
  e.setAttribute("flexBasis", undefined.basis);
  if (!((r == null))) goto L_554;
  r;
  goto L_575;
  e.setAttributeNumber("flexGrow", undefined.grow);
  if (!((r == null))) goto L_5ad;
  r;
  goto L_5ce;
  e.setAttributeNumber("flexShrink", undefined.shrink);
  if (!((this.viewModel.height == null))) goto L_690;
  this.viewModel.height;
  if (!((this.viewModel.size == null))) goto L_690;
  this.viewModel.size;
  e.setAttribute("height", n);
  e.setAttribute("maxHeight", a);
  e.setAttribute("maxWidth", c);
  e.setAttribute("minHeight", this.viewModel.minHeight);
  e.setAttribute("minWidth", this.viewModel.minWidth);
  if (!((this.viewModel.width == null))) goto L_896;
  this.viewModel.width;
  if (!((this.viewModel.size == null))) goto L_896;
  this.viewModel.size;
  e.setAttribute("width", "100%");
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=0 bc=305B file=dil_charts/src/widgets/PieChart
// args: e, t
// locals: n, this
// closure: S, l, i
function {
  this = this;
  let n;
  n = S(this.viewModel, e, t);
  if (!((this.cachedMarkup === n))) goto L_7a;
  if (((undefined !== this.cachedAsset))) goto L_10d;
  this.cachedMarkup = n;
  this.cachedAsset = l.makeAssetFromBytes(new i.TextEncoder().encode(n));
  l.makeAssetFromBytes(new i.TextEncoder().encode(n));
  return this.cachedAsset;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_charts/src/widgets/PieChart
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

// fn S  args=3 vars=16 closure=14 cpool=0 bc=1190B file=dil_charts/src/widgets/PieChart
// args: e, t, i
// locals: n, r, o, a, s, l, d, u, h, g, b, m, c
// closure: V, c, v, oe, R, I, f, J, A, K, F, k, _, C
function {
  let m;
  let b;
  let g;
  let h;
  let u;
  let d;
  let l;
  let s;
  let a;
  let o;
  let r;
  let n;
  n = V(e.theme);
  r = new c.XmlBuilder();
  r.beginNode("svg");
  r.addAttribute("xmlns", v);
  r.addAttribute("width", oe(t));
  r.addAttribute("height", oe(i));
  r.addAttribute("viewBox", "0 0 ".concat(oe(t), " ", oe(i)));
  o = R(e, n);
  if (!((0 === o.length))) goto L_1ff;
  I(r, t, i, n);
  r.endNode();
  return r.build();   // tail call
  if (!((e.showLegend == null))) goto L_228;
  e.showLegend;
  if (!(true)) goto L_22f;
  goto L_230;
  // [栈深重同步 1 -> 0]
  a = 0;
  s = Math.max(1, (i - a));
  l = (t / 2);
  d = (s / 2);
  u = Math.max(1, ((Math.min(t, s) / 2) - 8));
  if (!((e.outerRadius == null))) goto L_2f9;
  e.outerRadius;
  h = J(A, u, u);
  g = Math.min(J(e.innerRadius, h, 0), (h - 1));
  b = Math.min(J(e.cornerRadius, (h - g), 0), ((h - g) / 2));
  m = K("color-surface", n);
  let c;
  for (const c of o) {
    F(r, k(l, d, g, h, b, c), c.color, m, 2);
  }
  _(r, e, o, l, d, g, h, n);
  C(r, e, o, t, i, n);
  r.endNode();
  return r.build();   // tail call
}

// fn I  args=4 vars=4 closure=2 cpool=0 bc=61B file=dil_charts/src/widgets/PieChart
// args: e, t, i, n
// closure: O, K
function {
  O(e, {anchor: "middle", color: K("color-text-tertiary", n), size: 12, value: "No chart data", x: (t / 2), y: (i / 2)});
  return;
}

// fn _  args=8 vars=17 closure=7 cpool=2 bc=761B file=dil_charts/src/widgets/PieChart
// args: e, t, i, n, r, o, a, s
// locals: c, l, d, u, h, t#1, i#1, i#2, o#1
// closure: K, D, $, j, O, p, re
function {
  let u;
  let d;
  let l;
  let c;
  if (!((true !== t.showValueLabels))) goto L_34;
  return;
  c = (true === t.showLabelLines);
  if ((c)) goto L_66;
  l = (o > 0);
  if (!(l)) goto L_74;
  goto L_79;
  // [栈深重同步 2 -> 1]
  d = K("gray-0", s);
  u = K("alpha-25", s);
  let h;
  for (const h of i) {
    let i#1;
    let t#1;
    t#1 = (h.startAngle + ((h.endAngle - h.startAngle) / 2));
    if (!(l)) goto L_11e;
    goto L_12c;
    // [栈深重同步 7 -> 6]
    i#1 = D(n, r, (o + (0.58 * (a - o))), t#1);
    if (!(c)) goto L_203;
    let o#1;
    let i#2;
    i#2 = D(n, r, (a + 2), t#1);
    o#1 = D(n, r, ((a + $) - 3), t#1);
    j(e, i#2.x, i#2.y, o#1.x, o#1.y, u);
    if (!(l)) goto L_243;
    if (!((i#1.x < n))) goto L_23c;
    goto L_248;
    // [栈深重同步 7 -> 6]
    goto L_248;
    // [栈深重同步 7 -> 6]
    if (!(l)) goto L_292;
    goto L_294;
    // [栈深重同步 7 -> 6]
    O(e, {anchor: "middle", color: d, size: p, value: re(h.value), weight: "600", x: i#1.x, y: (i#1.y + 3)});
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=83B file=dil_charts/src/widgets/PieChart
// args: e
function {
  return Math.max(32, ((6 * e.label.length) + 22));   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=dil_charts/src/widgets/PieChart
// args: e, t
function {
  return (e + t);
}

// fn C  args=6 vars=12 closure=5 cpool=2 bc=460B file=dil_charts/src/widgets/PieChart
// args: e, t, i, n, r, o
// locals: a, s, c, l, d, t#1
// closure: m, q, O, K, M
function {
  let l;
  let c;
  let s;
  let a;
  if (!((t.showLegend == null))) goto L_37;
  t.showLegend;
  if (!((true !== true))) goto L_3b;
  return;
  a = i.map(function <atom:0>);
  s = (a.reduce(function <atom:0>, 0) + (Math.max(0, (i.length - 1)) * m));
  c = Math.max(0, ((n - s) / 2));
  l = (r - 8);
  let d;
  d = 0;
  if (!((d < i.length))) goto L_1cb;
  let t#1;
  t#1 = i[d];
  q(e, (c + 4), (l - 3), 4, t#1.color);
  O(e, {anchor: "start", color: K("color-text-secondary", o), size: M, value: t#1.label, x: (c + 10), y: l});
  c = (c + (a[d] + m));
  (c + (a[d] + m));
  d = <d_new>;
  (d++);
  goto L_100;
  return;
}

// fn R  args=2 vars=20 closure=5 cpool=1 bc=895B file=dil_charts/src/widgets/PieChart
// args: e, t
// locals: i, n, r, o, h, a, s, c, l, d, u, h#1, a#1, g, b, A, f, m
// closure: Z, g, b, E, X
function {
  let u;
  let d;
  let l;
  let c;
  let s;
  let a;
  let o;
  let r;
  let n;
  let i;
  if (!((e.data == null))) goto L_48;
  e.data;
  i = [];
  if (!((e.series == null))) goto L_73;
  e.series;
  goto L_75;
  n = undefined[0];
  if (!((n == null))) goto L_81;
  n;
  goto L_a2;
  r = undefined.dataKey;
  if (((0 === i.length))) goto L_b2;
  if (!((undefined === r))) goto L_b8;
  return [];
  o = 0;
  let h;
  for (const h of i) {
    o = (o + Math.max(0, Z(h, r)));
    (o + Math.max(0, Z(h, r)));
  }
  if (!((o <= 0))) goto L_111;
  return [];
  if (!((e.startAngle == null))) goto L_13b;
  e.startAngle;
  a = g;
  if (!((e.endAngle == null))) goto L_167;
  e.endAngle;
  s = (b - a);
  if (!((s >= 0))) goto L_177;
  goto L_178;
  // [栈深重同步 1 -> 0]
  c = -1;
  if (!((e.paddingAngle == null))) goto L_1c9;
  e.paddingAngle;
  l = Math.max(0, 0);
  d = a;
  u = [];
  let h#1;
  h#1 = 0;
  if (!((h#1 < i.length))) goto L_37b;
  let m;
  let f;
  let A;
  let b;
  let g;
  let a#1;
  a#1 = i[h#1];
  g = Math.max(0, Z(a#1, r));
  if (((g <= 0))) goto L_370;
  b = (s * (g / o));
  A = (Math.min((Math.abs(b) / 2), (l / 2)) * c);
  f = (d + A);
  m = ((d + b) - A);
  d = (d + b);
  (d + b);
  if (((Math.abs((m - f)) <= 0.1))) goto L_36f;
  u.push({color: E(a#1, n, h#1, t), endAngle: m, label: X(a#1, e, h#1), startAngle: f, value: g});
  h#1 = <h#1_new>;
  (h#1++);
  goto L_1de;
  return u;
}

// fn k  args=6 vars=14 closure=3 cpool=0 bc=1565B file=dil_charts/src/widgets/PieChart
// args: e, t, i, n, r, o
// locals: a, a#1, s, c, l, d, u, h
// closure: P, D, oe
function {
  let h;
  let u;
  let d;
  let l;
  let c;
  let s;
  let a#1;
  if (!((r > 0))) goto L_b4;
  if (!((Math.abs((o.endAngle - o.startAngle)) < 360))) goto L_b4;
  let a;
  a = P(e, t, i, n, r, o);
  if (!((undefined !== a))) goto L_b4;
  return a;
  a#1 = D(e, t, n, o.startAngle);
  s = D(e, t, n, o.endAngle);
  if (!(((o.endAngle - o.startAngle) < 0))) goto L_15c;
  goto L_15d;
  // [栈深重同步 1 -> 0]
  c = 0;
  if (!((Math.abs((o.endAngle - o.startAngle)) > 180))) goto L_1d9;
  goto L_1da;
  // [栈深重同步 1 -> 0]
  l = 0;
  if (!((i <= 0))) goto L_35d;
  return ["M ".concat(oe(e), " ", oe(t)), "L ".concat(oe(a#1.x), " ", oe(a#1.y)), "A ".concat(oe(n), " ", oe(n), " 0 ", l, " ", c, " ", oe(s.x), " ", oe(s.y)), "Z"].join(" ");   // tail call
  d = D(e, t, i, o.endAngle);
  u = D(e, t, i, o.startAngle);
  if (!((1 === c))) goto L_3c1;
  goto L_3c2;
  // [栈深重同步 1 -> 0]
  h = 1;
  return ["M ".concat(oe(a#1.x), " ", oe(a#1.y)), "A ".concat(oe(n), " ", oe(n), " 0 ", l, " ", c, " ", oe(s.x), " ", oe(s.y)), "L ".concat(oe(d.x), " ", oe(d.y)), "A ".concat(oe(i), " ", oe(i), " 0 ", l, " ", h, " ", oe(u.x), " ", oe(u.y)), "Z"].join(" ");   // tail call
}

// fn P  args=6 vars=14 closure=2 cpool=0 bc=2627B file=dil_charts/src/widgets/PieChart
// args: e, t, i, n, r, o
// locals: a, s, c, l, d, u, h, g
// closure: z, oe
function {
  let g;
  let h;
  let u;
  let d;
  let l;
  let c;
  let s;
  let a;
  if (!(((o.endAngle - o.startAngle) < 0))) goto L_68;
  goto L_69;
  // [栈深重同步 1 -> 0]
  a = 1;
  s = z(e, t, n, o.startAngle, a, false, r);
  c = z(e, t, n, o.endAngle, -a, false, r);
  l = ((Math.abs((o.startAngle - o.endAngle)) - s.theta) - c.theta);
  if (!((l < 0))) goto L_198;
  return;
  if (!((a < 0))) goto L_298;
  goto L_299;
  // [栈深重同步 8 -> 7]
  if (!((l > 180))) goto L_376;
  goto L_377;
  // [栈深重同步 9 -> 8]
  if (!((a < 0))) goto L_386;
  goto L_387;
  // [栈深重同步 11 -> 10]
  if (!((a < 0))) goto L_466;
  goto L_467;
  // [栈深重同步 10 -> 9]
  d = ["M ".concat(oe(s.lineTangency.x), " ", oe(s.lineTangency.y)), "A ".concat(oe(r), " ", oe(r), " 0 0 ", 0, " ", oe(s.circleTangency.x), " ", oe(s.circleTangency.y)), "A ".concat(oe(n), " ", oe(n), " 0 ", 0, " ", 0, " ", oe(c.circleTangency.x), " ", oe(c.circleTangency.y)), "A ".concat(oe(r), " ", oe(r), " 0 0 ", 0, " ", oe(c.lineTangency.x), " ", oe(c.lineTangency.y))].join(" ");
  if (!((i <= 0))) goto L_572;
  return "".concat(d, " L ", oe(e), " ", oe(t), " Z");   // tail call
  u = z(e, t, i, o.startAngle, a, true, r);
  h = z(e, t, i, o.endAngle, -a, true, r);
  g = ((Math.abs((o.startAngle - o.endAngle)) - u.theta) - h.theta);
  if (!((a < 0))) goto L_79e;
  goto L_79f;
  // [栈深重同步 9 -> 8]
  if (!((g > 180))) goto L_87c;
  goto L_87d;
  // [栈深重同步 10 -> 9]
  if (!((a > 0))) goto L_88c;
  goto L_88d;
  // [栈深重同步 12 -> 11]
  if (!((a < 0))) goto L_96c;
  goto L_96d;
  // [栈深重同步 11 -> 10]
  d = (d + [" L ".concat(oe(h.lineTangency.x), " ", oe(h.lineTangency.y)), "A ".concat(oe(r), " ", oe(r), " 0 0 ", 0, " ", oe(h.circleTangency.x), " ", oe(h.circleTangency.y)), "A ".concat(oe(i), " ", oe(i), " 0 ", 0, " ", 0, " ", oe(u.circleTangency.x), " ", oe(u.circleTangency.y)), "A ".concat(oe(r), " ", oe(r), " 0 0 ", 0, " ", oe(u.lineTangency.x), " ", oe(u.lineTangency.y), " Z")].join(" "));
  (d + [" L ".concat(oe(h.lineTangency.x), " ", oe(h.lineTangency.y)), "A ".concat(oe(r), " ", oe(r), " 0 0 ", 0, " ", oe(h.circleTangency.x), " ", oe(h.circleTangency.y)), "A ".concat(oe(i), " ", oe(i), " 0 ", 0, " ", 0, " ", oe(u.circleTangency.x), " ", oe(u.circleTangency.y)), "A ".concat(oe(r), " ", oe(r), " 0 0 ", 0, " ", oe(u.lineTangency.x), " ", oe(u.lineTangency.y), " Z")].join(" "));
  return d;
}

// fn z  args=7 vars=9 closure=2 cpool=0 bc=253B file=dil_charts/src/widgets/PieChart
// args: e, t, i, n, r, o, a
// locals: s, c
// closure: D, w
function {
  let c;
  let s;
  if (!(o)) goto L_12;
  goto L_13;
  // [栈深重同步 3 -> 2]
  s = (i + (a * -1));
  if (!((s <= 0))) goto L_3f;
  return {circleTangency: D(e, t, i, n), lineTangency: D(e, t, i, n), theta: 0};
  c = (Math.asin(Math.min(1, (a / s))) / w);
  return {circleTangency: D(e, t, i, (n + (r * c))), lineTangency: D(e, t, (s * Math.cos((c * w))), n), theta: c};
}

// fn D  args=4 vars=5 closure=1 cpool=0 bc=117B file=dil_charts/src/widgets/PieChart
// args: e, t, i, n
// locals: r
// closure: w
function {
  let r;
  r = (n * w);
  return {x: (e + (Math.cos(r) * i)), y: (t - (Math.sin(r) * i))};
}

// fn F  args=5 vars=7 closure=4 cpool=0 bc=495B file=dil_charts/src/widgets/PieChart
// args: e, t, i, n, r
// locals: o, t#1
// closure: Q, ne, oe, ie
function {
  let o;
  o = Q(i);
  e.beginNode("path");
  e.addAttribute("d", t);
  e.addAttribute("fill", o.color);
  if (!((undefined !== n))) goto L_138;
  let t#1;
  t#1 = Q(n);
  e.addAttribute("stroke", t#1.color);
  ne(e, "stroke-opacity", t#1.opacity);
  if (!((undefined !== r))) goto L_1a0;
  e.addAttribute("stroke-width", oe(r));
  e.addAttribute("stroke-linejoin", "round");
  ie(e, o.opacity);
  e.endNode();
  return;
}

// fn q  args=5 vars=6 closure=3 cpool=0 bc=347B file=dil_charts/src/widgets/PieChart
// args: e, t, i, n, r
// locals: o
// closure: Q, oe, ie
function {
  let o;
  o = Q(r);
  e.beginNode("circle");
  e.addAttribute("cx", oe(t));
  e.addAttribute("cy", oe(i));
  e.addAttribute("r", oe(n));
  e.addAttribute("fill", o.color);
  ie(e, o.opacity);
  e.endNode();
  return;
}

// fn j  args=6 vars=7 closure=3 cpool=1 bc=440B file=dil_charts/src/widgets/PieChart
// args: e, t, i, n, r, o
// locals: a
// closure: Q, oe, ie
function {
  let a;
  a = Q(o);
  e.beginNode("line");
  e.addAttribute("x1", oe(t));
  e.addAttribute("y1", oe(i));
  e.addAttribute("x2", oe(n));
  e.addAttribute("y2", oe(r));
  e.addAttribute("stroke", a.color);
  e.addAttribute("stroke-width", "1");
  ie(e, a.opacity);
  e.endNode();
  return;
}

// fn O  args=2 vars=3 closure=3 cpool=0 bc=791B file=dil_charts/src/widgets/PieChart
// args: e, t
// locals: i
// closure: Q, oe, ie
function {
  let i;
  i = Q(t.color);
  e.beginNode("text");
  e.addAttribute("x", oe(t.x));
  e.addAttribute("y", oe(t.y));
  e.addAttribute("fill", i.color);
  e.addAttribute("font-family", "system-ui, -apple-system, sans-serif");
  e.addAttribute("font-size", oe(t.size));
  e.addAttribute("text-anchor", t.anchor);
  if (!((undefined !== t.weight))) goto L_280;
  e.addAttribute("font-weight", t.weight);
  ie(e, i.opacity);
  e.addText(t.value);
  e.endNode();
  return;
}

// fn E  args=4 vars=6 closure=5 cpool=0 bc=215B file=dil_charts/src/widgets/PieChart
// args: e, t, i, n
// locals: r, o
// closure: H, N, T, K, L
function {
  let o;
  let r;
  r = e.fill;
  if (!(("string" == typeof r))) goto L_47;
  return H(r, N[(i % N.length)], n);   // tail call
  if (!((t == null))) goto L_50;
  t;
  goto L_71;
  o = undefined.color;
  if (!(("string" == typeof o))) goto L_c5;
  if (!((undefined !== T[o]))) goto L_c5;
  return K("".concat(o, "-", L[(i % L.length)]), n);   // tail call
  return H(o, N[(i % N.length)], n);   // tail call
}

// fn H  args=3 vars=5 closure=4 cpool=0 bc=70B file=dil_charts/src/widgets/PieChart
// args: e, t, i
// locals: n, o
// closure: W, B, K, r
function {
  let o;
  let n;
  n = W(e);
  o = B(t);
  if (!((r.resolveDILColor(n, o) == null))) goto L_42;
  r.resolveDILColor(n, o);
  return K(o, i);   // tail call
}

// fn W  args=1 vars=1 closure=1 cpool=0 bc=16B file=dil_charts/src/widgets/PieChart
// args: e
// closure: B
function {
  if (!(("string" == typeof e))) goto L_e;
  return B(e);
  return e;
}

// fn B  args=1 vars=1 closure=1 cpool=0 bc=12B file=dil_charts/src/widgets/PieChart
// args: e
// closure: T
function {
  if (!((T[e] == null))) goto L_b;
  T[e];
  return e;
}

// fn K  args=2 vars=5 closure=0 cpool=0 bc=71B file=dil_charts/src/widgets/PieChart
// args: e, t
// locals: i, n, e#1
function {
  let i;
  i = e;
  let n;
  n = 0;
  if (!((n < 8))) goto L_43;
  let e#1;
  e#1 = t[i];
  if (((undefined === e#1))) goto L_2b;
  if (!((e#1 === i))) goto L_31;
  return i;
  i = e#1;
  e#1;
  n = <n_new>;
  (n++);
  goto L_a;
  return i;
}

// fn V  args=1 vars=1 closure=2 cpool=0 bc=130B file=dil_charts/src/widgets/PieChart
// args: e
// closure: o, a
function {
  if (!(("dark" === e))) goto L_2e;
  return o.DIL_DARK_COLOR_PALETTE;
  if (!(("light" === e))) goto L_5c;
  return o.DIL_LIGHT_COLOR_PALETTE;
  return a.getCurrentDILPalette();
}

// fn Z  args=2 vars=3 closure=0 cpool=0 bc=65B file=dil_charts/src/widgets/PieChart
// args: e, t
// locals: i
function {
  let i;
  i = Number(e[t]);
  if (!(Number.isFinite(i))) goto L_3f;
  return i;
  return 0;
}

// fn X  args=3 vars=6 closure=1 cpool=0 bc=207B file=dil_charts/src/widgets/PieChart
// args: e, t, i
// locals: n, r, o
// closure: G
function {
  let o;
  let r;
  let n;
  n = e[G(t)];
  if ((("string" == typeof n))) goto L_27;
  if (!(("number" == typeof n))) goto L_2e;
  goto L_2f;
  // [栈深重同步 1 -> 0]
  r = i;
  if (!(("string" == typeof t.xAxis))) goto L_5e;
  goto L_a9;
  // [栈深重同步 1 -> 0]
  if (!((t.xAxis == null))) goto L_88;
  t.xAxis;
  goto L_a9;
  o = undefined.labels;
  if (!((o == null))) goto L_ba;
  o;
  goto L_c4;
  if (!((undefined[String(r)] == null))) goto L_cc;
  undefined[String(r)];
  return String(r);   // tail call
}

// fn G  args=1 vars=1 closure=0 cpool=0 bc=164B file=dil_charts/src/widgets/PieChart
// args: e
function {
  if (!(("string" == typeof e.xAxis))) goto L_4e;
  return e.xAxis;
  if (!((e.xAxis == null))) goto L_78;
  e.xAxis;
  goto L_99;
  if (!((undefined.dataKey == null))) goto L_a3;
  undefined.dataKey;
  return "label";
}

// fn J  args=3 vars=5 closure=0 cpool=2 bc=451B file=dil_charts/src/widgets/PieChart
// args: e, t, i
// locals: i#1, i#2
function {
  if (!(("number" == typeof e))) goto L_61;
  if (!(Number.isFinite(e))) goto L_61;
  return Math.max(0, e);   // tail call
  if (!(("string" == typeof e))) goto L_1c1;
  let i#2;
  if (!(e.endsWith("%"))) goto L_134;
  let i#1;
  i#1 = Number(e.substring(0, (e.length - 1)));
  if (!(Number.isFinite(i#1))) goto L_134;
  return Math.max(0, ((t * i#1) / 100));   // tail call
  i#2 = Number(e.replace(new RegExp("px$"), ""));
  if (!(Number.isFinite(i#2))) goto L_1c1;
  return Math.max(0, i#2);   // tail call
  return i;
}

// fn Y  args=2 vars=3 closure=0 cpool=2 bc=183B file=dil_charts/src/widgets/PieChart
// args: e, t
// locals: t#1
function {
  if (!(("number" == typeof e))) goto L_3d;
  if (!(Number.isFinite(e))) goto L_3d;
  if (!((e > 0))) goto L_3d;
  return e;
  if (!(("string" == typeof e))) goto L_b5;
  let t#1;
  t#1 = Number(e.replace(new RegExp("px$"), ""));
  if (!(Number.isFinite(t#1))) goto L_b5;
  if (!((t#1 > 0))) goto L_b5;
  return t#1;
  return t;
}

// fn Q  args=1 vars=3 closure=2 cpool=4 bc=491B file=dil_charts/src/widgets/PieChart
// args: e
// locals: t, i
// closure: U, te
function {
  let i;
  let t;
  if (!(("none" === e))) goto L_17;
  return {color: e};
  t = e.match(new RegExp("^rgba\\(([^,]+),([^,]+),([^,]+),([^)]+)\\)$"));
  if (!((null !== t))) goto L_118;
  return {color: U(Number(t[1].trim()), Number(t[2].trim()), Number(t[3].trim())), opacity: te(Number(t[4].trim()))};
  i = e.match(new RegExp("^rgb\\(([^,]+),([^,]+),([^)]+)\\)$"));
  if (!((null !== i))) goto L_1e3;
  return {color: U(Number(i[1].trim()), Number(i[2].trim()), Number(i[3].trim()))};
  return {color: e};
}

// fn U  args=3 vars=3 closure=1 cpool=0 bc=50B file=dil_charts/src/widgets/PieChart
// args: e, t, i
// closure: ee
function {
  return "#".concat(ee(e), ee(t), ee(i));   // tail call
}

// fn ee  args=1 vars=1 closure=0 cpool=1 bc=252B file=dil_charts/src/widgets/PieChart
// args: e
function {
  if (!(Number.isFinite(e))) goto L_a5;
  goto L_a6;
  // [栈深重同步 9 -> 8]
  return Math.min(255, Math.max(0, Math.round(0))).toString(16).padStart(2, "0");   // tail call
}

// fn te  args=1 vars=1 closure=0 cpool=0 bc=132B file=dil_charts/src/widgets/PieChart
// args: e
function {
  if (!(Number.isFinite(e))) goto L_7d;
  goto L_7e;
  // [栈深重同步 7 -> 6]
  return Math.min(1, Math.max(0, 1));   // tail call
}

// fn ie  args=2 vars=2 closure=1 cpool=0 bc=60B file=dil_charts/src/widgets/PieChart
// args: e, t
// closure: oe
function {
  if (!((undefined !== t))) goto L_3b;
  if (!((t < 1))) goto L_3b;
  e.addAttribute("opacity", oe(t));
  return;
}

// fn ne  args=3 vars=3 closure=1 cpool=0 bc=56B file=dil_charts/src/widgets/PieChart
// args: e, t, i
// closure: oe
function {
  if (!((undefined !== i))) goto L_37;
  if (!((i < 1))) goto L_37;
  e.addAttribute(t, oe(i));
  return;
}

// fn re  args=1 vars=1 closure=0 cpool=0 bc=194B file=dil_charts/src/widgets/PieChart
// args: e
function {
  if (!((Math.abs(e) >= 1000))) goto L_57;
  return e.toFixed(0);
  if (!(Number.isInteger(e))) goto L_8b;
  return String(e);
  return String((Math.round((10 * e)) / 10));
}

// fn oe  args=1 vars=1 closure=0 cpool=1 bc=102B file=dil_charts/src/widgets/PieChart
// args: e
function {
  if (!(Number.isFinite(e))) goto L_63;
  return String((Math.round((100 * e)) / 100));
  return "0";
}

// fn <atom:0>  args=3 vars=67 closure=0 cpool=43 bc=1109B file=dil_charts/src/widgets/PieChart
// args: require, module, exports
// locals: e, t, i, n, r, o, a, s, c, l, d, u, h, g, b, A, f, m, x, y, $, p, M, v, w, N, L, T, PieChart, <class_fields_init>, PieChart#1, S, I, _, C, R, k, P, z, D, F, q, j, O, E, H, W, B, K, V, Z, X, G, J, Y, Q, U, ee, te, ie, ne, re, oe, ae
function {
  S = function S;
  I = function I;
  _ = function _;
  C = function C;
  R = function R;
  k = function k;
  P = function P;
  z = function z;
  D = function D;
  F = function F;
  q = function q;
  j = function j;
  O = function O;
  E = function E;
  H = function H;
  W = function W;
  B = function B;
  K = function K;
  V = function V;
  Z = function Z;
  X = function X;
  G = function G;
  J = function J;
  Y = function Y;
  Q = function Q;
  U = function U;
  ee = function ee;
  te = function te;
  ie = function ie;
  ne = function ne;
  re = function re;
  oe = function oe;
  let ae;
  let PieChart#1;
  let T;
  let L;
  let N;
  let w;
  let v;
  let M;
  let p;
  let $;
  let y;
  let x;
  let m;
  let f;
  let A;
  let b;
  let g;
  let h;
  let u;
  let d;
  let l;
  let c;
  let s;
  let a;
  let o;
  let r;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PieChart = undefined;
  exports.renderPieChartSvg = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("image", undefined, "KvuH_jp22LOY92bm");
  i = require("coreutils/src/unicode/TextCoding");
  n = require("dil_core/src/DILComponent");
  r = require("dil_core/src/colors/DILColor");
  o = require("dil_core/src/colors/DILColorsDefinition");
  a = require("dil_core/src/colors/DILColorsInit");
  s = require("dil_core/src/layout/DILLayout");
  c = require("dil_core/src/utils/XmlBuilder");
  l = require("valdi_core/src/Asset");
  d = require("valdi_core/src/Style");
  u = 180;
  h = 360;
  g = 90;
  b = -270;
  A = "80%";
  f = 26;
  m = 14;
  x = 8;
  y = 2;
  $ = 16;
  p = 10;
  M = 10;
  v = "http://www.w3.org/2000/svg";
  w = (Math.PI / 180);
  N = ["blue", "purple", "orange", "green", "red", "yellow", "pink"];
  L = ["500", "200", "400", "100", "600", "75", "700", "300"];
  T = {blue: "blue-500", green: "green-500", orange: "orange-500", pink: "pink-500", purple: "purple-500", red: "red-500", yellow: "yellow-500"};
  let PieChart;
  let <class_fields_init>;
  class PieChart extends n.DILComponent { ... }
  <proto:PieChart>.onRender = function <atom:0>;
  <proto:PieChart>.renderSvgImageSource = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PieChart>;
  PieChart = function <atom:0>;
  // close_loc <class_fields_init>
  PieChart#1 = function <atom:0>;
  exports.PieChart = PieChart#1;
  // append([], 0, n.DIL_COMPONENT_PROPERTIES)
  [][n.DIL_COMPONENT_PROPERTIES] = "aspectRatio";
  [][("aspectRatio" ++)] = "cornerRadius";
  [][("cornerRadius" ++)] = "data";
  [][("data" ++)] = "disableAnimation";
  [][("disableAnimation" ++)] = "endAngle";
  [][("endAngle" ++)] = "flex";
  [][("flex" ++)] = "height";
  [][("height" ++)] = "innerRadius";
  [][("innerRadius" ++)] = "maxHeight";
  [][("maxHeight" ++)] = "maxSize";
  [][("maxSize" ++)] = "maxWidth";
  [][("maxWidth" ++)] = "minHeight";
  [][("minHeight" ++)] = "minSize";
  [][("minSize" ++)] = "minWidth";
  [][("minWidth" ++)] = "outerRadius";
  [][("outerRadius" ++)] = "paddingAngle";
  [][("paddingAngle" ++)] = "series";
  [][("series" ++)] = "showLabelLines";
  [][("showLabelLines" ++)] = "showLegend";
  [][("showLegend" ++)] = "showTooltip";
  [][("showTooltip" ++)] = "showValueLabels";
  [][("showValueLabels" ++)] = "size";
  [][("size" ++)] = "startAngle";
  [][("startAngle" ++)] = "tooltipValueFormatter";
  [][("tooltipValueFormatter" ++)] = "width";
  [][("width" ++)] = "xAxis";
  ("xAxis" ++);
  PieChart#1.properties = [];
  exports.renderPieChartSvg = S;
  ae = {image: new d.Style({flexShrink: 0, objectFit: "contain"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_charts/src/widgets/PieChart
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
