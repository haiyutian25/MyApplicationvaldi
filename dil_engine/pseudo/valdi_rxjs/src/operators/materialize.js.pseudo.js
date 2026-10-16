// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=111B file=valdi_rxjs/src/operators/materialize
// args: t
// closure: i, e
function {
  i.next(e.Notification.createNext(t));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=148B file=valdi_rxjs/src/operators/materialize
// closure: i, e
function {
  i.next(e.Notification.createComplete());
  i.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=149B file=valdi_rxjs/src/operators/materialize
// args: t
// closure: i, e
function {
  i.next(e.Notification.createError(t));
  i.complete();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=3 bc=84B file=valdi_rxjs/src/operators/materialize
// args: t, i
// closure: e, r
function {
  t.subscribe(r.createOperatorSubscriber(i, function <atom:0>, function <atom:0>, function <atom:0>));
  return;
}

// fn i  args=0 vars=0 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/materialize
// closure: e, r, t
function {
  return t.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/materialize
// args: require, module, exports
// locals: e, t, r, i
function {
  i = function i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.materialize = undefined;
  e = require("../Notification");
  t = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.materialize = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/materialize
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
