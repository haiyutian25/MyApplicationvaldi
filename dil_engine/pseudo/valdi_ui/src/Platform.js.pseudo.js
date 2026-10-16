// fn s  args=0 vars=0 closure=1 cpool=0 bc=150B file=valdi_ui/src/Platform
// closure: e
function {
  if (!(e.Device.isIOS())) goto L_95;
  return !e.Device.isWeb();
}

// fn r  args=0 vars=0 closure=2 cpool=0 bc=47B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2e;
  return t.isVersionAtLeast(286);
}

// fn i  args=0 vars=0 closure=2 cpool=0 bc=47B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2e;
  return t.isVersionAtLeast(285);
}

// fn o  args=0 vars=0 closure=2 cpool=0 bc=47B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2e;
  return t.isVersionAtLeast(268);
}

// fn n  args=0 vars=0 closure=2 cpool=0 bc=47B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2e;
  return t.isVersionAtLeast(274);
}

// fn p  args=0 vars=0 closure=2 cpool=0 bc=194B file=valdi_ui/src/Platform
// closure: e, t
function {
  if (!(e.Device.isAndroid())) goto L_c1;
  if (!(!e.Device.isWeb())) goto L_c1;
  return t.isVersionAtLeast(175);
}

// fn u  args=0 vars=0 closure=2 cpool=0 bc=278B file=valdi_ui/src/Platform
// closure: t, e
function {
  if (!(!!t.isVersionAtLeast(150))) goto L_115;
  if (!(!e.Device.isWeb())) goto L_115;
  if ((e.Device.isIOS())) goto L_115;
  return e.Device.isAndroid();
}

// fn a  args=0 vars=0 closure=2 cpool=0 bc=197B file=valdi_ui/src/Platform
// closure: t, e
function {
  if (!(t.isVersionAtLeast(245))) goto L_c4;
  if (!(!e.Device.isWeb())) goto L_c4;
  return e.Device.isIOS();
}

// fn v  args=0 vars=0 closure=2 cpool=0 bc=47B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2e;
  return t.isVersionAtLeast(163);
}

// fn c  args=0 vars=0 closure=2 cpool=0 bc=125B file=valdi_ui/src/Platform
// closure: v, e
function {
  if (!(v())) goto L_7c;
  return (Number.parseInt(e.Device.getSystemVersion(), 10) >= 26);
}

// fn x  args=0 vars=0 closure=2 cpool=0 bc=194B file=valdi_ui/src/Platform
// closure: e, t
function {
  if (!(e.Device.isAndroid())) goto L_c1;
  if (!(!e.Device.isWeb())) goto L_c1;
  return t.isVersionAtLeast(133);
}

// fn N  args=0 vars=0 closure=2 cpool=0 bc=46B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2d;
  return t.isVersionAtLeast(39);
}

// fn d  args=0 vars=0 closure=2 cpool=0 bc=47B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2e;
  return t.isVersionAtLeast(249);
}

// fn A  args=0 vars=0 closure=2 cpool=0 bc=49B file=valdi_ui/src/Platform
// closure: t, s
function {
  if (!(!!t.isVersionAtLeast(282))) goto L_30;
  return s();
}

// fn l  args=0 vars=0 closure=2 cpool=0 bc=49B file=valdi_ui/src/Platform
// closure: t, s
function {
  if (!(!!t.isVersionAtLeast(287))) goto L_30;
  return s();
}

// fn S  args=0 vars=0 closure=2 cpool=0 bc=194B file=valdi_ui/src/Platform
// closure: e, t
function {
  if (!(e.Device.isAndroid())) goto L_c1;
  if (!(!e.Device.isWeb())) goto L_c1;
  return t.isVersionAtLeast(251);
}

// fn I  args=0 vars=0 closure=2 cpool=0 bc=47B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2e;
  return t.isVersionAtLeast(173);
}

// fn f  args=0 vars=0 closure=2 cpool=0 bc=46B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2d;
  return t.isVersionAtLeast(41);
}

// fn V  args=0 vars=0 closure=2 cpool=0 bc=46B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2d;
  return t.isVersionAtLeast(92);
}

