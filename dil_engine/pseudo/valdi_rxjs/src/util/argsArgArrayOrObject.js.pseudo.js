// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=valdi_rxjs/src/util/argsArgArrayOrObject
// args: r
// closure: t
function {
  return t[r];
}

// fn o  args=1 vars=3 closure=3 cpool=1 bc=129B file=valdi_rxjs/src/util/argsArgArrayOrObject
// args: e
// locals: t, r
// closure: r, n, s
function {
  if (!((1 === e.length))) goto L_73;
  let t;
  t = e[0];
  if (!(r(t))) goto L_26;
  return {args: t, keys: null};
  if (!(n(t))) goto L_70;
  let r;
  r = s(t);
  return {args: r.map(function <atom:0>), keys: r};
  // close_loc t
  return {args: e, keys: null};
}

// fn n  args=1 vars=1 closure=2 cpool=0 bc=27B file=valdi_rxjs/src/util/argsArgArrayOrObject
// args: r
// closure: e, t
function {
  if (!(r)) goto L_1a;
  if (!(("object" == typeof r))) goto L_1a;
  return (e(r) === t);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=274B file=valdi_rxjs/src/util/argsArgArrayOrObject
// args: require, module, exports
// locals: r, e, t, s, o, n
function {
  o = function o;
  n = function n;
  let s;
  let t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.argsArgArrayOrObject = undefined;
  if (((undefined === undefined))) goto L_83;
  r = <to_object>(undefined).isArray;
  <to_object>(undefined);
  goto L_8b;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_5c;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_fd;
  e = <to_object>(undefined).getPrototypeOf;
  t = <to_object>(undefined).prototype;
  s = <to_object>(undefined).keys;
  <to_object>(undefined);
  goto L_105;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_90;
  // [栈深重同步 1 -> 0]
  exports.argsArgArrayOrObject = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/argsArgArrayOrObject
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
