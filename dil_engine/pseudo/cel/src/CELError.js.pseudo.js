// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=57B file=cel/src/CELError
// args: r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(r);
  this.name = "CELSyntaxError";
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=57B file=cel/src/CELError
// args: r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(r);
  this.name = "CELEvaluationError";
  return this;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=167B file=cel/src/CELError
// args: require, module, exports
// locals: CELSyntaxError, <class_fields_init>, CELSyntaxError#1, CELEvaluationError, <class_fields_init>#1, CELEvaluationError#1
function {
  let CELEvaluationError#1;
  let CELSyntaxError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CELSyntaxError = undefined;
  exports.CELEvaluationError = undefined;
  let CELSyntaxError;
  let <class_fields_init>;
  class CELSyntaxError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:CELSyntaxError>;
  CELSyntaxError = function <atom:0>;
  // close_loc <class_fields_init>
  CELSyntaxError#1 = function <atom:0>;
  exports.CELSyntaxError = CELSyntaxError#1;
  let CELEvaluationError;
  let <class_fields_init>#1;
  class CELEvaluationError extends Error { ... }
  <class_fields_init>#1 = undefined;
  <proto:CELEvaluationError>;
  CELEvaluationError = function <atom:0>;
  // close_loc <class_fields_init>#1
  CELEvaluationError#1 = function <atom:0>;
  exports.CELEvaluationError = CELEvaluationError#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/CELError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
