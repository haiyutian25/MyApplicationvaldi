// fn t  args=1 vars=2 closure=2 cpool=0 bc=140B file=dil_widgets/src/elements_renderer/DILImageFrameRenderState
// args: t
// locals: n
// closure: e, r
function {
  let n;
  if (!((t.renderState == null))) goto L_52;
  t.renderState;
  n = new e.DILRenderState();
  null;
  t;
  return {renderState: n.withProperty(r, true)};
}

// fn n  args=1 vars=1 closure=1 cpool=0 bc=85B file=dil_widgets/src/elements_renderer/DILImageFrameRenderState
// args: e
// closure: r
function {
  if (!((e.renderState == null))) goto L_2c;
  e.renderState;
  goto L_53;
  return (true === undefined.getProperty(r));
}

// fn o  args=1 vars=2 closure=2 cpool=0 bc=108B file=dil_widgets/src/elements_renderer/DILImageFrameRenderState
// args: e
// locals: t
// closure: n, r
function {
  let t;
  t = e.renderState;
  if (!((undefined !== t))) goto L_6a;
  if (!(n(e))) goto L_6a;
  null;
  e;
  return {renderState: t.withProperty(r, undefined)};
  return e;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=160B file=dil_widgets/src/elements_renderer/DILImageFrameRenderState
// args: require, module, exports
// locals: e, r, t, n, o
function {
  t = function t;
  n = function n;
  o = function o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderOptionsWithDILImageFrame = undefined;
  exports.imageFillsDILFrame = undefined;
  exports.renderOptionsWithoutDILImageFrame = undefined;
  e = require("dil_compiler/src/DILRenderState");
  r = Symbol("DIL_IMAGE_FILLS_FRAME");
  exports.renderOptionsWithDILImageFrame = t;
  exports.imageFillsDILFrame = n;
  exports.renderOptionsWithoutDILImageFrame = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILImageFrameRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
