// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=6B file=math_jax/src/mathjax_src/util/Retries
// closure: e, r, o
function {
  return e(r, o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=math_jax/src/mathjax_src/util/Retries
// args: t
// closure: o
function {
  return o(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=6B file=math_jax/src/mathjax_src/util/Retries
// closure: e, r, o
function {
  return e(r, o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=3 bc=348B file=math_jax/src/mathjax_src/util/Retries
// args: t
// closure: e, r, o
function {
  if (!((t.retry instanceof Promise))) goto L_9b;
  goto L_15b;
  // [栈深重同步 1 -> 0]
  if (!((t.restart == null))) goto L_c5;
  t.restart;
  goto L_e6;
  if (!(undefined.isCallback)) goto L_158;
  goto L_15b;
  // [栈深重同步 1 -> 0]
  o(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=math_jax/src/mathjax_src/util/Retries
// args: t
// closure: r
function {
  return r(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=7B file=math_jax/src/mathjax_src/util/Retries
// args: t
// closure: n
function {
  return n(t);   // tail call
}

// fn e  args=2 vars=6 closure=1 cpool=3 bc=140B file=math_jax/src/mathjax_src/util/Retries
// args: r, o
// locals: n, e, s, e#1
// closure: t
function {
  e#1 = <special_object 2>;
  let n;
  n = function <atom:0>;
  try { // catch -> L_7d
  let e;
  e = t();
  if (!((e instanceof Promise))) goto L_75;
  goto L_7a;
  // [栈深重同步 1 -> 0]
  r(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_8b
  n(s);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn t  args=1 vars=1 closure=0 cpool=1 bc=12B file=math_jax/src/mathjax_src/util/Retries
// args: t
function {
  return new Promise(function e);
}

// fn e  args=1 vars=2 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/util/Retries
// args: t
// locals: e
function {
  let e;
  e = new Error("MathJax retry -- an asynchronous action is required; try using one of the promise-based functions and await its resolution.");
  e.retry = t;
  throw e;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=math_jax/src/mathjax_src/util/Retries
// args: require, module, exports
// locals: t, e
function {
  t = function t;
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.handleRetriesFor = undefined;
  exports.retryAfter = undefined;
  exports.handleRetriesFor = t;
  exports.retryAfter = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/Retries
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
