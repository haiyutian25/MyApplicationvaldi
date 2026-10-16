// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_rxjs/src/operators/repeat
// closure: e
function {
  return e.EMPTY;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=45B file=valdi_rxjs/src/operators/repeat
// closure: i, n
function {
  i.unsubscribe();
  n();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=8 cpool=1 bc=265B file=valdi_rxjs/src/operators/repeat
// locals: e, i
// closure: n, i, s, u, o, l, t, r
function {
  if (!((i == null))) goto L_b;
  i;
  goto L_2f;
  undefined.unsubscribe();
  i = null;
  null;
  if (!((null != s))) goto L_103;
  let i;
  let e;
  if (!(("number" == typeof s))) goto L_7c;
  goto L_a8;
  // [栈深重同步 1 -> 0]
  e = o.innerFrom(s(l));
  i = t.createOperatorSubscriber(r, function <atom:0>);
  e.subscribe(i);
  // close_loc i
  return;
  n();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=73B file=valdi_rxjs/src/operators/repeat
// closure: l, b, i, c, o, r
function {
  l = (l ++);
  if (!(((l ++) < b))) goto L_21;
  if (!(i)) goto L_19;
  goto L_48;
  // [栈深重同步 1 -> 0]
  o = true;
  goto L_48;
  // [栈深重同步 1 -> 0]
  r.complete();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=105B file=valdi_rxjs/src/operators/repeat
// locals: o
// closure: l, b, i, c, r, e, t
function {
  let o;
  o = false;
  i = e.subscribe(t.createOperatorSubscriber(r, undefined, function <atom:0>));
  e.subscribe(t.createOperatorSubscriber(r, undefined, function <atom:0>));
  if (!(o)) goto L_68;
  c();
  return;
}

// fn <atom:0>  args=2 vars=6 closure=5 cpool=2 bc=37B file=valdi_rxjs/src/operators/repeat
// args: e, r
// locals: i, l, c, n
// closure: s, u, o, t, b
function {
  let n;
  let c;
  let l;
  let i;
  i = undefined;
  l = 0;
  c = function <atom:0>;
  n = function <atom:0>;
  n();
  return;
}

// fn i  args=1 vars=3 closure=5 cpool=2 bc=189B file=valdi_rxjs/src/operators/repeat
// args: i
// locals: s, b
// closure: e, u, o, t, r
function {
  let b;
  let s;
  s = undefined;
  b = (1 / 0);
  if (!((null != i))) goto L_8a;
  if (!(("object" == typeof i))) goto L_85;
  goto L_82;
  if (!((<rot3l#2>.count === undefined))) goto L_53;
  <rot3l#2>.count;
  // put_ref_value(<rot3l#0>, <rot3l#1>, (1 / 0))
  // put_ref_value(<rot3l#0>, <rot3l#1>, <rot3l#2>.delay)
  <to_object>(<?>);
  goto L_8a;
  // [栈深重同步 1 -> 0]
  goto L_1f;
  // [栈深重同步 1 -> 0]
  b = i;
  i;
  if (!((b <= 0))) goto L_95;
  return function <atom:0>;
  return r.operate(function <atom:0>);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=1 bc=140B file=valdi_rxjs/src/operators/repeat
// args: require, module, exports
// locals: e, r, t, o, u, i
function {
  i = function i;
  let u;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.repeat = undefined;
  e = require("../observable/empty");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  o = require("../observable/innerFrom");
  u = require("../observable/timer");
  exports.repeat = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/repeat
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
