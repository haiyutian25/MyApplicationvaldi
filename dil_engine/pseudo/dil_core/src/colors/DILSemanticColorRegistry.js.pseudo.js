// fn y  args=3 vars=3 closure=0 cpool=0 bc=20B file=dil_core/src/colors/DILSemanticColorRegistry
// args: r, o, e
function {
  return {aliases: r, tokens: o, literalPrefixes: e};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_core/src/colors/DILSemanticColorRegistry
// args: r
// closure: c
function {
  c[r] = true;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=dil_core/src/colors/DILSemanticColorRegistry
// args: o
// closure: r
function {
  return r.startsWith("".concat(o, "-"));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=55B file=dil_core/src/colors/DILSemanticColorRegistry
// args: r
// closure: o, c
function {
  if (!(o.some(function <atom:0>))) goto L_36;
  c[r] = true;
  true;
  return;
}

// fn p  args=0 vars=1 closure=3 cpool=2 bc=167B file=dil_core/src/colors/DILSemanticColorRegistry
// locals: c
// closure: o, e, r
function {
  let c;
  c = {};
  e.forEach(function <atom:0>);
  Object.keys(r.DIL_COLORS_DEFINITION).forEach(function <atom:0>);
  return c;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_core/src/colors/DILSemanticColorRegistry
// args: r
// closure: o
function {
  o[r] = true;
  return;
}

// fn k  args=1 vars=2 closure=0 cpool=1 bc=49B file=dil_core/src/colors/DILSemanticColorRegistry
// args: r
// locals: o
function {
  let o;
  o = {};
  r.forEach(function <atom:0>);
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_core/src/colors/DILSemanticColorRegistry
// args: r
// closure: o
function {
  o[r] = true;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=81B file=dil_core/src/colors/DILSemanticColorRegistry
// args: r
// closure: o
function {
  Object.keys(r).forEach(function <atom:0>);
  return;
}

// fn x  args=1 vars=2 closure=0 cpool=1 bc=49B file=dil_core/src/colors/DILSemanticColorRegistry
// args: r
// locals: o
function {
  let o;
  o = {};
  r.forEach(function <atom:0>);
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=dil_core/src/colors/DILSemanticColorRegistry
// args: o
// closure: r
function {
  if (((r === o))) goto L_57;
  return r.startsWith("".concat(o, "-"));
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=53B file=dil_core/src/colors/DILSemanticColorRegistry
// args: r
// closure: o, e
function {
  if (!(o.some(function <atom:0>))) goto L_34;
  e[r] = true;
  true;
  return;
}

// fn w  args=1 vars=2 closure=1 cpool=1 bc=125B file=dil_core/src/colors/DILSemanticColorRegistry
// args: o
// locals: e
// closure: r
function {
  let e;
  e = {};
  Object.keys(r.DIL_SEMANTIC_COLORS_DEFINITION).forEach(function <atom:0>);
  return e;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=5 bc=1455B file=dil_core/src/colors/DILSemanticColorRegistry
// args: require, module, exports
// locals: r, o, e, c, a, s, n, l, t, u, d, i, g, b, f, y, p, k, x, w
function {
  y = function y;
  p = function p;
  k = function k;
  x = function x;
  w = function w;
  let f;
  let b;
  let g;
  let i;
  let d;
  let u;
  let t;
  let l;
  let n;
  let s;
  let a;
  let c;
  let e;
  let o;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_SEMANTIC_COLOR_REGISTRY = undefined;
  r = require("./DILColorsDefinition");
  o = ["alpha", "blue", "gray", "green", "orange", "pink", "purple", "red", "yellow"];
  e = ["black", "white"];
  c = ["none", "transparent"];
  a = {text: {blue: "blue-500", gray: "gray-700", green: "green-700", orange: "orange-700", pink: "pink-600", purple: "purple-700", red: "red-700", yellow: "yellow-700"}, background: {blue: "blue-a50", gray: "gray-100", green: "green-a50", orange: "orange-a50", pink: "pink-a50", purple: "purple-a50", red: "red-a50", yellow: "yellow-a50"}, border: {blue: "blue-a100", gray: "gray-200", green: "green-a100", orange: "orange-a100", pink: "pink-a100", purple: "purple-a100", red: "red-a100", yellow: "yellow-a100"}};
  null;
  a.text;
  s = {default: "color-text-prose", prose: "color-text-prose", primary: "color-text-primary", emphasis: "color-text-emphasis", secondary: "color-text-secondary", tertiary: "color-text-tertiary", info: "color-text-info", discovery: "color-text-discovery", caution: "color-text-caution", success: "color-text-success", warning: "color-text-warning", danger: "color-text-danger"};
  null;
  a.background;
  n = {surface: "color-surface", surface-inverted: "color-text-prose", surface-secondary: "color-surface-secondary", surface-tertiary: "color-surface-tertiary", surface-soft: "color-surface-soft", surface-elevated: "color-surface-elevated", surface-elevated-secondary: "color-surface-elevated-secondary", info: "color-background-info-surface", warning: "color-background-warning-surface", caution: "color-background-caution-surface", success: "color-background-success-surface", danger: "color-background-danger-surface", discovery: "color-background-discovery-surface", info-solid: "color-background-info-solid", warning-solid: "color-background-warning-solid", caution-solid: "color-background-caution-solid", success-solid: "color-background-success-solid", danger-solid: "color-background-danger-solid", discovery-solid: "color-background-discovery-solid", border: "color-border", border-subtle: "color-border-subtle", border-strong: "color-border-strong"};
  null;
  a.border;
  l = {default: "color-border", subtle: "color-border-subtle", strong: "color-border-strong", info: "color-border-info-surface", warning: "color-border-warning-surface", caution: "color-border-caution-surface", success: "color-border-success-surface", danger: "color-border-danger-surface", discovery: "color-border-discovery-surface"};
  t = ["secondary", "success", "danger", "warning", "info", "discovery"];
  u = ["primary", "secondary", "success", "danger", "warning", "info", "discovery", "caution"];
  d = ["blue", "purple", "orange", "green", "red", "yellow", "pink"];
  i = ["#", "rgb(", "rgba(", "hsl(", "hsla(", "hwb(", "lab(", "lch(", "oklab(", "oklch(", "color("];
  g = p();
  b = k(c);
  f = x([b, g, w(["color"])]);
  exports.DIL_SEMANTIC_COLOR_REGISTRY = {base: y({}, f, i), text: y(s, x([b, g, w(["color-text"])]), i), background: y(n, x([b, g, w(["color-background", "color-surface"])]), i), border: y(l, x([b, g, w(["color-border"])]), i), badge: y({}, k(t), []), button: y({}, k(u), []), chart: y({}, k(d), i)};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/colors/DILSemanticColorRegistry
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
