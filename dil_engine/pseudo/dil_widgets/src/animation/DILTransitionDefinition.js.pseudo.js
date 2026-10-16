// fn i  args=1 vars=1 closure=4 cpool=0 bc=835B file=dil_widgets/src/animation/DILTransitionDefinition
// args: i
// closure: e, t, o, r
function {
  if (!((false !== i))) goto L_342;
  if (!((undefined !== i))) goto L_342;
  if (!(e.isCELMap(i))) goto L_342;
  if (!((undefined === i.rotateY))) goto L_88;
  if (((undefined === i.perspective))) goto L_127;
  if ((t.supports3DTransforms())) goto L_127;
  if ((!e.isCELMap(i.fallback))) goto L_127;
  i = i.fallback;
  i.fallback;
  if (!(("string" == typeof i.timingFunction))) goto L_21c;
  goto L_21d;
  // [栈深重同步 2 -> 1]
  return {rotateY: o(i.rotateY), perspective: r(i.perspective), delay: r(i.delay), duration: r(i.duration), timingFunction: undefined, opacity: r(i.opacity), rotate: o(i.rotate), scale: r(i.scale), scaleX: r(i.scaleX), scaleY: r(i.scaleY), x: o(i.x), y: o(i.y)};
  return;
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_widgets/src/animation/DILTransitionDefinition
// args: e
function {
  if (!(("number" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=25B file=dil_widgets/src/animation/DILTransitionDefinition
// args: e
function {
  if ((("string" == typeof e))) goto L_14;
  if (!(("number" == typeof e))) goto L_18;
  return e;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=111B file=dil_widgets/src/animation/DILTransitionDefinition
// args: require, module, exports
// locals: e, t, i, r, o
function {
  i = function i;
  r = function r;
  o = function o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.parseTransitionDefinition = undefined;
  e = require("cel/src/CELValue");
  t = require("valdi_core/src/supports3DTransforms");
  exports.parseTransitionDefinition = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/animation/DILTransitionDefinition
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
