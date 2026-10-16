// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=cel/src/CELScope
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.values = e;
  this.parent = t;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=168B file=cel/src/CELScope
// args: t
// locals: s, this
// closure: e
function {
  this = this;
  let s;
  s = e.getOwnProperty(this.values, t);
  if (!((undefined !== s))) goto L_59;
  return s;
  if (!((this.parent == null))) goto L_82;
  this.parent;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.resolveValue(t);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=18B file=cel/src/CELScope
// args: e
// locals: this
// closure: CELScopeImpl
function {
  this = this;
  null;
  e;
  return new CELScopeImpl({}, this);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=137B file=cel/src/CELScope
// args: require, module, exports
// locals: e, CELScopeImpl, <class_fields_init>, CELScopeImpl#1
function {
  let CELScopeImpl#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CELScopeImpl = undefined;
  e = require("./GetOwnProperty");
  let CELScopeImpl;
  let <class_fields_init>;
  class CELScopeImpl extends undefined { ... }
  <proto:CELScopeImpl>.resolveValue = function <atom:0>;
  <proto:CELScopeImpl>.subscopeWithValues = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CELScopeImpl>;
  CELScopeImpl = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc CELScopeImpl
  CELScopeImpl#1 = function <atom:0>;
  exports.CELScopeImpl = CELScopeImpl#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/CELScope
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
