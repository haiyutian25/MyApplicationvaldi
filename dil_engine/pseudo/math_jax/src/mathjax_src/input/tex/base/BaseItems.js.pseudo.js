// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=53B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t, e
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
  this.global = e;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "start";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=445B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: t#1, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(t.isKind("stop"))) goto L_1b0;
  let t#1;
  t#1 = this.toMml();
  if ((this.global.isInner)) goto L_158;
  t#1 = this.factory.configuration.tags.finalize(t#1, this.env);
  this.factory.configuration.tags.finalize(t#1, this.env);
  return [[this.factory.create("mml", t#1)], true];
  return super["checkItem"](t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "stop";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "open";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=291B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, s, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(t.isKind("close"))) goto L_116;
  let s;
  let e;
  e = this.toMml();
  s = this.create("node", "TeXAtom", [e]);
  t.addLatexItem(s);
  return [[this.factory.create("mml", s)], true];
  return super["checkItem"](t);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "close";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "null";
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "prime";
}

// fn <atom:0>  args=1 vars=7 closure=1 cpool=0 bc=1038B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, s, r, i, n, this
// closure: a
function {
  this = this;
  let n;
  let i;
  let r;
  let s;
  let e;
  if (((undefined === undefined))) goto L_23;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  goto L_4d;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_17;
  // [栈深重同步 1 -> 0]
  if ((a.default.isType(e, "msubsup"))) goto L_f1;
  if (!(a.default.isType(e, "msup"))) goto L_165;
  r = !a.default.getChildAt(e, e.sup);
  if ((a.default.isType(e, "munderover"))) goto L_20a;
  if (!(a.default.isType(e, "mover"))) goto L_2d6;
  if (!(!a.default.getChildAt(e, e.over))) goto L_2d6;
  i = !a.default.getProperty(e, "subsupOK");
  if (!(!r)) goto L_35e;
  if (!(!i)) goto L_35e;
  if (!(e.getProperty("movesupsub"))) goto L_343;
  goto L_348;
  // [栈深重同步 4 -> 3]
  return [[this.create("node", "msup", [e, s]), t], true];
  if (!(r)) goto L_389;
  goto L_3ad;
  // [栈深重同步 1 -> 0]
  n = e.over;
  a.default.setChild(e, n, s);
  return [[e, t], true];
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "subsup";
}

// fn <atom:0>  args=1 vars=7 closure=3 cpool=0 bc=1294B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, s, e#1, i, this, <home_object>
// closure: o, a, r
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let s;
  let e;
  if ((t.isKind("open"))) goto L_68;
  if (!(t.isKind("left"))) goto L_b0;
  return o.BaseItem.success;
  e = this.First;
  s = this.getProperty("position");
  if (!(t.isKind("mml"))) goto L_463;
  if (!(this.getProperty("primes"))) goto L_2ed;
  if (!((2 !== s))) goto L_1e1;
  a.default.setChild(e, 2, this.getProperty("primes"));
  goto L_2ed;
  let e#1;
  a.default.setProperty(this.getProperty("primes"), "variantForm", true);
  e#1 = this.create("node", "mrow", [this.getProperty("primes"), t.First]);
  t.First = e#1;
  a.default.setChild(e, s, t.First);
  if (!((null != this.getProperty("movesupsub")))) goto L_40a;
  a.default.setProperty(e, "movesupsub", this.getProperty("movesupsub"));
  return [[this.factory.create("mml", e)], true];
  super["checkItem"].call(this, t);
  i = this.getErrors(["", "sub", "sup"][s]);
  // append([i[0], i[1]], 2, i.splice(2))
  i.splice(2);
  throw r.default.apply(r.default, [i[0], i[1]]);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=90B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
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
  this.setProperty("name", "\over");
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "over";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=0 bc=1209B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, this, <home_object>
// closure: r, a, i, h
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(t.isKind("over"))) goto L_89;
  throw new r.default("AmbiguousUseOf", "Ambiguous use of %1", t.getName());
  if (!(t.isClose)) goto L_4ac;
  let e;
  e = this.create("node", "mfrac", [this.getProperty("num"), this.toMml(false)]);
  if (!((null != this.getProperty("thickness")))) goto L_1e1;
  a.default.setAttribute(e, "linethickness", this.getProperty("thickness"));
  if ((this.getProperty("ldelim"))) goto L_23a;
  if (!(this.getProperty("rdelim"))) goto L_37a;
  a.default.setProperty(e, "withDelims", true);
  e = i.ParseUtil.fixedFence(this.factory.configuration, this.getProperty("ldelim"), e, this.getProperty("rdelim"));
  i.ParseUtil.fixedFence(this.factory.configuration, this.getProperty("ldelim"), e, this.getProperty("rdelim"));
  e.attributes.set(h.TexConstant.Attr.LATEXITEM, this.getProperty("name"));
  return [[this.factory.create("mml", e), t], true];
  return super["checkItem"](t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=139B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this
function {
  this = this;
  return (((("over[" + this.getProperty("num")) + " / ") + this.nodes.join("; ")) + "]");
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=86B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t, e
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
  this.setProperty("delim", e);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "left";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=1 vars=9 closure=3 cpool=0 bc=1670B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, s, r, n, e#1, r#1, this, <home_object>
// closure: i, h, s
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(t.isKind("right"))) goto L_408;
  let n;
  let r;
  let s;
  let e;
  e = i.ParseUtil.fenced(this.factory.configuration, this.getProperty("delim"), this.toMml(), t.getProperty("delim"), "", t.getProperty("color"));
  s = e.childNodes[0];
  r = e.childNodes[(e.childNodes.length - 1)];
  n = this.factory.create("mml", e);
  this.addLatexItem(s, "\left");
  t.addLatexItem(r, "\right");
  n.Peek()[0].attributes.set(h.TexConstant.Attr.LATEXITEM, ("\left" + t.startStr.slice(this.startI, t.stopI)));
  return [[n], true];
  if (!(t.isKind("middle"))) goto L_677;
  let r#1;
  let e#1;
  e#1 = {stretchy: true};
  if (!(t.getProperty("color"))) goto L_4ac;
  e#1.mathcolor = t.getProperty("color");
  t.getProperty("color");
  r#1 = this.create("token", "mo", e#1, t.getProperty("delim"));
  t.addLatexItem(r#1, "\middle");
  this.Push(this.create("node", "TeXAtom", [], {texClass: s.TEXCLASS.CLOSE}), r#1, this.create("node", "TeXAtom", [], {texClass: s.TEXCLASS.OPEN}));
  this.env = {};
  return [[this], true];
  return super["checkItem"](t);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=137B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t, e, s
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
  this.setProperty("delim", e);
  if (!(s)) goto L_84;
  this.setProperty("color", s);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "middle";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=137B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t, e, s
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
  this.setProperty("delim", e);
  if (!(s)) goto L_84;
  this.setProperty("color", s);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "right";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "break";
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=132B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t, e, s
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
  this.setProperty("linebreak", e);
  this.setProperty("insert", s);
  return this;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=697B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, s, s#1, this
// closure: a
function {
  this = this;
  let s#1;
  let e;
  e = this.getProperty("linebreak");
  if (!(t.isKind("mml"))) goto L_228;
  let s;
  s = t.First;
  if (!(s.isKind("mo"))) goto L_228;
  if (!((a.default.getOp(s) == null))) goto L_111;
  a.default.getOp(s);
  goto L_13c;
  if (!((undefined[3] == null))) goto L_11b;
  undefined[3];
  goto L_13c;
  if ((undefined.linebreakstyle)) goto L_190;
  if (!(("after" !== a.default.getAttribute(s, "linebreakstyle")))) goto L_1f1;
  a.default.setAttribute(s, "linebreak", e);
  return [[t], true];
  if (!(!this.getProperty("insert"))) goto L_228;
  return [[t], true];
  s#1 = this.create("token", "mspace", {linebreak: e});
  return [[this.factory.create("mml", s#1), t], true];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "begin";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=568B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(t.isKind("end"))) goto L_1a7;
  let e;
  if (!((t.getName() !== this.getName()))) goto L_101;
  throw new r.default("EnvBadEnd", "\begin{%1} ended with \end{%2}", this.getName(), t.getName());
  e = this.toMml();
  t.addLatexItem(e);
  return [[this.factory.create("mml", e)], true];
  if (!(t.isKind("stop"))) goto L_22b;
  throw new r.default("EnvMissingEnd", "Missing \end{%1}", this.getName());
  return super["checkItem"](t);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "end";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "style";
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=270B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  if (!(!t.isClose)) goto L_3a;
  return super["checkItem"](t);   // tail call
  e = this.create("node", "mstyle", this.nodes, this.getProperty("styles"));
  return [[this.factory.create("mml", e), t], true];
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "position";
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=820B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(t.isClose)) goto L_81;
  throw new r.default("MissingBoxFor", "Missing box for %1", this.getName());
  if (!(t.isFinal)) goto L_327;
  let e;
  e = t.toMml();
  if (!((this.getProperty("move") === "vertical"))) goto L_226;
  e = this.create("node", "mpadded", [e], {height: this.getProperty("dh"), depth: this.getProperty("dd"), voffset: this.getProperty("dh")});
  this.create("node", "mpadded", [e], {height: this.getProperty("dh"), depth: this.getProperty("dd"), voffset: this.getProperty("dh")});
  return [[this.factory.create("mml", e)], true];
  if (!((this.getProperty("move") === "horizontal"))) goto L_326;
  return [[this.factory.create("mml", this.getProperty("left")), t, this.factory.create("mml", this.getProperty("right"))], true];
  this.getProperty("move");
  return super["checkItem"](t);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "cell";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "mml";
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "fn";
}

// fn <atom:0>  args=1 vars=6 closure=4 cpool=0 bc=1284B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: r, e, s, this, <home_object>
// closure: o, a, s, e
function {
  <home_object> = <special_object 4>;
  this = this;
  let r;
  r = this.First;
  if (!(r)) goto L_4f6;
  if (!(t.isOpen)) goto L_9e;
  return o.BaseItem.success;
  if (!(!t.isKind("fn"))) goto L_3c9;
  let s;
  let e;
  e = t.First;
  if ((!t.isKind("mml"))) goto L_12a;
  if (!(!e)) goto L_139;
  return [[r, t], true];
  if (!(a.default.isType(e, "mstyle"))) goto L_252;
  if (!(e.childNodes.length)) goto L_252;
  if ((a.default.isType(e.childNodes[0].childNodes[0], "mspace"))) goto L_2a6;
  if (!(a.default.isType(e, "mspace"))) goto L_2b5;
  return [[r, t], true];
  if (!(a.default.isEmbellished(e))) goto L_353;
  e = a.default.getCoreMO(e);
  a.default.getCoreMO(e);
  s = a.default.getForm(e);
  if (!((null != s))) goto L_3c9;
  if (!([0, 0, 1, 1, 0, 1, 1, 0, 0, 0][s[2]])) goto L_3c9;
  return [[r, t], true];
  if (!(r.isKind("TeXAtom"))) goto L_42a;
  if (!(r.isEmpty)) goto L_42a;
  return [[r, t], true];
  return [[r, this.create("token", "mo", {texClass: s.TEXCLASS.NONE}, e.entities.ApplyFunction), t], true];
  return super["checkItem"](t);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=138B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, t
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.remap = t.MapHandler.getMap("not_remap");
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "not";
}

// fn <atom:0>  args=1 vars=7 closure=3 cpool=0 bc=1659B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, r, i, n, l, this
// closure: o, a, s
function {
  this = this;
  let l;
  let n;
  let i;
  let r;
  let e;
  e = undefined;
  r = undefined;
  i = undefined;
  if ((t.isKind("open"))) goto L_70;
  if (!(t.isKind("left"))) goto L_b8;
  return o.BaseItem.success;
  if (!(t.isKind("mml"))) goto L_53c;
  if ((a.default.isType(t.First, "mo"))) goto L_23f;
  if ((a.default.isType(t.First, "mi"))) goto L_23f;
  if (!(a.default.isType(t.First, "mtext"))) goto L_53c;
  e = t.First;
  t.First;
  r = a.default.getText(e);
  a.default.getText(e);
  if (!((1 === r.length))) goto L_53c;
  if (!(!a.default.getProperty(e, "movesupsub"))) goto L_53c;
  if (!((1 === a.default.getChildren(e).length))) goto L_53c;
  if (!(this.remap.contains(r))) goto L_4ab;
  i = this.create("text", this.remap.lookup(r).char);
  this.create("text", this.remap.lookup(r).char);
  goto L_531;
  // [栈深重同步 1 -> 0]
  i = this.create("text", "̸");
  this.create("text", "̸");
  a.default.appendChildren(e, [i]);
  return [[t], true];
  i = this.create("text", "⧸");
  this.create("text", "⧸");
  n = this.create("node", "mtext", [], {}, i);
  l = this.create("node", "mpadded", [n], {width: 0});
  e = this.create("node", "TeXAtom", [l], {texClass: s.TEXCLASS.REL});
  this.create("node", "TeXAtom", [l], {texClass: s.TEXCLASS.REL});
  return [[e, t], true];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "nonscript";
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=758B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, e#1, this
// closure: a
function {
  this = this;
  if (!(t.isKind("mml"))) goto L_2ec;
  if (!((1 === t.Size()))) goto L_2ec;
  let e;
  e = t.First;
  if (!(e.isKind("mstyle"))) goto L_17c;
  if (!(e.notParent)) goto L_17c;
  e = a.default.getChildren(a.default.getChildren(e)[0])[0];
  a.default.getChildren(a.default.getChildren(e)[0])[0];
  if (!(e.isKind("mspace"))) goto L_2ec;
  if (!((e !== t.First))) goto L_25d;
  let e#1;
  e#1 = this.create("node", "mrow", [t.Pop()]);
  t.Push(e#1);
  this.factory.configuration.addNode("nonscript", t.First);
  return [[t], true];
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "dots";
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=0 bc=738B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, r, t#1, this
// closure: o, a, s
function {
  this = this;
  let r;
  let e;
  if ((t.isKind("open"))) goto L_60;
  if (!(t.isKind("left"))) goto L_a8;
  return o.BaseItem.success;
  e = this.getProperty("ldots");
  r = t.First;
  if (!(t.isKind("mml"))) goto L_2d5;
  if (!(a.default.isEmbellished(r))) goto L_2d5;
  let t#1;
  t#1 = a.default.getTexClass(a.default.getCoreMO(r));
  if (!((t#1 !== s.TEXCLASS.BIN))) goto L_2a2;
  if (((t#1 !== s.TEXCLASS.REL))) goto L_2d4;
  e = this.getProperty("cdots");
  this.getProperty("cdots");
  return [[e, t], true];
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=240B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.table = [];
  this.row = [];
  this.frame = [];
  this.hfill = [];
  this.arraydef = {};
  this.cstart = [];
  this.cend = [];
  this.cextra = [];
  this.atEnd = false;
  this.ralign = [];
  this.breakAlign = {cell: "", row: "", table: ""};
  this.templateSubs = 0;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "array";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return false;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=961B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, this, <home_object>
// closure: o, r
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(t.isClose)) goto L_3b4;
  if (!(!t.isKind("over"))) goto L_3b4;
  let e;
  if (!(t.getProperty("isEntry"))) goto L_146;
  this.EndEntry();
  this.clearEnv();
  this.StartEntry();
  return o.BaseItem.fail;
  if (!(t.getProperty("isCR"))) goto L_253;
  this.EndEntry();
  this.EndRow();
  this.clearEnv();
  this.StartEntry();
  return o.BaseItem.fail;
  this.EndTable();
  this.clearEnv();
  e = this.factory.create("mml", this.createMml());
  if (!(this.getProperty("requireClose"))) goto L_3a7;
  if (!(t.isKind("close"))) goto L_374;
  return [[e], true];
  throw new r.default("MissingCloseBrace", "Missing close brace");
  return [[e, t], true];
  return super["checkItem"](t);   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=1214B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: t, e, this
// closure: a, i
function {
  this = this;
  let e;
  let t;
  t = this.arraydef.scriptlevel;
  delete "scriptlevel";
  e = this.create("node", "mtable", this.table, this.arraydef);
  if (!(t)) goto L_11e;
  e.setProperty("smallmatrix", true);
  if (!(this.breakAlign.table)) goto L_1fc;
  a.default.setAttribute(e, "data-break-align", this.breakAlign.table);
  if (!(this.getProperty("arrayPadding"))) goto L_2fa;
  a.default.setAttribute(e, "data-frame-styles", "");
  a.default.setAttribute(e, "framespacing", this.getProperty("arrayPadding"));
  e = this.handleFrame(e);
  this.handleFrame(e);
  if (!((undefined !== t))) goto L_373;
  e = this.create("node", "mstyle", [e], {scriptlevel: t});
  this.create("node", "mstyle", [e], {scriptlevel: t});
  if ((this.getProperty("open"))) goto L_3cc;
  if (!(this.getProperty("close"))) goto L_4b9;
  e = i.ParseUtil.fenced(this.factory.configuration, this.getProperty("open"), e, this.getProperty("close"));
  i.ParseUtil.fenced(this.factory.configuration, this.getProperty("open"), e, this.getProperty("close"));
  return e;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=20B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t, <atom:0>
// locals: e
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  e = <value(_it1)>;
  if (!((e === t))) goto L_12;
  return e;
  return "";
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=50B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// closure: e
function {
  if ((e.get(t))) goto L_31;
  return "none";
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=2 bc=899B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, s, r, this
// closure: a, l
function {
  this = this;
  let r;
  let s;
  let e;
  if (!(!this.frame.length)) goto L_33;
  return t;
  e = new Map(this.frame);
  s = this.frame.reduce(function <atom:0>, this.frame[0][1]);
  if (!(s)) goto L_2bb;
  if (!((4 === this.frame.length))) goto L_1a3;
  a.default.setAttribute(t, "frame", s);
  a.default.removeAttribute(t, "data-frame-styles");
  return t;
  if (!(("solid" === s))) goto L_2bb;
  a.default.setAttribute(t, "data-frame-styles", "");
  t = this.create("node", "menclose", [t], {notation: Array.from(e.keys()).join(" "), data-padding: 0});
  return this.create("node", "menclose", [t], {notation: Array.from(e.keys()).join(" "), data-padding: 0});
  r = l.TRBL.map(function <atom:0>).join(" ");
  a.default.setAttribute(t, "data-frame-styles", r);
  return t;
}

// fn <atom:0>  args=0 vars=11 closure=2 cpool=0 bc=1373B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: t, e, s, n, a, o, l, h, d, c, this
// closure: i, r
function {
  this = this;
  let c;
  let d;
  let h;
  let l;
  let o;
  let a;
  let n;
  let s;
  let e;
  let t;
  t = this.row.length;
  e = this.cstart[t];
  s = this.cend[t];
  n = this.ralign[t];
  a = this.cextra;
  if ((e)) goto L_10c;
  if ((s)) goto L_10c;
  if ((n)) goto L_10c;
  if ((a[t])) goto L_10c;
  if (!(!a[(t + 1)])) goto L_110;
  return;
  if (((undefined === undefined))) goto L_12d;
  const _it1 = undefined;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  l = <value(_it1)>;
  <done(_it1)>;
  h = <value(_it1)>;
  <done(_it1)>;
  d = <value(_it1)>;
  goto L_156;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_115;
  // [栈深重同步 1 -> 0]
  if ((!a[t])) goto L_1a4;
  if (!(this.atEnd)) goto L_193;
  if ((!a[(t + 1)])) goto L_1a4;
  e = (e + "&");
  (e + "&");
  if (!(("&" !== h))) goto L_260;
  if ((!!l.trim())) goto L_221;
  if ((t)) goto L_21f;
  if (!(h)) goto L_21f;
  d = !!("\end" !== h.substring(0, 4));
  !!("\end" !== h.substring(0, 4));
  if (!(a[(t + 1)])) goto L_260;
  if (!(!a[t])) goto L_260;
  if ((s)) goto L_247;
  s = ("" + "&");
  ("" + "&");
  this.atEnd = true;
  true;
  if (!(!d)) goto L_26e;
  if (!(!o)) goto L_26e;
  return;
  c = this.parser;
  if (!(d)) goto L_474;
  if (!(e)) goto L_2f7;
  l = i.ParseUtil.addArgs(c, e, l);
  i.ParseUtil.addArgs(c, e, l);
  if (!(s)) goto L_354;
  l = i.ParseUtil.addArgs(c, l, s);
  i.ParseUtil.addArgs(c, l, s);
  if (!(n)) goto L_393;
  l = (("\text{" + l.trim()) + "}");
  (("\text{" + l.trim()) + "}");
  if ((e)) goto L_3a5;
  if ((s)) goto L_3a5;
  if (!(n)) goto L_474;
  this.templateSubs = (this.templateSubs ++);
  if (!(((this.templateSubs ++) > c.configuration.options.maxTemplateSubtitutions))) goto L_474;
  throw new r.default("MaxTemplateSubs", "Maximum template substitutions exceeded; is there an invalid use of \\ in the template?");
  if (!(o)) goto L_4d0;
  l = i.ParseUtil.addArgs(c, o, l);
  i.ParseUtil.addArgs(c, o, l);
  c.string = i.ParseUtil.addArgs(c, l, c.string);
  c.i = 0;
  return;
}

// fn <atom:0>  args=0 vars=10 closure=0 cpool=4 bc=823B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: t, e, s, r, i, n, a, e#1, a#1, this
function {
  this = this;
  let a;
  let n;
  let i;
  let r;
  let s;
  let e;
  let t;
  t = this.parser;
  e = new RegExp("^([^]*?)([&{}]|\\\\\\\\|\\\\(?:begin|end)\\s*\\{array\\}|\\\\cr|\\\\)");
  s = undefined;
  r = 0;
  i = 0;
  n = t.i;
  a = ["", "", "", false];
  s = t.string.slice(n).match(e);
  if (!((null !== t.string.slice(n).match(e)))) goto L_333;
  n = (n + s[0].length);
  (n + s[0].length);
  if (!((s[2] === "\"))) goto L_11e;
  n = <n_new>;
  (n++);
  goto L_32f;
  if (!((s[2] === "{"))) goto L_132;
  r = <r_new>;
  (r++);
  goto L_32f;
  if (!((s[2] === "}"))) goto L_150;
  if (!(!r)) goto L_145;
  return a;
  r = <r_new>;
  (r--);
  goto L_32f;
  if (!((s[2] === "\begin{array}"))) goto L_16b;
  if ((r)) goto L_167;
  i = <i_new>;
  (i++);
  goto L_32f;
  if (!((s[2] === "\end{array}"))) goto L_18a;
  if (!(!r)) goto L_18a;
  if (!(i)) goto L_18a;
  i = <i_new>;
  (i--);
  goto L_32f;
  let a#1;
  let e#1;
  if ((r)) goto L_19a;
  if (!(i)) goto L_1a0;
  s[2];
  goto L_79;
  // [栈深重同步 0 -> 1]
  n = (n - s[2].length);
  (n - s[2].length);
  e#1 = t.string.slice(t.i, n).trim();
  a#1 = e#1.match(new RegExp("^(?:\\s*\\\\(?:h(?:dash)?line|hfil{1,3}|rowcolor\\s*\\{.*?\\}))+"));
  if (!(a#1)) goto L_2aa;
  e#1 = e#1.slice(a#1[0].length);
  e#1.slice(a#1[0].length);
  t.string = t.string.slice(n);
  t.i = 0;
  if (!((a#1 == null))) goto L_31a;
  a#1;
  goto L_31c;
  if ((undefined[0])) goto L_321;
  return ["", e#1, s[2], true];
  <?>;
  goto L_79;
  return a;
}

// fn <atom:0>  args=0 vars=7 closure=1 cpool=0 bc=1379B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: t, e, s, r, i, n, this
// closure: a
function {
  this = this;
  let e;
  let t;
  t = this.create("node", "mtd", this.nodes);
  if (!(this.hfill.length)) goto L_22f;
  if (!((0 === this.hfill[0]))) goto L_108;
  a.default.setAttribute(t, "columnalign", "right");
  if (!((this.hfill[(this.hfill.length - 1)] === this.Size()))) goto L_22f;
  if (!(a.default.getAttribute(t, "columnalign"))) goto L_227;
  goto L_22c;
  // [栈深重同步 5 -> 4]
  a.default.setAttribute(t, "columnalign", "left");
  e = this.ralign[this.row.length];
  if (!(e)) goto L_3d5;
  let n;
  let i;
  let r;
  let s;
  if (((undefined === undefined))) goto L_2a3;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_2a9;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_292;
  // [栈深重同步 1 -> 0]
  n = this.create("node", "mpadded", t.childNodes[0].childNodes, {width: r, data-overflow: "auto", data-align: i, data-vertical-align: s});
  n.setProperty("vbox", s);
  t.childNodes[0].childNodes = [];
  t.appendChild(n);
  goto L_4b5;
  if (!(this.breakAlign.cell)) goto L_4b4;
  a.default.setAttribute(t, "data-vertical-align", this.breakAlign.cell);
  this.breakAlign.cell = "";
  this.row.push(t);
  this.Clear();
  this.hfill = [];
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=845B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: t, e, this
// closure: a
function {
  this = this;
  let e;
  let t;
  t = "mtr";
  if (!(this.getProperty("isNumbered"))) goto L_ff;
  if (!((3 === this.row.length))) goto L_ff;
  this.row.unshift(this.row.pop());
  t = "mlabeledtr";
  goto L_163;
  // [栈深重同步 1 -> 0]
  if (!(this.getProperty("isLabeled"))) goto L_163;
  t = "mlabeledtr";
  "mlabeledtr";
  this.setProperty("isLabeled", false);
  e = this.create("node", t, this.row);
  if (!(this.breakAlign.row)) goto L_2bf;
  a.default.setAttribute(e, "data-break-align", this.breakAlign.row);
  this.breakAlign.row = "";
  "";
  this.addLatexItem(e);
  this.table.push(e);
  this.row = [];
  this.atEnd = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=196B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this
function {
  this = this;
  if ((this.Size())) goto L_4e;
  if (!(this.row.length)) goto L_9d;
  this.EndEntry();
  this.EndRow();
  this.checkLines();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=4 bc=999B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: t, t#1, this
function {
  this = this;
  if (!(this.arraydef.rowlines)) goto L_26b;
  let t;
  t = this.arraydef.rowlines.split(new RegExp(" "));
  if (!((t.length === this.table.length))) goto L_1e9;
  this.frame.push(["bottom", t.pop()]);
  if (!(t.length)) goto L_1be;
  this.arraydef.rowlines = t.join(" ");
  goto L_26a;
  // [栈深重同步 1 -> 0]
  goto L_26a;
  // [栈深重同步 2 -> 0]
  if (!((t.length < (this.table.length - 1)))) goto L_26a;
  this.arraydef.rowlines = (this.arraydef.rowlines + " none");
  (this.arraydef.rowlines + " none");
  if (!(this.getProperty("rowspacing"))) goto L_3e6;
  let t#1;
  t#1 = this.arraydef.rowspacing.split(new RegExp(" "));
  if (!((t#1.length < this.table.length))) goto L_38f;
  t#1.push((this.getProperty("rowspacing") + "em"));
  goto L_30a;
  this.arraydef.rowspacing = t#1.join(" ");
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=2 bc=888B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, t#1, s, this
// closure: n
function {
  this = this;
  if (!(this.arraydef.rowspacing)) goto L_377;
  let s;
  let e;
  e = this.arraydef.rowspacing.split(new RegExp(" "));
  if (!(!this.getProperty("rowspacing"))) goto L_16c;
  let t#1;
  t#1 = n.UnitUtil.dimen2em(e[0]);
  this.setProperty("rowspacing", t#1);
  s = this.getProperty("rowspacing");
  if (!((e.length < this.table.length))) goto L_237;
  e.push(n.UnitUtil.em(s));
  goto L_197;
  e[(this.table.length - 1)] = n.UnitUtil.em(Math.max(0, (s + n.UnitUtil.dimen2em(t))));
  this.arraydef.rowspacing = e.join(" ");
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=205B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t, e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  e = ...1;
  this = new new.target(t);
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target(t);
  this.maxrow = 0;
  this.factory.configuration.tags.start(e[0], e[2], e[1]);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "eqnarray";
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=2 bc=411B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: t, this, <home_object>
// closure: i
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  t = this.arraydef.columnalign.split(new RegExp(" "));
  if (!(this.row.length)) goto L_d3;
  if (!(t.length)) goto L_d3;
  goto L_d8;
  // [栈深重同步 2 -> 1]
  if (!(("right" !== "right"))) goto L_18d;
  i.ParseUtil.fixInitialMO(this.factory.configuration, this.nodes);
  super["EndEntry"].call(this);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=557B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: t, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  if (!((this.row.length > this.maxrow))) goto L_80;
  this.maxrow = this.row.length;
  this.row.length;
  t = this.factory.configuration.tags.getTag();
  if (!(t)) goto L_196;
  this.row = [t].concat(this.row);
  this.setProperty("isLabeled", true);
  this.factory.configuration.tags.clearTag();
  super["EndRow"].call(this);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=503B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["EndTable"].call(this);
  this.factory.configuration.tags.end();
  this.extendArray("columnalign", this.maxrow);
  this.extendArray("columnwidth", this.maxrow);
  this.extendArray("columnspacing", (this.maxrow - 1));
  this.extendArray("data-break-align", this.maxrow);
  this.addIndentshift();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=2 bc=327B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t, e
// locals: s, r, this
function {
  this = this;
  let r;
  let s;
  if (!(!this.arraydef[t])) goto L_30;
  return;
  s = this.arraydef[t].split(new RegExp(" "));
  // append([], 0, s)
  s;
  r = [];
  if (!((r.length > 1))) goto L_146;
  if (!((r.length < e))) goto L_cf;
  // append([], 0, s)
  s;
  r.push.apply(r, []);
  goto L_93;
  this.arraydef[t] = r.slice(0, e).join(" ");
  return;
}

// fn <atom:0>  args=0 vars=8 closure=0 cpool=2 bc=630B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: t, e, s, t#1, e#1, r, e#2, this
function {
  this = this;
  let e;
  let t;
  t = this.arraydef.columnalign.split(new RegExp(" "));
  e = "";
  let s;
  for (const s of t.keys()) {
    if (!(("left" === t[s]))) goto L_260;
    if (!((s > 0))) goto L_260;
    let t#1;
    if (!(("center" === e))) goto L_d9;
    goto L_de;
    // [栈深重同步 4 -> 3]
    t#1 = "2em";
    let e#1;
    for (const e#1 of this.table) {
      let r;
      if (!(e#1.isKind("mlabeledtr"))) goto L_167;
      goto L_16a;
      // [栈深重同步 5 -> 4]
      r = e#1.childNodes[s];
      if (!(r)) continue;
      let e#2;
      e#2 = this.create("node", "mstyle", r.childNodes[0].childNodes, {indentshift: t#1});
      r.childNodes[0].childNodes = [];
      r.appendChild(e#2);
    }
    // [栈深重同步 0 -> 3]
    e = t[s];
    t[s];
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "mstyle";
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=99B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t, e, s
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
  this.attrList = e;
  this.setProperty("name", s);
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=275B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(t.isKind("end"))) goto L_106;
  if (!((t.getName() === this.getName()))) goto L_106;
  return [[this.create("node", "mstyle", [this.toMml()], this.attrList)], true];
  return super["checkItem"](t);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=193B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t, e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  e = ...1;
  this = new new.target(t);
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target(t);
  this.factory.configuration.tags.start("equation", true, e[0]);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return "equation";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
function {
  return true;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=680B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: t
// locals: e, s, this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(t.isKind("end"))) goto L_217;
  let s;
  let e;
  e = this.toMml();
  s = this.factory.configuration.tags.getTag();
  this.factory.configuration.tags.end();
  if (!(s)) goto L_20a;
  goto L_20d;
  // [栈深重同步 1 -> 0]
  return [[e, t], true];
  if (!(t.isKind("stop"))) goto L_29b;
  throw new r.default("EnvMissingEnd", "Missing \end{%1}", this.getName());
  return super["checkItem"](t);   // tail call
}

// fn <atom:0>  args=3 vars=91 closure=0 cpool=99 bc=3561B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// args: require, module, exports
// locals: t, e, s, r, i, n, a, o, l, h, StartItem, <class_fields_init>, StartItem#1, StopItem, <class_fields_init>#1, StopItem#1, OpenItem, <class_fields_init>#2, OpenItem#1, CloseItem, <class_fields_init>#3, CloseItem#1, NullItem, <class_fields_init>#4, NullItem#1, PrimeItem, <class_fields_init>#5, PrimeItem#1, SubsupItem, <class_fields_init>#6, SubsupItem#1, OverItem, <class_fields_init>#7, OverItem#1, LeftItem, <class_fields_init>#8, LeftItem#1, Middle, <class_fields_init>#9, Middle#1, RightItem, <class_fields_init>#10, RightItem#1, BreakItem, <class_fields_init>#11, BreakItem#1, BeginItem, <class_fields_init>#12, BeginItem#1, EndItem, <class_fields_init>#13, EndItem#1, StyleItem, <class_fields_init>#14, StyleItem#1, PositionItem, <class_fields_init>#15, PositionItem#1, CellItem, <class_fields_init>#16, CellItem#1, MmlItem, <class_fields_init>#17, MmlItem#1, FnItem, <class_fields_init>#18, FnItem#1, NotItem, <class_fields_init>#19, NotItem#1, NonscriptItem, <class_fields_init>#20, NonscriptItem#1, DotsItem, <class_fields_init>#21, DotsItem#1, ArrayItem, <class_fields_init>#22, ArrayItem#1, EqnArrayItem, <class_fields_init>#23, EqnArrayItem#1, MstyleItem, <class_fields_init>#24, MstyleItem#1, EquationItem, <class_fields_init>#25, EquationItem#1
function {
  let EquationItem#1;
  let MstyleItem#1;
  let EqnArrayItem#1;
  let ArrayItem#1;
  let DotsItem#1;
  let NonscriptItem#1;
  let NotItem#1;
  let FnItem#1;
  let MmlItem#1;
  let CellItem#1;
  let PositionItem#1;
  let StyleItem#1;
  let EndItem#1;
  let BeginItem#1;
  let BreakItem#1;
  let RightItem#1;
  let Middle#1;
  let LeftItem#1;
  let OverItem#1;
  let SubsupItem#1;
  let PrimeItem#1;
  let NullItem#1;
  let CloseItem#1;
  let OpenItem#1;
  let StopItem#1;
  let StartItem#1;
  let h;
  let l;
  let o;
  let a;
  let n;
  let i;
  let r;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.StartItem = undefined;
  exports.StopItem = undefined;
  exports.OpenItem = undefined;
  exports.CloseItem = undefined;
  exports.NullItem = undefined;
  exports.PrimeItem = undefined;
  exports.SubsupItem = undefined;
  exports.OverItem = undefined;
  exports.LeftItem = undefined;
  exports.Middle = undefined;
  exports.RightItem = undefined;
  exports.BreakItem = undefined;
  exports.BeginItem = undefined;
  exports.EndItem = undefined;
  exports.StyleItem = undefined;
  exports.PositionItem = undefined;
  exports.CellItem = undefined;
  exports.MmlItem = undefined;
  exports.FnItem = undefined;
  exports.NotItem = undefined;
  exports.NonscriptItem = undefined;
  exports.DotsItem = undefined;
  exports.ArrayItem = undefined;
  exports.EqnArrayItem = undefined;
  exports.MstyleItem = undefined;
  exports.EquationItem = undefined;
  t = require("../MapHandler");
  e = require("../../../util/Entities");
  s = require("../../../core/MmlTree/MmlNode");
  r = require("../TexError");
  i = require("../ParseUtil");
  n = require("../UnitUtil");
  a = require("../NodeUtil");
  o = require("../StackItem");
  l = require("../../../util/Styles");
  h = require("../TexConstants");
  let StartItem;
  let <class_fields_init>;
  class StartItem extends o.BaseItem { ... }
  <proto:StartItem>.kind = function <atom:0>;
  <proto:StartItem>.isOpen = function <atom:0>;
  <proto:StartItem>.checkItem = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:StartItem>;
  StartItem = function <atom:0>;
  // close_loc <class_fields_init>
  StartItem#1 = function <atom:0>;
  exports.StartItem = StartItem#1;
  let StopItem;
  let <class_fields_init>#1;
  class StopItem extends o.BaseItem { ... }
  <proto:StopItem>.kind = function <atom:0>;
  <proto:StopItem>.isClose = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:StopItem>;
  StopItem = function <atom:0>;
  // close_loc <class_fields_init>#1
  StopItem#1 = function <atom:0>;
  exports.StopItem = StopItem#1;
  let OpenItem;
  let <class_fields_init>#2;
  class OpenItem extends o.BaseItem { ... }
  <proto:OpenItem>.kind = function <atom:0>;
  <proto:OpenItem>.isOpen = function <atom:0>;
  <proto:OpenItem>.checkItem = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:OpenItem>;
  OpenItem = function <atom:0>;
  // close_loc <class_fields_init>#2
  OpenItem#1 = function <atom:0>;
  exports.OpenItem = OpenItem#1;
  OpenItem#1.errors = Object.assign(Object.create(o.BaseItem.errors), {stop: ["ExtraOpenMissingClose", "Extra open brace or missing close brace"]});
  let CloseItem;
  let <class_fields_init>#3;
  class CloseItem extends o.BaseItem { ... }
  <proto:CloseItem>.kind = function <atom:0>;
  <proto:CloseItem>.isClose = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:CloseItem>;
  CloseItem = function <atom:0>;
  // close_loc <class_fields_init>#3
  CloseItem#1 = function <atom:0>;
  exports.CloseItem = CloseItem#1;
  let NullItem;
  let <class_fields_init>#4;
  class NullItem extends o.BaseItem { ... }
  <proto:NullItem>.kind = function <atom:0>;
  <class_fields_init>#4 = undefined;
  <proto:NullItem>;
  NullItem = function <atom:0>;
  // close_loc <class_fields_init>#4
  NullItem#1 = function <atom:0>;
  exports.NullItem = NullItem#1;
  let PrimeItem;
  let <class_fields_init>#5;
  class PrimeItem extends o.BaseItem { ... }
  <proto:PrimeItem>.kind = function <atom:0>;
  <proto:PrimeItem>.checkItem = function <atom:0>;
  <class_fields_init>#5 = undefined;
  <proto:PrimeItem>;
  PrimeItem = function <atom:0>;
  // close_loc <class_fields_init>#5
  PrimeItem#1 = function <atom:0>;
  exports.PrimeItem = PrimeItem#1;
  let SubsupItem;
  let <class_fields_init>#6;
  class SubsupItem extends o.BaseItem { ... }
  <proto:SubsupItem>.kind = function <atom:0>;
  <proto:SubsupItem>.checkItem = function <atom:0>;
  <class_fields_init>#6 = undefined;
  <proto:SubsupItem>;
  SubsupItem = function <atom:0>;
  // close_loc <class_fields_init>#6
  SubsupItem#1 = function <atom:0>;
  exports.SubsupItem = SubsupItem#1;
  SubsupItem#1.errors = Object.assign(Object.create(o.BaseItem.errors), {stop: ["MissingScript", "Missing superscript or subscript argument"], sup: ["MissingOpenForSup", "Missing open brace for superscript"], sub: ["MissingOpenForSub", "Missing open brace for subscript"]});
  let OverItem;
  let <class_fields_init>#7;
  class OverItem extends o.BaseItem { ... }
  <proto:OverItem>.kind = function <atom:0>;
  <proto:OverItem>.isClose = function <atom:0>;
  <proto:OverItem>.checkItem = function <atom:0>;
  <proto:OverItem>.toString = function <atom:0>;
  <class_fields_init>#7 = undefined;
  <proto:OverItem>;
  OverItem = function <atom:0>;
  // close_loc <class_fields_init>#7
  OverItem#1 = function <atom:0>;
  exports.OverItem = OverItem#1;
  let LeftItem;
  let <class_fields_init>#8;
  class LeftItem extends o.BaseItem { ... }
  <proto:LeftItem>.kind = function <atom:0>;
  <proto:LeftItem>.isOpen = function <atom:0>;
  <proto:LeftItem>.checkItem = function <atom:0>;
  <class_fields_init>#8 = undefined;
  <proto:LeftItem>;
  LeftItem = function <atom:0>;
  // close_loc <class_fields_init>#8
  LeftItem#1 = function <atom:0>;
  exports.LeftItem = LeftItem#1;
  LeftItem#1.errors = Object.assign(Object.create(o.BaseItem.errors), {stop: ["ExtraLeftMissingRight", "Extra \left or missing \right"]});
  let Middle;
  let <class_fields_init>#9;
  class Middle extends o.BaseItem { ... }
  <proto:Middle>.kind = function <atom:0>;
  <proto:Middle>.isClose = function <atom:0>;
  <class_fields_init>#9 = undefined;
  <proto:Middle>;
  Middle = function <atom:0>;
  // close_loc <class_fields_init>#9
  Middle#1 = function <atom:0>;
  exports.Middle = Middle#1;
  let RightItem;
  let <class_fields_init>#10;
  class RightItem extends o.BaseItem { ... }
  <proto:RightItem>.kind = function <atom:0>;
  <proto:RightItem>.isClose = function <atom:0>;
  <class_fields_init>#10 = undefined;
  <proto:RightItem>;
  RightItem = function <atom:0>;
  // close_loc <class_fields_init>#10
  RightItem#1 = function <atom:0>;
  exports.RightItem = RightItem#1;
  let BreakItem;
  let <class_fields_init>#11;
  class BreakItem extends o.BaseItem { ... }
  <proto:BreakItem>.kind = function <atom:0>;
  <proto:BreakItem>.checkItem = function <atom:0>;
  <class_fields_init>#11 = undefined;
  <proto:BreakItem>;
  BreakItem = function <atom:0>;
  // close_loc <class_fields_init>#11
  BreakItem#1 = function <atom:0>;
  exports.BreakItem = BreakItem#1;
  let BeginItem;
  let <class_fields_init>#12;
  class BeginItem extends o.BaseItem { ... }
  <proto:BeginItem>.kind = function <atom:0>;
  <proto:BeginItem>.isOpen = function <atom:0>;
  <proto:BeginItem>.checkItem = function <atom:0>;
  <class_fields_init>#12 = undefined;
  <proto:BeginItem>;
  BeginItem = function <atom:0>;
  // close_loc <class_fields_init>#12
  BeginItem#1 = function <atom:0>;
  exports.BeginItem = BeginItem#1;
  let EndItem;
  let <class_fields_init>#13;
  class EndItem extends o.BaseItem { ... }
  <proto:EndItem>.kind = function <atom:0>;
  <proto:EndItem>.isClose = function <atom:0>;
  <class_fields_init>#13 = undefined;
  <proto:EndItem>;
  EndItem = function <atom:0>;
  // close_loc <class_fields_init>#13
  EndItem#1 = function <atom:0>;
  exports.EndItem = EndItem#1;
  let StyleItem;
  let <class_fields_init>#14;
  class StyleItem extends o.BaseItem { ... }
  <proto:StyleItem>.kind = function <atom:0>;
  <proto:StyleItem>.checkItem = function <atom:0>;
  <class_fields_init>#14 = undefined;
  <proto:StyleItem>;
  StyleItem = function <atom:0>;
  // close_loc <class_fields_init>#14
  StyleItem#1 = function <atom:0>;
  exports.StyleItem = StyleItem#1;
  let PositionItem;
  let <class_fields_init>#15;
  class PositionItem extends o.BaseItem { ... }
  <proto:PositionItem>.kind = function <atom:0>;
  <proto:PositionItem>.checkItem = function <atom:0>;
  <class_fields_init>#15 = undefined;
  <proto:PositionItem>;
  PositionItem = function <atom:0>;
  // close_loc <class_fields_init>#15
  PositionItem#1 = function <atom:0>;
  exports.PositionItem = PositionItem#1;
  let CellItem;
  let <class_fields_init>#16;
  class CellItem extends o.BaseItem { ... }
  <proto:CellItem>.kind = function <atom:0>;
  <proto:CellItem>.isClose = function <atom:0>;
  <class_fields_init>#16 = undefined;
  <proto:CellItem>;
  CellItem = function <atom:0>;
  // close_loc <class_fields_init>#16
  CellItem#1 = function <atom:0>;
  exports.CellItem = CellItem#1;
  let MmlItem;
  let <class_fields_init>#17;
  class MmlItem extends o.BaseItem { ... }
  <proto:MmlItem>.isFinal = function <atom:0>;
  <proto:MmlItem>.kind = function <atom:0>;
  <class_fields_init>#17 = undefined;
  <proto:MmlItem>;
  MmlItem = function <atom:0>;
  // close_loc <class_fields_init>#17
  MmlItem#1 = function <atom:0>;
  exports.MmlItem = MmlItem#1;
  let FnItem;
  let <class_fields_init>#18;
  class FnItem extends o.BaseItem { ... }
  <proto:FnItem>.kind = function <atom:0>;
  <proto:FnItem>.checkItem = function <atom:0>;
  <class_fields_init>#18 = undefined;
  <proto:FnItem>;
  FnItem = function <atom:0>;
  // close_loc <class_fields_init>#18
  FnItem#1 = function <atom:0>;
  exports.FnItem = FnItem#1;
  let NotItem;
  let <class_fields_init>#19;
  class NotItem extends o.BaseItem { ... }
  <proto:NotItem>.kind = function <atom:0>;
  <proto:NotItem>.checkItem = function <atom:0>;
  <class_fields_init>#19 = undefined;
  <proto:NotItem>;
  NotItem = function <atom:0>;
  // close_loc <class_fields_init>#19
  NotItem#1 = function <atom:0>;
  exports.NotItem = NotItem#1;
  let NonscriptItem;
  let <class_fields_init>#20;
  class NonscriptItem extends o.BaseItem { ... }
  <proto:NonscriptItem>.kind = function <atom:0>;
  <proto:NonscriptItem>.checkItem = function <atom:0>;
  <class_fields_init>#20 = undefined;
  <proto:NonscriptItem>;
  NonscriptItem = function <atom:0>;
  // close_loc <class_fields_init>#20
  NonscriptItem#1 = function <atom:0>;
  exports.NonscriptItem = NonscriptItem#1;
  let DotsItem;
  let <class_fields_init>#21;
  class DotsItem extends o.BaseItem { ... }
  <proto:DotsItem>.kind = function <atom:0>;
  <proto:DotsItem>.checkItem = function <atom:0>;
  <class_fields_init>#21 = undefined;
  <proto:DotsItem>;
  DotsItem = function <atom:0>;
  // close_loc <class_fields_init>#21
  DotsItem#1 = function <atom:0>;
  exports.DotsItem = DotsItem#1;
  let ArrayItem;
  let <class_fields_init>#22;
  class ArrayItem extends o.BaseItem { ... }
  <proto:ArrayItem>.kind = function <atom:0>;
  <proto:ArrayItem>.isOpen = function <atom:0>;
  <proto:ArrayItem>.copyEnv = function <atom:0>;
  <proto:ArrayItem>.checkItem = function <atom:0>;
  <proto:ArrayItem>.createMml = function <atom:0>;
  <proto:ArrayItem>.handleFrame = function <atom:0>;
  <proto:ArrayItem>.StartEntry = function <atom:0>;
  <proto:ArrayItem>.getEntry = function <atom:0>;
  <proto:ArrayItem>.EndEntry = function <atom:0>;
  <proto:ArrayItem>.EndRow = function <atom:0>;
  <proto:ArrayItem>.EndTable = function <atom:0>;
  <proto:ArrayItem>.checkLines = function <atom:0>;
  <proto:ArrayItem>.addRowSpacing = function <atom:0>;
  <class_fields_init>#22 = undefined;
  <proto:ArrayItem>;
  ArrayItem = function <atom:0>;
  // close_loc <class_fields_init>#22
  ArrayItem#1 = function <atom:0>;
  exports.ArrayItem = ArrayItem#1;
  let EqnArrayItem;
  let <class_fields_init>#23;
  class EqnArrayItem extends ArrayItem#1 { ... }
  <proto:EqnArrayItem>.kind = function <atom:0>;
  <proto:EqnArrayItem>.EndEntry = function <atom:0>;
  <proto:EqnArrayItem>.EndRow = function <atom:0>;
  <proto:EqnArrayItem>.EndTable = function <atom:0>;
  <proto:EqnArrayItem>.extendArray = function <atom:0>;
  <proto:EqnArrayItem>.addIndentshift = function <atom:0>;
  <class_fields_init>#23 = undefined;
  <proto:EqnArrayItem>;
  EqnArrayItem = function <atom:0>;
  // close_loc <class_fields_init>#23
  EqnArrayItem#1 = function <atom:0>;
  exports.EqnArrayItem = EqnArrayItem#1;
  let MstyleItem;
  let <class_fields_init>#24;
  class MstyleItem extends BeginItem#1 { ... }
  <proto:MstyleItem>.kind = function <atom:0>;
  <proto:MstyleItem>.checkItem = function <atom:0>;
  <class_fields_init>#24 = undefined;
  <proto:MstyleItem>;
  MstyleItem = function <atom:0>;
  // close_loc <class_fields_init>#24
  MstyleItem#1 = function <atom:0>;
  exports.MstyleItem = MstyleItem#1;
  let EquationItem;
  let <class_fields_init>#25;
  class EquationItem extends o.BaseItem { ... }
  <proto:EquationItem>.kind = function <atom:0>;
  <proto:EquationItem>.isOpen = function <atom:0>;
  <proto:EquationItem>.checkItem = function <atom:0>;
  <class_fields_init>#25 = undefined;
  <proto:EquationItem>;
  EquationItem = function <atom:0>;
  // close_loc <class_fields_init>#25
  EquationItem#1 = function <atom:0>;
  exports.EquationItem = EquationItem#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/base/BaseItems
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
