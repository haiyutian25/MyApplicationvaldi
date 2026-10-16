// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=67B file=foundation/src/impl/CallbackDisposable
// args: l
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.cancelable = new e.default(l);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=foundation/src/impl/CallbackDisposable
// locals: this
function {
  this = this;
  this.cancelable.cancel();
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=115B file=foundation/src/impl/CallbackDisposable
// args: require, module, exports
// locals: e, CallbackDisposable, <class_fields_init>, CallbackDisposable#1
function {
  let CallbackDisposable#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  e = require("./CallbackCancelable");
  let CallbackDisposable;
  let <class_fields_init>;
  class CallbackDisposable extends undefined { ... }
  <proto:CallbackDisposable>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CallbackDisposable>;
  CallbackDisposable = function <atom:0>;
  // close_loc <class_fields_init>
  CallbackDisposable#1 = function <atom:0>;
  exports.default = CallbackDisposable#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/impl/CallbackDisposable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
