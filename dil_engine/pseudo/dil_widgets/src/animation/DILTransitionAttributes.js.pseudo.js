// fn a  args=4 vars=4 closure=1 cpool=0 bc=77B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t, e, i, r
// closure: u
function {
  u(t.elementRef, e, i, r, !t.usesContainerLayoutTransition);
  return;
}

// fn u  args=5 vars=6 closure=2 cpool=0 bc=900B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t, i, r, n, o
// locals: s
// closure: b, e
function {
  let s;
  s = b(i, r, n, o);
  if (!(("width" === r))) goto L_67;
  goto L_b5;
  // [栈深重同步 1 -> 0]
  t.setAttribute("height", s.height);
  if (!((s.opacity == null))) goto L_107;
  s.opacity;
  t.setAttribute("opacity", 1);
  if (!((s.translationX == null))) goto L_15c;
  s.translationX;
  t.setAttribute("translationX", 0);
  if (!((s.translationY == null))) goto L_1b1;
  s.translationY;
  t.setAttribute("translationY", 0);
  if (!((s.scaleX == null))) goto L_206;
  s.scaleX;
  t.setAttribute("scaleX", 1);
  if (!((s.scaleY == null))) goto L_25b;
  s.scaleY;
  t.setAttribute("scaleY", 1);
  if (!((s.rotation == null))) goto L_2b0;
  s.rotation;
  t.setAttribute("rotation", 0);
  if (!(e.supports3DTransforms())) goto L_383;
  if (!((s.rotationY == null))) goto L_331;
  s.rotationY;
  t.setAttribute("rotationY", 0);
  t.setAttribute("perspective", s.perspective);
  return;
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=86B file=dil_widgets/src/animation/DILTransitionAttributes
// args: e
// closure: t
function {
  return {duration: (e / 1000), curve: t.AnimationCurve.EaseInOut};
}

// fn p  args=3 vars=4 closure=5 cpool=0 bc=106B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t, e, o
// locals: s
// closure: i, y, n, r, l
function {
  let s;
  s = i;
  if (!(y(e))) goto L_23;
  if (!(("exiting" === o))) goto L_1c;
  goto L_1f;
  // [栈深重同步 1 -> 0]
  s = r;
  r;
  if (!((l(e.timingFunction) == null))) goto L_5a;
  l(e.timingFunction);
  return {beginFromCurrentState: true, controlPoints: s, duration: (t / 1000)};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t
function {
  return t.trim();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=5B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t
function {
  return (0 === t.length);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=44B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t
function {
  return !Number.isFinite(t);
}

// fn l  args=1 vars=6 closure=1 cpool=5 bc=448B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t
// locals: e, i, r, n, s
// closure: o
function {
  let s;
  let n;
  let r;
  let i;
  let e;
  if (!((undefined === t))) goto L_15;
  return;
  e = t.trim();
  i = o[e];
  if (!(Array.isArray(i))) goto L_75;
  return i;
  r = new RegExp("^cubic-bezier\\(([^)]+)\\)$").exec(e);
  if (!((null === r))) goto L_aa;
  return;
  n = r[1].split(",").map(function <atom:0>);
  if (!(n.some(function <atom:0>))) goto L_12b;
  return;
  s = n.map(Number);
  if (((4 !== s.length))) goto L_1b8;
  if ((s.some(function <atom:0>))) goto L_1b8;
  if (((s[0] < 0))) goto L_1b8;
  if (((s[0] > 1))) goto L_1b8;
  if (((s[2] < 0))) goto L_1b8;
  if (!((s[2] > 1))) goto L_1bc;
  return undefined;
  return s;
}

// fn d  args=3 vars=4 closure=0 cpool=0 bc=154B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t, e, i
// locals: r
function {
  let r;
  if (!(("delay" === e))) goto L_30;
  goto L_52;
  // [栈深重同步 1 -> 0]
  r = t.duration;
  if (((undefined === r))) goto L_92;
  if ((!Number.isFinite(r))) goto L_92;
  if (!((r < 0))) goto L_96;
  return i;
  return r;
}

// fn v  args=2 vars=2 closure=1 cpool=0 bc=27B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t, e
// closure: d
function {
  if (!((undefined === t))) goto L_7;
  return 0;
  return (d(t, "delay", 0) + d(t, "duration", e));
}

// fn f  args=1 vars=1 closure=0 cpool=0 bc=17B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t
function {
  if (!(("AnimateGroup" === t))) goto L_d;
  return 400;
  return 300;
}

// fn m  args=1 vars=1 closure=0 cpool=0 bc=4B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t
function {
  return 200;
}

// fn b  args=4 vars=5 closure=2 cpool=0 bc=914B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t, e, i, r
// locals: n
// closure: A, x
function {
  let n;
  n = {};
  if (((undefined === t))) goto L_38d;
  if (!(r)) goto L_43;
  if (!(A(i, t))) goto L_43;
  if (!(("width" === e))) goto L_35;
  n.width = 0;
  goto L_43;
  // [栈深重同步 1 -> 0]
  n.height = 0;
  0;
  if (!((undefined !== t.opacity))) goto L_9b;
  n.opacity = t.opacity;
  t.opacity;
  if (!((undefined !== t.x))) goto L_f3;
  n.translationX = t.x;
  t.x;
  if (!((undefined !== t.y))) goto L_14b;
  n.translationY = t.y;
  t.y;
  if (!((undefined !== t.scale))) goto L_1d1;
  n.scaleX = t.scale;
  n.scaleY = t.scale;
  t.scale;
  if (!((undefined !== t.scaleX))) goto L_229;
  n.scaleX = t.scaleX;
  t.scaleX;
  if (!((undefined !== t.scaleY))) goto L_281;
  n.scaleY = t.scaleY;
  t.scaleY;
  if (!((undefined !== t.rotate))) goto L_2db;
  n.rotation = x(t.rotate);
  x(t.rotate);
  if (!((undefined !== t.rotateY))) goto L_335;
  n.rotationY = x(t.rotateY);
  x(t.rotateY);
  if (!((undefined !== t.perspective))) goto L_38d;
  n.perspective = t.perspective;
  t.perspective;
  return n;
}

// fn x  args=1 vars=4 closure=1 cpool=0 bc=421B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t
// locals: e, t#1, i
// closure: s
function {
  let i;
  let e;
  if (!(("number" == typeof t))) goto L_44;
  if (!(Number.isFinite(t))) goto L_42;
  return (t * s);
  return undefined;
  e = t.trim();
  if (!((0 === e.length))) goto L_73;
  return;
  if (!(e.endsWith("rad"))) goto L_109;
  let t#1;
  t#1 = Number(e.slice(0, -3));
  if (!(Number.isFinite(t#1))) goto L_107;
  return t#1;
  return undefined;
  if (!(e.endsWith("deg"))) goto L_168;
  goto L_16b;
  // [栈深重同步 2 -> 1]
  i = Number(e);
  if (!(Number.isFinite(i))) goto L_1a3;
  return (i * s);
  return undefined;
}

// fn y  args=1 vars=1 closure=0 cpool=0 bc=329B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t
function {
  if (((undefined !== t.x))) goto L_148;
  if (((undefined !== t.y))) goto L_148;
  if (((undefined !== t.scale))) goto L_148;
  if (((undefined !== t.scaleX))) goto L_148;
  if (((undefined !== t.scaleY))) goto L_148;
  if (((undefined !== t.rotate))) goto L_148;
  if (((undefined !== t.rotateY))) goto L_148;
  return (undefined !== t.perspective);
}

// fn A  args=2 vars=2 closure=0 cpool=0 bc=26B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t, e
function {
  if ((("initial" === t))) goto L_12;
  if (!(("exiting" === t))) goto L_19;
  return (undefined !== e);
}

// fn Y  args=2 vars=2 closure=0 cpool=0 bc=915B file=dil_widgets/src/animation/DILTransitionAttributes
// args: t, e
function {
  if (!((t == null))) goto L_9;
  t;
  goto L_2a;
  if (!((undefined.opacity == null))) goto L_30;
  undefined.opacity;
  if (!((e == null))) goto L_39;
  e;
  goto L_5a;
  if (!((undefined.opacity == null))) goto L_60;
  undefined.opacity;
  if (!((1 === 1))) goto L_392;
  if (!((t == null))) goto L_71;
  t;
  goto L_92;
  if (!((undefined.x == null))) goto L_98;
  undefined.x;
  if (!((e == null))) goto L_a1;
  e;
  goto L_c2;
  if (!((undefined.x == null))) goto L_c8;
  undefined.x;
  if (!((0 === 0))) goto L_392;
  if (!((t == null))) goto L_d9;
  t;
  goto L_fa;
  if (!((undefined.y == null))) goto L_100;
  undefined.y;
  if (!((e == null))) goto L_109;
  e;
  goto L_12a;
  if (!((undefined.y == null))) goto L_130;
  undefined.y;
  if (!((0 === 0))) goto L_392;
  if (!((t == null))) goto L_141;
  t;
  goto L_162;
  if (!((undefined.rotate == null))) goto L_168;
  undefined.rotate;
  if (!((e == null))) goto L_171;
  e;
  goto L_192;
  if (!((undefined.rotate == null))) goto L_198;
  undefined.rotate;
  if (!((0 === 0))) goto L_392;
  if (!((t == null))) goto L_1a9;
  t;
  goto L_1ca;
  if (!((undefined.rotateY == null))) goto L_1d0;
  undefined.rotateY;
  if (!((e == null))) goto L_1d9;
  e;
  goto L_1fa;
  if (!((undefined.rotateY == null))) goto L_200;
  undefined.rotateY;
  if (!((0 === 0))) goto L_392;
  if (!((t == null))) goto L_211;
  t;
  goto L_232;
  if (!((e == null))) goto L_23b;
  e;
  goto L_25c;
  if (!((undefined.perspective === undefined.perspective))) goto L_392;
  if (!((t == null))) goto L_26d;
  t;
  goto L_28e;
  if (!((undefined.scale == null))) goto L_294;
  undefined.scale;
  if (!((e == null))) goto L_29d;
  e;
  goto L_2be;
  if (!((undefined.scale == null))) goto L_2c4;
  undefined.scale;
  if (!((1 === 1))) goto L_392;
  if (!((t == null))) goto L_2d5;
  t;
  goto L_2f6;
  if (!((undefined.scaleX == null))) goto L_2fc;
  undefined.scaleX;
  if (!((e == null))) goto L_305;
  e;
  goto L_326;
  if (!((undefined.scaleX == null))) goto L_32c;
  undefined.scaleX;
  if (!((1 === 1))) goto L_392;
  if (!((t == null))) goto L_33a;
  t;
  goto L_35b;
  if (!((undefined.scaleY == null))) goto L_361;
  undefined.scaleY;
  if (!((e == null))) goto L_36a;
  e;
  goto L_38b;
  if (!((undefined.scaleY == null))) goto L_391;
  undefined.scaleY;
  return (1 === 1);
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=25 bc=496B file=dil_widgets/src/animation/DILTransitionAttributes
// args: require, module, exports
// locals: t, e, i, r, n, o, s, a, u, c, p, l, d, v, f, m, b, x, y, A, Y
function {
  a = function a;
  u = function u;
  c = function c;
  p = function p;
  l = function l;
  d = function d;
  v = function v;
  f = function f;
  m = function m;
  b = function b;
  x = function x;
  y = function y;
  A = function A;
  Y = function Y;
  let s;
  let o;
  let n;
  let r;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.applyTransitionAttributes = undefined;
  exports.applyTransitionAttributesToRef = undefined;
  exports.animationOptions = undefined;
  exports.visualTransitionAnimationOptions = undefined;
  exports.readTransitionNumber = undefined;
  exports.readOptionalTransitionDuration = undefined;
  exports.defaultEnterDurationMs = undefined;
  exports.defaultExitDurationMs = undefined;
  exports.haveSameVisualTransition = undefined;
  t = require("valdi_core/src/AnimationOptions");
  e = require("valdi_core/src/supports3DTransforms");
  i = [0.25, 0.1, 0.25, 1];
  r = [0.19, 1, 0.22, 1];
  n = [0.8, 0, 0.4, 1];
  o = {linear: [0, 0, 1, 1], ease: i, ease-in: [0.42, 0, 1, 1], ease-out: [0, 0, 0.58, 1], ease-in-out: [0.42, 0, 0.58, 1]};
  s = (Math.PI / 180);
  exports.applyTransitionAttributes = a;
  exports.applyTransitionAttributesToRef = u;
  exports.animationOptions = c;
  exports.visualTransitionAnimationOptions = p;
  exports.readTransitionNumber = d;
  exports.readOptionalTransitionDuration = v;
  exports.defaultEnterDurationMs = f;
  exports.defaultExitDurationMs = m;
  exports.haveSameVisualTransition = Y;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/animation/DILTransitionAttributes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
