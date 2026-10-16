// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_rxjs/src/observable/fromSubscribable
// args: e
// closure: r
function {
  return r.subscribe(e);   // tail call
}

// fn r  args=1 vars=1 closure=1 cpool=1 bc=43B file=valdi_rxjs/src/observable/fromSubscribable
// args: r
// closure: e
function {
  return new e.Observable(function <atom:0>);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/observable/fromSubscribable
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.fromSubscribable = undefined;
  e = require("../Observable");
  exports.fromSubscribable = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/fromSubscribable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
