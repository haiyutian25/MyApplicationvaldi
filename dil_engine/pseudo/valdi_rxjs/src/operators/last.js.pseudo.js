// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=7B file=valdi_rxjs/src/operators/last
// args: t, e
// closure: p, f
function {
  return p(t, e, f);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_rxjs/src/operators/last
// closure: t
function {
  return new t.EmptyError();
}

// fn <atom:0>  args=1 vars=1 closure=9 cpool=2 bc=241B file=valdi_rxjs/src/operators/last
// args: f
// closure: p, t, e, o, r, l, u, s, i
function {
  if (!(p)) goto L_4e;
  goto L_72;
  // [栈深重同步 3 -> 2]
  if (!(l)) goto L_c7;
  goto L_ee;
  // [栈深重同步 5 -> 4]
  return f.pipe(o.identity, r.takeLast(1), i.throwIfEmpty(function <atom:0>));   // tail call
}

// fn p  args=2 vars=4 closure=6 cpool=1 bc=14B file=valdi_rxjs/src/operators/last
// args: p, s
// locals: l, arguments
// closure: t, e, o, r, u, i
function {
  arguments = <special_object 0>;
  let l;
  l = (arguments.length >= 2);
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=1 bc=152B file=valdi_rxjs/src/operators/last
// args: require, module, exports
// locals: t, e, r, i, u, o, p
function {
  p = function p;
  let o;
  let u;
  let i;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.last = undefined;
  t = require("../util/EmptyError");
  e = require("./filter");
  r = require("./takeLast");
  i = require("./throwIfEmpty");
  u = require("./defaultIfEmpty");
  o = require("../util/identity");
  exports.last = p;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/last
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
