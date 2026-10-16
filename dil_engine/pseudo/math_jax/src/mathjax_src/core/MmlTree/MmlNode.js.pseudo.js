// fn <atom:0>  args=3 vars=9 closure=2 cpool=0 bc=611B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: e, s, r
// locals: e#1, s#1, r#1, this.active_func, new.target, this
// closure: <class_fields_init>, t
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let r#1;
  let s#1;
  let e#1;
  e#1 = e;
  if (!((s === undefined))) goto L_1e;
  s;
  s = {};
  s#1 = {};
  if (!((r === undefined))) goto L_29;
  r;
  r = [];
  r#1 = [];
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_43;
  <class_fields_init>.call(this);
  new new.target(e);
  this.prevClass = null;
  this.prevLevel = null;
  this.texclass = null;
  if (!((this.arity < 0))) goto L_102;
  this.childNodes = [e.create("inferredMrow")];
  this.childNodes[0].parent = this;
  this;
  this.setChildren(r);
  this.attributes = new t.Attributes(e.getNodeClass(this.kind).defaults, e.getNodeClass("math").defaults);
  this.attributes.setList(s);
  return this;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=852B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: t#1, e, s, r, t#2, s#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_f;
  t;
  t = false;
  t#1 = false;
  let e;
  e = this.factory.create(this.kind);
  null;
  this.properties;
  e.properties = {};
  if (!(this.attributes)) goto L_1c4;
  let s;
  s = this.attributes.getAllAttributes();
  let r;
  for (const r of Object.keys(s)) {
    if ((("id" !== r))) goto L_167;
    if (!(t)) goto L_1bd;
    e.attributes.set(r, s[r]);
  }
  if (!(this.childNodes)) goto L_350;
  if (!(this.childNodes.length)) goto L_350;
  let t#2;
  t#2 = this.childNodes;
  if (!((1 === t#2.length))) goto L_29b;
  if (!(t#2[0].isInferred)) goto L_29b;
  t#2 = t#2[0].childNodes;
  t#2[0].childNodes;
  let s#1;
  for (const s#1 of t#2) {
    if (!(s#1)) goto L_2fd;
    goto L_346;
    // [栈深重同步 4 -> 3]
    e.childNodes.push(null);
  }
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.texclass;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: this
function {
  this = this;
  this.texclass = t;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return "data-align";
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=98B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: t, this
function {
  this = this;
  let t;
  for (const t of this.childNodes) {
    if (!(!t.isEmpty)) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return (1 / 0);
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=130B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: t, this
function {
  this = this;
  let t;
  t = this.parent;
  if (!(t)) goto L_7e;
  if (!(t.notParent)) goto L_7e;
  t = t.Parent;
  t.Parent;
  goto L_28;
  return t;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=131B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((this.arity < 0))) goto L_75;
  return this.childNodes[0].setChildren(t);
  return super["setChildren"].call(this, t);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=13B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// closure: this, <home_object>
function {
  return super["appendChild"](t);   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=1 bc=621B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: e, s, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((this.arity < 0))) goto L_77;
  this.childNodes[0].appendChild(t);
  return t;
  if (!(t.isInferred)) goto L_260;
  let e;
  if (!((this.arity === (1 / 0)))) goto L_114;
  t.childNodes.forEach(function <atom:0>);
  return t;
  e = t;
  t = this.factory.create("mrow");
  this.factory.create("mrow").setChildren(e.childNodes);
  t.attributes = e.attributes;
  let s;
  for (const s of e.getPropertyNames()) {
    t.setProperty(s, e.getProperty(s));
  }
  return super["appendChild"](t);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=135B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t, e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((this.arity < 0))) goto L_78;
  this.childNodes[0].replaceChild(t, e);
  return t;
  return super["replaceChild"].call(this, t, e);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return 0;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=241B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: t, e, s, r, this
function {
  this = this;
  let e;
  let t;
  t = null;
  e = this.parent;
  if (!(e)) goto L_8d;
  if (!(e.notParent)) goto L_8d;
  t = e;
  e;
  e = e.parent;
  e.parent;
  goto L_2f;
  if ((t)) goto L_96;
  t = this;
  this;
  if (!(e)) goto L_ef;
  let s;
  s = 0;
  let r;
  for (const r of e.childNodes) {
    if (!((r === t))) goto L_e1;
    return s;
    // [栈深重同步 0 -> 3]
    s = <s_new>;
    (s++);
  }
  return null;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=83B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: this
function {
  this = this;
  this.getPrevClass(t);
  if (!((null != this.texClass))) goto L_51;
  return this;
  return t;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=166B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: this
function {
  this = this;
  if (!(t)) goto L_a5;
  this.prevClass = t.prevClass;
  this.prevLevel = t.prevLevel;
  t.prevLevel = null;
  t.prevClass = null;
  this.texClass = t.texClass;
  t.texClass;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=141B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: this
function {
  this = this;
  if (!(t)) goto L_8c;
  this.prevClass = t.texClass;
  this.prevLevel = t.attributes.get("scriptlevel");
  t.attributes.get("scriptlevel");
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=598B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: t, e, i, this
// closure: exports, r, s
function {
  this = this;
  let i;
  let e;
  let t;
  if (!((null != this.prevClass))) goto L_55;
  goto L_98;
  // [栈深重同步 1 -> 0]
  t = exports.TEXCLASS.NONE;
  if ((this.texClass)) goto L_102;
  e = exports.TEXCLASS.ORD;
  if (((t === exports.TEXCLASS.NONE))) goto L_195;
  if (!((e === exports.TEXCLASS.NONE))) goto L_199;
  return "";
  i = r[t][e];
  if (((this.prevLevel > 0))) goto L_21a;
  if (!((this.attributes.get("scriptlevel") > 0))) goto L_225;
  if (!((i >= 0))) goto L_225;
  return "";
  return s[Math.abs(i)];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=114B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  if (!(this.isEmbellished)) goto L_71;
  return this.coreMO().hasSpacingAttributes();
}

// fn <atom:0>  args=4 vars=16 closure=1 cpool=2 bc=1817B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t, e, s, r
// locals: t#1, e#1, s#1, r#1, i, n, e#2, s#2, l, e#3, s#3, this
// closure: AbstractMmlNode
function {
  this = this;
  let r#1;
  let s#1;
  let e#1;
  let t#1;
  if (!((t === undefined))) goto L_17;
  t;
  t = {};
  t#1 = {};
  if (!((e === undefined))) goto L_21;
  e;
  e = false;
  e#1 = false;
  if (!((s === undefined))) goto L_2a;
  s;
  s = 0;
  s#1 = 0;
  if (!((r === undefined))) goto L_34;
  r;
  r = false;
  r#1 = false;
  let l;
  let i;
  i = this.attributes.getAllDefaults();
  let n;
  const _it1 = Object.keys(t);
  goto L_277;
  n = <value(_it1)>;
  if ((Object.hasOwn(i, n))) goto L_13a;
  if (!(Object.hasOwn(AbstractMmlNode.alwaysInherit, n))) goto L_212;
  let s#2;
  let e#2;
  if (((undefined === undefined))) goto L_158;
  const _it2 = undefined;
  <done(_it2)>;
  e#2 = <value(_it2)>;
  <done(_it2)>;
  s#2 = <value(_it2)>;
  goto L_160;
  <value(_it2)>;
  goto L_14a;
  // [栈深重同步 4 -> 3]
  if (!((AbstractMmlNode.noInherit[e#2] == null))) goto L_190;
  AbstractMmlNode.noInherit[e#2];
  goto L_1c0;
  if (!((undefined[this.kind] == null))) goto L_1bc;
  undefined[this.kind];
  goto L_1c0;
  if ((undefined[n])) goto L_211;
  this.attributes.setInherited(n, s#2);
  if (!((AbstractMmlNode.stopInherit[this.kind] == null))) goto L_262;
  AbstractMmlNode.stopInherit[this.kind];
  goto L_266;
  if (!(undefined[n])) goto L_276;
  null;
  t;
  t = {};
  // [栈深重同步 5 -> 4]
  {};
  if (!(<done(_it2)>)) goto L_b5;
  <value(_it2)>;
  if (!((undefined === this.attributes.getExplicit("displaystyle")))) goto L_31f;
  this.attributes.setInherited("displaystyle", e);
  if (!((undefined === this.attributes.getExplicit("scriptlevel")))) goto L_3bf;
  this.attributes.setInherited("scriptlevel", s);
  if (!(r)) goto L_3f1;
  this.setProperty("texprimestyle", r);
  l = this.arity;
  if (!((l >= 0))) goto L_5ba;
  if (!((l !== (1 / 0)))) goto L_5ba;
  if (!((1 === l))) goto L_45c;
  if (((0 === this.childNodes.length))) goto L_492;
  if (!((1 !== l))) goto L_5ba;
  if (!((this.childNodes.length !== l))) goto L_5ba;
  if (!((l < this.childNodes.length))) goto L_51a;
  this.childNodes = this.childNodes.slice(0, l);
  goto L_5ba;
  if (!((this.childNodes.length < l))) goto L_5ba;
  this.appendChild(this.factory.create("mrow"));
  goto L_51a;
  if (!(this.linebreakContainer)) goto L_6ee;
  if (!(!this.isEmbellished)) goto L_6ee;
  let e#3;
  e#3 = this.linebreakAlign;
  if (!(e#3)) goto L_6ee;
  let s#3;
  if ((this.attributes.get(e#3))) goto L_691;
  s#3 = "left";
  t = this.addInheritedAttributes(t, {indentalign: s#3, indentshift: "0", indentalignfirst: s#3, indentshiftfirst: "0", indentalignlast: "indentalign", indentshiftlast: "indentshift"});
  this.setChildInheritedAttributes(t, e, s, r);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=0 cpool=0 bc=94B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t, e, s, r
// locals: i, this
function {
  this = this;
  let i;
  for (const i of this.childNodes) {
    i.setInheritedAttributes(t, e, s, r);
  }
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=163B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t, e
// locals: s, r, this
function {
  this = this;
  let s;
  null;
  t;
  s = {};
  let r;
  for (const r of Object.keys(e)) {
    if (!(("displaystyle" !== r))) goto L_98;
    if (!(("scriptlevel" !== r))) goto L_98;
    if (!(("style" !== r))) goto L_98;
    s[r] = [this.kind, e[r]];
    [this.kind, e[r]];
  }
  return s;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=352B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: e, s, r, i, l, this
function {
  this = this;
  let l;
  let i;
  let r;
  let s;
  let e;
  e = t.attributes;
  s = e.get("displaystyle");
  r = e.get("scriptlevel");
  if (!(e.isSet("mathsize"))) goto L_f9;
  goto L_fa;
  // [栈深重同步 1 -> 0]
  i = {};
  if ((t.getProperty("texprimestyle"))) goto L_12b;
  l = false;
  this.setInheritedAttributes(i, s, r, l);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=392B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: t#1, e, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_d;
  t;
  t = null;
  t#1 = null;
  let e;
  if (!((null === t))) goto L_17;
  return;
  this.verifyAttributes(t);
  e = this.arity;
  if (!(t.checkArity)) goto L_160;
  if (!((e >= 0))) goto L_160;
  if (!((e !== (1 / 0)))) goto L_160;
  if (!((1 === e))) goto L_d2;
  if (((0 === this.childNodes.length))) goto L_106;
  if (!((1 !== e))) goto L_106;
  if (!((this.childNodes.length !== e))) goto L_160;
  this.mError((("Wrong number of children for "" + this.kind) + "" node"), t, true);
  this.verifyChildren(t);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=2 bc=824B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: e, s, t#1, e#1, this
// closure: exports
function {
  this = this;
  if (!(t.checkAttributes)) goto L_1e0;
  let s;
  let e;
  e = this.attributes;
  s = [];
  let t#1;
  for (const t#1 of e.getExplicitNames()) {
    if ((("data-" === t#1.substring(0, 5)))) goto L_147;
    if (((undefined !== e.getDefault(t#1)))) goto L_147;
    if ((t#1.match(new RegExp("^(?:class|style|id|(?:xlink:)?href)$")))) goto L_147;
    s.push(t#1);
  }
  if (!(s.length)) goto L_1df;
  this.mError(((("Unknown attributes for " + this.kind) + " node: ") + s.join(", ")), t);
  if (!(t.checkMathvariants)) goto L_337;
  let e#1;
  e#1 = this.attributes.getExplicit("mathvariant");
  if ((!e#1)) goto L_336;
  if ((exports.MATHVARIANTS.has(e#1))) goto L_336;
  if ((this.getProperty("ignore-variant"))) goto L_336;
  this.mError("Invalid mathvariant: ".concat(e#1), t, true);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=91B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.childNodes) {
    e.verifyTree(t);
  }
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=0 bc=1027B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t, e, s
// locals: t#1, e#1, s#1, r, s#2, i, this
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
  let r;
  if (!(this.parent)) goto L_92;
  if (!(this.parent.isKind("merror"))) goto L_92;
  return null;
  r = this.factory.create("merror");
  r.attributes.set("data-mjx-message", t);
  if ((e.fullErrors)) goto L_155;
  if (!(s)) goto L_388;
  let i;
  let s#2;
  s#2 = this.factory.create("mtext");
  i = this.factory.create("text");
  if (!(e.fullErrors)) goto L_247;
  goto L_26a;
  // [栈深重同步 3 -> 2]
  i.setText(this.kind);
  s#2.appendChild(i);
  r.appendChild(s#2);
  this.parent.replaceChild(r, this);
  if ((e.fullErrors)) goto L_385;
  r.attributes.set("title", t);
  goto L_3ff;
  this.parent.replaceChild(r, this);
  r.appendChild(this);
  return r;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return true;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=113B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: t, this
// closure: TextNode
function {
  this = this;
  let t;
  for (const t of this.childNodes) {
    if ((!(t instanceof TextNode))) goto L_5f;
    if (!(t.getText().length)) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=177B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: t, e, this
// closure: TextNode
function {
  this = this;
  let t;
  t = "";
  let e;
  for (const e of this.childNodes) {
    if (!((e instanceof TextNode))) goto L_6a;
    t = (t + e.getText());
    goto L_a6;
    // [栈深重同步 4 -> 3]
    if (!(("textContent" in e))) goto L_a6;
    t = (t + e.textContent());
    (t + e.textContent());
  }
  return t;
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=0 bc=105B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t, e, s, r
// locals: i, this
// closure: AbstractMmlNode
function {
  this = this;
  let i;
  for (const i of this.childNodes) {
    if (!((i instanceof AbstractMmlNode))) goto L_61;
    i.setInheritedAttributes(t, e, s, r);
  }
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=109B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t, e
// locals: s, this
// closure: AbstractMmlNode
function {
  this = this;
  t(this, e);
  let s;
  for (const s of this.childNodes) {
    if (!((s instanceof AbstractMmlNode))) goto L_64;
    s.walkTree(t, e);
  }
  return e;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
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

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.childNodes[0].isSpacelike;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.childNodes[0].isEmbellished;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return -1;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.childNodes[0];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.childNodes[0].coreMO();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=152B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: this
function {
  this = this;
  t = this.childNodes[0].setTeXclass(t);
  this.updateTeXclass(this.childNodes[0]);
  return t;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
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

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.childNodes[0].isEmbellished;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.childNodes[0];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.childNodes[0].coreMO();   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=657B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: e, s, r, this
// closure: exports
function {
  this = this;
  let s;
  let e;
  this.getPrevClass(t);
  this.texClass = exports.TEXCLASS.ORD;
  e = this.childNodes[0];
  s = null;
  if (!(e)) goto L_203;
  if ((this.isEmbellished)) goto L_ff;
  if (!(e.isKind("mi"))) goto L_17b;
  s = e.setTeXclass(t);
  e.setTeXclass(t);
  goto L_203;
  // [栈深重同步 1 -> 0]
  e.setTeXclass(null);
  if (!(e.isKind("TeXAtom"))) goto L_203;
  this.texClass = e.texClass;
  e.texClass;
  let r;
  for (const r of this.childNodes.slice(1)) {
    if (!(r)) goto L_281;
    r.setTeXclass(null);
  }
  if ((s)) goto L_290;
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return "";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return 0;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.parent;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=68B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// closure: exports
function {
  return exports.TEXCLASS.NONE;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=68B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// closure: exports
function {
  return exports.TEXCLASS.NONE;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return 0;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return null;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return 0;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return 0;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
function {
  return t;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return "";
}

// fn <atom:0>  args=4 vars=4 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t, e, s, r
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
function {
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=25B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t, e, s
// locals: t#1, e#1, s#1
function {
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_16;
  s;
  s = false;
  s#1 = false;
  return null;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
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

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
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
  this.text = "";
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return "text";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.text;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=15B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t
// locals: this
function {
  this = this;
  this.text = t;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=179B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.factory.create(this.kind).setText(this.getText());   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.text;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=75B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
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
  this.xml = null;
  this.adaptor = null;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return "XML";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.xml;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=43B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: t, e
// locals: t#1, e#1, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_12;
  e;
  e = null;
  e#1 = null;
  this.xml = t;
  this.adaptor = e;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=106B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.adaptor.serializeXML(this.xml);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=246B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: this
function {
  this = this;
  return this.factory.create(this.kind).setXML(this.adaptor.clone(this.xml));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
function {
  return "XML data";
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=91 bc=2327B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// args: require, module, exports
// locals: t, e, s, r, AbstractMmlNode, <class_fields_init>, AbstractMmlNode#1, AbstractMmlTokenNode, <class_fields_init>#1, AbstractMmlTokenNode#1, AbstractMmlLayoutNode, <class_fields_init>#2, AbstractMmlLayoutNode#1, AbstractMmlBaseNode, <class_fields_init>#3, AbstractMmlBaseNode#1, AbstractMmlEmptyNode, <class_fields_init>#4, AbstractMmlEmptyNode#1, TextNode, <class_fields_init>#5, TextNode#1, XMLNode, <class_fields_init>#6, XMLNode#1
function {
  let XMLNode#1;
  let TextNode#1;
  let AbstractMmlEmptyNode#1;
  let AbstractMmlBaseNode#1;
  let AbstractMmlLayoutNode#1;
  let AbstractMmlTokenNode#1;
  let AbstractMmlNode#1;
  let r;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TEXCLASS = undefined;
  exports.TEXCLASSNAMES = undefined;
  exports.MATHVARIANTS = undefined;
  exports.indentAttributes = undefined;
  exports.AbstractMmlNode = undefined;
  exports.AbstractMmlTokenNode = undefined;
  exports.AbstractMmlLayoutNode = undefined;
  exports.AbstractMmlBaseNode = undefined;
  exports.AbstractMmlEmptyNode = undefined;
  exports.TextNode = undefined;
  exports.XMLNode = undefined;
  t = require("./Attributes");
  e = require("../Tree/Node");
  exports.TEXCLASS = {ORD: 0, OP: 1, BIN: 2, REL: 3, OPEN: 4, CLOSE: 5, PUNCT: 6, INNER: 7, NONE: -1};
  exports.TEXCLASSNAMES = ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER"];
  s = ["", "thinmathspace", "mediummathspace", "thickmathspace"];
  r = [[0, -1, 2, 3, 0, 0, 0, 1], [-1, -1, 0, 3, 0, 0, 0, 1], [2, 2, 0, 0, 2, 0, 0, 2], [3, 3, 0, 0, 3, 0, 0, 3], [0, 0, 0, 0, 0, 0, 0, 0], [0, -1, 2, 3, 0, 0, 0, 1], [1, 1, 0, 1, 1, 1, 1, 1], [1, -1, 2, 3, 1, 0, 1, 1]];
  exports.MATHVARIANTS = new Set(["normal", "bold", "italic", "bold-italic", "double-struck", "fraktur", "bold-fraktur", "script", "bold-script", "sans-serif", "bold-sans-serif", "sans-serif-italic", "sans-serif-bold-italic", "monospace", "inital", "tailed", "looped", "stretched"]);
  exports.indentAttributes = ["indentalign", "indentalignfirst", "indentshift", "indentshiftfirst"];
  let AbstractMmlNode;
  let <class_fields_init>;
  class AbstractMmlNode extends e.AbstractNode { ... }
  <proto:AbstractMmlNode>.copy = function <atom:0>;
  <proto:AbstractMmlNode>.texClass = function <atom:0>;
  <proto:AbstractMmlNode>.texClass = function <atom:0>;
  <proto:AbstractMmlNode>.isToken = function <atom:0>;
  <proto:AbstractMmlNode>.isEmbellished = function <atom:0>;
  <proto:AbstractMmlNode>.isSpacelike = function <atom:0>;
  <proto:AbstractMmlNode>.linebreakContainer = function <atom:0>;
  <proto:AbstractMmlNode>.linebreakAlign = function <atom:0>;
  <proto:AbstractMmlNode>.isEmpty = function <atom:0>;
  <proto:AbstractMmlNode>.arity = function <atom:0>;
  <proto:AbstractMmlNode>.isInferred = function <atom:0>;
  <proto:AbstractMmlNode>.Parent = function <atom:0>;
  <proto:AbstractMmlNode>.notParent = function <atom:0>;
  <proto:AbstractMmlNode>.setChildren = function <atom:0>;
  <proto:AbstractMmlNode>.appendChild = function <atom:0>;
  <proto:AbstractMmlNode>.replaceChild = function <atom:0>;
  <proto:AbstractMmlNode>.core = function <atom:0>;
  <proto:AbstractMmlNode>.coreMO = function <atom:0>;
  <proto:AbstractMmlNode>.coreIndex = function <atom:0>;
  <proto:AbstractMmlNode>.childPosition = function <atom:0>;
  <proto:AbstractMmlNode>.setTeXclass = function <atom:0>;
  <proto:AbstractMmlNode>.updateTeXclass = function <atom:0>;
  <proto:AbstractMmlNode>.getPrevClass = function <atom:0>;
  <proto:AbstractMmlNode>.texSpacing = function <atom:0>;
  <proto:AbstractMmlNode>.hasSpacingAttributes = function <atom:0>;
  <proto:AbstractMmlNode>.setInheritedAttributes = function <atom:0>;
  <proto:AbstractMmlNode>.setChildInheritedAttributes = function <atom:0>;
  <proto:AbstractMmlNode>.addInheritedAttributes = function <atom:0>;
  <proto:AbstractMmlNode>.inheritAttributesFrom = function <atom:0>;
  <proto:AbstractMmlNode>.verifyTree = function <atom:0>;
  <proto:AbstractMmlNode>.verifyAttributes = function <atom:0>;
  <proto:AbstractMmlNode>.verifyChildren = function <atom:0>;
  <proto:AbstractMmlNode>.mError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractMmlNode>;
  AbstractMmlNode = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc AbstractMmlNode
  AbstractMmlNode#1 = function <atom:0>;
  exports.AbstractMmlNode = AbstractMmlNode#1;
  AbstractMmlNode#1.defaults = {mathbackground: t.INHERIT, mathcolor: t.INHERIT, mathsize: t.INHERIT, dir: t.INHERIT};
  AbstractMmlNode#1.noInherit = {mstyle: {mpadded: {width: true, height: true, depth: true, lspace: true, voffset: true}, mtable: {width: true, height: true, depth: true, align: true}}, maligngroup: {mrow: {groupalign: true}, mtable: {groupalign: true}}, mtr: {msqrt: {data-vertical-align: true}, mroot: {data-vertical-align: true}}, mlabeledtr: {msqrt: {data-vertical-align: true}, mroot: {data-vertical-align: true}}};
  AbstractMmlNode#1.stopInherit = {mtd: {columnalign: true, rowalign: true, groupalign: true}};
  AbstractMmlNode#1.alwaysInherit = {scriptminsize: true, scriptsizemultiplier: true, infixlinebreakstyle: true};
  AbstractMmlNode#1.verifyDefaults = {checkArity: true, checkAttributes: false, checkMathvariants: true, fullErrors: false, fixMmultiscripts: true, fixMtables: true};
  let AbstractMmlTokenNode;
  let <class_fields_init>#1;
  class AbstractMmlTokenNode extends AbstractMmlNode#1 { ... }
  <proto:AbstractMmlTokenNode>.isToken = function <atom:0>;
  <proto:AbstractMmlTokenNode>.isEmpty = function <atom:0>;
  <proto:AbstractMmlTokenNode>.getText = function <atom:0>;
  <proto:AbstractMmlTokenNode>.setChildInheritedAttributes = function <atom:0>;
  <proto:AbstractMmlTokenNode>.walkTree = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AbstractMmlTokenNode>;
  AbstractMmlTokenNode = function <atom:0>;
  // close_loc <class_fields_init>#1
  AbstractMmlTokenNode#1 = function <atom:0>;
  exports.AbstractMmlTokenNode = AbstractMmlTokenNode#1;
  null;
  AbstractMmlNode#1.defaults;
  AbstractMmlTokenNode#1.defaults = {mathvariant: "normal", mathsize: t.INHERIT};
  let AbstractMmlLayoutNode;
  let <class_fields_init>#2;
  class AbstractMmlLayoutNode extends AbstractMmlNode#1 { ... }
  <proto:AbstractMmlLayoutNode>.isSpacelike = function <atom:0>;
  <proto:AbstractMmlLayoutNode>.isEmbellished = function <atom:0>;
  <proto:AbstractMmlLayoutNode>.arity = function <atom:0>;
  <proto:AbstractMmlLayoutNode>.core = function <atom:0>;
  <proto:AbstractMmlLayoutNode>.coreMO = function <atom:0>;
  <proto:AbstractMmlLayoutNode>.setTeXclass = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:AbstractMmlLayoutNode>;
  AbstractMmlLayoutNode = function <atom:0>;
  // close_loc <class_fields_init>#2
  AbstractMmlLayoutNode#1 = function <atom:0>;
  exports.AbstractMmlLayoutNode = AbstractMmlLayoutNode#1;
  AbstractMmlLayoutNode#1.defaults = AbstractMmlNode#1.defaults;
  let AbstractMmlBaseNode;
  let <class_fields_init>#3;
  class AbstractMmlBaseNode extends AbstractMmlNode#1 { ... }
  <proto:AbstractMmlBaseNode>.isEmbellished = function <atom:0>;
  <proto:AbstractMmlBaseNode>.core = function <atom:0>;
  <proto:AbstractMmlBaseNode>.coreMO = function <atom:0>;
  <proto:AbstractMmlBaseNode>.setTeXclass = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:AbstractMmlBaseNode>;
  AbstractMmlBaseNode = function <atom:0>;
  // close_loc <class_fields_init>#3
  AbstractMmlBaseNode#1 = function <atom:0>;
  exports.AbstractMmlBaseNode = AbstractMmlBaseNode#1;
  AbstractMmlBaseNode#1.defaults = AbstractMmlNode#1.defaults;
  let AbstractMmlEmptyNode;
  let <class_fields_init>#4;
  class AbstractMmlEmptyNode extends e.AbstractEmptyNode { ... }
  <proto:AbstractMmlEmptyNode>.isToken = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.isEmpty = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.isEmbellished = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.isSpacelike = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.linebreakContainer = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.linebreakAlign = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.arity = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.isInferred = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.notParent = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.Parent = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.texClass = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.prevClass = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.prevLevel = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.hasSpacingAttributes = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.attributes = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.core = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.coreMO = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.coreIndex = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.childPosition = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.setTeXclass = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.texSpacing = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.setInheritedAttributes = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.inheritAttributesFrom = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.verifyTree = function <atom:0>;
  <proto:AbstractMmlEmptyNode>.mError = function <atom:0>;
  <class_fields_init>#4 = undefined;
  <proto:AbstractMmlEmptyNode>;
  AbstractMmlEmptyNode = function <atom:0>;
  // close_loc <class_fields_init>#4
  AbstractMmlEmptyNode#1 = function <atom:0>;
  exports.AbstractMmlEmptyNode = AbstractMmlEmptyNode#1;
  let TextNode;
  let <class_fields_init>#5;
  class TextNode extends AbstractMmlEmptyNode#1 { ... }
  <proto:TextNode>.kind = function <atom:0>;
  <proto:TextNode>.getText = function <atom:0>;
  <proto:TextNode>.setText = function <atom:0>;
  <proto:TextNode>.copy = function <atom:0>;
  <proto:TextNode>.toString = function <atom:0>;
  <class_fields_init>#5 = undefined;
  <proto:TextNode>;
  TextNode = function <atom:0>;
  // close_loc <class_fields_init>#5
  TextNode#1 = function <atom:0>;
  exports.TextNode = TextNode#1;
  let XMLNode;
  let <class_fields_init>#6;
  class XMLNode extends AbstractMmlEmptyNode#1 { ... }
  <proto:XMLNode>.kind = function <atom:0>;
  <proto:XMLNode>.getXML = function <atom:0>;
  <proto:XMLNode>.setXML = function <atom:0>;
  <proto:XMLNode>.getSerializedXML = function <atom:0>;
  <proto:XMLNode>.copy = function <atom:0>;
  <proto:XMLNode>.toString = function <atom:0>;
  <class_fields_init>#6 = undefined;
  <proto:XMLNode>;
  XMLNode = function <atom:0>;
  // close_loc <class_fields_init>#6
  XMLNode#1 = function <atom:0>;
  exports.XMLNode = XMLNode#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNode
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
