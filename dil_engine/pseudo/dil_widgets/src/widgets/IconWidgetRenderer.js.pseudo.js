// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/IconWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t.Icon, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(t.Icon, e);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=184B file=dil_widgets/src/widgets/IconWidgetRenderer
// args: e, t
// locals: this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  super["setViewModelProperties"].call(this, e, t);
  if (!((false !== this.props.getPropertyValueAsBoolean("inline", e)))) goto L_b4;
  this.setViewModelProperty("__inline", r.isRenderingDILViewBackedInlineText(t));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=dil_widgets/src/widgets/IconWidgetRenderer
// args: e
function {
  return {children: [], celScope: e, inlineViewVerticalAlignment: 4, plainTextBehavior: 1, viewBacked: true};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=95B file=dil_widgets/src/widgets/IconWidgetRenderer
// locals: this
// closure: <class_fields_init>, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.properties = t.Icon.properties;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/IconWidgetRenderer
// args: e
// closure: IconWidgetRenderer
function {
  return new IconWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=5 bc=234B file=dil_widgets/src/widgets/IconWidgetRenderer
// args: require, module, exports
// locals: e, r, t, IconWidgetRenderer, <class_fields_init>, IconWidgetRenderer#1, IconWidgetRendererFactory, <class_fields_init>#1, IconWidgetRendererFactory#1
function {
  let IconWidgetRendererFactory#1;
  let IconWidgetRenderer#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IconWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  r = require("dil_core/src/DILInlineTextContentRenderer");
  t = require("./Icon");
  let IconWidgetRenderer;
  let <class_fields_init>;
  class IconWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:IconWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <proto:IconWidgetRenderer>.getDILInlineTextContent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:IconWidgetRenderer>;
  IconWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  IconWidgetRenderer#1 = function <atom:0>;
  let IconWidgetRendererFactory;
  let <class_fields_init>#1;
  class IconWidgetRendererFactory extends undefined { ... }
  <proto:IconWidgetRendererFactory>.create = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:IconWidgetRendererFactory>;
  IconWidgetRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>#1
  IconWidgetRendererFactory#1 = function <atom:0>;
  exports.IconWidgetFactory = new IconWidgetRendererFactory#1();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/IconWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
