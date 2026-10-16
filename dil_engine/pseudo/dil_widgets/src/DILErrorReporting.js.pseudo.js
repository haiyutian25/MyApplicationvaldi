// fn o  args=2 vars=5 closure=2 cpool=2 bc=791B file=dil_widgets/src/DILErrorReporting
// args: o, i
// locals: t, s, n
// closure: e, r
function {
  let s;
  let t;
  if (!(e.isDILDiagnosticError(o))) goto L_a9;
  if (!(r.isLoggingEnabled)) goto L_100;
  goto L_100;
  // [栈深重同步 1 -> 0]
  if (!(r.isLoggingEnabled)) goto L_100;
  console.error("DIL render error", o);
  if (!((undefined === i))) goto L_107;
  return;
  if (!(e.isDILDiagnosticError(o))) goto L_153;
  goto L_154;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!((t == null))) goto L_186;
  t;
  goto L_1a7;
  if (!((undefined.sourceError == null))) goto L_1ad;
  undefined.sourceError;
  s = new RegExp("^Timed out waiting \\d+ms for the DIL sandbox worker to ").test(o.message);
  try { // catch -> L_2b7
  if (!(s)) goto L_20c;
  goto L_211;
  // [栈深重同步 4 -> 3]
  if (!((t == null))) goto L_248;
  t;
  goto L_269;
  if (!((t == null))) goto L_282;
  t;
  goto L_2a3;
  i.log({level: 3, message: "DIL render error", attributesJson: JSON.stringify({phase: undefined.phase, sandbox_timeout: s, node_path_present: (undefined !== undefined.nodePath)})});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_316
  if (!(r.isLoggingEnabled)) goto L_313;
  console.warn("DIL diagnostic sink failed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=140B file=dil_widgets/src/DILErrorReporting
// args: require, module, exports
// locals: r, e, o
function {
  o = function o;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.reportDILError = undefined;
  r = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("dil_compiler/src/DILError");
  exports.reportDILError = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILErrorReporting
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
