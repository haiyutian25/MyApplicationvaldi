// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=53B file=valdi_rxjs/src/operators/switchMap
// closure: b, u, o
function {
  if (!(b)) goto L_34;
  if (!(!u)) goto L_34;
  return o.complete();
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=59B file=valdi_rxjs/src/operators/switchMap
// args: e
// closure: o, i, r, l, b
function {
  if (!(i)) goto L_37;
  b = <b_new>;
  goto L_38;
  // [栈深重同步 3 -> 2]
  return o.next(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=11B file=valdi_rxjs/src/operators/switchMap
// closure: u, n
function {
  u = null;
  null;
  n();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=8 cpool=2 bc=192B file=valdi_rxjs/src/operators/switchMap
// args: r
// locals: b, l
// closure: o, i, u, n, c, e, s, t
function {
  let l;
  let b;
  if (!((u == null))) goto L_11;
  u;
  goto L_35;
  undefined.unsubscribe();
  b = 0;
  c = <c_new>;
  l = (c++);
  u = t.createOperatorSubscriber(o, function <atom:0>, function <atom:0>);
  e.innerFrom(s(r, l)).subscribe(t.createOperatorSubscriber(o, function <atom:0>, function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=12B file=valdi_rxjs/src/operators/switchMap
// closure: b, n
function {
  b = true;
  true;
  n();
  return;
}

// fn <atom:0>  args=2 vars=6 closure=4 cpool=3 bc=107B file=valdi_rxjs/src/operators/switchMap
// args: r, o
// locals: u, c, b, n
// closure: i, e, s, t
function {
  let n;
  let b;
  let c;
  let u;
  u = null;
  c = 0;
  b = false;
  n = function <atom:0>;
  r.subscribe(t.createOperatorSubscriber(o, function <atom:0>, function <atom:0>));
  return;
}

// fn s  args=2 vars=2 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/switchMap
// args: s, i
// closure: e, t, r
function {
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/switchMap
// args: require, module, exports
// locals: e, r, t, s
function {
  s = function s;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.switchMap = undefined;
  e = require("../observable/innerFrom");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  exports.switchMap = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/switchMap
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
