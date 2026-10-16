// fn t  args=0 vars=0 closure=0 cpool=0 bc=21B file=dil_core/src/colors/DILColorsInit
function {
  if (!(("undefined" != typeof runtime))) goto L_14;
  return runtime;
  return;
}

// fn i  args=0 vars=1 closure=2 cpool=0 bc=19B file=dil_core/src/colors/DILColorsInit
// locals: e
// closure: t, l
function {
  let e;
  e = t();
  if (!(e)) goto L_12;
  l(e);
  return;
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=158B file=dil_core/src/colors/DILColorsInit
// args: e
// closure: o
function {
  e.configureColorPalette("light", o.DIL_LIGHT_COLOR_PALETTE);
  e.configureColorPalette("dark", o.DIL_DARK_COLOR_PALETTE);
  return;
}

// fn n  args=1 vars=2 closure=2 cpool=0 bc=206B file=dil_core/src/colors/DILColorsInit
// args: e
// locals: r
// closure: t, o
function {
  let r;
  r = t();
  if (!(r)) goto L_cd;
  if (!(("dark" === e))) goto L_44;
  goto L_68;
  // [栈深重同步 2 -> 1]
  global.dilCurrentPalette = o.DIL_LIGHT_COLOR_PALETTE;
  global.currentPalette = global.dilCurrentPalette;
  r.setActiveColorPalette(e);
  return;
}

// fn a  args=0 vars=0 closure=1 cpool=0 bc=80B file=dil_core/src/colors/DILColorsInit
// closure: o
function {
  if (!((global.dilCurrentPalette == null))) goto L_4f;
  global.dilCurrentPalette;
  return o.DIL_LIGHT_COLOR_PALETTE;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=18B file=dil_core/src/colors/DILColorsInit
// args: e
// closure: n
function {
  if (!(e)) goto L_b;
  goto L_10;
  // [栈深重同步 2 -> 1]
  n("light");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=89B file=dil_core/src/colors/DILColorsInit
// closure: n, e
function {
  global.dilDarkModeObserver = e.Device.observeDarkMode(function <atom:0>);
  return;
}

// fn u  args=0 vars=1 closure=7 cpool=1 bc=337B file=dil_core/src/colors/DILColorsInit
// locals: o
// closure: n, e, t, s, l, r, module
function {
  let o;
  o = t();
  if (!(!!o)) goto L_150;
  if (!(!s)) goto L_150;
  s = true;
  true;
  l(o);
  if (!(e.Device.isDarkMode())) goto L_7e;
  goto L_83;
  // [栈深重同步 2 -> 1]
  n("light");
  if (!(global.dilDarkModeObserver)) goto L_f9;
  global.dilDarkModeObserver.cancel();
  r.getModuleLoader(module).onModuleRegistered("DeviceBridge", function <atom:0>);
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=6B file=dil_core/src/colors/DILColorsInit
// closure: u, e
function {
  u();
  e();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=44B file=dil_core/src/colors/DILColorsInit
// args: e
// closure: u
function {
  runtime.performSyncWithMainThread(function <atom:0>);
  return;
}

// fn d  args=0 vars=0 closure=1 cpool=1 bc=58B file=dil_core/src/colors/DILColorsInit
// closure: u
function {
  if (!(u())) goto L_10;
  return new Promise(function <atom:0>);
  return Promise.resolve();
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=7 bc=216B file=dil_core/src/colors/DILColorsInit
// args: require, module, exports
// locals: e, r, o, t, i, l, n, a, s, u, d
function {
  t = function t;
  i = function i;
  l = function l;
  n = function n;
  a = function a;
  u = function u;
  d = function d;
  let s;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.reconfigureDILColorPalettes = undefined;
  exports.getCurrentDILPalette = undefined;
  exports.initializeDILColors = undefined;
  exports.ensureDILColorsInitialized = undefined;
  e = require("valdi_core/src/Device");
  r = require("valdi_core/src/ModuleLoaderGlobal");
  o = require("./DILColorsDefinition");
  exports.reconfigureDILColorPalettes = i;
  exports.getCurrentDILPalette = a;
  s = false;
  exports.initializeDILColors = u;
  exports.ensureDILColorsInitialized = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/colors/DILColorsInit
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
