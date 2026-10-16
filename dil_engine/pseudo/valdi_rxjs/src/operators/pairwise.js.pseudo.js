// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=72B file=valdi_rxjs/src/operators/pairwise
// args: e
// locals: r
// closure: i, s, t
function {
  let r;
  r = i;
  i = e;
  e;
  if (!(s)) goto L_40;
  t.next([r, e]);
  s = true;
  true;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=1 bc=89B file=valdi_rxjs/src/operators/pairwise
// args: e, t
// locals: i, s
// closure: r
function {
  let s;
  let i;
  i = undefined;
  s = false;
  e.subscribe(r.createOperatorSubscriber(t, function <atom:0>));
  return;
}

// fn t  args=0 vars=0 closure=2 cpool=1 bc=41B file=valdi_rxjs/src/operators/pairwise
// closure: r, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/pairwise
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.pairwise = undefined;
  e = require("../util/lift");
  r = require("./OperatorSubscriber");
  exports.pairwise = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/pairwise
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
