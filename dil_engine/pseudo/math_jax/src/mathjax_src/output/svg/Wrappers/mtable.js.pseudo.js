// fn <atom:0>  args=1 vars=11 closure=0 cpool=0 bc=1092B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t
// locals: e, i, s, a, h, n, l, o, d, this
function {
  this = this;
  let l;
  let n;
  let h;
  let a;
  let s;
  let i;
  let e;
  e = this.node.attributes.get("equalrows");
  if (((undefined === undefined))) goto L_d5;
  i = <to_object>(undefined).H;
  s = <to_object>(undefined).D;
  <to_object>(undefined);
  goto L_fe;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_8b;
  // [栈深重同步 1 -> 0]
  a = this.getEqualRowHeight();
  h = this.getRowHalfSpacing();
  // append([this.fLine], 1, this.rLines)
  [this.fLine][this.rLines] = this.fLine;
  (this.fLine ++);
  n = [this.fLine];
  l = (this.getBBox().h - n[0]);
  let o;
  o = 0;
  if (!((o < this.numRows))) goto L_443;
  let d;
  d = this.childNodes[o];
  goto L_292;
  const _it1 = <?>;
  <done(_it1.next)>;
  d.H = <value(_it1.next)>;
  <done(_it1.next)>;
  d.D = <value(_it1.next)>;
  goto L_2ce;
  // [栈深重同步 4 -> 0]
  goto L_26f;
  this.getRowHD(e, a, i[o], s[o]);
  goto L_2f4;
  const _it2 = <?>;
  <done(_it2.next)>;
  d.tSpace = <value(_it2.next)>;
  <done(_it2.next)>;
  d.bSpace = <value(_it2.next)>;
  goto L_309;
  // [栈深重同步 4 -> 0]
  goto L_2d1;
  [h[o], h[(o + 1)]];
  goto L_32f;
  const _it3 = <?>;
  <done(_it3.next)>;
  d.tLine = <value(_it3.next)>;
  <done(_it3.next)>;
  d.bLine = <value(_it3.next)>;
  goto L_344;
  // [栈深重同步 4 -> 0]
  goto L_30c;
  [n[o], n[(o + 1)]];
  d.toSVG([t]);
  d.place(0, ((l - h[o]) - d.H));
  l = (l - ((((h[o] + d.H) + d.D) + h[(o + 1)]) + n[(o + 1)]));
  (l - ((((h[o] + d.H) + d.D) + h[(o + 1)]) + n[(o + 1)]));
  o = <o_new>;
  (o++);
  goto L_215;
  return;
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=27B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t, e, i, s
function {
  if (!(t)) goto L_15;
  return [(((e + i) - s) / 2), (((e - i) + s) / 2)];
  return [i, s];
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=222B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// locals: t, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  super["handleColor"].call(this);
  t = this.firstChild();
  if (!(t)) goto L_dd;
  this.adaptor.setAttribute(t, "width", this.fixed(this.getWidth()));
  return;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=567B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t
// locals: e, i, s, a, h, n, this
function {
  this = this;
  let h;
  let a;
  let s;
  let i;
  let e;
  if (!(("none" === this.node.attributes.get("columnlines")))) goto L_88;
  return;
  e = this.getColumnAttributes("columnlines");
  if (!(!e)) goto L_bb;
  return;
  i = this.getColumnHalfSpacing();
  s = this.cLines;
  a = this.getComputedWidths();
  h = this.fLine;
  let n;
  n = 0;
  if (!((n < e.length))) goto L_236;
  h = (h + ((i[n] + a[n]) + i[(n + 1)]));
  (h + ((i[n] + a[n]) + i[(n + 1)]));
  if (!(("none" !== e[n]))) goto L_21a;
  this.adaptor.append(t, this.makeVLine(h, e[n], s[n]));
  h = (h + s[n]);
  (h + s[n]);
  n = <n_new>;
  (n++);
  goto L_158;
  return;
}

// fn <atom:0>  args=1 vars=13 closure=0 cpool=0 bc=967B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t
// locals: e, i, s, a, h, n, l, o, d, r, g, this
function {
  this = this;
  let o;
  let l;
  let n;
  let h;
  let a;
  let s;
  let i;
  let e;
  if (!(("none" === this.node.attributes.get("rowlines")))) goto L_91;
  return;
  e = this.getRowAttributes("rowlines");
  if (!(!e)) goto L_c4;
  return;
  i = this.node.attributes.get("equalrows");
  if (((undefined === undefined))) goto L_181;
  s = <to_object>(undefined).H;
  a = <to_object>(undefined).D;
  <to_object>(undefined);
  goto L_1aa;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_137;
  // [栈深重同步 1 -> 0]
  h = this.getEqualRowHeight();
  n = this.getRowHalfSpacing();
  l = this.rLines;
  o = (this.getBBox().h - this.fLine);
  let d;
  d = 0;
  if (!((d < e.length))) goto L_3c6;
  let g;
  let r;
  if (((undefined === undefined))) goto L_2b8;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  g = <value(_it1)>;
  goto L_2f5;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_2aa;
  // [栈深重同步 1 -> 0]
  o = (o - (((n[d] + r) + g) + n[(d + 1)]));
  (o - (((n[d] + r) + g) + n[(d + 1)]));
  if (!(("none" !== e[d]))) goto L_3aa;
  this.adaptor.append(t, this.makeHLine(o, e[d], l[d]));
  o = (o - l[d]);
  (o - l[d]);
  d = <d_new>;
  (d++);
  goto L_292;
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=485B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t
// locals: e, i, s, a, this
function {
  this = this;
  if (!(this.frame)) goto L_1e4;
  if (!(this.fLine)) goto L_1e4;
  let a;
  let s;
  let i;
  let e;
  if (((undefined === undefined))) goto L_d1;
  e = <to_object>(undefined).h;
  i = <to_object>(undefined).d;
  s = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_fb;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_64;
  // [栈深重同步 1 -> 0]
  a = this.node.attributes.get("frame");
  this.adaptor.append(t, this.makeFrame(s, e, i, a));
  return;
}

// fn <atom:0>  args=1 vars=11 closure=0 cpool=0 bc=888B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t
// locals: e, i, s, a, h, n, l, o, e#1, this
function {
  this = this;
  let o;
  let l;
  let n;
  let h;
  let a;
  let s;
  let i;
  let e;
  if (!(!this.pWidth)) goto L_43;
  return 0;
  if (((undefined === undefined))) goto L_b5;
  e = <to_object>(undefined).w;
  i = <to_object>(undefined).L;
  s = <to_object>(undefined).R;
  <to_object>(undefined);
  goto L_df;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_48;
  // [栈深重同步 1 -> 0]
  a = ((i + this.pWidth) + s);
  h = this.getAlignShift()[0];
  if (!(this.isTop)) goto L_185;
  goto L_186;
  // [栈深重同步 3 -> 2]
  n = ((Math.max(0, this.container.getWrapWidth(this.containerI)) - i) - s);
  if (!((this.pWidth > n))) goto L_22e;
  goto L_251;
  // [栈深重同步 2 -> 1]
  l = (e - this.pWidth);
  if (!(("left" === h))) goto L_262;
  goto L_277;
  // [栈深重同步 1 -> 0]
  if (!(("right" === h))) goto L_272;
  goto L_277;
  // [栈深重同步 1 -> 0]
  o = (l / 2);
  if (!(o)) goto L_374;
  let e#1;
  e#1 = this.svg("g", {}, this.adaptor.childNodes(t));
  this.place(o, 0, e#1);
  this.adaptor.append(t, e#1);
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t
// closure: s
function {
  return (s + t);
}

// fn <atom:0>  args=4 vars=6 closure=0 cpool=0 bc=366B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t, e, i, s
// locals: a, this
function {
  this = this;
  let a;
  a = this.fLine;
  return this.svg("rect", this.setLineThickness(a, s, {data-frame: true, class: this.lineClass(s), width: this.fixed((t - a)), height: this.fixed(((e + i) - a)), x: this.fixed((a / 2)), y: this.fixed(((a / 2) - i))}));   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=449B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t, e, i
// locals: s, a, h, n, this
function {
  this = this;
  let n;
  let h;
  let a;
  let s;
  if (((undefined === undefined))) goto L_5e;
  s = <to_object>(undefined).h;
  a = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_87;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  if (!(("dotted" === e))) goto L_95;
  goto L_96;
  // [栈深重同步 1 -> 0]
  h = 0;
  n = this.fixed((t + (i / 2)));
  return this.svg("line", this.setLineThickness(i, e, {data-line: "v", class: this.lineClass(e), x1: n, y1: this.fixed((h - a)), x2: n, y2: this.fixed((s - h))}));   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=386B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t, e, i
// locals: s, a, h, this
function {
  this = this;
  let h;
  let a;
  let s;
  s = this.getBBox().w;
  if (!(("dotted" === e))) goto L_60;
  goto L_61;
  // [栈深重同步 1 -> 0]
  a = 0;
  h = this.fixed((t - (i / 2)));
  return this.svg("line", this.setLineThickness(i, e, {data-line: "h", class: this.lineClass(e), x1: this.fixed(a), y1: h, x2: this.fixed((s - a)), y2: h}));   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=137B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t, e, i
// locals: this
function {
  this = this;
  if (!((0.07 !== t))) goto L_86;
  i["stroke-thickness"] = this.fixed(t);
  if (!(("solid" !== e))) goto L_86;
  if (!(("dotted" === e))) goto L_5a;
  goto L_5b;
  // [栈深重同步 3 -> 2]
  i["stroke-dasharray"] = ("" + this.fixed((2 * t)));
  ("" + this.fixed((2 * t)));
  return i;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=356B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t, e, i
// locals: s, a, this
function {
  this = this;
  let a;
  let s;
  if (!(!this.hasLabels)) goto L_2e;
  return;
  s = this.labels;
  a = this.node.attributes.get("side");
  this.spaceLabels();
  if (!(this.isTop)) goto L_136;
  goto L_163;
  // [栈深重同步 1 -> 0]
  this.subTable(t, s, a, i);
  return;
}

// fn <atom:0>  args=0 vars=10 closure=0 cpool=0 bc=1016B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// locals: t, e, i, s, a, h, n, e#1, l, this
function {
  this = this;
  let h;
  let a;
  let s;
  let i;
  let e;
  let t;
  t = this.adaptor;
  e = this.getBBox().h;
  i = this.getTableData().L;
  s = this.getRowHalfSpacing();
  a = (e - this.fLine);
  h = t.firstChild(this.labels);
  let n;
  n = 0;
  if (!((n < this.numRows))) goto L_3f7;
  let e#1;
  e#1 = this.childNodes[n];
  if (!(e#1.node.isKind("mlabeledtr"))) goto L_360;
  let l;
  l = e#1.childNodes[0];
  a = (a - (s[n] + e#1.H));
  (a - (s[n] + e#1.H));
  e#1.placeCell(l, {x: 0, y: a, w: i, lSpace: 0, rSpace: 0, lLine: 0, rLine: 0});
  a = (a - ((e#1.D + s[(n + 1)]) + this.rLines[n]));
  (a - ((e#1.D + s[(n + 1)]) + this.rLines[n]));
  h = t.next(h);
  t.next(h);
  goto L_3ec;
  a = (a - ((((s[n] + e#1.H) + e#1.D) + s[(n + 1)]) + this.rLines[n]));
  (a - ((((s[n] + e#1.H) + e#1.D) + s[(n + 1)]) + this.rLines[n]));
  n = <n_new>;
  (n++);
  goto L_16b;
  return;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=0 bc=1745B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t, e, i
// locals: s, a, h, n, l, o, d, r, g, c, p, f, x, m, b, this
function {
  this = this;
  let b;
  let m;
  let x;
  let f;
  let p;
  let c;
  let g;
  let r;
  let d;
  let o;
  let l;
  let n;
  let h;
  let a;
  let s;
  s = this.adaptor;
  if (((undefined === undefined))) goto L_111;
  a = <to_object>(undefined).h;
  h = <to_object>(undefined).d;
  n = <to_object>(undefined).w;
  l = <to_object>(undefined).L;
  o = <to_object>(undefined).R;
  <to_object>(undefined);
  goto L_13b;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_5c;
  // [栈深重同步 1 -> 0]
  if ((this.pWidth)) goto L_168;
  d = ((l + n) + o);
  r = this.getTableData().L;
  if (((undefined === undefined))) goto L_1cf;
  const _it1 = undefined;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  g = <value(_it1)>;
  <done(_it1)>;
  c = <value(_it1)>;
  goto L_1f9;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_1bd;
  // [栈深重同步 1 -> 0]
  if (!(("right" === g))) goto L_20d;
  goto L_221;
  // [栈深重同步 2 -> 1]
  if (!(("center" === g))) goto L_220;
  goto L_221;
  // [栈深重同步 2 -> 1]
  p = ((c + 0) + l);
  f = "matrix(1 0 0 -1 0 0)";
  x = "scale(".concat(this.jax.fixed(((1000 * this.font.params.x_height) / this.metrics.ex), 2), ")");
  m = "translate(0 ".concat(this.fixed(a), ") ", f, " ", x);
  if (!(("left" === g))) goto L_3fb;
  goto L_412;
  // [栈深重同步 5 -> 4]
  if (!(("right" === g))) goto L_40d;
  goto L_412;
  // [栈深重同步 5 -> 4]
  b = this.svg("svg", {data-table: true, preserveAspectRatio: "xMidYMid", viewBox: "".concat(this.fixed(-p), " ", this.fixed(-a), " 1 ", this.fixed((a + h)))}, [this.svg("g", {transform: f}, s.childNodes(t))]);
  if (!(("left" === i))) goto L_570;
  goto L_575;
  // [栈深重同步 5 -> 4]
  if (!(("left" === i))) goto L_586;
  goto L_5af;
  // [栈深重同步 5 -> 4]
  e = this.svg("svg", {data-labels: true, preserveAspectRatio: "xMaxYMid", viewBox: [this.fixed(r), this.fixed(-a), 1, this.fixed((a + h))].join(" ")}, [e]);
  s.append(t, this.svg("g", {transform: m}, [b, e]));
  this.place(-l, 0, t);
  return;
}

// fn <atom:0>  args=4 vars=13 closure=0 cpool=0 bc=736B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t, e, i, s
// locals: a, h, n, l, o, d, r, g, this
function {
  this = this;
  let g;
  let r;
  let d;
  let o;
  let l;
  let n;
  let h;
  let a;
  a = this.adaptor;
  if (((undefined === undefined))) goto L_b1;
  h = <to_object>(undefined).w;
  n = <to_object>(undefined).L;
  l = <to_object>(undefined).R;
  <to_object>(undefined);
  goto L_db;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_44;
  // [栈深重同步 1 -> 0]
  if ((this.pWidth)) goto L_108;
  o = ((n + h) + l);
  d = this.getTableData().L;
  r = this.getAlignShift()[0];
  g = Math.max(o, this.container.getWrapWidth(this.containerI));
  if (!(("left" === i))) goto L_27b;
  if (!(("left" === r))) goto L_254;
  goto L_275;
  // [栈深重同步 3 -> 2]
  if (!(("right" === r))) goto L_26a;
  goto L_275;
  // [栈深重同步 3 -> 2]
  goto L_2b0;
  // [栈深重同步 3 -> 2]
  if (!(("left" === r))) goto L_28b;
  goto L_2a8;
  // [栈深重同步 3 -> 2]
  if (!(("right" === r))) goto L_29d;
  goto L_2a8;
  // [栈深重同步 3 -> 2]
  this.place((((((g + o) / 2) + s) - n) - d), 0, e);
  a.append(t, e);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=1 cpool=0 bc=198B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t, e, i
// locals: t#1, e#1, i#1, s, this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((i === undefined))) goto L_21;
  i;
  i = null;
  i#1 = null;
  let s;
  this = new new.target(t, e, i);
  if (!(<class_fields_init>)) goto L_41;
  <class_fields_init>.call(this);
  new new.target(t, e, i);
  s = {data-labels: true};
  if (!(this.isTop)) goto L_86;
  s.transform = "matrix(1 0 0 -1 0 0)";
  "matrix(1 0 0 -1 0 0)";
  this.labels = this.svg("g", s);
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=301B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  e = this.standardSvgNodes(t)[0];
  this.placeRows(e);
  this.handleColumnLines(e);
  this.handleRowLines(e);
  this.handleFrame(e);
  i = this.handlePWidth(e);
  this.handleLabels(e, t[0], i);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=19 bc=469B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// locals: a, h, SvgMtable, <class_fields_init>
// closure: s, e, t, i
function {
  let h;
  h = e.CommonMtableMixin(t.SvgWrapper);
  let SvgMtable;
  let <class_fields_init>;
  class SvgMtable extends h { ... }
  <proto:SvgMtable>.placeRows = function <atom:0>;
  <proto:SvgMtable>.getRowHD = function <atom:0>;
  <proto:SvgMtable>.handleColor = function <atom:0>;
  <proto:SvgMtable>.handleColumnLines = function <atom:0>;
  <proto:SvgMtable>.handleRowLines = function <atom:0>;
  <proto:SvgMtable>.handleFrame = function <atom:0>;
  <proto:SvgMtable>.handlePWidth = function <atom:0>;
  <proto:SvgMtable>.lineClass = function <atom:0>;
  <proto:SvgMtable>.makeFrame = function <atom:0>;
  <proto:SvgMtable>.makeVLine = function <atom:0>;
  <proto:SvgMtable>.makeHLine = function <atom:0>;
  <proto:SvgMtable>.setLineThickness = function <atom:0>;
  <proto:SvgMtable>.handleLabels = function <atom:0>;
  <proto:SvgMtable>.spaceLabels = function <atom:0>;
  <proto:SvgMtable>.topTable = function <atom:0>;
  <proto:SvgMtable>.subTable = function <atom:0>;
  <proto:SvgMtable>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMtable>;
  SvgMtable = function <atom:0>;
  // close_loc <class_fields_init>
  a = function <atom:0>;
  function <atom:0>.kind = i.MmlMtable.prototype.kind;
  a.styles = {g[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line]: {stroke-width: "70px", fill: "none"}, g[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame]: {stroke-width: "70px", fill: "none"}, g[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed: {stroke-dasharray: "140"}, g[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted: {stroke-linecap: "round", stroke-dasharray: "0,140"}, g[data-mml-node="mtable"] > g > svg: {overflow: "visible"}};
  return a;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=123B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// args: require, module, exports
// locals: t, e, i, s
function {
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMtable = undefined;
  t = require("../Wrapper");
  e = require("../../common/Wrappers/mtable");
  i = require("../../../core/MmlTree/MmlNodes/mtable");
  s = "mjx-";
  exports.SvgMtable = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/mtable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
