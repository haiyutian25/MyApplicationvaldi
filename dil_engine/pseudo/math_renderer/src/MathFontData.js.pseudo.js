// fn s  args=0 vars=0 closure=2 cpool=0 bc=20B file=math_renderer/src/MathFontData
// closure: o, a
function {
  if (!((undefined === o))) goto L_f;
  o = a();
  a();
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=math_renderer/src/MathFontData
// args: t
function {
  return t[0];
}

// fn a  args=0 vars=29 closure=8 cpool=1 bc=3703B file=math_renderer/src/MathFontData
// locals: o, s, a, t, e, t#1, u, w, h, t#2, e#1, n, t#3, n#1, r, i, d, t#4, e#2, t#5, n#2, g, t#6, e#3, p, t#7, t#8, m, t#9
// closure: e, t, n, i, r, c, f, l
function {
  let m;
  let p;
  let g;
  let d;
  let h;
  let w;
  let u;
  let a;
  let s;
  let o;
  o = e.getMathJaxStaticFontData();
  s = Object.keys(o.defaultChars);
  a = [];
  let t;
  for (const t of s) {
    let e;
    e = o.defaultChars[t];
    let t#1;
    for (const t#1 of Object.keys(e)) {
      if (!((e[t#1][3] == null))) goto L_137;
      e[t#1][3];
      goto L_158;
      if (!((undefined.p == null))) goto L_15e;
      undefined.p;
      a.push("");
      // [栈深重同步 3 -> 6]
    }
  }
  u = new t.TextEncoder().encode(a.join(""));
  w = new n.BinaryWriter((u.byteLength + (a.length * i)));
  w.writeUint32(r);
  w.writeUint32(u.byteLength);
  w.writeBytes(u);
  w.writeUint32(s.length);
  h = 0;
  let t#2;
  for (const t#2 of s) {
    let n;
    let e#1;
    w.writeString(t#2);
    e#1 = o.defaultChars[t#2];
    n = Object.keys(e#1);
    w.writeUint32(n.length);
    let t#3;
    for (const t#3 of n) {
      let i;
      let r;
      let n#1;
      n#1 = e#1[t#3];
      if (!((n#1[3] == null))) goto L_3f9;
      n#1[3];
      r = {};
      w.writeUint32(Number(t#3));
      if (!((n#1[0] == null))) goto L_45b;
      n#1[0];
      w.writeFloat64(0);
      if (!((n#1[1] == null))) goto L_48e;
      n#1[1];
      w.writeFloat64(0);
      if (!((n#1[2] == null))) goto L_4c1;
      n#1[2];
      w.writeFloat64(0);
      if (!((r.ic == null))) goto L_513;
      r.ic;
      w.writeFloat64(0);
      if (!((r.sk == null))) goto L_565;
      r.sk;
      w.writeFloat64(0);
      if (!((r.dx == null))) goto L_5b7;
      r.dx;
      w.writeFloat64(0);
      if (!((r.p == null))) goto L_5e7;
      r.p;
      goto L_5e8;
      if (!((undefined.length == null))) goto L_5ee;
      undefined.length;
      i = 0;
      w.writeUint32(h);
      w.writeUint32(i);
      h = (h + i);
      (h + i);
      if (!((r.c == null))) goto L_6a0;
      r.c;
      w.writeString("");
      // [栈深重同步 3 -> 6]
    }
  }
  d = o.defaultVariants.map(function <atom:0>);
  w.writeUint32(d.length);
  let t#4;
  const _it5 = d;
  goto L_814;
  t#4 = <value(_it5)>;
  let e#2;
  w.writeString(t#4);
  e#2 = c(o, t#4);
  w.writeUint32(e#2.length);
  let n#2;
  let t#5;
  const _it6 = e#2;
  goto L_80e;
  const _it7 = <value(_it6)>;
  <done(_it7)>;
  t#5 = <value(_it7)>;
  <done(_it7)>;
  n#2 = <value(_it7)>;
  w.writeUint32(t#5);
  w.writeUint32(n#2);
  // [栈深重同步 3 -> 6]
  if (!(<done(<?>)>)) goto L_7ac;
  <value(<?>)>;
  if (!(<done(_it6)>)) goto L_738;
  <value(_it6)>;
  g = Object.keys(o.defaultDelimiters);
  w.writeUint32(g.length);
  let t#6;
  for (const t#6 of g) {
    let e#3;
    e#3 = o.defaultDelimiters[t#6];
    w.writeUint32(Number(t#6));
    if (!(("v" === e#3.dir))) goto L_955;
    goto L_956;
    // [栈深重同步 6 -> 5]
    w.writeUint8(2);
    if (!((e#3.c == null))) goto L_9a8;
    e#3.c;
    w.writeUint32(0);
    f(w, e#3.sizes, true);
    f(w, e#3.stretch, false);
    f(w, e#3.stretchv, false);
    f(w, e#3.variants, false);
    f(w, e#3.schar, false);
    f(w, e#3.HDW, true);
    f(w, e#3.hd, true);
    f(w, e#3.fullExt, true);
  }
  p = Object.keys(o.defaultParams);
  w.writeUint32(p.length);
  let t#7;
  for (const t#7 of p) {
    w.writeString(t#7);
    w.writeFloat64(o.defaultParams[t#7]);
  }
  l(w, o.defaultSizeVariants);
  l(w, o.defaultStretchVariants);
  w.writeUint32(o.defaultVariants.length);
  let t#8;
  for (const t#8 of o.defaultVariants) {
    l(w, t#8);
  }
  m = Object.keys(o.defaultAccentMap);
  w.writeUint32(m.length);
  let t#9;
  for (const t#9 of m) {
    w.writeUint32(Number(t#9));
    if (!((o.defaultAccentMap[Number(t#9)].codePointAt(0) == null))) goto L_e43;
    o.defaultAccentMap[Number(t#9)].codePointAt(0);
    w.writeUint32(0);
  }
  return w.finish();   // tail call
}

// fn c  args=2 vars=14 closure=0 cpool=0 bc=763B file=math_renderer/src/MathFontData
// args: t, e
// locals: n, r, o, s, a, e#1, n#1, i, i#1, t#1, i#2, o#1
function {
  let i#2;
  let r;
  let n;
  n = t.VariantSmp[e];
  if (!(("string" == typeof n))) goto L_66;
  n = t.VariantSmp[n];
  t.VariantSmp[n];
  if (((undefined === n))) goto L_7a;
  if (!(("string" == typeof n))) goto L_80;
  return [];
  r = [];
  let a;
  let s;
  let o;
  const _it1 = t.SmpRanges;
  goto L_256;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  o = <value(_it2)>;
  <done(_it2)>;
  s = <value(_it2)>;
  <done(_it2)>;
  a = <value(_it2)>;
  let i#1;
  let e#1;
  e#1 = n[o];
  if ((("number" != typeof e#1))) goto L_256;
  let n#1;
  n#1 = s;
  if (!((n#1 <= a))) goto L_174;
  if (!((930 !== n#1))) goto L_169;
  let i;
  i = ((e#1 + n#1) - s);
  if (!((t.SmpRemap[i] == null))) goto L_162;
  t.SmpRemap[i];
  r.push([n#1, i]);
  n#1 = <n#1_new>;
  (n#1++);
  goto L_e8;
  // [栈深重同步 4 -> 3]
  if (!((2 === o))) goto L_19f;
  goto L_1cb;
  // [栈深重同步 4 -> 3]
  if (!((3 === o))) goto L_1ca;
  goto L_1cb;
  // [栈深重同步 4 -> 3]
  i#1 = undefined;
  if (!((undefined !== i#1))) goto L_256;
  let t#1;
  for (const t#1 of Object.keys(i#1)) {
    r.push([Number(t#1), (e#1 + i#1[Number(t#1)])]);
    // [栈深重同步 3 -> 6]
  }
  if (!(<done(_it3)>)) goto L_b3;
  <value(_it3)>;
  i#2 = n[5];
  if (!(("object" == typeof i#2))) goto L_2f7;
  if (!((null !== i#2))) goto L_2f7;
  let o#1;
  for (const o#1 of Object.keys(i#2)) {
    r.push([Number(o#1), i#2[Number(o#1)]]);
  }
  return r;
}

// fn f  args=3 vars=4 closure=0 cpool=0 bc=163B file=math_renderer/src/MathFontData
// args: t, e, n
// locals: r
function {
  if (!((e == null))) goto L_2b;
  e;
  goto L_2c;
  if (!((undefined.length == null))) goto L_32;
  undefined.length;
  t.writeUint32(0);
  let r;
  if (!((e == null))) goto L_42;
  e;
  for (const r of []) {
    if (!(n)) goto L_73;
    goto L_9b;
    // [栈深重同步 4 -> 3]
    t.writeUint32(r);
  }
  return;
}

// fn l  args=2 vars=3 closure=0 cpool=0 bc=96B file=math_renderer/src/MathFontData
// args: t, e
// locals: n
function {
  t.writeUint32(e.length);
  let n;
  for (const n of e) {
    t.writeString(n);
  }
  return;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=5 bc=155B file=math_renderer/src/MathFontData
// args: require, module, exports
// locals: t, e, n, r, i, o, s, a, c, f, l
function {
  s = function s;
  a = function a;
  c = function c;
  f = function f;
  l = function l;
  let o;
  let i;
  let r;
  let n;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getPackedMathFontData = undefined;
  t = require("coreutils/src/unicode/TextCoding");
  e = require("math_jax/src/mathjax_font/static");
  n = require("./BinaryWriter");
  r = 826692173;
  i = 80;
  o = undefined;
  exports.getPackedMathFontData = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_renderer/src/MathFontData
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
