// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=50B file=dil_widgets/src/widgets/ImagePresentation
// args: e
function {
  if (!(Number.isFinite(e))) goto L_31;
  return (e > 0);
}

// fn e  args=3 vars=9 closure=0 cpool=1 bc=574B file=dil_widgets/src/widgets/ImagePresentation
// args: e, t, r
// locals: i, o, s, n, p, a
function {
  let a;
  let p;
  let n;
  let s;
  let o;
  let i;
  if (!(!e)) goto L_17;
  return;
  i = e.aspect_ratio;
  o = e.placement;
  if (!((t == null))) goto L_66;
  t;
  s = i;
  if ((!o)) goto L_187;
  if ((![i, s, o.width, o.height].every(function <atom:0>))) goto L_187;
  if (!(![o.left, o.top].every(Number.isFinite))) goto L_18a;
  return;
  if (!(("cover" === r))) goto L_1bb;
  goto L_1e1;
  // [栈深重同步 1 -> 0]
  n = Math.min;
  p = (100 * n(1, (i / s)));
  a = (100 * n(1, (s / i)));
  return {viewport: {left: ((100 - p) / 2), top: ((100 - a) / 2), width: p, height: a}, image: o};
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=dil_widgets/src/widgets/ImagePresentation
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveImageCrop = undefined;
  exports.resolveImageCrop = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/ImagePresentation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
