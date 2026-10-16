// fn i  args=2 vars=2 closure=2 cpool=0 bc=84B file=dil_compiler/src/DILThemeRenderState
// args: r, i
// closure: e, t
function {
  if (!(e.isDILTheme(i))) goto L_52;
  return r.withProperty(t, i);
  return r;
}

// fn n  args=1 vars=1 closure=2 cpool=0 bc=11B file=dil_compiler/src/DILThemeRenderState
// args: e
// closure: o, s
function {
  if (!((o(e) == null))) goto L_a;
  o(e);
  return s();
}

// fn o  args=1 vars=2 closure=2 cpool=0 bc=92B file=dil_compiler/src/DILThemeRenderState
// args: r
// locals: i
// closure: t, e
function {
  let i;
  i = r.getProperty(t);
  if (!(e.isDILTheme(i))) goto L_5a;
  return i;
  return undefined;
}

// fn s  args=0 vars=0 closure=1 cpool=0 bc=86B file=dil_compiler/src/DILThemeRenderState
// closure: r
function {
  if (!(r.Device.isDarkMode())) goto L_50;
  return "dark";
  return "light";
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=177B file=dil_compiler/src/DILThemeRenderState
// args: require, module, exports
// locals: e, r, t, i, n, o, s
function {
  i = function i;
  n = function n;
  o = function o;
  s = function s;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderStateWithDILTheme = undefined;
  exports.getDILRenderTheme = undefined;
  exports.getExplicitDILRenderTheme = undefined;
  e = require("./DILTheme");
  r = require("valdi_core/src/Device");
  t = Symbol("DILRenderTheme");
  exports.renderStateWithDILTheme = i;
  exports.getDILRenderTheme = n;
  exports.getExplicitDILRenderTheme = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILThemeRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
