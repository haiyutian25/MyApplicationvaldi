// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=115B file=widgets/src/components/inputs/CoreTextField
// args: e
function {
  e.Default = 0;
  e[0] = "Default";
  e.CustomAccessory = 1;
  e[1] = "CustomAccessory";
  e.Inactive = 2;
  e[2] = "Inactive";
  e.Validating = 3;
  e[3] = "Validating";
  e.Validated = 4;
  e[4] = "Validated";
  e.Errored = 5;
  e[5] = "Errored";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=877B file=widgets/src/components/inputs/CoreTextField
// closure: this, e, i, M, n, h, s
function {
  if (!(this.viewModel.clearButtonEditing)) goto L_29f;
  if (!(this.state.text)) goto L_29f;
  if (!(this.state.focused)) goto L_29f;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", M.rightContainerItem);
  e.beginRender(n, undefined);
  e.setAttribute("src", h.default.iconClear);
  e.setAttributeFunction("onTap", this.clearText);
  e.endRender();
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", M.rightContainerItem);
  this.renderSpecialStateAccessory();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=991B file=widgets/src/components/inputs/CoreTextField
// closure: this, m, e, d, h, a, g, l
function {
  if (((this.viewModel.specialState === m.Default))) goto L_91;
  if (!((this.viewModel.specialState === m.Inactive))) goto L_92;
  this.viewModel.specialState;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === m.Errored))) goto L_184;
  e.beginRender(d, undefined);
  e.setAttribute("src", h.default.iconError);
  e.endRender();
  goto L_3de;
  if (!((<?> === m.Validating))) goto L_297;
  e.beginRender(a, undefined);
  e.setAttributeString("color", g.SemanticColor.Text.TERTIARY);
  e.endRender();
  goto L_3de;
  if (!((<?> === m.Validated))) goto L_388;
  e.beginRender(l, undefined);
  e.setAttribute("src", h.default.iconValidated);
  e.endRender();
  goto L_3de;
  if (!((<?> === m.CustomAccessory))) goto L_3de;
  e.renderNamedSlot("custom-accessory", this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=148B file=widgets/src/components/inputs/CoreTextField
// closure: this
function {
  this.setState({text: ""});
  if (!((this.viewModel.onChange == null))) goto L_7d;
  this.viewModel.onChange;
  this.viewModel;
  goto L_93;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=139B file=widgets/src/components/inputs/CoreTextField
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

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=139B file=widgets/src/components/inputs/CoreTextField
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

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=163B file=widgets/src/components/inputs/CoreTextField
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

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=89B file=widgets/src/components/inputs/CoreTextField
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

// fn <atom:0>  args=0 vars=4 closure=13 cpool=7 bc=225B file=widgets/src/components/inputs/CoreTextField
// locals: this, this.active_func, new.target, arguments
// closure: e, i, M, n, h, s, m, d, a, g, l, <class_fields_init>, v
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
  this.textFieldWrapperRef = new v.FocusableComponentRef();
  this.renderAccessoryContents = function <atom:0>;
  this.renderSpecialStateAccessory = function <atom:0>;
  this.clearText = function <atom:0>;
  this.onEditBegin = function <atom:0>;
  this.onEditEnd = function <atom:0>;
  this.onChange = function <atom:0>;
  this.onWillChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=widgets/src/components/inputs/CoreTextField
// args: e
// locals: this
function {
  this = this;
  this.textFieldWrapperRef.setFocused(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=194B file=widgets/src/components/inputs/CoreTextField
// locals: this
function {
  this = this;
  if (!((this.viewModel == null))) goto L_2d;
  this.viewModel;
  goto L_4e;
  if (!((undefined !== undefined.text))) goto L_c1;
  this.setState({text: this.viewModel.text});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=9 cpool=0 bc=3022B file=widgets/src/components/inputs/CoreTextField
// locals: i, n, s, this
// closure: y, e, t, M, w, o, g, C, r
function {
  this = this;
  let s;
  let n;
  let i;
  if (!((this.viewModel == null))) goto L_33;
  this.viewModel;
  i = {};
  n = this.state;
  s = y.TextStyleFont.BODY_EMPHASIS;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", M.container);
  e.setAttributeString("backgroundColor", this.getBackgroundColor());
  e.setAttributeNumber("borderWidth", this.getBorderWidth());
  e.setAttributeString("borderColor", this.getBorderColor());
  e.beginComponent(w.TextFieldWrapper, o, undefined, this.textFieldWrapperRef);
  e.setViewModelProperty("accessibilityId", i.accessibilityId);
  e.setViewModelProperty("value", n.text);
  e.setViewModelProperty("enabled", !this.getIsInactive());
  if (!((i.fontOverride == null))) goto L_3cc;
  i.fontOverride;
  e.setViewModelProperty("font", s);
  e.setViewModelProperty("placeholder", i.placeholder);
  if (!((i.color == null))) goto L_4d9;
  i.color;
  e.setViewModelProperty("color", g.SemanticColor.Text.PRIMARY);
  if (!((i.placeholderColor == null))) goto L_595;
  i.placeholderColor;
  e.setViewModelProperty("placeholderColor", g.SemanticColor.Text.TERTIARY);
  e.setViewModelProperty("tintColor", g.SemanticColor.Brand.SECONDARY);
  e.setViewModelProperty("onEditBegin", this.onEditBegin);
  e.setViewModelProperty("onEditEnd", this.onEditEnd);
  e.setViewModelProperty("onChange", this.onChange);
  e.setViewModelProperty("onWillChange", this.onWillChange);
  e.setViewModelProperty("onReturn", i.onReturn);
  e.setViewModelProperty("returnKeyText", i.returnKeyText);
  e.setViewModelProperty("autocapitalization", i.autocapitalization);
  e.setViewModelProperty("autocorrection", i.autocorrection);
  e.setViewModelProperty("characterLimit", i.characterLimit);
  e.setViewModelProperty("contentType", i.contentType);
  e.setViewModelProperty("closesWhenReturnKeyPressed", i.closesWhenReturnKeyPressed);
  e.setViewModelProperty("scrollWithKeyboard", i.scrollWithKeyboard);
  e.setViewModelProperty("touchAreaExtension", C.Spacing.MD);
  e.setViewModelProperty("keyboardAppearance", i.keyboardAppearance);
  e.endComponent();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", M.rightContainer);
  this.renderAccessoryContents();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=183B file=widgets/src/components/inputs/CoreTextField
// locals: this
// closure: m
function {
  this = this;
  if (((this.viewModel.specialState === m.Inactive))) goto L_b6;
  if (!((this.viewModel.enabled == null))) goto L_b5;
  this.viewModel.enabled;
  return false;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=666B file=widgets/src/components/inputs/CoreTextField
// locals: this
// closure: g
function {
  this = this;
  if (!(this.viewModel.focusedBackgroundColorOverride)) goto L_d3;
  if (!(this.state.focused)) goto L_d3;
  return this.viewModel.focusedBackgroundColorOverride;
  if (!(this.viewModel.unfocusedBackgroundColorOverride)) goto L_1a5;
  if (!(!this.state.focused)) goto L_1a5;
  return this.viewModel.unfocusedBackgroundColorOverride;
  if (!(this.getIsInactive())) goto L_233;
  return g.SemanticColor.Background.DISABLED;
  return g.SemanticColor.Background.SURFACE;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=189B file=widgets/src/components/inputs/CoreTextField
// locals: this
// closure: u
function {
  this = this;
  if ((this.getIsInactive())) goto L_6e;
  if (!(this.viewModel.noBorder)) goto L_72;
  return 0;
  return (1 / u.Device.getDisplayScale());
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=484B file=widgets/src/components/inputs/CoreTextField
// locals: this
// closure: m, g
function {
  this = this;
  if (!((this.viewModel.specialState === m.Errored))) goto L_d1;
  return g.SemanticColor.Icon.ERROR;
  if (!(this.state.focused)) goto L_17d;
  return g.SemanticColor.Layout.INPUT_BORDER_FOCUSED;
  return g.SemanticColor.Layout.INPUT_BORDER;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=9 bc=1283B file=widgets/src/components/inputs/CoreTextField
// args: require, module, exports
// locals: e, t, o, r, i, n, s, d, a, l, c, u, p, h, y, g, C, v, w, S, m, CoreTextField, <class_fields_init>, CoreTextField#1, M
function {
  let M;
  let CoreTextField#1;
  let S;
  let w;
  let v;
  let C;
  let g;
  let y;
  let h;
  let p;
  let u;
  let c;
  let l;
  let a;
  let d;
  let s;
  let n;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CoreTextFieldSpecialState = undefined;
  exports.CoreTextField = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "RGbYDYtEjYsffpYw");
  o = e.makeComponentPrototype(["flexGrow", 1], "R7lXZ081406xMbHI");
  r = e.makeNodePrototype("layout", undefined, "6SX2-AN65FTQLUZg");
  i = e.makeNodePrototype("layout", undefined, "YDNijiuTCTm17Pc5");
  n = e.makeNodePrototype("image", undefined, "05Q3pjocbuynOfkg");
  s = e.makeNodePrototype("layout", undefined, "0Lk2tom3pC_6eNZw");
  d = e.makeNodePrototype("image", undefined, "FsenTvOsnl58sjUb");
  a = e.makeNodePrototype("spinner", ["width", 20, "height", 20], "4zCiTc-dLanXtqYT");
  l = e.makeNodePrototype("image", undefined, "6RVbwNmGiRN_2qyd");
  c = require("valdi_core/src/Component");
  u = require("valdi_core/src/Device");
  p = require("valdi_core/src/Style");
  h = require("widgets/res");
  y = require("widgets/src/styles/TextStyleFont");
  g = require("widgets/src/styles/semanticColors");
  C = require("widgets/src/styles/spacing");
  v = require("../util/FocusableComponentRef");
  w = require("./TextFieldWrapper");
  S = 38;
  if ((m)) goto L_308;
  m = {};
  exports.CoreTextFieldSpecialState = {};
  !function <atom:0>({});
  let CoreTextField;
  let <class_fields_init>;
  class CoreTextField extends c.StatefulComponent { ... }
  <proto:CoreTextField>.setFocused = function <atom:0>;
  <proto:CoreTextField>.onViewModelUpdate = function <atom:0>;
  <proto:CoreTextField>.onRender = function <atom:0>;
  <proto:CoreTextField>.getIsInactive = function <atom:0>;
  <proto:CoreTextField>.getBackgroundColor = function <atom:0>;
  <proto:CoreTextField>.getBorderWidth = function <atom:0>;
  <proto:CoreTextField>.getBorderColor = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CoreTextField>;
  CoreTextField = function <atom:0>;
  // close_loc <class_fields_init>
  CoreTextField#1 = function <atom:0>;
  exports.CoreTextField = CoreTextField#1;
  M = {container: new p.Style({minHeight: S, paddingTop: 7, paddingBottom: 6, paddingLeft: C.Spacing.MD, paddingRight: C.Spacing.MD, borderRadius: 10, flexDirection: "row", alignItems: "center"}), rightContainer: new p.Style({flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}), rightContainerItem: new p.Style({marginLeft: 8})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/inputs/CoreTextField
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
