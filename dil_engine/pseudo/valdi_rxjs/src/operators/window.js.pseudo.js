// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=80B file=valdi_rxjs/src/operators/window
// args: e
// closure: i, c
function {
  i.error(e);
  c.error(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=48B file=valdi_rxjs/src/operators/window
// args: e
// closure: i
function {
  if (!((i == null))) goto L_a;
  i;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.next(e);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=78B file=valdi_rxjs/src/operators/window
// closure: i, c
function {
  i.complete();
  c.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=122B file=valdi_rxjs/src/operators/window
// closure: i, c, e
function {
  i.complete();
  i = new e.Subject();
  c.next(new e.Subject());
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=valdi_rxjs/src/operators/window
// closure: i
function {
  if (!((i == null))) goto L_b;
  i;
  goto L_2f;
  undefined.unsubscribe();
  i = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=5 bc=339B file=valdi_rxjs/src/operators/window
// args: r, c
// locals: i, s
// closure: e, t, u, o
function {
  let s;
  let i;
  i = new e.Subject();
  c.next(i.asObservable());
  s = function <atom:0>;
  r.subscribe(t.createOperatorSubscriber(c, function <atom:0>, function <atom:0>, s));
  u.subscribe(t.createOperatorSubscriber(c, function <atom:0>, o.noop, s));
  return function <atom:0>;
}

// fn u  args=1 vars=1 closure=4 cpool=1 bc=41B file=valdi_rxjs/src/operators/window
// args: u
// closure: e, t, o, r
function {
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/operators/window
// args: require, module, exports
// locals: e, r, t, o, u
function {
  u = function u;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.window = undefined;
  e = require("../Subject");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  o = require("../util/noop");
  exports.window = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/window
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
