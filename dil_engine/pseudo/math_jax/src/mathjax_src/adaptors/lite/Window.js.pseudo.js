// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=343B file=math_jax/src/mathjax_src/adaptors/lite/Window
// locals: this
// closure: <class_fields_init>, s, i, e, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.DOMParser = s.LiteParser;
  this.NodeList = i.LiteList;
  this.HTMLCollection = i.LiteList;
  this.HTMLElement = e.LiteElement;
  this.DocumentFragment = i.LiteList;
  this.Document = t.LiteDocument;
  this.document = new t.LiteDocument(this);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=1 bc=154B file=math_jax/src/mathjax_src/adaptors/lite/Window
// args: require, module, exports
// locals: e, t, i, s, LiteWindow, <class_fields_init>, LiteWindow#1
function {
  let LiteWindow#1;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LiteWindow = undefined;
  e = require("./Element");
  t = require("./Document");
  i = require("./List");
  s = require("./Parser");
  let LiteWindow;
  let <class_fields_init>;
  class LiteWindow extends undefined { ... }
  <class_fields_init> = undefined;
  <proto:LiteWindow>;
  LiteWindow = function <atom:0>;
  // close_loc <class_fields_init>
  LiteWindow#1 = function <atom:0>;
  exports.LiteWindow = LiteWindow#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/adaptors/lite/Window
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
