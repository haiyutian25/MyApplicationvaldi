// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=7B file=valdi_rxjs/src/operators/first
// args: e, t
// closure: f, s
function {
  return f(e, t, s);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_rxjs/src/operators/first
// closure: e
function {
  return new e.EmptyError();
}

// fn <atom:0>  args=1 vars=1 closure=9 cpool=2 bc=241B file=valdi_rxjs/src/operators/first
// args: s
// closure: f, e, t, o, r, n, i, p, u
function {
  if (!(f)) goto L_4e;
  goto L_72;
  // [栈深重同步 3 -> 2]
  if (!(n)) goto L_c7;
  goto L_ee;
  // [栈深重同步 5 -> 4]
  return s.pipe(o.identity, r.take(1), u.throwIfEmpty(function <atom:0>));   // tail call
}

// fn f  args=2 vars=4 closure=6 cpool=1 bc=14B file=valdi_rxjs/src/operators/first
// args: f, p
// locals: n, arguments
// closure: e, t, o, r, i, u
function {
  arguments = <special_object 0>;
  let n;
  n = (arguments.length >= 2);
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=1 bc=152B file=valdi_rxjs/src/operators/first
// args: require, module, exports
// locals: e, t, r, i, u, o, f
function {
  f = function f;
  let o;
  let u;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.first = undefined;
  e = require("../util/EmptyError");
  t = require("./filter");
  r = require("./take");
  i = require("./defaultIfEmpty");
  u = require("./throwIfEmpty");
  o = require("../util/identity");
  exports.first = f;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/first
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
