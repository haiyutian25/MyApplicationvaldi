// fn i  args=1 vars=1 closure=2 cpool=0 bc=202B file=valdi_rxjs/src/util/isObservable
// args: i
// closure: e, s
function {
  if (!(!!i)) goto L_c9;
  if (((i instanceof e.Observable))) goto L_c9;
  if (!(s.isFunction(i.lift))) goto L_c9;
  return s.isFunction(i.subscribe);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/util/isObservable
// args: require, module, exports
// locals: e, s, i
function {
  i = function i;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isObservable = undefined;
  e = require("../Observable");
  s = require("./isFunction");
  exports.isObservable = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/isObservable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
