// fn t  args=0 vars=0 closure=0 cpool=0 bc=1B file=foundation/src/function
function {
  return;
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=4B file=foundation/src/function
// args: t
function {
  return !!t;
}

// fn e  args=1 vars=1 closure=0 cpool=0 bc=2B file=foundation/src/function
// args: t
function {
  return t;
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=4B file=foundation/src/function
// args: t
function {
  return (null != t);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=157B file=foundation/src/function
// args: require, module, exports
// locals: t, n, e, o
function {
  t = function t;
  n = function n;
  e = function e;
  o = function o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.noop = undefined;
  exports.truthy = undefined;
  exports.identity = undefined;
  exports.nonnull = undefined;
  exports.noop = t;
  exports.truthy = n;
  exports.identity = e;
  exports.nonnull = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/function
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
