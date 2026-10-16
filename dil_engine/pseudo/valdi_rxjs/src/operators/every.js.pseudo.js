// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=133B file=valdi_rxjs/src/operators/every
// args: r
// closure: t, o, i, e, c
function {
  i = <i_new>;
  if ((t.call(o, r, (i++), e))) goto L_84;
  c.next(false);
  c.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=valdi_rxjs/src/operators/every
// closure: c
function {
  c.next(true);
  c.complete();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=2 bc=85B file=valdi_rxjs/src/operators/every
// args: e, c
// locals: i
// closure: t, o, r
function {
  let i;
  i = 0;
  e.subscribe(r.createOperatorSubscriber(c, function <atom:0>, function <atom:0>));
  return;
}

// fn t  args=2 vars=2 closure=2 cpool=1 bc=41B file=valdi_rxjs/src/operators/every
// args: t, o
// closure: r, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/every
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.every = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.every = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/every
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
