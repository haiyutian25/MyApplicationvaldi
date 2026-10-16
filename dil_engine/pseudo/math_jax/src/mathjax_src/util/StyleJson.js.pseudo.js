// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/util/StyleJson
// locals: this
function {
  this = this;
  return this.getStyleString();   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=77B file=math_jax/src/mathjax_src/util/StyleJson
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
  t = null;
  t#1 = null;
  this.styles = {};
  this.addStyles(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=237B file=math_jax/src/mathjax_src/util/StyleJson
// args: t
// locals: e, this
function {
  this = this;
  if (!(t)) goto L_ec;
  let e;
  for (const e of Object.keys(t)) {
    if ((this.styles[e])) goto L_8d;
    this.styles[e] = {};
    {};
    Object.assign(this.styles[e], t[e]);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=60B file=math_jax/src/mathjax_src/util/StyleJson
// args: t
// locals: e, this
function {
  this = this;
  t = ...0;
  let e;
  for (const e of t) {
    delete e;
    // [栈深重同步 4 -> 3]
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/util/StyleJson
// locals: this
function {
  this = this;
  this.styles = {};
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=math_jax/src/mathjax_src/util/StyleJson
// locals: this
function {
  this = this;
  return this.getStyleRules().join("

");   // tail call
}

// fn <atom:0>  args=2 vars=10 closure=0 cpool=0 bc=272B file=math_jax/src/mathjax_src/util/StyleJson
// args: t, e
// locals: t#1, e#1, s, n, l, o, s#1, this
function {
  this = this;
  let e#1;
  let t#1;
  if (!((t === undefined))) goto L_33;
  t;
  t = this.styles;
  t#1 = this.styles;
  if (!((e === undefined))) goto L_3c;
  e;
  e = "";
  e#1 = "";
  let l;
  let n;
  let s;
  s = Object.keys(t);
  n = new Array(s.length);
  l = 0;
  let o;
  for (const o of s) {
    let s#1;
    s#1 = t[o];
    l = <l_new>;
    n[(l++)] = "".concat(e, o, " {
", this.getStyleDefString(s#1, e), "
", e, "}");
  }
  return n;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=294B file=math_jax/src/mathjax_src/util/StyleJson
// args: t, e
// locals: s, n, l, o, this
function {
  this = this;
  let l;
  let n;
  let s;
  s = Object.keys(t);
  n = new Array(s.length);
  l = 0;
  let o;
  for (const o of s) {
    l = <l_new>;
    if (!((t[o] instanceof Object))) goto L_d1;
    {}[o] = t[o];
    t[o];
    goto L_ee;
    // [栈深重同步 6 -> 5]
    n[(l++)] = ((((("  " + e) + o) + ": ") + t[o]) + ";");
  }
  return n.join(("
" + e));   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=8 bc=163B file=math_jax/src/mathjax_src/util/StyleJson
// args: require, module, exports
// locals: StyleJsonSheet, <class_fields_init>, StyleJsonSheet#1
function {
  let StyleJsonSheet#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.StyleJsonSheet = undefined;
  let StyleJsonSheet;
  let <class_fields_init>;
  class StyleJsonSheet extends undefined { ... }
  <proto:StyleJsonSheet>.cssText = function <atom:0>;
  <proto:StyleJsonSheet>.addStyles = function <atom:0>;
  <proto:StyleJsonSheet>.removeStyles = function <atom:0>;
  <proto:StyleJsonSheet>.clear = function <atom:0>;
  <proto:StyleJsonSheet>.getStyleString = function <atom:0>;
  <proto:StyleJsonSheet>.getStyleRules = function <atom:0>;
  <proto:StyleJsonSheet>.getStyleDefString = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:StyleJsonSheet>;
  StyleJsonSheet = function <atom:0>;
  // close_loc <class_fields_init>
  StyleJsonSheet#1 = function <atom:0>;
  exports.StyleJsonSheet = StyleJsonSheet#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/StyleJson
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
