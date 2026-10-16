// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=453B file=dil_charts/src/widgets/ValdiPieChart
// args: e
// locals: t, i
// closure: this
function {
  let i;
  let t;
  t = Math.max(0, Math.round(e.width));
  i = Math.max(0, Math.round(e.height));
  if (!((t === this.state.width))) goto L_188;
  if (((i === this.state.height))) goto L_1c4;
  this.setState({width: t, height: i});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=88B file=dil_charts/src/widgets/ValdiPieChart
// locals: this, this.active_func, new.target, arguments
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
  this.state = {width: 0, height: 0};
  this.handleLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=7 closure=4 cpool=0 bc=2346B file=dil_charts/src/widgets/ValdiPieChart
// locals: i, n, r, o, s, l, this
// closure: u, e, t, Z
function {
  this = this;
  let l;
  let s;
  let o;
  let r;
  let n;
  let i;
  if (((undefined === undefined))) goto L_64;
  i = <to_object>(undefined).width;
  n = <to_object>(undefined).height;
  <to_object>(undefined);
  goto L_8a;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  r = u.resolveDILFlex(this.viewModel.flex);
  if (!((this.viewModel.aspectRatio == null))) goto L_1f8;
  this.viewModel.aspectRatio;
  if ((this.viewModel.height)) goto L_1f0;
  if (!(this.viewModel.minHeight)) goto L_1f5;
  goto L_1f8;
  // [栈深重同步 2 -> 1]
  o = u.resolveDILAspectRatio((4 / 3));
  if (!((this.viewModel.maxHeight == null))) goto L_287;
  this.viewModel.maxHeight;
  s = this.viewModel.maxSize;
  if (!((this.viewModel.maxWidth == null))) goto L_316;
  this.viewModel.maxWidth;
  l = this.viewModel.maxSize;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", Z.canvas);
  e.setAttributes(this.baseViewAttributes);
  e.setAttributeNumber("aspectRatio", o);
  if (!((r == null))) goto L_444;
  r;
  goto L_465;
  e.setAttribute("flexBasis", undefined.basis);
  if (!((r == null))) goto L_49d;
  r;
  goto L_4be;
  e.setAttributeNumber("flexGrow", undefined.grow);
  if (!((r == null))) goto L_4f6;
  r;
  goto L_517;
  e.setAttributeNumber("flexShrink", undefined.shrink);
  if (!((this.viewModel.height == null))) goto L_5d1;
  this.viewModel.height;
  e.setAttribute("height", this.viewModel.size);
  e.setAttribute("maxHeight", s);
  e.setAttribute("maxWidth", l);
  if (!((this.viewModel.minHeight == null))) goto L_6eb;
  this.viewModel.minHeight;
  e.setAttribute("minHeight", this.viewModel.minSize);
  if (!((this.viewModel.minWidth == null))) goto L_7ab;
  this.viewModel.minWidth;
  if (!((this.viewModel.minSize == null))) goto L_7ab;
  this.viewModel.minSize;
  e.setAttribute("minWidth", 0);
  e.setAttributeFunction("onLayout", this.handleLayout);
  if (!((this.viewModel.width == null))) goto L_8bf;
  this.viewModel.width;
  if (!((this.viewModel.size == null))) goto L_8bf;
  this.viewModel.size;
  e.setAttribute("width", "100%");
  if (!((i > 0))) goto L_901;
  if (!((n > 0))) goto L_901;
  this.renderPieContents(i, n);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=13 closure=8 cpool=0 bc=1115B file=dil_charts/src/widgets/ValdiPieChart
// args: t, n
// locals: r, o, s, l, a, d, h, u, b, o#1, this
// closure: C, f, G, A, e, i, Z, F
function {
  this = this;
  let u;
  let h;
  let d;
  let a;
  let l;
  let s;
  let o;
  let r;
  r = C(this.viewModel);
  if (!((0 === r.length))) goto L_73;
  this.renderNoData(t, n);
  return;
  if (!((this.viewModel.showLegend == null))) goto L_be;
  this.viewModel.showLegend;
  if (!(true)) goto L_c5;
  goto L_c6;
  // [栈深重同步 1 -> 0]
  o = 0;
  s = Math.max(1, (n - o));
  l = (t / 2);
  a = (s / 2);
  d = Math.max(1, ((Math.min(t, s) / 2) - 8));
  if (!((this.viewModel.outerRadius == null))) goto L_1ad;
  this.viewModel.outerRadius;
  h = G(A, d, d);
  u = Math.min(G(this.viewModel.innerRadius, h, 0), (h - 1));
  let b;
  b = 0;
  if (!((b < r.length))) goto L_3bf;
  let o#1;
  o#1 = r[b];
  e.beginRender(i, "valdi-pie-slice-".concat(b));
  e.setAttributeStyle("style", Z.shapeOverlay);
  e.setAttribute("path", F(t, n, l, a, u, h, o#1));
  e.setAttributeString("fillColor", o#1.color);
  e.endRender();
  b = <b_new>;
  (b++);
  goto L_236;
  this.renderSliceSeparators(r, t, n, l, a, u, h);
  this.renderValueLabels(r, t, n, l, a, u, h);
  this.renderLegend(r, t, n);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=262B file=dil_charts/src/widgets/ValdiPieChart
// args: t, i
// closure: e, n, Z
function {
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", Z.noDataLabel);
  e.setAttributeNumber("top", ((i / 2) - 8));
  e.setAttributeNumber("width", t);
  e.endRender();
  return;
}

// fn <atom:0>  args=7 vars=17 closure=9 cpool=1 bc=1422B file=dil_charts/src/widgets/ValdiPieChart
// args: t, i, n, s, l, a, d
// locals: h, u, b, g, c, m, p, t#1, o, this
// closure: O, v, e, r, Z, D, o, K, _
function {
  this = this;
  let b;
  let u;
  let h;
  if (!((true !== this.viewModel.showValueLabels))) goto L_56;
  return;
  h = (true === this.viewModel.showLabelLines);
  if ((h)) goto L_aa;
  u = (a > 0);
  if (!(u)) goto L_b7;
  goto L_bc;
  // [栈深重同步 1 -> 0]
  b = "gray-0";
  let g;
  g = 0;
  if (!((g < t.length))) goto L_58d;
  let p;
  let m;
  let c;
  c = t[g];
  m = (c.startAngle + ((c.endAngle - c.startAngle) / 2));
  if (!(u)) goto L_162;
  goto L_170;
  // [栈深重同步 4 -> 3]
  p = O(s, l, (a + (0.58 * (d - a))), m);
  if (!(h)) goto L_2b9;
  let o;
  let t#1;
  t#1 = O(s, l, (d + 2), m);
  o = O(s, l, ((d + v) - 3), m);
  e.beginRender(r, "valdi-pie-label-line-".concat(g));
  e.setAttributeStyle("style", Z.shapeOverlay);
  e.setAttribute("path", D(i, n, t#1, o));
  e.endRender();
  e.beginRender(o, "valdi-pie-value-label-".concat(g));
  if (!(u)) goto L_364;
  goto L_388;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", Z.insideValueLabel);
  e.setAttributeString("value", K(c.value));
  e.setAttributeString("color", b);
  if (!(u)) goto L_46a;
  goto L_491;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("left", (p.x - 21));
  e.setAttributeNumber("top", (p.y - 5));
  if (!(u)) goto L_545;
  if (!((p.x < s))) goto L_545;
  goto L_556;
  // [栈深重同步 4 -> 3]
  if (!(u)) goto L_551;
  goto L_556;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("textAlign", "center");
  e.endRender();
  g = <g_new>;
  (g++);
  goto L_c2;
  return;
}

// fn <atom:0>  args=7 vars=13 closure=5 cpool=0 bc=518B file=dil_charts/src/widgets/ValdiPieChart
// args: t, i, n, r, o, l, a
// locals: d, h, u, b, t#1, u#1
// closure: I, e, s, Z, H
function {
  let d;
  d = {};
  let h;
  h = 0;
  if (!((h < t.length))) goto L_205;
  let b;
  let u;
  u = t[h];
  if (!((1 === t.length))) goto L_2c;
  goto L_77;
  // [栈深重同步 1 -> 0]
  b = [u.startAngle, u.endAngle];
  let t#1;
  for (const t#1 of b) {
    let u#1;
    u#1 = I(t#1);
    if (!((true !== d[u#1]))) goto L_1f0;
    d[u#1] = true;
    e.beginRender(s, "valdi-pie-separator-".concat(h, "-", u#1));
    e.setAttributeStyle("style", Z.shapeOverlay);
    e.setAttribute("path", H(i, n, r, o, l, a, t#1));
    e.setAttributeNumber("strokeWidth", 2);
    e.endRender();
  }
  h = <h_new>;
  (h++);
  goto L_a;
  return;
}

// fn <atom:0>  args=3 vars=13 closure=6 cpool=0 bc=1510B file=dil_charts/src/widgets/ValdiPieChart
// args: t, i, n
// locals: r, o, e, t#1, s, d, h, i#1, n#1, this
// closure: y, c, e, l, Z, a
function {
  this = this;
  let d;
  let s;
  let o;
  let r;
  if (!((this.viewModel.showLegend == null))) goto L_5c;
  this.viewModel.showLegend;
  if (!((true !== true))) goto L_60;
  return;
  r = [];
  o = (Math.max(0, (t.length - 1)) * y);
  let e;
  for (const e of t) {
    let t#1;
    t#1 = Math.max(32, ((6 * e.label.length) + 22));
    r.push(t#1);
    o = (o + t#1);
    (o + t#1);
  }
  s = Math.max(0, ((i - o) / 2));
  d = (n - 14);
  let h;
  h = 0;
  if (!((h < t.length))) goto L_5e5;
  let n#1;
  let i#1;
  i#1 = t[h];
  n#1 = new c.GeometricPathBuilder(8, 8).ovalTo(0, 0, 8, 8).build();
  e.beginRender(l, "valdi-pie-legend-marker-".concat(h));
  e.setAttributeStyle("style", Z.legendMarker);
  e.setAttribute("path", n#1);
  e.setAttributeString("fillColor", i#1.color);
  e.setAttributeNumber("left", s);
  e.setAttributeNumber("top", (d + 1));
  e.endRender();
  e.beginRender(a, "valdi-pie-legend-label-".concat(h));
  e.setAttributeStyle("style", Z.legendLabel);
  e.setAttributeString("value", i#1.label);
  e.setAttributeNumber("left", (s + 10));
  e.setAttributeNumber("top", (d - 1));
  e.setAttributeNumber("width", Math.max(28, ((6 * i#1.label.length) + 6)));
  e.endRender();
  s = (s + (r[h] + y));
  (s + (r[h] + y));
  h = <h_new>;
  (h++);
  goto L_178;
  return;
}

// fn C  args=1 vars=23 closure=5 cpool=1 bc=1143B file=dil_charts/src/widgets/ValdiPieChart
// args: e
// locals: t, i, n, r, o, m, e#1, s, l, a, d, h, u, b, g, c, A, m#1, o#1, s#1, l#1, h#1
// closure: B, m, p, W, E
function {
  let A;
  let c;
  let g;
  let b;
  let u;
  let h;
  let d;
  let a;
  let l;
  let s;
  let o;
  let r;
  let n;
  let i;
  let t;
  if (!((e.data == null))) goto L_57;
  e.data;
  t = [];
  if (!((e.series == null))) goto L_82;
  e.series;
  goto L_84;
  i = undefined[0];
  if (!((i == null))) goto L_90;
  i;
  goto L_b1;
  n = undefined.dataKey;
  if (((0 === t.length))) goto L_c1;
  if (!((undefined === n))) goto L_c7;
  return [];
  r = 0;
  o = 0;
  let m;
  for (const m of t) {
    let e#1;
    e#1 = Math.max(0, B(m, n));
    r = (r + e#1);
    (r + e#1);
    if (!((e#1 > 0))) goto L_12a;
    o = <o_new>;
    (o++);
  }
  if (!((r <= 0))) goto L_13c;
  return [];
  if (!((e.startAngle == null))) goto L_166;
  e.startAngle;
  s = m;
  if (!((e.endAngle == null))) goto L_192;
  e.endAngle;
  l = (p - s);
  if (!((l >= 0))) goto L_1a2;
  goto L_1a3;
  // [栈深重同步 1 -> 0]
  a = -1;
  if (!((t.length > 1))) goto L_201;
  if (!((e.paddingAngle == null))) goto L_1fc;
  e.paddingAngle;
  goto L_202;
  // [栈深重同步 1 -> 0]
  d = 0;
  if (!((Math.abs(l) >= 360))) goto L_23b;
  goto L_240;
  // [栈深重同步 1 -> 0]
  h = (o - 1);
  u = Math.max(0, (Math.abs(l) - (h * d)));
  if (!((e.minAngle == null))) goto L_316;
  e.minAngle;
  b = Math.min(Math.abs(0), (u / o));
  g = (u - (b * o));
  c = s;
  A = [];
  let m#1;
  m#1 = 0;
  if (!((m#1 < t.length))) goto L_473;
  let h#1;
  let l#1;
  let s#1;
  let o#1;
  o#1 = t[m#1];
  s#1 = Math.max(0, B(o#1, n));
  if (((s#1 <= 0))) goto L_468;
  l#1 = c;
  h#1 = (l#1 + (a * (b + ((s#1 / r) * g))));
  c = (h#1 + (a * d));
  (h#1 + (a * d));
  if (((Math.abs((h#1 - l#1)) <= 0.1))) goto L_467;
  A.push({color: W(o#1, i, m#1), endAngle: h#1, label: E(o#1, e, m#1), startAngle: l#1, value: s#1});
  m#1 = <m#1_new>;
  (m#1++);
  goto L_342;
  return A;
}

// fn F  args=7 vars=9 closure=3 cpool=0 bc=678B file=dil_charts/src/widgets/ValdiPieChart
// args: e, t, i, n, r, o, s
// locals: l, a
// closure: c, z, O
function {
  let a;
  let l;
  l = new c.GeometricPathBuilder(e, t);
  if (!((r <= 0))) goto L_10b;
  l.moveTo(i, n);
  z(l, i, n, o, s.startAngle, s.endAngle, true);
  l.close();
  return l.build();   // tail call
  a = O(i, n, o, s.startAngle);
  l.moveTo(a.x, a.y);
  z(l, i, n, o, s.startAngle, s.endAngle, false);
  z(l, i, n, r, s.endAngle, s.startAngle, true);
  l.close();
  return l.build();   // tail call
}

// fn z  args=7 vars=11 closure=1 cpool=0 bc=317B file=dil_charts/src/widgets/ValdiPieChart
// args: e, t, i, n, r, o, s
// locals: l, a, d, o#1
// closure: O
function {
  let a;
  let l;
  l = (o - r);
  a = Math.max(1, Math.ceil((Math.abs(l) / 3)));
  let d;
  if (!(s)) goto L_9b;
  goto L_9c;
  // [栈深重同步 1 -> 0]
  d = 1;
  if (!((d <= a))) goto L_13c;
  let o#1;
  o#1 = O(t, i, n, (r + ((l * d) / a)));
  e.lineTo(o#1.x, o#1.y);
  d = <d_new>;
  (d++);
  goto L_9d;
  return;
}

// fn D  args=4 vars=4 closure=1 cpool=0 bc=286B file=dil_charts/src/widgets/ValdiPieChart
// args: e, t, i, n
// closure: c
function {
  return new c.GeometricPathBuilder(e, t).moveTo(i.x, i.y).lineTo(n.x, n.y).build();   // tail call
}

// fn H  args=7 vars=7 closure=2 cpool=0 bc=72B file=dil_charts/src/widgets/ValdiPieChart
// args: e, t, i, n, r, o, s
// closure: D, O
function {
  return D(e, t, O(i, n, Math.max(0, r), s), O(i, n, o, s));   // tail call
}

// fn O  args=4 vars=5 closure=1 cpool=0 bc=117B file=dil_charts/src/widgets/ValdiPieChart
// args: e, t, i, n
// locals: r
// closure: R
function {
  let r;
  r = (n * R);
  return {x: (e + (Math.cos(r) * i)), y: (t - (Math.sin(r) * i))};
}

// fn _  args=2 vars=2 closure=1 cpool=0 bc=13B file=dil_charts/src/widgets/ValdiPieChart
// args: e, t
// closure: S
function {
  if (!((e < t))) goto L_b;
  return (e - S);
  return e;
}

// fn I  args=1 vars=2 closure=0 cpool=0 bc=77B file=dil_charts/src/widgets/ValdiPieChart
// args: e
// locals: t
function {
  let t;
  t = (((e % 360) + 360) % 360);
  return String((Math.round((1000 * t)) / 1000));   // tail call
}

// fn W  args=3 vars=6 closure=4 cpool=0 bc=222B file=dil_charts/src/widgets/ValdiPieChart
// args: e, t, i
// locals: n, r, e#1
// closure: T, P, V, k
function {
  let r;
  let n;
  n = e.fill;
  if (!(("string" == typeof n))) goto L_46;
  return T(n, P[(i % P.length)]);   // tail call
  if (!((t == null))) goto L_4f;
  t;
  goto L_70;
  r = undefined.color;
  if (!(("string" == typeof r))) goto L_cd;
  if (!((undefined !== V[r]))) goto L_cd;
  let e#1;
  e#1 = "".concat(r, "-", k[(i % k.length)]);
  return T(e#1, e#1);   // tail call
  return T(r, P[(i % P.length)]);   // tail call
}

// fn T  args=2 vars=4 closure=3 cpool=0 bc=66B file=dil_charts/src/widgets/ValdiPieChart
// args: e, t
// locals: i, n
// closure: $, q, h
function {
  let n;
  let i;
  i = $(e);
  n = q(t);
  if (!((h.resolveDILColor(i, n) == null))) goto L_41;
  h.resolveDILColor(i, n);
  return n;
}

// fn $  args=1 vars=1 closure=1 cpool=0 bc=16B file=dil_charts/src/widgets/ValdiPieChart
// args: e
// closure: q
function {
  if (!(("string" == typeof e))) goto L_e;
  return q(e);
  return e;
}

// fn q  args=1 vars=1 closure=1 cpool=0 bc=12B file=dil_charts/src/widgets/ValdiPieChart
// args: e
// closure: V
function {
  if (!((V[e] == null))) goto L_b;
  V[e];
  return e;
}

// fn B  args=2 vars=3 closure=0 cpool=0 bc=65B file=dil_charts/src/widgets/ValdiPieChart
// args: e, t
// locals: i
function {
  let i;
  i = Number(e[t]);
  if (!(Number.isFinite(i))) goto L_3f;
  return i;
  return 0;
}

// fn E  args=3 vars=6 closure=1 cpool=0 bc=207B file=dil_charts/src/widgets/ValdiPieChart
// args: e, t, i
// locals: n, r, o
// closure: Y
function {
  let o;
  let r;
  let n;
  n = e[Y(t)];
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

// fn Y  args=1 vars=1 closure=0 cpool=0 bc=164B file=dil_charts/src/widgets/ValdiPieChart
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

// fn G  args=3 vars=5 closure=0 cpool=2 bc=451B file=dil_charts/src/widgets/ValdiPieChart
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

// fn K  args=1 vars=1 closure=0 cpool=0 bc=194B file=dil_charts/src/widgets/ValdiPieChart
// args: e
function {
  if (!((Math.abs(e) >= 1000))) goto L_57;
  return e.toFixed(0);
  if (!(Number.isInteger(e))) goto L_8b;
  return String(e);
  return String((Math.round((10 * e)) / 10));
}

// fn <atom:0>  args=3 vars=55 closure=0 cpool=32 bc=2359B file=dil_charts/src/widgets/ValdiPieChart
// args: require, module, exports
// locals: e, t, i, n, r, o, s, l, a, d, h, u, b, g, c, m, p, A, f, y, w, x, v, M, S, L, N, R, P, k, V, ValdiPieChart, <class_fields_init>, ValdiPieChart#1, C, F, z, D, H, O, _, I, W, T, $, q, B, E, Y, G, K, Z
function {
  C = function C;
  F = function F;
  z = function z;
  D = function D;
  H = function H;
  O = function O;
  _ = function _;
  I = function I;
  W = function W;
  T = function T;
  $ = function $;
  q = function q;
  B = function B;
  E = function E;
  Y = function Y;
  G = function G;
  K = function K;
  let Z;
  let ValdiPieChart#1;
  let V;
  let k;
  let P;
  let R;
  let N;
  let L;
  let S;
  let M;
  let v;
  let x;
  let w;
  let y;
  let f;
  let A;
  let p;
  let m;
  let c;
  let g;
  let b;
  let u;
  let h;
  let d;
  let a;
  let l;
  let s;
  let o;
  let r;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ValdiPieChart = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "bY4D_RvaBLWCP75Y");
  i = e.makeNodePrototype("shape", ["width", "100%", "height", "100%"], "nZc-tEnZF3pnrR03");
  n = e.makeNodePrototype("label", ["value", "No chart data", "color", "color-text-tertiary", "left", 0], "ZXT4oHKYwfMoowlk");
  r = e.makeNodePrototype("shape", ["strokeColor", "alpha-25", "strokeWidth", 1, "strokeCap", "round", "width", "100%", "height", "100%"], "-1qMH5VdE2kY-_Qe");
  o = e.makeNodePrototype("label", undefined, "Y7cu0_Qaahi-Zg9v");
  s = e.makeNodePrototype("shape", ["strokeColor", "color-surface", "strokeCap", "butt", "width", "100%", "height", "100%"], "lMNlCvJ83Ab10yVN");
  l = e.makeNodePrototype("shape", ["width", 8, "height", 8], "ImxV-T5zXQK7Y5YO");
  a = e.makeNodePrototype("label", ["color", "color-text-secondary"], "ZaWKjsawrvE24A0i");
  d = require("dil_core/src/DILComponent");
  h = require("dil_core/src/colors/DILColor");
  u = require("dil_core/src/layout/DILLayout");
  b = require("dil_core/src/typography/DILDynamicFont");
  g = require("valdi_core/src/Style");
  c = require("valdi_core/src/GeometricPath");
  m = 90;
  p = -270;
  A = "80%";
  f = 26;
  y = 14;
  w = 8;
  x = 2;
  v = 16;
  M = 10;
  S = 42;
  L = 10;
  N = 3;
  R = (Math.PI / 180);
  P = ["blue", "purple", "orange", "green", "red", "yellow", "pink"];
  k = ["500", "200", "400", "100", "600", "75", "700", "300"];
  V = {blue: "blue-500", green: "green-500", orange: "orange-500", pink: "pink-500", purple: "purple-500", red: "red-500", yellow: "yellow-500"};
  let ValdiPieChart;
  let <class_fields_init>;
  class ValdiPieChart extends d.DILStatefulComponent { ... }
  <proto:ValdiPieChart>.onRender = function <atom:0>;
  <proto:ValdiPieChart>.renderPieContents = function <atom:0>;
  <proto:ValdiPieChart>.renderNoData = function <atom:0>;
  <proto:ValdiPieChart>.renderValueLabels = function <atom:0>;
  <proto:ValdiPieChart>.renderSliceSeparators = function <atom:0>;
  <proto:ValdiPieChart>.renderLegend = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ValdiPieChart>;
  ValdiPieChart = function <atom:0>;
  // close_loc <class_fields_init>
  ValdiPieChart#1 = function <atom:0>;
  exports.ValdiPieChart = ValdiPieChart#1;
  ValdiPieChart#1.dilV2Properties = ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "cornerRadius", "data", "disableAnimation", "endAngle", "innerRadius", "minAngle", "legendMaxRows", "outerRadius", "paddingAngle", "series", "showLabelLines", "showLegend", "showTooltip", "showValueLabels", "startAngle", "tooltipAllowEscapeViewBox", "tooltipAnimationDuration", "tooltipOffset", "tooltipValueFormatter", "tooltipValueMode", "xAxis"];
  // append([], 0, d.DIL_COMPONENT_PROPERTIES)
  [][d.DIL_COMPONENT_PROPERTIES] = "aspectRatio";
  [][("aspectRatio" ++)] = "cornerRadius";
  [][("cornerRadius" ++)] = "data";
  [][("data" ++)] = "disableAnimation";
  [][("disableAnimation" ++)] = "endAngle";
  [][("endAngle" ++)] = "flex";
  [][("flex" ++)] = "height";
  [][("height" ++)] = "innerRadius";
  [][("innerRadius" ++)] = "minAngle";
  [][("minAngle" ++)] = "maxHeight";
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
  ValdiPieChart#1.properties = [];
  Z = {canvas: new g.Style({position: "relative", flexShrink: 0}), shapeOverlay: new g.Style({position: "absolute", top: 0, left: 0}), noDataLabel: new g.Style({position: "absolute", minHeight: 16, font: b.dynamicSystemFontForSize(12), textAlign: "center", numberOfLines: 1}), insideValueLabel: new g.Style({position: "absolute", width: S, minHeight: 14, font: b.dynamicBoldSystemFontForSize(M), textAlign: "center", numberOfLines: 1}), outsideValueLabel: new g.Style({position: "absolute", width: S, minHeight: 14, font: b.dynamicSystemFontForSize(M), numberOfLines: 1}), legendMarker: new g.Style({position: "absolute"}), legendLabel: new g.Style({position: "absolute", minHeight: 14, font: b.dynamicSystemFontForSize(L), numberOfLines: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_charts/src/widgets/ValdiPieChart
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
