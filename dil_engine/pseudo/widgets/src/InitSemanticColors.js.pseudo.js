// fn l  args=1 vars=1 closure=1 cpool=0 bc=106B file=widgets/src/InitSemanticColors
// args: e
// closure: r
function {
  global.currentPalette = e;
  runtime.configureColorPalette(r, e);
  runtime.setActiveColorPalette(r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=39B file=widgets/src/InitSemanticColors
function {
  return global.currentPalette;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=widgets/src/InitSemanticColors
// args: e
// closure: l
function {
  l(e);
  return;
}

// fn n  args=2 vars=2 closure=2 cpool=0 bc=22B file=widgets/src/InitSemanticColors
// args: e, t
// closure: l, u
function {
  global.theme = e;
  l(u(e, t));
  return;
}

// fn s  args=0 vars=0 closure=1 cpool=0 bc=206B file=widgets/src/InitSemanticColors
// closure: o
function {
  if (!(Boolean(global.theme))) goto L_cd;
  if (!((global.theme !== o.ThemeDark))) goto L_cd;
  return (global.theme !== o.ThemeLight);
}

// fn c  args=0 vars=0 closure=2 cpool=0 bc=151B file=widgets/src/InitSemanticColors
// closure: s, o
function {
  if (!(s())) goto L_96;
  return (global.currentPalette.backgroundMain === o.DARK_PALETTE.backgroundMain);
}

// fn u  args=2 vars=4 closure=2 cpool=0 bc=219B file=widgets/src/InitSemanticColors
// args: e, t
// locals: r, l
// closure: o, h
function {
  let l;
  let r;
  if (!(t)) goto L_2f;
  goto L_53;
  // [栈深重同步 1 -> 0]
  r = o.LIGHT_PALETTE;
  if (!(!e)) goto L_5c;
  return r;
  l = h[global.theme];
  if (!(l)) goto L_d7;
  if (!(l.palette)) goto L_d7;
  return l.palette;
  return r;
}

// fn d  args=0 vars=0 closure=1 cpool=0 bc=163B file=widgets/src/InitSemanticColors
// closure: h
function {
  if (!(global.theme)) goto L_a2;
  if (!(h[global.theme])) goto L_a0;
  return h[global.theme].backgroundImage;
  return undefined;
  return;
}

// fn g  args=2 vars=2 closure=1 cpool=0 bc=8B file=widgets/src/InitSemanticColors
// args: e, t
// closure: s
function {
  if (!(s())) goto L_6;
  return t;
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=218B file=widgets/src/InitSemanticColors
// args: e
// locals: t
// closure: l, u, o
function {
  let t;
  if (!(global.theme)) goto L_58;
  l(u(global.theme, e));
  return;
  if (!(e)) goto L_81;
  goto L_a5;
  // [栈深重同步 1 -> 0]
  t = o.LIGHT_PALETTE;
  if (!((global.currentPalette !== t))) goto L_d9;
  l(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=89B file=widgets/src/InitSemanticColors
// closure: l, u, o, e
function {
  global.darkModeObserver = e.Device.observeDarkMode(function <atom:0>);
  return;
}

// fn T  args=0 vars=0 closure=7 cpool=1 bc=218B file=widgets/src/InitSemanticColors
// closure: l, u, o, e, m, t, module
function {
  if ((m)) goto L_d9;
  m = true;
  true;
  if (!(global.darkModeObserver)) goto L_85;
  global.darkModeObserver.cancel();
  t.getModuleLoader(module).onModuleRegistered("DeviceBridge", function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=10 bc=825B file=widgets/src/InitSemanticColors
// args: require, module, exports
// locals: e, t, o, r, l, a, i, n, s, c, u, d, g, m, T, h
function {
  l = function l;
  n = function n;
  s = function s;
  c = function c;
  u = function u;
  d = function d;
  g = function g;
  T = function T;
  let h;
  let m;
  let i;
  let a;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getCurrentPalette = undefined;
  exports.forceColorPalette = undefined;
  exports.setTheme = undefined;
  exports.isCustomTheme = undefined;
  exports.isDarkBasedCustomTheme = undefined;
  exports.themeBackgroundImage = undefined;
  exports.colorWithThemedOverride = undefined;
  exports.initializeSemanticColors = undefined;
  e = require("valdi_core/src/Device");
  t = require("valdi_core/src/ModuleLoaderGlobal");
  require("widgets/res");
  o = require("./ColorSpec");
  r = "widgets-active";
  if ((global.currentPalette)) goto L_13f;
  l(o.LIGHT_PALETTE);
  a = function <atom:0>;
  exports.getCurrentPalette = a;
  i = function <atom:0>;
  exports.forceColorPalette = i;
  exports.setTheme = n;
  exports.isCustomTheme = s;
  exports.isDarkBasedCustomTheme = c;
  exports.themeBackgroundImage = d;
  exports.colorWithThemedOverride = g;
  m = false;
  exports.initializeSemanticColors = T;
  {}[o.ThemeLight] = {id: o.ThemeLight, backgroundImage: undefined, palette: o.LIGHT_PALETTE};
  {id: o.ThemeLight, backgroundImage: undefined, palette: o.LIGHT_PALETTE};
  {}[o.ThemeDark] = {id: o.ThemeDark, backgroundImage: undefined, palette: o.DARK_PALETTE};
  {id: o.ThemeDark, backgroundImage: undefined, palette: o.DARK_PALETTE};
  {}[o.ThemeMidnight] = {id: o.ThemeMidnight, palette: o.MIDNIGHT_PALETTE, backgroundImage: undefined};
  {id: o.ThemeMidnight, palette: o.MIDNIGHT_PALETTE, backgroundImage: undefined};
  h = {};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/InitSemanticColors
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
