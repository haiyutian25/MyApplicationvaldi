// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=111B file=valdi_rxjs/src/operators/takeWhile
// args: e
// locals: r
// closure: t, s, i, o
function {
  let r;
  s = <s_new>;
  r = t(e, (s++));
  if ((r)) goto L_16;
  if (!(i)) goto L_40;
  o.next(e);
  if (!(!r)) goto L_6e;
  o.complete();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=1 bc=83B file=valdi_rxjs/src/operators/takeWhile
// args: e, o
// locals: s
// closure: t, i, r
function {
  let s;
  s = 0;
  e.subscribe(r.createOperatorSubscriber(o, function <atom:0>));
  return;
}

// fn t  args=2 vars=4 closure=2 cpool=1 bc=59B file=valdi_rxjs/src/operators/takeWhile
// args: t, i
// locals: t#1, i#1
// closure: r, e
function {
  let i#1;
  let t#1;
  t#1 = t;
  if (!((i === undefined))) goto L_11;
  i;
  i = false;
  i#1 = false;
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/takeWhile
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.takeWhile = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.takeWhile = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/takeWhile
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
