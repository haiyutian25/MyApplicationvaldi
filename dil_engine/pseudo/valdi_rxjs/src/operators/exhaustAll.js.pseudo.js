// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=51B file=valdi_rxjs/src/operators/exhaustAll
// closure: i, u, o
function {
  i = null;
  null;
  if (!(u)) goto L_32;
  o.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=1 bc=127B file=valdi_rxjs/src/operators/exhaustAll
// args: e
// closure: i, u, o, r, t
function {
  if ((i)) goto L_7e;
  i = r.innerFrom(e).subscribe(t.createOperatorSubscriber(o, undefined, function <atom:0>));
  r.innerFrom(e).subscribe(t.createOperatorSubscriber(o, undefined, function <atom:0>));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=53B file=valdi_rxjs/src/operators/exhaustAll
// closure: u, i, o
function {
  u = true;
  true;
  if (!(!i)) goto L_34;
  o.complete();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=2 bc=91B file=valdi_rxjs/src/operators/exhaustAll
// args: e, o
// locals: u, i
// closure: r, t
function {
  let i;
  let u;
  u = false;
  i = null;
  e.subscribe(t.createOperatorSubscriber(o, function <atom:0>, function <atom:0>));
  return;
}

// fn o  args=0 vars=0 closure=3 cpool=1 bc=41B file=valdi_rxjs/src/operators/exhaustAll
// closure: r, t, e
function {
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/exhaustAll
// args: require, module, exports
// locals: e, r, t, o
function {
  o = function o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.exhaustAll = undefined;
  e = require("../util/lift");
  r = require("../observable/innerFrom");
  t = require("./OperatorSubscriber");
  exports.exhaustAll = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/exhaustAll
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
