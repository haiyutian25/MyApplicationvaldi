// fn e  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_core/src/supportsAutomaticLayoutDirection
// closure: t
function {
  return t.isVersionAtLeast(40);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_core/src/supportsAutomaticLayoutDirection
// args: require, module, exports
// locals: t, e
function {
  e = function e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.supportsAutomaticLayoutDirection = undefined;
  t = require("./CompilerIntrinsics");
  exports.supportsAutomaticLayoutDirection = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/supportsAutomaticLayoutDirection
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
