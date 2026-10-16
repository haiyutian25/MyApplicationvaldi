// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=231B file=dil_widgets/src/elements_renderer/DILTransitionElementRenderer
// args: t
// locals: n
// closure: this, e, i
function {
  let n;
  n = this.renderState;
  if (!(e.isLoggingEnabled)) goto L_7a;
  console.warn(t);
  i.notifyDILWarning(n.options.renderState, t);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=1 bc=111B file=dil_widgets/src/elements_renderer/DILTransitionElementRenderer
// locals: this, this.active_func, new.target
// closure: e, i, t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("transition", t.Transition);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("transition", t.Transition);
  this.childIdentitiesPropName = "__dilChildIdentities";
  this.warn = function <atom:0>;
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=77B file=dil_widgets/src/elements_renderer/DILTransitionElementRenderer
// args: e, i
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, i);
  this.renderState = {options: i, prev: this.renderState};
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=681B file=dil_widgets/src/elements_renderer/DILTransitionElementRenderer
// args: e, i
// locals: this, <home_object>
// closure: t
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((e === this.childIdentitiesPropName))) goto L_59;
  this.setViewModelProperty("childIdentities", i);
  e;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "forceCompositeLayer"))) goto L_63;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "dimension"))) goto L_19c;
  if (((undefined === i))) goto L_10b;
  if (((i === t.TransitionDimension.Height))) goto L_10b;
  if (!((i === t.TransitionDimension.Width))) goto L_11d;
  goto L_19a;
  // [栈深重同步 2 -> 1]
  this.warn("Transition prop "dimension" only supports "height" or "width". Using "height".");
  super["setProp"].call(this, e, t.TransitionDimension.Height);
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === "initial"))) goto L_1b7;
  if (((<?> === "enter"))) goto L_1b7;
  if (!((<?> === "exit"))) goto L_1dd;
  this.renderState[e] = i;
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === "layoutEnter"))) goto L_20d;
  if (((<?> === "layoutExit"))) goto L_20d;
  if (((<?> === "layoutMove"))) goto L_20d;
  if (((<?> === "itemAnchor"))) goto L_20d;
  if (!((<?> === "insertMethod"))) goto L_299;
  if (((undefined === i))) goto L_297;
  if (!(("itemAnchor" === e))) goto L_229;
  if ((("start" === i))) goto L_297;
  if (!(("insertMethod" === e))) goto L_23f;
  if ((("append" === i))) goto L_297;
  this.warn("Ignoring unsupported Transition prop "".concat(e, "" in Valdi DIL; content and layout share one native animation transaction."));
  return;
  // [栈深重同步 0 -> 1]
  super["setProp"].call(this, e, i);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=348B file=dil_widgets/src/elements_renderer/DILTransitionElementRenderer
// locals: e, this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  e = this.renderState;
  try { // catch -> L_126
  this.setViewModelProperty("animationOptions", r.resolveTransitionAnimationOptions(e.initial, e.enter, e.exit, this.warn));
  super["endRender"].call(this);
  <?>;
  // gosub (finally 块) 300
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 300
  throw <?>;
  this.renderState = e.prev;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=4 bc=261B file=dil_widgets/src/elements_renderer/DILTransitionElementRenderer
// args: require, module, exports
// locals: e, i, t, n, r, DILTransitionElementRenderer, <class_fields_init>, DILTransitionElementRenderer#1
function {
  let DILTransitionElementRenderer#1;
  let r;
  let n;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTransitionElementRenderer = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("dil_compiler/src/DILWarningRenderState");
  t = require("../widgets/Transition");
  n = require("./DILComponentElementRenderer");
  r = require("./TransitionAnimationOptions");
  let DILTransitionElementRenderer;
  let <class_fields_init>;
  class DILTransitionElementRenderer extends n.DILComponentElementRenderer { ... }
  <proto:DILTransitionElementRenderer>.beginRender = function <atom:0>;
  <proto:DILTransitionElementRenderer>.setProp = function <atom:0>;
  <proto:DILTransitionElementRenderer>.endRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTransitionElementRenderer>;
  DILTransitionElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILTransitionElementRenderer#1 = function <atom:0>;
  exports.DILTransitionElementRenderer = DILTransitionElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILTransitionElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
