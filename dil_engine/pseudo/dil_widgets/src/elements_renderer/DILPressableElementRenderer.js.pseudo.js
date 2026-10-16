// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILPressableElementRenderer
// locals: this.active_func, new.target, this
// closure: o, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("pressable", o.Pressable);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("pressable", o.Pressable);
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=374B file=dil_widgets/src/elements_renderer/DILPressableElementRenderer
// args: e, o
// locals: i, s, this, <home_object>
// closure: t, r
function {
  <home_object> = <special_object 4>;
  this = this;
  let s;
  let i;
  super["beginRender"].call(this, e, o);
  i = o.renderState;
  s = t.getDILPressableRenderOptions(i);
  if (!((s == null))) goto L_9a;
  s;
  goto L_bb;
  this.setViewModelProperty("feedbackDisabled", (true === undefined.feedbackDisabled));
  if (!((s == null))) goto L_f4;
  s;
  goto L_115;
  this.setViewModelProperty("exposeAccessibleContent", (true === undefined.exposeAccessibleContent));
  if (!((undefined !== i))) goto L_175;
  this.setViewModelProperty("inheritedTooltip", r.getDILTooltipContent(i));
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=223B file=dil_widgets/src/elements_renderer/DILPressableElementRenderer
// locals: e, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  e = (true === this.getViewModelProperty("variantFeedback"));
  if (!(e)) goto L_6a;
  if (((true !== this.getViewModelProperty("interactionCaptured")))) goto L_99;
  this.setViewModelProperty("variant", undefined);
  if (!(e)) goto L_cd;
  goto L_ce;
  // [栈深重同步 4 -> 3]
  this.setViewModelProperty("color", undefined);
  super["endRender"].call(this);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=3 cpool=0 bc=435B file=dil_widgets/src/elements_renderer/DILPressableElementRenderer
// args: t
// locals: o, s, n, this, <home_object>
// closure: r, i, e
function {
  <home_object> = <special_object 4>;
  this = this;
  let n;
  let s;
  let o;
  o = super["resolveChildRenderOptions"].call(this, t);
  s = o.renderState;
  if (!((undefined === s))) goto L_4e;
  return o;
  n = r.renderStateWithoutDILTooltipContent(s);
  if (!((true === this.getViewModelProperty("capture")))) goto L_d4;
  n = i.renderStateWithDILInteractionCaptured(n);
  i.renderStateWithDILInteractionCaptured(n);
  if (((true === this.getViewModelProperty("selectable")))) goto L_168;
  if (((true === this.getViewModelProperty("disabled")))) goto L_168;
  if (!(("function" != typeof this.getViewModelProperty("onClick")))) goto L_17c;
  null;
  o;
  return {renderState: n};
  null;
  o;
  return {renderState: e.renderStateWithDILTextSelectionSuppressed(n)};
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=4 bc=237B file=dil_widgets/src/elements_renderer/DILPressableElementRenderer
// args: require, module, exports
// locals: e, t, r, o, i, s, DILPressableElementRenderer, <class_fields_init>, DILPressableElementRenderer#1
function {
  let DILPressableElementRenderer#1;
  let s;
  let i;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILPressableElementRenderer = undefined;
  e = require("dil_core/src/DILTextSelectionRenderState");
  t = require("dil_core/src/DILPressableRenderState");
  r = require("../tooltip/DILTooltipRenderState");
  o = require("../widgets/Pressable");
  i = require("dil_core/src/DILInteractionRenderState");
  s = require("./DILComponentElementRenderer");
  let DILPressableElementRenderer;
  let <class_fields_init>;
  class DILPressableElementRenderer extends s.DILComponentElementRenderer { ... }
  <proto:DILPressableElementRenderer>.beginRender = function <atom:0>;
  <proto:DILPressableElementRenderer>.endRender = function <atom:0>;
  <proto:DILPressableElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILPressableElementRenderer>;
  DILPressableElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILPressableElementRenderer#1 = function <atom:0>;
  exports.DILPressableElementRenderer = DILPressableElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILPressableElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
