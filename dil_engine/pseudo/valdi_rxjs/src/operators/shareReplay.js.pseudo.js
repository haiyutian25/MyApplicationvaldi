// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=46B file=valdi_rxjs/src/operators/shareReplay
// closure: e, n, o, s
function {
  return new e.ReplaySubject(n, o, s);
}

// fn t  args=3 vars=5 closure=2 cpool=1 bc=325B file=valdi_rxjs/src/operators/shareReplay
// args: t, o, s
// locals: n, u
// closure: e, r
function {
  let u;
  let n;
  n = undefined;
  u = false;
  if (!(t)) goto L_ed;
  if (!(("object" == typeof t))) goto L_ed;
  goto L_e9;
  if (!((<rot3l#2>.bufferSize === undefined))) goto L_55;
  <rot3l#2>.bufferSize;
  // put_ref_value(<rot3l#0>, <rot3l#1>, (1 / 0))
  if (!((<rot3l#2>.windowTime === undefined))) goto L_88;
  <rot3l#2>.windowTime;
  // put_ref_value(<rot3l#0>, <rot3l#1>, (1 / 0))
  if (!((<rot3l#2>.refCount === undefined))) goto L_ba;
  <rot3l#2>.refCount;
  // put_ref_value(<rot3l#0>, <rot3l#1>, false)
  // put_ref_value(<rot3l#0>, <rot3l#1>, <rot3l#2>.scheduler)
  <to_object>(<?>);
  goto L_fa;
  // [栈深重同步 1 -> 0]
  goto L_21;
  // [栈深重同步 1 -> 0]
  if (!((t == null))) goto L_f6;
  t;
  n = (1 / 0);
  (1 / 0);
  return r.share({connector: function <atom:0>, resetOnError: true, resetOnComplete: false, resetOnRefCountZero: u});   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/shareReplay
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.shareReplay = undefined;
  e = require("../ReplaySubject");
  r = require("./share");
  exports.shareReplay = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/shareReplay
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
