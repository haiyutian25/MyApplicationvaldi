// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=valdi_ui/src/components/SideDrawer
// args: e
function {
  e.Leading = 0;
  e[0] = "Leading";
  e.Trailing = 1;
  e[1] = "Trailing";
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=691B file=valdi_ui/src/components/SideDrawer
// locals: e, t, i, s
// closure: o, this
function {
  let s;
  let i;
  let t;
  let e;
  e = o.Device.getDisplayBottomInset();
  t = o.Device.getDisplayLeftInset();
  i = o.Device.getDisplayRightInset();
  s = o.Device.getDisplayTopInset();
  if (!((e === this.state.bottomInset))) goto L_266;
  if (!((t === this.state.leftInset))) goto L_266;
  if (!((i === this.state.rightInset))) goto L_266;
  if (((s === this.state.topInset))) goto L_2b2;
  this.setState({bottomInset: e, leftInset: t, rightInset: i, topInset: s});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=545B file=valdi_ui/src/components/SideDrawer
// locals: this, this.active_func, new.target, arguments
// closure: o, <class_fields_init>
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
  this.state = {bottomInset: o.Device.getDisplayBottomInset(), interceptsInteraction: this.viewModel.open, leftInset: o.Device.getDisplayLeftInset(), presented: this.viewModel.open, rightInset: o.Device.getDisplayRightInset(), topInset: o.Device.getDisplayTopInset()};
  this.transitionVersion = 0;
  this.handleInsetsChanged = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=119B file=valdi_ui/src/components/SideDrawer
// locals: this
// closure: o
function {
  this = this;
  this.insetObserver = o.Device.observeDisplayInsetChange(this.handleInsetsChanged);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=125B file=valdi_ui/src/components/SideDrawer
// locals: this
function {
  this = this;
  this.transitionVersion = (this.transitionVersion ++);
  if (!((this.insetObserver == null))) goto L_58;
  this.insetObserver;
  goto L_7c;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=129B file=valdi_ui/src/components/SideDrawer
// closure: t, this
function {
  if (((t !== this.transitionVersion))) goto L_80;
  if ((this.isDestroyed())) goto L_80;
  this.setState({interceptsInteraction: false});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=415B file=valdi_ui/src/components/SideDrawer
// args: e
// locals: t, this
// closure: l, u
function {
  this = this;
  let t;
  if (((undefined === e))) goto L_72;
  if (!((e.open === this.viewModel.open))) goto L_75;
  return;
  this.transitionVersion = (this.transitionVersion ++);
  t = (this.transitionVersion ++);
  if (!(this.viewModel.open)) goto L_148;
  this.setState({interceptsInteraction: true});
  this.setStateAnimated({presented: true}, l);
  return;
  this.setStateAnimatedPromise({presented: false}, u).then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=valdi_ui/src/components/SideDrawer
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=10 closure=11 cpool=1 bc=3083B file=valdi_ui/src/components/SideDrawer
// locals: r, n, a, l, u, p, m, y, I, this
// closure: e, d, v, c, o, b, t, h, g, i, s
function {
  this = this;
  let I;
  let y;
  let m;
  let p;
  let u;
  let l;
  let a;
  let n;
  let r;
  r = d.resolveValdiUITheme();
  n = v(r);
  a = r.shape.surfaceRadius;
  l = this.viewModel.accessibilityId;
  if (!((this.edge === c.Leading))) goto L_168;
  goto L_1b0;
  // [栈深重同步 1 -> 0]
  u = o.Device.isRTL();
  p = this.viewModel.open;
  m = this.state.presented;
  y = this.state.interceptsInteraction;
  if (!((this.viewModel.width == null))) goto L_2d0;
  this.viewModel.width;
  I = b;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", h.layer);
  e.setAttributeString("accessibilityId", g(l, "layer"));
  if (!(y)) goto L_3bd;
  goto L_3c2;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  e.setAttribute("touchEnabled", y);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", h.scrim);
  if (!(p)) goto L_4cd;
  if (!(this.dismissOnBackdropPress)) goto L_4cd;
  goto L_4d2;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityCategory", "view");
  e.setAttributeString("accessibilityId", g(l, "backdrop"));
  e.setAttributeString("accessibilityLabel", this.viewModel.dismissAccessibilityLabel);
  if (!(p)) goto L_5da;
  if (!(this.dismissOnBackdropPress)) goto L_5da;
  goto L_5df;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  if (!(p)) goto L_67c;
  if (!(this.dismissOnBackdropPress)) goto L_67c;
  goto L_67d;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", undefined);
  if (!(m)) goto L_6b2;
  goto L_6b3;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0);
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", n);
  e.setAttributeString("accessibilityId", l);
  if (!(y)) goto L_7a0;
  goto L_7a5;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  if (!(u)) goto L_812;
  goto L_842;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderRadius", "".concat(a, " 0 0 ", a));
  if (!(u)) goto L_87b;
  goto L_880;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("boxShadow", "complex -8 0 24 rgba(0, 0, 0, 0.18)");
  if (!(u)) goto L_8b5;
  goto L_8b6;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("left", undefined);
  if (!(m)) goto L_8eb;
  goto L_8ec;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0);
  e.setAttributeNumber("paddingBottom", this.state.bottomInset);
  if (!(u)) goto L_9d5;
  goto L_9d6;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingLeft", 0);
  if (!(u)) goto L_a0b;
  goto L_a4f;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingRight", this.state.rightInset);
  e.setAttributeNumber("paddingTop", this.state.topInset);
  if (!(u)) goto L_af5;
  goto L_af6;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("right", 0);
  if (!(m)) goto L_b2b;
  goto L_b7c;
  // [栈深重同步 4 -> 3]
  if (!((this.edge === c.Leading))) goto L_b79;
  goto L_b7c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("translationX", I);
  e.setAttributeNumber("width", I);
  if (!(y)) goto L_bba;
  function <atom:0>();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_ui/src/components/SideDrawer
// locals: this
function {
  this = this;
  return (false !== this.viewModel.dismissOnBackdropPress);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=109B file=valdi_ui/src/components/SideDrawer
// locals: this
// closure: c
function {
  this = this;
  if (!((this.viewModel.edge == null))) goto L_6c;
  this.viewModel.edge;
  return c.Leading;
}

// fn g  args=2 vars=2 closure=0 cpool=0 bc=50B file=valdi_ui/src/components/SideDrawer
// args: e, t
function {
  if (!((undefined !== e))) goto L_31;
  return "".concat(e, ".", t);   // tail call
  return;
}

// fn v  args=1 vars=2 closure=2 cpool=0 bc=342B file=valdi_ui/src/components/SideDrawer
// args: e
// locals: t
// closure: p, a
function {
  let t;
  t = p.get(e);
  if (((undefined !== t))) goto L_151;
  t = new a.Style({backgroundColor: e.colors.surface, borderColor: e.colors.border, borderWidth: 1, bottom: 0, flexDirection: "column", maxWidth: "86%", position: "absolute", top: 0});
  new a.Style({backgroundColor: e.colors.surface, borderColor: e.colors.border, borderWidth: 1, bottom: 0, flexDirection: "column", maxWidth: "86%", position: "absolute", top: 0});
  p.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=12 bc=896B file=valdi_ui/src/components/SideDrawer
// args: require, module, exports
// locals: e, t, i, s, r, n, o, a, d, c, l, u, b, SideDrawer, <class_fields_init>, SideDrawer#1, g, h, p, v
function {
  g = function g;
  v = function v;
  let p;
  let h;
  let SideDrawer#1;
  let b;
  let u;
  let l;
  let d;
  let a;
  let o;
  let n;
  let r;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SideDrawerEdge = undefined;
  exports.SideDrawer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "Au8cRqBf0oqCgttX");
  i = e.makeNodePrototype("view", undefined, "kGjnnmNO4ewx6y-T");
  s = e.makeNodePrototype("view", undefined, "pEAUXdzf4Y2wZwmC");
  r = require("valdi_core/src/AnimationOptions");
  n = require("valdi_core/src/Component");
  o = require("valdi_core/src/Device");
  a = require("valdi_core/src/Style");
  d = require("valdi_ui_theme/src/ValdiUITheme");
  if ((c)) goto L_188;
  c = {};
  exports.SideDrawerEdge = {};
  !function <atom:0>({});
  l = {beginFromCurrentState: true, curve: r.AnimationCurve.EaseOut, duration: 0.28};
  u = {beginFromCurrentState: true, curve: r.AnimationCurve.EaseIn, duration: 0.2};
  b = 360;
  let SideDrawer;
  let <class_fields_init>;
  class SideDrawer extends n.StatefulComponent { ... }
  <proto:SideDrawer>.onCreate = function <atom:0>;
  <proto:SideDrawer>.onDestroy = function <atom:0>;
  <proto:SideDrawer>.onViewModelUpdate = function <atom:0>;
  <proto:SideDrawer>.onRender = function <atom:0>;
  <proto:SideDrawer>.dismissOnBackdropPress = function <atom:0>;
  <proto:SideDrawer>.edge = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SideDrawer>;
  SideDrawer = function <atom:0>;
  // close_loc <class_fields_init>
  SideDrawer#1 = function <atom:0>;
  exports.SideDrawer = SideDrawer#1;
  h = {layer: new a.Style({bottom: 0, left: 0, position: "absolute", right: 0, top: 0, zIndex: 100}), scrim: new a.Style({backgroundColor: "rgba(0, 0, 0, 0.36)", bottom: 0, left: 0, position: "absolute", right: 0, top: 0})};
  p = new WeakMap();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/SideDrawer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
