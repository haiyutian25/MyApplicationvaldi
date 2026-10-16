// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=105B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: this
function {
  this = this;
  return this.childNodes[this.node.base];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: this
function {
  this = this;
  return this.childNodes[1];
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=833B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  if ((this.getSemanticBase())) goto L_55;
  e = this.childNodes[0];
  if (!((e == null))) goto L_61;
  e;
  goto L_82;
  t = undefined.node;
  if (!(e)) goto L_2f5;
  if (!((1 === e.childNodes.length))) goto L_20f;
  if ((t.isKind("mrow"))) goto L_20f;
  if ((t.isKind("TeXAtom"))) goto L_20f;
  if ((t.isKind("mstyle"))) goto L_20f;
  if (!(t.isKind("mpadded"))) goto L_1af;
  if ((!t.getProperty("vbox"))) goto L_20f;
  if ((t.isKind("mphantom"))) goto L_20f;
  if ((t.isKind("semantics"))) goto L_268;
  if (!(t.isKind("munderover"))) goto L_2f5;
  if (!(e.isMathAccent)) goto L_2f5;
  this.setBaseAccentsFor(e);
  e = e.childNodes[0];
  e.childNodes[0];
  if (!((e == null))) goto L_2cc;
  e;
  goto L_2ed;
  t = undefined.node;
  undefined.node;
  goto L_83;
  if ((e)) goto L_314;
  this.baseHasAccentUnder = false;
  this.baseHasAccentOver = false;
  false;
  if ((e)) goto L_340;
  return this.childNodes[0];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=408B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e
// locals: this
function {
  this = this;
  if (!(e.node.isKind("munderover"))) goto L_197;
  if (!((null === this.baseHasAccentOver))) goto L_f5;
  this.baseHasAccentOver = !!e.node.attributes.get("accent");
  !!e.node.attributes.get("accent");
  if (!((null === this.baseHasAccentUnder))) goto L_197;
  this.baseHasAccentUnder = !!e.node.attributes.get("accentunder");
  !!e.node.attributes.get("accentunder");
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=188B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: e, this
function {
  this = this;
  let e;
  e = this.node.attributes.getExplicit("data-semantic-fencepointer");
  return this.getBaseFence(this.baseChild, e);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=307B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e, t
// locals: s, e#1, this
function {
  this = this;
  if ((!e)) goto L_52;
  if ((!e.node.attributes)) goto L_52;
  if (!(!t)) goto L_56;
  return null;
  if (!((e.node.attributes.getExplicit("data-semantic-id") === t))) goto L_c8;
  return e;
  let s;
  for (const s of e.childNodes) {
    let e#1;
    e#1 = this.getBaseFence(s, t);
    if (!(e#1)) continue;
    return e#1;
    // [栈深重同步 0 -> 3]
  }
  return null;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=189B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  e = this.baseCore;
  t = 1;
  if (!(e)) goto L_b9;
  if (!((e !== this))) goto L_b9;
  t = (t * e.getOuterBBox().rscale);
  (t * e.getOuterBBox().rscale);
  e = e.parent;
  e.parent;
  goto L_2d;
  return t;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=141B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: this
function {
  this = this;
  return (this.baseCore.getOuterBBox().ic * this.baseScale);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=2 bc=81B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: this
function {
  this = this;
  if (!(this.baseIc)) goto L_4f;
  return ((1.05 * this.baseIc) + 0.05);
  return 0;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=490B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: e, this
function {
  this = this;
  let e;
  e = this.baseCore;
  if (!(e.node.isKind("mo"))) goto L_9f;
  if (((null === e.size))) goto L_144;
  if ((e.node.isKind("mi"))) goto L_144;
  if (!(e.node.isKind("mn"))) goto L_1e9;
  if (!((1 === e.bbox.rscale))) goto L_1e9;
  return (1 === Array.from(e.getText()).length);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=572B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: e, this
function {
  this = this;
  if (!(this.node.isKind("munderover"))) goto L_23b;
  if (!(this.node.isKind("mover"))) goto L_f1;
  this.isLineAbove = this.isLineAccent(this.scriptChild);
  return;
  if (!(this.node.isKind("munder"))) goto L_190;
  this.isLineBelow = this.isLineAccent(this.scriptChild);
  return;
  let e;
  e = this;
  this.isLineAbove = this.isLineAccent(e.overChild);
  this.isLineBelow = this.isLineAccent(e.underChild);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=160B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e
// locals: t
function {
  let t;
  t = e.coreMO().node;
  if (!(t.isToken)) goto L_9f;
  return ("―" === t.getText());
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=392B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: e, this
function {
  this = this;
  let e;
  e = this.baseChild.getLineBBox(this.baseChild.breakCount);
  if (!(this.baseRemoveIc)) goto L_120;
  goto L_121;
  // [栈深重同步 2 -> 1]
  return (((e.w * e.rscale) - 0) + this.font.params.extra_ic);
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
function {
  return [0, 0];
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=437B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e
// locals: t, s, i, this
function {
  this = this;
  let i;
  let s;
  let t;
  t = !!this.baseCore.node.attributes.get("largeop");
  if ((!this.baseCore.node.isKind("mo"))) goto L_150;
  s = !!this.baseCore.size;
  i = this.baseScale;
  if ((!this.baseIsChar)) goto L_1af;
  if ((t)) goto L_1af;
  if ((s)) goto L_1af;
  if (!((1 !== i))) goto L_1b3;
  return e;
  return 0;
}

// fn <atom:0>  args=0 vars=6 closure=0 cpool=1 bc=797B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: e, t, s, i, n, this
function {
  this = this;
  let n;
  let i;
  let s;
  let t;
  let e;
  e = this.baseCore;
  t = e.getLineBBox(e.breakCount);
  s = this.scriptChild.getOuterBBox();
  i = this.font.params;
  n = this.length2em(this.node.attributes.get("subscriptshift"), i.sub1);
  return Math.max(this.baseCharZero(((t.d * this.baseScale) + (i.sub_drop * s.rscale))), n, ((s.h * s.rscale) - (0.8 * i.x_height)));   // tail call
}

// fn <atom:0>  args=0 vars=8 closure=0 cpool=0 bc=1044B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: e, t, s, i, n, r, a, this
function {
  this = this;
  let a;
  let r;
  let n;
  let i;
  let s;
  let t;
  let e;
  e = this.baseCore;
  t = e.getLineBBox(e.breakCount);
  s = this.scriptChild.getOuterBBox();
  i = this.font.params;
  n = this.node.attributes.getList("displaystyle", "superscriptshift");
  if (!(this.node.getProperty("texprimestyle"))) goto L_1fd;
  goto L_26d;
  // [栈深重同步 1 -> 0]
  if (!(n.displaystyle)) goto L_249;
  goto L_26d;
  // [栈深重同步 1 -> 0]
  r = i.sup2;
  a = this.length2em(n.superscriptshift, r);
  return Math.max(this.baseCharZero(((t.h * this.baseScale) - (i.sup_drop * s.rscale))), a, ((s.d * s.rscale) + ((1 / 4) * i.x_height)));   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=309B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  e = this.node.attributes.get("displaystyle");
  t = this.baseChild.coreMO().node;
  if (!(!e)) goto L_134;
  return !!t.attributes.get("movablelimits");
}

// fn <atom:0>  args=2 vars=10 closure=0 cpool=0 bc=734B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e, t
// locals: s, i, n, r, a, o, h, this
function {
  this = this;
  let h;
  let o;
  let a;
  let r;
  let n;
  let i;
  let s;
  s = this.node.attributes.get("accent");
  i = this.font.params;
  n = (t.d * t.rscale);
  r = (i.rule_thickness * i.separation_factor);
  if (!(this.baseHasAccentOver)) goto L_185;
  goto L_186;
  // [栈深重同步 1 -> 0]
  a = 0;
  if (!(this.isLineAbove)) goto L_1d5;
  goto L_1d8;
  // [栈深重同步 1 -> 0]
  o = r;
  if (!(s)) goto L_1e5;
  goto L_284;
  // [栈深重同步 1 -> 0]
  h = (Math.max(i.big_op_spacing1, (i.big_op_spacing3 - Math.max(0, n))) - a);
  return [h, (((e.h * e.rscale) + h) + n)];
}

// fn <atom:0>  args=2 vars=10 closure=0 cpool=0 bc=692B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e, t
// locals: s, i, n, r, a, o, h, this
function {
  this = this;
  let h;
  let o;
  let a;
  let r;
  let n;
  let i;
  let s;
  s = this.node.attributes.get("accentunder");
  i = this.font.params;
  n = (t.h * t.rscale);
  r = (i.rule_thickness * i.separation_factor);
  if (!(this.baseHasAccentUnder)) goto L_185;
  goto L_186;
  // [栈深重同步 1 -> 0]
  a = 0;
  if (!(this.isLineBelow)) goto L_1d5;
  goto L_1d8;
  // [栈深重同步 1 -> 0]
  o = r;
  if (!(s)) goto L_1e4;
  goto L_259;
  // [栈深重同步 1 -> 0]
  h = (Math.max(i.big_op_spacing2, (i.big_op_spacing4 - n)) - a);
  return [h, -(((e.d * e.rscale) + h) + n)];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e
function {
  return (e.w * e.rscale);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=92B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: t
// closure: r, e
function {
  if (!(e[t])) goto L_57;
  goto L_58;
  // [栈深重同步 4 -> 3]
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] + 0);
  return (<dup2#2>[<dup2#3>] + 0);
}

// fn <atom:0>  args=2 vars=12 closure=0 cpool=2 bc=749B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e, t
// locals: e#1, t#1, s, i, n, r, a, o, o#1, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_18;
  t;
  t = [0, 0, 0];
  t#1 = [0, 0, 0];
  let a;
  let r;
  let n;
  let i;
  let s;
  s = this.node.attributes.get("align");
  i = e.map(function <atom:0>);
  if (!(this.baseRemoveIc)) goto L_1a3;
  if (!(!this.baseCore.node.attributes.get("largeop"))) goto L_1a3;
  goto L_1a4;
  // [栈深重同步 4 -> 3]
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] - 0);
  // append([], 0, i)
  i;
  n = Math.max.apply(Math, []);
  r = [];
  a = 0;
  let o;
  for (const o of i.keys()) {
    if (!(("center" === s))) goto L_233;
    goto L_24c;
    // [栈深重同步 6 -> 5]
    if (!(("right" === s))) goto L_24b;
    goto L_24c;
    // [栈深重同步 6 -> 5]
    r[o] = (0 + t[o]);
    if (!((r[o] < a))) goto L_26e;
    a = -r[o];
    -r[o];
  }
  if (!(a)) goto L_2bd;
  let o#1;
  for (const o#1 of r.keys()) {
    <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] + a);
  }
  [1, 2].map(function <atom:0>);
  return r;
}

// fn <atom:0>  args=2 vars=8 closure=0 cpool=0 bc=506B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e, t
// locals: e#1, t#1, s, i, n, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_14;
  t;
  t = false;
  t#1 = false;
  let n;
  let i;
  let s;
  s = this.node.attributes.get("accent");
  if (((undefined === undefined))) goto L_dc;
  i = <to_object>(undefined).sk;
  n = <to_object>(undefined).ic;
  <to_object>(undefined);
  goto L_127;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_91;
  // [栈深重同步 1 -> 0]
  if (!(s)) goto L_17c;
  i = (i - e.getOuterBBox().sk);
  (i - e.getOuterBBox().sk);
  if (!(s)) goto L_18b;
  if (!(!t)) goto L_18b;
  goto L_18c;
  // [栈深重同步 1 -> 0]
  return ((0 + (this.font.skewIcFactor * n)) * this.baseScale);
}

// fn <atom:0>  args=0 vars=13 closure=1 cpool=0 bc=875B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: e, n, s, i, n#1, r, e#1, s#1, t, i#1, t#1, e#2, this
// closure: t
function {
  this = this;
  let i;
  let s;
  let e;
  e = [];
  let n;
  for (const n of this.childNodes) {
    if (!(n.canStretch(t.DIRECTION.Horizontal))) goto L_d5;
    e.push(n);
  }
  s = e.length;
  i = this.childNodes.length;
  if (!(s)) goto L_36a;
  if (!((i > 1))) goto L_36a;
  let r;
  let n#1;
  n#1 = 0;
  if (!((s > 1))) goto L_134;
  r = (s === i);
  let e#1;
  for (const e#1 of this.childNodes) {
    let s#1;
    s#1 = (e#1.stretch.dir === t.DIRECTION.None);
    if ((r)) goto L_1fc;
    if (!(s#1)) continue;
    let i#1;
    let t;
    if (((undefined === undefined))) goto L_258;
    t = <to_object>(undefined).w;
    i#1 = <to_object>(undefined).rscale;
    <to_object>(undefined);
    goto L_285;
    // [栈深重同步 3 -> 4]
    <?>;
    goto L_20c;
    // [栈深重同步 4 -> 3]
    if (!(((t * i#1) > n#1))) goto L_29f;
    n#1 = (t * i#1);
    (t * i#1);
  }
  let t#1;
  for (const t#1 of e) {
    let e#2;
    e#2 = t#1.coreMO();
    if (!((null === e#2.size))) goto L_360;
    e#2.getStretchedVariant([(n#1 / t#1.coreRScale())]);
  }
  return;
}

// fn <atom:0>  args=3 vars=10 closure=1 cpool=0 bc=947B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e, t, s
// locals: e#1, t#1, s#1, i, this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let s#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((s === undefined))) goto L_21;
  s;
  s = null;
  s#1 = null;
  let i;
  this = new new.target(e, t, s);
  if (!(<class_fields_init>)) goto L_41;
  <class_fields_init>.call(this);
  new new.target(e, t, s);
  this.baseScale = 1;
  this.baseIc = 0;
  this.baseRemoveIc = false;
  this.baseIsChar = false;
  this.baseHasAccentOver = null;
  this.baseHasAccentUnder = null;
  this.isLineAbove = false;
  this.isLineBelow = false;
  this.isMathAccent = false;
  this.baseCore = this.getBaseCore();
  i = this.getBaseCore();
  if (!(i)) goto L_3ae;
  this.setBaseAccentsFor(i);
  this.baseScale = this.getBaseScale();
  this.baseIc = this.getBaseIc();
  this.baseIsChar = this.isCharBase();
  if (!(this.baseIsChar)) goto L_2ad;
  if (!(this.scriptChild)) goto L_2ad;
  this.isMathAccent = (undefined !== this.scriptChild.coreMO().node.getProperty("mathaccent"));
  this.checkLineAccents();
  if (!(!this.isLineAbove)) goto L_3a4;
  if (!(!this.isLineBelow)) goto L_3a4;
  if ((!this.constructor.useIC)) goto L_3a4;
  this.baseRemoveIc = this.isMathAccent;
  this.isMathAccent;
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=282B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e, t
// locals: e#1, t#1, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_13;
  t;
  t = false;
  t#1 = false;
  e.empty();
  e.append(this.baseChild.getOuterBBox());
  this.appendScripts(e);
  e.clean();
  this.setChildPWidths(t);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=370B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e
// locals: t, s, i, this
function {
  this = this;
  let i;
  let s;
  let t;
  t = this.getBaseWidth();
  if (((undefined === undefined))) goto L_42;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_6a;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_36;
  // [栈深重同步 1 -> 0]
  e.combine(this.scriptChild.getOuterBBox(), (t + s), i);
  e.w = (e.w + this.font.params.scriptspace);
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=375B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: this
function {
  this = this;
  if (!((this._breakCount < 0))) goto L_153;
  if (!(this.node.isEmbellished)) goto L_bc;
  goto L_149;
  // [栈深重同步 2 -> 1]
  if (!(this.node.linebreakContainer)) goto L_104;
  goto L_149;
  // [栈深重同步 2 -> 1]
  this._breakCount = this.childNodes[0].breakCount;
  this.childNodes[0].breakCount;
  return this._breakCount;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=296B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: e, t
// locals: this
function {
  this = this;
  if ((this.node.linebreakContainer)) goto L_db;
  if ((!this.parent)) goto L_db;
  if (!(this.node.childIndex(t.node))) goto L_df;
  return e;
  return this.parent.breakTop(e, this);
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=560B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: t
// locals: s, i, this
// closure: e
function {
  this = this;
  let i;
  let s;
  s = this.breakCount;
  if (!(!s)) goto L_e4;
  return e.LineBBox.from(this.getOuterBBox(), this.linebreakOptions.lineleading);   // tail call
  i = this.baseChild.getLineBBox(t).copy();
  if (!((t < s))) goto L_1b1;
  if (!((0 === t))) goto L_186;
  this.addLeftBorders(i);
  goto L_22b;
  // [栈深重同步 1 -> 0]
  this.appendScripts(i);
  this.addMiddleBorders(i);
  this.addRightBorders(i);
  return i;
}

// fn s  args=1 vars=4 closure=2 cpool=29 bc=260B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: s
// locals: i, CommonScriptbaseMixin, <class_fields_init>
// closure: t, e
function {
  let CommonScriptbaseMixin;
  let <class_fields_init>;
  class CommonScriptbaseMixin extends s { ... }
  <proto:CommonScriptbaseMixin>.baseChild = function <atom:0>;
  <proto:CommonScriptbaseMixin>.scriptChild = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getBaseCore = function <atom:0>;
  <proto:CommonScriptbaseMixin>.setBaseAccentsFor = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getSemanticBase = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getBaseFence = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getBaseScale = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getBaseIc = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getAdjustedIc = function <atom:0>;
  <proto:CommonScriptbaseMixin>.isCharBase = function <atom:0>;
  <proto:CommonScriptbaseMixin>.checkLineAccents = function <atom:0>;
  <proto:CommonScriptbaseMixin>.isLineAccent = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getBaseWidth = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getOffset = function <atom:0>;
  <proto:CommonScriptbaseMixin>.baseCharZero = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getV = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getU = function <atom:0>;
  <proto:CommonScriptbaseMixin>.hasMovableLimits = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getOverKU = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getUnderKV = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getDeltaW = function <atom:0>;
  <proto:CommonScriptbaseMixin>.getDelta = function <atom:0>;
  <proto:CommonScriptbaseMixin>.stretchChildren = function <atom:0>;
  <proto:CommonScriptbaseMixin>.computeBBox = function <atom:0>;
  <proto:CommonScriptbaseMixin>.appendScripts = function <atom:0>;
  <proto:CommonScriptbaseMixin>.breakCount = function <atom:0>;
  <proto:CommonScriptbaseMixin>.breakTop = function <atom:0>;
  <proto:CommonScriptbaseMixin>.computeLineBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonScriptbaseMixin>;
  CommonScriptbaseMixin = function <atom:0>;
  // close_loc <class_fields_init>
  i = function <atom:0>;
  function <atom:0>.useIC = true;
  return i;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// args: require, module, exports
// locals: e, t, s
function {
  s = function s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CommonScriptbaseMixin = undefined;
  e = require("../LineBBox");
  t = require("../FontData");
  exports.CommonScriptbaseMixin = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/scriptbase
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
