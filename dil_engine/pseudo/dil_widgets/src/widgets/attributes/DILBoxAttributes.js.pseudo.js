// fn o  args=1 vars=1 closure=1 cpool=0 bc=16B file=dil_widgets/src/widgets/attributes/DILBoxAttributes
// args: t
// closure: s
function {
  if (!((null != t))) goto L_f;
  if (!(("" !== t))) goto L_f;
  return s(t);   // tail call
  return;
}

// fn n  args=1 vars=1 closure=1 cpool=0 bc=16B file=dil_widgets/src/widgets/attributes/DILBoxAttributes
// args: t
// closure: l
function {
  if (!((null != t))) goto L_f;
  if (!(("" !== t))) goto L_f;
  return l(t);   // tail call
  return;
}

// fn s  args=1 vars=5 closure=2 cpool=2 bc=237B file=dil_widgets/src/widgets/attributes/DILBoxAttributes
// args: t
// locals: e, r, o, n
// closure: c, i
function {
  let n;
  let o;
  let r;
  let e;
  if (!(("string" != typeof t))) goto L_18;
  return t;
  e = t.trim();
  r = c(e, "all");
  if (!((undefined !== r))) goto L_54;
  return r;
  o = e.match(new RegExp("^(-?\\d+(?:\\.\\d+)?)(v[wh])$"));
  if (!((null !== o))) goto L_b7;
  return "".concat(o[1], "%");   // tail call
  n = i.parseCSSValue(e);
  if (!((undefined !== n))) goto L_eb;
  return n;
  return t;
}

// fn l  args=1 vars=1 closure=2 cpool=0 bc=65B file=dil_widgets/src/widgets/attributes/DILBoxAttributes
// args: t
// closure: c, s
function {
  if (!(("string" != typeof t))) goto L_c;
  return t;
  if (!((c(t.trim(), "any") == null))) goto L_40;
  c(t.trim(), "any");
  return s(t);
}

