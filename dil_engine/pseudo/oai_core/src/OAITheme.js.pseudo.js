// fn d  args=0 vars=0 closure=0 cpool=0 bc=21B file=oai_core/src/OAITheme
function {
  if (!(("undefined" != typeof runtime))) goto L_14;
  return runtime;
  return;
}

// fn c  args=1 vars=3 closure=7 cpool=0 bc=91B file=oai_core/src/OAITheme
// args: e
// locals: t, a
// closure: d, l, n, D, u, m, g
function {
  let a;
  let t;
  t = d();
  if (!((undefined === t))) goto L_13;
  return false;
  l(t);
  if (!((e == null))) goto L_41;
  e;
  a = n.System;
  D();
  u(m(a, g(a)));
  return true;
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=212B file=oai_core/src/OAITheme
// args: e
// closure: exports
function {
  e.configureColorPalette(exports.OAI_LIGHT_THEME, exports.OAI_LIGHT_COLOR_PALETTE);
  e.configureColorPalette(exports.OAI_DARK_THEME, exports.OAI_DARK_COLOR_PALETTE);
  return;
}

// fn u  args=1 vars=2 closure=2 cpool=0 bc=181B file=oai_core/src/OAITheme
// args: e
// locals: t
// closure: d, exports
function {
  let t;
  t = d();
  if (!((undefined !== t))) goto L_b4;
  if (!((e === exports.OAI_DARK_THEME))) goto L_61;
  goto L_83;
  // [栈深重同步 2 -> 1]
  global.oaiValdiCurrentPalette = exports.OAI_LIGHT_COLOR_PALETTE;
  t.setActiveColorPalette(e);
  return;
}

// fn b  args=1 vars=2 closure=3 cpool=0 bc=56B file=oai_core/src/OAITheme
// args: e
// locals: t
// closure: n, m, g
function {
  let t;
  if (!((e == null))) goto L_2b;
  e;
  t = n.System;
  return m(t, g(t));   // tail call
}

// fn m  args=2 vars=2 closure=2 cpool=0 bc=219B file=oai_core/src/OAITheme
// args: e, t
// closure: n, exports
function {
  if (!((e === n.Dark))) goto L_49;
  return exports.OAI_DARK_THEME;
  if (!((e === n.Light))) goto L_92;
  return exports.OAI_LIGHT_THEME;
  if (!(t)) goto L_b8;
  return exports.OAI_DARK_THEME;
  return exports.OAI_LIGHT_THEME;
}

// fn g  args=1 vars=1 closure=2 cpool=0 bc=113B file=oai_core/src/OAITheme
// args: e
// closure: n, o
function {
  if (!((e === n.System))) goto L_70;
  return o.Device.isDarkMode();
}

// fn v  args=1 vars=2 closure=2 cpool=0 bc=28B file=oai_core/src/OAITheme
// args: e
// locals: t
// closure: g, m
function {
  let t;
  t = g(e);
  return {resolvedThemeName: m(e, t), systemIsDark: t};
}

// fn D  args=0 vars=0 closure=0 cpool=0 bc=99B file=oai_core/src/OAITheme
function {
  if (!((global.oaiValdiDarkModeObserver == null))) goto L_2e;
  global.oaiValdiDarkModeObserver;
  goto L_52;
  undefined.cancel();
  global.oaiValdiDarkModeObserver = undefined;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=oai_core/src/OAITheme
// args: e
function {
  e.System = "system";
  e.Light = "light";
  e.Dark = "dark";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=242B file=oai_core/src/OAITheme
// args: e
// closure: this, n, m
function {
  if (!((this.themeMode === n.System))) goto L_f1;
  if (!((this.state.systemIsDark !== e))) goto L_f1;
  this.applyResolvedTheme({resolvedThemeName: m(n.System, e), systemIsDark: e});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=1 bc=113B file=oai_core/src/OAITheme
// locals: this, this.active_func, new.target, arguments
// closure: n, m, <class_fields_init>, v
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
  this.state = v(this.themeMode);
  this.handleDarkModeChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=110B file=oai_core/src/OAITheme
// locals: this
// closure: c
function {
  this = this;
  c(this.viewModel.mode);
  this.startOrStopDarkModeObserver();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=301B file=oai_core/src/OAITheme
// args: e
// locals: this
// closure: c, v
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  if (!((undefined.mode !== this.viewModel.mode))) goto L_12c;
  c(this.viewModel.mode);
  this.startOrStopDarkModeObserver();
  this.applyResolvedTheme(v(this.themeMode));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=oai_core/src/OAITheme
// locals: this
function {
  this = this;
  this.stopDarkModeObserver();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=oai_core/src/OAITheme
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=1 bc=648B file=oai_core/src/OAITheme
// locals: this
// closure: e, t, h, F, a, s
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", h.themeRoot);
  e.setAttributeString("colorPaletteName", this.state.resolvedThemeName);
  if (!((true === this.viewModel.fill))) goto L_167;
  goto L_168;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("height", undefined);
  e.beginComponent(F.ValdiUIThemeProvider, a, undefined, undefined);
  e.setViewModelProperty("value", s.OPENAI_UI_THEME);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=109B file=oai_core/src/OAITheme
// locals: this
// closure: n
function {
  this = this;
  if (!((this.viewModel.mode == null))) goto L_6c;
  this.viewModel.mode;
  return n.System;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=276B file=oai_core/src/OAITheme
// locals: this
// closure: n, o
function {
  this = this;
  if (!((this.themeMode === n.System))) goto L_ee;
  if (!((undefined === this.darkModeObserver))) goto L_113;
  this.darkModeObserver = o.Device.observeDarkMode(this.handleDarkModeChange);
  goto L_113;
  // [栈深重同步 1 -> 0]
  this.stopDarkModeObserver();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=oai_core/src/OAITheme
// locals: this
function {
  this = this;
  if (!((this.darkModeObserver == null))) goto L_2c;
  this.darkModeObserver;
  goto L_50;
  undefined.cancel();
  this.darkModeObserver = undefined;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=78B file=oai_core/src/OAITheme
// args: e
// locals: this
// closure: u
function {
  this = this;
  u(e.resolvedThemeName);
  this.setState(e);
  return;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=19 bc=2703B file=oai_core/src/OAITheme
// args: require, module, exports
// locals: e, t, a, i, o, r, F, s, n, d, c, l, u, b, m, g, v, D, OAITheme, <class_fields_init>, OAITheme#1, h
function {
  d = function d;
  c = function c;
  l = function l;
  u = function u;
  b = function b;
  m = function m;
  g = function g;
  v = function v;
  D = function D;
  let h;
  let OAITheme#1;
  let s;
  let F;
  let r;
  let o;
  let i;
  let a;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAI_LIGHT_THEME = undefined;
  exports.OAI_DARK_THEME = undefined;
  exports.OAIThemeMode = undefined;
  exports.initializeOAITheme = undefined;
  exports.configureOAIColorPalettes = undefined;
  exports.resolveOAIThemeName = undefined;
  exports.OAITheme = undefined;
  exports.OAI_LIGHT_COLOR_PALETTE = undefined;
  exports.OAI_DARK_COLOR_PALETTE = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "Vug8dedjmLYJrM4t");
  a = e.makeComponentPrototype(undefined, "NDkI-aGbjrspv1p4");
  i = require("valdi_core/src/Component");
  o = require("valdi_core/src/Device");
  r = require("valdi_core/src/Style");
  F = require("valdi_ui_theme/src/ValdiUITheme");
  s = require("./OAIUITheme");
  exports.OAI_LIGHT_THEME = "oai-light";
  exports.OAI_DARK_THEME = "oai-dark";
  if ((n)) goto L_1c7;
  n = {};
  exports.OAIThemeMode = {};
  function <atom:0>({});
  exports.initializeOAITheme = c;
  exports.configureOAIColorPalettes = l;
  exports.resolveOAIThemeName = b;
  let OAITheme;
  let <class_fields_init>;
  class OAITheme extends i.StatefulComponent { ... }
  <proto:OAITheme>.onCreate = function <atom:0>;
  <proto:OAITheme>.onViewModelUpdate = function <atom:0>;
  <proto:OAITheme>.onDestroy = function <atom:0>;
  <proto:OAITheme>.onRender = function <atom:0>;
  <proto:OAITheme>.themeMode = function <atom:0>;
  <proto:OAITheme>.startOrStopDarkModeObserver = function <atom:0>;
  <proto:OAITheme>.stopDarkModeObserver = function <atom:0>;
  <proto:OAITheme>.applyResolvedTheme = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OAITheme>;
  OAITheme = function <atom:0>;
  // close_loc <class_fields_init>
  OAITheme#1 = function <atom:0>;
  exports.OAITheme = OAITheme#1;
  h = {themeRoot: new r.Style({flexDirection: "column", width: "100%"})};
  exports.OAI_LIGHT_COLOR_PALETTE = {oai-bg-canvas: "#FFFFFF", oai-bg-canvas-subtle: "#FCFCFC", oai-bg-canvas-transparent: "#FFFFFF00", oai-bg-primary: "#FFFFFF", oai-bg-primary-inverse: "#F9F9F9", oai-bg-secondary: "#E8E8E8", oai-bg-tertiary: "#F3F3F3", oai-bg-layer-3: "#E8E8E8", oai-bg-user-message: "#0000000D", oai-bg-code-block: "#F8F8F8", oai-bg-scrim: "#E3E3E380", oai-bg-elevated-primary: "#FFFFFF", oai-bg-elevated-secondary: "#F3F3F3", oai-bg-grouped: "#F2F2F7", oai-bg-grouped-elevated: "#F2F2F7", oai-bg-grouped-surface: "#FFFFFF", oai-bg-system-elevated: "#FFFFFF", oai-bg-status-error: "#FFF0F0", oai-bg-status-success: "#D9F4E4", oai-bg-status-warning: "#FFF5F0", oai-border-default: "#0D0D0D1A", oai-border-heavy: "#0D0D0D26", oai-border-light: "#0D0D0D0D", oai-border-system-separator: "#E8E8E8", oai-border-status-error: "#FFE1E0", oai-border-status-success: "#004F1F", oai-border-status-warning: "#FFE7D9", oai-icon-primary: "#0D0D0D", oai-icon-secondary: "#5D5D5D", oai-icon-tertiary: "#8F8F8F", oai-icon-system-disclosure: "#8A8A8E", oai-icon-inverted: "#FFFFFF", oai-icon-inverted-static: "#FFFFFF", oai-icon-accent: "#0285FF", oai-icon-status-error: "#FF002A", oai-icon-status-success: "#004F1F", oai-icon-status-warning: "#E25507", oai-text-primary: "#0D0D0D", oai-text-secondary: "#5D5D5D", oai-text-system-secondary: "#3C3C4399", oai-text-system-link: "#0088FF", oai-text-ios-link: "#0285FF", oai-text-android-link: "#1D53BF", oai-text-tertiary: "#8F8F8F", oai-text-inverse: "#FFFFFF", oai-text-inverted-static: "#FFFFFF", oai-text-accent: "#0285FF", oai-text-status-error: "#FF002A", oai-text-status-success: "#004F1F", oai-text-status-warning: "#E25507", oai-interactive-bg-primary-default: "#0D0D0D", oai-interactive-bg-primary-hover: "#0D0D0D", oai-interactive-bg-primary-press: "#0D0D0D", oai-interactive-bg-secondary-default: "#0D0D0D", oai-interactive-bg-tertiary-default: "#FFFFFF", oai-interactive-bg-tertiary-hover: "#F9F9F9", oai-interactive-bg-tertiary-press: "#F3F3F3", oai-interactive-bg-row-hover: "#F3F3F3", oai-interactive-bg-row-press: "#F9F9F9", oai-interactive-bg-danger-primary-default: "#FF002A", oai-interactive-bg-system-destructive: "#FF383C", oai-interactive-bg-control-default: "#CDCDCD", oai-interactive-bg-switch-selected: "#34C759", oai-interactive-bg-switch-thumb: "#FFFFFF", oai-interactive-border-focus: "#0D0D0D", oai-interactive-border-secondary-default: "#0D0D0D", oai-interactive-border-danger-secondary-default: "#FF002A", oai-interactive-label-primary-default: "#FFFFFF", oai-interactive-label-secondary-default: "#0D0D0D", oai-interactive-label-tertiary-default: "#5D5D5D", oai-interactive-label-accent-default: "#0285FF", oai-interactive-label-danger-primary-default: "#FFFFFF", oai-interactive-label-danger-secondary-default: "#FF002A", oai-theme-default: "#8F8F8F", oai-theme-background: "#F3F3F3", oai-theme-text: "#000000", oai-theme-static: "#8F8F8F", oai-theme-codex-default: "#0169CC", oai-theme-codex-background: "#FFFFFF", oai-theme-codex-text: "#339CFF", oai-theme-blue-default: "#0285FF", oai-theme-blue-background: "#E5F3FF", oai-theme-blue-text: "#0169CC", oai-theme-green-default: "#04B84C", oai-theme-green-background: "#D9F4E4", oai-theme-green-text: "#00A240", oai-accent-mint-background-subtle: "#D7FFF5", oai-accent-mint-text-on-subtle: "#027C6A", oai-theme-orange-default: "#FB6A22", oai-theme-orange-background: "#FFE7D9", oai-theme-orange-text: "#E25507", oai-theme-purple-default: "#AD7BF9", oai-theme-purple-background: "#EFE5FE", oai-theme-purple-text: "#8046D9", oai-theme-yellow-default: "#FFC300", oai-theme-yellow-background: "#FFF6D9", oai-theme-yellow-text: "#BA8E00", oai-shadow-color: "#00000024", transparent: "#00000000"};
  exports.OAI_DARK_COLOR_PALETTE = {oai-bg-canvas: "#000000", oai-bg-canvas-subtle: "#000000", oai-bg-canvas-transparent: "#00000000", oai-bg-primary: "#212121", oai-bg-primary-inverse: "#131313", oai-bg-secondary: "#303030", oai-bg-tertiary: "#414141", oai-bg-layer-3: "#414141", oai-bg-user-message: "#FFFFFF21", oai-bg-code-block: "#212121", oai-bg-scrim: "#0D0D0D80", oai-bg-elevated-primary: "#303030", oai-bg-elevated-secondary: "#212121", oai-bg-grouped: "#000000", oai-bg-grouped-elevated: "#1C1C1E", oai-bg-grouped-surface: "#2C2C2E", oai-bg-system-elevated: "#1C1C1E", oai-bg-status-error: "#4D100E", oai-bg-status-success: "#004F1F", oai-bg-status-warning: "#4A2206", oai-border-default: "#FFFFFF26", oai-border-heavy: "#FFFFFF33", oai-border-light: "#FFFFFF0D", oai-border-system-separator: "#38383B", oai-border-status-error: "#4D100E", oai-border-status-success: "#EDFAF2", oai-border-status-warning: "#4A2206", oai-icon-primary: "#FFFFFF", oai-icon-secondary: "#CDCDCD", oai-icon-tertiary: "#AFAFAF", oai-icon-system-disclosure: "#9F9FA5", oai-icon-inverted: "#0D0D0D", oai-icon-inverted-static: "#FFFFFF", oai-icon-accent: "#48AAFF", oai-icon-status-error: "#FF8583", oai-icon-status-success: "#EDFAF2", oai-icon-status-warning: "#FF9E6C", oai-text-primary: "#FFFFFF", oai-text-secondary: "#CDCDCD", oai-text-system-secondary: "#EBEBF599", oai-text-system-link: "#0091FF", oai-text-ios-link: "#48AAFF", oai-text-android-link: "#7AB7FF", oai-text-tertiary: "#AFAFAF", oai-text-inverse: "#0D0D0D", oai-text-inverted-static: "#FFFFFF", oai-text-accent: "#48AAFF", oai-text-status-error: "#FF8583", oai-text-status-success: "#EDFAF2", oai-text-status-warning: "#FF9E6C", oai-interactive-bg-primary-default: "#FFFFFF", oai-interactive-bg-primary-hover: "#FFFFFF", oai-interactive-bg-primary-press: "#FFFFFF", oai-interactive-bg-secondary-default: "#FFFFFF", oai-interactive-bg-tertiary-default: "#212121", oai-interactive-bg-tertiary-hover: "#181818", oai-interactive-bg-tertiary-press: "#0D0D0D", oai-interactive-bg-row-hover: "#131313", oai-interactive-bg-row-press: "#181818", oai-interactive-bg-danger-primary-default: "#FF002A", oai-interactive-bg-system-destructive: "#FF4245", oai-interactive-bg-control-default: "#414141", oai-interactive-bg-switch-selected: "#30D158", oai-interactive-bg-switch-thumb: "#FFFFFF", oai-interactive-border-focus: "#FFFFFF", oai-interactive-border-secondary-default: "#FFFFFF", oai-interactive-border-danger-secondary-default: "#FA423E", oai-interactive-label-primary-default: "#0D0D0D", oai-interactive-label-secondary-default: "#FFFFFF", oai-interactive-label-tertiary-default: "#CDCDCD", oai-interactive-label-accent-default: "#48AAFF", oai-interactive-label-danger-primary-default: "#FFFFFF", oai-interactive-label-danger-secondary-default: "#FA423E", oai-theme-default: "#AFAFAF", oai-theme-background: "#414141", oai-theme-text: "#FFFFFF", oai-theme-static: "#8F8F8F", oai-theme-codex-default: "#0169CC", oai-theme-codex-background: "#0D0D0D", oai-theme-codex-text: "#99CEFF", oai-theme-blue-default: "#0285FF", oai-theme-blue-background: "#013566", oai-theme-blue-text: "#0169CC", oai-theme-green-default: "#04B84C", oai-theme-green-background: "#004F1F", oai-theme-green-text: "#00A240", oai-accent-mint-background-subtle: "#032A23", oai-accent-mint-text-on-subtle: "#8DEED8", oai-theme-orange-default: "#FB6A22", oai-theme-orange-background: "#6D2E0F", oai-theme-orange-text: "#FB6A22", oai-theme-purple-default: "#AD7BF9", oai-theme-purple-background: "#3F226A", oai-theme-purple-text: "#AD7BF9", oai-theme-yellow-default: "#FFC300", oai-theme-yellow-background: "#6E5400", oai-theme-yellow-text: "#FFC300", oai-shadow-color: "#0000005C", transparent: "#00000000"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_core/src/OAITheme
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
