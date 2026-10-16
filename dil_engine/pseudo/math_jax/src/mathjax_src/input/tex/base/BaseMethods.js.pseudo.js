// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=109B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e
// locals: t
// closure: a
function {
  let t;
  t = {t: "top", b: "bottom", m: "middle", c: "center"}[e];
  if (!(!t)) goto L_69;
  throw new a.default("BadBreakAlign", "Invalid alignment character: %1", e);
  return t;
}

// fn P  args=2 vars=5 closure=1 cpool=3 bc=257B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: e#1, t#1, r
// closure: a
function {
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_12;
  t;
  t = (1 / 0);
  t#1 = (1 / 0);
  let r;
  r = e.replace(new RegExp("\\s+"), "").split("").map(function <atom:0>);
  if (!((r.length > t))) goto L_c9;
  throw new a.default("TooManyAligns", "Too many alignment characters: %1", e);
  if (!((1 === t))) goto L_d4;
  return r[0];
  return r.join(" ");
}

// fn y  args=2 vars=8 closure=1 cpool=0 bc=719B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, a, n, o, i, t#1
// closure: s
function {
  let i;
  let o;
  let n;
  let a;
  let r;
  r = e.stack.env;
  a = r.inRoot;
  r.inRoot = true;
  n = new s.default(t, r, e.configuration);
  o = n.mml();
  i = n.stack.global;
  if ((i.leftRoot)) goto L_190;
  if (!(i.upRoot)) goto L_2bc;
  let t#1;
  t#1 = {};
  if (!(i.leftRoot)) goto L_1f4;
  t#1.width = i.leftRoot;
  i.leftRoot;
  if (!(i.upRoot)) goto L_27e;
  t#1.voffset = i.upRoot;
  t#1.height = i.upRoot;
  i.upRoot;
  o = e.create("node", "mpadded", [o], t#1);
  e.create("node", "mpadded", [o], t#1);
  r.inRoot = a;
  return o;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=113B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  e.Push(e.itemFactory.create("open"));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=113B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  e.Push(e.itemFactory.create("close"));
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=225B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r
// closure: l
function {
  let r;
  r = e.create("token", "mo", {stretchy: false, texClass: l.TEXCLASS.ORD}, t);
  r.setProperty("keep-attrs", "stretchy");
  e.Push(r);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=155B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// closure: m
function {
  e.Push(e.create("token", "mtext", {}, m.entities.nbsp));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  return;
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=2 bc=2538B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: s, n, o, i, l
// closure: r, a
function {
  let l;
  let i;
  let o;
  let n;
  let s;
  s = undefined;
  n = undefined;
  if (!(e.GetNext().match(new RegExp("\\d")))) goto L_14f;
  e.string = ((e.string.substring(0, (e.i + 1)) + " ") + e.string.substring((e.i + 1)));
  ((e.string.substring(0, (e.i + 1)) + " ") + e.string.substring((e.i + 1)));
  o = e.stack.Top();
  if (!(o.isKind("prime"))) goto L_259;
  goto L_1e5;
  const _it1 = <?>;
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_20f;
  // [栈深重同步 4 -> 0]
  goto L_1ca;
  o.Peek(2);
  goto L_2e0;
  // [栈深重同步 1 -> 0]
  n = e.stack.Prev();
  e.stack.Prev();
  if ((n)) goto L_2e0;
  n = e.create("token", "mi", {}, "");
  e.create("token", "mi", {}, "");
  i = r.default.getProperty(n, "movesupsub");
  if (!(r.default.isType(n, "msubsup"))) goto L_3aa;
  goto L_3ce;
  // [栈深重同步 1 -> 0]
  l = n.over;
  if (!(r.default.isType(n, "msubsup"))) goto L_4eb;
  if (!(!r.default.isType(n, "msup"))) goto L_4eb;
  if ((r.default.getChildAt(n, n.sup))) goto L_662;
  if (!(r.default.isType(n, "munderover"))) goto L_697;
  if (!(!r.default.isType(n, "mover"))) goto L_697;
  if (!(r.default.getChildAt(n, n.over))) goto L_697;
  if (!(!r.default.getProperty(n, "subsupOK"))) goto L_697;
  throw new a.default("DoubleExponent", "Double exponent: use braces to clarify");
  if (!(r.default.isType(n, "msubsup"))) goto L_73c;
  if ((!r.default.isType(n, "msup"))) goto L_938;
  if (!(i)) goto L_8d6;
  if ((!r.default.isType(n, "munderover"))) goto L_866;
  if ((r.default.isType(n, "mover"))) goto L_866;
  if (!(r.default.getChildAt(n, n.over))) goto L_8ab;
  n = e.create("node", "munderover", [n], {movesupsub: true});
  e.create("node", "munderover", [n], {movesupsub: true});
  l = n.over;
  goto L_938;
  // [栈深重同步 1 -> 0]
  n = e.create("node", "msubsup", [n]);
  e.create("node", "msubsup", [n]);
  l = n.sup;
  n.sup;
  e.Push(e.itemFactory.create("subsup", n).setProperties({position: l, primes: s, movesupsub: i}));
  return;
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=2 bc=2538B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: s, n, o, i, l
// closure: r, a
function {
  let l;
  let i;
  let o;
  let n;
  let s;
  s = undefined;
  n = undefined;
  if (!(e.GetNext().match(new RegExp("\\d")))) goto L_14f;
  e.string = ((e.string.substring(0, (e.i + 1)) + " ") + e.string.substring((e.i + 1)));
  ((e.string.substring(0, (e.i + 1)) + " ") + e.string.substring((e.i + 1)));
  o = e.stack.Top();
  if (!(o.isKind("prime"))) goto L_259;
  goto L_1e5;
  const _it1 = <?>;
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_20f;
  // [栈深重同步 4 -> 0]
  goto L_1ca;
  o.Peek(2);
  goto L_2e0;
  // [栈深重同步 1 -> 0]
  n = e.stack.Prev();
  e.stack.Prev();
  if ((n)) goto L_2e0;
  n = e.create("token", "mi", {}, "");
  e.create("token", "mi", {}, "");
  i = r.default.getProperty(n, "movesupsub");
  if (!(r.default.isType(n, "msubsup"))) goto L_3aa;
  goto L_3ce;
  // [栈深重同步 1 -> 0]
  l = n.under;
  if (!(r.default.isType(n, "msubsup"))) goto L_4eb;
  if (!(!r.default.isType(n, "msup"))) goto L_4eb;
  if ((r.default.getChildAt(n, n.sub))) goto L_662;
  if (!(r.default.isType(n, "munderover"))) goto L_697;
  if (!(!r.default.isType(n, "mover"))) goto L_697;
  if (!(r.default.getChildAt(n, n.under))) goto L_697;
  if (!(!r.default.getProperty(n, "subsupOK"))) goto L_697;
  throw new a.default("DoubleSubscripts", "Double subscripts: use braces to clarify");
  if (!(r.default.isType(n, "msubsup"))) goto L_73c;
  if ((!r.default.isType(n, "msup"))) goto L_938;
  if (!(i)) goto L_8d6;
  if ((!r.default.isType(n, "munderover"))) goto L_866;
  if ((r.default.isType(n, "mover"))) goto L_866;
  if (!(r.default.getChildAt(n, n.under))) goto L_8ab;
  n = e.create("node", "munderover", [n], {movesupsub: true});
  e.create("node", "munderover", [n], {movesupsub: true});
  l = n.under;
  goto L_938;
  // [栈深重同步 1 -> 0]
  n = e.create("node", "msubsup", [n]);
  e.create("node", "msubsup", [n]);
  l = n.sub;
  n.sub;
  e.Push(e.itemFactory.create("subsup", n).setProperties({position: l, primes: s, movesupsub: i}));
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=1363B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: s, n, o
// closure: r, a, m
function {
  let o;
  let n;
  let s;
  s = e.stack.Prev();
  if ((s)) goto L_8a;
  s = e.create("token", "mi");
  e.create("token", "mi");
  if (!(r.default.isType(s, "msubsup"))) goto L_1a6;
  if (!(!r.default.isType(s, "msup"))) goto L_1a6;
  if ((r.default.getChildAt(s, s.sup))) goto L_31d;
  if (!(r.default.isType(s, "munderover"))) goto L_352;
  if (!(!r.default.isType(s, "mover"))) goto L_352;
  if (!(r.default.getChildAt(s, s.over))) goto L_352;
  if (!(!r.default.getProperty(s, "subsupOK"))) goto L_352;
  throw new a.default("DoubleExponentPrime", "Prime causes double exponent: use braces to clarify");
  n = "";
  e.i = (e.i --);
  n = (n + m.entities.prime);
  (n + m.entities.prime);
  e.i = (e.i ++);
  t = e.GetNext();
  if ((("'" === t))) goto L_380;
  if (((t === m.entities.rsquo))) goto L_380;
  if ((["", "′", "″", "‴", "⁗"][n.length])) goto L_49c;
  n = n;
  n;
  o = e.create("token", "mo", {variantForm: true}, n);
  e.Push(e.itemFactory.create("prime", s, o));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=235B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  if (!((e.i < e.string.length))) goto L_ea;
  if (!(("
" !== e.string.charAt(e.i)))) goto L_ea;
  e.i = (e.i ++);
  goto L_0;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=51B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// closure: a
function {
  throw new a.default("CantUseHash1", "You can't use 'macro parameter character #' in math mode");
}

// fn <atom:0>  args=4 vars=10 closure=1 cpool=0 bc=443B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r, a
// locals: e#1, t#1, r#1, a#1, n, o
// closure: s
function {
  let a#1;
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  r#1 = r;
  if (!((a === undefined))) goto L_1a;
  a;
  a = "";
  a#1 = "";
  let o;
  let n;
  n = e.GetArgument(t);
  null;
  e.stack.env;
  o = new s.default(n, {multiLetterIdentifiers: e.options.identifierPattern, font: r, italicFont: a, noAutoOP: true}, e.configuration).mml();
  e.Push(e.create("node", "TeXAtom", [o]));
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=190B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
function {
  e.stack.env.font = r;
  e.Push(e.itemFactory.create("null"));
  return;
}

// fn <atom:0>  args=5 vars=5 closure=0 cpool=0 bc=325B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r, a, s
function {
  e.stack.env.style = r;
  e.stack.env.level = s;
  e.Push(e.itemFactory.create("style").setProperty("styles", {displaystyle: a, scriptlevel: s}));
  return;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=275B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
// closure: d
function {
  e.stack.env.size = r;
  e.Push(e.itemFactory.create("style").setProperty("styles", {mathsize: d.em(r)}));
  return;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=203B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
// locals: a, s
// closure: d
function {
  let s;
  let a;
  a = e.create("node", "mspace", [], {width: d.em(r)});
  s = e.create("node", "mstyle", [a], {scriptlevel: 0});
  e.Push(s);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=101B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  e.Push(e.create("token", "mo", {linebreakmultchar: "�"}, "⁢"));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=85B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  e.Push(e.create("token", "mspace"));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=193B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// closure: n
function {
  e.Push(e.create("token", "mspace", {linebreak: n.TexConstant.LineBreak.NEWLINE}));
  return;
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=0 bc=529B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, a
// locals: s, o
// closure: r, n
function {
  let o;
  let s;
  s = true;
  o = e.stack.Prev(true);
  if (!(o)) goto L_19c;
  if (!(o.isKind("mo"))) goto L_19c;
  if (!((r.default.getMoAttribute(o, "linebreakstyle") !== n.TexConstant.LineBreakStyle.BEFORE))) goto L_19b;
  o.attributes.set("linebreak", a);
  s = false;
  false;
  e.Push(e.itemFactory.create("break", a, s));
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=291B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r
function {
  let r;
  r = t.substring(1);
  e.Push(e.itemFactory.create(r, e.GetDelimiter(t), e.stack.env.color));
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=288B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
// locals: a
// closure: l
function {
  let a;
  if ((r)) goto L_2f;
  r = t.substring(1);
  t.substring(1);
  a = e.create("token", "mi", {texClass: l.TEXCLASS.OP}, r);
  e.Push(e.itemFactory.create("fn", a));
  return;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=2 bc=382B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
// locals: a
// closure: n, l
function {
  let a;
  if ((r)) goto L_2f;
  r = t.substring(1);
  t.substring(1);
  r = r.replace(new RegExp("&thinsp;"), " ");
  a = e.create("token", "mo", {movablelimits: true, movesupsub: true, form: n.TexConstant.Form.PREFIX, texClass: l.TEXCLASS.OP}, r);
  e.Push(a);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=3 cpool=0 bc=1706B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, s
// locals: n, o, i
// closure: r, l, a
function {
  let i;
  let o;
  let n;
  n = e.stack.Prev(true);
  if ((!n)) goto L_18d;
  if (!((r.default.getTexClass(r.default.getCoreMO(n)) !== l.TEXCLASS.OP))) goto L_1e4;
  if (!((null == r.default.getProperty(n, "movesupsub")))) goto L_1e4;
  throw new a.default("MisplacedLimits", "%1 is allowed only on operators", e.currentCS);
  o = e.stack.Top();
  i = undefined;
  if (!(r.default.isType(n, "munderover"))) goto L_323;
  if (!(!s)) goto L_323;
  i = e.create("node", "msubsup");
  e.create("node", "msubsup");
  r.default.copyChildren(n, i);
  o.Last = i;
  n = i;
  goto L_419;
  // [栈深重同步 1 -> 0]
  if (!(r.default.isType(n, "msubsup"))) goto L_419;
  if (!(s)) goto L_419;
  i = e.create("node", "munderover");
  e.create("node", "munderover");
  r.default.copyChildren(n, i);
  o.Last = i;
  n = i;
  i;
  r.default.setProperty(n, "movesupsub", !!s);
  r.default.setProperties(r.default.getCoreMO(n), {movablelimits: false});
  if (!(r.default.isType(n, "mo"))) goto L_5ae;
  goto L_5fe;
  // [栈深重同步 1 -> 0]
  if ((r.default.getAttribute(n, "movablelimits"))) goto L_652;
  if (!(r.default.getProperty(n, "movablelimits"))) goto L_6a9;
  r.default.setProperties(n, {movablelimits: false});
  return;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=6 bc=742B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r, a
// locals: s
function {
  let s;
  s = e.itemFactory.create("over").setProperty("name", e.currentCS);
  if ((r)) goto L_a0;
  if (!(a)) goto L_100;
  s.setProperty("ldelim", r);
  goto L_1d6;
  // [栈深重同步 1 -> 0]
  if (!(t.match(new RegExp("withdelims$")))) goto L_1d6;
  s.setProperty("ldelim", e.GetDelimiter(t));
  s.setProperty("rdelim", e.GetDelimiter(t));
  if (!(t.match(new RegExp("^\\\\above")))) goto L_257;
  goto L_2bc;
  // [栈深重同步 1 -> 0]
  if ((t.match(new RegExp("^\\\\atop")))) goto L_28b;
  if ((r)) goto L_28b;
  if (!(a)) goto L_2bc;
  s.setProperty("thickness", 0);
  e.Push(s);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=190B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: t
// closure: s, e
function {
  return new s.default((("\strut\textstyle{" + t) + "}"), e.stack.env, e.configuration).mml();   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=5 cpool=1 bc=769B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: o, l, c, e#1
// closure: s, i, a, n, r
function {
  let c;
  let l;
  let o;
  o = i.UnitUtil.trimSpaces(e.GetBrackets(t, ""));
  if (!(("" !== o))) goto L_eb;
  if (!(("l" !== o))) goto L_eb;
  if (!(("r" !== o))) goto L_eb;
  throw new a.default("IllegalAlign", "Illegal alignment specified in %1", e.currentCS);
  l = [e.GetArgument(t), e.GetArgument(t)].map(function <atom:0>);
  c = e.create("node", "mfrac", l);
  if (!(("" !== o))) goto L_2d8;
  let e#1;
  if (!(("l" === o))) goto L_214;
  goto L_27a;
  // [栈深重同步 1 -> 0]
  e#1 = n.TexConstant.Align.RIGHT;
  r.default.setProperties(c, {numalign: e#1, denomalign: e#1});
  e.Push(c);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=185B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, a, s
function {
  let s;
  let a;
  let r;
  r = e.ParseArg(t);
  a = e.ParseArg(t);
  s = e.create("node", "mfrac", [r, a]);
  e.Push(s);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=554B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, a, n
// closure: s, y
function {
  let n;
  let a;
  let r;
  r = e.GetBrackets(t);
  a = e.GetArgument(t);
  if (!(("\frac" === a))) goto L_cf;
  a = (a + (((("{" + e.GetArgument(a)) + "}{") + e.GetArgument(a)) + "}"));
  (a + (((("{" + e.GetArgument(a)) + "}{") + e.GetArgument(a)) + "}"));
  n = new s.default(a, e.stack.env, e.configuration).mml();
  if (!(r)) goto L_1c7;
  goto L_1fc;
  // [栈深重同步 1 -> 0]
  n = e.create("node", "msqrt", [n]);
  e.create("node", "msqrt", [n]);
  e.Push(n);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=193B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, a, s
// closure: y
function {
  let s;
  let a;
  let r;
  r = e.GetUpTo(t, "\of");
  a = e.ParseArg(t);
  s = e.create("node", "mroot", [a, y(e, r)]);
  e.Push(s);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=2 bc=682B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
// locals: s
// closure: a
function {
  let s;
  if (!(!e.stack.env.inRoot)) goto L_bf;
  throw new a.default("MisplacedMoveRoot", "%1 can appear only within a root", e.currentCS);
  if (!(e.stack.global[r])) goto L_15b;
  throw new a.default("MultipleMoveRoot", "Multiple use of %1", e.currentCS);
  s = e.GetArgument(t);
  if (!(!s.match(new RegExp("-?[0-9]+")))) goto L_206;
  throw new a.default("IntegerArg", "The argument to %1 must be an integer", e.currentCS);
  s = ((parseInt(s, 10) / 15) + "em");
  ((parseInt(s, 10) / 15) + "em");
  if (!(("-" !== s.substring(0, 1)))) goto L_25f;
  s = ("+" + s);
  ("+" + s);
  e.stack.global[r] = s;
  return;
}

// fn <atom:0>  args=4 vars=11 closure=2 cpool=0 bc=1166B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, a, s
// locals: n, i, l, c, u, d, m
// closure: o, r
function {
  let m;
  let d;
  let u;
  let c;
  let l;
  let i;
  let n;
  n = e.ParseArg(t);
  null;
  o.ParseUtil.getFontDef(e);
  if (((undefined === s))) goto L_9a;
  i = {accent: true, mathaccent: s};
  l = r.default.createEntity(a);
  c = e.create("token", "mo", i, l);
  r.default.setAttribute(c, "stretchy", !!s);
  if (!(r.default.isEmbellished(n))) goto L_20e;
  goto L_211;
  // [栈深重同步 1 -> 0]
  u = n;
  if ((r.default.isType(u, "mo"))) goto L_2b7;
  if (!(r.default.getProperty(u, "movablelimits"))) goto L_30e;
  r.default.setProperties(u, {movablelimits: false});
  d = e.create("node", "munderover");
  r.default.setChild(d, 0, n);
  r.default.setChild(d, 1, null);
  r.default.setChild(d, 2, c);
  m = e.create("node", "TeXAtom", [d]);
  e.Push(m);
  return;
}

// fn <atom:0>  args=4 vars=8 closure=3 cpool=0 bc=530B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, a, s
// locals: n, i, l, u
// closure: r, c, o
function {
  let u;
  let l;
  let i;
  let n;
  n = r.default.createEntity(a);
  i = e.create("token", "mo", {stretchy: true, accent: true}, n);
  if (!(n.match(c.MmlMo.mathaccentsWithWidth))) goto L_136;
  i.setProperty("mathaccent", false);
  if (!(("o" === t.charAt(1)))) goto L_16c;
  goto L_171;
  // [栈深重同步 1 -> 0]
  l = "under";
  u = e.ParseArg(t);
  e.Push(o.ParseUtil.underOver(e, u, i, l, s));
  return;
}

// fn <atom:0>  args=5 vars=14 closure=4 cpool=0 bc=1960B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, a, n, o
// locals: c, u, d, m, p, h, f, t#1, a#1
// closure: i, l, r, s
function {
  let f;
  let h;
  let p;
  let m;
  let d;
  let u;
  let c;
  c = {width: ("+" + i.UnitUtil.em(((n + o) / 18))), lspace: i.UnitUtil.em((n / 18))};
  u = e.GetBrackets(t);
  d = e.ParseArg(t);
  m = e.create("node", "mspace", [], {depth: ".2em"});
  p = e.create("token", "mo", {stretchy: true, texClass: l.TEXCLASS.ORD}, String.fromCodePoint(a));
  p = e.create("node", "mstyle", [p], {scriptlevel: 0});
  e.create("node", "mstyle", [p], {scriptlevel: 0});
  h = e.create("node", "munderover", [p]);
  f = e.create("node", "mpadded", [d, m], c);
  r.default.setAttribute(f, "voffset", "-.2em");
  r.default.setAttribute(f, "height", "-.2em");
  r.default.setChild(h, h.over, f);
  if (!(u)) goto L_632;
  let a#1;
  let t#1;
  t#1 = new s.default(u, e.stack.env, e.configuration).mml();
  a#1 = e.create("node", "mspace", [], {height: ".75em"});
  f = e.create("node", "mpadded", [t#1, a#1], c);
  e.create("node", "mpadded", [t#1, a#1], c);
  r.default.setAttribute(f, "voffset", ".15em");
  r.default.setAttribute(f, "depth", "-.15em");
  r.default.setChild(h, h.under, f);
  r.default.setProperty(h, "subsupOK", true);
  e.Push(e.create("node", "TeXAtom", [e.create("node", "TeXAtom", [], {texClass: l.TEXCLASS.NONE}), h], {texClass: l.TEXCLASS.REL}));
  return;
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=449B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: a, s, n, i, l
// closure: r, o
function {
  let l;
  let i;
  let n;
  let s;
  let a;
  a = e.ParseArg(t);
  s = e.ParseArg(t);
  n = a.coreMO();
  if (!(n.isKind("mo"))) goto L_108;
  i = (true === r.default.getMoAttribute(n, "accent"));
  o.ParseUtil.checkMovableLimits(s);
  l = e.create("node", "mover", [s, a], {accent: i});
  e.Push(l);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=449B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: a, s, n, i, l
// closure: r, o
function {
  let l;
  let i;
  let n;
  let s;
  let a;
  a = e.ParseArg(t);
  s = e.ParseArg(t);
  n = a.coreMO();
  if (!(n.isKind("mo"))) goto L_108;
  i = (true === r.default.getMoAttribute(n, "accent"));
  o.ParseUtil.checkMovableLimits(s);
  l = e.create("node", "munder", [s, a], {accentunder: i});
  e.Push(l);
  return;
}

// fn <atom:0>  args=2 vars=10 closure=2 cpool=0 bc=683B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: a, s, n, i, l, c, u, d
// closure: r, o
function {
  let d;
  let u;
  let c;
  let l;
  let i;
  let n;
  let s;
  let a;
  a = e.ParseArg(t);
  s = e.ParseArg(t);
  n = e.ParseArg(t);
  i = a.coreMO();
  l = s.coreMO();
  if (!(i.isKind("mo"))) goto L_161;
  c = (true === r.default.getMoAttribute(i, "accent"));
  if (!(l.isKind("mo"))) goto L_1e6;
  u = (true === r.default.getMoAttribute(l, "accent"));
  o.ParseUtil.checkMovableLimits(n);
  d = e.create("node", "munderover", [n, s, a], {accent: c, accentunder: u});
  e.Push(d);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=3 cpool=2 bc=868B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
// locals: a, o, i, r#1, l, t#1
// closure: l, n, s
function {
  let i;
  let o;
  let a;
  a = {texClass: r};
  o = undefined;
  i = undefined;
  if (!((r === l.TEXCLASS.OP))) goto L_2db;
  let l;
  let r#1;
  a.movablelimits = true;
  a.movesupsub = true;
  r#1 = e.GetArgument(t);
  l = r#1.match(new RegExp("^\\s*\\\\rm\\s+([a-zA-Z0-9 ]+)$"));
  if (!(l)) goto L_190;
  a.mathvariant = n.TexConstant.Variant.NORMAL;
  i = e.create("token", "mi", a, l[1]);
  e.create("token", "mi", a, l[1]);
  goto L_286;
  let t#1;
  t#1 = new s.default(r#1, e.stack.env, e.configuration).mml();
  i = e.create("node", "TeXAtom", [t#1], a);
  e.create("node", "TeXAtom", [t#1], a);
  o = e.itemFactory.create("fn", i);
  e.itemFactory.create("fn", i);
  goto L_33b;
  o = e.create("node", "TeXAtom", [e.ParseArg(t)], a);
  e.create("node", "TeXAtom", [e.ParseArg(t)], a);
  e.Push(o);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=691B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
// locals: a, n, o
// closure: s, l
function {
  let o;
  let n;
  let a;
  a = new s.default(e.GetArgument(t), e.stack.env, e.configuration);
  n = {data-vertical-align: r, texClass: l.TEXCLASS.ORD};
  if (!(a.stack.env.hsize)) goto L_1fe;
  n.width = a.stack.env.hsize;
  n["data-overflow"] = "linebreak";
  "linebreak";
  o = e.create("node", "mpadded", [a.mml()], n);
  o.setProperty("vbox", r);
  e.Push(o);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=320B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  if (!(("=" === e.GetNext()))) goto L_5c;
  e.i = <e.i_new>;
  (e.i++);
  e.stack.env.hsize = e.GetDimen(t);
  e.Push(e.itemFactory.create("null"));
  return;
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=385B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, a, s, n, i
// closure: o, P
function {
  let i;
  let n;
  let s;
  let a;
  let r;
  r = e.GetBrackets(t, "c");
  a = e.GetDimen(t);
  s = o.ParseUtil.internalMath(e, e.GetArgument(t));
  n = P(r, 1);
  i = e.create("node", "mpadded", s, {width: a, data-overflow: "linebreak", data-vertical-align: n});
  i.setProperty("vbox", n);
  e.Push(i);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=1172B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, r
// locals: s
// closure: t, a, P
function {
  let s;
  s = e.stack.Top();
  if (!(!(s instanceof t.ArrayItem))) goto L_ca;
  throw new a.default("BreakNotInArray", "%1 must be used in an alignment environment", e.currentCS);
  if (!((e.GetArgument(r).trim() === "c"))) goto L_1fa;
  if (!(s.First)) goto L_1a1;
  throw new a.default("BreakFirstInEntry", "%1 must be at the beginning of an alignment entry", (e.currentCS + "{c}"));
  s.breakAlign.cell = P(e.GetArgument(r), 1);
  goto L_493;
  if (!((e.GetArgument(r).trim() === "r"))) goto L_308;
  if ((s.row.length)) goto L_253;
  if (!(s.First)) goto L_2b0;
  throw new a.default("BreakFirstInRow", "%1 must be at the beginning of an alignment row", (e.currentCS + "{r}"));
  s.breakAlign.row = P(e.GetArgument(r));
  goto L_493;
  if (!((e.GetArgument(r).trim() === "t"))) goto L_43e;
  if ((s.table.length)) goto L_38a;
  if ((s.row.length)) goto L_38a;
  if (!(s.First)) goto L_3e7;
  throw new a.default("BreakFirstInTable", "%1 must be at the beginning of an alignment", (e.currentCS + "{t}"));
  s.breakAlign.table = P(e.GetArgument(r));
  goto L_493;
  throw new a.default("BreakType", "First argument to %1 must be one of c, r, or t", e.currentCS);
  e.GetArgument(r).trim();
  return;
}

// fn <atom:0>  args=2 vars=12 closure=5 cpool=8 bc=1390B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: s, n, i, l, c, u, m, t#1, r, d
// closure: a, g, o, h, r
function {
  let d;
  let u;
  let c;
  let l;
  let i;
  let n;
  let s;
  s = e.GetArgument(t);
  n = e.GetBrackets(t, "").replace(new RegExp("^\\s+"), "");
  i = e.GetArgument(t);
  l = {};
  c = [];
  u = undefined;
  try { // catch -> L_f9
  u = e.create("node", s);
  e.create("node", s);
  <?>;
  goto L_10a;
  // [栈深重同步 0 -> 1]
  m = <?>;
  try { // catch -> L_109
  u = null;
  null;
  <?>;
  goto L_10a;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((!u)) goto L_137;
  if (!(!u.isToken)) goto L_16f;
  throw new a.default("NotMathMLToken", "%1 is not a token element", s);
  if (!(("" !== n))) goto L_416;
  let r;
  let t#1;
  t#1 = n.match(new RegExp("^([a-z]+)\\s*=\\s*('[^'\\n]*'|\"[^\"\\n]*\"|[^ ,\\n]*)[\\s\\n]*,?[\\s\\n]*"));
  if (!(!t#1)) goto L_214;
  throw new a.default("InvalidMathMLAttr", "Invalid MathML attribute: %1", n.split(new RegExp("[\\s\\n=]"))[0]);
  if (!(!u.attributes.hasDefault(t#1[1]))) goto L_2ab;
  if (!(!g[t#1[1]])) goto L_2ab;
  throw new a.default("UnknownAttrForElement", "%1 is not a recognized attribute for %2", t#1[1], s);
  r = o.ParseUtil.mmlFilterAttribute(e, t#1[1], t#1[2].replace(new RegExp("^(['\"])(.*)\\1$"), "$2"));
  if (!(r)) goto L_3e0;
  if (!(("true" === r.toLowerCase()))) goto L_36f;
  r = true;
  goto L_3a6;
  // [栈深重同步 1 -> 0]
  if (!(("false" === r.toLowerCase()))) goto L_3a6;
  r = false;
  false;
  l[t#1[1]] = r;
  c.push(t#1[1]);
  n = n.substring(t#1[0].length);
  n.substring(t#1[0].length);
  goto L_16f;
  if (!(c.length)) goto L_476;
  u.setProperty("keep-attrs", c.join(" "));
  d = e.create("text", h.replaceUnicode(i));
  u.appendChild(d);
  r.default.setProperties(u, l);
  e.Push(u);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=176B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, a
function {
  let a;
  let r;
  r = e.create("node", "mrow");
  a = e.create("node", "mpadded", [r], {height: "8.6pt", depth: "3pt", width: 0});
  e.Push(a);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=0 bc=520B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, a, s
// locals: n, o
// closure: r
function {
  let o;
  let n;
  n = e.create("node", "mphantom", [e.ParseArg(t)]);
  if ((a)) goto L_65;
  if (!(s)) goto L_1a8;
  n = e.create("node", "mpadded", [n]);
  e.create("node", "mpadded", [n]);
  if (!(s)) goto L_151;
  r.default.setAttribute(n, "height", 0);
  r.default.setAttribute(n, "depth", 0);
  if (!(a)) goto L_1a8;
  r.default.setAttribute(n, "width", 0);
  o = e.create("node", "TeXAtom", [n]);
  e.Push(o);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=661B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: a, s, n
// closure: i, r
function {
  let n;
  let s;
  let a;
  a = i.UnitUtil.trimSpaces(e.GetBrackets(t, ""));
  s = e.create("node", "mpadded", [e.ParseArg(t)]);
  if (!((a === "b"))) goto L_133;
  r.default.setAttribute(s, "depth", 0);
  goto L_235;
  if (!((a === "t"))) goto L_191;
  r.default.setAttribute(s, "height", 0);
  goto L_235;
  r.default.setAttribute(s, "height", 0);
  r.default.setAttribute(s, "depth", 0);
  a;
  n = e.create("node", "TeXAtom", [s]);
  e.Push(n);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=294B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: a, s
// closure: r
function {
  let s;
  let a;
  a = e.create("node", "mpadded", [e.ParseArg(t)], {width: 0});
  if (!(("\llap" === t))) goto L_c6;
  r.default.setAttribute(a, "lspace", "-1width");
  s = e.create("node", "TeXAtom", [a]);
  e.Push(s);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=629B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, a
function {
  let a;
  let r;
  r = e.GetDimen(t);
  a = e.itemFactory.create("position").setProperties({name: e.currentCS, move: "vertical"});
  if (!(("-" === r.charAt(0)))) goto L_169;
  r = r.slice(1);
  r.slice(1);
  if (!(("raise" === t.substring(1)))) goto L_163;
  goto L_168;
  // [栈深重同步 1 -> 0]
  t = "\raise";
  "\raise";
  if (!(("\lower" === t))) goto L_1e0;
  a.setProperty("dh", ("-" + r));
  goto L_24b;
  // [栈深重同步 1 -> 0]
  a.setProperty("dh", ("+" + r));
  a.setProperty("dd", ("-" + r));
  e.Push(a);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=504B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, a, e#1
function {
  let a;
  let r;
  r = e.GetDimen(t);
  if (!(("-" === r.charAt(0)))) goto L_87;
  goto L_90;
  // [栈深重同步 1 -> 0]
  a = ("-" + r);
  if (!(("\moveleft" === t))) goto L_b1;
  let e#1;
  e#1 = r;
  r = a;
  a;
  a = e#1;
  e#1;
  e.Push(e.itemFactory.create("position").setProperties({name: e.currentCS, move: "horizontal", left: e.create("node", "mspace", [], {width: r}), right: e.create("node", "mspace", [], {width: a})}));
  return;
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=253B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, a
// locals: e#1, t#1, a#1, s
// closure: r
function {
  let a#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((a === undefined))) goto L_16;
  a;
  a = false;
  a#1 = false;
  let s;
  s = e.create("node", "mspace", [], {width: e.GetDimen(t)});
  if (!(a)) goto L_d3;
  r.default.setAttribute(s, "linebreak", "nobreak");
  e.Push(s);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=113B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  e.Push(e.itemFactory.create("nonscript"));
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=366B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
// locals: a, s
function {
  let s;
  let a;
  a = {width: e.GetDimen(t), height: e.GetDimen(t), depth: e.GetDimen(t)};
  if (!(("blank" !== r))) goto L_10e;
  if ((e.stack.env.color)) goto L_104;
  a.mathbackground = "black";
  "black";
  s = e.create("node", "mspace", [], a);
  e.Push(s);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=2 bc=780B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: a, s, n, o
// closure: r
function {
  let o;
  let n;
  let s;
  let a;
  a = e.GetBrackets(t);
  s = e.GetDimen(t);
  n = e.GetDimen(t);
  if ((e.stack.env.color)) goto L_12e;
  o = e.create("node", "mspace", [], {width: s, height: n, mathbackground: "black"});
  if (!(a)) goto L_2e2;
  o = e.create("node", "mpadded", [o], {voffset: a});
  e.create("node", "mpadded", [o], {voffset: a});
  if (!(a.match(new RegExp("^-")))) goto L_289;
  r.default.setAttribute(o, "height", a);
  goto L_2e2;
  // [栈深重同步 1 -> 0]
  r.default.setAttribute(o, "height", ("+" + a));
  e.Push(o);
  return;
}

// fn <atom:0>  args=4 vars=8 closure=1 cpool=2 bc=309B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r, a
// locals: s, n, o, i
// closure: f
function {
  let i;
  let o;
  let n;
  let s;
  a = (a * f);
  s = (String((a * f)).replace(new RegExp("(\\.\\d\\d\\d).+"), "$1") + "em");
  n = e.GetDelimiter(t, true);
  o = e.create("token", "mo", {minsize: s, maxsize: s, fence: true, stretchy: true, symmetric: true}, n);
  i = e.create("node", "TeXAtom", [o], {texClass: r});
  e.Push(i);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=551B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: a, s, n, o
// closure: r, l
function {
  let o;
  let n;
  let s;
  let a;
  a = e.ParseUpTo(t, "\over");
  s = e.ParseArg(t);
  n = e.create("node", "munderover");
  r.default.setChild(n, 0, s);
  r.default.setChild(n, 1, null);
  r.default.setChild(n, 2, a);
  o = e.create("node", "TeXAtom", [n], {texClass: l.TEXCLASS.REL});
  e.Push(o);
  return;
}

// fn <atom:0>  args=4 vars=4 closure=1 cpool=0 bc=151B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r, a
// closure: o
function {
  e.PushAll(o.ParseUtil.internalMath(e, e.GetArgument(t), r, a));
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=221B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, a
// closure: o
function {
  let a;
  let r;
  r = o.ParseUtil.internalMath(e, e.GetArgument(t));
  a = e.create("node", "menclose", r, {notation: "box"});
  e.Push(a);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=2 bc=229B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
// locals: a
function {
  let a;
  if (!((r == null))) goto L_5d;
  r;
  a = e.GetArgument(t).replace(new RegExp(","), " ");
  e.Push(e.create("node", "menclose", [e.ParseArg(t)], {notation: a}));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=115B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  e.GetBrackets(t);
  e.Push(e.ParseArg(t));
  return;
}

// fn <atom:0>  args=2 vars=6 closure=3 cpool=0 bc=587B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, a, s, n
// closure: o, p, l
function {
  let n;
  let s;
  let a;
  let r;
  r = e.GetBrackets(t);
  if ((e.GetBrackets(t))) goto L_62;
  a = "c";
  s = o.ParseUtil.internalMath(e, e.GetArgument(t));
  if (!(r)) goto L_166;
  s = [e.create("node", "mpadded", s, {width: r, data-align: p.lookup(a, {l: "left", r: "right"}, "center")})];
  [e.create("node", "mpadded", s, {width: r, data-align: p.lookup(a, {l: "left", r: "right"}, "center")})];
  n = e.create("node", "TeXAtom", [e.create("node", "menclose", s, {notation: "box"})], {texClass: l.TEXCLASS.ORD});
  e.Push(n);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=3 cpool=0 bc=709B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: a, s, n, i
// closure: o, r, p
function {
  let i;
  let n;
  let s;
  let a;
  a = e.GetBrackets(t);
  s = e.GetBrackets(t, "c");
  n = e.create("node", "mpadded", o.ParseUtil.internalMath(e, e.GetArgument(t)));
  if (!(a)) goto L_158;
  r.default.setAttribute(n, "width", a);
  i = p.lookup(s.toLowerCase(), {c: "center", r: "right"}, "");
  if (!(i)) goto L_216;
  r.default.setAttribute(n, "data-align", i);
  if (!((s.toLowerCase() !== s))) goto L_29b;
  r.default.setAttribute(n, "data-overflow", "linebreak");
  e.Push(n);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=113B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  e.Push(e.itemFactory.create("not"));
  return;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=1 bc=449B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: a, s, n, o
// closure: r
function {
  let o;
  let n;
  let s;
  let a;
  a = r.default.createEntity("2026");
  s = r.default.createEntity("22EF");
  n = e.create("token", "mo", {stretchy: false}, a);
  o = e.create("token", "mo", {stretchy: false}, s);
  e.Push(e.itemFactory.create("dots").setProperties({ldots: n, cdots: o}));
  return;
}

// fn <atom:0>  args=10 vars=12 closure=1 cpool=0 bc=985B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r, s, n, o, i, l, c, u
// locals: d, m
// closure: a
function {
  let m;
  let d;
  d = e.GetNext();
  if (!(("" === d))) goto L_88;
  throw new a.default("MissingArgFor", "Missing argument for %1", e.currentCS);
  if (!(("{" === d))) goto L_c3;
  e.i = <e.i_new>;
  goto L_14d;
  // [栈深重同步 1 -> 0]
  e.string = ((d + "}") + e.string.slice((e.i + 1)));
  e.i = 0;
  0;
  m = e.itemFactory.create("array").setProperty("requireClose", true);
  if (!(!r)) goto L_1ce;
  if ((n)) goto L_203;
  m.setProperty("arrayPadding", ".2em .125em");
  if ((i)) goto L_214;
  if ((o)) goto L_225;
  m.arraydef = {rowspacing: "4pt", columnspacing: "1em"};
  if (!(c)) goto L_268;
  m.setProperty("isCases", true);
  if (!(u)) goto L_2d0;
  m.setProperty("isNumbered", true);
  m.arraydef.side = u;
  u;
  if ((r)) goto L_2d7;
  if (!(s)) goto L_336;
  m.setProperty("open", r);
  m.setProperty("close", s);
  if (!(("D" === l))) goto L_374;
  m.arraydef.displaystyle = true;
  true;
  if (!((null != n))) goto L_3af;
  m.arraydef.columnalign = n;
  n;
  e.Push(m);
  return;
}

// fn <atom:0>  args=2 vars=14 closure=3 cpool=8 bc=1400B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, s, n, l, c, u, d, m, t#1, e#1, p, t#2
// closure: a, o, i
function {
  let p;
  let m;
  let d;
  let u;
  let c;
  let l;
  let n;
  let s;
  let r;
  e.Push(e.itemFactory.create("cell").setProperties({isEntry: true, name: t}));
  r = e.stack.Top();
  s = r.getProperty("casesEnv");
  if (!(!r.getProperty("isCases"))) goto L_168;
  if (!(!s)) goto L_168;
  return;
  n = e.string;
  l = 0;
  c = -1;
  u = e.i;
  d = n.length;
  if (!(s)) goto L_229;
  goto L_22a;
  // [栈深重同步 1 -> 0]
  m = null;
  if (!((u < d))) goto L_3ef;
  let t#1;
  t#1 = n.charAt(u);
  if (!(("{" === t#1))) goto L_284;
  l = <l_new>;
  (l++);
  u = <u_new>;
  (u++);
  goto L_22c;
  if (!(("}" === t#1))) goto L_2ed;
  if (!((0 === l))) goto L_29d;
  d = 0;
  goto L_2e9;
  // [栈深重同步 1 -> 0]
  l = <l_new>;
  (l--);
  if (!((0 === l))) goto L_2e1;
  if (!((c < 0))) goto L_2e1;
  c = (u - e.i);
  (u - e.i);
  u = <u_new>;
  (u++);
  goto L_22c;
  if (!(("&" === t#1))) goto L_332;
  if (!((0 === l))) goto L_332;
  throw new a.default("ExtraAlignTab", "Extra alignment tab in \cases text");
  if (!(("\" === t#1))) goto L_3e4;
  let e#1;
  e#1 = n.substring(u);
  if ((e#1.match(new RegExp("^((\\\\cr)[^a-zA-Z]|\\\\\\\\)")))) goto L_3ce;
  if (!(m)) goto L_3d7;
  if (!(e#1.match(m))) goto L_3d7;
  d = 0;
  goto L_3e0;
  // [栈深重同步 1 -> 0]
  u = (u + 2);
  (u + 2);
  goto L_22c;
  u = <u_new>;
  (u++);
  goto L_22c;
  p = n.substring(e.i, u);
  if ((!p.match(new RegExp("^\\s*\\\\text[^a-zA-Z]")))) goto L_4a2;
  if (!((c !== (p.replace(new RegExp("\\s+$"), "").length - 1)))) goto L_577;
  let t#2;
  t#2 = o.ParseUtil.internalMath(e, i.UnitUtil.trimSpaces(p), 0);
  e.PushAll(t#2);
  e.i = u;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=163B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  e.Push(e.itemFactory.create("cell").setProperties({isCR: true, name: t}));
  return;
}

// fn <atom:0>  args=3 vars=12 closure=5 cpool=0 bc=1208B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, s, o
// locals: e#1, s#1, o#1, l, t, r, n, c, u
// closure: i, a, t, n, r
function {
  let o#1;
  let s#1;
  let e#1;
  e#1 = e;
  s#1 = s;
  if (!((o === undefined))) goto L_16;
  o;
  o = false;
  o#1 = false;
  let u;
  let c;
  let l;
  l = undefined;
  if (!(!o)) goto L_23b;
  if (!(("*" === e.string.charAt(e.i)))) goto L_c8;
  e.i = <e.i_new>;
  (e.i++);
  if (!(("[" === e.string.charAt(e.i)))) goto L_23b;
  let n;
  let r;
  let t;
  t = e.GetBrackets(s, "");
  if (((undefined === undefined))) goto L_181;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_1cf;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_173;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_22f;
  if (!(!r)) goto L_22f;
  throw new a.default("BracketMustBeDimension", "Bracket argument to %1 must be a dimension", e.currentCS);
  l = (r + n);
  (r + n);
  e.Push(e.itemFactory.create("cell").setProperties({isCR: true, name: s, linebreak: true}));
  c = e.stack.Top();
  u = undefined;
  if (!((c instanceof t.ArrayItem))) goto L_391;
  if (!(l)) goto L_4b7;
  goto L_4b7;
  // [栈深重同步 1 -> 0]
  u = e.create("node", "mspace", [], {linebreak: n.TexConstant.LineBreak.NEWLINE});
  e.create("node", "mspace", [], {linebreak: n.TexConstant.LineBreak.NEWLINE});
  if (!(l)) goto L_48e;
  r.default.setAttribute(u, "data-lineleading", l);
  e.Push(u);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=2 bc=799B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, r, s
// locals: n, e#1
// closure: t, a
function {
  let n;
  if (!((null == s))) goto L_10;
  s = "solid";
  "solid";
  n = e.stack.Top();
  if ((!(n instanceof t.ArrayItem))) goto L_ac;
  if (!(n.Size())) goto L_103;
  throw new a.default("Misplaced", "Misplaced %1", e.currentCS);
  if (!(n.table.length)) goto L_2cc;
  let e#1;
  if (!(n.arraydef.rowlines)) goto L_1e7;
  goto L_1ea;
  // [栈深重同步 1 -> 0]
  e#1 = [];
  if (!((e#1.length < n.table.length))) goto L_246;
  e#1.push("none");
  goto L_1eb;
  e#1[(n.table.length - 1)] = s;
  n.arraydef.rowlines = e#1.join(" ");
  return;
  n.frame.push(["top", s]);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=314B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, r
// locals: s
// closure: t, a
function {
  let s;
  s = e.stack.Top();
  if (!(!(s instanceof t.ArrayItem))) goto L_ca;
  throw new a.default("UnsupportedHFill", "Unsupported use of %1", e.currentCS);
  s.hfill.push(s.Size());
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=52B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e
// closure: o, n, s
function {
  return o.macroColumn(e, n, parseInt(s));   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=4 bc=518B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, s, n, o
// closure: a
function {
  let o;
  let n;
  let s;
  let r;
  r = e.GetArgument(t);
  s = e.GetBrackets(t, "0");
  n = e.GetArgument(t);
  if (!((1 !== r.length))) goto L_c1;
  throw new a.default("BadColumnName", "Column specifier must be exactly one character: %1", r);
  if (!(!s.match(new RegExp("^\\d+$")))) goto L_126;
  throw new a.default("PositiveIntegerArg", "Argument to %1 must be a positive integer", s);
  o = e.configuration.columnParser;
  o.columnHandler[r] = function <atom:0>;
  e.Push(e.itemFactory.create("null"));
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=2 bc=855B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: t, r
// locals: s, n, e
// closure: a, e, o
function {
  let n;
  let s;
  s = t.GetArgument(r);
  if (!(s.match(new RegExp("\\\\")))) goto L_91;
  throw new a.default("InvalidEnv", "Invalid environment name '%1'", s);
  n = t.configuration.handlers.get(e.HandlerType.ENVIRONMENT).lookup(s);
  if (!(n)) goto L_299;
  if (!(("\end" === r))) goto L_299;
  if (!(!n.args[0])) goto L_24a;
  let e;
  e = t.itemFactory.create("end").setProperty("name", s);
  t.Push(e);
  return;
  t.stack.env.closing = s;
  o.ParseUtil.checkMaxMacros(t, false);
  t.parse(e.HandlerType.ENVIRONMENT, [t, s]);
  return;
}

// fn <atom:0>  args=9 vars=10 closure=0 cpool=0 bc=1080B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r, a, s, n, o, i, l
// locals: c
function {
  let c;
  if ((s)) goto L_63;
  s = e.GetArgument((("\begin{" + t.getName()) + "}"));
  e.GetArgument((("\begin{" + t.getName()) + "}"));
  c = e.itemFactory.create("array");
  if (!(("array" === t.getName()))) goto L_110;
  c.setProperty("arrayPadding", ".5em .125em");
  c.parser = e;
  if ((n)) goto L_12e;
  if ((o)) goto L_13f;
  c.arraydef = {columnspacing: "1em", rowspacing: "4pt"};
  e.configuration.columnParser.process(e, s, c);
  if (!(r)) goto L_213;
  c.setProperty("open", e.convertDelimiter(r));
  if (!(a)) goto L_26b;
  c.setProperty("close", e.convertDelimiter(a));
  if ((i)) goto L_279;
  if (!(("'" === "".charAt(1)))) goto L_2fb;
  c.arraydef["data-cramped"] = true;
  i = i.charAt(0);
  i.charAt(0);
  if (!(("D" === i))) goto L_339;
  c.arraydef.displaystyle = true;
  goto L_370;
  // [栈深重同步 1 -> 0]
  if (!(i)) goto L_370;
  c.arraydef.displaystyle = false;
  false;
  if (!(("S" === i))) goto L_3a3;
  goto L_3a4;
  // [栈深重同步 2 -> 1]
  c.arraydef.scriptlevel = 0;
  if (!(l)) goto L_3e4;
  c.arraydef.useHeight = false;
  false;
  e.Push(t);
  c.StartEntry();
  return c;
}

// fn <atom:0>  args=3 vars=8 closure=2 cpool=0 bc=242B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
// locals: e#1, t#1, r#1, a, s
// closure: b, o
function {
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((r === undefined))) goto L_15;
  r;
  r = "";
  r#1 = "";
  let s;
  let a;
  a = e.GetBrackets((("\begin{" + t.getName()) + "}"));
  s = b.Array(e, t, null, null, null, null, null, r);
  return o.ParseUtil.setArrayAlign(s, a);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=34B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e
function {
  return {l: "left", c: "center", r: "right"}[e];
}

// fn <atom:0>  args=2 vars=11 closure=2 cpool=3 bc=1088B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, s, n, o, l, c, u, a, i
// closure: i, a
function {
  let u;
  let c;
  let l;
  let o;
  let n;
  let s;
  let r;
  r = "\begin{".concat(t.getName(), "}");
  s = e.GetBrackets(r, "");
  n = e.GetBrackets(r, "");
  o = e.GetBrackets(r, "");
  if (!(s)) goto L_13c;
  if ((!i.UnitUtil.matchDimen(s)[0])) goto L_1f2;
  if (!(n)) goto L_198;
  if ((!i.UnitUtil.matchDimen(n)[0])) goto L_1f2;
  if (!(o)) goto L_22a;
  if (!(!i.UnitUtil.matchDimen(o)[0])) goto L_22a;
  throw new a.default("BracketMustBeDimension", "Bracket argument to %1 must be a dimension", r);
  l = e.GetArgument(r);
  if (!(l)) goto L_2bb;
  if (!(!l.match(new RegExp("^([lcr]{1,3})?$")))) goto L_2bb;
  throw new a.default("BadAlignment", "Alignment must be one to three copies of l, c, or r");
  // append([], 0, l)
  l;
  c = [].map(function <atom:0>);
  if (!((1 === c.length))) goto L_322;
  c.push(c[0]);
  u = {};
  let i;
  let a;
  if ((n)) goto L_346;
  const _it1 = [["indentshiftfirst", s], ["indentshift", s], ["indentshiftlast", o], ["indentalignfirst", c[0]], ["indentalign", c[1]], ["indentalignlast", c[2]]];
  goto L_3a1;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  a = <value(_it2)>;
  <done(_it2)>;
  i = <value(_it2)>;
  if (!(i)) goto L_3a0;
  u[a] = i;
  i;
  if (!(<done(_it1)>)) goto L_381;
  <value(_it1)>;
  e.Push(e.itemFactory.create("mstyle", u, t.getName()));
  return;
}

// fn <atom:0>  args=4 vars=8 closure=1 cpool=0 bc=449B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r, a
// locals: e#1, t#1, r#1, a#1
// closure: o
function {
  let a#1;
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  r#1 = r;
  if (!((a === undefined))) goto L_1b;
  a;
  a = true;
  a#1 = true;
  e.configuration.mathItem.display = a;
  e.stack.env.display = a;
  o.ParseUtil.checkEqnEnv(e);
  e.Push(t);
  return e.itemFactory.create("equation", r).setProperty("name", t.getName());   // tail call
}

// fn <atom:0>  args=7 vars=10 closure=2 cpool=8 bc=880B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r, a, s, n, i
// locals: l, c, u
// closure: o, P
function {
  let u;
  let c;
  let l;
  l = t.getName();
  if ((("gather" === l))) goto L_45;
  c = ("gather*" === l);
  if (!(a)) goto L_98;
  o.ParseUtil.checkEqnEnv(e, !c);
  e.Push(t);
  s = s.replace(new RegExp("[^clr]"), "").split("").join(" ");
  s = s.replace(new RegExp("[^clr]"), "").split("").join(" ").replace(new RegExp("l"), "left").replace(new RegExp("r"), "right").replace(new RegExp("c"), "center");
  n = P(n);
  u = e.itemFactory.create("eqnarray", l, r, a, e.stack.global);
  if ((i)) goto L_286;
  u.arraydef = {displaystyle: true, columnalign: s, columnspacing: "1em", rowspacing: "3pt", data-break-align: n, side: e.options.tagSide, minlabelspacing: e.options.tagIndent};
  if (!(c)) goto L_36b;
  u.setProperty("nestable", true);
  return u;
}

// fn <atom:0>  args=7 vars=9 closure=2 cpool=0 bc=324B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r, a, s, n, i
// locals: l, c
// closure: b, o
function {
  let c;
  let l;
  l = e.GetBrackets((("\begin{" + t.getName()) + "}"));
  c = b.EqnArray(e, t, r, a, s, n, i);
  if (!(("gathered" === t.getName()))) goto L_f4;
  c.arraydef.rowspacing = ".5em";
  ".5em";
  return o.ParseUtil.setArrayAlign(c, l, e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=71B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
function {
  e.tags.notag();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=710B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r
// closure: a, u
function {
  let r;
  r = e.GetArgument(t);
  if (!(("" !== r))) goto L_2c5;
  if (!(!e.tags.refUpdate)) goto L_2c5;
  if (!(e.tags.label)) goto L_117;
  throw new a.default("MultipleCommand", "Multiple %1", e.currentCS);
  e.tags.label = r;
  if ((e.tags.allLabels[r])) goto L_1d7;
  if (!(e.tags.labels[r])) goto L_255;
  if (!(!e.options.ignoreDuplicateLabels)) goto L_255;
  throw new a.default("MultipleLabel", "Label '%1' multiply defined", r);
  e.tags.labels[r] = new u.Label();
  return;
}

// fn <atom:0>  args=3 vars=7 closure=2 cpool=0 bc=933B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r
// locals: a, s, n, i
// closure: u, o
function {
  let i;
  let n;
  let s;
  let a;
  a = e.GetArgument(t);
  if ((e.tags.allLabels[a])) goto L_c5;
  s = e.tags.labels[a];
  if ((s)) goto L_172;
  if ((e.tags.refUpdate)) goto L_145;
  e.tags.redo = true;
  true;
  s = new u.Label();
  new u.Label();
  n = s.tag;
  if (!(r)) goto L_1ea;
  n = e.tags.formatRef(n);
  e.tags.formatRef(n);
  if (!(Array.isArray(n))) goto L_2b5;
  goto L_2b8;
  // [栈深重同步 8 -> 7]
  i = e.create("node", "mrow", o.ParseUtil.internalMath(e, n), {href: e.tags.formatUrl(s.id, e.options.baseURL), class: "MathJax_ref"});
  e.Push(i);
  return;
}

// fn <atom:0>  args=5 vars=8 closure=1 cpool=0 bc=567B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t, r, a, s
// locals: n, r#1, r#2
// closure: o
function {
  if (!(a)) goto L_126;
  let n;
  n = [];
  if (!((null != s))) goto L_71;
  let r#1;
  r#1 = e.GetBrackets(t);
  if (!((r#1 == null))) goto L_6d;
  r#1;
  n.push(s);
  let r#2;
  r#2 = n.length;
  if (!((r#2 < a))) goto L_d8;
  n.push(e.GetArgument(t));
  r#2 = <r#2_new>;
  (r#2++);
  goto L_79;
  r = o.ParseUtil.substituteArgs(e, n, r);
  e.string = o.ParseUtil.addArgs(e, r, e.string.slice(e.i));
  e.i = 0;
  o.ParseUtil.checkMaxMacros(e);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=268B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: e, t
// locals: r, a, s, n
function {
  let n;
  let s;
  let a;
  let r;
  r = e.ParseArg(t);
  a = e.ParseArg(t);
  s = e.ParseArg(t);
  n = e.ParseArg(t);
  e.Push(e.create("node", "MathChoice", [r, a, s, n]));
  return;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=84 bc=1003B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// args: require, module, exports
// locals: e, t, r, a, s, n, o, i, l, c, u, d, m, p, h, f, g, P, y, b
function {
  P = function P;
  y = function y;
  let b;
  let g;
  let f;
  let h;
  let p;
  let m;
  let d;
  let u;
  let c;
  let l;
  let i;
  let o;
  let n;
  let s;
  let a;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.splitAlignArray = undefined;
  e = require("../HandlerTypes");
  t = require("./BaseItems");
  r = require("../NodeUtil");
  a = require("../TexError");
  s = require("../TexParser");
  n = require("../TexConstants");
  o = require("../ParseUtil");
  i = require("../UnitUtil");
  l = require("../../../core/MmlTree/MmlNode");
  c = require("../../../core/MmlTree/MmlNodes/mo");
  u = require("../Tags");
  d = require("../../../util/lengths");
  m = require("../../../util/Entities");
  p = require("../../../util/Options");
  h = require("../../../util/string");
  f = (1.2 / 0.85);
  g = {fontfamily: 1, fontsize: 1, fontweight: 1, fontstyle: 1, color: 1, background: 1, id: 1, class: 1, href: 1, style: 1};
  exports.splitAlignArray = P;
  b = {Open: function <atom:0>, Close: function <atom:0>, Bar: function <atom:0>, Tilde: function <atom:0>, Space: function <atom:0>, Superscript: function <atom:0>, Subscript: function <atom:0>, Prime: function <atom:0>, Comment: function <atom:0>, Hash: function <atom:0>, MathFont: function <atom:0>, SetFont: function <atom:0>, SetStyle: function <atom:0>, SetSize: function <atom:0>, Spacer: function <atom:0>, DiscretionaryTimes: function <atom:0>, AllowBreak: function <atom:0>, Break: function <atom:0>, Linebreak: function <atom:0>, LeftRight: function <atom:0>, NamedFn: function <atom:0>, NamedOp: function <atom:0>, Limits: function <atom:0>, Over: function <atom:0>, CFrac: function <atom:0>, Frac: function <atom:0>, Sqrt: function <atom:0>, Root: function <atom:0>, MoveRoot: function <atom:0>, Accent: function <atom:0>, UnderOver: function <atom:0>, XArrow: function <atom:0>, Overset: function <atom:0>, Underset: function <atom:0>, Overunderset: function <atom:0>, TeXAtom: function <atom:0>, VBox: function <atom:0>, Hsize: function <atom:0>, ParBox: function <atom:0>, BreakAlign: function <atom:0>, MmlToken: function <atom:0>, Strut: function <atom:0>, Phantom: function <atom:0>, Smash: function <atom:0>, Lap: function <atom:0>, RaiseLower: function <atom:0>, MoveLeftRight: function <atom:0>, Hskip: function <atom:0>, Nonscript: function <atom:0>, Rule: function <atom:0>, rule: function <atom:0>, MakeBig: function <atom:0>, BuildRel: function <atom:0>, HBox: function <atom:0>, FBox: function <atom:0>, Enclose: function <atom:0>, BBox: function <atom:0>, FrameBox: function <atom:0>, MakeBox: function <atom:0>, Not: function <atom:0>, Dots: function <atom:0>, Matrix: function <atom:0>, Entry: function <atom:0>, Cr: function <atom:0>, CrLaTeX: function <atom:0>, HLine: function <atom:0>, HFill: function <atom:0>, NewColumnType: function <atom:0>, BeginEnd: function <atom:0>, Array: function <atom:0>, AlignedArray: function <atom:0>, IndentAlign: function <atom:0>, Equation: function <atom:0>, EqnArray: function <atom:0>, AlignedEquationArray: function <atom:0>, HandleNoTag: function <atom:0>, HandleLabel: function <atom:0>, HandleRef: function <atom:0>, Macro: function <atom:0>, MathChoice: function <atom:0>};
  exports.default = b;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/base/BaseMethods
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
