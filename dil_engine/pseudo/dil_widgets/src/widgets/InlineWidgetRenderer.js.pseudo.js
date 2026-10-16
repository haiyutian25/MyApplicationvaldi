// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/InlineWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: r, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r.Inline, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(r.Inline, e);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=49B file=dil_widgets/src/widgets/InlineWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  return {celScope: e, children: this.children};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=95B file=dil_widgets/src/widgets/InlineWidgetRenderer
// locals: this
// closure: <class_fields_init>, r
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.properties = r.Inline.properties;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/InlineWidgetRenderer
// args: e
// closure: InlineWidgetRenderer
function {
  return new InlineWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=4 bc=214B file=dil_widgets/src/widgets/InlineWidgetRenderer
// args: require, module, exports
// locals: e, r, InlineWidgetRenderer, <class_fields_init>, InlineWidgetRenderer#1, InlineWidgetRendererFactory, <class_fields_init>#1, InlineWidgetRendererFactory#1
function {
  let InlineWidgetRendererFactory#1;
  let InlineWidgetRenderer#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.InlineWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  r = require("./Inline");
  let InlineWidgetRenderer;
  let <class_fields_init>;
  class InlineWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:InlineWidgetRenderer>.getDILTransparentWidgetChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:InlineWidgetRenderer>;
  InlineWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  InlineWidgetRenderer#1 = function <atom:0>;
  let InlineWidgetRendererFactory;
  let <class_fields_init>#1;
  class InlineWidgetRendererFactory extends undefined { ... }
  <proto:InlineWidgetRendererFactory>.create = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:InlineWidgetRendererFactory>;
  InlineWidgetRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>#1
  InlineWidgetRendererFactory#1 = function <atom:0>;
  exports.InlineWidgetFactory = new InlineWidgetRendererFactory#1();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/InlineWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
