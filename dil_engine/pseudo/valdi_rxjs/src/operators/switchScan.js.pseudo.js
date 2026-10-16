// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=9B file=valdi_rxjs/src/operators/switchScan
// args: e, t
// closure: r, c
function {
  return r(c, e, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=8B file=valdi_rxjs/src/operators/switchScan
// args: e, t
// closure: c
function {
  c = t;
  t;
  return t;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=6B file=valdi_rxjs/src/operators/switchScan
// closure: c
function {
  c = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=3 bc=89B file=valdi_rxjs/src/operators/switchScan
// args: t, s
// locals: c
// closure: r, i, e
function {
  let c;
  c = i;
  e.switchMap(function <atom:0>, function <atom:0>)(t).subscribe(s);
  return function <atom:0>;
}

// fn r  args=2 vars=2 closure=2 cpool=1 bc=41B file=valdi_rxjs/src/operators/switchScan
// args: r, i
// closure: e, t
function {
  return t.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/switchScan
// args: require, module, exports
// locals: e, t, r
function {
  r = function r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.switchScan = undefined;
  e = require("./switchMap");
  t = require("../util/lift");
  exports.switchScan = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/switchScan
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
