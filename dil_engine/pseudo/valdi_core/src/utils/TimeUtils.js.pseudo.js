// fn o  args=1 vars=1 closure=1 cpool=0 bc=9B file=valdi_core/src/utils/TimeUtils
// args: o
// closure: t
function {
  return t((o / 1000));   // tail call
}

// fn t  args=1 vars=4 closure=0 cpool=3 bc=364B file=valdi_core/src/utils/TimeUtils
// args: o
// locals: t, r, e
function {
  let e;
  let r;
  let t;
  t = Math.floor((o / 3600));
  r = Math.floor(((o % 3600) / 60));
  e = Math.round((o % 60));
  if (!((r > 9))) goto L_a8;
  goto L_e1;
  // [栈深重同步 2 -> 1]
  if (!(t)) goto L_d8;
  goto L_e1;
  // [栈深重同步 2 -> 1]
  if ((r)) goto L_e1;
  if (!((e > 9))) goto L_ee;
  goto L_117;
  // [栈深重同步 3 -> 2]
  return [t, "0", "0".concat(e)].filter(Boolean).join(":");   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=valdi_core/src/utils/TimeUtils
// args: require, module, exports
// locals: o, t
function {
  o = function o;
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.formatDurationMs = undefined;
  exports.formatDurationSeconds = undefined;
  exports.formatDurationMs = o;
  exports.formatDurationSeconds = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/TimeUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
