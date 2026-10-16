// fn t  args=1 vars=3 closure=0 cpool=2 bc=186B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: e, s
function {
  let s;
  let e;
  e = t.split(new RegExp("((?:'[^'\\n]*'|\"[^\"\\n]*\"|,[\\s\\n]|[^\\s\\n])*)"));
  s = [];
  if (!((e.length > 1))) goto L_b6;
  e.shift();
  s.push(e.shift());
  goto L_35;
  return s;
}

// fn e  args=1 vars=4 closure=2 cpool=0 bc=463B file=math_jax/src/mathjax_src/util/Styles
// args: e
// locals: s, t, this
// closure: t, Styles
function {
  this = this;
  let s;
  s = t(this.styles[e]);
  if (!((0 === s.length))) goto L_5e;
  s.push("");
  if (!((1 === s.length))) goto L_95;
  s.push(s[0]);
  if (!((2 === s.length))) goto L_cc;
  s.push(s[0]);
  if (!((3 === s.length))) goto L_103;
  s.push(s[1]);
  let t;
  for (const t of Styles.connect[e].children) {
    this.setStyle(this.childName(e, t), s.shift());
  }
  return;
}

// fn s  args=1 vars=6 closure=1 cpool=0 bc=531B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: e, s, i, e#1, this
// closure: Styles
function {
  this = this;
  let s;
  let e;
  e = Styles.connect[t].children;
  s = [];
  let i;
  for (const i of e) {
    let e#1;
    e#1 = this.styles[this.childName(t, i)];
    if (!(!e#1)) goto L_e4;
    delete t;
    return undefined;
    // [栈深重同步 1 -> 3]
    s.push(e#1);
  }
  if (!((s[3] === s[1]))) goto L_1bf;
  s.pop();
  if (!((s[2] === s[0]))) goto L_1bf;
  s.pop();
  if (!((s[1] === s[0]))) goto L_1bf;
  s.pop();
  this.styles[t] = s.join(" ");
  return;
}

// fn i  args=1 vars=2 closure=2 cpool=0 bc=160B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: this
// closure: s, l
function {
  this = this;
  s.call(this, t);
  this.combineChildren(t);
  l.call(this, t);
  this.combineParent(t);
  return;
}

// fn n  args=1 vars=3 closure=1 cpool=0 bc=202B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: e, this
// closure: Styles
function {
  this = this;
  let e;
  for (const e of Styles.connect[t].children) {
    this.setStyle(this.childName(t, e), this.styles[t]);
  }
  return;
}

// fn l  args=1 vars=5 closure=1 cpool=0 bc=434B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: e, s, i, this
// closure: Styles
function {
  this = this;
  let s;
  let e;
  if (!(!Styles.connect[t])) goto L_32;
  return;
  // append([], 0, Styles.connect[t].children)
  Styles.connect[t].children;
  e = [];
  s = this.styles[this.childName(t, e.shift())];
  let i;
  for (const i of e) {
    if (!((this.styles[this.childName(t, i)] !== s))) continue;
    delete t;
    return undefined;
    // [栈深重同步 1 -> 3]
  }
  if (!(s)) goto L_1b1;
  this.styles[t] = s;
  s;
  return;
}

// fn r  args=1 vars=5 closure=3 cpool=0 bc=539B file=math_jax/src/mathjax_src/util/Styles
// args: e
// locals: s, i, t, this
// closure: t, o, Styles
function {
  this = this;
  let s;
  s = {width: "", style: "", color: ""};
  let i;
  for (const i of t(this.styles[e])) {
    if (!(i.match(o.width))) goto L_cf;
    if (!(("" === s.width))) goto L_cf;
    s.width = i;
    goto L_166;
    // [栈深重同步 4 -> 3]
    if (!(i.match(o.style))) goto L_156;
    if (!(("" === s.style))) goto L_156;
    s.style = i;
    goto L_166;
    // [栈深重同步 4 -> 3]
    s.color = i;
    i;
  }
  let t;
  for (const t of Styles.connect[e].children) {
    this.setStyle(this.childName(e, t), s[t]);
  }
  return;
}

// fn c  args=1 vars=5 closure=1 cpool=0 bc=356B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: e, s, i, this
// closure: Styles
function {
  this = this;
  let e;
  e = [];
  let s;
  for (const s of Styles.connect[t].children) {
    let i;
    i = this.styles[this.childName(t, s)];
    if (!(i)) goto L_d9;
    e.push(i);
  }
  if (!((e.length > 1))) goto L_13f;
  this.styles[t] = e.join(" ");
  goto L_163;
  // [栈深重同步 1 -> 0]
  // [栈深重同步 2 -> 1]
  this.styles;
  return;
}

// fn h  args=1 vars=8 closure=3 cpool=2 bc=776B file=math_jax/src/mathjax_src/util/Styles
// args: e
// locals: s, i, t, e#1, s#1, n, this
// closure: t, a, d
function {
  this = this;
  let i;
  let s;
  s = t(this.styles[e]);
  i = {style: "", variant: [], weight: "", stretch: "", size: "", family: "", line-height: ""};
  let t;
  const _it1 = s;
  goto L_2ad;
  t = <value(_it1)>;
  if ((i.family)) goto L_a2;
  i.family = t;
  t;
  let e#1;
  const _it2 = Object.keys(a);
  goto L_2a4;
  e#1 = <value(_it2)>;
  if ((Array.isArray(i[e#1]))) goto L_114;
  if (!(("" === i[e#1]))) goto L_2a4;
  if (!(t.match(a[e#1]))) goto L_2a4;
  if (!((i.family === t))) goto L_186;
  i.family = "";
  "";
  if (!(("size" === e#1))) goto L_1fe;
  let n;
  let s#1;
  if (((undefined === undefined))) goto L_1ab;
  const _it3 = undefined;
  <done(_it3)>;
  s#1 = <value(_it3)>;
  <done(_it3)>;
  n = <value(_it3)>;
  goto L_1da;
  <value(_it3)>;
  goto L_19d;
  // [栈深重同步 4 -> 3]
  i[e#1] = s#1;
  if (!(n)) goto L_1fa;
  i["line-height"] = n;
  n;
  goto L_2a4;
  if (!(("" === i.size))) goto L_2a3;
  if (!(Array.isArray(i[e#1]))) goto L_28a;
  goto L_2a3;
  // [栈深重同步 4 -> 3]
  if (!(("" === i[e#1]))) goto L_2a3;
  i[e#1] = t;
  t;
  if (!(<done(_it3)>)) goto L_d6;
  <value(_it3)>;
  // [栈深重同步 0 -> 3]
  if (!(<done(<?>)>)) goto L_69;
  <value(<?>)>;
  d.call(this, e, i);
  this.styles;
  delete e;
  return;
}

// fn d  args=2 vars=6 closure=1 cpool=0 bc=345B file=math_jax/src/mathjax_src/util/Styles
// args: t, e
// locals: s, i, t#1, this
// closure: Styles
function {
  this = this;
  let s;
  for (const s of Styles.connect[t].children) {
    let i;
    i = this.childName(t, s);
    if (!(Array.isArray(e[s]))) goto L_116;
    let t#1;
    t#1 = e[s];
    if (!(t#1.length)) goto L_113;
    this.styles[i] = t#1.join(" ");
    t#1.join(" ");
   continue;
    if (!(("" !== e[s]))) goto L_14e;
    this.styles[i] = e[s];
    e[s];
  }
  return;
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/util/Styles
// args: t
function {
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=66B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: t#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let t#1;
  if (!((t === undefined))) goto L_1a;
  t;
  t = "";
  t#1 = "";
  this.parse(t);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=6 bc=414B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: e, s, this
function {
  this = this;
  let s;
  let e;
  e = this.constructor.pattern;
  if (!(!t.match(e.sanitize))) goto L_9a;
  return t;
  t = t.replace(e.value, "$1");
  s = t.replace(e.value, "$1").replace(new RegExp("\\\\."), "").replace(new RegExp("(['\"]).*?\\1"), "").replace(new RegExp("[^'\"]"), "");
  if (!(s.length)) goto L_19b;
  t = (t + s.charAt(0));
  (t + s.charAt(0));
  return t;
}

// fn <atom:0>  args=0 vars=6 closure=1 cpool=2 bc=731B file=math_jax/src/mathjax_src/util/Styles
// locals: t, e, s, i, n, this
// closure: Styles
function {
  this = this;
  let t;
  t = [];
  let e;
  for (const e of Object.keys(this.styles)) {
    let n;
    let i;
    let s;
    s = this.parentName(e);
    i = e.replace(new RegExp(".*-"), "");
    n = this.childName(this.parentName(s), i);
    if ((!this.styles[e])) goto L_2a5;
    if ((this.styles[n])) goto L_2a5;
    if (!(this.styles[s])) goto L_21e;
    if (!((Styles.connect[s] == null))) goto L_1ce;
    Styles.connect[s];
    goto L_21e;
    if (!((undefined.children == null))) goto L_1f7;
    undefined.children;
    goto L_21e;
    if ((undefined.includes(i))) goto L_2a5;
    t.push("".concat(e, ": ", this.styles[e], ";"));
  }
  return t.join(" ");   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=43B file=math_jax/src/mathjax_src/util/Styles
// locals: this
function {
  this = this;
  null;
  this.styles;
  return {};
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=4 bc=428B file=math_jax/src/mathjax_src/util/Styles
// args: t, e
// locals: s, e#1, this
// closure: Styles, l
function {
  this = this;
  let s;
  t = this.normalizeName(t);
  this.setStyle(t, String(e));
  s = Styles.connect[t];
  if (!((s == null))) goto L_8c;
  s;
  goto L_ad;
  if (!(undefined.subPart)) goto L_fb;
  s.combine.call(this, t);
  return;
  this.combineParent(t);
  if (!(t.match(new RegExp("-.*-")))) goto L_1ab;
  let e#1;
  e#1 = t.replace(new RegExp("-.*-"), "-");
  l.call(this, e#1);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=2 bc=623B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: e, s, e#1, s#1, this
// closure: Styles
function {
  this = this;
  let e#1;
  if (!(t.match(new RegExp("-")))) goto L_18f;
  let s;
  let e;
  e = t;
  t = this.parentName(t);
  s = Styles.connect[t];
  if (!(!Styles.connect[e])) goto L_140;
  if (!((s == null))) goto L_c5;
  s;
  goto L_13d;
  if (!((undefined.children == null))) goto L_ee;
  undefined.children;
  goto L_13d;
  if ((!undefined.includes(e.substring((t.length + 1))))) goto L_18f;
  s.combine.call(this, t);
  goto L_6;
  if (!(!this.styles[t])) goto L_1b8;
  return;
  e#1 = Styles.connect[t];
  let s#1;
  if (!((e#1 == null))) goto L_1ed;
  e#1;
  goto L_20e;
  if ((undefined.parts)) goto L_215;
  for (const s#1 of []) {
    delete this.childName(t, s#1);
    // [栈深重同步 4 -> 3]
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=158B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: this
function {
  this = this;
  t = this.normalizeName(t);
  if (!(Object.hasOwn(this.styles, t))) goto L_9c;
  return this.styles[t];
  return "";
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=314B file=math_jax/src/mathjax_src/util/Styles
// args: t, e
// locals: this
// closure: Styles
function {
  this = this;
  this.styles[t] = this.sanitizeValue(e);
  if (!((Styles.connect[t] == null))) goto L_7b;
  Styles.connect[t];
  goto L_9c;
  if (!(undefined.children)) goto L_10d;
  Styles.connect[t].split.call(this, t);
  if (!(("" === e))) goto L_139;
  // [栈深重同步 2 -> 1]
  this.styles;
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=294B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: e, s, t#1, this
// closure: Styles
function {
  this = this;
  let e;
  e = this.parentName(t);
  let s;
  for (const s of Styles.connect[t].children) {
    let t#1;
    t#1 = this.childName(e, s);
    Styles.connect[t#1].combine.call(this, t#1);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=2 bc=60B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: e
function {
  let e;
  e = t.replace(new RegExp("-[^-]*$"), "");
  if (!((t === e))) goto L_38;
  return "";
  return e;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=4 bc=231B file=math_jax/src/mathjax_src/util/Styles
// args: t, e
// locals: this
// closure: Styles
function {
  this = this;
  if (!(e.match(new RegExp("-")))) goto L_30;
  return e;
  if (!((Styles.connect[t] == null))) goto L_5e;
  Styles.connect[t];
  goto L_7f;
  if (!(undefined.subPart)) goto L_dc;
  e = (e + t.replace(new RegExp(".*-"), "-"));
  t = this.parentName(t);
  this.parentName(t);
  return ((t + "-") + e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=44B file=math_jax/src/mathjax_src/util/Styles
// args: t
function {
  return ("-" + t.toLowerCase());
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=3 bc=44B file=math_jax/src/mathjax_src/util/Styles
// args: t
function {
  return t.replace(new RegExp("[A-Z]"), function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=4 bc=478B file=math_jax/src/mathjax_src/util/Styles
// args: t
// locals: t#1, e, s, t#2, e#1, i, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = "";
  t#1 = "";
  let s;
  let e;
  e = this.constructor.pattern;
  this.styles = {};
  s = t.replace(new RegExp("\\n"), " ").replace(e.comment, "").split(e.style);
  if (!((s.length > 1))) goto L_1dd;
  let i;
  let e#1;
  let t#2;
  if (((undefined === undefined))) goto L_152;
  const _it1 = undefined;
  <done(_it1)>;
  t#2 = <value(_it1)>;
  <done(_it1)>;
  e#1 = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_17e;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_140;
  // [栈深重同步 1 -> 0]
  if (!(t#2.match(new RegExp("[^\\s\\n;]")))) goto L_1ad;
  return;
  this.set(e#1, i);
  goto L_127;
  return;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=40 bc=1463B file=math_jax/src/mathjax_src/util/Styles
// args: require, module, exports
// locals: t, e, s, i, n, l, o, r, c, a, h, d, p, Styles, <class_fields_init>, Styles#1
function {
  t = function t;
  e = function e;
  s = function s;
  i = function i;
  n = function n;
  l = function l;
  r = function r;
  c = function c;
  h = function h;
  d = function d;
  p = function p;
  let Styles#1;
  let a;
  let o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TRBL = undefined;
  exports.WSC = undefined;
  exports.Styles = undefined;
  exports.TRBL = ["top", "right", "bottom", "left"];
  exports.WSC = ["width", "style", "color"];
  o = {width: new RegExp("^(?:[\\d.]+(?:[a-z]+)|thin|medium|thick|inherit|initial|unset)$"), style: new RegExp("^(?:none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit|initial|unset)$")};
  a = {style: new RegExp("^(?:normal|italic|oblique|inherit|initial|unset)$"), variant: new RegExp((("^(?:" + ["normal|none", "inherit|initial|unset", "common-ligatures|no-common-ligatures", "discretionary-ligatures|no-discretionary-ligatures", "historical-ligatures|no-historical-ligatures", "contextual|no-contextual", "(?:stylistic|character-variant|swash|ornaments|annotation)\([^)]*\)", "small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps", "lining-nums|oldstyle-nums|proportional-nums|tabular-nums", "diagonal-fractions|stacked-fractions", "ordinal|slashed-zero", "jis78|jis83|jis90|jis04|simplified|traditional", "full-width|proportional-width", "ruby"].join("|")) + ")$")), weight: new RegExp("^(?:normal|bold|bolder|lighter|[1-9]00|inherit|initial|unset)$"), stretch: new RegExp((("^(?:" + ["normal", "(?:(?:ultra|extra|semi)-)?(?:condensed|expanded)", "inherit|initial|unset"].join("|")) + ")$")), size: new RegExp((("^(?:" + ["xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller", "[\d.]+%|[\d.]+[a-z]+", "inherit|initial|unset"].join("|")) + ")(?:/(?:normal|[\d.]+(?:%|[a-z]+)?))?$"))};
  let Styles;
  let <class_fields_init>;
  class Styles extends undefined { ... }
  <proto:Styles>.sanitizeValue = function <atom:0>;
  <proto:Styles>.cssText = function <atom:0>;
  <proto:Styles>.styleList = function <atom:0>;
  <proto:Styles>.set = function <atom:0>;
  <proto:Styles>.combineParent = function <atom:0>;
  <proto:Styles>.get = function <atom:0>;
  <proto:Styles>.setStyle = function <atom:0>;
  <proto:Styles>.combineChildren = function <atom:0>;
  <proto:Styles>.parentName = function <atom:0>;
  <proto:Styles>.childName = function <atom:0>;
  <proto:Styles>.normalizeName = function <atom:0>;
  <proto:Styles>.parse = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Styles>;
  Styles = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Styles
  Styles#1 = function <atom:0>;
  exports.Styles = Styles#1;
  Styles#1.pattern = {sanitize: new RegExp("['\";]"), value: new RegExp("^((:?'(?:\\\\.|[^'])*(?:'|$)|\"(?:\\\\.|[^\"])*(?:\"|$)|\\n|\\\\.|[^'\";])*?)[\\s\\n]*(?:;|$).*"), style: new RegExp("([-a-z]+)[\\s\\n]*:[\\s\\n]*((?:'(?:\\\\.|[^'])*(?:'|$)|\"(?:\\\\.|[^\"])*(?:\"|$)|\\n|\\\\.|[^'\";])*?)[\\s\\n]*(?:;|$)"), comment: new RegExp("\\/\\*[^]*?\\*\\/")};
  Styles#1.connect = {padding: {children: exports.TRBL, split: e, combine: s}, margin: {children: exports.TRBL, split: e, combine: s}, border: {children: exports.TRBL, parts: exports.WSC, split: n, combine: l}, border-top: {children: exports.WSC, split: r, combine: c}, border-right: {children: exports.WSC, split: r, combine: c}, border-bottom: {children: exports.WSC, split: r, combine: c}, border-left: {children: exports.WSC, split: r, combine: c}, border-width: {children: exports.TRBL, split: e, combine: i, subPart: true}, border-style: {children: exports.TRBL, split: e, combine: i, subPart: true}, border-color: {children: exports.TRBL, split: e, combine: i, subPart: true}, font: {children: ["style", "variant", "weight", "stretch", "line-height", "size", "family"], split: h, combine: p}};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/Styles
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
