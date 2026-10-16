// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=12B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t, e, r
function {
  return [0, (o - r), e, (o - r)];
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=13B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t, e, r
function {
  return [(e - r), -t, (e - r), o];
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=12B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t, e, r
function {
  return [0, (r - t), e, (r - t)];
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=9B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t, e, r
function {
  return [r, -t, r, o];
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=13B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t, e, r
function {
  return [(e / 2), o, (e / 2), -t];
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=16B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t, e, r
function {
  return [0, ((o - t) / 2), e, ((o - t) / 2)];
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t, e, r
function {
  return [r, (r - t), (e - r), (o - r)];
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t, e, r
function {
  return [r, (o - r), (e - r), (r - t)];
}

// fn <atom:0>  args=3 vars=10 closure=1 cpool=0 bc=319B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t, e
// locals: o#1, t#1, e#1, r, n, a, p
// closure: exports
function {
  let e#1;
  let t#1;
  let o#1;
  o#1 = o;
  t#1 = t;
  if (!((e === undefined))) goto L_15;
  e;
  e = "";
  e#1 = "";
  let p;
  let a;
  let n;
  let r;
  if (((undefined === undefined))) goto L_96;
  r = <to_object>(undefined).h;
  n = <to_object>(undefined).d;
  a = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_bf;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_27;
  // [栈深重同步 1 -> 0]
  p = (o.thickness / 2);
  return exports.lineOffset(exports.computeLineData[t].call(exports.computeLineData, r, n, a, p), o, e);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=108B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t, e
// locals: r
function {
  if (!(e)) goto L_6a;
  let r;
  r = t.getOffset(e);
  if (!(r)) goto L_69;
  if (!(("X" === e))) goto L_54;
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] - r);
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] - r);
  goto L_69;
  // [栈深重同步 1 -> 0]
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] - r);
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] - r);
  (<dup2#2>[<dup2#3>] - r);
  return o;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=189B file=math_jax/src/mathjax_src/output/svg/Notation
// args: e, r
// locals: n
// closure: exports, o, t
function {
  let n;
  n = e.line(exports.lineData(e, o, t));
  e.adaptor.append(e.dom[0], n);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=1 bc=20B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t
// locals: o#1, t#1
// closure: exports
function {
  let t#1;
  let o#1;
  o#1 = o;
  if (!((t === undefined))) goto L_10;
  t;
  t = "";
  t#1 = "";
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=181B file=math_jax/src/mathjax_src/output/svg/Notation
// args: t, e
// closure: exports, o
function {
  t.adaptor.append(t.dom[0], t.line(exports.lineData(t, o)));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=45B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o
// closure: exports, t
function {
  return t.CommonBorder(function <atom:0>)(o);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=362B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t
// closure: exports, e, r
function {
  o.adaptor.append(o.dom[0], o.line(exports.lineData(o, e)));
  o.adaptor.append(o.dom[0], o.line(exports.lineData(o, r)));
  return;
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=1 bc=47B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, e, r
// closure: exports, t
function {
  return t.CommonBorder2(function <atom:0>)(o, e, r);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=181B file=math_jax/src/mathjax_src/output/svg/Notation
// args: t, e
// closure: exports, o
function {
  t.adaptor.append(t.dom[0], t.line(exports.lineData(t, o)));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=3B file=math_jax/src/mathjax_src/output/svg/Notation
// args: t
// closure: exports, o
function {
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=45B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o
// closure: exports, t
function {
  return t.CommonDiagonalStrike(function <atom:0>)(o);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=108B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t
function {
  o.adaptor.append(o.dom[0], t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=45B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o
// closure: t
function {
  return t.CommonDiagonalArrow(function <atom:0>)(o);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=108B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o, t
function {
  o.adaptor.append(o.dom[0], t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=45B file=math_jax/src/mathjax_src/output/svg/Notation
// args: o
// closure: t
function {
  return t.CommonArrow(function <atom:0>)(o);   // tail call
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=16 bc=531B file=math_jax/src/mathjax_src/output/svg/Notation
// args: require, module, exports
// locals: o, t, e, r, n, a, p, i, s, d
function {
  let d;
  let s;
  let i;
  let p;
  let a;
  let n;
  let r;
  let e;
  let t;
  let o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.computeLineData = undefined;
  exports.lineData = undefined;
  exports.lineOffset = undefined;
  exports.RenderLine = undefined;
  exports.Border = undefined;
  exports.Border2 = undefined;
  exports.DiagonalStrike = undefined;
  exports.DiagonalArrow = undefined;
  exports.Arrow = undefined;
  o = require("tslib");
  t = require("../common/Notation");
  o.__exportStar(require("../common/Notation"), exports);
  exports.computeLineData = {top: function <atom:0>, right: function <atom:0>, bottom: function <atom:0>, left: function <atom:0>, vertical: function <atom:0>, horizontal: function <atom:0>, up: function <atom:0>, down: function <atom:0>};
  e = function <atom:0>;
  exports.lineData = e;
  r = function <atom:0>;
  exports.lineOffset = r;
  n = function <atom:0>;
  exports.RenderLine = n;
  a = function <atom:0>;
  exports.Border = a;
  p = function <atom:0>;
  exports.Border2 = p;
  i = function <atom:0>;
  exports.DiagonalStrike = i;
  s = function <atom:0>;
  exports.DiagonalArrow = s;
  d = function <atom:0>;
  exports.Arrow = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Notation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
