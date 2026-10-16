// fn o  args=1 vars=1 closure=0 cpool=0 bc=183B file=worker/src/utils/WorkerServiceBridgeUtils
// args: e
function {
  if (!(("string" == typeof e))) goto L_12;
  return {message: e};
  if (!(e.message)) goto L_86;
  return {message: e.message, stack: e.stack};
  return {message: JSON.stringify(e)};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=8B file=worker/src/utils/WorkerServiceBridgeUtils
// args: e
// closure: n
function {
  n(e, undefined, 1);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=10B file=worker/src/utils/WorkerServiceBridgeUtils
// args: e
// closure: n, o
function {
  n(undefined, o(e), 2);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=2 bc=422B file=worker/src/utils/WorkerServiceBridgeUtils
// args: s
// locals: n, e, c
// closure: o, t, r, e
function {
  s = ...0;
  let n;
  n = s.pop();
  try { // catch -> L_170
  let e;
  e = t.apply(r, s);
  if ((!e)) goto L_8a;
  if (!(!e.then)) goto L_c8;
  throw new Error("Methods exposed through the WorkerService should always return a Promise. Method ".concat(t, " returned ", e));
  if (!(e.cancel)) goto L_141;
  n(e.cancel.bind(e), undefined, 3);
  e.then(function <atom:0>, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_1a5
  n(undefined, e.toError(c), 2);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn r  args=2 vars=2 closure=2 cpool=1 bc=3B file=worker/src/utils/WorkerServiceBridgeUtils
// args: r, t
// closure: o, e
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=3 cpool=0 bc=321B file=worker/src/utils/WorkerServiceBridgeUtils
// args: e, o, t
// locals: e#1
// closure: r, s, n
function {
  if (!((t === 1))) goto L_59;
  if ((r.canceled)) goto L_55;
  s(e);
  r.clear();
  goto L_140;
  if (!((t === 2))) goto L_114;
  if (!(!r.canceled)) goto L_140;
  let e#1;
  e#1 = new Error(o.message);
  e#1.stack = o.stack;
  n(e#1);
  r.clear();
  goto L_140;
  if (!((t === 3))) goto L_140;
  r.onCancel(e);
  t;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=1 bc=50B file=worker/src/utils/WorkerServiceBridgeUtils
// args: s, n
// closure: r, o, e, t
function {
  // append([], 0, t)
  [][t] = function <atom:0>;
  (function <atom:0> ++);
  o.apply(e, []);
  return;
}

// fn t  args=4 vars=4 closure=0 cpool=1 bc=12B file=worker/src/utils/WorkerServiceBridgeUtils
// args: e, o, r, t
function {
  return new Promise(function <atom:0>);
}

// fn s  args=2 vars=8 closure=0 cpool=0 bc=483B file=worker/src/utils/WorkerServiceBridgeUtils
// args: e, o
// locals: r, t, s, n, s#1, c
function {
  let t;
  let r;
  r = {};
  t = e;
  if (!(t)) goto L_1df;
  if (!((t !== Object.prototype))) goto L_1df;
  if (!((t !== Array.prototype))) goto L_1df;
  if (!((t !== Function.prototype))) goto L_1df;
  if (!((t !== Number.prototype))) goto L_1df;
  let s;
  s = Object.getOwnPropertyNames(t);
  let n;
  for (const n of s) {
    let c;
    let s#1;
    if ((("constructor" === n))) goto L_125;
    if (((undefined !== r[n]))) continue;
    s#1 = Object.getOwnPropertyDescriptor(t, n);
    if ((!s#1)) continue;
    c = s#1.value;
    if (!(("function" == typeof c))) goto L_1a1;
    r[n] = o(e, c);
    o(e, c);
  }
  t = Object.getPrototypeOf(t);
  Object.getPrototypeOf(t);
  goto L_a;
  return r;
}

// fn n  args=1 vars=1 closure=2 cpool=0 bc=6B file=worker/src/utils/WorkerServiceBridgeUtils
// args: e
// closure: s, r
function {
  return s(e, r);   // tail call
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=8B file=worker/src/utils/WorkerServiceBridgeUtils
// args: e
// closure: c
function {
  return (undefined === c[e]);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=6 bc=458B file=worker/src/utils/WorkerServiceBridgeUtils
// args: require, module, exports
// locals: e, o, r, t, s, n, c, p, e#1, i
function {
  o = function o;
  r = function r;
  t = function t;
  s = function s;
  n = function n;
  i = function i;
  let c;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.toServiceError = undefined;
  exports.unpromisify = undefined;
  exports.forwardCallToService = undefined;
  exports.unpromisifyObject = undefined;
  exports.canBeUsedAsProxyMethod = undefined;
  e = require("valdi_core/src/utils/ErrorUtils");
  exports.toServiceError = o;
  exports.unpromisify = r;
  exports.forwardCallToService = t;
  exports.unpromisifyObject = n;
  c = {};
  let p;
  for (const p of [Object.prototype, Array.prototype, Function.prototype, Number.prototype]) {
    let e#1;
    for (const e#1 of Object.getOwnPropertyNames(p)) {
      c[e#1] = true;
      // [栈深重同步 3 -> 6]
    }
  }
  c.jasmineToString = true;
  exports.canBeUsedAsProxyMethod = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=worker/src/utils/WorkerServiceBridgeUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
