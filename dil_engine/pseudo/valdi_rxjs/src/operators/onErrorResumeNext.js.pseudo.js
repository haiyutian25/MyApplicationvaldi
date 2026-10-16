// fn <atom:0>  args=0 vars=3 closure=6 cpool=0 bc=403B file=valdi_rxjs/src/operators/onErrorResumeNext
// locals: n, r, c
// closure: o, s, e, u, t, i
function {
  if (!(!o.closed)) goto L_192;
  if (!((s.length > 0))) goto L_16c;
  let c;
  let n;
  n = undefined;
  try { // catch -> L_94
  n = e.innerFrom(s.shift());
  e.innerFrom(s.shift());
  <?>;
  goto L_a3;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_a2
  u();
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  c = t.createOperatorSubscriber(o, undefined, i.noop, i.noop);
  n.subscribe(c);
  c.add(u);
  return;
  o.complete();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=1 bc=30B file=valdi_rxjs/src/operators/onErrorResumeNext
// args: r, o
// locals: s, u
// closure: e, t, i, n
function {
  let u;
  let s;
  // append([r], 1, n)
  n;
  s = [r];
  u = function <atom:0>;
  u();
  return;
}

// fn s  args=1 vars=2 closure=5 cpool=1 bc=87B file=valdi_rxjs/src/operators/onErrorResumeNext
// args: s
// locals: n
// closure: e, t, i, o, r
function {
  s = ...0;
  let n;
  n = o.argsOrArgArray(s);
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=valdi_rxjs/src/operators/onErrorResumeNext
// args: require, module, exports
// locals: r, e, o, t, i, s
function {
  s = function s;
  let i;
  let t;
  let o;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.onErrorResumeNext = undefined;
  r = require("../util/lift");
  e = require("../observable/innerFrom");
  o = require("../util/argsOrArgArray");
  t = require("./OperatorSubscriber");
  i = require("../util/noop");
  exports.onErrorResumeNext = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/onErrorResumeNext
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
