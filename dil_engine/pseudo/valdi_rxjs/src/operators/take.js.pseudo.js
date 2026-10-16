// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_rxjs/src/operators/take
// closure: e
function {
  return e.EMPTY;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=100B file=valdi_rxjs/src/operators/take
// args: e
// closure: i, o, r
function {
  i = (i ++);
  if (!(((i ++) <= o))) goto L_63;
  r.next(e);
  if (!((o <= i))) goto L_63;
  r.complete();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=83B file=valdi_rxjs/src/operators/take
// args: e, r
// locals: i
// closure: o, t
function {
  let i;
  i = 0;
  e.subscribe(t.createOperatorSubscriber(r, function <atom:0>));
  return;
}

// fn o  args=1 vars=1 closure=3 cpool=2 bc=48B file=valdi_rxjs/src/operators/take
// args: o
// closure: e, t, r
function {
  if (!((o <= 0))) goto L_8;
  return function <atom:0>;
  return r.operate(function <atom:0>);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/take
// args: require, module, exports
// locals: e, r, t, o
function {
  o = function o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.take = undefined;
  e = require("../observable/empty");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  exports.take = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/take
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
