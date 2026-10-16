// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=141B file=valdi_rxjs/src/operators/distinct
// args: e
// locals: r
// closure: i, c, o
function {
  let r;
  if (!(i)) goto L_b;
  goto L_c;
  // [栈深重同步 1 -> 0]
  r = e;
  if ((c.has(r))) goto L_8c;
  c.add(r);
  o.next(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_rxjs/src/operators/distinct
// closure: c
function {
  return c.clear();   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=2 bc=213B file=valdi_rxjs/src/operators/distinct
// args: e, o
// locals: c
// closure: i, r, s, t
function {
  let c;
  c = new Set();
  e.subscribe(r.createOperatorSubscriber(o, function <atom:0>));
  if (!((s == null))) goto L_64;
  s;
  goto L_d4;
  undefined.subscribe(r.createOperatorSubscriber(o, function <atom:0>, t.noop));
  return;
}

// fn i  args=2 vars=2 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/distinct
// args: i, s
// closure: r, t, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/distinct
// args: require, module, exports
// locals: e, r, t, i
function {
  i = function i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.distinct = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  t = require("../util/noop");
  exports.distinct = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/distinct
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
