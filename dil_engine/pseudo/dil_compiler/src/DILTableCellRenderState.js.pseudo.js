// fn t  args=1 vars=2 closure=1 cpool=0 bc=62B file=dil_compiler/src/DILTableCellRenderState
// args: t
// locals: r
// closure: e
function {
  let r;
  r = t.getProperty(e);
  if (!(("string" == typeof r))) goto L_3c;
  return r;
  return undefined;
}

// fn r  args=2 vars=2 closure=2 cpool=0 bc=51B file=dil_compiler/src/DILTableCellRenderState
// args: r, l
// closure: t, e
function {
  if (!((t(r) === l))) goto L_9;
  return r;
  return r.withProperty(e, l);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=122B file=dil_compiler/src/DILTableCellRenderState
// args: require, module, exports
// locals: e, t, r
function {
  t = function t;
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getDILTableCellAlignment = undefined;
  exports.renderStateWithDILTableCellParent = undefined;
  e = Symbol("DIL table cell parent");
  exports.getDILTableCellAlignment = t;
  exports.renderStateWithDILTableCellParent = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILTableCellRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
