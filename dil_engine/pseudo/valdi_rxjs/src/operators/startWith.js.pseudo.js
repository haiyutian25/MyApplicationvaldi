// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=126B file=valdi_rxjs/src/operators/startWith
// args: t, r
// closure: s, e, o
function {
  if (!(s)) goto L_31;
  goto L_58;
  // [栈深重同步 1 -> 0]
  e.concat(o, t).subscribe(r);
  return;
}

// fn o  args=1 vars=2 closure=3 cpool=1 bc=87B file=valdi_rxjs/src/operators/startWith
// args: o
// locals: s
// closure: e, t, r
function {
  o = ...0;
  let s;
  s = t.popScheduler(o);
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/operators/startWith
// args: require, module, exports
// locals: e, t, r, o
function {
  o = function o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.startWith = undefined;
  e = require("../observable/concat");
  t = require("../util/args");
  r = require("../util/lift");
  exports.startWith = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/startWith
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
