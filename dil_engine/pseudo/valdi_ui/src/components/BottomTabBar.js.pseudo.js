// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_ui/src/components/BottomTabBar
// args: t
// closure: e
function {
  return (t.value === e);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=321B file=valdi_ui/src/components/BottomTabBar
// args: e
// locals: t
// closure: this
function {
  let t;
  t = this.viewModel.items.find(function <atom:0>);
  if (!((undefined !== t))) goto L_140;
  if (!((true !== t.disabled))) goto L_140;
  if (!((e !== this.viewModel.value))) goto L_140;
  this.viewModel.onChange(e, t);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=84B file=valdi_ui/src/components/BottomTabBar
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
  this.tapHandlers = new Map();
  this.handleNativeSelection = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=85B file=valdi_ui/src/components/BottomTabBar
// closure: o, this, i
function {
  if (!(o)) goto L_2f;
  goto L_54;
  // [栈深重同步 1 -> 0]
  this.renderContent();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=8 cpool=1 bc=1336B file=valdi_ui/src/components/BottomTabBar
// locals: i, o, l, r, this
// closure: S, I, m, g, e, w, t, A
function {
  this = this;
  let r;
  let l;
  let o;
  let i;
  this.validateItems();
  i = S.resolveValdiUITheme();
  this.themedStyles = I(i);
  if (!(m.isNativeIOS())) goto L_176;
  if (!((this.viewModel.items.length > 0))) goto L_176;
  if (!((undefined === this.viewModel.itemStyle))) goto L_176;
  o = (undefined === this.viewModel.selectedItemStyle);
  if (!((this.viewModel.material == null))) goto L_205;
  this.viewModel.material;
  l = g.ControlMaterial.Standard;
  if (!((l === g.ControlMaterial.Glass))) goto L_2be;
  if (!(m.isNativeIOS())) goto L_2be;
  goto L_302;
  // [栈深重同步 1 -> 0]
  r = this.themedStyles.container;
  e.beginComponent(w.MaterialSurface, t, undefined, undefined);
  if (!(o)) goto L_385;
  goto L_3c9;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  e.setViewModelProperty("material", l);
  e.setViewModelProperty("materialTint", this.viewModel.materialTint);
  e.setViewModelProperty("style", A(r, this.viewModel.style));
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=valdi_ui/src/components/BottomTabBar
// closure: this
function {
  this.renderItems();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=408B file=valdi_ui/src/components/BottomTabBar
// locals: this
// closure: e, M, i, f, T
function {
  this = this;
  if (!((false !== this.viewModel.includeBottomInset))) goto L_172;
  e.beginComponent(M.SafeArea, i, undefined, undefined);
  e.setViewModelProperty("edges", f);
  e.setViewModelProperty("style", T.items);
  e.setUnnamedSlot(function <atom:0>);
  goto L_197;
  // [栈深重同步 1 -> 0]
  this.renderItems();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=39B file=valdi_ui/src/components/BottomTabBar
// closure: this, t
function {
  this.renderNativeControl(t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=1 bc=409B file=valdi_ui/src/components/BottomTabBar
// args: t
// locals: this
// closure: e, M, o, f, T
function {
  this = this;
  if (!((false !== this.viewModel.includeBottomInset))) goto L_172;
  e.beginComponent(M.SafeArea, o, undefined, undefined);
  e.setViewModelProperty("edges", f);
  e.setViewModelProperty("style", T.nativeContainer);
  e.setUnnamedSlot(function <atom:0>);
  goto L_198;
  // [栈深重同步 1 -> 0]
  this.renderNativeControl(t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=3839B file=valdi_ui/src/components/BottomTabBar
// args: t
// locals: this
// closure: e, l, T, r, g
function {
  this = this;
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", T.nativeHost);
  e.beginRender(r, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeNumber("minHeight", (t.metrics.navigationItemHeight + t.spacing.medium));
  e.setAttributeFunction("onSelectionChange", this.handleNativeSelection);
  if (!((this.viewModel.selectedIconStyle == null))) goto L_292;
  this.viewModel.selectedIconStyle;
  goto L_2d4;
  if (!((undefined.attributes.color == null))) goto L_31c;
  undefined.attributes.color;
  e.setAttributeString("selectedTabColor", t.colors.accent);
  if (!((this.viewModel.selectedLabelStyle == null))) goto L_394;
  this.viewModel.selectedLabelStyle;
  goto L_3d6;
  if (!((undefined.attributes.color == null))) goto L_41e;
  undefined.attributes.color;
  e.setAttributeString("selectedTabLabelColor", t.colors.accent);
  if (!((this.viewModel.selectedLabelStyle == null))) goto L_496;
  this.viewModel.selectedLabelStyle;
  goto L_4d8;
  if (!((undefined.attributes.font == null))) goto L_520;
  undefined.attributes.font;
  e.setAttributeString("selectedTabLabelFont", t.typography.caption);
  e.setAttributeString("selectedValue", this.viewModel.value);
  e.setAttributeStyle("style", T.nativeControl);
  if (!((this.viewModel.badgeStyle == null))) goto L_659;
  this.viewModel.badgeStyle;
  goto L_69b;
  if (!((undefined.attributes.backgroundColor == null))) goto L_6e3;
  undefined.attributes.backgroundColor;
  e.setAttributeString("tabBadgeColor", t.colors.accent);
  if (!((this.viewModel.badgeLabelStyle == null))) goto L_75b;
  this.viewModel.badgeLabelStyle;
  goto L_79d;
  if (!((undefined.attributes.font == null))) goto L_7e5;
  undefined.attributes.font;
  e.setAttributeString("tabBadgeFont", t.typography.caption);
  if (!((this.viewModel.badgeLabelStyle == null))) goto L_85d;
  this.viewModel.badgeLabelStyle;
  goto L_89f;
  if (!((undefined.attributes.color == null))) goto L_8e7;
  undefined.attributes.color;
  e.setAttributeString("tabBadgeTextColor", t.colors.onAccent);
  e.setAttribute("tabGlass", (this.viewModel.material === g.ControlMaterial.Glass));
  e.setAttribute("tabItems", this.viewModel.items);
  if (!((this.viewModel.labelStyle == null))) goto L_a85;
  this.viewModel.labelStyle;
  goto L_ac7;
  if (!((undefined.attributes.font == null))) goto L_b0f;
  undefined.attributes.font;
  e.setAttributeString("tabLabelFont", t.typography.caption);
  e.setAttributeString("tabMaterialTint", this.viewModel.materialTint);
  if (!((this.viewModel.style == null))) goto L_bf7;
  this.viewModel.style;
  goto L_c39;
  if (!((undefined.attributes.backgroundColor == null))) goto L_c81;
  undefined.attributes.backgroundColor;
  e.setAttributeString("tabSurfaceColor", t.colors.surface);
  if (!((this.viewModel.iconStyle == null))) goto L_cf9;
  this.viewModel.iconStyle;
  goto L_d3b;
  if (!((undefined.attributes.color == null))) goto L_d83;
  undefined.attributes.color;
  e.setAttributeString("unselectedTabColor", t.colors.mutedText);
  if (!((this.viewModel.labelStyle == null))) goto L_dfb;
  this.viewModel.labelStyle;
  goto L_e3d;
  if (!((undefined.attributes.color == null))) goto L_e85;
  undefined.attributes.color;
  e.setAttributeString("unselectedTabLabelColor", t.colors.mutedText);
  e.endRender();
  this.renderAccessibilityTargets();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=7 closure=4 cpool=0 bc=1176B file=valdi_ui/src/components/BottomTabBar
// locals: t, i, o, l, r, a, this
// closure: h, e, s, T
function {
  this = this;
  let o;
  let i;
  let t;
  t = this.viewModel.items.length;
  i = ((100 / t) + "%");
  o = h.Device.isRTL();
  let l;
  l = 0;
  if (!((l < t))) goto L_497;
  let a;
  let r;
  r = this.viewModel.items[l];
  if (!(o)) goto L_119;
  goto L_11c;
  // [栈深重同步 1 -> 0]
  a = l;
  e.beginRender(s, r.value);
  e.setAttributeString("accessibilityId", this.itemAccessibilityId(r));
  e.setAttributeString("accessibilityLabel", this.itemAccessibilityLabel(r));
  e.setAttribute("accessibilityStateDisabled", (true === r.disabled));
  e.setAttribute("accessibilityStateSelected", (r.value === this.viewModel.value));
  e.setAttributeString("left", (((100 * a) / t) + "%"));
  if (!((true === r.disabled))) goto L_395;
  goto L_3df;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", this.tapHandler(r.value));
  e.setAttributeStyle("style", T.accessibilityTarget);
  e.setAttributeString("width", i);
  e.endRender();
  l = <l_new>;
  (l++);
  goto L_ad;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=340B file=valdi_ui/src/components/BottomTabBar
// locals: e, t, this
function {
  this = this;
  let e;
  e = new Set();
  let t;
  for (const t of this.viewModel.items) {
    if (!(e.has(t.value))) goto L_fe;
    throw new Error("BottomTabBar item values must be unique: ".concat(t.value));
    e.add(t.value);
  }
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=124B file=valdi_ui/src/components/BottomTabBar
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.viewModel.items) {
    this.renderItem(e);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=0 bc=720B file=valdi_ui/src/components/BottomTabBar
// closure: e, n, T, d, i, l, r, t, this, c, s
function {
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", T.iconContainer);
  e.beginRender(d, undefined);
  if (!(i)) goto L_fd;
  goto L_100;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", r);
  e.setAttributeString("value", t.icon);
  e.endRender();
  this.renderBadge(t);
  e.endRender();
  e.beginRender(c, undefined);
  if (!(i)) goto L_250;
  goto L_253;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", s);
  e.setAttributeString("value", t.label);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=7 closure=8 cpool=1 bc=1641B file=valdi_ui/src/components/BottomTabBar
// args: t
// locals: i, o, l, r, s, this
// closure: e, n, T, d, c, A, p, a
function {
  this = this;
  let s;
  let r;
  let l;
  let o;
  let i;
  i = (true === t.disabled);
  o = (t.value === this.viewModel.value);
  l = this.themedStyles;
  if (!(o)) goto L_137;
  goto L_1a3;
  // [栈深重同步 1 -> 0]
  r = A(l.icon, this.viewModel.iconStyle);
  if (!(o)) goto L_217;
  goto L_283;
  // [栈深重同步 1 -> 0]
  s = A(l.label, this.viewModel.labelStyle);
  e.beginComponent(p.Pressable, a, t.value, undefined);
  e.setViewModelProperty("accessibilityId", this.itemAccessibilityId(t));
  e.setViewModelProperty("accessibilityLabel", this.itemAccessibilityLabel(t));
  e.setViewModelProperty("disabled", t.disabled);
  e.setViewModelProperty("disabledStyle", l.disabledItem);
  e.setViewModelProperty("onPress", this.tapHandler(t.value));
  e.setViewModelProperty("selected", o);
  if (!((this.viewModel.selectedItemStyle == null))) goto L_57a;
  this.viewModel.selectedItemStyle;
  e.setViewModelProperty("selectedStyle", l.selectedItem);
  e.setViewModelProperty("style", A(l.item, this.viewModel.itemStyle));
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=691B file=valdi_ui/src/components/BottomTabBar
// args: t
// locals: this
// closure: e, b, A, y
function {
  this = this;
  if (!((undefined !== t.badge))) goto L_2b2;
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", A(this.themedStyles.badge, this.viewModel.badgeStyle));
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", A(this.themedStyles.badgeLabel, this.viewModel.badgeLabelStyle));
  e.setAttributeString("value", "".concat(t.badge));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=219B file=valdi_ui/src/components/BottomTabBar
// args: e
// locals: this
function {
  this = this;
  if (!((undefined === this.viewModel.accessibilityId))) goto L_4b;
  return undefined;
  return "".concat(this.viewModel.accessibilityId, ".", e.value);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=199B file=valdi_ui/src/components/BottomTabBar
// args: e
// locals: t
function {
  let t;
  if (!((e.accessibilityLabel == null))) goto L_4c;
  e.accessibilityLabel;
  t = e.label;
  if (!((undefined === e.badge))) goto L_77;
  return t;
  return "".concat(t, ", ", e.badge);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_ui/src/components/BottomTabBar
// args: t
// closure: e
function {
  return (t.value === e);
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=308B file=valdi_ui/src/components/BottomTabBar
// locals: t
// closure: e, this
function {
  let t;
  if (!((e === this.viewModel.value))) goto L_4b;
  return;
  t = this.viewModel.items.find(function <atom:0>);
  if (!((undefined !== t))) goto L_133;
  if (!((true !== t.disabled))) goto L_133;
  this.viewModel.onChange(e, t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=177B file=valdi_ui/src/components/BottomTabBar
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.tapHandlers.get(e);
  if (!((undefined === t))) goto L_ac;
  t = function <atom:0>;
  function <atom:0>;
  this.tapHandlers.set(e, t);
  return t;
}

// fn A  args=2 vars=2 closure=1 cpool=0 bc=82B file=valdi_ui/src/components/BottomTabBar
// args: e, t
// closure: u
function {
  if (!((undefined === t))) goto L_7;
  return e;
  return u.Style.cachingMerge(e, t);
}

// fn I  args=1 vars=2 closure=3 cpool=0 bc=3014B file=valdi_ui/src/components/BottomTabBar
// args: e
// locals: t
// closure: C, u, T
function {
  let t;
  t = C.get(e);
  if (((undefined !== t))) goto L_bc1;
  t = {badge: u.Style.merge(T.badge, new u.Style({backgroundColor: e.colors.accent, borderRadius: (e.metrics.badgeSize / 2), height: e.metrics.badgeSize, minWidth: e.metrics.badgeSize})), badgeLabel: new u.Style({color: e.colors.onAccent, font: e.typography.caption}), container: u.Style.merge(T.container, new u.Style({backgroundColor: e.colors.surface, borderColor: e.colors.border})), disabledIcon: new u.Style({color: e.colors.onDisabled, font: e.typography.heading}), disabledItem: new u.Style({backgroundColor: e.colors.disabled, borderRadius: e.shape.controlRadius}), disabledLabel: new u.Style({color: e.colors.onDisabled, font: e.typography.caption}), glassContainer: u.Style.merge(T.container, new u.Style({borderColor: e.colors.border})), icon: new u.Style({color: e.colors.mutedText, font: e.typography.heading}), item: u.Style.merge(T.item, new u.Style({minHeight: e.metrics.navigationItemHeight})), label: new u.Style({color: e.colors.mutedText, font: e.typography.caption}), selectedIcon: new u.Style({color: e.colors.accent, font: e.typography.heading}), selectedItem: new u.Style({backgroundColor: e.colors.mutedSurface, borderRadius: e.shape.controlRadius}), selectedLabel: new u.Style({color: e.colors.accent, font: e.typography.caption})};
  {badge: u.Style.merge(T.badge, new u.Style({backgroundColor: e.colors.accent, borderRadius: (e.metrics.badgeSize / 2), height: e.metrics.badgeSize, minWidth: e.metrics.badgeSize})), badgeLabel: new u.Style({color: e.colors.onAccent, font: e.typography.caption}), container: u.Style.merge(T.container, new u.Style({backgroundColor: e.colors.surface, borderColor: e.colors.border})), disabledIcon: new u.Style({color: e.colors.onDisabled, font: e.typography.heading}), disabledItem: new u.Style({backgroundColor: e.colors.disabled, borderRadius: e.shape.controlRadius}), disabledLabel: new u.Style({color: e.colors.onDisabled, font: e.typography.caption}), glassContainer: u.Style.merge(T.container, new u.Style({borderColor: e.colors.border})), icon: new u.Style({color: e.colors.mutedText, font: e.typography.heading}), item: u.Style.merge(T.item, new u.Style({minHeight: e.metrics.navigationItemHeight})), label: new u.Style({color: e.colors.mutedText, font: e.typography.caption}), selectedIcon: new u.Style({color: e.colors.accent, font: e.typography.heading}), selectedItem: new u.Style({backgroundColor: e.colors.mutedSurface, borderRadius: e.shape.controlRadius}), selectedLabel: new u.Style({color: e.colors.accent, font: e.typography.caption})};
  C.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=33 closure=0 cpool=15 bc=2037B file=valdi_ui/src/components/BottomTabBar
// args: require, module, exports
// locals: e, t, i, o, l, r, s, a, n, d, c, b, y, v, h, u, g, m, S, w, p, M, BottomTabBar, <class_fields_init>, BottomTabBar#1, C, f, A, I, T
function {
  A = function A;
  I = function I;
  let T;
  let f;
  let C;
  let BottomTabBar#1;
  let M;
  let p;
  let w;
  let S;
  let m;
  let g;
  let u;
  let h;
  let v;
  let y;
  let b;
  let c;
  let d;
  let n;
  let a;
  let s;
  let r;
  let l;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BottomTabBar = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "jFqHixQCjNR14J9M");
  i = e.makeComponentPrototype(undefined, "avyN6SvG18z4prhX");
  o = e.makeComponentPrototype(undefined, "UEslo0dSnffqYY25");
  l = e.makeNodePrototype("view", undefined, "brXCLxvnmIqThNB7");
  r = e.makeNodePrototype("custom-view", ["iosClass", "ValdiNativeTabBar"], "GENQWaNOTehh1X4E");
  s = e.makeNodePrototype("view", undefined, "5x1Ff3dgsQI7tYST");
  a = e.makeComponentPrototype(undefined, "3CHTVtHxqYDxIDgX");
  n = e.makeNodePrototype("view", undefined, "cSYIZ3gh8TlinRz3");
  d = e.makeNodePrototype("label", undefined, "0EPzV7raIjUkjUiS");
  c = e.makeNodePrototype("label", undefined, "uZ8m06cewY0RYX-h");
  b = e.makeNodePrototype("view", undefined, "FdSDIEVFmNIZLqgZ");
  y = e.makeNodePrototype("label", undefined, "VdKoU9p56l72FTU1");
  v = require("valdi_core/src/Component");
  h = require("valdi_core/src/Device");
  u = require("valdi_core/src/Style");
  g = require("../ControlMaterial");
  m = require("../Platform");
  S = require("valdi_ui_theme/src/ValdiUITheme");
  w = require("./MaterialSurface");
  p = require("./Pressable");
  M = require("./SafeArea");
  let BottomTabBar;
  let <class_fields_init>;
  class BottomTabBar extends v.Component { ... }
  <proto:BottomTabBar>.onRender = function <atom:0>;
  <proto:BottomTabBar>.renderContent = function <atom:0>;
  <proto:BottomTabBar>.renderNativeTabBar = function <atom:0>;
  <proto:BottomTabBar>.renderNativeControl = function <atom:0>;
  <proto:BottomTabBar>.renderAccessibilityTargets = function <atom:0>;
  <proto:BottomTabBar>.validateItems = function <atom:0>;
  <proto:BottomTabBar>.renderItems = function <atom:0>;
  <proto:BottomTabBar>.renderItem = function <atom:0>;
  <proto:BottomTabBar>.renderBadge = function <atom:0>;
  <proto:BottomTabBar>.itemAccessibilityId = function <atom:0>;
  <proto:BottomTabBar>.itemAccessibilityLabel = function <atom:0>;
  <proto:BottomTabBar>.tapHandler = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BottomTabBar>;
  BottomTabBar = function <atom:0>;
  // close_loc <class_fields_init>
  BottomTabBar#1 = function <atom:0>;
  exports.BottomTabBar = BottomTabBar#1;
  C = new WeakMap();
  f = [M.SafeAreaEdge.Bottom, M.SafeAreaEdge.Left, M.SafeAreaEdge.Right];
  T = {badge: new u.Style({alignItems: "center", justifyContent: "center", paddingLeft: 4, paddingRight: 4, position: "absolute", right: -10, top: -6}), container: new u.Style({alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%"}), iconContainer: new u.Style({alignItems: "center", height: 24, justifyContent: "center", overflow: "visible", position: "relative", width: 30}), item: new u.Style({alignItems: "center", flexBasis: 0, flexGrow: 1, gap: 2, justifyContent: "center", minHeight: 52}), items: new u.Style({alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%"}), nativeContainer: new u.Style({width: "100%"}), nativeControl: new u.Style({accessibilityNavigation: "ignored", width: "100%"}), nativeHost: new u.Style({position: "relative", width: "100%"}), accessibilityTarget: new u.Style({accessibilityCategory: "button", accessibilityNavigation: "leaf", height: "100%", position: "absolute", top: 0, touchEnabled: false})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/BottomTabBar
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
