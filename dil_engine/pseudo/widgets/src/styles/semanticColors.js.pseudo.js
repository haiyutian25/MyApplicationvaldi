// fn e  args=1 vars=1 closure=1 cpool=0 bc=39B file=widgets/src/styles/semanticColors
// args: t
// closure: r
function {
  return r.DARK_PALETTE[t];
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=39B file=widgets/src/styles/semanticColors
// args: t
// closure: r
function {
  return r.LIGHT_PALETTE[t];
}

// fn n  args=3 vars=5 closure=4 cpool=1 bc=899B file=widgets/src/styles/semanticColors
// args: r, n, s
// locals: i, t
// closure: a, t, o, e
function {
  let i;
  i = undefined;
  if (!((s == null))) goto L_2d;
  s;
  if (!((a.Current === a.Current))) goto L_81;
  i = t.getCurrentPalette()[r];
  t.getCurrentPalette()[r];
  goto L_df;
  if (!((a.Current === a.Light))) goto L_b1;
  i = o(r);
  o(r);
  goto L_df;
  if (!((a.Current === a.Dark))) goto L_df;
  i = e(r);
  e(r);
  a.Current;
  if (!(i.startsWith("#"))) goto L_209;
  return (i + Math.round((255 * Math.min(Math.max(n, 0), 1))).toString(16).padStart(2, "0").toUpperCase());
  if (!(i.startsWith("rgb("))) goto L_29a;
  return (((("rgba" + i.substring(3).slice(0, -1)) + ", ") + n) + ")");
  if (!(i.startsWith("rgba"))) goto L_37f;
  let t;
  t = i.split(",");
  t.pop();
  t.push(((" " + n) + ")"));
  return t.toString();   // tail call
  return i;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=widgets/src/styles/semanticColors
// args: t
function {
  t.Current = 0;
  t[0] = "Current";
  t.Light = 1;
  t[1] = "Light";
  t.Dark = 2;
  t[2] = "Dark";
  return;
}

// fn i  args=3 vars=6 closure=0 cpool=3 bc=242B file=widgets/src/styles/semanticColors
// args: t, r, e
// locals: o, a, n
function {
  let n;
  let a;
  let o;
  o = t.toString(16);
  a = r.toString(16);
  n = e.toString(16);
  if (!((o.length < 2))) goto L_95;
  o = ("0" + o);
  ("0" + o);
  if (!((a.length < 2))) goto L_aa;
  a = ("0" + a);
  ("0" + a);
  if (!((n.length < 2))) goto L_bf;
  n = ("0" + n);
  ("0" + n);
  return "#".concat(o, a, n);   // tail call
}

// fn c  args=3 vars=11 closure=1 cpool=0 bc=457B file=widgets/src/styles/semanticColors
// args: t, r, e
// locals: o, a, n, s, c, u, l, g
// closure: i
function {
  let g;
  let l;
  let u;
  let c;
  let s;
  let n;
  let a;
  let o;
  o = undefined;
  a = undefined;
  n = undefined;
  s = Math.floor((6 * t));
  c = ((6 * t) - s);
  u = (e * (1 - r));
  l = (e * (1 - (c * r)));
  g = (e * (1 - ((1 - c) * r)));
  if (!(((s % 6) === 0))) goto L_96;
  o = e;
  e;
  a = g;
  g;
  n = u;
  u;
  goto L_134;
  if (!(((s % 6) === 1))) goto L_b4;
  o = l;
  l;
  a = e;
  e;
  n = u;
  u;
  goto L_134;
  if (!(((s % 6) === 2))) goto L_d1;
  o = u;
  u;
  a = e;
  e;
  n = g;
  g;
  goto L_134;
  if (!(((s % 6) === 3))) goto L_ee;
  o = u;
  u;
  a = l;
  l;
  n = e;
  e;
  goto L_134;
  if (!(((s % 6) === 4))) goto L_10b;
  o = g;
  g;
  a = u;
  u;
  n = e;
  e;
  goto L_134;
  if (!(((s % 6) === 5))) goto L_128;
  o = e;
  e;
  a = u;
  u;
  n = l;
  l;
  goto L_134;
  throw Error("Invalid values");
  (s % 6);
  return i(Math.round((255 * o)), Math.round((255 * a)), Math.round((255 * n)));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=widgets/src/styles/semanticColors
// closure: s
function {
  return s.SemanticColor;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=7 bc=333B file=widgets/src/styles/semanticColors
// args: require, module, exports
// locals: t, r, e, o, a, n, s, i, c
function {
  e = function e;
  o = function o;
  n = function n;
  i = function i;
  c = function c;
  let r;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.alwaysDark = undefined;
  exports.alwaysLight = undefined;
  exports.SemanticColorPalette = undefined;
  exports.getSemanticColorWithAlpha = undefined;
  exports.SemanticColor = undefined;
  exports.rgbToString = undefined;
  exports.hsvToRgb = undefined;
  t = require("widgets/src/InitSemanticColors");
  r = require("widgets/src/ColorSpec");
  exports.alwaysDark = e;
  exports.alwaysLight = o;
  if ((a)) goto L_d9;
  a = {};
  exports.SemanticColorPalette = {};
  function <atom:0>({});
  exports.getSemanticColorWithAlpha = n;
  s = require("./semanticColorsGen");
  Object.defineProperty(exports, "SemanticColor", {enumerable: true, get: function <atom:0>});
  exports.rgbToString = i;
  exports.hsvToRgb = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/styles/semanticColors
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
