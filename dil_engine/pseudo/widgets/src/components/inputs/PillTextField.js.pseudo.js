// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=80B file=widgets/src/components/inputs/PillTextField
// closure: this
function {
  this.doScrollToEnd();
  this.doFocusInput();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=188B file=widgets/src/components/inputs/PillTextField
// args: e
// closure: this
function {
  this.doScrollToEnd();
  this.inputFocused = true;
  this.setState({status: "focused"});
  if (!((this.viewModel.onInputEditBegin == null))) goto L_b7;
  this.viewModel.onInputEditBegin;
  this.viewModel;
  goto L_bb;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=203B file=widgets/src/components/inputs/PillTextField
// args: e
// closure: this
function {
  this.doScrollToEnd();
  this.setState({inputValue: e.text});
  if (!((this.viewModel.onInputChange == null))) goto L_c6;
  this.viewModel.onInputChange;
  this.viewModel;
  goto L_ca;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=253B file=widgets/src/components/inputs/PillTextField
// closure: this
function {
  if (((this.state.inputValue.length > 0))) goto L_94;
  if (!((this.viewModel.pills.length > 0))) goto L_ca;
  goto L_fc;
  // [栈深重同步 1 -> 0]
  this.setState({status: "default"});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=137B file=widgets/src/components/inputs/PillTextField
// args: e
// closure: this
function {
  this.inputChangeEnd();
  this.inputFocused = false;
  if (!((this.viewModel.onInputEditEnd == null))) goto L_84;
  this.viewModel.onInputEditEnd;
  this.viewModel;
  goto L_88;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=313B file=widgets/src/components/inputs/PillTextField
// closure: this
function {
  this.setState({inputValue: ""});
  if (!((this.viewModel.onInputChange == null))) goto L_7d;
  this.viewModel.onInputChange;
  this.viewModel;
  goto L_93;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, {text: "", selectionStart: 0, selectionEnd: 0});
  if (!((true !== this.inputFocused))) goto L_e6;
  this.inputChangeEnd();
  if (!((this.viewModel.onInputClear == null))) goto L_135;
  this.viewModel.onInputClear;
  this.viewModel;
  goto L_138;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=123B file=widgets/src/components/inputs/PillTextField
// args: e
// closure: this
function {
  this.doScrollToEnd();
  if (!((this.viewModel.onInputWillDelete == null))) goto L_76;
  this.viewModel.onInputWillDelete;
  this.viewModel;
  goto L_7a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=80B file=widgets/src/components/inputs/PillTextField
// closure: this
function {
  if (!(this.inputFocused)) goto L_4f;
  this.doScrollToEnd();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=8 bc=308B file=widgets/src/components/inputs/PillTextField
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, I, g
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
  this.state = {inputValue: "", status: "default"};
  this.scrollViewHandler = new I.ScrollViewHandler();
  this.textFieldWrapperRef = new g.FocusableComponentRef();
  this.inputFocused = false;
  this.onRootTap = function <atom:0>;
  this.onInputEditBegin = function <atom:0>;
  this.onInputChange = function <atom:0>;
  this.inputChangeEnd = function <atom:0>;
  this.onInputEditEnd = function <atom:0>;
  this.onInputClear = function <atom:0>;
  this.onInputWillDelete = function <atom:0>;
  this.scrollToEndWhenTyping = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=widgets/src/components/inputs/PillTextField
// args: e
// locals: this
function {
  this = this;
  this.textFieldWrapperRef.setFocused(e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=142B file=widgets/src/components/inputs/PillTextField
// locals: e, this
function {
  this = this;
  let e;
  if (((undefined === undefined))) goto L_31;
  e = <to_object>(undefined).inputValue;
  <to_object>(undefined);
  goto L_56;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== e))) goto L_8d;
  this.setState({inputValue: e});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=168B file=widgets/src/components/inputs/PillTextField
// args: e
// closure: D
function {
  return {filled: D.filled, focused: D.focused, disabled: D.disabled, default: D.default}[e];
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=494B file=widgets/src/components/inputs/PillTextField
// locals: e, this
function {
  this = this;
  let e;
  if (!((this.viewModel.inputValue == null))) goto L_50;
  this.viewModel.inputValue;
  goto L_51;
  if ((undefined.length)) goto L_56;
  e = 0;
  if (!((false === this.viewModel.enabled))) goto L_11d;
  if (!(("disabled" !== this.state.status))) goto L_11d;
  goto L_1ed;
  // [栈深重同步 1 -> 0]
  if (((this.viewModel.pills.length > 0))) goto L_16c;
  if (!((e > 0))) goto L_1ed;
  if (!(("filled" !== this.state.status))) goto L_1ed;
  this.setState({status: "filled"});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=8 cpool=0 bc=1839B file=widgets/src/components/inputs/PillTextField
// locals: r, d, this
// closure: v, e, t, o, E, n, i, l
function {
  this = this;
  let d;
  let r;
  if (((false === this.viewModel.enabled))) goto L_192;
  if (((0 !== this.viewModel.pills.length))) goto L_192;
  if (((0 !== this.state.inputValue.length))) goto L_192;
  if ((("default" === this.state.status))) goto L_192;
  if ((this.inputFocused)) goto L_192;
  this.setState({status: "default"});
  r = this.chooseStyle(this.state.status);
  if (!(this.viewModel.formContainsError)) goto L_246;
  goto L_249;
  // [栈深重同步 1 -> 0]
  d = r;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", d.root);
  e.setAttributeFunction("onTap", this.onRootTap);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", E.decorationRoot);
  this.onRenderDecoration();
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeRef(this.getCurrentScrollViewHandler());
  e.setAttributeStyle("style", E.scroll);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", E.pillRoot);
  e.setAttributeFunction("onLayout", this.scrollToEndWhenTyping);
  this.onRenderPills();
  e.endRender();
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", E.inputRoot);
  e.setAttributeFunction("onLayout", this.scrollToEndWhenTyping);
  this.onRenderTextInput();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=0 bc=678B file=widgets/src/components/inputs/PillTextField
// locals: t, o, n, i, this
// closure: e, r, d
function {
  this = this;
  let i;
  let n;
  let o;
  let t;
  t = this.chooseStyle(this.state.status);
  o = this.viewModel;
  n = o.decorationIcon;
  i = o.decorationText;
  if (!(n)) goto L_1c6;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", t.decorationIcon);
  e.setAttribute("src", n);
  e.endRender();
  if (!(i)) goto L_2a5;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", t.decorationText);
  e.setAttributeString("value", i);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=1063B file=widgets/src/components/inputs/PillTextField
// locals: t, o, this
// closure: e, a, x, s
function {
  this = this;
  let t;
  t = this.chooseStyle(this.state.status);
  let o;
  for (const o of this.viewModel.pills) {
    e.beginRender(a, undefined);
    e.setAttributeStyle("style", t.pillItem);
    if (!(o.highlighted)) goto L_1ed;
    goto L_1ee;
    // [栈深重同步 7 -> 6]
    e.setAttributeString("backgroundColor", undefined);
    e.setAttributeFunction("onTap", o.onTap);
    e.beginRender(s, undefined);
    e.setAttributeStyle("style", t.pillLabel);
    if (!(o.highlighted)) goto L_377;
    goto L_378;
    // [栈深重同步 7 -> 6]
    e.setAttributeString("color", undefined);
    e.setAttributeString("value", o.label);
    e.endRender();
    e.endRender();
  }
  return;
}

// fn <atom:0>  args=0 vars=10 closure=7 cpool=0 bc=2271B file=widgets/src/components/inputs/PillTextField
// locals: t, o, n, i, l, r, d, a, s, this
// closure: e, c, E, y, u, x, p
function {
  this = this;
  let s;
  let a;
  let d;
  let r;
  let l;
  let i;
  let n;
  let o;
  let t;
  t = this.chooseStyle(this.state.status);
  if (((undefined === undefined))) goto L_1b2;
  o = <to_object>(undefined).inputPlaceholder;
  n = <to_object>(undefined).inputContentType;
  i = <to_object>(undefined).inputReturnKeyText;
  l = <to_object>(undefined).inputClosesWhenReturnKeyPressed;
  r = <to_object>(undefined).onInputReturn;
  d = <to_object>(undefined).onInputWillChange;
  a = <to_object>(undefined).keyboardAppearance;
  s = <to_object>(undefined).scrollWithKeyboard;
  <to_object>(undefined);
  goto L_1d9;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_91;
  // [栈深重同步 1 -> 0]
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", E.inputWrapper);
  e.beginComponent(y.TextFieldWrapper, u, undefined, this.textFieldWrapperRef);
  e.setViewModelProperty("value", this.state.inputValue);
  e.setViewModelProperty("placeholder", o);
  e.setViewModelProperty("contentType", n);
  e.setViewModelProperty("returnKeyText", i);
  e.setViewModelProperty("closesWhenReturnKeyPressed", l);
  e.setViewModelProperty("style", t.inputField);
  e.setViewModelProperty("onChange", this.onInputChange);
  e.setViewModelProperty("onEditBegin", this.onInputEditBegin);
  e.setViewModelProperty("onEditEnd", this.onInputEditEnd);
  e.setViewModelProperty("onReturn", r);
  e.setViewModelProperty("onWillDelete", this.onInputWillDelete);
  e.setViewModelProperty("onWillChange", d);
  e.setViewModelProperty("keyboardAppearance", a);
  e.setViewModelProperty("scrollWithKeyboard", s);
  e.setViewModelProperty("tintColor", x.SemanticColor.Brand.SECONDARY);
  e.setViewModelProperty("enabled", this.viewModel.enabled);
  e.endComponent();
  e.endRender();
  if (!(this.state.inputValue)) goto L_8de;
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", t.inputClear);
  e.setAttributeFunction("onTap", this.onInputClear);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=42B file=widgets/src/components/inputs/PillTextField
// locals: this
function {
  this = this;
  this.setFocused(true);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=82B file=widgets/src/components/inputs/PillTextField
// locals: this
function {
  this = this;
  this.getCurrentScrollViewHandler().scrollToClamped((1 / 0), 0, false);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=109B file=widgets/src/components/inputs/PillTextField
// locals: this
function {
  this = this;
  if (!((this.viewModel.scrollViewHandler == null))) goto L_6c;
  this.viewModel.scrollViewHandler;
  return this.scrollViewHandler;
}

// fn <atom:0>  args=3 vars=38 closure=0 cpool=12 bc=10488B file=widgets/src/components/inputs/PillTextField
// args: require, module, exports
// locals: e, t, o, n, i, l, r, d, a, s, c, u, p, h, S, C, R, x, m, I, g, y, A, T, b, w, F, P, PillTextField, <class_fields_init>, PillTextField#1, E, M, v, D
function {
  let D;
  let v;
  let M;
  let E;
  let PillTextField#1;
  let P;
  let F;
  let w;
  let b;
  let T;
  let A;
  let y;
  let g;
  let I;
  let m;
  let x;
  let R;
  let C;
  let S;
  let h;
  let p;
  let u;
  let c;
  let s;
  let a;
  let d;
  let r;
  let l;
  let i;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PillTextField = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "pl_gDMW_KVRxds75");
  o = e.makeNodePrototype("layout", undefined, "xjt-o2gmZdcP2nlj");
  n = e.makeNodePrototype("scroll", undefined, "ND3il79FH17MAUlS");
  i = e.makeNodePrototype("layout", undefined, "KBx_PIIvrgPiC7f-");
  l = e.makeNodePrototype("layout", undefined, "4wvnHHhi7_mZHnnm");
  r = e.makeNodePrototype("image", undefined, "xdji41PDudLNGl61");
  d = e.makeNodePrototype("label", undefined, "9gWHS4neSvN8kBDf");
  a = e.makeNodePrototype("view", undefined, "OAGsvuwOBkzCGB2I");
  s = e.makeNodePrototype("label", undefined, "z7bu4Xkj5qIP48sw");
  c = e.makeNodePrototype("layout", undefined, "4yQoT_F8MvyvU-tx");
  u = e.makeComponentPrototype(["width", "100%", "height", "100%", "autocapitalization", "none", "autocorrection", "none"], "-6qO32vYvVhOsaGp");
  p = e.makeNodePrototype("image", undefined, "W_6Gj39lIWEKaj3T");
  h = require("valdi_core/src/Component");
  S = require("valdi_core/src/Style");
  C = require("widgets/res");
  R = require("widgets/src/styles/TextStyleFont");
  x = require("widgets/src/styles/semanticColors");
  m = require("widgets/src/styles/spacing");
  I = require("../scroll/ScrollViewHandler");
  g = require("../util/FocusableComponentRef");
  y = require("./TextFieldWrapper");
  A = 38;
  T = 10;
  b = 5;
  w = 18;
  F = m.Spacing.SM;
  P = (A - (2 * F));
  let PillTextField;
  let <class_fields_init>;
  class PillTextField extends h.StatefulComponent { ... }
  <proto:PillTextField>.setFocused = function <atom:0>;
  <proto:PillTextField>.onViewModelUpdate = function <atom:0>;
  <proto:PillTextField>.chooseStyle = function <atom:0>;
  <proto:PillTextField>.onCreate = function <atom:0>;
  <proto:PillTextField>.onRender = function <atom:0>;
  <proto:PillTextField>.onRenderDecoration = function <atom:0>;
  <proto:PillTextField>.onRenderPills = function <atom:0>;
  <proto:PillTextField>.onRenderTextInput = function <atom:0>;
  <proto:PillTextField>.doFocusInput = function <atom:0>;
  <proto:PillTextField>.doScrollToEnd = function <atom:0>;
  <proto:PillTextField>.getCurrentScrollViewHandler = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PillTextField>;
  PillTextField = function <atom:0>;
  // close_loc <class_fields_init>
  PillTextField#1 = function <atom:0>;
  exports.PillTextField = PillTextField#1;
  E = {root: new S.Style({height: A, borderRadius: "50%", borderWidth: 1, flexDirection: "row", paddingLeft: 5, paddingRight: 5}), decorationRoot: new S.Style({justifyContent: "center", alignItems: "center", flexDirection: "row", paddingLeft: 5}), decorationIcon: new S.Style({marginLeft: 5, marginRight: 5, height: w, width: w}), decorationText: new S.Style({marginLeft: 5, marginRight: 5, font: R.TextStyleFont.CAPTION}), scroll: new S.Style({horizontal: true, bounces: false, flexShrink: 1, flexGrow: 1, fadingEdgeLength: 20, touchAreaExtension: 10}), pillRoot: new S.Style({flexDirection: "row", justifyContent: "center", alignItems: "center"}), pillItem: new S.Style({margin: m.Spacing.XS, paddingLeft: 10, paddingRight: 10, height: 28, touchAreaExtension: m.Spacing.XS, borderRadius: "50%", justifyContent: "center", alignItems: "center"}), pillLabel: new S.Style({font: R.TextStyleFont.BODY}), inputRoot: new S.Style({flexGrow: 1, maxWidth: "100%", minWidth: "33%", paddingLeft: m.Spacing.XS, paddingRight: m.Spacing.SM, flexDirection: "row"}), inputWrapper: new S.Style({limitToViewport: false, flexGrow: 1, flexShrink: 1, paddingTop: 1}), inputField: new S.Style({font: R.TextStyleFont.BODY}), inputClear: new S.Style({marginTop: F, marginBottom: F, marginLeft: F, height: P, width: P, src: C.default.iconClear, touchAreaExtension: 10, touchEnabled: true})};
  M = {root: E.root.extend({backgroundColor: x.SemanticColor.Background.DISABLED, borderWidth: 0}), inputField: E.inputField.extend({font: R.TextStyleFont.BODY_EMPHASIS, color: x.SemanticColor.Text.PRIMARY, placeholderColor: x.SemanticColor.Text.SECONDARY}), inputClear: E.inputClear.extend({tint: x.SemanticColor.Text.SECONDARY}), decorationIcon: E.decorationIcon.extend({tint: x.SemanticColor.Text.PRIMARY}), decorationText: E.decorationText.extend({font: R.TextStyleFont.BODY_EMPHASIS, color: x.SemanticColor.Text.SECONDARY}), pillItem: E.pillItem.extend({backgroundColor: x.SemanticColor.Background.MAIN}), pillLabel: E.pillLabel.extend({font: R.TextStyleFont.CAPTION_EMPHASIS, color: x.SemanticColor.Text.PRIMARY})};
  v = {root: E.root.extend({backgroundColor: x.SemanticColor.Form.BACKGROUND_ERROR, borderColor: x.SemanticColor.Form.BORDER_ERROR})};
  D = {default: {root: E.root.extend({backgroundColor: x.SemanticColor.Form.BACKGROUND_DEFAULT, borderColor: x.SemanticColor.Form.BORDER_DEFAULT}), inputField: E.inputField.extend({color: x.SemanticColor.IconAndText.PRIMARY, placeholderColor: x.SemanticColor.IconAndText.SECONDARY}), inputClear: E.inputClear.extend({tint: x.SemanticColor.IconAndText.SECONDARY}), decorationIcon: E.decorationIcon.extend({tint: x.SemanticColor.IconAndText.SECONDARY}), decorationText: E.decorationText.extend({color: x.SemanticColor.IconAndText.PRIMARY}), pillItem: E.pillItem.extend({backgroundColor: x.SemanticColor.Button.SECONDARY_FILL}), pillLabel: E.pillLabel.extend({color: x.SemanticColor.Text.PRIMARY})}, filled: {root: E.root.extend({backgroundColor: x.SemanticColor.Form.BACKGROUND_DEFAULT, borderColor: x.SemanticColor.Form.BORDER_DEFAULT}), inputField: E.inputField.extend({color: x.SemanticColor.IconAndText.PRIMARY}), inputClear: E.inputClear.extend({tint: x.SemanticColor.IconAndText.PRIMARY}), decorationIcon: E.decorationIcon.extend({tint: x.SemanticColor.IconAndText.PRIMARY}), decorationText: E.decorationText.extend({color: x.SemanticColor.IconAndText.PRIMARY}), pillItem: E.pillItem.extend({backgroundColor: x.SemanticColor.Button.SECONDARY_FILL}), pillLabel: E.pillLabel.extend({color: x.SemanticColor.Text.PRIMARY})}, focused: {root: E.root.extend({backgroundColor: x.SemanticColor.Form.BACKGROUND_FOCUSED, borderColor: x.SemanticColor.Form.BORDER_FOCUSED}), inputField: E.inputField.extend({color: x.SemanticColor.IconAndText.PRIMARY}), inputClear: E.inputClear.extend({tint: x.SemanticColor.IconAndText.PRIMARY}), decorationIcon: E.decorationIcon.extend({tint: x.SemanticColor.IconAndText.PRIMARY}), decorationText: E.decorationText.extend({color: x.SemanticColor.IconAndText.PRIMARY}), pillItem: E.pillItem.extend({backgroundColor: x.SemanticColor.Button.SECONDARY_FILL}), pillLabel: E.pillLabel.extend({color: x.SemanticColor.Text.PRIMARY})}, disabled: {root: E.root.extend({backgroundColor: x.SemanticColor.Form.BACKGROUND_DISABLED, borderColor: x.SemanticColor.Form.BORDER_DISABLED}), inputField: E.inputField.extend({color: x.SemanticColor.Form.INPUT_DISABLED, placeholderColor: x.SemanticColor.Form.INPUT_DISABLED}), inputClear: E.inputClear.extend({tint: x.SemanticColor.IconAndText.DISABLED}), decorationIcon: E.decorationIcon.extend({tint: x.SemanticColor.IconAndText.DISABLED}), decorationText: E.decorationText.extend({color: x.SemanticColor.Form.INPUT_DISABLED}), pillItem: E.pillItem.extend({backgroundColor: x.SemanticColor.Button.SECONDARY_FILL}), pillLabel: E.pillLabel.extend({color: x.SemanticColor.IconAndText.DISABLED})}};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/inputs/PillTextField
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
