// fn n  args=3 vars=3 closure=1 cpool=0 bc=44B file=valdi_rxjs/src/observable/bindCallback
// args: n, l, r
// closure: e
function {
  return e.bindCallbackInternals(false, n, l, r);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/observable/bindCallback
// args: require, module, exports
// locals: e, n
function {
  n = function n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.bindCallback = undefined;
  e = require("./bindCallbackInternals");
  exports.bindCallback = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/bindCallback
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
