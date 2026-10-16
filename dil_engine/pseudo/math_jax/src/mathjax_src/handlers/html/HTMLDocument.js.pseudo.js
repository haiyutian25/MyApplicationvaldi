// fn <atom:0>  args=3 vars=8 closure=3 cpool=0 bc=366B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// args: t, s, n
// locals: o, r, this.active_func, new.target, this
// closure: e, i, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let r;
  let o;
  if (((undefined === undefined))) goto L_21;
  const _it1 = undefined;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_8f;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_15;
  // [栈深重同步 1 -> 0]
  this = new new.target(t, s, o);
  if (!(<class_fields_init>)) goto L_ab;
  <class_fields_init>.call(this);
  new new.target(t, s, o);
  if ((this.options.DomStrings)) goto L_124;
  this.domStrings = new i.HTMLDomStrings(r);
  this.domStrings.adaptor = s;
  this.styles = [];
  return this;
}

// fn <atom:0>  args=4 vars=10 closure=0 cpool=0 bc=266B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// args: t, e, s, n
// locals: i, o, r, h, a, this
function {
  this = this;
  let r;
  let o;
  let i;
  i = this.adaptor;
  if ((n[t].length)) goto L_3a;
  o = (1 / 1);
  r = t;
  let a;
  let h;
  const _it1 = n[t];
  goto L_ed;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  h = <value(_it2)>;
  <done(_it2)>;
  a = <value(_it2)>;
  if (!((e <= a))) goto L_db;
  if (!(("#text" === i.kind(h)))) goto L_db;
  return {i: r, node: h, n: Math.max(e, 0), delim: s};
  // [栈深重同步 0 -> 3]
  e = (e - a);
  r = (r + o);
  (r + o);
  if (!(<done(<?>)>)) goto L_4b;
  <value(<?>)>;
  return {node: null, n: 0, delim: s};
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=510B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// args: t, e, s
// locals: n, i, o, this
function {
  this = this;
  let o;
  let i;
  let n;
  n = t.math;
  i = this.findPosition(t.n, t.start.n, t.open, s);
  o = this.findPosition(t.n, t.end.n, t.close, s);
  return new this.options.MathItem(n, e, t.display, i, o);
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=858B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// args: t
// locals: s, t#1, e, this
// closure: e
function {
  this = this;
  if (!(!this.processed.isSet("findMath"))) goto L_358;
  let s;
  this.adaptor.document = this.document;
  if ((this.options.elements)) goto L_17a;
  t = e.userOptions({elements: [this.adaptor.body(this.document)]}, t);
  s = this.adaptor.getElements(t.elements, this.document);
  let t#1;
  for (const t#1 of this.inputJax) {
    let e;
    if (!(t#1.processStrings)) goto L_28d;
    goto L_2b8;
    // [栈深重同步 4 -> 3]
    e = this.findMathFromDOM(t#1, s);
    this.math.merge(e);
  }
  this.processed.set("findMath");
  return this;
}

// fn <atom:0>  args=2 vars=10 closure=0 cpool=0 bc=456B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// args: t, e
// locals: s, n, o, t#1, e#1, i, o#1, this
function {
  this = this;
  let i;
  let n;
  let s;
  s = [];
  n = [];
  let o;
  const _it1 = e;
  goto L_e6;
  o = <value(_it1)>;
  let e#1;
  let t#1;
  if (((undefined === undefined))) goto L_35;
  const _it2 = undefined;
  <done(_it2)>;
  t#1 = <value(_it2)>;
  <done(_it2)>;
  e#1 = <value(_it2)>;
  goto L_82;
  <value(_it2)>;
  goto L_28;
  // [栈深重同步 4 -> 3]
  // append([], 0, t#1)
  t#1;
  s.push.apply(s, []);
  // append([], 0, e#1)
  e#1;
  n.push.apply(n, []);
  if (!(<done(_it2)>)) goto L_1c;
  <value(_it2)>;
  i = new this.options.MathList();
  let o#1;
  for (const o#1 of t.findMath(s)) {
    i.push(this.mathItem(o#1, t, n));
  }
  return i;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=422B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// args: t, e
// locals: s, n, e#1, this
function {
  this = this;
  let s;
  s = [];
  let n;
  for (const n of e) {
    let e#1;
    for (const e#1 of t.findMath(n)) {
      s.push(new this.options.MathItem(e#1.math, t, e#1.display, e#1.start, e#1.end));
      // [栈深重同步 3 -> 6]
    }
  }
  // append([], 0, s)
  s;
  return this.options.MathList.apply(this.options.MathList, []);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=254B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if ((this.processed.isSet("updateDocument"))) goto L_fb;
  this.addPageElements();
  this.addStyleSheet();
  super["updateDocument"].call(this);
  this.processed.set("updateDocument");
  return this;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=315B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// locals: t, e, s, n, this
function {
  this = this;
  let s;
  let e;
  let t;
  t = this.adaptor;
  e = t.body(this.document);
  s = this.documentPageElements();
  if (!(s)) goto L_13a;
  let n;
  n = t.firstChild(e);
  if (!(n)) goto L_10c;
  goto L_139;
  // [栈深重同步 1 -> 0]
  t.append(e, s);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=409B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// locals: t, e, s, n, this
function {
  this = this;
  let e;
  let t;
  t = this.documentStyleSheet();
  e = this.adaptor;
  if (!(t)) goto L_198;
  if (!(!e.parent(t))) goto L_198;
  let n;
  let s;
  s = e.head(this.document);
  n = this.findSheet(s, e.getAttribute(t, "id"));
  if (!(n)) goto L_16a;
  goto L_197;
  // [栈深重同步 1 -> 0]
  e.append(s, t);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=189B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// args: t, e
// locals: s, this
function {
  this = this;
  if (!(e)) goto L_bb;
  let s;
  for (const s of this.adaptor.tags(t, "style")) {
    if (!((this.adaptor.getAttribute(s, "id") === e))) continue;
    return s;
    // [栈深重同步 0 -> 3]
  }
  return null;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=447B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// args: t
// locals: t#1, e, this
// closure: o
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = false;
  t#1 = false;
  if (!(this.processed.isSet("updateDocument"))) goto L_171;
  let e;
  for (const e of this.math) {
    if (!((e.state() >= o.STATE.INSERTED))) goto L_167;
    e.state(o.STATE.TYPESET, t);
  }
  this.processed.clear("updateDocument");
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// locals: this
function {
  this = this;
  return this.outputJax.styleSheet(this);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// locals: this
function {
  this = this;
  return this.outputJax.pageElements(this);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=190B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// args: t
// locals: this
function {
  this = this;
  this.styles.push(t);
  if (!(("insertStyles" in this.outputJax))) goto L_bd;
  this.outputJax.insertStyles(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// locals: this
function {
  this = this;
  return this.styles;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=15 bc=866B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// args: require, module, exports
// locals: t, e, s, n, i, o, HTMLDocument, <class_fields_init>, HTMLDocument#1
function {
  let HTMLDocument#1;
  let o;
  let i;
  let n;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HTMLDocument = undefined;
  t = require("../../core/MathDocument");
  e = require("../../util/Options");
  s = require("./HTMLMathItem");
  n = require("./HTMLMathList");
  i = require("./HTMLDomStrings");
  o = require("../../core/MathItem");
  o.newState("STYLES", (o.STATE.INSERTED + 1));
  let HTMLDocument;
  let <class_fields_init>;
  class HTMLDocument extends t.AbstractMathDocument { ... }
  <proto:HTMLDocument>.findPosition = function <atom:0>;
  <proto:HTMLDocument>.mathItem = function <atom:0>;
  <proto:HTMLDocument>.findMath = function <atom:0>;
  <proto:HTMLDocument>.findMathFromStrings = function <atom:0>;
  <proto:HTMLDocument>.findMathFromDOM = function <atom:0>;
  <proto:HTMLDocument>.updateDocument = function <atom:0>;
  <proto:HTMLDocument>.addPageElements = function <atom:0>;
  <proto:HTMLDocument>.addStyleSheet = function <atom:0>;
  <proto:HTMLDocument>.findSheet = function <atom:0>;
  <proto:HTMLDocument>.removeFromDocument = function <atom:0>;
  <proto:HTMLDocument>.documentStyleSheet = function <atom:0>;
  <proto:HTMLDocument>.documentPageElements = function <atom:0>;
  <proto:HTMLDocument>.addStyles = function <atom:0>;
  <proto:HTMLDocument>.getStyles = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HTMLDocument>;
  HTMLDocument = function <atom:0>;
  // close_loc <class_fields_init>
  HTMLDocument#1 = function <atom:0>;
  exports.HTMLDocument = HTMLDocument#1;
  HTMLDocument#1.KIND = "HTML";
  null;
  t.AbstractMathDocument.OPTIONS;
  null;
  t.AbstractMathDocument.OPTIONS.renderActions;
  HTMLDocument#1.OPTIONS = {renderActions: e.expandable({styles: [o.STATE.STYLES, "", "updateStyleSheet", false]}), MathList: n.HTMLMathList, MathItem: s.HTMLMathItem, DomStrings: null};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/handlers/html/HTMLDocument
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
