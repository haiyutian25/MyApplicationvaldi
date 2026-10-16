// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=141B file=widgets/src/components/inputs/SearchBox
// locals: e
// closure: this
function {
  let e;
  this.setText("", true);
  if (((undefined === undefined))) goto L_5a;
  e = <to_object>(undefined).onResetQuery;
  <to_object>(undefined);
  goto L_81;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_33;
  // [栈深重同步 1 -> 0]
  if (!(e)) goto L_8c;
  e();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=273B file=widgets/src/components/inputs/SearchBox
// args: <atom:0>
// locals: e, t
// closure: this
function {
  e = <to_object>(<atom:0>).text;
  <to_object>(<atom:0>);
  let t;
  if (!((this.viewModel.onTextFieldChange == null))) goto L_77;
  this.viewModel.onTextFieldChange;
  this.viewModel;
  goto L_7b;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e);
  this.setState({inputValue: e});
  if (((undefined === undefined))) goto L_d7;
  t = <to_object>(undefined).onChange;
  <to_object>(undefined);
  goto L_fe;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_b0;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_110;
  t({value: e});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=205B file=widgets/src/components/inputs/SearchBox
// closure: this
function {
  this.setState({status: "focused"});
  if (!((this.viewModel == null))) goto L_5f;
  this.viewModel;
  goto L_80;
  if (!(undefined.onEditBegin)) goto L_cc;
  this.viewModel.onEditBegin();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=331B file=widgets/src/components/inputs/SearchBox
// closure: this
function {
  if (!((0 !== this.state.inputValue.length))) goto L_7e;
  goto L_b0;
  // [栈深重同步 1 -> 0]
  this.setState({status: "default"});
  if (!((this.viewModel == null))) goto L_dd;
  this.viewModel;
  goto L_fe;
  if (!(undefined.onEditEnd)) goto L_14a;
  this.viewModel.onEditEnd();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=6 bc=6368B file=widgets/src/components/inputs/SearchBox
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, y, p, x, T, C
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
  this.textFieldHandler = new y.FocusableComponentRef();
  this.theme = p.Theme.from(this.context.themeType);
  this.errorStyle = {container: x.container.extend({backgroundColor: this.applyThemeToColor(T.SemanticColor.Form.BACKGROUND_ERROR), borderColor: this.applyThemeToColor(T.SemanticColor.Form.BORDER_ERROR)})};
  this.uiSpecs = {container: x.container.extend({backgroundColor: this.applyThemeToColor(T.SemanticColor.Background.OBJECT), borderWidth: 0}), textfield: x.textfield.extend({font: C.TextStyleFont.BODY_EMPHASIS, color: this.applyThemeToColor(T.SemanticColor.Text.PRIMARY), placeholderColor: this.applyThemeToColor(T.SemanticColor.Text.SECONDARY)}), iconClear: x.iconClear.extend({tint: this.applyThemeToColor(T.SemanticColor.Text.SECONDARY)}), iconMagnifyingGlass: x.iconMagnifyingGlass.extend({tint: this.applyThemeToColor(T.SemanticColor.Text.PRIMARY), height: 17.8, width: 17.8})};
  this.stateStyles = {default: {container: x.container.extend({backgroundColor: this.applyThemeToColor(T.SemanticColor.Form.BACKGROUND_DEFAULT), borderColor: this.applyThemeToColor(T.SemanticColor.Form.BORDER_DEFAULT)}), textfield: x.textfield.extend({color: this.applyThemeToColor(T.SemanticColor.IconAndText.PRIMARY), placeholderColor: this.applyThemeToColor(T.SemanticColor.IconAndText.SECONDARY)}), iconClear: x.iconClear.extend({tint: this.applyThemeToColor(T.SemanticColor.IconAndText.SECONDARY)}), iconMagnifyingGlass: x.iconMagnifyingGlass.extend({tint: this.applyThemeToColor(T.SemanticColor.IconAndText.SECONDARY)})}, filled: {container: x.container.extend({backgroundColor: this.applyThemeToColor(T.SemanticColor.Form.BACKGROUND_DEFAULT), borderColor: this.applyThemeToColor(T.SemanticColor.Form.BORDER_DEFAULT)}), textfield: x.textfield.extend({color: this.applyThemeToColor(T.SemanticColor.IconAndText.PRIMARY)}), iconClear: x.iconClear.extend({tint: this.applyThemeToColor(T.SemanticColor.IconAndText.PRIMARY)}), iconMagnifyingGlass: x.iconMagnifyingGlass.extend({tint: this.applyThemeToColor(T.SemanticColor.IconAndText.PRIMARY)})}, focused: {container: x.container.extend({backgroundColor: this.applyThemeToColor(T.SemanticColor.Form.BACKGROUND_FOCUSED), borderColor: this.applyThemeToColor(T.SemanticColor.Form.BORDER_FOCUSED)}), textfield: x.textfield.extend({color: this.applyThemeToColor(T.SemanticColor.IconAndText.PRIMARY)}), iconClear: x.iconClear.extend({tint: this.applyThemeToColor(T.SemanticColor.IconAndText.PRIMARY)}), iconMagnifyingGlass: x.iconMagnifyingGlass.extend({tint: this.applyThemeToColor(T.SemanticColor.IconAndText.PRIMARY)})}, disabled: {container: x.container.extend({backgroundColor: this.applyThemeToColor(T.SemanticColor.Form.BACKGROUND_DISABLED), borderColor: this.applyThemeToColor(T.SemanticColor.Form.BORDER_DISABLED)}), textfield: x.textfield.extend({color: this.applyThemeToColor(T.SemanticColor.Form.INPUT_DISABLED), placeholderColor: this.applyThemeToColor(T.SemanticColor.Form.INPUT_DISABLED)}), iconClear: x.iconClear.extend({tint: this.applyThemeToColor(T.SemanticColor.Form.INPUT_DISABLED)}), iconMagnifyingGlass: x.iconMagnifyingGlass.extend({tint: this.applyThemeToColor(T.SemanticColor.Form.INPUT_DISABLED)})}};
  this.onTapResetQuery = function <atom:0>;
  this.onTextFieldChange = function <atom:0>;
  this.onEditBegin = function <atom:0>;
  this.onEditEnd = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=79B file=widgets/src/components/inputs/SearchBox
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== e))) goto L_4e;
  return this.theme.applyTo(e);   // tail call
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=widgets/src/components/inputs/SearchBox
// args: e
// locals: this
function {
  this = this;
  this.textFieldHandler.setFocused(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=117B file=widgets/src/components/inputs/SearchBox
// closure: this, t, e
function {
  this.textFieldHandler.setFocused(t);
  this.setState({inputValue: e});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=178B file=widgets/src/components/inputs/SearchBox
// args: e, t
// locals: o, this
function {
  this = this;
  let o;
  this.renderer.batchUpdates(function <atom:0>);
  if (((undefined === undefined))) goto L_7a;
  o = <to_object>(undefined).onChange;
  <to_object>(undefined);
  goto L_9f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_53;
  // [栈深重同步 1 -> 0]
  if (!(o)) goto L_b1;
  o({value: e});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=142B file=widgets/src/components/inputs/SearchBox
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

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=294B file=widgets/src/components/inputs/SearchBox
// args: e
// locals: this
function {
  this = this;
  return {filled: this.stateStyles.filled, focused: this.stateStyles.focused, disabled: this.stateStyles.disabled, default: this.stateStyles.default}[e];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=215B file=widgets/src/components/inputs/SearchBox
// locals: this
function {
  this = this;
  if (!((this.viewModel.inputValue == null))) goto L_4d;
  this.viewModel.inputValue;
  goto L_4e;
  if ((undefined.length)) goto L_53;
  if (!((0 > 0))) goto L_d6;
  if (!(("filled" !== this.state.status))) goto L_d6;
  this.setState({status: "filled"});
  return;
}

// fn <atom:0>  args=0 vars=6 closure=10 cpool=0 bc=3585B file=widgets/src/components/inputs/SearchBox
// locals: l, s, a, d, c, this
// closure: h, e, t, o, x, i, n, m, r, T
function {
  this = this;
  let c;
  let d;
  let a;
  let s;
  let l;
  if (!((false === this.viewModel.enabled))) goto L_df;
  if (!(("disabled" !== this.state.status))) goto L_df;
  this.setState({status: "disabled"});
  if (!((this.viewModel == null))) goto L_10b;
  this.viewModel;
  goto L_12c;
  if (!((undefined.selectTextOnFocus == null))) goto L_133;
  undefined.selectTextOnFocus;
  l = true;
  if (!((this.viewModel == null))) goto L_15f;
  this.viewModel;
  goto L_180;
  s = undefined.placeholder;
  a = this.chooseStyle(this.state.status);
  d = h.default.iconMagnifyingGlass;
  if (!(this.viewModel.formContainsError)) goto L_2be;
  goto L_2e2;
  // [栈深重同步 1 -> 0]
  c = a.container;
  c = this.uiSpecs.container;
  this.uiSpecs.container;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", c);
  e.setAttributeString("backgroundColor", this.viewModel.backgroundColor);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", x.accessoryLeft);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", a.iconMagnifyingGlass);
  e.setAttribute("src", d);
  e.setAttributeString("tint", this.applyThemeToColor(this.viewModel.iconColor));
  e.endRender();
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", x.textfieldContainer);
  e.beginComponent(m.TextFieldWrapper, r, undefined, this.textFieldHandler);
  e.setViewModelProperty("style", a.textfield);
  e.setViewModelProperty("closesWhenReturnKeyPressed", true);
  e.setViewModelProperty("selectTextOnFocus", l);
  e.setViewModelProperty("onChange", this.onTextFieldChange);
  e.setViewModelProperty("onReturn", this.viewModel.onReturn);
  e.setViewModelProperty("placeholder", s);
  if (!((this.viewModel.textfieldAccessibilityId == null))) goto L_913;
  this.viewModel.textfieldAccessibilityId;
  e.setViewModelProperty("accessibilityId", "search-textfield");
  e.setViewModelProperty("onEditBegin", this.onEditBegin);
  e.setViewModelProperty("onEditEnd", this.onEditEnd);
  e.setViewModelProperty("color", this.applyThemeToColor(this.viewModel.textColor));
  e.setViewModelProperty("placeholderColor", this.applyThemeToColor(this.viewModel.placeholderColor));
  e.setViewModelProperty("keyboardAppearance", this.viewModel.keyboardAppearance);
  e.setViewModelProperty("value", this.state.inputValue);
  e.setViewModelProperty("tintColor", this.applyThemeToColor(T.SemanticColor.Brand.SECONDARY));
  e.setViewModelProperty("scrollWithKeyboard", this.viewModel.scrollWithKeyboard);
  e.setViewModelProperty("enabled", this.viewModel.enabled);
  e.endComponent();
  e.endRender();
  this.onRenderRightAccessory();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=6 cpool=0 bc=1062B file=widgets/src/components/inputs/SearchBox
// locals: t, this
// closure: e, l, x, s, h, a
function {
  this = this;
  let t;
  t = this.chooseStyle(this.state.status);
  if (!(this.state.inputValue)) goto L_358;
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", x.accessoryRight);
  e.setAttributeFunction("onTap", this.onTapResetQuery);
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", t.iconClear);
  e.setAttribute("src", h.default.iconClear);
  e.setAttributeString("tint", this.applyThemeToColor(this.viewModel.clearButtonColor));
  e.endRender();
  goto L_425;
  // [栈深重同步 1 -> 0]
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", x.accessoryRight);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=9 bc=1897B file=widgets/src/components/inputs/SearchBox
// args: require, module, exports
// locals: e, t, o, i, n, r, l, s, a, d, c, h, p, y, C, T, u, m, SearchBox, <class_fields_init>, SearchBox#1, S, x
function {
  let x;
  let S;
  let SearchBox#1;
  let m;
  let u;
  let T;
  let C;
  let y;
  let p;
  let h;
  let c;
  let d;
  let a;
  let s;
  let l;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SEARCH_BOX_HEIGHT = undefined;
  exports.SearchBox = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["accessibilityId", "search-box", "id", "searchBox"], "pBFzwSmaXCd8ia79");
  o = e.makeNodePrototype("layout", undefined, "45VA7Nveu0_2AUv6");
  i = e.makeNodePrototype("image", undefined, "slOu5YX_sGA4UTUE");
  n = e.makeNodePrototype("layout", undefined, "-_EHU7M_IVXDscaJ");
  r = e.makeComponentPrototype(["id", "textField", "returnKeyText", "search", "autocapitalization", "none", "autocorrection", "none"], "f0CiCVk5MKYspelV");
  l = e.makeNodePrototype("view", ["accessibilityId", "clear-button", "accessibilityCategory", "image-button"], "f8oB5Su3u6omkOdT");
  s = e.makeNodePrototype("image", undefined, "7pbbg9gARnXKhy0x");
  a = e.makeNodePrototype("layout", undefined, "EeisTXXwh2TEt7K6");
  d = require("valdi_core/src/Component");
  c = require("valdi_core/src/Style");
  h = require("widgets/res");
  p = require("widgets/src/Theme");
  y = require("widgets/src/components/util/FocusableComponentRef");
  C = require("widgets/src/styles/TextStyleFont");
  T = require("widgets/src/styles/semanticColors");
  u = require("widgets/src/styles/spacing");
  m = require("./TextFieldWrapper");
  exports.SEARCH_BOX_HEIGHT = 38;
  let SearchBox;
  let <class_fields_init>;
  class SearchBox extends d.StatefulComponent { ... }
  <proto:SearchBox>.applyThemeToColor = function <atom:0>;
  <proto:SearchBox>.setFocused = function <atom:0>;
  <proto:SearchBox>.setText = function <atom:0>;
  <proto:SearchBox>.onViewModelUpdate = function <atom:0>;
  <proto:SearchBox>.chooseStyle = function <atom:0>;
  <proto:SearchBox>.onCreate = function <atom:0>;
  <proto:SearchBox>.onRender = function <atom:0>;
  <proto:SearchBox>.onRenderRightAccessory = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SearchBox>;
  SearchBox = function <atom:0>;
  // close_loc <class_fields_init>
  SearchBox#1 = function <atom:0>;
  exports.SearchBox = SearchBox#1;
  S = new c.Style({flexGrow: 0, alignItems: "center", justifyContent: "center", width: exports.SEARCH_BOX_HEIGHT, height: exports.SEARCH_BOX_HEIGHT});
  x = {container: new c.Style({flexDirection: "row", alignItems: "center", height: exports.SEARCH_BOX_HEIGHT, borderRadius: "50%", borderWidth: 1}), textfieldContainer: new c.Style({paddingTop: 1, flexGrow: 1, flexShrink: 1, height: "100%"}), textfield: new c.Style({font: C.TextStyleFont.BODY, touchAreaExtension: u.Spacing.MD, flexGrow: 1, flexShrink: 1}), accessoryLeft: S.extend(new c.Style({marginLeft: u.Spacing.XS})), accessoryRight: S.extend(new c.Style({marginRight: u.Spacing.XS})), iconClear: new c.Style({height: 20, width: 20}), iconMagnifyingGlass: new c.Style({height: 20, width: 20})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/inputs/SearchBox
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
