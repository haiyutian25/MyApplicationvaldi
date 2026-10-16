// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=649B file=dil_text/src/code/CodeWidgetRenderer
// locals: this
// closure: e, r, c, t
function {
  this = this;
  e.beginRender(r, undefined);
  if (!((true === this.viewModel.__inline))) goto L_a2;
  goto L_a7;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("alignSelf", "flex-start");
  e.setAttributeStyle("style", c.code);
  e.setAttributes(this.baseViewAttributes);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", c.label);
  if (!((this.viewModel.value == null))) goto L_235;
  this.viewModel.value;
  e.setAttributeString("value", "");
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_text/src/code/CodeWidgetRenderer
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

// fn <atom:0>  args=2 vars=5 closure=4 cpool=0 bc=183B file=dil_text/src/code/CodeWidgetRenderer
// args: e, r
// locals: this.active_func, new.target, this
// closure: CodeComponent, <class_fields_init>, C, a
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(CodeComponent, e);
  if (!(<class_fields_init>)) goto L_25;
  <class_fields_init>.call(this);
  new new.target(CodeComponent, e);
  this.inlineTextRenderer = new C.DILTextWidgetRenderer(a.CodeElement, e, r);
  this.inlineTextRenderer.name = "Code";
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=89B file=dil_text/src/code/CodeWidgetRenderer
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["onPropsChanged"].call(this);
  this.inlineTextRenderer.onPropsChanged();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=91B file=dil_text/src/code/CodeWidgetRenderer
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["onChildrenChanged"].call(this, e);
  this.inlineTextRenderer.onChildrenChanged(e);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=101B file=dil_text/src/code/CodeWidgetRenderer
// args: e, r
// locals: this, <home_object>
// closure: i
function {
  <home_object> = <special_object 4>;
  this = this;
  super["setViewModelProperties"].call(this, e, r);
  this.setViewModelProperty("__inline", i.isRenderingDILViewBackedInlineText(r));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=52B file=dil_text/src/code/CodeWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  return {children: [this.inlineTextRenderer], celScope: e};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=62B file=dil_text/src/code/CodeWidgetRenderer
// locals: this
// closure: <class_fields_init>, CodeComponent
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.properties = CodeComponent.properties;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=10B file=dil_text/src/code/CodeWidgetRenderer
// args: e, r
// closure: CodeWidgetRenderer
function {
  return new CodeWidgetRenderer(e, r);
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=9 bc=1229B file=dil_text/src/code/CodeWidgetRenderer
// args: require, module, exports
// locals: e, r, t, n, o, i, d, s, l, C, a, p, CodeComponent, <class_fields_init>, CodeComponent#1, CodeWidgetRenderer, <class_fields_init>#1, CodeWidgetRenderer#1, CodeWidgetRendererFactory, <class_fields_init>#2, CodeWidgetRendererFactory#1, c
function {
  let c;
  let CodeWidgetRendererFactory#1;
  let CodeWidgetRenderer#1;
  let CodeComponent#1;
  let p;
  let a;
  let C;
  let l;
  let s;
  let d;
  let i;
  let o;
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CodeWidgetFactory = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = e.makeNodePrototype("view", undefined, "Ygm0OBd8zqocB9o1");
  t = e.makeNodePrototype("label", undefined, "EgCYzbLhluTS0Ed5");
  n = require("dil_compiler/src/ComponentWidgetFactory");
  o = require("dil_core/src/DILComponent");
  i = require("dil_core/src/DILInlineTextContentRenderer");
  d = require("valdi_core/src/Style");
  s = require("../rendering/DILTextTypography");
  l = require("../rendering/DILTextColor");
  C = require("../rendering/DILTextWidgetRenderer");
  a = require("../text_elements/CodeElement");
  // append([], 0, o.DIL_COMPONENT_PROPERTIES)
  [][o.DIL_COMPONENT_PROPERTIES] = "value";
  ("value" ++);
  p = [];
  let CodeComponent;
  let <class_fields_init>;
  class CodeComponent extends o.DILComponent { ... }
  <proto:CodeComponent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CodeComponent>;
  CodeComponent = function <atom:0>;
  // close_loc <class_fields_init>
  CodeComponent#1 = function <atom:0>;
  CodeComponent#1.properties = p;
  let CodeWidgetRenderer;
  let <class_fields_init>#1;
  class CodeWidgetRenderer extends n.ComponentWidgetRenderer { ... }
  <proto:CodeWidgetRenderer>.onPropsChanged = function <atom:0>;
  <proto:CodeWidgetRenderer>.onChildrenChanged = function <atom:0>;
  <proto:CodeWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <proto:CodeWidgetRenderer>.getDILTransparentWidgetChildren = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:CodeWidgetRenderer>;
  CodeWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  CodeWidgetRenderer#1 = function <atom:0>;
  let CodeWidgetRendererFactory;
  let <class_fields_init>#2;
  class CodeWidgetRendererFactory extends undefined { ... }
  <proto:CodeWidgetRendererFactory>.create = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:CodeWidgetRendererFactory>;
  CodeWidgetRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>#2
  CodeWidgetRendererFactory#1 = function <atom:0>;
  exports.CodeWidgetFactory = new CodeWidgetRendererFactory#1();
  c = {code: new d.Style({alignItems: "center", backgroundColor: "color-surface-tertiary", borderRadius: s.DIL_CODE_BACKGROUND_BORDER_RADIUS, flexDirection: "row", flexShrink: 0, justifyContent: "center", paddingBottom: s.DIL_CODE_VIEW_BACKGROUND_PADDING.bottom, paddingLeft: s.DIL_CODE_VIEW_BACKGROUND_PADDING.left, paddingRight: s.DIL_CODE_VIEW_BACKGROUND_PADDING.right, paddingTop: s.DIL_CODE_VIEW_BACKGROUND_PADDING.top}), label: new d.Style({color: l.resolveDILTextColor(undefined, "emphasis"), flexShrink: 0, font: s.DIL_CODE_FONT, lineHeight: s.DIL_CODE_LINE_HEIGHT, numberOfLines: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/code/CodeWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
