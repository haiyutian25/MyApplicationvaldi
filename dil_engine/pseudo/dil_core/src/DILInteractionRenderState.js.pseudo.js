// fn e  args=1 vars=1 closure=1 cpool=0 bc=52B file=dil_core/src/DILInteractionRenderState
// args: e
// closure: t
function {
  if (!((e == null))) goto L_b;
  e;
  goto L_32;
  return (true === undefined.getProperty(t));
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_core/src/DILInteractionRenderState
// args: e
// closure: t
function {
  return e.withProperty(t, true);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=122B file=dil_core/src/DILInteractionRenderState
// args: require, module, exports
// locals: t, e, r
function {
  e = function e;
  r = function r;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isDILInteractionCaptured = undefined;
  exports.renderStateWithDILInteractionCaptured = undefined;
  t = Symbol("DIL interaction captured");
  exports.isDILInteractionCaptured = e;
  exports.renderStateWithDILInteractionCaptured = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILInteractionRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
