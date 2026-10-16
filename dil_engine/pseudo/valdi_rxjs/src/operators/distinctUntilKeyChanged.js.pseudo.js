// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=20B file=valdi_rxjs/src/operators/distinctUntilKeyChanged
// args: t, n
// closure: i, e
function {
  if (!(i)) goto L_c;
  return i(t[e], n[e]);
  return (t[e] === n[e]);
}

// fn e  args=2 vars=2 closure=1 cpool=1 bc=41B file=valdi_rxjs/src/operators/distinctUntilKeyChanged
// args: e, i
// closure: t
function {
  return t.distinctUntilChanged(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/operators/distinctUntilKeyChanged
// args: require, module, exports
// locals: t, e
function {
  e = function e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.distinctUntilKeyChanged = undefined;
  t = require("./distinctUntilChanged");
  exports.distinctUntilKeyChanged = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/distinctUntilKeyChanged
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
