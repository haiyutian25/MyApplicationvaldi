// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  t.Point = 0;
  t[0] = "Point";
  t.Band = 1;
  t[1] = "Band";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=179B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e
// closure: be, me, this
function {
  let e;
  e = be(t.width);
  if (((undefined === e))) goto L_b2;
  if ((me(this.state.layoutWidth, e))) goto L_b2;
  this.setState({layoutWidth: e});
  return;
}

// fn <atom:0>  args=1 vars=8 closure=8 cpool=0 bc=735B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e, i, n, o, r, s, a
// closure: Ne, this, ee, ae, le, qt, Ae, Te
function {
  if (!(Ne(this.viewModel))) goto L_26c;
  let i;
  let e;
  if (!((this.viewModel.data == null))) goto L_7e;
  this.viewModel.data;
  e = [];
  i = ee(this.viewModel.series);
  if (!((e.length > 0))) goto L_26c;
  if (!((i.length > 0))) goto L_26c;
  let a;
  let s;
  let r;
  let o;
  let n;
  n = ae(this.viewModel, this.state.layoutWidth);
  o = le(this.viewModel);
  r = qt(this.viewModel, n, o);
  s = Ae(e, i, this.viewModel);
  a = Te(t.x, e, this.viewModel, r, s);
  if (!((undefined !== a))) goto L_26b;
  this.updateTooltip(a);
  if (!((undefined !== this.viewModel.onClickAction))) goto L_2de;
  this.handleTap();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=11 cpool=2 bc=156B file=dil_charts/src/widgets/ValdiChart
// locals: this, this.active_func, new.target, arguments
// closure: be, me, Ne, ee, ae, le, qt, Ae, Te, <class_fields_init>, I
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
  this.scrollRef = new I.ElementRef();
  this.state = {};
  this.handleChartLayout = function <atom:0>;
  this.handleChartTap = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=124B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["onViewModelUpdate"].call(this, t);
  this.updateTooltip(this.state.activeHoverIndex);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=171B file=dil_charts/src/widgets/ValdiChart
// closure: this, e, s, r
function {
  if ((this.isDestroyed())) goto L_aa;
  if (((this.tooltipRequest !== e))) goto L_aa;
  this.formatTooltip(e, s, r.slice(0, 5));
  return;
}

// fn <atom:0>  args=1 vars=8 closure=4 cpool=1 bc=563B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e, i, n, o, r, s, this
// closure: ee, ke, Ie, Pe
function {
  this = this;
  let s;
  let r;
  let o;
  let n;
  let i;
  let e;
  e = {};
  this.tooltipRequest = e;
  if (!((this.viewModel.data == null))) goto L_71;
  this.viewModel.data;
  i = [];
  n = ee(this.viewModel.series);
  o = ke(i, this.viewModel, t).index;
  if (((false === this.viewModel.showTooltip))) goto L_154;
  if (!((undefined === o))) goto L_15b;
  goto L_18b;
  // [栈深重同步 1 -> 0]
  r = Ie(i, n, this.viewModel, o);
  s = Pe(this.viewModel.tooltipValueFormatter);
  if (!((undefined === s))) goto L_20b;
  goto L_20e;
  // [栈深重同步 4 -> 3]
  this.setState({activeHoverIndex: t, tooltipLines: []});
  if (!((undefined !== s))) goto L_232;
  if (!((0 !== r.length))) goto L_232;
  queueMicrotask(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=40B file=dil_charts/src/widgets/ValdiChart
// args: i
// closure: this, t, e
function {
  return this.formatTooltipLine(t, e, i);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=217B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, this
function {
  this = this;
  let n;
  n = (await Promise.all(i.map(function <atom:0>)));
  if ((this.isDestroyed())) goto L_d6;
  if (((this.tooltipRequest !== t))) goto L_d6;
  this.setState({tooltipLines: n});
  return undefined; // async
}

// fn <atom:0>  args=3 vars=8 closure=4 cpool=0 bc=512B file=dil_charts/src/widgets/ValdiChart
// args: e, i, n
// locals: t, e#1, o, o#1, this
// closure: $, H, Fe, t
function {
  this = this;
  if (!((undefined === n.input))) goto L_2b;
  return n; // async
  try { // catch -> L_148
  let o;
  let e#1;
  let t;
  t = (await $.invokeDILCallbackWithResult(i, [n.input], H));
  if (!((null == t))) goto L_93;
  return n; // async
  e#1 = n.input.payload.formatted;
  if (!(("string" == typeof e#1))) goto L_109;
  goto L_112;
  // [栈深重同步 1 -> 0]
  o = String(t);
  null;
  n;
  return {value: Fe(n.label, o)}; // async
  // [栈深重同步 0 -> 1]
  o#1 = <?>;
  try { // catch -> L_1ff
  if ((this.isDestroyed())) goto L_1fb;
  if (((this.tooltipRequest !== e))) goto L_1fb;
  if (!(t.isLoggingEnabled)) goto L_1fb;
  console.warn("DIL chart tooltip formatter failed; keeping the default value.", o#1);
  return n; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_charts/src/widgets/ValdiChart
// locals: this
function {
  this = this;
  return (true === this.viewModel.scrollable);
}

// fn <atom:0>  args=0 vars=12 closure=10 cpool=0 bc=4063B file=dil_charts/src/widgets/ValdiChart
// locals: t, r, s, a, l, h, u, d, c, f, o, this
// closure: ae, le, k, Ne, fe, e, i, mi, n, o
function {
  this = this;
  let f;
  let c;
  let d;
  let u;
  let h;
  let l;
  let a;
  let s;
  let r;
  let t;
  t = ae(this.viewModel, this.state.layoutWidth);
  r = le(this.viewModel);
  s = k.resolveDILFlex(this.viewModel.flex);
  if (!((this.viewModel.height == null))) goto L_1b0;
  this.viewModel.height;
  if (!((this.viewModel.size == null))) goto L_1b0;
  this.viewModel.size;
  a = r;
  if (!((this.viewModel.width == null))) goto L_248;
  this.viewModel.width;
  if (!((this.viewModel.size == null))) goto L_248;
  this.viewModel.size;
  l = "100%";
  h = k.resolveDILAspectRatio(this.viewModel.aspectRatio);
  if (!((this.viewModel.maxHeight == null))) goto L_342;
  this.viewModel.maxHeight;
  u = this.viewModel.maxSize;
  if (!((this.viewModel.maxWidth == null))) goto L_3d1;
  this.viewModel.maxWidth;
  d = this.viewModel.maxSize;
  c = Ne(this.viewModel);
  if (!(fe(this.viewModel))) goto L_448;
  goto L_449;
  // [栈深重同步 1 -> 0]
  f = undefined;
  if (!((true === this.viewModel.scrollable))) goto L_b66;
  let o;
  this.updateScrollPosition(t, r);
  o = this.baseViewAttributes;
  if (!(c)) goto L_4fc;
  // [栈深重同步 2 -> 1]
  o;
  e.beginRender(i, undefined);
  e.setAttributeRef(this.scrollRef);
  e.setAttributeStyle("style", mi.scroll);
  e.setAttributes(o);
  e.setAttributeNumber("aspectRatio", h);
  if (!((this.viewModel.minSize == null))) goto L_6be;
  this.viewModel.minSize;
  if (!((s == null))) goto L_69d;
  s;
  goto L_6be;
  e.setAttribute("flexBasis", undefined.basis);
  if (!((s == null))) goto L_6f6;
  s;
  goto L_717;
  e.setAttributeNumber("flexGrow", undefined.grow);
  if (!((s == null))) goto L_74f;
  s;
  goto L_770;
  e.setAttributeNumber("flexShrink", undefined.shrink);
  e.setAttribute("height", a);
  e.setAttribute("maxHeight", u);
  e.setAttribute("maxWidth", d);
  e.setAttribute("minHeight", this.viewModel.minHeight);
  e.setAttribute("minWidth", this.viewModel.minWidth);
  e.setAttributeFunction("onLayout", f);
  e.setAttribute("scrollEnabled", (true !== this.viewModel.disableUserScroll));
  e.setAttribute("width", l);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", mi.canvas);
  e.setAttributes(this.chartTapAttributes(c));
  e.setAttributeNumber("width", t);
  e.setAttributeNumber("height", r);
  this.renderChartContents(t, r);
  e.endRender();
  e.endRender();
  return;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", mi.canvas);
  e.setAttributes(this.chartRootAttributes(c));
  e.setAttributeNumber("aspectRatio", h);
  if (!((this.viewModel.minSize == null))) goto L_d02;
  this.viewModel.minSize;
  if (!((s == null))) goto L_ce1;
  s;
  goto L_d02;
  e.setAttribute("flexBasis", undefined.basis);
  if (!((s == null))) goto L_d3a;
  s;
  goto L_d5b;
  e.setAttributeNumber("flexGrow", undefined.grow);
  if (!((s == null))) goto L_d93;
  s;
  goto L_db4;
  e.setAttributeNumber("flexShrink", undefined.shrink);
  e.setAttribute("height", a);
  e.setAttribute("maxHeight", u);
  e.setAttribute("maxWidth", d);
  e.setAttribute("minHeight", this.viewModel.minHeight);
  e.setAttribute("minWidth", this.viewModel.minWidth);
  e.setAttributeFunction("onLayout", f);
  e.setAttribute("width", l);
  this.renderChartContents(t, r);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=97B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.baseViewAttributes;
  if (!(t)) goto L_5c;
  e.onTap = this.handleChartTap;
  this.handleChartTap;
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=48B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: this
function {
  this = this;
  if (!(t)) goto L_2e;
  return {onTap: this.handleChartTap};
  return {};
}

// fn <atom:0>  args=2 vars=10 closure=6 cpool=0 bc=955B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n, o, r, s, a, l, this
// closure: ee, qt, _t, Ae, ke, Et
function {
  this = this;
  let l;
  let a;
  let s;
  let r;
  let o;
  let n;
  let i;
  if (!((this.viewModel.data == null))) goto L_64;
  this.viewModel.data;
  i = [];
  n = ee(this.viewModel.series);
  if (((0 === i.length))) goto L_bc;
  if (!((0 === n.length))) goto L_e8;
  this.renderNoData(t, e);
  return;
  o = qt(this.viewModel, t, e);
  r = _t(i, n, this.viewModel);
  s = Ae(i, n, this.viewModel);
  a = ke(i, this.viewModel, this.state.activeHoverIndex);
  l = Et(this.viewModel, r);
  this.renderGrid(o, l, r);
  this.renderAxes(o, l, r);
  this.renderBarSeries(i, n, o, r, s);
  this.renderLineAndAreaSeries(i, n, o, r, s, a);
  this.renderXAxisLabels(i, o, s);
  this.renderYAxisLabels(l, o, r);
  this.renderLegend(n, o);
  this.renderHoverTooltip(i, n, a.index, o, r, s);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=262B file=dil_charts/src/widgets/ValdiChart
// args: t, i
// closure: e, r, mi
function {
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", mi.noDataLabel);
  e.setAttributeNumber("top", ((i / 2) - 8));
  e.setAttributeNumber("width", t);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=4 cpool=0 bc=349B file=dil_charts/src/widgets/ValdiChart
// args: t, i, n
// locals: o, this
// closure: Tt, e, s, mi
function {
  this = this;
  let o;
  if (!((false === this.viewModel.showGrid))) goto L_4e;
  return;
  o = Tt(t, i, n, this.viewModel);
  if (!((undefined !== o))) goto L_15c;
  e.beginRender(s, "chart-grid");
  e.setAttributeStyle("style", mi.shapeOverlay);
  e.setAttribute("path", o);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=4 cpool=0 bc=276B file=dil_charts/src/widgets/ValdiChart
// args: t, i, n
// locals: o, this
// closure: It, e, a, mi
function {
  this = this;
  let o;
  o = It(t, i, n, this.viewModel);
  if (!((undefined !== o))) goto L_113;
  e.beginRender(a, "chart-axes");
  e.setAttributeStyle("style", mi.shapeOverlay);
  e.setAttribute("path", o);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: ie
function {
  return ("bar" === ie(t.type));
}

// fn <atom:0>  args=5 vars=30 closure=11 cpool=1 bc=1686B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n, o
// locals: r, s, a, l, h, u, d, c, f, b, u#1, o#1, a#1, l#1, f#1, m, s#1, a#2, h#1, u#2, c#1, g, p, y, this
// closure: ie, Jt, _e, ge, je, Je, pe, Ue, Re, Me, Ze
function {
  this = this;
  let f;
  let c;
  let d;
  let u;
  let h;
  let l;
  let a;
  let s;
  let r;
  r = e.filter(function <atom:0>);
  if (((0 === r.length))) goto L_54;
  if (!((0 === t.length))) goto L_57;
  return;
  s = Jt(r);
  a = _e(t.length, i, o);
  l = ge(this.viewModel.barCategoryGap, a);
  if (!((this.viewModel.barGap == null))) goto L_121;
  this.viewModel.barGap;
  h = Math.max(0, 6);
  u = Math.max(2, (a - (2 * l)));
  d = Math.max(2, ((u - (h * Math.max(0, (s.length - 1)))) / s.length));
  c = je(Je(0, n.min, n.max), i, n);
  f = pe(this.viewModel);
  let b;
  b = 0;
  if (!((b < t.length))) goto L_695;
  let u#1;
  u#1 = ((Ue(Re(t[b], f, b), b, t.length, i, o) - (a / 2)) + l);
  let o#1;
  o#1 = 0;
  if (!((o#1 < s.length))) goto L_68a;
  let m;
  let f#1;
  let l#1;
  let a#1;
  a#1 = s[o#1];
  l#1 = (u#1 + (o#1 * (d + h)));
  f#1 = 0;
  m = 0;
  let s#1;
  for (const s#1 of a#1.series) {
    let y;
    let p;
    let g;
    let c#1;
    let u#2;
    let h#1;
    let a#2;
    a#2 = Me(t[b], s#1.dataKey);
    if (!((a#2 >= 0))) goto L_338;
    goto L_33b;
    // [栈深重同步 4 -> 3]
    h#1 = m;
    u#2 = (h#1 + a#2);
    if (!((a#2 >= 0))) goto L_356;
    f#1 = u#2;
    goto L_35d;
    // [栈深重同步 4 -> 3]
    m = u#2;
    u#2;
    c#1 = je(Je(h#1, n.min, n.max), i, n);
    g = je(Je(u#2, n.min, n.max), i, n);
    p = Math.min(c#1, g);
    y = Math.max(1, Math.abs((g - c#1)));
    if (!((s#1.dataKey == null))) goto L_518;
    s#1.dataKey;
    if (!((this.viewModel.barRadius == null))) goto L_598;
    this.viewModel.barRadius;
    this.renderBarShape("chart-bar-".concat(b, "-", o#1, "-", "series"), l#1, p, d, y, Math.max(0, 4), Ze(t[b], s#1, e.indexOf(s#1), b, r.length), i);
  }
  if (!((0 === a#1.series.length))) goto L_67e;
  this.renderBarShape("chart-empty-bar-".concat(b, "-", o#1), l#1, (c - 1), d, 1, 0, "alpha-10", i);
  o#1 = <o#1_new>;
  (o#1++);
  goto L_282;
  b = <b_new>;
  (b++);
  goto L_244;
  return;
}

// fn <atom:0>  args=8 vars=9 closure=4 cpool=0 bc=559B file=dil_charts/src/widgets/ValdiChart
// args: t, i, n, o, r, s, a, h
// locals: u
// closure: P, e, l, mi
function {
  let u;
  u = new P.GeometricPathBuilder(h.width, h.height).roundRectTo(i, n, o, r, Math.min(s, (o / 2), (r / 2)), Math.min(s, (o / 2), (r / 2))).build();
  e.beginRender(l, t);
  e.setAttributeStyle("style", mi.shapeOverlay);
  e.setAttribute("path", u);
  e.setAttributeString("fillColor", a);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: r
function {
  return (t.dataIndex === r.index);
}

// fn <atom:0>  args=6 vars=18 closure=6 cpool=1 bc=757B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n, o, r
// locals: s, a, l, h, u, d, c, t#1, e#1, n#1, t#2, this
// closure: jt, ie, Ut, Zt, te, Qe
function {
  this = this;
  let a;
  let s;
  s = jt(t, e);
  a = [];
  let l;
  l = 0;
  if (!((l < e.length))) goto L_2c3;
  let c;
  let d;
  let u;
  let h;
  h = e[l];
  u = ie(h.type);
  if ((("bar" === u))) goto L_2b8;
  d = Ut(t, h, this.viewModel, i, n, o, s);
  c = Zt(d);
  if (!((0 !== c.length))) goto L_2b8;
  let t#1;
  t#1 = 0;
  if (!((t#1 < d.length))) goto L_168;
  let n#1;
  let e#1;
  e#1 = d[t#1];
  n#1 = te(h, l, t#1, d.length);
  if (!(("area" === u))) goto L_128;
  this.renderAreaShape(n#1, h, e#1, i, l);
  this.renderLineShape(n#1, h, e#1, i, l);
  t#1 = <t#1_new>;
  (t#1++);
  goto L_b7;
  this.renderValueLabels(c, i);
  if (!((undefined !== r.index))) goto L_2b8;
  if (!((false !== this.viewModel.showHoverDots))) goto L_2b8;
  let t#2;
  t#2 = c.find(function <atom:0>);
  if (!((undefined !== t#2))) goto L_2b7;
  if (!((h.dataKey == null))) goto L_2a7;
  h.dataKey;
  a.push({color: Qe(h, l), key: String(l), point: t#2});
  l = <l_new>;
  (l++);
  goto L_17;
  this.renderHoverIndicator(t, r, i, o, a);
  return;
}

// fn <atom:0>  args=5 vars=7 closure=7 cpool=0 bc=454B file=dil_charts/src/widgets/ValdiChart
// args: t, i, n, o, r
// locals: s, a
// closure: Ct, ti, e, h, mi, ei, lt
function {
  let a;
  let s;
  s = Ct(n, i.curveType, o);
  a = ti(i, r);
  e.beginRender(h, "chart-area-".concat(t));
  e.setAttributeStyle("style", mi.shapeOverlay);
  e.setAttribute("path", s);
  e.setAttributeString("fillColor", a);
  e.setAttributeString("fillGradient", ei(a));
  e.setAttributeNumber("opacity", lt);
  e.endRender();
  return;
}

// fn <atom:0>  args=5 vars=8 closure=11 cpool=0 bc=1098B file=dil_charts/src/widgets/ValdiChart
// args: t, i, n, o, r
// locals: s, a, this
// closure: Qe, e, u, mi, $t, E, Ht, d, Ft, c, U
function {
  this = this;
  let a;
  let s;
  s = Qe(i, r);
  e.beginRender(u, "chart-line-".concat(t));
  e.setAttributeStyle("style", mi.shapeOverlay);
  e.setAttribute("path", $t(n, i.curveType, o));
  e.setAttributeNumber("strokeWidth", E);
  e.setAttributeString("strokeColor", s);
  e.endRender();
  if (!((true !== this.viewModel.showDots))) goto L_1db;
  return;
  a = Ht(this.viewModel, n);
  if (!((0 !== a.length))) goto L_449;
  e.beginRender(d, "chart-dot-outline-".concat(t));
  e.setAttributeStyle("style", mi.shapeOverlay);
  e.setAttribute("path", Ft(a, 5, o));
  e.endRender();
  e.beginRender(c, "chart-dot-fill-".concat(t));
  e.setAttributeStyle("style", mi.shapeOverlay);
  e.setAttribute("path", Ft(a, U, o));
  e.setAttributeString("fillColor", s);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=7 closure=5 cpool=0 bc=1062B file=dil_charts/src/widgets/ValdiChart
// args: t, i
// locals: n, o, r, s, this
// closure: e, f, mi, Lt, Nt
function {
  this = this;
  let o;
  let n;
  if (!((true !== this.viewModel.showValueLabels))) goto L_53;
  return;
  if (!((this.viewModel.valueLabelInterval == null))) goto L_ea;
  this.viewModel.valueLabelInterval;
  n = Math.max(1, Math.floor(1));
  if (!((this.viewModel.valueLabelOffset == null))) goto L_188;
  this.viewModel.valueLabelOffset;
  o = Math.max(0, Math.floor(0));
  let r;
  r = 0;
  if (!((r < t.length))) goto L_425;
  let s;
  s = t[r];
  if (!((((s.dataIndex - o) % n) === 0))) goto L_419;
  e.beginRender(f, "chart-value-label-".concat(s.dataIndex, "-", s.rawX, "-", s.value));
  e.setAttributeStyle("style", mi.valueLabel);
  e.setAttributeString("value", s.formattedValue);
  e.setAttributeNumber("left", Lt(s.x, i));
  e.setAttributeNumber("top", Nt(s.y));
  e.endRender();
  r = <r_new>;
  (r++);
  goto L_194;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  return t.point;
}

// fn <atom:0>  args=5 vars=11 closure=12 cpool=1 bc=1497B file=dil_charts/src/widgets/ValdiChart
// args: t, i, n, o, r
// locals: s, a, l, h, t#1, this
// closure: Ge, ze, pe, Ue, Re, e, b, mi, Pt, m, Ft, g
function {
  this = this;
  let h;
  let l;
  let a;
  let s;
  s = i.index;
  if (!((undefined === s))) goto L_3a;
  return;
  if (!(!i.isActive)) goto L_a9;
  if (!((true !== this.viewModel.showIdleHoverIndicator))) goto L_a9;
  return;
  if (!(!Ge(t[s], ze(this.viewModel)))) goto L_d9;
  return;
  if (!(i.isActive)) goto L_104;
  goto L_109;
  // [栈深重同步 1 -> 0]
  a = "chart-idle-hover";
  l = pe(this.viewModel);
  h = Ue(Re(t[s], l, s), s, t.length, n, o);
  if (!((true === this.viewModel.showHoverCursor))) goto L_29e;
  e.beginRender(b, "".concat(a, "-cursor"));
  e.setAttributeStyle("style", mi.shapeOverlay);
  e.setAttribute("path", Pt(h, n));
  e.endRender();
  if (!((false !== this.viewModel.showHoverDots))) goto L_5d8;
  if (!((0 !== r.length))) goto L_5d8;
  e.beginRender(m, "".concat(a, "-dot-outline"));
  e.setAttributeStyle("style", mi.shapeOverlay);
  e.setAttribute("path", Ft(r.map(function <atom:0>), 5, n));
  e.endRender();
  let t#1;
  for (const t#1 of r) {
    e.beginRender(g, "".concat(a, "-dot-fill-", t#1.key));
    e.setAttributeStyle("style", mi.shapeOverlay);
    e.setAttribute("path", Ft([t#1.point], 4, n));
    e.setAttributeString("fillColor", t#1.color);
    e.endRender();
  }
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=458B file=dil_charts/src/widgets/ValdiChart
// args: t, i
// closure: e, y, mi
function {
  e.beginRender(y, "chart-hover-tooltip-line-".concat(i));
  if (!((true === t.isTitle))) goto L_cb;
  goto L_ef;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", mi.tooltipLine);
  e.setAttributeString("value", t.value);
  if (!((true === t.isTitle))) goto L_199;
  goto L_19e;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", "color-text");
  e.endRender();
  return;
}

// fn <atom:0>  args=6 vars=14 closure=12 cpool=1 bc=784B file=dil_charts/src/widgets/ValdiChart
// args: t, i, n, o, r, s
// locals: a, l, h, u, d, c, f, this
// closure: e, y, mi, De, pe, Ue, Re, Ve, Oe, Be, p, ht
function {
  this = this;
  let f;
  let c;
  let d;
  let u;
  let h;
  let l;
  let a;
  if (((false === this.viewModel.showTooltip))) goto L_66;
  if (!((undefined === n))) goto L_69;
  return;
  if (!((this.state.tooltipLines == null))) goto L_b5;
  this.state.tooltipLines;
  a = [];
  if (!((0 === a.length))) goto L_bf;
  return;
  l = De(Math.min(a.length, 5));
  h = pe(this.viewModel);
  u = Ue(Re(t[n], h, n), n, t.length, o, s);
  d = Ve(t, i, n, o, r);
  c = Oe(u, o);
  f = Be(d, l, o);
  e.beginRender(p, "chart-hover-tooltip");
  e.setAttributeStyle("style", mi.tooltip);
  e.setAttributeNumber("left", c);
  e.setAttributeNumber("top", f);
  e.setAttributeNumber("width", ht);
  e.setAttributeNumber("height", l);
  a.slice(0, 5).map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=6 cpool=0 bc=63B file=dil_charts/src/widgets/ValdiChart
// args: n, s
// closure: r, wt, t, o, e, i
function {
  if (!((r[String(n)] == null))) goto L_23;
  r[String(n)];
  return {index: s, rawValue: n, label: String(n), x: wt(n, s, t, o, e, i)};
}

// fn <atom:0>  args=2 vars=3 closure=7 cpool=0 bc=82B file=dil_charts/src/widgets/ValdiChart
// args: n, s
// locals: a
// closure: Re, o, r, Ue, t, e, i
function {
  let a;
  a = Re(n, o, s);
  if (!((r[String(a)] == null))) goto L_34;
  r[String(a)];
  return {index: s, rawValue: a, label: String(a), x: Ue(a, s, t.length, e, i)};
}

// fn <atom:0>  args=3 vars=12 closure=6 cpool=2 bc=809B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, o, r, s, a, t#1, a#1, l, this
// closure: wt, Re, Ue, ye, pe, At
function {
  this = this;
  let a#1;
  let s;
  let r;
  let o;
  let n;
  n = ye(this.viewModel);
  if (!((true === n.hide))) goto L_62;
  return;
  o = pe(this.viewModel);
  if (!((n.labels == null))) goto L_b4;
  n.labels;
  r = {};
  s = n.ticks;
  if (!((undefined !== s))) goto L_209;
  let a;
  a = At(s.map(function <atom:0>), e, n.interval);
  let t#1;
  for (const t#1 of a) {
    this.renderXAxisLabel(t#1.index, t#1.rawValue, t#1.label, t#1.x, e);
  }
  return;
  a#1 = At(t.map(function <atom:0>), e, n.interval);
  let l;
  for (const l of a#1) {
    this.renderXAxisLabel(l.index, l.rawValue, l.label, l.x, e);
  }
  return;
}

// fn <atom:0>  args=5 vars=6 closure=6 cpool=0 bc=482B file=dil_charts/src/widgets/ValdiChart
// args: t, i, n, o, r
// locals: s
// closure: kt, e, v, mi, St, Z
function {
  let s;
  if (!((0 === n.length))) goto L_a;
  return;
  s = kt(n);
  e.beginRender(v, "chart-x-label-".concat(t, "-", i));
  e.setAttributeStyle("style", mi.centeredAxisLabel);
  e.setAttributeString("value", n);
  e.setAttributeNumber("left", St({index: t, rawValue: i, label: n, x: o}, r));
  e.setAttributeNumber("top", (r.labelBottom - Z));
  e.setAttributeNumber("width", s);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=8 closure=5 cpool=0 bc=875B file=dil_charts/src/widgets/ValdiChart
// args: t, i, n
// locals: o, r, s, a, this
// closure: e, x, mi, ui, je
function {
  this = this;
  let s;
  let r;
  let o;
  if (!((true !== this.viewModel.showYAxis))) goto L_56;
  return;
  o = this.viewModel.yAxis;
  if (!((o == null))) goto L_a6;
  o;
  goto L_c7;
  if (!((undefined.orientation == null))) goto L_d1;
  undefined.orientation;
  r = "left";
  s = Math.max(1, (i.yAxisWidth - 4));
  let a;
  for (const a of t) {
    e.beginRender(x, "chart-y-label-".concat(a));
    e.setAttributeStyle("style", mi.yAxisLabel);
    e.setAttributeString("value", ui(a, o));
    if (!(("right" === r))) goto L_261;
    goto L_289;
    // [栈深重同步 7 -> 6]
    e.setAttributeNumber("left", ((i.plotLeft - s) - 6));
    e.setAttributeNumber("top", (je(a, i, n) - 5));
    if (!(("right" === r))) goto L_300;
    goto L_305;
    // [栈深重同步 7 -> 6]
    e.setAttributeString("textAlign", "right");
    e.setAttributeNumber("width", s);
    e.endRender();
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=7 cpool=0 bc=865B file=dil_charts/src/widgets/ValdiChart
// args: t, i
// locals: o
// closure: e, A, mi, M, n, Qe, S
function {
  let o;
  if (!((t.label == null))) goto L_4c;
  t.label;
  o = t.dataKey;
  if (!((undefined !== o))) goto L_360;
  if (!((0 !== o.length))) goto L_360;
  e.beginRender(A, "chart-legend-item-".concat(i));
  e.setAttributeStyle("style", mi.legendItem);
  e.beginRender(M, "chart-legend-marker-".concat(i));
  e.setAttributeStyle("style", mi.legendMarker);
  e.setAttribute("path", n);
  e.setAttributeString("fillColor", Qe(t, i));
  e.endRender();
  e.beginRender(S, "chart-legend-label-".concat(i));
  e.setAttributeStyle("style", mi.legendLabel);
  e.setAttributeString("value", o);
  e.endRender();
  e.endRender();
  return;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=8 cpool=1 bc=457B file=dil_charts/src/widgets/ValdiChart
// args: t, i
// locals: n, this
// closure: e, A, mi, M, Qe, S, P, w
function {
  this = this;
  let n;
  if (!((this.viewModel.showLegend == null))) goto L_51;
  this.viewModel.showLegend;
  if (((true !== true))) goto L_7a;
  if (!((0 === i.legendHeight))) goto L_7d;
  return;
  n = new P.GeometricPathBuilder(8, 8).ovalTo(0, 0, 8, 8).build();
  e.beginRender(w, "chart-legend");
  e.setAttributeStyle("style", mi.legend);
  t.map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=983B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n, o, this
// closure: ue
function {
  this = this;
  let o;
  let n;
  let i;
  this.scrollRef.setAttribute("staticContentWidth", t);
  this.scrollRef.setAttribute("staticContentHeight", e);
  i = ue(this.viewModel, t, this.state.layoutWidth);
  if (!((undefined === i))) goto L_116;
  return;
  n = "".concat(t, ":", e, ":", i);
  if (!((this.scrollPositionSignature === n))) goto L_174;
  return;
  if (!(this.hasAppliedScrollPosition)) goto L_1e0;
  o = (true !== this.viewModel.disableAnimation);
  this.scrollPositionSignature = n;
  this.hasAppliedScrollPosition = true;
  if (!(o)) goto L_2ed;
  this.scrollRef.setAttribute("contentOffsetAnimated", true);
  this.scrollRef.setAttribute("contentOffsetX", i);
  this.scrollRef.setAttribute("contentOffsetY", 0);
  return;
  this.scrollRef.setAttribute("contentOffsetX", i);
  this.scrollRef.setAttribute("contentOffsetY", 0);
  this.scrollRef.setAttribute("contentOffsetAnimated", false);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=20B file=dil_charts/src/widgets/ValdiChart
// args: e, i
// closure: Re, n, t
function {
  return (String(Re(e, n, i)) === String(t));
}

// fn wt  args=6 vars=7 closure=2 cpool=1 bc=229B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n, o, r
// locals: s
// closure: Re, Ue
function {
  let s;
  if (!(("number" === r.type))) goto L_67;
  return Ue(t, e, Math.max(1, i.length), o, r);   // tail call
  s = i.findIndex(function <atom:0>);
  if (!((s >= 0))) goto L_a7;
  return Ue(t, s, i.length, o, r);
  if ((i.length)) goto L_d8;
  return Ue(t, e, Math.max(1, 1), o, r);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  return (t.label.length > 0);
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=27B file=dil_charts/src/widgets/ValdiChart
// args: e, i
// closure: n, t
function {
  if (((0 === i))) goto L_1a;
  if (((i === (n.length - 1)))) goto L_1a;
  return ((i % t) === 0);
}

// fn At  args=3 vars=12 closure=1 cpool=2 bc=617B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, t#1, o, r, s, a, l, h, t#2
// closure: Mt
function {
  let l;
  let a;
  let s;
  let r;
  let o;
  let n;
  n = t.filter(function <atom:0>);
  if (!((n.length <= 2))) goto L_46;
  return n;
  if (!(("number" == typeof i))) goto L_ec;
  if (!(Number.isFinite(i))) goto L_ec;
  if (!((i >= 0))) goto L_ec;
  let t#1;
  t#1 = (Math.floor(i) + 1);
  if (!((t#1 <= 1))) goto L_bf;
  return n;
  return Mt(n.filter(function <atom:0>), e);
  o = Math.max(2, (Math.floor((e.plotWidth / 56)) + 1));
  if (!((n.length <= o))) goto L_179;
  return Mt(n, e);   // tail call
  r = [];
  s = (n.length - 1);
  a = (s / Math.max(1, (o - 1)));
  l = -1;
  let h;
  h = 0;
  if (!((h < o))) goto L_261;
  let t#2;
  if (!((h === (o - 1)))) goto L_1e2;
  goto L_212;
  // [栈深重同步 1 -> 0]
  t#2 = Math.round((h * a));
  if (!((t#2 !== l))) goto L_255;
  r.push(n[t#2]);
  l = t#2;
  t#2;
  h = <h_new>;
  (h++);
  goto L_1c3;
  return Mt(r, e);   // tail call
}

// fn Mt  args=2 vars=10 closure=2 cpool=0 bc=230B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n, o, r, s, n#1, a, l
// closure: St, Rt
function {
  let r;
  let o;
  let n;
  let i;
  if (!((t.length <= 2))) goto L_14;
  return t;
  i = [t[0]];
  n = t[(t.length - 1)];
  o = St(n, e);
  r = Rt(t[0], e);
  let s;
  s = 1;
  if (!((s < (t.length - 1)))) goto L_b7;
  let l;
  let a;
  let n#1;
  n#1 = t[s];
  a = St(n#1, e);
  l = Rt(n#1, e);
  if (!((a >= (r + 4)))) goto L_ac;
  if (!(((l + 4) <= o))) goto L_ac;
  i.push(n#1);
  r = l;
  l;
  s = <s_new>;
  (s++);
  goto L_36;
  i.push(n);
  return i;
}

// fn St  args=2 vars=3 closure=2 cpool=0 bc=123B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i
// closure: kt, Je
function {
  let i;
  i = kt(t.label);
  return Je((t.x - (i / 2)), 0, (e.width - i));   // tail call
}

// fn Rt  args=2 vars=2 closure=2 cpool=0 bc=42B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// closure: St, kt
function {
  return (St(t, e) + kt(t.label));
}

// fn Lt  args=2 vars=2 closure=2 cpool=0 bc=47B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// closure: Je, Q
function {
  return Je((t - 21), 0, (e.width - Q));   // tail call
}

// fn Nt  args=1 vars=1 closure=0 cpool=0 bc=46B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  return Math.max(0, (t - 18));   // tail call
}

// fn kt  args=1 vars=1 closure=3 cpool=1 bc=141B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: et, tt, Z
function {
  return Math.min(et, Math.max(tt, (Math.ceil(((t.length * Z) * 0.55)) + 8)));   // tail call
}

// fn Tt  args=4 vars=9 closure=3 cpool=0 bc=593B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n
// locals: o, r, s, e#1, i#1
// closure: P, ve, je
function {
  let r;
  let o;
  o = new P.GeometricPathBuilder(t.width, t.height);
  r = false;
  let s;
  for (const s of e) {
    let e#1;
    if (!((s === i.min))) goto L_af;
    if ((ve(n))) goto L_100;
    if (!((s === i.max))) goto L_105;
    if (((true !== n.showYAxis))) continue;
    e#1 = je(s, t, i);
    let i#1;
    i#1 = t.plotLeft;
    if (!((i#1 < t.plotRight))) goto L_212;
    o.moveTo(i#1, e#1).lineTo(Math.min(t.plotRight, (i#1 + 4)), e#1);
    i#1 = (i#1 + 10);
    (i#1 + 10);
    goto L_134;
    r = true;
    true;
  }
  if (!(r)) goto L_24f;
  return o.build();
  return undefined;
}

// fn It  args=4 vars=8 closure=3 cpool=0 bc=907B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n
// locals: o, r, s, s#1
// closure: P, ye, je
function {
  let s;
  let r;
  let o;
  o = new P.GeometricPathBuilder(t.width, t.height);
  r = false;
  s = ye(n);
  if (!((false !== s.axisLine))) goto L_1b3;
  if (!((true !== s.hide))) goto L_1b3;
  o.moveTo(t.plotLeft, t.plotBottom).lineTo(t.plotRight, t.plotBottom);
  r = true;
  true;
  if (!((true === n.showYAxis))) goto L_35c;
  if (!((n.yAxis == null))) goto L_20a;
  n.yAxis;
  goto L_22b;
  if (!((true === undefined.axisLine))) goto L_35c;
  if (!((e.length > 0))) goto L_35c;
  let s#1;
  if (!((n.yAxis == null))) goto L_26c;
  n.yAxis;
  goto L_28d;
  if (!(("right" === undefined.orientation))) goto L_2b4;
  goto L_2d6;
  // [栈深重同步 1 -> 0]
  s#1 = t.plotLeft;
  o.moveTo(s#1, je(e[(e.length - 1)], t, i)).lineTo(s#1, t.plotBottom);
  r = true;
  true;
  if (!(r)) goto L_389;
  return o.build();
  return undefined;
}

// fn $t  args=3 vars=4 closure=2 cpool=0 bc=159B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n
// closure: P, Wt
function {
  let n;
  n = new P.GeometricPathBuilder(i.width, i.height);
  Wt(n, t, e);
  return n.build();   // tail call
}

// fn Ct  args=3 vars=8 closure=2 cpool=0 bc=620B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, o, t#1, e#1, t#2
// closure: P, Wt
function {
  let o;
  let n;
  n = new P.GeometricPathBuilder(i.width, i.height);
  o = Wt(n, t, e);
  if (!((o.length > 0))) goto L_245;
  let t#1;
  t#1 = o[(o.length - 1)];
  n.lineTo(t#1.x, t#1.baselineY);
  let e#1;
  e#1 = (o.length - 2);
  if (!((e#1 >= 0))) goto L_19f;
  let t#2;
  t#2 = o[e#1];
  n.lineTo(t#2.x, t#2.baselineY);
  e#1 = <e#1_new>;
  (e#1--);
  goto L_10e;
  if (!((1 === o.length))) goto L_21c;
  n.lineTo(o[0].x, o[0].baselineY);
  n.close();
  return n.build();   // tail call
}

// fn Pt  args=2 vars=2 closure=1 cpool=0 bc=286B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// closure: P
function {
  return new P.GeometricPathBuilder(e.width, e.height).moveTo(t, e.plotTop).lineTo(t, e.plotBottom).build();   // tail call
}

// fn Ft  args=3 vars=5 closure=1 cpool=0 bc=287B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, o
// closure: P
function {
  let n;
  n = new P.GeometricPathBuilder(i.width, i.height);
  let o;
  for (const o of t) {
    n.ovalTo((o.x - e), (o.y - e), (2 * e), (2 * e));
  }
  return n.build();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=45B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: n, i
function {
  return (((t.dataIndex - n) % i) === 0);
}

// fn Ht  args=2 vars=4 closure=0 cpool=1 bc=310B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n
function {
  let n;
  let i;
  if (!((t.valueLabelInterval == null))) goto L_7b;
  t.valueLabelInterval;
  i = Math.max(1, Math.floor(1));
  if (!((t.valueLabelOffset == null))) goto L_f7;
  t.valueLabelOffset;
  n = Math.max(0, Math.floor(0));
  if (!((1 === i))) goto L_10e;
  if (!((0 === n))) goto L_10e;
  return e;
  return e.filter(function <atom:0>);
}

// fn Wt  args=3 vars=4 closure=5 cpool=1 bc=108B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n
// closure: Kt, Ot, Bt, Dt, Vt
function {
  let n;
  if (!((0 === e.length))) goto L_d;
  return [];
  n = Kt(i);
  if (!(("natural" === n))) goto L_21;
  return Ot(t, e);
  if (!(("monotoneX" === n))) goto L_31;
  return Bt(t, e);
  if (!(("stepBefore" === n))) goto L_42;
  return Dt(t, e, 0);
  if (!(("step" === n))) goto L_54;
  return Dt(t, e, 0.5);
  if (!(("stepAfter" === n))) goto L_65;
  return Dt(t, e, 1);
  return Vt(t, e);
}

// fn Vt  args=2 vars=4 closure=0 cpool=0 bc=258B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n
function {
  t.moveTo(e[0].x, e[0].y);
  let i;
  i = 1;
  if (!((i < e.length))) goto L_100;
  let n;
  n = e[i];
  t.lineTo(n.x, n.y);
  i = <i_new>;
  (i++);
  goto L_73;
  return e;
}

// fn Dt  args=3 vars=8 closure=0 cpool=0 bc=766B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, o, r, s, i#1
function {
  t.moveTo(e[0].x, e[0].y);
  let n;
  n = 1;
  if (!((n < e.length))) goto L_26d;
  let s;
  let r;
  let o;
  o = e[(n - 1)];
  r = e[n];
  if (!((i <= 0))) goto L_17a;
  t.lineTo(o.x, r.y).lineTo(r.x, r.y);
  goto L_262;
  s = ((o.x * (1 - i)) + (r.x * i));
  t.lineTo(s, o.y).lineTo(s, r.y);
  n = <n_new>;
  (n++);
  goto L_73;
  if (!((i > 0))) goto L_2fc;
  if (!((i < 1))) goto L_2fc;
  if (!((e.length > 1))) goto L_2fc;
  let i#1;
  i#1 = e[(e.length - 1)];
  t.lineTo(i#1.x, i#1.y);
  return e;
}

// fn Ot  args=2 vars=8 closure=2 cpool=0 bc=871B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n, e#1, o, r, s
// closure: zt, Vt
function {
  let i;
  i = zt(e);
  if (!((i.length < 3))) goto L_17;
  return Vt(t, i);   // tail call
  t.moveTo(i[0].x, i[0].y);
  let n;
  n = 0;
  if (!((n < (i.length - 1)))) goto L_363;
  let s;
  let r;
  let o;
  let e#1;
  e#1 = i[Math.max(0, (n - 1))];
  o = i[n];
  r = i[(n + 1)];
  s = i[Math.min((i.length - 1), (n + 2))];
  t.cubicTo((o.x + ((r.x - e#1.x) / 6)), (o.y + ((r.y - e#1.y) / 6)), (r.x - ((s.x - o.x) / 6)), (r.y - ((s.y - o.y) / 6)), r.x, r.y);
  n = <n_new>;
  (n++);
  goto L_8e;
  return i;
}

// fn Bt  args=2 vars=9 closure=4 cpool=0 bc=743B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n, o, o#1, e#1, r, s
// closure: zt, Vt, Gt, Xt
function {
  let n;
  let i;
  i = zt(e);
  if (!((i.length < 3))) goto L_1a;
  return Vt(t, i);   // tail call
  n = Array(i.length).fill(0);
  let o;
  o = 1;
  if (!((o < (i.length - 1)))) goto L_88;
  n[o] = Gt(i[(o - 1)], i[o], i[(o + 1)]);
  o = <o_new>;
  (o++);
  goto L_4f;
  n[0] = Xt(i[0], i[1], n[1]);
  n[(i.length - 1)] = Xt(i[(i.length - 2)], i[(i.length - 1)], n[(i.length - 2)]);
  t.moveTo(i[0].x, i[0].y);
  let o#1;
  o#1 = 1;
  if (!((o#1 < i.length))) goto L_2e3;
  let s;
  let r;
  let e#1;
  e#1 = i[(o#1 - 1)];
  r = i[o#1];
  s = ((r.x - e#1.x) / 3);
  t.cubicTo((e#1.x + s), (e#1.y + (s * n[(o#1 - 1)])), (r.x - s), (r.y - (s * n[o#1])), r.x, r.y);
  o#1 = <o#1_new>;
  (o#1++);
  goto L_141;
  return i;
}

// fn Kt  args=1 vars=1 closure=0 cpool=0 bc=87B file=dil_charts/src/widgets/ValdiChart
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

// fn zt  args=1 vars=4 closure=0 cpool=0 bc=252B file=dil_charts/src/widgets/ValdiChart
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

// fn Gt  args=3 vars=8 closure=1 cpool=1 bc=553B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, o, r, s, a
// closure: Yt
function {
  let a;
  let s;
  let r;
  let o;
  let n;
  n = (e.x - t.x);
  o = (i.x - e.x);
  if (((0 === n))) goto L_b6;
  if (((0 === o))) goto L_b6;
  if (!(((n + o) === 0))) goto L_ba;
  return 0;
  r = ((e.y - t.y) / n);
  s = ((i.y - e.y) / o);
  a = (((r * o) + (s * n)) / (n + o));
  if ((((Yt(r) + Yt(s)) * Math.min(Math.abs(r), Math.abs(s), (0.5 * Math.abs(a)))))) goto L_228;
  return 0;
}

// fn Xt  args=3 vars=4 closure=0 cpool=0 bc=164B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n
function {
  let n;
  n = (e.x - t.x);
  if (!((0 !== n))) goto L_a2;
  return ((((3 * (e.y - t.y)) / n) / 2) - (i / 2));
  return i;
}

// fn Yt  args=1 vars=1 closure=0 cpool=0 bc=9B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (!((t < 0))) goto L_7;
  return -1;
  return 1;
}

// fn qt  args=3 vars=12 closure=7 cpool=0 bc=661B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, o, r, s, a, l, h, u, d
// closure: ye, K, X, G, B, D, O
function {
  let d;
  let u;
  let h;
  let l;
  let a;
  let s;
  let r;
  let o;
  let n;
  if (!((t.showLegend == null))) goto L_44;
  t.showLegend;
  n = true;
  o = ye(t);
  if (!((true === o.hide))) goto L_75;
  goto L_a4;
  // [栈深重同步 1 -> 0]
  if (!((o.tickMargin == null))) goto L_a3;
  o.tickMargin;
  r = (K + 8);
  if (!(n)) goto L_af;
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
  h = (B + a);
  if (!(l)) goto L_1a3;
  goto L_1a4;
  // [栈深重同步 2 -> 1]
  u = ((e - B) - 0);
  d = Math.max(48, ((i - r) - s));
  return {height: i, labelBottom: ((i - s) - 6), legendHeight: s, plotBottom: d, plotHeight: Math.max(D, (d - O)), plotLeft: h, plotRight: u, plotTop: O, plotWidth: Math.max(1, (u - h)), width: e, yAxisWidth: a};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: ie
function {
  return ("bar" === ie(t.type));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: ie
function {
  return ("area" === ie(t.type));
}

// fn _t  args=3 vars=31 closure=7 cpool=2 bc=1449B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, o, r, s, b, t#1, b#1, t#2, e#1, i#1, n#1, t#3, t#4, e#2, i#2, o#1, n#2, t#5, t#6, e#3, a, l, h, u, d, c, f, t#7
// closure: ie, Jt, Qt, Me, Se, ne, oe
function {
  let f;
  let c;
  let d;
  let u;
  let h;
  let l;
  let a;
  let s;
  let r;
  let o;
  let n;
  n = [];
  o = Jt(e.filter(function <atom:0>));
  r = Qt(e.filter(function <atom:0>));
  s = new Set();
  let b;
  for (const b of r) {
    let t#1;
    for (const t#1 of b.series) {
      s.add(t#1);
      // [栈深重同步 3 -> 6]
    }
  }
  let b#1;
  for (const b#1 of t) {
    let t#2;
    for (const t#2 of o) {
      let i#1;
      let e#1;
      e#1 = 0;
      i#1 = 0;
      let n#1;
      for (const n#1 of t#2.series) {
        let t#3;
        t#3 = Me(b#1, n#1.dataKey);
        if (!((t#3 >= 0))) goto L_181;
        e#1 = (e#1 + t#3);
        goto L_18c;
        // [栈深重同步 4 -> 3]
        i#1 = (i#1 + t#3);
        (i#1 + t#3);
        // [栈深重同步 3 -> 6]
      }
      n.push(e#1, i#1);
      // [栈深重同步 3 -> 6]
    }
    let t#4;
    for (const t#4 of r) {
      let o#1;
      let i#2;
      let e#2;
      e#2 = 0;
      i#2 = 0;
      o#1 = false;
      let n#2;
      for (const n#2 of t#4.series) {
        let t#5;
        t#5 = Se(b#1, n#2.dataKey);
        if (!((undefined !== t#5))) goto L_274;
        o#1 = true;
        true;
        if (!((t#5 >= 0))) goto L_269;
        e#2 = (e#2 + t#5);
        goto L_274;
        // [栈深重同步 4 -> 3]
        i#2 = (i#2 + t#5);
        (i#2 + t#5);
        // [栈深重同步 3 -> 6]
      }
      if (!(o#1)) goto L_2af;
      n.push(e#2, i#2);
      // [栈深重同步 3 -> 6]
    }
    let t#6;
    for (const t#6 of e) {
      if (!(("bar" !== ie(t#6.type)))) continue;
      if (!(!s.has(t#6))) continue;
      let e#3;
      e#3 = Se(b#1, t#6.dataKey);
      if (!((undefined !== e#3))) goto L_384;
      n.push(e#3);
    }
    // [栈深重同步 0 -> 3]
  }
  if (!((0 === n.length))) goto L_3a2;
  goto L_3d6;
  // [栈深重同步 1 -> 0]
  // append([0], 1, n)
  n;
  a = Math.min.apply(Math, [0]);
  if (!((0 === n.length))) goto L_3e3;
  goto L_417;
  // [栈深重同步 1 -> 0]
  // append([0], 1, n)
  n;
  l = Math.max.apply(Math, [0]);
  if (!((i.yAxis == null))) goto L_443;
  i.yAxis;
  goto L_464;
  h = undefined.domain;
  if (!((h == null))) goto L_471;
  h;
  goto L_473;
  u = undefined[0];
  if (!((h == null))) goto L_480;
  h;
  goto L_482;
  d = undefined[1];
  if (!((h == null))) goto L_492;
  h;
  goto L_494;
  c = ne(undefined[0], a, l, true);
  if (!((h == null))) goto L_4af;
  h;
  goto L_4b1;
  f = ne(undefined[1], a, l, false);
  if (!((c === f))) goto L_4dc;
  c = (c - 1);
  (c - 1);
  f = (f + 1);
  (f + 1);
  if (((undefined === u))) goto L_505;
  if ((("auto" === u))) goto L_505;
  if (((undefined === d))) goto L_505;
  if (!(("auto" === d))) goto L_597;
  let t#7;
  t#7 = oe(c, f);
  if (!((undefined !== u))) goto L_52b;
  if ((("auto" !== u))) goto L_557;
  c = t#7.min;
  t#7.min;
  if (!((undefined !== d))) goto L_56a;
  if ((("auto" !== d))) goto L_596;
  f = t#7.max;
  t#7.max;
  return {max: f, min: c};
}

// fn Et  args=2 vars=7 closure=2 cpool=0 bc=685B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n, o, r, s
// closure: re, se
function {
  let r;
  let o;
  let n;
  let i;
  if (!((t.yAxis == null))) goto L_37;
  t.yAxis;
  goto L_58;
  if (!((undefined !== undefined.ticks))) goto L_10d;
  if (!((t.yAxis.ticks.length > 0))) goto L_10d;
  return t.yAxis.ticks.slice();   // tail call
  i = re(((e.max - e.min) / Math.max(1, 4)), true);
  n = [];
  o = (Math.ceil((e.min / i)) * i);
  r = (e.max + (i / 2));
  let s;
  s = o;
  if (!((s <= r))) goto L_259;
  if (!((n.length < 20))) goto L_259;
  n.push(se(s));
  s = (s + i);
  (s + i);
  goto L_20c;
  if (!((n.length > 0))) goto L_265;
  return n;
  return [e.min, e.max];
}

// fn Ut  args=7 vars=17 closure=7 cpool=0 bc=612B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n, o, r, s
// locals: a, l, h, u, d, i#1, s#1, c, f, b
// closure: pe, Se, Re, je, Je, Le, Ue
function {
  let u;
  let h;
  let l;
  let a;
  a = pe(i);
  l = s.get(e);
  h = [];
  u = [];
  let d;
  d = 0;
  if (!((d < t.length))) goto L_22b;
  let b;
  let f;
  let c;
  let s#1;
  let i#1;
  i#1 = t[d];
  s#1 = Se(i#1, e.dataKey);
  if (!((undefined === s#1))) goto L_d8;
  if (!((u.length > 0))) goto L_d4;
  h.push(u);
  u = [];
  [];
  goto L_220;
  if (!((l == null))) goto L_e3;
  l;
  goto L_e7;
  if (!((undefined[d] == null))) goto L_ed;
  undefined[d];
  c = 0;
  f = (c + s#1);
  b = Re(i#1, a, d);
  u.push({baselineY: je(Je(c, o.min, o.max), n, o), dataIndex: d, formattedValue: Le(i#1, s#1), rawX: b, value: s#1, x: Ue(b, d, t.length, n, r), y: je(Je(f, o.min, o.max), n, o)});
  d = <d_new>;
  (d++);
  goto L_47;
  if (!((u.length > 0))) goto L_25f;
  h.push(u);
  return h;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: ie
function {
  return ("area" === ie(t.type));
}

// fn jt  args=2 vars=11 closure=3 cpool=1 bc=551B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n, o, e#1, n#1, r, o#1, i#1, s
// closure: ie, Qt, Se
function {
  let n;
  let i;
  i = new Map();
  n = Qt(e.filter(function <atom:0>));
  let o;
  for (const o of n) {
    let n#1;
    let e#1;
    e#1 = Array(t.length).fill(0);
    n#1 = Array(t.length).fill(0);
    let r;
    for (const r of o.series) {
      let o#1;
      o#1 = [];
      let i#1;
      i#1 = 0;
      if (!((i#1 < t.length))) goto L_1e3;
      let s;
      s = Se(t[i#1], r.dataKey);
      if (!((undefined !== s))) goto L_1af;
      if (!((s >= 0))) goto L_16f;
      o#1.push(e#1[i#1]);
      <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] + s);
      goto L_1d7;
      // [栈深重同步 4 -> 3]
      o#1.push(n#1[i#1]);
      <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] + s);
      goto L_1d7;
      // [栈深重同步 4 -> 3]
      o#1.push(undefined);
      i#1 = <i#1_new>;
      (i#1++);
      goto L_e3;
      i.set(r, o#1);
      // [栈深重同步 3 -> 6]
    }
  }
  return i;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=dil_charts/src/widgets/ValdiChart
// args: e
// closure: t
function {
  return (e.key === t);
}

// fn Jt  args=1 vars=5 closure=0 cpool=1 bc=351B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e, i, t#1, n
function {
  let e;
  e = [];
  let i;
  for (const i of t) {
    let n;
    let t#1;
    if (!((i.stack == null))) goto L_95;
    i.stack;
    if (!((i.dataKey == null))) goto L_95;
    i.dataKey;
    t#1 = "series-".concat(e.length);
    n = e.findIndex(function <atom:0>);
    if (!((n >= 0))) goto L_113;
    // append([], 0, e[n].series)
    [][e[n].series] = i;
    (i ++);
    e[n] = {key: t#1, series: []};
    goto L_14e;
    // [栈深重同步 4 -> 3]
    e.push({key: t#1, series: [i]});
    // close_loc t#1
  }
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=72B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: i
function {
  return (t.key === i.stack);
}

// fn Qt  args=1 vars=4 closure=0 cpool=1 bc=386B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e, i, t#1
function {
  let e;
  e = [];
  let i;
  // close_loc i
  for (const i of t) {
    let t#1;
    if ((("string" != typeof i.stack))) goto L_6c;
    if (!((0 === i.stack.length))) goto L_74;
    // close_loc i
   continue;
    t#1 = e.findIndex(function <atom:0>);
    if (!((t#1 >= 0))) goto L_112;
    // append([], 0, e[t#1].series)
    [][e[t#1].series] = i;
    (i ++);
    e[t#1] = {key: i.stack, series: []};
    goto L_16e;
    // [栈深重同步 4 -> 3]
    e.push({key: i.stack, series: [i]});
    // close_loc i
  }
  // close_loc i
  return e;
}

// fn Zt  args=1 vars=3 closure=0 cpool=0 bc=75B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e, i
function {
  let e;
  e = [];
  let i;
  for (const i of t) {
    // append([], 0, i)
    i;
    e.push.apply(e, []);
  }
  return e;
}

// fn te  args=4 vars=5 closure=0 cpool=0 bc=106B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n
// locals: o
function {
  let o;
  if (!((t.dataKey == null))) goto L_31;
  t.dataKey;
  o = String(e);
  if (!((n <= 1))) goto L_3b;
  return o;
  return "".concat(o, "-", i);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=83B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (!(("string" == typeof t.dataKey))) goto L_52;
  return (t.dataKey.length > 0);
}

// fn ee  args=1 vars=1 closure=0 cpool=1 bc=49B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (!((undefined === t))) goto L_9;
  return [];
  return t.filter(function <atom:0>);
}

// fn ie  args=1 vars=1 closure=0 cpool=0 bc=36B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (!(("line" === t))) goto L_f;
  return "line";
  if (!(("area" === t))) goto L_1e;
  return "area";
  return "bar";
}

// fn ne  args=4 vars=4 closure=0 cpool=0 bc=85B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n
function {
  if (!(("number" == typeof t))) goto L_38;
  if (!(Number.isFinite(t))) goto L_38;
  return t;
  if (!(("dataMin" === t))) goto L_43;
  return e;
  if (!(("dataMax" === t))) goto L_4e;
  return i;
  if (!(n)) goto L_53;
  return e;
  return i;
}

// fn oe  args=2 vars=4 closure=1 cpool=0 bc=195B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n
// closure: re
function {
  let n;
  let i;
  i = (e - t);
  if (!((i <= 0))) goto L_1f;
  return {max: e, min: t};
  n = re((i / Math.max(1, 4)), true);
  return {max: (Math.ceil((e / n)) * n), min: (Math.floor((t / n)) * n)};
}

// fn re  args=2 vars=5 closure=0 cpool=1 bc=363B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n, o
function {
  let o;
  let n;
  let i;
  if ((!Number.isFinite(t))) goto L_3b;
  if (!((t <= 0))) goto L_3f;
  return 1;
  i = Math.floor((Math.log(t) / Math.LN10));
  n = (t / Math.pow(10, i));
  o = undefined;
  if (!(e)) goto L_113;
  if (!((n < 1.5))) goto L_fb;
  goto L_133;
  // [栈深重同步 1 -> 0]
  if (!((n < 3))) goto L_105;
  goto L_133;
  // [栈深重同步 1 -> 0]
  if (!((n < 7))) goto L_10f;
  goto L_133;
  // [栈深重同步 1 -> 0]
  goto L_133;
  // [栈深重同步 1 -> 0]
  if (!((n <= 1))) goto L_11d;
  goto L_133;
  // [栈深重同步 1 -> 0]
  if (!((n <= 2))) goto L_127;
  goto L_133;
  // [栈深重同步 1 -> 0]
  if (!((n <= 5))) goto L_131;
  goto L_133;
  // [栈深重同步 1 -> 0]
  o = 10;
  10;
  return (o * Math.pow(10, i));
}

// fn se  args=1 vars=1 closure=0 cpool=1 bc=104B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (!((Math.abs(t) < 1e-09))) goto L_31;
  return 0;
  return (Math.round((1000000000 * t)) / 1000000000);
}

// fn ae  args=2 vars=8 closure=2 cpool=0 bc=427B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n, o, r, s, a
// closure: he, we
function {
  let a;
  let s;
  let r;
  let o;
  let n;
  let i;
  i = he(t, e);
  if (!((true !== t.scrollable))) goto L_42;
  return i;
  if (!((t.data == null))) goto L_93;
  t.data;
  goto L_94;
  if (!((undefined.length == null))) goto L_9a;
  undefined.length;
  n = Math.max(1, 1);
  if (!(("number" == typeof t.visiblePointCount))) goto L_ed;
  goto L_ee;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!((undefined !== o))) goto L_106;
  if (!((o > 0))) goto L_106;
  goto L_108;
  // [栈深重同步 1 -> 0]
  r = 48;
  if (!((t.minPointWidth == null))) goto L_15b;
  t.minPointWidth;
  s = Math.max(1, r, 0);
  if (!(we(t))) goto L_173;
  if (!((n > 1))) goto L_173;
  goto L_176;
  // [栈深重同步 1 -> 0]
  a = n;
  return Math.max(i, (a * s));   // tail call
}

// fn le  args=1 vars=1 closure=2 cpool=0 bc=80B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: de, W
function {
  if (!((t.height == null))) goto L_4a;
  t.height;
  return de(t.size, W);   // tail call
}

// fn he  args=2 vars=3 closure=2 cpool=0 bc=100B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i
// closure: ce, V
function {
  let i;
  if (!((t.width == null))) goto L_4d;
  t.width;
  i = ce(t.size);
  if (!((undefined !== i))) goto L_5a;
  return i;
  if (!((e == null))) goto L_63;
  e;
  return V;
}

// fn ue  args=3 vars=10 closure=4 cpool=0 bc=408B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, o, r, h, s, a, l
// closure: pe, Re, he, we
function {
  let l;
  let a;
  let s;
  let r;
  let o;
  let n;
  if (!((undefined === t.scrollToValue))) goto L_39;
  return;
  if (!((t.data == null))) goto L_63;
  t.data;
  n = [];
  if (!((0 === n.length))) goto L_6d;
  return;
  o = pe(t);
  r = -1;
  let h;
  h = 0;
  if (!((h < n.length))) goto L_d6;
  if (!((String(Re(n[h], o, h)) === String(t.scrollToValue)))) goto L_cc;
  r = h;
  h;
  goto L_d6;
  h = <h_new>;
  (h++);
  goto L_78;
  if (!((r < 0))) goto L_de;
  return;
  s = he(t, i);
  a = Math.max(0, (e - s));
  if (!((0 === a))) goto L_11e;
  return 0;
  if (!(we(t))) goto L_134;
  if (!((n.length > 1))) goto L_134;
  goto L_138;
  // [栈深重同步 2 -> 1]
  l = (e / n.length);
  return Math.min(a, Math.max(0, (r * l)));   // tail call
}

// fn de  args=2 vars=2 closure=1 cpool=0 bc=10B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// closure: ce
function {
  if (!((ce(t) == null))) goto L_9;
  ce(t);
  return e;
}

// fn ce  args=1 vars=2 closure=0 cpool=2 bc=182B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e
function {
  if (!(("number" == typeof t))) goto L_3d;
  if (!(Number.isFinite(t))) goto L_3d;
  if (!((t > 0))) goto L_3d;
  return t;
  if (!(("string" == typeof t))) goto L_b5;
  let e;
  e = Number(t.replace(new RegExp("px$"), ""));
  if (!(Number.isFinite(e))) goto L_b5;
  if (!((e > 0))) goto L_b5;
  return e;
  return;
}

// fn fe  args=1 vars=1 closure=1 cpool=0 bc=78B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: ce
function {
  if (!((t.width == null))) goto L_4b;
  t.width;
  return (undefined === ce(t.size));
}

// fn be  args=1 vars=1 closure=0 cpool=0 bc=100B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (!(Number.isFinite(t))) goto L_63;
  if (!(!(t <= 0))) goto L_63;
  return (Math.round((100 * t)) / 100);
  return;
}

// fn me  args=2 vars=2 closure=0 cpool=1 bc=55B file=dil_charts/src/widgets/ValdiChart
// args: t, e
function {
  if (!((undefined !== t))) goto L_36;
  return (Math.abs((t - e)) < 0.5);
}

// fn ge  args=2 vars=4 closure=1 cpool=2 bc=456B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, i#1
// closure: at
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
  return (e * at);
}

// fn pe  args=1 vars=1 closure=0 cpool=0 bc=164B file=dil_charts/src/widgets/ValdiChart
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

// fn ye  args=1 vars=1 closure=0 cpool=0 bc=209B file=dil_charts/src/widgets/ValdiChart
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

// fn ve  args=1 vars=2 closure=1 cpool=0 bc=90B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e
// closure: ye
function {
  let e;
  e = ye(t);
  if (!((true !== e.hide))) goto L_59;
  return (false !== e.axisLine);
}

// fn xe  args=1 vars=2 closure=1 cpool=0 bc=245B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e
// closure: Xe
function {
  let e;
  e = t.padding;
  if (((undefined === e))) goto L_39;
  if (!(("string" == typeof e))) goto L_49;
  return {left: 0, right: 0};
  return {left: Math.max(0, Xe(e.left)), right: Math.max(0, Xe(e.right))};
}

// fn we  args=1 vars=1 closure=0 cpool=0 bc=127B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (!(("string" != typeof t.xAxis))) goto L_7e;
  if (!((t.xAxis == null))) goto L_5c;
  t.xAxis;
  goto L_7d;
  return ("number" === undefined.type);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: ie
function {
  return ("bar" === ie(t.type));
}

// fn Ae  args=3 vars=14 closure=6 cpool=1 bc=1089B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, o, r, s, a, u, e#1, u#1, t#1, l, h
// closure: ie, ye, xe, F, pe, Re
function {
  let h;
  let l;
  let a;
  let s;
  let r;
  let o;
  let n;
  n = ye(i);
  o = xe(n);
  if (!(e.some(function <atom:0>))) goto L_6c;
  goto L_8e;
  // [栈深重同步 1 -> 0]
  r = F.Point;
  if (!(("number" !== n.type))) goto L_15b;
  return {categoryScale: r, max: Math.max(1, t.length), min: 0, paddingLeft: o.left, paddingRight: o.right, type: "category"};
  s = pe(i);
  a = [];
  let u;
  u = 0;
  if (!((u < t.length))) goto L_1f7;
  let e#1;
  e#1 = Number(Re(t[u], s, u));
  if (!(Number.isFinite(e#1))) goto L_1eb;
  a.push(e#1);
  u = <u_new>;
  (u++);
  goto L_16c;
  let u#1;
  if (!((n.ticks == null))) goto L_226;
  n.ticks;
  for (const u#1 of []) {
    let t#1;
    t#1 = Number(u#1);
    if (!(Number.isFinite(t#1))) goto L_293;
    a.push(t#1);
  }
  if (!((0 === a.length))) goto L_342;
  return {categoryScale: r, max: Math.max(1, t.length), min: 0, paddingLeft: o.left, paddingRight: o.right, type: "category"};
  // append([], 0, a)
  a;
  l = Math.min.apply(Math, []);
  // append([], 0, a)
  a;
  h = Math.max.apply(Math, []);
  if (!((l === h))) goto L_3ca;
  l = (l - 1);
  (l - 1);
  h = (h + 1);
  (h + 1);
  return {categoryScale: r, max: h, min: l, paddingLeft: o.left, paddingRight: o.right, type: "number"};
}

// fn Me  args=2 vars=2 closure=1 cpool=0 bc=11B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// closure: Se
function {
  if (!((Se(t, e) == null))) goto L_a;
  Se(t, e);
  return 0;
}

// fn Se  args=2 vars=4 closure=0 cpool=0 bc=199B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, t#1
function {
  let i;
  if (!((undefined === e))) goto L_9;
  return;
  i = t[e];
  if (!(("number" == typeof i))) goto L_4d;
  if (!(Number.isFinite(i))) goto L_4b;
  return i;
  return undefined;
  if (!(("string" == typeof i))) goto L_c6;
  if (!((i.trim().length > 0))) goto L_c6;
  let t#1;
  t#1 = Number(i);
  if (!(Number.isFinite(t#1))) goto L_c4;
  return t#1;
  return undefined;
  return;
}

// fn Re  args=3 vars=4 closure=0 cpool=0 bc=39B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n
function {
  let n;
  n = t[e];
  if ((("number" == typeof n))) goto L_1f;
  if (!(("string" == typeof n))) goto L_25;
  return n;
  return i;
}

// fn Le  args=2 vars=3 closure=1 cpool=0 bc=66B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i
// closure: bi
function {
  let i;
  i = t.formatted;
  if (!(("string" == typeof i))) goto L_3e;
  if (!((i.length > 0))) goto L_3e;
  return i;
  return bi(e);
}

// fn Ne  args=1 vars=1 closure=0 cpool=0 bc=120B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (((false !== t.showTooltip))) goto L_77;
  if (((true === t.showHoverCursor))) goto L_77;
  return (true === t.showHoverDots);
}

// fn ke  args=3 vars=3 closure=1 cpool=0 bc=93B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// closure: Ke
function {
  if (!((undefined !== i))) goto L_4b;
  if (!(Number.isInteger(i))) goto L_4b;
  if (!((i >= 0))) goto L_4b;
  if (!((i < t.length))) goto L_4b;
  return {index: i, isActive: true};
  return {index: Ke(t, e), isActive: false};
}

// fn Te  args=5 vars=11 closure=3 cpool=0 bc=244B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n, o
// locals: r, s, a, l, i#1, h
// closure: pe, Ue, Re
function {
  let a;
  let s;
  let r;
  if ((!Number.isFinite(t))) goto L_3c;
  if (!((0 === e.length))) goto L_3f;
  return;
  r = pe(i);
  s = undefined;
  a = Number.POSITIVE_INFINITY;
  let l;
  l = 0;
  if (!((l < e.length))) goto L_f0;
  let h;
  let i#1;
  i#1 = Ue(Re(e[l], r, l), l, e.length, n, o);
  h = Math.abs((i#1 - t));
  if (!((h < a))) goto L_e5;
  a = h;
  h;
  s = l;
  l;
  l = <l_new>;
  (l++);
  goto L_71;
  return s;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=83B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (!(("string" == typeof t.label))) goto L_52;
  return (t.label.length > 0);
}

// fn Ie  args=4 vars=13 closure=7 cpool=1 bc=647B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n
// locals: o, r, s, a, l, h, u, t#1, e#1
// closure: $e, Ce, ye, He, We, Fe, Qe
function {
  let l;
  let a;
  let s;
  let r;
  let o;
  o = t[n];
  if (!((undefined === o))) goto L_1e;
  return [];
  r = $e(o, n, i);
  s = Ce(i.tooltipValueFormatter);
  if (!(("xAxisOnly" === s))) goto L_6a;
  return [{isTitle: true, value: r}];
  a = [];
  if (!((true === ye(i).hide))) goto L_d0;
  a.push({isTitle: true, value: r});
  l = e.some(function <atom:0>);
  let u;
  let h;
  const _it1 = e.entries();
  goto L_27a;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  h = <value(_it2)>;
  <done(_it2)>;
  u = <value(_it2)>;
  let e#1;
  let t#1;
  t#1 = He(o, u, s, r);
  if (((undefined === t#1))) goto L_27a;
  e#1 = We(u, l);
  if (!((undefined === u.dataKey))) goto L_23c;
  goto L_264;
  // [栈深重同步 4 -> 7]
  <?>.value = o[u.dataKey];
  <?>.xAxisLabel = r;
  <?>.input = <?>;
  <?>.call(<value(_it2)>, <?>);
  if (!(<done(_it2)>)) goto L_129;
  <value(_it2)>;
  return a;
}

// fn $e  args=3 vars=5 closure=3 cpool=0 bc=86B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n, o
// closure: Re, pe, ye
function {
  let o;
  let n;
  n = Re(t, pe(i), e);
  if (!((ye(i).labels == null))) goto L_38;
  ye(i).labels;
  o = {};
  if (!((o[String(n)] == null))) goto L_53;
  o[String(n)];
  return String(n);   // tail call
}

// fn Ce  args=1 vars=2 closure=0 cpool=0 bc=74B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e
function {
  let e;
  if (((null == t))) goto L_12;
  if (!(("object" != typeof t))) goto L_15;
  return;
  e = t.type;
  if (!(("string" == typeof e))) goto L_48;
  return e;
  return undefined;
}

// fn Pe  args=1 vars=2 closure=1 cpool=0 bc=80B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e
// closure: Ce
function {
  let e;
  if (!(("function" == typeof t))) goto L_f;
  return t;
  if (!(("callback" !== Ce(t)))) goto L_1b;
  return;
  e = t.callback;
  if (!(("function" == typeof e))) goto L_4e;
  return e;
  return undefined;
}

// fn Fe  args=2 vars=2 closure=0 cpool=0 bc=52B file=dil_charts/src/widgets/ValdiChart
// args: t, e
function {
  if (!((undefined === t))) goto L_7;
  return e;
  return "".concat(t, ": ", e);
}

// fn He  args=4 vars=7 closure=2 cpool=0 bc=228B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n
// locals: o, r, s
// closure: Se, Le
function {
  let s;
  let r;
  let o;
  o = t.formatted;
  if (!(("string" == typeof o))) goto L_3c;
  return o;
  if (!(("xAxisLabel" === i))) goto L_47;
  return n;
  r = Se(t, e.dataKey);
  if (!((undefined !== r))) goto L_7c;
  return Le(t, r);   // tail call
  if (!((undefined === e.dataKey))) goto L_a5;
  goto L_c9;
  // [栈深重同步 1 -> 0]
  s = t[e.dataKey];
  if (!(("string" == typeof s))) goto L_e2;
  if (!((s.length > 0))) goto L_e2;
  return s;
  return undefined;
}

// fn We  args=2 vars=2 closure=0 cpool=0 bc=239B file=dil_charts/src/widgets/ValdiChart
// args: t, e
function {
  if (!(("string" == typeof t.label))) goto L_75;
  if (!((t.label.length > 0))) goto L_75;
  return t.label;
  if (!(e)) goto L_ed;
  if (!(("string" == typeof t.dataKey))) goto L_ed;
  if (!((t.dataKey.length > 0))) goto L_ed;
  return t.dataKey;
  return undefined;
}

// fn Ve  args=5 vars=11 closure=5 cpool=0 bc=508B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n, o
// locals: r, s, a, l, t#1, e#1
// closure: jt, Se, ie, je, Je
function {
  let a;
  let s;
  let r;
  r = t[i];
  if (!((undefined === r))) goto L_37;
  return n.plotTop;
  s = jt(t, e);
  a = Number.POSITIVE_INFINITY;
  let l;
  for (const l of e) {
    let e#1;
    let t#1;
    t#1 = Se(r, l.dataKey);
    if (((undefined === t#1))) continue;
    if (!(("area" === ie(l.type)))) goto L_111;
    if (!((s.get(l) == null))) goto L_107;
    s.get(l);
    goto L_109;
    if (!((undefined[i] == null))) goto L_112;
    undefined[i];
    goto L_112;
    // [栈深重同步 4 -> 3]
    e#1 = (0 + t#1);
    a = Math.min(a, je(Je(e#1, o.min, o.max), n, o));
    Math.min(a, je(Je(e#1, o.min, o.max), n, o));
  }
  if (!(Number.isFinite(a))) goto L_1d9;
  return a;
  return n.plotTop;
}

// fn De  args=1 vars=2 closure=1 cpool=0 bc=66B file=dil_charts/src/widgets/ValdiChart
// args: t
// locals: e
// closure: ct
function {
  let e;
  e = Math.max(1, t);
  return ((12 + (e * ct)) + (3 * (e - 1)));
}

// fn Oe  args=2 vars=2 closure=2 cpool=0 bc=89B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// closure: Je, ht
function {
  return Je((t - 68), 0, Math.max(0, (e.width - ht)));   // tail call
}

// fn Be  args=3 vars=4 closure=1 cpool=0 bc=105B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n
// closure: Je
function {
  let n;
  n = ((t - e) - 6);
  if (!((n >= 0))) goto L_14;
  return n;
  return Je((t + 6), 0, Math.max(0, (i.height - e)));
}

// fn Ke  args=2 vars=4 closure=2 cpool=0 bc=89B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n
// closure: ze, Ge
function {
  let i;
  if (!((true !== e.showIdleHoverIndicator))) goto L_2b;
  return;
  i = ze(e);
  let n;
  n = (t.length - 1);
  if (!((n >= 0))) goto L_58;
  if (!(Ge(t[n], i))) goto L_4e;
  return n;
  n = <n_new>;
  (n--);
  goto L_37;
  return;
}

// fn ze  args=1 vars=1 closure=0 cpool=0 bc=119B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (!(("string" == typeof t.hoverIndicatorDataKey))) goto L_75;
  if (!((t.hoverIndicatorDataKey.length > 0))) goto L_75;
  return t.hoverIndicatorDataKey;
  return undefined;
}

// fn Ge  args=2 vars=2 closure=0 cpool=0 bc=17B file=dil_charts/src/widgets/ValdiChart
// args: t, e
function {
  if (((undefined === e))) goto L_10;
  return Boolean(t[e]);
}

// fn Xe  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (!(("number" == typeof t))) goto L_38;
  if (!(Number.isFinite(t))) goto L_38;
  return t;
  return 0;
}

// fn Ye  args=2 vars=2 closure=0 cpool=0 bc=189B file=dil_charts/src/widgets/ValdiChart
// args: t, e
function {
  return (t.plotLeft + Math.min(Math.max(0, e.paddingLeft), (t.plotWidth / 2)));
}

// fn qe  args=2 vars=3 closure=1 cpool=0 bc=242B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i
// closure: Ye
function {
  let i;
  i = Math.min(Math.max(0, e.paddingRight), (t.plotWidth / 2));
  return Math.max(1, ((t.plotRight - i) - Ye(t, e)));   // tail call
}

// fn _e  args=3 vars=3 closure=1 cpool=0 bc=49B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// closure: qe
function {
  return (qe(e, i) / Math.max(1, t));
}

// fn Ee  args=4 vars=6 closure=3 cpool=1 bc=131B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n
// locals: o, r
// closure: Ye, qe, F
function {
  let r;
  let o;
  o = Ye(i, n);
  r = qe(i, n);
  if (!((e <= 1))) goto L_1f;
  return (o + (r / 2));
  if (!((n.categoryScale === F.Point))) goto L_74;
  return (o + ((r * t) / (e - 1)));
  return (o + ((r * (t + 0.5)) / e));
}

// fn Ue  args=5 vars=7 closure=4 cpool=0 bc=327B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n, o
// locals: e#1, t#1
// closure: Je, Ye, qe, Ee
function {
  if (!(("number" === o.type))) goto L_13d;
  let e#1;
  e#1 = Number(t);
  if (!(Number.isFinite(e#1))) goto L_13d;
  let t#1;
  t#1 = ((Je(e#1, o.min, o.max) - o.min) / (o.max - o.min));
  return (Ye(n, o) + (t#1 * qe(n, o)));
  return Ee(e, i, n, o);   // tail call
}

// fn je  args=3 vars=4 closure=1 cpool=0 bc=254B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
// locals: n
// closure: Je
function {
  let n;
  n = ((Je(t, i.min, i.max) - i.min) / (i.max - i.min));
  return (e.plotBottom - (n * e.plotHeight));
}

// fn Je  args=3 vars=3 closure=0 cpool=0 bc=85B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i
function {
  return Math.min(i, Math.max(e, t));   // tail call
}

// fn Qe  args=2 vars=2 closure=2 cpool=0 bc=48B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// closure: ii, gt
function {
  return ii(t.color, gt[(e % gt.length)]);   // tail call
}

// fn Ze  args=5 vars=6 closure=3 cpool=0 bc=132B file=dil_charts/src/widgets/ValdiChart
// args: t, e, i, n, o
// locals: r
// closure: ii, gt, Qe
function {
  let r;
  r = t.fill;
  if (!(("string" == typeof r))) goto L_42;
  return ii(r, gt[(n % gt.length)]);
  if (((undefined !== e.color))) goto L_6f;
  if (!((o > 1))) goto L_76;
  return Qe(e, i);
  return ii(undefined, gt[(n % gt.length)]);
}

// fn ti  args=2 vars=2 closure=2 cpool=0 bc=87B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// closure: ii, gt
function {
  if (!((t.fillColor == null))) goto L_4a;
  t.fillColor;
  return ii(t.color, gt[(e % gt.length)]);   // tail call
}

// fn ei  args=1 vars=1 closure=1 cpool=0 bc=55B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: ni
function {
  return "linear-gradient(".concat(t, " 0, ", ni(t), " 1)");   // tail call
}

// fn ii  args=2 vars=4 closure=3 cpool=0 bc=66B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n
// closure: li, hi, L
function {
  let n;
  let i;
  i = li(t);
  n = hi(e);
  if (!((L.resolveDILColor(i, n) == null))) goto L_41;
  L.resolveDILColor(i, n);
  return n;
}

// fn ni  args=1 vars=1 closure=2 cpool=0 bc=17B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: si, oi
function {
  if (!((si(oi(t), 0) == null))) goto L_10;
  si(oi(t), 0);
  return "rgba(0, 0, 0, 0)";
}

// fn oi  args=1 vars=1 closure=1 cpool=0 bc=11B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: ri
function {
  if (!((ri()[t] == null))) goto L_a;
  ri()[t];
  return t;
}

// fn ri  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_charts/src/widgets/ValdiChart
// closure: N
function {
  return N.getCurrentDILPalette();   // tail call
}

// fn si  args=2 vars=6 closure=4 cpool=0 bc=844B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n, o, t#1
// closure: yt, ai, pt, vt
function {
  let o;
  let n;
  let i;
  i = t.match(yt);
  if (!((null !== i))) goto L_f7;
  return "rgba(".concat(i[1].trim(), ", ", i[2].trim(), ", ", i[3].trim(), ", ", ai(e), ")");   // tail call
  n = t.match(pt);
  if (!((null !== n))) goto L_1e5;
  return "rgba(".concat(n[1].trim(), ", ", n[2].trim(), ", ", n[3].trim(), ", ", ai(e), ")");   // tail call
  o = t.match(vt);
  if (!((null !== o))) goto L_34b;
  let t#1;
  t#1 = o[1];
  if (!((3 === t#1.length))) goto L_264;
  goto L_295;
  // [栈深重同步 3 -> 2]
  if (!((3 === t#1.length))) goto L_2b7;
  goto L_2e8;
  // [栈深重同步 5 -> 4]
  if (!((3 === t#1.length))) goto L_30a;
  goto L_33b;
  // [栈深重同步 7 -> 6]
  return "rgba(".concat(parseInt(t#1.slice(0, 2), 16), ", ", parseInt(t#1.slice(2, 4), 16), ", ", parseInt(t#1.slice(4, 6), 16), ", ", ai(e), ")");   // tail call
  return;
}

// fn ai  args=1 vars=1 closure=0 cpool=4 bc=126B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  return t.toFixed(3).replace(new RegExp("(\\.\\d*?[1-9])0+$"), "$1").replace(new RegExp("\\.0+$"), "");   // tail call
}

// fn li  args=1 vars=1 closure=1 cpool=0 bc=16B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: hi
function {
  if (!(("string" == typeof t))) goto L_e;
  return hi(t);
  return t;
}

// fn hi  args=1 vars=1 closure=1 cpool=0 bc=12B file=dil_charts/src/widgets/ValdiChart
// args: t
// closure: xt
function {
  if (!((xt[t] == null))) goto L_b;
  xt[t];
  return t;
}

// fn ui  args=2 vars=2 closure=3 cpool=0 bc=387B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// closure: fi, di, bi
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
  return "".concat(fi(t, Math.max(0, 0)), "%");   // tail call
  if (!((e == null))) goto L_10c;
  e;
  goto L_156;
  if (!((undefined.tickFormatter == null))) goto L_135;
  undefined.tickFormatter;
  goto L_156;
  if (!(("currency" === undefined.type))) goto L_17f;
  return di(t, e.tickFormatter);
  return bi(t);
}

// fn di  args=2 vars=7 closure=2 cpool=0 bc=456B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i, n, o, r, s
// closure: ci, fi
function {
  let s;
  let r;
  let o;
  let n;
  let i;
  if (!((e.currency == null))) goto L_3b;
  e.currency;
  i = "USD";
  if (!((e.decimals == null))) goto L_b8;
  e.decimals;
  if (!(("compact" === e.notation))) goto L_b7;
  goto L_b8;
  // [栈深重同步 4 -> 3]
  n = Math.max(0, 0);
  if (!((t < 0))) goto L_c8;
  goto L_c9;
  // [栈深重同步 1 -> 0]
  o = "";
  r = Math.abs(t);
  if (!(("USD" === i))) goto L_107;
  goto L_134;
  // [栈深重同步 1 -> 0]
  s = "".concat(i, " ");
  if (!(("compact" === e.notation))) goto L_194;
  return "".concat(o, s, ci(r, n));
  return "".concat(o, s, fi(r, n));
}

// fn ci  args=2 vars=2 closure=1 cpool=0 bc=187B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// closure: fi
function {
  if (!((t >= 1000000000))) goto L_3e;
  return "".concat(fi((t / 1000000000), e), "B");
  if (!((t >= 1000000))) goto L_7c;
  return "".concat(fi((t / 1000000), e), "M");
  if (!((t >= 1000))) goto L_b6;
  return "".concat(fi((t / 1000), e), "K");
  return fi(t, e);
}

// fn fi  args=2 vars=3 closure=0 cpool=4 bc=184B file=dil_charts/src/widgets/ValdiChart
// args: t, e
// locals: i
function {
  let i;
  i = t.toFixed(e);
  if (!(i.includes("."))) goto L_b4;
  return i.replace(new RegExp("(\\.\\d*?[1-9])0+$"), "$1").replace(new RegExp("\\.0+$"), "");
  return i;
}

// fn bi  args=1 vars=1 closure=0 cpool=0 bc=194B file=dil_charts/src/widgets/ValdiChart
// args: t
function {
  if (!((Math.abs(t) >= 1000))) goto L_57;
  return t.toFixed(0);
  if (!(Number.isInteger(t))) goto L_8b;
  return String(t);
  return String((Math.round((10 * t)) / 10));
}

// fn <atom:0>  args=3 vars=184 closure=0 cpool=139 bc=5107B file=dil_charts/src/widgets/ValdiChart
// args: require, module, exports
// locals: t, e, i, n, o, r, s, a, l, h, u, d, c, f, b, m, g, p, y, v, x, w, A, M, S, R, L, N, k, T, I, $, C, P, F, H, W, V, D, O, B, K, z, G, X, Y, q, _, E, U, j, J, Q, Z, tt, et, it, nt, ot, rt, st, at, lt, ht, ut, dt, ct, ft, bt, mt, gt, pt, yt, vt, xt, ValdiChart, <class_fields_init>, ValdiChart#1, wt, At, Mt, St, Rt, Lt, Nt, kt, Tt, It, $t, Ct, Pt, Ft, Ht, Wt, Vt, Dt, Ot, Bt, Kt, zt, Gt, Xt, Yt, qt, _t, Et, Ut, jt, Jt, Qt, Zt, te, ee, ie, ne, oe, re, se, ae, le, he, ue, de, ce, fe, be, me, ge, pe, ye, ve, xe, we, Ae, Me, Se, Re, Le, Ne, ke, Te, Ie, $e, Ce, Pe, Fe, He, We, Ve, De, Oe, Be, Ke, ze, Ge, Xe, Ye, qe, _e, Ee, Ue, je, Je, Qe, Ze, ti, ei, ii, ni, oi, ri, si, ai, li, hi, ui, di, ci, fi, bi, mi
function {
  wt = function wt;
  At = function At;
  Mt = function Mt;
  St = function St;
  Rt = function Rt;
  Lt = function Lt;
  Nt = function Nt;
  kt = function kt;
  Tt = function Tt;
  It = function It;
  $t = function $t;
  Ct = function Ct;
  Pt = function Pt;
  Ft = function Ft;
  Ht = function Ht;
  Wt = function Wt;
  Vt = function Vt;
  Dt = function Dt;
  Ot = function Ot;
  Bt = function Bt;
  Kt = function Kt;
  zt = function zt;
  Gt = function Gt;
  Xt = function Xt;
  Yt = function Yt;
  qt = function qt;
  _t = function _t;
  Et = function Et;
  Ut = function Ut;
  jt = function jt;
  Jt = function Jt;
  Qt = function Qt;
  Zt = function Zt;
  te = function te;
  ee = function ee;
  ie = function ie;
  ne = function ne;
  oe = function oe;
  re = function re;
  se = function se;
  ae = function ae;
  le = function le;
  he = function he;
  ue = function ue;
  de = function de;
  ce = function ce;
  fe = function fe;
  be = function be;
  me = function me;
  ge = function ge;
  pe = function pe;
  ye = function ye;
  ve = function ve;
  xe = function xe;
  we = function we;
  Ae = function Ae;
  Me = function Me;
  Se = function Se;
  Re = function Re;
  Le = function Le;
  Ne = function Ne;
  ke = function ke;
  Te = function Te;
  Ie = function Ie;
  $e = function $e;
  Ce = function Ce;
  Pe = function Pe;
  Fe = function Fe;
  He = function He;
  We = function We;
  Ve = function Ve;
  De = function De;
  Oe = function Oe;
  Be = function Be;
  Ke = function Ke;
  ze = function ze;
  Ge = function Ge;
  Xe = function Xe;
  Ye = function Ye;
  qe = function qe;
  _e = function _e;
  Ee = function Ee;
  Ue = function Ue;
  je = function je;
  Je = function Je;
  Qe = function Qe;
  Ze = function Ze;
  ti = function ti;
  ei = function ei;
  ii = function ii;
  ni = function ni;
  oi = function oi;
  ri = function ri;
  si = function si;
  ai = function ai;
  li = function li;
  hi = function hi;
  ui = function ui;
  di = function di;
  ci = function ci;
  fi = function fi;
  bi = function bi;
  let mi;
  let ValdiChart#1;
  let xt;
  let vt;
  let yt;
  let pt;
  let gt;
  let mt;
  let bt;
  let ft;
  let ct;
  let dt;
  let ut;
  let ht;
  let lt;
  let at;
  let st;
  let rt;
  let ot;
  let nt;
  let it;
  let et;
  let tt;
  let Z;
  let Q;
  let J;
  let j;
  let U;
  let E;
  let _;
  let q;
  let Y;
  let X;
  let G;
  let z;
  let K;
  let B;
  let O;
  let D;
  let V;
  let W;
  let H;
  let P;
  let C;
  let $;
  let I;
  let T;
  let k;
  let N;
  let L;
  let R;
  let S;
  let M;
  let A;
  let w;
  let x;
  let v;
  let y;
  let p;
  let g;
  let m;
  let b;
  let f;
  let c;
  let d;
  let u;
  let h;
  let l;
  let a;
  let s;
  let r;
  let o;
  let n;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ValdiChart = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeNodePrototype("scroll", undefined, "yo6j-UppKi5NJ28a");
  n = e.makeNodePrototype("view", undefined, "x9LU8zAbrOi73Z4X");
  o = e.makeNodePrototype("view", undefined, "a6CxaeKg89x8VIV6");
  r = e.makeNodePrototype("label", ["value", "No chart data", "color", "color-text-tertiary", "left", 0], "mC3hG3eU-Mu9E9vG");
  s = e.makeNodePrototype("shape", ["strokeWidth", 1, "strokeColor", "alpha-05", "width", "100%", "height", "100%"], "-bWxnLnGLT0GNQhs");
  a = e.makeNodePrototype("shape", ["strokeWidth", 1, "strokeColor", "alpha-10", "width", "100%", "height", "100%"], "dygRSiFeRgQxdWNF");
  l = e.makeNodePrototype("shape", ["width", "100%", "height", "100%"], "sWxj3sPWc2kJ9HmA");
  h = e.makeNodePrototype("shape", ["width", "100%", "height", "100%"], "1mav7so7-vwr2vrX");
  u = e.makeNodePrototype("shape", ["strokeCap", "round", "strokeJoin", "round", "width", "100%", "height", "100%"], "1aaFOQy-K5-gBVEZ");
  d = e.makeNodePrototype("shape", ["fillColor", "color-surface", "width", "100%", "height", "100%"], "jW3uWVrivgODmFYb");
  c = e.makeNodePrototype("shape", ["width", "100%", "height", "100%"], "emVlKS6cf-ajC0UR");
  f = e.makeNodePrototype("label", ["color", "color-text"], "3IU9x0yXn6FAzda2");
  b = e.makeNodePrototype("shape", ["strokeColor", "alpha-10", "strokeWidth", 1, "width", "100%", "height", "100%"], "nYwRtq0pqTFYpcW5");
  m = e.makeNodePrototype("shape", ["fillColor", "color-surface", "width", "100%", "height", "100%"], "gb5XptT3oW9xJ-wP");
  g = e.makeNodePrototype("shape", ["width", "100%", "height", "100%"], "IV0YwnWklA9uHgWg");
  p = e.makeNodePrototype("view", undefined, "skNnOtBuW5FCOnz6");
  y = e.makeNodePrototype("label", ["width", "100%"], "NYC8hEPy3aWVh3fR");
  v = e.makeNodePrototype("label", ["color", "color-text-tertiary"], "RmD3kTVXAeZwckqq");
  x = e.makeNodePrototype("label", ["color", "color-text-tertiary"], "msV4b99nbRjsyhd6");
  w = e.makeNodePrototype("view", undefined, "Z1HC7wDrTX_uoyaa");
  A = e.makeNodePrototype("view", undefined, "RQhyDf2NXh7-LE8y");
  M = e.makeNodePrototype("shape", ["width", 8, "height", 8], "CGtVEWwn3JdjN1lg");
  S = e.makeNodePrototype("label", ["color", "color-text-secondary"], "IgxozQXDfOF5g80r");
  R = require("dil_core/src/DILComponent");
  L = require("dil_core/src/colors/DILColor");
  N = require("dil_core/src/colors/DILColorsInit");
  k = require("dil_core/src/layout/DILLayout");
  T = require("dil_core/src/typography/DILDynamicFont");
  I = require("valdi_core/src/ElementRef");
  $ = require("dil_sandbox/src/DILSandboxCallback");
  C = require("valdi_core/src/Style");
  P = require("valdi_core/src/GeometricPath");
  if ((F)) goto L_9b6;
  F = {};
  !function <atom:0>({});
  H = 10000;
  W = 180;
  V = 360;
  D = 36;
  O = 12;
  B = 12;
  K = 22;
  z = 8;
  G = 34;
  X = 24;
  Y = 5;
  q = 4;
  _ = 6;
  E = 2.25;
  U = 3.5;
  j = 4;
  J = 10;
  Q = 42;
  Z = 10;
  tt = 48;
  et = 76;
  it = 8;
  nt = 4;
  ot = 10;
  rt = 4;
  st = 6;
  at = 0.18;
  lt = 0.18;
  ht = 136;
  ut = 8;
  dt = 6;
  ct = 16;
  ft = 3;
  bt = 6;
  mt = 5;
  gt = ["blue", "purple", "orange", "green", "red", "yellow", "pink"];
  pt = new RegExp("^rgb\\(\\s*([^,]+),\\s*([^,]+),\\s*([^)]+)\\)$");
  yt = new RegExp("^rgba\\(\\s*([^,]+),\\s*([^,]+),\\s*([^,]+),\\s*([^)]+)\\)$");
  vt = new RegExp("^#([0-9a-f]{3}|[0-9a-f]{6})$");
  xt = {blue: "blue-500", green: "green-500", orange: "orange-500", pink: "pink-500", purple: "purple-500", red: "red-500", yellow: "yellow-500"};
  let ValdiChart;
  let <class_fields_init>;
  class ValdiChart extends R.DILStatefulComponent { ... }
  <proto:ValdiChart>.onViewModelUpdate = function <atom:0>;
  <proto:ValdiChart>.updateTooltip = function <atom:0>;
  <proto:ValdiChart>.formatTooltip = function <atom:0>;
  <proto:ValdiChart>.formatTooltipLine = function <atom:0>;
  <proto:ValdiChart>.viewportUsesContentCoordinates = function <atom:0>;
  <proto:ValdiChart>.onRender = function <atom:0>;
  <proto:ValdiChart>.chartRootAttributes = function <atom:0>;
  <proto:ValdiChart>.chartTapAttributes = function <atom:0>;
  <proto:ValdiChart>.renderChartContents = function <atom:0>;
  <proto:ValdiChart>.renderNoData = function <atom:0>;
  <proto:ValdiChart>.renderGrid = function <atom:0>;
  <proto:ValdiChart>.renderAxes = function <atom:0>;
  <proto:ValdiChart>.renderBarSeries = function <atom:0>;
  <proto:ValdiChart>.renderBarShape = function <atom:0>;
  <proto:ValdiChart>.renderLineAndAreaSeries = function <atom:0>;
  <proto:ValdiChart>.renderAreaShape = function <atom:0>;
  <proto:ValdiChart>.renderLineShape = function <atom:0>;
  <proto:ValdiChart>.renderValueLabels = function <atom:0>;
  <proto:ValdiChart>.renderHoverIndicator = function <atom:0>;
  <proto:ValdiChart>.renderHoverTooltip = function <atom:0>;
  <proto:ValdiChart>.renderXAxisLabels = function <atom:0>;
  <proto:ValdiChart>.renderXAxisLabel = function <atom:0>;
  <proto:ValdiChart>.renderYAxisLabels = function <atom:0>;
  <proto:ValdiChart>.renderLegend = function <atom:0>;
  <proto:ValdiChart>.updateScrollPosition = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ValdiChart>;
  ValdiChart = function <atom:0>;
  // close_loc <class_fields_init>
  ValdiChart#1 = function <atom:0>;
  exports.ValdiChart = ValdiChart#1;
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483465>>] = "showIdleHoverIndicator";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483466>>] = "showLegend";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483467>>] = "showTooltip";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483468>>] = "showTooltipCursor";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483469>>] = "showTooltipLabel";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483470>>] = "showTooltipMarkers";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483471>>] = "showValueLabels";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483472>>] = "showYAxis";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483473>>] = "tooltipAllowEscapeViewBox";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483474>>] = "tooltipAnimationDuration";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483475>>] = "tooltipOffset";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483476>>] = "tooltipPlacement";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483477>>] = "tooltipValueFormatter";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483478>>] = "valueLabelInterval";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483479>>] = "valueLabelOffset";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483480>>] = "visiblePointCount";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483481>>] = "xAxis";
  ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"][<<bad:2147483482>>] = "yAxis";
  ValdiChart#1.dilV2Properties = ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "width", "barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "enableLegendSeriesToggle", "hoverIndicatorDataKey", "layout", "legendMaxRows", "maxBarSize", "maxTooltipEntries", "minPointWidth", "onHover", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots"];
  // append([], 0, R.DIL_COMPONENT_PROPERTIES)
  [][R.DIL_COMPONENT_PROPERTIES] = "aspectRatio";
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
  ValdiChart#1.properties = [];
  mi = {scroll: new C.Style({horizontal: true, showsHorizontalScrollIndicator: false}), canvas: new C.Style({position: "relative", flexShrink: 0}), shapeOverlay: new C.Style({position: "absolute", top: 0, left: 0}), noDataLabel: new C.Style({position: "absolute", minHeight: 16, font: T.dynamicSystemFontForSize(12), textAlign: "center", numberOfLines: 1}), valueLabel: new C.Style({position: "absolute", width: Q, minHeight: 14, font: T.dynamicBoldSystemFontForSize(J), textAlign: "center", numberOfLines: 1}), centeredAxisLabel: new C.Style({position: "absolute", width: tt, minHeight: 14, font: T.dynamicSystemFontForSize(Z), textAlign: "center", numberOfLines: 1}), yAxisLabel: new C.Style({position: "absolute", minHeight: 14, font: T.dynamicSystemFontForSize(Z), numberOfLines: 1}), legend: new C.Style({position: "absolute", left: B, right: B, bottom: 0, height: X, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 16}), legendItem: new C.Style({flexDirection: "row", alignItems: "center", gap: 4, minWidth: 0, flexShrink: 1}), legendMarker: new C.Style({flexShrink: 0}), legendLabel: new C.Style({flexShrink: 1, minHeight: 14, font: T.dynamicSystemFontForSize(ot), numberOfLines: 1}), tooltip: new C.Style({position: "absolute", paddingTop: 6, paddingBottom: 6, paddingLeft: 8, paddingRight: 8, gap: 3, borderRadius: 6, borderWidth: 1, borderColor: "alpha-10", backgroundColor: "color-surface-elevated", boxShadow: "0 2 8 alpha-10"}), tooltipTitle: new C.Style({minHeight: ct, font: T.dynamicBoldSystemFontForSize(11), numberOfLines: 1}), tooltipLine: new C.Style({minHeight: ct, font: T.dynamicSystemFontForSize(11), numberOfLines: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_charts/src/widgets/ValdiChart
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
