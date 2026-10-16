// fn r  args=5 vars=9 closure=2 cpool=0 bc=232B file=dil_cel/src/utils/StringHelpers
// args: r, t, i, l, s
// locals: a, u, c, g
// closure: e, n
function {
  let c;
  let u;
  let a;
  a = String(i);
  u = String(l);
  if (!((s == null))) goto L_27;
  s;
  c = String("");
  if (!((0 === u.length))) goto L_6a;
  e.emitWarning(r, new Error("replace_all() returned original value because search is empty"));
  return a;
  try { // catch -> L_ac
  return a.replace(new RegExp(u, "g"), c);
  // [栈深重同步 0 -> 1]
  g = <?>;
  try { // catch -> L_e7
  e.emitWarning(r, g);
  return n(a, u, c);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn n  args=3 vars=6 closure=0 cpool=0 bc=206B file=dil_cel/src/utils/StringHelpers
// args: e, r, n
// locals: t, i, l
function {
  let i;
  let t;
  t = "";
  i = 0;
  if (!((i < e.length))) goto L_ca;
  let l;
  l = e.indexOf(r, i);
  if (!((l < 0))) goto L_7e;
  t = (t + e.substring(i));
  (t + e.substring(i));
  return t;
  t = (t + e.substring(i, l));
  (t + e.substring(i, l));
  t = (t + n);
  (t + n);
  i = (l + r.length);
  (l + r.length);
  goto L_a;
  return t;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=96B file=dil_cel/src/utils/StringHelpers
// args: require, module, exports
// locals: e, r, n
function {
  r = function r;
  n = function n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.replace_all = undefined;
  e = require("./Warnings");
  exports.replace_all = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/utils/StringHelpers
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
