// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=103B file=math_jax/src/mathjax_src/output/svg
// locals: this
function {
  this = this;
  return this.options.linebreaks.inline;
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=0 bc=265B file=math_jax/src/mathjax_src/output/svg
// args: t
// locals: t#1, this.active_func, new.target, this
// closure: e, h, <class_fields_init>, s
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let t#1;
  if (!((t === undefined))) goto L_15;
  t;
  t = {};
  t#1 = {};
  this = new new.target(t, e.SvgWrapperFactory, h.DefaultFont);
  if (!(<class_fields_init>)) goto L_76;
  <class_fields_init>.call(this);
  new new.target(t, e.SvgWrapperFactory, h.DefaultFont);
  this.minwidth = 0;
  this.shift = 0;
  this.svgStyles = null;
  this.fontCache = new s.FontCache(this);
  this.options.matchFontHeight = true;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=150B file=math_jax/src/mathjax_src/output/svg
// locals: this
function {
  this = this;
  if (!(("global" === this.options.fontCache))) goto L_95;
  this.fontCache.clearCache();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/output/svg
// locals: this
function {
  this = this;
  this.fontCache.clearCache();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/output/svg
// locals: this
function {
  this = this;
  this.clearFontCache();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=158B file=math_jax/src/mathjax_src/output/svg
// args: t, e
// locals: this
function {
  this = this;
  this.setDocument(e);
  return this.html("span", {}, [this.text(t.math)]);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=223B file=math_jax/src/mathjax_src/output/svg
// args: t
// locals: e, this, <home_object>
// closure: SVG
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  if (!(this.svgStyles)) goto L_4f;
  return this.svgStyles;
  this.svgStyles = super["styleSheet"].call(this, t);
  e = super["styleSheet"].call(this, t);
  this.adaptor.setAttribute(e, "id", SVG.STYLESHEETID);
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=225B file=math_jax/src/mathjax_src/output/svg
// args: t
// locals: this
// closure: i
function {
  this = this;
  if (!(this.svgStyles)) goto L_e0;
  this.adaptor.insertRules(this.svgStyles, new i.StyleJsonSheet(t).getStyleRules());
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=334B file=math_jax/src/mathjax_src/output/svg
// args: t
// locals: this
// closure: exports, SVG
function {
  this = this;
  if ((("global" !== this.options.fontCache))) goto L_75;
  if (!(this.findCache(t))) goto L_79;
  return null;
  return this.svg("svg", {xmlns: exports.SVGNS, id: SVG.FONTCACHEID, style: {display: "none"}}, [this.fontCache.getCache()]);
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=319B file=math_jax/src/mathjax_src/output/svg
// args: t
// locals: e, i, s, this
// closure: SVG
function {
  this = this;
  let i;
  let e;
  e = this.adaptor;
  i = e.tags(e.body(t.document), "svg");
  let s;
  s = (i.length - 1);
  if (!((s >= 0))) goto L_13c;
  if (!((this.adaptor.getAttribute(i[s], "id") === SVG.FONTCACHEID))) goto L_131;
  return true;
  s = <s_new>;
  (s--);
  goto L_ab;
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/svg
function {
  return 1;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=298B file=math_jax/src/mathjax_src/output/svg
// args: t, e
// locals: i, s, r, this
function {
  this = this;
  let r;
  let s;
  let i;
  i = this.container;
  this.container = e;
  if (((undefined === undefined))) goto L_4a;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_73;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_3e;
  // [栈深重同步 1 -> 0]
  this.typesetSvg(t, s, r);
  if (!(t.node.getProperty("process-breaks"))) goto L_11b;
  this.handleInlineBreaks(t, s, r);
  this.container = i;
  return;
}

// fn <atom:0>  args=1 vars=10 closure=0 cpool=0 bc=1004B file=math_jax/src/mathjax_src/output/svg
// args: t
// locals: e, i, s, r, o, n, e#1, s#1, this
function {
  this = this;
  let n;
  let o;
  let r;
  let s;
  let i;
  let e;
  if (((undefined === undefined))) goto L_ad;
  e = <to_object>(undefined).w;
  i = <to_object>(undefined).h;
  s = <to_object>(undefined).d;
  r = <to_object>(undefined).pwidth;
  <to_object>(undefined);
  goto L_d6;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_e9;
  const _it1 = undefined;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_11b;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_db;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_3e2;
  let s#1;
  let e#1;
  e#1 = this.adaptor;
  e#1.setStyle(o, "min-width", e#1.getStyle(o, "width"));
  e#1.setAttribute(o, "width", r);
  e#1.setAttribute(o, "data-mjx-viewBox", e#1.getAttribute(o, "viewBox"));
  e#1.removeAttribute(o, "viewBox");
  s#1 = this.fixed((t.metrics.ex / (1000 * this.font.params.x_height)), 6);
  e#1.setAttribute(n, "transform", "scale(".concat(s#1, ",-", s#1, ") translate(0, ", this.fixed((1000 * -i), 1), ")"));
  return [o, n];
}

// fn <atom:0>  args=3 vars=10 closure=1 cpool=1 bc=1288B file=math_jax/src/mathjax_src/output/svg
// args: t, e, i
// locals: s, r, o, n, h, a, this
// closure: exports
function {
  this = this;
  let a;
  let h;
  let n;
  let o;
  let r;
  let s;
  s = (this.math.metrics.em / 1000);
  r = Math.max(i, s);
  o = Math.max((t + e), s);
  n = this.svg("g", {stroke: "currentColor", fill: "currentColor", stroke-width: 0, transform: "scale(1,-1)"});
  h = this.adaptor;
  a = h.append(this.container, this.svg("svg", {xmlns: exports.SVGNS, width: this.ex(r), height: this.ex(o), role: "img", focusable: false, style: {vertical-align: this.ex(-e)}, viewBox: [0, this.fixed((1000 * -t), 1), this.fixed((1000 * r), 1), this.fixed((1000 * o), 1)].join(" ")}, [n]));
  if (!((0.001 === r))) goto L_412;
  h.setAttribute(a, "preserveAspectRatio", "xMidYMid slice");
  if (!((i < 0))) goto L_412;
  h.setStyle(this.container, "margin-right", this.ex(i));
  if (!(("none" !== this.options.fontCache))) goto L_4fd;
  if (!(this.options.useXlink)) goto L_4fd;
  h.setAttribute(a, "xmlns:xlink", exports.XLINKNS);
  return [a, n];
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=1089B file=math_jax/src/mathjax_src/output/svg
// args: t, e, i
// locals: s, t#1, this
function {
  this = this;
  let s;
  s = this.adaptor;
  this.shift = 0;
  this.minwidth = 0;
  if (!(("local" === this.options.fontCache))) goto L_1cd;
  this.fontCache.clearCache();
  this.fontCache.useLocalID(this.options.localID);
  s.insert(this.fontCache.getCache(), i);
  t.toSVG([i]);
  this.fontCache.clearLocalID();
  if (!(this.minwidth)) goto L_372;
  s.setStyle(e, "minWidth", this.ex(this.minwidth));
  s.setStyle(this.container, "minWidth", this.ex(this.minwidth));
  return;
  if (!(this.shift)) goto L_440;
  let t#1;
  if ((s.getAttribute(this.container, "justify"))) goto L_3f3;
  t#1 = "center";
  this.setIndent(e, t#1, this.shift);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=277B file=math_jax/src/mathjax_src/output/svg
// args: t, e, i
// locals: this
function {
  this = this;
  if (!(("center" !== e))) goto L_14;
  if ((("left" !== e))) goto L_8a;
  this.adaptor.setStyle(t, "margin-left", this.ex(i));
  if (!(("center" !== e))) goto L_9d;
  if ((("right" !== e))) goto L_114;
  this.adaptor.setStyle(t, "margin-right", this.ex(-i));
  return;
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=0 bc=2241B file=math_jax/src/mathjax_src/output/svg
// args: t, e, i
// locals: s, r, o, n, h, a, i#1, s#1, l, c, d, p, x, g, u, m, t#1, f, t#2, e#1, i#2, t#3, this
function {
  this = this;
  let h;
  let n;
  let o;
  let r;
  let s;
  s = t.childNodes[0].breakCount;
  if (!(!s)) goto L_5f;
  return;
  r = this.adaptor;
  o = r.firstChild(i);
  n = r.childNodes(r.firstChild(o));
  h = t.childNodes[0].lineBBox;
  r.remove(i);
  let a;
  a = 0;
  if (!((a <= s))) goto L_7c9;
  let f;
  let m;
  let u;
  let g;
  let x;
  let p;
  let d;
  let c;
  let l;
  let s#1;
  let i#1;
  if ((h[a])) goto L_1f7;
  i#1 = t.childNodes[0].getLineBBox(a);
  if (((undefined === undefined))) goto L_26e;
  s#1 = <to_object>(undefined).h;
  l = <to_object>(undefined).d;
  c = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_274;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1fe;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_287;
  const _it1 = undefined;
  <done(_it1)>;
  d = <value(_it1)>;
  <done(_it1)>;
  p = <value(_it1)>;
  goto L_2d5;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_279;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_302;
  x = <to_object>(undefined).scale;
  <to_object>(undefined);
  goto L_32c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_2da;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_33f;
  const _it2 = undefined;
  <done(_it2)>;
  g = <value(_it2)>;
  <done(_it2)>;
  u = <value(_it2)>;
  goto L_37d;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_331;
  // [栈深重同步 1 -> 0]
  m = r.append(u, r.clone(o, false));
  let t#1;
  for (const t#1 of r.childNodes(n[a])) {
    r.append(m, t#1);
  }
  r.insert(g, e);
  if ((!p)) goto L_4c1;
  f = !!p.node.getProperty("forcebreak");
  if (!(f)) goto L_6bb;
  if (!(("after" === p.node.attributes.get("linebreakstyle")))) goto L_6bb;
  let i#2;
  let e#1;
  let t#2;
  t#2 = (d.parent.node.childIndex(d.node) + 1);
  e#1 = d.parent.childNodes[t#2];
  if (!(e#1)) goto L_67e;
  goto L_67f;
  // [栈深重同步 1 -> 0]
  i#2 = 0;
  if (!(i#2)) goto L_6b7;
  this.addInlineBreak(g, i#2, f);
  goto L_7be;
  if ((f)) goto L_6c5;
  if (!(a)) goto L_7be;
  let t#3;
  if (!(d)) goto L_726;
  if (!(a)) goto L_726;
  goto L_727;
  // [栈深重同步 1 -> 0]
  t#3 = 0;
  if (!(!t#3)) goto L_734;
  if ((f)) goto L_7bd;
  if ((f)) goto L_7ba;
  this.addInlineBreak(g, t#3, !!d.node.getProperty("forcebreak"));
  a = <a_new>;
  (a++);
  goto L_174;
  if (!(r.childNodes(e).length)) goto L_897;
  r.append(r.firstChild(r.parent(e)), r.firstChild(e));
  r.remove(e);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=559B file=math_jax/src/mathjax_src/output/svg
// args: t, e, i
// locals: s, r, this
// closure: o, n
function {
  this = this;
  let r;
  let s;
  s = this.adaptor;
  r = o.em(e);
  if ((i)) goto L_e7;
  s.insert(s.node("mjx-break", {prebreak: true}, [s.text(" ")]), t);
  if (!(i)) goto L_1f0;
  if (!(n.SPACE[r])) goto L_195;
  goto L_1f8;
  // [栈深重同步 6 -> 5]
  goto L_1f8;
  // [栈深重同步 6 -> 5]
  s.insert(s.node("mjx-break", {newline: true}, [s.text(" ")]), t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=4 bc=242B file=math_jax/src/mathjax_src/output/svg
// args: t
// locals: this
function {
  this = this;
  t = (t / this.font.params.x_height);
  if (!((Math.abs(t) < 0.001))) goto L_9b;
  return "0";
  return (t.toFixed(3).replace(new RegExp("\\.?0+$"), "") + "ex");
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=107B file=math_jax/src/mathjax_src/output/svg
// args: t, e, i
// locals: t#1, e#1, i#1, this
// closure: exports
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
  return this.html(t, e, i, exports.SVGNS);   // tail call
}

// fn <atom:0>  args=2 vars=11 closure=1 cpool=0 bc=835B file=math_jax/src/mathjax_src/output/svg
// args: t, e
// locals: i, s, o, n, i#1, t#1, i#2, s#1, this
// closure: r
function {
  this = this;
  let n;
  let o;
  let s;
  let i;
  i = this.math.metrics;
  s = (((this.font.params.x_height / i.ex) * i.em) * 1000);
  o = this.svg("text", {data-variant: e, transform: "scale(1,-1)", font-size: (this.fixed(s, 1) + "px")}, [this.text(t)]);
  n = this.adaptor;
  if (!(("-explicitFont" !== e))) goto L_33f;
  let i#1;
  i#1 = r.unicodeChars(t);
  if (((1 !== i#1.length))) goto L_223;
  if (((i#1[0] < 119808))) goto L_223;
  if (!((i#1[0] > 120831))) goto L_33f;
  let s#1;
  let i#2;
  let t#1;
  if (((undefined === undefined))) goto L_249;
  const _it1 = undefined;
  <done(_it1)>;
  t#1 = <value(_it1)>;
  <done(_it1)>;
  i#2 = <value(_it1)>;
  <done(_it1)>;
  s#1 = <value(_it1)>;
  goto L_294;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_236;
  // [栈深重同步 1 -> 0]
  n.setAttribute(o, "font-family", t#1);
  if (!(i#2)) goto L_302;
  n.setAttribute(o, "font-style", "italic");
  if (!(s#1)) goto L_33e;
  n.setAttribute(o, "font-weight", "bold");
  return o;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=2 bc=674B file=math_jax/src/mathjax_src/output/svg
// args: t
// locals: e, i, s, r, this
function {
  this = this;
  let r;
  let s;
  let i;
  let e;
  e = this.adaptor;
  t = e.clone(t);
  e.removeAttribute(t, "transform");
  i = this.fixed((1000 * this.font.params.x_height), 1);
  s = this.svg("svg", {position: "absolute", visibility: "hidden", width: "1ex", height: "1ex", top: 0, left: 0, viewBox: [0, 0, i, i].join(" ")}, [t]);
  e.append(e.body(e.document), s);
  r = e.nodeSize(t, 1000, true)[0];
  e.remove(s);
  return {w: r, h: 0.75, d: 0.2};
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=22 bc=952B file=math_jax/src/mathjax_src/output/svg
// args: require, module, exports
// locals: t, e, i, s, r, o, n, h, SVG, <class_fields_init>, SVG#1
function {
  let SVG#1;
  let h;
  let n;
  let o;
  let r;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SVGNS = undefined;
  exports.XLINKNS = undefined;
  exports.SVG = undefined;
  t = require("./common");
  e = require("./svg/WrapperFactory");
  i = require("../util/StyleJson");
  s = require("./svg/FontCache");
  r = require("../util/string");
  o = require("../util/lengths");
  n = require("./common/Wrapper");
  h = require("./svg/DefaultFont");
  exports.SVGNS = "http://www.w3.org/2000/svg";
  exports.XLINKNS = "http://www.w3.org/1999/xlink";
  let SVG;
  let <class_fields_init>;
  class SVG extends t.CommonOutputJax { ... }
  <proto:SVG>.forceInlineBreaks = function <atom:0>;
  <proto:SVG>.initialize = function <atom:0>;
  <proto:SVG>.clearFontCache = function <atom:0>;
  <proto:SVG>.reset = function <atom:0>;
  <proto:SVG>.escaped = function <atom:0>;
  <proto:SVG>.styleSheet = function <atom:0>;
  <proto:SVG>.insertStyles = function <atom:0>;
  <proto:SVG>.pageElements = function <atom:0>;
  <proto:SVG>.findCache = function <atom:0>;
  <proto:SVG>.getInitialScale = function <atom:0>;
  <proto:SVG>.processMath = function <atom:0>;
  <proto:SVG>.createRoot = function <atom:0>;
  <proto:SVG>.createSVG = function <atom:0>;
  <proto:SVG>.typesetSvg = function <atom:0>;
  <proto:SVG>.setIndent = function <atom:0>;
  <proto:SVG>.handleInlineBreaks = function <atom:0>;
  <proto:SVG>.addInlineBreak = function <atom:0>;
  <proto:SVG>.ex = function <atom:0>;
  <proto:SVG>.svg = function <atom:0>;
  <proto:SVG>.unknownText = function <atom:0>;
  <proto:SVG>.measureTextNode = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SVG>;
  SVG = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc SVG
  SVG#1 = function <atom:0>;
  exports.SVG = SVG#1;
  SVG#1.NAME = "SVG";
  null;
  t.CommonOutputJax.OPTIONS;
  SVG#1.OPTIONS = {blacker: 3, fontCache: "local", localID: null, useXlink: true};
  null;
  t.CommonOutputJax.commonStyles;
  {mjx-container[jax="SVG"]: {direction: "ltr", white-space: "nowrap"}, mjx-container[jax="SVG"] > svg: {overflow: "visible", min-height: "1px", min-width: "1px"}, mjx-container[jax="SVG"] > svg a: {fill: "blue", stroke: "blue"}}[["rect[data-sre-highlighter-added]:has(+ .mjx-selected)", "rect[data-sre-highlighter-bbox].mjx-selected"].join(", ")] = {stroke: "black", stroke-width: "80px"};
  {stroke: "black", stroke-width: "80px"};
  {}[["rect[data-sre-highlighter-added]:has(+ .mjx-selected)", "rect[data-sre-highlighter-bbox].mjx-selected"].join(", ")] = {stroke: "#C8C8C8"};
  {stroke: "#C8C8C8"};
  SVG#1.commonStyles = {mjx-container[jax="SVG"]: {direction: "ltr", white-space: "nowrap"}, mjx-container[jax="SVG"] > svg: {overflow: "visible", min-height: "1px", min-width: "1px"}, mjx-container[jax="SVG"] > svg a: {fill: "blue", stroke: "blue"}, @media (prefers-color-scheme: dark): {}};
  SVG#1.FONTCACHEID = "MJX-SVG-global-cache";
  SVG#1.STYLESHEETID = "MJX-SVG-styles";
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
