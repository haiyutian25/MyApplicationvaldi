// fn e  args=0 vars=0 closure=1 cpool=0 bc=42B file=dil_widgets/src/widgets/ImageCapabilities
// closure: r
function {
  return r.isVersionAtLeast(211);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=dil_widgets/src/widgets/ImageCapabilities
// args: require, module, exports
// locals: r, e
function {
  e = function e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.supportsBitmapDarkenColor = undefined;
  r = require("valdi_core/src/CompilerIntrinsics");
  exports.supportsBitmapDarkenColor = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/ImageCapabilities
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
