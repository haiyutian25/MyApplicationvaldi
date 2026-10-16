// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=334B file=widgets/src/components/subscreen/SubscreenHeader
// args: e
// locals: t
// closure: this, i, n, a, u
function {
  let t;
  if (!((this.viewModel == null))) goto L_2f;
  this.viewModel;
  goto L_50;
  if (!(undefined.disableInsets)) goto L_77;
  return i.BLANK_INSETS;
  if (!(n.Device.isIOS())) goto L_115;
  goto L_137;
  // [栈深重同步 1 -> 0]
  t = e.top;
  null;
  e;
  return {top: t, bottom: 0};
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=1 bc=63B file=widgets/src/components/subscreen/SubscreenHeader
// locals: this, this.active_func, new.target, arguments
// closure: i, n, a, u, <class_fields_init>
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
  this.insetResolveFn = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=385B file=widgets/src/components/subscreen/SubscreenHeader
// closure: e, o, i, n, this
function {
  e.beginRender(o, undefined);
  e.setAttributeNumber("paddingLeft", i);
  e.setAttributeNumber("paddingRight", i);
  e.setAttributeNumber("paddingTop", n.top);
  e.setAttributeNumber("paddingBottom", n.bottom);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=1 bc=522B file=widgets/src/components/subscreen/SubscreenHeader
// locals: r, n, i, this
// closure: e, o, SubscreenHeader, d, s, t
function {
  this = this;
  let i;
  let n;
  let r;
  if (!((this.viewModel == null))) goto L_35;
  this.viewModel;
  goto L_56;
  if (!((undefined.packing == null))) goto L_60;
  undefined.packing;
  r = "full";
  n = SubscreenHeader.verticalPadding[r];
  if (!((this.viewModel.sidePadding == null))) goto L_117;
  this.viewModel.sidePadding;
  i = d.Subscreen.GUTTER_SIZE;
  e.beginComponent(s.WithInsets, t, undefined, undefined);
  e.setViewModelProperty("resolveFn", this.insetResolveFn);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=2 bc=465B file=widgets/src/components/subscreen/SubscreenHeader
// args: require, module, exports
// locals: e, t, o, r, n, i, s, d, u, a, SubscreenHeader, <class_fields_init>, SubscreenHeader#1
function {
  let SubscreenHeader#1;
  let a;
  let u;
  let d;
  let s;
  let i;
  let n;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscreenHeader = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "a7LBVQCiUWpXXqzi");
  o = e.makeNodePrototype("layout", undefined, "eOmxY4jYLB2SrI2q");
  r = require("valdi_core/src/Component");
  n = require("valdi_core/src/Device");
  i = require("../util/Insets");
  s = require("../util/WithInsets");
  d = require("./Subscreen");
  u = 15;
  a = 13;
  let SubscreenHeader;
  let <class_fields_init>;
  class SubscreenHeader extends r.Component { ... }
  <proto:SubscreenHeader>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscreenHeader>;
  SubscreenHeader = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc SubscreenHeader
  SubscreenHeader#1 = function <atom:0>;
  exports.SubscreenHeader = SubscreenHeader#1;
  SubscreenHeader#1.verticalPadding = {full: {top: 14, bottom: 14}, condensed: {top: 11, bottom: 7}, cut: {top: 11, bottom: 0}, none: {top: 0, bottom: 0}};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/subscreen/SubscreenHeader
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