// fn c  args=2 vars=7 closure=2 cpool=2 bc=263B file=dil_widgets/src/widgets/attributes/DILBoxAttributes
// args: t, e
// locals: i, r, o, n, t#1
// closure: u, d
function {
  let o;
  let r;
  let i;
  i = t.match(new RegExp("^min\\((.*)\\)$"));
  if (!((null === i))) goto L_3c;
  return;
  r = [];
  o = u(i[1]);
  let n;
  for (const n of o) {
    let t#1;
    t#1 = d(n.trim());
    if (!((undefined !== t#1))) goto L_b4;
    r.push(t#1);
   continue;
    if (!(("all" === e))) continue;
    return undefined;
    // [栈深重同步 0 -> 3]
  }
  if (!((r.length > 0))) goto L_105;
  // append([], 0, r)
  r;
  return Math.min.apply(Math, []);
  return undefined;
}

// fn u  args=1 vars=6 closure=0 cpool=0 bc=294B file=dil_widgets/src/widgets/attributes/DILBoxAttributes
// args: t
// locals: e, i, r, o, n
function {
  let r;
  let i;
  let e;
  e = [];
  i = 0;
  r = 0;
  let o;
  o = 0;
  if (!((o < t.length))) goto L_d2;
  let n;
  n = t[o];
  if (!(("(" === n))) goto L_40;
  i = <i_new>;
  goto L_c6;
  // [栈深重同步 1 -> 0]
  if (!((")" === n))) goto L_54;
  i = <i_new>;
  goto L_c6;
  // [栈深重同步 1 -> 0]
  if (!(("," === n))) goto L_c6;
  if (!((0 === i))) goto L_c6;
  e.push(t.slice(r, o));
  r = (o + 1);
  (o + 1);
  o = <o_new>;
  (o++);
  goto L_16;
  e.push(t.slice(r));
  return e;
}

// fn d  args=1 vars=2 closure=2 cpool=0 bc=62B file=dil_widgets/src/widgets/attributes/DILBoxAttributes
// args: t
// locals: e
// closure: i, a
function {
  let e;
  e = i.parseCSSValue(t);
  if (!(("number" == typeof e))) goto L_3a;
  return e;
  return a(t);
}

// fn a  args=1 vars=7 closure=2 cpool=4 bc=347B file=dil_widgets/src/widgets/attributes/DILBoxAttributes
// args: t
// locals: e, r, o, t#1, e#1, n
// closure: d, i
function {
  let o;
  let r;
  let e;
  e = t.match(new RegExp("^calc\\((.*)\\)$"));
  if (!((null === e))) goto L_3c;
  return;
  r = e[1].trim().split(new RegExp("\\s+"));
  if (((r.length < 3))) goto L_a1;
  if (!(((r.length % 2) == 0))) goto L_a4;
  return;
  o = d(r[0]);
  if (!((undefined !== o))) goto L_15a;
  let t#1;
  t#1 = 1;
  if (!((t#1 < r.length))) goto L_156;
  let n;
  let e#1;
  e#1 = r[t#1];
  n = i.parseFiniteNumber(r[(t#1 + 1)]);
  if (!((undefined === n))) goto L_10f;
  return;
  if (!(("*" === e#1))) goto L_128;
  o = (o * n);
  (o * n);
  goto L_149;
  if ((("/" !== e#1))) goto L_13a;
  if (!((0 === n))) goto L_13d;
  return;
  o = (o / n);
  (o / n);
  t#1 = (t#1 + 2);
  (t#1 + 2);
  goto L_bb;
  return o;
  return;
}

// fn <atom:0>  args=2 vars=14 closure=5 cpool=0 bc=1606B file=dil_widgets/src/widgets/attributes/DILBoxAttributes
// args: i, s
// locals: l, c, u, d, a, h, f, m, p, v, I, x
// closure: r, e, t, o, n
function {
  let x;
  let I;
  let v;
  let p;
  let m;
  let f;
  let h;
  let a;
  let d;
  let u;
  let c;
  let l;
  l = r.DIL_MARGIN_ATTRIBUTES.apply(i, s);
  c = e.resolveDILAspectRatio(i.aspectRatio);
  if (!((undefined !== c))) goto L_d3;
  s.aspectRatio = c;
  l = true;
  true;
  u = e.resolveDILBorder(i.border);
  if (!((undefined !== u))) goto L_23a;
  s.borderColor = t.resolveDILBorderColor(u.color, "default");
  if (!((undefined !== u.style))) goto L_1d9;
  s.borderStyle = u.style;
  u.style;
  if (!((undefined !== u.width))) goto L_233;
  s.borderWidth = u.width;
  u.width;
  l = true;
  true;
  d = e.resolveDILRadius(i.radius);
  if (!((undefined !== d))) goto L_29f;
  s.borderRadius = d;
  l = true;
  true;
  if (!((true === i.clip))) goto L_2db;
  s.slowClipping = true;
  l = true;
  true;
  a = o(i.minSize);
  if (!((undefined !== a))) goto L_31e;
  s.flexBasis = a;
  l = true;
  true;
  h = e.resolveDILFlex(i.flex);
  if (!((undefined !== h))) goto L_40f;
  s.flexGrow = h.grow;
  s.flexShrink = h.shrink;
  if (!((undefined === a))) goto L_408;
  s.flexBasis = h.basis;
  h.basis;
  l = true;
  true;
  if (!((i.height == null))) goto L_45a;
  i.height;
  f = o(i.size);
  if (!((undefined !== f))) goto L_479;
  s.height = f;
  l = true;
  true;
  if (!((i.maxHeight == null))) goto L_4c6;
  i.maxHeight;
  m = n(i.maxSize);
  if (!((undefined !== m))) goto L_4e5;
  s.maxHeight = m;
  l = true;
  true;
  if (!((i.maxWidth == null))) goto L_532;
  i.maxWidth;
  p = n(i.maxSize);
  if (!((undefined !== p))) goto L_551;
  s.maxWidth = p;
  l = true;
  true;
  v = o(i.minHeight);
  if (!((undefined !== v))) goto L_594;
  s.minHeight = v;
  l = true;
  true;
  I = o(i.minWidth);
  if (!((undefined !== I))) goto L_5d7;
  s.minWidth = I;
  l = true;
  true;
  if (!((i.width == null))) goto L_622;
  i.width;
  x = o(i.size);
  if (!((undefined !== x))) goto L_641;
  s.width = x;
  l = true;
  true;
  return l;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=9 bc=301B file=dil_widgets/src/widgets/attributes/DILBoxAttributes
// args: require, module, exports
// locals: t, e, i, r, o, n, s, l, c, u, d, a
function {
  o = function o;
  n = function n;
  s = function s;
  l = function l;
  c = function c;
  u = function u;
  d = function d;
  a = function a;
  let r;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_BOX_ATTRIBUTE_PROPERTIES = undefined;
  exports.DIL_BOX_ATTRIBUTES = undefined;
  t = require("dil_core/src/colors/DILColor");
  e = require("dil_core/src/layout/DILLayout");
  i = require("dil_core/src/utils/AttributeParser");
  r = require("./DILSpacingAttributes");
  exports.DIL_BOX_ATTRIBUTE_PROPERTIES = ["aspectRatio", "border", "clip", "flex", "height", "margin", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "radius", "size", "width"];
  exports.DIL_BOX_ATTRIBUTES = {attributeNames: exports.DIL_BOX_ATTRIBUTE_PROPERTIES, apply: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/attributes/DILBoxAttributes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
