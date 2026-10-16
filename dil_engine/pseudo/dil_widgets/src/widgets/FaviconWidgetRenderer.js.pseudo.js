// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/FaviconWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: i, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(i.Favicon, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(i.Favicon, e);
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=202B file=dil_widgets/src/widgets/FaviconWidgetRenderer
// args: e
// locals: i, this
// closure: r
function {
  this = this;
  let i;
  i = (true === this.props.getPropertyValueAsBoolean("inline", e));
  if (!(r.Device.isWeb())) goto L_b6;
  if (!(i)) goto L_b6;
  goto L_b7;
  // [栈深重同步 2 -> 1]
  return {children: [], celScope: e, inlineViewVerticalAlignment: undefined, plainTextBehavior: 1, viewBacked: false};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=95B file=dil_widgets/src/widgets/FaviconWidgetRenderer
// locals: this
// closure: <class_fields_init>, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.properties = i.Favicon.properties;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/FaviconWidgetRenderer
// args: e
// closure: FaviconWidgetRenderer
function {
  return new FaviconWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=4 bc=226B file=dil_widgets/src/widgets/FaviconWidgetRenderer
// args: require, module, exports
// locals: e, r, i, FaviconWidgetRenderer, <class_fields_init>, FaviconWidgetRenderer#1, FaviconWidgetRendererFactory, <class_fields_init>#1, FaviconWidgetRendererFactory#1
function {
  let FaviconWidgetRendererFactory#1;
  let FaviconWidgetRenderer#1;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FaviconWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  r = require("valdi_core/src/Device");
  i = require("./Favicon");
  let FaviconWidgetRenderer;
  let <class_fields_init>;
  class FaviconWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:FaviconWidgetRenderer>.getDILInlineTextContent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FaviconWidgetRenderer>;
  FaviconWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  FaviconWidgetRenderer#1 = function <atom:0>;
  let FaviconWidgetRendererFactory;
  let <class_fields_init>#1;
  class FaviconWidgetRendererFactory extends undefined { ... }
  <proto:FaviconWidgetRendererFactory>.create = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:FaviconWidgetRendererFactory>;
  FaviconWidgetRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>#1
  FaviconWidgetRendererFactory#1 = function <atom:0>;
  exports.FaviconWidgetFactory = new FaviconWidgetRendererFactory#1();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/FaviconWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
