// fn r  args=0 vars=0 closure=2 cpool=0 bc=270B file=valdi_core/src/supportsTextAnimationColor
// closure: i, e
function {
  if ((i.Device.isIOS())) goto L_94;
  if (!(i.Device.isAndroid())) goto L_10d;
  if (!(!i.Device.isWeb())) goto L_10d;
  return e.isVersionAtLeast(213);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_core/src/supportsTextAnimationColor
// args: require, module, exports
// locals: e, i, r
function {
  r = function r;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.supportsTextAnimationColor = undefined;
  e = require("./CompilerIntrinsics");
  i = require("./Device");
  exports.supportsTextAnimationColor = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/supportsTextAnimationColor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
