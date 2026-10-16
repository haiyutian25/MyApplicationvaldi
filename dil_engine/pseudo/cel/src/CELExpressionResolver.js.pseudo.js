// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=46B file=cel/src/CELExpressionResolver
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.runtime = e;
  this.expressions = new Map();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=242B file=cel/src/CELExpressionResolver
// args: e
// locals: s, r, this
function {
  this = this;
  let r;
  let s;
  s = this.expressions.get(e);
  if (!((undefined !== s))) goto L_5b;
  return s;
  r = this.runtime.compile(e);
  this.expressions.set(e, r);
  return r;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=115B file=cel/src/CELExpressionResolver
// args: require, module, exports
// locals: CELExpressionResolver, <class_fields_init>, CELExpressionResolver#1
function {
  let CELExpressionResolver#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CELExpressionResolver = undefined;
  let CELExpressionResolver;
  let <class_fields_init>;
  class CELExpressionResolver extends undefined { ... }
  <proto:CELExpressionResolver>.getOrCompile = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CELExpressionResolver>;
  CELExpressionResolver = function <atom:0>;
  // close_loc <class_fields_init>
  CELExpressionResolver#1 = function <atom:0>;
  exports.CELExpressionResolver = CELExpressionResolver#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/CELExpressionResolver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
