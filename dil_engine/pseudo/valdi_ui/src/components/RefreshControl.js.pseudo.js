// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=428B file=valdi_ui/src/components/RefreshControl
// locals: e
// closure: this, h
function {
  let e;
  this.viewModel.onRefresh();
  if (!(h.supportsNativeAndroidRefreshControl())) goto L_e3;
  if (!((this.viewModel.scrollViewHandler == null))) goto L_c0;
  this.viewModel.scrollViewHandler;
  goto L_e4;
  goto L_e4;
  // [栈深重同步 1 -> 0]
  if (!((undefined == null))) goto L_131;
  undefined;
  e = this.nativeRefresh.single();
  if (!((e == null))) goto L_13d;
  e;
  goto L_1ab;
  undefined.setAttribute("refreshing", this.viewModel.refreshing);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=115B file=valdi_ui/src/components/RefreshControl
// locals: this, this.active_func, new.target, arguments
// closure: h, <class_fields_init>, n
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
  this.nativeRefresh = new n.ElementRef();
  this.handleRefresh = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=82B file=valdi_ui/src/components/RefreshControl
// closure: this, o, e
function {
  this.renderNativeRefresh(o);
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=7 cpool=1 bc=1709B file=valdi_ui/src/components/RefreshControl
// locals: i, o, this
// closure: e, d, h, t, c, a, r
function {
  this = this;
  let o;
  let i;
  i = d.resolveValdiUITheme().colors;
  o = i.accent;
  if (!(h.supportsNativeAndroidRefreshControl())) goto L_469;
  e.beginRender(t, undefined);
  if (!((this.viewModel.scrollViewHandler == null))) goto L_158;
  this.viewModel.scrollViewHandler;
  e.setAttributeRef(this.nativeRefresh);
  if (!((this.viewModel.scrollViewHandler == null))) goto L_1d0;
  this.viewModel.scrollViewHandler;
  goto L_1f1;
  e.setAttributeFunction("onLayout", undefined.onLayout);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeFunction("onRefresh", this.handleRefresh);
  e.setAttribute("refreshing", this.viewModel.refreshing);
  e.setAttributeString("refreshTint", i.mutedText);
  e.setAttributeString("refreshContainerColor", i.groupedSurface);
  e.setAttributeStyle("style", c.scroll);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
  e.beginComponent(a.ScrollView, r, undefined, undefined);
  e.setViewModelProperty("scrollViewHandler", this.viewModel.scrollViewHandler);
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  e.setViewModelProperty("allowContentOverflow", this.viewModel.allowContentOverflow);
  e.setViewModelProperty("style", c.scroll);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=568B file=valdi_ui/src/components/RefreshControl
// args: t
// locals: this
// closure: h, s, e, i, c
function {
  this = this;
  if (!(h.isNativeIOS())) goto L_237;
  if (!(s.isVersionAtLeast(43))) goto L_237;
  e.beginRender(i, undefined);
  e.setAttributeRef(this.nativeRefresh);
  e.setAttributeFunction("onRefresh", this.handleRefresh);
  e.setAttribute("refreshing", this.viewModel.refreshing);
  e.setAttributeString("refreshTint", t);
  e.setAttributeStyle("style", c.host);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=3 bc=629B file=valdi_ui/src/components/RefreshControl
// args: require, module, exports
// locals: e, t, r, i, o, s, n, l, d, h, a, RefreshControl, <class_fields_init>, RefreshControl#1, c
function {
  let c;
  let RefreshControl#1;
  let a;
  let h;
  let d;
  let l;
  let n;
  let s;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RefreshControl = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["androidClass", "com.openai.valdi.ui.ValdiRefreshControl"], "Pw9NjozVtSOwZS-l");
  r = e.makeComponentPrototype(undefined, "UGPesA5piV7Dirxe");
  i = e.makeNodePrototype("custom-view", ["iosClass", "ValdiNativeRefreshControl"], "KgBbzOmwcpEfZv-P");
  o = require("valdi_core/src/Component");
  s = require("valdi_core/src/CompilerIntrinsics");
  n = require("valdi_core/src/ElementRef");
  l = require("valdi_core/src/Style");
  d = require("valdi_ui_theme/src/ValdiUITheme");
  h = require("../Platform");
  a = require("./ScrollView");
  let RefreshControl;
  let <class_fields_init>;
  class RefreshControl extends o.Component { ... }
  <proto:RefreshControl>.onRender = function <atom:0>;
  <proto:RefreshControl>.renderNativeRefresh = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:RefreshControl>;
  RefreshControl = function <atom:0>;
  // close_loc <class_fields_init>
  RefreshControl#1 = function <atom:0>;
  exports.RefreshControl = RefreshControl#1;
  c = {host: new l.Style({height: 1, position: "absolute", width: 1}), scroll: new l.Style({bouncesVerticalWithSmallContent: true, flexGrow: 1, flexShrink: 1, height: "100%", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/RefreshControl
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
