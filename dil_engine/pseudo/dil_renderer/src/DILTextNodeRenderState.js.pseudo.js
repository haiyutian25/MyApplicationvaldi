// fn t  args=1 vars=2 closure=1 cpool=0 bc=104B file=dil_renderer/src/DILTextNodeRenderState
// args: t
// locals: r
// closure: e
function {
  let r;
  r = t.renderState;
  if (!((undefined === r))) goto L_2f;
  return t;
  null;
  t;
  return {renderState: r.withProperty(e, true)};
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=85B file=dil_renderer/src/DILTextNodeRenderState
// args: t
// closure: e
function {
  if (!((t.renderState == null))) goto L_2c;
  t.renderState;
  goto L_53;
  return (true === undefined.getProperty(e));
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=122B file=dil_renderer/src/DILTextNodeRenderState
// args: require, module, exports
// locals: e, t, r
function {
  t = function t;
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderOptionsWithDILTextNode = undefined;
  exports.isRenderingDILTextNode = undefined;
  e = Symbol("DIL synthetic text node");
  exports.renderOptionsWithDILTextNode = t;
  exports.isRenderingDILTextNode = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILTextNodeRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
