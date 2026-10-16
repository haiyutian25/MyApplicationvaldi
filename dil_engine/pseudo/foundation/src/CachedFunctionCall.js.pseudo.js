// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=foundation/src/CachedFunctionCall
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.fn = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=138B file=foundation/src/CachedFunctionCall
// args: t
// locals: this
function {
  this = this;
  if (!((t !== this.lastInput))) goto L_66;
  this.lastInput = t;
  this.lastOutput = this.fn(t);
  this.fn(t);
  return this.lastOutput;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=115B file=foundation/src/CachedFunctionCall
// args: require, module, exports
// locals: CachedFunctionCall, <class_fields_init>, CachedFunctionCall#1
function {
  let CachedFunctionCall#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CachedFunctionCall = undefined;
  let CachedFunctionCall;
  let <class_fields_init>;
  class CachedFunctionCall extends undefined { ... }
  <proto:CachedFunctionCall>.getOrCall = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CachedFunctionCall>;
  CachedFunctionCall = function <atom:0>;
  // close_loc <class_fields_init>
  CachedFunctionCall#1 = function <atom:0>;
  exports.CachedFunctionCall = CachedFunctionCall#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/CachedFunctionCall
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
