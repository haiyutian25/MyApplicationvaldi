// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=18B file=valdi_rxjs/src/operators/count
// args: e, t, o
// closure: r
function {
  if ((!r)) goto L_a;
  if (!(r(t, o))) goto L_10;
  return (e + 1);
  return e;
}

// fn r  args=1 vars=1 closure=1 cpool=1 bc=42B file=valdi_rxjs/src/operators/count
// args: r
// closure: e
function {
  return e.reduce(function <atom:0>, 0);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/operators/count
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.count = undefined;
  e = require("./reduce");
  exports.count = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/count
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
