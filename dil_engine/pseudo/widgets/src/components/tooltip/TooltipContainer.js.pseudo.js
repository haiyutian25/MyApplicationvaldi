// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=41B file=widgets/src/components/tooltip/TooltipContainer
// args: t
function {
  t.Large = 0.66;
  t[0.66] = "Large";
  t.Small = 0.4;
  t[0.4] = "Small";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=53B file=widgets/src/components/tooltip/TooltipContainer
// args: t
// closure: this
function {
  this.currentContainerFrame = t;
  this.onLayoutUpdate();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=53B file=widgets/src/components/tooltip/TooltipContainer
// args: t
// closure: this
function {
  this.currentTooltipFrame = t;
  this.onLayoutUpdate();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=90B file=widgets/src/components/tooltip/TooltipContainer
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
  this.state = {};
  this.onLayoutContainer = function <atom:0>;
  this.onLayoutTooltip = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=11 closure=10 cpool=0 bc=2037B file=widgets/src/components/tooltip/TooltipContainer
// locals: s, l, c, p, u, g, C, m, v, y, this
// closure: h, a, t, o, i, P, e, n, d, r
function {
  this = this;
  let y;
  let v;
  let m;
  let C;
  let g;
  let u;
  let p;
  let c;
  let l;
  let s;
  if (((undefined === undefined))) goto L_dd;
  s = <to_object>(undefined).on;
  l = <to_object>(undefined).text;
  c = <to_object>(undefined).position;
  p = <to_object>(undefined).size;
  u = <to_object>(undefined).onTap;
  <to_object>(undefined);
  goto L_104;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_29;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_155;
  g = <to_object>(undefined).contactParentPositioning;
  C = <to_object>(undefined).contactChildPositioning;
  <to_object>(undefined);
  goto L_17b;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_109;
  // [栈深重同步 1 -> 0]
  if (!(s)) goto L_18c;
  if (!(g)) goto L_18c;
  m = C;
  if (!((p == null))) goto L_1b8;
  p;
  v = h.Large;
  y = (a.Device.getDisplayWidth() * v);
  t.beginRender(o, "container");
  t.setAttributeFunction("onLayout", this.onLayoutContainer);
  t.renderUnnamedSlot(this);
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", P.contactParentOrigin);
  t.setAttributes(this.state.contactParentPositioning);
  t.beginRender(e, undefined);
  t.setAttributeStyle("style", P.contactChildOrigin);
  t.setAttributes(this.state.contactChildPositioning);
  t.setAttributeNumber("width", y);
  t.beginRender(n, "tooltip");
  t.setAttributeFunction("onLayout", this.onLayoutTooltip);
  t.beginComponent(d.TooltipInlined, r, undefined, undefined);
  t.setViewModelProperty("text", l);
  t.setViewModelProperty("position", c);
  if (!(m)) goto L_616;
  goto L_617;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("opacity", 0);
  t.setViewModelProperty("onTap", u);
  t.setViewModelProperty("maxNumberOfLines", this.viewModel.maxNumberOfLines);
  t.setViewModelProperty("overrideBackgroundColor", this.viewModel.overrideBackgroundColor);
  t.endComponent();
  t.endRender();
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=2 cpool=0 bc=2566B file=widgets/src/components/tooltip/TooltipContainer
// locals: t, o, i, e, this
// closure: p, c
function {
  this = this;
  let e;
  let i;
  let o;
  let t;
  if (!((undefined === this.currentContainerFrame))) goto L_37;
  return;
  if (!((undefined === this.currentTooltipFrame))) goto L_5f;
  return;
  t = (this.currentContainerFrame.width / 2);
  o = (this.currentContainerFrame.height / 2);
  i = (this.currentTooltipFrame.width / 2);
  e = (this.currentTooltipFrame.height / 2);
  if (!((this.viewModel.position === p.TooltipPosition.BottomLeft))) goto L_2e4;
  if (!((this.viewModel.contactParentPositioning == null))) goto L_285;
  this.viewModel.contactParentPositioning;
  return this.setState({contactParentPositioning: {bottom: 0, left: 0}, contactChildPositioning: {top: 0, right: -c.TooltipConstants.tailOverlap}});   // tail call
  if (!((this.viewModel.position === p.TooltipPosition.BottomRight))) goto L_409;
  if (!((this.viewModel.contactParentPositioning == null))) goto L_3aa;
  this.viewModel.contactParentPositioning;
  return this.setState({contactParentPositioning: {bottom: 0, right: 0}, contactChildPositioning: {top: 0, left: -c.TooltipConstants.tailOverlap}});   // tail call
  if (!((this.viewModel.position === p.TooltipPosition.BottomCenter))) goto L_4ee;
  if (!((this.viewModel.contactParentPositioning == null))) goto L_4d1;
  this.viewModel.contactParentPositioning;
  return this.setState({contactParentPositioning: {bottom: 0, left: t}, contactChildPositioning: {top: 0, left: -i}});   // tail call
  if (!((this.viewModel.position === p.TooltipPosition.CenterLeft))) goto L_5d3;
  if (!((this.viewModel.contactParentPositioning == null))) goto L_5b6;
  this.viewModel.contactParentPositioning;
  return this.setState({contactParentPositioning: {top: o, left: 0}, contactChildPositioning: {top: -e, right: 0}});   // tail call
  if (!((this.viewModel.position === p.TooltipPosition.CenterRight))) goto L_6b8;
  if (!((this.viewModel.contactParentPositioning == null))) goto L_69b;
  this.viewModel.contactParentPositioning;
  return this.setState({contactParentPositioning: {top: o, right: 0}, contactChildPositioning: {top: -e, left: 0}});   // tail call
  if (!((this.viewModel.position === p.TooltipPosition.TopLeft))) goto L_7e7;
  if (!((this.viewModel.contactParentPositioning == null))) goto L_77e;
  this.viewModel.contactParentPositioning;
  return this.setState({contactParentPositioning: {top: 0, left: 0}, contactChildPositioning: {justifyContent: "flex-end", bottom: 0, right: -c.TooltipConstants.tailOverlap}});   // tail call
  if (!((this.viewModel.position === p.TooltipPosition.TopRight))) goto L_916;
  if (!((this.viewModel.contactParentPositioning == null))) goto L_8ad;
  this.viewModel.contactParentPositioning;
  return this.setState({contactParentPositioning: {top: 0, right: 0}, contactChildPositioning: {justifyContent: "flex-end", bottom: 0, left: -c.TooltipConstants.tailOverlap}});   // tail call
  if (!((this.viewModel.position === p.TooltipPosition.TopCenter))) goto L_a05;
  if (!((this.viewModel.contactParentPositioning == null))) goto L_9de;
  this.viewModel.contactParentPositioning;
  return this.setState({contactParentPositioning: {top: 0, left: t}, contactChildPositioning: {justifyContent: "flex-end", bottom: 0, right: -i}});   // tail call
  this.viewModel.position;
  return;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=4 bc=738B file=widgets/src/components/tooltip/TooltipContainer
// args: require, module, exports
// locals: t, o, i, e, n, r, s, a, l, c, d, p, h, TooltipContainer, <class_fields_init>, TooltipContainer#1, P
function {
  let P;
  let TooltipContainer#1;
  let p;
  let d;
  let c;
  let l;
  let a;
  let s;
  let r;
  let n;
  let e;
  let i;
  let o;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TooltipContainerSize = undefined;
  exports.TooltipContainer = undefined;
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeNodePrototype("layout", undefined, "mm2D7J38FMZ1J34s");
  i = t.makeNodePrototype("layout", undefined, "SKjlZSU8grRzrhYN");
  e = t.makeNodePrototype("layout", undefined, "bfAhaGd8blYhGLhW");
  n = t.makeNodePrototype("layout", undefined, "CygTAo0KXINn18Qh");
  r = t.makeComponentPrototype(undefined, "tFLemjChOcguo9pq");
  s = require("valdi_core/src/Component");
  a = require("valdi_core/src/Device");
  l = require("valdi_core/src/Style");
  c = require("./TooltipConstants");
  d = require("./TooltipInlined");
  p = require("./TooltipPosition");
  if ((h)) goto L_1e9;
  h = {};
  exports.TooltipContainerSize = {};
  !function <atom:0>({});
  let TooltipContainer;
  let <class_fields_init>;
  class TooltipContainer extends s.StatefulComponent { ... }
  <proto:TooltipContainer>.onRender = function <atom:0>;
  <proto:TooltipContainer>.onLayoutUpdate = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TooltipContainer>;
  TooltipContainer = function <atom:0>;
  // close_loc <class_fields_init>
  TooltipContainer#1 = function <atom:0>;
  exports.TooltipContainer = TooltipContainer#1;
  P = {contactParentOrigin: new l.Style({position: "absolute", width: 0, height: 0, limitToViewport: false, ignoreParentViewport: true}), contactChildOrigin: new l.Style({position: "absolute", limitToViewport: false, ignoreParentViewport: true})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/tooltip/TooltipContainer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
