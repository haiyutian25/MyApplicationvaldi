// fn e  args=2 vars=2 closure=1 cpool=0 bc=127B file=dil_widgets/src/elements_renderer/DILChildCountRenderState
// args: e, r
// closure: t
function {
  if (!((undefined === e.renderState))) goto L_28;
  return e;
  null;
  e;
  return {renderState: e.renderState.withProperty(t, r)};
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=51B file=dil_widgets/src/elements_renderer/DILChildCountRenderState
// args: t
// closure: n
function {
  if (!((n(t) == null))) goto L_b;
  n(t);
  goto L_2c;
  if (!((undefined.count == null))) goto L_32;
  undefined.count;
  return 0;
}

// fn n  args=1 vars=1 closure=1 cpool=0 bc=81B file=dil_widgets/src/elements_renderer/DILChildCountRenderState
// args: e
// closure: t
function {
  if (!((e.renderState == null))) goto L_29;
  e.renderState;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.getProperty(t);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=147B file=dil_widgets/src/elements_renderer/DILChildCountRenderState
// args: require, module, exports
// locals: t, e, r, n
function {
  e = function e;
  r = function r;
  n = function n;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderOptionsWithDILChildCount = undefined;
  exports.getDILParentChildCount = undefined;
  exports.getDILParentChildCountContext = undefined;
  t = Symbol("DILChildCount");
  exports.renderOptionsWithDILChildCount = e;
  exports.getDILParentChildCount = r;
  exports.getDILParentChildCountContext = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILChildCountRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
