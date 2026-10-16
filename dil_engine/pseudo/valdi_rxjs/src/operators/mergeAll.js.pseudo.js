// fn t  args=1 vars=2 closure=2 cpool=0 bc=90B file=valdi_rxjs/src/operators/mergeAll
// args: t
// locals: t#1
// closure: e, r
function {
  let t#1;
  if (!((t === undefined))) goto L_d;
  t;
  t = (1 / 0);
  t#1 = (1 / 0);
  return e.mergeMap(r.identity, t);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/mergeAll
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.mergeAll = undefined;
  e = require("./mergeMap");
  r = require("../util/identity");
  exports.mergeAll = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/mergeAll
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
