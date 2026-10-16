// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=oai_ui/src/components/Pressable
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=1 bc=2299B file=oai_ui/src/components/Pressable
// locals: s, d, l, this
// closure: e, o, r, i, t
function {
  this = this;
  let l;
  let d;
  let s;
  s = {};
  o.applyOAIBoxAttributes(s, this.viewModel);
  if (((undefined === undefined))) goto L_93;
  d = <to_object>(undefined).ref;
  l = {};
  <to_object>(undefined);
  {ref: null};
  goto L_bd;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_5d;
  // [栈深重同步 1 -> 0]
  e.beginComponent(i.Pressable, t, undefined, undefined);
  e.setViewModelProperties(l);
  e.setViewModelProperty("controlRef", this.viewModel.controlRef);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setViewModelProperty("disabledStyle", this.viewModel.disabledStyle);
  e.setViewModelProperty("hoveredStyle", this.viewModel.hoveredStyle);
  e.setViewModelProperty("loading", this.viewModel.loading);
  e.setViewModelProperty("loadingStyle", this.viewModel.loadingStyle);
  e.setViewModelProperty("onHover", this.viewModel.onHover);
  e.setViewModelProperty("onLongPress", this.viewModel.onLongPress);
  e.setViewModelProperty("onPress", this.viewModel.onPress);
  e.setViewModelProperty("onTouchEnd", this.viewModel.onTouchEnd);
  e.setViewModelProperty("onTouchStart", this.viewModel.onTouchStart);
  e.setViewModelProperty("pressedOpacity", this.viewModel.pressedOpacity);
  e.setViewModelProperty("pressedStyle", this.viewModel.pressedStyle);
  e.setViewModelProperty("selected", this.viewModel.selected);
  e.setViewModelProperty("selectedStyle", this.viewModel.selectedStyle);
  e.setViewModelProperty("showsPressedFeedback", this.viewModel.showsPressedFeedback);
  e.setViewModelProperty("style", this.viewModel.style);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Pressable
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

// fn r  args=2 vars=9 closure=0 cpool=0 bc=626B file=oai_ui/src/components/Pressable
// args: e, t
// locals: o, s, i, r, d, l, t#1
function {
  let d;
  let r;
  let i;
  let s;
  let o;
  o = {};
  if (!((t.style == null))) goto L_3b;
  t.style;
  goto L_5c;
  s = undefined.attributes;
  if (!((true === t.selected))) goto L_d1;
  if (!((t.selectedStyle == null))) goto L_ae;
  t.selectedStyle;
  goto L_d2;
  goto L_d2;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!((true === t.disabled))) goto L_147;
  if (!((t.disabledStyle == null))) goto L_124;
  t.disabledStyle;
  goto L_148;
  goto L_148;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!((true === t.loading))) goto L_1bd;
  if (!((t.loadingStyle == null))) goto L_19a;
  t.loadingStyle;
  goto L_1be;
  goto L_1be;
  // [栈深重同步 1 -> 0]
  d = undefined;
  let l;
  for (const l of Object.keys(e)) {
    let t#1;
    if ((("ref" === l))) continue;
    t#1 = l;
    if (!((s == null))) goto L_211;
    s;
    goto L_215;
    if (!((undefined === undefined[t#1]))) goto L_267;
    if (!((i == null))) goto L_226;
    i;
    goto L_22a;
    if (!((undefined === undefined[t#1]))) goto L_267;
    if (!((r == null))) goto L_23b;
    r;
    goto L_23f;
    if (!((undefined === undefined[t#1]))) goto L_267;
    if (!((d == null))) goto L_250;
    d;
    goto L_254;
    if (!((undefined === undefined[t#1]))) goto L_267;
    o[l] = e[t#1];
    e[t#1];
  }
  return o;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=3 bc=307B file=oai_ui/src/components/Pressable
// args: require, module, exports
// locals: e, t, o, s, i, Pressable, <class_fields_init>, Pressable#1, r
function {
  r = function r;
  let Pressable#1;
  let i;
  let s;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Pressable = undefined;
  exports.resolveOAIActionAttributes = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "Ccu2OLQ0LawH8rqq");
  o = require("oai_core/src/OAIAttributes");
  s = require("valdi_core/src/Component");
  i = require("valdi_ui/src/components/Pressable");
  let Pressable;
  let <class_fields_init>;
  class Pressable extends s.Component { ... }
  <proto:Pressable>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Pressable>;
  Pressable = function <atom:0>;
  // close_loc <class_fields_init>
  Pressable#1 = function <atom:0>;
  exports.Pressable = Pressable#1;
  exports.resolveOAIActionAttributes = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Pressable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
