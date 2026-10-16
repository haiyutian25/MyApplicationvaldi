// fn r  args=2 vars=3 closure=0 cpool=0 bc=93B file=dil_renderer/src/DILHookRuntime
// args: e, r
// locals: t
function {
  if (!((e.length !== r.length))) goto L_a;
  return false;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_5a;
  if (!(!Object.is(e[t], r[t]))) goto L_50;
  return false;
  t = <t_new>;
  (t++);
  goto L_f;
  return true;
}

// fn t  args=2 vars=3 closure=1 cpool=0 bc=95B file=dil_renderer/src/DILHookRuntime
// args: r, t
// locals: n
// closure: e
function {
  try { // catch -> L_a
  r();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_5e
  t.reportError(e.toError(n));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=118B file=dil_renderer/src/DILHookRuntime
// args: require, module, exports
// locals: e, r, t
function {
  r = function r;
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.areDependenciesEqual = undefined;
  exports.runCleanup = undefined;
  e = require("./DILRuntimeUtils");
  exports.areDependenciesEqual = r;
  exports.runCleanup = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILHookRuntime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
