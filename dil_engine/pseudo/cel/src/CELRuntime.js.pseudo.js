// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=cel/src/CELRuntime
// closure: s
function {
  return s.CELEvaluationError;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=cel/src/CELRuntime
// closure: s
function {
  return s.CELSyntaxError;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=cel/src/CELRuntime
// closure: i
function {
  return i.CELExpressionResolver;
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=0 bc=282B file=cel/src/CELRuntime
// args: e
// locals: e#1, this
// closure: <class_fields_init>, t, n, r, E
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let e#1;
  if (!((e === undefined))) goto L_1a;
  e;
  e = {};
  e#1 = {};
  null;
  n.DEFAULT_GLOBAL_VALUES;
  null;
  e.globalValues;
  this.globalScope = new t.CELScopeImpl({});
  this.evaluator = new r.CELASTEvaluator(this, e.receiverFunctions, E(e.receiverFunctions));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=cel/src/CELRuntime
// args: r
// closure: o
function {
  return o.CELParser.parse(r);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=77B file=cel/src/CELRuntime
// args: r
// locals: this
function {
  this = this;
  return this.compileFromAST(this.parse(r));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=cel/src/CELRuntime
// args: r
// locals: this
function {
  this = this;
  return this.evaluator.compile(r);   // tail call
}

// fn E  args=1 vars=3 closure=1 cpool=0 bc=123B file=cel/src/CELRuntime
// args: r
// locals: t, e
// closure: e
function {
  let t;
  null;
  e.DEFAULT_RECEIVER_CALL_SPECS;
  t = {};
  if (!((undefined === r))) goto L_37;
  return t;
  let e;
  for (const e of Object.keys(r)) {
    t[e] = {};
  }
  return t;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=8 bc=449B file=cel/src/CELRuntime
// args: require, module, exports
// locals: r, e, t, o, n, s, i, CELRuntime, <class_fields_init>, CELRuntime#1, E
function {
  E = function E;
  let CELRuntime#1;
  let n;
  let o;
  let t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CELEvaluationError = undefined;
  exports.CELSyntaxError = undefined;
  exports.CELExpressionResolver = undefined;
  exports.CELRuntime = undefined;
  r = require("./CELASTEvaluator");
  e = require("./CELCallSpecs");
  t = require("./CELScope");
  o = require("./parser/CELParser");
  n = require("./stdlib/StandardLibrary");
  s = require("./CELError");
  Object.defineProperty(exports, "CELEvaluationError", {enumerable: true, get: function <atom:0>});
  Object.defineProperty(exports, "CELSyntaxError", {enumerable: true, get: function <atom:0>});
  i = require("./CELExpressionResolver");
  Object.defineProperty(exports, "CELExpressionResolver", {enumerable: true, get: function <atom:0>});
  let CELRuntime;
  let <class_fields_init>;
  class CELRuntime extends undefined { ... }
  <proto:CELRuntime>.parse = function <atom:0>;
  <proto:CELRuntime>.compile = function <atom:0>;
  <proto:CELRuntime>.compileFromAST = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CELRuntime>;
  CELRuntime = function <atom:0>;
  // close_loc <class_fields_init>
  CELRuntime#1 = function <atom:0>;
  exports.CELRuntime = CELRuntime#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/CELRuntime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
