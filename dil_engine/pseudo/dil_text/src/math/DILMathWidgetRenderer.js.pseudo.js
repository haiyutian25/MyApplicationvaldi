// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_text/src/math/DILMathWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: i, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(i.DILMathWidget, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(i.DILMathWidget, e);
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=0 bc=258B file=dil_text/src/math/DILMathWidgetRenderer
// args: e, i
// locals: s, n, this
// closure: r, o, d, t
function {
  this = this;
  let n;
  let s;
  if (!((r.getDILInheritedTextStyle(i) == null))) goto L_36;
  r.getDILInheritedTextStyle(i);
  goto L_57;
  s = undefined.size;
  n = o.resolveDILTextFontSize(d(s));
  this.setViewModelProperty("fontSize", n);
  this.setViewModelProperty("isStreaming", t.isDILStreamingRenderState(i));
  return;
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=69B file=dil_text/src/math/DILMathWidgetRenderer
// args: e
function {
  if ((("number" == typeof e))) goto L_3f;
  if ((("xs" === e))) goto L_3f;
  if ((("sm" === e))) goto L_3f;
  if ((("md" === e))) goto L_3f;
  if ((("lg" === e))) goto L_3f;
  if (!(("xl" === e))) goto L_43;
  return e;
  return undefined;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_text/src/math/DILMathWidgetRenderer
// args: e, t
// closure: DILTextMathWidgetRenderer
function {
  return new DILTextMathWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=4 bc=321B file=dil_text/src/math/DILMathWidgetRenderer
// args: require, module, exports
// locals: e, t, r, i, o, DILTextMathWidgetRenderer, <class_fields_init>, DILTextMathWidgetRenderer#1, d
function {
  d = function d;
  let DILTextMathWidgetRenderer#1;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTextMathWidgetRenderer = undefined;
  exports.DILTextMathWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  t = require("dil_compiler/src/DILStreamingRenderState");
  r = require("dil_core/src/style/DILInheritedTextStyleRenderState");
  i = require("./DILMathWidget");
  o = require("../rendering/DILTextTypography");
  let DILTextMathWidgetRenderer;
  let <class_fields_init>;
  class DILTextMathWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:DILTextMathWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTextMathWidgetRenderer>;
  DILTextMathWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILTextMathWidgetRenderer#1 = function <atom:0>;
  exports.DILTextMathWidgetRenderer = DILTextMathWidgetRenderer#1;
  exports.DILTextMathWidgetFactory = {properties: i.DILMathWidget.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/math/DILMathWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
