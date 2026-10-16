// fn r  args=2 vars=2 closure=1 cpool=0 bc=79B file=valdi_core/src/Remember
// args: r, t
// closure: e
function {
  t = ...1;
  return e.getRenderer().remember(r, t);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_core/src/Remember
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.remember = undefined;
  e = require("./Renderer");
  exports.remember = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Remember
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
