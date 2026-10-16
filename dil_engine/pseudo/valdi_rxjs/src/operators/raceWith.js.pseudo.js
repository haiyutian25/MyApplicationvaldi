// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=48B file=valdi_rxjs/src/operators/raceWith
// args: t, r
// closure: e, i
function {
  // append([t], 1, i)
  i;
  e.raceInit([t])(r);
  return;
}

// fn i  args=1 vars=1 closure=3 cpool=1 bc=84B file=valdi_rxjs/src/operators/raceWith
// args: i
// closure: e, t, r
function {
  i = ...0;
  if (!(...0.length)) goto L_2f;
  return t.operate(function <atom:0>);
  return r.identity;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/raceWith
// args: require, module, exports
// locals: e, t, r, i
function {
  i = function i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.raceWith = undefined;
  e = require("../observable/race");
  t = require("../util/lift");
  r = require("../util/identity");
  exports.raceWith = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/raceWith
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
