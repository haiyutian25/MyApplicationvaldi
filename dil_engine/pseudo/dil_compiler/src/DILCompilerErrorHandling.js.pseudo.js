// fn e  args=3 vars=4 closure=3 cpool=0 bc=184B file=dil_compiler/src/DILCompilerErrorHandling
// args: e, t, i
// locals: n
// closure: r, E, o
function {
  let n;
  if (!(r.isDILDiagnosticError(e))) goto L_2e;
  goto L_82;
  // [栈深重同步 1 -> 0]
  n = r.DILDiagnosticError.wrapError(e, {phase: "DIL processing"});
  if (!((1 === t))) goto L_8c;
  throw n;
  E(i, n);
  return o.EMPTY_WIDGET_RENDERER;
}

// fn t  args=4 vars=5 closure=3 cpool=0 bc=147B file=dil_compiler/src/DILCompilerErrorHandling
// args: e, t, i, n
// locals: s
// closure: r, E, o
function {
  let s;
  null;
  n;
  s = r.DILDiagnosticError.wrapError(e, {phase: "DIL compilation"});
  if (!((1 === t))) goto L_67;
  throw s;
  E(i, s);
  return o.EMPTY_WIDGET_RENDERER_INTERNAL;
}

// fn E  args=2 vars=2 closure=0 cpool=0 bc=4B file=dil_compiler/src/DILCompilerErrorHandling
// args: r, o
function {
  r(o);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=156B file=dil_compiler/src/DILCompilerErrorHandling
// args: require, module, exports
// locals: r, o, e, t, E
function {
  e = function e;
  t = function t;
  E = function E;
  let o;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.handleRootError = undefined;
  exports.handleNodeError = undefined;
  exports.reportDILCompilerError = undefined;
  r = require("./DILError");
  o = require("./DILEmptyWidgetRenderer");
  exports.handleRootError = e;
  exports.handleNodeError = t;
  exports.reportDILCompilerError = E;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILCompilerErrorHandling
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
