// fn r  args=1 vars=3 closure=2 cpool=0 bc=296B file=dil_widgets/src/widgets/DILContainerGutter
// args: t
// locals: e, r
// closure: o, e
function {
  let r;
  if (!(("string" == typeof t))) goto L_1f;
  let e;
  e = o(t);
  if (!((undefined !== e))) goto L_1f;
  return e;
  r = e.resolveDILPadding(t);
  if ((("number" == typeof r))) goto L_5e;
  if (!(("string" == typeof r))) goto L_82;
  return {top: r, right: r, bottom: r, left: r};
  return {top: r.top, right: r.right, bottom: r.bottom, left: r.left};
}

// fn o  args=1 vars=2 closure=1 cpool=2 bc=353B file=dil_widgets/src/widgets/DILContainerGutter
// args: t
// locals: e
// closure: n
function {
  let e;
  e = t.trim().split(new RegExp("\\s+"));
  if (((0 === e.length))) goto L_6d;
  if (((e.length > 4))) goto L_6d;
  if (!(!("" === e[0]))) goto L_160;
  if (!(e.every(n))) goto L_160;
  if (!((1 === e.length))) goto L_d2;
  return {top: e[0], right: e[0], bottom: e[0], left: e[0]};
  if (!((2 === e.length))) goto L_104;
  return {top: e[0], right: e[1], bottom: e[0], left: e[1]};
  if (!((3 === e.length))) goto L_136;
  return {top: e[0], right: e[1], bottom: e[2], left: e[1]};
  return {top: e[0], right: e[1], bottom: e[2], left: e[3]};
  return;
}

// fn n  args=1 vars=1 closure=1 cpool=1 bc=50B file=dil_widgets/src/widgets/DILContainerGutter
// args: t
// closure: a
function {
  if ((("0" === t.trim()))) goto L_31;
  return (undefined !== a(t));
}

// fn i  args=1 vars=2 closure=2 cpool=0 bc=22B file=dil_widgets/src/widgets/DILContainerGutter
// args: t
// locals: e
// closure: p, r
function {
  let e;
  e = p(t);
  if (!((undefined === e))) goto L_10;
  return undefined;
  return r(e);
}

// fn u  args=2 vars=4 closure=1 cpool=0 bc=247B file=dil_widgets/src/widgets/DILContainerGutter
// args: t, e
// locals: r, o
// closure: g
function {
  let o;
  let r;
  if (!((undefined !== t.margin))) goto L_2d;
  return;
  r = g(e.left);
  if (!((undefined !== r))) goto L_91;
  if (!((undefined === t.marginLeft))) goto L_91;
  t.marginLeft = r;
  r;
  o = g(e.right);
  if (!((undefined !== o))) goto L_f6;
  if (!((undefined === t.marginRight))) goto L_f6;
  t.marginRight = o;
  o;
  return;
}

// fn l  args=2 vars=2 closure=0 cpool=0 bc=172B file=dil_widgets/src/widgets/DILContainerGutter
// args: t, e
function {
  if (!((undefined === t.paddingLeft))) goto L_55;
  t.paddingLeft = e.left;
  e.left;
  if (!((undefined === t.paddingRight))) goto L_ab;
  t.paddingRight = e.right;
  e.right;
  return;
}

// fn s  args=2 vars=2 closure=0 cpool=0 bc=172B file=dil_widgets/src/widgets/DILContainerGutter
// args: t, e
function {
  if (!((undefined === t.marginLeft))) goto L_55;
  t.marginLeft = e.left;
  e.left;
  if (!((undefined === t.marginRight))) goto L_ab;
  t.marginRight = e.right;
  e.right;
  return;
}

// fn p  args=1 vars=1 closure=2 cpool=0 bc=317B file=dil_widgets/src/widgets/DILContainerGutter
// args: e
// closure: t, f
function {
  if ((("number" == typeof e))) goto L_14;
  if (!(("string" == typeof e))) goto L_18;
  return e;
  if (!(t.isCELMap(e))) goto L_13b;
  return {x: f(e.x), y: f(e.y), top: f(e.top), right: f(e.right), bottom: f(e.bottom), left: f(e.left)};
  return undefined;
}

// fn f  args=1 vars=1 closure=0 cpool=0 bc=25B file=dil_widgets/src/widgets/DILContainerGutter
// args: t
function {
  if ((("number" == typeof t))) goto L_14;
  if (!(("string" == typeof t))) goto L_18;
  return t;
  return;
}

// fn g  args=1 vars=3 closure=1 cpool=1 bc=85B file=dil_widgets/src/widgets/DILContainerGutter
// args: t
// locals: e, r
// closure: a
function {
  let r;
  let e;
  if (!(("number" == typeof t))) goto L_13;
  return -t;
  e = a(t);
  if (!((undefined !== e))) goto L_23;
  return -e;
  r = t.trim();
  if (!(("0" === r))) goto L_53;
  return 0;
  return undefined;
}

// fn a  args=1 vars=2 closure=0 cpool=2 bc=103B file=dil_widgets/src/widgets/DILContainerGutter
// args: t
// locals: e
function {
  let e;
  e = new RegExp("^(-?\\d+(?:\\.\\d+)?)px$").exec(t.trim());
  if (!((null !== e))) goto L_66;
  return Number(e[1]);   // tail call
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=11 bc=235B file=dil_widgets/src/widgets/DILContainerGutter
// args: require, module, exports
// locals: t, e, r, o, n, i, u, l, s, p, f, g, a
function {
  r = function r;
  o = function o;
  n = function n;
  i = function i;
  u = function u;
  l = function l;
  s = function s;
  p = function p;
  f = function f;
  g = function g;
  a = function a;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveDILContainerGutterContext = undefined;
  exports.resolveDILContainerGutterContextFromCELValue = undefined;
  exports.applyDILFlushContainerGutterAttributes = undefined;
  exports.applyDILFlushScrollableContentGutterAttributes = undefined;
  exports.applyDILFlushScrollableContentGutterMarginAttributes = undefined;
  t = require("cel/src/CELValue");
  e = require("dil_core/src/layout/DILSpacing");
  exports.resolveDILContainerGutterContext = r;
  exports.resolveDILContainerGutterContextFromCELValue = i;
  exports.applyDILFlushContainerGutterAttributes = u;
  exports.applyDILFlushScrollableContentGutterAttributes = l;
  exports.applyDILFlushScrollableContentGutterMarginAttributes = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DILContainerGutter
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
