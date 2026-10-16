// fn e  args=2 vars=2 closure=0 cpool=0 bc=5B file=foundation/src/runWith
// args: e, t
function {
  return t(e);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=foundation/src/runWith
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.runWith = undefined;
  exports.runWith = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/runWith
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
