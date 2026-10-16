// fn o  args=1 vars=2 closure=2 cpool=0 bc=89B file=valdi_rxjs/src/observable/of
// args: o
// locals: t
// closure: e, r
function {
  o = ...0;
  let t;
  t = e.popScheduler(o);
  return r.from(o, t);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/observable/of
// args: require, module, exports
// locals: e, r, o
function {
  o = function o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.of = undefined;
  e = require("../util/args");
  r = require("./from");
  exports.of = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/of
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
