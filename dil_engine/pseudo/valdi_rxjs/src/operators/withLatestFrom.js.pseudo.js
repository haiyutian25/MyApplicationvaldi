// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=valdi_rxjs/src/operators/withLatestFrom
function {
  return false;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=125B file=valdi_rxjs/src/operators/withLatestFrom
// args: e
// closure: l, n, b, a, i
function {
  l[n] = e;
  if ((b)) goto L_7c;
  if ((a[n])) goto L_7c;
  a[n] = true;
  b = a.every(i.identity);
  if (!(a.every(i.identity))) goto L_7c;
  a = null;
  null;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=85B file=valdi_rxjs/src/operators/withLatestFrom
// args: e
// locals: r
// closure: b, l, s, n
function {
  if (!(b)) goto L_54;
  let r;
  // append([e], 1, l)
  l;
  r = [e];
  if (!(n)) goto L_4d;
  // append([], 0, r)
  r;
  goto L_50;
  // [栈深重同步 3 -> 2]
  s.next(r);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=6 cpool=3 bc=342B file=valdi_rxjs/src/operators/withLatestFrom
// args: e, s
// locals: c, l, a, b, n
// closure: i, n, u, t, r, o
function {
  let b;
  let a;
  let l;
  let c;
  c = u.length;
  l = new Array(c);
  a = u.map(function <atom:0>);
  b = false;
  let n;
  n = 0;
  // close_loc n
  if (!((n < c))) goto L_105;
  t.innerFrom(u[n]).subscribe(r.createOperatorSubscriber(s, function <atom:0>, o.noop));
  // close_loc n
  n = <n_new>;
  (n++);
  goto L_50;
  // close_loc n
  e.subscribe(r.createOperatorSubscriber(s, function <atom:0>));
  return;
}

// fn u  args=1 vars=2 closure=6 cpool=1 bc=87B file=valdi_rxjs/src/operators/withLatestFrom
// args: u
// locals: n
// closure: i, t, r, o, s, e
function {
  u = ...0;
  let n;
  n = s.popResultSelector(u);
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=1 bc=152B file=valdi_rxjs/src/operators/withLatestFrom
// args: require, module, exports
// locals: e, r, t, i, o, s, u
function {
  u = function u;
  let s;
  let o;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.withLatestFrom = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  t = require("../observable/innerFrom");
  i = require("../util/identity");
  o = require("../util/noop");
  s = require("../util/args");
  exports.withLatestFrom = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/withLatestFrom
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
