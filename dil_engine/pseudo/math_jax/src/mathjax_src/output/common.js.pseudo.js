// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/output/common
function {
  return false;
}

// fn <atom:0>  args=3 vars=14 closure=5 cpool=0 bc=1147B file=math_jax/src/mathjax_src/output/common
// args: t, e, s
// locals: t#1, e#1, s#1, r, a, l, c, p, this.active_func, new.target, this
// closure: i, o, <class_fields_init>, h, n
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let s#1;
  let e#1;
  let t#1;
  if (!((t === undefined))) goto L_1d;
  t;
  t = {};
  t#1 = {};
  if (!((e === undefined))) goto L_26;
  e;
  e = null;
  e#1 = null;
  if (!((s === undefined))) goto L_2f;
  s;
  s = null;
  s#1 = null;
  let p;
  let c;
  let l;
  let a;
  let r;
  if (((undefined === undefined))) goto L_52;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  goto L_135;
  // [栈深重同步 4 -> 1]
  _it1;
  if (!((t.fontData instanceof i.FontData))) goto L_107;
  goto L_44;
  // [栈深重同步 1 -> 0]
  if ((t.fontData)) goto L_12e;
  goto L_44;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_148;
  const _it2 = undefined;
  <done(_it2)>;
  l = <value(_it2)>;
  <done(_it2)>;
  c = <value(_it2)>;
  goto L_195;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_13a;
  // [栈深重同步 1 -> 0]
  this = new new.target(l);
  if (!(<class_fields_init>)) goto L_1b1;
  <class_fields_init>.call(this);
  new new.target(l);
  if ((this.options.wrapperFactory)) goto L_204;
  this.factory = new e();
  this.factory.jax = this;
  if ((this.options.styleJson)) goto L_2b1;
  this.styleJson = new h.StyleJsonSheet();
  if ((a)) goto L_2ce;
  this.font = new r(c);
  this.font.setOptions({mathmlSpacing: this.options.mathmlSpacing});
  this.constructor.genericFont = r;
  this.unknownCache = new Map();
  if ((this.options.linebreaks.LinebreakVisitor)) goto L_43e;
  p = n.LinebreakVisitor;
  this.linebreaks = new p(this.factory);
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=189B file=math_jax/src/mathjax_src/output/common
// args: t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["setAdaptor"].call(this, t);
  if (!(("auto" === this.options.htmlHDW))) goto L_bc;
  if (!(t.canMeasureNodes)) goto L_ad;
  goto L_b2;
  // [栈深重同步 2 -> 1]
  this.options.htmlHDW = "force";
  "force";
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=91B file=math_jax/src/mathjax_src/output/common
// args: t, e
// locals: t#1, e#1, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_12;
  e;
  e = "";
  e#1 = "";
  return this.font.addExtension(t, e);   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=323B file=math_jax/src/mathjax_src/output/common
