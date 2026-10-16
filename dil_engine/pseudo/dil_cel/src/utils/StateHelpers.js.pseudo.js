// fn a  args=2 vars=2 closure=2 cpool=0 bc=42B file=dil_cel/src/utils/StateHelpers
// args: e, t
// closure: c, i
function {
  return c(e, t, i.DIL_ARRAY_APPEND_PATH_SEGMENT);   // tail call
}

// fn u  args=2 vars=2 closure=2 cpool=0 bc=42B file=dil_cel/src/utils/StateHelpers
// args: e, t
// closure: c, i
function {
  return c(e, t, i.DIL_ARRAY_PREPEND_PATH_SEGMENT);   // tail call
}

// fn c  args=3 vars=3 closure=2 cpool=0 bc=29B file=dil_cel/src/utils/StateHelpers
// args: e, t, r
// closure: y, E
function {
  return {op: "set", path: y(E(e), r), value: t};
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=2B file=dil_cel/src/utils/StateHelpers
// args: e
function {
  return e;
}

// fn p  args=2 vars=4 closure=4 cpool=0 bc=167B file=dil_cel/src/utils/StateHelpers
// args: e, t
// locals: r, n
// closure: h, o, s, k
function {
  let n;
  let r;
  r = h(t);
  n = o.scopeDILStateMutationForCELScope(e, {path: r}).path;
  if (((undefined === n))) goto L_93;
  if (!(("string" == typeof n))) goto L_9a;
  goto L_9d;
  // [栈深重同步 3 -> 2]
  return new s.DILWidgetBinding(n, k(e, r));
}

// fn f  args=2 vars=3 closure=2 cpool=0 bc=23B file=dil_cel/src/utils/StateHelpers
// args: e, t
// locals: r
// closure: k, h
function {
  let r;
  r = k(e, h(t));
  if (!((undefined === r))) goto L_13;
  return null;
  return r;
}

// fn l  args=1 vars=2 closure=1 cpool=0 bc=133B file=dil_cel/src/utils/StateHelpers
// args: e
// locals: t
// closure: E
function {
  let t;
  t = E(e);
  if (!((undefined === t.next))) goto L_81;
  if (!(("string" == typeof t.key))) goto L_81;
  return t.key;
  return t;
}

// fn E  args=1 vars=1 closure=3 cpool=0 bc=129B file=dil_cel/src/utils/StateHelpers
// args: e
// closure: A, I, g
function {
  if (!(Array.isArray(e))) goto L_33;
  return A(I(e));   // tail call
  if (!(("string" == typeof e))) goto L_42;
  return g(e);   // tail call
  throw new Error("Invalid state mutation path "".concat(String(e), """));
}

// fn g  args=1 vars=2 closure=2 cpool=0 bc=28B file=dil_cel/src/utils/StateHelpers
// args: e
// locals: t
// closure: v, A
function {
  let t;
  t = v(e);
  if (!((undefined === t))) goto L_16;
  return {key: e};
  return A(t);
}

// fn y  args=2 vars=2 closure=1 cpool=0 bc=174B file=dil_cel/src/utils/StateHelpers
// args: e, t
// closure: y
function {
  if (!((undefined === e.next))) goto L_5b;
  return {key: e.key, next: {key: t}};
  return {key: e.key, next: y(e.next, t)};
}

// fn h  args=1 vars=1 closure=4 cpool=0 bc=203B file=dil_cel/src/utils/StateHelpers
// args: e
// closure: A, I, x, r
function {
  if (!(Array.isArray(e))) goto L_33;
  return A(I(e));   // tail call
  if (!(("string" == typeof e))) goto L_8c;
  return A(x(r.CELParser.parse(e)));   // tail call
  throw new Error("Invalid widget binding path "".concat(String(e), """));
}

// fn x  args=2 vars=3 closure=3 cpool=0 bc=492B file=dil_cel/src/utils/StateHelpers
// args: e, r
// locals: t
// closure: t, x, S
function {
  if (!((e.kind === t.ExpressionKind.Identifier))) goto L_9a;
  return {key: e.name, next: r};
  if (!((e.kind === t.ExpressionKind.Member))) goto L_137;
  return x(e.object, {key: e.field, next: r});   // tail call
  if (!((e.kind === t.ExpressionKind.Index))) goto L_1dd;
  let t;
  t = S(e.index);
  return x(e.object, {key: t, next: r});   // tail call
  throw new Error("Invalid widget binding path expression");
}

// fn v  args=1 vars=3 closure=3 cpool=0 bc=127B file=dil_cel/src/utils/StateHelpers
// args: e
// locals: t, n
// closure: r, L, x
function {
  let t;
  t = undefined;
  try { // catch -> L_5b
  t = r.CELParser.parse(e);
  r.CELParser.parse(e);
  <?>;
  goto L_70;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_6f
  if (!((n instanceof Error))) goto L_6d;
  return undefined;
  throw n;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(L(t))) goto L_7e;
  return x(t);   // tail call
  return;
}

