// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=55B file=valdi_rxjs/src/operators/repeatWhen
// closure: n, o, s
function {
  if (!(n)) goto L_36;
  if (!(o)) goto L_36;
  s.complete();
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=18B file=valdi_rxjs/src/operators/repeatWhen
// closure: c, a, b
function {
  if (!(c)) goto L_b;
  goto L_11;
  // [栈深重同步 1 -> 0]
  b = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=12B file=valdi_rxjs/src/operators/repeatWhen
// closure: o, p
function {
  o = true;
  true;
  p();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=2 bc=202B file=valdi_rxjs/src/operators/repeatWhen
// closure: c, a, b, o, p, n, i, e, u, t, s
function {
  n = true;
  true;
  if (!(!p())) goto L_c9;
  if ((i)) goto L_a1;
  i = new e.Subject();
  new e.Subject();
  u(i).subscribe(t.createOperatorSubscriber(s, function <atom:0>, function <atom:0>));
  i.next();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=1 bc=159B file=valdi_rxjs/src/operators/repeatWhen
// closure: c, a, b, o, p, n, i, e, u, t, s, r
function {
  n = false;
  false;
  c = r.subscribe(t.createOperatorSubscriber(s, undefined, function <atom:0>));
  r.subscribe(t.createOperatorSubscriber(s, undefined, function <atom:0>));
  if (!(b)) goto L_9e;
  c.unsubscribe();
  c = null;
  null;
  b = false;
  false;
  a();
  return;
}

// fn <atom:0>  args=2 vars=9 closure=3 cpool=2 bc=58B file=valdi_rxjs/src/operators/repeatWhen
// args: r, s
// locals: c, i, b, o, n, p, a
// closure: e, u, t
function {
  let a;
  let p;
  let n;
  let o;
  let b;
  let i;
  let c;
  c = undefined;
  i = undefined;
  b = false;
  o = false;
  n = false;
  p = function <atom:0>;
  a = function <atom:0>;
  a();
  return;
}

// fn u  args=1 vars=1 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/repeatWhen
// args: u
// closure: e, t, r
function {
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/repeatWhen
// args: require, module, exports
// locals: e, r, t, u
function {
  u = function u;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.repeatWhen = undefined;
  e = require("../Subject");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  exports.repeatWhen = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/repeatWhen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
