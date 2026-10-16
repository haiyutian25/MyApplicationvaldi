// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=53B file=valdi_rxjs/src/observable/fromEventPattern
// args: r
// closure: e
function {
  r = ...0;
  if (!((1 === r.length))) goto L_31;
  goto L_32;
  // [栈深重同步 3 -> 2]
  return e.next(r);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=10B file=valdi_rxjs/src/observable/fromEventPattern
// closure: o, t, n
function {
  return o(t, n);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=2 bc=65B file=valdi_rxjs/src/observable/fromEventPattern
// args: e
// locals: t, n
// closure: o, i, r
function {
  let n;
  let t;
  t = function <atom:0>;
  n = i(t);
  if (!(r.isFunction(o))) goto L_3f;
  return function <atom:0>;
  return undefined;
}

// fn n  args=3 vars=3 closure=4 cpool=1 bc=125B file=valdi_rxjs/src/observable/fromEventPattern
// args: i, o, s
// closure: r, n, t, e
function {
  if (!(s)) goto L_52;
  return n(i, o).pipe(t.mapOneOrManyArgs(s));
  return new e.Observable(function <atom:0>);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/observable/fromEventPattern
// args: require, module, exports
// locals: e, r, t, n
function {
  n = function n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.fromEventPattern = undefined;
  e = require("../Observable");
  r = require("../util/isFunction");
  t = require("../util/mapOneOrManyArgs");
  exports.fromEventPattern = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/fromEventPattern
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
