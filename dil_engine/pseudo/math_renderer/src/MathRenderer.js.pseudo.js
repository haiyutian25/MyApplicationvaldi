// fn a  args=1 vars=1 closure=0 cpool=0 bc=52B file=math_renderer/src/MathRenderer
// args: e
function {
  if (!((e instanceof Error))) goto L_32;
  if (!((e.reason == null))) goto L_33;
  e.reason;
  return 0;
  return 0;
}

// fn i  args=2 vars=2 closure=0 cpool=0 bc=58B file=math_renderer/src/MathRenderer
// args: e, r
function {
  return Object.assign(new Error(r), {reason: e});   // tail call
}

// fn s  args=0 vars=1 closure=6 cpool=0 bc=162B file=math_renderer/src/MathRenderer
// locals: a
// closure: e, o, n, t, r, i
function {
  let a;
  if (!(!e.isVersionAtLeast(24))) goto L_3a;
  throw new Error(o);
  if (!(n)) goto L_40;
  return;
  a = t.registerMathFontData(r.getPackedMathFontData());
  if (!((undefined !== a))) goto L_9b;
  throw i(3, a);
  n = true;
  true;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=295B file=math_renderer/src/MathRenderer
// args: e
function {
  return {color: e.color, path: new Float64Array(e.path.buffer, e.path.byteOffset, (e.path.byteLength / Float64Array.BYTES_PER_ELEMENT))};
}

// fn h  args=2 vars=3 closure=5 cpool=1 bc=544B file=math_renderer/src/MathRenderer
// args: r, n
// locals: a
// closure: i, e, o, s, t
function {
  let a;
  if (!((0 === r.trim().length))) goto L_36;
  throw i(1, "Cannot render an empty math expression.");
  if (!(!e.isVersionAtLeast(24))) goto L_6d;
  throw new Error(o);
  s();
  a = t.renderLatex(r, n.block, n.color);
  if (!((undefined !== a.error))) goto L_154;
  if (!(a.parseError)) goto L_12d;
  goto L_12e;
  // [栈深重同步 2 -> 1]
  throw i(3, a.error);
  return {baseline: a.baseline, height: a.height, shapes: a.shapes.map(function <atom:0>), width: a.width};
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=4 bc=191B file=math_renderer/src/MathRenderer
// args: require, module, exports
// locals: e, r, t, o, n, a, i, s, h
function {
  a = function a;
  i = function i;
  s = function s;
  h = function h;
  let n;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.readMathRenderFailureReason = undefined;
  exports.ensureMathFontRegistered = undefined;
  exports.renderMathExpression = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  r = require("./MathFontData");
  t = require("./NativeMathRenderer");
  o = "Native mathematical rendering requires a newer host application.";
  n = false;
  exports.readMathRenderFailureReason = a;
  exports.ensureMathFontRegistered = s;
  exports.renderMathExpression = h;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_renderer/src/MathRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
