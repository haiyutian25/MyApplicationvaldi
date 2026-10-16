// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=valdi_rxjs/src/operators/observeOn
// closure: o, r
function {
  return o.next(r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=44B file=valdi_rxjs/src/operators/observeOn
// args: r
// closure: o, e, u, c
function {
  return e.executeSchedule(o, u, function <atom:0>, c);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_rxjs/src/operators/observeOn
// closure: o
function {
  return o.complete();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=44B file=valdi_rxjs/src/operators/observeOn
// closure: o, e, u, c
function {
  return e.executeSchedule(o, u, function <atom:0>, c);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=valdi_rxjs/src/operators/observeOn
// closure: o, r
function {
  return o.error(r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=44B file=valdi_rxjs/src/operators/observeOn
// args: r
// closure: o, e, u, c
function {
  return e.executeSchedule(o, u, function <atom:0>, c);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=3 bc=84B file=valdi_rxjs/src/operators/observeOn
// args: r, o
// closure: e, u, c, t
function {
  r.subscribe(t.createOperatorSubscriber(o, function <atom:0>, function <atom:0>, function <atom:0>));
  return;
}

// fn u  args=2 vars=4 closure=3 cpool=1 bc=58B file=valdi_rxjs/src/operators/observeOn
// args: u, c
// locals: u#1, c#1
// closure: e, t, r
function {
  let c#1;
  let u#1;
  u#1 = u;
  if (!((c === undefined))) goto L_10;
  c;
  c = 0;
  c#1 = 0;
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/observeOn
// args: require, module, exports
// locals: e, r, t, u
function {
  u = function u;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.observeOn = undefined;
  e = require("../util/executeSchedule");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  exports.observeOn = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/observeOn
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
