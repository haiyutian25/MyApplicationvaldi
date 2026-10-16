// fn o  args=0 vars=1 closure=1 cpool=0 bc=86B file=valdi_core/src/provider/GlobalProviderSource
// locals: e
// closure: r
function {
  let e;
  e = r.$globalProviderSourceStore;
  if ((e)) goto L_51;
  e = {index: {}, sequence: 0};
  {index: {}, sequence: 0};
  r.$globalProviderSourceStore = e;
  e;
  return e;
}

// fn t  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_core/src/provider/GlobalProviderSource
// args: e
// closure: o
function {
  return o().index[e];
}

// fn i  args=1 vars=2 closure=1 cpool=0 bc=69B file=valdi_core/src/provider/GlobalProviderSource
// args: e
// locals: r
// closure: t
function {
  let r;
  r = t(e);
  if (!(!r)) goto L_41;
  throw new Error("Could not resolve global ProviderSource with ".concat(e));
  return r;
}

// fn u  args=1 vars=3 closure=1 cpool=0 bc=102B file=valdi_core/src/provider/GlobalProviderSource
// args: e
// locals: r, t
// closure: o
function {
  let t;
  let r;
  r = o();
  r.sequence = (r.sequence ++);
  t = (r.sequence ++);
  r.index[t] = e;
  return t;
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_core/src/provider/GlobalProviderSource
// args: e
// closure: o
function {
  o().index;
  delete e;
  return;
}

// fn n  args=2 vars=3 closure=3 cpool=0 bc=67B file=valdi_core/src/provider/GlobalProviderSource
// args: r, o
// locals: t
// closure: i, e, u
function {
  let t;
  t = undefined;
  if (!(r)) goto L_d;
  goto L_35;
  // [栈深重同步 1 -> 0]
  t = new e.ProviderSourceHead();
  new e.ProviderSourceHead();
  return u(o(t));   // tail call
}

// fn c  args=1 vars=2 closure=3 cpool=0 bc=89B file=valdi_core/src/provider/GlobalProviderSource
// args: r
// locals: o
// closure: i, u, e
function {
  let o;
  o = r.map(i);
  return u(new e.ProviderSourceList(o));   // tail call
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=7 bc=240B file=valdi_core/src/provider/GlobalProviderSource
// args: require, module, exports
// locals: e, r, o, t, i, u, l, n, c
function {
  o = function o;
  t = function t;
  i = function i;
  u = function u;
  l = function l;
  n = function n;
  c = function c;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getGlobalProviderSource = undefined;
  exports.getGlobalProviderSourceOrThrow = undefined;
  exports.registerGlobalProviderSource = undefined;
  exports.unregisterGlobalProviderSource = undefined;
  exports.createGlobalProviderSource = undefined;
  exports.combineGlobalProviderSource = undefined;
  e = require("./ProviderSource");
  r = globalThis;
  exports.getGlobalProviderSource = t;
  exports.getGlobalProviderSourceOrThrow = i;
  exports.registerGlobalProviderSource = u;
  exports.unregisterGlobalProviderSource = l;
  exports.createGlobalProviderSource = n;
  exports.combineGlobalProviderSource = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/provider/GlobalProviderSource
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
