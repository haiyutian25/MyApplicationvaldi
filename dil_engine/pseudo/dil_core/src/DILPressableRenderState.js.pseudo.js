// fn t  args=1 vars=1 closure=1 cpool=0 bc=48B file=dil_core/src/DILPressableRenderState
// args: t
// closure: e
function {
  if (!((t == null))) goto L_8;
  t;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.getProperty(e);
}

// fn r  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_core/src/DILPressableRenderState
// args: t, r
// closure: e
function {
  return t.withProperty(e, r);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=122B file=dil_core/src/DILPressableRenderState
// args: require, module, exports
// locals: e, t, r
function {
  t = function t;
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getDILPressableRenderOptions = undefined;
  exports.renderStateWithDILPressableOptions = undefined;
  e = Symbol("DIL pressable render options");
  exports.getDILPressableRenderOptions = t;
  exports.renderStateWithDILPressableOptions = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILPressableRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
