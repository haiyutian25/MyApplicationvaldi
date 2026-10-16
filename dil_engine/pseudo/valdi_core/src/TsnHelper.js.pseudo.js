// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=valdi_core/src/TsnHelper
// args: t
// closure: n, e
function {
  return n(e.next, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=valdi_core/src/TsnHelper
// args: t
// closure: n, e
function {
  return n(e.throw, t);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=2 bc=217B file=valdi_core/src/TsnHelper
// args: o, s
// locals: r, a
// closure: n, e, t, r
function {
  try { // catch -> L_cd
  let r;
  r = o.call(e, s);
  if (!(r.done)) goto L_7e;
  return t(r.value);
  r.value.then(function <atom:0>, function <atom:0>);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_d8
  return r(a);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=50B file=valdi_core/src/TsnHelper
// args: t, r
// locals: n
// closure: e
function {
  let n;
  n = function <atom:0>;
  n(e.next);
  return;
}

// fn e  args=1 vars=1 closure=0 cpool=1 bc=12B file=valdi_core/src/TsnHelper
// args: e
function {
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=valdi_core/src/TsnHelper
// locals: this
function {
  this = this;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=49B file=valdi_core/src/TsnHelper
// args: e
// closure: r
function {
  return {value: e, done: r.done};
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=520B file=valdi_core/src/TsnHelper
// args: t
// locals: r, r#1
// closure: e
function {
  try { // catch -> L_1d5
  let r;
  r = e.next(t);
  if (!((r.value == null))) goto L_5c;
  r.value;
  goto L_7d;
  if (!((undefined !== undefined.await))) goto L_f3;
  r = e.next((await r.value.await));
  e.next((await r.value.await));
  goto L_2f;
  if (!(r.done)) goto L_165;
  goto L_1aa;
  // [栈深重同步 3 -> 2]
  return Promise.resolve(r.value.yield).then(function <atom:0>); // async
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_207
  return Promise.reject(r#1); // async
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=198B file=valdi_core/src/TsnHelper
// args: t
// locals: r
// closure: e
function {
  let r;
  if (!((e.return == null))) goto L_2e;
  e.return;
  e;
  goto L_32;
  // [栈深重同步 1 -> 2]
  r = <?>.call(undefined, t);
  if (!((r == null))) goto L_3e;
  r;
  goto L_5f;
  if (!(undefined.done)) goto L_8e;
  return Promise.resolve(r);
  return Promise.resolve({done: true, value: undefined});
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=198B file=valdi_core/src/TsnHelper
// args: t
// locals: r
// closure: e
function {
  let r;
  if (!((e.throw == null))) goto L_2e;
  e.throw;
  e;
  goto L_32;
  // [栈深重同步 1 -> 2]
  r = <?>.call(undefined, t);
  if (!((r == null))) goto L_3e;
  r;
  goto L_5f;
  if (!(undefined.done)) goto L_8e;
  return Promise.resolve(r);
  return Promise.resolve({done: true, value: undefined});
}

// fn t  args=1 vars=1 closure=0 cpool=4 bc=68B file=valdi_core/src/TsnHelper
// args: e
function {
  define_method_computed({}, Symbol.asyncIterator, function <atom:0>).next = function <atom:0>;
  define_method_computed({}, Symbol.asyncIterator, function <atom:0>).return = function <atom:0>;
  define_method_computed({}, Symbol.asyncIterator, function <atom:0>).throw = function <atom:0>;
  return define_method_computed({}, Symbol.asyncIterator, function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=valdi_core/src/TsnHelper
// closure: e
function {
  return Promise.resolve(e.next());   // tail call
}

// fn r  args=1 vars=1 closure=0 cpool=1 bc=14B file=valdi_core/src/TsnHelper
// args: e
function {
  return {next: function <atom:0>};
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=134B file=valdi_core/src/TsnHelper
// args: e
function {
  if (!((Symbol.iterator in e))) goto L_77;
  return e[Symbol.iterator].call(e);   // tail call
  throw new Error("Object is not iterable");
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=257B file=valdi_core/src/TsnHelper
// args: e
// closure: r
function {
  if (!((Symbol.asyncIterator in e))) goto L_77;
  return e[Symbol.asyncIterator].call(e);   // tail call
  if (!((Symbol.iterator in e))) goto L_f2;
  return r(e[Symbol.iterator].call(e));   // tail call
  throw new Error("Object is not iterable");
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=5 bc=162B file=valdi_core/src/TsnHelper
// args: require, module, exports
// locals: e, t, r, n, o
function {
  e = function e;
  t = function t;
  r = function r;
  n = function n;
  o = function o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.__tsn_async_helper = undefined;
  exports.__tsn_async_generator_helper = undefined;
  exports.__tsn_get_iterator = undefined;
  exports.__tsn_get_async_iterator = undefined;
  exports.__tsn_async_helper = e;
  exports.__tsn_async_generator_helper = t;
  exports.__tsn_get_iterator = n;
  exports.__tsn_get_async_iterator = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/TsnHelper
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
