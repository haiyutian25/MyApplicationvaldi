// fn t  args=1 vars=1 closure=2 cpool=0 bc=90B file=valdi_rxjs/src/operators/race
// args: t
// closure: e, r
function {
  t = ...0;
  // append([], 0, r.argsOrArgArray(t))
  r.argsOrArgArray(t);
  return e.raceWith.apply(undefined, []);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/race
// args: require, module, exports
// locals: r, e, t
function {
  t = function t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.race = undefined;
  r = require("../util/argsOrArgArray");
  e = require("./raceWith");
  exports.race = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/race
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
