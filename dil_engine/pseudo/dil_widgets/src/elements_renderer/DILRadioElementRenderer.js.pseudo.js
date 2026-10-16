// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=95B file=dil_widgets/src/elements_renderer/DILRadioElementRenderer
// locals: this.active_func, new.target, this
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("radio", t.Radio);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("radio", t.Radio);
  this.renderStates = [];
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=392B file=dil_widgets/src/elements_renderer/DILRadioElementRenderer
// args: r, t
// locals: d, n, this, <home_object>
// closure: i, e
function {
  <home_object> = <special_object 4>;
  this = this;
  let n;
  let d;
  d = i.getActiveDILRadioGroupRenderState();
  if (!((undefined === d))) goto L_47;
  throw new Error("DIL v2 radio element must be rendered inside a radio-group element.");
  super["beginRender"].call(this, r, t);
  this.renderStates.push({parent: d});
  n = e.DIL_PLATFORM_TYPOGRAPHY.current;
  if (!((n !== e.DIL_WEB_TYPOGRAPHY))) goto L_187;
  this.setViewModelProperty("labelTypography", n.text.md);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=265B file=dil_widgets/src/elements_renderer/DILRadioElementRenderer
// args: e, r
// locals: t, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  if (!(("disabled" !== e))) goto L_33;
  if (!(("required" !== e))) goto L_33;
  if (!(("value" !== e))) goto L_33;
  super["setProp"].call(this, e, r);
  return;
  if (!(!this.isSupportedProp(e))) goto L_5d;
  return;
  t = this.currentRenderState();
  if (!(("disabled" === e))) goto L_9f;
  t.disabled = (true === r);
  goto L_e0;
  // [栈深重同步 1 -> 0]
  if (!(("required" === e))) goto L_bb;
  t.required = (true === r);
  goto L_e0;
  // [栈深重同步 1 -> 0]
  if (!(("value" === e))) goto L_e0;
  if (!(("string" == typeof r))) goto L_e0;
  t.value = r;
  r;
  this.setViewModelProperty(e, r);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=66B file=dil_widgets/src/elements_renderer/DILRadioElementRenderer
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  this.currentRenderState().label = e;
  super["setChoiceLabel"].call(this, e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=164B file=dil_widgets/src/elements_renderer/DILRadioElementRenderer
// closure: e, t
function {
  e.parent.onSelect({disabled: e.disabled, label: e.label, value: t});
  return;
}

// fn <atom:0>  args=0 vars=7 closure=1 cpool=1 bc=1092B file=dil_widgets/src/elements_renderer/DILRadioElementRenderer
// locals: e, t, i, d, n, this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  let n;
  let d;
  let i;
  let t;
  let e;
  e = this.currentRenderState();
  t = e.value;
  if (!((undefined !== t))) goto L_b4;
  i = (t === e.parent.selectedValue);
  if (!(i)) goto L_105;
  d = (e.parent.animatedSelectedValue === t);
  if ((e.parent.disabled)) goto L_176;
  n = (true === e.disabled);
  this.setViewModelProperty("disabled", n);
  if ((e.parent.required)) goto L_23f;
  this.setViewModelProperty("required", (true === e.required));
  this.setViewModelProperty("selected", i);
  if (!(i)) goto L_2ee;
  if (!(d)) goto L_2eb;
  goto L_2ef;
  // [栈深重同步 4 -> 3]
  goto L_2ef;
  // [栈深重同步 4 -> 3]
  this.setViewModelProperty("selectionFillOpacity", 0);
  if (!(i)) goto L_36f;
  if (!(d)) goto L_36c;
  goto L_370;
  // [栈深重同步 4 -> 3]
  goto L_370;
  // [栈深重同步 4 -> 3]
  this.setViewModelProperty("selectionInnerDotScale", 0);
  if ((n)) goto L_3d6;
  if (((undefined === t))) goto L_3d6;
  this.setViewModelProperty("onSelect", r.createReusableCallback(function <atom:0>));
  try { // catch -> L_3f4
  super["endRender"].call(this);
  <?>;
  // gosub (finally 块) 1018
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1018
  throw <?>;
  this.renderStates.pop();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=104B file=dil_widgets/src/elements_renderer/DILRadioElementRenderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.renderStates[(this.renderStates.length - 1)];
  if (!((undefined === e))) goto L_64;
  throw new Error("DIL v2 radio element rendered without an active state.");
  return e;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=6 bc=241B file=dil_widgets/src/elements_renderer/DILRadioElementRenderer
// args: require, module, exports
// locals: e, r, t, i, d, DILRadioElementRenderer, <class_fields_init>, DILRadioElementRenderer#1
function {
  let DILRadioElementRenderer#1;
  let d;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRadioElementRenderer = undefined;
  e = require("dil_text/src/rendering/DILTextTypography");
  r = require("valdi_core/src/utils/Callback");
  t = require("../widgets/Radio");
  i = require("../widgets/RadioGroupRenderState");
  d = require("./DILChoiceElementRenderer");
  let DILRadioElementRenderer;
  let <class_fields_init>;
  class DILRadioElementRenderer extends d.DILChoiceElementRenderer { ... }
  <proto:DILRadioElementRenderer>.beginRender = function <atom:0>;
  <proto:DILRadioElementRenderer>.setProp = function <atom:0>;
  <proto:DILRadioElementRenderer>.setChoiceLabel = function <atom:0>;
  <proto:DILRadioElementRenderer>.endRender = function <atom:0>;
  <proto:DILRadioElementRenderer>.currentRenderState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILRadioElementRenderer>;
  DILRadioElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILRadioElementRenderer#1 = function <atom:0>;
  exports.DILRadioElementRenderer = DILRadioElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILRadioElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
