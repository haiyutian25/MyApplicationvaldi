// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=110B file=foundation/src/uuid
// args: x
// locals: e
function {
  let e;
  e = ((16 * Math.random()) | 0);
  if (!(("x" === x))) goto L_40;
  goto L_48;
  // [栈深重同步 1 -> 0]
  return ((3 & e) | 8).toString(16);   // tail call
}

// fn x  args=0 vars=0 closure=0 cpool=3 bc=48B file=foundation/src/uuid
function {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]"), function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=foundation/src/uuid
// args: require, module, exports
// locals: x
function {
  x = function x;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.v4 = undefined;
  exports.v4 = x;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/uuid
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
