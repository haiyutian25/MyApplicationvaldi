// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=89B file=valdi_rxjs/src/operators/filter
// args: e
// closure: t, i, s, o
function {
  s = <s_new>;
  if (!(t.call(i, e, (s++)))) goto L_58;
  return o.next(e);
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=1 bc=83B file=valdi_rxjs/src/operators/filter
// args: e, o
// locals: s
// closure: t, i, r
function {
  let s;
  s = 0;
  e.subscribe(r.createOperatorSubscriber(o, function <atom:0>));
  return;
}

// fn t  args=2 vars=2 closure=2 cpool=1 bc=41B file=valdi_rxjs/src/operators/filter
// args: t, i
// closure: r, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/filter
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.filter = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.filter = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/filter
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
