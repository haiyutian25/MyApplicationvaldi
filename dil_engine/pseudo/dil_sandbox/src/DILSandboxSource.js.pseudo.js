// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=dil_sandbox/src/DILSandboxSource
// args: e
function {
  return ("string" == typeof e);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=129B file=dil_sandbox/src/DILSandboxSource
// args: e
// closure: a, o
function {
  if ((a.has(e))) goto L_80;
  return o.includes("__dil.jsx(".concat(e, ","));
}

// fn r  args=3 vars=9 closure=2 cpool=2 bc=815B file=dil_sandbox/src/DILSandboxSource
// args: r, o, n
// locals: s, i, a, e, c, r#1
// closure: t, e
function {
  let a;
  let i;
  let s;
  if (!((undefined !== r))) goto L_d0;
  if ((!Array.isArray(r))) goto L_68;
  if (!(!r.every(function <atom:0>))) goto L_79;
  throw new Error("DIL requiredComponents must be an array of strings.");
  return Array.from(new Set(r)).sort();   // tail call
  s = n.opGenui;
  if (!(t(s))) goto L_148;
  if (!(t(s.componentResults))) goto L_148;
  goto L_149;
  // [栈深重同步 1 -> 0]
  i = {};
  a = new Set();
  let c;
  let e;
  const _it1 = Object.entries(i);
  goto L_2b8;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  e = <value(_it2)>;
  <done(_it2)>;
  c = <value(_it2)>;
  if (!(t(c))) goto L_218;
  if (!(("string" == typeof c.componentName))) goto L_218;
  a.add(c.componentName);
  goto L_2b8;
  // [栈深重同步 4 -> 3]
  try { // catch -> L_2ae
  let r#1;
  r#1 = JSON.parse(e);
  if (!(Array.isArray(r#1))) goto L_2aa;
  a.add(r#1[0]);
  <catch>;
  goto L_2b8;
  // [栈深重同步 2 -> 4]
  <?>;
  try { // catch -> L_2b7
  <?>;
  goto L_2b8;
  // [栈深重同步 2 -> 4]
  throw <?>;
  // [栈深重同步 3 -> 2]
  if (!(<done(<?>)>)) goto L_18a;
  <value(<?>)>;
  return e.DIL_LAZY_COMPONENT_NAMES.filter(function <atom:0>).sort();   // tail call
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_sandbox/src/DILSandboxSource
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=96B file=dil_sandbox/src/DILSandboxSource
// args: require, module, exports
// locals: e, r, t
function {
  r = function r;
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveDILRequiredComponents = undefined;
  e = require("dil_generated_components/src/DILComponentNames.generated");
  exports.resolveDILRequiredComponents = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxSource
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
