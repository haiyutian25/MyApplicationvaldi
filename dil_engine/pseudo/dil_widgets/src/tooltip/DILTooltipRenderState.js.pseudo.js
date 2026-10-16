// fn o  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_widgets/src/tooltip/DILTooltipRenderState
// args: o, e
// closure: t
function {
  return o.withProperty(t, e);   // tail call
}

// fn e  args=1 vars=2 closure=1 cpool=0 bc=62B file=dil_widgets/src/tooltip/DILTooltipRenderState
// args: o
// locals: e
// closure: t
function {
  let e;
  e = o.getProperty(t);
  if (!(("string" == typeof e))) goto L_3c;
  return e;
  return undefined;
}

// fn n  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_widgets/src/tooltip/DILTooltipRenderState
// args: t
// closure: o
function {
  return o(t, undefined);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=147B file=dil_widgets/src/tooltip/DILTooltipRenderState
// args: require, module, exports
// locals: t, o, e, n
function {
  o = function o;
  e = function e;
  n = function n;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderStateWithDILTooltipContent = undefined;
  exports.getDILTooltipContent = undefined;
  exports.renderStateWithoutDILTooltipContent = undefined;
  t = Symbol("DIL tooltip content");
  exports.renderStateWithDILTooltipContent = o;
  exports.getDILTooltipContent = e;
  exports.renderStateWithoutDILTooltipContent = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/tooltip/DILTooltipRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
