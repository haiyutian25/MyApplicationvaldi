// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=139B file=widgets/src/components/inputs/FormTextView
// args: e
// closure: this
function {
  this.setStateAnimated({focused: true}, {duration: 0.1});
  if (!((this.viewModel.onEditBegin == null))) goto L_86;
  this.viewModel.onEditBegin;
  this.viewModel;
  goto L_8a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=139B file=widgets/src/components/inputs/FormTextView
// args: e
// closure: this
function {
  this.setStateAnimated({focused: false}, {duration: 0.1});
  if (!((this.viewModel.onEditEnd == null))) goto L_86;
  this.viewModel.onEditEnd;
  this.viewModel;
  goto L_8a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=163B file=widgets/src/components/inputs/FormTextView
// args: e
// closure: this
function {
  this.setState({value: e.text});
  if (!((this.viewModel.onChange == null))) goto L_9e;
  this.viewModel.onChange;
  this.viewModel;
  goto L_a2;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=89B file=widgets/src/components/inputs/FormTextView
// args: e
// closure: this
function {
  if (!((this.viewModel == null))) goto L_2b;
  this.viewModel;
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?>.onWillChange == null))) goto L_54;
  <?>.onWillChange;
  <?>;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, e);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=42B file=widgets/src/components/inputs/FormTextView
