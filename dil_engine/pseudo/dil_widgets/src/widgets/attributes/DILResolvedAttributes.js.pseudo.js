// fn e  args=2 vars=4 closure=0 cpool=0 bc=49B file=dil_widgets/src/widgets/attributes/DILResolvedAttributes
// args: e, t
// locals: o, s
function {
  let o;
  o = e;
  if (!((undefined !== t))) goto L_2f;
  let s;
  for (const s of t) {
    if (!((undefined === o[s]))) goto L_29;
    o[s] = undefined;
    undefined;
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return e;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=dil_widgets/src/widgets/attributes/DILResolvedAttributes
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.completeDILResolvedAttributes = undefined;
  exports.completeDILResolvedAttributes = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/attributes/DILResolvedAttributes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
