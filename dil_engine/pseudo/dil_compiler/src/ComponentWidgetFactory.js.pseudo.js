// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=109B file=dil_compiler/src/ComponentWidgetFactory
// args: t, r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, e
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(r);
  this.componentClass = t;
  this.componentRenderer = new e.DILValdiComponentRenderer(t, r, true);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=158B file=dil_compiler/src/ComponentWidgetFactory
// locals: this
function {
  this = this;
  this.themeProperty = this.props.getProperty("theme");
  this.componentRenderer.onPropsUpdated();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=41B file=dil_compiler/src/ComponentWidgetFactory
// closure: this, e, r
function {
  return this.renderChildren(e, r);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=41B file=dil_compiler/src/ComponentWidgetFactory
// closure: this, e, r
function {
  return this.renderChildren(e, r);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=2 bc=606B file=dil_compiler/src/ComponentWidgetFactory
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = this.getChildRenderState(e, t);
  this.componentRenderer.begin(e, t, this.getValdiComponentKey(e), this.name);
  this.setViewModelProperties(e, t);
  if (!(this.componentClass.useRenderChildrenProperty)) goto L_1a4;
  if (!((0 === this.children.length))) goto L_19d;
  goto L_19f;
  // [栈深重同步 4 -> 3]
  goto L_215;
  // [栈深重同步 1 -> 0]
  if (!((this.children.length > 0))) goto L_215;
  this.componentRenderer.setUnnamedSlot(function <atom:0>);
  this.componentRenderer.end(t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=dil_compiler/src/ComponentWidgetFactory
// args: e, t
function {
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=dil_compiler/src/ComponentWidgetFactory
// args: e, t
// locals: this
function {
  this = this;
  this.componentRenderer.setViewModelProperty(e, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=dil_compiler/src/ComponentWidgetFactory
// args: e, t
// locals: this
function {
  this = this;
  this.componentRenderer.setNamedSlot(e, t);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=271B file=dil_compiler/src/ComponentWidgetFactory
// args: e, o
// locals: i, t, this
// closure: r, n, t
function {
  this = this;
  let i;
  i = o;
  if (!((undefined === this.themeProperty))) goto L_36;
  i = o;
  o;
  goto L_be;
  let t;
  t = this.themeProperty.getValue(e);
  if (!(("string" == typeof t))) goto L_b7;
  goto L_b8;
  // [栈深重同步 3 -> 2]
  i = r.renderStateWithDILTheme(o, undefined);
  r.renderStateWithDILTheme(o, undefined);
  return n.renderStateWithDILTableCellParent(t.renderStateWithDILAutoSpacing(i, undefined), undefined);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=92B file=dil_compiler/src/ComponentWidgetFactory
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  for (const r of this.children) {
    r.onRender(e, t);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=104B file=dil_compiler/src/ComponentWidgetFactory
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.componentClass = e;
  this.properties = this.componentClass.properties;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=45B file=dil_compiler/src/ComponentWidgetFactory
// args: e
// locals: this
// closure: ComponentWidgetRenderer
function {
  this = this;
  return new ComponentWidgetRenderer(this.componentClass, e);
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_compiler/src/ComponentWidgetFactory
// args: e
// closure: DILWidgetComponentRendererFactory
function {
  return new DILWidgetComponentRendererFactory(e);
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=11 bc=345B file=dil_compiler/src/ComponentWidgetFactory
// args: require, module, exports
// locals: e, t, r, n, o, ComponentWidgetRenderer, <class_fields_init>, ComponentWidgetRenderer#1, DILWidgetComponentRendererFactory, <class_fields_init>#1, DILWidgetComponentRendererFactory#1, i
function {
  i = function i;
  let DILWidgetComponentRendererFactory#1;
  let ComponentWidgetRenderer#1;
  let o;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ComponentWidgetRenderer = undefined;
  exports.DILWidgetComponentRendererFactory = undefined;
  exports.makeWidgetFactoryForComponentClass = undefined;
  e = require("./DILValdiComponentRenderer");
  t = require("./DILAutoSpacingRenderState");
  r = require("./DILThemeRenderState");
  n = require("./DILTableCellRenderState");
  o = require("./DILTypes");
  let ComponentWidgetRenderer;
  let <class_fields_init>;
  class ComponentWidgetRenderer extends o.ADILWidgetRendererInternal { ... }
  <proto:ComponentWidgetRenderer>.onPropsChanged = function <atom:0>;
  <proto:ComponentWidgetRenderer>.onRender = function <atom:0>;
  <proto:ComponentWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <proto:ComponentWidgetRenderer>.setViewModelProperty = function <atom:0>;
  <proto:ComponentWidgetRenderer>.setNamedSlot = function <atom:0>;
  <proto:ComponentWidgetRenderer>.getChildRenderState = function <atom:0>;
  <proto:ComponentWidgetRenderer>.renderChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ComponentWidgetRenderer>;
  ComponentWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  ComponentWidgetRenderer#1 = function <atom:0>;
  exports.ComponentWidgetRenderer = ComponentWidgetRenderer#1;
  let DILWidgetComponentRendererFactory;
  let <class_fields_init>#1;
  class DILWidgetComponentRendererFactory extends undefined { ... }
  <proto:DILWidgetComponentRendererFactory>.create = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILWidgetComponentRendererFactory>;
  DILWidgetComponentRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILWidgetComponentRendererFactory#1 = function <atom:0>;
  exports.DILWidgetComponentRendererFactory = DILWidgetComponentRendererFactory#1;
  exports.makeWidgetFactoryForComponentClass = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/ComponentWidgetFactory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
