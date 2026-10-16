// fn s  args=0 vars=0 closure=2 cpool=0 bc=118B file=valdi_core/src/supportsTableLayout
// closure: r, e
function {
  if (!(!r.Device.isWeb())) goto L_75;
  return e.isVersionAtLeast(148);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_core/src/supportsTableLayout
// args: require, module, exports
// locals: e, r, s
function {
  s = function s;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.supportsTableLayout = undefined;
  e = require("./CompilerIntrinsics");
  r = require("./Device");
  exports.supportsTableLayout = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/supportsTableLayout
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
