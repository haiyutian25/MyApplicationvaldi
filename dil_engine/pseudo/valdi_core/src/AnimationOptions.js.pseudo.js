// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=valdi_core/src/AnimationOptions
// args: e
function {
  e.Linear = "linear";
  e.EaseIn = "easeIn";
  e.EaseOut = "easeOut";
  e.EaseInOut = "easeInOut";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=75B file=valdi_core/src/AnimationOptions
// args: e
function {
  e.SLIDE_IN = {translationX: -1};
  e.SLIDE_OUT = {translationX: 1};
  e.FADE = {opacity: 0};
  e.SCALE_FROM_CENTER = {scaleX: 0, scaleY: 0};
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=4 bc=169B file=valdi_core/src/AnimationOptions
// args: require, module, exports
// locals: e, t
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AnimationCurve = undefined;
  exports.AnimationAppearance = undefined;
  exports.SPRING_DEFAULT_STIFFNESS = undefined;
  exports.SPRING_DEFAULT_DAMPING = undefined;
  if ((e)) goto L_78;
  e = {};
  exports.AnimationCurve = {};
  function <atom:0>({});
  if ((t)) goto L_8e;
  t = {};
  exports.AnimationAppearance = {};
  function <atom:0>({});
  exports.SPRING_DEFAULT_STIFFNESS = 381.47;
  exports.SPRING_DEFAULT_DAMPING = 20.1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/AnimationOptions
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
