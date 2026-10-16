// fn <atom:0>  args=1 vars=1 closure=8 cpool=0 bc=133B file=valdi_rxjs/src/operators/single
// args: r
// closure: l, i, a, o, c, n, e, s
function {
  l = true;
  true;
  if (!(i)) goto L_18;
  a = <a_new>;
  if ((!i(r, (a++), o))) goto L_84;
  if (!(c)) goto L_77;
  n.error(new e.SequenceError("Too many matching values"));
  c = true;
  true;
  s = r;
  r;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=216B file=valdi_rxjs/src/operators/single
// closure: c, n, s, l, t, r
function {
  if (!(c)) goto L_56;
  n.next(s);
  goto L_d7;
  // [栈深重同步 1 -> 0]
  if (!(l)) goto L_ac;
  goto L_d4;
  // [栈深重同步 3 -> 2]
  n.error(new r.EmptyError());
  return;
}

// fn <atom:0>  args=2 vars=6 closure=5 cpool=2 bc=102B file=valdi_rxjs/src/operators/single
// args: o, n
// locals: s, c, l, a
// closure: i, e, t, r, u
function {
  let a;
  let l;
  let c;
  let s;
  s = undefined;
  c = false;
  l = false;
  a = 0;
  o.subscribe(u.createOperatorSubscriber(n, function <atom:0>, function <atom:0>));
  return;
}

// fn i  args=1 vars=1 closure=5 cpool=1 bc=41B file=valdi_rxjs/src/operators/single
// args: i
// closure: e, t, r, u, o
function {
  return o.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=valdi_rxjs/src/operators/single
// args: require, module, exports
// locals: r, e, t, o, u, i
function {
  i = function i;
  let u;
  let o;
  let t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.single = undefined;
  r = require("../util/EmptyError");
  e = require("../util/SequenceError");
  t = require("../util/NotFoundError");
  o = require("../util/lift");
  u = require("./OperatorSubscriber");
  exports.single = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/single
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
