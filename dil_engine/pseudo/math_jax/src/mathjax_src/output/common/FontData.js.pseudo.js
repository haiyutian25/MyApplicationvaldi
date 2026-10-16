// fn o  args=3 vars=3 closure=1 cpool=0 bc=53B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s, i
// closure: e
function {
  if (!(i)) goto L_31;
  {}[s] = i;
  i;
  return e.defaultOptions(t, {})[s];
  return t[s];
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=math_jax/src/mathjax_src/output/common/FontData
// closure: r
function {
  return r.DIRECTION;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/common/FontData
// locals: this
function {
  this = this;
  return this.constructor;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=202B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: e
function {
  let e;
  e = t[s];
  if (!(!Array.isArray(e))) goto L_b1;
  throw Error("Character data hasn't been loaded for 0x".concat(s.toString(16).toUpperCase()));
  if (!((3 === e.length))) goto L_c3;
  e[3] = {};
  {};
  return e[3];
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=17B file=math_jax/src/mathjax_src/output/common/FontData
// args: s
// closure: e, t
function {
  e[t].failed = true;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=1 bc=79B file=math_jax/src/mathjax_src/output/common/FontData
// args: <atom:0>
// locals: t, i, a
// closure: e, s
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  i = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  if ((a)) goto L_2f;
  e[t] = {extension: s, file: t, variants: i, delimiters: [], promise: null, failed: false, setup: function <atom:0>};
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=1 bc=73B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: t#1, s#1, e
function {
  let s#1;
  let t#1;
  t#1 = t;
  if (!((s === undefined))) goto L_10;
  s;
  s = "";
  s#1 = "";
  let e;
  e = {};
  if ((t)) goto L_1e;
  [].forEach(function <atom:0>);
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// closure: s, e
function {
  return s.defineChars(t, e[t]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=1 bc=362B file=math_jax/src/mathjax_src/output/common/FontData
// args: s
// closure: e, i, t, this, n, a
function {
  Object.keys(e).forEach(function <atom:0>);
  s.defineDelimiters(i);
  if (!(t)) goto L_139;
  this.adjustDelimiters(s.delimiters, Object.keys(i), n.sizeN, n.stretchN);
  if (!(a)) goto L_169;
  s.addDynamicFontCss(a);
  return;
}

// fn <atom:0>  args=5 vars=12 closure=0 cpool=1 bc=220B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s, e, i, a
// locals: t#1, s#1, e#1, i#1, a#1, n, this
function {
  this = this;
  let a#1;
  let i#1;
  let e#1;
  let s#1;
  let t#1;
  t#1 = t;
  s#1 = s;
  e#1 = e;
  if (!((i === undefined))) goto L_20;
  i;
  i = {};
  i#1 = {};
  if (!((a === undefined))) goto L_2d;
  a;
  a = null;
  a#1 = null;
  let n;
  if (!(t)) goto L_7f;
  goto L_80;
  // [栈深重同步 1 -> 0]
  n = null;
  if (!(t)) goto L_ab;
  goto L_ce;
  // [栈深重同步 1 -> 0]
  this.dynamicFiles[s].setup = function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=285B file=math_jax/src/mathjax_src/output/common/FontData
// args: s
// locals: a
// closure: t, this, e, i
function {
  let a;
  a = t[parseInt(s)];
  if (!(("dir" in a))) goto L_11c;
  if (!(a.variants)) goto L_9c;
  a.variants = this.adjustArrayIndices(a.variants, e);
  this.adjustArrayIndices(a.variants, e);
  if (!(a.stretchv)) goto L_11c;
  a.stretchv = this.adjustArrayIndices(a.stretchv, i);
  this.adjustArrayIndices(a.stretchv, i);
  return;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=1 bc=42B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s, e, i
// locals: this
function {
  this = this;
  s.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=13B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// closure: s
function {
  if (!((t < 0))) goto L_b;
  return ((s - 1) - t);
  return t;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=1 bc=39B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
function {
  return t.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=8 closure=1 cpool=0 bc=1093B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: t#1, s#1, e, i, a, this
// closure: o
function {
  this = this;
  let s#1;
  let t#1;
  t#1 = t;
  if (!((s === undefined))) goto L_13;
  s;
  s = "";
  s#1 = "";
  let e;
  if ((s)) goto L_e3;
  e = {name: t.name, prefix: "[".concat(t.name, "-extension]/", this.JAX.toLowerCase(), "/dynamic"), files: this.defineDynamicFiles(t.ranges, t.name), sizeN: this.defaultSizeVariants.length, stretchN: this.defaultStretchVariants.length};
  this.dynamicExtensions.set(t.name, e);
  let a;
  let i;
  const _it1 = [["options", "OPTIONS"], ["variants", "defaultVariants"], ["variantSmp", "VariantSmp"], ["cssFonts", "defaultCssFonts"], ["accentMap", "defaultAccentMap"], ["moMap", "defaultMoMap"], ["mnMap", "defaultMnMap"], ["parameters", "defaultParams"], ["chars", "defaultChars"], ["sizeVariants", "defaultSizeVariants"], ["stretchVariants", "defaultStretchVariants"]];
  goto L_2ca;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  i = <value(_it2)>;
  <done(_it2)>;
  a = <value(_it2)>;
  o(this, a, t[i]);
  if (!(<done(_it1)>)) goto L_2b2;
  <value(_it1)>;
  if (!(t.delimiters)) goto L_444;
  Object.assign(this.defaultDelimiters, t.delimiters);
  this.adjustDelimiters(this.defaultDelimiters, Object.keys(t.delimiters), e.sizeN, e.stretchN);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=76B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// closure: this, s
function {
  return this.defineChars(t, s.defaultChars[t]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// closure: this
function {
  return this.defineDynamicCharacters(t.files);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=3 bc=1180B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: t#1, s, this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let t#1;
  if (!((t === undefined))) goto L_1a;
  t;
  t = null;
  t#1 = null;
  let s;
  this.variant = {};
  this.delimiters = {};
  this.cssFontMap = {};
  this.cssFontPrefix = "";
  this.remapChars = {};
  this.skewIcFactor = 0.75;
  s = this.CLASS;
  this.options = e.userOptions(e.defaultOptions({}, s.OPTIONS), t);
  null;
  s.defaultParams;
  this.params = {};
  // append([], 0, s.defaultSizeVariants)
  s.defaultSizeVariants;
  this.sizeVariants = [];
  // append([], 0, s.defaultStretchVariants)
  s.defaultStretchVariants;
  this.stretchVariants = [];
  this.defineCssFonts(s.defaultCssFonts);
  this.cssFamilyPrefix = s.defaultCssFamilyPrefix;
  this.createVariants(s.defaultVariants);
  this.defineDelimiters(s.defaultDelimiters);
  Object.keys(s.defaultChars).forEach(function <atom:0>);
  this.defineRemap("accent", s.defaultAccentMap);
  this.defineRemap("mo", s.defaultMoMap);
  this.defineRemap("mn", s.defaultMnMap);
  this.defineDynamicCharacters(s.dynamicFiles);
  s.dynamicExtensions.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=75B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: this
// closure: e
function {
  this = this;
  e.defaultOptions(this.options, t);
  return;
}

// fn <atom:0>  args=2 vars=8 closure=2 cpool=0 bc=2077B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: t#1, s#1, i, a, e, this
// closure: e, o
function {
  this = this;
  let s#1;
  let t#1;
  t#1 = t;
  if (!((s === undefined))) goto L_13;
  s;
  s = "";
  s#1 = "";
  let a;
  let i;
  i = this.constructor.JAX.toLowerCase();
  if ((s)) goto L_108;
  a = {name: t.name, prefix: "[".concat(t.name, "-extension]/", i, "/dynamic"), files: this.CLASS.defineDynamicFiles(t.ranges, s), sizeN: this.sizeVariants.length, stretchN: this.stretchVariants.length};
  this.CLASS.dynamicExtensions.set(t.name, a);
  if ((t.options)) goto L_2cb;
  e.defaultOptions(this.options, {});
  if ((t.parameters)) goto L_33b;
  e.defaultOptions(this.params, {});
  o(this, "sizeVariants", t.sizeVariants);
  o(this, "stretchVariants", t.stretchVariants);
  o(this.constructor, "VariantSmp", t.variantSmp);
  this.defineCssFonts(o({cssFonts: {}}, "cssFonts", t.cssFonts));
  this.createVariants(o({variants: []}, "variants", t.variants));
  if (!(t.delimiters)) goto L_60f;
  this.defineDelimiters(o({delimiters: {}}, "delimiters", t.delimiters));
  this.CLASS.adjustDelimiters(this.delimiters, Object.keys(t.delimiters), a.sizeN, a.stretchN);
  let e;
  if ((t.chars)) goto L_660;
  for (const e of Object.keys({})) {
    this.defineChars(e, t.chars[e]);
  }
  this.defineRemap("accent", t.accentMap);
  this.defineRemap("mo", t.moMap);
  this.defineRemap("mn", t.mnMap);
  if (!(t.ranges)) goto L_818;
  this.defineDynamicCharacters(a.files);
  return [];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/common/FontData
// locals: this
function {
  this = this;
  return this._styles;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: this
function {
  this = this;
  this._styles = t;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=711B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s, e
// locals: t#1, s#1, e#1, i, this
function {
  this = this;
  let e#1;
  let s#1;
  let t#1;
  t#1 = t;
  if (!((s === undefined))) goto L_16;
  s;
  s = null;
  s#1 = null;
  if (!((e === undefined))) goto L_1f;
  e;
  e = null;
  e#1 = null;
  let i;
  if (!(s)) goto L_9d;
  goto L_9e;
  // [栈深重同步 4 -> 3]
  i = {linked: [], chars: Object.create({})};
  if (!(this.variant[e])) goto L_250;
  Object.assign(i.chars, this.variant[e].chars);
  this.variant[e].linked.push(i.chars);
  i.chars = Object.create(i.chars);
  Object.create(i.chars);
  this.remapSmpChars(i.chars, t);
  this.variant[t] = i;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
function {
  return parseInt(t);   // tail call
}

// fn <atom:0>  args=2 vars=16 closure=0 cpool=1 bc=774B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: e, i, a, n, o, c, l, s#1, e#1, i#1, e#2, r, o#1, this
function {
  this = this;
  let r;
  let n;
  let a;
  let i;
  let e;
  e = this.CLASS;
  i = e.VariantSmp[s];
  if (!(("string" == typeof i))) goto L_97;
  i = e.VariantSmp[i];
  e.VariantSmp[i];
  if (!(!i)) goto L_9f;
  return;
  a = e.SmpRemap;
  n = [null, null, e.SmpRemapGreekU, e.SmpRemapGreekL];
  let l;
  let c;
  let o;
  const _it1 = e.SmpRanges;
  goto L_281;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  o = <value(_it2)>;
  <done(_it2)>;
  c = <value(_it2)>;
  <done(_it2)>;
  l = <value(_it2)>;
  let s#1;
  s#1 = i[o];
  if (!(s#1)) goto L_281;
  let e#1;
  e#1 = c;
  if (!((e#1 <= l))) goto L_1d6;
  let i#1;
  if (((930 === e#1))) goto L_1cc;
  i#1 = ((s#1 + e#1) - c);
  if ((a[i#1])) goto L_1c8;
  t[e#1] = this.smpChar(i#1);
  e#1 = <e#1_new>;
  (e#1++);
  goto L_170;
  // [栈深重同步 4 -> 3]
  if (!(n[o])) goto L_281;
  let e#2;
  for (const e#2 of Object.keys(n[o]).map(function <atom:0>)) {
    t[e#2] = this.smpChar((s#1 + n[o][e#2]));
    // [栈深重同步 3 -> 6]
  }
  if (!(<done(_it3)>)) goto L_143;
  <value(_it3)>;
  if ((i[5])) goto L_294;
  r = {};
  let o#1;
  for (const o#1 of Object.keys(r)) {
    t[o#1] = this.smpChar(i[5][o#1]);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=16B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
function {
  [][<<bad:2147483436>>] = {smp: t};
  return [];
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: s, this
function {
  this = this;
  let s;
  for (const s of t) {
    this.createVariant(s[0], s[1], s[2]);
  }
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=217B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: e, i, this
function {
  this = this;
  let e;
  e = this.variant[t];
  Object.assign(e.chars, s);
  let i;
  for (const i of e.linked) {
    Object.assign(i, s);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=299B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: s, this
function {
  this = this;
  Object.assign(this.cssFontMap, t);
  let s;
  for (const s of Object.keys(t)) {
    if (!(("unknown" === this.cssFontMap[s][0]))) goto L_120;
    this.cssFontMap[s][0] = this.options.unknownFamily;
    this.options.unknownFamily;
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=79B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: this
function {
  this = this;
  Object.assign(this.delimiters, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=209B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: this
function {
  this = this;
  if (!(s)) goto L_d0;
  if ((Object.hasOwn(this.remapChars, t))) goto L_81;
  this.remapChars[t] = {};
  {};
  Object.assign(this.remapChars[t], s);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=396B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: s, e, t#1, this
function {
  this = this;
  let s;
  for (const s of Object.keys(t)) {
    let e;
    e = t[s];
    let t#1;
    for (const t#1 of Object.keys(e.variants)) {
      this.defineChars(t#1, this.flattenRanges(e.variants[t#1], e));
      // [栈深重同步 3 -> 6]
    }
    this.defineDelimiters(this.flattenRanges(e.delimiters, e));
  }
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=115B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: e, i, t#1
function {
  let e;
  e = {};
  let i;
  for (const i of t) {
    if (!(Array.isArray(i))) goto L_61;
    let t#1;
    t#1 = i[0];
    if (!((t#1 <= i[1]))) continue;
    e[t#1] = s;
    t#1 = <t#1_new>;
    (t#1++);
    goto L_44;
    e[i] = s;
  }
  return e;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=4 bc=487B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: s, this
function {
  this = this;
  let s;
  if (!(t.extension)) goto L_d8;
  goto L_11b;
  // [栈深重同步 1 -> 0]
  s = this.options.dynamicPrefix;
  if (!(t.file.match(new RegExp("^(?:[/[]|[a-z]+:\\/\\/|[a-z]:)")))) goto L_18c;
  return t.file;
  return ((s + "/") + t.file.replace(new RegExp("(\\.js)?$"), ".js"));
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=95B file=math_jax/src/mathjax_src/output/common/FontData
// args: e
// closure: s, t
function {
  s.failed = true;
  if (!(t.isLoggingEnabled)) goto L_5e;
  console.warn(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=math_jax/src/mathjax_src/output/common/FontData
// closure: s, this
function {
  return s.setup(this);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=2 bc=410B file=math_jax/src/mathjax_src/output/common/FontData
// args: s
// locals: this
// closure: t, i
function {
  this = this;
  if (!(s.failed)) goto L_ae;
  goto L_199;
  // [栈深重同步 1 -> 0]
  if ((s.promise)) goto L_150;
  s.promise = i.asyncLoad(this.dynamicFileName(s)).catch(function <atom:0>);
  i.asyncLoad(this.dynamicFileName(s)).catch(function <atom:0>);
  return s.promise.then(function <atom:0>); // async
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=math_jax/src/mathjax_src/output/common/FontData
// args: s
// closure: this, t
function {
  return this.loadDynamicFile(t[s]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=75B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// closure: this, e
function {
  return this.loadDynamicFile(e.files[t]);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=2 bc=494B file=math_jax/src/mathjax_src/output/common/FontData
// locals: t, s, e, this
function {
  this = this;
  let s;
  let t;
  t = this.CLASS.dynamicFiles;
  s = Object.keys(t).map(function <atom:0>);
  let e;
  // close_loc e
  for (const e of this.CLASS.dynamicExtensions.values()) {
    // append([], 0, Object.keys(e.files).map(function <atom:0>))
    Object.keys(e.files).map(function <atom:0>);
    s.push.apply(s, []);
    // close_loc e
  }
  // close_loc e
  return Promise.all(s);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=math_jax/src/mathjax_src/output/common/FontData
// args: s
// closure: this, t
function {
  return this.loadDynamicFileSync(t[s]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=75B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// closure: this, s
function {
  return this.loadDynamicFileSync(s.files[t]);   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=2 bc=482B file=math_jax/src/mathjax_src/output/common/FontData
// locals: t, s, this
// closure: s
function {
  this = this;
  let t;
  if (!(!s.mathjax.asyncIsSynchronous)) goto L_59;
  throw Error("MathJax(loadDynamicFilesSync): mathjax.asyncLoad must be specified and synchronous
    Try importing #js/../components/require.mjs and #js/util/asyncLoad/node.js");
  t = this.CLASS.dynamicFiles;
  Object.keys(t).forEach(function <atom:0>);
  let s;
  // close_loc s
  for (const s of this.CLASS.dynamicExtensions.values()) {
    Object.keys(s.files).forEach(function <atom:0>);
    // close_loc s
  }
  // close_loc s
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=357B file=math_jax/src/mathjax_src/output/common/FontData
// args: e
// locals: i, this
// closure: s, t
function {
  this = this;
  if (!(!e.promise)) goto L_164;
  e.promise = Promise.resolve();
  try { // catch -> L_d4
  s.mathjax.asyncLoad(this.dynamicFileName(e));
  <?>;
  goto L_13d;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_13c
  e.failed = true;
  if (!(t.isLoggingEnabled)) goto L_138;
  console.warn(i);
  <?>;
  goto L_13d;
  // [栈深重同步 0 -> 1]
  throw <?>;
  e.setup(this);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
function {
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=183B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: s, this
// closure: a
function {
  this = this;
  let s;
  s = this.delimiters[t];
  if (!(s)) goto L_b3;
  if (!(!("dir" in s))) goto L_b3;
  this.delimiters[t] = null;
  a.retryAfter(this.loadDynamicFile(s));
  return null;
  return s;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=168B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: e, this
function {
  this = this;
  let e;
  e = this.getDelimiter(t);
  if (!(e)) goto L_82;
  if (!(e.variants)) goto L_82;
  s = e.variants[s];
  e.variants[s];
  return this.sizeVariants[s];
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=159B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: e, this
function {
  this = this;
  let e;
  e = this.getDelimiter(t);
  if (!(e.stretchv)) goto L_9c;
  goto L_9d;
  // [栈深重同步 2 -> 1]
  return this.stretchVariants[0];
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=math_jax/src/mathjax_src/output/common/FontData
// args: s
// closure: this, t
function {
  return this.getStretchVariant(t, s);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=47B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: this
function {
  this = this;
  return [0, 1, 2, 3].map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// closure: s
function {
  return delete s;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=1 bc=373B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: e, i, this
// closure: a
function {
  this = this;
  let e;
  e = this.variant[t].chars[s];
  if (!(e)) goto L_171;
  if (!(!Array.isArray(e))) goto L_171;
  let i;
  i = this.variant[t];
  delete s;
  i.linked.forEach(function <atom:0>);
  a.retryAfter(this.loadDynamicFile(e));
  return null;
  // [栈深重同步 1 -> 0]
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: this
function {
  this = this;
  return this.variant[t];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=55B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: this
function {
  this = this;
  if ((this.cssFontMap[t])) goto L_36;
  return ["serif", false, false];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=83B file=math_jax/src/mathjax_src/output/common/FontData
// args: t
// locals: this
function {
  this = this;
  if (!(this.cssFamilyPrefix)) goto L_51;
  return ((this.cssFamilyPrefix + ", ") + t);
  return t;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=46B file=math_jax/src/mathjax_src/output/common/FontData
// args: t, s
// locals: this
function {
  this = this;
  if ((this.remapChars[t])) goto L_2b;
  return {}[s];
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=69 bc=2747B file=math_jax/src/mathjax_src/output/common/FontData
// args: require, module, exports
// locals: t, s, e, i, a, n, r, o, FontData, <class_fields_init>, FontData#1
function {
  o = function o;
  let FontData#1;
  let n;
  let a;
  let i;
  let e;
  let s;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIRECTION = undefined;
  exports.NOSTRETCH = undefined;
  exports.mergeOptions = undefined;
  exports.FontData = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  s = require("../../mathjax");
  e = require("../../util/Options");
  i = require("../../util/AsyncLoad");
  a = require("../../util/Retries");
  n = require("./Direction");
  r = require("./Direction");
  Object.defineProperty(exports, "DIRECTION", {enumerable: true, get: function <atom:0>});
  exports.NOSTRETCH = {dir: n.DIRECTION.None};
  exports.mergeOptions = o;
  let FontData;
  let <class_fields_init>;
  class FontData extends undefined { ... }
  <proto:FontData>.CLASS = function <atom:0>;
  function <atom:0>.charOptions = function <atom:0>;
  function <atom:0>.defineDynamicFiles = function <atom:0>;
  function <atom:0>.dynamicSetup = function <atom:0>;
  function <atom:0>.adjustDelimiters = function <atom:0>;
  function <atom:0>.adjustArrayIndices = function <atom:0>;
  function <atom:0>.addExtension = function <atom:0>;
  <proto:FontData>.setOptions = function <atom:0>;
  <proto:FontData>.addExtension = function <atom:0>;
  <proto:FontData>.styles = function <atom:0>;
  <proto:FontData>.styles = function <atom:0>;
  <proto:FontData>.createVariant = function <atom:0>;
  <proto:FontData>.remapSmpChars = function <atom:0>;
  <proto:FontData>.smpChar = function <atom:0>;
  <proto:FontData>.createVariants = function <atom:0>;
  <proto:FontData>.defineChars = function <atom:0>;
  <proto:FontData>.defineCssFonts = function <atom:0>;
  <proto:FontData>.defineDelimiters = function <atom:0>;
  <proto:FontData>.defineRemap = function <atom:0>;
  <proto:FontData>.defineDynamicCharacters = function <atom:0>;
  <proto:FontData>.flattenRanges = function <atom:0>;
  <proto:FontData>.dynamicFileName = function <atom:0>;
  <proto:FontData>.loadDynamicFile = function <atom:0>;
  <proto:FontData>.loadDynamicFiles = function <atom:0>;
  <proto:FontData>.loadDynamicFilesSync = function <atom:0>;
  <proto:FontData>.loadDynamicFileSync = function <atom:0>;
  <proto:FontData>.addDynamicFontCss = function <atom:0>;
  <proto:FontData>.getDelimiter = function <atom:0>;
  <proto:FontData>.getSizeVariant = function <atom:0>;
  <proto:FontData>.getStretchVariant = function <atom:0>;
  <proto:FontData>.getStretchVariants = function <atom:0>;
  <proto:FontData>.getChar = function <atom:0>;
  <proto:FontData>.getVariant = function <atom:0>;
  <proto:FontData>.getCssFont = function <atom:0>;
  <proto:FontData>.getFamily = function <atom:0>;
  <proto:FontData>.getRemappedChar = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FontData>;
  FontData = function <atom:0>;
  // close_loc <class_fields_init>
  FontData#1 = function <atom:0>;
  exports.FontData = FontData#1;
  FontData#1.OPTIONS = {unknownFamily: "serif", dynamicPrefix: "."};
  FontData#1.JAX = "common";
  FontData#1.NAME = "";
  FontData#1.defaultVariants = [["normal"], ["bold", "normal"], ["italic", "normal"], ["bold-italic", "italic", "bold"], ["double-struck", "bold"], ["fraktur", "normal"], ["bold-fraktur", "bold", "fraktur"], ["script", "italic"], ["bold-script", "bold-italic", "script"], ["sans-serif", "normal"], ["bold-sans-serif", "bold", "sans-serif"], ["sans-serif-italic", "italic", "sans-serif"], ["sans-serif-bold-italic", "bold-italic", "bold-sans-serif"], ["monospace", "normal"], ["-smallop", "normal"], ["-largeop", "normal"], ["-tex-calligraphic", "italic"], ["-tex-bold-calligraphic", "bold-italic"], ["-tex-oldstyle", "normal"], ["-tex-bold-oldstyle", "bold"], ["-tex-mathit", "italic"], ["-tex-variant", "normal"]];
  FontData#1.defaultCssFonts = {normal: ["unknown", false, false], bold: ["unknown", false, true], italic: ["unknown", true, false], bold-italic: ["unknown", true, true], double-struck: ["unknown", false, true], fraktur: ["unknown", false, false], bold-fraktur: ["unknown", false, true], script: ["cursive", false, false], bold-script: ["cursive", false, true], sans-serif: ["sans-serif", false, false], bold-sans-serif: ["sans-serif", false, true], sans-serif-italic: ["sans-serif", true, false], sans-serif-bold-italic: ["sans-serif", true, true], monospace: ["monospace", false, false], -smallop: ["unknown", false, false], -largeop: ["unknown", false, false], -tex-calligraphic: ["cursive", true, false], -tex-bold-calligraphic: ["cursive", true, true], -tex-oldstyle: ["unknown", false, false], -tex-bold-oldstyle: ["unknown", false, true], -tex-mathit: ["unknown", true, false], -tex-variant: ["unknown", false, false]};
  FontData#1.defaultCssFamilyPrefix = "";
  [120120, 120146][<<bad:2147483437>>] = 120792;
  [120224, 120250][<<bad:2147483437>>] = 120802;
  [120432, 120458][<<bad:2147483437>>] = 120822;
  FontData#1.VariantSmp = {bold: [119808, 119834, 120488, 120514, 120782, {<bad:2147484421>: 120778, <bad:2147484422>: 120779}], italic: [119860, 119886, 120546, 120572], bold-italic: [119912, 119938, 120604, 120630], script: [119964, 119990], bold-script: [120016, 120042], fraktur: [120068, 120094], double-struck: [120120, 120146], bold-fraktur: [120172, 120198], sans-serif: [120224, 120250], bold-sans-serif: [120276, 120302, 120662, 120688, 120812], sans-serif-italic: [120328, 120354], sans-serif-bold-italic: [120380, 120406, 120720, 120746], monospace: [120432, 120458]};
  FontData#1.SmpRanges = [[0, 65, 90], [1, 97, 122], [2, 913, 937], [3, 945, 969], [4, 48, 57]];
  FontData#1.SmpRemap = {<bad:2147603326>: 8462, <bad:2147603398>: 8492, <bad:2147603401>: 8496, <bad:2147603402>: 8497, <bad:2147603404>: 8459, <bad:2147603405>: 8464, <bad:2147603408>: 8466, <bad:2147603409>: 8499, <bad:2147603414>: 8475, <bad:2147603427>: 8495, <bad:2147603429>: 8458, <bad:2147603437>: 8500, <bad:2147603503>: 8493, <bad:2147603508>: 8460, <bad:2147603509>: 8465, <bad:2147603518>: 8476, <bad:2147603526>: 8488, <bad:2147603555>: 8450, <bad:2147603560>: 8461, <bad:2147603566>: 8469, <bad:2147603568>: 8473, <bad:2147603569>: 8474, <bad:2147603570>: 8477, <bad:2147603578>: 8484};
  FontData#1.SmpRemapGreekU = {<bad:2147492144>: 25, <bad:2147484445>: 17};
  FontData#1.SmpRemapGreekL = {<bad:2147484410>: 27, <bad:2147484414>: 29, <bad:2147484415>: 31, <bad:2147484441>: 28, <bad:2147484442>: 30, <bad:2147484446>: 26, <bad:2147492139>: 25};
  FontData#1.defaultAccentMap = {<bad:2147483527>: "ˆ", <bad:2147483559>: "˜", <bad:2147484201>: "ˋ", <bad:2147484202>: "ˊ", <bad:2147484203>: "ˆ", <bad:2147484204>: "˜", <bad:2147484205>: "ˉ", <bad:2147484207>: "˘", <bad:2147484208>: "˙", <bad:2147484209>: "�", <bad:2147484211>: "˚", <bad:2147484213>: "ˇ", <bad:2147492027>: "⃗"};
  FontData#1.defaultMoMap = {<bad:2147483478>: "−"};
  FontData#1.defaultMnMap = {<bad:2147483478>: "−"};
  FontData#1.defaultParams = {x_height: 0.442, quad: 1, num1: 0.676, num2: 0.394, num3: 0.444, denom1: 0.686, denom2: 0.345, sup1: 0.413, sup2: 0.363, sup3: 0.289, sub1: 0.15, sub2: 0.247, sup_drop: 0.386, sub_drop: 0.05, delim1: 2.39, delim2: 1, axis_height: 0.25, rule_thickness: 0.06, big_op_spacing1: 0.111, big_op_spacing2: 0.167, big_op_spacing3: 0.2, big_op_spacing4: 0.6, big_op_spacing5: 0.1, surd_height: 0.06, scriptspace: 0.05, nulldelimiterspace: 0.12, delimiterfactor: 901, delimitershortfall: 0.3, rule_factor: 1.25, min_rule_thickness: 1.25, separation_factor: 1.75, extra_ic: 0.033, extender_factor: 0.333};
  FontData#1.defaultDelimiters = {};
  FontData#1.defaultChars = {};
  FontData#1.defaultSizeVariants = [];
  FontData#1.defaultStretchVariants = [];
  FontData#1.dynamicFiles = {};
  FontData#1.dynamicExtensions = new Map();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/common/FontData
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
