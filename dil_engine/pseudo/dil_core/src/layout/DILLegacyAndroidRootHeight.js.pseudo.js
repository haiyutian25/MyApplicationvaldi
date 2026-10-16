// fn o  args=0 vars=0 closure=3 cpool=0 bc=316B file=dil_core/src/layout/DILLegacyAndroidRootHeight
// closure: i, e, r
function {
  if (!(!i.Device.isWeb())) goto L_13b;
  if (!(i.Device.isAndroid())) goto L_13b;
  if (!(!e.isVersionAtLeast(227))) goto L_13b;
  return Math.floor((r / i.Device.getDisplayScale()));   // tail call
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=113B file=dil_core/src/layout/DILLegacyAndroidRootHeight
// args: require, module, exports
// locals: e, i, r, o
function {
  o = function o;
  let r;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getDILLegacyAndroidRootMaxHeight = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  i = require("valdi_core/src/Device");
  r = 16773119;
  exports.getDILLegacyAndroidRootMaxHeight = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/layout/DILLegacyAndroidRootHeight
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
