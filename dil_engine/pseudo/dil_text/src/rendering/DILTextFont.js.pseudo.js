// fn n  args=4 vars=6 closure=4 cpool=0 bc=71B file=dil_text/src/rendering/DILTextFont
// args: t, o, n, s
// locals: y, m
// closure: i, l, e, r
function {
  let m;
  let y;
  y = i(t, s);
  m = l(t, s, y);
  return e.dynamicSystemFontForTextStyle(y, m, r(o), (true === n));   // tail call
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=307B file=dil_text/src/rendering/DILTextFont
// args: t
// closure: e
function {
  if (!(("medium" === t))) goto L_4f;
  return e.DILSystemFontWeight.Medium;
  if (!(("semibold" === t))) goto L_9e;
  return e.DILSystemFontWeight.Semibold;
  if (!(("bold" === t))) goto L_ed;
  return e.DILSystemFontWeight.Bold;
  return e.DILSystemFontWeight.Normal;
}

// fn i  args=2 vars=2 closure=5 cpool=0 bc=270B file=dil_text/src/rendering/DILTextFont
// args: e, n
// closure: o, t, y, m, s
function {
  if (!((n === o.Title))) goto L_59;
  if (!(("number" != typeof e))) goto L_59;
  return t.resolveDILTitleFontSize(y(e));
  if (!((n === o.Caption))) goto L_b2;
  if (!(("number" != typeof e))) goto L_b2;
  return t.resolveDILCaptionFontSize(m(e));
  if (!(("number" == typeof e))) goto L_e3;
  return t.resolveDILTextFontSize(e);
  return t.resolveDILTextFontSize(s(e));
}

// fn l  args=3 vars=3 closure=6 cpool=0 bc=329B file=dil_text/src/rendering/DILTextFont
// args: n, r, i
// closure: e, o, t, y, m, s
function {
  if (!(("number" == typeof n))) goto L_31;
  return e.resolveDILDynamicTextStyleForFontSize(i);
  if (!((r === o.Title))) goto L_80;
  return t.resolveDILTitleDynamicTextStyle(y(n));
  if (!((r === o.Caption))) goto L_d1;
  return t.resolveDILCaptionDynamicTextStyle(m(n));
  if (!((r === o.Text))) goto L_122;
  return t.resolveDILTextDynamicTextStyle(s(n));
  return e.resolveDILDynamicTextStyleForFontSize(i);
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=78B file=dil_text/src/rendering/DILTextFont
// args: e
function {
  if ((("3xs" === e))) goto L_49;
  if ((("2xs" === e))) goto L_49;
  if ((("xs" === e))) goto L_49;
  if ((("sm" === e))) goto L_49;
  if ((("md" === e))) goto L_49;
  if ((("lg" === e))) goto L_49;
  if (!(("xl" === e))) goto L_4d;
  return e;
  return;
}

// fn y  args=1 vars=1 closure=0 cpool=0 bc=31B file=dil_text/src/rendering/DILTextFont
// args: e
function {
  if (!(("string" == typeof e))) goto L_1e;
  if (!(("3xs" !== e))) goto L_1e;
  if (!(("2xs" !== e))) goto L_1e;
  return e;
  return;
}

// fn m  args=1 vars=1 closure=0 cpool=0 bc=34B file=dil_text/src/rendering/DILTextFont
// args: e
function {
  if ((("sm" === e))) goto L_1d;
  if ((("md" === e))) goto L_1d;
  if (!(("lg" === e))) goto L_21;
  return e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_text/src/rendering/DILTextFont
// args: e
function {
  e.Text = 0;
  e[0] = "Text";
  e.Title = 1;
  e[1] = "Title";
  e.Caption = 2;
  e[2] = "Caption";
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=8 bc=185B file=dil_text/src/rendering/DILTextFont
// args: require, module, exports
// locals: e, t, o, n, r, i, l, s, y, m
function {
  n = function n;
  r = function r;
  i = function i;
  l = function l;
  s = function s;
  y = function y;
  m = function m;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILFontRole = undefined;
  exports.resolveFont = undefined;
  exports.resolveDILRoleFontSize = undefined;
  e = require("dil_core/src/typography/DILDynamicFont");
  t = require("./DILTextTypography");
  if ((o)) goto L_9e;
  o = {};
  exports.DILFontRole = {};
  !function <atom:0>({});
  exports.resolveFont = n;
  exports.resolveDILRoleFontSize = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILTextFont
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
