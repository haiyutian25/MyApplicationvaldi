// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=50B file=cel/src/CELASTEvaluator
// args: e, r, n
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.runtime = e;
  this.preparation = {receiverFunctions: r, receiverCallSpecs: n};
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=43B file=cel/src/CELASTEvaluator
// args: e
// closure: w, r, this
function {
  return w(r, this.runtime, e, undefined);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=47B file=cel/src/CELASTEvaluator
// args: e
// locals: r, this
// closure: w, a
function {
  this = this;
  let r;
  r = a(this.preparation, e, undefined);
  return function <atom:0>;
}

// fn a  args=3 vars=3 closure=1 cpool=0 bc=44B file=cel/src/CELASTEvaluator
// args: e, r, n
// closure: ue
function {
  return ue[r.kind](e, r, n);   // tail call
}

// fn u  args=3 vars=3 closure=1 cpool=0 bc=47B file=cel/src/CELASTEvaluator
// args: e, r, n
// closure: C
function {
  return {evaluate: C, value: r.value};
}

// fn s  args=3 vars=6 closure=3 cpool=0 bc=410B file=cel/src/CELASTEvaluator
// args: e, r, n
// locals: t, i, o
// closure: b, L, O
function {
  let o;
  let i;
  let t;
  t = r;
  if (!((undefined === n))) goto L_41;
  return {evaluate: b, name: t.name};
  if (!(("__index" === t.name))) goto L_cc;
  if (!((n.name === t.name))) goto L_c4;
  return {evaluate: L, depth: 0};
  return {evaluate: O};
  i = n;
  o = 0;
  if (!((undefined !== i))) goto L_169;
  if (!((i.name === t.name))) goto L_135;
  return {evaluate: L, depth: o};
  i = i.parent;
  i.parent;
  o = <o_new>;
  (o++);
  goto L_d0;
  return {evaluate: b, name: t.name};
}

// fn l  args=3 vars=3 closure=2 cpool=0 bc=51B file=cel/src/CELASTEvaluator
// args: e, r, n
// closure: A, m
function {
  return {evaluate: A, items: m(e, r.items, n)};
}

// fn c  args=3 vars=7 closure=2 cpool=0 bc=273B file=cel/src/CELASTEvaluator
// args: e, r, n
// locals: t, i, o, r#1
// closure: a, S
function {
  let i;
  let t;
  t = r;
  i = Array(t.entries.length);
  let o;
  o = 0;
  if (!((o < t.entries.length))) goto L_101;
  let r#1;
  r#1 = t.entries[o];
  i[o] = {key: a(e, r#1.key, n), value: a(e, r#1.value, n)};
  o = <o_new>;
  (o++);
  goto L_39;
  return {evaluate: S, entries: i};
}

// fn f  args=3 vars=4 closure=3 cpool=0 bc=103B file=cel/src/CELASTEvaluator
// args: e, r, n
// locals: t
// closure: $, a, se
function {
  let t;
  t = r;
  return {evaluate: $, argument: a(e, t.argument, n), operation: se[t.operator]};
}

// fn p  args=3 vars=5 closure=2 cpool=0 bc=223B file=cel/src/CELASTEvaluator
// args: e, r, n
// locals: t, i
// closure: le, a
function {
  let i;
  let t;
  t = r;
  i = le[t.operator];
  return {evaluate: i.evaluate, left: a(e, t.left, n), right: a(e, t.right, n), operation: i.operation};
}

// fn v  args=3 vars=4 closure=2 cpool=0 bc=148B file=cel/src/CELASTEvaluator
// args: e, r, n
// locals: t
// closure: _, a
function {
  let t;
  t = r;
  return {evaluate: _, condition: a(e, t.condition, n), whenTrue: a(e, t.whenTrue, n), whenFalse: a(e, t.whenFalse, n)};
}

// fn d  args=3 vars=4 closure=2 cpool=0 bc=99B file=cel/src/CELASTEvaluator
// args: e, r, n
// locals: t
// closure: M, a
function {
  let t;
  t = r;
  return {evaluate: M, object: a(e, t.object, n), field: t.field};
}

// fn E  args=3 vars=4 closure=2 cpool=0 bc=103B file=cel/src/CELASTEvaluator
// args: e, r, n
// locals: t
// closure: N, a
function {
  let t;
  t = r;
  return {evaluate: N, object: a(e, t.object, n), index: a(e, t.index, n)};
}

// fn g  args=3 vars=5 closure=11 cpool=0 bc=961B file=cel/src/CELASTEvaluator
// args: i, o, u
// locals: s, l
// closure: t, r, T, a, j, m, q, n, e, h, y
function {
  let l;
  let s;
  s = o;
  if (!((s.callee.kind === t.ExpressionKind.Identifier))) goto L_1f9;
  if (!(("has" === s.callee.name))) goto L_176;
  if (!((1 !== s.args.length))) goto L_13f;
  throw new r.CELSyntaxError("has() expects one argument");
  return {evaluate: T, argument: a(i, s.args[0], u)};
  return {evaluate: j, name: s.callee.name, args: m(i, s.args, u)};
  if (!((s.callee.kind !== t.ExpressionKind.Member))) goto L_2ec;
  return {evaluate: q, callee: a(i, s.callee, u), args: m(i, s.args, u)};
  l = n.getOwnProperty(e.DEFAULT_RECEIVER_MACRO_SPECS, s.callee.field);
  if (!((undefined !== l))) goto L_391;
  return h(i, s, l, u);
  return y(i, s, s.callee, u);
}

// fn y  args=4 vars=9 closure=9 cpool=0 bc=1064B file=cel/src/CELASTEvaluator
// args: e, i, o, u
// locals: s, l, c, f, p
// closure: a, n, r, x, m, t, k, I, P
function {
  let f;
  let c;
  let l;
  let s;
  s = a(e, o.object, u);
  l = n.getOwnProperty(e.receiverCallSpecs, o.field);
  if (!((undefined === l))) goto L_11d;
  throw new r.CELSyntaxError("Unsupported receiver call "".concat(o.field, """));
  x(o.field, i.args.length, l);
  c = m(e, i.args, u);
  f = i.args[0];
  if (!((true === l.cacheRegex))) goto L_335;
  if (!((f == null))) goto L_1ed;
  f;
  goto L_20e;
  if (!((undefined.kind === t.ExpressionKind.Literal))) goto L_335;
  if (!(("string" == typeof f.value))) goto L_335;
  try { // catch -> L_2d3
  return {evaluate: k, receiver: s, regex: new RegExp(f.value)};
  // [栈深重同步 0 -> 1]
  p = <?>;
  try { // catch -> L_334
  throw new r.CELSyntaxError("Failed to compile regular expression: ".concat(String(p)));
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((undefined !== l.helper))) goto L_3a0;
  return {evaluate: I, receiver: s, args: c, receiverFunction: l.helper};
  return {evaluate: P, receiver: s, args: c, receiverFunction: n.getOwnProperty(e.receiverFunctions, o.field)};
}

// fn h  args=4 vars=8 closure=7 cpool=0 bc=774B file=cel/src/CELASTEvaluator
// args: e, i, o, u
// locals: s, l, c, f
// closure: t, r, a, U, R, n, ce
function {
  let f;
  let c;
  let l;
  let s;
  s = i.args[0];
  if (!((s == null))) goto L_3c;
  s;
  goto L_5d;
  if (((undefined.kind !== t.ExpressionKind.Identifier))) goto L_114;
  if (!((o.bodyCounts.indexOf((i.args.length - 1)) < 0))) goto L_18b;
  throw new r.CELSyntaxError("".concat(o.name, "() expects an identifier and expression"));
  l = a(e, i.callee.object, u);
  c = {name: s.name, parent: u};
  f = a(e, i.args[1], c);
  if (!((3 === i.args.length))) goto L_29d;
  return {evaluate: U, receiver: l, filter: f, body: a(e, i.args[2], c)};
  return {evaluate: R, receiver: l, body: f, collectionFunction: n.getOwnProperty(ce, o.name)};
}

// fn m  args=3 vars=5 closure=1 cpool=0 bc=56B file=cel/src/CELASTEvaluator
// args: e, r, n
// locals: t, i
// closure: a
function {
  let t;
  t = Array(r.length);
  let i;
  i = 0;
  if (!((i < r.length))) goto L_34;
  t[i] = a(e, r[i], n);
  i = <i_new>;
  (i++);
  goto L_11;
  return t;
}

// fn x  args=3 vars=3 closure=1 cpool=0 bc=754B file=cel/src/CELASTEvaluator
// args: e, n, t
// closure: r
function {
  if (!((undefined !== t.arity))) goto L_fb;
  if (!((n !== t.arity))) goto L_fb;
  if (!((1 === t.arity))) goto L_ef;
  goto L_f4;
  // [栈深重同步 9 -> 8]
  throw new r.CELSyntaxError("".concat(e, "() expects ", t.arity, " argument", "s"));
  if (!((undefined !== t.minArity))) goto L_1f6;
  if (!((n < t.minArity))) goto L_1f6;
  if (!((1 === t.minArity))) goto L_1ea;
  goto L_1ef;
  // [栈深重同步 9 -> 8]
  throw new r.CELSyntaxError("".concat(e, "() expects at least ", t.minArity, " argument", "s"));
  if (!((undefined !== t.maxArity))) goto L_2f1;
  if (!((n > t.maxArity))) goto L_2f1;
  if (!((1 === t.maxArity))) goto L_2e5;
  goto L_2ea;
  // [栈深重同步 9 -> 8]
  throw new r.CELSyntaxError("".concat(e, "() expects at most ", t.maxArity, " argument", "s"));
  return;
}

// fn w  args=4 vars=4 closure=0 cpool=0 bc=41B file=cel/src/CELASTEvaluator
// args: e, r, n, t
function {
  return e.evaluate(e, r, n, t);   // tail call
}

// fn C  args=1 vars=1 closure=0 cpool=0 bc=35B file=cel/src/CELASTEvaluator
// args: e
function {
  return e.value;
}

// fn b  args=3 vars=3 closure=1 cpool=0 bc=39B file=cel/src/CELASTEvaluator
// args: e, r, n
// closure: Z
function {
  return Z(n, e.name);   // tail call
}

// fn L  args=4 vars=7 closure=0 cpool=0 bc=145B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i, o, a
function {
  let o;
  let i;
  i = e;
  o = t;
  let a;
  a = 0;
  if (!((a < i.depth))) goto L_6c;
  o = o.parent;
  o.parent;
  a = <a_new>;
  (a++);
  goto L_f;
  return o.value;
}

// fn O  args=4 vars=4 closure=0 cpool=0 bc=35B file=cel/src/CELASTEvaluator
// args: e, r, n, t
function {
  return t.index;
}

// fn A  args=4 vars=4 closure=1 cpool=0 bc=41B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// closure: G
function {
  return G(e.items, r, n, t);   // tail call
}

// fn S  args=4 vars=10 closure=1 cpool=0 bc=325B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i, o, a, e#1, u, s
// closure: w
function {
  let o;
  let i;
  i = e;
  o = {};
  let a;
  a = 0;
  if (!((a < i.entries.length))) goto L_141;
  let s;
  let u;
  let e#1;
  e#1 = i.entries[a];
  u = String(w(e#1.key, r, n, t));
  s = w(e#1.value, r, n, t);
  if (!(("__proto__" === u))) goto L_129;
  goto L_135;
  // [栈深重同步 1 -> 0]
  o[u] = s;
  s;
  a = <a_new>;
  (a++);
  goto L_f;
  return o;
}

// fn $  args=4 vars=5 closure=1 cpool=0 bc=87B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i
// closure: w
function {
  let i;
  i = e;
  return i.operation(w(i.argument, r, n, t));   // tail call
}

// fn B  args=4 vars=5 closure=1 cpool=0 bc=130B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i
// closure: w
function {
  let i;
  i = e;
  return i.operation(w(i.left, r, n, t), w(i.right, r, n, t));   // tail call
}

// fn K  args=4 vars=5 closure=2 cpool=0 bc=102B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i
// closure: z, w
function {
  let i;
  i = e;
  if (!(!!z(w(i.left, r, n, t)))) goto L_65;
  return z(w(i.right, r, n, t));
}

// fn F  args=4 vars=5 closure=2 cpool=0 bc=102B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i
// closure: z, w
function {
  let i;
  i = e;
  if ((!!z(w(i.left, r, n, t)))) goto L_65;
  return z(w(i.right, r, n, t));
}

// fn _  args=4 vars=5 closure=2 cpool=0 bc=140B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i
// closure: z, w
function {
  let i;
  i = e;
  if (!(z(w(i.condition, r, n, t)))) goto L_60;
  return w(i.whenTrue, r, n, t);
  return w(i.whenFalse, r, n, t);
}

// fn M  args=4 vars=5 closure=2 cpool=0 bc=88B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i
// closure: H, w
function {
  let i;
  i = e;
  return H(w(i.object, r, n, t), i.field);   // tail call
}

// fn N  args=4 vars=5 closure=2 cpool=0 bc=95B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i
// closure: J, w
function {
  let i;
  i = e;
  return J(w(i.object, r, n, t), w(i.index, r, n, t));   // tail call
}

// fn T  args=4 vars=6 closure=2 cpool=0 bc=110B file=cel/src/CELASTEvaluator
// args: e, n, t, i
// locals: o, a
// closure: w, r
function {
  let o;
  o = e;
  try { // catch -> L_39
  return (undefined !== w(o.argument, n, t, i));
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_6d
  if (!((a instanceof r.CELEvaluationError))) goto L_6b;
  return false;
  throw a;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn j  args=4 vars=6 closure=3 cpool=0 bc=100B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i, o
// closure: G, V, Z
function {
  let o;
  let i;
  i = e;
  o = G(i.args, r, n, t);
  return V(Z(n, i.name), r, n, o);   // tail call
}

// fn q  args=4 vars=5 closure=3 cpool=0 bc=97B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i
// closure: V, w, G
function {
  let i;
  i = e;
  return V(w(i.callee, r, n, t), r, n, G(i.args, r, n, t));   // tail call
}

// fn I  args=4 vars=6 closure=2 cpool=0 bc=137B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i, o
// closure: w, G
function {
  let o;
  let i;
  i = e;
  o = w(i.receiver, r, n, t);
  return i.receiverFunction(o, G(i.args, r, n, t));   // tail call
}

// fn P  args=4 vars=6 closure=2 cpool=0 bc=147B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i, o
// closure: w, G
function {
  let o;
  let i;
  i = e;
  o = w(i.receiver, r, n, t);
  // append([r, n, o], 3, G(i.args, r, n, t))
  G(i.args, r, n, t);
  return i.receiverFunction.apply(i, [r, n, o]);
}

// fn k  args=4 vars=5 closure=1 cpool=0 bc=126B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i
// closure: w
function {
  let i;
  i = e;
  return i.regex.test(String(w(i.receiver, r, n, t)));   // tail call
}

// fn R  args=4 vars=6 closure=2 cpool=0 bc=135B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i, o
// closure: w, D
function {
  let o;
  let i;
  i = e;
  o = w(i.receiver, r, n, t);
  return i.collectionFunction(o, D(i.body, r, t), n);   // tail call
}

// fn U  args=4 vars=6 closure=3 cpool=0 bc=175B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: o, a
// closure: w, i, D
function {
  let a;
  let o;
  o = e;
  a = w(o.receiver, r, n, t);
  return i.map(a, D(o.filter, r, t), D(o.body, r, t), n);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=4 cpool=0 bc=36B file=cel/src/CELASTEvaluator
// args: n, i, o
// closure: t, w, e, r
function {
  t.value = n;
  t.index = i;
  return w(e, r, o, t);   // tail call
}

// fn D  args=3 vars=4 closure=1 cpool=1 bc=26B file=cel/src/CELASTEvaluator
// args: e, r, n
// locals: t
// closure: w
function {
  let t;
  t = {parent: n, value: null, index: 0};
  return function <atom:0>;
}

// fn G  args=4 vars=6 closure=1 cpool=0 bc=59B file=cel/src/CELASTEvaluator
// args: e, r, n, t
// locals: i, o
// closure: w
function {
  let i;
  i = Array(e.length);
  let o;
  o = 0;
  if (!((o < e.length))) goto L_37;
  i[o] = w(e[o], r, n, t);
  o = <o_new>;
  (o++);
  goto L_11;
  return i;
}

// fn V  args=4 vars=4 closure=1 cpool=0 bc=72B file=cel/src/CELASTEvaluator
// args: e, n, t, i
// closure: r
function {
  if (!(("function" != typeof e))) goto L_38;
  throw new r.CELEvaluationError("Cannot call non-function value");
  // append([n, t], 2, i)
  i;
  return e.apply(undefined, [n, t]);
}

// fn Z  args=2 vars=3 closure=1 cpool=0 bc=141B file=cel/src/CELASTEvaluator
// args: e, n
// locals: t
// closure: r
function {
  let t;
  t = e.resolveValue(n);
  if (!((undefined === t))) goto L_89;
  throw new r.CELEvaluationError("Missing identifier "".concat(n, """));
  return t;
}

// fn z  args=1 vars=1 closure=1 cpool=0 bc=58B file=cel/src/CELASTEvaluator
// args: e
// closure: r
function {
  if (!(("boolean" != typeof e))) goto L_38;
  throw new r.CELEvaluationError("Expected boolean condition");
  return e;
}

// fn H  args=2 vars=3 closure=3 cpool=0 bc=236B file=cel/src/CELASTEvaluator
// args: e, t
// locals: i
// closure: Q, r, n
function {
  let i;
  if (!(!Q(e))) goto L_61;
  throw new r.CELEvaluationError("Cannot read field "".concat(t, """));
  i = n.getOwnProperty(e, t);
  if (!((undefined === i))) goto L_e8;
  throw new r.CELEvaluationError("Missing field "".concat(t, """));
  return i;
}

// fn J  args=2 vars=6 closure=3 cpool=0 bc=659B file=cel/src/CELASTEvaluator
// args: e, t
// locals: n, n#1, i, o
// closure: r, Q, n
function {
  if (!(Array.isArray(e))) goto L_e0;
  let n;
  n = Number(t);
  if ((!Number.isInteger(n))) goto L_7a;
  if (((n < 0))) goto L_7a;
  if (!((n >= e.length))) goto L_da;
  throw new r.CELEvaluationError("Invalid list index "".concat(String(t), """));
  return e[n];
  if (!(("string" == typeof e))) goto L_1c0;
  let n#1;
  n#1 = Number(t);
  if ((!Number.isInteger(n#1))) goto L_138;
  if (((n#1 < 0))) goto L_138;
  if (!((n#1 >= e.length))) goto L_198;
  throw new r.CELEvaluationError("Invalid string index "".concat(String(t), """));
  return e.charAt(n#1);   // tail call
  if (!(Q(e))) goto L_265;
  let o;
  let i;
  i = String(t);
  o = n.getOwnProperty(e, i);
  if (!((undefined === o))) goto L_261;
  throw new r.CELEvaluationError("Missing key "".concat(i, """));
  return o;
  throw new r.CELEvaluationError("Cannot index value");
}

// fn Q  args=1 vars=1 closure=0 cpool=0 bc=63B file=cel/src/CELASTEvaluator
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  return !Array.isArray(e);
}

// fn W  args=1 vars=1 closure=1 cpool=0 bc=49B file=cel/src/CELASTEvaluator
// args: e
// closure: o
function {
  o.assertNumber(e, "unary -");
  return -e;
}

// fn X  args=2 vars=2 closure=1 cpool=0 bc=14B file=cel/src/CELASTEvaluator
// args: e, r
// closure: ae
function {
  ae(e, r, "-");
  return (e - r);
}

// fn Y  args=2 vars=2 closure=1 cpool=0 bc=14B file=cel/src/CELASTEvaluator
// args: e, r
// closure: ae
function {
  ae(e, r, "*");
  return (e * r);
}

// fn ee  args=2 vars=2 closure=2 cpool=0 bc=60B file=cel/src/CELASTEvaluator
// args: e, r
// closure: ae, o
function {
  ae(e, r, "/");
  o.assertNonZero(r, "Division");
  return (e / r);
}

// fn re  args=2 vars=2 closure=2 cpool=0 bc=60B file=cel/src/CELASTEvaluator
// args: e, r
// closure: ae, o
function {
  ae(e, r, "%");
  o.assertNonZero(r, "Modulo");
  return (e % r);
}

// fn ne  args=2 vars=2 closure=1 cpool=0 bc=51B file=cel/src/CELASTEvaluator
// args: e, r
// closure: o
function {
  o.assertComparable(e, r, "<");
  return (e < r);
}

// fn te  args=2 vars=2 closure=1 cpool=0 bc=51B file=cel/src/CELASTEvaluator
// args: e, r
// closure: o
function {
  o.assertComparable(e, r, "<=");
  return (e <= r);
}

// fn ie  args=2 vars=2 closure=1 cpool=0 bc=51B file=cel/src/CELASTEvaluator
// args: e, r
// closure: o
function {
  o.assertComparable(e, r, ">");
  return (e > r);
}

// fn oe  args=2 vars=2 closure=1 cpool=0 bc=51B file=cel/src/CELASTEvaluator
// args: e, r
// closure: o
function {
  o.assertComparable(e, r, ">=");
  return (e >= r);
}

// fn ae  args=3 vars=3 closure=1 cpool=0 bc=84B file=cel/src/CELASTEvaluator
// args: e, r, n
// closure: o
function {
  o.assertNumber(e, n);
  o.assertNumber(r, n);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=cel/src/CELASTEvaluator
// args: e
// closure: z
function {
  return !z(e);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=cel/src/CELASTEvaluator
// args: e, r
function {
  return (e === r);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=cel/src/CELASTEvaluator
// args: e, r
function {
  return (e !== r);
}

// fn <atom:0>  args=3 vars=71 closure=0 cpool=60 bc=2792B file=cel/src/CELASTEvaluator
// args: require, module, exports
// locals: e, r, n, t, i, o, CELASTEvaluator, <class_fields_init>, CELASTEvaluator#1, a, u, s, l, c, f, p, v, d, E, g, y, h, m, x, w, C, b, L, O, A, S, $, B, K, F, _, M, N, T, j, q, I, P, k, R, U, D, G, V, Z, z, H, J, Q, W, X, Y, ee, re, ne, te, ie, oe, ae, ue, se, le, ce
function {
  a = function a;
  u = function u;
  s = function s;
  l = function l;
  c = function c;
  f = function f;
  p = function p;
  v = function v;
  d = function d;
  E = function E;
  g = function g;
  y = function y;
  h = function h;
  m = function m;
  x = function x;
  w = function w;
  C = function C;
  b = function b;
  L = function L;
  O = function O;
  A = function A;
  S = function S;
  $ = function $;
  B = function B;
  K = function K;
  F = function F;
  _ = function _;
  M = function M;
  N = function N;
  T = function T;
  j = function j;
  q = function q;
  I = function I;
  P = function P;
  k = function k;
  R = function R;
  U = function U;
  D = function D;
  G = function G;
  V = function V;
  Z = function Z;
  z = function z;
  H = function H;
  J = function J;
  Q = function Q;
  W = function W;
  X = function X;
  Y = function Y;
  ee = function ee;
  re = function re;
  ne = function ne;
  te = function te;
  ie = function ie;
  oe = function oe;
  ae = function ae;
  let ce;
  let le;
  let se;
  let ue;
  let CELASTEvaluator#1;
  let o;
  let i;
  let t;
  let n;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CELASTEvaluator = undefined;
  e = require("./CELCallSpecs");
  r = require("./CELError");
  n = require("./GetOwnProperty");
  t = require("./parser/CELAst");
  i = require("./stdlib/Collections");
  o = require("./stdlib/Math");
  let CELASTEvaluator;
  let <class_fields_init>;
  class CELASTEvaluator extends undefined { ... }
  <proto:CELASTEvaluator>.compile = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CELASTEvaluator>;
  CELASTEvaluator = function <atom:0>;
  // close_loc <class_fields_init>
  CELASTEvaluator#1 = function <atom:0>;
  exports.CELASTEvaluator = CELASTEvaluator#1;
  {}[t.ExpressionKind.Literal] = u;
  u;
  {}[t.ExpressionKind.Identifier] = s;
  s;
  {}[t.ExpressionKind.List] = l;
  l;
  {}[t.ExpressionKind.Map] = c;
  c;
  {}[t.ExpressionKind.Unary] = f;
  f;
  {}[t.ExpressionKind.Binary] = p;
  p;
  {}[t.ExpressionKind.Conditional] = v;
  v;
  {}[t.ExpressionKind.Member] = d;
  d;
  {}[t.ExpressionKind.Index] = E;
  E;
  {}[t.ExpressionKind.Call] = g;
  g;
  ue = {};
  {}[<set_name_computed#0>] = <set_name_computed#1>;
  <set_name_computed#1>;
  {}[t.UnaryOperator.Negate] = W;
  W;
  se = {};
  {}[t.BinaryOperator.Or] = {evaluate: F, operation: undefined};
  {evaluate: F, operation: undefined};
  {}[t.BinaryOperator.And] = {evaluate: K, operation: undefined};
  {evaluate: K, operation: undefined};
  {}[t.BinaryOperator.Equal] = {evaluate: B, operation: function <atom:0>};
  {evaluate: B, operation: function <atom:0>};
  {}[t.BinaryOperator.NotEqual] = {evaluate: B, operation: function <atom:0>};
  {evaluate: B, operation: function <atom:0>};
  {}[t.BinaryOperator.LessThan] = {evaluate: B, operation: ne};
  {evaluate: B, operation: ne};
  {}[t.BinaryOperator.LessThanOrEqual] = {evaluate: B, operation: te};
  {evaluate: B, operation: te};
  {}[t.BinaryOperator.GreaterThan] = {evaluate: B, operation: ie};
  {evaluate: B, operation: ie};
  {}[t.BinaryOperator.GreaterThanOrEqual] = {evaluate: B, operation: oe};
  {evaluate: B, operation: oe};
  {}[t.BinaryOperator.In] = {evaluate: B, operation: i.contains};
  {evaluate: B, operation: i.contains};
  {}[t.BinaryOperator.Add] = {evaluate: B, operation: o.add};
  {evaluate: B, operation: o.add};
  {}[t.BinaryOperator.Subtract] = {evaluate: B, operation: X};
  {evaluate: B, operation: X};
  {}[t.BinaryOperator.Multiply] = {evaluate: B, operation: Y};
  {evaluate: B, operation: Y};
  {}[t.BinaryOperator.Divide] = {evaluate: B, operation: ee};
  {evaluate: B, operation: ee};
  {}[t.BinaryOperator.Modulo] = {evaluate: B, operation: re};
  {evaluate: B, operation: re};
  le = {};
  ce = {all: i.all, exists: i.exists, exists_one: i.exists_one, filter: i.filter, map: i.map};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/CELASTEvaluator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
