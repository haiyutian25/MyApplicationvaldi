// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=13B file=valdi_rxjs/src/operators/sample
// args: e
// closure: u, i
function {
  u = true;
  true;
  i = e;
  e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=67B file=valdi_rxjs/src/operators/sample
// locals: e
// closure: u, i, s
function {
  if (!(u)) goto L_42;
  let e;
  u = false;
  false;
  e = i;
  i = null;
  null;
  s.next(e);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=2 bc=203B file=valdi_rxjs/src/operators/sample
// args: e, s
// locals: u, i
// closure: t, o, r
function {
  let i;
  let u;
  u = false;
  i = null;
  e.subscribe(t.createOperatorSubscriber(s, function <atom:0>));
  o.subscribe(t.createOperatorSubscriber(s, function <atom:0>, r.noop));
  return;
}

// fn o  args=1 vars=1 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/sample
// args: o
// closure: t, r, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/sample
// args: require, module, exports
// locals: e, r, t, o
function {
  o = function o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.sample = undefined;
  e = require("../util/lift");
  r = require("../util/noop");
  t = require("./OperatorSubscriber");
  exports.sample = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/sample
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
