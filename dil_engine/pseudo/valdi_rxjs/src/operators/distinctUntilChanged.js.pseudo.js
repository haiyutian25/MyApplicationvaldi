// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=83B file=valdi_rxjs/src/operators/distinctUntilChanged
// args: e
// locals: r
// closure: u, s, i, n, t
function {
  let r;
  r = u(e);
  if (!(!s)) goto L_17;
  if ((i(n, r))) goto L_52;
  s = false;
  false;
  n = r;
  r;
  t.next(e);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=1 bc=89B file=valdi_rxjs/src/operators/distinctUntilChanged
// args: e, t
// locals: n, s
// closure: u, i, r
function {
  let s;
  let n;
  n = undefined;
  s = true;
  e.subscribe(r.createOperatorSubscriber(t, function <atom:0>));
  return;
}

// fn i  args=2 vars=4 closure=4 cpool=1 bc=101B file=valdi_rxjs/src/operators/distinctUntilChanged
// args: i, u
// locals: i#1, u#1
// closure: r, e, n, t
function {
  let u#1;
  let i#1;
  i#1 = i;
  if (!((u === undefined))) goto L_33;
  u;
  u = e.identity;
  u#1 = e.identity;
  if (!((i == null))) goto L_3b;
  i;
  i = n;
  return t.operate(function <atom:0>);   // tail call
}

// fn n  args=2 vars=2 closure=0 cpool=0 bc=4B file=valdi_rxjs/src/operators/distinctUntilChanged
// args: e, t
function {
  return (e === t);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=119B file=valdi_rxjs/src/operators/distinctUntilChanged
// args: require, module, exports
// locals: e, t, r, i, n
function {
  i = function i;
  n = function n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.distinctUntilChanged = undefined;
  e = require("../util/identity");
  t = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.distinctUntilChanged = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/distinctUntilChanged
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
