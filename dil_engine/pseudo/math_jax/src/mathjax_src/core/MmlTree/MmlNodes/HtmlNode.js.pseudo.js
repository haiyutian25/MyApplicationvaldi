// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/HtmlNode
function {
  return "html";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/HtmlNode
// locals: this
function {
  this = this;
  return this.getXML();   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=168B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/HtmlNode
// args: t, e
// locals: t#1, e#1, r, this
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_12;
  e;
  e = null;
  e#1 = null;
  try { // catch -> L_47
  e.getAttribute(t, "data-mjx-hdw");
  <?>;
  goto L_81;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_80
  t = e.node("span", {}, [t]);
  <?>;
  goto L_81;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return this.setXML(t, e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=106B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/HtmlNode
// locals: this
function {
  this = this;
  return this.adaptor.outerHTML(this.xml);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=106B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/HtmlNode
// locals: this
function {
  this = this;
  return this.adaptor.textContent(this.xml);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=167B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/HtmlNode
// locals: t, this
function {
  this = this;
  let t;
  t = this.adaptor.kind(this.xml);
  return "HTML=<".concat(t, ">...</", t, ">");   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=158B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/HtmlNode
// args: t
// locals: this
function {
  this = this;
  if ((!this.parent)) goto L_9d;
  if ((this.parent.isToken)) goto L_9d;
  this.mError("HTML can only be a child of a token element", t, true);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/HtmlNode
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=8 bc=209B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/HtmlNode
// args: require, module, exports
// locals: t, HtmlNode, <class_fields_init>, HtmlNode#1
function {
  let HtmlNode#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HtmlNode = undefined;
  t = require("../MmlNode");
  let HtmlNode;
  let <class_fields_init>;
  class HtmlNode extends t.XMLNode { ... }
  <proto:HtmlNode>.kind = function <atom:0>;
  <proto:HtmlNode>.getHTML = function <atom:0>;
  <proto:HtmlNode>.setHTML = function <atom:0>;
  <proto:HtmlNode>.getSerializedHTML = function <atom:0>;
  <proto:HtmlNode>.textContent = function <atom:0>;
  <proto:HtmlNode>.toString = function <atom:0>;
  <proto:HtmlNode>.verifyTree = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HtmlNode>;
  HtmlNode = function <atom:0>;
  // close_loc <class_fields_init>
  HtmlNode#1 = function <atom:0>;
  exports.HtmlNode = HtmlNode#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/HtmlNode
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
