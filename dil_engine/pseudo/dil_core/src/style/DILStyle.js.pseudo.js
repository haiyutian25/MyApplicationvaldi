// fn l  args=3 vars=9 closure=7 cpool=0 bc=324B file=dil_core/src/style/DILStyle
// args: t, n, o
// locals: i, c, s, n#1, a, t#1
// closure: h, m, x, e, r, b, y
function {
  let c;
  let i;
  i = h(n, o);
  if (!((undefined === i))) goto L_15;
  return false;
  c = false;
  let s;
  for (const s of i) {
    let n#1;
    n#1 = i[s];
    if (!((null != n#1))) continue;
    try { // catch -> L_4b
    m(t, s, n#1);
    <catch>;
    goto L_131;
    // [栈深重同步 2 -> 4]
    a = <?>;
    try { // catch -> L_130
    let t#1;
    t#1 = x(a);
    if (!(e.isLoggingEnabled)) goto L_e0;
    console.error("Failed to apply DIL style property "".concat(s, ""."), t#1);
    null;
    b(a);
    r.notifyDILWarningReporter(o, "Failed to apply DIL style property", {style_property: s, style_value: y(n#1)});
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
    c = true;
    true;
  }
  _it1.next;
  return c;
}

// fn u  args=1 vars=3 closure=2 cpool=0 bc=163B file=dil_core/src/style/DILStyle
// args: e
// locals: r, t
// closure: h, G
function {
  let t;
  let r;
  r = h(e, undefined);
  if (!((undefined === r))) goto L_14;
  return {};
  t = G(r.overflow);
  if (!((G(r.overflowX) == null))) goto L_6a;
  G(r.overflowX);
  if (!((G(r.overflowY) == null))) goto L_9d;
  G(r.overflowY);
  return {x: t, y: t};
}

// fn f  args=2 vars=2 closure=2 cpool=0 bc=9B file=dil_core/src/style/DILStyle
// args: e, r
// closure: p, h
function {
  return p(h(e, r), r);   // tail call
}

// fn d  args=2 vars=4 closure=3 cpool=0 bc=137B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t, n
// closure: h, c, p
function {
  let n;
  let t;
  t = h(e, r);
  if (!((undefined === t))) goto L_14;
  return {};
  n = c.parseCSSValue(t.fontSize);
  if (!(("number" == typeof n))) goto L_77;
  if (!((n > 0))) goto L_77;
  goto L_78;
  // [栈深重同步 2 -> 1]
  return {fontSize: undefined, lineHeight: p(t, r)};
}

// fn p  args=2 vars=6 closure=6 cpool=0 bc=258B file=dil_core/src/style/DILStyle
// args: t, n
// locals: o, i, t#1, c
// closure: X, x, e, r, b, y
function {
  let o;
  if (!((t == null))) goto L_c;
  t;
  goto L_2d;
  o = undefined.lineHeight;
  if (!((null != o))) goto L_101;
  try { // catch -> L_44
  return X(o);
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_100
  let c;
  let t#1;
  t#1 = "Failed to parse DIL style lineHeight.";
  c = x(i);
  if (!(e.isLoggingEnabled)) goto L_b1;
  console.warn(t#1, c);
  null;
  b(i);
  r.notifyDILWarningReporter(n, t#1, {style_property: "lineHeight", style_value: y(o)});
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn v  args=2 vars=2 closure=0 cpool=0 bc=157B file=dil_core/src/style/DILStyle
// args: e, r
function {
  if (!(("normal" !== e.unit))) goto L_9c;
  if (!(("ratio" === e.unit))) goto L_77;
  return e.value;
  return (e.value / r);
  return;
}

// fn g  args=2 vars=2 closure=0 cpool=0 bc=157B file=dil_core/src/style/DILStyle
// args: e, r
function {
  if (!(("normal" !== e.unit))) goto L_9c;
  if (!(("pixels" === e.unit))) goto L_77;
  return e.value;
  return (e.value * r);
  return;
}

// fn h  args=2 vars=5 closure=4 cpool=0 bc=243B file=dil_core/src/style/DILStyle
// args: t, n
// locals: e, o, t#1
// closure: w, e, r, b
function {
  if (!((undefined !== t))) goto L_f2;
  if (!(("string" != typeof t))) goto L_1b;
  if (!(w(t))) goto L_19;
  return t;
  return undefined;
  try { // catch -> L_5c
  let e;
  e = JSON.parse(t);
  if (!(w(e))) goto L_5a;
  return e;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_f1
  let t#1;
  t#1 = "Failed to parse DIL style JSON.";
  if (!(e.isLoggingEnabled)) goto L_c0;
  console.warn(t#1, o);
  r.notifyDILWarningReporter(n, t#1, b(o));
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn w  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_core/src/style/DILStyle
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  return !Array.isArray(e);
}

// fn m  args=3 vars=4 closure=1 cpool=0 bc=38B file=dil_core/src/style/DILStyle
// args: e, r, t
// locals: n
// closure: s
function {
  let n;
  n = s[r];
  if (!((undefined === n))) goto L_1f;
  throw new Error("Unsupported property.");
  n(e, t);
  return;
}

// fn x  args=1 vars=1 closure=0 cpool=0 bc=52B file=dil_core/src/style/DILStyle
// args: e
function {
  if (!((e instanceof Error))) goto L_2c;
  return e.message;
  return String(e);
}

// fn b  args=1 vars=1 closure=0 cpool=0 bc=113B file=dil_core/src/style/DILStyle
// args: e
function {
  if (!((e instanceof Error))) goto L_59;
  return {error_message: e.message, error_name: e.name};
  return {error_message: String(e), error_name: "Error"};
}

// fn y  args=1 vars=1 closure=0 cpool=0 bc=66B file=dil_core/src/style/DILStyle
// args: e
function {
  if (!(("string" == typeof e))) goto L_3a;
  return """.concat(e, """);
  return String(e);
}

// fn E  args=2 vars=2 closure=3 cpool=0 bc=167B file=dil_core/src/style/DILStyle
// args: e, r
// closure: o, i, L
function {
  if (!(("string" == typeof r))) goto L_a1;
  if (!(o.isDILCSSBackground(r))) goto L_a1;
  if (!(r.startsWith("url("))) goto L_70;
  throw new Error("Image URLs are not supported.");
  e.background = i.resolveDILCSSBackgroundForValdi(r);
  return;
  L(e, r);
  return;
}

// fn S  args=2 vars=2 closure=1 cpool=0 bc=116B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if (!(("flex-start" !== r))) goto L_68;
  if (!(("center" !== r))) goto L_68;
  if (!(("flex-end" !== r))) goto L_68;
  if (!(("stretch" !== r))) goto L_68;
  if (!(("baseline" !== r))) goto L_68;
  throw new Error("Expected "flex-start", "center", "flex-end", "stretch", or "baseline", received ".concat(y(r), "."));
  e.alignItems = r;
  return;
}

// fn I  args=2 vars=2 closure=1 cpool=0 bc=146B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if (!(("auto" !== r))) goto L_86;
  if (!(("flex-start" !== r))) goto L_86;
  if (!(("center" !== r))) goto L_86;
  if (!(("flex-end" !== r))) goto L_86;
  if (!(("stretch" !== r))) goto L_86;
  if (!(("baseline" !== r))) goto L_86;
  if (!(("space-between" !== r))) goto L_86;
  if (!(("space-around" !== r))) goto L_86;
  throw new Error("Expected "auto", "flex-start", "center", "flex-end", "stretch", "baseline", "space-between", or "space-around", received ".concat(y(r), "."));
  e.alignSelf = r;
  return;
}

// fn L  args=2 vars=3 closure=2 cpool=0 bc=122B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: o, y
function {
  let t;
  t = o.resolveDILBackgroundColor(r);
  if (!((undefined === t))) goto L_6c;
  throw new Error("Expected a DIL background color value, received ".concat(y(r), "."));
  e.backgroundColor = t;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=dil_core/src/style/DILStyle
// args: r
// closure: e
function {
  e.bottom = r;
  return;
}

// fn $  args=2 vars=2 closure=1 cpool=1 bc=6B file=dil_core/src/style/DILStyle
// args: e, r
// closure: R
function {
  R(function <atom:0>, r);
  return;
}

// fn D  args=2 vars=3 closure=2 cpool=0 bc=152B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: c, y
function {
  let t;
  t = c.parseCSSValue(r);
  if (!((undefined === t))) goto L_8a;
  if ((("string" != typeof r))) goto L_41;
  if (!((0 === r.length))) goto L_7e;
  throw new Error("Expected a radius value, received ".concat(y(r), "."));
  e.borderRadius = r;
  return;
  e.borderRadius = t;
  return;
}

// fn C  args=2 vars=2 closure=1 cpool=0 bc=89B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if ((("string" != typeof r))) goto L_10;
  if (!((0 === r.length))) goto L_4d;
  throw new Error("Expected a non-empty shadow string, received ".concat(y(r), "."));
  e.boxShadow = r;
  return;
}

// fn V  args=2 vars=2 closure=1 cpool=0 bc=69B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if (!(("border-box" !== r))) goto L_44;
  throw new Error("Expected "border-box", received ".concat(y(r), "."));
  return;
}

// fn k  args=2 vars=2 closure=1 cpool=0 bc=78B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if ((("string" != typeof r))) goto L_10;
  if (!((0 === r.length))) goto L_4d;
  throw new Error("Expected a non-empty cursor string, received ".concat(y(r), "."));
  return;
}

// fn H  args=2 vars=2 closure=1 cpool=0 bc=89B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if (!(("flex" !== r))) goto L_4d;
  if (!(("grid" !== r))) goto L_4d;
  throw new Error("Expected "flex" or "grid", received ".concat(y(r), "."));
  e.display = r;
  return;
}

// fn R  args=2 vars=3 closure=2 cpool=0 bc=114B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: c, y
function {
  let t;
  t = c.parseCSSValue(r);
  if (!((undefined === t))) goto L_6c;
  throw new Error("Expected a finite number, px value, rem value, or percentage, received ".concat(y(r), "."));
  e(t);
  return;
}

// fn F  args=2 vars=3 closure=2 cpool=0 bc=326B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: y, a
function {
  let t;
  if (!(("number" != typeof r))) goto L_52;
  if (!(("string" != typeof r))) goto L_52;
  throw new Error("Expected a number, numeric string, CSS flex shorthand, or "auto", received ".concat(y(r), "."));
  t = a.resolveDILFlex(r);
  if (!((undefined === t))) goto L_bb;
  throw new Error("Expected a number, numeric string, CSS flex shorthand, or "auto", received ".concat(y(r), "."));
  e.flexGrow = t.grow;
  e.flexShrink = t.shrink;
  e.flexBasis = t.basis;
  return;
}

// fn _  args=2 vars=3 closure=2 cpool=0 bc=122B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: c, y
function {
  let t;
  t = c.parseNumericValue(r);
  if (!((undefined === t))) goto L_6c;
  throw new Error("Expected a finite number, received ".concat(y(r), "."));
  e.flexShrink = t;
  return;
}

// fn z  args=2 vars=2 closure=1 cpool=0 bc=4B file=dil_core/src/style/DILStyle
// args: e, r
// closure: U
function {
  U(r);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=dil_core/src/style/DILStyle
// args: r
// closure: e
function {
  e.height = r;
  return;
}

// fn N  args=2 vars=2 closure=1 cpool=1 bc=6B file=dil_core/src/style/DILStyle
// args: e, r
// closure: R
function {
  R(function <atom:0>, r);
  return;
}

// fn W  args=2 vars=2 closure=1 cpool=0 bc=125B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if (!(("flex-start" !== r))) goto L_71;
  if (!(("center" !== r))) goto L_71;
  if (!(("flex-end" !== r))) goto L_71;
  if (!(("space-between" !== r))) goto L_71;
  if (!(("space-around" !== r))) goto L_71;
  if (!(("space-evenly" !== r))) goto L_71;
  throw new Error("Expected "flex-start", "center", "flex-end", "space-between", "space-around", or "space-evenly", received ".concat(y(r), "."));
  e.justifyContent = r;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=dil_core/src/style/DILStyle
// args: r
// closure: e
function {
  e.left = r;
  return;
}

// fn B  args=2 vars=2 closure=1 cpool=1 bc=6B file=dil_core/src/style/DILStyle
// args: e, r
// closure: R
function {
  R(function <atom:0>, r);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=dil_core/src/style/DILStyle
// args: r
// closure: e
function {
  e.right = r;
  return;
}

// fn q  args=2 vars=2 closure=1 cpool=1 bc=6B file=dil_core/src/style/DILStyle
// args: e, r
// closure: R
function {
  R(function <atom:0>, r);
  return;
}

// fn A  args=2 vars=2 closure=1 cpool=0 bc=4B file=dil_core/src/style/DILStyle
// args: e, r
// closure: X
function {
  X(r);
  return;
}

// fn O  args=2 vars=3 closure=1 cpool=0 bc=34B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: Y
function {
  let t;
  t = Y(r);
  e.marginLeft = t;
  e.marginRight = t;
  return;
}

// fn P  args=2 vars=3 closure=1 cpool=0 bc=21B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: Y
function {
  let t;
  t = Y(r);
  e.marginLeft = t;
  return;
}

// fn j  args=2 vars=3 closure=1 cpool=0 bc=21B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: Y
function {
  let t;
  t = Y(r);
  e.marginRight = t;
  return;
}

// fn T  args=2 vars=3 closure=1 cpool=0 bc=21B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: Y
function {
  let t;
  t = Y(r);
  e.marginBottom = t;
  return;
}

// fn J  args=2 vars=3 closure=1 cpool=0 bc=21B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: Y
function {
  let t;
  t = Y(r);
  e.marginTop = t;
  return;
}

// fn U  args=1 vars=2 closure=2 cpool=0 bc=124B file=dil_core/src/style/DILStyle
// args: e
// locals: r
// closure: c, y
function {
  let r;
  r = c.parseCSSValue(e);
  if (!(("number" == typeof r))) goto L_41;
  if (!((r > 0))) goto L_41;
  return r;
  throw new Error("Expected a positive finite number, px value, or rem value, received ".concat(y(e), "."));
}

// fn X  args=1 vars=4 closure=2 cpool=0 bc=655B file=dil_core/src/style/DILStyle
// args: e
// locals: r, r#1, r#2
// closure: y, c
function {
  let r#2;
  if (!(("normal" === e))) goto L_18;
  return {unit: "normal"};
  if (!(("number" == typeof e))) goto L_9b;
  if (!(Number.isFinite(e))) goto L_60;
  return {unit: "ratio", value: e};
  throw new Error("Expected "normal", a finite number, px value, or percentage, received ".concat(y(e), "."));
  if (!(("string" != typeof e))) goto L_e0;
  throw new Error("Expected "normal", a finite number, px value, or percentage, received ".concat(y(e), "."));
  if (!(e.endsWith("%"))) goto L_17a;
  let r;
  r = c.parseFiniteNumber(e.slice(0, -1));
  if (!((undefined !== r))) goto L_17a;
  return {unit: "ratio", value: (r / 100)};
  if (!(e.endsWith("px"))) goto L_212;
  let r#1;
  r#1 = c.parseFiniteNumber(e.slice(0, -2));
  if (!((undefined !== r#1))) goto L_212;
  return {unit: "pixels", value: r#1};
  r#2 = c.parseFiniteNumber(e);
  if (!((undefined !== r#2))) goto L_254;
  return {unit: "ratio", value: r#2};
  throw new Error("Expected "normal", a finite number, px value, or percentage, received ".concat(y(e), "."));
}

// fn Y  args=1 vars=2 closure=2 cpool=0 bc=123B file=dil_core/src/style/DILStyle
// args: e
// locals: r
// closure: c, y
function {
  let r;
  if (!(("auto" === e))) goto L_e;
  return e;
  r = c.parseCSSValue(e);
  if (!((undefined === r))) goto L_77;
  throw new Error("Expected "auto", a finite number, px value, rem value, or percentage, received ".concat(y(e), "."));
  return r;
}

// fn G  args=1 vars=1 closure=0 cpool=0 bc=45B file=dil_core/src/style/DILStyle
// args: e
function {
  if ((("hidden" === e))) goto L_28;
  if ((("visible" === e))) goto L_28;
  if ((("scroll" === e))) goto L_28;
  if (!(("auto" === e))) goto L_2c;
  return e;
  return;
}

// fn M  args=2 vars=3 closure=3 cpool=0 bc=80B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: G, y, Z
function {
  let t;
  t = G(r);
  if (!((undefined === t))) goto L_49;
  throw new Error("Expected "hidden", "visible", "scroll", or "auto", received ".concat(y(r), "."));
  Z(e, t);
  return;
}

// fn K  args=2 vars=3 closure=3 cpool=0 bc=80B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: G, y, Z
function {
  let t;
  t = G(r);
  if (!((undefined === t))) goto L_49;
  throw new Error("Expected "hidden", "visible", "scroll", or "auto", received ".concat(y(r), "."));
  Z(e, t);
  return;
}

// fn Q  args=2 vars=3 closure=2 cpool=0 bc=140B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: c, y
function {
  let t;
  t = c.parseNumericValue(r);
  if (((undefined === t))) goto L_41;
  if (((t < 0))) goto L_41;
  if (!((t > 1))) goto L_7e;
  throw new Error("Expected a number between 0 and 1, received ".concat(y(r), "."));
  e.opacity = t;
  return;
}

// fn Z  args=2 vars=2 closure=2 cpool=0 bc=200B file=dil_core/src/style/DILStyle
// args: e, r
// closure: n, t
function {
  if (!(("hidden" !== r))) goto L_bb;
  if (!(("visible" === r))) goto L_aa;
  e.overflow = r;
  if ((n.Device.isWeb())) goto L_a7;
  if (!(t.isVersionAtLeast(91))) goto L_a7;
  e.extendViewportWithChildren = true;
  true;
  return undefined;
  e.overflow = "scroll";
  return undefined;
  e.slowClipping = true;
  return;
}

// fn ee  args=2 vars=2 closure=1 cpool=0 bc=149B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if (!(("none" === r))) goto L_22;
  e.showsHorizontalScrollIndicator = false;
  e.showsVerticalScrollIndicator = false;
  return;
  if ((("auto" === r))) goto L_3f;
  if ((("scrollbar" === r))) goto L_3f;
  if (!(("-ms-autohiding-scrollbar" === r))) goto L_5a;
  e.showsHorizontalScrollIndicator = true;
  e.showsVerticalScrollIndicator = true;
  return;
  throw new Error("Expected "none", "auto", "scrollbar", or "-ms-autohiding-scrollbar", received ".concat(y(r), "."));
}

// fn re  args=2 vars=2 closure=1 cpool=0 bc=138B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if (!(("none" === r))) goto L_22;
  e.showsHorizontalScrollIndicator = false;
  e.showsVerticalScrollIndicator = false;
  return;
  if ((("auto" === r))) goto L_34;
  if (!(("thin" === r))) goto L_4f;
  e.showsHorizontalScrollIndicator = true;
  e.showsVerticalScrollIndicator = true;
  return;
  throw new Error("Expected "none", "auto", or "thin", received ".concat(y(r), "."));
}

// fn te  args=2 vars=2 closure=1 cpool=0 bc=89B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if (!(("relative" !== r))) goto L_4d;
  if (!(("absolute" !== r))) goto L_4d;
  throw new Error("Expected "relative" or "absolute", received ".concat(y(r), "."));
  e.position = r;
  return;
}

// fn ne  args=2 vars=2 closure=1 cpool=0 bc=103B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if (!(("none" !== r))) goto L_5a;
  if (!(("auto" !== r))) goto L_4d;
  throw new Error("Expected "none" or "auto", received ".concat(y(r), "."));
  e.touchEnabled = true;
  return;
  e.touchEnabled = false;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=dil_core/src/style/DILStyle
// args: r
// closure: e
function {
  e.top = r;
  return;
}

// fn oe  args=2 vars=2 closure=1 cpool=1 bc=6B file=dil_core/src/style/DILStyle
// args: e, r
// closure: R
function {
  R(function <atom:0>, r);
  return;
}

// fn ie  args=2 vars=2 closure=1 cpool=0 bc=89B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if ((("string" != typeof r))) goto L_10;
  if (!((0 === r.length))) goto L_4d;
  throw new Error("Expected a non-empty transform origin string, received ".concat(y(r), "."));
  e.transformOrigin = r;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=dil_core/src/style/DILStyle
// args: r
// closure: e
function {
  e.width = r;
  return;
}

// fn ce  args=2 vars=2 closure=1 cpool=1 bc=6B file=dil_core/src/style/DILStyle
// args: e, r
// closure: R
function {
  R(function <atom:0>, r);
  return;
}

// fn ae  args=2 vars=3 closure=1 cpool=0 bc=326B file=dil_core/src/style/DILStyle
// args: e, r
// locals: t
// closure: y
function {
  let t;
  if (!(("number" == typeof r))) goto L_81;
  if (!(!Number.isFinite(r))) goto L_75;
  throw new Error("Expected a finite number, received ".concat(y(r), "."));
  e.zIndex = r;
  return;
  if (!(("string" != typeof r))) goto L_c6;
  throw new Error("Expected a finite number or numeric string, received ".concat(y(r), "."));
  t = Number(r);
  if (!(!Number.isFinite(t))) goto L_138;
  throw new Error("Expected a finite number or numeric string, received ".concat(y(r), "."));
  e.zIndex = t;
  return;
}

// fn se  args=2 vars=2 closure=1 cpool=0 bc=89B file=dil_core/src/style/DILStyle
// args: e, r
// closure: y
function {
  if ((("string" != typeof r))) goto L_10;
  if (!((0 === r.length))) goto L_4d;
  throw new Error("Expected a non-empty transform string, received ".concat(y(r), "."));
  e.transform = r;
  return;
}

// fn <atom:0>  args=3 vars=66 closure=0 cpool=54 bc=825B file=dil_core/src/style/DILStyle
// args: require, module, exports
// locals: e, r, t, n, o, i, c, a, s, l, u, f, d, p, v, g, h, w, m, x, b, y, E, S, I, L, $, D, C, V, k, H, R, F, _, z, N, W, B, q, A, O, P, j, T, J, U, X, Y, G, M, K, Q, Z, ee, re, te, ne, oe, ie, ce, ae, se
function {
  l = function l;
  u = function u;
  f = function f;
  d = function d;
  p = function p;
  v = function v;
  g = function g;
  h = function h;
  w = function w;
  m = function m;
  x = function x;
  b = function b;
  y = function y;
  E = function E;
  S = function S;
  I = function I;
  L = function L;
  $ = function $;
  D = function D;
  C = function C;
  V = function V;
  k = function k;
  H = function H;
  R = function R;
  F = function F;
  _ = function _;
  z = function z;
  N = function N;
  W = function W;
  B = function B;
  q = function q;
  A = function A;
  O = function O;
  P = function P;
  j = function j;
  T = function T;
  J = function J;
  U = function U;
  X = function X;
  Y = function Y;
  G = function G;
  M = function M;
  K = function K;
  Q = function Q;
  Z = function Z;
  ee = function ee;
  re = function re;
  te = function te;
  ne = function ne;
  oe = function oe;
  ie = function ie;
  ce = function ce;
  ae = function ae;
  se = function se;
  let s;
  let a;
  let c;
  let i;
  let o;
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.populateAttributesFromStyle = undefined;
  exports.getDILStyleOverflowAxes = undefined;
  exports.getDILStyleLineHeight = undefined;
  exports.getDILStyleTypography = undefined;
  exports.resolveDILStyleLineHeightRatio = undefined;
  exports.resolveDILStyleLineHeightPixels = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  r = require("dil_compiler/src/DILWarningRenderState");
  t = require("valdi_core/src/CompilerIntrinsics");
  n = require("valdi_core/src/Device");
  o = require("../colors/DILColor");
  i = require("../colors/DILCSSBackground");
  c = require("../utils/AttributeParser");
  a = require("../layout/DILLayout");
  s = {alignItems: S, alignSelf: I, background: E, backgroundColor: L, bottom: $, borderRadius: D, boxSizing: V, boxShadow: C, cursor: k, display: H, flex: F, flexShrink: _, fontSize: z, height: N, justifyContent: W, left: B, lineHeight: A, marginBlockEnd: T, marginBlockStart: J, marginBottom: T, marginInlineEnd: j, marginInline: O, marginInlineStart: P, marginLeft: P, marginRight: j, marginTop: J, overflow: M, overflowX: K, overflowY: K, opacity: Q, pointerEvents: ne, position: te, msOverflowStyle: ee, right: q, scrollbarWidth: re, top: oe, transform: se, transformOrigin: ie, width: ce, zIndex: ae};
  exports.populateAttributesFromStyle = l;
  exports.getDILStyleOverflowAxes = u;
  exports.getDILStyleLineHeight = f;
  exports.getDILStyleTypography = d;
  exports.resolveDILStyleLineHeightRatio = v;
  exports.resolveDILStyleLineHeightPixels = g;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/style/DILStyle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
