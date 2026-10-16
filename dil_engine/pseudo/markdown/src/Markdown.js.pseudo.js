// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=markdown/src/Markdown
// args: e
function {
  e.Default = 0;
  e[0] = "Default";
  e.TextOnly = 1;
  e[1] = "TextOnly";
  e.Rich = 2;
  e[2] = "Rich";
  e.RichLinkLabel = 3;
  e[3] = "RichLinkLabel";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=markdown/src/Markdown
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.blocks = e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=markdown/src/Markdown
// args: e
// closure: s, o
function {
  return s(e, o.Default);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=markdown/src/Markdown
// args: e
// closure: s, o
function {
  return s(e, o.TextOnly);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=markdown/src/Markdown
// args: e
// closure: L, o
function {
  return L(e, o.Default, false);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=markdown/src/Markdown
// args: e
// closure: s, o
function {
  return s(e, o.Rich);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=markdown/src/Markdown
// args: e
// closure: L, o
function {
  return L(e, o.Rich, false);   // tail call
}

// fn s  args=2 vars=12 closure=16 cpool=4 bc=1379B file=markdown/src/Markdown
// args: n, r
// locals: i, s, e, t, n#1, e#1, n#2, h, e#2, e#3
// closure: Markdown, e, m, f, c, o, D, C, u, k, g, a, p, l, t, d
function {
  let s;
  let i;
  if (!((0 === n.length))) goto L_17;
  return new Markdown([]);
  i = new e.TextParser(n);
  s = [];
  if (!(!i.isAtEnd())) goto L_558;
  let h;
  let n#2;
  let e#1;
  if ((i.tryConsumeBlankLine())) goto L_45;
  if (!(m(i))) goto L_27d;
  let n#1;
  let t;
  let e;
  e = i.consumeLine().trim().replace(new RegExp("^(?:`{3,}|~{3,})"), "").trim().split(new RegExp("\\s"), 1)[0];
  t = f(i);
  n#1 = c("code", t.text, 0);
  null;
  n#1;
  if (!((e.length > 0))) goto L_1f3;
  goto L_1f4;
  // [栈深重同步 4 -> 3]
  null;
  {};
  if (!((t.source !== t.text))) goto L_270;
  goto L_271;
  // [栈深重同步 4 -> 3]
  null;
  {};
  s.push({});
  goto L_45;
  if (!((r === o.Rich))) goto L_2ae;
  goto L_2af;
  // [栈深重同步 1 -> 0]
  e#1 = undefined;
  if (!((undefined !== e#1))) goto L_2f0;
  s.push(c("math", e#1, 0));
  goto L_45;
  n#2 = C(i);
  h = n#2.level;
  if (!((h > 0))) goto L_3af;
  i.consumeLine();
  s.push(u("heading", n#2.text, h, r));
  goto L_45;
  if (!(k(i))) goto L_416;
  s.push(c("rule", "", 0));
  i.consumeLine();
  goto L_45;
  if (!((undefined !== g(i)))) goto L_489;
  let e#2;
  e#2 = a(i);
  s.push(u("quote", e#2.text, 0, r));
  goto L_45;
  if (!((undefined !== p(i, 4)))) goto L_518;
  let e#3;
  e#3 = l(i, r);
  s.push({kind: "list", text: "", level: 0, inlines: t, items: e#3.items});
  goto L_45;
  s.push(u("paragraph", d(i, r), 0, r));
  goto L_45;
  return new Markdown(s);
}

// fn c  args=3 vars=3 closure=1 cpool=0 bc=34B file=markdown/src/Markdown
// args: e, n, r
// closure: t
function {
  return {kind: e, text: n, level: r, inlines: t, items: undefined};
}

// fn u  args=4 vars=4 closure=1 cpool=0 bc=42B file=markdown/src/Markdown
// args: e, t, n, r
// closure: L
function {
  return {kind: e, text: t, level: n, inlines: L(t, r, ("paragraph" === e)), items: undefined};
}

// fn d  args=2 vars=5 closure=2 cpool=0 bc=308B file=markdown/src/Markdown
// args: e, t
// locals: n, r, t#1
// closure: v, h
function {
  let r;
  let n;
  n = "";
  r = " ";
  if (!(!e.isAtEnd())) goto L_130;
  if (!(!v(e))) goto L_130;
  if (!(!h(e, t))) goto L_130;
  let t#1;
  if (!((n.length > 0))) goto L_64;
  n = (n + r);
  (n + r);
  t#1 = e.peekLine();
  if (!(t#1.endsWith("  "))) goto L_c0;
  goto L_fa;
  // [栈深重同步 1 -> 0]
  if (!(t#1.endsWith("\"))) goto L_f5;
  goto L_fa;
  // [栈深重同步 1 -> 0]
  r = " ";
  " ";
  n = (n + e.consumeLineTrimmed());
  (n + e.consumeLineTrimmed());
  goto L_e;
  return n;
}

// fn a  args=1 vars=3 closure=1 cpool=0 bc=146B file=markdown/src/Markdown
// args: e
// locals: t, n
// closure: g
function {
  let t;
  t = "";
  if (!(!e.isAtEnd())) goto L_88;
  let n;
  n = g(e);
  if (((undefined === n))) goto L_88;
  e.consumeLine();
  if (!((t.length > 0))) goto L_78;
  t = (t + "
");
  (t + "
");
  t = (t + n);
  (t + n);
  goto L_5;
  return {text: t};
}

// fn l  args=2 vars=6 closure=3 cpool=0 bc=796B file=markdown/src/Markdown
// args: e, t
// locals: n, r, i, s
// closure: p, o, L
function {
  let r;
  let n;
  n = [];
  r = [];
  if (!(!e.isAtEnd())) goto L_312;
  let s;
  let i;
  if (!((t === o.Rich))) goto L_8f;
  goto L_90;
  // [栈深重同步 3 -> 2]
  i = p(e, 4);
  if (((undefined === i))) goto L_312;
  e.consumeLine();
  if (!((t === o.Rich))) goto L_14c;
  if (!((r.length > 0))) goto L_14c;
  if (!((i.indentation < r[(r.length - 1)]))) goto L_14c;
  r.pop();
  goto L_c2;
  s = r.length;
  if (!((t === o.Rich))) goto L_1c4;
  r.push(i.contentIndentation);
  if (!((0 === s))) goto L_1f4;
  goto L_1fd;
  // [栈深重同步 4 -> 3]
  null;
  {depth: s};
  if (!((true === i.checked))) goto L_25b;
  goto L_2af;
  // [栈深重同步 4 -> 3]
  if (!((false === i.checked))) goto L_28b;
  goto L_2af;
  // [栈深重同步 4 -> 3]
  n.push({text: i.text, marker: i.marker, checked: i.checked, inlines: L(i.text, t, false)});
  goto L_e;
  return {items: n};
}

// fn h  args=2 vars=2 closure=7 cpool=0 bc=125B file=markdown/src/Markdown
// args: e, t
// closure: m, o, F, C, k, g, p
function {
  if ((m(e))) goto L_7c;
  if (!((t === o.Rich))) goto L_32;
  if ((F(e))) goto L_7c;
  if (((C(e).level > 0))) goto L_7c;
  if ((k(e))) goto L_7c;
  if (((undefined !== g(e)))) goto L_7c;
  return (undefined !== p(e, 4));
}

// fn f  args=1 vars=4 closure=1 cpool=0 bc=404B file=markdown/src/Markdown
// args: e
// locals: t, n, r
// closure: m
function {
  let n;
  let t;
  t = e.mark();
  n = "";
  if (!(!e.isAtEnd())) goto L_13c;
  if (!(m(e))) goto L_10b;
  let r;
  r = e.text.slice(t, e.mark());
  e.consumeLine();
  return {text: n, source: r};
  n = (n + e.consumeLineWithNormalizedBreak());
  (n + e.consumeLineWithNormalizedBreak());
  goto L_2e;
  return {text: n, source: e.text.slice(t)};
}

// fn m  args=1 vars=3 closure=0 cpool=0 bc=398B file=markdown/src/Markdown
// args: e
// locals: t, n
function {
  let n;
  let t;
  t = e.mark();
  e.consumeLeadingSpaces(4);
  n = e.peekCharCode();
  if (!((96 !== n))) goto L_b5;
  if (!((126 !== n))) goto L_b5;
  e.restore(t);
  return false;
  if (!(e.tryConsumeCharCode(n))) goto L_162;
  if (!(e.tryConsumeCharCode(n))) goto L_162;
  if (!(e.tryConsumeCharCode(n))) goto L_162;
  e.restore(t);
  return true;
  e.restore(t);
  return false;
}

// fn C  args=1 vars=4 closure=0 cpool=0 bc=389B file=markdown/src/Markdown
// args: e
// locals: t, n, r
function {
  let r;
  let n;
  let t;
  t = e.mark();
  e.consumeLeadingSpaces(4);
  n = 0;
  if (!(!e.isAtLineEnd())) goto L_ba;
  if (!((n < 6))) goto L_ba;
  if (!(e.tryConsumeCharCode(35))) goto L_ba;
  n = <n_new>;
  (n++);
  goto L_58;
  if (((0 === n))) goto L_eb;
  if (!(!e.tryConsumeCharCode(32))) goto L_124;
  e.restore(t);
  return {level: 0, text: ""};
  r = e.consumeRestOfLineTrimmed();
  e.restore(t);
  return {level: n, text: r};
}

// fn k  args=1 vars=5 closure=0 cpool=0 bc=477B file=markdown/src/Markdown
// args: e
// locals: t, n, r, i
function {
  let r;
  let n;
  let t;
  t = e.mark();
  e.consumeLeadingSpaces(4);
  n = 0;
  r = 0;
  if (!(!e.isAtLineEnd())) goto L_1ae;
  let i;
  i = e.peekCharCode();
  if (!((32 !== i))) goto L_182;
  if (!((9 !== i))) goto L_182;
  if (!((45 !== i))) goto L_108;
  if (!((42 !== i))) goto L_108;
  if (!((95 !== i))) goto L_108;
  e.restore(t);
  return false;
  if (!((0 === r))) goto L_119;
  r = i;
  i;
  goto L_14e;
  if (!((r !== i))) goto L_14e;
  e.restore(t);
  return false;
  n = <n_new>;
  (n++);
  e.tryConsumeCharCode(i);
  goto L_5a;
  e.tryConsumeCharCode(i);
  goto L_5a;
  e.restore(t);
  return (n >= 3);
}

// fn g  args=1 vars=3 closure=0 cpool=0 bc=290B file=markdown/src/Markdown
// args: e
// locals: t, n
function {
  let n;
  let t;
  t = e.mark();
  e.consumeLeadingSpaces(4);
  if (!(!e.tryConsumeCharCode(62))) goto L_a7;
  e.restore(t);
  return;
  e.tryConsumeCharCode(32);
  n = e.consumeRestOfLineTrimmed();
  e.restore(t);
  return n;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=55B file=markdown/src/Markdown
// args: t
// closure: e
function {
  if (!((t >= 48))) goto L_36;
  if (!((t <= 57))) goto L_36;
  return !e.isAtLineEnd();
}

// fn p  args=2 vars=9 closure=1 cpool=1 bc=982B file=markdown/src/Markdown
// args: e, t
// locals: n, r, i, t#1, o, s, c
// closure: x
function {
  let c;
  let s;
  let o;
  let i;
  let r;
  let n;
  n = e.mark();
  r = e.consumeLeadingSpaces(t);
  if (!(e.isAtLineEnd())) goto L_b0;
  e.restore(n);
  return;
  i = e.peekCharCode();
  if (((45 === i))) goto L_f0;
  if (((42 === i))) goto L_f0;
  if (!((43 === i))) goto L_1f7;
  let t#1;
  e.tryConsumeCharCode(i);
  if (!(!e.tryConsumeCharCode(32))) goto L_175;
  e.restore(n);
  return;
  if (!((45 === i))) goto L_186;
  goto L_19a;
  // [栈深重同步 3 -> 2]
  if (!((42 === i))) goto L_195;
  goto L_19a;
  // [栈深重同步 3 -> 2]
  t#1 = x(e, "+", r, (e.mark() - n));
  e.restore(n);
  return t#1;
  if (((i < 48))) goto L_207;
  if (!((i > 57))) goto L_233;
  e.restore(n);
  return;
  o = e.consumeWhile(function <atom:0>);
  s = e.peekCharCode();
  if (!((46 !== s))) goto L_2bd;
  if (!((41 !== s))) goto L_2bd;
  e.restore(n);
  return;
  e.tryConsumeCharCode(s);
  if (!(!e.tryConsumeCharCode(32))) goto L_33a;
  e.restore(n);
  return;
  if (!((46 === s))) goto L_370;
  goto L_375;
  // [栈深重同步 6 -> 5]
  c = x(e, "".concat(o, ")"), r, (e.mark() - n));
  e.restore(n);
  return c;
}

// fn x  args=4 vars=6 closure=0 cpool=0 bc=518B file=markdown/src/Markdown
// args: e, t, n, r
// locals: i, o
function {
  if (!(e.peek("["))) goto L_1c2;
  let o;
  let i;
  i = e.mark();
  e.tryConsumeCharCode(91);
  o = e.peekCharCode();
  e.tryConsumeCharCode(o);
  if (((32 === o))) goto L_ec;
  if (((120 === o))) goto L_ec;
  if (!((88 === o))) goto L_199;
  if (!(e.tryConsumeCharCode(93))) goto L_199;
  if (!(e.tryConsumeCharCode(32))) goto L_199;
  if (((120 === o))) goto L_169;
  return {marker: t, indentation: n, contentIndentation: r, checked: (88 === o), text: e.consumeRestOfLineTrimmed()};
  e.restore(i);
  return {marker: t, indentation: n, contentIndentation: r, checked: undefined, text: e.consumeRestOfLineTrimmed()};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=13B file=markdown/src/Markdown
// args: e
function {
  if (((32 === e))) goto L_c;
  return (9 === e);
}

// fn v  args=1 vars=3 closure=0 cpool=1 bc=167B file=markdown/src/Markdown
// args: e
// locals: t, n
function {
  let n;
  let t;
  t = e.mark();
  e.consumeWhile(function <atom:0>);
  n = e.isAtLineEnd();
  e.restore(t);
  return n;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=46B file=markdown/src/Markdown
// args: e, t
// closure: E
function {
  if (!(E(t.charCodeAt(0)))) goto L_2c;
  return t;
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=312B file=markdown/src/Markdown
// args: e, t
// closure: s, d, r, n
function {
  null;
  e;
  if ((d.bold)) goto L_75;
  if ((d.italic)) goto L_c4;
  if ((d.strikethrough)) goto L_113;
  s.push({bold: e.bold, italic: e.italic, strikethrough: e.strikethrough, link: true, href: r, linkEnd: (t === (n.length - 1))});
  return;
}

// fn L  args=3 vars=31 closure=17 cpool=4 bc=4175B file=markdown/src/Markdown
// args: e, r, i
// locals: s, c, u, d, a, l, h, f, m, C, k, g, p, t, n, x, t#1, v, A, t#2, t#3, t#4, t#5, n#1, n#2, r#1, n#3, n#4
// closure: E, t, o, M, A, n, S, I, q, N, R, b, $, _, T, W, L
function {
  let p;
  let g;
  let k;
  let C;
  let m;
  let f;
  let h;
  let l;
  let a;
  let d;
  let u;
  let c;
  let s;
  if (!((0 === e.length))) goto L_31;
  return t;
  s = [];
  c = (r === o.TextOnly);
  if (((r === o.Rich))) goto L_a6;
  u = (r === o.RichLinkLabel);
  d = {foldParagraphLineBreaks: i, bold: false, italic: false, code: false, link: false, href: undefined};
  if ((c)) goto L_db;
  if (!(u)) goto L_e2;
  goto L_e3;
  // [栈深重同步 1 -> 0]
  a = undefined;
  l = new Map();
  h = e.lastIndexOf("`");
  f = e.lastIndexOf("**");
  m = e.lastIndexOf("*");
  C = e.lastIndexOf("_");
  if (!(u)) goto L_1af;
  goto L_1b2;
  // [栈深重同步 1 -> 0]
  k = n;
  g = 0;
  p = 0;
  if (!((g < e.length))) goto L_1038;
  let A;
  let v;
  let x;
  let n;
  let t;
  t = l.get(g);
  if (!((undefined !== t))) goto L_22d;
  S(s, e, p, g, d);
  g = t;
  t;
  p = g;
  g;
  goto L_1ba;
  n = e.charCodeAt(g);
  if (!(i)) goto L_28b;
  if (!(!d.code)) goto L_28b;
  goto L_28c;
  // [栈深重同步 1 -> 0]
  x = 0;
  if (!((x > 0))) goto L_2eb;
  let t#1;
  S(s, e, p, g, d);
  t#1 = (g + x);
  null;
  d;
  S(s, e, (t#1 - 1), t#1, {foldParagraphLineBreaks: false});
  g = t#1;
  t#1;
  p = g;
  g;
  goto L_1ba;
  if (!(u)) goto L_321;
  if (!(!d.code)) goto L_321;
  goto L_322;
  // [栈深重同步 1 -> 0]
  v = undefined;
  if (!((undefined !== v))) goto L_3fe;
  S(s, e, p, g, d);
  null;
  d;
  s.push({text: v.source, latex: v.latex});
  g = (g + v.source.length);
  (g + v.source.length);
  p = g;
  g;
  goto L_1ba;
  if (!(!d.code)) goto L_4a4;
  if (!(("\" === e[g]))) goto L_4a4;
  if (!(E(e.charCodeAt((g + 1))))) goto L_4a4;
  S(s, e, p, g, d);
  S(s, e, (g + 1), (g + 2), d);
  g = (g + 2);
  (g + 2);
  p = g;
  g;
  goto L_1ba;
  if (!((96 === n))) goto L_538;
  if ((d.code)) goto L_4de;
  if (!((g < h))) goto L_538;
  S(s, e, p, g, d);
  d.code = !d.code;
  g = <g_new>;
  (g++);
  p = g;
  g;
  goto L_1ba;
  if (((r !== o.Rich))) goto L_584;
  if (!(d.code)) goto L_589;
  goto L_591;
  // [栈深重同步 1 -> 0]
  A = N(e, g);
  if (!((undefined === A))) goto L_f5f;
  if (!(u)) goto L_67b;
  if (!(!d.code)) goto L_67b;
  if (!(("<" === e[g]))) goto L_67b;
  let t#2;
  if (!(e.startsWith("<sub>", g))) goto L_614;
  goto L_647;
  // [栈深重同步 1 -> 0]
  if (!(e.startsWith("</sub>", g))) goto L_646;
  goto L_647;
  // [栈深重同步 1 -> 0]
  t#2 = 0;
  if (!((t#2 > 0))) goto L_67b;
  S(s, e, p, g, d);
  g = (g + t#2);
  (g + t#2);
  p = g;
  g;
  goto L_1ba;
  if ((d.code)) goto L_6ce;
  if (!(!k.has(g))) goto L_efe;
  if (!(!d.code)) goto L_75b;
  if (!((95 === n))) goto L_75b;
  if (((0 === g))) goto L_738;
  if (!((95 !== e.charCodeAt((g - 1))))) goto L_75b;
  let t#3;
  t#3 = R(e, g);
  if (!((t#3 !== g))) goto L_75b;
  g = t#3;
  t#3;
  goto L_1ba;
  if (!(!d.code)) goto L_85a;
  if (!(((g + 1) < e.length))) goto L_85a;
  if (!((42 === n))) goto L_85a;
  if (!((42 === e.charCodeAt((g + 1))))) goto L_85a;
  if ((d.bold)) goto L_7fe;
  if (!((g < f))) goto L_85a;
  S(s, e, p, g, d);
  d.bold = !d.bold;
  g = (g + 2);
  (g + 2);
  p = g;
  g;
  goto L_1ba;
  if (!(!d.code)) goto L_98a;
  if (((42 === n))) goto L_894;
  if (!((95 === n))) goto L_98a;
  let t#4;
  if (!((42 === n))) goto L_8b0;
  goto L_8b5;
  // [栈深重同步 2 -> 1]
  if (!(("*" === "_"))) goto L_8bd;
  goto L_8c0;
  // [栈深重同步 1 -> 0]
  t#4 = C;
  if ((d.italic)) goto L_8f1;
  if (!((g < t#4))) goto L_98a;
  if ((d.italic)) goto L_930;
  if (((42 !== n))) goto L_930;
  if (!(b(e, g))) goto L_98a;
  S(s, e, p, g, d);
  d.italic = !d.italic;
  g = <g_new>;
  (g++);
  p = g;
  g;
  goto L_1ba;
  if ((d.code)) goto L_9f3;
  if (((r === o.RichLinkLabel))) goto L_9f3;
  if (((91 !== n))) goto L_9f3;
  if (!(c)) goto L_9f3;
  if (!(!$(e, g))) goto L_ef3;
  let t#5;
  t#5 = _(e, g, a);
  if (!((undefined !== t#5))) goto L_ef3;
  let r#1;
  let n#1;
  if ((c)) goto L_a23;
  if (!(u)) goto L_a4c;
  if (!((g > 0))) goto L_a4c;
  if (!(("!" === e[(g - 1)]))) goto L_a4c;
  n#1 = !$(e, (g - 1));
  if (!(n#1)) goto L_a64;
  goto L_a67;
  // [栈深重同步 5 -> 4]
  S(s, e, p, g, d);
  if (!(n#1)) goto L_c09;
  if (!(!c)) goto L_c09;
  let n#2;
  n#2 = T(e.slice((g + 1), t#5.labelEnd).replace(new RegExp("\\\\([\\s\\S])"), function <atom:0>), false);
  null;
  d;
  if ((n#2)) goto L_b3c;
  s.push({text: "Image", link: false, href: undefined, image: {source: e.slice(t#5.hrefStart, t#5.hrefEnd), alt: n#2}});
  g = t#5.nextPosition;
  t#5.nextPosition;
  p = g;
  g;
  // close_loc r#1
  goto L_1ba;
  if (!(c)) goto L_ca0;
  if (!(!n#1)) goto L_ca0;
  l.set(t#5.labelEnd, t#5.nextPosition);
  g = <g_new>;
  (g++);
  p = g;
  g;
  // close_loc r#1
  goto L_1ba;
  if (!(c)) goto L_ca8;
  goto L_d15;
  // [栈深重同步 1 -> 0]
  r#1 = e.slice(t#5.hrefStart, t#5.hrefEnd);
  if (!(i)) goto L_d30;
  if (!((undefined !== r#1))) goto L_d30;
  r#1 = W(r#1);
  W(r#1);
  d.link = !c;
  d.href = r#1;
  if (!(!n#1)) goto L_ea1;
  if (!(u)) goto L_e0b;
  let n#3;
  n#3 = L(e.slice((g + 1), t#5.labelEnd), o.RichLinkLabel, i);
  n#3.forEach(function <atom:0>);
  // close_loc n#3
  goto L_ea1;
  let n#4;
  n#4 = s.length;
  S(s, e, (g + 1), t#5.labelEnd, d);
  if (!((s.length > n#4))) goto L_ea0;
  if (!(s[n#4].link)) goto L_ea0;
  null;
  s[n#4];
  s[n#4] = {linkEnd: true};
  {linkEnd: true};
  d.link = false;
  d.href = undefined;
  g = t#5.nextPosition;
  t#5.nextPosition;
  p = g;
  g;
  // close_loc r#1
  goto L_1ba;
  g = <g_new>;
  (g++);
  goto L_1ba;
  S(s, e, p, g, d);
  if (((true !== d.strikethrough))) goto L_f41;
  d.strikethrough = undefined;
  g = (g + 2);
  (g + 2);
  p = g;
  g;
  goto L_1ba;
  S(s, e, p, g, d);
  null;
  d;
  s.push({text: A.href, href: A.href, link: true, linkEnd: true});
  g = A.end;
  A.end;
  p = g;
  g;
  goto L_1ba;
  S(s, e, p, e.length, d);
  return s;
}

// fn A  args=2 vars=9 closure=4 cpool=0 bc=716B file=markdown/src/Markdown
// args: e, t
// locals: r, i, o, s, n, c, r#1
// closure: n, q, _, y
function {
  let s;
  let o;
  let i;
  let r;
  if (!(!e.includes("~~"))) goto L_3d;
  return n;
  r = new Set();
  i = e.lastIndexOf("`");
  o = undefined;
  s = false;
  let n;
  n = 0;
  if (!((n < e.length))) goto L_2c8;
  let c;
  if (!(s)) goto L_93;
  goto L_99;
  // [栈深重同步 1 -> 0]
  c = q(e, n);
  if (!((undefined === c))) goto L_28d;
  if ((s)) goto L_b7;
  if (!(("\" !== e[n]))) goto L_283;
  if (!(("`" === e[n]))) goto L_e5;
  if ((s)) goto L_d7;
  if (!((n < i))) goto L_e5;
  s = !s;
  !s;
  goto L_2bd;
  if (!(!s)) goto L_139;
  if (!(("[" === e[n]))) goto L_139;
  let r#1;
  r#1 = _(e, n, t);
  if (!((undefined !== r#1))) goto L_139;
  n = (r#1.nextPosition - 1);
  (r#1.nextPosition - 1);
  goto L_2bd;
  if ((s)) goto L_280;
  if ((("~" !== e[n]))) goto L_280;
  if ((("~" !== e[(n + 1)]))) goto L_280;
  if ((("~" === e[(n - 1)]))) goto L_280;
  if ((("~" === e[(n + 2)]))) goto L_280;
  if (((undefined === o))) goto L_1c6;
  if (!(y(e.charCodeAt((n - 1))))) goto L_21d;
  if (!((undefined === o))) goto L_278;
  if (!(((n + 2) < e.length))) goto L_278;
  if (!(!y(e.charCodeAt((n + 2))))) goto L_278;
  o = n;
  goto L_278;
  // [栈深重同步 1 -> 0]
  r.add(o);
  r.add(n);
  o = undefined;
  undefined;
  n = <n_new>;
  (n++);
  goto L_2bd;
  n = <n_new>;
  (n++);
  goto L_2bd;
  n = (n + (c.source.length - 1));
  (n + (c.source.length - 1));
  n = <n_new>;
  (n++);
  goto L_7d;
  return r;
}

// fn b  args=2 vars=4 closure=2 cpool=0 bc=188B file=markdown/src/Markdown
// args: e, t
// locals: n, r
// closure: y, E
function {
  let r;
  let n;
  n = (t + 1);
  if (((n >= e.length))) goto L_3e;
  if (!(y(e.charCodeAt(n)))) goto L_43;
  return false;
  if ((!E(e.charCodeAt(n)))) goto L_75;
  if (!((0 === t))) goto L_7a;
  return true;
  r = e.charCodeAt((t - 1));
  if (((r > 127))) goto L_bb;
  if ((y(r))) goto L_bb;
  return E(r);
}

// fn y  args=1 vars=1 closure=2 cpool=0 bc=183B file=markdown/src/Markdown
// args: t
// closure: e, i
function {
  if ((e.TextParser.isWhitespace(t))) goto L_b6;
  if (((11 === t))) goto L_b6;
  if (((12 === t))) goto L_b6;
  if (!((t > 127))) goto L_b6;
  return i.test(String.fromCharCode(t));
}

// fn E  args=1 vars=1 closure=0 cpool=0 bc=61B file=markdown/src/Markdown
// args: e
function {
  if (!((e >= 33))) goto L_c;
  if (((e <= 47))) goto L_3c;
  if (!((e >= 58))) goto L_1c;
  if (((e <= 64))) goto L_3c;
  if (!((e >= 91))) goto L_2c;
  if (((e <= 96))) goto L_3c;
  if (!((e >= 123))) goto L_3c;
  return (e <= 126);
}

// fn R  args=2 vars=3 closure=1 cpool=0 bc=249B file=markdown/src/Markdown
// args: e, t
// locals: n
// closure: O
function {
  let n;
  if ((((t + 3) >= e.length))) goto L_a4;
  if (((95 !== e.charCodeAt((t + 1))))) goto L_a4;
  if (((95 !== e.charCodeAt((t + 2))))) goto L_a4;
  if (((95 !== e.charCodeAt((t + 3))))) goto L_a4;
  if (!(!O(e, (t - 1)))) goto L_a8;
  return t;
  n = (t + 4);
  if (!((n < e.length))) goto L_eb;
  if (!((95 === e.charCodeAt(n)))) goto L_eb;
  n = <n_new>;
  (n++);
  goto L_ac;
  if (!(O(e, n))) goto L_f7;
  return n;
  return t;
}

// fn O  args=2 vars=3 closure=1 cpool=0 bc=227B file=markdown/src/Markdown
// args: t, n
// locals: r
// closure: e
function {
  let r;
  if (((n < 0))) goto L_e;
  if (!((n >= t.length))) goto L_13;
  return true;
  r = t.charCodeAt(n);
  if (((r > 127))) goto L_e2;
  if ((e.TextParser.isWhitespace(r))) goto L_e2;
  if (!((r >= 33))) goto L_a6;
  if (((r <= 47))) goto L_e2;
  if (!((r >= 58))) goto L_ba;
  if (((r <= 64))) goto L_e2;
  if (!((r >= 91))) goto L_ce;
  if (((r <= 96))) goto L_e2;
  if (!((r >= 123))) goto L_e2;
  return (r <= 126);
}

// fn I  args=2 vars=2 closure=0 cpool=0 bc=96B file=markdown/src/Markdown
// args: e, t
function {
  if (!(e.startsWith("\
", t))) goto L_2f;
  return 2;
  if (!(e.startsWith("  
", t))) goto L_5e;
  return 3;
  return 0;
}

// fn W  args=1 vars=1 closure=0 cpool=2 bc=94B file=markdown/src/Markdown
// args: e
function {
  if (!(e.includes("
"))) goto L_5c;
  return e.replace(new RegExp(" {0,2}\\n"), " ");
  return e;
}

// fn S  args=5 vars=7 closure=2 cpool=0 bc=459B file=markdown/src/Markdown
// args: e, t, n, r, i
// locals: o, s
// closure: W, T
function {
  let s;
  let o;
  if (!((n >= r))) goto L_c;
  return;
  o = t.slice(n, r);
  if (!(i.foldParagraphLineBreaks)) goto L_61;
  goto L_64;
  // [栈深重同步 1 -> 0]
  s = o;
  if (!(i.code)) goto L_b3;
  goto L_bc;
  // [栈深重同步 4 -> 3]
  if (!((true === i.strikethrough))) goto L_146;
  goto L_147;
  // [栈深重同步 4 -> 3]
  null;
  {};
  e.push({text: T(s, (r === t.length)), bold: i.bold, italic: i.italic, code: i.code, link: i.link, href: i.href});
  return;
}

// fn <atom:0>  args=3 vars=6 closure=3 cpool=0 bc=100B file=markdown/src/Markdown
// args: n, r, i
// locals: o, s, c
// closure: t, e, P
function {
  let c;
  let s;
  let o;
  if (!((undefined === r))) goto L_10;
  return n;
  o = n.endsWith(";");
  s = (i + n.length);
  if (!(t)) goto L_4b;
  c = (s === e.length);
  if ((o)) goto L_56;
  if (!(c)) goto L_62;
  if (!((P(r) == null))) goto L_63;
  P(r);
  return n;
  return n;
}

// fn T  args=2 vars=2 closure=2 cpool=1 bc=91B file=markdown/src/Markdown
// args: e, t
// closure: P, r
function {
  if (!((e.indexOf("&") < 0))) goto L_30;
  return e;
  return e.replace(r, function <atom:0>);
}

// fn P  args=1 vars=1 closure=1 cpool=0 bc=124B file=markdown/src/Markdown
// args: e
// closure: w
function {
  if (!(("amp" === e))) goto L_f;
  return "&";
  if (!(("apos" === e))) goto L_1e;
  return "'";
  if (!(("gt" === e))) goto L_2d;
  return ">";
  if (!(("lt" === e))) goto L_3c;
  return "<";
  if (!(("quot" === e))) goto L_4b;
  return """;
  if (!((35 === e.charCodeAt(0)))) goto L_7a;
  return w(e);
  return undefined;
}

// fn w  args=1 vars=4 closure=0 cpool=0 bc=306B file=markdown/src/Markdown
// args: e
// locals: t, n, r
function {
  let n;
  let t;
  if ((("x" === e.charAt(1)))) goto L_62;
  t = ("X" === e.charAt(1));
  if (!(t)) goto L_b3;
  goto L_b4;
  // [栈深重同步 5 -> 4]
  if (!(t)) goto L_c0;
  goto L_c2;
  // [栈深重同步 4 -> 3]
  n = Number.parseInt(e.slice(1), 10);
  if (!(Number.isFinite(n))) goto L_131;
  try { // catch -> L_127
  return String.fromCodePoint(n);
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_130
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn $  args=2 vars=3 closure=0 cpool=0 bc=41B file=markdown/src/Markdown
// args: e, t
// locals: n
function {
  let n;
  n = 0;
  if (!((t > 0))) goto L_21;
  t = (t --);
  if (!(("\" === e[(t --)]))) goto L_21;
  n = <n_new>;
  (n++);
  goto L_5;
  return ((n % 2) == 1);
}

// fn M  args=1 vars=11 closure=1 cpool=0 bc=506B file=markdown/src/Markdown
// args: e
// locals: t, n, r, i, o, s, c, u, d, e#1
// closure: $
function {
  let n;
  let t;
  t = new Map();
  n = e.lastIndexOf("`");
  let r;
  for (const r of [41, 93]) {
    let s;
    let o;
    let i;
    if (!((41 === r))) goto L_5f;
    goto L_61;
    // [栈深重同步 4 -> 3]
    i = 91;
    o = [];
    s = false;
    let c;
    c = 0;
    if (!((c < e.length))) continue;
    let d;
    let u;
    u = e.charCodeAt(c);
    if (!((93 === r))) goto L_da;
    if (!((96 === u))) goto L_da;
    if ((s)) goto L_ce;
    if (!((c < n))) goto L_da;
    s = !s;
    !s;
    if ((s)) goto L_fe;
    if (!((u !== i))) goto L_f4;
    if (((u !== r))) goto L_fe;
    if (($(e, c))) goto L_1e2;
    if (!((u === i))) goto L_13a;
    o.push(c);
    goto L_1e2;
    d = o.pop();
    if (!((undefined !== d))) goto L_1e2;
    t.set(d, c);
    if (!((93 === r))) goto L_1e2;
    let e#1;
    e#1 = t.get((c + 1));
    if (!((undefined !== e#1))) goto L_1e1;
    c = e#1;
    e#1;
    c = <c_new>;
    (c++);
    goto L_71;
  }
  return t;
}

// fn N  args=2 vars=7 closure=0 cpool=8 bc=538B file=markdown/src/Markdown
// args: e, t
// locals: n, r, i, o, s
function {
  let s;
  let o;
  let i;
  let r;
  let n;
  n = ("<" === e[t]);
  if (!(n)) goto L_23;
  goto L_24;
  // [栈深重同步 1 -> 0]
  r = t;
  if (!(!e.startsWith("https://", r))) goto L_85;
  if ((!e.startsWith("http://", r))) goto L_c2;
  if (!(!n)) goto L_c5;
  if (!((t > 0))) goto L_c5;
  if (!(new RegExp("[\\w@/]").test(e[(t - 1)]))) goto L_c5;
  return;
  i = r;
  o = 0;
  if (!((i < e.length))) goto L_141;
  if (!(!new RegExp("[\\s<>`\"[\\]]").test(e[i]))) goto L_141;
  if (!(("(" === e[i]))) goto L_11b;
  o = <o_new>;
  (o++);
  goto L_137;
  if (!((")" === e[i]))) goto L_137;
  if (((0 === o))) goto L_141;
  o = <o_new>;
  (o--);
  i = <i_new>;
  (i++);
  goto L_cb;
  if (!(n)) goto L_154;
  if (!((">" !== e[i]))) goto L_154;
  return;
  if (!(!n)) goto L_19f;
  if (!((i > r))) goto L_19f;
  if (!(new RegExp("[.,!?;:*_~]").test(e[(i - 1)]))) goto L_19f;
  i = <i_new>;
  (i--);
  goto L_15a;
  s = e.slice(r, i);
  if (!(new RegExp("^https?:\\/\\/[^/?#\\s@]+(?:[/?#]|$)").test(s))) goto L_218;
  if (!(n)) goto L_20f;
  goto L_212;
  // [栈深重同步 2 -> 1]
  return {href: s, end: i};
  return undefined;
}

// fn _  args=3 vars=7 closure=1 cpool=0 bc=307B file=markdown/src/Markdown
// args: e, t, n
// locals: r, i, o, s
// closure: B
function {
  let s;
  let o;
  let i;
  let r;
  if (!((undefined === n))) goto L_1b;
  goto L_47;
  // [栈深重同步 1 -> 0]
  if (!((n.get(t) == null))) goto L_47;
  n.get(t);
  r = -1;
  if (((r < 0))) goto L_8a;
  if ((((r + 1) >= e.length))) goto L_8a;
  if (!((40 !== e.charCodeAt((r + 1))))) goto L_8d;
  return;
  i = (r + 2);
  if (!((undefined === n))) goto L_a2;
  goto L_d2;
  // [栈深重同步 1 -> 0]
  if (!((n.get((r + 1)) == null))) goto L_d2;
  n.get((r + 1));
  o = -1;
  if (!((o < 0))) goto L_db;
  return;
  s = (o + 1);
  if (!(("<" === e[i]))) goto L_110;
  if (!((">" === e[(o - 1)]))) goto L_110;
  i = <i_new>;
  (i++);
  o = <o_new>;
  (o--);
  return {labelEnd: r, hrefStart: i, hrefEnd: o, nextPosition: s};
}

// fn B  args=3 vars=4 closure=0 cpool=0 bc=73B file=markdown/src/Markdown
// args: e, t, n
// locals: r
function {
  let r;
  r = n;
  if (!((r < e.length))) goto L_47;
  if (!((e.charCodeAt(r) === t))) goto L_3d;
  return r;
  r = <r_new>;
  (r++);
  goto L_5;
  return -1;
}

// fn q  args=2 vars=8 closure=1 cpool=6 bc=679B file=markdown/src/Markdown
// args: e, t
// locals: n, r, i, o, s, c
// closure: $
function {
  let c;
  let s;
  let o;
  let i;
  let r;
  let n;
  n = e.startsWith("\(", t);
  if (!(("$" === e[t]))) goto L_65;
  if (!(("$" !== e[(t + 1)]))) goto L_65;
  r = ("$" !== e[(t - 1)]);
  if (!(!n)) goto L_72;
  if ((!r)) goto L_7a;
  if (!($(e, t))) goto L_7d;
  return;
  if (!(n)) goto L_85;
  goto L_86;
  // [栈深重同步 1 -> 0]
  i = 1;
  if (!(n)) goto L_93;
  goto L_98;
  // [栈深重同步 1 -> 0]
  o = "$";
  s = e.indexOf(o, (t + i));
  if (!((s >= 0))) goto L_10d;
  if (!($(e, s))) goto L_10d;
  s = e.indexOf(o, (s + i));
  e.indexOf(o, (s + i));
  goto L_c8;
  if (!((s < 0))) goto L_115;
  return;
  c = e.slice((t + i), s);
  if (((0 === c.length))) goto L_267;
  if ((((c.length + (2 * i)) > 2048))) goto L_267;
  if ((c.includes("
"))) goto L_267;
  if ((c.includes("`"))) goto L_267;
  if ((new RegExp("^\\s|\\s$").test(c))) goto L_267;
  if (!(r)) goto L_26b;
  if ((new RegExp("^\\d+(?:[.,]\\d+)*$").test(c))) goto L_267;
  if (!((e[(s + 1)] == null))) goto L_264;
  e[(s + 1)];
  if (!(new RegExp("\\d").test(""))) goto L_26b;
  return undefined;
  return {source: e.slice(t, (s + i)), latex: c};
}

// fn D  args=1 vars=8 closure=0 cpool=2 bc=796B file=markdown/src/Markdown
// args: e
// locals: t, n, r, i, o, s, c
function {
  let c;
  let s;
  let o;
  let i;
  let r;
  let n;
  let t;
  t = e.mark();
  n = e.peekLine().trim();
  if (!(n.startsWith("$$"))) goto L_ba;
  goto L_f0;
  // [栈深重同步 1 -> 0]
  if (!(n.startsWith("\["))) goto L_ef;
  goto L_f0;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!((undefined === r))) goto L_f9;
  return;
  i = e.text.slice(t).trimStart();
  o = i.indexOf(r, 2);
  if (((o < 0))) goto L_22d;
  if (((o > 2048))) goto L_22d;
  if (!((i.slice((o + 2)).split(new RegExp("\\r?\\n"), 1)[0].trim().length > 0))) goto L_230;
  return;
  s = i.slice(2, o).trim();
  if (!((0 === s.length))) goto L_28a;
  return;
  c = (e.text.slice(t).length - i.length);
  e.position = (((t + c) + o) + 2);
  e.finishLine();
  return s;
}

// fn F  args=1 vars=3 closure=1 cpool=0 bc=95B file=markdown/src/Markdown
// args: e
// locals: t, n
// closure: D
function {
  let n;
  let t;
  t = e.mark();
  n = D(e);
  e.restore(t);
  return (undefined !== n);
}

// fn <atom:0>  args=3 vars=48 closure=0 cpool=47 bc=368B file=markdown/src/Markdown
// args: require, module, exports
// locals: e, t, n, r, i, o, Markdown, <class_fields_init>, Markdown#1, s, c, u, d, a, l, h, f, m, C, k, g, p, x, v, L, A, b, y, E, R, O, I, W, S, T, P, w, $, M, N, _, B, q, D, F
function {
  s = function s;
  c = function c;
  u = function u;
  d = function d;
  a = function a;
  l = function l;
  h = function h;
  f = function f;
  m = function m;
  C = function C;
  k = function k;
  g = function g;
  p = function p;
  x = function x;
  v = function v;
  L = function L;
  A = function A;
  b = function b;
  y = function y;
  E = function E;
  R = function R;
  O = function O;
  I = function I;
  W = function W;
  S = function S;
  T = function T;
  P = function P;
  w = function w;
  $ = function $;
  M = function M;
  N = function N;
  _ = function _;
  B = function B;
  q = function q;
  D = function D;
  F = function F;
  let Markdown#1;
  let i;
  let r;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Markdown = undefined;
  e = require("./TextParser");
  t = [];
  n = new Set();
  r = new RegExp("&(#\\d+|#x[0-9a-fA-F]+|amp|apos|gt|lt|quot);?|&");
  i = new RegExp("\\s");
  if ((o)) goto L_113;
  o = {};
  !function <atom:0>({});
  let Markdown;
  let <class_fields_init>;
  class Markdown extends undefined { ... }
  function <atom:0>.parse = function <atom:0>;
  function <atom:0>.parseTextOnly = function <atom:0>;
  function <atom:0>.parseInlines = function <atom:0>;
  function <atom:0>.parseRich = function <atom:0>;
  function <atom:0>.parseRichInlines = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Markdown>;
  Markdown = function <atom:0>;
  // close_loc <class_fields_init>
  Markdown#1 = function <atom:0>;
  exports.Markdown = Markdown#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=markdown/src/Markdown
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
