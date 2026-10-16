// fn a  args=0 vars=0 closure=4 cpool=0 bc=160B file=oai_ui/src/animation/OAIControlAnimations
// closure: t, r, i, e
function {
  if (!(t.Device.isAndroid())) goto L_4e;
  return r;
  if (!(t.Device.isIOS())) goto L_9c;
  return i;
  return e;
}

// fn c  args=0 vars=0 closure=4 cpool=0 bc=160B file=oai_ui/src/animation/OAIControlAnimations
// closure: t, n, s, o
function {
  if (!(t.Device.isAndroid())) goto L_4e;
  return n;
  if (!(t.Device.isIOS())) goto L_9c;
  return s;
  return o;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=16 bc=316B file=oai_ui/src/animation/OAIControlAnimations
// args: require, module, exports
// locals: t, e, o, r, n, i, s, a, c
function {
  a = function a;
  c = function c;
  let s;
  let i;
  let n;
  let r;
  let o;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveOAIControlStateAnimation = undefined;
  exports.resolveOAISelectionIndicatorAnimation = undefined;
  t = require("valdi_core/src/Device");
  e = {beginFromCurrentState: true, controlPoints: [0.19, 1, 0.22, 1], duration: 0.24};
  o = {beginFromCurrentState: true, controlPoints: [0.19, 1, 0.22, 1], duration: 0.3};
  r = {beginFromCurrentState: true, controlPoints: [0.2, 0, 0, 1], duration: 0.16};
  n = {beginFromCurrentState: true, controlPoints: [0.2, 0, 0, 1], duration: 0.22};
  i = {beginFromCurrentState: true, controlPoints: [0.25, 0.1, 0.25, 1], duration: 0.24};
  s = {beginFromCurrentState: true, damping: 48, stiffness: 650};
  exports.resolveOAIControlStateAnimation = a;
  exports.resolveOAISelectionIndicatorAnimation = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/animation/OAIControlAnimations
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
