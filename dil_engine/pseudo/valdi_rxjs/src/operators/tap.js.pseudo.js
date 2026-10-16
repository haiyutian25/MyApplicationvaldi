// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=89B file=valdi_rxjs/src/operators/tap
// args: e
// closure: n, r
function {
  if (!((n.next == null))) goto L_2d;
  n.next;
  n;
  goto L_31;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e);
  r.next(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=94B file=valdi_rxjs/src/operators/tap
// closure: i, n, r
function {
  i = false;
  false;
  if (!((n.complete == null))) goto L_34;
  n.complete;
  n;
  goto L_37;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  r.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=96B file=valdi_rxjs/src/operators/tap
// args: e
// closure: i, n, r
function {
  i = false;
  false;
  if (!((n.error == null))) goto L_34;
  n.error;
  n;
  goto L_38;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e);
  r.error(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=105B file=valdi_rxjs/src/operators/tap
// closure: i, n
function {
  if (!(i)) goto L_37;
  if (!((n.unsubscribe == null))) goto L_34;
  n.unsubscribe;
  n;
  goto L_37;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  if (!((n.finalize == null))) goto L_65;
  n.finalize;
  n;
  goto L_68;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=4 bc=141B file=valdi_rxjs/src/operators/tap
// args: e, r
// locals: i
// closure: n, t
function {
  let i;
  if (!((n.subscribe == null))) goto L_30;
  n.subscribe;
  n;
  goto L_33;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  i = true;
  e.subscribe(t.createOperatorSubscriber(r, function <atom:0>, function <atom:0>, function <atom:0>, function <atom:0>));
  return;
}

// fn o  args=3 vars=4 closure=4 cpool=1 bc=158B file=valdi_rxjs/src/operators/tap
// args: o, u, s
// locals: n
// closure: t, e, r, i
function {
  let n;
  if ((e.isFunction(o))) goto L_33;
  if ((u)) goto L_33;
  if (!(s)) goto L_4a;
  goto L_4b;
  // [栈深重同步 1 -> 0]
  n = o;
  if (!(n)) goto L_79;
  return r.operate(function <atom:0>);
  return i.identity;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/operators/tap
// args: require, module, exports
// locals: e, r, t, i, o
function {
  o = function o;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.tap = undefined;
  e = require("../util/isFunction");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  i = require("../util/identity");
  exports.tap = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/tap
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
