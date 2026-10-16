// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=65B file=valdi_rxjs/src/operators/skipWhile
// args: e
// closure: s, t, o, i
function {
  if ((s)) goto L_16;
  o = <o_new>;
  s = !t(e, (o++));
  if (!(!t(e, (o++)))) goto L_40;
  return i.next(e);
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=1 bc=89B file=valdi_rxjs/src/operators/skipWhile
// args: e, i
// locals: s, o
// closure: t, r
function {
  let o;
  let s;
  s = false;
  o = 0;
  e.subscribe(r.createOperatorSubscriber(i, function <atom:0>));
  return;
}

// fn t  args=1 vars=1 closure=2 cpool=1 bc=41B file=valdi_rxjs/src/operators/skipWhile
// args: t
// closure: r, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/skipWhile
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.skipWhile = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.skipWhile = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/skipWhile
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
