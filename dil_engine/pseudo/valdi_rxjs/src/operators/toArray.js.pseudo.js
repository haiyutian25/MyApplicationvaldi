// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=41B file=valdi_rxjs/src/operators/toArray
// args: e, r
function {
  e.push(r);
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=83B file=valdi_rxjs/src/operators/toArray
// args: r, u
// closure: e, t
function {
  e.reduce(t, [])(r).subscribe(u);
  return;
}

// fn u  args=0 vars=0 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/toArray
// closure: e, t, r
function {
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=115B file=valdi_rxjs/src/operators/toArray
// args: require, module, exports
// locals: e, r, t, u
function {
  u = function u;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.toArray = undefined;
  e = require("./reduce");
  r = require("../util/lift");
  t = function <atom:0>;
  exports.toArray = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/toArray
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
