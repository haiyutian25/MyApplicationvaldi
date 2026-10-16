// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=valdi_rxjs/src/operators/publishBehavior
// closure: b
function {
  return b;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=89B file=valdi_rxjs/src/operators/publishBehavior
// args: t
// locals: b
// closure: e, o, r
function {
  let b;
  b = new e.BehaviorSubject(o);
  return new r.ConnectableObservable(t, function <atom:0>);
}

// fn o  args=1 vars=1 closure=2 cpool=1 bc=3B file=valdi_rxjs/src/operators/publishBehavior
// args: o
// closure: e, r
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/publishBehavior
// args: require, module, exports
// locals: e, r, o
function {
  o = function o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.publishBehavior = undefined;
  e = require("../BehaviorSubject");
  r = require("../observable/ConnectableObservable");
  exports.publishBehavior = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/publishBehavior
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
