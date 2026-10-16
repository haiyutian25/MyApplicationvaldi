// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=80B file=math_jax/src/mathjax_src/input/tex/FindTeX
// args: t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(t);
  this.getPatterns();
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=43B file=math_jax/src/mathjax_src/input/tex/FindTeX
// args: t
// closure: this, s
function {
  return this.addPattern(s, t, false);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=43B file=math_jax/src/mathjax_src/input/tex/FindTeX
// args: t
// closure: this, s
function {
  return this.addPattern(s, t, true);   // tail call
}

// fn <atom:0>  args=0 vars=6 closure=1 cpool=2 bc=906B file=math_jax/src/mathjax_src/input/tex/FindTeX
// locals: t, s, n, i, r, this
// closure: e
function {
  this = this;
  let r;
  let i;
  let n;
  let s;
  let t;
  t = this.options;
  s = [];
  n = [];
  i = [];
  this.end = {};
  this.sub = 0;
  this.env = 0;
  r = 1;
  t.inlineMath.forEach(function <atom:0>);
  t.displayMath.forEach(function <atom:0>);
  if (!(s.length)) goto L_1a5;
  n.push(s.sort(e.sortLength).join("|"));
  if (!(t.processEnvironments)) goto L_210;
  n.push("\\begin\s*\{([^}]*)\}");
  this.env = r;
  r = <r_new>;
  (r++);
  if (!(t.processEscapes)) goto L_265;
  i.push("\\([\\$])");
  if (!(t.processRefs)) goto L_2ba;
  i.push("(\\(?:eq)?ref\s*\{[^}]*\})");
  if (!(i.length)) goto L_332;
  n.push((("(" + i.join("|")) + ")"));
  this.sub = r;
  r;
  this.start = new RegExp(n.join("|"), "g");
  this.hasPatterns = (n.length > 0);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=194B file=math_jax/src/mathjax_src/input/tex/FindTeX
// args: t, s, n
// locals: i, r, this
// closure: e
function {
  this = this;
  let r;
  let i;
  if (((undefined === undefined))) goto L_19;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_1d;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_d;
  // [栈深重同步 1 -> 0]
  t.push(e.quotePattern(i));
  this.end[i] = [r, n, this.endPattern(r)];
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=64B file=math_jax/src/mathjax_src/input/tex/FindTeX
// args: t, s
// closure: e
function {
  if ((s)) goto L_31;
  return new RegExp((e.quotePattern(t) + "|\\(?:[a-zA-Z]|.)|[{}]"), "g");
}

// fn <atom:0>  args=4 vars=10 closure=1 cpool=0 bc=445B file=math_jax/src/mathjax_src/input/tex/FindTeX
// args: t, e, n, i
// locals: r, h, o, d, a, u
// closure: s
function {
  let u;
  let a;
  let d;
  let o;
  let h;
  let r;
  if (((undefined === undefined))) goto L_27;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  h = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  goto L_2b;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_17;
  // [栈深重同步 1 -> 0]
  o.lastIndex = (n.index + n[0].length);
  d = (n.index + n[0].length);
  a = undefined;
  u = 0;
  a = o.exec(t);
  if (!(o.exec(t))) goto L_1bb;
  if ((a[1])) goto L_a5;
  if (!((a[0] === r))) goto L_184;
  if (!((0 === u))) goto L_184;
  return s.protoItem(n[0], t.substring(d, a.index), a[0], e, n.index, (a.index + a[0].length), h);   // tail call
  if (!(("{" === a[0]))) goto L_19a;
  u = <u_new>;
  goto L_1b7;
  // [栈深重同步 1 -> 0]
  if (!(("}" === a[0]))) goto L_1b7;
  if (!(u)) goto L_1b7;
  u = <u_new>;
  (u--);
  goto L_66;
  return null;
}

// fn <atom:0>  args=3 vars=9 closure=2 cpool=0 bc=1327B file=math_jax/src/mathjax_src/input/tex/FindTeX
// args: t, n, i
// locals: r, h, t#1, t#2, e, this
// closure: e, s
function {
  this = this;
  let h;
  let r;
  r = undefined;
  h = undefined;
  this.start.lastIndex = 0;
  r = this.start.exec(i);
  if (!(this.start.exec(i))) goto L_52e;
  if (!((undefined !== r[this.env]))) goto L_272;
  if (!(this.env)) goto L_272;
  let t#1;
  t#1 = (("\\end\s*(\{" + e.quotePattern(r[this.env])) + "\})");
  h = this.findEnd(i, n, r, [(("{" + r[this.env]) + "}"), true, this.endPattern(null, t#1)]);
  this.findEnd(i, n, r, [(("{" + r[this.env]) + "}"), true, this.endPattern(null, t#1)]);
  if (!(h)) goto L_26e;
  h.math = ((h.open + h.math) + h.close);
  h.close = "";
  h.open = "";
  "";
  goto L_485;
  if (!((undefined !== r[this.sub]))) goto L_42c;
  if (!(this.sub)) goto L_42c;
  let e;
  let t#2;
  t#2 = r[this.sub];
  e = (r.index + r[this.sub].length);
  if (!((2 === t#2.length))) goto L_3cf;
  goto L_425;
  // [栈深重同步 1 -> 0]
  h = s.protoItem("", t#2, "", n, r.index, e, false);
  s.protoItem("", t#2, "", n, r.index, e, false);
  goto L_485;
  h = this.findEnd(i, n, r, this.end[r[0]]);
  this.findEnd(i, n, r, this.end[r[0]]);
  if (!(h)) goto L_52a;
  t.push(h);
  this.start.lastIndex = h.end.n;
  h.end.n;
  goto L_3a;
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=128B file=math_jax/src/mathjax_src/input/tex/FindTeX
// args: t
// locals: e, s, n, this
function {
  this = this;
  let e;
  e = [];
  if (!(this.hasPatterns)) goto L_7c;
  let n;
  let s;
  s = 0;
  n = t.length;
  if (!((s < n))) goto L_7c;
  this.findMathInString(e, s, t[s]);
  s = <s_new>;
  (s++);
  goto L_38;
  return e;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=7 bc=314B file=math_jax/src/mathjax_src/input/tex/FindTeX
// args: require, module, exports
// locals: t, e, s, FindTeX, <class_fields_init>, FindTeX#1
function {
  let FindTeX#1;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FindTeX = undefined;
  t = require("../../core/FindMath");
  e = require("../../util/string");
  s = require("../../core/MathItem");
  let FindTeX;
  let <class_fields_init>;
  class FindTeX extends t.AbstractFindMath { ... }
  <proto:FindTeX>.getPatterns = function <atom:0>;
  <proto:FindTeX>.addPattern = function <atom:0>;
  <proto:FindTeX>.endPattern = function <atom:0>;
  <proto:FindTeX>.findEnd = function <atom:0>;
  <proto:FindTeX>.findMathInString = function <atom:0>;
  <proto:FindTeX>.findMath = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FindTeX>;
  FindTeX = function <atom:0>;
  // close_loc <class_fields_init>
  FindTeX#1 = function <atom:0>;
  exports.FindTeX = FindTeX#1;
  FindTeX#1.OPTIONS = {inlineMath: [["\(", "\)"]], displayMath: [["$$", "$$"], ["\[", "\]"]], processEscapes: true, processEnvironments: true, processRefs: true};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/FindTeX
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
