// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=117B file=math_jax/src/mathjax_src/output/svg/Wrappers/TextNode
// args: e, t
function {
  e.addStyles({mjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c]: {stroke-width: t.options.blacker}});
  return;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=732B file=math_jax/src/mathjax_src/output/svg/Wrappers/TextNode
// args: e
// locals: t, o, s, r, a, t#1, this
function {
  this = this;
  let s;
  let o;
  let t;
  t = this.adaptor;
  o = this.parent.variant;
  s = this.node.getText();
  if (!((0 !== s.length))) goto L_2db;
  if (!(("-explicitFont" === o))) goto L_15c;
  this.dom = [t.append(e[0], this.jax.unknownText(s, o))];
  return;
  let a;
  let r;
  r = this.remappedText(s, o);
  if (!((this.parent.childNodes.length > 1))) goto L_24a;
  this.dom = [t.append(e[0], this.svg("g", {data-mml-node: "text"}))];
  e = [t.append(e[0], this.svg("g", {data-mml-node: "text"}))];
  goto L_257;
  // [栈深重同步 1 -> 0]
  this.dom = e;
  e;
  a = 0;
  let t#1;
  for (const t#1 of r) {
    a = (a + this.placeChar(t#1, a, 0, e[0], o, true));
    (a + this.placeChar(t#1, a, 0, e[0], o, true));
  }
  this.addUtext(a, 0, e[0], o);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/TextNode
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=233B file=math_jax/src/mathjax_src/output/svg/Wrappers/TextNode
// locals: s, r, SvgTextNode, <class_fields_init>
// closure: t, e, o
function {
  let r;
  r = t.CommonTextNodeMixin(e.SvgWrapper);
  let SvgTextNode;
  let <class_fields_init>;
  class SvgTextNode extends r { ... }
  function <atom:0>.addStyles = function <atom:0>;
  <proto:SvgTextNode>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgTextNode>;
  SvgTextNode = function <atom:0>;
  // close_loc <class_fields_init>
  s = function <atom:0>;
  function <atom:0>.kind = o.TextNode.prototype.kind;
  return s;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=114B file=math_jax/src/mathjax_src/output/svg/Wrappers/TextNode
// args: require, module, exports
// locals: e, t, o
function {
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgTextNode = undefined;
  e = require("../Wrapper");
  t = require("../../common/Wrappers/TextNode");
  o = require("../../../core/MmlTree/MmlNode");
  exports.SvgTextNode = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/TextNode
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
