// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_rxjs/src/operators/connect
// closure: e
function {
  return new e.Subject();
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=0 bc=203B file=valdi_rxjs/src/operators/connect
// args: o, c
// locals: b
// closure: s, r, e, t
function {
  let b;
  b = s();
  r.from(e(t.fromSubscribable(b))).subscribe(c);
  c.add(o.subscribe(b));
  return;
}

// fn b  args=2 vars=5 closure=4 cpool=1 bc=111B file=valdi_rxjs/src/operators/connect
// args: e, b
// locals: e#1, b#1, s
// closure: r, t, c, o
function {
  let b#1;
  let e#1;
  e#1 = e;
  if (!((b === undefined))) goto L_12;
  b;
  b = c;
  b#1 = c;
  let s;
  if (((undefined === undefined))) goto L_42;
  s = <to_object>(undefined).connector;
  <to_object>(undefined);
  goto L_46;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1b;
  // [栈深重同步 1 -> 0]
  return o.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=146B file=valdi_rxjs/src/operators/connect
// args: require, module, exports
// locals: e, r, o, t, c, b
function {
  b = function b;
  let c;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.connect = undefined;
  e = require("../Subject");
  r = require("../observable/from");
  o = require("../util/lift");
  t = require("../observable/fromSubscribable");
  c = {connector: function <atom:0>};
  exports.connect = b;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/connect
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
