// fn e  args=2 vars=5 closure=1 cpool=0 bc=340B file=cel/src/stdlib/Math
// args: e, t
// locals: r, t#1, o
// closure: r
function {
  if (!(("number" == typeof e))) goto L_18;
  if (!(("number" == typeof t))) goto L_18;
  return (e + t);
  if (!(("string" == typeof e))) goto L_30;
  if (!(("string" == typeof t))) goto L_30;
  return (e + t);
  if ((("string" == typeof e))) goto L_44;
  if (!(("string" == typeof t))) goto L_6d;
  return "".concat(e, t);   // tail call
  if (!(Array.isArray(e))) goto L_126;
  if (!(Array.isArray(t))) goto L_126;
  let r;
  r = Array((e.length + t.length));
  let t#1;
  t#1 = 0;
  if (!((t#1 < e.length))) goto L_fb;
  r[t#1] = e[t#1];
  t#1 = <t#1_new>;
  (t#1++);
  goto L_dc;
  let o;
  o = 0;
  if (!((o < t.length))) goto L_122;
  r[(e.length + o)] = t[o];
  o = <o_new>;
  (o++);
  goto L_100;
  return r;
  throw new r.CELEvaluationError("Unsupported + operands");
}

// fn t  args=2 vars=2 closure=1 cpool=0 bc=94B file=cel/src/stdlib/Math
// args: e, t
// closure: r
function {
  if (!(("number" != typeof e))) goto L_5d;
  throw new r.CELEvaluationError("Expected number for ".concat(t));
  return;
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=90B file=cel/src/stdlib/Math
// args: e, t
// closure: r
function {
  if (!((0 === e))) goto L_59;
  throw new r.CELEvaluationError("".concat(t, " by zero"));
  return;
}

// fn n  args=3 vars=3 closure=1 cpool=0 bc=136B file=cel/src/stdlib/Math
// args: e, t, o
// closure: r
function {
  if (!(("number" == typeof e))) goto L_14;
  if ((("number" == typeof t))) goto L_2c;
  if (!(("string" == typeof e))) goto L_2c;
  if (!(!("string" == typeof t))) goto L_87;
  throw new r.CELEvaluationError("Unsupported ".concat(o, " operands"));
  return;
}

// fn i  args=1 vars=1 closure=2 cpool=0 bc=312B file=cel/src/stdlib/Math
// args: e
// closure: r, u
function {
  if (!(("number" == typeof e))) goto L_c3;
  if (!(!Number.isFinite(e))) goto L_68;
  throw new r.CELEvaluationError("int() expects a finite number");
  if (!((e < 0))) goto L_98;
  return Math.ceil(e);
  return Math.floor(e);
  if (!(("string" == typeof e))) goto L_10a;
  if (!(!u(e))) goto L_101;
  throw new r.CELEvaluationError("int() expects an integer string");
  return Number(e);   // tail call
  throw new r.CELEvaluationError("int() expects a number or string");
}

// fn s  args=1 vars=2 closure=1 cpool=0 bc=175B file=cel/src/stdlib/Math
// args: e
// locals: t
// closure: r
function {
  if (!(("number" == typeof e))) goto L_c;
  return e;
  if (!(("string" == typeof e))) goto L_81;
  let t;
  t = Number(e);
  if (!(Number.isNaN(t))) goto L_7d;
  throw new r.CELEvaluationError("double() expects a numeric string");
  return t;
  throw new r.CELEvaluationError("double() expects a number or string");
}

// fn u  args=1 vars=4 closure=0 cpool=0 bc=165B file=cel/src/stdlib/Math
// args: r
// locals: e, t, e#1
function {
  let e;
  if (!((0 === r.length))) goto L_c;
  return false;
  e = 0;
  if (!((45 === r.charCodeAt(0)))) goto L_48;
  if (!((1 === r.length))) goto L_42;
  return false;
  e = 1;
  1;
  let t;
  t = e;
  if (!((t < r.length))) goto L_a2;
  let e#1;
  e#1 = r.charCodeAt(t);
  if (((e#1 < 48))) goto L_93;
  if (!((e#1 > 57))) goto L_98;
  return false;
  t = <t_new>;
  (t++);
  goto L_4f;
  return true;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=7 bc=228B file=cel/src/stdlib/Math
// args: require, module, exports
// locals: r, e, t, o, n, i, s, u
function {
  e = function e;
  t = function t;
  o = function o;
  n = function n;
  i = function i;
  s = function s;
  u = function u;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.add = undefined;
  exports.assertNumber = undefined;
  exports.assertNonZero = undefined;
  exports.assertComparable = undefined;
  exports.toInt = undefined;
  exports.toDouble = undefined;
  r = require("../CELError");
  exports.add = e;
  exports.assertNumber = t;
  exports.assertNonZero = o;
  exports.assertComparable = n;
  exports.toInt = i;
  exports.toDouble = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/stdlib/Math
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
