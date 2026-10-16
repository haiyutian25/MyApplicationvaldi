// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/adaptors/lite/Document
function {
  return "#document";
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=232B file=math_jax/src/mathjax_src/adaptors/lite/Document
// args: t
// locals: t#1, this
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
  this.defaultView = null;
  this.head = new e.LiteElement("head");
  this.body = new e.LiteElement("body");
  this.root = new e.LiteElement("html", {}, [new e.LiteElement("head"), new e.LiteElement("body")]);
  this.type = "";
  this.defaultView = t;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=126B file=math_jax/src/mathjax_src/adaptors/lite/Document
// args: require, module, exports
// locals: e, LiteDocument, <class_fields_init>, LiteDocument#1
function {
  let LiteDocument#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LiteDocument = undefined;
  e = require("./Element");
  let LiteDocument;
  let <class_fields_init>;
  class LiteDocument extends undefined { ... }
  <proto:LiteDocument>.kind = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LiteDocument>;
  LiteDocument = function <atom:0>;
  // close_loc <class_fields_init>
  LiteDocument#1 = function <atom:0>;
  exports.LiteDocument = LiteDocument#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/adaptors/lite/Document
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
