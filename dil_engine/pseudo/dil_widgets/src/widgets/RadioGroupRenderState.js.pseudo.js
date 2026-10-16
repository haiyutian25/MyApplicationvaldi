// fn t  args=0 vars=0 closure=1 cpool=0 bc=4B file=dil_widgets/src/widgets/RadioGroupRenderState
// closure: e
function {
  return e;
}

// fn o  args=2 vars=3 closure=1 cpool=0 bc=46B file=dil_widgets/src/widgets/RadioGroupRenderState
// args: t, o
// locals: r
// closure: e
function {
  let r;
  r = e;
  e = t;
  t;
  try { // catch -> L_1e
  o();
  <?>;
  // gosub (finally 块) 36
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 36
  throw <?>;
  e = r;
  r;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=112B file=dil_widgets/src/widgets/RadioGroupRenderState
// args: require, module, exports
// locals: e, t, o
function {
  t = function t;
  o = function o;
  let e;
  e = undefined;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getActiveDILRadioGroupRenderState = undefined;
  exports.withDILRadioGroupRenderState = undefined;
  exports.getActiveDILRadioGroupRenderState = t;
  exports.withDILRadioGroupRenderState = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/RadioGroupRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
