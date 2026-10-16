// fn s  args=1 vars=1 closure=2 cpool=0 bc=77B file=valdi_rxjs/src/util/isInteropObservable
// args: s
// closure: r, e
function {
  return r.isFunction(s[e.observable]);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/util/isInteropObservable
// args: require, module, exports
// locals: e, r, s
function {
  s = function s;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isInteropObservable = undefined;
  e = require("../symbol/observable");
  r = require("./isFunction");
  exports.isInteropObservable = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/isInteropObservable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
