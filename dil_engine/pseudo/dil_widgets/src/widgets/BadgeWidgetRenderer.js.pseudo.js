// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/BadgeWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: i, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(i.Badge, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(i.Badge, e);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=146B file=dil_widgets/src/widgets/BadgeWidgetRenderer
// args: e, t
// locals: this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  super["setViewModelProperties"].call(this, e, t);
  this.setViewModelProperty("__inline", r.isRenderingDILViewBackedInlineText(t));
  this.setViewModelProperty("__legacy", true);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=62B file=dil_widgets/src/widgets/BadgeWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  return {children: this.children, celScope: e, plainTextBehavior: 0, viewBacked: true};
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=470B file=dil_widgets/src/widgets/BadgeWidgetRenderer
// args: e, r
// locals: o, this, <home_object>
// closure: t, i
function {
  <home_object> = <special_object 4>;
  this = this;
  let o;
  o = this.props.getPropertyValueAsString("size", e);
  return t.renderStateWithDILInheritedTextStyleValues(super["getChildRenderState"].call(this, e, r), {color: i.resolveBadgeTextColor({color: this.props.getPropertyValueAsString("color", e), interactive: this.props.getPropertyValueAsBoolean("interactive", e), variant: this.props.getPropertyValueAsString("variant", e)}), size: i.resolveBadgeTextSize(o)});   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=95B file=dil_widgets/src/widgets/BadgeWidgetRenderer
// locals: this
// closure: <class_fields_init>, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.properties = i.Badge.properties;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/BadgeWidgetRenderer
// args: e
// closure: BadgeWidgetRenderer
function {
  return new BadgeWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=6 bc=254B file=dil_widgets/src/widgets/BadgeWidgetRenderer
// args: require, module, exports
// locals: e, r, t, i, BadgeWidgetRenderer, <class_fields_init>, BadgeWidgetRenderer#1, BadgeWidgetRendererFactory, <class_fields_init>#1, BadgeWidgetRendererFactory#1
function {
  let BadgeWidgetRendererFactory#1;
  let BadgeWidgetRenderer#1;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BadgeWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  r = require("dil_core/src/DILInlineTextContentRenderer");
  t = require("dil_core/src/style/DILInheritedTextStyleRenderState");
  i = require("./Badge");
  let BadgeWidgetRenderer;
  let <class_fields_init>;
  class BadgeWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:BadgeWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <proto:BadgeWidgetRenderer>.getDILInlineTextContent = function <atom:0>;
  <proto:BadgeWidgetRenderer>.getChildRenderState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BadgeWidgetRenderer>;
  BadgeWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  BadgeWidgetRenderer#1 = function <atom:0>;
  let BadgeWidgetRendererFactory;
  let <class_fields_init>#1;
  class BadgeWidgetRendererFactory extends undefined { ... }
  <proto:BadgeWidgetRendererFactory>.create = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:BadgeWidgetRendererFactory>;
  BadgeWidgetRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>#1
  BadgeWidgetRendererFactory#1 = function <atom:0>;
  exports.BadgeWidgetFactory = new BadgeWidgetRendererFactory#1();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/BadgeWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
