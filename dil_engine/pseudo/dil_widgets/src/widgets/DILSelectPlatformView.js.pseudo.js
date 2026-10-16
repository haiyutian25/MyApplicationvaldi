// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=720B file=dil_widgets/src/widgets/DILSelectPlatformView
// locals: e, t, this
// closure: c, u
function {
  this = this;
  let t;
  let e;
  if (!(c.Device.isDesktop())) goto L_c4;
  if (!(!c.Device.isWeb())) goto L_c4;
  this.renderDesktopView();
  return;
  e = this.viewModel.dropdownIconType;
  if (!(c.Device.isIOS())) goto L_1da;
  if ((("dropdown" === e))) goto L_1da;
  if (!((undefined === e))) goto L_1da;
  if ((!this.viewModel.legacy)) goto L_1da;
  t = u.isNativeIOS();
  if (!(!this.viewModel.legacy)) goto L_26b;
  if ((c.Device.isWeb())) goto L_272;
  if (!(t)) goto L_2a8;
  if (!((e == null))) goto L_2a3;
  e;
  goto L_2cf;
  // [栈深重同步 1 -> 0]
  this.renderPolyglotView(false);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=584B file=dil_widgets/src/widgets/DILSelectPlatformView
// closure: e, o, g, r, l, v, this
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", g.dropdownIcon);
  if (!(("dropdown" === r))) goto L_d5;
  goto L_d7;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("height", 16);
  if (!(("dropdown" === r))) goto L_138;
  goto L_13d;
  // [栈深重同步 5 -> 4]
  e.setAttribute("src", v.resolveIconAsset("chevron-down"));
  if (!(this.viewModel.disabled)) goto L_1b9;
  goto L_1be;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("tint", "color-text-secondary");
  if (!(("dropdown" === r))) goto L_21a;
  goto L_21c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("width", 16);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=6 closure=10 cpool=1 bc=3159B file=dil_widgets/src/widgets/DILSelectPlatformView
// args: r
// locals: s, l, d, a, this
// closure: e, o, g, v, h, c, t, i, n, w
function {
  this = this;
  let a;
  let d;
  let l;
  let s;
  s = this.viewModel.size;
  l = h.resolveDILSelectControlMetrics(s);
  if (!(c.Device.isWeb())) goto L_10e;
  d = !this.viewModel.legacy;
  if (!(this.viewModel.legacy)) goto L_19d;
  a = (undefined === this.viewModel.dropdownIconType);
  e.beginRender(t, undefined);
  if (!(d)) goto L_239;
  goto L_23a;
  // [栈深重同步 3 -> 2]
  e.setAttributeRef(undefined);
  e.setAttributeStyle("style", g.dropdownRoot);
  e.setAttributes(this.viewModel.attributes);
  if (!(d)) goto L_330;
  goto L_335;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityCategory", "auto");
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  if (!(d)) goto L_3db;
  goto L_3e0;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "passthrough");
  if (!(d)) goto L_458;
  goto L_459;
  // [栈深重同步 4 -> 3]
  e.setAttribute("accessibilityStateExpanded", undefined);
  e.setAttribute("accessibilityStateDisabled", this.viewModel.disabled);
  if (!(d)) goto L_549;
  if (!(this.viewModel.webMenuOpen)) goto L_549;
  goto L_5ae;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", this.viewModel.attributes.backgroundColor);
  if (!(d)) goto L_5e7;
  goto L_5e8;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("cursor", undefined);
  e.setAttributeNumber("gap", l.gap);
  e.setAttributeNumber("minHeight", this.viewModel.height);
  if (!(d)) goto L_76c;
  if (!(!this.viewModel.disabled)) goto L_76c;
  goto L_76d;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", undefined);
  if (!(a)) goto L_806;
  goto L_829;
  // [栈深重同步 4 -> 3]
  e.setAttribute("paddingLeft", this.horizontalPadding);
  if (!(a)) goto L_8c2;
  goto L_8e5;
  // [栈深重同步 4 -> 3]
  e.setAttribute("paddingRight", this.horizontalPadding);
  if (!(this.viewModel.block)) goto L_95f;
  goto L_960;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", undefined);
  if (!(!d)) goto L_994;
  this.renderPolyglotView(true);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", g.dropdownLabel);
  if (!(this.viewModel.disabled)) goto L_a88;
  goto L_a8d;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", "color-text-prose");
  if (!(this.viewModel.block)) goto L_b03;
  goto L_b04;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexGrow", undefined);
  e.setAttributeString("font", n.dynamicMediumSystemFontForSize(w.resolveDILControlFontSize(s, "md")));
  e.setAttributeString("value", this.viewModel.label);
  e.endRender();
  if (!(("none" !== r))) goto L_c2e;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=0 bc=2694B file=dil_widgets/src/widgets/DILSelectPlatformView
// args: t
// locals: i, o, this
// closure: c, e, r, g
function {
  this = this;
  let o;
  let i;
  if (!(t)) goto L_e;
  goto L_51;
  // [栈深重同步 1 -> 0]
  i = this.viewModel.attributes;
  o = c.Device.isWeb();
  e.beginRender(r, undefined);
  if (!(t)) goto L_119;
  goto L_13d;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", g.nativeRoot);
  e.setAttributes(i);
  if (!(o)) goto L_1a1;
  goto L_1a6;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityCategory", "button");
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  if (!(o)) goto L_24f;
  goto L_250;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", undefined);
  e.setAttribute("accessibilityStateDisabled", this.viewModel.disabled);
  e.setAttribute("androidClass", "com.openai.valdi.dil.widgets.DILSelectView");
  e.setAttribute("iosClass", "ValdiDILSelectView");
  e.setAttribute("webClass", "DILSelectView");
  e.setAttributeNumber("listMaxWidth", this.viewModel.listMaxWidth);
  e.setAttributeNumber("listMinWidth", this.viewModel.listMinWidth);
  e.setAttributeNumber("listWidth", this.viewModel.listWidth);
  if (!(t)) goto L_4d9;
  goto L_51c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("minHeight", this.viewModel.height);
  e.setAttributeFunction("onChange", this.viewModel.onChange);
  e.setAttributeString("optionIndicatorPosition", this.viewModel.optionIndicatorPosition);
  e.setAttribute("options", this.viewModel.options);
  e.setAttributeString("placeholder", this.viewModel.placeholder);
  e.setAttributeString("selectedLabel", this.viewModel.label);
  e.setAttributeString("selectedValue", this.viewModel.selectedValue);
  e.setAttribute("selectDisabled", this.viewModel.disabled);
  if (!(t)) goto L_863;
  goto L_885;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("selectFieldBackgroundColor", this.fieldBackgroundColor);
  e.setAttributeString("selectSize", this.viewModel.size);
  e.setAttributeString("selectVariant", this.viewModel.variant);
  if (!(!t)) goto L_9db;
  e.setAttribute("showsDropdownIcon", this.viewModel.showsDropdownIcon);
  if ((t)) goto L_a50;
  if (!(this.viewModel.block)) goto L_a59;
  goto L_a5a;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", undefined);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=2058B file=dil_widgets/src/widgets/DILSelectPlatformView
// locals: this
// closure: e, s, g, l, d
function {
  this = this;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", g.desktopRoot);
  e.setAttributes(this.viewModel.attributes);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("accessibilityStateDisabled", this.viewModel.disabled);
  e.setAttributeNumber("minHeight", this.viewModel.height);
  if (!(this.viewModel.disabled)) goto L_2ab;
  goto L_2ee;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", this.viewModel.onDesktopTap);
  if (!(this.viewModel.legacy)) goto L_3c6;
  goto L_3e8;
  // [栈深重同步 4 -> 3]
  e.setAttribute("paddingLeft", this.horizontalPadding);
  if (!(this.viewModel.legacy)) goto L_4c0;
  goto L_4e2;
  // [栈深重同步 4 -> 3]
  e.setAttribute("paddingRight", this.horizontalPadding);
  if (!(this.viewModel.block)) goto L_55b;
  goto L_55c;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", undefined);
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", g.desktopLabel);
  if (!(this.viewModel.disabled)) goto L_652;
  goto L_657;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", "color-text-prose");
  e.setAttributeString("value", this.viewModel.label);
  e.endRender();
  if (!(this.viewModel.showsDropdownIcon)) goto L_7e1;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", g.desktopChevron);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=188B file=dil_widgets/src/widgets/DILSelectPlatformView
// locals: this
function {
  this = this;
  if (!(this.viewModel.legacy)) goto L_4d;
  return "alpha-05";
  if (!((this.viewModel.attributes.backgroundColor == null))) goto L_bb;
  this.viewModel.attributes.backgroundColor;
  return "transparent";
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=303B file=dil_widgets/src/widgets/DILSelectPlatformView
// locals: e, this
// closure: h
function {
  this = this;
  let e;
  e = h.resolveDILSelectControlMetrics(this.viewModel.size).gutter;
  if (!(("100%" === this.viewModel.attributes.borderRadius))) goto L_12b;
  return Math.round((1.33 * e));
  return e;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/DILSelectPlatformView
// locals: this.active_func, new.target, arguments, this
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
  return this;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=8 bc=1478B file=dil_widgets/src/widgets/DILSelectPlatformView
// args: require, module, exports
// locals: e, t, i, o, r, s, l, d, n, a, c, b, u, v, h, w, DILSelectPlatformView, <class_fields_init>, DILSelectPlatformView#1, g
function {
  let g;
  let DILSelectPlatformView#1;
  let w;
  let h;
  let v;
  let u;
  let b;
  let c;
  let a;
  let n;
  let d;
  let l;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSelectPlatformView = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "fyQYTK4n3XLHXqMm");
  i = e.makeNodePrototype("label", undefined, "8qF4FqQeZGlrizLv");
  o = e.makeNodePrototype("image", undefined, "bIdnEV1VGBS3348n");
  r = e.makeNodePrototype("custom-view", undefined, "l1uijPp_KiNKc-7N");
  s = e.makeNodePrototype("view", undefined, "8rfZswx0aPoeeFS0");
  l = e.makeNodePrototype("label", undefined, "4sYmgMh8H9HFH5Cq");
  d = e.makeNodePrototype("label", ["color", "color-text-secondary", "value", "v"], "MEDhl_EmQ1OoeCL7");
  n = require("dil_core/src/typography/DILDynamicFont");
  a = require("valdi_core/src/Component");
  c = require("valdi_core/src/Device");
  b = require("valdi_core/src/Style");
  u = require("valdi_ui/src/Platform");
  v = require("./Icon");
  h = require("./DILSelectControlMetrics");
  w = require("./DILWidgetSizes");
  let DILSelectPlatformView;
  let <class_fields_init>;
  class DILSelectPlatformView extends a.Component { ... }
  <proto:DILSelectPlatformView>.onRender = function <atom:0>;
  <proto:DILSelectPlatformView>.renderDropdownView = function <atom:0>;
  <proto:DILSelectPlatformView>.renderPolyglotView = function <atom:0>;
  <proto:DILSelectPlatformView>.renderDesktopView = function <atom:0>;
  <proto:DILSelectPlatformView>.fieldBackgroundColor = function <atom:0>;
  <proto:DILSelectPlatformView>.horizontalPadding = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSelectPlatformView>;
  DILSelectPlatformView = function <atom:0>;
  // close_loc <class_fields_init>
  DILSelectPlatformView#1 = function <atom:0>;
  exports.DILSelectPlatformView = DILSelectPlatformView#1;
  g = {desktopChevron: new b.Style({accessibilityNavigation: "ignored", font: n.dynamicSystemFontForSize(12)}), desktopLabel: new b.Style({accessibilityNavigation: "ignored", font: n.dynamicSystemFontForSize(14)}), desktopRoot: new b.Style({accessibilityCategory: "button", alignItems: "center", flexDirection: "row", flexShrink: 0, gap: 6}), dropdownIcon: new b.Style({accessibilityNavigation: "ignored", flexShrink: 0, objectFit: "contain", opacity: 0.75, touchEnabled: false}), dropdownLabel: new b.Style({accessibilityNavigation: "ignored", flexShrink: 1, touchEnabled: false}), dropdownRoot: new b.Style({alignItems: "center", flexDirection: "row", flexShrink: 0, position: "relative"}), iosNativeInteractionOverlay: new b.Style({height: "100%", left: 0, position: "absolute", selectChevronColor: "alpha-0", selectDisabledColor: "alpha-0", selectPopupBackgroundColor: "color-surface-elevated", selectTextColor: "alpha-0", top: 0}), nativeRoot: new b.Style({flexShrink: 0, selectChevronColor: "color-text-secondary", selectDisabledColor: "color-text-tertiary", selectPopupBackgroundColor: "color-surface-elevated", selectTextColor: "color-text-prose"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DILSelectPlatformView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
