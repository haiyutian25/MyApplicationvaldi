// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=8B file=valdi_rxjs/src/observable/iif
// closure: r, t, i
function {
  if (!(r())) goto L_6;
  return t;
  return i;
}

// fn r  args=3 vars=3 closure=1 cpool=1 bc=41B file=valdi_rxjs/src/observable/iif
// args: r, t, i
// closure: e
function {
  return e.defer(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/observable/iif
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.iif = undefined;
  e = require("./defer");
  exports.iif = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/iif
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
