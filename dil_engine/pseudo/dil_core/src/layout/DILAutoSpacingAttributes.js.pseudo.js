// fn o  args=2 vars=3 closure=1 cpool=0 bc=217B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e, t
// locals: r
// closure: u
function {
  let r;
  r = u(t);
  if (!((undefined !== r))) goto L_d8;
  if (!(("column" === t.direction))) goto L_75;
  if (!((undefined === e.marginTop))) goto L_75;
  e.marginTop = r;
  r;
  if (!(("row" === t.direction))) goto L_d8;
  if (!((undefined === e.marginLeft))) goto L_d8;
  e.marginLeft = r;
  r;
  return;
}

// fn u  args=1 vars=1 closure=3 cpool=0 bc=655B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e
// closure: m, p, v
function {
  if (!(Number.isFinite(e.index))) goto L_26c;
  if (!(m(e.index, e.name))) goto L_26a;
  if (!(("column" === e.direction))) goto L_199;
  return p(e.index, e.name, e.previousName, e.previousPill, e.containerName, e.align);
  return v(e.index, e.name, e.previousName, e.variant, e.previousVariant, e.containerName);
  return undefined;
  return e.spacing;
}

// fn l  args=2 vars=2 closure=3 cpool=0 bc=655B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e, t
// closure: m, p, v
function {
  if (!(Number.isFinite(t.index))) goto L_26c;
  if (!(m(t.index, t.name))) goto L_26a;
  if (!(("column" === e.direction))) goto L_199;
  return p(t.index, t.name, t.previousName, t.previousPill, e.containerName, e.align);
  return v(t.index, t.name, t.previousName, t.variant, t.previousVariant, e.containerName);
  return undefined;
  return e.spacing;
}

// fn p  args=6 vars=10 closure=9 cpool=0 bc=553B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e, i, c, o, u, l
// locals: p, v, m, x
// closure: g, b, d, f, n, s, a, r, t
function {
  let x;
  let m;
  let v;
  let p;
  p = g(i);
  v = g(c);
  if (!(b(u))) goto L_27;
  return d(e, p, v, o);   // tail call
  if (!((0 === e))) goto L_38;
  if (!(("divider" !== p))) goto L_38;
  return;
  m = f(u);
  x = n;
  if (!(("title" === v))) goto L_56;
  x = s;
  s;
  if (!(("text" !== p))) goto L_6d;
  if ((("list" !== p))) goto L_8c;
  if (!(m)) goto L_81;
  if ((("title" === v))) goto L_8c;
  x = a;
  a;
  if ((("title" !== v))) goto L_c2;
  if (!(("text" !== p))) goto L_b0;
  if ((("list" !== p))) goto L_c2;
  if ((m)) goto L_c2;
  x = n;
  n;
  if (!(("text" === v))) goto L_e2;
  if (!(("text" === p))) goto L_e2;
  x = 0;
  0;
  if (!(("caption" === v))) goto L_112;
  if (!(("text" === p))) goto L_112;
  if (!(("center" === l))) goto L_10d;
  goto L_10e;
  // [栈深重同步 1 -> 0]
  x = 0;
  0;
  if ((("caption" !== p))) goto L_13b;
  if (!(m)) goto L_130;
  if ((("title" === v))) goto L_13b;
  x = r;
  r;
  if (!(("button" === p))) goto L_150;
  x = a;
  a;
  if (!(("button" === v))) goto L_172;
  if (!(("button" === p))) goto L_172;
  x = n;
  n;
  if (!(("image" !== v))) goto L_196;
  if (!(("iframe" !== v))) goto L_196;
  if ((("map" !== v))) goto L_1dc;
  if (!(m)) goto L_1d1;
  if ((("text" === p))) goto L_1d1;
  if ((("list" === p))) goto L_1d1;
  if ((("caption" === p))) goto L_1d1;
  if ((("button" === p))) goto L_1dc;
  x = s;
  s;
  if (!(("divider" === p))) goto L_1f1;
  x = s;
  s;
  if (!(("divider" === v))) goto L_206;
  x = s;
  s;
  if (!(("label" === v))) goto L_21b;
  x = t;
  t;
  if (!((0 === x))) goto L_225;
  return undefined;
  return x;
}