// fn L  args=1 vars=1 closure=2 cpool=0 bc=297B file=dil_cel/src/utils/StateHelpers
// args: e
// closure: t, L
function {
  if (!((e.kind === t.ExpressionKind.Identifier))) goto L_6e;
  return true;
  if (((e.kind === t.ExpressionKind.Member))) goto L_100;
  if (!((e.kind === t.ExpressionKind.Index))) goto L_126;
  return L(e.object);   // tail call
  return false;
}

// fn S  args=1 vars=1 closure=2 cpool=0 bc=159B file=dil_cel/src/utils/StateHelpers
// args: e
// closure: t, w
function {
  if (!((e.kind !== t.ExpressionKind.Literal))) goto L_79;
  throw new Error("Invalid widget binding path index");
  return w(e.value);   // tail call
}

// fn w  args=1 vars=1 closure=0 cpool=0 bc=143B file=dil_cel/src/utils/StateHelpers
// args: e
function {
  if (!(("number" == typeof e))) goto L_3f;
  if (!(Number.isInteger(e))) goto L_50;
  return String(e);   // tail call
  if (!(("string" == typeof e))) goto L_50;
  if (!(("" !== e))) goto L_50;
  return e;
  throw new Error("Invalid widget binding path segment "".concat(String(e), """));
}

// fn I  args=1 vars=3 closure=1 cpool=0 bc=130B file=dil_cel/src/utils/StateHelpers
// args: e
// locals: t, r
// closure: w
function {
  let t;
  t = undefined;
  let r;
  r = (e.length - 1);
  if (!((r >= 0))) goto L_38;
  t = {key: w(e[r]), next: t};
  {key: w(e[r]), next: t};
  r = <r_new>;
  (r--);
  goto L_d;
  if (!((undefined === t))) goto L_7e;
  throw new Error("Invalid widget binding path "".concat(String(e), """));
  return t;
}

// fn A  args=1 vars=1 closure=0 cpool=0 bc=132B file=dil_cel/src/utils/StateHelpers
// args: e
function {
  if (!(("state" === e.key))) goto L_82;
  if (!((undefined === e.next))) goto L_5f;
  throw new Error("Invalid widget binding path "state"");
  return e.next;
  return e;
}

// fn k  args=2 vars=3 closure=2 cpool=0 bc=224B file=dil_cel/src/utils/StateHelpers
// args: t, r
// locals: i
// closure: e, n
function {
  let i;
  i = t.resolveValue("state");
  if ((Array.isArray(i))) goto L_86;
  if (!(e.isCELMap(i))) goto L_df;
  if (!((n.resolveValueAtPath(i, r, false, undefined) == null))) goto L_bd;
  n.resolveValueAtPath(i, r, false, undefined);
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.value;
  return;
}

// fn <atom:0>  args=4 vars=4 closure=3 cpool=0 bc=46B file=dil_cel/src/utils/StateHelpers
// args: e, t, r, n
// closure: d, o, a
function {
  return d(o.scopeDILStateMutationForCELScope(t, a(r, n)));   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=6B file=dil_cel/src/utils/StateHelpers
// args: e, t, r
// closure: p
function {
  return p(t, r);   // tail call
}

// fn <atom:0>  args=4 vars=4 closure=3 cpool=0 bc=46B file=dil_cel/src/utils/StateHelpers
// args: e, t, r, n
// closure: d, o, u
function {
  return d(o.scopeDILStateMutationForCELScope(t, u(r, n)));   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=6B file=dil_cel/src/utils/StateHelpers
// args: e, t, r
// closure: f
function {
  return f(t, r);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=3 cpool=0 bc=61B file=dil_cel/src/utils/StateHelpers
// args: e, t, r
// closure: d, o, l
function {
  return d(o.scopeDILStateMutationForCELScope(t, {op: "remove", path: l(r)}));   // tail call
}

// fn <atom:0>  args=4 vars=4 closure=3 cpool=0 bc=67B file=dil_cel/src/utils/StateHelpers
// args: e, t, r, n
// closure: d, o, l
function {
  return d(o.scopeDILStateMutationForCELScope(t, {op: "set", path: l(r), value: n}));   // tail call
}

// fn <atom:0>  args=3 vars=29 closure=0 cpool=25 bc=307B file=dil_cel/src/utils/StateHelpers
// args: require, module, exports
// locals: e, t, r, n, i, o, s, a, u, c, d, p, f, l, E, g, y, h, x, v, L, S, w, I, A, k
function {
  a = function a;
  u = function u;
  c = function c;
  d = function d;
  p = function p;
  f = function f;
  l = function l;
  E = function E;
  g = function g;
  y = function y;
  h = function h;
  x = function x;
  v = function v;
  L = function L;
  S = function S;
  w = function w;
  I = function I;
  A = function A;
  k = function k;
  let s;
  let o;
  let i;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.STATE_HELPERS = undefined;
  e = require("cel/src/CELValue");
  t = require("cel/src/parser/CELAst");
  r = require("cel/src/parser/CELParser");
  n = require("dil_cel/src/CELStatePath");
  i = require("dil_cel/src/DILStateMutation");
  o = require("dil_cel/src/DILScopedState");
  s = require("dil_cel/src/WidgetBinding");
  exports.STATE_HELPERS = {append: function <atom:0>, bind: function <atom:0>, prepend: function <atom:0>, read: function <atom:0>, remove: function <atom:0>, set: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/utils/StateHelpers
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
