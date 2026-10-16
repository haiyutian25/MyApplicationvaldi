// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=11B file=dil_cel/src/utils/MathHelpers
// args: a, s, e
// closure: t
function {
  return t(Number(e));   // tail call
}

// fn t  args=1 vars=1 closure=0 cpool=1 bc=3B file=dil_cel/src/utils/MathHelpers
// args: t
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=440B file=dil_cel/src/utils/MathHelpers
// args: require, module, exports
// locals: t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MATH_HELPERS = undefined;
  exports.MATH_HELPERS = {acos: t(Math.acos), asin: t(Math.asin), atan: t(Math.atan), cos: t(Math.cos), pi: Math.PI, sin: t(Math.sin), sqrt: t(Math.sqrt), tan: t(Math.tan)};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/utils/MathHelpers
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
