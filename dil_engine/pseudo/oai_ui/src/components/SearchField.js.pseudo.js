// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=oai_ui/src/components/SearchField
// args: e
function {
  e.Default = 0;
  e[0] = "Default";
  e.PageTable = 1;
  e[1] = "PageTable";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=190B file=oai_ui/src/components/SearchField
// args: e
// closure: this
function {
  this.updateValue(e.text);
  if (!((this.viewModel.onChange == null))) goto L_98;
  this.viewModel.onChange;
  this.viewModel;
  goto L_bd;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=190B file=oai_ui/src/components/SearchField
// args: e
// closure: this
function {
  this.updateValue(e.text);
  if (!((this.viewModel.onSubmit == null))) goto L_98;
  this.viewModel.onSubmit;
  this.viewModel;
  goto L_bd;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=124B file=oai_ui/src/components/SearchField
// closure: this
function {
  this.updateValue("");
  if (!((this.viewModel.onChange == null))) goto L_77;
  this.viewModel.onChange;
  this.viewModel;
  goto L_7b;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=3 bc=178B file=oai_ui/src/components/SearchField
// locals: this, this.active_func, new.target, arguments
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
  this.state = {value: this.viewModel.defaultValue};
  this.handleChange = function <atom:0>;
  this.handleSubmit = function <atom:0>;
  this.clear = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=287B file=oai_ui/src/components/SearchField
// closure: e, o, w, this
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", w.searchIcon);
  if (!((this.viewModel.iconSymbol == null))) goto L_f3;
  this.viewModel.iconSymbol;
  e.setAttributeString("value", "⌕");
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=514B file=oai_ui/src/components/SearchField
// closure: e, r, w, g, n, h, this
function {
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", w.searchIconAsset);
  e.beginComponent(g.Icon, n, undefined, undefined);
  e.setViewModelProperty("color", h.OAIColor.IconTertiary);
  e.setViewModelProperty("src", this.viewModel.iconSrc);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=644B file=oai_ui/src/components/SearchField
// closure: I, e, s, w, g, d, h
function {
  if (!((undefined === I))) goto L_b1;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", w.clearIcon);
  goto L_283;
  // [栈深重同步 1 -> 0]
  e.beginComponent(g.Icon, d, undefined, undefined);
  e.setViewModelProperty("color", h.OAIColor.IconTertiary);
  e.setViewModelProperty("size", (h.OAISpacing.Two + h.OAISpacing.Quarter));
  e.setViewModelProperty("src", I);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=1 bc=1465B file=oai_ui/src/components/SearchField
// closure: I, e, s, w, g, d, h, p, a, this, u, v
function {
  e.beginComponent(p.Pressable, a, undefined, undefined);
  if (!((this.viewModel.clearAccessibilityLabel == null))) goto L_c9;
  this.viewModel.clearAccessibilityLabel;
  e.setViewModelProperty("accessibilityLabel", "Clear search");
  e.setViewModelProperty("align", u.OAIAlign.Center);
  if (!((undefined === I))) goto L_1b6;
  goto L_1fb;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("background", h.OAIColor.Transparent);
  e.setViewModelProperty("disabled", v);
  if (!((undefined === I))) goto L_2a6;
  goto L_2eb;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("height", h.OAISpacing.Four);
  e.setViewModelProperty("justify", u.OAIJustify.Center);
  if (!((undefined === I))) goto L_394;
  goto L_3e0;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("margin", {right: -h.OAISpacing.OnePointTwentyFive});
  e.setViewModelProperty("onPress", this.clear);
  e.setViewModelProperty("radius", h.OAIRadius.Pill);
  if (!((undefined === I))) goto L_51e;
  goto L_563;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("width", h.OAISpacing.Four);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=277B file=oai_ui/src/components/SearchField
// closure: e, c, w, this
function {
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", w.shortcutLabel);
  e.setAttributeString("value", this.viewModel.shortcutHint);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=6 closure=18 cpool=5 bc=2977B file=oai_ui/src/components/SearchField
// locals: v, y, b, I, m, this
// closure: e, o, w, r, g, n, h, s, d, p, a, u, c, A, S, t, i, l
function {
  this = this;
  let m;
  let I;
  let b;
  let y;
  let v;
  v = (true === this.viewModel.disabled);
  if (!((this.viewModel.size == null))) goto L_e8;
  this.viewModel.size;
  y = h.OAIControlSize.Md;
  if (!((this.viewModel.variant == null))) goto L_156;
  this.viewModel.variant;
  b = (A.Default === A.PageTable);
  if (!(b)) goto L_1c7;
  goto L_1c8;
  // [栈深重同步 1 -> 0]
  I = undefined;
  if (!(b)) goto L_218;
  goto L_21b;
  // [栈深重同步 2 -> 1]
  m = S(y);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", w.root);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", w.control);
  if (!(b)) goto L_38d;
  goto L_3d2;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", h.OAIColor.BgTertiary);
  if (!(b)) goto L_44b;
  goto L_473;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("height", h.resolveOAIControlHeight(y));
  if (!(v)) goto L_4a9;
  goto L_4aa;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  if (!((undefined === this.viewModel.iconSrc))) goto L_4fb;
  goto L_4fe;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", w.input);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  if (!((this.viewModel.accessibilityLabel == null))) goto L_6ad;
  this.viewModel.accessibilityLabel;
  if (!((this.viewModel.placeholder == null))) goto L_6ad;
  this.viewModel.placeholder;
  e.setAttributeString("accessibilityLabel", "Search");
  e.setAttribute("accessibilityStateDisabled", v);
  if (!((this.viewModel.autocapitalization == null))) goto L_758;
  this.viewModel.autocapitalization;
  e.setAttributeString("autocapitalization", "none");
  if (!((this.viewModel.autocorrection == null))) goto L_7d3;
  this.viewModel.autocorrection;
  e.setAttributeString("autocorrection", "none");
  e.setAttributeNumber("characterLimit", this.viewModel.maxLength);
  e.setAttribute("enabled", !v);
  e.setAttributeString("font", m.font);
  e.setAttributeFunction("onChange", this.handleChange);
  e.setAttributeFunction("onReturn", this.handleSubmit);
  if (!((this.viewModel.placeholder == null))) goto L_9e1;
  this.viewModel.placeholder;
  e.setAttributeString("placeholder", "Search");
  if (!((this.viewModel.returnKeyText == null))) goto L_a5c;
  this.viewModel.returnKeyText;
  e.setAttributeString("returnKeyText", "search");
  e.setAttributeString("value", this.value);
  e.endRender();
  if (!(this.showsClearButton)) goto L_b02;
  function <atom:0>();
  e.endRender();
  if (!((undefined !== this.viewModel.shortcutHint))) goto L_b78;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=142B file=oai_ui/src/components/SearchField
// locals: this
function {
  this = this;
  if (!((this.viewModel.value == null))) goto L_8d;
  this.viewModel.value;
  return this.state.value;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=128B file=oai_ui/src/components/SearchField
// locals: this
function {
  this = this;
  if (!((false !== this.viewModel.clearable))) goto L_7f;
  if (!((this.value == null))) goto L_76;
  this.value;
  goto L_77;
  if (!((undefined.length == null))) goto L_7d;
  undefined.length;
  return (0 > 0);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=120B file=oai_ui/src/components/SearchField
// args: e
// locals: this
function {
  this = this;
  if (!((undefined === this.viewModel.value))) goto L_77;
  this.setState({value: e});
  return;
}

// fn S  args=1 vars=1 closure=1 cpool=0 bc=252B file=oai_ui/src/components/SearchField
// args: e
// closure: h
function {
  if (!((e === h.OAIControlSize.Sm))) goto L_b4;
  goto L_f9;
  // [栈深重同步 2 -> 1]
  return h.resolveOAITextStyle(h.OAITextSize.BodyLarge);   // tail call
}

// fn <atom:0>  args=3 vars=27 closure=0 cpool=7 bc=2414B file=oai_ui/src/components/SearchField
// args: require, module, exports
// locals: e, t, i, o, r, n, l, a, s, d, c, u, h, v, y, b, g, p, A, SearchField, <class_fields_init>, SearchField#1, S, w
function {
  S = function S;
  let w;
  let SearchField#1;
  let p;
  let g;
  let b;
  let y;
  let v;
  let h;
  let u;
  let c;
  let d;
  let s;
  let a;
  let l;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SearchFieldVariant = undefined;
  exports.SearchField = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "w3ri-vvXdkhc812a");
  i = e.makeNodePrototype("view", undefined, "4t3nY7WeBhwZNsXF");
  o = e.makeNodePrototype("label", undefined, "nfei5C5Vio8KJQEg");
  r = e.makeNodePrototype("view", ["accessibilityNavigation", "ignored"], "1NVvk45sax-FCBQU");
  n = e.makeComponentPrototype(["size", 16], "-jGIaMh2TNn4evAk");
  l = e.makeNodePrototype("textfield", ["accessibilityCategory", "input"], "wVDt7vUamNumCCR7");
  a = e.makeComponentPrototype(undefined, "99NBtg9URqpFsJoT");
  s = e.makeNodePrototype("label", ["value", "�"], "K_HbL0VhC8mzsOh0");
  d = e.makeComponentPrototype(undefined, "V0n0aGcMPwDMGK3R");
  c = e.makeNodePrototype("label", undefined, "HGA5nhpqjQLOT0d7");
  u = require("oai_core/src/OAIAttributes");
  h = require("oai_core/src/OAITokens");
  v = require("valdi_core/src/Component");
  y = require("valdi_core/src/Style");
  b = require("valdi_core/src/SystemFont");
  g = require("./Icon");
  p = require("./Pressable");
  if ((A)) goto L_32f;
  A = {};
  exports.SearchFieldVariant = {};
  !function <atom:0>({});
  let SearchField;
  let <class_fields_init>;
  class SearchField extends v.StatefulComponent { ... }
  <proto:SearchField>.onRender = function <atom:0>;
  <proto:SearchField>.value = function <atom:0>;
  <proto:SearchField>.showsClearButton = function <atom:0>;
  <proto:SearchField>.updateValue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SearchField>;
  SearchField = function <atom:0>;
  // close_loc <class_fields_init>
  SearchField#1 = function <atom:0>;
  exports.SearchField = SearchField#1;
  w = {root: new y.Style({alignItems: "center", flexDirection: "row", gap: h.OAISpacing.OneAndHalf, width: "100%"}), control: new y.Style({alignItems: "center", borderColor: h.OAIColor.BorderDefault, borderRadius: h.OAIRadius.Pill, borderWidth: 1, flexDirection: "row", flexGrow: 1, minWidth: 0, paddingLeft: h.OAISpacing.OneAndHalf, paddingRight: h.OAISpacing.OneAndHalf}), searchIcon: new y.Style({color: h.OAIColor.IconSecondary, flexShrink: 0, font: b.systemFont(22), marginRight: h.OAISpacing.One}), searchIconAsset: new y.Style({flexShrink: 0, marginRight: h.OAISpacing.One}), input: new y.Style({color: h.OAIColor.TextPrimary, flexGrow: 1, flexShrink: 1, height: "100%", minWidth: 0, placeholderColor: h.OAIColor.TextTertiary}), shortcutLabel: new y.Style({color: h.OAIColor.TextTertiary, flexShrink: 0, font: b.systemBoldFont(10), textAlign: "center"}), clearIcon: new y.Style({color: h.OAIColor.InteractiveLabelSecondaryDefault, font: b.systemBoldFont(15), textAlign: "center", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/SearchField
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
