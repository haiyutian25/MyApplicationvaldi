// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=oai_ui/src/components/settings/SettingsList
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=833B file=oai_ui/src/components/settings/SettingsList
// closure: e, this, l, i, s
function {
  e.beginComponent(l.Column, i, undefined, undefined);
  if (!((this.viewModel.sectionGap == null))) goto L_107;
  this.viewModel.sectionGap;
  e.setViewModelProperty("gap", s.layout.sectionGap);
  if (!((this.viewModel.horizontalInset == null))) goto L_1c2;
  this.viewModel.horizontalInset;
  if (!((this.viewModel.verticalInset == null))) goto L_254;
  this.viewModel.verticalInset;
  if (!((this.viewModel.bottomInset == null))) goto L_2e6;
  this.viewModel.bottomInset;
  e.setViewModelProperty("padding", {x: s.layout.listHorizontalInset, y: s.layout.listVerticalInset, bottom: s.layout.listBottomInset});
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=8 cpool=1 bc=1070B file=oai_ui/src/components/settings/SettingsList
// locals: s, n, c, this
// closure: e, l, i, d, t, a, r, o
function {
  this = this;
  let c;
  let n;
  let s;
  s = d.resolveSettingsTheme();
  n = d.resolveSettingsColors();
  if (!((this.viewModel.backgroundColor == null))) goto L_c3;
  this.viewModel.backgroundColor;
  c = n.canvas;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.viewModel.scrollRef);
  e.setAttributeStyle("style", a.scroll);
  e.setAttributeFunction("onLayout", this.viewModel.onLayout);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("backgroundColor", c);
  e.setAttribute("showsVerticalScrollIndicator", false);
  e.beginComponent(r.SafeArea, o, undefined, undefined);
  if (!((this.viewModel.safeAreaEdges == null))) goto L_3b0;
  this.viewModel.safeAreaEdges;
  e.setViewModelProperty("edges", []);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/settings/SettingsList
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

// fn <atom:0>  args=3 vars=16 closure=0 cpool=2 bc=508B file=oai_ui/src/components/settings/SettingsList
// args: require, module, exports
// locals: e, t, o, i, s, n, r, l, d, SettingsList, <class_fields_init>, SettingsList#1, a
function {
  let a;
  let SettingsList#1;
  let d;
  let l;
  let r;
  let n;
  let s;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SettingsList = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("scroll", undefined, "YuCsnsfogsWruiOo");
  o = e.makeComponentPrototype(undefined, "7iOdWO4zaca6lkjn");
  i = e.makeComponentPrototype(["width", "100%"], "L92G12l_ioPsNJet");
  s = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  r = require("valdi_ui/src/components/SafeArea");
  l = require("../Column");
  d = require("./SettingsTheme");
  let SettingsList;
  let <class_fields_init>;
  class SettingsList extends s.Component { ... }
  <proto:SettingsList>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SettingsList>;
  SettingsList = function <atom:0>;
  // close_loc <class_fields_init>
  SettingsList#1 = function <atom:0>;
  exports.SettingsList = SettingsList#1;
  a = {scroll: new n.Style({bouncesVerticalWithSmallContent: true, flexGrow: 1, flexShrink: 1, height: 1, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/settings/SettingsList
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
