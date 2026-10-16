// fn n  args=1 vars=1 closure=0 cpool=0 bc=85B file=valdi_core/src/utils/ImageFilter
// args: r
function {
  return Math.min(Math.max(r, 0), 1);   // tail call
}

// fn i  args=20 vars=20 closure=0 cpool=0 bc=57B file=valdi_core/src/utils/ImageFilter
// args: r, t, n, e, i, o, s, u, c, a, f, l, p, m, v, d, x, M, b, g
function {
  return [2, r, t, n, e, i, o, s, u, c, a, f, l, p, m, v, d, x, M, b, g];
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=194B file=valdi_core/src/utils/ImageFilter
// closure: t, r
function {
  if ((!t.Device.isAndroid())) goto L_c1;
  if ((t.Device.isWeb())) goto L_c1;
  return r.isVersionAtLeast(213);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=6B file=valdi_core/src/utils/ImageFilter
// args: r
function {
  return [1, r];
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=24B file=valdi_core/src/utils/ImageFilter
// closure: i
function {
  return i(-1, 0, 0, 0, 1, 0, -1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, 1, 0);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=18 bc=117B file=valdi_core/src/utils/ImageFilter
// args: r
// locals: r#1, t
// closure: n, i
function {
  let r#1;
  if (!((r === undefined))) goto L_b;
  r;
  r = 1;
  r#1 = 1;
  let t;
  t = (1 - n(r));
  return i((0.2126 + (0.7874 * t)), (0.7152 - (0.7152 * t)), (0.0722 - (0.0722 * t)), 0, 0, (0.2126 - (0.2126 * t)), (0.7152 + (0.2848 * t)), (0.0722 - (0.0722 * t)), 0, 0, (0.2126 - (0.2126 * t)), (0.7152 - (0.7152 * t)), (0.0722 + (0.9278 * t)), 0, 0, 0, 0, 0, 1, 0);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=18 bc=117B file=valdi_core/src/utils/ImageFilter
// args: r
// locals: r#1, t
// closure: n, i
function {
  let r#1;
  if (!((r === undefined))) goto L_b;
  r;
  r = 1;
  r#1 = 1;
  let t;
  t = (1 - n(r));
  return i((0.393 + (0.607 * t)), (0.769 - (0.769 * t)), (0.189 - (0.189 * t)), 0, 0, (0.349 - (0.349 * t)), (0.686 + (0.314 * t)), (0.168 - (0.168 * t)), 0, 0, (0.272 - (0.272 * t)), (0.534 - (0.534 * t)), (0.131 + (0.869 * t)), 0, 0, 0, 0, 0, 1, 0);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=24B file=valdi_core/src/utils/ImageFilter
// args: r
// closure: i
function {
  return i(r, 0, 0, 0, 0, 0, r, 0, 0, 0, 0, 0, r, 0, 0, 0, 0, 0, 1, 0);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=40B file=valdi_core/src/utils/ImageFilter
// args: r
// locals: t
// closure: i
function {
  let t;
  t = (0.5 * (1 - r));
  return i(r, 0, 0, 0, t, 0, r, 0, 0, t, 0, 0, r, 0, t, 0, 0, 0, 1, 0);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=79B file=valdi_core/src/utils/ImageFilter
// args: r
// locals: t, n
function {
  r = ...0;
  let t;
  t = [];
  let n;
  for (const n of r) {
    // append([], 0, n)
    n;
    t.push.apply(t, []);
  }
  return t;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=9 bc=111B file=valdi_core/src/utils/ImageFilter
// args: e
// locals: i
// closure: t, r, n
function {
  i = function i;
  e.supportsNormalizedColorMatrixBias = function <atom:0>;
  e.blur = function <atom:0>;
  e.colorMatrix = i;
  e.invert = function <atom:0>;
  e.grayscale = function <atom:0>;
  e.sepia = function <atom:0>;
  e.brightness = function <atom:0>;
  e.contrast = function <atom:0>;
  e.compose = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=115B file=valdi_core/src/utils/ImageFilter
// args: require, module, exports
// locals: r, t, n, e
function {
  n = function n;
  let t;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ImageFilters = undefined;
  r = require("../CompilerIntrinsics");
  t = require("../Device");
  if ((e)) goto L_70;
  e = {};
  exports.ImageFilters = {};
  !function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/ImageFilter
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
