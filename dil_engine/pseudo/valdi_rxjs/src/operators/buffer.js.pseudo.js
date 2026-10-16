// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=valdi_rxjs/src/operators/buffer
// args: e
// closure: s
function {
  return s.push(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=79B file=valdi_rxjs/src/operators/buffer
// closure: o, s
function {
  o.next(s);
  o.complete();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=56B file=valdi_rxjs/src/operators/buffer
// locals: e
// closure: s, o
function {
  let e;
  e = s;
  s = [];
  [];
  o.next(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=6B file=valdi_rxjs/src/operators/buffer
// closure: s
function {
  s = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=4 bc=204B file=valdi_rxjs/src/operators/buffer
// args: e, o
// locals: s
// closure: t, u, r
function {
  let s;
  s = [];
  e.subscribe(t.createOperatorSubscriber(o, function <atom:0>, function <atom:0>));
  u.subscribe(t.createOperatorSubscriber(o, function <atom:0>, r.noop));
  return function <atom:0>;
}

// fn u  args=1 vars=1 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/buffer
// args: u
// closure: t, r, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/buffer
// args: require, module, exports
// locals: e, r, t, u
function {
  u = function u;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.buffer = undefined;
  e = require("../util/lift");
  r = require("../util/noop");
  t = require("./OperatorSubscriber");
  exports.buffer = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/buffer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
