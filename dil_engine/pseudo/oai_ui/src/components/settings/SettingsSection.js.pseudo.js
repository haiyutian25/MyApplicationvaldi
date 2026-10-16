// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=oai_ui/src/components/settings/SettingsSection
// closure: this, d
function {
  this.renderRows(d);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=211B file=oai_ui/src/components/settings/SettingsSection
// closure: this, d, e, a, o, v
function {
  e.beginComponent(a.ValdiUIThemeProvider, o, undefined, undefined);
  e.setViewModelProperty("value", v);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=138B file=oai_ui/src/components/settings/SettingsSection
// closure: this, d, e, a, o, v, r, n
function {
  this.renderTitle(r);
  if (!((undefined !== v))) goto L_35;
  goto L_5d;
  // [栈深重同步 1 -> 0]
  this.renderRows(d);
  this.renderFooter(n, r);
  return;
}

// fn <atom:0>  args=0 vars=9 closure=6 cpool=1 bc=1414B file=oai_ui/src/components/settings/SettingsSection
// locals: i, r, d, n, s, l, p, v, this
// closure: e, a, o, u, m, t
function {
  this = this;
  let v;
  let p;
  let l;
  let s;
  let n;
  let d;
  let r;
  let i;
  i = u.resolveSettingsTheme();
  r = u.resolveSettingsColors();
  if (!((this.viewModel.backgroundColor == null))) goto L_d4;
  this.viewModel.backgroundColor;
  d = r.groupedSurface;
  n = this.viewModel.footerSpans;
  if (!((undefined !== n))) goto L_129;
  s = (n.length > 0);
  l = (undefined !== this.viewModel.title);
  p = a.resolveValdiUITheme();
  if (!((undefined !== this.viewModel.backgroundColor))) goto L_299;
  if (!((i.layout.rowGap > 0))) goto L_299;
  null;
  p;
  null;
  p.colors;
  goto L_29a;
  // [栈深重同步 1 -> 0]
  v = undefined;
  e.beginComponent(m.Column, t, undefined, undefined);
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  e.setViewModelProperty("gap", i.layout.sectionLabelGap);
  if (!((this.viewModel.topMargin == null))) goto L_490;
  this.viewModel.topMargin;
  if (!(l)) goto L_48f;
  goto L_490;
  // [栈深重同步 5 -> 4]
  if (!((this.viewModel.bottomMargin == null))) goto L_52b;
  this.viewModel.bottomMargin;
  if (!(s)) goto L_4e6;
  goto L_52b;
  // [栈深重同步 5 -> 4]
  e.setViewModelProperty("margin", {top: undefined, bottom: i.layout.sectionEmptyFooterAdditionalGap});
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=223B file=oai_ui/src/components/settings/SettingsSection
// closure: e, r, d, this
function {
  e.beginRender(r, undefined);
  e.setAttributeNumber("marginTop", -d);
  e.setAttributeNumber("marginBottom", -d);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=oai_ui/src/components/settings/SettingsSection
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=2 bc=16B file=oai_ui/src/components/settings/SettingsSection
// closure: e, r, d, this
function {
  if (!((d > 0))) goto L_c;
  goto L_f;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=1 bc=924B file=oai_ui/src/components/settings/SettingsSection
// args: t
// locals: o, d, this
// closure: e, r, u, y, i
function {
  this = this;
  let d;
  let o;
  o = u.resolveSettingsTheme();
  d = (o.layout.rowGap / 2);
  e.beginComponent(y.Box, i, undefined, undefined);
  if (!((0 === o.layout.rowGap))) goto L_13c;
  goto L_13d;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("background", undefined);
  e.setViewModelProperty("borderColor", this.viewModel.borderColor);
  e.setViewModelProperty("borderWidth", this.viewModel.borderWidth);
  e.setViewModelProperty("clip", true);
  if (!((d > 0))) goto L_28b;
  goto L_28c;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("margin", undefined);
  if (!((this.viewModel.radius == null))) goto L_346;
  this.viewModel.radius;
  e.setViewModelProperty("radius", o.layout.sectionRadius);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=6 cpool=0 bc=1941B file=oai_ui/src/components/settings/SettingsSection
// args: t
// locals: o, this
// closure: u, e, d, h, n, p
function {
  this = this;
  let o;
  o = u.resolveSettingsTheme();
  if (!((undefined !== this.viewModel.title))) goto L_794;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", o.styles.header);
  e.setAttributeNumber("marginBottom", this.viewModel.titleBottomInset);
  e.setAttributeNumber("paddingLeft", this.viewModel.labelInset);
  e.setAttributeNumber("paddingRight", this.viewModel.labelInset);
  e.beginComponent(h.Text, n, undefined, undefined);
  if (!((undefined === this.viewModel.titleTone))) goto L_34a;
  goto L_34b;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("color", undefined);
  e.setViewModelProperty("font", this.viewModel.titleFont);
  e.setViewModelProperty("lineHeight", this.viewModel.titleLineHeight);
  if (!((this.viewModel.titleLines == null))) goto L_4a1;
  this.viewModel.titleLines;
  e.setViewModelProperty("lines", 0);
  if (!((this.viewModel.titleSize == null))) goto L_55b;
  this.viewModel.titleSize;
  e.setViewModelProperty("size", p.OAITextSize.LabelLarge);
  if (!((undefined === this.viewModel.titleSize))) goto L_616;
  goto L_617;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("typography", undefined);
  if (!((this.viewModel.titleTone == null))) goto L_6d1;
  this.viewModel.titleTone;
  e.setViewModelProperty("tone", h.TextTone.Tertiary);
  e.setViewModelProperty("value", this.viewModel.title);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=5 cpool=0 bc=1037B file=oai_ui/src/components/settings/SettingsSection
// args: t, o
// locals: i, this
// closure: u, e, s, w, l
function {
  this = this;
  let i;
  i = u.resolveSettingsTheme();
  if (!((undefined !== t))) goto L_40c;
  if (!((0 !== t.length))) goto L_40c;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", i.styles.footer);
  e.setAttributeNumber("paddingLeft", this.viewModel.labelInset);
  e.setAttributeNumber("paddingRight", this.viewModel.labelInset);
  e.beginComponent(w.InlineText, l, undefined, undefined);
  e.setViewModelProperty("accessibilityId", this.viewModel.footerAccessibilityId);
  e.setViewModelProperty("color", o.footer);
  e.setViewModelProperty("linkColor", o.link);
  e.setViewModelProperty("typography", i.typography.Footer);
  e.setViewModelProperty("spans", t);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/settings/SettingsSection
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

// fn <atom:0>  args=3 vars=23 closure=0 cpool=5 bc=765B file=oai_ui/src/components/settings/SettingsSection
// args: require, module, exports
// locals: e, t, o, i, r, d, n, s, l, a, p, v, y, m, w, h, u, SettingsSection, <class_fields_init>, SettingsSection#1
function {
  let SettingsSection#1;
  let u;
  let h;
  let w;
  let m;
  let y;
  let v;
  let p;
  let a;
  let l;
  let s;
  let n;
  let d;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SettingsSection = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(["width", "100%"], "X_dub_6V-vNOVVUB");
  o = e.makeComponentPrototype(undefined, "yBBMzaN0kxIF3m43");
  i = e.makeComponentPrototype(["width", "100%"], "vm2iBidUd7uPugAU");
  r = e.makeNodePrototype("layout", undefined, "dwsDXRIXvMWzt9V8");
  d = e.makeNodePrototype("view", undefined, "Yt6nf7oHplyu_KBb");
  n = e.makeComponentPrototype(["accessibilityCategory", "header"], "X1xI-Y4bqOZ0loyf");
  s = e.makeNodePrototype("layout", undefined, "R7oqe_PeyCnSpzf0");
  l = e.makeComponentPrototype(undefined, "RV4wuq-HvTeMwV2T");
  a = require("valdi_ui_theme/src/ValdiUITheme");
  p = require("oai_core/src/OAITokens");
  v = require("valdi_core/src/Component");
  y = require("../Box");
  m = require("../Column");
  w = require("../InlineText");
  h = require("../Text");
  u = require("./SettingsTheme");
  let SettingsSection;
  let <class_fields_init>;
  class SettingsSection extends v.Component { ... }
  <proto:SettingsSection>.onRender = function <atom:0>;
  <proto:SettingsSection>.renderRows = function <atom:0>;
  <proto:SettingsSection>.renderTitle = function <atom:0>;
  <proto:SettingsSection>.renderFooter = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SettingsSection>;
  SettingsSection = function <atom:0>;
  // close_loc <class_fields_init>
  SettingsSection#1 = function <atom:0>;
  exports.SettingsSection = SettingsSection#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/settings/SettingsSection
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