// closure: this
function {
  this.setFocused(true);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=5 bc=197B file=widgets/src/components/inputs/FormTextView
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, l
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
  this.state = {value: "", focused: false};
  this.textViewWrapperRef = new l.FocusableComponentRef();
  this.onEditBegin = function <atom:0>;
  this.onEditEnd = function <atom:0>;
  this.onChange = function <atom:0>;
  this.onWillChange = function <atom:0>;
  this.onTapBackground = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=widgets/src/components/inputs/FormTextView
// args: e
// locals: this
function {
  this = this;
  this.textViewWrapperRef.setFocused(e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=142B file=widgets/src/components/inputs/FormTextView
// locals: e, this
function {
  this = this;
  let e;
  if (((undefined === undefined))) goto L_31;
  e = <to_object>(undefined).value;
  <to_object>(undefined);
  goto L_56;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== e))) goto L_8d;
  this.setState({value: e});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=530B file=widgets/src/components/inputs/FormTextView
// locals: this
// closure: e, t, v
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", v.background);
  e.setAttributeString("backgroundColor", this.getBackgroundColor());
  e.setAttributeNumber("paddingLeft", this.getHorizontalPadding());
  e.setAttributeNumber("paddingRight", this.getHorizontalPadding());
  e.setAttributeFunction("onTap", this.onTapBackground);
  this.onRenderContent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=9 cpool=0 bc=2559B file=widgets/src/components/inputs/FormTextView
// locals: t, n, d, l, this
// closure: h, e, i, u, o, a, s, r, v
function {
  this = this;
  let l;
  let d;
  let n;
  let t;
  t = this.viewModel;
  n = this.state;
  if ((t.minHeight)) goto L_a6;
  d = Math.max(0, h);
  e.beginRender(i, undefined);
  e.setAttributeNumber("minHeight", d);
  e.setAttributeNumber("maxHeight", t.maxHeight);
  e.setAttributeNumber("paddingTop", this.getVerticalPadding());
  e.setAttributeNumber("paddingBottom", this.getVerticalPadding());
  e.beginComponent(u.TextViewWrapper, o, undefined, this.textViewWrapperRef);
  e.setViewModelProperty("value", n.value);
  e.setViewModelProperty("color", a.SemanticColor.Text.PRIMARY);
  e.setViewModelProperty("font", s.TextStyleFont.BODY_EMPHASIS);
  e.setViewModelProperty("placeholder", t.placeholder);
  e.setViewModelProperty("placeholderColor", a.SemanticColor.Text.TERTIARY);
  e.setViewModelProperty("minHeight", (d - (2 * this.getVerticalPadding())));
  e.setViewModelProperty("characterLimit", t.characterLimit);
  e.setViewModelProperty("onEditBegin", this.onEditBegin);
  e.setViewModelProperty("onChange", this.onChange);
  e.setViewModelProperty("onWillChange", this.onWillChange);
  e.setViewModelProperty("onEditEnd", this.onEditEnd);
  e.setViewModelProperty("scrollWithKeyboard", t.scrollWithKeyboard);
  e.setViewModelProperty("accessibilityId", t.accessibilityId);
  e.setViewModelProperty("textGravity", t.textGravity);
  if (!((t.enabled == null))) goto L_7de;
  t.enabled;
  e.setViewModelProperty("enabled", true);
  e.endComponent();
  e.endRender();
  l = t.characterLimit;
  if (!((undefined !== l))) goto L_9fe;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", v.counter);
  e.setAttributeNumber("marginBottom", this.getVerticalPadding());
  e.setAttributeString("value", Math.max(0, (l - n.value.length)).toString());
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=524B file=widgets/src/components/inputs/FormTextView
// locals: this
// closure: a
function {
  this = this;
  if (!(this.viewModel.focusedBackgroundColorOverride)) goto L_d3;
  if (!(this.state.focused)) goto L_d3;
  return this.viewModel.focusedBackgroundColorOverride;
  if (!(this.viewModel.unfocusedBackgroundColorOverride)) goto L_1a5;
  if (!(!this.state.focused)) goto L_1a5;
  return this.viewModel.unfocusedBackgroundColorOverride;
  return a.SemanticColor.Background.DISABLED;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=76B file=widgets/src/components/inputs/FormTextView
// locals: this
function {
  this = this;
  if (!((this.viewModel.verticalPaddingOverride == null))) goto L_4b;
  this.viewModel.verticalPaddingOverride;
  return 4;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=78B file=widgets/src/components/inputs/FormTextView
// locals: this
// closure: p
function {
  this = this;
  if (!((this.viewModel.horizontalPaddingOverride == null))) goto L_4d;
  this.viewModel.horizontalPaddingOverride;
  return p;
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=8 bc=852B file=widgets/src/components/inputs/FormTextView
// args: require, module, exports
// locals: e, t, i, o, r, n, d, s, a, l, u, c, h, g, p, FormTextView, <class_fields_init>, FormTextView#1, v
function {
  let v;
  let FormTextView#1;
  let p;
  let g;
  let h;
  let c;
  let u;
  let l;
  let a;
  let s;
  let d;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FormTextView = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "p-nEnHQ7M7lKJbdz");
  i = e.makeNodePrototype("layout", undefined, "jy7h418ZaPRLftTq");
  o = e.makeComponentPrototype(undefined, "dP7k72nTKxXEw7hp");
  r = e.makeNodePrototype("label", undefined, "zDiU5THim7_u_XKK");
  n = require("valdi_core/src/Component");
  d = require("valdi_core/src/Style");
  s = require("widgets/src/styles/TextStyleFont");
  a = require("widgets/src/styles/semanticColors");
  l = require("../util/FocusableComponentRef");
  u = require("./TextViewWrapper");
  c = 8;
  h = 38;
  g = 4;
  p = 16;
  let FormTextView;
  let <class_fields_init>;
  class FormTextView extends n.StatefulComponent { ... }
  <proto:FormTextView>.setFocused = function <atom:0>;
  <proto:FormTextView>.onViewModelUpdate = function <atom:0>;
  <proto:FormTextView>.onRender = function <atom:0>;
  <proto:FormTextView>.onRenderContent = function <atom:0>;
  <proto:FormTextView>.getBackgroundColor = function <atom:0>;
  <proto:FormTextView>.getVerticalPadding = function <atom:0>;
  <proto:FormTextView>.getHorizontalPadding = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FormTextView>;
  FormTextView = function <atom:0>;
  // close_loc <class_fields_init>
  FormTextView#1 = function <atom:0>;
  exports.FormTextView = FormTextView#1;
  v = {background: new d.Style({borderRadius: 8}), counter: new d.Style({color: a.SemanticColor.Text.TERTIARY, font: s.TextStyleFont.CAPTION, textAlign: "right"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/inputs/FormTextView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
