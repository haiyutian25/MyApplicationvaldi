// fn <atom:0>  args=2 vars=8 closure=0 cpool=0 bc=550B file=valdi_core/src/utils/RenderedElementUtils
// args: t, e
// locals: n, r, e#1, o, i, f
function {
  let r;
  let n;
  n = e;
  r = {x: 0, y: 0};
  if (!(n)) goto L_225;
  let f;
  let i;
  let o;
  let e#1;
  if (!((n == t))) goto L_35;
  return r;
  if (!((n.getAttribute("contentOffsetX") == null))) goto L_67;
  n.getAttribute("contentOffsetX");
  e#1 = 0;
  if (!((n.getAttribute("contentOffsetY") == null))) goto L_9a;
  n.getAttribute("contentOffsetY");
  o = 0;
  if (!((n.getAttribute("translationX") == null))) goto L_cd;
  n.getAttribute("translationX");
  i = 0;
  if (!((n.getAttribute("translationY") == null))) goto L_101;
  n.getAttribute("translationY");
  f = 0;
  r.x = (r.x + ((n.frame.x - e#1) + i));
  r.y = (r.y + ((n.frame.y - o) + f));
  n = n.parent;
  n.parent;
  goto L_16;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=225B file=valdi_core/src/utils/RenderedElementUtils
// args: t, e
function {
  if (((e.x > t.width))) goto L_8e;
  if (!(!(e.y > t.height))) goto L_e0;
  if (((e.x < 0))) goto L_df;
  return !(e.y < 0);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=valdi_core/src/utils/RenderedElementUtils
// args: t
function {
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=valdi_core/src/utils/RenderedElementUtils
// args: t
function {
  return t;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=98B file=valdi_core/src/utils/RenderedElementUtils
// args: t
// locals: e
function {
  let e;
  e = t;
  if (!((e == null))) goto L_10;
  e;
  goto L_31;
  if (!(undefined.parent)) goto L_5e;
  e = e.parent;
  e.parent;
  goto L_5;
  return e;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=193B file=valdi_core/src/utils/RenderedElementUtils
// args: t
// locals: e, n
function {
  let n;
  let e;
  e = undefined;
  n = t;
  if (!(n)) goto L_bd;
  if (!((n.frame == null))) goto L_3e;
  n.frame;
  goto L_5f;
  if (!(undefined.width)) goto L_6a;
  e = n;
  n;
  if (!(n.parent)) goto L_bd;
  n = n.parent;
  n.parent;
  goto L_a;
  return e;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=609B file=valdi_core/src/utils/RenderedElementUtils
// args: t
// locals: e, n, r, o, i, f, a
function {
  let n;
  let e;
  e = {x: 0, y: 0};
  n = t;
  if (!(n)) goto L_25d;
  if (!(n.frame)) goto L_25d;
  let a;
  let f;
  let i;
  let o;
  let r;
  r = (n === t);
  if (!(r)) goto L_64;
  goto L_96;
  // [栈深重同步 1 -> 0]
  if (!((n.getAttribute("contentOffsetX") == null))) goto L_96;
  n.getAttribute("contentOffsetX");
  o = 0;
  if (!(r)) goto L_9f;
  goto L_d1;
  // [栈深重同步 1 -> 0]
  if (!((n.getAttribute("contentOffsetY") == null))) goto L_d1;
  n.getAttribute("contentOffsetY");
  i = 0;
  if (!((n.getAttribute("translationX") == null))) goto L_105;
  n.getAttribute("translationX");
  f = 0;
  if (!((n.getAttribute("translationY") == null))) goto L_139;
  n.getAttribute("translationY");
  a = 0;
  e.x = (e.x + ((n.frame.x - o) + f));
  e.y = (e.y + ((n.frame.y - i) + a));
  n = n.parent;
  n.parent;
  goto L_16;
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=7 bc=85B file=valdi_core/src/utils/RenderedElementUtils
// args: t
function {
  t.relativePositionTo = function <atom:0>;
  t.frameContainsPosition = function <atom:0>;
  t.framePosition = function <atom:0>;
  t.frameSize = function <atom:0>;
  t.rootElement = function <atom:0>;
  t.rootElementWithFrame = function <atom:0>;
  t.absolutePosition = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=89B file=valdi_core/src/utils/RenderedElementUtils
// args: require, module, exports
// locals: t
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RenderedElementUtils = undefined;
  if ((t)) goto L_57;
  t = {};
  exports.RenderedElementUtils = {};
  function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/RenderedElementUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
