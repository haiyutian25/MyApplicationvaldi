// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_rxjs/src/operators/takeLast
// closure: e
function {
  return e.EMPTY;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=91B file=valdi_rxjs/src/operators/takeLast
// args: e
// closure: s, o
function {
  s.push(e);
  if (!((o < s.length))) goto L_5a;
  s.shift();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=95B file=valdi_rxjs/src/operators/takeLast
// locals: e
// closure: s, r
function {
  let e;
  for (const e of s) {
    r.next(e);
  }
  r.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=6B file=valdi_rxjs/src/operators/takeLast
// closure: s
function {
  s = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=3 bc=92B file=valdi_rxjs/src/operators/takeLast
// args: e, r
// locals: s
// closure: o, t
function {
  let s;
  s = [];
  e.subscribe(t.createOperatorSubscriber(r, function <atom:0>, function <atom:0>, undefined, function <atom:0>));
  return;
}

// fn o  args=1 vars=1 closure=3 cpool=2 bc=48B file=valdi_rxjs/src/operators/takeLast
// args: o
// closure: e, t, r
function {
  if (!((o <= 0))) goto L_8;
  return function <atom:0>;
  return r.operate(function <atom:0>);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/takeLast
// args: require, module, exports
// locals: e, r, t, o
function {
  o = function o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.takeLast = undefined;
  e = require("../observable/empty");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  exports.takeLast = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/takeLast
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
