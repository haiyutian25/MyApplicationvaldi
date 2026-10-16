// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=89B file=valdi_rxjs/src/operators/publishReplay
// args: i
// closure: t, e, u, s, n, o
function {
  return t.multicast(new e.ReplaySubject(u, s, n), o)(i);   // tail call
}

// fn u  args=4 vars=5 closure=3 cpool=1 bc=102B file=valdi_rxjs/src/operators/publishReplay
// args: u, s, r, n
// locals: o
// closure: t, e, i
function {
  let o;
  if (!(r)) goto L_35;
  if (!(!i.isFunction(r))) goto L_35;
  n = r;
  r;
  if (!(i.isFunction(r))) goto L_61;
  goto L_62;
  // [栈深重同步 1 -> 0]
  o = undefined;
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/publishReplay
// args: require, module, exports
// locals: e, t, i, u
function {
  u = function u;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.publishReplay = undefined;
  e = require("../ReplaySubject");
  t = require("./multicast");
  i = require("../util/isFunction");
  exports.publishReplay = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/publishReplay
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
