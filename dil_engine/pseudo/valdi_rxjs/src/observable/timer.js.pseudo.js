// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=176B file=valdi_rxjs/src/observable/timer
// locals: this
// closure: e, t, c
function {
  this = this;
  if ((e.closed)) goto L_af;
  t = <t_new>;
  e.next((t++));
  if (!((0 <= c))) goto L_8a;
  goto L_af;
  // [栈深重同步 1 -> 0]
  e.complete();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=1 bc=149B file=valdi_rxjs/src/observable/timer
// args: e
// locals: r, t
// closure: c, i, s, u
function {
  let t;
  let r;
  if (!(i.isValidDate(s))) goto L_58;
  goto L_59;
  // [栈深重同步 1 -> 0]
  r = s;
  if (!((r < 0))) goto L_68;
  r = 0;
  0;
  t = 0;
  return u.schedule(function <atom:0>, r);   // tail call
}

// fn s  args=3 vars=7 closure=4 cpool=1 bc=169B file=valdi_rxjs/src/observable/timer
// args: s, l, u
// locals: s#1, l#1, u#1, c
// closure: i, r, t, e
function {
  let u#1;
  let l#1;
  let s#1;
  if (!((s === undefined))) goto L_11;
  s;
  s = 0;
  s#1 = 0;
  l#1 = l;
  if (!((u === undefined))) goto L_3f;
  u;
  u = r.async;
  u#1 = r.async;
  let c;
  c = -1;
  if (!((null != l))) goto L_7d;
  if (!(t.isScheduler(l))) goto L_78;
  u = l;
  goto L_7d;
  // [栈深重同步 1 -> 0]
  c = l;
  l;
  return new e.Observable(function <atom:0>);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/observable/timer
// args: require, module, exports
// locals: e, r, t, i, s
function {
  s = function s;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.timer = undefined;
  e = require("../Observable");
  r = require("../scheduler/async");
  t = require("../util/isScheduler");
  i = require("../util/isDate");
  exports.timer = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/timer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