// fn d  args=4 vars=5 closure=3 cpool=0 bc=156B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e, t, r, i
// locals: a
// closure: s, c, n
function {
  let a;
  if (!((0 === e))) goto L_9;
  return;
  a = s;
  if (!(("title" === t))) goto L_2a;
  if (!(("title" !== r))) goto L_2a;
  a = c;
  c;
  if (!(("badge" === r))) goto L_50;
  if (!((true === i))) goto L_50;
  if (!(("title" === t))) goto L_50;
  a = n;
  n;
  if (!(("title" === r))) goto L_6e;
  if (!(("text" === t))) goto L_6e;
  a = n;
  n;
  if (!(("title" !== r))) goto L_81;
  if ((("text" !== r))) goto L_97;
  if ((("list" !== t))) goto L_97;
  a = n;
  n;
  return a;
}

// fn v  args=6 vars=9 closure=8 cpool=0 bc=302B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e, s, c, o, u, l
// locals: p, d, v
// closure: g, f, n, i, t, L, a, r
function {
  let v;
  let d;
  let p;
  p = g(s);
  d = g(c);
  if (!((0 === e))) goto L_2b;
  if ((("divider" !== p))) goto L_28;
  if (!(f(l))) goto L_2b;
  return;
  v = n;
  if (!(("button" === d))) goto L_50;
  if (!(("button" === p))) goto L_50;
  v = i;
  i;
  if (!(("button" === d))) goto L_8a;
  if (!(("button" === p))) goto L_8a;
  if (!(("ghost" === u))) goto L_8a;
  if (!(("ghost" === o))) goto L_8a;
  v = t;
  t;
  if (!(L(d))) goto L_9d;
  v = i;
  i;
  if (!(("label" === d))) goto L_b2;
  v = a;
  a;
  if (!(("icon" === d))) goto L_d4;
  if (!(("icon" === p))) goto L_d4;
  v = t;
  t;
  if (!(("favicon" === d))) goto L_f6;
  if (!(("text" === p))) goto L_f6;
  v = r;
  r;
  if (!(("divider" === p))) goto L_10b;
  v = a;
  a;
  if (!(("divider" === d))) goto L_120;
  v = a;
  a;
  if (!((0 === v))) goto L_12a;
  return undefined;
  return v;
}

// fn g  args=1 vars=1 closure=1 cpool=0 bc=687B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e
// closure: I
function {
  if (((e === "Basic"))) goto L_13;
  if (!((e === "basic"))) goto L_19;
  return "basic";
  if (((e === "Box"))) goto L_2b;
  if (!((e === "box"))) goto L_31;
  return "box";
  if (((e === "Button"))) goto L_43;
  if (!((e === "button"))) goto L_49;
  return "button";
  if (((e === "Card"))) goto L_5b;
  if (!((e === "card"))) goto L_61;
  return "card";
  if (((e === "Caption"))) goto L_73;
  if (!((e === "caption"))) goto L_79;
  return "caption";
  if (((e === "Col"))) goto L_8b;
  if (!((e === "col"))) goto L_91;
  return "col";
  if (((e === "DatePicker"))) goto L_a3;
  if (!((e === "date-picker"))) goto L_a9;
  return "date-picker";
  if (((e === "Divider"))) goto L_bb;
  if (!((e === "divider"))) goto L_c1;
  return "divider";
  if (((e === "Favicon"))) goto L_d3;
  if (!((e === "favicon"))) goto L_d9;
  return "favicon";
  if (((e === "Flow"))) goto L_eb;
  if (!((e === "flow"))) goto L_f1;
  return "flow";
  if (((e === "Grid"))) goto L_103;
  if (!((e === "grid"))) goto L_109;
  return "grid";
  if (((e === "Icon"))) goto L_11b;
  if (!((e === "icon"))) goto L_121;
  return "icon";
  if (((e === "Image"))) goto L_145;
  if (((e === "SearchImage"))) goto L_145;
  if (((e === "search-image"))) goto L_145;
  if (!((e === "image"))) goto L_14b;
  return "image";
  if (((e === "Input"))) goto L_15d;
  if (!((e === "input"))) goto L_163;
  return "input";
  if (((e === "Label"))) goto L_175;
  if (!((e === "label"))) goto L_17b;
  return "label";
  if (((e === "List"))) goto L_18d;
  if (!((e === "list"))) goto L_193;
  return "list";
  if (((e === "Map"))) goto L_1a5;
  if (!((e === "map"))) goto L_1ab;
  return "map";
  if (((e === "Pressable"))) goto L_1bd;
  if (!((e === "pressable"))) goto L_1c3;
  return "pressable";
  if (((e === "RadioGroup"))) goto L_1d5;
  if (!((e === "radio-group"))) goto L_1db;
  return "radio-group";
  if (((e === "Response"))) goto L_1ed;
  if (!((e === "response"))) goto L_1f3;
  return "response";
  if (((e === "Row"))) goto L_205;
  if (!((e === "row"))) goto L_20b;
  return "row";
  if (((e === "Select"))) goto L_21d;
  if (!((e === "select"))) goto L_223;
  return "select";
  if (((e === "Slider"))) goto L_235;
  if (!((e === "slider"))) goto L_23b;
  return "slider";
  if (((e === "ShimmerText"))) goto L_256;
  if (((e === "Text"))) goto L_256;
  if (!((e === "text"))) goto L_25c;
  return "text";
  if (((e === "Textarea"))) goto L_26e;
  if (!((e === "textarea"))) goto L_274;
  return "textarea";
  if (((e === "Title"))) goto L_286;
  if (!((e === "title"))) goto L_28c;
  return "title";
  if (((e === "YouTubeEmbed"))) goto L_29e;
  if (!((e === "iframe"))) goto L_2a4;
  return "iframe";
  if (!((undefined === e))) goto L_2ab;
  return undefined;
  return I(e);
}

