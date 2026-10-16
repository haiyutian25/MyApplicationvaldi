// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: t
// closure: e
function {
  return e.includes(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
function {
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=2 bc=21B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
// locals: this
function {
  this = this;
  e = ...0;
  return new this("string", function <atom:0>, function <atom:0>);
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.name = e;
  this.verify = t;
  this.convert = r;
  return;
}

// fn i  args=2 vars=10 closure=1 cpool=0 bc=324B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t
// locals: e#1, t#1, r, a, n, s, i, l
// closure: o
function {
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_11;
  t;
  t = false;
  t#1 = false;
  let l;
  let i;
  let s;
  let n;
  let a;
  let r;
  r = {};
  a = undefined;
  n = undefined;
  s = undefined;
  i = e;
  l = true;
  if (!(i)) goto L_140;
  goto L_65;
  const _it1 = <?>;
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_7f;
  // [栈深重同步 4 -> 0]
  goto L_3f;
  o(i, ["=", ","], t, l);
  l = false;
  false;
  if (!(("=" === a))) goto L_12a;
  goto L_bd;
  const _it2 = <?>;
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_cd;
  // [栈深重同步 4 -> 0]
  goto L_97;
  o(i, [","], t);
  if ((("false" === s))) goto L_e4;
  if (!(("true" === s))) goto L_114;
  goto L_117;
  // [栈深重同步 1 -> 0]
  s = s;
  s;
  r[n] = s;
  goto L_13c;
  // [栈深重同步 1 -> 0]
  if (!(n)) goto L_13c;
  r[n] = true;
  true;
  goto L_35;
  return r;
}

// fn l  args=2 vars=2 closure=0 cpool=4 bc=182B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t
function {
  if (!((0 === t))) goto L_5e;
  return e.replace(new RegExp("^\\s+"), "").replace(new RegExp("([^\\\\\\s]|^)((?:\\\\\\\\)*(?:\\\\\\s)?)?\\s+$"), "$1$2");   // tail call
  if (!((t > 0))) goto L_b4;
  e = e.trim().slice(1, -1);
  t = (t --);
  goto L_5e;
  return e;
}

// fn o  args=4 vars=15 closure=2 cpool=0 bc=657B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t, r, n
// locals: e#1, t#1, r#1, n#1, s, i, o, c, u, d, n#2
// closure: a, l
function {
  let n#1;
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((r === undefined))) goto L_19;
  r;
  r = false;
  r#1 = false;
  if (!((n === undefined))) goto L_23;
  n;
  n = false;
  n#1 = false;
  let d;
  let u;
  let c;
  let o;
  let i;
  let s;
  s = e.length;
  i = 0;
  o = "";
  c = 0;
  u = 0;
  d = true;
  if (!((c < s))) goto L_1de;
  let n#2;
  c = <c_new>;
  n#2 = e[(c++)];
  if (!((n#2 === "\"))) goto L_95;
  c = <c_new>;
  if ((e[(c++)])) goto L_84;
  o = (o + (n#2 + ""));
  (o + (n#2 + ""));
  d = false;
  false;
  n#2;
  goto L_4a;
  // [栈深重同步 0 -> 1]
  if (((<?> === " "))) goto L_1ce;
  if (!((<?> === "{"))) goto L_c4;
  if (!(d)) goto L_b8;
  u = <u_new>;
  (u++);
  i = <i_new>;
  (i++);
  goto L_1ce;
  if (!((<?> === "}"))) goto L_118;
  if (!(!i)) goto L_106;
  throw new a.default("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
  i = <i_new>;
  (i--);
  d = false;
  false;
  goto L_1ce;
  if (!(!i)) goto L_1b4;
  if (!(t.includes(n#2))) goto L_1b4;
  if (!(r)) goto L_181;
  goto L_184;
  // [栈深重同步 4 -> 3]
  return [l(o, u), n#2, e.slice(c)];
  if (!((u > i))) goto L_1c6;
  u = i;
  i;
  d = false;
  false;
  <?>;
  o = (o + n#2);
  (o + n#2);
  goto L_4a;
  if (!(i)) goto L_216;
  throw new a.default("ExtraOpenMissingClose", "Extra open brace or missing close brace");
  if (!(n)) goto L_22a;
  if (!(u)) goto L_22a;
  return ["", "", l(o, 1)];
  if (!(r)) goto L_260;
  goto L_263;
  // [栈深重同步 3 -> 2]
  return [l(o, u), "", e.slice(c)];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=19B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
function {
  if ((("true" === e))) goto L_12;
  return ("false" === e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=8B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
function {
  return ("true" === e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=45B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
function {
  return !!e.match(new RegExp("^[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[-+]?\\d+)?$"));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
function {
  return parseFloat(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=45B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
function {
  return !!e.match(new RegExp("^[-+]?\\d+$"));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
function {
  return parseInt(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
function {
  return true;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
function {
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=78B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
// closure: s
function {
  return (null !== s.UnitUtil.matchDimen(e)[0]);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
function {
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
// closure: s
function {
  return s.UnitUtil.em(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=83B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
// closure: s
function {
  e = ...0;
  return ...0.map(function <atom:0>).join(" ");   // tail call
}

// fn <atom:0>  args=6 vars=17 closure=3 cpool=0 bc=1332B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: a, n, s, i, l, o
// locals: a#1, n#1, s#1, i#1, l#1, o#1, c, u, d, t, t#1
// closure: e, r, t
function {
  let o#1;
  let l#1;
  let i#1;
  let s#1;
  let n#1;
  let a#1;
  a#1 = a;
  n#1 = n;
  s#1 = s;
  i#1 = i;
  if (!((l === undefined))) goto L_26;
  l;
  l = "";
  l#1 = "";
  if (!((o === undefined))) goto L_34;
  o;
  o = "";
  o#1 = "";
  let d;
  let u;
  let c;
  c = a.nodeFactory;
  u = c.create("node", "mrow", [], {open: n, close: i, texClass: e.TEXCLASS.INNER});
  d = undefined;
  if (!(l)) goto L_1c5;
  d = new r.default(((("\" + l) + "l") + n), a.parser.stack.env, a).mml();
  new r.default(((("\" + l) + "l") + n), a.parser.stack.env, a).mml();
  goto L_293;
  let t;
  t = c.create("text", n);
  d = c.create("node", "mo", [], {fence: true, stretchy: true, symmetric: true, texClass: e.TEXCLASS.OPEN}, t);
  c.create("node", "mo", [], {fence: true, stretchy: true, symmetric: true, texClass: e.TEXCLASS.OPEN}, t);
  t.default.appendChildren(u, [d, s]);
  if (!(l)) goto L_3b8;
  d = new r.default(((("\" + l) + "r") + i), a.parser.stack.env, a).mml();
  new r.default(((("\" + l) + "r") + i), a.parser.stack.env, a).mml();
  goto L_486;
  let t#1;
  t#1 = c.create("text", i);
  d = c.create("node", "mo", [], {fence: true, stretchy: true, symmetric: true, texClass: e.TEXCLASS.CLOSE}, t#1);
  c.create("node", "mo", [], {fence: true, stretchy: true, symmetric: true, texClass: e.TEXCLASS.CLOSE}, t#1);
  if (!(o)) goto L_4dd;
  d.attributes.set("mathcolor", o);
  t.default.appendChildren(u, [d]);
  return u;
}

// fn <atom:0>  args=4 vars=5 closure=3 cpool=0 bc=819B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: r, a, n, s
// locals: i
// closure: e, t, exports
function {
  let i;
  i = r.nodeFactory.create("node", "mrow", [], {open: a, close: s, texClass: e.TEXCLASS.ORD});
  if (!(a)) goto L_151;
  t.default.appendChildren(i, [exports.ParseUtil.mathPalette(r, a, "l")]);
  if (!(t.default.isType(n, "mrow"))) goto L_23b;
  goto L_28a;
  // [栈深重同步 1 -> 0]
  t.default.appendChildren(i, [n]);
  if (!(s)) goto L_32e;
  t.default.appendChildren(i, [exports.ParseUtil.mathPalette(r, s, "r")]);
  return i;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=180B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t, a
// locals: n, s
// closure: r
function {
  let s;
  let n;
  if (!(("{" !== t))) goto L_18;
  if ((("}" !== t))) goto L_24;
  t = ("\" + t);
  ("\" + t);
  n = (((("{\bigg" + a) + " ") + t) + "}");
  s = (((("{\big" + a) + " ") + t) + "}");
  return new r.default((((("\mathchoice" + n) + s) + s) + s), {}, e).mml();   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=906B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: r, a
// locals: n, s, s#1, e
// closure: t, e
function {
  let s;
  let n;
  n = 0;
  s = a.length;
  if (!((n < s))) goto L_389;
  let s#1;
  s#1 = a[n];
  if (!(s#1)) goto L_37e;
  if (!(!t.default.isType(s#1, "mspace"))) goto L_37e;
  if ((!t.default.isType(s#1, "TeXAtom"))) goto L_1be;
  if (!(t.default.getChildren(s#1)[0])) goto L_37e;
  if (!(t.default.getChildren(t.default.getChildren(s#1)[0]).length)) goto L_37e;
  if ((t.default.isEmbellished(s#1))) goto L_2fb;
  if (!(t.default.isType(s#1, "TeXAtom"))) goto L_389;
  if (!((t.default.getTexClass(s#1) === e.TEXCLASS.REL))) goto L_389;
  let e;
  e = r.nodeFactory.create("node", "mi");
  a.unshift(e);
  return;
  n = <n_new>;
  (n++);
  goto L_b;
  return;
}

// fn <atom:0>  args=4 vars=17 closure=3 cpool=10 bc=3209B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t, n, s
// locals: i, l, o, c, u, d, f, m, p, a, r, e#1, r#1
// closure: r, exports, a
function {
  let p;
  let m;
  let f;
  let d;
  let u;
  let c;
  let o;
  let l;
  let i;
  t = t.replace(new RegExp(" +"), " ");
  if (!(e.configuration.options.internalMath)) goto L_11c;
  return e.configuration.options.internalMath(e, t, n, s);   // tail call
  if ((s)) goto L_185;
  i = e.stack.env.font;
  if (!(i)) goto L_196;
  goto L_197;
  // [栈深重同步 1 -> 0]
  l = {};
  o = undefined;
  c = undefined;
  u = [];
  d = 0;
  f = 0;
  m = "";
  p = 0;
  if (!(t.match(new RegExp("\\\\?[${}\\\\]|\\\\\\(|\\\\(?:eq)?ref\\s*\\{|\\\\U")))) goto L_b4c;
  if (!((d < t.length))) goto L_b12;
  d = <d_new>;
  o = t.charAt((d++));
  t.charAt((d++));
  if (!(("$" === o))) goto L_41c;
  if (!(("$" === m))) goto L_34c;
  if (!((0 === p))) goto L_34c;
  c = e.create("node", "TeXAtom", [new r.default(t.slice(f, (d - 1)), {}, e.configuration).mml()]);
  e.create("node", "TeXAtom", [new r.default(t.slice(f, (d - 1)), {}, e.configuration).mml()]);
  u.push(c);
  m = "";
  "";
  f = d;
  goto L_418;
  // [栈深重同步 1 -> 0]
  if (!(("" === m))) goto L_418;
  if (!((f < (d - 1)))) goto L_406;
  u.push(exports.ParseUtil.internalText(e, t.slice(f, (d - 1)), l));
  m = "$";
  "$";
  f = d;
  d;
  goto L_1dc;
  if (!(("{" === o))) goto L_439;
  if (!(("" !== m))) goto L_439;
  p = <p_new>;
  (p++);
  goto L_1dc;
  if (!(("}" === o))) goto L_592;
  if (!(("}" === m))) goto L_577;
  if (!((0 === p))) goto L_577;
  let a;
  a = new r.default(t.slice(f, d), {}, e.configuration).mml();
  c = e.create("node", "TeXAtom", [a], l);
  e.create("node", "TeXAtom", [a], l);
  u.push(c);
  m = "";
  "";
  f = d;
  d;
  goto L_1dc;
  if (!(("" !== m))) goto L_58e;
  if (!(p)) goto L_58e;
  p = <p_new>;
  (p--);
  goto L_1dc;
  if (!(("\" === o))) goto L_1dc;
  if (!(("" === m))) goto L_6e3;
  if (!(t.substring(d).match(new RegExp("^(eq)?ref\\s*\\{")))) goto L_6e3;
  let r;
  r = RegExp["$&"].length;
  if (!((f < (d - 1)))) goto L_6bf;
  u.push(exports.ParseUtil.internalText(e, t.slice(f, (d - 1)), l));
  m = "}";
  "}";
  f = (d - 1);
  (d - 1);
  d = (d + r);
  (d + r);
  goto L_1dc;
  d = <d_new>;
  o = t.charAt((d++));
  t.charAt((d++));
  if (!(("(" === o))) goto L_7f0;
  if (!(("" === m))) goto L_7f0;
  if (!((f < (d - 2)))) goto L_7da;
  u.push(exports.ParseUtil.internalText(e, t.slice(f, (d - 2)), l));
  m = ")";
  ")";
  f = d;
  d;
  goto L_1dc;
  if (!((")" === o))) goto L_925;
  if (!((")" === m))) goto L_925;
  if (!((0 === p))) goto L_925;
  c = e.create("node", "TeXAtom", [new r.default(t.slice(f, (d - 2)), {}, e.configuration).mml()]);
  e.create("node", "TeXAtom", [new r.default(t.slice(f, (d - 2)), {}, e.configuration).mml()]);
  u.push(c);
  m = "";
  "";
  f = d;
  d;
  goto L_1dc;
  if (!(o.match(new RegExp("[${}\\\\]")))) goto L_9ba;
  if (!(("" === m))) goto L_9ba;
  d = <d_new>;
  (d--);
  t = (t.substring(0, (d - 1)) + t.substring(d));
  goto L_1dc;
  if (!(("U" === o))) goto L_1dc;
  let r#1;
  let e#1;
  e#1 = t.substring(d).match(new RegExp("^\\s*(?:([0-9A-F])|\\{\\s*([0-9A-F]+)\\s*\\})"));
  if (!(!e#1)) goto L_a5f;
  throw new a.default("BadRawUnicode", "Argument to %1 must a hexadecimal number with 1 to 6 digits", "\U");
  if ((e#1[1])) goto L_a98;
  r#1 = String.fromCodePoint(parseInt(e#1[2], 16));
  t = ((t.substring(0, (d - 2)) + r#1) + t.substring((d + e#1[0].length)));
  d = ((d - 2) + r#1.length);
  ((d - 2) + r#1.length);
  goto L_1dc;
  if (!(("" !== m))) goto L_b4c;
  throw new a.default("MathNotTerminated", "Math mode is not properly terminated");
  if (!((f < t.length))) goto L_bf2;
  u.push(exports.ParseUtil.internalText(e, t.slice(f), l));
  if (!((null != n))) goto L_c41;
  u = [e.create("node", "mstyle", u, {displaystyle: false, scriptlevel: n})];
  goto L_c84;
  // [栈深重同步 1 -> 0]
  if (!((u.length > 1))) goto L_c84;
  u = [e.create("node", "mrow", u)];
  [e.create("node", "mrow", u)];
  return u;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=6 bc=369B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t, r
// locals: a
// closure: n
function {
  let a;
  t = t.replace(new RegExp("\\n+"), " ").replace(new RegExp("^ +"), n.entities.nbsp).replace(new RegExp(" +$"), n.entities.nbsp);
  a = e.create("text", t);
  return e.create("node", "mtext", [], r, a);   // tail call
}

// fn <atom:0>  args=5 vars=8 closure=3 cpool=0 bc=1031B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: r, a, n, s, i
// locals: e, l, o
// closure: exports, t, e
function {
  let o;
  let l;
  exports.ParseUtil.checkMovableLimits(a);
  if (!(t.default.isType(a, "munderover"))) goto L_202;
  if (!(t.default.isEmbellished(a))) goto L_202;
  let e;
  t.default.setProperties(t.default.getCoreMO(a), {lspace: 0, rspace: 0});
  e = r.create("node", "mo", [], {rspace: 0});
  a = r.create("node", "mrow", [e, a]);
  l = r.create("node", "munderover", [a]);
  if (!(("over" === s))) goto L_2ad;
  goto L_2d1;
  // [栈深重同步 4 -> 3]
  t.default.setChild(l, l.under, n);
  o = l;
  if (!(i)) goto L_3af;
  o = r.create("node", "TeXAtom", [r.create("node", "mstyle", [l], {displaystyle: true, scriptlevel: 0})], {texClass: e.TEXCLASS.OP, movesupsub: true});
  r.create("node", "TeXAtom", [r.create("node", "mstyle", [l], {displaystyle: true, scriptlevel: 0})], {texClass: e.TEXCLASS.OP, movesupsub: true});
  t.default.setProperty(o, "subsupOK", true);
  return o;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=382B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
// locals: r
// closure: t
function {
  let r;
  if (!(t.default.isType(e, "mo"))) goto L_9e;
  goto L_9f;
  // [栈深重同步 1 -> 0]
  r = null;
  if ((t.default.getProperty(e, "movablelimits"))) goto L_128;
  if (!(r)) goto L_128;
  if (!(r[3])) goto L_128;
  if (!(r[3].movablelimits)) goto L_17d;
  t.default.setProperties(e, {movablelimits: false});
  return;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=506B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t, r
// closure: s
function {
  if ((r)) goto L_54;
  if ((t)) goto L_50;
  t = s.UnitUtil.trimSpaces("");
  s.UnitUtil.trimSpaces("");
  if (!(("t" === t))) goto L_92;
  e.arraydef.align = "baseline 1";
  goto L_1f7;
  // [栈深重同步 1 -> 0]
  if (!(("b" === t))) goto L_cf;
  e.arraydef.align = "baseline -1";
  goto L_1f7;
  // [栈深重同步 1 -> 0]
  if (!(("c" === t))) goto L_10c;
  e.arraydef.align = "axis";
  goto L_1f7;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_1f7;
  if (!(r)) goto L_1ca;
  r.string = ("[".concat(t, "]") + r.string.slice(r.i));
  r.i = 0;
  goto L_1f7;
  // [栈深重同步 1 -> 0]
  e.arraydef.align = t;
  t;
  return e;
}

// fn <atom:0>  args=3 vars=7 closure=2 cpool=2 bc=618B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t, r
// locals: n, s, i, l
// closure: a, exports
function {
  let i;
  let s;
  let n;
  n = "";
  s = "";
  i = 0;
  if (!((i < r.length))) goto L_21d;
  let l;
  i = <i_new>;
  l = r.charAt((i++));
  if (!(("\" === l))) goto L_90;
  i = <i_new>;
  n = (n + (l + r.charAt((i++))));
  (n + (l + r.charAt((i++))));
  goto L_f;
  if (!(("#" === l))) goto L_20e;
  i = <i_new>;
  l = r.charAt((i++));
  r.charAt((i++));
  if (!(("#" === l))) goto L_e9;
  n = (n + l);
  (n + l);
  goto L_f;
  if ((!l.match(new RegExp("[1-9]")))) goto L_128;
  if (!((parseInt(l, 10) > t.length))) goto L_15d;
  throw new a.default("IllegalMacroParam", "Illegal macro parameter reference");
  s = exports.ParseUtil.addArgs(e, exports.ParseUtil.addArgs(e, s, n), t[(parseInt(l, 10) - 1)]);
  exports.ParseUtil.addArgs(e, exports.ParseUtil.addArgs(e, s, n), t[(parseInt(l, 10) - 1)]);
  n = "";
  "";
  goto L_f;
  n = (n + l);
  (n + l);
  goto L_f;
  return exports.ParseUtil.addArgs(e, s, n);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=4 bc=264B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t, r
// closure: a
function {
  if (!(r.match(new RegExp("^[a-z]")))) goto L_64;
  if (!(t.match(new RegExp("(^|[^\\\\])(\\\\\\\\)*\\\\[a-z]+$")))) goto L_64;
  t = (t + " ");
  (t + " ");
  if (!(((t.length + r.length) > e.configuration.options.maxBuffer))) goto L_104;
  throw new a.default("MaxBufferSize", "MathJax internal buffer size exceeded; is there a recursive macro call?");
  return (t + r);
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=273B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t
// locals: e#1, t#1
// closure: a
function {
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_11;
  t;
  t = true;
  t#1 = true;
  e.macroCount = (e.macroCount ++);
  if (!(!((e.macroCount ++) <= e.configuration.options.maxMacros))) goto L_110;
  if (!(t)) goto L_dd;
  throw new a.default("MaxMacroSub1", "MathJax maximum macro substitution count exceeded; is here a recursive macro call?");
  throw new a.default("MaxMacroSub2", "MathJax maximum substitution count exceeded; is there a recursive latex environment?");
  return;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=346B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t
// locals: e#1, t#1, r, n
// closure: a
function {
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_11;
  t;
  t = true;
  t#1 = true;
  let n;
  let r;
  r = e.stack.Top();
  n = r.First;
  if (!(r.getProperty("nestable"))) goto L_bd;
  if (!(t)) goto L_bd;
  if ((!n)) goto L_ed;
  if (!(!r.getProperty("nestStart"))) goto L_159;
  if ((!r.isKind("start"))) goto L_124;
  if (!(n)) goto L_159;
  throw new a.default("ErroneousNestingEq", "Erroneous nesting of equation structures");
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=2 bc=235B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
// locals: t, r
// closure: a
function {
  let t;
  a.addNode(e.kind, e);
  if ((e.getProperty("in-lists"))) goto L_7d;
  t = "".split(new RegExp(","));
  let r;
  for (const r of t) {
    if (!(r)) goto L_e3;
    a.addNode(r, e);
  }
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=125B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t
// locals: r, a
function {
  let a;
  let r;
  r = e.copy();
  a = t.configuration;
  r.walkTree(function <atom:0>);
  return r;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t, r
function {
  return r;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=121B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
// locals: t
function {
  let t;
  t = e.stack.env.font;
  if (!(t)) goto L_77;
  return {mathvariant: t};
  return {};
}

// fn <atom:0>  args=4 vars=12 closure=3 cpool=0 bc=432B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e, t, r, n
// locals: e#1, t#1, r#1, n#1, s, i, e#2, r#2
// closure: i, KeyValueDef, a
function {
  let n#1;
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_16;
  t;
  t = null;
  t#1 = null;
  if (!((r === undefined))) goto L_20;
  r;
  r = false;
  r#1 = false;
  if (!((n === undefined))) goto L_2a;
  n;
  n = false;
  n#1 = false;
  let s;
  s = i(e, n);
  if (!(t)) goto L_1ac;
  let i;
  for (const i of Object.keys(s)) {
    if (!(Object.hasOwn(t, i))) goto L_162;
    if (!((t[i] instanceof KeyValueDef))) continue;
    let r#2;
    let e#2;
    e#2 = t[i];
    r#2 = String(s[i]);
    if (!(!e#2.verify(r#2))) goto L_12e;
    throw new a.default("InvalidValue", "Value for key '%1' is not of the expected type", i);
    s[i] = e#2.convert(r#2);
   continue;
    if (!(r)) goto L_19b;
    throw new a.default("InvalidOption", "Invalid option: %1", i);
    delete i;
    // [栈深重同步 4 -> 3]
  }
  return s;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=86B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: e
function {
  return !!e.normalize("NFD").match(new RegExp("[a-zA-Z\\u0370-\\u03F0]"));
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=34 bc=517B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// args: require, module, exports
// locals: e, t, r, a, n, s, KeyValueDef, <class_fields_init>, KeyValueDef#1, i, l, o
function {
  i = function i;
  l = function l;
  o = function o;
  let KeyValueDef#1;
  let s;
  let n;
  let a;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.KeyValueDef = undefined;
  exports.KeyValueTypes = undefined;
  exports.ParseUtil = undefined;
  e = require("../../core/MmlTree/MmlNode");
  t = require("./NodeUtil");
  r = require("./TexParser");
  a = require("./TexError");
  n = require("../../util/Entities");
  s = require("./UnitUtil");
  let KeyValueDef;
  let <class_fields_init>;
  class KeyValueDef extends undefined { ... }
  function <atom:0>.oneof = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:KeyValueDef>;
  KeyValueDef = function <atom:0>;
  // close_loc <class_fields_init>
  KeyValueDef#1 = function <atom:0>;
  exports.KeyValueDef = KeyValueDef#1;
  exports.KeyValueTypes = {boolean: new KeyValueDef#1("boolean", function <atom:0>, function <atom:0>), number: new KeyValueDef#1("number", function <atom:0>, function <atom:0>), integer: new KeyValueDef#1("integer", function <atom:0>, function <atom:0>), string: new KeyValueDef#1("string", function <atom:0>, function <atom:0>), dimen: new KeyValueDef#1("dimen", function <atom:0>, function <atom:0>)};
  exports.ParseUtil = {cols: function <atom:0>, fenced: function <atom:0>, fixedFence: function <atom:0>, mathPalette: function <atom:0>, fixInitialMO: function <atom:0>, internalMath: function <atom:0>, internalText: function <atom:0>, underOver: function <atom:0>, checkMovableLimits: function <atom:0>, setArrayAlign: function <atom:0>, substituteArgs: function <atom:0>, addArgs: function <atom:0>, checkMaxMacros: function <atom:0>, checkEqnEnv: function <atom:0>, copyNode: function <atom:0>, mmlFilterAttribute: function <atom:0>, getFontDef: function <atom:0>, keyvalOptions: function <atom:0>, isLatinOrGreekChar: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/ParseUtil
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
