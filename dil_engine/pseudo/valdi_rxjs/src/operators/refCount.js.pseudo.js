// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=257B file=valdi_rxjs/src/operators/refCount
// locals: r, u
// closure: e, o, t
function {
  let u;
  let r;
  if ((!e)) goto L_63;
  if (((e._refCount <= 0))) goto L_63;
  e._refCount = (e._refCount --);
  if (!((0 < (e._refCount --)))) goto L_6c;
  o = null;
  null;
  return;
  r = e._connection;
  u = o;
  o = null;
  null;
  if ((!r)) goto L_da;
  if (!(u)) goto L_af;
  if (((r !== u))) goto L_da;
  r.unsubscribe();
  t.unsubscribe();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=1 bc=221B file=valdi_rxjs/src/operators/refCount
// args: e, t
// locals: o, u
// closure: r
function {
  let u;
  let o;
  o = null;
  e._refCount = (e._refCount ++);
  u = r.createOperatorSubscriber(t, undefined, undefined, undefined, function <atom:0>);
  e.subscribe(u);
  if ((u.closed)) goto L_dc;
  o = e.connect();
  e.connect();
  return;
}

// fn t  args=0 vars=0 closure=2 cpool=1 bc=41B file=valdi_rxjs/src/operators/refCount
// closure: r, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/refCount
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.refCount = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.refCount = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/refCount
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
