// fn t  args=1 vars=1 closure=3 cpool=0 bc=118B file=valdi_rxjs/src/observable/onErrorResumeNext
// args: t
// closure: e, o, r
function {
  t = ...0;
  return e.onErrorResumeNext(o.argsOrArgArray(t))(r.EMPTY);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/observable/onErrorResumeNext
// args: require, module, exports
// locals: r, e, o, t
function {
  t = function t;
  let o;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.onErrorResumeNext = undefined;
  r = require("./empty");
  e = require("../operators/onErrorResumeNext");
  o = require("../util/argsOrArgArray");
  exports.onErrorResumeNext = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/onErrorResumeNext
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
