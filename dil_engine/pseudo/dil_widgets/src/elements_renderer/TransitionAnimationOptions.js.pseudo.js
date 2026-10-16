// fn e  args=4 vars=9 closure=2 cpool=0 bc=1408B file=dil_widgets/src/elements_renderer/TransitionAnimationOptions
// args: i, n, e, a
// locals: r, s, u, d, l
// closure: o, t
function {
  let l;
  let d;
  let u;
  let s;
  let r;
  if (!((undefined === i))) goto L_1f;
  if (!((undefined === n))) goto L_1f;
  if (!((undefined === e))) goto L_1f;
  return;
  r = o(i, "initial", a);
  s = o(n, "enter", a);
  u = o(e, "exit", a);
  if (((undefined === r))) goto L_54;
  if (((undefined === s))) goto L_54;
  if (!((undefined === u))) goto L_57;
  return;
  if (!((s.opacity == null))) goto L_82;
  s.opacity;
  if (((1 !== 1))) goto L_e3;
  if (!((s.translateX == null))) goto L_b2;
  s.translateX;
  if (((0 !== 0))) goto L_e3;
  if (!((s.translateY == null))) goto L_e2;
  s.translateY;
  if (!((0 !== 0))) goto L_ee;
  a("Transition enter pose must finish at opacity 1 and zero translation in Valdi. Using the default fade.");
  return;
  if (!((s.delay == null))) goto L_119;
  s.delay;
  if (((0 !== 0))) goto L_291;
  if (!((u.delay == null))) goto L_14c;
  u.delay;
  if (((0 !== 0))) goto L_291;
  if (!((undefined !== s.duration))) goto L_1f1;
  if (!((undefined !== u.duration))) goto L_1f1;
  if (((s.duration !== u.duration))) goto L_291;
  if (!((undefined !== s.timingFunction))) goto L_29c;
  if (!((undefined !== u.timingFunction))) goto L_29c;
  if (!((s.timingFunction !== u.timingFunction))) goto L_29c;
  a("Transition requires matching enter/exit timing without delays in Valdi. Using the default fade.");
  return;
  if (!((s.duration == null))) goto L_2f1;
  s.duration;
  if (!((u.duration == null))) goto L_2f1;
  u.duration;
  d = 300;
  if (((undefined !== r.translateX))) goto L_342;
  l = (undefined !== r.translateY);
  if (!((s.timingFunction == null))) goto L_3c4;
  s.timingFunction;
  if (!((u.timingFunction == null))) goto L_3c4;
  u.timingFunction;
  null;
  t.visualTransitionAnimationOptions(d, {timingFunction: "ease-in-out"}, "entered");
  if (!((r.opacity == null))) goto L_429;
  r.opacity;
  if (!((u.opacity == null))) goto L_429;
  u.opacity;
  if (!(l)) goto L_459;
  goto L_47d;
  // [栈深重同步 4 -> 3]
  if (!((u.translateX == null))) goto L_483;
  u.translateX;
  if (!(l)) goto L_4b3;
  goto L_4d7;
  // [栈深重同步 4 -> 3]
  if (!((u.translateY == null))) goto L_4dd;
  u.translateY;
  if (!((u.opacity == null))) goto L_512;
  u.opacity;
  if (!((u.translateX == null))) goto L_541;
  u.translateX;
  if (!((u.translateY == null))) goto L_570;
  u.translateY;
  return {appearanceBehavior: {enterAttributes: {opacity: 0, translationXAbsolute: 0, translationYAbsolute: 0}, exitAttributes: {opacity: 0, translationXAbsolute: 0, translationYAbsolute: 0}}};
}

// fn o  args=3 vars=5 closure=2 cpool=0 bc=636B file=dil_widgets/src/elements_renderer/TransitionAnimationOptions
// args: t, e, o
// locals: a, r
// closure: i, n
function {
  if (!((undefined === t))) goto L_7;
  return {};
  if (!(("object" == typeof t))) goto L_24a;
  if (!((null !== t))) goto L_24a;
  if (!(!Array.isArray(t))) goto L_24a;
  let r;
  let a;
  const _it1 = Object.entries(t);
  goto L_23f;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  a = <value(_it2)>;
  <done(_it2)>;
  r = <value(_it2)>;
  if (!((undefined !== r))) goto L_23f;
  if (!(!i.has(a))) goto L_101;
  o("Unsupported Transition pose property "".concat(e, ".", a, "". Using the default fade."));
  return undefined;
  // [栈深重同步 0 -> 3]
  if (!(("timingFunction" === a))) goto L_182;
  if ((("string" != typeof r))) goto L_145;
  if (!(!n.has(r))) goto L_23f;
  o("Unsupported Transition timing function in "".concat(e, "". Using the default fade."));
  return undefined;
  // [栈深重同步 0 -> 3]
  if ((("number" != typeof r))) goto L_1fd;
  if ((!Number.isFinite(r))) goto L_1fd;
  if ((("duration" === a))) goto L_1d7;
  if (!(("delay" === a))) goto L_1e0;
  if (((r < 0))) goto L_1fd;
  if (!(("opacity" === a))) goto L_23f;
  if (((r < 0))) goto L_1fd;
  if (!((r > 1))) goto L_23f;
  o("Invalid Transition pose property "".concat(e, ".", a, "". Using the default fade."));
  return undefined;
  // [栈深重同步 0 -> 3]
  if (!(<done(<?>)>)) goto L_80;
  <value(<?>)>;
  return t;
  o("Transition prop "".concat(e, "" must be a pose object. Using the default fade."));
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=184B file=dil_widgets/src/elements_renderer/TransitionAnimationOptions
// args: require, module, exports
// locals: t, i, n, e, o
function {
  e = function e;
  o = function o;
  let n;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveTransitionAnimationOptions = undefined;
  t = require("../animation/DILTransitionAttributes");
  i = new Set(["opacity", "translateX", "translateY", "duration", "delay", "timingFunction"]);
  n = new Set(["linear", "ease", "ease-in", "ease-out", "ease-in-out"]);
  exports.resolveTransitionAnimationOptions = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/TransitionAnimationOptions
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
