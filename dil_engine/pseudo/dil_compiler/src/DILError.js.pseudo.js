// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=444B file=dil_compiler/src/DILError
// args: e
// locals: r, this.active_func, new.target, this
// closure: <class_fields_init>, DILDiagnosticError
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let r;
  if (!(("string" == typeof e))) goto L_2a;
  goto L_2b;
  // [栈深重同步 1 -> 0]
  r = e;
  this = new new.target(r.message);
  if (!(<class_fields_init>)) goto L_67;
  <class_fields_init>.call(this);
  new new.target(r.message);
  Object.setPrototypeOf(this, DILDiagnosticError.prototype);
  this.details = r;
  this.sandboxTrace = r.sandboxTrace;
  this.name = "DILDiagnosticError";
  this.message = r.message;
  this.stack = "".concat(this.name, ": ", r.message);
  return this;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=375B file=dil_compiler/src/DILError
// args: e, o
// locals: s
// closure: r, DILDiagnosticError
function {
  let s;
  if (!(r(e))) goto L_a;
  return e;
  if (!((e instanceof Error))) goto L_16;
  goto L_17;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if (!((s == null))) goto L_4f;
  s;
  goto L_70;
  if (!((undefined.message == null))) goto L_7c;
  undefined.message;
  return new DILDiagnosticError({phase: o.phase, message: String(e), nodePath: o.nodePath, nodeType: o.nodeType, propName: o.propName, expression: o.expression, node: o.node, sourceError: s, sandboxTrace: o.sandboxTrace});
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=0 bc=1003B file=dil_compiler/src/DILError
// locals: r, t, o, n, this
// closure: o, s, e
function {
  this = this;
  let t;
  let r;
  r = this.details;
  t = ["DIL render error", "".concat(this.name, ": ", this.message), "Phase: ".concat(r.phase)];
  o(t, "Node path", r.nodePath);
  o(t, "Node type", r.nodeType);
  o(t, "Prop", r.propName);
  o(t, "Expression", r.expression);
  if (!((undefined !== r.sourceError))) goto L_29a;
  o(t, "Cause", "".concat(r.sourceError.name, ": ", r.sourceError.message));
  if (!((undefined !== r.node))) goto L_3bf;
  let o;
  o = undefined;
  try { // catch -> L_327
  o = JSON.stringify(r.node, undefined, 2);
  JSON.stringify(r.node, undefined, 2);
  <?>;
  goto L_366;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_365
  o = "Unable to serialize failed node: ".concat(String(n));
  "Unable to serialize failed node: ".concat(String(n));
  <?>;
  goto L_366;
  // [栈深重同步 0 -> 1]
  throw <?>;
  t.push("Node JSON:
".concat(s(o, e)));
  return t.join("
");   // tail call
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_compiler/src/DILError
// args: e
// closure: DILDiagnosticError
function {
  return (e instanceof DILDiagnosticError);
}

// fn o  args=3 vars=3 closure=0 cpool=0 bc=89B file=dil_compiler/src/DILError
// args: e, r, o
function {
  if (!((undefined !== o))) goto L_58;
  e.push("".concat(r, ": ", o));
  return;
}

// fn s  args=2 vars=2 closure=0 cpool=0 bc=90B file=dil_compiler/src/DILError
// args: e, r
function {
  if (!((e.length <= r))) goto L_8;
  return e;
  return "".concat(e.slice(0, r), "
...");
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=6 bc=174B file=dil_compiler/src/DILError
// args: require, module, exports
// locals: e, DILDiagnosticError, <class_fields_init>, DILDiagnosticError#1, r, o, s
function {
  r = function r;
  o = function o;
  s = function s;
  let DILDiagnosticError#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILDiagnosticError = undefined;
  exports.isDILDiagnosticError = undefined;
  e = 1200;
  let DILDiagnosticError;
  let <class_fields_init>;
  class DILDiagnosticError extends Error { ... }
  function <atom:0>.wrapError = function <atom:0>;
  <proto:DILDiagnosticError>.toFormattedStringForConsole = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILDiagnosticError>;
  DILDiagnosticError = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILDiagnosticError
  DILDiagnosticError#1 = function <atom:0>;
  exports.DILDiagnosticError = DILDiagnosticError#1;
  exports.isDILDiagnosticError = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
