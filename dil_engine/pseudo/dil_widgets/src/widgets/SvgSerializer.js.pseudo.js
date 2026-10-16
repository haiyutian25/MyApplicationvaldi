// fn f  args=1 vars=3 closure=4 cpool=0 bc=356B file=dil_widgets/src/widgets/SvgSerializer
// args: t
// locals: r, o
// closure: e, y, b, u
function {
  let o;
  let r;
  r = new e.XmlBuilder();
  r.beginNode("svg");
  y(r, t.props);
  if (!(b(t.children))) goto L_dd;
  r.addAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  o = u(r, t.children);
  r.endNode();
  return {svg: r.build(), hasAnimation: o};
}

// fn p  args=2 vars=6 closure=3 cpool=0 bc=544B file=dil_widgets/src/widgets/SvgSerializer
// args: t, e
// locals: o, i, n, r
// closure: d, x, r
function {
  let n;
  let i;
  let o;
  if (!(d(t))) goto L_f;
  return;
  o = t["aria-label"];
  if (!(("string" == typeof o))) goto L_4c;
  goto L_4d;
  // [栈深重同步 1 -> 0]
  i = "";
  n = "";
  let r;
  for (const r of e) {
    if (!(("object" == typeof r))) goto L_175;
    if (!(("title" === r.type))) goto L_ef;
    if (!((0 === i.length))) goto L_ef;
    i = x(r.children).trim();
    goto L_175;
    // [栈深重同步 4 -> 3]
    if (!(("desc" === r.type))) goto L_175;
    if (!((0 === n.length))) goto L_175;
    n = x(r.children).trim();
    x(r.children).trim();
  }
  if (!((i.length > 0))) goto L_1c9;
  if (!((n.length > 0))) goto L_1c9;
  if (!((i !== n))) goto L_1c9;
  return "".concat(i, "
", n);
  if ((i)) goto L_21f;
  if ((n)) goto L_21f;
  return r.default.svgIllustration();
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=72B file=dil_widgets/src/widgets/SvgSerializer
// args: t
function {
  if ((("presentation" === t.role))) goto L_47;
  if (((true === t["aria-hidden"]))) goto L_47;
  return ("true" === t["aria-hidden"]);
}

// fn u  args=2 vars=5 closure=1 cpool=0 bc=124B file=dil_widgets/src/widgets/SvgSerializer
// args: t, e
// locals: r, o, e#1
// closure: g
function {
  let r;
  r = false;
  let o;
  for (const o of e) {
    let e#1;
    if ((("string" == typeof o))) goto L_29;
    if (!(("number" == typeof o))) goto L_5c;
    t.addText(String(o));
   continue;
    e#1 = g(t, o);
    if ((r)) goto L_6d;
    r = e#1;
    e#1;
  }
  return r;
}

// fn g  args=2 vars=3 closure=5 cpool=0 bc=449B file=dil_widgets/src/widgets/SvgSerializer
// args: e, r
// locals: o
// closure: n, t, y, u, i
function {
  let o;
  if (!((true !== n[r.type]))) goto L_d6;
  if (!(t.isLoggingEnabled)) goto L_d2;
  console.warn("Ignoring unsupported SVG element "".concat(r.type, ""."));
  return false;
  e.beginNode(r.type);
  y(e, r.props);
  o = u(e, r.children);
  e.endNode();
  if (((true === i[r.type]))) goto L_1c0;
  return o;
}

// fn y  args=2 vars=8 closure=5 cpool=0 bc=853B file=dil_widgets/src/widgets/SvgSerializer
// args: e, r
// locals: i, n, t, l, a, t#1
// closure: m, o, s, t, h
function {
  let i;
  for (const i of Object.keys(r)) {
    let a;
    let l;
    let n;
    n = r[i];
    if ((("children" === i))) goto L_b4;
    if ((("dangerouslySetInnerHTML" === i))) goto L_b4;
    if ((("key" === i))) goto L_b4;
    if ((("ref" === i))) goto L_b4;
    if ((i.startsWith("on"))) goto L_b4;
    if (((null == n))) goto L_b4;
    if (((false === n))) continue;
    if (!(("style" === i))) goto L_150;
    if (!((null !== n))) goto L_150;
    if (!(("object" == typeof n))) goto L_150;
    if (!(!Array.isArray(n))) goto L_150;
    let t;
    t = m(n);
    if (!((t.length > 0))) goto L_14c;
    e.addAttribute("style", t);
   continue;
    if (!(("boolean" != typeof n))) goto L_177;
    if (!(("number" != typeof n))) goto L_177;
    if ((("string" != typeof n))) continue;
    if (!((o[i] == null))) goto L_186;
    o[i];
    l = i;
    if (!((true !== s[l]))) goto L_21c;
    if (!(t.isLoggingEnabled)) goto L_218;
    console.warn("Ignoring unsupported SVG attribute "".concat(l, ""."));
   continue;
    a = String(n);
    if (!(("values" === l))) goto L_2c5;
    let t#1;
    for (const t#1 of a.split(";")) {
      h(String(r.attributeName), t#1.trim());
      // [栈深重同步 3 -> 6]
    }
    goto L_31f;
    if ((("from" === l))) goto L_2eb;
    if ((("to" === l))) goto L_2eb;
    if (!(("by" === l))) goto L_317;
    goto L_31a;
    // [栈深重同步 5 -> 4]
    h(l, a);
    e.addAttribute(l, a);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=78B file=dil_widgets/src/widgets/SvgSerializer
// args: t
function {
  return "-".concat(t.toLowerCase());   // tail call
}

// fn m  args=1 vars=6 closure=3 cpool=3 bc=452B file=dil_widgets/src/widgets/SvgSerializer
// args: e
// locals: r, o, i, n, s
// closure: l, t, k
function {
  let r;
  r = [];
  let o;
  for (const o of Object.keys(e)) {
    let s;
    let n;
    let i;
    i = e[o];
    if (!(("number" != typeof i))) goto L_63;
    if ((("string" != typeof i))) continue;
    n = o.replace(new RegExp("[A-Z]"), function <atom:0>);
    if (!((true !== l[n]))) goto L_126;
    if (!(t.isLoggingEnabled)) goto L_123;
    console.warn("Ignoring unsupported SVG style property "".concat(n, ""."));
   continue;
    s = String(i);
    k(s);
    r.push("".concat(n, ":", s));
  }
  return r.join(";");   // tail call
}

// fn h  args=2 vars=2 closure=2 cpool=0 bc=82B file=dil_widgets/src/widgets/SvgSerializer
// args: t, e
// closure: k, c
function {
  if (!(("xlink:href" !== t))) goto L_17;
  if (!(("href" !== t))) goto L_17;
  k(e);
  return;
  if (!(!c.test(e))) goto L_51;
  throw new Error("SVG href references must target a local fragment.");
  return;
}

// fn k  args=1 vars=2 closure=1 cpool=0 bc=303B file=dil_widgets/src/widgets/SvgSerializer
// args: t
// locals: e
// closure: a
function {
  let e;
  e = t.toLowerCase();
  if ((e.includes("@import"))) goto L_b5;
  if ((e.includes("expression("))) goto L_b5;
  if (!(e.includes("javascript:"))) goto L_c6;
  throw new Error("Unsupported executable SVG value.");
  if (!(e.includes("url("))) goto L_12e;
  if (!(!a.test(t))) goto L_12e;
  throw new Error("SVG URL references must target a local fragment.");
  return;
}

// fn b  args=1 vars=2 closure=1 cpool=0 bc=155B file=dil_widgets/src/widgets/SvgSerializer
// args: t
// locals: e
// closure: b
function {
  let e;
  for (const e of t) {
    if (!(("object" == typeof e))) continue;
    if (((undefined !== e.props.xlinkHref))) goto L_86;
    if (!(b(e.children))) continue;
    return true;
    // [栈深重同步 0 -> 3]
  }
  return false;
}

// fn x  args=1 vars=3 closure=0 cpool=0 bc=69B file=dil_widgets/src/widgets/SvgSerializer
// args: t
// locals: e, r
function {
  let e;
  e = "";
  let r;
  for (const r of t) {
    if (!(("string" != typeof r))) goto L_25;
    if ((("number" != typeof r))) goto L_3a;
    e = (e + String(r));
    (e + String(r));
  }
  return e;
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=15 bc=1637B file=dil_widgets/src/widgets/SvgSerializer
// args: require, module, exports
// locals: t, e, r, o, i, n, s, l, a, c, f, p, d, u, g, y, m, h, k, b, x
function {
  f = function f;
  p = function p;
  d = function d;
  u = function u;
  g = function g;
  y = function y;
  m = function m;
  h = function h;
  k = function k;
  b = function b;
  x = function x;
  let c;
  let a;
  let l;
  let s;
  let n;
  let i;
  let o;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.serializeSvg = undefined;
  exports.getSvgAccessibilityLabel = undefined;
  exports.isSvgHiddenFromAccessibility = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("dil_core/src/utils/XmlBuilder");
  r = require("../Strings");
  o = {alignmentBaseline: "alignment-baseline", className: "class", clipPath: "clip-path", clipRule: "clip-rule", colorInterpolation: "color-interpolation", colorInterpolationFilters: "color-interpolation-filters", dominantBaseline: "dominant-baseline", fillOpacity: "fill-opacity", fillRule: "fill-rule", floodColor: "flood-color", floodOpacity: "flood-opacity", fontFamily: "font-family", fontSize: "font-size", fontStyle: "font-style", fontWeight: "font-weight", letterSpacing: "letter-spacing", lightingColor: "lighting-color", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", pointerEvents: "pointer-events", stopColor: "stop-color", stopOpacity: "stop-opacity", strokeDasharray: "stroke-dasharray", strokeDashoffset: "stroke-dashoffset", strokeLinecap: "stroke-linecap", strokeLinejoin: "stroke-linejoin", strokeMiterlimit: "stroke-miterlimit", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", textAnchor: "text-anchor", vectorEffect: "vector-effect", wordSpacing: "word-spacing", xlinkHref: "xlink:href"};
  i = {animate: true, animateMotion: true, animateTransform: true, set: true};
  null;
  i;
  n = {circle: true, clipPath: true, defs: true, desc: true, ellipse: true, g: true, line: true, linearGradient: true, marker: true, mask: true, mpath: true, path: true, pattern: true, polygon: true, polyline: true, radialGradient: true, rect: true, stop: true, symbol: true, text: true, title: true, tspan: true, use: true};
  s = {accumulate: true, additive: true, alignment-baseline: true, aria-hidden: true, aria-label: true, attributeName: true, attributeType: true, by: true, calcMode: true, end: true, href: true, keyPoints: true, keySplines: true, keyTimes: true, max: true, min: true, path: true, rotate: true, begin: true, class: true, clip-path: true, clip-rule: true, color: true, color-interpolation: true, color-interpolation-filters: true, cx: true, cy: true, d: true, dominant-baseline: true, dur: true, dx: true, dy: true, fill: true, fill-opacity: true, fill-rule: true, flood-color: true, flood-opacity: true, font-family: true, font-size: true, font-style: true, font-weight: true, fx: true, fy: true, gradientTransform: true, gradientUnits: true, height: true, id: true, letter-spacing: true, lighting-color: true, marker-end: true, markerHeight: true, marker-mid: true, marker-start: true, markerUnits: true, markerWidth: true, mask: true, offset: true, opacity: true, orient: true, pathLength: true, patternContentUnits: true, patternTransform: true, patternUnits: true, points: true, pointer-events: true, preserveAspectRatio: true, r: true, refX: true, refY: true, repeatCount: true, repeatDur: true, restart: true, role: true, rx: true, ry: true, stop-color: true, stop-opacity: true, stroke: true, stroke-dasharray: true, stroke-dashoffset: true, stroke-linecap: true, stroke-linejoin: true, stroke-miterlimit: true, stroke-opacity: true, stroke-width: true, text-anchor: true, transform: true, type: true, vector-effect: true, viewBox: true, values: true, width: true, word-spacing: true, x: true, x1: true, x2: true, xlink:href: true, xmlns: true, y: true, y1: true, y2: true, from: true, to: true};
  l = {color: true, fill: true, fill-opacity: true, font-family: true, font-size: true, font-style: true, font-weight: true, mix-blend-mode: true, opacity: true, pointer-events: true, stroke: true, stroke-opacity: true, stroke-width: true};
  a = new RegExp("^url\\(#[A-Za-z_][A-Za-z0-9_.:-]*\\)$");
  c = new RegExp("^#[A-Za-z_][A-Za-z0-9_.:-]*$");
  exports.serializeSvg = f;
  exports.getSvgAccessibilityLabel = p;
  exports.isSvgHiddenFromAccessibility = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/SvgSerializer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
