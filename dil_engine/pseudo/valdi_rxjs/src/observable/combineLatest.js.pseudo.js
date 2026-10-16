// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=43B file=valdi_rxjs/src/observable/combineLatest
// args: e
// closure: u, p
function {
  return u.createObject(p, e);   // tail call
}

// fn a  args=1 vars=6 closure=8 cpool=1 bc=456B file=valdi_rxjs/src/observable/combineLatest
// args: c
// locals: o, a, b, p, O
// closure: u, s, r, t, e, l, i, n
function {
  c = ...0;
  let O;
  let p;
  let b;
  let a;
  let o;
  o = s.popScheduler(c);
  a = s.popResultSelector(c);
  if (((undefined === undefined))) goto L_b0;
  b = <to_object>(undefined).args;
  p = <to_object>(undefined).keys;
  <to_object>(undefined);
  goto L_d9;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_66;
  // [栈深重同步 1 -> 0]
  if (!((0 === b.length))) goto L_10e;
  return t.from([], o);   // tail call
  if (!(p)) goto L_145;
  goto L_169;
  // [栈深重同步 6 -> 5]
  O = new e.Observable(l(b, o, i.identity));
  if (!(a)) goto L_1c4;
  return O.pipe(n.mapOneOrManyArgs(a));
  return O;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=120B file=valdi_rxjs/src/observable/combineLatest
// args: e
// closure: u, l, b, a, i, n
function {
  u[l] = e;
  if ((b)) goto L_1d;
  b = true;
  true;
  a = <a_new>;
  (a--);
  if ((a)) goto L_77;
  i.next(n(u.slice()));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=50B file=valdi_rxjs/src/observable/combineLatest
// closure: o, i
function {
  o = (o --);
  if (((o --))) goto L_31;
  i.complete();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=10 cpool=2 bc=139B file=valdi_rxjs/src/observable/combineLatest
// locals: s, b
// closure: u, l, a, i, n, o, t, e, r, c
function {
  let b;
  let s;
  s = t.from(e[l], r);
  b = false;
  s.subscribe(c.createOperatorSubscriber(i, function <atom:0>, function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=5 closure=7 cpool=1 bc=95B file=valdi_rxjs/src/observable/combineLatest
// locals: s, u, o, a, l
// closure: i, n, t, e, r, c, b
function {
  let a;
  let o;
  let u;
  let s;
  if (((undefined === undefined))) goto L_18;
  s = <to_object>(undefined).length;
  <to_object>(undefined);
  goto L_1c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_11;
  // [栈深重同步 1 -> 0]
  u = new Array(s);
  o = s;
  a = s;
  let l;
  l = 0;
  // close_loc l
  if (!((l < s))) goto L_5b;
  b(r, function <atom:0>, i);
  // close_loc l
  l = <l_new>;
  (l++);
  goto L_3a;
  // close_loc l
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=1 bc=9B file=valdi_rxjs/src/observable/combineLatest
// args: i
// closure: n, t, e, r, c, b
function {
  b(r, function <atom:0>, i);
  return;
}

// fn l  args=3 vars=6 closure=4 cpool=1 bc=60B file=valdi_rxjs/src/observable/combineLatest
// args: e, r, n
// locals: e#1, r#1, n#1
// closure: t, c, b, i
function {
  let n#1;
  let r#1;
  let e#1;
  e#1 = e;
  r#1 = r;
  if (!((n === undefined))) goto L_38;
  n;
  n = i.identity;
  n#1 = i.identity;
  return function <atom:0>;
}

// fn b  args=3 vars=3 closure=1 cpool=0 bc=48B file=valdi_rxjs/src/observable/combineLatest
// args: e, r, t
// closure: o
function {
  if (!(e)) goto L_2d;
  goto L_2f;
  // [栈深重同步 1 -> 0]
  r();
  return;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=3 bc=219B file=valdi_rxjs/src/observable/combineLatest
// args: require, module, exports
// locals: e, r, t, i, n, s, u, c, o, a, l, b
function {
  a = function a;
  l = function l;
  b = function b;
  let o;
  let c;
  let u;
  let s;
  let n;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.combineLatest = undefined;
  exports.combineLatestInit = undefined;
  e = require("../Observable");
  r = require("../util/argsArgArrayOrObject");
  t = require("./from");
  i = require("../util/identity");
  n = require("../util/mapOneOrManyArgs");
  s = require("../util/args");
  u = require("../util/createObject");
  c = require("../operators/OperatorSubscriber");
  o = require("../util/executeSchedule");
  exports.combineLatest = a;
  exports.combineLatestInit = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/combineLatest
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
