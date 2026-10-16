// fn t  args=0 vars=0 closure=1 cpool=0 bc=4B file=dil_widgets/src/widgets/FormRenderState
// closure: e
function {
  return e;
}

// fn r  args=2 vars=3 closure=1 cpool=0 bc=46B file=dil_widgets/src/widgets/FormRenderState
// args: t, r
// locals: o
// closure: e
function {
  let o;
  o = e;
  e = t;
  t;
  try { // catch -> L_1e
  r();
  <?>;
  // gosub (finally 块) 36
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 36
  throw <?>;
  e = o;
  o;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=112B file=dil_widgets/src/widgets/FormRenderState
// args: require, module, exports
// locals: e, t, r
function {
  t = function t;
  r = function r;
  let e;
  e = undefined;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getActiveDILFormRenderState = undefined;
  exports.withDILFormRenderState = undefined;
  exports.getActiveDILFormRenderState = t;
  exports.withDILFormRenderState = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/FormRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
