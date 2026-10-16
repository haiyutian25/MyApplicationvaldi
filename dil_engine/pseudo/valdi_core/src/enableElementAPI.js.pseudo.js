// fn r  args=1 vars=1 closure=2 cpool=0 bc=133B file=valdi_core/src/enableElementAPI
// args: r
// closure: e, t
function {
  if (!(!e.isVersionAtLeast(225))) goto L_3a;
  throw new Error("This host does not support the native Element API");
  t.getValdiRuntime().enableElementAPI(r);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_core/src/enableElementAPI
// args: require, module, exports
// locals: e, t, r
function {
  r = function r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.enableElementAPI = undefined;
  e = require("./CompilerIntrinsics");
  t = require("./ValdiRuntimeProvider");
  exports.enableElementAPI = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/enableElementAPI
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
