// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=124B file=valdi_rxjs/src/operators/concat
// args: e, t
// closure: r, o, c, u
function {
  // append([e], 1, c)
  c;
  r.concatAll()(o.from([e], u)).subscribe(t);
  return;
}

// fn c  args=1 vars=2 closure=4 cpool=1 bc=87B file=valdi_rxjs/src/operators/concat
// args: c
// locals: u
// closure: r, o, t, e
function {
  c = ...0;
  let u;
  u = t.popScheduler(c);
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/operators/concat
// args: require, module, exports
// locals: e, r, t, o, c
function {
  c = function c;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.concat = undefined;
  e = require("../util/lift");
  r = require("./concatAll");
  t = require("../util/args");
  o = require("../observable/from");
  exports.concat = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/concat
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
