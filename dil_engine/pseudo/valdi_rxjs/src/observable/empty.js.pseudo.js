// fn t  args=1 vars=1 closure=2 cpool=0 bc=42B file=valdi_rxjs/src/observable/empty
// args: e
// closure: r, exports
function {
  if (!(e)) goto L_7;
  return r(e);
  return exports.EMPTY;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_rxjs/src/observable/empty
// closure: e
function {
  return e.complete();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=39B file=valdi_rxjs/src/observable/empty
// args: e
// closure: t
function {
  return t.schedule(function <atom:0>);   // tail call
}

// fn r  args=1 vars=1 closure=1 cpool=1 bc=43B file=valdi_rxjs/src/observable/empty
// args: t
// closure: e
function {
  return new e.Observable(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=valdi_rxjs/src/observable/empty
// args: e
function {
  return e.complete();   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=159B file=valdi_rxjs/src/observable/empty
// args: require, module, exports
// locals: e, t, r
function {
  t = function t;
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EMPTY = undefined;
  exports.empty = undefined;
  e = require("../Observable");
  exports.EMPTY = new e.Observable(function <atom:0>);
  exports.empty = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/empty
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
