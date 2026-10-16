// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=5B file=dil_cel/src/utils/ExpressionHelpers
// args: r, e, n
// closure: s
function {
  return s(n);   // tail call
}

// fn <atom:0>  args=5 vars=10 closure=3 cpool=0 bc=589B file=dil_cel/src/utils/ExpressionHelpers
// args: r, e, n, t, a
// locals: s, o, u, n#1, u#1
// closure: i, h, c
function {
  let o;
  let s;
  if ((("string" != typeof n))) goto L_3a;
  if (!((0 === n.trim().length))) goto L_a3;
  i.emitWarning(r, new Error("expr() defaulted invalid expression "".concat(String(n), "" to empty string")));
  return "";
  if (!((t == null))) goto L_ac;
  t;
  s = h(r, {}, "expr() replacements");
  o = undefined;
  try { // catch -> L_e8
  o = r.parse(n);
  r.parse(n);
  <?>;
  goto L_11a;
  // [栈深重同步 0 -> 1]
  u = <?>;
  try { // catch -> L_119
  i.emitWarning(r, u);
  return "";
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((false !== a))) goto L_1ba;
  if (!(!c(o, Object.keys(s)))) goto L_1ba;
  i.emitWarning(r, new Error("expr() defaulted unsafe expression "".concat(n, "" to empty string")));
  return "";
  try { // catch -> L_219
  let n#1;
  n#1 = e.subscopeWithValues(s);
  return r.compileFromAST(o)(n#1);
  // [栈深重同步 0 -> 1]
  u#1 = <?>;
  try { // catch -> L_24c
  i.emitWarning(r, u#1);
  return "";
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=8B file=dil_cel/src/utils/ExpressionHelpers
// args: r, e, n
// closure: u, y
function {
  return u(r, y(n));   // tail call
}

// fn <atom:0>  args=4 vars=4 closure=1 cpool=0 bc=6B file=dil_cel/src/utils/ExpressionHelpers
// args: r, e, n, t
// closure: o
function {
  return o(n, t);   // tail call
}

// fn a  args=0 vars=0 closure=7 cpool=4 bc=46B file=dil_cel/src/utils/ExpressionHelpers
// closure: s, i, h, c, u, y, o
function {
  return {closeExpr: function <atom:0>, expr: function <atom:0>, isSafeExpr: function <atom:0>, mutateExpr: function <atom:0>};
}

// fn s  args=1 vars=6 closure=2 cpool=0 bc=228B file=dil_cel/src/utils/ExpressionHelpers
// args: r
// locals: e, n, t, r#1, t#1
// closure: f, y
function {
  let n;
  let e;
  e = f(y(r));
  if (!((0 === e.length))) goto L_16;
  return "";
  n = 0;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_b9;
  let r#1;
  r#1 = e.charAt(t);
  if (!(("(" === r#1))) goto L_6c;
  n = <n_new>;
  (n++);
  if (!((")" === r#1))) goto L_ad;
  n = Math.max(0, (n - 1));
  Math.max(0, (n - 1));
  t = <t_new>;
  (t++);
  goto L_1d;
  let t#1;
  t#1 = 0;
  if (!((t#1 < n))) goto L_e0;
  e = (e + ")");
  (e + ")");
  t#1 = <t#1_new>;
  (t#1++);
  goto L_bf;
  return e;
}

// fn o  args=2 vars=5 closure=2 cpool=1 bc=374B file=dil_cel/src/utils/ExpressionHelpers
// args: r, e
// locals: n, t, r#1
// closure: y, g
function {
  let t;
  let n;
  n = y(r);
  t = y(e);
  if (!((0 === t.length))) goto L_19;
  return "0";
  if (!(t.startsWith("--"))) goto L_75;
  t = t.substring(2);
  t.substring(2);
  if (!((n.length > 0))) goto L_172;
  if (!(g(n.charAt((n.length - 1))))) goto L_172;
  if (!(t.startsWith(n))) goto L_172;
  let r#1;
  r#1 = t.charAt((t.length - 1));
  if (!(g(r#1))) goto L_172;
  return "".concat(n.substring(0, (n.length - 1)), r#1);   // tail call
  return t;
}

// fn u  args=3 vars=7 closure=1 cpool=0 bc=83B file=dil_cel/src/utils/ExpressionHelpers
// args: r, e, n
// locals: r#1, e#1, n#1, t
// closure: c
function {
  let n#1;
  let e#1;
  let r#1;
  r#1 = r;
  e#1 = e;
  if (!((n === undefined))) goto L_17;
  n;
  n = [];
  n#1 = [];
  try { // catch -> L_48
  return c(r.parse(e), n);
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_52
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn c  args=2 vars=4 closure=1 cpool=0 bc=34B file=dil_cel/src/utils/ExpressionHelpers
// args: r, e
// locals: r#1, e#1
// closure: l
function {
  let e#1;
  let r#1;
  r#1 = r;
  if (!((e === undefined))) goto L_12;
  e;
  e = [];
  e#1 = [];
  return l(r, new Set(e));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=dil_cel/src/utils/ExpressionHelpers
// args: r
// closure: l, e
function {
  return l(r, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=dil_cel/src/utils/ExpressionHelpers
// args: r
// closure: l, e
function {
  if (!(l(r.key, e))) goto L_4e;
  return l(r.value, e);
}

// fn l  args=2 vars=2 closure=5 cpool=2 bc=1688B file=dil_cel/src/utils/ExpressionHelpers
// args: r, e
// closure: l, n, t, d, p
function {
  if (!((r.kind === n.ExpressionKind.Literal))) goto L_6e;
  return true;
  if (!((r.kind === n.ExpressionKind.Identifier))) goto L_14f;
  if ((e.has(r.name))) goto L_14e;
  return (undefined !== t.MATH_HELPERS[r.name]);
  if (!((r.kind === n.ExpressionKind.Member))) goto L_1bf;
  return l(r.object, e);   // tail call
  if (!((r.kind === n.ExpressionKind.Index))) goto L_257;
  if (!(l(r.object, e))) goto L_256;
  return l(r.index, e);
  if (!((r.kind === n.ExpressionKind.Unary))) goto L_3a1;
  if (((r.operator === n.UnaryOperator.Negate))) goto L_377;
  if (!((r.operator === n.UnaryOperator.Not))) goto L_3a0;
  return l(r.argument, e);
  if (!((r.kind === n.ExpressionKind.Binary))) goto L_461;
  if (!(d(r.operator))) goto L_460;
  if (!(l(r.left, e))) goto L_460;
  return l(r.right, e);
  if (!((r.kind === n.ExpressionKind.Conditional))) goto L_522;
  if (!(l(r.condition, e))) goto L_521;
  if (!(l(r.whenTrue, e))) goto L_521;
  return l(r.whenFalse, e);
  if (!((r.kind === n.ExpressionKind.List))) goto L_5b3;
  return r.items.every(function <atom:0>);   // tail call
  if (!((r.kind === n.ExpressionKind.Map))) goto L_644;
  return r.entries.every(function <atom:0>);   // tail call
  if (!((r.kind === n.ExpressionKind.Call))) goto L_695;
  return p(r, e);   // tail call
  return false;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=dil_cel/src/utils/ExpressionHelpers
// args: r
// closure: l, i
function {
  return l(r, i);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=dil_cel/src/utils/ExpressionHelpers
// args: r
// closure: l, i
function {
  return l(r, i);   // tail call
}

// fn p  args=2 vars=7 closure=4 cpool=2 bc=1343B file=dil_cel/src/utils/ExpressionHelpers
// args: e, i
// locals: a, s, r, t, n
// closure: l, n, t, r
function {
  let s;
  let a;
  if (!((e.callee.kind === n.ExpressionKind.Identifier))) goto L_14b;
  if (!((undefined !== t.MATH_HELPERS[e.callee.name]))) goto L_14a;
  return e.args.every(function <atom:0>);
  if (!((e.callee.kind !== n.ExpressionKind.Member))) goto L_1d9;
  return false;
  if (!(!l(e.callee.object, i))) goto L_225;
  return false;
  a = e.callee.field;
  s = r.DEFAULT_RECEIVER_MACRO_SPECS[a];
  if (!((undefined !== s))) goto L_4c8;
  let t;
  let r;
  r = (e.args.length - 1);
  if (((s.bodyCounts.indexOf(r) < 0))) goto L_3af;
  if (!((e.args[0] == null))) goto L_348;
  e.args[0];
  goto L_369;
  if (!((undefined.kind !== n.ExpressionKind.Identifier))) goto L_3b4;
  return false;
  t = new Set(i);
  t.add(e.args[0].name);
  if (!(!l(e.args[1], t))) goto L_45b;
  return false;
  let n;
  n = 2;
  if (!((n < e.args.length))) goto L_4c5;
  if (!(!l(e.args[n], t))) goto L_4bb;
  return false;
  n = <n_new>;
  (n++);
  goto L_461;
  return true;
  if (!((undefined !== r.DEFAULT_RECEIVER_CALL_SPECS[a]))) goto L_53e;
  return e.args.every(function <atom:0>);
}

// fn d  args=1 vars=1 closure=1 cpool=0 bc=1083B file=dil_cel/src/utils/ExpressionHelpers
// args: r
// closure: n
function {
  if (((r === n.BinaryOperator.Add))) goto L_43a;
  if (((r === n.BinaryOperator.Subtract))) goto L_43a;
  if (((r === n.BinaryOperator.Multiply))) goto L_43a;
  if (((r === n.BinaryOperator.Divide))) goto L_43a;
  if (((r === n.BinaryOperator.Modulo))) goto L_43a;
  if (((r === n.BinaryOperator.And))) goto L_43a;
  if (((r === n.BinaryOperator.Or))) goto L_43a;
  if (((r === n.BinaryOperator.Equal))) goto L_43a;
  if (((r === n.BinaryOperator.NotEqual))) goto L_43a;
  if (((r === n.BinaryOperator.LessThan))) goto L_43a;
  if (((r === n.BinaryOperator.LessThanOrEqual))) goto L_43a;
  if (((r === n.BinaryOperator.GreaterThan))) goto L_43a;
  if (((r === n.BinaryOperator.GreaterThanOrEqual))) goto L_43a;
  return (r === n.BinaryOperator.In);
}

// fn f  args=1 vars=2 closure=1 cpool=0 bc=182B file=dil_cel/src/utils/ExpressionHelpers
// args: r
// locals: e
// closure: E
function {
  let e;
  e = r.trim().length;
  if (!((e > 0))) goto L_69;
  if (!(E(r.charAt((e - 1))))) goto L_69;
  e = <e_new>;
  (e--);
  goto L_2a;
  return r.substring(0, e).trim();   // tail call
}

// fn E  args=1 vars=1 closure=1 cpool=0 bc=26B file=dil_cel/src/utils/ExpressionHelpers
// args: r
// closure: g
function {
  if ((g(r))) goto L_19;
  if ((("." === r))) goto L_19;
  return ("%" === r);
}

// fn g  args=1 vars=1 closure=0 cpool=0 bc=41B file=dil_cel/src/utils/ExpressionHelpers
// args: r
function {
  if ((("+" === r))) goto L_28;
  if ((("-" === r))) goto L_28;
  if ((("*" === r))) goto L_28;
  return ("/" === r);
}

// fn y  args=1 vars=1 closure=0 cpool=0 bc=15B file=dil_cel/src/utils/ExpressionHelpers
// args: r
function {
  if (!((null === r))) goto L_7;
  return "";
  return String(r);
}

// fn h  args=3 vars=3 closure=2 cpool=0 bc=147B file=dil_cel/src/utils/ExpressionHelpers
// args: r, n, t
// closure: e, i
function {
  if (!(e.isCELMap(n))) goto L_2a;
  return n;
  i.emitWarning(r, new Error("".concat(t, " defaulted invalid value "", String(n), "" to empty replacements")));
  return {};
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=13 bc=188B file=dil_cel/src/utils/ExpressionHelpers
// args: require, module, exports
// locals: r, e, n, t, i, a, s, o, u, c, l, p, d, f, E, g, y, h
function {
  a = function a;
  s = function s;
  o = function o;
  u = function u;
  c = function c;
  l = function l;
  p = function p;
  d = function d;
  f = function f;
  E = function E;
  g = function g;
  y = function y;
  h = function h;
  let i;
  let t;
  let n;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createExpressionHelpers = undefined;
  r = require("cel/src/CELCallSpecs");
  e = require("cel/src/CELValue");
  n = require("cel/src/parser/CELAst");
  t = require("./MathHelpers");
  i = require("./Warnings");
  exports.createExpressionHelpers = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/utils/ExpressionHelpers
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
