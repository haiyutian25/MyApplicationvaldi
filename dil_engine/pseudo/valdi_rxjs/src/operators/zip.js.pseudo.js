// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=87B file=valdi_rxjs/src/operators/zip
// args: r, t
// closure: e, i
function {
  // append([r], 1, i)
  i;
  e.zip.apply(undefined, [r]).subscribe(t);
  return;
}

// fn i  args=1 vars=1 closure=2 cpool=1 bc=45B file=valdi_rxjs/src/operators/zip
// args: i
// closure: e, r
function {
  i = ...0;
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/zip
// args: require, module, exports
// locals: e, r, i
function {
  i = function i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.zip = undefined;
  e = require("../observable/zip");
  r = require("../util/lift");
  exports.zip = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/zip
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
