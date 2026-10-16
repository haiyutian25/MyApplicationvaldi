// fn <atom:0>  args=1 vars=5 closure=3 cpool=0 bc=97B file=foundation/src/functional/cacheResolved
// args: c
// locals: o, s, n, a
// closure: e, t, r
function {
  c = ...0;
  let n;
  let s;
  let o;
  // append([], 0, c)
  c;
  o = e.apply(undefined, []);
  s = t[o];
  if (!(s)) goto L_2c;
  return s; // async
  // append([], 0, c)
  c;
  n = r.apply(undefined, []);
  t[o] = n;
  try { // catch -> L_50
  return (await n); // async
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_60
  delete o;
  throw a;
  throw t;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=3B file=foundation/src/functional/cacheResolved
// args: r
// closure: e, t
function {
  return function <atom:0>;
}

// fn e  args=1 vars=2 closure=0 cpool=1 bc=8B file=foundation/src/functional/cacheResolved
// args: e
// locals: t
function {
  let t;
  t = {};
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=foundation/src/functional/cacheResolved
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.cacheResolved = undefined;
  exports.cacheResolved = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/functional/cacheResolved
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
