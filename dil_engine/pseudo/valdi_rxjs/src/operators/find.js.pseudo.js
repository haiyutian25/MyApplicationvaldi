// fn t  args=2 vars=2 closure=2 cpool=0 bc=48B file=valdi_rxjs/src/operators/find
// args: r, t
// closure: e, o
function {
  return e.operate(o(r, t, "value"));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=149B file=valdi_rxjs/src/operators/find
// args: r
// locals: s
// closure: c, e, t, o, n, i
function {
  let s;
  c = <c_new>;
  s = (c++);
  if (!(e.call(t, r, s, o))) goto L_94;
  if (!(i)) goto L_68;
  goto L_69;
  // [栈深重同步 3 -> 2]
  n.next(r);
  n.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=85B file=valdi_rxjs/src/operators/find
// closure: n, i
function {
  if (!(i)) goto L_2a;
  goto L_2b;
  // [栈深重同步 3 -> 2]
  n.next(undefined);
  n.complete();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=2 bc=85B file=valdi_rxjs/src/operators/find
// args: o, n
// locals: c
// closure: e, t, i, r
function {
  let c;
  c = 0;
  o.subscribe(r.createOperatorSubscriber(n, function <atom:0>, function <atom:0>));
  return;
}

// fn o  args=3 vars=4 closure=1 cpool=1 bc=14B file=valdi_rxjs/src/operators/find
// args: e, t, o
// locals: i
// closure: r
function {
  let i;
  i = ("index" === o);
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=129B file=valdi_rxjs/src/operators/find
// args: require, module, exports
// locals: e, r, t, o
function {
  t = function t;
  o = function o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.find = undefined;
  exports.createFind = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.find = t;
  exports.createFind = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/find
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
