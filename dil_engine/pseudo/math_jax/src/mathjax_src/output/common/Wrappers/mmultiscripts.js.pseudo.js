// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=92B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: t, i
// locals: e
// closure: s
function {
  let e;
  e = new s.BBox(t);
  e.combine(i, 0, 0);
  return e;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=898B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// locals: t, i, this
// closure: s
function {
  this = this;
  let i;
  let t;
  this.scriptData = {base: null, sub: s.BBox.empty(), sup: s.BBox.empty(), psub: s.BBox.empty(), psup: s.BBox.empty(), numPrescripts: 0, numScripts: 0};
  t = {base: null, sub: s.BBox.empty(), sup: s.BBox.empty(), psub: s.BBox.empty(), psup: s.BBox.empty(), numPrescripts: 0, numScripts: 0};
  i = this.getScriptBBoxLists();
  this.combineBBoxLists(t.sub, t.sup, i.subList, i.supList);
  this.combineBBoxLists(t.psub, t.psup, i.psubList, i.psupList);
  t.base = i.base[0];
  t.numPrescripts = i.psubList.length;
  t.numScripts = i.subList.length;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=634B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// locals: s, t, i, this
// closure: exports
function {
  this = this;
  let t;
  let s;
  s = {base: [], subList: [], supList: [], psubList: [], psupList: []};
  t = "base";
  let i;
  for (const i of this.childNodes) {
    if (!(i.node.isKind("mprescripts"))) goto L_bc;
    t = "psubList";
    goto L_139;
    // [栈深重同步 4 -> 3]
    s[t].push(i.getOuterBBox());
    t = exports.NextScript[t];
    exports.NextScript[t];
  }
  this.firstPrescript = ((s.subList.length + s.supList.length) + 2);
  this.padLists(s.subList, s.supList);
  this.padLists(s.psubList, s.psupList);
  return s;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=119B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: t, i
// closure: s
function {
  if (!((t.length > i.length))) goto L_76;
  i.push(s.BBox.empty());
  return;
}

// fn <atom:0>  args=4 vars=13 closure=0 cpool=0 bc=560B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: s, t, i, e
// locals: p, r, o, n, u, c, a, h, this
function {
  this = this;
  let p;
  p = 0;
  if (!((p < i.length))) goto L_22f;
  let h;
  let a;
  let c;
  let u;
  let n;
  let o;
  let r;
  if (((undefined === undefined))) goto L_3d;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_6b;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_2d;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_83;
  const _it2 = undefined;
  <done(_it2)>;
  u = <value(_it2)>;
  <done(_it2)>;
  c = <value(_it2)>;
  <done(_it2)>;
  a = <value(_it2)>;
  goto L_b1;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_70;
  // [栈深重同步 1 -> 0]
  h = Math.max(r, u);
  s.w = (s.w + h);
  t.w = (t.w + h);
  if (!((o > s.h))) goto L_178;
  s.h = o;
  o;
  if (!((n > s.d))) goto L_1b1;
  s.d = n;
  n;
  if (!((c > t.h))) goto L_1ea;
  t.h = c;
  c;
  if (!((a > t.d))) goto L_223;
  t.d = a;
  a;
  p = <p_new>;
  (p++);
  goto L_8;
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=194B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: s
// locals: t, i, e, p
function {
  let p;
  let e;
  let i;
  let t;
  if (((undefined === undefined))) goto L_a4;
  t = <to_object>(undefined).w;
  i = <to_object>(undefined).h;
  e = <to_object>(undefined).d;
  p = <to_object>(undefined).rscale;
  <to_object>(undefined);
  goto L_a9;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  return [(t * p), (i * p), (e * p)];
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=309B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// locals: s, t, i, this
function {
  this = this;
  let i;
  let t;
  let s;
  s = this.scriptData;
  t = this.combinePrePost(s.sub, s.psub);
  i = this.combinePrePost(s.sup, s.psup);
  return this.getUVQ(t, i);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=343B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: s, t, i
// locals: e, p, this
function {
  this = this;
  let e;
  e = this.scriptData;
  if (!(e.numPrescripts)) goto L_155;
  let p;
  p = this.font.params.scriptspace;
  s.combine(e.psup, p, t);
  s.combine(e.psub, p, i);
  return s;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=421B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: s, t, i
// locals: e, p, this
function {
  this = this;
  let e;
  e = this.scriptData;
  if (!(e.numScripts)) goto L_1a3;
  let p;
  p = s.w;
  s.combine(e.sup, p, t);
  s.combine(e.sub, p, i);
  s.w = (s.w + this.font.params.scriptspace);
  return s;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=116B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: s
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  s = ...0;
  // append([], 0, s)
  s;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2c;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.scriptData = null;
  this.firstPrescript = 0;
  this.getScriptData();
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=338B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: s
// locals: t, i, this
function {
  this = this;
  let i;
  let t;
  s.empty();
  if (((undefined === undefined))) goto L_3f;
  const _it1 = undefined;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  goto L_67;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_33;
  // [栈深重同步 1 -> 0]
  this.addPrescripts(s, t, i);
  s.append(this.scriptData.base);
  this.addPostscripts(s, t, i);
  s.clean();
  return s;
}

// fn <atom:0>  args=1 vars=7 closure=2 cpool=0 bc=931B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: i
// locals: e, p, r, o, n, this
// closure: t, s
function {
  this = this;
  let n;
  let o;
  let r;
  let p;
  let e;
  e = this.baseChild.breakCount;
  p = this.baseChild.getLineBBox(i).copy();
  r = p;
  if (((undefined === undefined))) goto L_da;
  const _it1 = undefined;
  <done(_it1)>;
  o = <value(_it1)>;
  <done(_it1)>;
  n = <value(_it1)>;
  goto L_103;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_cd;
  // [栈深重同步 1 -> 0]
  if (!((0 === i))) goto L_2b9;
  r = t.LineBBox.from(this.addPrescripts(s.BBox.zero(), o, n), this.linebreakOptions.lineleading);
  t.LineBBox.from(this.addPrescripts(s.BBox.zero(), o, n), this.linebreakOptions.lineleading);
  r.append(p);
  this.addLeftBorders(r);
  r.L = this.bbox.L;
  goto L_374;
  // [栈深重同步 1 -> 0]
  if (!((i === e))) goto L_374;
  r = this.addPostscripts(r, o, n);
  this.addPostscripts(r, o, n);
  this.addRightBorders(r);
  r.R = this.bbox.R;
  this.bbox.R;
  this.addMiddleBorders(r);
  return r;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=362B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: s, t
// locals: i, e, p, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(!this.UVQ)) goto L_147;
  let p;
  let e;
  let i;
  if (((undefined === undefined))) goto L_4c;
  const _it1 = undefined;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  e = <value(_it1)>;
  <done(_it1)>;
  p = <value(_it1)>;
  goto L_55;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_3c;
  // [栈深重同步 1 -> 0]
  if (!((0 === s.w))) goto L_a7;
  i = this.getU();
  goto L_130;
  // [栈深重同步 1 -> 0]
  if (!((0 === t.w))) goto L_11f;
  i = -this.getV();
  goto L_130;
  const _it2 = -this.getV();
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_130;
  // [栈深重同步 4 -> 0]
  goto L_f9;
  super["getUVQ"].call(this, s, t);
  this.UVQ = [i, e, p];
  return this.UVQ;
}

// fn i  args=1 vars=3 closure=3 cpool=13 bc=119B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: i
// locals: CommonMmultiscriptsMixin, <class_fields_init>
// closure: s, exports, t
function {
  let CommonMmultiscriptsMixin;
  let <class_fields_init>;
  class CommonMmultiscriptsMixin extends i { ... }
  <proto:CommonMmultiscriptsMixin>.combinePrePost = function <atom:0>;
  <proto:CommonMmultiscriptsMixin>.getScriptData = function <atom:0>;
  <proto:CommonMmultiscriptsMixin>.getScriptBBoxLists = function <atom:0>;
  <proto:CommonMmultiscriptsMixin>.padLists = function <atom:0>;
  <proto:CommonMmultiscriptsMixin>.combineBBoxLists = function <atom:0>;
  <proto:CommonMmultiscriptsMixin>.getScaledWHD = function <atom:0>;
  <proto:CommonMmultiscriptsMixin>.getCombinedUV = function <atom:0>;
  <proto:CommonMmultiscriptsMixin>.addPrescripts = function <atom:0>;
  <proto:CommonMmultiscriptsMixin>.addPostscripts = function <atom:0>;
  <proto:CommonMmultiscriptsMixin>.appendScripts = function <atom:0>;
  <proto:CommonMmultiscriptsMixin>.computeLineBBox = function <atom:0>;
  <proto:CommonMmultiscriptsMixin>.getUVQ = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CommonMmultiscriptsMixin>;
  CommonMmultiscriptsMixin = function <atom:0>;
  // close_loc <class_fields_init>
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=220B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// args: require, module, exports
// locals: s, t, i
function {
  i = function i;
  let t;
  let s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NextScript = undefined;
  exports.ScriptNames = undefined;
  exports.CommonMmultiscriptsMixin = undefined;
  s = require("../../../util/BBox");
  t = require("../LineBBox");
  exports.NextScript = {base: "subList", subList: "supList", supList: "subList", psubList: "psupList", psupList: "psubList"};
  exports.ScriptNames = ["sup", "sup", "psup", "psub"];
  exports.CommonMmultiscriptsMixin = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/Wrappers/mmultiscripts
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
