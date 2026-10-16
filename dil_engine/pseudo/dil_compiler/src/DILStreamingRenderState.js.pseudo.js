// fn r  args=3 vars=3 closure=2 cpool=0 bc=81B file=dil_compiler/src/DILStreamingRenderState
// args: e, r, i
// closure: n, t
function {
  return e.withProperty(n, r).withProperty(t, i);   // tail call
}

// fn i  args=1 vars=1 closure=2 cpool=0 bc=7B file=dil_compiler/src/DILStreamingRenderState
// args: e
// closure: o, a
function {
  return o(a(e));   // tail call
}

// fn a  args=1 vars=2 closure=2 cpool=0 bc=350B file=dil_compiler/src/DILStreamingRenderState
// args: t
// locals: r
// closure: n, e
function {
  let r;
  r = t.getProperty(n);
  if (((r === e.DILStreamingAnimation.Normal))) goto L_112;
  if (((r === e.DILStreamingAnimation.Snappy))) goto L_112;
  if (!((r === e.DILStreamingAnimation.Neutral))) goto L_118;
  return r;
  return e.DILStreamingAnimation.Disabled;
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=72B file=dil_compiler/src/DILStreamingRenderState
// args: t
// closure: e
function {
  return (t !== e.DILStreamingAnimation.Disabled);
}

// fn m  args=1 vars=1 closure=1 cpool=0 bc=44B file=dil_compiler/src/DILStreamingRenderState
// args: e
// closure: t
function {
  return (true === e.getProperty(t));
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=5 bc=231B file=dil_compiler/src/DILStreamingRenderState
// args: require, module, exports
// locals: e, t, n, r, i, a, o, m
function {
  r = function r;
  i = function i;
  a = function a;
  o = function o;
  m = function m;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderStateWithDILStreaming = undefined;
  exports.isDILStreamingRenderState = undefined;
  exports.getDILStreamingAnimation = undefined;
  exports.isDILStreamingAnimationEnabled = undefined;
  exports.isDILEnhancedStreamingEnabled = undefined;
  e = require("dil_renderer/src/DILRenderer");
  t = Symbol("DILEnhancedStreaming");
  n = Symbol("DILStreamingRenderState");
  exports.renderStateWithDILStreaming = r;
  exports.isDILStreamingRenderState = i;
  exports.getDILStreamingAnimation = a;
  exports.isDILStreamingAnimationEnabled = o;
  exports.isDILEnhancedStreamingEnabled = m;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILStreamingRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
