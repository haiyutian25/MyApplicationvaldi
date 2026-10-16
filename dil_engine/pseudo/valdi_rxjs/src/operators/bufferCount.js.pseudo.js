// fn <atom:0>  args=1 vars=4 closure=6 cpool=0 bc=298B file=valdi_rxjs/src/operators/bufferCount
// args: e
// locals: r, t, o
// closure: i, u, n, o, t, s
function {
  let r;
  r = null;
  i = <i_new>;
  if (!((((i++) % u) === 0))) goto L_3e;
  n.push([]);
  let t;
  for (const t of n) {
    t.push(e);
    if (!((o <= t.length))) goto L_b6;
    if (!((r == null))) goto L_87;
    r;
    r = [];
    [];
    r.push(t);
  }
  if (!(r)) goto L_129;
  let o;
  for (const o of r) {
    t.arrRemove(n, o);
    s.next(o);
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=95B file=valdi_rxjs/src/operators/bufferCount
// locals: e
// closure: n, s
function {
  let e;
  for (const e of n) {
    s.next(e);
  }
  s.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=6B file=valdi_rxjs/src/operators/bufferCount
// closure: n
function {
  n = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=3 bc=97B file=valdi_rxjs/src/operators/bufferCount
// args: e, s
// locals: n, i
// closure: u, o, t, r
function {
  let i;
  let n;
  n = [];
  i = 0;
  e.subscribe(r.createOperatorSubscriber(s, function <atom:0>, function <atom:0>, undefined, function <atom:0>));
  return;
}

// fn o  args=2 vars=4 closure=3 cpool=1 bc=66B file=valdi_rxjs/src/operators/bufferCount
// args: o, u
// locals: o#1, u#1
// closure: t, r, e
function {
  let u#1;
  let o#1;
  o#1 = o;
  if (!((u === undefined))) goto L_10;
  u;
  u = null;
  u#1 = null;
  if (!((u == null))) goto L_18;
  u;
  u = o;
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/bufferCount
// args: require, module, exports
// locals: e, r, t, o
function {
  o = function o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.bufferCount = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  t = require("../util/arrRemove");
  exports.bufferCount = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/bufferCount
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
