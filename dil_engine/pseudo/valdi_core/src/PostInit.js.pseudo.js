// fn t  args=0 vars=0 closure=1 cpool=0 bc=38B file=valdi_core/src/PostInit
// closure: e
function {
  e.postInitMobile();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=288B file=valdi_core/src/PostInit
// locals: this
function {
  this = this;
  if ((this.greaterThan(Number.MAX_SAFE_INTEGER))) goto L_9c;
  if (!(this.lessThan(Number.MIN_SAFE_INTEGER))) goto L_fb;
  throw new Error("Long value ".concat(this.toString(), " is too large to be represented as a primitive number"));
  return this.toNumber();   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=142B file=valdi_core/src/PostInit
// args: require, module, exports
// locals: e, t
function {
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.postInit = undefined;
  e = require("./PostInitMobile");
  Long.prototype.valueOf = function <atom:0>;
  exports.postInit = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/PostInit
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
