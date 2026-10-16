// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=106B file=valdi_rxjs/src/operators/debounceTime
// locals: e
// closure: o, c, r
function {
  if (!(o)) goto L_69;
  let e;
  o.unsubscribe();
  o = null;
  null;
  e = c;
  c = null;
  null;
  r.next(e);
  return;
}

// fn s  args=0 vars=3 closure=6 cpool=0 bc=160B file=valdi_rxjs/src/operators/debounceTime
// locals: e, u, this
// closure: i, n, t, o, r, l
function {
  this = this;
  let u;
  let e;
  e = (i + n);
  u = t.now();
  if (!((u < e))) goto L_9b;
  o = this.schedule(undefined, (e - u));
  this.schedule(undefined, (e - u));
  r.add(o);
  return;
  l();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=7 cpool=0 bc=146B file=valdi_rxjs/src/operators/debounceTime
// args: e
// closure: c, i, t, o, s, n, r
function {
  c = e;
  e;
  i = t.now();
  t.now();
  if ((o)) goto L_91;
  o = t.schedule(s, n);
  t.schedule(s, n);
  r.add(o);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=valdi_rxjs/src/operators/debounceTime
// closure: l, r
function {
  l();
  r.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=10B file=valdi_rxjs/src/operators/debounceTime
// closure: c, o
function {
  o = null;
  c = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=7 closure=3 cpool=5 bc=115B file=valdi_rxjs/src/operators/debounceTime
// args: e, r
// locals: o, c, i, l, s
// closure: n, t, u
function {
  s = function s;
  let l;
  let i;
  let c;
  let o;
  o = null;
  c = null;
  i = null;
  l = function <atom:0>;
  e.subscribe(u.createOperatorSubscriber(r, function <atom:0>, function <atom:0>, undefined, function <atom:0>));
  return;
}

// fn n  args=2 vars=4 closure=3 cpool=1 bc=93B file=valdi_rxjs/src/operators/debounceTime
// args: n, t
// locals: n#1, t#1
// closure: u, e, r
function {
  let t#1;
  let n#1;
  n#1 = n;
  if (!((t === undefined))) goto L_33;
  t;
  t = e.asyncScheduler;
  t#1 = e.asyncScheduler;
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/debounceTime
// args: require, module, exports
// locals: e, r, u, n
function {
  n = function n;
  let u;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.debounceTime = undefined;
  e = require("../scheduler/async");
  r = require("../util/lift");
  u = require("./OperatorSubscriber");
  exports.debounceTime = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/debounceTime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
