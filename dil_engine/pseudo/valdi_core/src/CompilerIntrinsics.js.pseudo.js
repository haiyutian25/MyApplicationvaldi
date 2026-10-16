// fn r  args=1 vars=1 closure=2 cpool=0 bc=48B file=valdi_core/src/CompilerIntrinsics
// args: e
// closure: t, i
function {
  if (((e === t))) goto L_2f;
  return (i.apiVersion >= e);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=193B file=valdi_core/src/CompilerIntrinsics
// args: require, module, exports
// locals: e, i, t, r
function {
  r = function r;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isVersionAtLeast = undefined;
  e = require("./ValdiRuntimeProvider");
  i = e.getValdiRuntime();
  t = Number.MAX_SAFE_INTEGER;
  globalThis.__PLACEHOLDER__ = t;
  exports.isVersionAtLeast = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/CompilerIntrinsics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
