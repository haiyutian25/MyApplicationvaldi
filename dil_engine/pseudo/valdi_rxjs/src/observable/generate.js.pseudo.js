// fn a  args=0 vars=1 closure=4 cpool=0 bc=47B file=valdi_rxjs/src/observable/generate
// locals: e
// closure: o, u, c, d
function {
  let e;
  e = o;
  if ((!u)) goto L_13;
  if (!(u(e))) goto L_2d;
  if (!(<yield>)) goto L_20;
  return <yield>; // async
  // [栈深重同步 0 -> 1]
  <?>;
  e = d(e);
  d(e);
  goto L_8;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=42B file=valdi_rxjs/src/observable/generate
// closure: i, a, s
function {
  return i.scheduleIterable(a(), s);   // tail call
}

// fn l  args=5 vars=9 closure=4 cpool=2 bc=447B file=valdi_rxjs/src/observable/generate
// args: l, u, d, n, s
// locals: c, o, a, arguments
// closure: i, e, t, r
function {
  arguments = <special_object 0>;
  a = function a;
  let o;
  let c;
  c = undefined;
  o = undefined;
  if (!((1 === arguments.length))) goto L_125;
  goto L_121;
  // put_ref_value(<rot3l#0>, <rot3l#1>, <rot3l#2>.initialState)
  // put_ref_value(<rot3l#0>, <rot3l#1>, <rot3l#2>.condition)
  // put_ref_value(<rot3l#0>, <rot3l#1>, <rot3l#2>.iterate)
  if (!((<rot3l#2>.resultSelector === undefined))) goto L_f2;
  <rot3l#2>.resultSelector;
  // put_ref_value(<rot3l#0>, <rot3l#1>, e.identity)
  // put_ref_value(<rot3l#0>, <rot3l#1>, <rot3l#2>.scheduler)
  <to_object>(<?>);
  goto L_18d;
  // [栈深重同步 1 -> 0]
  goto L_1c;
  // [栈深重同步 1 -> 0]
  o = l;
  l;
  if ((!n)) goto L_157;
  if (!(t.isScheduler(n))) goto L_188;
  c = e.identity;
  e.identity;
  s = n;
  goto L_18d;
  // [栈深重同步 1 -> 0]
  c = n;
  n;
  if (!(s)) goto L_1bb;
  goto L_1bc;
  // [栈深重同步 2 -> 1]
  return r.defer(a);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/observable/generate
// args: require, module, exports
// locals: e, t, r, i, l
function {
  l = function l;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.generate = undefined;
  e = require("../util/identity");
  t = require("../util/isScheduler");
  r = require("./defer");
  i = require("../scheduled/scheduleIterable");
  exports.generate = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/generate
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
