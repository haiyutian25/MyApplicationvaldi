// fn t  args=2 vars=2 closure=1 cpool=0 bc=25B file=valdi_rxjs/src/util/mapOneOrManyArgs
// args: r, t
// closure: e
function {
  if (!(e(t))) goto L_15;
  // append([], 0, t)
  t;
  return r.apply(undefined, []);
  return r(t);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=valdi_rxjs/src/util/mapOneOrManyArgs
// args: r
// closure: t, e
function {
  return t(e, r);   // tail call
}

// fn n  args=1 vars=1 closure=2 cpool=1 bc=41B file=valdi_rxjs/src/util/mapOneOrManyArgs
// args: e
// closure: t, r
function {
  return r.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=151B file=valdi_rxjs/src/util/mapOneOrManyArgs
// args: require, module, exports
// locals: r, e, t, n
function {
  t = function t;
  n = function n;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.mapOneOrManyArgs = undefined;
  r = require("../operators/map");
  if (((undefined === undefined))) goto L_83;
  e = <to_object>(undefined).isArray;
  <to_object>(undefined);
  goto L_8b;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_5c;
  // [栈深重同步 1 -> 0]
  exports.mapOneOrManyArgs = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/mapOneOrManyArgs
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
