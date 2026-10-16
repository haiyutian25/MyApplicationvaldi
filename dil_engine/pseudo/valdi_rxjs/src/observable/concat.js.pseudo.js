// fn t  args=1 vars=1 closure=3 cpool=0 bc=120B file=valdi_rxjs/src/observable/concat
// args: t
// closure: e, o, r
function {
  t = ...0;
  return e.concatAll()(o.from(t, r.popScheduler(t)));   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/observable/concat
// args: require, module, exports
// locals: e, r, o, t
function {
  t = function t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.concat = undefined;
  e = require("../operators/concatAll");
  r = require("../util/args");
  o = require("./from");
  exports.concat = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/concat
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
