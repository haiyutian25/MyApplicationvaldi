// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=79B file=dil_widgets/src/widgets/PressableWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: i, s, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(i.Pressable, e, s);
  if (!(<class_fields_init>)) goto L_49;
  <class_fields_init>.call(this);
  new new.target(i.Pressable, e, s);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=376B file=dil_widgets/src/widgets/PressableWidgetRenderer
// args: e
// locals: this
// closure: i, n
function {
  this = this;
  if (!((true === this.props.getPropertyValueAsBoolean("inline", e)))) goto L_177;
  if (!((undefined === i.resolvePressableAccessibilityRole(this.props.getPropertyValue("role", e))))) goto L_177;
  if (!((true === this.props.getPropertyValueAsBoolean("disabled", e)))) goto L_123;
  goto L_171;
  // [栈深重同步 2 -> 1]
  return {action: n(this.props.getPropertyValue("onClickAction", e))};
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=314B file=dil_widgets/src/widgets/PressableWidgetRenderer
// args: e
// locals: this
// closure: r
function {
  this = this;
  if (!(r.Device.isIOS())) goto L_139;
  if (!((true === this.props.getPropertyValueAsBoolean("inline", e)))) goto L_139;
  if (!(("link" === this.props.getPropertyValue("role", e)))) goto L_139;
  return {children: this.children, celScope: e, inlineViewVerticalAlignment: 2, plainTextBehavior: 0, viewBacked: false};
  return;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=319B file=dil_widgets/src/widgets/PressableWidgetRenderer
// args: r, t
// locals: i, this, <home_object>
// closure: n, e
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  i = super["getChildRenderState"].call(this, r, t);
  if (((true === this.props.getPropertyValueAsBoolean("selectable", r)))) goto L_110;
  if (((true === this.props.getPropertyValueAsBoolean("disabled", r)))) goto L_110;
  if (!((undefined === n(this.props.getPropertyValue("onClickAction", r))))) goto L_116;
  return i;
  return e.renderStateWithDILTextSelectionSuppressed(i);
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=177B file=dil_widgets/src/widgets/PressableWidgetRenderer
// locals: this
// closure: <class_fields_init>, i, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  // append([], 0, i.Pressable.properties)
  [][i.Pressable.properties] = t.OVERFLOW_ROW_ACTION_PROPERTY;
  [][(t.OVERFLOW_ROW_ACTION_PROPERTY ++)] = t.OVERFLOW_ROW_END_ACTION_PROPERTY;
  (t.OVERFLOW_ROW_END_ACTION_PROPERTY ++);
  this.properties = [];
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/PressableWidgetRenderer
// args: e
// closure: PressableWidgetRenderer
function {
  return new PressableWidgetRenderer(e);
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_widgets/src/widgets/PressableWidgetRenderer
// args: e
function {
  if (!(("function" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=7 bc=283B file=dil_widgets/src/widgets/PressableWidgetRenderer
// args: require, module, exports
// locals: e, r, t, i, o, s, PressableWidgetRenderer, <class_fields_init>, PressableWidgetRenderer#1, PressableWidgetRendererFactory, <class_fields_init>#1, PressableWidgetRendererFactory#1, n
function {
  n = function n;
  let PressableWidgetRendererFactory#1;
  let PressableWidgetRenderer#1;
  let s;
  let o;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PressableWidgetFactory = undefined;
  e = require("dil_core/src/DILTextSelectionRenderState");
  r = require("valdi_core/src/Device");
  t = require("./OverflowRow");
  i = require("./Pressable");
  o = require("./DILFlexContainerWidgetRenderer");
  s = {inlineTextContent: false};
  let PressableWidgetRenderer;
  let <class_fields_init>;
  class PressableWidgetRenderer extends o.DILFlexContainerWidgetRenderer { ... }
  <proto:PressableWidgetRenderer>.getDILInlineTextAction = function <atom:0>;
  <proto:PressableWidgetRenderer>.getDILInlineTextContent = function <atom:0>;
  <proto:PressableWidgetRenderer>.getChildRenderState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PressableWidgetRenderer>;
  PressableWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  PressableWidgetRenderer#1 = function <atom:0>;
  let PressableWidgetRendererFactory;
  let <class_fields_init>#1;
  class PressableWidgetRendererFactory extends undefined { ... }
  <proto:PressableWidgetRendererFactory>.create = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:PressableWidgetRendererFactory>;
  PressableWidgetRendererFactory = function <atom:0>;
  // close_loc <class_fields_init>#1
  PressableWidgetRendererFactory#1 = function <atom:0>;
  exports.PressableWidgetFactory = new PressableWidgetRendererFactory#1();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/PressableWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
