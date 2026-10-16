// fn o  args=1 vars=1 closure=0 cpool=0 bc=3B file=valdi_rxjs/src/util/errorContext
// args: r
function {
  r();
  return;
}

// fn t  args=1 vars=1 closure=2 cpool=0 bc=109B file=valdi_rxjs/src/util/errorContext
// args: o
// closure: r, e
function {
  if (!(r.config.useDeprecatedSynchronousErrorHandling)) goto L_6c;
  if (!(e)) goto L_6c;
  e.errorThrown = true;
  e.error = o;
  o;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=123B file=valdi_rxjs/src/util/errorContext
// args: require, module, exports
// locals: r, e, o, t
function {
  o = function o;
  t = function t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.errorContext = undefined;
  exports.captureError = undefined;
  r = require("../config");
  e = null;
  exports.errorContext = o;
  exports.captureError = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/errorContext
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
