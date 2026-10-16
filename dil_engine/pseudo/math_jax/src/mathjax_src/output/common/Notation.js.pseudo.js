// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=115B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
function {
  return new Array(4).fill((r.thickness + r.padding));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=80B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
function {
  return new Array(4).fill(r.padding);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=80B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
function {
  return new Array(4).fill(r.thickness);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=247B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
function {
  return Math.max(r.padding, (r.thickness * ((r.arrowhead.x + r.arrowhead.dx) + 1)));   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=367B file=math_jax/src/mathjax_src/output/common/Notation
// args: r, o
// locals: e, t
function {
  if (!(r.childNodes[0])) goto L_16d;
  let t;
  let e;
  if (((undefined === undefined))) goto L_7e;
  e = <to_object>(undefined).h;
  t = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_ca;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_34;
  // [栈深重同步 1 -> 0]
  o[2] = Math.max(0, ((r.thickness * r.arrowhead.y) - ((e + t) / 2)));
  o[0] = Math.max(0, ((r.thickness * r.arrowhead.y) - ((e + t) / 2)));
  return o;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=324B file=math_jax/src/mathjax_src/output/common/Notation
// args: r, o
// locals: e
function {
  if (!(r.childNodes[0])) goto L_142;
  let e;
  if (((undefined === undefined))) goto L_58;
  e = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_a3;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_31;
  // [栈深重同步 1 -> 0]
  o[3] = Math.max(0, ((r.thickness * r.arrowhead.y) - (e / 2)));
  o[1] = Math.max(0, ((r.thickness * r.arrowhead.y) - (e / 2)));
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=113B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// closure: exports
function {
  return exports.arrowBBoxW(r, [exports.arrowHead(r), 0, r.padding, 0]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=113B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// closure: exports
function {
  return exports.arrowBBoxW(r, [r.padding, 0, exports.arrowHead(r), 0]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=113B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// closure: exports
function {
  return exports.arrowBBoxHD(r, [0, exports.arrowHead(r), 0, r.padding]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=113B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// closure: exports
function {
  return exports.arrowBBoxHD(r, [0, r.padding, 0, exports.arrowHead(r)]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=115B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// closure: exports
function {
  return exports.arrowBBoxW(r, [exports.arrowHead(r), 0, exports.arrowHead(r), 0]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=115B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// closure: exports
function {
  return exports.arrowBBoxHD(r, [0, exports.arrowHead(r), 0, exports.arrowHead(r)]);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=92B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// locals: o
// closure: e
function {
  let o;
  o = [0, 0, 0, 0];
  o[e] = (r.thickness + r.padding);
  return o;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=57B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// locals: o
// closure: e
function {
  let o;
  o = [0, 0, 0, 0];
  o[e] = r.thickness;
  return o;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=2 bc=76B file=math_jax/src/mathjax_src/output/common/Notation
// args: o
// locals: e
// closure: exports, r
function {
  let e;
  e = exports.sideIndex[o];
  return [o, {renderer: r, bbox: function <atom:0>, border: function <atom:0>}];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=3B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// closure: exports
function {
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=108B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// locals: o, e
// closure: s, a
function {
  let e;
  let o;
  o = (r.thickness + r.padding);
  e = [0, 0, 0, 0];
  e[a] = o;
  e[s] = o;
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=66B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// locals: o
// closure: s, a
function {
  let o;
  o = [0, 0, 0, 0];
  o[a] = r.thickness;
  o[s] = r.thickness;
  return o;
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=2 bc=130B file=math_jax/src/mathjax_src/output/common/Notation
// args: o, e, t
// locals: s, a
// closure: exports, r
function {
  let a;
  let s;
  s = exports.sideIndex[e];
  a = exports.sideIndex[t];
  return [o, {renderer: r, bbox: function <atom:0>, border: function <atom:0>, remove: ((e + " ") + t)}];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=3B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// closure: exports
function {
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=115B file=math_jax/src/mathjax_src/output/common/Notation
// args: o
// locals: e
// closure: r, exports
function {
  let e;
  e = (("mjx-" + o.charAt(0)) + "strike");
  return [(o + "diagonalstrike"), {renderer: r(e), bbox: exports.fullBBox}];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=3B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// closure: exports
function {
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=0 bc=128B file=math_jax/src/mathjax_src/output/common/Notation
// args: o, a
// locals: n, x, d
// closure: e, t, s, r
function {
  let d;
  let x;
  let n;
  if (((undefined === undefined))) goto L_1a;
  const _it1 = undefined;
  <done(_it1)>;
  n = <value(_it1)>;
  <done(_it1)>;
  x = <value(_it1)>;
  goto L_42;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_e;
  // [栈深重同步 1 -> 0]
  d = o.arrow(x, (e * (n - t)), s);
  r(o, d);
  return;
}

// fn <atom:0>  args=1 vars=11 closure=0 cpool=0 bc=797B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// locals: o, e, t, s, a, n, x, d, i, p
function {
  let p;
  let i;
  let d;
  let x;
  let n;
  let a;
  let s;
  let t;
  let e;
  let o;
  if (((undefined === undefined))) goto L_90;
  o = <to_object>(undefined).a;
  e = <to_object>(undefined).x;
  t = <to_object>(undefined).y;
  <to_object>(undefined);
  goto L_b9;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_23;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_d1;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_1a1;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_be;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_1b4;
  const _it2 = undefined;
  <done(_it2)>;
  x = <value(_it2)>;
  <done(_it2)>;
  d = <value(_it2)>;
  goto L_1e6;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_1a6;
  // [栈深重同步 1 -> 0]
  if (!((x > o))) goto L_24b;
  goto L_24c;
  // [栈深重同步 2 -> 1]
  i = (t + 0);
  if (!((x > ((Math.PI / 2) - o)))) goto L_309;
  goto L_30a;
  // [栈深重同步 2 -> 1]
  p = (e + 0);
  return [i, p, i, p];
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=2 bc=120B file=math_jax/src/mathjax_src/output/common/Notation
// args: o
// locals: e, t, s, a
// closure: r, exports
function {
  let a;
  let s;
  let t;
  let e;
  if (((undefined === undefined))) goto L_25;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  goto L_4c;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_11;
  // [栈深重同步 1 -> 0]
  return [(o + "arrow"), {renderer: function <atom:0>, bbox: function <atom:0>, remove: a}];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=3B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// closure: exports
function {
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=9 closure=4 cpool=0 bc=332B file=math_jax/src/mathjax_src/output/common/Notation
// args: o, a
// locals: n, x, d, i, p, w, h
// closure: s, e, t, r
function {
  let h;
  let w;
  let p;
  let i;
  let d;
  let x;
  let n;
  if (((undefined === undefined))) goto L_86;
  n = <to_object>(undefined).w;
  x = <to_object>(undefined).h;
  d = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_af;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_c1;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  p = <value(_it1)>;
  goto L_e5;
  // [栈深重同步 4 -> 1]
  _it1;
  if (!(s)) goto L_d8;
  goto L_b4;
  // [栈深重同步 1 -> 0]
  goto L_b4;
  // [栈深重同步 1 -> 0]
  w = o.getOffset(p);
  h = o.arrow(i, e, t, p, w);
  r(o, h);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=1 bc=149B file=math_jax/src/mathjax_src/output/common/Notation
// args: o
// locals: e, t, s, a
// closure: r, exports
function {
  let a;
  let s;
  let t;
  let e;
  if (((undefined === undefined))) goto L_25;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  goto L_4c;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_11;
  // [栈深重同步 1 -> 0]
  return [(o + "arrow"), {renderer: function <atom:0>, bbox: exports.arrowBBox[o], remove: a}];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=3B file=math_jax/src/mathjax_src/output/common/Notation
// args: r
// closure: exports
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=19 bc=1319B file=math_jax/src/mathjax_src/output/common/Notation
// args: require, module, exports
// locals: r, o, e, t, s, a, n, x
function {
  let x;
  let n;
  let a;
  let s;
  let t;
  let e;
  let o;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ARROWX = undefined;
  exports.ARROWDX = undefined;
  exports.ARROWY = undefined;
  exports.THICKNESS = undefined;
  exports.PADDING = undefined;
  exports.SOLID = undefined;
  exports.sideIndex = undefined;
  exports.sideNames = undefined;
  exports.fullBBox = undefined;
  exports.fullPadding = undefined;
  exports.fullBorder = undefined;
  exports.arrowHead = undefined;
  exports.arrowBBoxHD = undefined;
  exports.arrowBBoxW = undefined;
  exports.arrowDef = undefined;
  exports.diagonalArrowDef = undefined;
  exports.arrowBBox = undefined;
  exports.CommonBorder = undefined;
  exports.CommonBorder2 = undefined;
  exports.CommonDiagonalStrike = undefined;
  exports.CommonDiagonalArrow = undefined;
  exports.CommonArrow = undefined;
  exports.ARROWX = 4;
  exports.ARROWDX = 1;
  exports.ARROWY = 2;
  exports.THICKNESS = 0.067;
  exports.PADDING = 0.2;
  exports.SOLID = (exports.THICKNESS + "em solid");
  exports.sideIndex = {top: 0, right: 1, bottom: 2, left: 3};
  exports.sideNames = Object.keys(exports.sideIndex);
  exports.fullBBox = function <atom:0>;
  exports.fullPadding = function <atom:0>;
  exports.fullBorder = function <atom:0>;
  r = function <atom:0>;
  exports.arrowHead = r;
  o = function <atom:0>;
  exports.arrowBBoxHD = o;
  e = function <atom:0>;
  exports.arrowBBoxW = e;
  exports.arrowDef = {up: [(-Math.PI / 2), false, true, "verticalstrike"], down: [(Math.PI / 2), false, true, "verticakstrike"], right: [0, false, false, "horizontalstrike"], left: [Math.PI, false, false, "horizontalstrike"], updown: [(Math.PI / 2), true, true, "verticalstrike uparrow downarrow"], leftright: [0, true, false, "horizontalstrike leftarrow rightarrow"]};
  exports.diagonalArrowDef = {updiagonal: [-1, 0, false, "updiagonalstrike northeastarrow"], northeast: [-1, 0, false, "updiagonalstrike updiagonalarrow"], southeast: [1, 0, false, "downdiagonalstrike"], northwest: [1, Math.PI, false, "downdiagonalstrike"], southwest: [-1, Math.PI, false, "updiagonalstrike"], northeastsouthwest: [-1, 0, true, "updiagonalstrike northeastarrow updiagonalarrow southwestarrow"], northwestsoutheast: [1, 0, true, "downdiagonalstrike northwestarrow southeastarrow"]};
  exports.arrowBBox = {up: function <atom:0>, down: function <atom:0>, right: function <atom:0>, left: function <atom:0>, updown: function <atom:0>, leftright: function <atom:0>};
  t = function <atom:0>;
  exports.CommonBorder = t;
  s = function <atom:0>;
  exports.CommonBorder2 = s;
  a = function <atom:0>;
  exports.CommonDiagonalStrike = a;
  n = function <atom:0>;
  exports.CommonDiagonalArrow = n;
  x = function <atom:0>;
  exports.CommonArrow = x;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Notation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
