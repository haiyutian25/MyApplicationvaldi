// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=valdi_rxjs/src/operators/publishLast
// closure: s
function {
  return s;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=88B file=valdi_rxjs/src/operators/publishLast
// args: r
// locals: s
// closure: e, t
function {
  let s;
  s = new e.AsyncSubject();
  return new t.ConnectableObservable(r, function <atom:0>);
}

// fn r  args=0 vars=0 closure=2 cpool=1 bc=3B file=valdi_rxjs/src/operators/publishLast
// closure: e, t
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/publishLast
// args: require, module, exports
// locals: e, t, r
function {
  r = function r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.publishLast = undefined;
  e = require("../AsyncSubject");
  t = require("../observable/ConnectableObservable");
  exports.publishLast = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/publishLast
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
