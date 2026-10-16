// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=oai_ui/src/components/IconButton
// args: e
function {
  e.Ghost = 0;
  e[0] = "Ghost";
  e.Primary = 1;
  e[1] = "Primary";
  e.Secondary = 2;
  e[2] = "Secondary";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=436B file=oai_ui/src/components/IconButton
// closure: e, a, t, this, I
function {
  e.beginComponent(a.ActivityIndicator, t, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", "Loading ".concat(this.viewModel.accessibilityLabel));
  e.setViewModelProperty("color", I);
  e.setViewModelProperty("size", a.ActivityIndicatorSize.Small);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=743B file=oai_ui/src/components/IconButton
// closure: e, c, r, I, this, P
function {
  e.beginComponent(c.Icon, r, undefined, undefined);
  e.setViewModelProperty("color", I);
  e.setViewModelProperty("flipOnRtl", this.viewModel.flipOnRtl);
  e.setViewModelProperty("imageStyle", this.viewModel.imageStyle);
  e.setViewModelProperty("size", P(this.viewModel.size));
  e.setViewModelProperty("src", this.viewModel.src);
  e.setViewModelProperty("symbol", this.viewModel.symbol);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=2 bc=81B file=oai_ui/src/components/IconButton
// closure: e, a, t, this, I, c, r, P
function {
  if (!((true === this.viewModel.loading))) goto L_4d;
  goto L_50;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=9 closure=16 cpool=2 bc=2671B file=oai_ui/src/components/IconButton
// locals: l, n, I, h, C, b, g, m, this
// closure: e, a, t, c, r, P, s, M, i, w, p, v, y, d, o, u
function {
  this = this;
  let m;
  let g;
  let b;
  let C;
  let h;
  let I;
  let n;
  let l;
  l = s.resolveOAIControlHeight(this.viewModel.size);
  if (((true === this.viewModel.disabled))) goto L_117;
  n = (true === this.viewModel.loading);
  I = M(this.viewModel, n);
  h = {};
  null;
  this.viewModel;
  C = {disabled: n};
  null;
  C;
  if (!((this.viewModel.variant === v.Secondary))) goto L_2be;
  goto L_2bf;
  // [栈深重同步 4 -> 3]
  if (!(n)) goto L_366;
  if (!(!this.viewModel.loading)) goto L_366;
  goto L_367;
  // [栈深重同步 4 -> 3]
  i.applyOAIBoxAttributes(h, {align: i.OAIAlign.Center, background: w(this.viewModel, n), borderColor: p(this.viewModel, n), borderWidth: undefined, height: l, justify: i.OAIJustify.Center, opacity: undefined, radius: s.OAIRadius.Pill, width: l});
  if (((undefined === undefined))) goto L_3fd;
  b = <to_object>(undefined).ref;
  g = {};
  <to_object>(undefined);
  {ref: null};
  goto L_42b;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_3c5;
  // [栈深重同步 1 -> 0]
  if (!((true === this.viewModel.selected))) goto L_507;
  if (!((this.viewModel.selectedStyle == null))) goto L_4c3;
  this.viewModel.selectedStyle;
  goto L_508;
  goto L_508;
  // [栈深重同步 1 -> 0]
  m = undefined;
  if (!((undefined !== m))) goto L_523;
  g.backgroundColor = m;
  m;
  e.beginComponent(d.IconButton, o, undefined, undefined);
  e.setViewModelProperties(g);
  e.setViewModelProperty("controlRef", this.viewModel.controlRef);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setViewModelProperty("accessibilityStateSelected", this.viewModel.selected);
  e.setViewModelProperty("disabled", n);
  e.setViewModelProperty("loading", this.viewModel.loading);
  e.setViewModelProperty("nativeAndroid", this.viewModel.nativeAndroid);
  e.setViewModelProperty("onPress", this.viewModel.onPress);
  e.setViewModelProperty("pressedStyle", u(this.viewModel));
  e.setViewModelProperty("selected", this.viewModel.selected);
  e.setViewModelProperty("selectedStyle", this.viewModel.selectedStyle);
  e.setViewModelProperty("style", this.viewModel.style);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/IconButton
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

// fn u  args=1 vars=1 closure=2 cpool=0 bc=299B file=oai_ui/src/components/IconButton
// args: e
// closure: v, I
function {
  if (!((e.variant == null))) goto L_49;
  e.variant;
  if (!((v.Ghost === v.Primary))) goto L_94;
  return I.primaryPressed;
  if (!((v.Ghost === v.Secondary))) goto L_df;
  return I.secondaryPressed;
  if (!((v.Ghost === v.Ghost))) goto L_12a;
  return I.ghostPressed;
  v.Ghost;
  return;
}

// fn w  args=2 vars=2 closure=2 cpool=0 bc=617B file=oai_ui/src/components/IconButton
// args: e, o
// closure: s, v
function {
  if (!(o)) goto L_70;
  if (!((true !== e.loading))) goto L_70;
  return s.OAIColor.InteractiveBgControlDefault;
  if (!((e.variant == null))) goto L_b9;
  e.variant;
  if (!((v.Ghost === v.Primary))) goto L_125;
  return s.OAIColor.InteractiveBgPrimaryDefault;
  if (!((v.Ghost === v.Secondary))) goto L_191;
  return s.OAIColor.InteractiveBgTertiaryDefault;
  (v.Ghost === v.Ghost);
  if (!((true === e.selected))) goto L_223;
  return s.OAIColor.BgSecondary;
  return s.OAIColor.Transparent;
}

// fn p  args=2 vars=2 closure=2 cpool=0 bc=218B file=oai_ui/src/components/IconButton
// args: e, o
// closure: v, s
function {
  if (!((e.variant === v.Secondary))) goto L_d9;
  if (!(o)) goto L_93;
  return s.OAIColor.BorderDefault;
  return s.OAIColor.InteractiveBorderSecondaryDefault;
  return;
}

// fn M  args=2 vars=2 closure=2 cpool=0 bc=362B file=oai_ui/src/components/IconButton
// args: e, o
// closure: s, v
function {
  if (!(o)) goto L_70;
  if (!((true !== e.loading))) goto L_70;
  return s.OAIColor.InteractiveLabelTertiaryDefault;
  if (!((e.variant === v.Primary))) goto L_fd;
  return s.OAIColor.InteractiveLabelPrimaryDefault;
  if (!((e.iconColor == null))) goto L_169;
  e.iconColor;
  return s.OAIColor.IconPrimary;
}

// fn P  args=1 vars=1 closure=1 cpool=0 bc=155B file=oai_ui/src/components/IconButton
// args: e
// closure: s
function {
  if (!((e === s.OAIControlSize.Sm))) goto L_4c;
  return 16;
  if (!((e === s.OAIControlSize.Lg))) goto L_98;
  return 24;
  return 20;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=8 bc=862B file=oai_ui/src/components/IconButton
// args: require, module, exports
// locals: e, o, t, r, i, s, l, n, d, a, c, y, v, IconButton, <class_fields_init>, IconButton#1, u, w, p, M, P, I
function {
  u = function u;
  w = function w;
  p = function p;
  M = function M;
  P = function P;
  let I;
  let IconButton#1;
  let y;
  let c;
  let a;
  let d;
  let n;
  let l;
  let s;
  let i;
  let r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IconButtonVariant = undefined;
  exports.IconButton = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "xsq6VJKliaqOC-pS");
  t = e.makeComponentPrototype(undefined, "zR8UWOR6NvJswi0U");
  r = e.makeComponentPrototype(undefined, "5H94SUDWshtSR0i6");
  i = require("oai_core/src/OAIAttributes");
  s = require("oai_core/src/OAITokens");
  l = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  d = require("valdi_ui/src/components/IconButton");
  a = require("./ActivityIndicator");
  c = require("./Icon");
  y = require("./Pressable");
  if ((v)) goto L_19d;
  v = {};
  exports.IconButtonVariant = {};
  !function <atom:0>({});
  let IconButton;
  let <class_fields_init>;
  class IconButton extends l.Component { ... }
  <proto:IconButton>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:IconButton>;
  IconButton = function <atom:0>;
  // close_loc <class_fields_init>
  IconButton#1 = function <atom:0>;
  exports.IconButton = IconButton#1;
  I = {ghostPressed: new n.Style({backgroundColor: s.OAIColor.BgSecondary}), primaryPressed: new n.Style({backgroundColor: s.OAIColor.InteractiveBgPrimaryPress}), secondaryPressed: new n.Style({backgroundColor: s.OAIColor.InteractiveBgTertiaryPress})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/IconButton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
