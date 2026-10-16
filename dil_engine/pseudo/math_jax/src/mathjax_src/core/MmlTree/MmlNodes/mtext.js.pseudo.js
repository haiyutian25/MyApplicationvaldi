// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=130B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtext
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtext
function {
  return "mtext";
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=2 bc=194B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtext
// locals: this
// closure: MmlMtext
function {
  this = this;
  if (!(!!this.getText().match(new RegExp("^\\s*$")))) goto L_c1;
  return !this.attributes.hasOneOf(MmlMtext.NONSPACELIKE);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=289B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtext
// args: require, module, exports
// locals: t, MmlMtext, <class_fields_init>, MmlMtext#1
function {
  let MmlMtext#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlMtext = undefined;
  t = require("../MmlNode");
  let MmlMtext;
  let <class_fields_init>;
  class MmlMtext extends t.AbstractMmlTokenNode { ... }
  <proto:MmlMtext>.kind = function <atom:0>;
  <proto:MmlMtext>.isSpacelike = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlMtext>;
  MmlMtext = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc MmlMtext
  MmlMtext#1 = function <atom:0>;
  exports.MmlMtext = MmlMtext#1;
  MmlMtext#1.NONSPACELIKE = ["style", "mathbackground", "background"];
  null;
  t.AbstractMmlTokenNode.defaults;
  MmlMtext#1.defaults = {};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MmlTree/MmlNodes/mtext
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
