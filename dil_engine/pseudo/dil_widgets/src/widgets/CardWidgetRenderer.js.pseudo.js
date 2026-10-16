// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=131B file=dil_widgets/src/widgets/CardWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, i, s
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.componentRenderer = new i.DILValdiComponentRenderer(s.Card, e, true);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/CardWidgetRenderer
// locals: this
function {
  this = this;
  this.componentRenderer.onPropsUpdated();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=39B file=dil_widgets/src/widgets/CardWidgetRenderer
// closure: this, e, r
function {
  return this.renderChildren(e, r);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=296B file=dil_widgets/src/widgets/CardWidgetRenderer
// args: e, r
// locals: this
function {
  this = this;
  this.componentRenderer.begin(e, r, undefined, this.name);
  if (!((this.children.length > 0))) goto L_df;
  this.componentRenderer.setUnnamedSlot(function <atom:0>);
  this.componentRenderer.end(r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=119B file=dil_widgets/src/widgets/CardWidgetRenderer
// closure: l, u, s
function {
  if (!((l.resolveDILContainerGutterContextFromCELValue(u) == null))) goto L_76;
  l.resolveDILContainerGutterContextFromCELValue(u);
  return l.resolveDILContainerGutterContext(s.DEFAULT_CARD_PADDING_UNIT);
}

// fn <atom:0>  args=2 vars=8 closure=8 cpool=1 bc=827B file=dil_widgets/src/widgets/CardWidgetRenderer
// args: i, o
// locals: p, c, h, u, C, this
// closure: l, s, n, r, a, d, t, e
function {
  this = this;
  let C;
  let u;
  let h;
  let c;
  let p;
  p = this.shouldUseAutoSpacing(i);
  c = n.DILRenderChildCounter.fromRenderState(o);
  h = o;
  if (!(p)) goto L_ef;
  if (!((undefined === c))) goto L_ef;
  c = new n.DILRenderChildCounter();
  new n.DILRenderChildCounter();
  h = c.insertInRenderState(o);
  c.insertInRenderState(o);
  if (!(p)) goto L_142;
  goto L_143;
  // [栈深重同步 3 -> 2]
  h = r.renderStateWithDILAutoSpacing(h, undefined);
  r.renderStateWithDILAutoSpacing(h, undefined);
  u = this.props.getPropertyValue("padding", i);
  C = d.remember(function <atom:0>, u);
  h = t.renderStateWithDILContainerGutter(h, C);
  t.renderStateWithDILContainerGutter(h, C);
  if (!((false === this.props.getPropertyValueAsBoolean("selectable", i)))) goto L_273;
  h = e.renderStateWithDILTextSelectionSuppressed(h);
  e.renderStateWithDILTextSelectionSuppressed(h);
  if (!((undefined !== c))) goto L_30f;
  c.pushFrame();
  try { // catch -> L_2df
  this.renderChildrenWithState(i, h);
  <?>;
  // gosub (finally 块) 741
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 741
  throw <?>;
  c.popFrame();
  // ret (finally 块) 
  return;
  this.renderChildrenWithState(i, h);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=136B file=dil_widgets/src/widgets/CardWidgetRenderer
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

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=88B file=dil_widgets/src/widgets/CardWidgetRenderer
// args: e
// locals: r, this
function {
  this = this;
  let r;
  r = this.props.getPropertyValue("gap", e);
  return (null == r);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/CardWidgetRenderer
// args: e, r
// closure: CardWidgetRenderer
function {
  return new CardWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=7 bc=385B file=dil_widgets/src/widgets/CardWidgetRenderer
// args: require, module, exports
// locals: e, r, t, n, i, o, d, s, a, l, CardWidgetRenderer, <class_fields_init>, CardWidgetRenderer#1
function {
  let CardWidgetRenderer#1;
  let l;
  let a;
  let s;
  let d;
  let o;
  let i;
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CardWidgetFactory = undefined;
  e = require("dil_core/src/DILTextSelectionRenderState");
  r = require("dil_compiler/src/DILAutoSpacingRenderState");
  t = require("dil_compiler/src/DILContainerGutterRenderState");
  n = require("dil_compiler/src/DILRenderChildState");
  i = require("dil_compiler/src/DILValdiComponentRenderer");
  o = require("dil_compiler/src/DILTypes");
  d = require("valdi_core/src/Remember");
  s = require("./Card");
  a = require("./DILFlexContainerAutoSpacing");
  l = require("./DILContainerGutter");
  let CardWidgetRenderer;
  let <class_fields_init>;
  class CardWidgetRenderer extends o.ADILWidgetRendererInternal { ... }
  <proto:CardWidgetRenderer>.onPropsChanged = function <atom:0>;
  <proto:CardWidgetRenderer>.onRender = function <atom:0>;
  <proto:CardWidgetRenderer>.renderChildren = function <atom:0>;
  <proto:CardWidgetRenderer>.renderChildrenWithState = function <atom:0>;
  <proto:CardWidgetRenderer>.shouldUseAutoSpacing = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CardWidgetRenderer>;
  CardWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  CardWidgetRenderer#1 = function <atom:0>;
  exports.CardWidgetFactory = {properties: s.Card.properties, create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/CardWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
