// fn t  args=2 vars=4 closure=2 cpool=0 bc=155B file=dil_compiler/src/DILParser
// args: e, o
// locals: t, i
// closure: r, n
function {
  let t;
  t = undefined;
  try { // catch -> L_3c
  t = JSON.parse(e);
  JSON.parse(e);
  <?>;
  goto L_93;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_92
  if (!((i instanceof Error))) goto L_88;
  goto L_89;
  // [栈深重同步 4 -> 3]
  throw new r.DILDiagnosticError({phase: "DIL JSON parse", message: "Invalid DIL JSON: failed to parse JSON string.", sourceError: undefined});
  // [栈深重同步 0 -> 1]
  throw <?>;
  return n(t, o);   // tail call
}

// fn n  args=2 vars=2 closure=2 cpool=0 bc=80B file=dil_compiler/src/DILParser
// args: r, e
// closure: i, o
function {
  return i(r, o.DILNodePath.root(), e, true);   // tail call
}

// fn i  args=4 vars=13 closure=4 cpool=0 bc=628B file=dil_compiler/src/DILParser
// args: r, o, t, n
// locals: a, c, l, u, h, f, e, r#1, n#1
// closure: e, s, d, i
function {
  let f;
  let h;
  let u;
  let l;
  let c;
  let a;
  if (!(("string" == typeof r))) goto L_1e;
  return r;
  a = e.getDILNodeValidationError(r, o.toString());
  if (!((undefined !== a))) goto L_7a;
  return s(a, t, n);   // tail call
  c = r;
  if (((undefined === c.children))) goto L_cc;
  if (!((null === c.children))) goto L_d2;
  return c;
  l = o.children();
  u = e.getDILChildrenValidationError(c.children, l);
  if (!((undefined !== u))) goto L_161;
  null;
  c;
  return {children: d(u, t)};
  h = [];
  f = false;
  let e;
  e = 0;
  if (!((e < c.children.length))) goto L_259;
  let n#1;
  let r#1;
  r#1 = c.children[e];
  n#1 = i(r#1, o.child(e), t, false);
  if (!((undefined === n#1))) goto L_211;
  f = true;
  goto L_24d;
  // [栈深重同步 1 -> 0]
  if (!((n#1 !== r#1))) goto L_222;
  f = true;
  true;
  h.push(n#1);
  e = <e_new>;
  (e++);
  goto L_170;
  if (!(f)) goto L_270;
  null;
  c;
  return {children: h};
  return c;
}

// fn s  args=3 vars=3 closure=0 cpool=0 bc=84B file=dil_compiler/src/DILParser
// args: r, e, o
function {
  if ((o)) goto L_29;
  if (!((1 === e.errorMode))) goto L_2d;
  throw r;
  e.reportError(r);
  return;
}

// fn d  args=2 vars=2 closure=0 cpool=0 bc=79B file=dil_compiler/src/DILParser
// args: r, e
function {
  if (!((1 === e.errorMode))) goto L_28;
  throw r;
  e.reportError(r);
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=5 bc=154B file=dil_compiler/src/DILParser
// args: require, module, exports
// locals: r, e, o, t, n, i, s, d
function {
  t = function t;
  n = function n;
  i = function i;
  s = function s;
  d = function d;
  let o;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.parseDILJson = undefined;
  exports.validateDILJsonValue = undefined;
  r = require("./DILError");
  e = require("./DILJsonValidation");
  o = require("./DILNodePath");
  exports.parseDILJson = t;
  exports.validateDILJsonValue = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILParser
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
