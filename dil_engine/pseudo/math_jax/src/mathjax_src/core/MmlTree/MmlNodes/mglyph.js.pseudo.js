// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=130B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mglyph
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, t
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
  this.texclass = t.TEXCLASS.ORD;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mglyph
function {
  return "mglyph";
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=303B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mglyph
// args: t
// locals: e, s, r, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let r;
  let s;
  let e;
  if (((undefined === undefined))) goto L_81;
  e = <to_object>(undefined).src;
  s = <to_object>(undefined).fontfamily;
  r = <to_object>(undefined).index;
  <to_object>(undefined);
  goto L_da;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  if ((("" !== e))) goto L_ef;
  if (!(("" !== s))) goto L_101;
  if (!(("" !== r))) goto L_101;
  goto L_12e;
  // [栈深重同步 1 -> 0]
  this.mError("mglyph must have either src or fontfamily and index attributes", t, true);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=304B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mglyph
// args: require, module, exports
// locals: t, MmlMglyph, <class_fields_init>, MmlMglyph#1
function {
  let MmlMglyph#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMglyph = undefined;
  t = require("../MmlNode");
  let MmlMglyph;
  let <class_fields_init>;
  class MmlMglyph extends t.AbstractMmlTokenNode { ... }
  <proto:MmlMglyph>.kind = function <atom:0>;
  <proto:MmlMglyph>.verifyAttributes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMglyph>;
  MmlMglyph = function <atom:0>;
  // close_loc <class_fields_init>
  MmlMglyph#1 = function <atom:0>;
  exports.MmlMglyph = MmlMglyph#1;
  null;
  t.AbstractMmlTokenNode.defaults;
  MmlMglyph#1.defaults = {alt: "", src: "", index: "", width: "auto", height: "auto", valign: "0em"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mglyph
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
