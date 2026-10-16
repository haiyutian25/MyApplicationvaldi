// fn u  args=2 vars=4 closure=3 cpool=0 bc=236B file=dil_core/src/layout/DILV2AutoSpacing
// args: i, n
// locals: r, o
// closure: t, e, s
function {
  let o;
  let r;
  r = new t.DILRenderChildCounter();
  o = e.renderStateWithDILAutoSpacing(r.insertInRenderState(i), s);
  r.pushFrame();
  try { // catch -> L_bc
  n(o);
  <?>;
  // gosub (finally 块) 194
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 194
  throw <?>;
  r.popFrame();
  // ret (finally 块) 
  return;
}

// fn d  args=3 vars=9 closure=7 cpool=0 bc=655B file=dil_core/src/layout/DILV2AutoSpacing
// args: i, n, a
// locals: c, s, l, u, d, p
// closure: t, D, e, S, f, o, r
function {
  let p;
  let d;
  let u;
  let l;
  let s;
  let c;
  c = a;
  if (!((undefined === c))) goto L_1c;
  return;
  s = t.DILRenderChildCounter.fromRenderState(c);
  if (!((undefined === s))) goto L_70;
  return;
  l = s.beginComponent(D(i, n));
  if (!((undefined === l))) goto L_a4;
  return;
  u = e.getDILAutoSpacingContext(c);
  if ((e.isDILAutoSpacingDisabled(c))) goto L_131;
  if (!((u == null))) goto L_109;
  u;
  goto L_12a;
  if (!(("list-item" === undefined.containerName))) goto L_136;
  if (!(S(i, n))) goto L_136;
  goto L_139;
  // [栈深重同步 1 -> 0]
  d = u;
  if (!((d == null))) goto L_14b;
  d;
  goto L_16c;
  if (!(("column" === undefined.direction))) goto L_1d2;
  if (!(("text" === i))) goto L_1d2;
  if (!(("sm" === n.size))) goto L_1d2;
  p = ("title" === l.previousName);
  if (!((undefined === d))) goto L_1df;
  goto L_1e9;
  // [栈深重同步 2 -> 1]
  if (!((d == null))) goto L_201;
  d;
  goto L_222;
  if (!((undefined === d))) goto L_231;
  goto L_289;
  // [栈深重同步 2 -> 1]
  if (!(p)) goto L_25e;
  goto L_289;
  // [栈深重同步 2 -> 1]
  return {autoSpacing: f(d, l), counter: s, direction: undefined.direction, margin: r.resolveDILAutoSpacingChildMargin(d, l)};
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=79B file=dil_core/src/layout/DILV2AutoSpacing
// args: e
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_4e;
  undefined.counter.popFrame();
  return;
}

// fn g  args=3 vars=13 closure=6 cpool=0 bc=868B file=dil_core/src/layout/DILV2AutoSpacing
// args: t, n, r
// locals: o, c, s, l, u, d, p, g, v, f
// closure: e, h, m, a, i, L
function {
  let f;
  let v;
  let g;
  let p;
  let d;
  let u;
  let l;
  let s;
  let c;
  let o;
  o = r.renderState;
  if (!((undefined === o))) goto L_4a;
  return r;
  if ((e.isDILAutoSpacingDisabled(o))) goto L_a3;
  if (!((n == null))) goto L_81;
  n;
  goto L_a2;
  c = (true === undefined.disableAutoSpacing);
  s = h(t, n);
  if (!((undefined === s))) goto L_b5;
  goto L_e0;
  // [栈深重同步 1 -> 0]
  l = e.renderStateWithDILFlexDirection(o, s);
  if (!((undefined === s))) goto L_ed;
  goto L_118;
  // [栈深重同步 1 -> 0]
  u = e.renderStateWithDILFlexibleParent(l, m(n));
  if (!((undefined === s))) goto L_127;
  goto L_1a7;
  // [栈深重同步 1 -> 0]
  if (!((n == null))) goto L_15c;
  n;
  goto L_17d;
  if (!(("string" == typeof undefined.align))) goto L_1a5;
  goto L_1a6;
  // [栈深重同步 3 -> 2]
  d = e.renderStateWithDILFlexAlignment(u, undefined);
  if (!((n == null))) goto L_1b2;
  n;
  goto L_1d3;
  p = undefined.aspectRatio;
  if ((("string" == typeof p))) goto L_1ed;
  if (!(("number" == typeof p))) goto L_221;
  if (!((a.resolveDILAspectRatio(p) == null))) goto L_21f;
  a.resolveDILAspectRatio(p);
  g = (0 > 0);
  if (!((undefined === s))) goto L_22f;
  goto L_25a;
  // [栈深重同步 1 -> 0]
  v = e.renderStateWithDILAspectRatio(d, g);
  if (!(c)) goto L_2d7;
  goto L_2dd;
  // [栈深重同步 4 -> 3]
  if (!(("table-cell" === t))) goto L_345;
  if (!((n == null))) goto L_2f5;
  n;
  goto L_316;
  if (!(("string" == typeof undefined.align))) goto L_33e;
  goto L_346;
  // [栈深重同步 3 -> 2]
  goto L_346;
  // [栈深重同步 3 -> 2]
  f = i.renderStateWithDILTableCellParent(e.renderStateWithDILAutoSpacing(e.renderStateWithDILAutoSpacingDisabled(v, c), L(t, n)), undefined);
  if (!((f === o))) goto L_354;
  return r;
  null;
  r;
  return {renderState: f};
}

// fn m  args=1 vars=2 closure=1 cpool=0 bc=164B file=dil_core/src/layout/DILV2AutoSpacing
// args: e
// locals: t
// closure: a
function {
  let t;
  if (!((e == null))) goto L_c;
  e;
  goto L_2d;
  t = undefined.flex;
  if ((("number" == typeof t))) goto L_46;
  if (!(("string" == typeof t))) goto L_a3;
  if (!((a.resolveDILFlex(t) == null))) goto L_7a;
  a.resolveDILFlex(t);
  goto L_9b;
  if (!((undefined.shrink == null))) goto L_a1;
  undefined.shrink;
  return (0 > 0);
}

// fn v  args=2 vars=4 closure=1 cpool=0 bc=210B file=dil_core/src/layout/DILV2AutoSpacing
// args: e, i
// locals: n, r
// closure: t
function {
  let r;
  let n;
  n = e;
  if (!((undefined === n))) goto L_12;
  goto L_5d;
  // [栈深重同步 1 -> 0]
  r = t.DILRenderChildCounter.fromRenderState(n);
  if (!((undefined !== r))) goto L_ce;
  r.pushFrame();
  try { // catch -> L_9e
  i();
  <?>;
  // gosub (finally 块) 164
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 164
  throw <?>;
  r.popFrame();
  // ret (finally 块) 
  return;
  i();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=14B file=dil_core/src/layout/DILV2AutoSpacing
// closure: e, t
function {
  null;
  e;
  null;
  t;
  return {};
}

// fn f  args=2 vars=2 closure=1 cpool=1 bc=415B file=dil_core/src/layout/DILV2AutoSpacing
// args: e, t
// closure: n
function {
  return n.remember(function <atom:0>, e.direction, e.spacing, e.align, e.containerName, t.index, t.name, t.pill, t.variant, t.previousName, t.previousPill, t.previousVariant);   // tail call
}

// fn D  args=2 vars=2 closure=1 cpool=0 bc=158B file=dil_core/src/layout/DILV2AutoSpacing
// args: e, t
// closure: I
function {
  if (!(("badge" === e))) goto L_39;
  goto L_3a;
  // [栈深重同步 2 -> 1]
  if (!(("button" === e))) goto L_97;
  if (!(("string" == typeof t.variant))) goto L_97;
  goto L_98;
  // [栈深重同步 2 -> 1]
  return {name: I(e), pill: undefined, variant: undefined};
}

// fn I  args=1 vars=1 closure=0 cpool=0 bc=45B file=dil_core/src/layout/DILV2AutoSpacing
// args: e
function {
  if (((e === "bold"))) goto L_25;
  if (((e === "italic"))) goto L_25;
  if (((e === "strikethrough"))) goto L_25;
  if (!((e === "underline"))) goto L_2b;
  return "text";
  return e;
}

// fn L  args=2 vars=3 closure=5 cpool=0 bc=238B file=dil_core/src/layout/DILV2AutoSpacing
// args: e, t
// locals: i
// closure: A, b, l, h, c
function {
  let i;
  if (((undefined === e))) goto L_5c;
  if (!(!A(e))) goto L_19;
  if ((("list-item" !== e))) goto L_5c;
  if (!(("pressable" === e))) goto L_55;
  if (!((t == null))) goto L_33;
  t;
  goto L_54;
  if (((true === undefined.inline))) goto L_5c;
  if (!(b(t))) goto L_5f;
  return;
  if (!(("list-item" === e))) goto L_6c;
  return l;
  i = h(e, t);
  if (!((undefined === i))) goto L_79;
  return;
  if (!((t == null))) goto L_88;
  t;
  goto L_a9;
  if (!(("string" == typeof undefined.align))) goto L_d1;
  goto L_d2;
  // [栈深重同步 2 -> 1]
  return {align: undefined, containerName: e, direction: i, spacing: c};
}

// fn S  args=2 vars=2 closure=0 cpool=0 bc=150B file=dil_core/src/layout/DILV2AutoSpacing
// args: e, t
function {
  if (!((true === t.inline))) goto L_2a;
  return true;
  if (!((e === "popover"))) goto L_5a;
  return (true !== t.block);
  if (((e === "bold"))) goto L_90;
  if (((e === "code"))) goto L_90;
  if (((e === "italic"))) goto L_90;
  if (((e === "link"))) goto L_90;
  if (((e === "strikethrough"))) goto L_90;
  if (!((e === "underline"))) goto L_93;
  return true;
  return false;
}

// fn h  args=2 vars=2 closure=1 cpool=0 bc=93B file=dil_core/src/layout/DILV2AutoSpacing
// args: e, t
// closure: A
function {
  if (!((undefined !== e))) goto L_5c;
  if (!(A(e))) goto L_5c;
  if ((("row" === e))) goto L_4e;
  if (!(("card" !== e))) goto L_56;
  if (!((t == null))) goto L_2c;
  t;
  goto L_4d;
  if (!(("row" === undefined.direction))) goto L_56;
  return "row";
  return "column";
  return;
}

// fn b  args=1 vars=1 closure=0 cpool=0 bc=264B file=dil_core/src/layout/DILV2AutoSpacing
// args: e
function {
  if (!((e == null))) goto L_a;
  e;
  goto L_2b;
  if (!((undefined !== undefined.gap))) goto L_54;
  if (((null !== e.gap))) goto L_107;
  if (!((e == null))) goto L_65;
  e;
  goto L_86;
  if (!((undefined !== undefined.columnGap))) goto L_af;
  if (((null !== e.columnGap))) goto L_107;
  if (!((e == null))) goto L_bd;
  e;
  goto L_de;
  if (!((undefined !== undefined.rowGap))) goto L_107;
  return (null !== e.rowGap);
}

// fn A  args=1 vars=1 closure=0 cpool=0 bc=88B file=dil_core/src/layout/DILV2AutoSpacing
// args: e
function {
  if (((e === "box"))) goto L_52;
  if (((e === "card"))) goto L_52;
  if (((e === "carousel-item"))) goto L_52;
  if (((e === "col"))) goto L_52;
  if (((e === "flow-item"))) goto L_52;
  if (((e === "form"))) goto L_52;
  if (((e === "grid-item"))) goto L_52;
  if (((e === "pressable"))) goto L_52;
  if (!((e === "row"))) goto L_55;
  return true;
  return false;
}

// fn <atom:0>  args=3 vars=27 closure=0 cpool=14 bc=444B file=dil_core/src/layout/DILV2AutoSpacing
// args: require, module, exports
// locals: e, t, i, n, r, o, a, c, s, l, u, d, p, g, m, v, f, D, I, L, S, h, b, A
function {
  u = function u;
  d = function d;
  p = function p;
  g = function g;
  m = function m;
  v = function v;
  f = function f;
  D = function D;
  I = function I;
  L = function L;
  S = function S;
  h = function h;
  b = function b;
  A = function A;
  let l;
  let s;
  let c;
  let a;
  let o;
  let r;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.runWithDILV2ResponseAutoSpacing = undefined;
  exports.beginDILV2AutoSpacingElement = undefined;
  exports.endDILV2AutoSpacingElement = undefined;
  exports.resolveDILV2ChildRenderOptions = undefined;
  exports.runWithDILV2ChildRenderFrame = undefined;
  e = require("dil_compiler/src/DILAutoSpacingRenderState");
  t = require("dil_compiler/src/DILRenderChildState");
  i = require("dil_compiler/src/DILTableCellRenderState");
  n = require("valdi_core/src/Remember");
  r = require("./DILAutoSpacingAttributes");
  o = require("./DILSpacing");
  a = require("./DILLayout");
  c = o.resolveDILSpacingUnits(o.DIL_DEFAULT_CONTAINER_GAP);
  s = {containerName: "Response", direction: "column", spacing: c};
  null;
  s;
  l = {containerName: "list-item"};
  exports.runWithDILV2ResponseAutoSpacing = u;
  exports.beginDILV2AutoSpacingElement = d;
  exports.endDILV2AutoSpacingElement = p;
  exports.resolveDILV2ChildRenderOptions = g;
  exports.runWithDILV2ChildRenderFrame = v;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/layout/DILV2AutoSpacing
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
