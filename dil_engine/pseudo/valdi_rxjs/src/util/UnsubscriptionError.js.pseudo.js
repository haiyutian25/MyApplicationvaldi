// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=82B file=valdi_rxjs/src/util/UnsubscriptionError
// args: r, s
function {
  return "".concat((s + 1), ") ", r.toString());   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=173B file=valdi_rxjs/src/util/UnsubscriptionError
// args: s
// locals: this
// closure: r
function {
  this = this;
  r(this);
  if (!(s)) goto L_88;
  goto L_89;
  // [栈深重同步 2 -> 1]
  this.message = "";
  this.name = "UnsubscriptionError";
  this.errors = s;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=3B file=valdi_rxjs/src/util/UnsubscriptionError
// args: r
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/util/UnsubscriptionError
// args: require, module, exports
// locals: r
function {
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.UnsubscriptionError = undefined;
  r = require("./createErrorClass");
  exports.UnsubscriptionError = r.createErrorClass(function <atom:0>);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/UnsubscriptionError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
