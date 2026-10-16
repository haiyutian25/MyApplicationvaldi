// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=74B file=valdi_ui/src/components/SearchField
// closure: this
function {
  this.viewModel.onChange("");
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=valdi_ui/src/components/SearchField
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
  this.clear = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=165B file=valdi_ui/src/components/SearchField
// closure: e, r, u
function {
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", u.icon);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=valdi_ui/src/components/SearchField
// closure: this, u
function {
  this.renderClear(u);
  return;
}

// fn <atom:0>  args=0 vars=7 closure=10 cpool=3 bc=4728B file=valdi_ui/src/components/SearchField
// locals: o, l, s, a, h, u, this
// closure: e, r, n, c, t, y, d, v, b, i
function {
  this = this;
  let u;
  let h;
  let a;
  let s;
  let l;
  let o;
  if (((undefined === undefined))) goto L_7b;
  o = <to_object>(undefined).clearAccessibilityLabel;
  l = <to_object>(undefined).clearable;
  s = {};
  <to_object>(undefined);
  {clearAccessibilityLabel: null, clearable: null};
  goto L_a2;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.inputStyle == null))) goto L_ee;
  this.viewModel.inputStyle;
  goto L_10f;
  a = undefined.attributes;
  h = n.resolveValdiUITheme();
  if (!(c.isNativeIOS())) goto L_f1a;
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("accessibilityStateDisabled", (true === this.viewModel.disabled));
  if (!((a == null))) goto L_317;
  a;
  goto L_338;
  e.setAttributeString("alignSelf", undefined.alignSelf);
  e.setAttributeString("clearAccessibilityLabel", this.viewModel.clearAccessibilityLabel);
  if (!((a == null))) goto L_3e1;
  a;
  goto L_402;
  e.setAttribute("flexBasis", undefined.flexBasis);
  if (!((a == null))) goto L_43a;
  a;
  goto L_45b;
  e.setAttributeNumber("flexGrow", undefined.flexGrow);
  if (!((a == null))) goto L_493;
  a;
  goto L_4b4;
  e.setAttributeNumber("flexShrink", undefined.flexShrink);
  if (!((a == null))) goto L_4ec;
  a;
  goto L_50d;
  e.setAttribute("height", undefined.height);
  if (!((a == null))) goto L_545;
  a;
  goto L_566;
  e.setAttribute("maxHeight", undefined.maxHeight);
  if (!((a == null))) goto L_59e;
  a;
  goto L_5bf;
  e.setAttribute("maxWidth", undefined.maxWidth);
  if (!((a == null))) goto L_5f7;
  a;
  goto L_618;
  e.setAttribute("minHeight", undefined.minHeight);
  if (!((a == null))) goto L_650;
  a;
  goto L_671;
  e.setAttribute("minWidth", undefined.minWidth);
  if (!((true === this.viewModel.disabled))) goto L_6ea;
  goto L_72e;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onSearchChange", this.viewModel.onChange);
  if (!((true === this.viewModel.disabled))) goto L_7a7;
  goto L_7eb;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onSearchSubmit", this.viewModel.onSubmit);
  if (!((true === this.viewModel.disabled))) goto L_865;
  goto L_866;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  if (!((this.viewModel.autocapitalization == null))) goto L_8e1;
  this.viewModel.autocapitalization;
  e.setAttributeString("searchAutocapitalization", "none");
  if (!((this.viewModel.autocorrection == null))) goto L_95c;
  this.viewModel.autocorrection;
  e.setAttributeString("searchAutocorrection", "none");
  e.setAttribute("searchClearable", (false !== this.viewModel.clearable));
  e.setAttribute("searchEnabled", (true !== this.viewModel.disabled));
  if (!((a == null))) goto L_a7c;
  a;
  goto L_a9d;
  if (!((undefined.font == null))) goto L_ae7;
  undefined.font;
  e.setAttributeString("searchFont", h.typography.body);
  e.setAttributeString("searchPlaceholder", this.viewModel.placeholder);
  if (!((a == null))) goto L_b90;
  a;
  goto L_bb1;
  if (!((undefined.placeholderColor == null))) goto L_bfb;
  undefined.placeholderColor;
  e.setAttributeString("searchPlaceholderColor", h.colors.mutedText);
  if (!((this.viewModel.returnKeyText == null))) goto L_c76;
  this.viewModel.returnKeyText;
  e.setAttributeString("searchReturnKey", "search");
  if (!((a == null))) goto L_cae;
  a;
  goto L_ccf;
  if (!((undefined.color == null))) goto L_d19;
  undefined.color;
  e.setAttributeString("searchTextColor", h.colors.text);
  e.setAttributeString("searchValue", this.viewModel.value);
  if (!((undefined === this.viewModel.style))) goto L_e05;
  goto L_e94;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", d.Style.cachingMerge(y, this.viewModel.style));
  if (!((a == null))) goto L_ecc;
  a;
  goto L_eed;
  e.setAttribute("width", undefined.width);
  e.endRender();
  return;
  u = v(h);
  e.beginComponent(b.TextInput, i, undefined, undefined);
  e.setViewModelProperties(s);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.accessibilityLabel);
  if (!((this.viewModel.autocapitalization == null))) goto L_1087;
  this.viewModel.autocapitalization;
  e.setViewModelProperty("autocapitalization", "none");
  if (!((this.viewModel.autocorrection == null))) goto L_1102;
  this.viewModel.autocorrection;
  e.setViewModelProperty("autocorrection", "none");
  e.setViewModelProperty("placeholder", this.viewModel.placeholder);
  if (!((this.viewModel.returnKeyText == null))) goto L_11ee;
  this.viewModel.returnKeyText;
  e.setViewModelProperty("returnKeyText", "search");
  e.setNamedSlot("leading", function <atom:0>);
  e.setNamedSlot("trailing", function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=326B file=valdi_ui/src/components/SearchField
// closure: e, l, t, s
function {
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", t.clearSurface);
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", t.clearLabel);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=1 bc=929B file=valdi_ui/src/components/SearchField
// args: t
// locals: this
// closure: e, l, s, h, o
function {
  this = this;
  if (!((false !== this.viewModel.clearable))) goto L_3a0;
  if (!((0 !== this.viewModel.value.length))) goto L_3a0;
  e.beginComponent(h.Pressable, o, undefined, undefined);
  if (!((undefined === this.viewModel.accessibilityId))) goto L_160;
  goto L_1cd;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityId", "".concat(this.viewModel.accessibilityId, ".clear"));
  e.setViewModelProperty("accessibilityLabel", this.viewModel.clearAccessibilityLabel);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setViewModelProperty("onPress", this.clear);
  e.setViewModelProperty("style", t.clear);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn v  args=1 vars=2 closure=2 cpool=0 bc=794B file=valdi_ui/src/components/SearchField
// args: e
// locals: t
// closure: u, d
function {
  let t;
  t = u.get(e);
  if (((undefined !== t))) goto L_315;
  t = {clear: new d.Style({alignItems: "center", height: 44, justifyContent: "center", width: 44}), clearSurface: new d.Style({alignItems: "center", backgroundColor: e.colors.mutedSurface, borderRadius: e.shape.pillRadius, height: 24, justifyContent: "center", width: 24}), clearLabel: new d.Style({color: e.colors.mutedText, font: e.typography.label}), icon: new d.Style({color: e.colors.mutedText, font: e.typography.label})};
  {clear: new d.Style({alignItems: "center", height: 44, justifyContent: "center", width: 44}), clearSurface: new d.Style({alignItems: "center", backgroundColor: e.colors.mutedSurface, borderRadius: e.shape.pillRadius, height: 24, justifyContent: "center", width: 24}), clearLabel: new d.Style({color: e.colors.mutedText, font: e.typography.label}), icon: new d.Style({color: e.colors.mutedText, font: e.typography.label})};
  u.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=4 bc=721B file=valdi_ui/src/components/SearchField
// args: require, module, exports
// locals: e, t, i, r, o, l, s, a, d, n, c, h, b, SearchField, <class_fields_init>, SearchField#1, u, y, v
function {
  v = function v;
  let y;
  let u;
  let SearchField#1;
  let b;
  let h;
  let c;
  let n;
  let d;
  let a;
  let s;
  let l;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SearchField = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["accessibilityCategory", "input", "iosClass", "ValdiNativeSearchField"], "sHEA6cIqJuhQgBJC");
  i = e.makeComponentPrototype(undefined, "UrAC6fvJdy8Bq6MA");
  r = e.makeNodePrototype("label", ["value", "⌕"], "5wANtM-0gcJu8CUe");
  o = e.makeComponentPrototype(undefined, "aSqo7YF5kG-pCOps");
  l = e.makeNodePrototype("view", undefined, "r_24M92A_j8r1wbi");
  s = e.makeNodePrototype("label", ["value", "�"], "jMG45hP7iyW3OEl6");
  a = require("valdi_core/src/Component");
  d = require("valdi_core/src/Style");
  n = require("valdi_ui_theme/src/ValdiUITheme");
  c = require("../Platform");
  h = require("./Pressable");
  b = require("./TextInput");
  let SearchField;
  let <class_fields_init>;
  class SearchField extends a.Component { ... }
  <proto:SearchField>.onRender = function <atom:0>;
  <proto:SearchField>.renderClear = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SearchField>;
  SearchField = function <atom:0>;
  // close_loc <class_fields_init>
  SearchField#1 = function <atom:0>;
  exports.SearchField = SearchField#1;
  u = new WeakMap();
  y = new d.Style({minHeight: 44, width: "100%"});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/SearchField
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
