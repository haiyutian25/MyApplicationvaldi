// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=133B file=valdi_rxjs/src/observable/range
// locals: this
// closure: t, s, e
function {
  this = this;
  if (!((t < s))) goto L_5f;
  t = <t_new>;
  e.next((t++));
  goto L_84;
  // [栈深重同步 1 -> 0]
  e.complete();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=44B file=valdi_rxjs/src/observable/range
// args: e
// locals: t
// closure: s, r, o
function {
  let t;
  t = r;
  return o.schedule(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=136B file=valdi_rxjs/src/observable/range
// args: e
// locals: t
// closure: r, s
function {
  let t;
  t = r;
  if (!((t < s))) goto L_62;
  if (!(!e.closed)) goto L_62;
  t = <t_new>;
  e.next((t++));
  goto L_5;
  e.complete();
  return;
}

// fn r  args=3 vars=4 closure=2 cpool=2 bc=111B file=valdi_rxjs/src/observable/range
// args: r, n, o
// locals: s
// closure: t, e
function {
  let s;
  if (!((null == n))) goto L_e;
  n = r;
  r = 0;
  0;
  if (!((n <= 0))) goto L_39;
  return t.EMPTY;
  s = (n + r);
  if (!(o)) goto L_69;
  goto L_6b;
  // [栈深重同步 3 -> 2]
  return new e.Observable(function <atom:0>);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/observable/range
// args: require, module, exports
// locals: e, t, r
function {
  r = function r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.range = undefined;
  e = require("../Observable");
  t = require("./empty");
  exports.range = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/range
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
