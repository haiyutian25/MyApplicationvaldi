// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=46B file=valdi_rxjs/src/operators/throwIfEmpty
// args: r
// closure: u, o
function {
  u = true;
  true;
  o.next(r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=83B file=valdi_rxjs/src/operators/throwIfEmpty
// closure: u, o, r
function {
  if (!(u)) goto L_2b;
  return o.complete();
  return o.error(r());
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=2 bc=86B file=valdi_rxjs/src/operators/throwIfEmpty
// args: e, o
// locals: u
// closure: r, t
function {
  let u;
  u = false;
  e.subscribe(t.createOperatorSubscriber(o, function <atom:0>, function <atom:0>));
  return;
}

// fn o  args=1 vars=2 closure=3 cpool=1 bc=53B file=valdi_rxjs/src/operators/throwIfEmpty
// args: r
// locals: r#1
// closure: t, u, e
function {
  let r#1;
  if (!((r === undefined))) goto L_b;
  r;
  r = u;
  r#1 = u;
  return e.operate(function <atom:0>);   // tail call
}

// fn u  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_rxjs/src/operators/throwIfEmpty
// closure: r
function {
  return new r.EmptyError();
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=119B file=valdi_rxjs/src/operators/throwIfEmpty
// args: require, module, exports
// locals: r, e, t, o, u
function {
  o = function o;
  u = function u;
  let t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.throwIfEmpty = undefined;
  r = require("../util/EmptyError");
  e = require("../util/lift");
  t = require("./OperatorSubscriber");
  exports.throwIfEmpty = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/throwIfEmpty
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
