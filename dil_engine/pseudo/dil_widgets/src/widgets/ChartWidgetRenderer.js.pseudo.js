// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=254B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t, r
// closure: this, v
function {
  let r;
  let t;
  t = this.viewModel.hoverAction;
  if (!((undefined === t))) goto L_54;
  return;
  r = t(v(this.viewModel.hoverContext, e));
  if (!((undefined !== r))) goto L_fd;
  if (!((this.context == null))) goto L_d6;
  this.context;
  goto L_fd;
  undefined.dispatchActionPayload(r);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=63B file=dil_widgets/src/widgets/ChartWidgetRenderer
// locals: this, this.active_func, new.target, arguments
// closure: v, <class_fields_init>
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
  this.handleHoverIndexChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=925B file=dil_widgets/src/widgets/ChartWidgetRenderer
// locals: r, o, this
// closure: s, e, t
function {
  this = this;
  let o;
  let r;
  if (!((this.context == null))) goto L_32;
  this.context;
  goto L_53;
  r = undefined.nativeChartViewFactory;
  if (!((undefined === r))) goto L_b9;
  if (!((this.context == null))) goto L_85;
  this.context;
  goto L_b7;
  if (!((undefined.reportWarning == null))) goto L_af;
  undefined.reportWarning;
  undefined;
  goto L_b7;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, "Skipped host-native chart because no native chart view factory was provided.");
  return;
  o = this.baseViewAttributes;
  s.DIL_BOX_ATTRIBUTES.apply(this.viewModel, o);
  this.applyDefaultSizing(o);
  e.beginRenderWithViewFactory(t, r, undefined);
  e.setAttributes(o);
  e.setAttribute("allowReuse", false);
  e.setAttributeString("chartJson", this.viewModel.chartJson);
  e.setAttributeString("name", this.viewModel.chartType);
  if (!((undefined === this.viewModel.hoverAction))) goto L_34f;
  goto L_371;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onHoverIndexChange", this.handleHoverIndexChange);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=110B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  if (!((undefined === e.width))) goto L_38;
  e.width = "100%";
  "100%";
  if (!((undefined === e.flexShrink))) goto L_6d;
  e.flexShrink = 0;
  0;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=4 cpool=0 bc=215B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, o
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, r, HostNativeChart, l
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(t);
  this.type = e;
  this.options = o;
  this.hostNativeComponentRenderer = new r.DILValdiComponentRenderer(HostNativeChart, t, false);
  this.webComponentRenderer = new r.DILValdiComponentRenderer(l.WebWidget, t, false);
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=390B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// locals: r, o, this
// closure: d
function {
  this = this;
  let o;
  let r;
  r = d.createWebWidgetViewModel(this.type, this.props, e, t, this.options.webWidgetOptions);
  o = this.hostNativeModel(r);
  if (!((undefined === o))) goto L_15b;
  goto L_185;
  // [栈深重同步 1 -> 0]
  this.renderHostNative(o, e, t);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=360B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t, r, this
// closure: p, u
function {
  this = this;
  let r;
  let t;
  t = p(this.type, e.node, this.options.supportsMixedLineArea, e.theme);
  if (!((undefined === t))) goto L_be;
  return;
  r = u.getChartHoverAction(e.actionBridge);
  if (!(("line" === t.content.chartType))) goto L_159;
  goto L_15a;
  // [栈深重同步 2 -> 1]
  return {hoverAction: undefined, payload: t};
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=706B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r
// locals: this
// closure: c
function {
  this = this;
  this.hostNativeComponentRenderer.begin(t, r, undefined, this.type);
  this.hostNativeComponentRenderer.setViewModelProperty("chartJson", JSON.stringify(e.payload));
  this.hostNativeComponentRenderer.setViewModelProperty("chartType", this.type);
  this.hostNativeComponentRenderer.setViewModelProperty("hoverAction", e.hoverAction);
  if (!((undefined === e.hoverAction))) goto L_252;
  goto L_276;
  // [栈深重同步 4 -> 3]
  this.hostNativeComponentRenderer.setViewModelProperty("hoverContext", c(e.payload));
  this.hostNativeComponentRenderer.end(r);
  return;
}

// fn c  args=1 vars=1 closure=0 cpool=0 bc=269B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  if (!((e.content.series == null))) goto L_dc;
  e.content.series;
  goto L_107;
  if (!((undefined[0] == null))) goto L_e6;
  undefined[0];
  goto L_107;
  return {data: e.content.data, formattedData: e.content.formattedData, primaryDataKey: undefined.dataKey};
}

// fn v  args=2 vars=5 closure=3 cpool=0 bc=360B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// locals: r, o, i
// closure: f, ue, de
function {
  let i;
  let o;
  let r;
  if (((undefined === e))) goto L_42;
  if (((null === t))) goto L_42;
  if (!(!Number.isInteger(t))) goto L_48;
  return f();   // tail call
  r = e.data[t];
  if (!((undefined === r))) goto L_78;
  return f();   // tail call
  o = e.primaryDataKey;
  if (!((undefined === o))) goto L_a5;
  goto L_b4;
  // [栈深重同步 1 -> 0]
  if (!((ue(r[o]) == null))) goto L_b4;
  ue(r[o]);
  i = null;
  if (!((de(r.formatted) == null))) goto L_162;
  de(r.formatted);
  if (!((undefined === o))) goto L_fb;
  goto L_12b;
  // [栈深重同步 2 -> 1]
  if (!((e.formattedData[t] == null))) goto L_127;
  e.formattedData[t];
  goto L_12b;
  if (!((undefined[o] == null))) goto L_162;
  undefined[o];
  if (!((null === i))) goto L_13a;
  goto L_162;
  // [栈深重同步 2 -> 1]
  return {hoverValue: i, hoverPayload: r, hoverFormatted: "".concat(i)};
}

// fn f  args=0 vars=0 closure=0 cpool=0 bc=20B file=dil_widgets/src/widgets/ChartWidgetRenderer
function {
  return {hoverValue: null, hoverPayload: null, hoverFormatted: null};
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=119B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// locals: this
// closure: <class_fields_init>, d
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.type = e;
  this.options = t;
  this.properties = d.webWidgetRendererProperties(t.properties);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=79B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r
// locals: this
// closure: ChartWidgetRenderer
function {
  this = this;
  return new ChartWidgetRenderer(this.type, e, this.options);
}

// fn h  args=4 vars=4 closure=1 cpool=0 bc=28B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r, o
// closure: ChartWidgetRendererFactory
function {
  return new ChartWidgetRendererFactory(e, {properties: t, webWidgetOptions: r, supportsMixedLineArea: o});
}

// fn p  args=4 vars=6 closure=5 cpool=0 bc=149B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r, o
// locals: i, a
// closure: n, b, y, be, me
function {
  let a;
  let i;
  if (!(("dark" === o))) goto L_35;
  goto L_59;
  // [栈深重同步 1 -> 0]
  i = n.DIL_LIGHT_COLOR_PALETTE;
  if (!(("PieChart" === e))) goto L_6b;
  goto L_72;
  // [栈深重同步 1 -> 0]
  a = y(t, r, i);
  if (!((undefined !== a))) goto L_94;
  return {widgetType: be, language: me, content: a};
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=13B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: t, r
// closure: $, e, u, i
function {
  return $(e, t, r, u, i);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: T, i
function {
  return T(e, i);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  return e.payload;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=70B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  return (undefined !== e.payload.stackId);
}

// fn y  args=3 vars=13 closure=21 cpool=4 bc=1914B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r
// locals: o, i, n, a, s, v, u, l, d, c
// closure: $, T, k, F, S, ce, ae, P, W, pe, de, K, M, H, E, V, q, ue, fe, he, le
function {
  let c;
  let d;
  let l;
  let u;
  let s;
  let a;
  let n;
  let i;
  let o;
  o = k(e.data);
  i = F(e.series, e, r);
  if (((undefined === o))) goto L_7f;
  if (((undefined === i))) goto L_7f;
  if (!((0 === i.length))) goto L_82;
  return;
  n = i[0].type;
  a = S(n);
  s = ce(e.showValues);
  let v;
  for (const v of i) {
    if (!(t)) goto L_11c;
    if (!((undefined !== s))) goto L_11c;
    goto L_144;
    // [栈深重同步 4 -> 3]
    if (!(!(v.type === n))) continue;
    return undefined;
    // [栈深重同步 0 -> 3]
  }
  u = ae(e.xAxis);
  if (((undefined === a))) goto L_189;
  if (!((undefined === u))) goto L_18c;
  return;
  if (!(("bar" === a))) goto L_1c3;
  if (!((true === ce(e.scrollable)))) goto L_1c3;
  return;
  if (!(("line" === a))) goto L_1da;
  goto L_1dd;
  // [栈深重同步 1 -> 0]
  l = o;
  if (!((0 === l.length))) goto L_1e8;
  return;
  d = l.map(function <atom:0>);
  c = W(e, a, l, u);
  if (!(("bar" === a))) goto L_470;
  if (((true === e.stacked))) goto L_471;
  goto L_471;
  // [栈深重同步 3 -> 2]
  if (!((false !== s))) goto L_52f;
  if (!((false !== s))) goto L_610;
  if (!((false !== s))) goto L_670;
  return pe({chartType: a, data: l.map(function <atom:0>), formattedData: d, valueFormat: de(e.valueFormat), valuePrefix: de(e.valuePrefix), valueSuffix: de(e.valueSuffix), xKey: u, xAxis: K(e.xAxis), xAxisLabel: M(e), xAxisLabels: H(e.xAxis), xAxisTicks: E(e.xAxis), yAxis: K(e.yAxis), yAxisLabel: V(e), yAxisDomain: q(e.yAxis), series: i.map(function <atom:0>), axes: c, stacked: undefined, height: ue(e.height), showLegend: ce(e.showLegend), showGrid: ce(e.showGrid), showValues: s, showYAxis: ce(e.showYAxis), showDots: ce(e.showDots), showHoverCursor: ce(e.showHoverCursor), showHoverDots: ce(e.showHoverDots), showIdleHoverIndicator: ce(e.showIdleHoverIndicator), showTooltip: ce(e.showTooltip), showTooltipCursor: ce(e.showTooltipCursor), showValueLabels: ce(e.showValueLabels), valueLabelInterval: fe(e.valueLabelInterval), valueLabelOffset: he(e.valueLabelOffset), scrollable: ce(e.scrollable), visiblePointCount: fe(e.visiblePointCount), scrollToValue: le(e.scrollToValue), disableUserScroll: ce(e.disableUserScroll)});   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=26B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t
// closure: ue, n
function {
  let t;
  t = ue(e[n]);
  if (!((undefined !== t))) goto L_19;
  return (t > 0);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: T, o
function {
  return T(e, o);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=7 cpool=0 bc=112B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// locals: r, o
// closure: i, B, se, a, Y, n, s
function {
  let o;
  let r;
  r = {};
  r[i] = B(se(e[i]), a, "".concat(t), true);
  o = Y(e, n, s, true);
  if (!((undefined !== o))) goto L_6b;
  r[n] = o;
  o;
  return r;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=45B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, r
// closure: A, o, t
function {
  return A(e, o[0].raw, r, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: C, t
function {
  return C(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  return e.payload;
}

// fn b  args=2 vars=9 closure=16 cpool=6 bc=861B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// locals: r, o, i, n, a, s, u
// closure: ue, T, B, se, Y, A, C, k, F, ae, xe, X, z, pe, g, de
function {
  let u;
  let s;
  let a;
  let n;
  let i;
  let o;
  let r;
  r = k(e.data);
  o = F(e.series, e, t);
  if (!((ae(e.xAxis) == null))) goto L_93;
  ae(e.xAxis);
  i = xe;
  if (!((o == null))) goto L_9f;
  o;
  goto L_ca;
  if (!((undefined[0] == null))) goto L_a9;
  undefined[0];
  goto L_ca;
  n = undefined.dataKey;
  if (((undefined === r))) goto L_ec;
  if (((undefined === o))) goto L_ec;
  if (((1 !== o.length))) goto L_ec;
  if (!((undefined === n))) goto L_ef;
  return;
  a = X(e.xAxis);
  s = z(o[0].raw, e);
  u = r.filter(function <atom:0>);
  if (!((0 !== u.length))) goto L_35b;
  if (!((ue(e.sliceStrokeWidth) == null))) goto L_26c;
  ue(e.sliceStrokeWidth);
  return pe({chartType: "pie", data: u.map(function <atom:0>), formattedData: u.map(function <atom:0>), colors: u.map(function <atom:0>), sliceStrokeColors: u.map(function <atom:0>), sliceStrokeWidth: g, minAngle: ue(e.minAngle), valueFormat: de(e.valueFormat), valuePrefix: de(e.valuePrefix), valueSuffix: de(e.valueSuffix), nameKey: i, valueKey: n, series: o.map(function <atom:0>)});
  return undefined;
}

// fn A  args=4 vars=8 closure=5 cpool=0 bc=213B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r, o
// locals: i, n, a, s
// closure: m, w, I, L, x
function {
  let s;
  let a;
  let n;
  let i;
  i = m[(r % m.length)];
  n = w[i];
  a = I(e.fill);
  s = I(t.color);
  if (!((a == null))) goto L_c5;
  a;
  if (!(("string" == typeof s))) goto L_c2;
  if (!((undefined !== w[s]))) goto L_c2;
  goto L_c5;
  // [栈深重同步 2 -> 1]
  if (!((L(s, o, n) == null))) goto L_d4;
  L(s, o, n);
  return "#0169CC";
}

// fn C  args=2 vars=2 closure=1 cpool=0 bc=53B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// closure: L
function {
  if (!((L(e.stroke, t, "color-surface") == null))) goto L_34;
  L(e.stroke, t, "color-surface");
  return "#FFFFFF";
}

// fn L  args=3 vars=6 closure=5 cpool=0 bc=151B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r
// locals: o, n, a
// closure: I, w, i, R, D
function {
  let a;
  let n;
  let o;
  o = I(e);
  if (!(("string" == typeof o))) goto L_2a;
  if (!((w[o] == null))) goto L_2d;
  w[o];
  goto L_2d;
  // [栈深重同步 1 -> 0]
  n = o;
  if (!((i.resolveDILColor(n) == null))) goto L_82;
  i.resolveDILColor(n);
  a = i.resolveDILColor(undefined, r);
  if (!((undefined === a))) goto L_8c;
  return undefined;
  return R(D(a, t));
}

// fn I  args=1 vars=1 closure=1 cpool=0 bc=107B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: ye
function {
  if ((("string" == typeof e))) goto L_65;
  if (!(ye(e))) goto L_69;
  if (!(("string" == typeof e.light))) goto L_69;
  if (!(("string" == typeof e.dark))) goto L_69;
  return e;
  return undefined;
}

// fn D  args=2 vars=5 closure=0 cpool=0 bc=71B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// locals: r, o, e#1
function {
  let r;
  r = e;
  let o;
  o = 0;
  if (!((o < 8))) goto L_43;
  let e#1;
  e#1 = t[r];
  if (((undefined === e#1))) goto L_2b;
  if (!((e#1 === r))) goto L_31;
  return r;
  r = e#1;
  e#1;
  o = <o_new>;
  (o++);
  goto L_a;
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  return (e + e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=60B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  if ((!Number.isFinite(e))) goto L_3b;
  if (((e < 0))) goto L_3b;
  return (e > 255);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=42B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  return Math.round(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=78B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  return e.toString(16).padStart(2, "0");   // tail call
}

// fn R  args=1 vars=7 closure=0 cpool=8 bc=800B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t, e#1, r, o, i, n
function {
  let n;
  let i;
  let o;
  let r;
  let t;
  t = e.match(new RegExp("^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$"));
  if (!((null !== t))) goto L_11a;
  let e#1;
  e#1 = t[1];
  if (!((3 === e#1.length))) goto L_f0;
  goto L_f3;
  // [栈深重同步 3 -> 2]
  return "#".concat(e#1).toUpperCase();   // tail call
  r = e.match(new RegExp("^rgba?\\(\\s*([^,]+),\\s*([^,]+),\\s*([^,)]+)(?:,\\s*([^)]+))?\\s*\\)$"));
  if (!((null === r))) goto L_14d;
  return;
  o = [Number(r[1]), Number(r[2]), Number(r[3])];
  if (!(o.some(function <atom:0>))) goto L_19e;
  return;
  if (!((undefined === r[4]))) goto L_1aa;
  goto L_1b5;
  // [栈深重同步 1 -> 0]
  i = Number(r[4]);
  if ((!Number.isFinite(i))) goto L_1f6;
  if (((i < 0))) goto L_1f6;
  if (!((i > 1))) goto L_1f9;
  return;
  n = o.map(function <atom:0>);
  if (!((i < 1))) goto L_284;
  n.push(Math.round((255 * i)));
  return "#".concat(n.map(function <atom:0>).join("")).toUpperCase();   // tail call
}

// fn F  args=3 vars=9 closure=10 cpool=0 bc=1263B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r
// locals: o, i, n, e#1, a, s
// closure: ce, ye, ie, ne, pe, de, N, fe, he, L
function {
  let i;
  let o;
  if (!(!Array.isArray(e))) goto L_34;
  return;
  o = [];
  i = (false !== ce(t.showLegend));
  let n;
  for (const n of e) {
    let s;
    let a;
    let e#1;
    if (!(!ye(n))) goto L_80;
    return undefined;
    // [栈深重同步 0 -> 3]
    if (!((ie(n) == null))) goto L_8f;
    ie(n);
    e#1 = "line";
    a = ne(n);
    if (!(("area" !== e#1))) goto L_ba;
    if (!(("bar" !== e#1))) goto L_ba;
    if ((("line" !== e#1))) goto L_c3;
    if (!((undefined === a))) goto L_cb;
    return undefined;
    // [栈深重同步 0 -> 3]
    if (!(i)) goto L_116;
    if (!((de(n.label) == null))) goto L_117;
    de(n.label);
    goto L_117;
    // [栈深重同步 6 -> 5]
    if (!((de(n.stackId) == null))) goto L_1f8;
    de(n.stackId);
    if (!((false !== t.showValues))) goto L_34c;
    if (!((fe(n.valueLabelInterval) == null))) goto L_3a4;
    fe(n.valueLabelInterval);
    if (!((he(n.valueLabelOffset) == null))) goto L_3fc;
    he(n.valueLabelOffset);
    if (!((n.fillColor == null))) goto L_48e;
    n.fillColor;
    if (!(("area" === e#1))) goto L_48d;
    goto L_48e;
    // [栈深重同步 7 -> 6]
    s = pe({type: e#1, dataKey: a, label: "", curveType: de(n.curveType), axisId: de(n.axisId), axisLabel: de(n.axisLabel), stackId: de(n.stack), valueFormat: de(n.valueFormat), valuePrefix: de(n.valuePrefix), valueSuffix: de(n.valueSuffix), showPoints: N(e#1, n.showPoints, t.showDots), showValueLabels: N(e#1, n.showValueLabels, t.showValueLabels), valueLabelInterval: fe(t.valueLabelInterval), valueLabelOffset: he(t.valueLabelOffset), color: L(n.color, r, undefined), fillColor: L(undefined, r, undefined)});
    o.push({raw: n, type: e#1, dataKey: a, payload: s});
  }
  return o;
}

// fn N  args=3 vars=3 closure=1 cpool=0 bc=34B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r
// closure: ce
function {
  if (!(("area" !== e))) goto L_16;
  if (!(("line" !== e))) goto L_16;
  return ce(t);
  if (!((ce(t) == null))) goto L_21;
  ce(t);
  return ce(r);
}

// fn k  args=1 vars=3 closure=1 cpool=0 bc=128B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t, r
// closure: ye
function {
  let t;
  if (!(!Array.isArray(e))) goto L_31;
  return;
  t = [];
  let r;
  for (const r of e) {
    if (!(!ye(r))) goto L_4b;
    return undefined;
    // [栈深重同步 0 -> 3]
    t.push(r);
  }
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: t
// closure: ue, e
function {
  return (undefined !== ue(e[t.dataKey]));
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=39B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: ue, t
function {
  return t.some(function <atom:0>);   // tail call
}

// fn P  args=2 vars=2 closure=1 cpool=1 bc=39B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// closure: ue
function {
  return e.filter(function <atom:0>);   // tail call
}

// fn S  args=1 vars=1 closure=0 cpool=0 bc=43B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  if ((("area" === e))) goto L_12;
  if (!(("line" === e))) goto L_1a;
  return "line";
  if (!(("bar" === e))) goto L_29;
  return "bar";
  return undefined;
}

// fn T  args=2 vars=5 closure=1 cpool=0 bc=128B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// locals: r, o, t#1
// closure: ue
function {
  let r;
  null;
  e;
  r = {};
  let o;
  for (const o of t) {
    let t#1;
    t#1 = ue(e[o.dataKey]);
    if (!((undefined !== t#1))) goto L_75;
    r[o.dataKey] = t#1;
    t#1;
  }
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: o
function {
  return (e.dataKey === o);
}

// fn $  args=5 vars=11 closure=3 cpool=1 bc=342B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r, o, i
// locals: n, a, s, u, l, r#1
// closure: U, Y, z
function {
  let u;
  let s;
  let a;
  let n;
  n = {};
  a = e.xAxis;
  s = (false !== e.showValues);
  if (!(!s)) goto L_88;
  if ((i.some(function <atom:0>))) goto L_9c;
  n[o] = U(a, t[o], r);
  U(a, t[o], r);
  if (!(!s)) goto L_a7;
  return n;
  u = (1 === i.length);
  let l;
  for (const l of i) {
    let r#1;
    r#1 = Y(t, l.dataKey, z(l.raw, e), u);
    if (!((undefined !== r#1))) goto L_148;
    n[l.dataKey] = r#1;
    r#1;
  }
  return n;
}

// fn W  args=4 vars=8 closure=4 cpool=0 bc=249B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r, o
// locals: i, n, a, s
// closure: j, _, M, V
function {
  let s;
  let a;
  let n;
  let i;
  i = [];
  if (!(("line" === t))) goto L_1f;
  goto L_20;
  // [栈深重同步 1 -> 0]
  n = undefined;
  a = _("x", e.xAxis, M(e), n);
  s = _("y", e.yAxis, V(e), undefined);
  if (!((undefined !== a))) goto L_b6;
  i.push(a);
  if (!((undefined !== s))) goto L_ea;
  i.push(s);
  if (!((0 === i.length))) goto L_f5;
  return undefined;
  return i;
}

// fn M  args=1 vars=1 closure=3 cpool=0 bc=201B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: ce, de, ye
function {
  if (!((false === ce(e.showXAxis)))) goto L_2b;
  return "";
  if (!((de(e.xAxisLabel) == null))) goto L_c8;
  de(e.xAxisLabel);
  if (!(ye(e.xAxis))) goto L_c1;
  goto L_c2;
  // [栈深重同步 1 -> 0]
  if (!((undefined == null))) goto L_c8;
  undefined;
  return "";
}

// fn V  args=1 vars=1 closure=3 cpool=0 bc=194B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: ce, de, ye
function {
  if (!((false === ce(e.showYAxis)))) goto L_2b;
  return "";
  if (!((de(e.yAxisLabel) == null))) goto L_c1;
  de(e.yAxisLabel);
  if (!(ye(e.yAxis))) goto L_c0;
  return de(e.yAxis.label);
  return undefined;
}

// fn _  args=4 vars=7 closure=6 cpool=0 bc=152B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r, o
// locals: i, n, a
// closure: O, X, q, ye, de, pe
function {
  let a;
  let n;
  let i;
  i = O(t, X(t), o);
  if (!((undefined === o))) goto L_1b;
  goto L_1c;
  // [栈深重同步 1 -> 0]
  n = undefined;
  if (!(ye(t))) goto L_4a;
  goto L_4b;
  // [栈深重同步 1 -> 0]
  a = undefined;
  if (((undefined !== r))) goto L_6a;
  if (((undefined !== i))) goto L_6a;
  if (((undefined !== n))) goto L_6a;
  if (!((undefined !== a))) goto L_97;
  return pe({id: a, dimension: e, label: r, domain: n, ticks: i});   // tail call
  return;
}

// fn O  args=3 vars=9 closure=5 cpool=0 bc=401B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r
// locals: o, i, n, a, s, u
// closure: ye, se, ue, de, Z
function {
  let o;
  if ((!ye(e))) goto L_57;
  if (!(!Array.isArray(e.ticks))) goto L_5a;
  return;
  o = [];
  let i;
  for (const i of e.ticks) {
    let u;
    let s;
    let a;
    let n;
    if (!(ye(i))) goto L_c1;
    goto L_c4;
    // [栈深重同步 4 -> 3]
    n = i;
    a = se(n);
    if (!((undefined !== a))) goto L_de;
    if (!((undefined !== r))) goto L_de;
    goto L_e3;
    // [栈深重同步 4 -> 3]
    s = ue(n);
    if (((undefined === s))) goto L_f3;
    if (((undefined === a))) continue;
    if (!(ye(i))) goto L_127;
    goto L_128;
    // [栈深重同步 4 -> 3]
    u = undefined;
    if (!((u == null))) goto L_171;
    u;
    if (!((t[a] == null))) goto L_171;
    t[a];
    o.push({value: s, label: Z(s, e)});
  }
  if (!((0 === o.length))) goto L_18d;
  return undefined;
  return o;
}

// fn K  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: ye
function {
  if (!(ye(e))) goto L_7;
  return e;
  return undefined;
}

// fn H  args=1 vars=1 closure=1 cpool=0 bc=163B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: ye
function {
  if (!(ye(e))) goto L_a2;
  if ((ye(e.labels))) goto L_7b;
  if (!(Array.isArray(e.labels))) goto L_a0;
  return e.labels;
  return undefined;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: ye
function {
  if (!(ye(e))) goto L_28;
  return e.value;
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: le
function {
  return (undefined !== le(e));
}

// fn E  args=1 vars=2 closure=2 cpool=2 bc=215B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t
// closure: ye, le
function {
  let t;
  if ((!ye(e))) goto L_57;
  if (!(!Array.isArray(e.ticks))) goto L_5a;
  return;
  t = e.ticks.map(function <atom:0>).filter(function <atom:0>);
  if (!((0 === t.length))) goto L_d3;
  return undefined;
  return t;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=42B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, o
// locals: i
// closure: se, t, r
function {
  let i;
  i = se(e[t]);
  if (!((undefined !== i))) goto L_29;
  if (!((undefined === r[i]))) goto L_29;
  r[i] = o;
  o;
  return;
}

// fn j  args=2 vars=3 closure=1 cpool=1 bc=49B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// locals: r
// closure: se
function {
  let r;
  r = {};
  e.forEach(function <atom:0>);
  return r;
}

// fn q  args=1 vars=3 closure=2 cpool=0 bc=251B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t, r
// closure: ye, ue
function {
  let r;
  let t;
  if ((!ye(e))) goto L_83;
  if ((!Array.isArray(e.domain))) goto L_83;
  if (!((e.domain.length < 2))) goto L_86;
  return;
  t = ue(e.domain[0]);
  r = ue(e.domain[1]);
  if (((undefined === t))) goto L_ed;
  if (((undefined === r))) goto L_ed;
  if (!((t >= r))) goto L_f1;
  return undefined;
  return [t, r];
}

// fn U  args=3 vars=5 closure=4 cpool=0 bc=77B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r
// locals: o, i
// closure: X, J, B, se
function {
  let i;
  let o;
  o = X(e);
  i = !J(e, o);
  if (!(i)) goto L_46;
  goto L_47;
  // [栈深重同步 4 -> 3]
  return B(se(t), o, "", i);   // tail call
}

// fn B  args=4 vars=4 closure=0 cpool=0 bc=28B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r, o
function {
  if (!((undefined !== e))) goto L_10;
  if (!((undefined !== t[e]))) goto L_10;
  return t[e];
  if (!((undefined !== e))) goto L_1a;
  if (!(o)) goto L_1a;
  return e;
  return r;
}

// fn J  args=2 vars=2 closure=1 cpool=0 bc=97B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// closure: ye
function {
  if (!(ye(e))) goto L_60;
  if (!(("number" === e.type))) goto L_60;
  return (Object.keys(t).length > 0);
}

// fn X  args=1 vars=5 closure=3 cpool=0 bc=418B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t, r, o, e#1
// closure: ye, G, se
function {
  let t;
  if (!(!ye(e))) goto L_b;
  return {};
  if (!(Array.isArray(e.labels))) goto L_f0;
  if (!(Array.isArray(e.ticks))) goto L_f0;
  return G(e.labels, e.ticks);   // tail call
  if (!(!ye(e.labels))) goto L_119;
  return {};
  t = {};
  let o;
  let r;
  const _it1 = Object.entries(e.labels);
  goto L_198;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  o = <value(_it2)>;
  let e#1;
  e#1 = se(o);
  if (!((undefined !== e#1))) goto L_197;
  t[r] = e#1;
  e#1;
  if (!(<done(_it1)>)) goto L_16f;
  <value(_it1)>;
  return t;
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=0 bc=88B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: t, o
// locals: i, n
// closure: se, ye, e, r
function {
  let n;
  let i;
  if (!(ye(t))) goto L_30;
  goto L_31;
  // [栈深重同步 2 -> 1]
  i = se(t);
  n = se(e[o]);
  if (!((undefined !== i))) goto L_57;
  if (!((undefined !== n))) goto L_57;
  r[i] = n;
  n;
  return;
}

// fn G  args=2 vars=3 closure=2 cpool=1 bc=49B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// locals: r
// closure: se, ye
function {
  let r;
  r = {};
  t.forEach(function <atom:0>);
  return r;
}

// fn Y  args=4 vars=7 closure=3 cpool=0 bc=108B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t, r, o
// locals: i, t#1, n
// closure: de, ue, Q
function {
  let n;
  let i;
  i = de(e[t]);
  if (!((undefined !== i))) goto L_20;
  if (!((undefined === ue(e[t])))) goto L_20;
  return i;
  if (!(o)) goto L_56;
  let t#1;
  t#1 = de(e.formatted);
  if (!((undefined !== t#1))) goto L_56;
  return t#1;
  n = ue(e[t]);
  if (!((undefined === n))) goto L_65;
  return undefined;
  return Q(n, r);
}

// fn z  args=2 vars=2 closure=1 cpool=0 bc=258B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// closure: de
function {
  if (!((de(e.valueFormat) == null))) goto L_58;
  de(e.valueFormat);
  if (!((de(t.valueFormat) == null))) goto L_58;
  de(t.valueFormat);
  if (!((de(e.valuePrefix) == null))) goto L_aa;
  de(e.valuePrefix);
  if (!((de(e.valueSuffix) == null))) goto L_fc;
  de(e.valueSuffix);
  return {valueFormat: "compact", valuePrefix: de(t.valuePrefix), valueSuffix: de(t.valueSuffix)};
}

// fn Q  args=2 vars=6 closure=2 cpool=0 bc=237B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// locals: r, o, i, n
// closure: oe, te
function {
  let n;
  let i;
  let o;
  let r;
  r = t.valueFormat;
  if (!((t.valuePrefix == null))) goto L_57;
  t.valuePrefix;
  o = "";
  if (!((t.valueSuffix == null))) goto L_80;
  t.valueSuffix;
  i = "";
  n = undefined;
  if (!(("integer" === r))) goto L_94;
  goto L_ba;
  // [栈深重同步 1 -> 0]
  if (!(("decimal" === r))) goto L_a5;
  goto L_ba;
  // [栈深重同步 1 -> 0]
  if (!(("raw" === r))) goto L_b7;
  goto L_ba;
  // [栈深重同步 1 -> 0]
  n = te(e);
  te(e);
  return "".concat(o, n, i);   // tail call
}

// fn Z  args=2 vars=2 closure=3 cpool=0 bc=155B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// closure: ye, ee, te
function {
  if (!(ye(t.tickFormatter))) goto L_97;
  if (!(("currency" === t.tickFormatter.type))) goto L_97;
  return ee(e, t.tickFormatter);
  return te(e);
}

// fn ee  args=2 vars=8 closure=4 cpool=0 bc=354B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// locals: r, o, i, n, a, s
// closure: de, ve, re, oe
function {
  let s;
  let a;
  let n;
  let i;
  let o;
  let r;
  if (!((de(t.currency) == null))) goto L_40;
  de(t.currency);
  r = "USD";
  o = de(t.notation);
  if (!((ve(t.decimals) == null))) goto L_9e;
  ve(t.decimals);
  if (!(("compact" === o))) goto L_9d;
  goto L_9e;
  // [栈深重同步 1 -> 0]
  i = 0;
  if (!((e < 0))) goto L_ab;
  goto L_ac;
  // [栈深重同步 1 -> 0]
  n = "";
  if (!(("USD" === r))) goto L_bf;
  goto L_ec;
  // [栈深重同步 1 -> 0]
  a = "".concat(r, " ");
  s = Math.abs(e);
  if (!(("compact" === o))) goto L_157;
  goto L_15f;
  // [栈深重同步 5 -> 4]
  return "".concat(n, a, oe(s, i));   // tail call
}

// fn te  args=1 vars=1 closure=2 cpool=0 bc=194B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: re, oe
function {
  if (!((Math.abs(e) >= 1000))) goto L_8f;
  if (!((e < 0))) goto L_5e;
  goto L_5f;
  // [栈深重同步 3 -> 2]
  return "".concat("", re(Math.abs(e), 1));   // tail call
  if (!(((e % 1) == 0))) goto L_bd;
  return "".concat(e);
  return oe(e, 1);
}

// fn re  args=2 vars=2 closure=1 cpool=0 bc=187B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
// closure: oe
function {
  if (!((e >= 1000000000))) goto L_3e;
  return "".concat(oe((e / 1000000000), t), "B");
  if (!((e >= 1000000))) goto L_7c;
  return "".concat(oe((e / 1000000), t), "M");
  if (!((e >= 1000))) goto L_b6;
  return "".concat(oe((e / 1000), t), "K");
  return oe(e, t);
}

// fn oe  args=2 vars=2 closure=0 cpool=4 bc=168B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e, t
function {
  return e.toFixed(Math.max(0, t)).replace(new RegExp("(\\.\\d*?[1-9])0+$"), "$1").replace(new RegExp("\\.0+$"), "");   // tail call
}

// fn ie  args=1 vars=1 closure=1 cpool=0 bc=85B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: ye
function {
  if (!(ye(e))) goto L_53;
  if (!(("string" == typeof e.type))) goto L_53;
  return e.type;
  return undefined;
}

// fn ne  args=1 vars=1 closure=1 cpool=0 bc=85B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: ye
function {
  if (!(ye(e))) goto L_53;
  if (!(("string" == typeof e.dataKey))) goto L_53;
  return e.dataKey;
  return undefined;
}

// fn ae  args=1 vars=1 closure=1 cpool=0 bc=97B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// closure: ye
function {
  if (!(("string" == typeof e))) goto L_c;
  return e;
  if (!(ye(e))) goto L_5f;
  if (!(("string" == typeof e.dataKey))) goto L_5f;
  return e.dataKey;
  return undefined;
}

// fn se  args=1 vars=2 closure=0 cpool=0 bc=158B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t
function {
  if (!(("number" == typeof e))) goto L_5c;
  if (!(Number.isFinite(e))) goto L_5c;
  return "".concat(e);   // tail call
  if (!(("string" == typeof e))) goto L_9d;
  let t;
  t = e.trim();
  if (!((0 === t.length))) goto L_99;
  return undefined;
  return t;
  return;
}

// fn ue  args=1 vars=2 closure=0 cpool=0 bc=130B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t
function {
  if (!(("number" == typeof e))) goto L_38;
  if (!(Number.isFinite(e))) goto L_38;
  return e;
  if (!(("string" == typeof e))) goto L_81;
  let t;
  t = Number(e);
  if (!(Number.isFinite(t))) goto L_7f;
  return t;
  return undefined;
  return;
}

// fn le  args=1 vars=1 closure=0 cpool=0 bc=114B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  if (!(("number" == typeof e))) goto L_36;
  if ((Number.isFinite(e))) goto L_6c;
  if (!(("string" == typeof e))) goto L_70;
  if (!((e.trim().length > 0))) goto L_70;
  return e;
  return undefined;
}

// fn de  args=1 vars=1 closure=0 cpool=0 bc=56B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  if (!(("string" == typeof e))) goto L_36;
  if (!((e.trim().length > 0))) goto L_36;
  return e;
  return undefined;
}

// fn ce  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  if (!(("boolean" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn ve  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  if (!(("number" == typeof e))) goto L_38;
  if (!(Number.isInteger(e))) goto L_38;
  return e;
  return undefined;
}

// fn fe  args=1 vars=2 closure=1 cpool=0 bc=27B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t
// closure: ve
function {
  let t;
  t = ve(e);
  if (!((undefined !== t))) goto L_19;
  if (!((t > 0))) goto L_19;
  return t;
  return undefined;
}

// fn he  args=1 vars=2 closure=1 cpool=0 bc=27B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t
// closure: ve
function {
  let t;
  t = ve(e);
  if (!((undefined !== t))) goto L_19;
  if (!((t >= 0))) goto L_19;
  return t;
  return undefined;
}

// fn pe  args=1 vars=4 closure=0 cpool=0 bc=98B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
// locals: t, r, o
function {
  let t;
  t = {};
  let o;
  let r;
  const _it1 = Object.entries(e);
  goto L_58;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  o = <value(_it2)>;
  if (!((undefined !== o))) goto L_57;
  t[r] = o;
  o;
  if (!(<done(_it1)>)) goto L_38;
  <value(_it1)>;
  return t;
}

// fn ye  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=86 closure=0 cpool=73 bc=1035B file=dil_widgets/src/widgets/ChartWidgetRenderer
// args: require, module, exports
// locals: e, t, r, o, i, n, a, s, u, l, d, HostNativeChart, <class_fields_init>, HostNativeChart#1, ChartWidgetRenderer, <class_fields_init>#1, ChartWidgetRenderer#1, c, v, f, ChartWidgetRendererFactory, <class_fields_init>#2, ChartWidgetRendererFactory#1, h, p, y, b, m, x, g, w, A, C, L, I, D, R, F, N, k, P, S, T, $, W, M, V, _, O, K, H, E, j, q, U, B, J, X, G, Y, z, Q, Z, ee, te, re, oe, ie, ne, ae, se, ue, le, de, ce, ve, fe, he, pe, ye, be, me, xe
function {
  c = function c;
  v = function v;
  f = function f;
  h = function h;
  p = function p;
  y = function y;
  b = function b;
  A = function A;
  C = function C;
  L = function L;
  I = function I;
  D = function D;
  R = function R;
  F = function F;
  N = function N;
  k = function k;
  P = function P;
  S = function S;
  T = function T;
  $ = function $;
  W = function W;
  M = function M;
  V = function V;
  _ = function _;
  O = function O;
  K = function K;
  H = function H;
  E = function E;
  j = function j;
  q = function q;
  U = function U;
  B = function B;
  J = function J;
  X = function X;
  G = function G;
  Y = function Y;
  z = function z;
  Q = function Q;
  Z = function Z;
  ee = function ee;
  te = function te;
  re = function re;
  oe = function oe;
  ie = function ie;
  ne = function ne;
  ae = function ae;
  se = function se;
  ue = function ue;
  le = function le;
  de = function de;
  ce = function ce;
  ve = function ve;
  fe = function fe;
  he = function he;
  pe = function pe;
  ye = function ye;
  let xe;
  let me;
  let be;
  let w;
  let g;
  let x;
  let m;
  let ChartWidgetRendererFactory#1;
  let ChartWidgetRenderer#1;
  let HostNativeChart#1;
  let d;
  let l;
  let u;
  let s;
  let a;
  let n;
  let i;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HostNativeChart = undefined;
  exports.makeChartWidgetRendererFactory = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", undefined, "vy71NakJj5E17gt1");
  r = require("dil_compiler/src/DILValdiComponentRenderer");
  o = require("dil_compiler/src/DILTypes");
  i = require("dil_core/src/colors/DILColor");
  n = require("dil_core/src/colors/DILColorsDefinition");
  a = require("dil_core/src/DILComponent");
  s = require("./attributes/DILBoxAttributes");
  u = require("./ChartWebWidgetRenderer");
  l = require("../webview/WebWidget");
  d = require("../webview/WebWidgetRenderer");
  let HostNativeChart;
  let <class_fields_init>;
  class HostNativeChart extends a.DILComponent { ... }
  <proto:HostNativeChart>.onRender = function <atom:0>;
  <proto:HostNativeChart>.applyDefaultSizing = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HostNativeChart>;
  HostNativeChart = function <atom:0>;
  // close_loc <class_fields_init>
  HostNativeChart#1 = function <atom:0>;
  exports.HostNativeChart = HostNativeChart#1;
  // append([], 0, a.DIL_COMPONENT_PROPERTIES)
  // append([], a.DIL_COMPONENT_PROPERTIES, s.DIL_BOX_ATTRIBUTE_PROPERTIES)
  [][s.DIL_BOX_ATTRIBUTE_PROPERTIES] = "chartJson";
  [][("chartJson" ++)] = "chartType";
  [][("chartType" ++)] = "hoverAction";
  [][("hoverAction" ++)] = "hoverContext";
  ("hoverContext" ++);
  HostNativeChart#1.properties = [];
  let ChartWidgetRenderer;
  let <class_fields_init>#1;
  class ChartWidgetRenderer extends o.ADILWidgetRendererInternal { ... }
  <proto:ChartWidgetRenderer>.onRender = function <atom:0>;
  <proto:ChartWidgetRenderer>.hostNativeModel = function <atom:0>;
  <proto:ChartWidgetRenderer>.renderHostNative = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ChartWidgetRenderer>;
  ChartWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  ChartWidgetRenderer#1 = function <atom:0>;
  let ChartWidgetRendererFactory;
  let <class_fields_init>#2;
  class ChartWidgetRendererFactory extends undefined { ... }
  <proto:ChartWidgetRendererFactory>.create = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:ChartWidgetRendererFactory>;
  ChartWidgetRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>#2
  ChartWidgetRendererFactory#1 = function <atom:0>;
  exports.makeChartWidgetRendererFactory = h;
  m = ["blue", "purple", "orange", "green", "red", "yellow", "pink"];
  x = ["500", "200", "400", "100", "600", "75", "700", "300"];
  g = 2;
  w = {blue: "blue-500", green: "green-500", orange: "orange-500", pink: "pink-500", purple: "purple-500", red: "red-500", yellow: "yellow-500"};
  be = "charts_widget_v2";
  me = "recharts-json";
  xe = "label";
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/ChartWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
