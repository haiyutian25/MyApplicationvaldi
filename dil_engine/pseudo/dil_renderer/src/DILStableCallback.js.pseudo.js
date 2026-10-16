// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=78B file=dil_renderer/src/DILStableCallback
// args: e
// closure: o, r
function {
  o.reportError(r.toError(e));
  throw e;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=242B file=dil_renderer/src/DILStableCallback
// args: e
// locals: i, i#1
// closure: o, r, t
function {
  e = ...0;
  try { // catch -> L_9d
  let i;
  // append([], 0, e)
  e;
  i = t.apply(undefined, []);
  if (!(r.isPromiseLike(i))) goto L_98;
  goto L_9b;
  // [栈深重同步 1 -> 0]
  return i;
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_f1
  o.reportError(r.toError(i#1));
  throw i#1;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn t  args=2 vars=5 closure=2 cpool=1 bc=99B file=dil_renderer/src/DILStableCallback
// args: t, o
// locals: i, s, c
// closure: r, e
function {
  let c;
  let s;
  let i;
  i = t;
  s = i[e];
  if (!((undefined !== s))) goto L_1e;
  return s;
  c = function <atom:0>;
  Object.defineProperty(i, e, {value: c});
  return c;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=108B file=dil_renderer/src/DILStableCallback
// args: require, module, exports
// locals: r, e, t
function {
  t = function t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.stableCallback = undefined;
  r = require("./DILRuntimeUtils");
  e = Symbol("openai.valdi.dil.callbackWrapper");
  exports.stableCallback = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILStableCallback
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
