// fn e  args=1 vars=3 closure=0 cpool=0 bc=97B file=dil_widgets/src/elements_renderer/primitiveChildrenToString
// args: e
// locals: t, r
function {
  let t;
  if (!((0 === e.length))) goto L_a;
  return;
  t = "";
  let r;
  for (const r of e) {
    if (!((null != r))) continue;
    if (!(("boolean" != typeof r))) continue;
    if (!(("string" != typeof r))) goto L_45;
    if (!(("number" != typeof r))) goto L_45;
    return undefined;
    // [栈深重同步 0 -> 3]
    t = (t + String(r));
    (t + String(r));
  }
  return t;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=dil_widgets/src/elements_renderer/primitiveChildrenToString
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.primitiveChildrenToString = undefined;
  exports.primitiveChildrenToString = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/primitiveChildrenToString
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
