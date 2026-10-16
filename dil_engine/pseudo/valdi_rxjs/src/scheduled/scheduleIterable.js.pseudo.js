// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=288B file=valdi_rxjs/src/scheduled/scheduleIterable
// locals: r, t, u
// closure: i, e
function {
  let t;
  let r;
  r = undefined;
  t = undefined;
  try { // catch -> L_9a
  goto L_6c;
  // put_ref_value(<rot3l#0>, <rot3l#1>, <rot3l#2>.value)
  // put_ref_value(<rot3l#0>, <rot3l#1>, <rot3l#2>.done)
  <to_object>(<?>);
  goto L_96;
  // [栈深重同步 1 -> 0]
  goto L_11;
  i.next();
  <?>;
  goto L_cb;
  // [栈深重同步 0 -> 1]
  u = <?>;
  try { // catch -> L_ca
  e.error(u);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(t)) goto L_f7;
  goto L_11f;
  // [栈深重同步 1 -> 0]
  e.next(r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=95B file=valdi_rxjs/src/scheduled/scheduleIterable
// closure: i, e, l, r, u, c
function {
  i = l[r.iterator].call(l);
  l[r.iterator].call(l);
  u.executeSchedule(e, c, function <atom:0>, 0, true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=125B file=valdi_rxjs/src/scheduled/scheduleIterable
// closure: t, i
function {
  if (!((i == null))) goto L_2f;
  i;
  goto L_50;
  if (!(t.isFunction(undefined.return))) goto L_7c;
  return i.return();
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=2 bc=50B file=valdi_rxjs/src/scheduled/scheduleIterable
// args: e
// locals: i
// closure: l, r, u, c, t
function {
  let i;
  i = undefined;
  u.executeSchedule(e, c, function <atom:0>);
  return function <atom:0>;
}

// fn l  args=2 vars=2 closure=4 cpool=1 bc=43B file=valdi_rxjs/src/scheduled/scheduleIterable
// args: l, c
// closure: r, u, t, e
function {
  return new e.Observable(function <atom:0>);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/scheduled/scheduleIterable
// args: require, module, exports
// locals: e, r, t, u, l
function {
  l = function l;
  let u;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.scheduleIterable = undefined;
  e = require("../Observable");
  r = require("../symbol/iterator");
  t = require("../util/isFunction");
  u = require("../util/executeSchedule");
  exports.scheduleIterable = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduled/scheduleIterable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
