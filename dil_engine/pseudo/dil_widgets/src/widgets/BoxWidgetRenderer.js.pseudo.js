// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=79B file=dil_widgets/src/widgets/BoxWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: r, s, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r.Box, e, s);
  if (!(<class_fields_init>)) goto L_49;
  <class_fields_init>.call(this);
  new new.target(r.Box, e, s);
  return this;
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=343B file=dil_widgets/src/widgets/BoxWidgetRenderer
// args: e, r
// locals: o, s, t, this, <home_object>
// closure: t, i
function {
  <home_object> = <special_object 4>;
  this = this;
  let s;
  let o;
  super["setViewModelProperties"].call(this, e, r);
  o = this.props.getPropertyValue("theme", e);
  if (!((r.getProperty(t) === this))) goto L_9c;
  s = (null == o);
  this.setViewModelProperty("nativePopoverSurface", s);
  let t;
  for (const t of i) {
    if (!(s)) goto L_102;
    goto L_14c;
    // [栈深重同步 7 -> 6]
    this.setViewModelProperty(t, this.props.getPropertyValue(t, e));
  }
  return;
}

// fn n  args=3 vars=4 closure=3 cpool=0 bc=136B file=dil_widgets/src/widgets/BoxWidgetRenderer
// args: r, o, i
// locals: s
// closure: e, t, BoxWidgetRenderer
function {
  let s;
  s = e.unwrapDILWidgetRenderer(r);
  if (!((s instanceof BoxWidgetRenderer))) goto L_80;
  goto L_81;
  // [栈深重同步 7 -> 6]
  r.onRender(o, i.withProperty(t, undefined));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/BoxWidgetRenderer
// args: e
// closure: BoxWidgetRenderer
function {
  return new BoxWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=4 bc=348B file=dil_widgets/src/widgets/BoxWidgetRenderer
// args: require, module, exports
// locals: e, r, o, t, i, s, BoxWidgetRenderer, <class_fields_init>, BoxWidgetRenderer#1, n
function {
  n = function n;
  let BoxWidgetRenderer#1;
  let s;
  let i;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderNativePopoverBody = undefined;
  exports.BoxWidgetFactory = undefined;
  e = require("dil_compiler/src/DILWidgetRendererUnwrap");
  r = require("./Box");
  o = require("./DILFlexContainerWidgetRenderer");
  t = Symbol("Native popover surface root");
  i = ["background", "border", "radius"];
  s = {inlineTextContent: true};
  let BoxWidgetRenderer;
  let <class_fields_init>;
  class BoxWidgetRenderer extends o.DILFlexContainerWidgetRenderer { ... }
  <proto:BoxWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BoxWidgetRenderer>;
  BoxWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  BoxWidgetRenderer#1 = function <atom:0>;
  exports.renderNativePopoverBody = n;
  exports.BoxWidgetFactory = {properties: r.Box.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/BoxWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
