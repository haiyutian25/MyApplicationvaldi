// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=54B file=dil_core/src/utils/XmlBuilder
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.chunks = [];
  this.stack = [];
  this.hasOpenStartNode = false;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=202B file=dil_core/src/utils/XmlBuilder
// args: t
// locals: this
function {
  this = this;
  this.closeOpenStartNode();
  this.chunks.push("<", t);
  this.stack.push(t);
  this.hasOpenStartNode = true;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=307B file=dil_core/src/utils/XmlBuilder
// locals: t, this
function {
  this = this;
  let t;
  t = this.stack.pop();
  if (!((undefined === t))) goto L_62;
  throw new Error("Cannot end XML node: no node is open.");
  if (!(this.hasOpenStartNode)) goto L_df;
  this.chunks.push(" />");
  this.hasOpenStartNode = false;
  return;
  this.chunks.push("</", t, ">");
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=144B file=dil_core/src/utils/XmlBuilder
// args: e, s
// locals: this
// closure: t
function {
  this = this;
  if (!(!this.hasOpenStartNode)) goto L_36;
  throw new Error("Cannot add XML attribute: no start node is open.");
  this.chunks.push(" ", e, "="", t(s), """);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=114B file=dil_core/src/utils/XmlBuilder
// args: t
// locals: this
// closure: e
function {
  this = this;
  this.closeOpenStartNode();
  this.chunks.push(e(t));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=127B file=dil_core/src/utils/XmlBuilder
// locals: this
function {
  this = this;
  if (!((this.stack.length > 0))) goto L_38;
  throw new Error("Cannot build XML: not all nodes are closed.");
  return this.chunks.join("");   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=130B file=dil_core/src/utils/XmlBuilder
// locals: this
function {
  this = this;
  if (!(this.hasOpenStartNode)) goto L_81;
  this.chunks.push(">");
  this.hasOpenStartNode = false;
  false;
  return;
}

// fn t  args=1 vars=1 closure=0 cpool=8 bc=185B file=dil_core/src/utils/XmlBuilder
// args: t
function {
  return t.replace(new RegExp("&"), "&amp;").replace(new RegExp("\""), "&quot;").replace(new RegExp("<"), "&lt;").replace(new RegExp(">"), "&gt;");   // tail call
}

// fn e  args=1 vars=1 closure=0 cpool=6 bc=139B file=dil_core/src/utils/XmlBuilder
// args: t
function {
  return t.replace(new RegExp("&"), "&amp;").replace(new RegExp("<"), "&lt;").replace(new RegExp(">"), "&gt;");   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=9 bc=162B file=dil_core/src/utils/XmlBuilder
// args: require, module, exports
// locals: XmlBuilder, <class_fields_init>, XmlBuilder#1, t, e
function {
  t = function t;
  e = function e;
  let XmlBuilder#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.XmlBuilder = undefined;
  let XmlBuilder;
  let <class_fields_init>;
  class XmlBuilder extends undefined { ... }
  <proto:XmlBuilder>.beginNode = function <atom:0>;
  <proto:XmlBuilder>.endNode = function <atom:0>;
  <proto:XmlBuilder>.addAttribute = function <atom:0>;
  <proto:XmlBuilder>.addText = function <atom:0>;
  <proto:XmlBuilder>.build = function <atom:0>;
  <proto:XmlBuilder>.closeOpenStartNode = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:XmlBuilder>;
  XmlBuilder = function <atom:0>;
  // close_loc <class_fields_init>
  XmlBuilder#1 = function <atom:0>;
  exports.XmlBuilder = XmlBuilder#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/utils/XmlBuilder
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
