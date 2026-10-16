// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=62B file=foundation/src/impl/CallbackCancelable
// locals: l
// closure: this
function {
  let l;
  l = this.callback;
  this.callback = undefined;
  if (!((l == null))) goto L_3c;
  l;
  goto L_3d;
  undefined();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=39B file=foundation/src/impl/CallbackCancelable
// args: l
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.cancel = function <atom:0>;
  this.callback = l;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=96B file=foundation/src/impl/CallbackCancelable
// args: require, module, exports
// locals: CallbackCancelable, <class_fields_init>, CallbackCancelable#1
function {
  let CallbackCancelable#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  let CallbackCancelable;
  let <class_fields_init>;
  class CallbackCancelable extends undefined { ... }
  <class_fields_init> = undefined;
  <proto:CallbackCancelable>;
  CallbackCancelable = function <atom:0>;
  // close_loc <class_fields_init>
  CallbackCancelable#1 = function <atom:0>;
  exports.default = CallbackCancelable#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/impl/CallbackCancelable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
