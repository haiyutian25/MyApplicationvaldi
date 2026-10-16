// fn t  args=1 vars=1 closure=0 cpool=0 bc=42B file=dil_core/src/DILInlineTextContentRenderer
// args: e
function {
  return ("function" == typeof e.getDILInlineTextContent);
}

// fn n  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_core/src/DILInlineTextContentRenderer
// args: t
// closure: e
function {
  return t.withProperty(e, true);   // tail call
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=44B file=dil_core/src/DILInlineTextContentRenderer
// args: t
// closure: e
function {
  return (true === t.getProperty(e));
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=147B file=dil_core/src/DILInlineTextContentRenderer
// args: require, module, exports
// locals: e, t, n, i
function {
  t = function t;
  n = function n;
  i = function i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isDILInlineTextContentRenderer = undefined;
  exports.renderStateWithDILViewBackedInlineText = undefined;
  exports.isRenderingDILViewBackedInlineText = undefined;
  e = Symbol("DIL view-backed inline text");
  exports.isDILInlineTextContentRenderer = t;
  exports.renderStateWithDILViewBackedInlineText = n;
  exports.isRenderingDILViewBackedInlineText = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILInlineTextContentRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
