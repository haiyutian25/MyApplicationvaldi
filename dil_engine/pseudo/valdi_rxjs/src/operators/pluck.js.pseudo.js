// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=70B file=valdi_rxjs/src/operators/pluck
// args: e
// locals: o, n, e#1
// closure: r, t
function {
  let o;
  o = e;
  let n;
  n = 0;
  if (!((n < r))) goto L_42;
  let e#1;
  if (!((o == null))) goto L_21;
  o;
  goto L_27;
  e#1 = undefined[t[n]];
  if (!((undefined === e#1))) goto L_30;
  return;
  o = e#1;
  e#1;
  n = <n_new>;
  (n++);
  goto L_a;
  return o;
}

// fn t  args=1 vars=2 closure=1 cpool=1 bc=73B file=valdi_rxjs/src/operators/pluck
// args: t
// locals: r
// closure: e
function {
  t = ...0;
  let r;
  r = t.length;
  if (!((0 === r))) goto L_20;
  throw new Error("list of properties cannot be empty.");
  return e.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/operators/pluck
// args: require, module, exports
// locals: e, t
function {
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.pluck = undefined;
  e = require("./map");
  exports.pluck = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/pluck
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
