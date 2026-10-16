// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=100B file=valdi_rxjs/src/util/reportUnhandledError
// locals: e
// closure: r, o
function {
  let e;
  if (((undefined === undefined))) goto L_2f;
  e = <to_object>(undefined).onUnhandledError;
  <to_object>(undefined);
  goto L_56;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_8;
  // [栈深重同步 1 -> 0]
  if (!(!e)) goto L_5e;
  throw o;
  e(o);
  return;
}

// fn o  args=1 vars=1 closure=2 cpool=1 bc=75B file=valdi_rxjs/src/util/reportUnhandledError
// args: o
// closure: r, e
function {
  e.timeoutProvider.setTimeout(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/util/reportUnhandledError
// args: require, module, exports
// locals: r, e, o
function {
  o = function o;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.reportUnhandledError = undefined;
  r = require("../config");
  e = require("../scheduler/timeoutProvider");
  exports.reportUnhandledError = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/reportUnhandledError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
