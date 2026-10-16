// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=math_jax/src/mathjax_src/util/AsyncLoad
// args: e
// closure: o
function {
  return o(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=math_jax/src/mathjax_src/util/AsyncLoad
// args: e
// closure: t
function {
  return t(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=2 bc=175B file=math_jax/src/mathjax_src/util/AsyncLoad
// args: o, t
// locals: s
// closure: e, a
function {
  let s;
  s = e.mathjax.asyncLoad(a);
  if (!((s instanceof Promise))) goto L_a9;
  goto L_ae;
  // [栈深重同步 1 -> 0]
  o(s);
  return;
}

// fn a  args=1 vars=1 closure=1 cpool=1 bc=172B file=math_jax/src/mathjax_src/util/AsyncLoad
// args: a
// closure: e
function {
  if (!(e.mathjax.asyncLoad)) goto L_53;
  return new Promise(function <atom:0>);
  return Promise.reject("Can't load '".concat(a, "': No mathjax.asyncLoad method specified"));
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=math_jax/src/mathjax_src/util/AsyncLoad
// args: require, module, exports
// locals: e, a
function {
  a = function a;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.asyncLoad = undefined;
  e = require("../mathjax");
  exports.asyncLoad = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/AsyncLoad
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
