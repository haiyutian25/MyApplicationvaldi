// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=31B file=valdi_rxjs/src/observable/forkJoin
// args: e
// closure: r, u, o, a
function {
  if ((r)) goto L_15;
  r = true;
  true;
  u = <u_new>;
  (u--);
  o[a] = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=8B file=valdi_rxjs/src/observable/forkJoin
// closure: s
function {
  s = <s_new>;
  return (s--);
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=153B file=valdi_rxjs/src/observable/forkJoin
// closure: s, r, u, e, l, n, o
function {
  if (!(s)) goto L_a;
  if ((r)) goto L_98;
  if ((u)) goto L_72;
  if (!(l)) goto L_6c;
  goto L_6f;
  // [栈深重同步 3 -> 2]
  e.next(o);
  e.complete();
  return;
}

// fn <atom:0>  args=1 vars=7 closure=5 cpool=3 bc=273B file=valdi_rxjs/src/observable/forkJoin
// args: e
// locals: r, o, s, u, a, r#1
// closure: l, n, c, t, i
function {
  let u;
  let s;
  let o;
  let r;
  if (((undefined === undefined))) goto L_18;
  r = <to_object>(undefined).length;
  <to_object>(undefined);
  goto L_1e;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_11;
  // [栈深重同步 1 -> 0]
  if (!(!r)) goto L_4b;
  e.complete();
  return;
  o = new Array(r);
  s = r;
  u = r;
  let a;
  a = 0;
  // close_loc a
  if (!((a < r))) goto L_10d;
  let r#1;
  r#1 = false;
  t.innerFrom(c[a]).subscribe(i.createOperatorSubscriber(e, function <atom:0>, function <atom:0>, undefined, function <atom:0>));
  // close_loc r#1
  // close_loc a
  a = <a_new>;
  (a++);
  goto L_69;
  // close_loc a
  return;
}

// fn u  args=1 vars=5 closure=7 cpool=1 bc=307B file=valdi_rxjs/src/observable/forkJoin
// args: u
// locals: a, c, l, b
// closure: n, t, i, o, r, e, s
function {
  u = ...0;
  let b;
  let l;
  let c;
  let a;
  a = o.popResultSelector(u);
  if (((undefined === undefined))) goto L_86;
  c = <to_object>(undefined).args;
  l = <to_object>(undefined).keys;
  <to_object>(undefined);
  goto L_af;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_3c;
  // [栈深重同步 1 -> 0]
  b = new e.Observable(function <atom:0>);
  if (!(a)) goto L_12f;
  return b.pipe(s.mapOneOrManyArgs(a));
  return b;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=1 bc=164B file=valdi_rxjs/src/observable/forkJoin
// args: require, module, exports
// locals: e, r, t, o, i, s, n, u
function {
  u = function u;
  let n;
  let s;
  let i;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.forkJoin = undefined;
  e = require("../Observable");
  r = require("../util/argsArgArrayOrObject");
  t = require("./innerFrom");
  o = require("../util/args");
  i = require("../operators/OperatorSubscriber");
  s = require("../util/mapOneOrManyArgs");
  n = require("../util/createObject");
  exports.forkJoin = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/forkJoin
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
