// fn a  args=2 vars=10 closure=2 cpool=0 bc=635B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e, t
// locals: n, i, r, o, e#1, t#1, a, l
// closure: A, s
function {
  let r;
  let i;
  let n;
  n = e.clientDefinedWidgets;
  i = t.content_references;
  if ((!A(n))) goto L_86;
  if (!(!Array.isArray(i))) goto L_8a;
  return e;
  r = undefined;
  let o;
  for (const o of Object.keys(n)) {
    let l;
    let a;
    let t#1;
    let e#1;
    e#1 = n[o];
    if ((!A(e#1))) goto L_161;
    if (!((undefined !== e#1.status))) goto L_136;
    if ((("resolved" !== e#1.status))) goto L_161;
    if (((true === e#1.isStreaming))) continue;
    t#1 = e#1.refIndex;
    if ((("number" != typeof t#1))) goto L_1d0;
    if ((!Number.isInteger(t#1))) goto L_1d0;
    if (((t#1 < 0))) continue;
    a = i[t#1];
    if ((!A(a))) goto L_212;
    if ((("client_defined_widget" !== a.type))) continue;
    l = s(a, t#1);
    if (!((undefined !== l))) goto L_258;
    if (!((undefined === r))) goto L_23d;
    null;
    n;
    r = {};
    {};
    null;
    e#1;
    r[o] = {nativeFallback: l};
    {nativeFallback: l};
  }
  if (!((undefined === r))) goto L_26b;
  return e;
  null;
  e;
  return {clientDefinedWidgets: r};
}

// fn s  args=2 vars=6 closure=7 cpool=0 bc=527B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e, t
// locals: r, o, a, s
// closure: A, v, i, n, l, d, y
function {
  let s;
  let a;
  let o;
  let r;
  r = e.data;
  if (!(!A(r))) goto L_38;
  return;
  if (!(("learning_block" === e.category))) goto L_92;
  if (!(("SUPPLY_AND_DEMAND" === r.matched_type))) goto L_92;
  return v();   // tail call
  if (!((r.widgetType == null))) goto L_108;
  r.widgetType;
  if (!((r.widget_type == null))) goto L_108;
  r.widget_type;
  o = r.type;
  if (!(("visualization" === e.category))) goto L_15d;
  a = (r.language === i);
  if (!((o !== n))) goto L_16e;
  if (!(!a)) goto L_16e;
  return;
  if (!((undefined !== r.language))) goto L_1c1;
  if (!((r.language !== i))) goto L_1c1;
  return;
  s = l(r, t);
  if (!((undefined !== s))) goto L_20d;
  if (!(("pie" === s.chartType))) goto L_205;
  return d(s);
  return y(s);
  return undefined;
}

// fn l  args=2 vars=5 closure=2 cpool=0 bc=325B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: t, n
// locals: i, e, r
// closure: A, e
function {
  let i;
  i = t.content;
  if (!(A(i))) goto L_31;
  return i;
  if (!(("string" == typeof i))) goto L_116;
  try { // catch -> L_84
  let e;
  e = JSON.parse(i);
  if (!(A(e))) goto L_81;
  goto L_82;
  // [栈深重同步 1 -> 0]
  return undefined;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_115
  if (!(e.isLoggingEnabled)) goto L_111;
  console.warn("Unable to decode ChatGPT chart widget content at reference ".concat(n, ": ", String(r)));
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(("string" == typeof t.chartType))) goto L_143;
  return t;
  return undefined;
}

// fn y  args=1 vars=8 closure=6 cpool=0 bc=740B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e
// locals: t, n, i, r, o, a, s
// closure: g, A, c, u, h, f
function {
  let s;
  let a;
  let o;
  let r;
  let i;
  let n;
  let t;
  t = e.chartType;
  if (!(("line" !== t))) goto L_4f;
  if (!(("bar" !== t))) goto L_4f;
  return;
  n = g(e.data);
  if (!(A(e.xAxis))) goto L_be;
  goto L_bf;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!(("string" == typeof e.xKey))) goto L_110;
  goto L_1bb;
  // [栈深重同步 1 -> 0]
  if (!(("string" == typeof e.xAxis))) goto L_15f;
  goto L_1bb;
  // [栈深重同步 1 -> 0]
  if (!((i == null))) goto L_16f;
  i;
  goto L_190;
  if (!(("string" == typeof undefined.dataKey))) goto L_1ba;
  goto L_1bb;
  // [栈深重同步 1 -> 0]
  r = undefined;
  o = c(e.series, t);
  if (((0 === n.length))) goto L_1fe;
  if (((undefined === r))) goto L_1fe;
  if (!((0 === o.length))) goto L_201;
  return;
  a = {data: n, height: 220, series: o, showGrid: true, showLegend: true, showYAxis: true, width: "100%", xAxis: u(e, n, r, i)};
  h(e, a);
  s = f(e);
  if (!((undefined !== s))) goto L_277;
  a.yAxis = s;
  s;
  if (!((undefined !== e.scrollToValue))) goto L_2cf;
  a.scrollToValue = e.scrollToValue;
  e.scrollToValue;
  return {props: a, type: "chart"};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=29B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e
// locals: t
// closure: n
function {
  let t;
  t = e[n];
  if ((("number" != typeof t))) goto L_1c;
  return (t < 0);
}

// fn d  args=1 vars=6 closure=3 cpool=1 bc=486B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e
// locals: t, n, i, r, o
// closure: g, c, h
function {
  let o;
  let r;
  let i;
  let n;
  let t;
  if (!(("pie" !== e.chartType))) goto L_3a;
  return;
  if (!(("string" == typeof e.nameKey))) goto L_89;
  goto L_8a;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!(("string" == typeof e.valueKey))) goto L_da;
  goto L_db;
  // [栈深重同步 1 -> 0]
  n = undefined;
  i = g(e.data);
  if (((undefined === t))) goto L_146;
  if (((undefined === n))) goto L_146;
  if (((0 === i.length))) goto L_146;
  if (!(i.some(function <atom:0>))) goto L_149;
  return;
  r = c(e.series, "pie");
  if (!((0 === r.length))) goto L_1a2;
  goto L_1a5;
  // [栈深重同步 2 -> 1]
  o = {data: i, height: 220, series: r, showLegend: true, width: "100%", xAxis: {dataKey: t}};
  h(e, o);
  return {props: o, type: "pie-chart"};
}

// fn c  args=2 vars=5 closure=1 cpool=0 bc=859B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e, t
// locals: n, i, e#1
// closure: A
function {
  let n;
  if (!(!Array.isArray(e))) goto L_34;
  return [];
  n = [];
  let i;
  for (const i of e) {
    let e#1;
    if ((!A(i))) goto L_a4;
    if ((("string" != typeof i.dataKey))) goto L_a4;
    if (((0 === i.dataKey.length))) continue;
    if (!(("string" == typeof i.label))) goto L_126;
    goto L_14a;
    // [栈深重同步 5 -> 4]
    if (!(("string" == typeof i.type))) goto L_1a2;
    goto L_1a3;
    // [栈深重同步 5 -> 4]
    e#1 = {dataKey: i.dataKey, label: i.dataKey, type: t};
    if (!((undefined !== i.color))) goto L_204;
    e#1.color = i.color;
    i.color;
    if (!((undefined !== i.fillColor))) goto L_260;
    e#1.fillColor = i.fillColor;
    i.fillColor;
    if (!(("string" == typeof i.curveType))) goto L_2c1;
    e#1.curveType = i.curveType;
    i.curveType;
    if (!(("string" == typeof i.stackId))) goto L_322;
    e#1.stack = i.stackId;
    i.stackId;
    n.push(e#1);
  }
  return n;
}

// fn u  args=4 vars=13 closure=4 cpool=0 bc=735B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e, t, n, i
// locals: r, o, a, l, e#1, i#1, s, e#2, t#1
// closure: g, b, p, A
function {
  let s;
  let a;
  let o;
  let r;
  null;
  i;
  r = {dataKey: n};
  o = g(e.formattedData);
  a = {};
  let l;
  l = 0;
  if (!((l < t.length))) goto L_b3;
  let i#1;
  let e#1;
  e#1 = t[l][n];
  if (!((o[l] == null))) goto L_6c;
  o[l];
  goto L_6e;
  i#1 = undefined[n];
  if (!(("string" != typeof e#1))) goto L_88;
  if ((("number" != typeof e#1))) goto L_a8;
  if ((!b(i#1))) goto L_a8;
  a[String(e#1)] = i#1;
  i#1;
  l = <l_new>;
  (l++);
  goto L_46;
  s = p(e.axes, "x");
  if (!((undefined !== s))) goto L_297;
  if (!(Array.isArray(s.ticks))) goto L_297;
  let e#2;
  e#2 = [];
  let t#1;
  for (const t#1 of s.ticks) {
    if (!(A(t#1))) goto L_272;
    if (!(b(t#1.value))) goto L_272;
    e#2.push(t#1.value);
    if (!(b(t#1.label))) goto L_272;
    a[String(t#1.value)] = t#1.label;
    t#1.label;
  }
  if (!((e#2.length > 0))) goto L_296;
  r.ticks = e#2;
  e#2;
  if (!((Object.keys(a).length > 0))) goto L_2da;
  r.labels = a;
  a;
  return r;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e
function {
  return ("number" == typeof e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e
function {
  return e.value;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e
function {
  return ("number" == typeof e);
}

// fn f  args=1 vars=6 closure=2 cpool=3 bc=715B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e
// locals: t, n, i, r, e#1
// closure: p, A
function {
  let r;
  let i;
  let n;
  let t;
  t = e.yAxis;
  n = p(e.axes, "y");
  if (!(A(t))) goto L_6b;
  null;
  t;
  goto L_6c;
  // [栈深重同步 1 -> 0]
  i = {};
  if (!(Array.isArray(e.yAxisDomain))) goto L_de;
  goto L_10a;
  // [栈深重同步 1 -> 0]
  if (!((n == null))) goto L_e9;
  n;
  goto L_10a;
  r = undefined.domain;
  if (!(Array.isArray(r))) goto L_182;
  if (!((2 === r.length))) goto L_182;
  if (!(r.every(function <atom:0>))) goto L_182;
  i.domain = r;
  r;
  if (!((undefined !== n))) goto L_294;
  if (!(Array.isArray(n.ticks))) goto L_294;
  let e#1;
  e#1 = n.ticks.filter(A).map(function <atom:0>).filter(function <atom:0>);
  if (!((e#1.length > 0))) goto L_293;
  i.ticks = e#1;
  e#1;
  if (!((0 === Object.keys(i).length))) goto L_2c7;
  return undefined;
  return i;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=44B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e
// closure: A, t
function {
  if (!(A(e))) goto L_2b;
  return (e.dimension === t);
}

// fn p  args=2 vars=2 closure=1 cpool=1 bc=86B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e, t
// closure: A
function {
  if (!(Array.isArray(e))) goto L_54;
  return e.find(function <atom:0>);
  return undefined;
}

// fn g  args=1 vars=1 closure=2 cpool=0 bc=127B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e
// closure: t, A
function {
  if (!(Array.isArray(e))) goto L_7b;
  return e.slice(0, t).filter(A);
  return [];
}

// fn h  args=2 vars=4 closure=2 cpool=0 bc=141B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e, t
// locals: n, n#1
// closure: r, o
function {
  let n;
  for (const n of r) {
    if (!(("boolean" == typeof e[n]))) goto L_26;
    t[n] = e[n];
    e[n];
  }
  let n#1;
  for (const n#1 of o) {
    if (!(("number" == typeof e[n#1]))) goto L_85;
    if (!(Number.isFinite(e[n#1]))) goto L_85;
    t[n#1] = e[n#1];
    e[n#1];
  }
  return;
}

// fn v  args=0 vars=0 closure=0 cpool=0 bc=385B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
function {
  return {props: {data: [{demand: 10, quantity: 0, supply: 0}, {demand: 8, quantity: 2, supply: 2}, {demand: 6, quantity: 4, supply: 4}, {demand: 5, quantity: 5, supply: 5}, {demand: 4, quantity: 6, supply: 6}, {demand: 2, quantity: 8, supply: 8}, {demand: 0, quantity: 10, supply: 10}], height: 220, series: [{color: "blue", curveType: "linear", dataKey: "demand", label: "Demand", type: "line"}, {color: "orange", curveType: "linear", dataKey: "supply", label: "Supply", type: "line"}], showDots: false, showGrid: true, showLegend: true, showTooltip: true, showYAxis: true, width: "100%", xAxis: {axisLine: true, dataKey: "quantity", type: "number"}, yAxis: {axisLine: true, domain: [0, 10]}}, type: "chart"};
}

// fn b  args=1 vars=1 closure=0 cpool=0 bc=21B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e
function {
  if ((("string" == typeof e))) goto L_14;
  return ("number" == typeof e);
}

// fn A  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=14 bc=294B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// args: require, module, exports
// locals: e, t, n, i, r, o, a, s, l, y, d, c, u, f, p, g, h, v, b, A
function {
  a = function a;
  s = function s;
  l = function l;
  y = function y;
  d = function d;
  c = function c;
  u = function u;
  f = function f;
  p = function p;
  g = function g;
  h = function h;
  v = function v;
  b = function b;
  A = function A;
  let o;
  let r;
  let i;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.addChatGPTClientDefinedWidgetFallbacks = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = 500;
  n = "charts_widget_v2";
  i = "recharts-json";
  r = ["disableAnimation", "disableUserScroll", "scrollable", "showDots", "showGrid", "showLegend", "showTooltip", "showValueLabels", "showYAxis"];
  o = ["height", "minAngle", "valueLabelInterval", "valueLabelOffset", "visiblePointCount"];
  exports.addChatGPTClientDefinedWidgetFallbacks = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/generated_ui/ChatGPTClientDefinedWidgetFallbacks
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
