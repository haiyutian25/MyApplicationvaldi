// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=94B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
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
  this._texClass = null;
  this.lspace = (5 / 18);
  this.rspace = (5 / 18);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=152B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// locals: this
function {
  this = this;
  if (!((null === this._texClass))) goto L_75;
  return this.getOperatorDef(this.getText())[2];
  return this._texClass;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t
// locals: this
function {
  this = this;
  this._texClass = t;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
function {
  return "mo";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
function {
  return true;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=251B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// locals: t, e, s, this
function {
  this = this;
  let s;
  let e;
  let t;
  t = null;
  e = this;
  s = this.factory.getNodeClass("math");
  if (!(e)) goto L_f2;
  if (!(e.isEmbellished)) goto L_f2;
  if (!((e.coreMO() === this))) goto L_f2;
  if (!(!(e instanceof s))) goto L_f2;
  t = e;
  e;
  e = e.parent;
  e.parent;
  goto L_5b;
  if ((t)) goto L_fa;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=541B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t
function {
  if (!(!t)) goto L_6;
  return "";
  if (!(t.isEmbellished)) goto L_73;
  return t.coreMO().getText();   // tail call
  if ((t.isKind("mrow"))) goto L_12a;
  if ((t.isKind("TeXAtom"))) goto L_12a;
  if ((t.isKind("mstyle"))) goto L_12a;
  if (!(t.isKind("mphantom"))) goto L_153;
  if (((1 === t.childNodes.length))) goto L_181;
  if (!(t.isKind("munderover"))) goto L_1d1;
  if (!(t.childNodes[0])) goto L_1d1;
  t = t.childNodes[0];
  goto L_73;
  if (!(t.isToken)) goto L_21b;
  return t.getText();
  return "";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=157B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// locals: this
function {
  this = this;
  if ((this.attributes.isSet("lspace"))) goto L_9c;
  return this.attributes.isSet("rspace");
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=901B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// locals: t, e, s, this
function {
  this = this;
  let e;
  let t;
  t = false;
  e = this.coreParent().parent;
  if (!(e)) goto L_381;
  let s;
  if (!(e.isKind("mover"))) goto L_106;
  if (!(e.childNodes[e.over].coreMO())) goto L_102;
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  if (!(e.isKind("munder"))) goto L_1af;
  if (!(e.childNodes[e.under].coreMO())) goto L_1ab;
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  if (!(e.isKind("munderover"))) goto L_2d3;
  if (!((this === e.childNodes[e.over].coreMO()))) goto L_258;
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  if (!((this === e.childNodes[e.under].coreMO()))) goto L_2d0;
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  s = "";
  if (!(s)) goto L_381;
  if (!((undefined !== e.attributes.getExplicit(s)))) goto L_331;
  goto L_37c;
  // [栈深重同步 1 -> 0]
  t = this.attributes.get("accent");
  this.attributes.get("accent");
  return t;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=606B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: e
// locals: s, i, this
// closure: t
function {
  this = this;
  let i;
  let s;
  if (((undefined === undefined))) goto L_57;
  s = <to_object>(undefined).form;
  i = <to_object>(undefined).fence;
  <to_object>(undefined);
  goto L_ab;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  if (!((undefined === this.getProperty("texClass")))) goto L_102;
  if (!(this.hasSpacingAttributes())) goto L_102;
  return null;
  if (!(i)) goto L_236;
  if (!((this.texClass === t.TEXCLASS.REL))) goto L_236;
  if (!(("prefix" === s))) goto L_1d8;
  this.texClass = t.TEXCLASS.OPEN;
  t.TEXCLASS.OPEN;
  if (!(("postfix" === s))) goto L_236;
  this.texClass = t.TEXCLASS.CLOSE;
  t.TEXCLASS.CLOSE;
  return this.adjustTeXclass(e);
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=2373B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: e
// locals: s, i, e#1, s#1, this
// closure: t
function {
  this = this;
  let i;
  let s;
  s = this.texClass;
  i = this.prevClass;
  if (!((s === t.TEXCLASS.NONE))) goto L_9e;
  return e;
  if (!(e)) goto L_29b;
  if ((!e.getProperty("autoOP"))) goto L_1c4;
  if (!((s !== t.TEXCLASS.BIN))) goto L_16c;
  if (((s !== t.TEXCLASS.REL))) goto L_1c4;
  e.texClass = t.TEXCLASS.ORD;
  i = t.TEXCLASS.ORD;
  t.TEXCLASS.ORD;
  if ((e.texClass)) goto L_232;
  this.prevClass = t.TEXCLASS.ORD;
  i = t.TEXCLASS.ORD;
  t.TEXCLASS.ORD;
  this.prevLevel = this.attributes.getInherited("scriptlevel");
  goto L_2f0;
  // [栈深重同步 1 -> 0]
  this.prevClass = t.TEXCLASS.NONE;
  i = t.TEXCLASS.NONE;
  t.TEXCLASS.NONE;
  if (((s !== t.TEXCLASS.BIN))) goto L_510;
  if (!((i !== t.TEXCLASS.NONE))) goto L_8f2;
  if (!((i !== t.TEXCLASS.BIN))) goto L_8f2;
  if (!((i !== t.TEXCLASS.OP))) goto L_8f2;
  if (!((i !== t.TEXCLASS.REL))) goto L_8f2;
  if (!((i !== t.TEXCLASS.OPEN))) goto L_8f2;
  if (!((i !== t.TEXCLASS.PUNCT))) goto L_8f2;
  if (((i !== t.TEXCLASS.BIN))) goto L_64a;
  if (!((s !== t.TEXCLASS.REL))) goto L_895;
  if (!((s !== t.TEXCLASS.CLOSE))) goto L_895;
  if (!((s !== t.TEXCLASS.PUNCT))) goto L_895;
  if (!((s === t.TEXCLASS.BIN))) goto L_942;
  let s#1;
  let e#1;
  e#1 = null;
  s#1 = this.parent;
  if (!(s#1)) goto L_7de;
  if (!(s#1.parent)) goto L_7de;
  if (!(s#1.isEmbellished)) goto L_7de;
  if (((1 === s#1.childNodes.length))) goto L_7a8;
  if (!(!s#1.isKind("mrow"))) goto L_7de;
  if (!((s#1.core() === e#1))) goto L_7de;
  e#1 = s#1;
  s#1;
  s#1 = s#1.parent;
  s#1.parent;
  goto L_6c9;
  if ((e#1)) goto L_7e7;
  e#1 = this;
  this;
  if (!((s#1.childNodes[(s#1.childNodes.length - 1)] === e#1))) goto L_891;
  this.texClass = t.TEXCLASS.ORD;
  t.TEXCLASS.ORD;
  goto L_942;
  this.prevClass = t.TEXCLASS.ORD;
  e.texClass = t.TEXCLASS.ORD;
  goto L_942;
  this.texClass = t.TEXCLASS.ORD;
  return this;
}

// fn <atom:0>  args=4 vars=11 closure=0 cpool=0 bc=287B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t, e, s, i
// locals: t#1, e#1, s#1, i#1, r, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let i#1;
  let s#1;
  let e#1;
  let t#1;
  if (!((t === undefined))) goto L_1b;
  t;
  t = {};
  t#1 = {};
  if (!((e === undefined))) goto L_25;
  e;
  e = false;
  e#1 = false;
  if (!((s === undefined))) goto L_2e;
  s;
  s = 0;
  s#1 = 0;
  if (!((i === undefined))) goto L_38;
  i;
  i = false;
  i#1 = false;
  let r;
  super["setInheritedAttributes"].call(this, t, e, s, i);
  r = this.getText();
  this.checkOperatorTable(r);
  this.checkPseudoScripts(r);
  this.checkPrimes(r);
  this.checkMathAccent(r);
  return;
}

// fn <atom:0>  args=1 vars=12 closure=2 cpool=0 bc=855B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: s
// locals: i, r, n, c, o, h, a, l, d, u, this
// closure: e, t
function {
  this = this;
  let u;
  let d;
  let l;
  let a;
  let h;
  let o;
  let c;
  let n;
  let r;
  let i;
  if (((undefined === undefined))) goto L_36;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_85;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_26;
  // [栈深重同步 1 -> 0]
  this.attributes.setInherited("form", i);
  c = this.constructor;
  o = c.OPTABLE;
  if ((o[i][s])) goto L_142;
  if ((o[r][s])) goto L_142;
  h = o[n][s];
  if (!(h)) goto L_14d;
  return h;
  this.setProperty("noDictDef", true);
  a = this.attributes.get("movablelimits");
  if ((!!s.match(c.opPattern))) goto L_21b;
  if (!(a)) goto L_2bd;
  if (!((undefined === this.getProperty("texClass")))) goto L_2bd;
  return e.OPDEF(1, 2, t.TEXCLASS.OP);   // tail call
  l = e.getRange(s);
  if (((undefined === undefined))) goto L_2f8;
  const _it2 = undefined;
  <done(_it2)>;
  d = <value(_it2)>;
  <done(_it2)>;
  u = <value(_it2)>;
  goto L_325;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_2ea;
  // [栈深重同步 1 -> 0]
  return e.OPDEF(d, u, l[2]);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=293B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t
// locals: e, s, this
function {
  this = this;
  let e;
  e = this.getOperatorDef(t);
  if (!((undefined === this.getProperty("texClass")))) goto L_6c;
  this.texClass = e[2];
  e[2];
  let s;
  if ((e[3])) goto L_a0;
  for (const s of Object.keys({})) {
    this.attributes.setInherited(s, e[3][s]);
  }
  this.lspace = (e[0] / 18);
  this.rspace = (e[1] / 18);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=485B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// locals: t, e, s, this
function {
  this = this;
  let s;
  let e;
  let t;
  t = null;
  e = this.parent;
  s = this.Parent;
  if (!(s)) goto L_de;
  if (!(s.isEmbellished)) goto L_de;
  t = e;
  e;
  e = s.parent;
  s.parent;
  s = s.Parent;
  s.Parent;
  goto L_53;
  if ((t)) goto L_e6;
  t = this;
  this;
  if (!(e)) goto L_1d2;
  if (!(e.isKind("mrow"))) goto L_1d2;
  if (!((1 !== e.nonSpaceLength()))) goto L_1d2;
  if (!((e.firstNonSpace() === t))) goto L_192;
  return ["prefix", "infix", "postfix"];
  if (!((e.lastNonSpace() === t))) goto L_1d2;
  return ["postfix", "infix", "prefix"];
  return ["infix", "prefix", "postfix"];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t
// closure: e
function {
  return (t !== e);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=248B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t
// locals: e, this
function {
  this = this;
  if (!(this.attributes.isSet("form"))) goto L_f6;
  let e;
  e = this.attributes.get("form");
  t = [e].concat(t.filter(function <atom:0>));
  // close_loc e
  return t;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=507B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t
// locals: e, s, i, this
function {
  this = this;
  let i;
  let s;
  let e;
  e = this.constructor.pseudoScripts;
  if (!(!t.match(e))) goto L_7b;
  return;
  s = this.coreParent().Parent;
  if ((!s)) goto L_128;
  if (!(s.isKind("msubsup"))) goto L_127;
  i = !!s.isKind("msub");
  this.setProperty("pseudoscript", i);
  if (!(i)) goto L_1fa;
  this.attributes.setInherited("lspace", 0);
  this.attributes.setInherited("rspace", 0);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t
// closure: i
function {
  return i[t];
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=1 bc=351B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t
// locals: e, i, r, this
// closure: s
function {
  this = this;
  let r;
  let i;
  let e;
  e = this.constructor.primes;
  if (!(!t.match(e))) goto L_7b;
  return;
  i = this.constructor.remapPrimes;
  r = s.unicodeString(s.unicodeChars(t).map(function <atom:0>));
  this.setProperty("primes", r);
  return;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=687B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t
// locals: e, s, i, r, n, c, this
function {
  this = this;
  let c;
  let n;
  let r;
  let i;
  let s;
  let e;
  e = this.Parent;
  if (((undefined !== this.getProperty("mathaccent")))) goto L_9f;
  if ((!e)) goto L_9f;
  if (!(!e.isKind("munderover"))) goto L_a2;
  return;
  if (((undefined === undefined))) goto L_b7;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_de;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_a7;
  // [栈深重同步 1 -> 0]
  if (!(s.isEmbellished)) goto L_131;
  if (!((s.coreMO() === this))) goto L_131;
  return;
  if ((!i)) goto L_18c;
  if ((!i.isEmbellished)) goto L_18c;
  n = !(i.coreMO() !== this);
  if ((!r)) goto L_1ea;
  if ((!r.isEmbellished)) goto L_1ea;
  c = !(i.coreMO() !== this);
  if ((n)) goto L_1f7;
  if (!(c)) goto L_2ae;
  if (!(this.isMathAccent(t))) goto L_256;
  goto L_2ae;
  // [栈深重同步 1 -> 0]
  if (!(this.isMathAccentWithWidth(t))) goto L_2ae;
  this.setProperty("mathaccent", false);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=164B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t
// locals: t#1, e, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_31;
  t;
  t = this.getText();
  t#1 = this.getText();
  let e;
  e = this.constructor.mathaccents;
  return !!t.match(e);
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=164B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: t
// locals: t#1, e, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_31;
  t;
  t = this.getText();
  t#1 = this.getText();
  let e;
  e = this.constructor.mathaccentsWithWidth;
  return !!t.match(e);
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=24 bc=1246B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// args: require, module, exports
// locals: t, e, s, MmlMo, <class_fields_init>, MmlMo#1
function {
  let MmlMo#1;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMo = undefined;
  t = require("../MmlNode");
  e = require("../OperatorDictionary");
  s = require("../../../util/string");
  let MmlMo;
  let <class_fields_init>;
  class MmlMo extends t.AbstractMmlTokenNode { ... }
  <proto:MmlMo>.texClass = function <atom:0>;
  <proto:MmlMo>.texClass = function <atom:0>;
  <proto:MmlMo>.kind = function <atom:0>;
  <proto:MmlMo>.isEmbellished = function <atom:0>;
  <proto:MmlMo>.coreParent = function <atom:0>;
  <proto:MmlMo>.coreText = function <atom:0>;
  <proto:MmlMo>.hasSpacingAttributes = function <atom:0>;
  <proto:MmlMo>.isAccent = function <atom:0>;
  <proto:MmlMo>.setTeXclass = function <atom:0>;
  <proto:MmlMo>.adjustTeXclass = function <atom:0>;
  <proto:MmlMo>.setInheritedAttributes = function <atom:0>;
  <proto:MmlMo>.getOperatorDef = function <atom:0>;
  <proto:MmlMo>.checkOperatorTable = function <atom:0>;
  <proto:MmlMo>.getForms = function <atom:0>;
  <proto:MmlMo>.handleExplicitForm = function <atom:0>;
  <proto:MmlMo>.checkPseudoScripts = function <atom:0>;
  <proto:MmlMo>.checkPrimes = function <atom:0>;
  <proto:MmlMo>.checkMathAccent = function <atom:0>;
  <proto:MmlMo>.isMathAccent = function <atom:0>;
  <proto:MmlMo>.isMathAccentWithWidth = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMo>;
  MmlMo = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMo#1 = function <atom:0>;
  exports.MmlMo = MmlMo#1;
  null;
  t.AbstractMmlTokenNode.defaults;
  MmlMo#1.defaults = {form: "infix", fence: false, separator: false, lspace: "thickmathspace", rspace: "thickmathspace", stretchy: false, symmetric: false, maxsize: "infinity", minsize: "0em", largeop: false, movablelimits: false, accent: false, linebreak: "auto", lineleading: "100%", linebreakstyle: "before", indentalign: "auto", indentshift: "0", indenttarget: "", indentalignfirst: "indentalign", indentshiftfirst: "indentshift", indentalignlast: "indentalign", indentshiftlast: "indentshift"};
  MmlMo#1.MMLSPACING = e.MMLSPACING;
  MmlMo#1.OPTABLE = e.OPTABLE;
  MmlMo#1.pseudoScripts = new RegExp(["^["'*`", "�", "�", "�-�", "�", "�", "‘-‟", "′-‷⁗", "⁰ⁱ", "⁴-ⁿ", "₀-₎", "]+$"].join(""));
  MmlMo#1.primes = new RegExp(["^["'", "‘-‟", "]+$"].join(""));
  MmlMo#1.opPattern = new RegExp("^[a-zA-Z]{2,}$");
  MmlMo#1.remapPrimes = {<bad:2147483467>: 8243, <bad:2147483472>: 8242, <bad:2147491649>: 8245, <bad:2147491650>: 8242, <bad:2147491651>: 8242, <bad:2147491652>: 8245, <bad:2147491653>: 8246, <bad:2147491654>: 8243, <bad:2147491655>: 8243, <bad:2147491656>: 8246};
  MmlMo#1.mathaccents = new RegExp(["^[", "´́ˊ", "`̀ˋ", "¨̈", "~̃˜", "¯̄ˉ", "˘̆", "ˇ̌", "^̂ˆ", "⃐⃑", "⃖⃗⃡", "˙̇", "˚̊", "⃛", "⃜", "]$"].join(""));
  MmlMo#1.mathaccentsWithWidth = new RegExp(["^[", "←→↔", "⏜⏝", "⏞⏟", "]$"].join(""));
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mo
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