// fn m  args=2 vars=2 closure=1 cpool=0 bc=11B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e, t
// closure: x
function {
  if (((0 !== e))) goto L_a;
  return x(t);
}

// fn x  args=1 vars=1 closure=0 cpool=0 bc=19B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e
function {
  if ((("Divider" === e))) goto L_12;
  return ("divider" === e);
}

// fn b  args=1 vars=1 closure=1 cpool=0 bc=43B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e
// closure: g
function {
  if ((("Response" === e))) goto L_2a;
  if ((("response" === e))) goto L_2a;
  if ((("list-item" === e))) goto L_2a;
  return ("response" === g(e));
}

// fn f  args=1 vars=1 closure=0 cpool=0 bc=47B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e
function {
  if (!((undefined !== e))) goto L_2e;
  return (e === e.toLowerCase());
}

// fn L  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e
function {
  if ((("select" === e))) goto L_3e;
  if ((("input" === e))) goto L_3e;
  if ((("date-picker" === e))) goto L_3e;
  if ((("radio-group" === e))) goto L_3e;
  if ((("slider" === e))) goto L_3e;
  return ("textarea" === e);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=87B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e, t
function {
  if (!((0 === t))) goto L_2a;
  goto L_2f;
  // [栈深重同步 3 -> 2]
  return "".concat("-", e.toLowerCase());   // tail call
}

// fn I  args=1 vars=1 closure=0 cpool=3 bc=44B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: e
function {
  return e.replace(new RegExp("[A-Z]"), function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=15 bc=489B file=dil_core/src/layout/DILAutoSpacingAttributes
// args: require, module, exports
// locals: e, t, r, i, n, a, s, c, o, u, l, p, d, v, g, m, x, b, f, L, I
function {
  o = function o;
  u = function u;
  l = function l;
  p = function p;
  d = function d;
  v = function v;
  g = function g;
  m = function m;
  x = function x;
  b = function b;
  f = function f;
  L = function L;
  I = function I;
  let c;
  let s;
  let a;
  let n;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.applyDILAutoSpacingAttributes = undefined;
  exports.resolveDILAutoSpacingMargin = undefined;
  exports.resolveDILAutoSpacingChildMargin = undefined;
  e = require("./DILSpacing");
  t = e.resolveDILSpacingUnits(0.5);
  r = e.resolveDILSpacingUnits(1);
  i = e.resolveDILSpacingUnits(1.5);
  n = e.resolveDILSpacingUnits(2);
  a = e.resolveDILSpacingUnits(3);
  s = e.resolveDILSpacingUnits(4);
  c = e.resolveDILSpacingUnits(6);
  exports.applyDILAutoSpacingAttributes = o;
  exports.resolveDILAutoSpacingMargin = u;
  exports.resolveDILAutoSpacingChildMargin = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/layout/DILAutoSpacingAttributes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
