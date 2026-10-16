// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=143B file=oai_ui/src/components/settings/SettingsToggleRow
// closure: this
function {
  this.viewModel.onChange(!this.viewModel.checked);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=oai_ui/src/components/settings/SettingsToggleRow
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
  this.handlePress = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=203B file=oai_ui/src/components/settings/SettingsToggleRow
// closure: e, i, C, this
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", C);
  this.viewModel.image();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=633B file=oai_ui/src/components/settings/SettingsToggleRow
// closure: e, P, s, l, this, n
function {
  e.beginComponent(P.Text, s, undefined, undefined);
  if (!(l)) goto L_ce;
  if (!(!this.viewModel.loading)) goto L_ce;
  goto L_cf;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityNavigation", undefined);
  e.setViewModelProperty("color", n.colors.text);
  e.setViewModelProperty("typography", n.typography.Row);
  e.setViewModelProperty("value", this.viewModel.label);
  e.endComponent();
  this.renderDescription();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=13 cpool=2 bc=965B file=oai_ui/src/components/settings/SettingsToggleRow
// closure: e, i, C, this, P, s, l, n, m, r, v, a, d
function {
  if (!((undefined !== this.viewModel.image))) goto L_4c;
  function <atom:0>();
  e.beginComponent(m.Column, r, undefined, undefined);
  e.setViewModelProperty("gap", n.layout.rowLabelGap);
  if (!((undefined === v))) goto L_143;
  goto L_14c;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("padding", {y: v});
  if (!(a)) goto L_20e;
  if (!(!this.viewModel.loading)) goto L_20e;
  goto L_20f;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("opacity", undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", n.styles.toggleAccessory);
  if (!(l)) goto L_338;
  goto L_33d;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  e.setAttribute("touchEnabled", l);
  this.renderAccessory(a, l);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=16 cpool=1 bc=391B file=oai_ui/src/components/settings/SettingsToggleRow
// closure: e, i, C, this, P, s, l, n, m, r, v, a, d, M, t, p
function {
  e.beginComponent(M.Row, t, undefined, undefined);
  e.setViewModelProperty("align", p.OAIAlign.Center);
  e.setViewModelProperty("justify", p.OAIJustify.Between);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=6 closure=15 cpool=3 bc=1849B file=oai_ui/src/components/settings/SettingsToggleRow
// locals: n, l, a, c, v, this
// closure: e, i, C, P, s, m, r, d, M, t, p, u, g, V, o
function {
  this = this;
  let v;
  let c;
  let a;
  let l;
  let n;
  n = u.resolveSettingsTheme();
  l = g.isNativeIOS();
  if (((true === this.viewModel.disabled))) goto L_ed;
  a = this.viewModel.loading;
  if (!((this.viewModel.verticalInset == null))) goto L_17c;
  this.viewModel.verticalInset;
  c = n.layout.toggleRowVerticalInset;
  v = n.layout.toggleLabelVerticalInset;
  e.beginComponent(V.SettingsRow, o, undefined, undefined);
  if (!(l)) goto L_246;
  goto L_24b;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityCategory", "checkbox");
  if (!(l)) goto L_280;
  goto L_2c4;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  if (!(l)) goto L_2f9;
  goto L_33d;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityLabel", this.viewModel.label);
  if (!(l)) goto L_372;
  goto L_375;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityStateDisabled", a);
  if (!(l)) goto L_3aa;
  goto L_3ee;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityStateSelected", this.viewModel.checked);
  if (!(l)) goto L_423;
  goto L_46f;
  // [栈深重同步 4 -> 3]
  if (!(this.viewModel.checked)) goto L_46d;
  goto L_46f;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityValue", "0");
  e.setViewModelProperty("disabled", a);
  e.setViewModelProperty("dimmedWhenDisabled", false);
  if (!(l)) goto L_503;
  goto L_526;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onPress", this.handlePress);
  e.setViewModelProperty("position", this.viewModel.position);
  if (!((undefined === v))) goto L_5cf;
  goto L_6a9;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("minHeight", Math.max(n.layout.rowMinimumHeight, (u.SettingsAppearance.toggleDimensions.height + (2 * c))));
  if (!((undefined === v))) goto L_6e2;
  goto L_6e3;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("verticalInset", 0);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=580B file=oai_ui/src/components/settings/SettingsToggleRow
// locals: o, this
// closure: u, e, P, n
function {
  this = this;
  let o;
  o = u.resolveSettingsTheme();
  if (!((undefined !== this.viewModel.description))) goto L_243;
  e.beginComponent(P.Text, n, undefined, undefined);
  e.setViewModelProperty("typography", o.typography.Description);
  e.setViewModelProperty("value", this.viewModel.description);
  e.setViewModelProperty("color", o.colors.description);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=9 cpool=0 bc=1561B file=oai_ui/src/components/settings/SettingsToggleRow
// args: o, t
// locals: this
// closure: e, h, l, g, w, a, b, c, u
function {
  this = this;
  if (!(this.viewModel.loading)) goto L_c2;
  e.beginComponent(h.ActivityIndicator, l, undefined, undefined);
  e.endComponent();
  return undefined;
  if (!(g.supportsNativeAndroidSwitchAccessory())) goto L_206;
  e.beginComponent(w.NativeSwitchAccessory, a, undefined, undefined);
  e.setViewModelProperty("checked", this.viewModel.checked);
  e.setViewModelProperty("enabled", !o);
  e.endComponent();
  return undefined;
  e.beginComponent(b.Toggle, c, undefined, undefined);
  if (!(t)) goto L_2c8;
  goto L_2c9;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityId", undefined);
  if (!(t)) goto L_33e;
  goto L_33f;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityLabel", undefined);
  e.setViewModelProperty("checked", this.viewModel.checked);
  e.setViewModelProperty("checkedTrackColor", u.SettingsAppearance.toggleColors.checkedTrack);
  e.setViewModelProperty("dimensions", u.SettingsAppearance.toggleDimensions);
  e.setViewModelProperty("disabled", o);
  if (!(t)) goto L_557;
  goto L_558;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onChange", undefined);
  e.setViewModelProperty("thumbColor", u.SettingsAppearance.toggleColors.thumb);
  e.endComponent();
  return undefined;
}

// fn <atom:0>  args=3 vars=30 closure=0 cpool=4 bc=1010B file=oai_ui/src/components/settings/SettingsToggleRow
// args: require, module, exports
// locals: e, o, t, i, r, s, d, n, l, a, c, p, v, y, g, w, h, m, M, P, b, u, V, SettingsToggleRow, <class_fields_init>, SettingsToggleRow#1, C
function {
  let C;
  let SettingsToggleRow#1;
  let V;
  let u;
  let b;
  let P;
  let M;
  let m;
  let h;
  let w;
  let g;
  let y;
  let v;
  let p;
  let c;
  let a;
  let l;
  let n;
  let d;
  let s;
  let r;
  let i;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SettingsToggleRow = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "fyfh5yE1_KhWWPDt");
  t = e.makeComponentPrototype(["width", "100%"], "VX0pz4O1SqYwQnqE");
  i = e.makeNodePrototype("view", undefined, "Nv8k9v-uXKWAzqM4");
  r = e.makeComponentPrototype(["flex", 1], "6p8g_5Dm0Ki9DK_-");
  s = e.makeComponentPrototype(["lines", 0], "f1kHSfm2ViAqGCPf");
  d = e.makeNodePrototype("view", undefined, "yOK0I1wFFn_wExGD");
  n = e.makeComponentPrototype(["lines", 0], "Nw78QASdEZhGZ22X");
  l = e.makeComponentPrototype(undefined, "6YPp2LUtP7ldp1rn");
  a = e.makeComponentPrototype(undefined, "2vzxe-VshrrjCxBe");
  c = e.makeComponentPrototype(undefined, "Mv-0RZY-XcsVhieK");
  p = require("oai_core/src/OAIAttributes");
  v = require("valdi_core/src/Component");
  y = require("valdi_core/src/Style");
  g = require("valdi_ui/src/Platform");
  w = require("../../internal/NativeSwitchAccessory");
  h = require("../ActivityIndicator");
  m = require("../Column");
  M = require("../Row");
  P = require("../Text");
  b = require("../Toggle");
  u = require("./SettingsTheme");
  V = require("./SettingsRow");
  let SettingsToggleRow;
  let <class_fields_init>;
  class SettingsToggleRow extends v.Component { ... }
  <proto:SettingsToggleRow>.onRender = function <atom:0>;
  <proto:SettingsToggleRow>.renderDescription = function <atom:0>;
  <proto:SettingsToggleRow>.renderAccessory = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SettingsToggleRow>;
  SettingsToggleRow = function <atom:0>;
  // close_loc <class_fields_init>
  SettingsToggleRow#1 = function <atom:0>;
  exports.SettingsToggleRow = SettingsToggleRow#1;
  C = new y.Style({width: 24, height: 24, marginRight: 10, flexShrink: 0, alignItems: "center", justifyContent: "center", accessibilityNavigation: "ignored", touchEnabled: false});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/settings/SettingsToggleRow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
