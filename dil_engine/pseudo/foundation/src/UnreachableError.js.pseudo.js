// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=81B file=foundation/src/UnreachableError
// args: r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(":".concat(r));
  if (!(<class_fields_init>)) goto L_4b;
  <class_fields_init>.call(this);
  new new.target(":".concat(r));
  return this;
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=9B file=foundation/src/UnreachableError
// args: r
// closure: UnreachableCaseError
function {
  throw new UnreachableCaseError(r);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=136B file=foundation/src/UnreachableError
// args: require, module, exports
// locals: UnreachableCaseError, <class_fields_init>, UnreachableCaseError#1, r
function {
  r = function r;
  let UnreachableCaseError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.UnreachableCaseError = undefined;
  exports.unreachable = undefined;
  let UnreachableCaseError;
  let <class_fields_init>;
  class UnreachableCaseError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:UnreachableCaseError>;
  UnreachableCaseError = function <atom:0>;
  // close_loc <class_fields_init>
  UnreachableCaseError#1 = function <atom:0>;
  exports.UnreachableCaseError = UnreachableCaseError#1;
  exports.unreachable = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/UnreachableError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
