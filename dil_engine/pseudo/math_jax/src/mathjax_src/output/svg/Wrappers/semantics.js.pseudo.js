// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=200B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
// args: t
// locals: e, this
function {
  this = this;
  let e;
  if (!(this.toEmbellishedSVG(t))) goto L_2e;
  return;
  e = this.standardSvgNodes(t);
  if (!(this.childNodes.length)) goto L_c7;
  this.childNodes[0].toSVG(e);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=223B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
// locals: i, s, SvgSemantics, <class_fields_init>
// closure: e, t, o
function {
  let s;
  s = e.CommonSemanticsMixin(t.SvgWrapper);
  let SvgSemantics;
  let <class_fields_init>;
  class SvgSemantics extends s { ... }
  <proto:SvgSemantics>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgSemantics>;
  SvgSemantics = function <atom:0>;
  // close_loc <class_fields_init>
  i = function <atom:0>;
  function <atom:0>.kind = o.MmlSemantics.prototype.kind;
  return i;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=19B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
// args: t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["toSVG"].call(this, t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
// locals: this
function {
  this = this;
  return this.bbox;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
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

// fn <atom:0>  args=0 vars=3 closure=2 cpool=3 bc=187B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
// locals: e, SvgAnnotation, <class_fields_init>
// closure: t, o
function {
  let SvgAnnotation;
  let <class_fields_init>;
  class SvgAnnotation extends t.SvgWrapper { ... }
  <proto:SvgAnnotation>.toSVG = function <atom:0>;
  <proto:SvgAnnotation>.computeBBox = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgAnnotation>;
  SvgAnnotation = function <atom:0>;
  // close_loc <class_fields_init>
  e = function <atom:0>;
  function <atom:0>.kind = o.MmlAnnotation.prototype.kind;
  return e;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
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

// fn <atom:0>  args=0 vars=3 closure=2 cpool=1 bc=218B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
// locals: e, SvgAnnotationXML, <class_fields_init>
// closure: t, o
function {
  let SvgAnnotationXML;
  let <class_fields_init>;
  class SvgAnnotationXML extends t.SvgWrapper { ... }
  <class_fields_init> = undefined;
  <proto:SvgAnnotationXML>;
  SvgAnnotationXML = function <atom:0>;
  // close_loc <class_fields_init>
  e = function <atom:0>;
  function <atom:0>.kind = o.MmlAnnotationXML.prototype.kind;
  e.styles = {foreignObject[data-mjx-xml]: {font-family: "initial", line-height: "normal", overflow: "visible"}};
  return e;
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=0 bc=943B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
// args: t
// locals: e, i, o, s, n, r, this
function {
  this = this;
  let r;
  let n;
  let s;
  let o;
  let i;
  let e;
  e = this.jax.math.metrics;
  i = ((e.em * e.scale) * this.rscale);
  o = this.fixed((1 / i), 3);
  if (((undefined === undefined))) goto L_18a;
  s = <to_object>(undefined).w;
  n = <to_object>(undefined).h;
  r = <to_object>(undefined).d;
  <to_object>(undefined);
  goto L_1b4;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_11b;
  // [栈深重同步 1 -> 0]
  this.dom = [this.adaptor.append(t[0], this.svg("foreignObject", {data-mjx-xml: true, y: (this.jax.fixed((-n * i)) + "px"), width: (this.jax.fixed((s * i)) + "px"), height: (this.jax.fixed(((n + r) * i)) + "px"), transform: "scale(".concat(o, ") matrix(1 0 0 -1 0 0)")}, [this.getHTML()]))];
  return;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=481B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
// args: t, e
// locals: i, o, s, n, this
function {
  this = this;
  let n;
  let s;
  let o;
  let i;
  t = this.html("mjx-html-holder", {style: e}, [t]);
  if (((undefined === undefined))) goto L_b8;
  i = <to_object>(undefined).h;
  o = <to_object>(undefined).d;
  s = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_e2;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_4b;
  // [栈深重同步 1 -> 0]
  n = this.metrics.scale;
  e.height = this.em(((i + o) * n));
  e.width = this.em((s * n));
  e["vertical-align"] = this.em((-o * n));
  delete "font-size";
  delete "font-family";
  return t;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=3 bc=299B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
// locals: e, o, SvgXmlNode, <class_fields_init>
// closure: i, t, s
function {
  let o;
  o = i.CommonXmlNodeMixin(t.SvgWrapper);
  let SvgXmlNode;
  let <class_fields_init>;
  class SvgXmlNode extends o { ... }
  <proto:SvgXmlNode>.toSVG = function <atom:0>;
  <proto:SvgXmlNode>.addHDW = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgXmlNode>;
  SvgXmlNode = function <atom:0>;
  // close_loc <class_fields_init>
  e = function <atom:0>;
  function <atom:0>.kind = s.XMLNode.prototype.kind;
  null;
  o.styles;
  e.styles = {foreignObject[data-mjx-html]: {overflow: "visible"}};
  return e;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=4 bc=209B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
// args: require, module, exports
// locals: t, e, i, o, s
function {
  let s;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgSemantics = undefined;
  exports.SvgAnnotation = undefined;
  exports.SvgAnnotationXML = undefined;
  exports.SvgXmlNode = undefined;
  t = require("../Wrapper");
  e = require("../../common/Wrappers/semantics");
  i = require("../../common/Wrappers/XmlNode");
  o = require("../../../core/MmlTree/MmlNodes/semantics");
  s = require("../../../core/MmlTree/MmlNode");
  exports.SvgSemantics = function <atom:0>();
  exports.SvgAnnotation = function <atom:0>();
  exports.SvgAnnotationXML = function <atom:0>();
  exports.SvgXmlNode = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/semantics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
