// fn <atom:0>  args=1 vars=4 closure=6 cpool=0 bc=352B file=valdi_rxjs/src/operators/windowCount
// args: t
// locals: e, r, t#1
// closure: u, i, o, n, e, s
function {
  let r;
  let e;
  for (const e of u) {
    e.next(t);
  }
  r = ((i - o) + 1);
  if (!((r >= 0))) goto L_a5;
  if (!(((r % n) === 0))) goto L_a5;
  u.shift().complete();
  i = (i ++);
  if (!((((i ++) % n) === 0))) goto L_15f;
  let t#1;
  t#1 = new e.Subject();
  u.push(t#1);
  s.next(t#1.asObservable());
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=124B file=valdi_rxjs/src/operators/windowCount
// closure: u, s
function {
  if (!((u.length > 0))) goto L_56;
  u.shift().complete();
  goto L_0;
  s.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=126B file=valdi_rxjs/src/operators/windowCount
// args: e
// closure: u, s
function {
  if (!((u.length > 0))) goto L_57;
  u.shift().error(e);
  goto L_0;
  s.error(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=12B file=valdi_rxjs/src/operators/windowCount
// closure: c, u
function {
  c = null;
  null;
  u = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=4 bc=224B file=valdi_rxjs/src/operators/windowCount
// args: t, s
// locals: u, c, i
// closure: o, n, e, r
function {
  let i;
  let c;
  let u;
  u = [new e.Subject()];
  c = [];
  i = 0;
  s.next(u[0].asObservable());
  t.subscribe(r.createOperatorSubscriber(s, function <atom:0>, function <atom:0>, function <atom:0>, function <atom:0>));
  return;
}

// fn o  args=2 vars=5 closure=3 cpool=1 bc=71B file=valdi_rxjs/src/operators/windowCount
// args: o, s
// locals: o#1, s#1, n
// closure: e, r, t
function {
  let s#1;
  let o#1;
  o#1 = o;
  if (!((s === undefined))) goto L_10;
  s;
  s = 0;
  s#1 = 0;
  let n;
  if (!((s > 0))) goto L_1c;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  n = o;
  return t.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/windowCount
// args: require, module, exports
// locals: e, t, r, o
function {
  o = function o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.windowCount = undefined;
  e = require("../Subject");
  t = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.windowCount = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/windowCount
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
