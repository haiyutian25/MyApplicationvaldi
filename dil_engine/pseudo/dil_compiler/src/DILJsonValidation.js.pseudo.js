// fn r  args=2 vars=3 closure=1 cpool=0 bc=275B file=dil_compiler/src/DILJsonValidation
// args: r, o
// locals: t
// closure: e
function {
  let t;
  if (((null === r))) goto L_40;
  if ((("object" != typeof r))) goto L_40;
  if (!(Array.isArray(r))) goto L_8c;
  return new e.DILDiagnosticError({phase: "DIL JSON validation", message: "Invalid DIL node: expected an object.", nodePath: o, node: r});
  t = r;
  if (!(("string" != typeof t.type))) goto L_111;
  return new e.DILDiagnosticError({phase: "DIL JSON validation", message: "Invalid DIL node: expected string "type".", nodePath: o, propName: "type", node: t});
  return undefined;
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=120B file=dil_compiler/src/DILJsonValidation
// args: r, o
// closure: e
function {
  if (!(!Array.isArray(r))) goto L_77;
  return new e.DILDiagnosticError({phase: "DIL JSON validation", message: "Invalid DIL children: expected an array.", nodePath: o, node: r});
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=118B file=dil_compiler/src/DILJsonValidation
// args: require, module, exports
// locals: e, r, o
function {
  r = function r;
  o = function o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getDILNodeValidationError = undefined;
  exports.getDILChildrenValidationError = undefined;
  e = require("./DILError");
  exports.getDILNodeValidationError = r;
  exports.getDILChildrenValidationError = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILJsonValidation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
