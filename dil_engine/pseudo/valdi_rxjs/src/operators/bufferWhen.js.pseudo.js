// fn <atom:0>  args=0 vars=1 closure=8 cpool=0 bc=270B file=valdi_rxjs/src/operators/bufferWhen
// locals: e
// closure: s, i, n, u, o, t, b, r
function {
  let e;
  if (!((s == null))) goto L_e;
  s;
  goto L_32;
  undefined.unsubscribe();
  e = i;
  i = [];
  [];
  if (!(e)) goto L_6e;
  n.next(e);
  s = t.createOperatorSubscriber(n, b, r.noop);
  u.innerFrom(o()).subscribe(t.createOperatorSubscriber(n, b, r.noop));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=48B file=valdi_rxjs/src/operators/bufferWhen
// args: e
// closure: i
function {
  if (!((i == null))) goto L_a;
  i;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.push(e);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=86B file=valdi_rxjs/src/operators/bufferWhen
// closure: i, n
function {
  if (!(i)) goto L_2f;
  n.next(i);
  n.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=10B file=valdi_rxjs/src/operators/bufferWhen
// closure: i, s
function {
  s = null;
  i = null;
  return null;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=4 bc=111B file=valdi_rxjs/src/operators/bufferWhen
// args: e, n
// locals: i, s, b
// closure: u, o, t, r
function {
  let b;
  let s;
  let i;
  i = null;
  s = null;
  b = function <atom:0>;
  b();
  e.subscribe(t.createOperatorSubscriber(n, function <atom:0>, function <atom:0>, undefined, function <atom:0>));
  return;
}

// fn o  args=1 vars=1 closure=4 cpool=1 bc=41B file=valdi_rxjs/src/operators/bufferWhen
// args: o
// closure: u, t, r, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/operators/bufferWhen
// args: require, module, exports
// locals: e, r, t, u, o
function {
  o = function o;
  let u;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.bufferWhen = undefined;
  e = require("../util/lift");
  r = require("../util/noop");
  t = require("./OperatorSubscriber");
  u = require("../observable/innerFrom");
  exports.bufferWhen = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/bufferWhen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
