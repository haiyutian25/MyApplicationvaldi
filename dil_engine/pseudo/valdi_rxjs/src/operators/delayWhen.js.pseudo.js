// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=195B file=valdi_rxjs/src/operators/delayWhen
// args: o
// closure: e, n, r, t, p, a
function {
  return e.concat(n.pipe(r.take(1), t.ignoreElements()), o.pipe(p(a)));   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=116B file=valdi_rxjs/src/operators/delayWhen
// args: e, t
// closure: a, r, o
function {
  return a(e, t).pipe(r.take(1), o.mapTo(e));   // tail call
}

// fn p  args=2 vars=2 closure=6 cpool=2 bc=46B file=valdi_rxjs/src/operators/delayWhen
// args: a, n
// closure: e, r, t, p, o, i
function {
  if (!(n)) goto L_6;
  return function <atom:0>;
  return i.mergeMap(function <atom:0>);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=valdi_rxjs/src/operators/delayWhen
// args: require, module, exports
// locals: e, r, t, o, i, p
function {
  p = function p;
  let i;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.delayWhen = undefined;
  e = require("../observable/concat");
  r = require("./take");
  t = require("./ignoreElements");
  o = require("./mapTo");
  i = require("./mergeMap");
  exports.delayWhen = p;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/delayWhen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
