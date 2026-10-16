// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=225B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e
// locals: r, t, this
// closure: a, o
function {
  this = this;
  let t;
  let r;
  r = a(this.children);
  if (!((undefined === r))) goto L_35;
  return;
  t = o.makeScopedDILWidgetRendererCELScope(r.sourceRenderer, e);
  return {children: r.renderer.children, celScope: t, plainTextBehavior: 0, viewBacked: true};
}

// fn <atom:0>  args=2 vars=9 closure=3 cpool=0 bc=762B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e, r
// locals: t, n, i, d, s, p, this
// closure: a, h, o
function {
  this = this;
  let p;
  let s;
  let d;
  let i;
  let n;
  let t;
  t = a(this.children);
  n = h(this.children);
  if (((undefined === t))) goto L_6f;
  if (!((undefined === n))) goto L_72;
  return;
  i = (undefined !== this.props.getProperty("open"));
  d = this.props.getPropertyValueAsBoolean("open", e);
  s = o.makeScopedDILWidgetRendererCELScope(t.sourceRenderer, e);
  p = o.makeScopedDILWidgetRendererCELScope(n.sourceRenderer, e);
  t.renderer.renderWithPopoverContext(s, r, {controlledOpen: i, open: d, showOnHover: this.props.getPropertyValueAsBoolean("showOnHover", e), hoverOpenDelay: this.props.getPropertyValueAsNumber("hoverOpenDelay", e), content: n.renderer.makeOverlayDefinition(p, r)});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/PopoverWidgetRenderer
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

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=131B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, t, s
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.componentRenderer = new t.DILValdiComponentRenderer(s.PopoverTrigger, e, true);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// locals: this
function {
  this = this;
  this.componentRenderer.onPropsUpdated();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=15B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e, r
function {
  throw new Error("Invalid Popover.Trigger node: must be rendered as a direct child of Popover.");
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=62B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  return {children: this.children, celScope: e, plainTextBehavior: 0, viewBacked: false};
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=41B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// closure: this, e, o
function {
  return this.renderChildren(e, o);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=1 bc=897B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e, r, t
// locals: o, this
// closure: v, i
function {
  this = this;
  this.componentRenderer.begin(e, r, undefined, this.name);
  this.componentRenderer.setViewModelProperty("controlledOpen", t.controlledOpen);
  this.componentRenderer.setViewModelProperty("open", t.open);
  this.componentRenderer.setViewModelProperty("showOnHover", t.showOnHover);
  this.componentRenderer.setViewModelProperty("hoverOpenDelay", t.hoverOpenDelay);
  this.componentRenderer.setViewModelProperty("content", t.content);
  if (!((this.children.length > 0))) goto L_339;
  let o;
  if (!(v(t))) goto L_2eb;
  goto L_2ec;
  // [栈深重同步 1 -> 0]
  o = r;
  this.componentRenderer.setUnnamedSlot(function <atom:0>);
  // close_loc o
  this.componentRenderer.end(r);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=136B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e, r
// locals: t, this
function {
  this = this;
  let t;
  t = 0;
  if (!((t < this.children.length))) goto L_87;
  this.children[t].onRender(e, r);
  t = <t_new>;
  (t++);
  goto L_7;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=15B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e, r
function {
  throw new Error("Invalid Popover.Content node: must be rendered as a direct child of Popover.");
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=233B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: r
// closure: d, this, p, e, o
function {
  if (!((r === d.PopoverContentPresentation.NativeSheet))) goto L_bf;
  if (!((1 === this.children.length))) goto L_bf;
  goto L_e8;
  // [栈深重同步 1 -> 0]
  this.renderChildren(e, o);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=6 cpool=1 bc=728B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e, t
// locals: o, this
// closure: d, p, r, P, f, R
function {
  this = this;
  let o;
  o = r.renderStateWithDILAutoSpacing(t, undefined);
  return {renderBody: function <atom:0>, avoidCollisions: this.props.getPropertyValueAsBoolean("avoidCollisions", e), width: P(this.props, "width", e), minWidth: P(this.props, "minWidth", e), maxWidth: this.props.getPropertyValueAsNumber("maxWidth", e), side: f(this.props.getPropertyValueAsString("side", e)), sideOffset: this.props.getPropertyValueAsNumber("sideOffset", e), align: R(this.props.getPropertyValueAsString("align", e)), alignOffset: this.props.getPropertyValueAsNumber("alignOffset", e), translucent: this.props.getPropertyValueAsBoolean("translucent", e)};
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=136B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e, r
// locals: t, this
function {
  this = this;
  let t;
  t = 0;
  if (!((t < this.children.length))) goto L_87;
  this.children[t].onRender(e, r);
  t = <t_new>;
  (t++);
  goto L_7;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/PopoverWidgetRenderer
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

// fn a  args=1 vars=3 closure=1 cpool=0 bc=62B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e
// locals: r, t
// closure: g
function {
  let r;
  r = 0;
  if (!((r < e.length))) goto L_3d;
  let t;
  t = g(e[r]);
  if (!((undefined !== t))) goto L_33;
  return {renderer: t, sourceRenderer: e[r]};
  r = <r_new>;
  (r++);
  goto L_5;
  return;
}

// fn h  args=1 vars=3 closure=1 cpool=0 bc=62B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e
// locals: r, t
// closure: u
function {
  let r;
  r = 0;
  if (!((r < e.length))) goto L_3d;
  let t;
  t = u(e[r]);
  if (!((undefined !== t))) goto L_33;
  return {renderer: t, sourceRenderer: e[r]};
  r = <r_new>;
  (r++);
  goto L_5;
  return;
}

// fn g  args=1 vars=2 closure=2 cpool=0 bc=56B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e
// locals: r
// closure: o, PopoverTriggerWidgetRenderer
function {
  let r;
  r = o.unwrapDILWidgetRenderer(e);
  if (!((r instanceof PopoverTriggerWidgetRenderer))) goto L_37;
  return r;
  return;
}

// fn u  args=1 vars=2 closure=2 cpool=0 bc=56B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e
// locals: r
// closure: o, PopoverContentWidgetRenderer
function {
  let r;
  r = o.unwrapDILWidgetRenderer(e);
  if (!((r instanceof PopoverContentWidgetRenderer))) goto L_37;
  return r;
  return;
}

// fn v  args=1 vars=1 closure=0 cpool=0 bc=78B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e
function {
  if (!((true !== e.controlledOpen))) goto L_4d;
  return (undefined !== e.content);
}

// fn P  args=3 vars=4 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e, r, t
// locals: o
function {
  let o;
  o = e.getPropertyValueAsStringOrNumber(r, t);
  if ((("auto" === o))) goto L_42;
  if (!(("number" == typeof o))) goto L_48;
  return o;
  return;
}

// fn f  args=1 vars=1 closure=0 cpool=0 bc=40B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e
function {
  if (((e === "top"))) goto L_25;
  if (((e === "right"))) goto L_25;
  if (((e === "bottom"))) goto L_25;
  if (!((e === "left"))) goto L_27;
  return e;
  e;
  return;
}

// fn R  args=1 vars=1 closure=0 cpool=0 bc=31B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e
function {
  if (((e === "start"))) goto L_1c;
  if (((e === "center"))) goto L_1c;
  if (!((e === "end"))) goto L_1e;
  return e;
  e;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e, r
// closure: PopoverWidgetRenderer
function {
  return new PopoverWidgetRenderer(e);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e, r
// closure: PopoverTriggerWidgetRenderer
function {
  return new PopoverTriggerWidgetRenderer(e);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: e, r
// closure: PopoverContentWidgetRenderer
function {
  return new PopoverContentWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=31 closure=0 cpool=24 bc=771B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// args: require, module, exports
// locals: e, r, t, o, n, i, d, s, p, c, l, PopoverWidgetRenderer, <class_fields_init>, PopoverWidgetRenderer#1, PopoverTriggerWidgetRenderer, <class_fields_init>#1, PopoverTriggerWidgetRenderer#1, PopoverContentWidgetRenderer, <class_fields_init>#2, PopoverContentWidgetRenderer#1, a, h, g, u, v, P, f, R
function {
  a = function a;
  h = function h;
  g = function g;
  u = function u;
  v = function v;
  P = function P;
  f = function f;
  R = function R;
  let PopoverContentWidgetRenderer#1;
  let PopoverTriggerWidgetRenderer#1;
  let PopoverWidgetRenderer#1;
  let l;
  let c;
  let p;
  let s;
  let d;
  let i;
  let n;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PopoverWidgetFactory = undefined;
  exports.PopoverTriggerWidgetFactory = undefined;
  exports.PopoverContentWidgetFactory = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = require("dil_compiler/src/DILAutoSpacingRenderState");
  t = require("dil_compiler/src/DILValdiComponentRenderer");
  o = require("dil_compiler/src/DILWidgetRendererUnwrap");
  n = require("dil_compiler/src/DILTypes");
  i = require("dil_core/src/DILTextSelectionRenderState");
  d = require("../popover/PopoverContent");
  s = require("../popover/PopoverTrigger");
  p = require("./BoxWidgetRenderer");
  c = ["open", "showOnHover", "hoverOpenDelay"];
  l = ["avoidCollisions", "width", "minWidth", "maxWidth", "side", "sideOffset", "align", "alignOffset", "translucent", "autoFocus"];
  let PopoverWidgetRenderer;
  let <class_fields_init>;
  class PopoverWidgetRenderer extends n.ADILWidgetRendererInternal { ... }
  <proto:PopoverWidgetRenderer>.getDILInlineTextContent = function <atom:0>;
  <proto:PopoverWidgetRenderer>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PopoverWidgetRenderer>;
  PopoverWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  PopoverWidgetRenderer#1 = function <atom:0>;
  let PopoverTriggerWidgetRenderer;
  let <class_fields_init>#1;
  class PopoverTriggerWidgetRenderer extends n.ADILWidgetRendererInternal { ... }
  <proto:PopoverTriggerWidgetRenderer>.onPropsChanged = function <atom:0>;
  <proto:PopoverTriggerWidgetRenderer>.onRender = function <atom:0>;
  <proto:PopoverTriggerWidgetRenderer>.getDILInlineTextContent = function <atom:0>;
  <proto:PopoverTriggerWidgetRenderer>.renderWithPopoverContext = function <atom:0>;
  <proto:PopoverTriggerWidgetRenderer>.renderChildren = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:PopoverTriggerWidgetRenderer>;
  PopoverTriggerWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  PopoverTriggerWidgetRenderer#1 = function <atom:0>;
  let PopoverContentWidgetRenderer;
  let <class_fields_init>#2;
  class PopoverContentWidgetRenderer extends n.ADILWidgetRendererInternal { ... }
  <proto:PopoverContentWidgetRenderer>.onRender = function <atom:0>;
  <proto:PopoverContentWidgetRenderer>.makeOverlayDefinition = function <atom:0>;
  <proto:PopoverContentWidgetRenderer>.renderChildren = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:PopoverContentWidgetRenderer>;
  PopoverContentWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#2
  PopoverContentWidgetRenderer#1 = function <atom:0>;
  exports.PopoverWidgetFactory = {properties: c, create: function <atom:0>};
  exports.PopoverTriggerWidgetFactory = {properties: s.PopoverTrigger.properties, create: function <atom:0>};
  exports.PopoverContentWidgetFactory = {properties: l, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/PopoverWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
