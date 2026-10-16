// fn <atom:0>  args=1 vars=1 closure=8 cpool=0 bc=154B file=valdi_rxjs/src/operators/catchError
// args: e
// closure: o, r, s, i, u, b, t, c
function {
  o = r.innerFrom(s(e, i(s)(u)));
  r.innerFrom(s(e, i(s)(u)));
  if (!(b)) goto L_93;
  b.unsubscribe();
  b = null;
  null;
  goto L_99;
  // [栈深重同步 1 -> 0]
  c = true;
  true;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=1 bc=196B file=valdi_rxjs/src/operators/catchError
// args: u, t
// locals: o, b, c
// closure: r, s, i, e
function {
  let c;
  let b;
  let o;
  o = undefined;
  b = null;
  c = false;
  b = u.subscribe(e.createOperatorSubscriber(t, undefined, undefined, function <atom:0>));
  u.subscribe(e.createOperatorSubscriber(t, undefined, undefined, function <atom:0>));
  if (!(c)) goto L_c3;
  b.unsubscribe();
  b = null;
  null;
  o.subscribe(t);
  return;
}

// fn i  args=1 vars=1 closure=4 cpool=1 bc=41B file=valdi_rxjs/src/operators/catchError
// args: s
// closure: r, i, e, u
function {
  return u.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/catchError
// args: require, module, exports
// locals: r, e, u, i
function {
  i = function i;
  let u;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.catchError = undefined;
  r = require("../observable/innerFrom");
  e = require("./OperatorSubscriber");
  u = require("../util/lift");
  exports.catchError = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/catchError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
