// fn <atom:0>  args=2 vars=5 closure=8 cpool=0 bc=828B file=dil_text/src/markdown/MarkdownWidgetRendererFactory
// args: o, s
// locals: p, y, this
// closure: t, i, e, a, r, l, n, d
function {
  this = this;
  let y;
  let p;
  p = t.DILRenderChildCounter.fromRenderState(s);
  y = i.getDILInheritedTextStyle(s);
  if (!((p == null))) goto L_84;
  p;
  goto L_d0;
  undefined.beginComponent({name: this.name});
  try { // catch -> L_304
  e.beginComponent(a.DILMarkdownComponent, r, undefined, undefined);
  e.setViewModelProperty("markdown", l(this.props, o));
  e.setViewModelProperty("streamingAnimation", n.getDILStreamingAnimation(s));
  if (!((y == null))) goto L_202;
  y;
  goto L_223;
  e.setViewModelProperty("fontSize", undefined.fontSize);
  if (!((y == null))) goto L_25b;
  y;
  goto L_27c;
  e.setViewModelProperty("lineHeight", undefined.lineHeight);
  e.setViewModelProperty("tableTypography", d.isDILTableTypographyEnabled(s));
  e.endComponent();
  <?>;
  // gosub (finally 块) 778
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 778
  throw <?>;
  if (!((p == null))) goto L_315;
  p;
  goto L_339;
  undefined.popFrame();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_text/src/markdown/MarkdownWidgetRendererFactory
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
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
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=29B file=dil_text/src/markdown/MarkdownWidgetRendererFactory
// locals: this
// closure: <class_fields_init>, s
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.properties = s;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_text/src/markdown/MarkdownWidgetRendererFactory
// args: e
// closure: MarkdownWidgetRenderer
function {
  return new MarkdownWidgetRenderer(e);
}

// fn l  args=2 vars=7 closure=0 cpool=0 bc=246B file=dil_text/src/markdown/MarkdownWidgetRendererFactory
// args: e, r
// locals: t, n, e#1, r#1, t#1
function {
  let n;
  let t;
  t = e.getPropertyValue("value", r);
  if (!(("string" == typeof t))) goto L_42;
  return t;
  n = e.getPropertyValue("children", r);
  if (!(("string" == typeof n))) goto L_7e;
  return n;
  if (!(Array.isArray(n))) goto L_f4;
  let e#1;
  e#1 = "";
  let r#1;
  r#1 = 0;
  if (!((r#1 < n.length))) goto L_f0;
  let t#1;
  t#1 = n[r#1];
  if (!(("string" == typeof t#1))) goto L_e5;
  e#1 = (e#1 + t#1);
  (e#1 + t#1);
  r#1 = <r#1_new>;
  (r#1++);
  goto L_b6;
  return e#1;
  return "";
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=5 bc=375B file=dil_text/src/markdown/MarkdownWidgetRendererFactory
// args: require, module, exports
// locals: e, r, t, n, o, i, d, a, s, MarkdownWidgetRenderer, <class_fields_init>, MarkdownWidgetRenderer#1, MarkdownWidgetRendererFactory, <class_fields_init>#1, MarkdownWidgetRendererFactory#1, l
function {
  l = function l;
  let MarkdownWidgetRendererFactory#1;
  let MarkdownWidgetRenderer#1;
  let s;
  let a;
  let d;
  let i;
  let o;
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MarkdownWidgetRendererFactory = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = e.makeComponentPrototype(undefined, "93d2pCWGNOjVLhXZ");
  t = require("dil_compiler/src/DILRenderChildState");
  n = require("dil_compiler/src/DILStreamingRenderState");
  o = require("dil_compiler/src/DILTypes");
  i = require("dil_core/src/style/DILInheritedTextStyleRenderState");
  d = require("../rendering/DILTableTypographyRenderState");
  a = require("./DILMarkdownComponent");
  s = ["value", "children"];
  let MarkdownWidgetRenderer;
  let <class_fields_init>;
  class MarkdownWidgetRenderer extends o.ADILWidgetRendererInternal { ... }
  <proto:MarkdownWidgetRenderer>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MarkdownWidgetRenderer>;
  MarkdownWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  MarkdownWidgetRenderer#1 = function <atom:0>;
  let MarkdownWidgetRendererFactory;
  let <class_fields_init>#1;
  class MarkdownWidgetRendererFactory extends undefined { ... }
  <proto:MarkdownWidgetRendererFactory>.create = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:MarkdownWidgetRendererFactory>;
  MarkdownWidgetRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>#1
  MarkdownWidgetRendererFactory#1 = function <atom:0>;
  exports.MarkdownWidgetRendererFactory = MarkdownWidgetRendererFactory#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/markdown/MarkdownWidgetRendererFactory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
