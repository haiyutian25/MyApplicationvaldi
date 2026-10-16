// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=10B file=valdi_rxjs/src/scheduler/animationFrameProvider
// args: e
// closure: i, n
function {
  i = undefined;
  undefined;
  n(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=15B file=valdi_rxjs/src/scheduler/animationFrameProvider
// closure: i, o
function {
  if (!((i == null))) goto L_a;
  i;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>(o);
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=2 bc=306B file=valdi_rxjs/src/scheduler/animationFrameProvider
// args: n
// locals: a, i, t, o
// closure: r, exports, e
function {
  let o;
  let t;
  let i;
  let a;
  a = r.requestAnimationFrame;
  i = r.cancelAnimationFrame;
  if (((undefined === undefined))) goto L_82;
  t = <to_object>(undefined).delegate;
  <to_object>(undefined);
  goto L_a7;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_5b;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_ff;
  a = t.requestAnimationFrame;
  t.requestAnimationFrame;
  i = t.cancelAnimationFrame;
  t.cancelAnimationFrame;
  o = a(function <atom:0>);
  return new e.Subscription(function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=185B file=valdi_rxjs/src/scheduler/animationFrameProvider
// args: e
// locals: n
// closure: exports, r
function {
  e = ...0;
  let n;
  if (((undefined === undefined))) goto L_33;
  n = <to_object>(undefined).delegate;
  <to_object>(undefined);
  goto L_58;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_c;
  // [栈深重同步 1 -> 0]
  if (!((n == null))) goto L_63;
  n;
  goto L_84;
  if ((undefined.requestAnimationFrame)) goto L_ac;
  // append([], 0, e)
  e;
  return r.requestAnimationFrame.apply(undefined, []);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=185B file=valdi_rxjs/src/scheduler/animationFrameProvider
// args: e
// locals: n
// closure: exports, r
function {
  e = ...0;
  let n;
  if (((undefined === undefined))) goto L_33;
  n = <to_object>(undefined).delegate;
  <to_object>(undefined);
  goto L_58;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_c;
  // [栈深重同步 1 -> 0]
  if (!((n == null))) goto L_63;
  n;
  goto L_84;
  if ((undefined.cancelAnimationFrame)) goto L_ac;
  // append([], 0, e)
  e;
  return r.cancelAnimationFrame.apply(undefined, []);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=3 bc=129B file=valdi_rxjs/src/scheduler/animationFrameProvider
// args: require, module, exports
// locals: e, r
function {
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.animationFrameProvider = undefined;
  e = require("../Subscription");
  r = globalThis;
  exports.animationFrameProvider = {schedule: function <atom:0>, requestAnimationFrame: function <atom:0>, cancelAnimationFrame: function <atom:0>, delegate: undefined};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/animationFrameProvider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
