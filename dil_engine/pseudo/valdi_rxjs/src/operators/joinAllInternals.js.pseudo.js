// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=valdi_rxjs/src/operators/joinAllInternals
// args: e
// closure: u
function {
  return u(e);   // tail call
}

// fn u  args=2 vars=2 closure=5 cpool=1 bc=194B file=valdi_rxjs/src/operators/joinAllInternals
// args: u, o
// closure: t, n, i, r, e
function {
  if (!(o)) goto L_9b;
  goto L_bf;
  // [栈深重同步 4 -> 3]
  return t.pipe(n.toArray(), i.mergeMap(function <atom:0>), e.identity);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=valdi_rxjs/src/operators/joinAllInternals
// args: require, module, exports
// locals: e, r, t, i, n, u
function {
  u = function u;
  let n;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.joinAllInternals = undefined;
  e = require("../util/identity");
  r = require("../util/mapOneOrManyArgs");
  t = require("../util/pipe");
  i = require("./mergeMap");
  n = require("./toArray");
  exports.joinAllInternals = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/joinAllInternals
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
