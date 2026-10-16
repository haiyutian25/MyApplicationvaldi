// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=valdi_rxjs/src/operators/sequenceEqual
// args: e, r
function {
  return (e === r);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=77B file=valdi_rxjs/src/operators/sequenceEqual
// args: e
// closure: c
function {
  c.next(e);
  c.complete();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=237B file=valdi_rxjs/src/operators/sequenceEqual
// args: r
// locals: u, c
// closure: t, b, e, s
function {
  let c;
  let u;
  if (((undefined === undefined))) goto L_55;
  u = <to_object>(undefined).buffer;
  c = <to_object>(undefined).complete;
  <to_object>(undefined);
  goto L_59;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_b;
  // [栈深重同步 1 -> 0]
  if (!((0 === u.length))) goto L_b7;
  if (!(c)) goto L_6e;
  goto L_ec;
  // [栈深重同步 1 -> 0]
  goto L_ec;
  // [栈深重同步 1 -> 0]
  if (!(!s(r, u.shift()))) goto L_ec;
  b(false);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=167B file=valdi_rxjs/src/operators/sequenceEqual
// locals: r, s
// closure: e, t, b, u
function {
  let s;
  let r;
  e.complete = true;
  if (((undefined === undefined))) goto L_61;
  r = <to_object>(undefined).complete;
  s = <to_object>(undefined).buffer;
  <to_object>(undefined);
  goto L_65;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_76;
  b((0 === s.length));
  if (!((u == null))) goto L_82;
  u;
  goto L_a6;
  undefined.unsubscribe();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=2 bc=50B file=valdi_rxjs/src/operators/sequenceEqual
// args: e, t
// locals: u
// closure: b, s, r, c
function {
  let u;
  u = r.createOperatorSubscriber(c, function <atom:0>, function <atom:0>);
  return u;
}

// fn <atom:0>  args=2 vars=6 closure=4 cpool=2 bc=130B file=valdi_rxjs/src/operators/sequenceEqual
// args: e, c
// locals: o, n, b, i
// closure: s, r, u, t
function {
  let i;
  let b;
  let n;
  let o;
  o = u();
  n = u();
  b = function <atom:0>;
  i = function <atom:0>;
  e.subscribe(i(o, n));
  t.subscribe(i(n, o));
  return;
}

// fn t  args=2 vars=4 closure=3 cpool=2 bc=64B file=valdi_rxjs/src/operators/sequenceEqual
// args: t, s
// locals: t#1, s#1
// closure: r, u, e
function {
  let s#1;
  let t#1;
  t#1 = t;
  if (!((s === undefined))) goto L_16;
  s;
  s = function <atom:0>;
  s#1 = function <atom:0>;
  return e.operate(function <atom:0>);   // tail call
}

// fn u  args=0 vars=0 closure=0 cpool=0 bc=17B file=valdi_rxjs/src/operators/sequenceEqual
function {
  return {buffer: [], complete: false};
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=107B file=valdi_rxjs/src/operators/sequenceEqual
// args: require, module, exports
// locals: e, r, t, u
function {
  t = function t;
  u = function u;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.sequenceEqual = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.sequenceEqual = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/sequenceEqual
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
