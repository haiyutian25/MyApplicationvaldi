// fn e  args=3 vars=3 closure=0 cpool=0 bc=95B file=foundation/src/number
// args: e, t, r
function {
  if (!((r < t))) goto L_9;
  r = t;
  t;
  return Math.max(Math.min(e, r), t);   // tail call
}

// fn t  args=3 vars=3 closure=0 cpool=0 bc=10B file=foundation/src/number
// args: e, t, r
function {
  return ((e * (1 - r)) + (t * r));
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=foundation/src/number
// args: require, module, exports
// locals: e, t
function {
  e = function e;
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.clamp = undefined;
  exports.lerp = undefined;
  exports.clamp = e;
  exports.lerp = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/number
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
