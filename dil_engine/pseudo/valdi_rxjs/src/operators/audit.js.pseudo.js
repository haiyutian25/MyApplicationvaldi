// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=165B file=valdi_rxjs/src/operators/audit
// locals: e
// closure: s, i, l, o, c
function {
  if (!((s == null))) goto L_b;
  s;
  goto L_2f;
  undefined.unsubscribe();
  s = null;
  null;
  if (!(i)) goto L_78;
  let e;
  i = false;
  false;
  e = l;
  l = null;
  null;
  o.next(e);
  if (!(c)) goto L_a4;
  o.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=51B file=valdi_rxjs/src/operators/audit
// closure: s, c, o
function {
  s = null;
  null;
  if (!(c)) goto L_32;
  o.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=9 cpool=0 bc=152B file=valdi_rxjs/src/operators/audit
// args: e
// closure: i, l, s, r, u, t, o, n, b
function {
  i = true;
  true;
  l = e;
  e;
  if ((s)) goto L_97;
  s = t.createOperatorSubscriber(o, n, b);
  r.innerFrom(u(e)).subscribe(t.createOperatorSubscriber(o, n, b));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=101B file=valdi_rxjs/src/operators/audit
// closure: c, i, s, o
function {
  c = true;
  true;
  if ((!i)) goto L_3b;
  if ((!s)) goto L_3b;
  if (!(s.closed)) goto L_64;
  o.complete();
  return;
}

// fn <atom:0>  args=2 vars=8 closure=3 cpool=4 bc=126B file=valdi_rxjs/src/operators/audit
// args: e, o
// locals: i, l, s, c, n, b
// closure: r, u, t
function {
  let b;
  let n;
  let c;
  let s;
  let l;
  let i;
  i = false;
  l = null;
  s = null;
  c = false;
  n = function <atom:0>;
  b = function <atom:0>;
  e.subscribe(t.createOperatorSubscriber(o, function <atom:0>, function <atom:0>));
  return;
}

// fn u  args=1 vars=1 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/audit
// args: u
// closure: r, t, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/audit
// args: require, module, exports
// locals: e, r, t, u
function {
  u = function u;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.audit = undefined;
  e = require("../util/lift");
  r = require("../observable/innerFrom");
  t = require("./OperatorSubscriber");
  exports.audit = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/audit
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
