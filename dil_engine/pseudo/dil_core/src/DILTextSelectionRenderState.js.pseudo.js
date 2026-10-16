// fn r  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_core/src/DILTextSelectionRenderState
// args: t
// closure: e
function {
  return t.withProperty(e, true);   // tail call
}

// fn s  args=1 vars=1 closure=2 cpool=0 bc=53B file=dil_core/src/DILTextSelectionRenderState
// args: r
// closure: t, e
function {
  if (((t > 0))) goto L_34;
  return (true === r.getProperty(e));
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=41B file=dil_core/src/DILTextSelectionRenderState
// args: e
// closure: t
function {
  t = <t_new>;
  (t++);
  try { // catch -> L_19
  e();
  <?>;
  // gosub (finally 块) 31
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 31
  throw <?>;
  t = <t_new>;
  (t--);
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=154B file=dil_core/src/DILTextSelectionRenderState
// args: require, module, exports
// locals: e, t, r, s, o
function {
  r = function r;
  s = function s;
  o = function o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderStateWithDILTextSelectionSuppressed = undefined;
  exports.isDILTextSelectionSuppressed = undefined;
  exports.renderWithDILTextSelectionSuppressed = undefined;
  e = Symbol("DIL text selection suppressed");
  t = 0;
  exports.renderStateWithDILTextSelectionSuppressed = r;
  exports.isDILTextSelectionSuppressed = s;
  exports.renderWithDILTextSelectionSuppressed = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILTextSelectionRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
