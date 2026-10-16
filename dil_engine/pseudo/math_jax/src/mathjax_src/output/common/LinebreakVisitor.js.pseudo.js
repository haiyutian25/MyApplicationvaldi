// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
function {
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
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

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
function {
  return 0;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=35B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// closure: exports
function {
  return exports.NOBREAK;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=76B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// closure: this
function {
  return (t - (200 * this.state.depth));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=76B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// closure: this
function {
  return (t + (200 * this.state.depth));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
function {
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=76B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// closure: this
function {
  return (t + (800 * this.state.depth));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=257B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// closure: this
function {
  return (t + Math.floor((((this.state.width - this.state.w) / this.state.width) * 2500)));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=300B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// closure: this
function {
  return (t + Math.floor(((this.state.width / Math.max(0.0001, (this.state.mathLeft - this.state.w))) * 500)));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=42B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
function {
  return t.isKind("mprescripts");   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=1 bc=866B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: s, o, r
// closure: i, this, exports
function {
  let r;
  let o;
  let s;
  s = e.node.prevClass;
  if (((s === i.TEXCLASS.BIN))) goto L_133;
  if (((s === i.TEXCLASS.REL))) goto L_133;
  if (!((s === i.TEXCLASS.OP))) goto L_13b;
  return (t + 5000);
  o = this.getPrevious(e);
  if (!(o)) goto L_21e;
  if ((("postfix" !== o.attributes.get("form")))) goto L_216;
  if (!(("nobreak" === o.attributes.get("linebreak")))) goto L_21e;
  return (t + 5000);
  r = e.node.Parent;
  if (!((r == null))) goto L_26d;
  r;
  goto L_296;
  if (!(undefined.isKind("mmultiscripts"))) goto L_35c;
  if (!((e.node === this.getFirstToken(r)))) goto L_35c;
  if (!(!!r.childNodes.filter(function <atom:0>).length)) goto L_35c;
  return exports.NOBREAK;
  return (t - 500);
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=425B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i
// closure: this, exports
function {
  let i;
  i = e.node.Parent;
  if (!((i == null))) goto L_52;
  i;
  goto L_7b;
  if ((!undefined.isKind("msubsup"))) goto L_17e;
  if (!(i.isKind("mmultiscripts"))) goto L_10a;
  if (!((i.childNodes[1] == null))) goto L_e1;
  i.childNodes[1];
  goto L_10a;
  if ((undefined.isKind("mprescripts"))) goto L_17e;
  if (!((e.node !== this.getLastToken(i.childNodes[0])))) goto L_186;
  return (t + 500);
  return exports.NOBREAK;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=217B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s
// closure: exports
function {
  let s;
  let i;
  i = e;
  if (!(!i.canBreak)) goto L_52;
  return exports.NOBREAK;
  s = i.getBBox().w;
  if (!((s < 0))) goto L_c5;
  return exports.NOBREAK;
  if (!((s < 1))) goto L_ce;
  return t;
  return (t - (100 * (s + 4)));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
function {
  return (t + 500);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=5B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
function {
  return (0.99 * t);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
function {
  return (t - 250);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
function {
  return (t - 500);
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=15 bc=392B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// locals: this, this.active_func, new.target, arguments
// closure: exports, i, <class_fields_init>
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
  this.PENALTY = {newline: function <atom:0>, nobreak: function <atom:0>, goodbreak: function <atom:0>, badbreak: function <atom:0>, auto: function <atom:0>};
  this.FACTORS = {depth: function <atom:0>, width: function <atom:0>, tail: function <atom:0>, open: function <atom:0>, close: function <atom:0>, space: function <atom:0>, separator: function <atom:0>, fuzz: function <atom:0>};
  {}[<set_name_computed#0>] = <set_name_computed#1>;
  <set_name_computed#1>;
  {}[<set_name_computed#0>] = <set_name_computed#1>;
  <set_name_computed#1>;
  this.TEXCLASS = {};
  return this;
}

// fn <atom:0>  args=2 vars=9 closure=0 cpool=0 bc=778B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s, o, o#1, r, t#1, this
function {
  this = this;
  let s;
  let i;
  i = this.state;
  this.state = this.createState(t);
  this.state.width = e;
  s = t.breakCount;
  let o;
  o = 0;
  if (!((o <= s))) goto L_16f;
  if ((t.lineBBox[o])) goto L_112;
  if (!((t.getLineBBox(o).w > e))) goto L_163;
  this.breakLineToWidth(t, o);
  o = <o_new>;
  (o++);
  goto L_b4;
  let r;
  let o#1;
  const _it1 = this.state.breaks;
  goto L_2f2;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  o#1 = <value(_it2)>;
  <done(_it2)>;
  r = <value(_it2)>;
  if (!((null === r))) goto L_29f;
  let t#1;
  t#1 = o#1.coreMO();
  if ((t#1.node.attributes.get("linebreakstyle"))) goto L_299;
  t#1.setBreakStyle("before");
  goto L_2ca;
  // [栈深重同步 4 -> 3]
  o#1.setBreakAt(r);
  o#1.invalidateBBox();
  if (!(<done(_it2)>)) goto L_1bd;
  <value(_it2)>;
  this.state = i;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=144B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// locals: e
function {
  let e;
  e = t.getBBox().w;
  return {breaks: new Set(), potential: [], width: 0, w: 0, prevWidth: 0, prevBreak: null, depth: 0, mathWidth: e, mathLeft: e};
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=147B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, this
function {
  this = this;
  let i;
  i = this.state;
  i.potential = [];
  i.w = 0;
  i.prevWidth = 0;
  i.prevBreak = null;
  i.depth = 0;
  this.visitNode(t, e);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=443B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
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
  if (!((null === e))) goto L_83;
  e = ((t.L + t.w) + t.R);
  ((t.L + t.w) + t.R);
  if (!(e)) goto L_1ba;
  e = (e * t.rscale);
  this.state.w = (this.state.w + e);
  if (!(this.state.potential.length)) goto L_194;
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] + e);
  (<dup2#2>[<dup2#3>] + e);
  this.processBreak();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
function {
  return (t + e[4]);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// closure: s
function {
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] - s);
  return (<dup2#2>[<dup2#3>] - s);
}

// fn <atom:0>  args=0 vars=7 closure=0 cpool=2 bc=941B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// locals: t, e, i, s, o, r, this
function {
  this = this;
  let t;
  t = this.state;
  if (!(t.potential.length)) goto L_3ac;
  if (!((t.w > this.state.width))) goto L_3ac;
  let r;
  let o;
  let s;
  let i;
  let e;
  e = t.potential.pop();
  if (((undefined === undefined))) goto L_139;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_13f;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_11f;
  // [栈深重同步 1 -> 0]
  t.breaks.add(i);
  t.w = t.potential.reduce(function <atom:0>, (o + r));
  if (!(t.prevBreak)) goto L_306;
  if (!(((t.prevWidth + s) <= t.width))) goto L_306;
  t.breaks.delete(t.prevBreak[0]);
  t.prevWidth = (t.prevWidth + s);
  goto L_31a;
  // [栈深重同步 1 -> 0]
  t.prevWidth = (s + o);
  (s + o);
  t.potential.forEach(function <atom:0>);
  t.prevBreak = e;
  t.mathLeft = (t.mathLeft - s);
  // close_loc s
  goto L_2a;
  return;
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=0 bc=669B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e, i, s
// locals: o, t#1, this
// closure: exports
function {
  this = this;
  let o;
  o = this.state;
  if (((e >= exports.NOBREAK))) goto L_a0;
  if (!((0 === o.w))) goto L_a0;
  if (!(!(0 === o.prevWidth))) goto L_29c;
  if (!(o.potential.length)) goto L_1f0;
  if (!((o.potential[0][1] > this.FACTORS.fuzz(e)))) goto L_1f0;
  let t#1;
  t#1 = o.potential.shift();
  if (!(o.potential.length)) goto L_1ec;
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] + t#1[4]);
  (<dup2#2>[<dup2#3>] + t#1[4]);
  goto L_a6;
  if (!((o.prevBreak == null))) goto L_28b;
  o.prevBreak;
  goto L_28d;
  if ((undefined[3])) goto L_292;
  o.potential.unshift([[t, s], e, (o.w - 0), i, 0]);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=235B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// locals: e, i, s
function {
  let s;
  let i;
  let e;
  e = t.styleData;
  if (!(!e)) goto L_38;
  return [0, 0];
  if (!((e == null))) goto L_43;
  e;
  goto L_8d;
  if (!((undefined.border == null))) goto L_6c;
  undefined.border;
  goto L_8d;
  if ((undefined.width)) goto L_98;
  i = [0, 0, 0, 0];
  if (!((e == null))) goto L_a4;
  e;
  goto L_c5;
  if ((undefined.padding)) goto L_d0;
  s = [0, 0, 0, 0];
  return [(i[3] + s[3]), (i[1] + s[1])];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=114B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// locals: this
function {
  this = this;
  if (!(t.isToken)) goto L_28;
  return t;
  return this.getFirstToken(t.childNodes[0]);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=150B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// locals: this
function {
  this = this;
  if (!(t.isToken)) goto L_28;
  return t;
  return this.getLastToken(t.childNodes[(t.childNodes.length - 1)]);
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=372B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(t)) goto L_173;
  this.state.depth = (this.state.depth ++);
  if (!(t.node.isEmbellished)) goto L_116;
  if (!(!t.node.isKind("mo"))) goto L_116;
  goto L_124;
  // [栈深重同步 1 -> 0]
  super["visitNode"].call(this, t, e);
  this.state.depth = <this.state.depth_new>;
  (this.state.depth--);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=624B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s, o, this
function {
  this = this;
  let i;
  i = t.getLineBBox(e);
  if ((t.node.isToken)) goto L_e7;
  if ((t.node.linebreakContainer)) goto L_e7;
  if (!((t.childNodes == null))) goto L_e4;
  t.childNodes;
  goto L_e6;
  if (!(!undefined[0])) goto L_113;
  this.addWidth(i);
  return;
  let o;
  let s;
  if (((undefined === undefined))) goto L_12a;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  goto L_153;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_11e;
  // [栈深重同步 1 -> 0]
  if (!((0 === e))) goto L_1aa;
  this.addWidth(i, (i.L + s));
  this.visitNode(t.childNodes[0], e);
  if (!((e === t.breakCount))) goto L_26e;
  this.addWidth(i, (i.R + o));
  return;
}

// fn <atom:0>  args=2 vars=9 closure=1 cpool=0 bc=1130B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, i
// locals: s, o, r, a, d, e, this
// closure: e
function {
  this = this;
  let d;
  let a;
  let r;
  let o;
  let s;
  s = t.coreMO();
  o = e.LineBBox.from(t.getOuterBBox(), t.linebreakOptions.lineleading);
  o.getIndentData(s.node);
  r = s.getBreakStyle(s.node.attributes.get("linebreakstyle"));
  a = s.processIndent("", o.indentData[1][1], "", o.indentData[0][1], this.state.width)[1];
  d = this.moPenalty(s);
  if (!(("before" === r))) goto L_343;
  this.pushBreak(t, d, (a - o.L), null);
  this.addWidth(o);
  return;
  let e;
  this.addWidth(o);
  if (!(("after" === r))) goto L_37f;
  goto L_434;
  // [栈深重同步 1 -> 0]
  if (!(s.multChar)) goto L_410;
  goto L_434;
  // [栈深重同步 1 -> 0]
  e = (o.w + a);
  this.pushBreak(t, d, e, null);
  return;
}

// fn <atom:0>  args=2 vars=9 closure=1 cpool=0 bc=1098B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, i
// locals: s, o, r, a, d, e, this
// closure: e
function {
  this = this;
  let d;
  let a;
  let r;
  let o;
  let s;
  s = t;
  o = e.LineBBox.from(s.getOuterBBox(), s.linebreakOptions.lineleading);
  o.getIndentData(s.node);
  r = s.getBreakStyle(s.node.attributes.get("linebreakstyle"));
  a = s.processIndent("", o.indentData[1][1], "", o.indentData[0][1], this.state.width)[1];
  d = this.moPenalty(s);
  if (!(("before" === r))) goto L_323;
  this.pushBreak(t, d, (a - o.L), null);
  this.addWidth(o);
  return;
  let e;
  this.addWidth(o);
  if (!(("after" === r))) goto L_35f;
  goto L_414;
  // [栈深重同步 1 -> 0]
  if (!(s.multChar)) goto L_3f0;
  goto L_414;
  // [栈深重同步 1 -> 0]
  e = (o.w + a);
  this.pushBreak(t, d, e, null);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
function {
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
function {
  return t;
}

// fn <atom:0>  args=1 vars=9 closure=1 cpool=2 bc=1185B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// locals: e, s, o, r, a, d, n, this
// closure: i
function {
  this = this;
  let n;
  let d;
  let a;
  let r;
  let o;
  let s;
  let e;
  if (((undefined === undefined))) goto L_8a;
  e = <to_object>(undefined).linebreak;
  s = <to_object>(undefined).fence;
  o = <to_object>(undefined).form;
  <to_object>(undefined);
  goto L_104;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  r = this.FACTORS;
  a = r.tail(r.width(0));
  if (!(s)) goto L_189;
  if ((("prefix" === o))) goto L_219;
  d = (t.node.texClass === i.TEXCLASS.OPEN);
  if (!(s)) goto L_22b;
  if ((("postfix" === o))) goto L_2bb;
  n = (t.node.texClass === i.TEXCLASS.CLOSE);
  if (!(d)) goto L_346;
  a = r.open(a, t);
  r.open(a, t);
  this.state.depth = <this.state.depth_new>;
  (this.state.depth++);
  if (!(n)) goto L_3d0;
  a = r.close(a, t);
  r.close(a, t);
  this.state.depth = <this.state.depth_new>;
  (this.state.depth--);
  if ((this.TEXCLASS[t.node.texClass])) goto L_43e;
  a = function <atom:0>(a);
  function <atom:0>(a);
  if ((this.PENALTY[e])) goto L_474;
  return function <atom:0>(r.depth(a));   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=466B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// locals: e, i, s, o
function {
  let o;
  let s;
  let i;
  let e;
  e = t.node;
  i = e.parent;
  s = i.childIndex(e);
  if (!(i)) goto L_147;
  if ((i.notParent)) goto L_db;
  if (!(i.isKind("mrow"))) goto L_147;
  if (!((0 === s))) goto L_147;
  e = i;
  i;
  i = e.parent;
  e.parent;
  s = i.childIndex(e);
  i.childIndex(e);
  goto L_7f;
  if ((!i)) goto L_153;
  if (!(!s)) goto L_157;
  return null;
  o = i.childNodes[(s - 1)];
  if (!(o.isEmbellished)) goto L_1d0;
  return o.coreMO();
  return null;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=529B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s, e#1, o, this
function {
  this = this;
  let s;
  let i;
  i = t.getLineBBox(e);
  s = t;
  if (!(s.canBreak)) goto L_1e7;
  let o;
  let e#1;
  e#1 = this.mspacePenalty(s);
  i.getIndentData(t.node);
  o = t.processIndent("", i.indentData[1][1], "", i.indentData[0][1], this.state.width)[1];
  this.pushBreak(t, e#1, (o - i.w), null);
  this.addWidth(i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
function {
  return t;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=1 bc=364B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t
// locals: e, i, s, this
function {
  this = this;
  let s;
  let i;
  let e;
  e = t.node.attributes.get("linebreak");
  i = this.FACTORS;
  s = i.space(i.tail(i.width(0)), t);
  if ((this.PENALTY[e])) goto L_13f;
  return function <atom:0>(i.depth(s));   // tail call
}

// fn <atom:0>  args=2 vars=14 closure=0 cpool=4 bc=1291B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s, o, r, a, d, n, e#1, r#1, a#1, e#2, this
function {
  this = this;
  let d;
  let a;
  let r;
  let o;
  let s;
  let i;
  if (!(!t.getText().match(new RegExp(" ")))) goto L_90;
  this.visitDefault(t, e);
  return;
  i = t;
  i.clearBreakPoints();
  s = i.textWidth(" ");
  o = t.getBBox();
  if (((undefined === undefined))) goto L_11f;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  goto L_149;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_112;
  // [栈深重同步 1 -> 0]
  this.addWidth(o, (o.L + r));
  d = i.childNodes;
  let n;
  for (const n of d.keys()) {
    let e#1;
    e#1 = d[n];
    if (!(e#1.node.isKind("text"))) goto L_462;
    let a#1;
    let r#1;
    r#1 = e#1.node.getText().split(new RegExp(" "));
    a#1 = r#1.pop();
    let e#2;
    for (const e#2 of r#1.keys()) {
      this.addWidth(o, i.textWidth(r#1[e#2]));
      this.pushBreak(t, this.mtextPenalty(), -s, [n, (e#2 + 1)]);
      this.addWidth(o, s);
      // [栈深重同步 3 -> 6]
    }
    this.addWidth(o, i.textWidth(a#1));
   continue;
    this.addWidth(e#1.getBBox());
  }
  this.addWidth(o, (o.R + a));
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=158B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// locals: t, this
function {
  this = this;
  let t;
  t = this.FACTORS;
  return t.depth(t.tail(t.width(0)));   // tail call
}

// fn <atom:0>  args=2 vars=11 closure=0 cpool=0 bc=628B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s, o, r, a, d, n, h, this
function {
  this = this;
  let n;
  let d;
  let a;
  let r;
  let o;
  let s;
  let i;
  if ((t.lineBBox[e])) goto L_66;
  i = t.getLineBBox(e);
  if (((undefined === undefined))) goto L_78;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  goto L_a8;
  // [栈深重同步 4 -> 1]
  _it1;
  if ((i.start)) goto L_6c;
  goto L_6c;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_ba;
  const _it2 = undefined;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  a = <value(_it2)>;
  goto L_10e;
  // [栈深重同步 4 -> 1]
  _it2;
  if ((i.end)) goto L_ad;
  goto L_ad;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_121;
  const _it3 = undefined;
  <done(_it3)>;
  d = <value(_it3)>;
  <done(_it3)>;
  n = <value(_it3)>;
  goto L_14b;
  // [栈深重同步 4 -> 1]
  _it3;
  goto L_113;
  // [栈深重同步 1 -> 0]
  this.addWidth(i, (i.L + d));
  let h;
  h = s;
  if (!((h <= r))) goto L_222;
  if (!((h === s))) goto L_205;
  goto L_214;
  // [栈深重同步 4 -> 3]
  if (!((h === r))) goto L_213;
  goto L_214;
  // [栈深重同步 4 -> 3]
  this.visitNode(t.childNodes[h], 0);
  h = <h_new>;
  (h++);
  goto L_1a5;
  this.addWidth(i, (i.R + n));
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=197B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: this
function {
  this = this;
  this.state.depth = (this.state.depth --);
  this.visitMrowNode(t, e);
  this.state.depth = (this.state.depth ++);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=598B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, this
function {
  this = this;
  let i;
  i = t;
  if (!(!i.node.attributes.get("bevelled"))) goto L_22d;
  if (!((i.getOuterBBox().w > this.state.width))) goto L_22d;
  this.breakToWidth(i.childNodes[0], this.state.width);
  this.breakToWidth(i.childNodes[1], this.state.width);
  this.visitDefault(t, e);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=455B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: e#1, i, this
function {
  this = this;
  if (!((t.getOuterBBox().w > this.state.width))) goto L_19f;
  let i;
  let e#1;
  e#1 = t;
  i = e#1.childNodes[e#1.base];
  this.breakToWidth(i, (this.state.width - e#1.rootWidth()));
  e#1.getStretchedSurd();
  this.visitDefault(t, e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=42B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: this
function {
  this = this;
  this.visitMsqrtNode(t, e);
  return;
}

// fn <atom:0>  args=2 vars=8 closure=0 cpool=0 bc=503B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s, o, r, a, this
function {
  this = this;
  let a;
  let r;
  let o;
  let s;
  let i;
  this.visitDefault(t, e);
  i = t;
  s = i.getOffset()[0];
  o = i.scriptChild.getOuterBBox();
  if (((undefined === undefined))) goto L_c2;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  goto L_ec;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_b5;
  // [栈深重同步 1 -> 0]
  this.addWidth(i.getLineBBox(e), ((((s + r) + (o.rscale * o.w)) + i.font.params.scriptspace) + a));
  return;
}

// fn <atom:0>  args=2 vars=8 closure=0 cpool=0 bc=503B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s, o, r, a, this
function {
  this = this;
  let a;
  let r;
  let o;
  let s;
  let i;
  this.visitDefault(t, e);
  i = t;
  s = i.getOffset()[0];
  o = i.scriptChild.getOuterBBox();
  if (((undefined === undefined))) goto L_c2;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  goto L_ec;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_b5;
  // [栈深重同步 1 -> 0]
  this.addWidth(i.getLineBBox(e), ((((s + r) + (o.rscale * o.w)) + i.font.params.scriptspace) + a));
  return;
}

// fn <atom:0>  args=2 vars=10 closure=0 cpool=0 bc=698B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s, o, r, a, d, n, this
function {
  this = this;
  let n;
  let d;
  let a;
  let r;
  let o;
  let s;
  let i;
  this.visitDefault(t, e);
  i = t;
  s = i.subChild.getOuterBBox();
  o = i.supChild.getOuterBBox();
  r = i.getAdjustedIc();
  a = (Math.max((s.rscale * s.w), (r + (o.rscale * o.w))) + i.font.params.scriptspace);
  if (((undefined === undefined))) goto L_238;
  const _it1 = undefined;
  <done(_it1)>;
  d = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_262;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_22a;
  // [栈深重同步 1 -> 0]
  this.addWidth(t.getLineBBox(e), ((d + a) + n));
  return;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=1184B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s, o, o#1, this
function {
  this = this;
  let s;
  let i;
  i = t;
  s = i.scriptData;
  if (!(s.numPrescripts)) goto L_253;
  let o;
  o = Math.max((s.psup.rscale * s.psup.w), (s.psub.rscale * s.psub.w));
  this.addWidth(t.getLineBBox(e), (o + i.font.params.scriptspace));
  this.visitDefault(t, e);
  if (!(s.numScripts)) goto L_49f;
  let o#1;
  o#1 = Math.max((s.sup.rscale * s.sup.w), (s.sub.rscale * s.sub.w));
  this.addWidth(t.getLineBBox(e), (o#1 + i.font.params.scriptspace));
  return;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=402B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s, o, r, this
function {
  this = this;
  let r;
  let o;
  let s;
  let i;
  i = t;
  s = t.getLineBBox(e);
  if (((undefined === undefined))) goto L_49;
  const _it1 = undefined;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_73;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_3d;
  // [栈深重同步 1 -> 0]
  if (!((0 === e))) goto L_cb;
  this.addWidth(s, (s.L + o));
  this.visitNode(i.mrow, e);
  if (!((e === t.breakCount))) goto L_191;
  this.addWidth(s, (s.R + r));
  return;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=402B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: t, e
// locals: i, s, o, r, this
function {
  this = this;
  let r;
  let o;
  let s;
  let i;
  i = t;
  s = t.getLineBBox(e);
  if (((undefined === undefined))) goto L_49;
  const _it1 = undefined;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_73;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_3d;
  // [栈深重同步 1 -> 0]
  if (!((0 === e))) goto L_cb;
  this.addWidth(s, (s.L + o));
  this.visitNode(i.selected, e);
  if (!((e === t.breakCount))) goto L_191;
  this.addWidth(s, (s.R + r));
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=519B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// locals: t, e
// closure: s
function {
  let t;
  for (const t of Object.keys(s.OPTABLE.postfix)) {
    let e;
    e = s.OPTABLE.postfix[t][3];
    if (!(e)) goto L_106;
    if (!(e.fence)) goto L_106;
    e.linebreakstyle = "after";
    "after";
  }
  // append([], 0, s.OPTABLE.infix["⁡"])
  s.OPTABLE.infix["⁡"];
  s.OPTABLE.infix["⁡"] = [];
  s.OPTABLE.infix["⁡"][3] = {linebreak: "nobreak"};
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=34 bc=521B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// args: require, module, exports
// locals: t, e, i, s, Linebreaks, <class_fields_init>, Linebreaks#1, LinebreakVisitor, <class_fields_init>#1, LinebreakVisitor#1
function {
  let LinebreakVisitor#1;
  let Linebreaks#1;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NOBREAK = undefined;
  exports.Linebreaks = undefined;
  exports.LinebreakVisitor = undefined;
  t = require("../../core/Tree/Visitor");
  e = require("./LineBBox");
  i = require("../../core/MmlTree/MmlNode");
  s = require("../../core/MmlTree/OperatorDictionary");
  exports.NOBREAK = 1000000;
  let Linebreaks;
  let <class_fields_init>;
  class Linebreaks extends t.AbstractVisitor { ... }
  <proto:Linebreaks>.breakToWidth = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Linebreaks>;
  Linebreaks = function <atom:0>;
  // close_loc <class_fields_init>
  Linebreaks#1 = function <atom:0>;
  exports.Linebreaks = Linebreaks#1;
  let LinebreakVisitor;
  let <class_fields_init>#1;
  class LinebreakVisitor extends Linebreaks#1 { ... }
  <proto:LinebreakVisitor>.breakToWidth = function <atom:0>;
  <proto:LinebreakVisitor>.createState = function <atom:0>;
  <proto:LinebreakVisitor>.breakLineToWidth = function <atom:0>;
  <proto:LinebreakVisitor>.addWidth = function <atom:0>;
  <proto:LinebreakVisitor>.processBreak = function <atom:0>;
  <proto:LinebreakVisitor>.pushBreak = function <atom:0>;
  <proto:LinebreakVisitor>.getBorderLR = function <atom:0>;
  <proto:LinebreakVisitor>.getFirstToken = function <atom:0>;
  <proto:LinebreakVisitor>.getLastToken = function <atom:0>;
  <proto:LinebreakVisitor>.visitNode = function <atom:0>;
  <proto:LinebreakVisitor>.visitDefault = function <atom:0>;
  <proto:LinebreakVisitor>.visitEmbellishedOperator = function <atom:0>;
  <proto:LinebreakVisitor>.visitMoNode = function <atom:0>;
  <proto:LinebreakVisitor>.moPenalty = function <atom:0>;
  <proto:LinebreakVisitor>.getPrevious = function <atom:0>;
  <proto:LinebreakVisitor>.visitMspaceNode = function <atom:0>;
  <proto:LinebreakVisitor>.mspacePenalty = function <atom:0>;
  <proto:LinebreakVisitor>.visitMtextNode = function <atom:0>;
  <proto:LinebreakVisitor>.mtextPenalty = function <atom:0>;
  <proto:LinebreakVisitor>.visitMrowNode = function <atom:0>;
  <proto:LinebreakVisitor>.visitInferredMrowNode = function <atom:0>;
  <proto:LinebreakVisitor>.visitMfracNode = function <atom:0>;
  <proto:LinebreakVisitor>.visitMsqrtNode = function <atom:0>;
  <proto:LinebreakVisitor>.visitMrootNode = function <atom:0>;
  <proto:LinebreakVisitor>.visitMsubNode = function <atom:0>;
  <proto:LinebreakVisitor>.visitMsupNode = function <atom:0>;
  <proto:LinebreakVisitor>.visitMsubsupNode = function <atom:0>;
  <proto:LinebreakVisitor>.visitMmultiscriptsNode = function <atom:0>;
  <proto:LinebreakVisitor>.visitMfencedNode = function <atom:0>;
  <proto:LinebreakVisitor>.visitMactionNode = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:LinebreakVisitor>;
  LinebreakVisitor = function <atom:0>;
  // close_loc <class_fields_init>#1
  LinebreakVisitor#1 = function <atom:0>;
  exports.LinebreakVisitor = LinebreakVisitor#1;
  function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/LinebreakVisitor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
