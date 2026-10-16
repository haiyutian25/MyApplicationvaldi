// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=85B file=dil_widgets/src/elements_renderer/DILMarkdownElementRenderer
// locals: this.active_func, new.target, this
// closure: e, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("markdown", e.DILMarkdownComponent, "value");
  if (!(<class_fields_init>)) goto L_4f;
  <class_fields_init>.call(this);
  new new.target("markdown", e.DILMarkdownComponent, "value");
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=183B file=dil_widgets/src/elements_renderer/DILMarkdownElementRenderer
// args: e, n
// locals: this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, n);
  this.setViewModelProperty("streamingAnimation", n.streamingAnimation);
  if (!(r.isDILTableTypographyElementScopeActive())) goto L_b6;
  this.setViewModelProperty("tableTypography", true);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=128B file=dil_widgets/src/elements_renderer/DILMarkdownElementRenderer
// args: e, r
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(("value" !== e))) goto L_29;
  if (!(("streaming" !== e))) goto L_27;
  super["setProp"].call(this, e, r);
  return;
  if (!(!this.isSupportedProp(e))) goto L_53;
  return;
  this.setViewModelProperty("markdown", r);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=193B file=dil_widgets/src/elements_renderer/DILMarkdownElementRenderer
// args: require, module, exports
// locals: e, r, n, DILMarkdownElementRenderer, <class_fields_init>, DILMarkdownElementRenderer#1
function {
  let DILMarkdownElementRenderer#1;
  let n;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILMarkdownElementRenderer = undefined;
  e = require("dil_text/src/markdown/DILMarkdownComponent");
  r = require("dil_text/src/rendering/DILTableTypographyRenderState");
  n = require("./DILComponentContentElementRenderer");
  let DILMarkdownElementRenderer;
  let <class_fields_init>;
  class DILMarkdownElementRenderer extends n.DILComponentContentElementRenderer { ... }
  <proto:DILMarkdownElementRenderer>.beginRender = function <atom:0>;
  <proto:DILMarkdownElementRenderer>.setProp = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILMarkdownElementRenderer>;
  DILMarkdownElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILMarkdownElementRenderer#1 = function <atom:0>;
  exports.DILMarkdownElementRenderer = DILMarkdownElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILMarkdownElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
