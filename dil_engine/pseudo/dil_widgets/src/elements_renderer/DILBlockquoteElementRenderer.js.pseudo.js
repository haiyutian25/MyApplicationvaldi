// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=47B file=dil_widgets/src/elements_renderer/DILBlockquoteElementRenderer
// locals: this.active_func, new.target, this
// closure: o, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("blockquote", o);
  if (!(<class_fields_init>)) goto L_29;
  <class_fields_init>.call(this);
  new new.target("blockquote", o);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=68B file=dil_widgets/src/elements_renderer/DILBlockquoteElementRenderer
// args: e, t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, t);
  this.setTrustedProp("color", "secondary");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_widgets/src/elements_renderer/DILBlockquoteElementRenderer
// closure: t
function {
  return t.Blockquote;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=3 bc=314B file=dil_widgets/src/elements_renderer/DILBlockquoteElementRenderer
// args: require, module, exports
// locals: e, t, r, o, DILBlockquoteElementRenderer, <class_fields_init>, DILBlockquoteElementRenderer#1
function {
  let DILBlockquoteElementRenderer#1;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILBlockquoteElementRenderer = undefined;
  e = require("dil_text/src/text_elements/TextElement");
  t = require("../widgets/Blockquote");
  r = require("./DILTextElementRenderer");
  null;
  e.TextElement;
  o = {dilV2Properties: t.Blockquote.dilV2Properties};
  let DILBlockquoteElementRenderer;
  let <class_fields_init>;
  class DILBlockquoteElementRenderer extends r.DILTextElementRenderer { ... }
  <proto:DILBlockquoteElementRenderer>.beginRender = function <atom:0>;
  <proto:DILBlockquoteElementRenderer>.componentClass = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILBlockquoteElementRenderer>;
  DILBlockquoteElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILBlockquoteElementRenderer#1 = function <atom:0>;
  exports.DILBlockquoteElementRenderer = DILBlockquoteElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILBlockquoteElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
