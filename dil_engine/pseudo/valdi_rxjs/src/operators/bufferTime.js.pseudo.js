// fn <atom:0>  args=1 vars=3 closure=5 cpool=0 bc=224B file=valdi_rxjs/src/operators/bufferTime
// args: e
// locals: r, u
// closure: s, c, t, n, d
function {
  let u;
  let r;
  if (((undefined === undefined))) goto L_55;
  r = <to_object>(undefined).buffer;
  u = <to_object>(undefined).subs;
  <to_object>(undefined);
  goto L_59;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_b;
  // [栈深重同步 1 -> 0]
  u.unsubscribe();
  s.arrRemove(c, e);
  t.next(r);
  if (!(n)) goto L_df;
  d();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=9B file=valdi_rxjs/src/operators/bufferTime
// closure: p, u
function {
  return p(u);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=7 cpool=1 bc=212B file=valdi_rxjs/src/operators/bufferTime
// locals: r, u
// closure: p, c, e, t, i, l, o
function {
  if (!(c)) goto L_d3;
  let u;
  let r;
  r = new e.Subscription();
  t.add(r);
  u = {buffer: [], subs: r};
  c.push(u);
  i.executeSchedule(r, l, function <atom:0>, o);
  // close_loc u
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=174B file=valdi_rxjs/src/operators/bufferTime
// args: e
// locals: r, u, r#1
// closure: c, f, p
function {
  let r;
  r = c.slice();
  let u;
  for (const u of r) {
    let r#1;
    if (((undefined === undefined))) goto L_64;
    r#1 = <to_object>(undefined).buffer;
    <to_object>(undefined);
    goto L_6a;
    // [栈深重同步 3 -> 4]
    <?>;
    goto L_3d;
    // [栈深重同步 4 -> 3]
    r#1.push(e);
    if (!((f <= r#1.length))) goto L_a6;
    p(u);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=250B file=valdi_rxjs/src/operators/bufferTime
// closure: c, t, a
function {
  if (!((c == null))) goto L_b;
  c;
  goto L_c;
  if (!(undefined.length)) goto L_7e;
  t.next(c.shift().buffer);
  goto L_0;
  if (!((a == null))) goto L_89;
  a;
  goto L_ad;
  undefined.unsubscribe();
  t.complete();
  t.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=6B file=valdi_rxjs/src/operators/bufferTime
// closure: c
function {
  c = null;
  return null;
}

// fn <atom:0>  args=2 vars=7 closure=8 cpool=5 bc=207B file=valdi_rxjs/src/operators/bufferTime
// args: r, t
// locals: c, n, p, d, a
// closure: s, e, i, l, o, f, b, u
function {
  let a;
  let d;
  let p;
  let n;
  let c;
  c = [];
  n = false;
  p = function <atom:0>;
  d = function <atom:0>;
  if (!((null !== b))) goto L_69;
  if (!((b >= 0))) goto L_69;
  goto L_6f;
  // [栈深重同步 1 -> 0]
  n = true;
  true;
  d();
  a = u.createOperatorSubscriber(t, function <atom:0>, function <atom:0>, undefined, function <atom:0>);
  r.subscribe(a);
  return;
}

// fn o  args=2 vars=5 closure=7 cpool=1 bc=155B file=valdi_rxjs/src/operators/bufferTime
// args: o, n
// locals: l, b, f
// closure: s, e, i, u, c, t, r
function {
  n = ...1;
  let f;
  let b;
  let l;
  if (!((c.popScheduler(n) == null))) goto L_5c;
  c.popScheduler(n);
  l = t.asyncScheduler;
  if (!((n[0] == null))) goto L_66;
  n[0];
  b = null;
  if ((n[1])) goto L_71;
  f = (1 / 0);
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=1 bc=164B file=valdi_rxjs/src/operators/bufferTime
// args: require, module, exports
// locals: e, r, u, s, t, c, i, o
function {
  o = function o;
  let i;
  let c;
  let t;
  let s;
  let u;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.bufferTime = undefined;
  e = require("../Subscription");
  r = require("../util/lift");
  u = require("./OperatorSubscriber");
  s = require("../util/arrRemove");
  t = require("../scheduler/async");
  c = require("../util/args");
  i = require("../util/executeSchedule");
  exports.bufferTime = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/bufferTime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
