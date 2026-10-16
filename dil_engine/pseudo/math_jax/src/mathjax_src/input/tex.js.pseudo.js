// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=97B file=math_jax/src/mathjax_src/input/tex
// args: t
// locals: e
// closure: u
function {
  let e;
  e = new u.ParserConfiguration(t, ["tex"]);
  e.init();
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=374B file=math_jax/src/mathjax_src/input/tex
// args: t, e
// closure: p
function {
  p.TagsFactory.addTags(e.tags);
  p.TagsFactory.setDefault(t.options.tags);
  t.tags = p.TagsFactory.getDefault();
  t.tags.configuration = t;
  return;
}

// fn <atom:0>  args=1 vars=11 closure=7 cpool=0 bc=1426B file=math_jax/src/mathjax_src/input/tex
// args: t
// locals: t#1, r, a, o, u, l, c, this.active_func, new.target, this
// closure: e, TeX, s, <class_fields_init>, n, p, i
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let t#1;
  if (!((t === undefined))) goto L_17;
  t;
  t = {};
  t#1 = {};
  let c;
  let l;
  let u;
  let o;
  let a;
  let r;
  if (((undefined === undefined))) goto L_40;
  const _it1 = undefined;
  <done(_it1)>;
  r = <value(_it1)>;
  <done(_it1)>;
  a = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  goto L_d3;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_2f;
  // [栈深重同步 1 -> 0]
  this = new new.target(a);
  if (!(<class_fields_init>)) goto L_ef;
  <class_fields_init>.call(this);
  new new.target(a);
  if ((this.options.FindTeX)) goto L_168;
  this.findTeX = new s.FindTeX(o);
  u = this.options.packages;
  this.configuration = TeX.configure(u);
  l = TeX.configure(u);
  this._parseOptions = new n.default(l, [this.options, p.TagsFactory.OPTIONS]);
  c = new n.default(l, [this.options, p.TagsFactory.OPTIONS]);
  e.userOptions(c.options, r);
  l.config(this);
  TeX.tags(c, l);
  this.postFilters.addList([[i.default.cleanSubSup, -7], [i.default.setInherited, -6], [i.default.checkScriptlevel, -5], [i.default.moveLimits, -4], [i.default.cleanStretchy, -3], [i.default.cleanAttributes, -2], [i.default.combineRelations, -1]]);
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=124B file=math_jax/src/mathjax_src/input/tex
// args: t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["setMmlFactory"].call(this, t);
  this._parseOptions.nodeFactory.setMmlFactory(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex
// locals: this
function {
  this = this;
  return this._parseOptions;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=119B file=math_jax/src/mathjax_src/input/tex
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_d;
  t;
  t = 0;
  t#1 = 0;
  this.parseOptions.tags.reset(t);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=4 cpool=0 bc=1988B file=math_jax/src/mathjax_src/input/tex
// args: t, e
// locals: s, i, n, this
// closure: a, o, l, r
function {
  this = this;
  let i;
  let s;
  s = undefined;
  i = undefined;
  this.parseOptions.clear();
  this.parseOptions.mathItem = t;
  this.executeFilters(this.preFilters, t, e, this.parseOptions);
  this.latex = t.math;
  this.parseOptions.tags.startEquation(t);
  try { // catch -> L_255
  i = new a.default(this.latex, {display: t.display, isInner: false}, this.parseOptions);
  new a.default(this.latex, {display: t.display, isInner: false}, this.parseOptions);
  s = i.mml();
  i.mml();
  <?>;
  goto L_304;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_303
  if (!(!(n instanceof o.default))) goto L_286;
  throw n;
  this.parseOptions.error = true;
  s = this.options.formatError(this, n);
  this.options.formatError(this, n);
  <?>;
  goto L_304;
  // [栈深重同步 0 -> 1]
  throw <?>;
  s = this.parseOptions.nodeFactory.create("node", "math", [s]);
  this.parseOptions.nodeFactory.create("node", "math", [s]);
  s.attributes.set(l.TexConstant.Attr.LATEX, this.latex);
  if (!(t.display)) goto L_4cc;
  r.default.setAttribute(s, "display", "block");
  this.parseOptions.tags.finishEquation(t);
  this.parseOptions.root = s;
  this.executeFilters(this.postFilters, t, e, this.parseOptions);
  if (!(i)) goto L_753;
  if (!(i.stack.env.hsize)) goto L_753;
  r.default.setAttribute(s, "maxwidth", i.stack.env.hsize);
  r.default.setAttribute(s, "overflow", "linebreak");
  this.mathNode = this.parseOptions.root;
  return this.mathNode;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/input/tex
// args: t
// locals: this
function {
  this = this;
  return this.findTeX.findMath(t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=2 bc=261B file=math_jax/src/mathjax_src/input/tex
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = t.message.replace(new RegExp("\\n.*"), "");
  return this.parseOptions.nodeFactory.create("error", e, t.id, this.latex);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/input/tex
// args: t, e
function {
  return t.formatError(e);   // tail call
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=10 bc=513B file=math_jax/src/mathjax_src/input/tex
// args: require, module, exports
// locals: t, e, s, i, r, a, o, n, p, u, l, TeX, <class_fields_init>, TeX#1
function {
  let TeX#1;
  let l;
  let u;
  let p;
  let n;
  let o;
  let a;
  let r;
  let i;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TeX = undefined;
  t = require("../core/InputJax");
  e = require("../util/Options");
  s = require("./tex/FindTeX");
  i = require("./tex/FilterUtil");
  r = require("./tex/NodeUtil");
  a = require("./tex/TexParser");
  o = require("./tex/TexError");
  n = require("./tex/ParseOptions");
  p = require("./tex/Tags");
  u = require("./tex/Configuration");
  l = require("./tex/TexConstants");
  require("./tex/base/BaseConfiguration");
  let TeX;
  let <class_fields_init>;
  class TeX extends t.AbstractInputJax { ... }
  function <atom:0>.configure = function <atom:0>;
  function <atom:0>.tags = function <atom:0>;
  <proto:TeX>.setMmlFactory = function <atom:0>;
  <proto:TeX>.parseOptions = function <atom:0>;
  <proto:TeX>.reset = function <atom:0>;
  <proto:TeX>.compile = function <atom:0>;
  <proto:TeX>.findMath = function <atom:0>;
  <proto:TeX>.formatError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TeX>;
  TeX = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc TeX
  TeX#1 = function <atom:0>;
  exports.TeX = TeX#1;
  TeX#1.NAME = "TeX";
  null;
  t.AbstractInputJax.OPTIONS;
  TeX#1.OPTIONS = {FindTeX: null, packages: ["base"], maxBuffer: 5120, maxTemplateSubtitutions: 10000, mathStyle: "TeX", formatError: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