// args: t, e
// locals: s, i, o, this
function {
  this = this;
  let o;
  let i;
  let s;
  s = this.constructor;
  i = s.genericFont;
  s.genericFont = this.font.constructor;
  this.setDocument(e);
  o = this.createNode();
  try { // catch -> L_129
  this.toDOM(t, o, e);
  <?>;
  // gosub (finally 块) 303
  undefined;
  goto L_13f;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 303
  throw <?>;
  s.genericFont = i;
  // ret (finally 块) 
  return o;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=134B file=math_jax/src/mathjax_src/output/common
// locals: t, this
function {
  this = this;
  let t;
  t = this.constructor.NAME;
  return this.html("mjx-container", {class: "MathJax", jax: t});   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=719B file=math_jax/src/mathjax_src/output/common
// args: t, e
// locals: s, t#1, i, this
// closure: r
function {
  this = this;
  let s;
  s = (this.getInitialScale() * this.options.scale);
  if (!(("scale" === e.node.attributes.get("overflow")))) goto L_251;
  if (!(this.math.display)) goto L_251;
  let i;
  let t#1;
  t#1 = e.getOuterBBox().w;
  i = (Math.max(0, (this.math.metrics.containerWidth - 4)) / this.pxPerEm);
  if (!((t#1 > i))) goto L_250;
  if (!(t#1)) goto L_250;
  s = (s * (i / t#1));
  (s * (i / t#1));
  if (!((1 !== s))) goto L_2ce;
  this.adaptor.setStyle(t, "fontSize", r.percent(s));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=103B file=math_jax/src/mathjax_src/output/common
// locals: this
function {
  this = this;
  return this.math.metrics.scale;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=0 bc=2069B file=math_jax/src/mathjax_src/output/common
// args: t, e, s
// locals: t#1, e#1, s#1, i, o, n, r, this
function {
  this = this;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_18;
  s;
  s = null;
  s#1 = null;
  let r;
  let n;
  let o;
  let i;
  this.setDocument(s);
  this.math = t;
  this.container = e;
  this.pxPerEm = (t.metrics.ex / this.font.params.x_height);
  this.executeFilters(this.preFilters, t, s, e);
  this.nodeMap = new Map();
  t.root.attributes.getAllInherited().overflow = this.options.displayOverflow;
  i = t.root.attributes.get("overflow");
  this.adaptor.setAttribute(e, "overflow", i);
  if (!(("linebreak" === i))) goto L_31f;
  this.getLinebreakWidth();
  if (!(this.options.linebreaks.inline)) goto L_3ac;
  o = !t.display;
  n = !!t.root.getProperty("inlineMarked");
  if ((!n)) goto L_56c;
  if (!(o)) goto L_47e;
  if (((this.forceInlineBreaks === t.root.getProperty("inlineForced")))) goto L_56c;
  this.unmarkInlineBreaks(t.root);
  t.root.removeProperty("inlineMarked");
  t.root.removeProperty("inlineForced");
  n = false;
  false;
  if (!(o)) goto L_6b2;
  if (!(!n)) goto L_6b2;
  if (!((t.root.childNodes == null))) goto L_5f0;
  t.root.childNodes;
  goto L_5f2;
  this.markInlineBreaks(undefined[0]);
  t.root.setProperty("inlineMarked", true);
  t.root.setProperty("inlineForced", this.forceInlineBreaks);
  t.root.setTeXclass(null);
  r = this.factory.wrap(t.root);
  this.setScale(e, r);
  this.processMath(r, e);
  this.nodeMap = null;
  this.executeFilters(this.postFilters, t, s, e);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=302B file=math_jax/src/mathjax_src/output/common
// args: t, e
// locals: s, this
function {
  this = this;
  let s;
  this.setDocument(e);
  this.math = t;
  t.root.setTeXclass(null);
  this.nodeMap = new Map();
  s = this.factory.wrap(t.root).getOuterBBox();
  this.nodeMap = null;
  return s;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=481B file=math_jax/src/mathjax_src/output/common
// locals: t, e, this
// closure: a
function {
  this = this;
  let e;
  let t;
  t = (this.math.metrics.containerWidth / this.pxPerEm);
  if ((this.math.root.attributes.get("maxwidth"))) goto L_185;
  e = this.options.linebreaks.width;
  this.containerWidth = a.length2em(e, t, 1, this.pxPerEm);
  return;
}

// fn <atom:0>  args=1 vars=12 closure=1 cpool=0 bc=2188B file=math_jax/src/mathjax_src/output/common
// args: t
// locals: e, i, o, n, r, a, l, h, c, s, this
// closure: s
function {
  this = this;
  let n;
  let o;
  let i;
  let e;
  if (!(!t)) goto L_14;
  return;
  e = this.forceInlineBreaks;
  i = false;
  o = false;
  n = "";
  let r;
  for (const r of t.childNodes) {
    if (!(n)) goto L_b8;
    o = this.markInlineBreak(o, e, n, t, r);
    this.markInlineBreak(o, e, n, t, r);
    n = "";
    "";
    i = false;
    false;
   continue;
    if (!(r.isEmbellished)) goto L_3ba;
    let c;
    let h;
    let l;
    let a;
    if (((r === t.childNodes[0]))) continue;
    a = r.coreMO();
    l = a.texClass;
    h = a.attributes.get("linebreak");
    c = a.attributes.get("linebreakstyle");
    if (((l === s.TEXCLASS.BIN))) goto L_328;
    if (((l === s.TEXCLASS.REL))) goto L_328;
    if (!((l === s.TEXCLASS.ORD))) goto L_31b;
    if ((a.hasSpacingAttributes())) goto L_328;
    if (!(("auto" !== h))) goto L_39b;
    if (!(("nobreak" !== h))) goto L_39b;
    if (!(("before" === c))) goto L_394;
    if (!(i)) goto L_354;
    if ((("auto" === h))) goto L_39b;
    o = this.markInlineBreak(o, e, h, t, r, a);
    goto L_39b;
    // [栈深重同步 4 -> 3]
    n = h;
    h;
    if (!(("newline" === h))) goto L_3b2;
    i = ("after" === c);
    ("after" === c);
   continue;
    if (!(r.isKind("mspace"))) goto L_4bb;
    let s;
    s = r.attributes.get("linebreak");
    if (!(("nobreak" !== s))) goto L_4a9;
    if (!(r.canBreak)) goto L_4a9;
    o = this.markInlineBreak(o, e, s, t, r);
    this.markInlineBreak(o, e, s, t, r);
    i = ("newline" === s);
    ("newline" === s);
   continue;
    i = false;
    false;
    if (!(r.isKind("mstyle"))) goto L_595;
    if (!(!r.attributes.get("style"))) goto L_595;
    if ((!r.attributes.hasExplicit("mathbackground"))) goto L_5c5;
    if (!(r.isKind("semantics"))) goto L_71e;
    this.markInlineBreaks(r.childNodes[0]);
    if (!(r.getProperty("process-breaks"))) goto L_881;
    r.setProperty("inline-breaks", true);
    r.childNodes[0].setProperty("inline-breaks", true);
    goto L_881;
    // [栈深重同步 4 -> 3]
    if (!(r.isKind("mrow"))) goto L_881;
    if (!(r.attributes.get("data-semantic-added"))) goto L_881;
    this.markInlineBreaks(r);
    if (!(r.getProperty("process-breaks"))) goto L_881;
    r.setProperty("inline-breaks", true);
    t.parent.setProperty("process-breaks", "true");
  }
  return;
}

// fn <atom:0>  args=6 vars=12 closure=0 cpool=0 bc=502B file=math_jax/src/mathjax_src/output/common
// args: t, e, s, i, o, n
// locals: t#1, e#1, s#1, i#1, o#1, n#1
function {
  let n#1;
  let o#1;
  let i#1;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  s#1 = s;
  i#1 = i;
  o#1 = o;
  if (!((n === undefined))) goto L_2b;
  n;
  n = null;
  n#1 = null;
  o.setProperty("breakable", true);
  if (!(e)) goto L_d1;
  if (!(("newline" !== s))) goto L_d1;
  o.setProperty("forcebreak", true);
  if (!((n == null))) goto L_a3;
  n;
  goto L_16c;
  goto L_16c;
  // [栈深重同步 1 -> 0]
  o.removeProperty("forcebreak");
  if (!((n == null))) goto L_109;
  n;
  goto L_132;
  undefined.removeProperty("forcebreak");
  if (!(("newline" === s))) goto L_16c;
  o.setProperty("newline", true);
  if ((t)) goto L_1f3;
  i.setProperty("process-breaks", true);
  i.parent.setProperty("process-breaks", true);
  t = true;
  true;
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=352B file=math_jax/src/mathjax_src/output/common
// args: t
// locals: e, this
function {
  this = this;
  if (!(t)) goto L_15f;
  t.removeProperty("forcebreak");
  t.removeProperty("breakable");
  t.coreMO().removeProperty("forcebreak");
  if (!(t.getProperty("process-breaks"))) goto L_15f;
  t.removeProperty("process-breaks");
  let e;
  for (const e of t.childNodes) {
    this.unmarkInlineBreaks(e);
  }
  return;
}

// fn <atom:0>  args=1 vars=12 closure=1 cpool=0 bc=1120B file=math_jax/src/mathjax_src/output/common
// args: t
// locals: s, i, o, t#1, s#1, n, r, a, l, h, this
// closure: e
function {
  this = this;
  let i;
  let s;
  this.setDocument(t);
  s = this.adaptor;
  i = this.getMetricMaps(t);
  let o;
  for (const o of t.math) {
    let t#1;
    t#1 = s.parent(o.start.node);
    if (!((o.state() < e.STATE.METRICS))) continue;
    if (!(t#1)) continue;
    let h;
    let l;
    let a;
    let r;
    let n;
    let s#1;
    if (!(o.display)) goto L_1cf;
    goto L_1d0;
    // [栈深重同步 5 -> 4]
    s#1 = i[0];
    if (((undefined === undefined))) goto L_293;
    n = <to_object>(undefined).em;
    r = <to_object>(undefined).ex;
    a = <to_object>(undefined).containerWidth;
    l = <to_object>(undefined).scale;
    h = <to_object>(undefined).family;
    <to_object>(undefined);
    goto L_2c1;
    // [栈深重同步 3 -> 4]
    <?>;
    goto L_1db;
    // [栈深重同步 4 -> 3]
    o.setMetrics(n, r, a, l);
    if (!(this.options.mtextInheritFont)) goto L_36e;
    o.outputData.mtextFamily = h;
    h;
    if (!(this.options.merrorInheritFont)) goto L_3e8;
    o.outputData.merrorFamily = h;
    h;
    o.state(e.STATE.METRICS);
  }
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=324B file=math_jax/src/mathjax_src/output/common
// args: t, e
// locals: s, i, o, this
function {
  this = this;
  let o;
  let i;
  let s;
  if ((this.options.mtextInheritFont)) goto L_95;
  s = this.options.merrorInheritFont;
  i = this.getTestElement(t, e);
  null;
  this.measureMetrics(i, s);
  o = {display: e};
  this.adaptor.remove(i);
  return o;
}

// fn <atom:0>  args=1 vars=13 closure=1 cpool=0 bc=1149B file=math_jax/src/mathjax_src/output/common
// args: t
// locals: s, i, r, t#1, e, o, n, e#1, t#2, e#2, t#3, this
// closure: e
function {
  this = this;
  let n;
  let o;
  let i;
  let s;
  s = this.adaptor;
  i = [new Map(), new Map()];
  let r;
  for (const r of t.math) {
    let t#1;
    t#1 = s.parent(r.start.node);
    if (!(t#1)) continue;
    if (!((r.state() < e.STATE.METRICS))) continue;
    let e;
    if (!(r.display)) goto L_18c;
    goto L_18d;
    // [栈深重同步 5 -> 4]
    e = i[0];
    if ((e.has(t#1))) goto L_235;
    e.set(t#1, this.getTestElement(t#1, r.display));
  }
  if ((this.options.mtextInheritFont)) goto L_2cb;
  o = this.options.merrorInheritFont;
  n = [new Map(), new Map()];
  let e#1;
  for (const e#1 of n.keys()) {
    let t#2;
    for (const t#2 of i[e#1].keys()) {
      n[e#1].set(t#2, this.measureMetrics(i[e#1].get(t#2), o));
      // [栈深重同步 3 -> 6]
    }
  }
  let e#2;
  for (const e#2 of n.keys()) {
    let t#3;
    for (const t#3 of i[e#2].values()) {
      s.remove(t#3);
      // [栈深重同步 3 -> 6]
    }
  }
  return n;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=1261B file=math_jax/src/mathjax_src/output/common
// args: t, e
// locals: s, t#1, this
function {
  this = this;
  let s;
  s = this.adaptor;
  if (!(!this.testInline)) goto L_455;
  let t#1;
  this.testInline = this.html("mjx-test", {style: {display: "inline-block", width: "100%", font-style: "normal", font-weight: "normal", font-size: "100%", font-size-adjust: "none", text-indent: 0, text-transform: "none", letter-spacing: "normal", word-spacing: "normal", overflow: "hidden", height: "1px", margin-right: "-1px"}}, [this.html("mjx-left-box", {style: {display: "inline-block", width: 0, float: "left"}}), this.html("mjx-ex-box", {style: {position: "absolute", overflow: "hidden", width: "1px", height: "60ex"}}), this.html("mjx-right-box", {style: {display: "inline-block", width: 0, float: "right"}})]);
  this.testDisplay = s.clone(this.testInline);
  s.setStyle(this.testDisplay, "display", "table");
  s.setStyle(this.testDisplay, "margin-right", "");
  s.setStyle(s.firstChild(this.testDisplay), "display", "none");
  t#1 = s.lastChild(this.testDisplay);
  s.setStyle(t#1, "display", "table-cell");
  s.setStyle(t#1, "width", "10000em");
  s.setStyle(t#1, "float", "");
  if (!(e)) goto L_4c5;
  goto L_4e7;
  // [栈深重同步 6 -> 5]
  return s.append(t, s.clone(this.testInline));   // tail call
}

// fn <atom:0>  args=2 vars=9 closure=0 cpool=0 bc=1041B file=math_jax/src/mathjax_src/output/common
// args: t, e
// locals: s, i, o, n, r, a, this
function {
  this = this;
  let a;
  let r;
  let n;
  let o;
  let i;
  let s;
  s = this.adaptor;
  if (!(e)) goto L_66;
  goto L_67;
  // [栈深重同步 1 -> 0]
  i = "";
  o = s.fontSize(t);
  if (((undefined === undefined))) goto L_a3;
  const _it1 = undefined;
  <done(_it1)>;
  n = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_f6;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_96;
  // [栈深重同步 1 -> 0]
  if (!(n)) goto L_103;
  goto L_14b;
  // [栈深重同步 1 -> 0]
  a = (o * this.options.exFactor);
  if (!(n)) goto L_2d6;
  if (!(("table" === s.getStyle(t, "display")))) goto L_1f1;
  goto L_2db;
  // [栈深重同步 2 -> 1]
  goto L_2db;
  // [栈深重同步 2 -> 1]
  if (!(this.options.matchFontHeight)) goto L_3ff;
  goto L_400;
  // [栈深重同步 5 -> 4]
  return {em: o, ex: a, containerWidth: 1000000, scale: Math.max(this.options.minScale, 1), family: i};
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=699B file=math_jax/src/mathjax_src/output/common
// args: t
// locals: e, this
function {
  this = this;
  this.setDocument(t);
  this.styleJson.clear();
  this.styleJson.addStyles(this.constructor.commonStyles);
  if (!(("getStyles" in t))) goto L_17f;
  let e;
  for (const e of t.getStyles()) {
    this.styleJson.addStyles(e);
  }
  this.addWrapperStyles(this.styleJson);
  this.addFontStyles(this.styleJson);
  return this.html("style", {id: "MJX-styles"}, [this.text((("
" + this.styleJson.cssText) + "
"))]);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=107B file=math_jax/src/mathjax_src/output/common
// args: t
// locals: this
function {
  this = this;
  t.addStyles(this.font.styles);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=198B file=math_jax/src/mathjax_src/output/common
// args: t
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.factory.getKinds()) {
    this.addClassStyles(this.factory.getNodeClass(e), t);
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=42B file=math_jax/src/mathjax_src/output/common
// args: t, e
// locals: this
function {
  this = this;
  t.addStyles(e, this);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common
// args: t
function {
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=97B file=math_jax/src/mathjax_src/output/common
// args: t
// locals: this
function {
  this = this;
  if (!(t)) goto L_60;
  this.document = t;
  this.adaptor.document = t.document;
  t.document;
  return;
}

// fn <atom:0>  args=4 vars=9 closure=0 cpool=0 bc=114B file=math_jax/src/mathjax_src/output/common
// args: t, e, s, i
// locals: t#1, e#1, s#1, i#1, this
function {
  this = this;
  let i#1;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_19;
  e;
  e = {};
  e#1 = {};
  if (!((s === undefined))) goto L_24;
  s;
  s = [];
  s#1 = [];
  i#1 = i;
  return this.adaptor.node(t, e, s, i);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/output/common
// args: t
// locals: this
function {
  this = this;
  return this.adaptor.text(t);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=4 bc=148B file=math_jax/src/mathjax_src/output/common
// args: t, e
// locals: t#1, e#1
function {
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_10;
  e;
  e = 3;
  e#1 = 3;
  if (!((Math.abs(t) < 0.0006))) goto L_43;
  return "0";
  return t.toFixed(e).replace(new RegExp("\\.?0+$"), "");
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=0 bc=260B file=math_jax/src/mathjax_src/output/common
// args: t, e, s
// locals: t#1, e#1, s#1, i, t#2, this
function {
  this = this;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_1f;
  s;
  s = ["", false, false];
  s#1 = ["", false, false];
  let i;
  i = this.unknownText(t, e);
  if (!(("-explicitFont" === e))) goto L_d8;
  let t#2;
  t#2 = this.cssFontStyles(s);
  this.adaptor.setAttributes(i, {style: t#2});
  return this.measureTextNodeWithCache(i, t, e, s);   // tail call
}

// fn <atom:0>  args=4 vars=12 closure=0 cpool=0 bc=513B file=math_jax/src/mathjax_src/output/common
// args: t, e, s, i
// locals: t#1, e#1, s#1, i#1, o, n, r, this
function {
  this = this;
  let i#1;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  s#1 = s;
  if (!((i === undefined))) goto L_24;
  i;
  i = ["", false, false];
  i#1 = ["", false, false];
  let r;
  let n;
  let o;
  if (!(("-explicitFont" === s))) goto L_8c;
  if (!(i[1])) goto L_48;
  goto L_4d;
  // [栈深重同步 2 -> 1]
  if (!(i[2])) goto L_59;
  goto L_5e;
  // [栈深重同步 3 -> 2]
  s = [i[0], "F", "F", ""].join("-");
  [i[0], "F", "F", ""].join("-");
  if ((this.unknownCache.has(s))) goto L_12a;
  this.unknownCache.set(s, new Map());
  o = this.unknownCache.get(s);
  n = o.get(e);
  if (!(n)) goto L_1a8;
  return n;
  r = this.measureTextNode(t);
  o.set(e, r);
  return r;
}

// fn <atom:0>  args=2 vars=8 closure=0 cpool=0 bc=183B file=math_jax/src/mathjax_src/output/common
// args: t, e
// locals: t#1, e#1, s, i, o, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = {};
  e#1 = {};
  let o;
  let i;
  let s;
  if (((undefined === undefined))) goto L_33;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  goto L_37;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_22;
  // [栈深重同步 1 -> 0]
  e["font-family"] = this.font.getFamily(s);
  if (!(i)) goto L_9e;
  e["font-style"] = "italic";
  "italic";
  if (!(o)) goto L_b4;
  e["font-weight"] = "bold";
  "bold";
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=261B file=math_jax/src/mathjax_src/output/common
// args: t
// locals: this
// closure: l
function {
  this = this;
  if ((t)) goto L_30;
  t = new l.Styles();
  new l.Styles();
  return [this.font.getFamily(t.get("font-family")), ("italic" === t.get("font-style")), ("bold" === t.get("font-weight"))];
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=36 bc=1035B file=math_jax/src/mathjax_src/output/common
// args: require, module, exports
// locals: t, e, s, i, o, n, r, a, l, h, CommonOutputJax, <class_fields_init>, CommonOutputJax#1
function {
  let CommonOutputJax#1;
  let h;
  let l;
  let a;
  let r;
  let n;
  let o;
  let i;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FONTPATH = undefined;
  exports.CommonOutputJax = undefined;
  t = require("../core/OutputJax");
  e = require("../core/MathItem");
  s = require("../core/MmlTree/MmlNode");
  i = require("./common/FontData");
  o = require("../util/Options");
  n = require("./common/LinebreakVisitor");
  r = require("../util/lengths");
  a = require("../util/lengths");
  l = require("../util/Styles");
  h = require("../util/StyleJson");
  exports.FONTPATH = "@mathjax/%%FONT%%-font";
  let CommonOutputJax;
  let <class_fields_init>;
  class CommonOutputJax extends t.AbstractOutputJax { ... }
  <proto:CommonOutputJax>.forceInlineBreaks = function <atom:0>;
  <proto:CommonOutputJax>.setAdaptor = function <atom:0>;
  <proto:CommonOutputJax>.addExtension = function <atom:0>;
  <proto:CommonOutputJax>.typeset = function <atom:0>;
  <proto:CommonOutputJax>.createNode = function <atom:0>;
  <proto:CommonOutputJax>.setScale = function <atom:0>;
  <proto:CommonOutputJax>.getInitialScale = function <atom:0>;
  <proto:CommonOutputJax>.toDOM = function <atom:0>;
  <proto:CommonOutputJax>.getBBox = function <atom:0>;
  <proto:CommonOutputJax>.getLinebreakWidth = function <atom:0>;
  <proto:CommonOutputJax>.markInlineBreaks = function <atom:0>;
  <proto:CommonOutputJax>.markInlineBreak = function <atom:0>;
  <proto:CommonOutputJax>.unmarkInlineBreaks = function <atom:0>;
  <proto:CommonOutputJax>.getMetrics = function <atom:0>;
  <proto:CommonOutputJax>.getMetricsFor = function <atom:0>;
  <proto:CommonOutputJax>.getMetricMaps = function <atom:0>;
  <proto:CommonOutputJax>.getTestElement = function <atom:0>;
  <proto:CommonOutputJax>.measureMetrics = function <atom:0>;
  <proto:CommonOutputJax>.styleSheet = function <atom:0>;
  <proto:CommonOutputJax>.addFontStyles = function <atom:0>;
  <proto:CommonOutputJax>.addWrapperStyles = function <atom:0>;
  <proto:CommonOutputJax>.addClassStyles = function <atom:0>;
  <proto:CommonOutputJax>.insertStyles = function <atom:0>;
  <proto:CommonOutputJax>.setDocument = function <atom:0>;
  <proto:CommonOutputJax>.html = function <atom:0>;
  <proto:CommonOutputJax>.text = function <atom:0>;
  <proto:CommonOutputJax>.fixed = function <atom:0>;
  <proto:CommonOutputJax>.measureText = function <atom:0>;
  <proto:CommonOutputJax>.measureTextNodeWithCache = function <atom:0>;
  <proto:CommonOutputJax>.cssFontStyles = function <atom:0>;
  <proto:CommonOutputJax>.getFontData = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonOutputJax>;
  CommonOutputJax = function <atom:0>;
  // close_loc <class_fields_init>
  CommonOutputJax#1 = function <atom:0>;
  exports.CommonOutputJax = CommonOutputJax#1;
  CommonOutputJax#1.NAME = "Common";
  null;
  t.AbstractOutputJax.OPTIONS;
  CommonOutputJax#1.OPTIONS = {scale: 1, minScale: 0.5, mtextInheritFont: false, merrorInheritFont: false, mtextFont: "", merrorFont: "serif", mathmlSpacing: false, skipAttributes: {}, exFactor: 0.5, displayAlign: "center", displayIndent: "0", displayOverflow: "overflow", linebreaks: {inline: true, width: "100%", lineleading: 0.2, LinebreakVisitor: null}, font: "", fontExtensions: [], htmlHDW: "auto", wrapperFactory: null, fontData: null, fontPath: exports.FONTPATH, styleJson: null};
  CommonOutputJax#1.commonStyles = {mjx-container[overflow="scroll"][display]: {overflow: "auto clip", min-width: "initial !important"}, mjx-container[overflow="truncate"][display]: {overflow: "hidden clip", min-width: "initial !important"}, mjx-container[display]: {display: "block", text-align: "center", justify-content: "center", margin: ".7em 0", padding: ".3em 2px"}, mjx-container[display][width="full"]: {display: "flex"}, mjx-container[justify="left"]: {text-align: "left", justify-content: "left"}, mjx-container[justify="right"]: {text-align: "right", justify-content: "right"}};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