// fn O  args=0 vars=0 closure=2 cpool=0 bc=192B file=valdi_ui/src/Platform
// closure: e, t
function {
  if (!(e.Device.isAndroid())) goto L_bf;
  if (!(!e.Device.isWeb())) goto L_bf;
  return t.isVersionAtLeast(1);
}

// fn L  args=0 vars=0 closure=2 cpool=0 bc=46B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2d;
  return t.isVersionAtLeast(35);
}

// fn m  args=0 vars=0 closure=2 cpool=0 bc=47B file=valdi_ui/src/Platform
// closure: s, t
function {
  if (!(s())) goto L_2e;
  return t.isVersionAtLeast(290);
}

// fn <atom:0>  args=3 vars=27 closure=0 cpool=22 bc=669B file=valdi_ui/src/Platform
// args: require, module, exports
// locals: t, e, s, r, i, o, n, p, u, a, v, c, x, N, d, A, l, S, I, f, V, O, L, m
function {
  s = function s;
  r = function r;
  i = function i;
  o = function o;
  n = function n;
  p = function p;
  u = function u;
  a = function a;
  v = function v;
  c = function c;
  x = function x;
  N = function N;
  d = function d;
  A = function A;
  l = function l;
  S = function S;
  I = function I;
  f = function f;
  V = function V;
  O = function O;
  L = function L;
  m = function m;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isNativeIOS = undefined;
  exports.supportsInteractiveKeyboardDismissal = undefined;
  exports.supportsNativeFilePreview = undefined;
  exports.supportsNativeIOSLists = undefined;
  exports.supportsNativeVariableBlur = undefined;
  exports.supportsNativeAndroidRefreshControl = undefined;
  exports.supportsNativeTextViewInsets = undefined;
  exports.supportsNativeTextViewAutoSizing = undefined;
  exports.supportsNativeTextViewContentInsets = undefined;
  exports.supportsNativeTextViewScrollEdges = undefined;
  exports.supportsNativeAndroidSwitchAccessory = undefined;
  exports.supportsNativeIOSButtons = undefined;
  exports.supportsNativeIOSClearGlassButtons = undefined;
  exports.supportsNativeIOSProminentGlassButtons = undefined;
  exports.supportsNativeIOSProminentClearGlassButtons = undefined;
  exports.supportsNativeAndroidIconButtons = undefined;
  exports.supportsNativeIOSSystemImages = undefined;
  exports.supportsNativeIOSSliders = undefined;
  exports.supportsNativeConfirmationDialog = undefined;
  exports.supportsNativeAndroidPlatformAlert = undefined;
  exports.supportsNativeIOSSegmentedControls = undefined;
  exports.supportsNativeIOSAudioWaveform = undefined;
  t = require("valdi_core/src/CompilerIntrinsics");
  e = require("valdi_core/src/Device");
  exports.isNativeIOS = s;
  exports.supportsInteractiveKeyboardDismissal = r;
  exports.supportsNativeFilePreview = i;
  exports.supportsNativeIOSLists = o;
  exports.supportsNativeVariableBlur = n;
  exports.supportsNativeAndroidRefreshControl = p;
  exports.supportsNativeTextViewInsets = u;
  exports.supportsNativeTextViewAutoSizing = a;
  exports.supportsNativeTextViewContentInsets = v;
  exports.supportsNativeTextViewScrollEdges = c;
  exports.supportsNativeAndroidSwitchAccessory = x;
  exports.supportsNativeIOSButtons = N;
  exports.supportsNativeIOSClearGlassButtons = d;
  exports.supportsNativeIOSProminentGlassButtons = A;
  exports.supportsNativeIOSProminentClearGlassButtons = l;
  exports.supportsNativeAndroidIconButtons = S;
  exports.supportsNativeIOSSystemImages = I;
  exports.supportsNativeIOSSliders = f;
  exports.supportsNativeConfirmationDialog = V;
  exports.supportsNativeAndroidPlatformAlert = O;
  exports.supportsNativeIOSSegmentedControls = L;
  exports.supportsNativeIOSAudioWaveform = m;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/Platform
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
