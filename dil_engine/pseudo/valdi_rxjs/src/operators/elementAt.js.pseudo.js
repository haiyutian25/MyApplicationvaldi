// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=4B file=valdi_rxjs/src/operators/elementAt
// args: e, t
// closure: o
function {
  return (t === o);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_rxjs/src/operators/elementAt
// closure: e
function {
  return new e.ArgumentOutOfRangeError();
}

// fn <atom:0>  args=1 vars=1 closure=8 cpool=2 bc=200B file=valdi_rxjs/src/operators/elementAt
// args: l
// closure: o, e, t, n, i, u, f, r
function {
  if (!(i)) goto L_9e;
  goto L_c5;
  // [栈深重同步 5 -> 4]
  return l.pipe(t.filter(function <atom:0>), n.take(1), r.throwIfEmpty(function <atom:0>));   // tail call
}

// fn o  args=2 vars=4 closure=5 cpool=1 bc=60B file=valdi_rxjs/src/operators/elementAt
// args: o, f
// locals: i, arguments
// closure: e, t, n, u, r
function {
  arguments = <special_object 0>;
  let i;
  if (!((o < 0))) goto L_34;
  throw new e.ArgumentOutOfRangeError();
  i = (arguments.length >= 2);
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=valdi_rxjs/src/operators/elementAt
// args: require, module, exports
// locals: e, t, r, u, n, o
function {
  o = function o;
  let n;
  let u;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.elementAt = undefined;
  e = require("../util/ArgumentOutOfRangeError");
  t = require("./filter");
  r = require("./throwIfEmpty");
  u = require("./defaultIfEmpty");
  n = require("./take");
  exports.elementAt = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/elementAt
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
