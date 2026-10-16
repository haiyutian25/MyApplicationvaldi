// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_rxjs/src/operators/takeUntil
// closure: s
function {
  return s.complete();   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=1 bc=229B file=valdi_rxjs/src/operators/takeUntil
// args: e, s
// closure: t, i, r, o
function {
  t.innerFrom(i).subscribe(r.createOperatorSubscriber(s, function <atom:0>, o.noop));
  if (!(!s.closed)) goto L_e4;
  e.subscribe(s);
  return;
}

// fn i  args=1 vars=1 closure=4 cpool=1 bc=41B file=valdi_rxjs/src/operators/takeUntil
// args: i
// closure: t, r, o, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/operators/takeUntil
// args: require, module, exports
// locals: e, r, t, o, i
function {
  i = function i;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.takeUntil = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  t = require("../observable/innerFrom");
  o = require("../util/noop");
  exports.takeUntil = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/takeUntil
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
