// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=oai_ui/src/components/settings/SettingsActionRow
// args: e
function {
  e.Default = 0;
  e[0] = "Default";
  e.NavigationLink = 1;
  e[1] = "NavigationLink";
  e.Selection = 2;
  e[2] = "Selection";
  e.Menu = 3;
  e[3] = "Menu";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=oai_ui/src/components/settings/SettingsActionRow
// args: e
function {
  e.Inline = 0;
  e[0] = "Inline";
  e.Adaptive = 1;
  e[1] = "Adaptive";
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=319B file=oai_ui/src/components/settings/SettingsActionRow
// args: e
// locals: t, i
// closure: L, this
function {
  let i;
  let t;
  t = L.resolveSettingsTheme().typography.Description.lineHeight;
  if (!((undefined !== t))) goto L_c0;
  i = (e.height > (t + 1));
  if (!((i !== this.state.multilineDescription))) goto L_13e;
  this.setState({multilineDescription: i});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=188B file=oai_ui/src/components/settings/SettingsActionRow
// args: e
// closure: this
function {
  if (!((e.height !== this.state.menuTextHeight))) goto L_bb;
  this.setState({menuTextHeight: e.height});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=188B file=oai_ui/src/components/settings/SettingsActionRow
// args: e
// closure: this
function {
  if (!((e.width !== this.state.rootFontSize))) goto L_bb;
  this.setState({rootFontSize: e.width});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=3 bc=124B file=oai_ui/src/components/settings/SettingsActionRow
// locals: this, this.active_func, new.target, arguments
// closure: L, <class_fields_init>
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
  this.state = {multilineDescription: false, menuTextHeight: undefined, rootFontSize: 16};
  this.handleDescriptionLayout = function <atom:0>;
  this.handleMenuTextLayout = function <atom:0>;
  this.handleRootFontSizeLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=244B file=oai_ui/src/components/settings/SettingsActionRow
// closure: e, i, D, this
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", D.rootFontSize);
  e.setAttributeFunction("onLayout", this.handleRootFontSizeLayout);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=657B file=oai_ui/src/components/settings/SettingsActionRow
// closure: e, x, s, a, this
function {
  e.beginComponent(x.Text, s, undefined, undefined);
  e.setViewModelProperty("typography", a.typography.Description);
  if (!((this.viewModel.valueColor == null))) goto L_17b;
  this.viewModel.valueColor;
  e.setViewModelProperty("color", a.colors.value);
  e.setViewModelProperty("value", this.viewModel.value);
  if (!((this.viewModel.valueNumberOfLines == null))) goto L_265;
  this.viewModel.valueNumberOfLines;
  e.setViewModelProperty("lines", 0);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=407B file=oai_ui/src/components/settings/SettingsActionRow
// closure: e, l, u, a, D, this, y
function {
  e.beginRender(l, undefined);
  if (!(u)) goto L_a1;
  goto L_c5;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", D.stackedContent);
  if (!(u)) goto L_144;
  if (!((false !== this.viewModel.showsChevron))) goto L_144;
  goto L_16e;
  // [栈深重同步 1 -> 0]
  this.renderTrailingContent(y);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=15 cpool=2 bc=696B file=oai_ui/src/components/settings/SettingsActionRow
// closure: e, x, s, a, this, l, u, D, y, r, P, p, k, w, b
function {
  e.beginComponent(x.Text, r, undefined, undefined);
  e.setViewModelProperty("color", a.colors.text);
  if (!(P)) goto L_138;
  goto L_17d;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("typography", a.typography.Row);
  e.setViewModelProperty("value", this.viewModel.label);
  e.endComponent();
  if ((p)) goto L_250;
  if ((k)) goto L_250;
  this.renderDescription(P, P);
  if (!(w)) goto L_2ac;
  if (!((undefined !== this.viewModel.value))) goto L_2ac;
  function <atom:0>();
  if (!(b)) goto L_2b7;
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=48B file=oai_ui/src/components/settings/SettingsActionRow
// closure: b, this, y
function {
  if ((b)) goto L_2f;
  this.renderTrailingContent(y);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=163B file=oai_ui/src/components/settings/SettingsActionRow
// closure: b, this, y, e, R, d
function {
  e.beginComponent(R.SettingsNavigationAccessory, d, undefined, undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=20 cpool=2 bc=776B file=oai_ui/src/components/settings/SettingsActionRow
// closure: e, x, s, a, this, l, u, D, y, r, P, p, k, w, b, R, d, I, n, g
function {
  this.renderImage();
  e.beginComponent(I.Column, n, undefined, undefined);
  if ((b)) goto L_b3;
  if (!(!p)) goto L_fc;
  if (!(!k)) goto L_fc;
  goto L_141;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("gap", a.layout.rowSupportingTextGap);
  if ((k)) goto L_178;
  if (!(P)) goto L_218;
  if (!((undefined !== this.viewModel.description))) goto L_218;
  if (!(g)) goto L_218;
  goto L_219;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("margin", undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  if (!(k)) goto L_2c3;
  if (!((false !== this.viewModel.showsChevron))) goto L_2c3;
  goto L_307;
  // [栈深重同步 1 -> 0]
  if (!(b)) goto L_2cd;
  if ((u)) goto L_307;
  this.renderStandardAccessories(y, p, w, b, u);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=26 cpool=2 bc=673B file=oai_ui/src/components/settings/SettingsActionRow
// closure: e, i, D, this, x, s, a, l, u, y, r, P, p, k, w, b, R, d, I, n, g, S, T, o, A, M
function {
  if (!(S)) goto L_a;
  function <atom:0>();
  e.beginComponent(T.Row, o, undefined, undefined);
  if (!(A)) goto L_d1;
  goto L_116;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("align", M.OAIAlign.Center);
  if ((p)) goto L_18f;
  if (!((undefined !== this.viewModel.image))) goto L_1d8;
  goto L_1d9;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("gap", undefined);
  e.setViewModelProperty("justify", M.OAIJustify.Between);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=20 closure=21 cpool=1 bc=4361B file=oai_ui/src/components/settings/SettingsActionRow
// locals: a, v, p, c, y, u, h, w, g, m, S, b, P, A, k, H, q, _, z, this
// closure: e, i, D, x, s, l, r, R, d, I, n, T, o, M, L, f, O, V, C, N, t
function {
  this = this;
  let z;
  let _;
  let q;
  let H;
  let k;
  let A;
  let P;
  let b;
  let S;
  let m;
  let g;
  let w;
  let h;
  let u;
  let y;
  let c;
  let p;
  let v;
  let a;
  a = L.resolveSettingsTheme();
  if (!((this.viewModel.appearance == null))) goto L_cf;
  this.viewModel.appearance;
  v = f.Default;
  p = (undefined !== this.viewModel.accessibilityStateSelected);
  c = (undefined !== this.viewModel.expanded);
  y = (true === this.viewModel.accessibilityStateSelected);
  u = (v === f.Menu);
  if ((u)) goto L_200;
  h = (v === f.Selection);
  if (!(h)) goto L_24e;
  w = a.layout.selectionValueBelowTitle;
  if (((undefined !== this.viewModel.trailingContent))) goto L_2e0;
  g = (undefined !== this.viewModel.value);
  if (!((this.viewModel.contentLayout == null))) goto L_37a;
  this.viewModel.contentLayout;
  if (!(h)) goto L_356;
  goto L_37a;
  // [栈深重同步 1 -> 0]
  m = O.Inline;
  if (!(V.isNativeIOS())) goto L_3d4;
  if (!(g)) goto L_3d4;
  S = (m === O.Adaptive);
  if (!(S)) goto L_4b8;
  if (!((undefined !== a.layout.stackedContentMinimumRootFontSize))) goto L_4b8;
  b = (this.state.rootFontSize >= a.layout.stackedContentMinimumRootFontSize);
  if (!((v === f.NavigationLink))) goto L_578;
  if (!(a.layout.navigationAccessoryTopAligned)) goto L_578;
  P = (undefined !== this.viewModel.description);
  if (!(P)) goto L_5c5;
  A = this.state.multilineDescription;
  if (!((v === f.NavigationLink))) goto L_628;
  if (!(!p)) goto L_628;
  if (!(!c)) goto L_628;
  k = V.isNativeIOS();
  H = L.resolveSettingsHorizontalInset(C.Device.getWindowWidth());
  if (!((undefined === this.viewModel.image))) goto L_6e4;
  goto L_729;
  // [栈深重同步 1 -> 0]
  q = a.layout.rowImageWidth;
  if (!((0 === q))) goto L_738;
  goto L_781;
  // [栈深重同步 2 -> 1]
  _ = (H + (q + a.layout.rowLeadingContentGap));
  if (!((this.viewModel.accessibilityLabel == null))) goto L_91b;
  this.viewModel.accessibilityLabel;
  if (!(p)) goto L_8d7;
  if (!((undefined !== this.viewModel.description))) goto L_8d7;
  goto L_91b;
  // [栈深重同步 1 -> 0]
  z = this.viewModel.label;
  e.beginComponent(N.SettingsRow, t, undefined, undefined);
  if (!(p)) goto L_9a3;
  goto L_9a8;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityCategory", "button");
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  e.setViewModelProperty("accessibilityLabel", z);
  e.setViewModelProperty("accessibilityValue", this.viewModel.accessibilityValue);
  e.setViewModelProperty("accessibilityStateSelected", this.viewModel.accessibilityStateSelected);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setViewModelProperty("horizontalInset", H);
  if (!(A)) goto L_c45;
  goto L_c46;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("contentAlignment", undefined);
  if (!(w)) goto L_cc0;
  goto L_d5c;
  // [栈深重同步 4 -> 3]
  if (!(P)) goto L_d5b;
  if (!(A)) goto L_d14;
  goto L_d5c;
  // [栈深重同步 4 -> 3]
  goto L_d5c;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("minHeight", undefined);
  e.setViewModelProperty("onPress", this.viewModel.onPress);
  e.setViewModelProperty("position", this.viewModel.position);
  e.setViewModelProperty("separatorInset", _);
  e.setViewModelProperty("separatorTrailingInset", H);
  e.setViewModelProperty("showsPressedFeedback", this.viewModel.showsPressedFeedback);
  if (!((this.viewModel.verticalInset == null))) goto L_10b3;
  this.viewModel.verticalInset;
  if (!(A)) goto L_fd5;
  goto L_10b3;
  // [栈深重同步 4 -> 3]
  if (!(p)) goto L_1022;
  goto L_10b3;
  // [栈深重同步 4 -> 3]
  if (!(u)) goto L_106e;
  goto L_10b3;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("verticalInset", a.layout.actionRowVerticalInset);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=1069B file=oai_ui/src/components/settings/SettingsActionRow
// closure: e, x, v, o, i, this, S, f
function {
  e.beginComponent(x.Text, v, undefined, undefined);
  if (!(o)) goto L_c6;
  goto L_10b;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("typography", i.typography.Value);
  if (!((this.viewModel.valueColor == null))) goto L_216;
  this.viewModel.valueColor;
  if (!(o)) goto L_1d1;
  goto L_216;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("color", i.colors.value);
  e.setViewModelProperty("value", this.viewModel.value);
  e.setViewModelProperty("numberOfLines", this.viewModel.valueNumberOfLines);
  if (!((this.viewModel.appearance === f.Menu))) goto L_400;
  if (!(i.layout.menuScalesWithText)) goto L_400;
  goto L_401;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onLayout", undefined);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=11 cpool=1 bc=1087B file=oai_ui/src/components/settings/SettingsActionRow
// args: t
// locals: i, o, this
// closure: e, x, v, S, f, L, a, D, k, p, b
function {
  this = this;
  let o;
  let i;
  i = L.resolveSettingsTheme();
  o = (this.viewModel.appearance === f.NavigationLink);
  if (((undefined !== this.viewModel.trailingContent))) goto L_12a;
  if (((undefined !== this.viewModel.value))) goto L_12a;
  if (!(t)) goto L_43e;
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", D.image);
  e.setAttribute("touchEnabled", false);
  if (!((undefined !== this.viewModel.trailingContent))) goto L_26d;
  goto L_416;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== this.viewModel.value))) goto L_2ba;
  goto L_416;
  // [栈深重同步 1 -> 0]
  e.beginComponent(k.Icon, p, undefined, undefined);
  e.setViewModelProperty("src", b.default.oaiCheckMd);
  e.setViewModelProperty("color", S.OAIColor.TextAccent);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=5 vars=9 closure=8 cpool=0 bc=1609B file=oai_ui/src/components/settings/SettingsActionRow
// args: t, i, o, n, r
// locals: s, l, d, this
// closure: L, f, e, c, k, y, b, S
function {
  this = this;
  let d;
  let l;
  let s;
  s = L.resolveSettingsTheme();
  if (!((this.viewModel.showsChevron == null))) goto L_7b;
  this.viewModel.showsChevron;
  l = !i;
  if (!(r)) goto L_b6;
  if (!(!o)) goto L_b6;
  if (!(!n)) goto L_b6;
  if (!(l)) goto L_b6;
  this.renderMenuAccessory(t);
  return;
  if ((n)) goto L_12f;
  if (!(o)) goto L_105;
  if (((undefined === this.viewModel.trailingContent))) goto L_12f;
  this.renderTrailingContent(t);
  if (!(!l)) goto L_137;
  return;
  if (!(s.layout.navigationAccessoryTopAligned)) goto L_27d;
  if (!((this.viewModel.appearance === f.NavigationLink))) goto L_27d;
  if (((undefined !== this.viewModel.value))) goto L_27a;
  if (!((undefined !== this.viewModel.trailingContent))) goto L_27d;
  return;
  d = (undefined !== this.viewModel.expanded);
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", s.styles.disclosure);
  if (!(d)) goto L_401;
  if (!(this.viewModel.expanded)) goto L_3fe;
  goto L_402;
  // [栈深重同步 4 -> 3]
  goto L_402;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("rotation", undefined);
  e.beginComponent(k.Icon, y, undefined, undefined);
  e.setViewModelProperty("src", b.default.oaiChevronRightSystem);
  if (!(d)) goto L_53e;
  goto L_583;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("color", S.OAIColor.IconSystemDisclosure);
  e.setViewModelProperty("size", s.layout.disclosureSize);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=0 bc=1314B file=oai_ui/src/components/settings/SettingsActionRow
// args: t
// locals: i, o, this
// closure: L, e, u, h, w
function {
  this = this;
  let o;
  let i;
  i = L.resolveSettingsTheme();
  if (!((undefined === this.state.menuTextHeight))) goto L_79;
  goto L_102;
  // [栈深重同步 1 -> 0]
  o = (this.state.menuTextHeight / i.layout.menuDefaultTextHeight);
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", i.styles.menuAccessory);
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", i.styles.menuValue);
  this.renderTrailingContent(t);
  e.endRender();
  e.beginRender(w, undefined);
  e.setAttributeStyle("style", i.styles.menuIndicator);
  e.setAttributeNumber("width", (i.layout.menuIndicatorWidth * o));
  e.setAttributeNumber("height", (i.layout.menuIndicatorHeight * o));
  if (!((this.viewModel.valueColor == null))) goto L_4ce;
  this.viewModel.valueColor;
  e.setAttributeString("tint", i.colors.value);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=361B file=oai_ui/src/components/settings/SettingsActionRow
// locals: this
// closure: e, g, D
function {
  this = this;
  if (!((undefined !== this.viewModel.image))) goto L_168;
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", D.image);
  e.setAttribute("touchEnabled", false);
  this.viewModel.image();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=5 cpool=0 bc=739B file=oai_ui/src/components/settings/SettingsActionRow
// args: t, i
// locals: o, this
// closure: L, e, x, m, S
function {
  this = this;
  let o;
  o = L.resolveSettingsTheme();
  if (!((undefined !== this.viewModel.description))) goto L_2e2;
  e.beginComponent(x.Text, m, undefined, undefined);
  e.setViewModelProperty("typography", o.typography.Description);
  e.setViewModelProperty("value", this.viewModel.description);
  if (!(t)) goto L_21d;
  goto L_262;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("color", o.colors.description);
  if (!(i)) goto L_2b6;
  goto L_2b7;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onLayout", undefined);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=42 closure=0 cpool=9 bc=1689B file=oai_ui/src/components/settings/SettingsActionRow
// args: require, module, exports
// locals: e, t, i, o, n, r, s, l, d, a, v, p, c, y, u, h, w, g, m, M, S, b, P, C, A, V, R, I, k, T, x, L, N, f, O, SettingsActionRow, <class_fields_init>, SettingsActionRow#1, D
function {
  let D;
  let SettingsActionRow#1;
  let N;
  let L;
  let x;
  let T;
  let k;
  let I;
  let R;
  let V;
  let A;
  let C;
  let P;
  let b;
  let S;
  let M;
  let m;
  let g;
  let w;
  let h;
  let u;
  let y;
  let c;
  let p;
  let v;
  let a;
  let d;
  let l;
  let s;
  let r;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SettingsActionRowAppearance = undefined;
  exports.SettingsActionRowContentLayout = undefined;
  exports.SettingsActionRow = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "2nMUipfZ7BvvntLv");
  i = e.makeNodePrototype("layout", undefined, "WNZUegikKRKivbqv");
  o = e.makeComponentPrototype(["width", "100%"], "ciZO5JbQH_WxPOXG");
  n = e.makeComponentPrototype(["flex", 1], "8pc7h2gAaX0K_t4p");
  r = e.makeComponentPrototype(["lines", 0], "XZtZKHPa4dOd0JHP");
  s = e.makeComponentPrototype(undefined, "WkXhDRwhPdlpai_2");
  l = e.makeNodePrototype("layout", undefined, "B3UWOs6tvgf85M2t");
  d = e.makeComponentPrototype(undefined, "YFwS3rMVUDT57YbA");
  a = e.makeNodePrototype("view", ["accessibilityNavigation", "ignored"], "LCybJBUoAvXpqdG1");
  v = e.makeComponentPrototype(undefined, "lhEAvDXH5Acj_bvS");
  p = e.makeComponentPrototype(undefined, "_HwTH3TMUkAC-qzY");
  c = e.makeNodePrototype("view", undefined, "3uMJmAN-4OXEU3W9");
  y = e.makeComponentPrototype(undefined, "iWHPkPLm5f3HUSip");
  u = e.makeNodePrototype("layout", undefined, "PjroUgQkvuiEE3nm");
  h = e.makeNodePrototype("view", undefined, "pE0Rj3ixDGZpKU_W");
  w = e.makeNodePrototype("image", undefined, "s57QYRAiJRp_-fjN");
  g = e.makeNodePrototype("view", ["accessibilityNavigation", "ignored"], "1Hc03E-hLS7cwVmO");
  m = e.makeComponentPrototype(["lines", 0], "abQcol5FpLeRG-9O");
  M = require("oai_core/src/OAIAttributes");
  S = require("oai_core/src/OAITokens");
  b = require("oai_ui/res");
  P = require("valdi_core/src/Component");
  C = require("valdi_core/src/Device");
  A = require("valdi_core/src/Style");
  V = require("valdi_ui/src/Platform");
  R = require("./SettingsNavigationAccessory");
  I = require("../Column");
  k = require("../Icon");
  T = require("../Row");
  x = require("../Text");
  L = require("./SettingsTheme");
  N = require("./SettingsRow");
  if ((f)) goto L_52e;
  f = {};
  exports.SettingsActionRowAppearance = {};
  !function <atom:0>({});
  if ((O)) goto L_547;
  O = {};
  exports.SettingsActionRowContentLayout = {};
  function <atom:0>({});
  let SettingsActionRow;
  let <class_fields_init>;
  class SettingsActionRow extends P.StatefulComponent { ... }
  <proto:SettingsActionRow>.onRender = function <atom:0>;
  <proto:SettingsActionRow>.renderTrailingContent = function <atom:0>;
  <proto:SettingsActionRow>.renderStandardAccessories = function <atom:0>;
  <proto:SettingsActionRow>.renderMenuAccessory = function <atom:0>;
  <proto:SettingsActionRow>.renderImage = function <atom:0>;
  <proto:SettingsActionRow>.renderDescription = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SettingsActionRow>;
  SettingsActionRow = function <atom:0>;
  // close_loc <class_fields_init>
  SettingsActionRow#1 = function <atom:0>;
  exports.SettingsActionRow = SettingsActionRow#1;
  D = {rootFontSize: new A.Style({position: "absolute", width: "1rem", height: 0}), stackedContent: new A.Style({alignItems: "flex-start", width: "100%"}), image: new A.Style({alignItems: "center", flexShrink: 0, justifyContent: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/settings/SettingsActionRow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
