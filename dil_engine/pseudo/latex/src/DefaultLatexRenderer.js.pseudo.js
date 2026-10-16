// fn s  args=1 vars=1 closure=4 cpool=0 bc=197B file=latex/src/DefaultLatexRenderer
// args: s
// closure: r, e, t, i
function {
  if ((s)) goto L_79;
  if ((r.Device.isWeb())) goto L_79;
  if (!(!e.isVersionAtLeast(24))) goto L_a0;
  return t.JAVASCRIPT_LATEX_RENDERER;
  return i.NATIVE_LATEX_RENDERER;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=latex/src/DefaultLatexRenderer
// args: require, module, exports
// locals: e, r, t, i, s
function {
  s = function s;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getDefaultLatexRenderer = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  r = require("valdi_core/src/Device");
  t = require("latex/src/JavaScriptLatexRenderer");
  i = require("latex/src/NativeLatexRenderer");
  exports.getDefaultLatexRenderer = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=latex/src/DefaultLatexRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
