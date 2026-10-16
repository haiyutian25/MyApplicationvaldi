// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=130B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mi
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mi
function {
  return "mi";
}

// fn <atom:0>  args=4 vars=10 closure=1 cpool=0 bc=311B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mi
// args: t, e, s, r
// locals: t#1, e#1, s#1, r#1, this, <home_object>
// closure: MmlMi
function {
  <home_object> = <special_object 4>;
  this = this;
  let r#1;
  let s#1;
  let e#1;
  let t#1;
  if (!((t === undefined))) goto L_1b;
  t;
  t = {};
  t#1 = {};
  if (!((e === undefined))) goto L_25;
  e;
  e = false;
  e#1 = false;
  if (!((s === undefined))) goto L_2e;
  s;
  s = 0;
  s#1 = 0;
  if (!((r === undefined))) goto L_38;
  r;
  r = false;
  r#1 = false;
  super["setInheritedAttributes"].call(this, t, e, s, r);
  if (!(this.getText().match(MmlMi.singleCharacter))) goto L_136;
  if (!(!t.mathvariant)) goto L_136;
  this.attributes.setInherited("mathvariant", "italic");
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=490B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mi
// args: e
// locals: s, this
// closure: MmlMi, t
function {
  this = this;
  let s;
  this.getPrevClass(e);
  s = this.getText();
  if (!((s.length > 1))) goto L_1e7;
  if (!(s.match(MmlMi.operatorName))) goto L_1e7;
  if (!(("normal" === this.attributes.get("mathvariant")))) goto L_1e7;
  if (!((undefined === this.getProperty("autoOP")))) goto L_1e7;
  if (!((undefined === this.getProperty("texClass")))) goto L_1e7;
  this.texClass = t.TEXCLASS.OP;
  this.setProperty("autoOP", true);
  return this;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=8 bc=301B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mi
// args: require, module, exports
// locals: t, MmlMi, <class_fields_init>, MmlMi#1
function {
  let MmlMi#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMi = undefined;
  t = require("../MmlNode");
  let MmlMi;
  let <class_fields_init>;
  class MmlMi extends t.AbstractMmlTokenNode { ... }
  <proto:MmlMi>.kind = function <atom:0>;
  <proto:MmlMi>.setInheritedAttributes = function <atom:0>;
  <proto:MmlMi>.setTeXclass = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMi>;
  MmlMi = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc MmlMi
  MmlMi#1 = function <atom:0>;
  exports.MmlMi = MmlMi#1;
  null;
  t.AbstractMmlTokenNode.defaults;
  MmlMi#1.defaults = {};
  MmlMi#1.operatorName = new RegExp("^[a-z][a-z0-9]*$");
  MmlMi#1.singleCharacter = new RegExp("^[\\uD800-\\uDBFF]?.[\\u0300-\\u036F\\u1AB0-\\u1ABE\\u1DC0-\\u1DFF\\u20D0-\\u20EF]*$");
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mi
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
