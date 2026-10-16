// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=dil_text/src/rendering/DILStreamingText
// closure: r
function {
  return r;
}

// fn m  args=3 vars=4 closure=2 cpool=1 bc=140B file=dil_text/src/rendering/DILStreamingText
// args: r, n, o
// locals: i
// closure: t, e
function {
  let i;
  // append([function <atom:0>], 1, n)
  n;
  i = t.remember.apply(undefined, [function <atom:0>]);
  if ((o)) goto L_84;
  if (!((i === e.DILStreamingAnimation.Neutral))) goto L_8a;
  return i;
  return r;
}

// fn p  args=3 vars=3 closure=2 cpool=0 bc=119B file=dil_text/src/rendering/DILStreamingText
// args: t, r, n
// closure: e, u
function {
  if (!((r === e.DILStreamingAnimation.Disabled))) goto L_4b;
  return 0;
  t.pushAnimationTransform(u(r, n));
  return 1;
}

// fn T  args=2 vars=3 closure=0 cpool=0 bc=61B file=dil_text/src/rendering/DILStreamingText
// args: e, t
// locals: r
function {
  let r;
  r = 0;
  if (!((r < t))) goto L_3c;
  e.pop();
  r = <r_new>;
  (r++);
  goto L_5;
  return;
}

// fn u  args=2 vars=2 closure=7 cpool=0 bc=362B file=dil_text/src/rendering/DILStreamingText
// args: t, m
// closure: e, r, s, a, i, o, n
function {
  if ((m)) goto L_4c;
  if (!((t === e.DILStreamingAnimation.Neutral))) goto L_119;
  if (!(r.supportsTextAnimationColor())) goto L_119;
  if (!((t === e.DILStreamingAnimation.Neutral))) goto L_c8;
  return s;
  if (!((t === e.DILStreamingAnimation.Snappy))) goto L_115;
  return a;
  return i;
  if (!((t === e.DILStreamingAnimation.Snappy))) goto L_166;
  return o;
  return n;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=29 bc=570B file=dil_text/src/rendering/DILStreamingText
// args: require, module, exports
// locals: e, t, r, n, o, i, a, s, m, p, T, u
function {
  m = function m;
  p = function p;
  T = function T;
  u = function u;
  let s;
  let a;
  let i;
  let o;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_TEXT_STREAMING_PART_PATTERN = undefined;
  exports.rememberDILStreamingTextAnimation = undefined;
  exports.pushDILStreamingTextAnimation = undefined;
  exports.popDILStreamingTextAnimation = undefined;
  e = require("dil_renderer/src/DILRenderer");
  t = require("valdi_core/src/Remember");
  r = require("valdi_core/src/supportsTextAnimationColor");
  exports.DIL_TEXT_STREAMING_PART_PATTERN = "\s*\S+\s*|\s+";
  n = {key: "dil-streaming-text", partPattern: exports.DIL_TEXT_STREAMING_PART_PATTERN, opacity: 0, duration: 0.5, timeOffsetBetweenParts: 0.07};
  o = {key: "dil-streaming-text", partPattern: exports.DIL_TEXT_STREAMING_PART_PATTERN, opacity: 0, duration: 0.22, timeOffsetBetweenParts: 0.03};
  null;
  n;
  i = {color: "#3a83f7", opacityKeyframes: [{progress: 0.06, value: 0.18, controlPoints: [0, 0, 0.58, 1]}, {progress: 0.12, value: 0.72, controlPoints: [0.25, 0.1, 0.25, 1]}, {progress: 0.15, value: 1, controlPoints: [0.25, 0.1, 0.25, 1]}], duration: 0.7, timeOffsetBetweenParts: 0.035, colorDelay: 0.315};
  null;
  i;
  a = {duration: 0.22, timeOffsetBetweenParts: 0.03, colorDelay: 0.099};
  null;
  i;
  s = {color: "#8f8f8f", duration: 0.8, timeOffsetBetweenParts: 0.06, colorDelay: 0.36};
  exports.rememberDILStreamingTextAnimation = m;
  exports.pushDILStreamingTextAnimation = p;
  exports.popDILStreamingTextAnimation = T;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILStreamingText
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
