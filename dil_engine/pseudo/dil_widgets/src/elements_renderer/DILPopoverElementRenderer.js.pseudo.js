// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=161B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// locals: this.active_func, new.target, this
// closure: n, <class_fields_init>, o
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("popover", n.PopoverTrigger);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("popover", n.PopoverTrigger);
  this.childrenMode = o.DILElementChildrenMode.ResolvedValues;
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=65B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// args: e, r
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, r);
  this.setViewModelProperty("controlledOpen", false);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=161B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// args: e, r
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(("open" === e))) goto L_92;
  if (!(this.isSupportedProp(e))) goto L_a0;
  this.setViewModelProperty("controlledOpen", (undefined !== r));
  goto L_a0;
  // [栈深重同步 1 -> 0]
  super["setProp"].call(this, e, r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=45B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// closure: r, s
function {
  r.renderSelected([s], undefined);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=45B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// closure: r, i
function {
  r.renderSelected([i], undefined);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=52B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// closure: v, e, u
function {
  if (!(v)) goto L_2f;
  goto L_33;
  // [栈深重同步 1 -> 0]
  u();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=40B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// args: e, o
// closure: r
function {
  r.renderSelected(e, o);
  return;
}

// fn <atom:0>  args=2 vars=10 closure=6 cpool=4 bc=926B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// args: r, o
// locals: n, i, s, e, v, u, this, <home_object>
// closure: e, d, t, p, l, c
function {
  <home_object> = <special_object 4>;
  this = this;
  let u;
  let v;
  let s;
  let i;
  let n;
  if (!((undefined === o))) goto L_2a;
  throw new Error("DIL v2 popover element renderer requires resolved trigger and content children.");
  n = d(o);
  i = n.trigger;
  if (!((undefined === i))) goto L_5b;
  return;
  if (!((i.props == null))) goto L_b1;
  i.props;
  goto L_d2;
  this.setViewModelProperty("block", (true === undefined.block));
  s = n.content;
  if (!((undefined !== s))) goto L_2cd;
  let e;
  if (!((s.props == null))) goto L_135;
  s.props;
  goto L_156;
  e = undefined.showCloseButton;
  if (!((s.props == null))) goto L_1d9;
  s.props;
  goto L_1fa;
  if (!((s.props == null))) goto L_22f;
  s.props;
  goto L_250;
  if (!((s.props == null))) goto L_285;
  s.props;
  goto L_2a6;
  if (((true === e))) goto L_2bc;
  if (!((false === e))) goto L_2c3;
  goto L_2c4;
  // [栈深重同步 5 -> 4]
  this.setViewModelProperty("content", {renderBody: t.createReusableCallback(function <atom:0>), side: p(undefined.side), sideOffset: l(undefined.sideOffset), align: c(undefined.align), showCloseButton: undefined});
  if (!((true !== this.getViewModelProperty("controlledOpen")))) goto L_304;
  v = (undefined !== s);
  u = t.createReusableCallback(function <atom:0>);
  super["setChildren"].call(this, {count: 1, render: t.createReusableCallback(function <atom:0>), renderSelected: t.createReusableCallback(function <atom:0>)}, undefined);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// locals: this.active_func, new.target, this
// closure: DILPopoverContentElementRenderer, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("popover-content", DILPopoverContentElementRenderer.dilV2Properties);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("popover-content", DILPopoverContentElementRenderer.dilV2Properties);
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// locals: this.active_func, new.target, this
// closure: DILPopoverTriggerElementRenderer, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("popover-trigger", DILPopoverTriggerElementRenderer.dilV2Properties);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("popover-trigger", DILPopoverTriggerElementRenderer.dilV2Properties);
  return this;
}

// fn d  args=1 vars=4 closure=1 cpool=0 bc=213B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// args: e
// locals: o, t, n
// closure: r
function {
  let t;
  let o;
  o = undefined;
  t = undefined;
  let n;
  for (const n of e) {
    if (!(r.isDILRuntimeElement(n))) goto L_b9;
    if (!(("popover-trigger" === n.type))) goto L_7b;
    if (!((undefined === o))) goto L_7b;
    o = n;
    goto L_b9;
    // [栈深重同步 4 -> 3]
    if (!(("popover-content" === n.type))) goto L_b9;
    if (!((undefined === t))) goto L_b9;
    t = n;
    n;
  }
  return {content: t, trigger: o};
}

// fn l  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// args: e
function {
  if (!(("number" == typeof e))) goto L_38;
  if (!(Number.isFinite(e))) goto L_38;
  return e;
  return undefined;
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=46B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// args: e
function {
  if ((("top" === e))) goto L_28;
  if ((("right" === e))) goto L_28;
  if ((("bottom" === e))) goto L_28;
  if (!(("left" === e))) goto L_2c;
  return e;
  return undefined;
}

// fn c  args=1 vars=1 closure=0 cpool=0 bc=35B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// args: e
function {
  if ((("start" === e))) goto L_1d;
  if ((("center" === e))) goto L_1d;
  if (!(("end" === e))) goto L_21;
  return e;
  return undefined;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=10 bc=507B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// args: require, module, exports
// locals: e, r, o, t, n, i, s, DILPopoverElementRenderer, <class_fields_init>, DILPopoverElementRenderer#1, DILPopoverContentElementRenderer, <class_fields_init>#1, DILPopoverContentElementRenderer#1, DILPopoverTriggerElementRenderer, <class_fields_init>#2, DILPopoverTriggerElementRenderer#1, d, l, p, c
function {
  d = function d;
  l = function l;
  p = function p;
  c = function c;
  let DILPopoverTriggerElementRenderer#1;
  let DILPopoverContentElementRenderer#1;
  let DILPopoverElementRenderer#1;
  let s;
  let i;
  let n;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILPopoverElementRenderer = undefined;
  exports.DILPopoverContentElementRenderer = undefined;
  exports.DILPopoverTriggerElementRenderer = undefined;
  e = require("dil_core/src/DILTextSelectionRenderState");
  r = require("dil_renderer/src/DILElement");
  o = require("dil_renderer/src/DILRenderer");
  t = require("valdi_core/src/utils/Callback");
  n = require("../popover/PopoverTrigger");
  i = require("./DILComponentElementRenderer");
  s = require("./DILTransparentElementRenderer");
  let DILPopoverElementRenderer;
  let <class_fields_init>;
  class DILPopoverElementRenderer extends i.DILComponentElementRenderer { ... }
  <proto:DILPopoverElementRenderer>.beginRender = function <atom:0>;
  <proto:DILPopoverElementRenderer>.setProp = function <atom:0>;
  <proto:DILPopoverElementRenderer>.setChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILPopoverElementRenderer>;
  DILPopoverElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILPopoverElementRenderer#1 = function <atom:0>;
  exports.DILPopoverElementRenderer = DILPopoverElementRenderer#1;
  let DILPopoverContentElementRenderer;
  let <class_fields_init>#1;
  class DILPopoverContentElementRenderer extends s.DILTransparentElementRenderer { ... }
  <class_fields_init>#1 = undefined;
  <proto:DILPopoverContentElementRenderer>;
  DILPopoverContentElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  // close_loc DILPopoverContentElementRenderer
  DILPopoverContentElementRenderer#1 = function <atom:0>;
  exports.DILPopoverContentElementRenderer = DILPopoverContentElementRenderer#1;
  DILPopoverContentElementRenderer#1.dilV2Properties = ["align", "side", "sideOffset", "showCloseButton"];
  let DILPopoverTriggerElementRenderer;
  let <class_fields_init>#2;
  class DILPopoverTriggerElementRenderer extends s.DILTransparentElementRenderer { ... }
  <class_fields_init>#2 = undefined;
  <proto:DILPopoverTriggerElementRenderer>;
  DILPopoverTriggerElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#2
  // close_loc DILPopoverTriggerElementRenderer
  DILPopoverTriggerElementRenderer#1 = function <atom:0>;
  exports.DILPopoverTriggerElementRenderer = DILPopoverTriggerElementRenderer#1;
  DILPopoverTriggerElementRenderer#1.dilV2Properties = ["block", "onClick"];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILPopoverElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
