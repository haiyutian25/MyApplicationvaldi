// fn t  args=0 vars=2 closure=2 cpool=0 bc=248B file=valdi_ui_theme/src/ValdiUITheme
// locals: e, r
// closure: o, exports
function {
  let r;
  let e;
  e = o.resolveProviderSource();
  r = exports.ValdiUIThemeProvider.getProviderKey();
  if (!((e == null))) goto L_80;
  e;
  goto L_a7;
  if (!((true === undefined.hasValue(r)))) goto L_d5;
  return e.getValue(r);
  return exports.DEFAULT_VALDI_UI_THEME;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=597B file=valdi_ui_theme/src/ValdiUITheme
// args: require, module, exports
// locals: e, r, o, t
function {
  t = function t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DEFAULT_VALDI_UI_THEME = undefined;
  exports.ValdiUIThemeProvider = undefined;
  exports.resolveValdiUITheme = undefined;
  e = require("valdi_core/src/SystemFont");
  r = require("valdi_core/src/provider/createProvider");
  o = require("valdi_core/src/provider/resolveProviderSource");
  exports.DEFAULT_VALDI_UI_THEME = {colors: {accent: "#111111", accentPressed: "#333333", border: "#DDDDDD", canvas: "#FFFFFF", disabled: "#E8E8E8", groupedSurface: "#F3F3F3", mutedSurface: "#F3F3F3", mutedText: "#666666", onAccent: "#FFFFFF", onDisabled: "#888888", surface: "#FFFFFF", text: "#111111"}, metrics: {badgeSize: 18, compactControlHeight: 36, controlHeight: 44, navigationItemHeight: 52}, shape: {controlRadius: 12, pillRadius: 999, surfaceRadius: 16}, spacing: {large: 24, medium: 16, small: 8}, typography: {body: e.systemFont(15), caption: e.systemFont(12), heading: e.systemSemiboldFont(20), label: e.systemSemiboldFont(15)}};
  exports.ValdiUIThemeProvider = r.createProviderComponentWithKeyName("ValdiUITheme");
  exports.resolveValdiUITheme = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui_theme/src/ValdiUITheme
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
