// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=valdi_rxjs/src/operators/subscribeOn
// closure: e, t
function {
  return e.subscribe(t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=78B file=valdi_rxjs/src/operators/subscribeOn
// args: e, t
// closure: r, s
function {
  t.add(r.schedule(function <atom:0>, s));
  return;
}

// fn r  args=2 vars=4 closure=1 cpool=1 bc=58B file=valdi_rxjs/src/operators/subscribeOn
// args: r, s
// locals: r#1, s#1
// closure: e
function {
  let s#1;
  let r#1;
  r#1 = r;
  if (!((s === undefined))) goto L_10;
  s;
  s = 0;
  s#1 = 0;
  return e.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/operators/subscribeOn
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.subscribeOn = undefined;
  e = require("../util/lift");
  exports.subscribeOn = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/subscribeOn
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
