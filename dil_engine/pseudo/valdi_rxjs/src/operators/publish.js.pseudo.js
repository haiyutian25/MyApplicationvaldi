// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=valdi_rxjs/src/operators/publish
// args: e
// closure: r, u
function {
  return r.connect(u)(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=81B file=valdi_rxjs/src/operators/publish
// args: r
// closure: t, e
function {
  return t.multicast(new e.Subject())(r);   // tail call
}

// fn u  args=1 vars=1 closure=3 cpool=2 bc=9B file=valdi_rxjs/src/operators/publish
// args: u
// closure: r, t, e
function {
  if (!(u)) goto L_6;
  return function <atom:0>;
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/publish
// args: require, module, exports
// locals: e, t, r, u
function {
  u = function u;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.publish = undefined;
  e = require("../Subject");
  t = require("./multicast");
  r = require("./connect");
  exports.publish = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/publish
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
