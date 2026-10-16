// fn h  args=2 vars=2 closure=13 cpool=0 bc=533B file=valdi_rxjs/src/scheduled/scheduled
// args: h, q
// closure: l, e, a, i, t, r, d, u, b, s, n, o, c
function {
  if (!((null != h))) goto L_1ee;
  if (!(l.isInteropObservable(h))) goto L_59;
  return e.scheduleObservable(h, q);   // tail call
  if (!(a.isArrayLike(h))) goto L_aa;
  return i.scheduleArray(h, q);   // tail call
  if (!(t.isPromise(h))) goto L_fb;
  return r.schedulePromise(h, q);   // tail call
  if (!(d.isAsyncIterable(h))) goto L_14c;
  return u.scheduleAsyncIterable(h, q);   // tail call
  if (!(b.isIterable(h))) goto L_19d;
  return s.scheduleIterable(h, q);   // tail call
  if (!(n.isReadableStreamLike(h))) goto L_1ee;
  return o.scheduleReadableStreamLike(h, q);   // tail call
  throw c.createInvalidObservableTypeError(h);
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=1 bc=236B file=valdi_rxjs/src/scheduled/scheduled
// args: require, module, exports
// locals: e, r, i, s, u, l, t, a, b, d, c, n, o, h
function {
  h = function h;
  let o;
  let n;
  let c;
  let d;
  let b;
  let a;
  let t;
  let l;
  let u;
  let s;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.scheduled = undefined;
  e = require("./scheduleObservable");
  r = require("./schedulePromise");
  i = require("./scheduleArray");
  s = require("./scheduleIterable");
  u = require("./scheduleAsyncIterable");
  l = require("../util/isInteropObservable");
  t = require("../util/isPromise");
  a = require("../util/isArrayLike");
  b = require("../util/isIterable");
  d = require("../util/isAsyncIterable");
  c = require("../util/throwUnobservableError");
  n = require("../util/isReadableStreamLike");
  o = require("./scheduleReadableStreamLike");
  exports.scheduled = h;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduled/scheduled
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
