// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/util/numeric
// args: e, r
function {
  return (e + r);
}

// fn e  args=1 vars=1 closure=0 cpool=1 bc=40B file=math_jax/src/mathjax_src/util/numeric
// args: e
function {
  return e.reduce(function <atom:0>, 0);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=43B file=math_jax/src/mathjax_src/util/numeric
// args: e, r
function {
  return Math.max(e, r);   // tail call
}

// fn r  args=1 vars=1 closure=0 cpool=1 bc=40B file=math_jax/src/mathjax_src/util/numeric
// args: e
function {
  return e.reduce(function <atom:0>, 0);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=math_jax/src/mathjax_src/util/numeric
// args: require, module, exports
// locals: e, r
function {
  e = function e;
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.sum = undefined;
  exports.max = undefined;
  exports.sum = e;
  exports.max = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/numeric
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
