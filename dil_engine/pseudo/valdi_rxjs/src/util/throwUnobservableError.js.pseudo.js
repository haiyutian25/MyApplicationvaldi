// fn e  args=1 vars=1 closure=0 cpool=0 bc=125B file=valdi_rxjs/src/util/throwUnobservableError
// args: e
function {
  if (!((null !== e))) goto L_42;
  if (!(("object" == typeof e))) goto L_42;
  goto L_71;
  // [栈深重同步 5 -> 4]
  return new TypeError("You provided ".concat("'".concat(e, "'"), " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."));
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=valdi_rxjs/src/util/throwUnobservableError
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createInvalidObservableTypeError = undefined;
  exports.createInvalidObservableTypeError = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/throwUnobservableError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
