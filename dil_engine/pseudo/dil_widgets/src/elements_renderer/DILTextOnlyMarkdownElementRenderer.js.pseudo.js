// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=85B file=dil_widgets/src/elements_renderer/DILTextOnlyMarkdownElementRenderer
// locals: this.active_func, new.target, this
// closure: e, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("text-only-markdown", e.DILTextOnlyMarkdownComponent, "value");
  if (!(<class_fields_init>)) goto L_4f;
  <class_fields_init>.call(this);
  new new.target("text-only-markdown", e.DILTextOnlyMarkdownComponent, "value");
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=183B file=dil_widgets/src/elements_renderer/DILTextOnlyMarkdownElementRenderer
// args: e, r
// locals: this, <home_object>
// closure: n
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, r);
  this.setViewModelProperty("streamingAnimation", r.streamingAnimation);
  if (!(n.isDILTableTypographyElementScopeActive())) goto L_b6;
  this.setViewModelProperty("tableTypography", true);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=31B file=dil_widgets/src/elements_renderer/DILTextOnlyMarkdownElementRenderer
// args: e, n
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(("streaming" !== e))) goto L_1e;
  super["setProp"].call(this, e, n);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=193B file=dil_widgets/src/elements_renderer/DILTextOnlyMarkdownElementRenderer
// args: require, module, exports
// locals: e, n, r, DILTextOnlyMarkdownElementRenderer, <class_fields_init>, DILTextOnlyMarkdownElementRenderer#1
function {
  let DILTextOnlyMarkdownElementRenderer#1;
  let r;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTextOnlyMarkdownElementRenderer = undefined;
  e = require("dil_text/src/markdown/DILTextOnlyMarkdownComponent");
  n = require("dil_text/src/rendering/DILTableTypographyRenderState");
  r = require("./DILComponentContentElementRenderer");
  let DILTextOnlyMarkdownElementRenderer;
  let <class_fields_init>;
  class DILTextOnlyMarkdownElementRenderer extends r.DILComponentContentElementRenderer { ... }
  <proto:DILTextOnlyMarkdownElementRenderer>.beginRender = function <atom:0>;
  <proto:DILTextOnlyMarkdownElementRenderer>.setProp = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTextOnlyMarkdownElementRenderer>;
  DILTextOnlyMarkdownElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILTextOnlyMarkdownElementRenderer#1 = function <atom:0>;
  exports.DILTextOnlyMarkdownElementRenderer = DILTextOnlyMarkdownElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILTextOnlyMarkdownElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
