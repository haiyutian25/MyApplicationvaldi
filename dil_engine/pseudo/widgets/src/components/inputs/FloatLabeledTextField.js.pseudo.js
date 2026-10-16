// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=139B file=widgets/src/components/inputs/FloatLabeledTextField
// args: e
// closure: this
function {
  this.setStateAnimated({focused: true}, {duration: 0.2});
  if (!((this.viewModel.onEditBegin == null))) goto L_86;
  this.viewModel.onEditBegin;
  this.viewModel;
  goto L_8a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=139B file=widgets/src/components/inputs/FloatLabeledTextField
// args: e
// closure: this
function {
  this.setStateAnimated({focused: false}, {duration: 0.2});
  if (!((this.viewModel.onEditEnd == null))) goto L_86;
  this.viewModel.onEditEnd;
  this.viewModel;
  goto L_8a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=163B file=widgets/src/components/inputs/FloatLabeledTextField
// args: e
// closure: this
function {
  this.setState({text: e.text});
  if (!((this.viewModel.onChange == null))) goto L_9e;
  this.viewModel.onChange;
  this.viewModel;
  goto L_a2;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=89B file=widgets/src/components/inputs/FloatLabeledTextField
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

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=42B file=widgets/src/components/inputs/FloatLabeledTextField
// closure: this
function {
  this.setFocused(true);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=5 bc=197B file=widgets/src/components/inputs/FloatLabeledTextField
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, S
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
  this.state = {focused: false, text: ""};
  this.textFieldWrapperRef = new S.FocusableComponentRef();
  this.onEditBegin = function <atom:0>;
  this.onEditEnd = function <atom:0>;
  this.onChange = function <atom:0>;
  this.onWillChange = function <atom:0>;
  this.onTapSetFocus = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=widgets/src/components/inputs/FloatLabeledTextField
// args: e
// locals: this
function {
  this = this;
  this.textFieldWrapperRef.setFocused(e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=142B file=widgets/src/components/inputs/FloatLabeledTextField
// locals: e, this
function {
  this = this;
  let e;
  if (((undefined === undefined))) goto L_31;
  e = <to_object>(undefined).text;
  <to_object>(undefined);
  goto L_56;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== e))) goto L_8d;
  this.setState({text: e});
  return;
}

// fn <atom:0>  args=0 vars=9 closure=12 cpool=0 bc=3471B file=widgets/src/components/inputs/FloatLabeledTextField
// locals: c, p, y, u, h, S, g, w, this
// closure: e, t, v, o, i, r, n, s, l, d, b, a
function {
  this = this;
  let w;
  let g;
  let S;
  let h;
  let u;
  let y;
  let p;
  let c;
  c = this.viewModel;
  p = this.state;
  if ((p.focused)) goto L_b2;
  y = (p.text.length > 0);
  u = c.error;
  if ((u)) goto L_103;
  h = c.title;
  S = this.computeTitleColor();
  if (!(y)) goto L_135;
  goto L_136;
  // [栈深重同步 1 -> 0]
  g = 0;
  if (!(y)) goto L_140;
  goto L_141;
  // [栈深重同步 1 -> 0]
  w = 1;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", v.rootContainer);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", v.rootPaddedZone);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", v.overlayContainer);
  e.setAttributeFunction("onTap", this.onTapSetFocus);
  e.beginRender(r, undefined);
  e.setAttributeNumber("opacity", w);
  e.setAttributeStyle("style", v.overlayLabel);
  e.setAttributeString("value", h);
  e.setAttributeString("color", S);
  e.endRender();
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", v.fieldsContainer);
  e.beginRender(s, undefined);
  e.setAttributeNumber("opacity", g);
  e.setAttributeStyle("style", v.fieldsTitle);
  e.setAttributeString("value", h);
  e.setAttributeString("color", S);
  e.setAttributeFunction("onTap", this.onTapSetFocus);
  e.endRender();
  e.beginRender(l, undefined);
  e.endRender();
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", v.container);
  e.beginComponent(b.TextFieldWrapper, a, undefined, this.textFieldWrapperRef);
  e.setViewModelProperty("opacity", g);
  e.setViewModelProperty("value", p.text);
  e.setViewModelProperty("style", v.fieldsInput);
  e.setViewModelProperty("onEditBegin", this.onEditBegin);
  e.setViewModelProperty("onChange", this.onChange);
  e.setViewModelProperty("onWillChange", this.onWillChange);
  e.setViewModelProperty("onEditEnd", this.onEditEnd);
  e.setViewModelProperty("accessibilityId", c.accessibilityId);
  e.setViewModelProperty("accessibilityLabel", c.accessibilityLabel);
  e.setViewModelProperty("returnKeyText", c.returnKeyText);
  e.setViewModelProperty("autocapitalization", c.autocapitalization);
  e.setViewModelProperty("autocorrection", c.autocorrection);
  e.setViewModelProperty("characterLimit", c.characterLimit);
  e.setViewModelProperty("contentType", c.contentType);
  e.setViewModelProperty("enabled", c.enabled);
  e.setViewModelProperty("scrollWithKeyboard", c.scrollWithKeyboard);
  e.endComponent();
  e.renderNamedSlot("custom-accessory", this);
  e.endRender();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=449B file=widgets/src/components/inputs/FloatLabeledTextField
// locals: this
// closure: u
function {
  this = this;
  if (!(this.state.focused)) goto L_ae;
  return u.SemanticColor.Text.SELECTED;
  if (!(this.viewModel.error)) goto L_15a;
  return u.SemanticColor.Text.NEGATIVE;
  return u.SemanticColor.Text.TERTIARY;
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=5 bc=1973B file=widgets/src/components/inputs/FloatLabeledTextField
// args: require, module, exports
// locals: e, t, o, i, r, n, s, l, d, a, c, p, y, u, h, S, b, FloatLabeledTextField, <class_fields_init>, FloatLabeledTextField#1, g, w, v
function {
  let v;
  let w;
  let g;
  let FloatLabeledTextField#1;
  let b;
  let S;
  let h;
  let u;
  let y;
  let p;
  let c;
  let a;
  let d;
  let l;
  let s;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FloatLabeledTextField = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "sROHWgKi6pRf_kch");
  o = e.makeNodePrototype("layout", undefined, "lz5aDsUBNFCCJjmZ");
  i = e.makeNodePrototype("view", undefined, "BFoBkJY0qhRqNe2c");
  r = e.makeNodePrototype("label", undefined, "PpY4TIcH1uJgaHf_");
  n = e.makeNodePrototype("layout", undefined, "igk1aRQYi0hC9G21");
  s = e.makeNodePrototype("label", undefined, "vDxWzsBIIy6nqEN8");
  l = e.makeNodePrototype("layout", ["height", 1], "siH4fPCizJlwtYeg");
  d = e.makeNodePrototype("layout", undefined, "xZwVvUtrMFFxCTck");
  a = e.makeComponentPrototype(["flexGrow", 1], "pYNapqNTw8QAdZjf");
  c = require("valdi_core/src/Component");
  p = require("valdi_core/src/Style");
  y = require("widgets/src/styles/TextStyleFont");
  u = require("widgets/src/styles/semanticColors");
  h = require("widgets/src/styles/spacing");
  S = require("../util/FocusableComponentRef");
  b = require("./TextFieldWrapper");
  let FloatLabeledTextField;
  let <class_fields_init>;
  class FloatLabeledTextField extends c.StatefulComponent { ... }
  <proto:FloatLabeledTextField>.setFocused = function <atom:0>;
  <proto:FloatLabeledTextField>.onViewModelUpdate = function <atom:0>;
  <proto:FloatLabeledTextField>.onRender = function <atom:0>;
  <proto:FloatLabeledTextField>.computeTitleColor = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FloatLabeledTextField>;
  FloatLabeledTextField = function <atom:0>;
  // close_loc <class_fields_init>
  FloatLabeledTextField#1 = function <atom:0>;
  exports.FloatLabeledTextField = FloatLabeledTextField#1;
  g = y.TextStyleFont.CAPTION_EMPHASIS;
  w = y.TextStyleFont.BODY_EMPHASIS;
  v = {rootContainer: new p.Style({flexGrow: 1, flexShrink: 1}), rootPaddedZone: new p.Style({marginTop: h.Spacing.XS, marginBottom: h.Spacing.XS, marginLeft: h.Spacing.MD, marginRight: h.Spacing.MD}), overlayContainer: new p.Style({position: "absolute", width: "100%", height: "100%"}), overlayLabel: new p.Style({font: w, flexGrow: 1}), fieldsContainer: new p.Style({paddingTop: h.Spacing.XXS, paddingBottom: h.Spacing.XXS}), fieldsTitle: new p.Style({font: g}), fieldsInput: new p.Style({font: w, color: u.SemanticColor.Text.PRIMARY}), container: new p.Style({flexDirection: "row", justifyContent: "space-between"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/inputs/FloatLabeledTextField
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
