// fn <atom:0>  args=1 vars=4 closure=4 cpool=0 bc=97B file=valdi_rxjs/src/operators/skipLast
// args: e
// locals: t, u, n
// closure: u, i, s, r
function {
  let t;
  u = <u_new>;
  t = (u++);
  if (!((t < i))) goto L_1b;
  s[t] = e;
  return;
  let n;
  let u;
  u = (t % i);
  n = s[u];
  s[u] = e;
  r.next(n);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=6B file=valdi_rxjs/src/operators/skipLast
// closure: s
function {
  s = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=2 bc=100B file=valdi_rxjs/src/operators/skipLast
// args: e, r
// locals: s, u
// closure: i, t
function {
  let u;
  let s;
  s = new Array(i);
  u = 0;
  e.subscribe(t.createOperatorSubscriber(r, function <atom:0>));
  return function <atom:0>;
}

// fn i  args=1 vars=1 closure=3 cpool=1 bc=82B file=valdi_rxjs/src/operators/skipLast
// args: i
// closure: t, e, r
function {
  if (!((i <= 0))) goto L_2a;
  return e.identity;
  return r.operate(function <atom:0>);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/skipLast
// args: require, module, exports
// locals: e, r, t, i
function {
  i = function i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.skipLast = undefined;
  e = require("../util/identity");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  exports.skipLast = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/skipLast
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
