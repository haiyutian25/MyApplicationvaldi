// fn <atom:0>  args=3 vars=8 closure=2 cpool=0 bc=644B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t, e, i
// locals: r, n, o, t#1, this
// closure: <class_fields_init>, s
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let o;
  let n;
  let r;
  this._string = t;
  this.configuration = i;
  this.macroCount = 0;
  this.i = 0;
  this.currentCS = "";
  this.saveI = 0;
  r = Object.hasOwn(e, "isInner");
  n = e.isInner;
  o = undefined;
  delete "isInner";
  if (!(e)) goto L_10c;
  o = {};
  {};
  let t#1;
  for (const t#1 of Object.keys(e)) {
    o[t#1] = e[t#1];
    // [栈深重同步 3 -> 4]
  }
  this.configuration.pushParser(this);
  if ((!r)) goto L_1ae;
  this.stack = new s.default(this.itemFactory, o, n);
  this.Parse();
  this.Push(this.itemFactory.create("stop"));
  this.stack.env = o;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: this
function {
  this = this;
  return this.configuration.options;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: this
function {
  this = this;
  return this.configuration.itemFactory;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: this
function {
  this = this;
  return this.configuration.tags;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t
// locals: this
function {
  this = this;
  this._string = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: this
function {
  this = this;
  return this._string;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=326B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t, e
// locals: s, i, this
function {
  this = this;
  let i;
  let s;
  s = this.saveI;
  if (!(("character" === t))) goto L_65;
  if (!(("&" !== e[1]))) goto L_65;
  goto L_66;
  // [栈深重同步 3 -> 2]
  this.saveI = (this.i - 0);
  i = this.configuration.handlers.get(t).parse(e);
  if (!(("macro" !== t))) goto L_134;
  this.updateResult(e[1], s);
  this.saveI = s;
  return i;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=143B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t, e
// locals: this
function {
  this = this;
  return this.configuration.handlers.get(t).lookup(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=143B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t, e
// locals: this
function {
  this = this;
  return this.configuration.handlers.get(t).contains(e);   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=303B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: t, e, this
function {
  this = this;
  let t;
  t = "";
  let e;
  for (const e of Array.from(this.configuration.handlers.keys())) {
    t = (t + (((e + ": ") + this.configuration.handlers.get(e)) + "
"));
    (t + (((e + ": ") + this.configuration.handlers.get(e)) + "
"));
  }
  return t;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=290B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: e, this
// closure: t
function {
  this = this;
  let e;
  e = undefined;
  if (!((this.i < this.string.length))) goto L_121;
  e = this.getCodePoint();
  this.getCodePoint();
  this.i = (this.i + e.length);
  this.parse(t.HandlerType.CHARACTER, [this, e]);
  goto L_7;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=402B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t
// locals: this
// closure: n, r
function {
  this = this;
  if (!((t instanceof n.BaseItem))) goto L_b4;
  t.startI = this.saveI;
  t.stopI = this.i;
  t.startStr = this.string;
  this.string;
  if (!((t instanceof r.AbstractMmlNode))) goto L_14a;
  if (!(t.isInferred)) goto L_14a;
  goto L_191;
  // [栈深重同步 1 -> 0]
  this.stack.Push(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=91B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t
// locals: e, this
function {
  this = this;
  let e;
  for (const e of t) {
    this.stack.Push(e);
  }
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=563B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: t, e, this
// closure: o
function {
  this = this;
  let e;
  let t;
  if (!(!this.stack.Top().isKind("mml"))) goto L_7c;
  return null;
  t = this.stack.Top().First;
  this.configuration.popParser();
  e = this.trimTex(this.string);
  if (!(e)) goto L_22e;
  t.attributes.set(o.TexConstant.Attr.LATEX, e);
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=164B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: e
// locals: s, this
// closure: t
function {
  this = this;
  let s;
  s = this.lookup(t.HandlerType.DELIMITER, e);
  if (!((s == null))) goto L_7c;
  s;
  goto L_9d;
  if (!((undefined.char == null))) goto L_a3;
  undefined.char;
  return null;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=164B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: t, this
function {
  this = this;
  let t;
  t = this.string.codePointAt(this.i);
  if (!((undefined === t))) goto L_77;
  return "";
  return String.fromCodePoint(t);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=2 bc=150B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: this
function {
  this = this;
  return !!this.string.charAt(this.i).match(new RegExp("\\s"));
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=124B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: this
function {
  this = this;
  if (!(this.nextIsSpace())) goto L_57;
  this.i = (this.i ++);
  goto L_2;
  return this.getCodePoint();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=2 bc=271B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: t, this
function {
  this = this;
  let t;
  t = this.string.slice(this.i).match(new RegExp("^(([a-z]+) ?|[\\uD800-\\uDBFF].|.)"));
  if (!(t)) goto L_dd;
  this.i = (this.i + t[0].length);
  if ((t[2])) goto L_10e;
  return t[1];
  this.i = (this.i ++);
  return " ";
}

// fn <atom:0>  args=2 vars=8 closure=1 cpool=0 bc=943B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t, e
// locals: t#1, e#1, t#2, e#2, s, this
// closure: i
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_14;
  e;
  e = false;
  e#1 = false;
  let s;
  if (!((this.GetNext() === ""))) goto L_9f;
  if (!(!e)) goto L_9d;
  throw new i.default("MissingArgFor", "Missing argument for %1", this.currentCS);
  return null;
  if (!((this.GetNext() === "}"))) goto L_e1;
  if (!(!e)) goto L_df;
  throw new i.default("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
  return null;
  if (!((this.GetNext() === "\"))) goto L_144;
  this.i = (this.i ++);
  return ("\" + this.GetCS());
  if (!((this.GetNext() === "{"))) goto L_351;
  let e#2;
  let t#2;
  this.i = (this.i ++);
  t#2 = (this.i ++);
  e#2 = 1;
  if (!((this.i < this.string.length))) goto L_31e;
  this.i = <this.i_new>;
  if (!((this.string.charAt((this.i++)) === "\"))) goto L_282;
  this.i = (this.i ++);
  goto L_31a;
  if (!((this.string.charAt((this.i++)) === "{"))) goto L_296;
  e#2 = <e#2_new>;
  (e#2++);
  goto L_31a;
  if (!((this.string.charAt((this.i++)) === "}"))) goto L_31a;
  e#2 = (e#2 --);
  if (!((0 === (e#2 --)))) goto L_31a;
  return this.string.slice(t#2, (this.i - 1));   // tail call
  this.string.charAt((this.i++));
  goto L_187;
  throw new i.default("MissingCloseBrace", "Missing close brace");
  this.GetNext();
  s = this.getCodePoint();
  this.i = (this.i + s.length);
  return s;
}

// fn <atom:0>  args=3 vars=10 closure=1 cpool=0 bc=759B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t, e, s
// locals: t#1, e#1, s#1, r, n, o, this
// closure: i
function {
  this = this;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_19;
  s;
  s = false;
  s#1 = false;
  let o;
  let n;
  let r;
  if (!(("[" !== this.GetNext()))) goto L_53;
  return e;
  this.i = (this.i ++);
  r = (this.i ++);
  n = 0;
  o = 0;
  if (!((this.i < this.string.length))) goto L_2a1;
  this.i = <this.i_new>;
  if (!((this.string.charAt((this.i++)) === "{"))) goto L_15e;
  n = <n_new>;
  (n++);
  goto L_29d;
  if (!((this.string.charAt((this.i++)) === "\"))) goto L_197;
  this.i = (this.i ++);
  goto L_29d;
  if (!((this.string.charAt((this.i++)) === "}"))) goto L_1e6;
  n = <n_new>;
  if (!(((n--) <= 0))) goto L_29d;
  throw new i.default("ExtraCloseLooking", "Extra close brace while looking for %1", "']'");
  if (!((this.string.charAt((this.i++)) === "["))) goto L_203;
  if (!((0 === n))) goto L_1ff;
  o = <o_new>;
  (o++);
  goto L_29d;
  if (!((this.string.charAt((this.i++)) === "]"))) goto L_29d;
  if (!((0 === n))) goto L_29d;
  if ((!s)) goto L_224;
  if (!((0 === o))) goto L_295;
  return this.string.slice(r, (this.i - 1));   // tail call
  o = <o_new>;
  (o--);
  this.string.charAt((this.i++));
  goto L_88;
  throw new i.default("MissingCloseBracket", "Could not find closing ']' for argument to %1", this.currentCS);
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=623B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: e, s
// locals: e#1, s#1, r, this
// closure: t, i
function {
  this = this;
  let s#1;
  let e#1;
  e#1 = e;
  if (!((s === undefined))) goto L_13;
  s;
  s = false;
  s#1 = false;
  let r;
  r = this.GetNext();
  this.i = (this.i + r.length);
  if (!((this.i <= this.string.length))) goto L_21a;
  if (!(("\" === r))) goto L_f3;
  r = (r + this.GetCS());
  goto L_182;
  // [栈深重同步 1 -> 0]
  if (!(("{" === r))) goto L_182;
  if (!(s)) goto L_182;
  this.i = (this.i --);
  r = this.GetArgument(e).trim();
  this.GetArgument(e).trim();
  if (!(this.contains(t.HandlerType.DELIMITER, r))) goto L_21a;
  return this.convertDelimiter(r);   // tail call
  throw new i.default("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS);
}

// fn <atom:0>  args=1 vars=9 closure=2 cpool=0 bc=582B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t
// locals: s, i, r, t#1, s#1, i#1, r#1, this
// closure: e, i
function {
  this = this;
  if (!(("{" === this.GetNext()))) goto L_d4;
  let r;
  let i;
  let s;
  s = this.GetArgument(t);
  if (((undefined === undefined))) goto L_76;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_c4;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_6a;
  // [栈深重同步 1 -> 0]
  if (!(i)) goto L_1f0;
  return (i + r);
  let r#1;
  let i#1;
  let s#1;
  let t#1;
  t#1 = this.string.slice(this.i);
  if (((undefined === undefined))) goto L_163;
  const _it2 = undefined;
  <done(_it2)>;
  s#1 = <value(_it2)>;
  <done(_it2)>;
  i#1 = <value(_it2)>;
  <done(_it2)>;
  r#1 = <value(_it2)>;
  goto L_1b3;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_150;
  // [栈深重同步 1 -> 0]
  if (!(s#1)) goto L_1f0;
  this.i = (this.i + r#1);
  return (s#1 + i#1);
  throw new i.default("MissingDimOrUnits", "Missing dimension or its units for %1", this.currentCS);
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=682B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t, e
// locals: s, r, t#1, n, this
// closure: i
function {
  this = this;
  let r;
  let s;
  if (!(this.nextIsSpace())) goto L_60;
  this.i = (this.i ++);
  goto L_9;
  s = this.i;
  r = 0;
  if (!((this.i < this.string.length))) goto L_253;
  let n;
  let t#1;
  t#1 = this.i;
  n = this.GetNext();
  this.i = (this.i + n.length);
  if (!((n === "\"))) goto L_192;
  n = (n + this.GetCS());
  (n + this.GetCS());
  goto L_1f1;
  if (!((n === "{"))) goto L_1a5;
  r = <r_new>;
  (r++);
  goto L_1f1;
  if (!((n === "}"))) goto L_1f1;
  if (!((0 === r))) goto L_1e9;
  throw new i.default("ExtraCloseLooking", "Extra close brace while looking for %1", e);
  r = <r_new>;
  (r--);
  n;
  if (!((0 === r))) goto L_86;
  if (!((n === e))) goto L_86;
  return this.string.slice(s, t#1);   // tail call
  throw new i.default("TokenNotFoundForCommand", "Could not find %1 for %2", e, this.currentCS);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=184B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t
// locals: this
// closure: TexParser
function {
  this = this;
  return new TexParser(this.GetArgument(t), this.stack.env, this.configuration).mml();   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=185B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t, e
// locals: this
// closure: TexParser
function {
  this = this;
  return new TexParser(this.GetUpTo(t, e), this.stack.env, this.configuration).mml();   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=325B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: s
// locals: r, this
// closure: e, t, i
function {
  this = this;
  let r;
  r = e.UnitUtil.trimSpaces(this.GetArgument(s));
  if (!(("" === r))) goto L_7d;
  return null;
  if (!(this.contains(t.HandlerType.DELIMITER, r))) goto L_f0;
  return r;
  throw new i.default("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=106B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: t, this
function {
  this = this;
  let t;
  t = ("*" === this.GetNext());
  if (!(t)) goto L_65;
  this.i = <this.i_new>;
  (this.i++);
  return t;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=424B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t, e
// locals: s, this
function {
  this = this;
  e = ...1;
  let s;
  // append([t], 1, e)
  e;
  s = this.configuration.nodeFactory.create.apply(this.configuration.nodeFactory, [t]);
  if (!(s.isToken)) goto L_1a3;
  if (!(s.attributes.hasExplicit("mathvariant"))) goto L_1a3;
  if (!(("-" === s.attributes.get("mathvariant").charAt(0)))) goto L_1a3;
  s.setProperty("ignore-variant", true);
  return s;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=91B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t
function {
  if (!(t.match(new RegExp("(?:^|[^\\\\])(?:\\\\\\\\)*\\\\\\s+$")))) goto L_58;
  goto L_59;
  // [栈深重同步 2 -> 1]
  return (t.trim() + "");
}

// fn <atom:0>  args=2 vars=10 closure=1 cpool=0 bc=2538B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t, e
// locals: s, i, r, n, h, t#1, t#2, this
// closure: o
function {
  this = this;
  let h;
  let n;
  let r;
  let i;
  let s;
  s = this.stack.Prev(true);
  if (!(!s)) goto L_63;
  return;
  i = o.TexConstant.Attr.LATEX;
  r = s.attributes.get(i);
  n = s.attributes.get(o.TexConstant.Attr.LATEXITEM);
  if (!((undefined !== n))) goto L_26a;
  if ((r)) goto L_268;
  if ((("}" === t))) goto L_1ed;
  if (!(("}" === n))) goto L_21a;
  goto L_268;
  // [栈深重同步 1 -> 0]
  s.attributes.set(i, n);
  return;
  if (!((e < this.saveI))) goto L_2b6;
  goto L_2b7;
  // [栈深重同步 1 -> 0]
  e = e;
  if (!((e !== this.i))) goto L_36f;
  goto L_370;
  // [栈深重同步 3 -> 2]
  h = this.trimTex(t);
  if (!(h)) goto L_9e9;
  if (!((h !== r))) goto L_9e9;
  if ((("\" !== t))) goto L_39d;
  if (!(("\" !== h))) goto L_9e9;
  if ((("_" === h))) goto L_3b8;
  if (!(("^" === h))) goto L_3ed;
  s.setProperty("sub-sup", h);
  goto L_99a;
  if (!((s.getProperty("sub-sup") === "^"))) goto L_6be;
  if (!(s.childNodes[2])) goto L_58f;
  if (!(("}" === h))) goto L_4ac;
  goto L_58f;
  // [栈深重同步 2 -> 1]
  if ((s.childNodes[2].attributes.hasExplicit(i))) goto L_58f;
  s.childNodes[2].attributes.set(i, h);
  if (!(s.childNodes[1])) goto L_68c;
  let t#1;
  t#1 = s.childNodes[1].attributes.get(i);
  this.composeLatex(s, "_".concat(t#1, "^"), 0, 2);
  s.getProperty("sub-sup");
  return;
  // [栈深重同步 0 -> 1]
  this.composeLatex(s, "^", 0, 2);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "_"))) goto L_963;
  if (!(s.childNodes[1])) goto L_834;
  if (!(("}" === h))) goto L_751;
  goto L_834;
  // [栈深重同步 2 -> 1]
  if ((s.childNodes[1].attributes.hasExplicit(i))) goto L_834;
  s.childNodes[1].attributes.set(i, h);
  if (!(s.childNodes[2])) goto L_931;
  let t#2;
  t#2 = s.childNodes[2].attributes.get(i);
  this.composeLatex(s, "^".concat(t#2, "_"), 0, 1);
  return;
  // [栈深重同步 0 -> 1]
  this.composeLatex(s, "_", 0, 1);
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!(("}" === h))) goto L_99a;
  this.composeBraces(s);
  return;
  s.attributes.set(i, h);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=0 bc=492B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t, e, s, i
// locals: r, n
// closure: o
function {
  let n;
  let r;
  if ((!t.childNodes[s])) goto L_54;
  if (!(!t.childNodes[i])) goto L_57;
  return;
  r = o.TexConstant.Attr.LATEX;
  if ((t.childNodes[s].attributes.get(r))) goto L_12f;
  n = (("" + e) + t.childNodes[i].attributes.get(r));
  t.attributes.set(r, n);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=266B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t
// locals: e, this
// closure: o
function {
  this = this;
  let e;
  e = this.composeBracedContent(t);
  t.attributes.set(o.TexConstant.Attr.LATEX, "{".concat(e, "}"));
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=4 bc=445B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: t
// locals: e, s, i, t#1
// closure: o
function {
  let s;
  let e;
  if (!((t.childNodes[0] == null))) goto L_32;
  t.childNodes[0];
  goto L_53;
  if ((undefined.childNodes)) goto L_5a;
  e = [];
  s = "";
  let i;
  for (const i of e) {
    let t#1;
    if (!((i == null))) goto L_77;
    i;
    goto L_12b;
    if (!((undefined.attributes == null))) goto L_a1;
    undefined.attributes;
    goto L_12b;
    if ((undefined.get(o.TexConstant.Attr.LATEX))) goto L_130;
    t#1 = "";
    if (!(t#1)) goto L_1af;
    if (!(s)) goto L_1a7;
    if (!(s.match(new RegExp("[a-zA-Z]$")))) goto L_1a7;
    if (!(t#1.match(new RegExp("^[a-zA-Z]")))) goto L_1a7;
    goto L_1aa;
    // [栈深重同步 5 -> 4]
    s = (s + t#1);
    (s + t#1);
  }
  return s;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=34 bc=446B file=math_jax/src/mathjax_src/input/tex/TexParser
// args: require, module, exports
// locals: t, e, s, i, r, n, o, TexParser, <class_fields_init>, TexParser#1
function {
  let TexParser#1;
  let o;
  let n;
  let r;
  let i;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  t = require("./HandlerTypes");
  e = require("./UnitUtil");
  s = require("./Stack");
  i = require("./TexError");
  r = require("../../core/MmlTree/MmlNode");
  n = require("./StackItem");
  o = require("./TexConstants");
  let TexParser;
  let <class_fields_init>;
  class TexParser extends undefined { ... }
  <proto:TexParser>.options = function <atom:0>;
  <proto:TexParser>.itemFactory = function <atom:0>;
  <proto:TexParser>.tags = function <atom:0>;
  <proto:TexParser>.string = function <atom:0>;
  <proto:TexParser>.string = function <atom:0>;
  <proto:TexParser>.parse = function <atom:0>;
  <proto:TexParser>.lookup = function <atom:0>;
  <proto:TexParser>.contains = function <atom:0>;
  <proto:TexParser>.toString = function <atom:0>;
  <proto:TexParser>.Parse = function <atom:0>;
  <proto:TexParser>.Push = function <atom:0>;
  <proto:TexParser>.PushAll = function <atom:0>;
  <proto:TexParser>.mml = function <atom:0>;
  <proto:TexParser>.convertDelimiter = function <atom:0>;
  <proto:TexParser>.getCodePoint = function <atom:0>;
  <proto:TexParser>.nextIsSpace = function <atom:0>;
  <proto:TexParser>.GetNext = function <atom:0>;
  <proto:TexParser>.GetCS = function <atom:0>;
  <proto:TexParser>.GetArgument = function <atom:0>;
  <proto:TexParser>.GetBrackets = function <atom:0>;
  <proto:TexParser>.GetDelimiter = function <atom:0>;
  <proto:TexParser>.GetDimen = function <atom:0>;
  <proto:TexParser>.GetUpTo = function <atom:0>;
  <proto:TexParser>.ParseArg = function <atom:0>;
  <proto:TexParser>.ParseUpTo = function <atom:0>;
  <proto:TexParser>.GetDelimiterArg = function <atom:0>;
  <proto:TexParser>.GetStar = function <atom:0>;
  <proto:TexParser>.create = function <atom:0>;
  <proto:TexParser>.trimTex = function <atom:0>;
  <proto:TexParser>.updateResult = function <atom:0>;
  <proto:TexParser>.composeLatex = function <atom:0>;
  <proto:TexParser>.composeBraces = function <atom:0>;
  <proto:TexParser>.composeBracedContent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TexParser>;
  TexParser = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc TexParser
  TexParser#1 = function <atom:0>;
  exports.default = TexParser#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/TexParser
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
