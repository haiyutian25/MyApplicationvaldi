// fn o  args=1 vars=1 closure=0 cpool=6 bc=94B file=dil_widgets/src/animation/DILControlAnimations
// args: e
function {
  if (!((undefined !== e))) goto L_5b;
  if (!(Number.isFinite(e))) goto L_5b;
  if (!((e <= 80))) goto L_3a;
  return 0.96;
  if (!((e <= 150))) goto L_44;
  return 0.97;
  if (!((e <= 220))) goto L_4e;
  return 0.98;
  if (!((e > 600))) goto L_58;
  return 0.995;
  return 0.985;
  return 0.97;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=7 bc=550B file=dil_widgets/src/animation/DILControlAnimations
// args: require, module, exports
// locals: e, _, t, r, O, o
function {
  o = function o;
  let O;
  let r;
  let t;
  let _;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_CONTROL_CHECKMARK_SHORT_ARM_DELAY_MS = undefined;
  exports.DIL_CONTROL_CHECKMARK_LONG_ARM_DELAY_MS = undefined;
  exports.DIL_CONTROL_STATE_ANIMATION = undefined;
  exports.DIL_CONTROL_SELECTION_ENTER_ANIMATION = undefined;
  exports.DIL_CONTROL_CHECKMARK_ARM_ANIMATION = undefined;
  exports.DIL_CONTROL_CHECKMARK_OPACITY_ANIMATION = undefined;
  exports.resolveDILButtonPressScale = undefined;
  e = require("valdi_core/src/AnimationOptions");
  _ = 150;
  t = 600;
  r = 100;
  O = 150;
  exports.DIL_CONTROL_CHECKMARK_SHORT_ARM_DELAY_MS = 80;
  exports.DIL_CONTROL_CHECKMARK_LONG_ARM_DELAY_MS = 160;
  exports.DIL_CONTROL_STATE_ANIMATION = {beginFromCurrentState: true, curve: e.AnimationCurve.EaseInOut, duration: 0.15};
  exports.DIL_CONTROL_SELECTION_ENTER_ANIMATION = {beginFromCurrentState: true, controlPoints: [0.19, 1, 0.22, 1], duration: 0.6};
  exports.DIL_CONTROL_CHECKMARK_ARM_ANIMATION = {beginFromCurrentState: true, curve: e.AnimationCurve.EaseInOut, duration: 0.1};
  exports.DIL_CONTROL_CHECKMARK_OPACITY_ANIMATION = {beginFromCurrentState: true, curve: e.AnimationCurve.EaseInOut, duration: 0.15};
  exports.resolveDILButtonPressScale = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/animation/DILControlAnimations
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
