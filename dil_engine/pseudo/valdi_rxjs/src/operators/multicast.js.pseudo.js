// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_rxjs/src/operators/multicast
// closure: o
function {
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=45B file=valdi_rxjs/src/operators/multicast
// args: t
// closure: e, r
function {
  return new e.ConnectableObservable(t, r);
}

// fn o  args=2 vars=3 closure=3 cpool=2 bc=140B file=valdi_rxjs/src/operators/multicast
// args: o, c
// locals: r
// closure: e, t, n
function {
  let r;
  if (!(t.isFunction(o))) goto L_2e;
  goto L_30;
  // [栈深重同步 1 -> 0]
  r = function <atom:0>;
  if (!(t.isFunction(c))) goto L_89;
  return n.connect(c, {connector: r});
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/multicast
// args: require, module, exports
// locals: e, t, n, o
function {
  o = function o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.multicast = undefined;
  e = require("../observable/ConnectableObservable");
  t = require("../util/isFunction");
  n = require("./connect");
  exports.multicast = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/multicast
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
