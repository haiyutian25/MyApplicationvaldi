// fn t  args=2 vars=2 closure=0 cpool=0 bc=114B file=foundation/src/Long
// args: t, o
function {
  return Long.fromBits((t.lowBits | 0), (t.highBits | 0), o);   // tail call
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=84B file=foundation/src/Long
// args: t
function {
  return {lowBits: (t.low >>> 0), highBits: (t.high >>> 0)};
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=foundation/src/Long
// args: require, module, exports
// locals: t, o
function {
  t = function t;
  o = function o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.fromNativeLong = undefined;
  exports.toNativeLong = undefined;
  exports.fromNativeLong = t;
  exports.toNativeLong = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/Long
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
