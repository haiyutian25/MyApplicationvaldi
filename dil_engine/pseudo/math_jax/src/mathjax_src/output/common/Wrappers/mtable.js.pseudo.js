// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: this
function {
  this = this;
  return this.childNodes;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=355B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  t = this;
  e = t.parent;
  if (!(e)) goto L_103;
  if ((e.node.notParent)) goto L_cd;
  if (!(e.node.isKind("mrow"))) goto L_103;
  t = e;
  e;
  e = e.parent;
  e.parent;
  goto L_2f;
  this.container = e;
  this.containerI = t.node.childPosition();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=356B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, this
// closure: t, s
function {
  this = this;
  if (!(this.hasLabels)) goto L_97;
  this.bbox.pwidth = t.BBox.fullWidth;
  return;
  let t;
  t = this.node.attributes.get("width");
  if (!(s.isPercent(t))) goto L_162;
  this.bbox.pwidth = t;
  t;
  return;
}

// fn <atom:0>  args=0 vars=8 closure=0 cpool=0 bc=523B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, s, i, n, h, o, this
function {
  this = this;
  let n;
  let i;
  let s;
  let e;
  let t;
  t = this.node.attributes.get("equalrows");
  if (!(t)) goto L_ad;
  goto L_ae;
  // [栈深重同步 1 -> 0]
  e = 0;
  if (((undefined === undefined))) goto L_fe;
  s = <to_object>(undefined).H;
  i = <to_object>(undefined).D;
  <to_object>(undefined);
  goto L_142;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!(t)) goto L_12c;
  goto L_b4;
  // [栈深重同步 1 -> 0]
  goto L_b4;
  // [栈深重同步 1 -> 0]
  n = this.tableRows;
  let h;
  h = 0;
  if (!((h < this.numRows))) goto L_20a;
  let o;
  if (!(t)) goto L_1cd;
  goto L_1ce;
  // [栈深重同步 1 -> 0]
  o = null;
  n[h].stretchChildren(o);
  h = <h_new>;
  (h++);
  goto L_16d;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=305B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, s, this
function {
  this = this;
  let t;
  t = this.getColumnAttributes("columnwidth", 0);
  let e;
  e = 0;
  if (!((e < this.numCols))) goto L_130;
  let s;
  if (!(("number" == typeof this.cWidths[e]))) goto L_bb;
  goto L_bc;
  // [栈深重同步 1 -> 0]
  s = null;
  this.stretchColumn(e, s);
  if (!((null !== s))) goto L_124;
  this.breakColumn(e, s, t[e]);
  e = <e_new>;
  (e++);
  goto L_36;
  return;
}

// fn <atom:0>  args=2 vars=17 closure=1 cpool=0 bc=1389B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, s
// locals: i, h, s#1, t#1, n, i#1, n#1, h#1, t#2, n#2, e, e#1, n#3, i#2, this
// closure: e
function {
  this = this;
  let n;
  let i;
  i = [];
  let h;
  for (const h of this.tableRows) {
    let s#1;
    s#1 = h.getChild(t);
    if (!(s#1)) continue;
    let t#1;
    t#1 = s#1.childNodes[0];
    if (!((t#1.stretch.dir === e.DIRECTION.None))) goto L_1c2;
    if (!(t#1.canStretch(e.DIRECTION.Horizontal))) goto L_1c2;
    i.push(t#1);
  }
  n = i.length;
  if (!(n)) goto L_3ad;
  if (!((null === s))) goto L_3ad;
  let i#1;
  s = 0;
  i#1 = (n === this.childNodes.length);
  let n#1;
  for (const n#1 of this.tableRows) {
    let h#1;
    h#1 = n#1.getChild(t);
    if (!(h#1)) continue;
    let n#2;
    let t#2;
    t#2 = h#1.childNodes[0];
    n#2 = (t#2.stretch.dir === e.DIRECTION.None);
    if ((i#1)) goto L_337;
    if (!(n#2)) continue;
    let e;
    if (((undefined === undefined))) goto L_369;
    e = <to_object>(undefined).w;
    <to_object>(undefined);
    goto L_396;
    // [栈深重同步 3 -> 4]
    <?>;
    goto L_341;
    // [栈深重同步 4 -> 3]
    if (!((e > s))) goto L_3a3;
    s = e;
    e;
  }
  if (!((null !== s))) goto L_56c;
  let e#1;
  e#1 = this.getTableData().W;
  let n#3;
  for (const n#3 of i) {
    let i#2;
    i#2 = n#3.getBBox().w;
    n#3.coreMO().getStretchedVariant([(Math.max(s, i#2) / n#3.coreRScale())]);
    i#2 = n#3.getBBox().w;
    n#3.getBBox().w;
    if (!((i#2 > e#1[t]))) goto L_562;
    e#1[t] = i#2;
    i#2;
  }
  return;
}

// fn <atom:0>  args=3 vars=14 closure=1 cpool=0 bc=1292B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e, i
// locals: n, h, o, a, s, i#1, r, l, a#1, r#1, this
// closure: s
function {
  this = this;
  let a;
  let o;
  let h;
  let n;
  if ((("linebreak" !== this.jax.math.root.attributes.get("overflow")))) goto L_12e;
  if (!(!this.jax.math.display)) goto L_131;
  return;
  if (((undefined === undefined))) goto L_180;
  n = <to_object>(undefined).H;
  h = <to_object>(undefined).D;
  <to_object>(undefined);
  goto L_1a9;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_136;
  // [栈深重同步 1 -> 0]
  o = 0;
  a = 0;
  let s;
  for (const s of this.tableRows) {
    let r#1;
    let i#1;
    i#1 = s.getChild(t);
    if (!(i#1)) goto L_414;
    let l;
    let r;
    r = s.getBBox().rscale;
    l = i#1.getBBox();
    if (!(i#1)) goto L_3b7;
    if (!(((l.w * r) > e))) goto L_3b7;
    let a#1;
    i#1.childNodes[0].breakToWidth(e);
    a#1 = s.node.attributes.get("rowalign");
    this.updateHDW(i#1, t, o, a#1, n, h);
    if (!(((l.w * r) > a))) goto L_413;
    a = (l.w * r);
    (l.w * r);
    r#1 = s.getBBox();
    r#1.h = n[o];
    r#1.d = h[o];
    o = <o_new>;
    (o++);
  }
  if ((("fit" === i))) goto L_4dd;
  if ((("auto" === i))) goto L_4dd;
  if ((s.isPercent(i))) goto L_4dd;
  if (!((a > this.cWidths[t]))) goto L_50b;
  this.cWidths[t] = a;
  a;
  return;
}

// fn <atom:0>  args=0 vars=14 closure=0 cpool=0 bc=1221B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, s, i, n, h, o, r, a, l, i#1, n#1, a#1, this
function {
  this = this;
  let a#1;
  let o;
  let h;
  let n;
  let i;
  let s;
  let e;
  let t;
  if (!(this.data)) goto L_64;
  return this.data;
  t = new Array(this.numRows).fill(0);
  e = new Array(this.numRows).fill(0);
  s = new Array(this.numCols).fill(0);
  i = new Array(this.numRows);
  n = new Array(this.numRows);
  h = [0];
  o = this.tableRows;
  let r;
  r = 0;
  if (!((r < o.length))) goto L_45e;
  let l;
  let a;
  a = o[r];
  l = a.node.attributes.get("rowalign");
  let i#1;
  i#1 = 0;
  if (!((i#1 < a.numCells))) goto L_348;
  let n#1;
  n#1 = a.getChild(i#1);
  this.updateHDW(n#1, i#1, r, l, t, e, s);
  this.recordPWidthCell(n#1, i#1);
  i#1 = <i#1_new>;
  (i#1++);
  goto L_278;
  i[r] = t[r];
  n[r] = e[r];
  if (!(a.labeled)) goto L_3ea;
  this.updateHDW(a.childNodes[0], 0, r, l, t, e, h);
  a.bbox.h = t[r];
  a.bbox.d = e[r];
  r = <r_new>;
  (r++);
  goto L_1e6;
  a#1 = h[0];
  this.data = {H: t, D: e, W: s, NH: i, ND: n, L: a#1};
  return this.data;
}

// fn <atom:0>  args=7 vars=19 closure=0 cpool=4 bc=871B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e, s, i, n, h, o
// locals: t#1, e#1, s#1, i#1, n#1, h#1, o#1, a, r, l, u, this
function {
  this = this;
  let o#1;
  let h#1;
  let n#1;
  let i#1;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  s#1 = s;
  i#1 = i;
  n#1 = n;
  h#1 = h;
  if (!((o === undefined))) goto L_36;
  o;
  o = null;
  o#1 = null;
  let u;
  let l;
  let r;
  let a;
  if (((undefined === undefined))) goto L_b9;
  a = <to_object>(undefined).h;
  r = <to_object>(undefined).d;
  l = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_e2;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_49;
  // [栈深重同步 1 -> 0]
  u = t.parent.bbox.rscale;
  if (!((1 !== t.parent.bbox.rscale))) goto L_1d5;
  a = (a * u);
  (a * u);
  r = (r * u);
  (r * u);
  l = (l * u);
  (l * u);
  if (!(this.node.getProperty("useHeight"))) goto L_247;
  if (!((a < 0.75))) goto L_236;
  a = 0.75;
  0.75;
  if (!((r < 0.25))) goto L_247;
  r = 0.25;
  0.25;
  if ((t.node.attributes.get("rowalign"))) goto L_2b9;
  i = i;
  if ((Object.hasOwn(this.adjustHD, i))) goto L_311;
  i = "other";
  "other";
  this.adjustHD[i].call(this.adjustHD, a, r, n, h, s);
  if (!(o)) goto L_366;
  if (!((l > o[e]))) goto L_366;
  o[e] = l;
  l;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=230B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e
// locals: this
function {
  this = this;
  if (!(t.childNodes[0])) goto L_e5;
  if (!(t.childNodes[0].getBBox().pwidth)) goto L_e5;
  this.pwidthCells.push([t, e]);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=236B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, s, this
function {
  this = this;
  let t;
  t = this.cWidths;
  let s;
  let e;
  const _it1 = this.pwidthCells;
  goto L_e2;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  e = <value(_it2)>;
  <done(_it2)>;
  s = <value(_it2)>;
  if (!(e.setChildPWidths(false, t[s]))) goto L_e1;
  e.invalidateBBox();
  e.getBBox();
  if (!(<done(_it1)>)) goto L_54;
  <value(_it1)>;
  return;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=339B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// locals: e, s, s#1, i, i#1, this
function {
  this = this;
  let s;
  let e;
  if (((undefined === undefined))) goto L_1a;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  goto L_43;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_e;
  // [栈深重同步 1 -> 0]
  if (!((null === s))) goto L_116;
  let i;
  let s#1;
  s#1 = this.font.params.axis_height;
  i = (t / 2);
  if (({top: [0, t], center: [i, i], bottom: [t, 0], baseline: [i, i], axis: [(i + s#1), (i - s#1)]}[e])) goto L_115;
  return [i, i];
  let i#1;
  i#1 = this.getVerticalPosition(s, e);
  return [i#1, (t - i#1)];
}

// fn <atom:0>  args=0 vars=6 closure=0 cpool=0 bc=594B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, s, i, n, this
function {
  this = this;
  if (!(this.hasLabels)) goto L_1fc;
  let n;
  let i;
  let s;
  let e;
  let t;
  t = this.node.attributes;
  e = t.get("side");
  if (((undefined === undefined))) goto L_bd;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_e9;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_b1;
  // [栈深重同步 1 -> 0]
  if (!(this.hasLabels)) goto L_13e;
  n = !!t.get("data-width-includes-label");
  if (!(n)) goto L_1c4;
  if (!(this.frame)) goto L_1c4;
  if (!(this.fSpace[0])) goto L_1c4;
  s = (s - this.fSpace[0]);
  (s - this.fSpace[0]);
  if ((("center" !== i))) goto L_1d5;
  if (!(n)) goto L_1f2;
  if (!(("left" === e))) goto L_1ea;
  return [s, 0];
  return [0, s];
  return [s, s];
  if (!((this.bbox == null))) goto L_227;
  this.bbox;
  goto L_248;
  if ((undefined.L)) goto L_24d;
  return [0, 0];
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=2 bc=842B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// locals: e, s, i, n, h, o, this
function {
  this = this;
  let o;
  let h;
  let n;
  let i;
  let s;
  let e;
  if (((undefined === undefined))) goto L_41;
  e = <to_object>(undefined).L;
  <to_object>(undefined);
  goto L_6a;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  s = (e + this.length2em(this.node.attributes.get("minlabelspacing")));
  if (((undefined === undefined))) goto L_114;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_1e1;
  // [栈深重同步 4 -> 1]
  _it1;
  if (!((null == this.styles))) goto L_143;
  goto L_107;
  // [栈深重同步 1 -> 0]
  goto L_107;
  // [栈深重同步 1 -> 0]
  if ((i)) goto L_1eb;
  if (!(n)) goto L_280;
  if ((i)) goto L_247;
  if ((n)) goto L_276;
  s = Math.max(s, this.length2em("0"), this.length2em("0"));
  Math.max(s, this.length2em("0"), this.length2em("0"));
  if (((undefined === undefined))) goto L_294;
  const _it2 = undefined;
  <done(_it2)>;
  h = <value(_it2)>;
  <done(_it2)>;
  o = <value(_it2)>;
  goto L_2bd;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_286;
  // [栈深重同步 1 -> 0]
  if (!((h === t))) goto L_33c;
  if (!(("left" === t))) goto L_304;
  goto L_338;
  // [栈深重同步 1 -> 0]
  o = (Math.min(-s, o) + s);
  (Math.min(-s, o) + s);
  return [s, h, o];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=111B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: this
function {
  this = this;
  if ((this.pWidth)) goto L_6e;
  return this.getBBox().w;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=464B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, s, i, this
function {
  this = this;
  let i;
  let s;
  let e;
  let t;
  t = this.node.attributes;
  if (!(("auto" !== t.get("width")))) goto L_89;
  return;
  if (((undefined === undefined))) goto L_9a;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  goto L_ef;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_8e;
  // [栈深重同步 1 -> 0]
  if (!(("center" === s))) goto L_172;
  goto L_173;
  // [栈深重同步 5 -> 4]
  i = Math.max((this.containerWidth / 10), ((this.containerWidth - e) - 0));
  if (!((this.naturalWidth() > i))) goto L_1cf;
  this.adjustColumnWidths(i);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=299B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, this
// closure: i
function {
  this = this;
  let t;
  t = this.getComputedWidths();
  return (((i.sum(t.concat(this.cLines, this.cSpace)) + (2 * this.fLine)) + this.fSpace[0]) + this.fSpace[2]);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=12B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: s
// closure: t, e
function {
  return (t[s] + e[s]);
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=1 bc=301B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, s, this
function {
  this = this;
  let s;
  let e;
  let t;
  if (((undefined === undefined))) goto L_5a;
  t = <to_object>(undefined).H;
  e = <to_object>(undefined).D;
  <to_object>(undefined);
  goto L_82;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_10;
  // [栈深重同步 1 -> 0]
  s = Array.from(t.keys()).map(function <atom:0>);
  // append([], 0, s)
  s;
  return Math.max.apply(Math, []);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=88B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: e
// closure: this, t
function {
  if (!(("number" == typeof this.cWidths[e]))) goto L_52;
  return this.cWidths[e];
  return t[e];
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=1 bc=405B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, this
// closure: i
function {
  this = this;
  let e;
  let t;
  t = this.getTableData().W;
  e = Array.from(t.keys()).map(function <atom:0>);
  if (!(this.node.attributes.get("equalcolumns"))) goto L_190;
  e = Array(e.length).fill(i.max(e));
  Array(e.length).fill(i.max(e));
  return e;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=527B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, this
// closure: s
function {
  this = this;
  let e;
  let t;
  t = this.node.attributes.get("width");
  if (!(this.node.attributes.get("equalcolumns"))) goto L_10b;
  return this.getEqualColumns(t);   // tail call
  e = this.getColumnAttributes("columnwidth", 0);
  if (!(("auto" === t))) goto L_16b;
  return this.getColumnWidthsAuto(e);
  if (!(s.isPercent(t))) goto L_1be;
  return this.getColumnWidthsPercent(e);
  return this.getColumnWidthsFixed(e, this.length2em(t));
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=0 bc=728B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// locals: e, n, t#1, s, this
// closure: i, s
function {
  this = this;
  let n;
  let e;
  e = Math.max(1, this.numCols);
  n = undefined;
  if (!(("auto" === t))) goto L_ed;
  let t#1;
  if (((undefined === undefined))) goto L_94;
  t#1 = <to_object>(undefined).W;
  <to_object>(undefined);
  goto L_bd;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_6d;
  // [栈深重同步 1 -> 0]
  n = i.max(t#1);
  i.max(t#1);
  goto L_288;
  if (!(s.isPercent(t))) goto L_148;
  n = this.percent((1 / e));
  this.percent((1 / e));
  goto L_288;
  let s;
  s = ((i.sum([].concat(this.cLines, this.cSpace)) + this.fSpace[0]) + this.fSpace[2]);
  n = (Math.max(0, (this.length2em(t) - s)) / e);
  (Math.max(0, (this.length2em(t) - s)) / e);
  return Array(this.numCols).fill(n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=103B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// closure: s, this
function {
  if ((("auto" === t))) goto L_12;
  if (!(("fit" === t))) goto L_16;
  return null;
  if (!(s.isPercent(t))) goto L_40;
  return t;
  return this.length2em(t);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=41B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// locals: this
// closure: s
function {
  this = this;
  return t.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=133B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: n
// locals: h
// closure: t, e, i, s, this
function {
  let h;
  h = t[n];
  if (!(("fit" === h))) goto L_14;
  return null;
  if (!(("auto" === h))) goto L_2c;
  if (!(e)) goto L_2a;
  return i[n];
  return null;
  if (!(s.isPercent(h))) goto L_5a;
  return h;
  return this.length2em(h);
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=265B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// locals: e, i, this
// closure: s
function {
  this = this;
  let i;
  let e;
  e = t.includes("fit");
  if (((undefined === undefined))) goto L_5f;
  i = <to_object>(undefined).W;
  <to_object>(undefined);
  goto L_95;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!(e)) goto L_8c;
  goto L_38;
  // [栈深重同步 1 -> 0]
  goto L_38;
  // [栈深重同步 1 -> 0]
  return Array.from(t.keys()).map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=10B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: e
// closure: t
function {
  return ("fit" === t[e]);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=10B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: e
// closure: t
function {
  return ("auto" === t[e]);
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=90B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: e
// locals: s
// closure: t, l, a, this, r
function {
  let s;
  s = t[e];
  if ((("fit" === s))) goto L_20;
  if (!(("auto" === s))) goto L_29;
  goto L_54;
  // [栈深重同步 2 -> 1]
  l = (l - this.length2em(s, r));
  (l - this.length2em(s, r));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=106B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: e
// locals: s
// closure: t, a, u, n, this, r
function {
  let s;
  s = t[e];
  if (!(("fit" === s))) goto L_1c;
  return (a[e] + u);
  if (!(("auto" === s))) goto L_3c;
  if (!((0 === n.length))) goto L_39;
  goto L_3a;
  // [栈深重同步 2 -> 1]
  return (a[e] + 0);
  return this.length2em(s, r);
}

// fn <atom:0>  args=2 vars=11 closure=1 cpool=4 bc=641B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e
// locals: s, n, h, o, a, r, l, u, this
// closure: i
function {
  this = this;
  let u;
  let l;
  let r;
  let a;
  let o;
  let h;
  let n;
  let s;
  s = Array.from(t.keys());
  n = s.filter(function <atom:0>);
  h = s.filter(function <atom:0>);
  if ((n.length)) goto L_ca;
  o = h.length;
  if (((undefined === undefined))) goto L_f8;
  a = <to_object>(undefined).W;
  <to_object>(undefined);
  goto L_12f;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!(o)) goto L_126;
  goto L_d0;
  // [栈深重同步 1 -> 0]
  goto L_d0;
  // [栈深重同步 1 -> 0]
  r = (((e - i.sum([].concat(this.cLines, this.cSpace))) - this.fSpace[0]) - this.fSpace[2]);
  l = r;
  s.forEach(function <atom:0>);
  if (!(o)) goto L_255;
  if (!((l > 0))) goto L_255;
  goto L_256;
  // [栈深重同步 1 -> 0]
  u = 0;
  return s.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// closure: n
function {
  return ("fit" === n[t]);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=12B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, s
// closure: e
function {
  return (e[s] - e[t]);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// closure: n
function {
  return ("auto" === n[t]);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=12B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, s
// closure: e
function {
  return (e[s] - e[t]);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=44B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// closure: s, n
function {
  return s.isPercent(n[t]);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=12B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, s
// closure: e
function {
  return (e[s] - e[t]);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=74B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// closure: n, s
function {
  if (!(("fit" !== n[t]))) goto L_49;
  if (!(("auto" !== n[t]))) goto L_49;
  return !s.isPercent(n[t]);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=12B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, s
// closure: e
function {
  return (e[s] - e[t]);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=88B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// closure: this, e
function {
  if (!(("number" == typeof this.cWidths[t]))) goto L_52;
  return this.cWidths[t];
  return e[t];
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=45B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// closure: this, r
function {
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] * r);
  return (<dup2#2>[<dup2#3>] * r);
}

// fn <atom:0>  args=1 vars=10 closure=3 cpool=10 bc=1118B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// locals: e, n, h, o, a, r, l, u, this
// closure: s, i, exports
function {
  this = this;
  let u;
  let l;
  let r;
  let a;
  let o;
  let h;
  let n;
  let e;
  if (((undefined === undefined))) goto L_47;
  e = <to_object>(undefined).W;
  <to_object>(undefined);
  goto L_70;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_20;
  // [栈深重同步 1 -> 0]
  n = this.getColumnAttributes("columnwidth", 0);
  h = Array.from(n.keys());
  // append([], 0, h.filter(function <atom:0>).sort(function <atom:0>))
  // append([], h.filter(function <atom:0>).sort(function <atom:0>), h.filter(function <atom:0>).sort(function <atom:0>))
  // append([], h.filter(function <atom:0>).sort(function <atom:0>), h.filter(function <atom:0>).sort(function <atom:0>))
  // append([], h.filter(function <atom:0>).sort(function <atom:0>), h.filter(function <atom:0>).sort(function <atom:0>))
  h.filter(function <atom:0>).sort(function <atom:0>);
  o = [];
  if (!(!o.length)) goto L_23c;
  return;
  this.cWidths = h.map(function <atom:0>);
  a = (((t - i.sum([].concat(this.cLines, this.cSpace))) - this.fSpace[0]) - this.fSpace[2]);
  r = (i.sum(this.cWidths) - a);
  l = 0;
  u = 0;
  if (!((u < o.length))) goto L_3fe;
  u = <u_new>;
  l = (l + e[o[(u++)]]);
  (l + e[o[(u++)]]);
  if (!(l)) goto L_3f9;
  if (!(!((r / l) < exports.BREAK_BELOW))) goto L_3fe;
  goto L_3a6;
  r = (1 - (r / l));
  (1 - (r / l));
  o.slice(0, u).forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=12 closure=0 cpool=1 bc=679B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e
// locals: s, i, n, h, o, a, u, r, l, this
function {
  this = this;
  let l;
  let r;
  let a;
  let o;
  let h;
  let n;
  let i;
  let s;
  s = this.node.attributes.get("equalrows");
  if (((undefined === undefined))) goto L_d8;
  i = <to_object>(undefined).H;
  n = <to_object>(undefined).D;
  <to_object>(undefined);
  goto L_101;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_8e;
  // [栈深重同步 1 -> 0]
  if (!(s)) goto L_12e;
  goto L_12f;
  // [栈深重同步 1 -> 0]
  h = 0;
  o = this.getRowHalfSpacing();
  a = this.fLine;
  let u;
  u = 0;
  if (!((u < t))) goto L_1f0;
  if (!(s)) goto L_19e;
  goto L_1ad;
  // [栈深重同步 3 -> 2]
  a = (a + (((o[u] + (i[u] + n[u])) + o[(u + 1)]) + this.rLines[u]));
  (a + (((o[u] + (i[u] + n[u])) + o[(u + 1)]) + this.rLines[u]));
  u = <u_new>;
  (u++);
  goto L_183;
  if (((undefined === undefined))) goto L_203;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  l = <value(_it1)>;
  goto L_23f;
  // [栈深重同步 4 -> 1]
  _it1;
  if (!(s)) goto L_230;
  goto L_1f5;
  // [栈深重同步 1 -> 0]
  goto L_1f5;
  // [栈深重同步 1 -> 0]
  if (({top: 0, center: (o[t] + ((r + l) / 2)), bottom: (((o[t] + r) + l) + o[(t + 1)]), baseline: (o[t] + r), axis: ((o[t] + r) - 0.25)}[e])) goto L_29d;
  a = (a + 0);
  (a + 0);
  return a;
}

// fn <atom:0>  args=0 vars=5 closure=1 cpool=0 bc=387B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, i, n, this
// closure: s
function {
  this = this;
  let e;
  let t;
  if (!(this.fframe)) goto L_81;
  goto L_86;
  // [栈深重同步 1 -> 0]
  t = [0, 0];
  t[2] = t[0];
  e = this.node.attributes.get("data-array-padding");
  if (!(e)) goto L_17f;
  let n;
  let i;
  if (((undefined === undefined))) goto L_11c;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_16d;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_110;
  // [栈深重同步 1 -> 0]
  t[0] = i;
  t[2] = n;
  return t;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=241B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e, s
// locals: t#1, e#1, s#1, i, this
function {
  this = this;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_18;
  s;
  s = 1;
  s#1 = 1;
  let i;
  i = this.addEm(e, (2 / s));
  i.unshift(this.em((t[0] * s)));
  i.push(this.em((t[1] * s)));
  return i;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
function {
  return (t / 2);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=234B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, this
function {
  this = this;
  let t;
  t = this.rSpace.map(function <atom:0>);
  t.unshift(this.fSpace[1]);
  t.push(this.fSpace[1]);
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
function {
  return (t / 2);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=234B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, this
function {
  this = this;
  let t;
  t = this.cSpace.map(function <atom:0>);
  t.unshift(this.fSpace[0]);
  t.push(this.fSpace[2]);
  return t;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=321B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, i, this
// closure: s
function {
  this = this;
  let i;
  let e;
  let t;
  if (((undefined === undefined))) goto L_1d;
  const _it1 = undefined;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  e = <value(_it1)>;
  goto L_b2;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_10;
  // [栈深重同步 1 -> 0]
  if (!((null == e))) goto L_c1;
  return [t, null];
  i = parseInt(e);
  if (!((i < 0))) goto L_100;
  i = (i + (this.numRows + 1));
  (i + (this.numRows + 1));
  if (((i < 1))) goto L_133;
  if (!((i > this.numRows))) goto L_138;
  goto L_13d;
  // [栈深重同步 2 -> 1]
  return [t, (i - 1)];
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=235B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e
// locals: t#1, e#1, s, i, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = 1;
  e#1 = 1;
  let i;
  let s;
  s = (this.numCols - e);
  i = this.getAttributeArray(t);
  if (!((0 === i.length))) goto L_72;
  return null;
  if (!((i.length < s))) goto L_b0;
  i.push(i[(i.length - 1)]);
  goto L_72;
  if (!((i.length > s))) goto L_e6;
  i.splice(s);
  return i;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=235B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e
// locals: t#1, e#1, s, i, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = 1;
  e#1 = 1;
  let i;
  let s;
  s = (this.numRows - e);
  i = this.getAttributeArray(t);
  if (!((0 === i.length))) goto L_72;
  return null;
  if (!((i.length < s))) goto L_b0;
  i.push(i[(i.length - 1)]);
  goto L_72;
  if (!((i.length > s))) goto L_e6;
  i.splice(s);
  return i;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=264B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// locals: e, this
// closure: s
function {
  this = this;
  let e;
  e = this.node.attributes.get(t);
  if (!(e)) goto L_9c;
  return s.split(e);
  return [this.node.attributes.getDefault(t)];
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=40B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// closure: this, e
function {
  return this.em((t / e));   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=1 bc=64B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e
// locals: t#1, e#1, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_12;
  e;
  e = 1;
  e#1 = 1;
  if (!(t)) goto L_3e;
  return t.map(function <atom:0>);
  return null;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// closure: this
function {
  return this.length2em(t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=47B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
// locals: this
function {
  this = this;
  if (!(t)) goto L_2d;
  return t.map(function <atom:0>);
  return null;
}

// fn <atom:0>  args=5 vars=5 closure=0 cpool=0 bc=72B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e, s, i, n
function {
  if (!((t > s[n]))) goto L_23;
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] - (t - s[n]));
  s[n] = t;
  t;
  if (!(((t + e) > (s[n] + i[n])))) goto L_47;
  i[n] = ((t + e) - s[n]);
  ((t + e) - s[n]);
  return;
}

// fn <atom:0>  args=5 vars=5 closure=0 cpool=0 bc=72B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e, s, i, n
function {
  if (!((e > i[n]))) goto L_23;
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] - (e - i[n]));
  i[n] = e;
  e;
  if (!(((t + e) > (s[n] + i[n])))) goto L_47;
  s[n] = ((t + e) - i[n]);
  ((t + e) - i[n]);
  return;
}

// fn <atom:0>  args=5 vars=5 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e, s, i, n
function {
  if (!(((t + e) > (s[n] + i[n])))) goto L_26;
  i[n] = ((t + e) / 2);
  s[n] = ((t + e) / 2);
  ((t + e) / 2);
  return;
}

// fn <atom:0>  args=5 vars=5 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e, s, i, n
function {
  if (!((t > s[n]))) goto L_13;
  s[n] = t;
  t;
  if (!((e > i[n]))) goto L_27;
  i[n] = e;
  e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
function {
  return t.numCells;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=81B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e
function {
  if ((t)) goto L_50;
  return e.node.isKind("mlabeledtr");
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=14B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
function {
  if (!(("none" === t))) goto L_b;
  return 0;
  return 0.07;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=14B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t
function {
  if (!(("none" === t))) goto L_b;
  return 0;
  return 0.07;
}

// fn <atom:0>  args=3 vars=11 closure=2 cpool=9 bc=1762B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e, s
// locals: t#1, e#1, s#1, n, h, this.active_func, new.target, this
// closure: <class_fields_init>, i
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_21;
  s;
  s = null;
  s#1 = null;
  let h;
  let n;
  this = new new.target(t, e, s);
  if (!(<class_fields_init>)) goto L_44;
  <class_fields_init>.call(this);
  new new.target(t, e, s);
  this.numCols = 0;
  this.numRows = 0;
  this.data = null;
  this.pwidthCells = [];
  this.pWidth = 0;
  this.adjustHD = {top: function <atom:0>, bottom: function <atom:0>, center: function <atom:0>, other: function <atom:0>};
  this.numCols = i.max(this.tableRows.map(function <atom:0>));
  this.numRows = this.childNodes.length;
  this.hasLabels = this.childNodes.reduce(function <atom:0>, false);
  this.findContainer();
  if ((!this.container)) goto L_2d9;
  if (!(this.container.node.isKind("math"))) goto L_2d9;
  this.isTop = !this.container.parent;
  if (!(this.isTop)) goto L_33b;
  this.jax.table = this;
  this;
  this.getPercentageWidth();
  n = this.node.attributes;
  h = n.get("frame");
  this.frame = ("none" !== h);
  if ((this.frame)) goto L_446;
  this.fframe = (undefined !== n.get("data-frame-styles"));
  if (!(this.frame)) goto L_47c;
  goto L_47d;
  // [栈深重同步 2 -> 1]
  this.fLine = 0;
  this.fSpace = this.getFrameSpacing();
  this.cSpace = this.convertLengths(this.getColumnAttributes("columnspacing"));
  this.rSpace = this.convertLengths(this.getRowAttributes("rowspacing"));
  this.cLines = this.getColumnAttributes("columnlines").map(function <atom:0>);
  this.rLines = this.getRowAttributes("rowlines").map(function <atom:0>);
  this.cWidths = this.getColumnWidths();
  this.adjustWideTable();
  this.stretchColumns();
  this.stretchRows();
  return this;
}

// fn <atom:0>  args=0 vars=6 closure=1 cpool=2 bc=597B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: t, e, s, t#1, this, <home_object>
// closure: n
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  let t;
  super["getStyles"].call(this);
  t = this.node.attributes.get("data-frame-styles");
  if (!(!t)) goto L_91;
  return;
  if ((this.styles)) goto L_ed;
  this.styles = new n.Styles("");
  new n.Styles("");
  e = t.split(new RegExp(" "));
  let s;
  for (const s of n.TRBL.keys()) {
    let t#1;
    t#1 = e[s];
    if (!(("none" !== t#1))) goto L_24a;
    this.styles.set("border-".concat(n.TRBL[s]), ".07em ".concat(t#1));
  }
  return;
}

// fn <atom:0>  args=2 vars=15 closure=2 cpool=0 bc=1333B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e
// locals: t#1, e#1, n, h, o, a, t#2, r, l, u, c, d, this
// closure: i, s
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_14;
  e;
  e = false;
  e#1 = false;
  let d;
  let c;
  let u;
  let l;
  let r;
  let a;
  let o;
  let h;
  let n;
  if (((undefined === undefined))) goto L_7f;
  n = <to_object>(undefined).H;
  h = <to_object>(undefined).D;
  <to_object>(undefined);
  goto L_a8;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_35;
  // [栈深重同步 1 -> 0]
  o = undefined;
  a = undefined;
  if (!(this.node.attributes.get("equalrows"))) goto L_20d;
  let t#2;
  t#2 = this.getEqualRowHeight();
  o = (i.sum([].concat(this.rLines, this.rSpace)) + (t#2 * this.numRows));
  (i.sum([].concat(this.rLines, this.rSpace)) + (t#2 * this.numRows));
  goto L_2a7;
  o = i.sum(n.concat(h, this.rLines, this.rSpace));
  i.sum(n.concat(h, this.rLines, this.rSpace));
  o = (o + (2 * (this.fLine + this.fSpace[1])));
  (o + (2 * (this.fLine + this.fSpace[1])));
  a = this.naturalWidth();
  this.naturalWidth();
  r = this.node.attributes.get("width");
  if (!(("auto" !== r))) goto L_425;
  a = Math.max((this.length2em(r, 0) + (2 * this.fLine)), a);
  Math.max((this.length2em(r, 0) + (2 * this.fLine)), a);
  if (((undefined === undefined))) goto L_439;
  const _it1 = undefined;
  <done(_it1)>;
  l = <value(_it1)>;
  <done(_it1)>;
  u = <value(_it1)>;
  goto L_465;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_42b;
  // [栈深重同步 1 -> 0]
  t.h = l;
  t.d = u;
  t.w = a;
  if (((undefined === undefined))) goto L_49f;
  const _it2 = undefined;
  <done(_it2)>;
  c = <value(_it2)>;
  <done(_it2)>;
  d = <value(_it2)>;
  goto L_4c8;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_491;
  // [栈深重同步 1 -> 0]
  t.L = c;
  t.R = d;
  if ((s.isPercent(r))) goto L_534;
  this.setColumnPWidths();
  return;
}

// fn <atom:0>  args=3 vars=11 closure=1 cpool=0 bc=1538B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: t, e, i
// locals: n, h, o, a, r, l, u, this
// closure: s
function {
  this = this;
  let u;
  let l;
  let r;
  let a;
  let o;
  let h;
  let n;
  n = this.node.attributes.get("width");
  if (!(!s.isPercent(n))) goto L_b4;
  return false;
  if ((this.hasLabels)) goto L_157;
  this.bbox.pwidth = "";
  this.container.bbox.pwidth = "";
  "";
  if (((undefined === undefined))) goto L_1ca;
  h = <to_object>(undefined).w;
  o = <to_object>(undefined).L;
  a = <to_object>(undefined).R;
  <to_object>(undefined);
  goto L_1f1;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_15d;
  // [栈深重同步 1 -> 0]
  r = this.node.attributes.get("data-width-includes-label");
  if (!(r)) goto L_2f8;
  goto L_2f9;
  // [栈深重同步 2 -> 1]
  l = (Math.max(h, this.length2em(n, Math.max(e, ((o + h) + a)))) - 0);
  if (!(this.node.attributes.get("equalcolumns"))) goto L_432;
  goto L_45e;
  // [栈深重同步 1 -> 0]
  u = this.getColumnAttributes("columnwidth", 0);
  this.cWidths = this.getColumnWidthsFixed(u, l);
  this.pWidth = this.naturalWidth();
  if (!(this.isTop)) goto L_53f;
  this.bbox.w = this.pWidth;
  this.pWidth;
  this.setColumnPWidths();
  if (!((this.pWidth !== h))) goto L_5d9;
  this.parent.invalidateBBox();
  return (this.pWidth !== h);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=163B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(this.isTop)) goto L_36;
  return super["getAlignShift"].call(this);
  return [this.container.getChildAlign(this.containerI), 0];
}

// fn h  args=1 vars=3 closure=6 cpool=41 bc=343B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: h
// locals: CommonMtableMixin, <class_fields_init>
// closure: t, s, e, i, exports, n
function {
  let CommonMtableMixin;
  let <class_fields_init>;
  class CommonMtableMixin extends h { ... }
  <proto:CommonMtableMixin>.tableRows = function <atom:0>;
  <proto:CommonMtableMixin>.findContainer = function <atom:0>;
  <proto:CommonMtableMixin>.getPercentageWidth = function <atom:0>;
  <proto:CommonMtableMixin>.stretchRows = function <atom:0>;
  <proto:CommonMtableMixin>.stretchColumns = function <atom:0>;
  <proto:CommonMtableMixin>.stretchColumn = function <atom:0>;
  <proto:CommonMtableMixin>.breakColumn = function <atom:0>;
  <proto:CommonMtableMixin>.getTableData = function <atom:0>;
  <proto:CommonMtableMixin>.updateHDW = function <atom:0>;
  <proto:CommonMtableMixin>.recordPWidthCell = function <atom:0>;
  <proto:CommonMtableMixin>.setColumnPWidths = function <atom:0>;
  <proto:CommonMtableMixin>.getBBoxHD = function <atom:0>;
  <proto:CommonMtableMixin>.getBBoxLR = function <atom:0>;
  <proto:CommonMtableMixin>.getPadAlignShift = function <atom:0>;
  <proto:CommonMtableMixin>.getWidth = function <atom:0>;
  <proto:CommonMtableMixin>.adjustWideTable = function <atom:0>;
  <proto:CommonMtableMixin>.naturalWidth = function <atom:0>;
  <proto:CommonMtableMixin>.getEqualRowHeight = function <atom:0>;
  <proto:CommonMtableMixin>.getComputedWidths = function <atom:0>;
  <proto:CommonMtableMixin>.getColumnWidths = function <atom:0>;
  <proto:CommonMtableMixin>.getEqualColumns = function <atom:0>;
  <proto:CommonMtableMixin>.getColumnWidthsAuto = function <atom:0>;
  <proto:CommonMtableMixin>.getColumnWidthsPercent = function <atom:0>;
  <proto:CommonMtableMixin>.getColumnWidthsFixed = function <atom:0>;
  <proto:CommonMtableMixin>.adjustColumnWidths = function <atom:0>;
  <proto:CommonMtableMixin>.getVerticalPosition = function <atom:0>;
  <proto:CommonMtableMixin>.getFrameSpacing = function <atom:0>;
  <proto:CommonMtableMixin>.getEmHalfSpacing = function <atom:0>;
  <proto:CommonMtableMixin>.getRowHalfSpacing = function <atom:0>;
  <proto:CommonMtableMixin>.getColumnHalfSpacing = function <atom:0>;
  <proto:CommonMtableMixin>.getAlignmentRow = function <atom:0>;
  <proto:CommonMtableMixin>.getColumnAttributes = function <atom:0>;
  <proto:CommonMtableMixin>.getRowAttributes = function <atom:0>;
  <proto:CommonMtableMixin>.getAttributeArray = function <atom:0>;
  <proto:CommonMtableMixin>.addEm = function <atom:0>;
  <proto:CommonMtableMixin>.convertLengths = function <atom:0>;
  <proto:CommonMtableMixin>.getStyles = function <atom:0>;
  <proto:CommonMtableMixin>.computeBBox = function <atom:0>;
  <proto:CommonMtableMixin>.setChildPWidths = function <atom:0>;
  <proto:CommonMtableMixin>.getAlignShift = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMtableMixin>;
  CommonMtableMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=163B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// args: require, module, exports
// locals: t, e, s, i, n, h
function {
  h = function h;
  let n;
  let i;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BREAK_BELOW = undefined;
  exports.CommonMtableMixin = undefined;
  t = require("../../../util/BBox");
  e = require("../FontData");
  s = require("../../../util/string");
  i = require("../../../util/numeric");
  n = require("../../../util/Styles");
  exports.BREAK_BELOW = 0.333;
  exports.CommonMtableMixin = h;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mtable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
