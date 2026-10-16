// fn r  args=0 vars=0 closure=2 cpool=0 bc=74B file=valdi_core/src/AbortControllerNative
// closure: t, e
function {
  t.setNativeAbortControllerFactory(e.createAbortController);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_core/src/AbortControllerNative
// args: require, module, exports
// locals: e, t, r
function {
  r = function r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.initializeNativeAbortController = undefined;
  e = require("./AbortSignalNative");
  t = require("./AbortController");
  exports.initializeNativeAbortController = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/AbortControllerNative
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
