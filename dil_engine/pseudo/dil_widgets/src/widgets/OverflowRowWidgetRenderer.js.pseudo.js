// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=76B file=dil_widgets/src/widgets/OverflowRowWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t.OverflowRow, e);
  if (!(<class_fields_init>)) goto L_46;
  <class_fields_init>.call(this);
  new new.target(t.OverflowRow, e);
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=42B file=dil_widgets/src/widgets/OverflowRowWidgetRenderer
// args: r
// closure: i, e, t
function {
  return i(r, e, t.OVERFLOW_ROW_ACTION_PROPERTY);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=42B file=dil_widgets/src/widgets/OverflowRowWidgetRenderer
// args: r
// closure: i, e, t
function {
  return i(r, e, t.OVERFLOW_ROW_END_ACTION_PROPERTY);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=2 bc=280B file=dil_widgets/src/widgets/OverflowRowWidgetRenderer
// args: e, r
// locals: this
// closure: i, t
function {
  this = this;
  this.setViewModelProperty("wrap", "wrap");
  this.setViewModelProperty("hasOverflowAction", this.children.some(function <atom:0>));
  this.setViewModelProperty("hasOverflowEndAction", this.children.some(function <atom:0>));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=42B file=dil_widgets/src/widgets/OverflowRowWidgetRenderer
// args: e
// closure: i, d, s
function {
  return i(e, d.celScope, s);   // tail call
}

// fn i  args=3 vars=5 closure=3 cpool=1 bc=297B file=dil_widgets/src/widgets/OverflowRowWidgetRenderer
// args: e, t, s
// locals: n, d
// closure: i, o, r
function {
  let d;
  let n;
  n = o.unwrapDILWidgetRenderer(e);
  if (!((undefined !== n.props.getPropertyValue(s, t)))) goto L_7e;
  return true;
  if (!(!r.isDILTransparentWidgetRenderer(n))) goto L_ac;
  return false;
  d = n.getDILTransparentWidgetChildren(t);
  if (!((undefined !== d))) goto L_128;
  return d.children.some(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/OverflowRowWidgetRenderer
// args: e
// closure: OverflowRowWidgetRenderer
function {
  return new OverflowRowWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=4 bc=285B file=dil_widgets/src/widgets/OverflowRowWidgetRenderer
// args: require, module, exports
// locals: e, r, o, t, OverflowRowWidgetRenderer, <class_fields_init>, OverflowRowWidgetRenderer#1, i
function {
  i = function i;
  let OverflowRowWidgetRenderer#1;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OverflowRowWidgetFactory = undefined;
  e = require("dil_compiler/src/ComponentWidgetFactory");
  r = require("dil_compiler/src/DILTransparentWidgetRenderer");
  o = require("dil_compiler/src/DILWidgetRendererUnwrap");
  t = require("./OverflowRow");
  let OverflowRowWidgetRenderer;
  let <class_fields_init>;
  class OverflowRowWidgetRenderer extends e.ComponentWidgetRenderer { ... }
  <proto:OverflowRowWidgetRenderer>.setViewModelProperties = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OverflowRowWidgetRenderer>;
  OverflowRowWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  OverflowRowWidgetRenderer#1 = function <atom:0>;
  exports.OverflowRowWidgetFactory = {properties: t.OverflowRow.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/OverflowRowWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
