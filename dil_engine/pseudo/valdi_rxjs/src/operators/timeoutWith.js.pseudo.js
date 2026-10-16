// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_rxjs/src/operators/timeoutWith
// closure: o
function {
  return o;
}

// fn i  args=3 vars=6 closure=3 cpool=1 bc=253B file=valdi_rxjs/src/operators/timeoutWith
// args: i, o, u
// locals: s, l, n
// closure: e, t, r
function {
  let n;
  let l;
  let s;
  s = undefined;
  l = undefined;
  n = undefined;
  if (!((u == null))) goto L_39;
  u;
  u = e.async;
  if (!(t.isValidDate(i))) goto L_69;
  s = i;
  goto L_7a;
  // [栈深重同步 1 -> 0]
  if (!(("number" == typeof i))) goto L_7a;
  l = i;
  i;
  if (!(!o)) goto L_8e;
  throw new TypeError("No observable provided to switch to");
  n = function <atom:0>;
  function <atom:0>;
  if (!((null == s))) goto L_b7;
  if (!((null == l))) goto L_b7;
  throw new TypeError("No timeout provided.");
  return r.timeout({first: s, each: l, scheduler: u, with: n});   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/timeoutWith
// args: require, module, exports
// locals: e, t, r, i
function {
  i = function i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.timeoutWith = undefined;
  e = require("../scheduler/async");
  t = require("../util/isDate");
  r = require("./timeout");
  exports.timeoutWith = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/timeoutWith
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
