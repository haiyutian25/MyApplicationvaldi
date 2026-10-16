// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=195B file=widgets/src/components/button/FloatingActionButton
// closure: this
function {
  this.setState({backgroundColor: this.getColorTheme().background, foregroundColor: this.getColorTheme().icon});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=154B file=widgets/src/components/button/FloatingActionButton
// closure: this, FloatingActionButton
function {
  this.setStateAnimated({backgroundColor: this.getColorTheme().backgroundDown}, FloatingActionButton.backgroundColorAnimationOptions);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=154B file=widgets/src/components/button/FloatingActionButton
// closure: this, FloatingActionButton
function {
  this.setStateAnimated({backgroundColor: this.getColorTheme().background}, FloatingActionButton.backgroundColorAnimationOptions);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=7 cpool=3 bc=1959B file=widgets/src/components/button/FloatingActionButton
// locals: this, this.active_func, new.target, arguments
// closure: FloatingActionButton, <class_fields_init>, g, u, h, c, s
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
  this.theme = g.Theme.from(this.context.themeType);
  if (!(h.isCustomTheme())) goto L_4e0;
  goto L_58e;
  // [栈深重同步 4 -> 3]
  this.colorThemes = {light: {background: this.theme.applyTo(u.SemanticColor.Icon.PRIMARY), backgroundDown: this.theme.applyTo(u.SemanticColor.Icon.SECONDARY), icon: this.theme.applyTo(u.SemanticColor.Text.ON_PRIMARY_BUTTON)}, dark: {background: this.theme.applyTo(u.SemanticColor.Text.ON_PRIMARY_BUTTON), backgroundDown: this.theme.applyTo(u.SemanticColor.Icon.PRIMARY), icon: this.theme.applyTo(u.SemanticColor.Button.SECONDARY)}};
  this.state = {marginBottom: this.getMargins(true).marginBottom, backgroundColor: this.getColorTheme().background, foregroundColor: this.getColorTheme().icon};
  this.containerStyle = new c.Style({position: "absolute", bottom: 0, right: 0, marginRight: this.getMargins(true).marginRight});
  this.darkModeObserver = s.Device.observeDarkMode(function <atom:0>);
  this.onTouchStart = function <atom:0>;
  this.onTouchEnd = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=263B file=widgets/src/components/button/FloatingActionButton
// closure: this, t, i
function {
  if (!(this.viewModel.visible)) goto L_b9;
  goto L_fe;
  // [栈深重同步 5 -> 4]
  this.setStateAnimated(t, {duration: 0.1, curve: i.AnimationCurve.EaseIn});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=394B file=widgets/src/components/button/FloatingActionButton
// args: e
// locals: t, this
// closure: i, a
function {
  this = this;
  let t;
  t = {marginBottom: this.getMargins(this.viewModel.visible).marginBottom};
  if (!((undefined === e))) goto L_c4;
  this.setState(t);
  return;
  if (!((e.visible !== this.viewModel.visible))) goto L_189;
  clearTimeout(this.timer);
  this.timer = a.setTimeoutInterruptible(function <atom:0>);
  a.setTimeoutInterruptible(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=1182B file=widgets/src/components/button/FloatingActionButton
// locals: this
// closure: e, t, m, o, l
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", this.containerStyle);
  e.setAttributeNumber("marginBottom", this.state.marginBottom);
  e.beginComponent(m.CoreButton, o, undefined, undefined);
  e.setViewModelProperty("icon", l.default.iconMagnifyingGlass24);
  e.setViewModelProperty("circular", true);
  e.setViewModelProperty("foregroundColor", this.state.foregroundColor);
  e.setViewModelProperty("backgroundColor", this.state.backgroundColor);
  e.setViewModelProperty("sizing", this.getButtonSize());
  e.setViewModelProperty("iconRespectSize", true);
  e.setViewModelProperty("onTap", this.viewModel.onTap);
  e.setViewModelProperty("onTouchStart", this.onTouchStart);
  e.setViewModelProperty("onTouchEnd", this.onTouchEnd);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=152B file=widgets/src/components/button/FloatingActionButton
// locals: this
function {
  this = this;
  if (!(this.timer)) goto L_50;
  clearTimeout(this.timer);
  this.darkModeObserver.cancel();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=607B file=widgets/src/components/button/FloatingActionButton
// locals: this
// closure: r, g, s
function {
  this = this;
  if (!(r.isVersionAtLeast(286))) goto L_18d;
  if (!((this.context.themeType === g.ThemeType.LIGHT))) goto L_ff;
  return this.colorThemes.light;
  if (!((this.context.themeType === g.ThemeType.DARK))) goto L_18c;
  return this.colorThemes.dark;
  this.context.themeType;
  if (!(s.Device.isDarkMode())) goto L_21b;
  return this.colorThemes.dark;
  return this.colorThemes.light;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=422B file=widgets/src/components/button/FloatingActionButton
// args: e
// locals: t, this
// closure: m, s
function {
  this = this;
  let t;
  t = m.sizingOptions[this.getButtonSize()].minHeight;
  if (!(s.Device.isIOS())) goto L_fb;
  if (!(this.getIsTallDevice())) goto L_fb;
  if (!(e)) goto L_ea;
  goto L_ee;
  // [栈深重同步 2 -> 1]
  return {marginBottom: -t, marginRight: 24};
  if (!(e)) goto L_14c;
  goto L_150;
  // [栈深重同步 2 -> 1]
  return {marginBottom: -t, marginRight: (s.Device.getDisplayRightInset() + 16)};
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=143B file=widgets/src/components/button/FloatingActionButton
// locals: this
// closure: m
function {
  this = this;
  if ((this.viewModel.sizing)) goto L_8e;
  return m.CoreButtonSizing.XL;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=43B file=widgets/src/components/button/FloatingActionButton
// locals: this
function {
  this = this;
  return (this.getDeviceAspectRatio() > 2.1);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=146B file=widgets/src/components/button/FloatingActionButton
// closure: s
function {
  return (s.Device.getDisplayHeight() / s.Device.getDisplayWidth());
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=10 bc=606B file=widgets/src/components/button/FloatingActionButton
// args: require, module, exports
// locals: e, t, o, i, r, n, s, a, c, l, h, g, u, m, FloatingActionButton, <class_fields_init>, FloatingActionButton#1
function {
  let FloatingActionButton#1;
  let m;
  let u;
  let g;
  let h;
  let l;
  let c;
  let a;
  let s;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FloatingActionButton = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["boxShadow", "complex 0 4 8 rgba(0, 0, 0, 0.2)", "id", "floatingSearchButton"], "DBL7modElPf11kac");
  o = e.makeComponentPrototype(undefined, "4PO2SklHCNY7T8l3");
  i = require("valdi_core/src/AnimationOptions");
  r = require("valdi_core/src/CompilerIntrinsics");
  n = require("valdi_core/src/Component");
  s = require("valdi_core/src/Device");
  a = require("valdi_core/src/SetTimeout");
  c = require("valdi_core/src/Style");
  l = require("widgets/res");
  h = require("widgets/src/InitSemanticColors");
  g = require("widgets/src/Theme");
  u = require("../../styles/semanticColors");
  m = require("./CoreButton");
  let FloatingActionButton;
  let <class_fields_init>;
  class FloatingActionButton extends n.StatefulComponent { ... }
  <proto:FloatingActionButton>.onViewModelUpdate = function <atom:0>;
  <proto:FloatingActionButton>.onRender = function <atom:0>;
  <proto:FloatingActionButton>.onDestroy = function <atom:0>;
  <proto:FloatingActionButton>.getColorTheme = function <atom:0>;
  <proto:FloatingActionButton>.getMargins = function <atom:0>;
  <proto:FloatingActionButton>.getButtonSize = function <atom:0>;
  <proto:FloatingActionButton>.getIsTallDevice = function <atom:0>;
  <proto:FloatingActionButton>.getDeviceAspectRatio = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FloatingActionButton>;
  FloatingActionButton = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc FloatingActionButton
  FloatingActionButton#1 = function <atom:0>;
  exports.FloatingActionButton = FloatingActionButton#1;
  FloatingActionButton#1.backgroundColorAnimationOptions = {duration: 0.125, curve: i.AnimationCurve.EaseInOut};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/button/FloatingActionButton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
