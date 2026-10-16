// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_core/src/Device
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.maker = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=126B file=valdi_core/src/Device
// locals: this
function {
  this = this;
  if (!((undefined === this.value))) goto L_5a;
  this.value = this.maker();
  this.maker();
  return this.value;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=valdi_core/src/Device
// locals: this
function {
  this = this;
  this.value = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=1 bc=3B file=valdi_core/src/Device
function {
  return "0";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=4B file=valdi_core/src/Device
function {
  return [];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=valdi_core/src/Device
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=valdi_core/src/Device
function {
  return "unknown";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=valdi_core/src/Device
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=valdi_core/src/Device
function {
  return false;
}

// fn T  args=0 vars=2 closure=2 cpool=0 bc=198B file=valdi_core/src/Device
// locals: e, n
// closure: t, w
function {
  let n;
  let e;
  if (!((t.getDeviceLocales == null))) goto L_32;
  t.getDeviceLocales;
  goto L_33;
  if (!((undefined() == null))) goto L_3b;
  undefined();
  e = [];
  if (!((0 === e.length))) goto L_47;
  return false;
  n = e[0].split("-")[0].toLowerCase();
  return w.includes(n);   // tail call
}

// fn L  args=2 vars=3 closure=1 cpool=0 bc=143B file=valdi_core/src/Device
// args: t, n
// locals: i
// closure: e
function {
  try { // catch -> L_2e
  t.observe(n);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_8e
  if (!(e.isLoggingEnabled)) goto L_8b;
  console.warn("Device dark mode observer failed.", i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=360B file=valdi_core/src/Device
// closure: a, s, l, u, g, d, v, p, D
function {
  a.invalidate();
  s.invalidate();
  l.invalidate();
  u.invalidate();
  g.invalidate();
  d.invalidate();
  v.invalidate();
  p.invalidate();
  D.invalidate();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=130B file=valdi_core/src/Device
// args: e
// locals: t
// closure: I, S, M, L
function {
  if (!(!I)) goto L_81;
  if (!((S !== e))) goto L_81;
  S = e;
  e;
  let t;
  for (const t of Array.from(M)) {
    if (!(M.has(t))) goto L_7a;
    L(t, e);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=88B file=valdi_core/src/Device
// closure: e
function {
  if (!(e.cancel)) goto L_4b;
  e.cancel();
  e.cancel = undefined;
  return;
}

// fn W  args=1 vars=1 closure=0 cpool=1 bc=14B file=valdi_core/src/Device
// args: e
function {
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=87B file=valdi_core/src/Device
// closure: I, M, R
function {
  I = true;
  true;
  M.clear();
  R.cancel();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=46B file=valdi_core/src/Device
// closure: o
function {
  return ("android" === o.get());
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=46B file=valdi_core/src/Device
// closure: o
function {
  return ("ios" === o.get());
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: y
function {
  return y.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: C
function {
  return C.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: o
function {
  return o.get();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=79B file=valdi_core/src/Device
// args: e
// closure: t
function {
  if (!(t.copyToClipBoard)) goto L_4e;
  t.copyToClipBoard(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=203B file=valdi_core/src/Device
// args: e
// closure: n, t
function {
  if ((!(e instanceof Uint8Array))) goto L_30;
  if (!((0 === e.byteLength))) goto L_41;
  throw new TypeError("Clipboard images must contain non-empty encoded image bytes.");
  if ((!n.isVersionAtLeast(50))) goto L_93;
  if (!((undefined === t.copyImageToClipboard))) goto L_a4;
  throw new Error("The current Valdi host does not support copying images to the clipboard.");
  t.copyImageToClipboard(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: r
function {
  return r.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: c
function {
  return c.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: a
function {
  return a.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: s
function {
  return s.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: g
function {
  return g.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: l
function {
  return l.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: u
function {
  return u.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: d
function {
  return d.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: v
function {
  return v.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: p
function {
  return p.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: D
function {
  return D.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: m
function {
  return m.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: h
function {
  return h.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: b
function {
  return b.get();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/Device
// closure: f
function {
  return f.get();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=206B file=valdi_core/src/Device
// args: n
// locals: i
// closure: k, t, e
function {
  let i;
  if (!((n == null))) goto L_d;
  n;
  i = k[""];
  if (!((undefined === i))) goto L_c9;
  if (!(t.getTimeZoneRawSecondsFromGMT)) goto L_6d;
  i = t.getTimeZoneRawSecondsFromGMT(n);
  goto L_c9;
  // [栈深重同步 1 -> 0]
  if (!(e.isLoggingEnabled)) goto L_c3;
  console.error("Device.getTimeZoneRawSecondsFromGMT not implemented");
  i = 0;
  0;
  return i;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=206B file=valdi_core/src/Device
// args: n
// locals: i
// closure: B, t, e
function {
  let i;
  if (!((n == null))) goto L_d;
  n;
  i = B[""];
  if (!((undefined === i))) goto L_c9;
  if (!(t.getTimeZoneDstSecondsFromGMT)) goto L_6d;
  i = t.getTimeZoneDstSecondsFromGMT(n);
  goto L_c9;
  // [栈深重同步 1 -> 0]
  if (!(e.isLoggingEnabled)) goto L_c3;
  console.error("Device.getTimeZoneDstSecondsFromGMT not implemented");
  i = 0;
  0;
  return i;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=52B file=valdi_core/src/Device
// closure: t
function {
  if (!((t.getUptimeMs == null))) goto L_2c;
  t.getUptimeMs;
  goto L_2d;
  if (!((undefined() == null))) goto L_33;
  undefined();
  return 0;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=valdi_core/src/Device
// closure: S
function {
  if (!((S == null))) goto L_a;
  S;
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/Device
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=183B file=valdi_core/src/Device
// args: n
// closure: t, W, e
function {
  if (!(t.observeDisplayInsetChange)) goto L_4f;
  return W(t.observeDisplayInsetChange(n));
  if (!(e.isLoggingEnabled)) goto L_a5;
  console.error("Device.observeDisplayInsetChange not implemented");
  n();
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/Device
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=96B file=valdi_core/src/Device
// args: e
// closure: t, W
function {
  if (!(t.observeDisplaySizeChange)) goto L_4f;
  return W(t.observeDisplaySizeChange(e));
  e();
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=valdi_core/src/Device
// closure: M, t
function {
  M.delete(t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=86B file=valdi_core/src/Device
// args: e
// locals: t
// closure: M, S, L
function {
  let t;
  t = {observe: e};
  M.add(t);
  if (!((undefined !== S))) goto L_47;
  L(t, S);
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=79B file=valdi_core/src/Device
// args: e
// closure: t
function {
  if (!(t.setBackButtonObserver)) goto L_4e;
  t.setBackButtonObserver(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=79B file=valdi_core/src/Device
// args: e
// closure: t
function {
  if (!(t.performHapticFeedback)) goto L_4e;
  t.performHapticFeedback(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=27 cpool=31 bc=373B file=valdi_core/src/Device
// args: i
// closure: o, y, C, t, n, r, c, a, s, g, l, u, d, v, p, D, m, h, b, f, k, e, B, S, W, M, L
function {
  i.isAndroid = function <atom:0>;
  i.isIOS = function <atom:0>;
  i.isDesktop = function <atom:0>;
  i.isWeb = function <atom:0>;
  i.getSystemType = function <atom:0>;
  i.copyToClipBoard = function <atom:0>;
  i.copyImageToClipboard = function <atom:0>;
  i.getSystemVersion = function <atom:0>;
  i.getModel = function <atom:0>;
  i.getDisplayWidth = function <atom:0>;
  i.getDisplayHeight = function <atom:0>;
  i.getDisplayScale = function <atom:0>;
  i.getWindowWidth = function <atom:0>;
  i.getWindowHeight = function <atom:0>;
  i.getDisplayLeftInset = function <atom:0>;
  i.getDisplayRightInset = function <atom:0>;
  i.getDisplayTopInset = function <atom:0>;
  i.getDisplayBottomInset = function <atom:0>;
  i.getDeviceLocales = function <atom:0>;
  i.getLocaleUsesMetricSystem = function <atom:0>;
  i.isRTL = function <atom:0>;
  i.getTimeZoneName = function <atom:0>;
  i.getTimeZoneRawSecondsFromGMT = function <atom:0>;
  i.getTimeZoneDstSecondsFromGMT = function <atom:0>;
  i.getUptimeMs = function <atom:0>;
  i.isDarkMode = function <atom:0>;
  i.observeDisplayInsetChange = function <atom:0>;
  i.observeDisplaySizeChange = function <atom:0>;
  i.observeDarkMode = function <atom:0>;
  i.setBackButtonObserver = function <atom:0>;
  i.performHapticFeedback = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=40 closure=0 cpool=16 bc=1358B file=valdi_core/src/Device
// args: require, module, exports
// locals: e, t, n, i, DeviceCache, <class_fields_init>, DeviceCache#1, o, r, c, a, s, g, l, u, d, v, p, D, m, h, f, y, C, b, w, T, S, M, I, L, k, B, F, R, W, Z
function {
  T = function T;
  L = function L;
  W = function W;
  let R;
  let F;
  let B;
  let k;
  let I;
  let M;
  let S;
  let w;
  let b;
  let C;
  let y;
  let f;
  let h;
  let m;
  let D;
  let p;
  let v;
  let d;
  let u;
  let l;
  let g;
  let s;
  let a;
  let c;
  let r;
  let o;
  let DeviceCache#1;
  let i;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Device = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/DeviceBridge");
  n = require("./CompilerIntrinsics");
  i = require("./ModuleLoaderGlobal");
  let DeviceCache;
  let <class_fields_init>;
  class DeviceCache extends undefined { ... }
  <proto:DeviceCache>.get = function <atom:0>;
  <proto:DeviceCache>.invalidate = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DeviceCache>;
  DeviceCache = function <atom:0>;
  // close_loc <class_fields_init>
  DeviceCache#1 = function <atom:0>;
  o = new DeviceCache#1(t.getSystemType);
  if (!((t.getSystemVersion == null))) goto L_176;
  t.getSystemVersion;
  r = new DeviceCache#1(function <atom:0>);
  c = new DeviceCache#1(t.getModel);
  a = new DeviceCache#1(t.getDisplayWidth);
  s = new DeviceCache#1(t.getDisplayHeight);
  g = new DeviceCache#1(t.getDisplayScale);
  l = new DeviceCache#1(t.getWindowWidth);
  u = new DeviceCache#1(t.getWindowHeight);
  d = new DeviceCache#1(t.getDisplayLeftInset);
  v = new DeviceCache#1(t.getDisplayRightInset);
  p = new DeviceCache#1(t.getDisplayTopInset);
  D = new DeviceCache#1(t.getDisplayBottomInset);
  if (!((t.getDeviceLocales == null))) goto L_36c;
  t.getDeviceLocales;
  m = new DeviceCache#1(function <atom:0>);
  if (!((t.getLocaleUsesMetricSystem == null))) goto L_3a0;
  t.getLocaleUsesMetricSystem;
  h = new DeviceCache#1(function <atom:0>);
  if (!((t.getTimeZoneName == null))) goto L_3d4;
  t.getTimeZoneName;
  f = new DeviceCache#1(function <atom:0>);
  if (!((t.isDesktop == null))) goto L_408;
  t.isDesktop;
  y = new DeviceCache#1(function <atom:0>);
  if (!((t.isWeb == null))) goto L_43c;
  t.isWeb;
  C = new DeviceCache#1(function <atom:0>);
  b = new DeviceCache#1(T);
  w = ["ar", "he", "fa", "ur", "yi", "ps", "sd", "ckb"];
  S = undefined;
  M = new Set();
  I = false;
  k = {};
  B = {};
  F = t.observeDisplayInsetChange(function <atom:0>);
  R = t.observeDarkMode(function <atom:0>);
  i.getModuleLoader(module).onHotReload(module, "valdi_core/src/Device", function <atom:0>);
  if ((Z)) goto L_54c;
  Z = {};
  exports.Device = {};
  function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Device
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
