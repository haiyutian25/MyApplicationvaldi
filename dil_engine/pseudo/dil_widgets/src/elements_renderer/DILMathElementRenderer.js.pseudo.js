// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILMathElementRenderer
// locals: this.active_func, new.target, this
// closure: e, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("math", e.DILMathWidget);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("math", e.DILMathWidget);
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=157B file=dil_widgets/src/elements_renderer/DILMathElementRenderer
// args: e, t
// locals: n, this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  let n;
  super["beginRender"].call(this, e, t);
  if (!((r.getDILInlineTextStyle() == null))) goto L_44;
  r.getDILInlineTextStyle();
  goto L_65;
  n = undefined.fontSize;
  if (!((undefined !== n))) goto L_9c;
  this.setViewModelProperty("fontSize", n);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=185B file=dil_widgets/src/elements_renderer/DILMathElementRenderer
// args: require, module, exports
// locals: e, t, r, DILMathElementRenderer, <class_fields_init>, DILMathElementRenderer#1
function {
  let DILMathElementRenderer#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILMathElementRenderer = undefined;
  e = require("dil_text/src/math/DILMathWidget");
  t = require("./DILComponentElementRenderer");
  r = require("./DILInlineTextStyle");
  let DILMathElementRenderer;
  let <class_fields_init>;
  class DILMathElementRenderer extends t.DILComponentElementRenderer { ... }
  <proto:DILMathElementRenderer>.beginRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILMathElementRenderer>;
  DILMathElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILMathElementRenderer#1 = function <atom:0>;
  exports.DILMathElementRenderer = DILMathElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILMathElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
