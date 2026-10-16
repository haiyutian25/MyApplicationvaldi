// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/handlers/html/HTMLMathItem
// locals: this
function {
  this = this;
  return this.inputJax.adaptor;
}

// fn <atom:0>  args=5 vars=13 closure=1 cpool=0 bc=138B file=math_jax/src/mathjax_src/handlers/html/HTMLMathItem
// args: t, e, s, i, a
// locals: t#1, e#1, s#1, i#1, a#1, this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let a#1;
  let i#1;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_28;
  s;
  s = true;
  s#1 = true;
  if (!((i === undefined))) goto L_43;
  i;
  i = {node: null, n: 0, delim: ""};
  i#1 = {node: null, n: 0, delim: ""};
  if (!((a === undefined))) goto L_62;
  a;
  a = {node: null, n: 0, delim: ""};
  a#1 = {node: null, n: 0, delim: ""};
  this = new new.target(t, e, s, i, a);
  if (!(<class_fields_init>)) goto L_84;
  <class_fields_init>.call(this);
  new new.target(t, e, s, i, a);
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=2717B file=math_jax/src/mathjax_src/handlers/html/HTMLMathItem
// args: e
// locals: t, e#1, this
// closure: t
function {
  this = this;
  if (!((this.state() < t.STATE.INSERTED))) goto L_a9c;
  if (!(this.inputJax.processStrings)) goto L_8b4;
  let t;
  t = this.start.node;
  if (!((t === this.end.node))) goto L_510;
  if (!(this.end.n)) goto L_338;
  if (!((this.end.n < this.adaptor.value(this.end.node).length))) goto L_338;
  this.adaptor.split(this.end.node, this.end.n);
  if (!(this.start.n)) goto L_453;
  t = this.adaptor.split(this.start.node, this.start.n);
  this.adaptor.split(this.start.node, this.start.n);
  if (!(this.adaptor.parent(t))) goto L_50c;
  this.adaptor.replace(this.typesetRoot, t);
  goto L_960;
  if (!(this.start.n)) goto L_5ea;
  t = this.adaptor.split(t, this.start.n);
  this.adaptor.split(t, this.start.n);
  if (!((t !== this.end.node))) goto L_6d9;
  let e#1;
  e#1 = this.adaptor.next(t);
  this.adaptor.remove(t);
  t = e#1;
  e#1;
  goto L_5eb;
  this.adaptor.insert(this.typesetRoot, t);
  if (!((this.end.n < this.adaptor.value(t).length))) goto L_866;
  this.adaptor.split(t, this.end.n);
  this.adaptor.remove(t);
  goto L_960;
  this.adaptor.replace(this.typesetRoot, this.start.node);
  this.end.node = this.typesetRoot;
  this.start.node = this.typesetRoot;
  this.end.n = 0;
  this.start.n = 0;
  this.state(t.STATE.INSERTED);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/handlers/html/HTMLMathItem
// args: t
function {
  t.addStyleSheet();
  return;
}

// fn <atom:0>  args=1 vars=9 closure=1 cpool=0 bc=1021B file=math_jax/src/mathjax_src/handlers/html/HTMLMathItem
// args: e
// locals: e#1, t, s, i, e#2, s#1, this, <home_object>
// closure: t
function {
  <home_object> = <special_object 4>;
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_13;
  e;
  e = false;
  e#1 = false;
  super["removeFromDocument"].call(this, e);
  if (!((this.state() >= t.STATE.TYPESET))) goto L_3fc;
  let i;
  let s;
  let t;
  t = this.adaptor;
  s = this.start.node;
  i = t.text("");
  if (!(e)) goto L_2ea;
  let e#2;
  e#2 = ((this.start.delim + this.math) + this.end.delim);
  if (!(this.inputJax.processStrings)) goto L_260;
  i = t.text(e#2);
  t.text(e#2);
  goto L_2ea;
  let s#1;
  s#1 = t.parse(e#2, "text/html");
  i = t.firstChild(t.body(s#1));
  t.firstChild(t.body(s#1));
  if (!(t.parent(s))) goto L_345;
  t.replace(i, s);
  this.end.node = i;
  this.start.node = i;
  this.end.n = 0;
  this.start.n = 0;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=5 bc=185B file=math_jax/src/mathjax_src/handlers/html/HTMLMathItem
// args: require, module, exports
// locals: t, HTMLMathItem, <class_fields_init>, HTMLMathItem#1
function {
  let HTMLMathItem#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HTMLMathItem = undefined;
  t = require("../../core/MathItem");
  let HTMLMathItem;
  let <class_fields_init>;
  class HTMLMathItem extends t.AbstractMathItem { ... }
  <proto:HTMLMathItem>.adaptor = function <atom:0>;
  <proto:HTMLMathItem>.updateDocument = function <atom:0>;
  <proto:HTMLMathItem>.updateStyleSheet = function <atom:0>;
  <proto:HTMLMathItem>.removeFromDocument = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HTMLMathItem>;
  HTMLMathItem = function <atom:0>;
  // close_loc <class_fields_init>
  HTMLMathItem#1 = function <atom:0>;
  exports.HTMLMathItem = HTMLMathItem#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/handlers/html/HTMLMathItem
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
