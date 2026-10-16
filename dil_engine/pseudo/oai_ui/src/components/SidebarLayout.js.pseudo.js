// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=152B file=oai_ui/src/components/SidebarLayout
// args: e
function {
  return (Math.abs(e.deltaX) > Math.abs(e.deltaY));
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=155B file=oai_ui/src/components/SidebarLayout
// closure: this
function {
  if ((this.viewModel.isOpen)) goto L_9a;
  if (!((this.viewModel.onOpen == null))) goto L_97;
  this.viewModel.onOpen;
  this.viewModel;
  goto L_9a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=146B file=oai_ui/src/components/SidebarLayout
// closure: this
function {
  if (!(this.viewModel.isOpen)) goto L_91;
  this.viewModel.onDismiss();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=231B file=oai_ui/src/components/SidebarLayout
// args: e
// closure: this
function {
  if (!((e.width > 0))) goto L_e6;
  if (!((e.width !== this.state.panelWidth))) goto L_e6;
  this.setState({panelWidth: e.width});
  return;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=0 bc=1167B file=oai_ui/src/components/SidebarLayout
// args: e
// locals: t, i, s
// closure: this, c, b, v
function {
  let s;
  let i;
  let t;
  if (!((0 === e.state))) goto L_108;
  if (!((0 === e.deltaX))) goto L_7f;
  if (!((0 === e.deltaY))) goto L_7f;
  return;
  this.dragStartProgress = this.state.progress;
  this.setState({dragging: true, presented: true});
  return;
  if ((this.state.dragging)) goto L_1a3;
  this.dragStartProgress = this.state.progress;
  this.state.progress;
  if (!((this.state.panelWidth == null))) goto L_1f1;
  this.state.panelWidth;
  t = c;
  i = b((this.dragStartProgress + (e.deltaX / t)));
  if (!((1 === e.state))) goto L_2a6;
  this.setState({dragging: true, presented: true, progress: i});
  return;
  s = v(i, e.velocityX);
  this.setState({dragging: false, progress: i});
  if (!((s !== this.viewModel.isOpen))) goto L_3f6;
  if (!(s)) goto L_3ae;
  if (!((this.viewModel.onOpen == null))) goto L_3a9;
  this.viewModel.onOpen;
  this.viewModel;
  goto L_3f6;
  // [栈深重同步 1 -> 2]
  goto L_3f6;
  // [栈深重同步 1 -> 0]
  this.viewModel.onDismiss();
  if ((this.isDestroyed())) goto L_48e;
  this.settle(this.viewModel.isOpen);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=5 bc=306B file=oai_ui/src/components/SidebarLayout
// locals: this, this.active_func, new.target, arguments
// closure: c, b, v, <class_fields_init>
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
  if (!(this.viewModel.isOpen)) goto L_cc;
  goto L_cd;
  // [栈深重同步 3 -> 2]
  this.state = {dragging: false, presented: this.viewModel.isOpen, progress: 0};
  this.dragStartProgress = 0;
  this.acceptHorizontalDrag = function <atom:0>;
  this.handleEdgePress = function <atom:0>;
  this.handleBackdropPress = function <atom:0>;
  this.handlePanelLayout = function <atom:0>;
  this.handleDrag = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=223B file=oai_ui/src/components/SidebarLayout
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== e))) goto L_de;
  if (!((e.isOpen !== this.viewModel.isOpen))) goto L_de;
  this.settle(this.viewModel.isOpen);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=765B file=oai_ui/src/components/SidebarLayout
// locals: i, s, r, this
// closure: e, t, y
function {
  this = this;
  let r;
  let s;
  let i;
  if ((this.state.presented)) goto L_95;
  i = this.viewModel.isOpen;
  s = (undefined !== this.viewModel.onOpen);
  if (!(!i)) goto L_e9;
  if (!(!s)) goto L_e9;
  return;
  r = this.viewModel.accessibilityId;
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", r);
  if (!(i)) goto L_1dd;
  goto L_201;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", y.edgeContainer);
  if ((this.viewModel.isOpen)) goto L_274;
  this.renderEdge(r);
  if (!(i)) goto L_2a4;
  this.renderBackdrop(r);
  if (!(i)) goto L_2d4;
  this.renderPanel(r);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=580B file=oai_ui/src/components/SidebarLayout
// args: t
// locals: this
// closure: e, i, y
function {
  this = this;
  if (!((undefined !== this.viewModel.onOpen))) goto L_243;
  e.beginRender(i, "sidebar-edge");
  if (!((undefined === t))) goto L_af;
  goto L_da;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityId", "".concat(t, ".edge"));
  e.setAttributeFunction("onDrag", this.handleDrag);
  e.setAttributeFunction("onDragPredicate", this.acceptHorizontalDrag);
  e.setAttributeFunction("onTap", this.handleEdgePress);
  e.setAttributeStyle("style", y.edge);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=814B file=oai_ui/src/components/SidebarLayout
// args: t
// locals: this
// closure: e, s, u, y
function {
  this = this;
  e.beginRender(s, "sidebar-backdrop");
  if (!((undefined === t))) goto L_63;
  goto L_8e;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityId", "".concat(t, ".backdrop"));
  e.setAttributeString("accessibilityLabel", u(this.viewModel.accessibilityLabel));
  if (!((this.state.progress > 0))) goto L_17b;
  goto L_180;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  e.setAttributeFunction("onTap", this.handleBackdropPress);
  e.setAttributeNumber("opacity", this.state.progress);
  e.setAttributeStyle("style", y.backdrop);
  e.setAttribute("touchEnabled", (this.state.progress > 0));
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=0 bc=988B file=oai_ui/src/components/SidebarLayout
// args: t
// locals: i, s, this
// closure: c, n, e, r, y
function {
  this = this;
  let s;
  let i;
  if (!((this.state.panelWidth == null))) goto L_53;
  this.state.panelWidth;
  i = c;
  s = !n.Device.isWeb();
  e.beginRender(r, "sidebar-panel");
  if (!((undefined === t))) goto L_ff;
  goto L_12a;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityId", "".concat(t, ".panel"));
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  if (!(s)) goto L_1f0;
  goto L_1f1;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onDrag", undefined);
  if (!(s)) goto L_247;
  goto L_248;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onDragPredicate", undefined);
  e.setAttributeFunction("onLayout", this.handlePanelLayout);
  e.setAttributeStyle("style", y.panel);
  e.setAttributeNumber("translationX", Math.round(((this.state.progress - 1) * i)));
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=64B file=oai_ui/src/components/SidebarLayout
// closure: this, e
function {
  if (!(e)) goto L_36;
  goto L_37;
  // [栈深重同步 4 -> 3]
  this.setState({dragging: false, presented: e, progress: 0});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=45B file=oai_ui/src/components/SidebarLayout
// args: e
// locals: this
// closure: p
function {
  this = this;
  this.animate(p, function <atom:0>);
  return;
}

// fn b  args=1 vars=1 closure=0 cpool=0 bc=85B file=oai_ui/src/components/SidebarLayout
// args: e
function {
  return Math.max(0, Math.min(1, e));   // tail call
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=154B file=oai_ui/src/components/SidebarLayout
// args: e
function {
  return "Close ".concat(e.substring(0, 1).toLowerCase(), e.substring(1));   // tail call
}

// fn v  args=2 vars=2 closure=2 cpool=0 bc=25B file=oai_ui/src/components/SidebarLayout
// args: e, t
// closure: h, g
function {
  if (((t >= h))) goto L_18;
  if (!(!(t <= -620))) goto L_18;
  return (e >= g);
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=11 bc=1248B file=oai_ui/src/components/SidebarLayout
// args: require, module, exports
// locals: e, t, i, s, r, o, a, n, d, l, c, h, g, p, SidebarLayout, <class_fields_init>, SidebarLayout#1, b, u, v, y
function {
  b = function b;
  u = function u;
  v = function v;
  let y;
  let SidebarLayout#1;
  let p;
  let g;
  let h;
  let c;
  let l;
  let d;
  let n;
  let a;
  let o;
  let r;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SidebarLayout = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["accessibilityNavigation", "passthrough"], "tmHa52C-VqE-e1pZ");
  i = e.makeNodePrototype("view", undefined, "R3y-5BOLohniMy2d");
  s = e.makeNodePrototype("view", ["accessibilityCategory", "button"], "1UvvMTpvez7c_Ove");
  r = e.makeNodePrototype("view", undefined, "pmr04utHboa_G84_");
  o = require("oai_core/src/OAITokens");
  a = require("valdi_core/src/Component");
  n = require("valdi_core/src/Device");
  d = require("valdi_core/src/Style");
  l = 24;
  c = 380;
  h = 620;
  g = 0.5;
  p = {appearanceBehavior: {enterAttributes: {opacity: 0, translationX: -1}, exitAttributes: {opacity: 0, translationX: -1}}, beginFromCurrentState: true, damping: 38, stiffness: 460};
  let SidebarLayout;
  let <class_fields_init>;
  class SidebarLayout extends a.StatefulComponent { ... }
  <proto:SidebarLayout>.onViewModelUpdate = function <atom:0>;
  <proto:SidebarLayout>.onRender = function <atom:0>;
  <proto:SidebarLayout>.renderEdge = function <atom:0>;
  <proto:SidebarLayout>.renderBackdrop = function <atom:0>;
  <proto:SidebarLayout>.renderPanel = function <atom:0>;
  <proto:SidebarLayout>.settle = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SidebarLayout>;
  SidebarLayout = function <atom:0>;
  // close_loc <class_fields_init>
  SidebarLayout#1 = function <atom:0>;
  exports.SidebarLayout = SidebarLayout#1;
  y = {overlay: new d.Style({bottom: 0, left: 0, position: "absolute", right: 0, top: 0}), edgeContainer: new d.Style({bottom: 0, left: 0, position: "absolute", top: 0, width: l}), edge: new d.Style({accessibilityNavigation: "ignored", bottom: 0, left: 0, position: "absolute", top: 0, width: l}), backdrop: new d.Style({backgroundColor: o.OAIColor.BgScrim, bottom: 0, left: 0, position: "absolute", right: 0, top: 0}), panel: new d.Style({accessibilityCategory: "view", accessibilityNavigation: "group", backgroundColor: o.OAIColor.BgPrimary, bottom: 0, flexDirection: "column", left: 0, maxWidth: c, position: "absolute", top: 0, width: "88%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/SidebarLayout
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
