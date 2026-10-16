// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=97B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t
// locals: e
// closure: o, s
function {
  let e;
  e = o.getExplicit(t);
  if (!((null != e))) goto L_60;
  s.set(t, e);
  return;
}

// fn s  args=3 vars=5 closure=0 cpool=1 bc=116B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t, e, r
// locals: s, o
function {
  let o;
  let s;
  s = e.attributes;
  o = r.attributes;
  t.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=83B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: r
// closure: e, t
function {
  if (!((r !== e))) goto L_52;
  if ((("stretchy" !== r))) goto L_3c;
  if (!(t.getExplicit("stretchy"))) goto L_52;
  if (!(("data-latex" !== r))) goto L_52;
  return ("data-latex-item" !== r);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=1 bc=75B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t, e
function {
  return t.getExplicitNames().filter(function <atom:0>);   // tail call
}

// fn o  args=2 vars=8 closure=0 cpool=1 bc=248B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t, e
// locals: r, s, o, a, i, n
function {
  let i;
  let a;
  let o;
  let s;
  let r;
  r = function <atom:0>;
  s = t.attributes;
  o = e.attributes;
  a = r(s, "lspace");
  i = r(o, "rspace");
  if (!((a.length !== i.length))) goto L_86;
  return false;
  let n;
  for (const n of a) {
    if (!((s.getExplicit(n) !== o.getExplicit(n)))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn a  args=3 vars=8 closure=1 cpool=0 bc=683B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t, r, s
// locals: o, a, i, n, c
// closure: e
function {
  let o;
  o = [];
  let a;
  for (const a of t.getList((("m" + r) + s))) {
    let c;
    let n;
    let i;
    i = a.childNodes;
    if (!(i[a[r]])) goto L_84;
    if ((i[a[s]])) continue;
    n = a.parent;
    if (!(i[a[r]])) goto L_140;
    goto L_1c6;
    // [栈深重同步 4 -> 3]
    c = t.nodeFactory.create("node", ("m" + s), [i[a.base], i[a[s]]]);
    e.default.copyAttributes(a, c);
    n.replaceChild(c, a);
    o.push(a);
  }
  t.removeFromList((("m" + r) + s), o);
  return;
}

// fn i  args=3 vars=8 closure=1 cpool=0 bc=756B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t, r, s
// locals: o, a, r#1, i, r#2
// closure: e
function {
  let o;
  o = [];
  let a;
  for (const a of t.getList(r)) {
    let i;
    let r#1;
    if ((a.attributes.get("displaystyle"))) continue;
    r#1 = a.childNodes[a.base];
    i = r#1.coreMO();
    if (!(r#1.getProperty("movablelimits"))) continue;
    if (!(!i.attributes.hasExplicit("movablelimits"))) continue;
    let r#2;
    r#2 = t.nodeFactory.create("node", s, a.childNodes);
    e.default.copyAttributes(a, r#2);
    a.parent.replaceChild(r#2, a);
    o.push(a);
  }
  t.removeFromList(r, o);
  return;
}

// fn n  args=2 vars=4 closure=0 cpool=0 bc=231B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t, e
// locals: r, s
function {
  let r;
  r = t.indexOf(e);
  if (!((-1 !== r))) goto L_e4;
  let s;
  s = (r + e.length);
  if (!((0 !== r))) goto L_74;
  if (((32 !== t.charCodeAt((r - 1))))) goto L_ad;
  if (!((s !== t.length))) goto L_ad;
  if (!(!(32 !== t.charCodeAt(s)))) goto L_b3;
  return true;
  r = t.indexOf(e, s);
  t.indexOf(e, s);
  goto L_2a;
  return false;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=486B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t
// locals: r, s, t#1
// closure: e
function {
  let r;
  r = t.data;
  let s;
  for (const s of r.getList("fixStretchy")) {
    if (!(e.default.getProperty(s, "fixStretchy"))) continue;
    let t#1;
    t#1 = e.default.getForm(s);
    if (!((t#1 == null))) goto L_109;
    t#1;
    goto L_134;
    if (!((undefined[3] == null))) goto L_113;
    undefined[3];
    goto L_134;
    if (!(undefined.stretchy)) goto L_18a;
    e.default.setAttribute(s, "stretchy", false);
    e.default.removeProperties(s, "fixStretchy");
  }
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=445B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t
// locals: e, s, r
// closure: r, n
function {
  let s;
  let e;
  if ((t.getProperty("keep-attrs"))) goto L_35;
  e = "";
  s = t.attributes;
  s.unset(r.TexConstant.Attr.LATEXITEM);
  let r;
  for (const r of s.getExplicitNames()) {
    if (!((0 !== e.length))) goto L_128;
    if ((n(e, r))) goto L_1b2;
    if (((s.get(r) !== s.getInherited(r)))) goto L_1b2;
    s.unset(r);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=106B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t
// closure: r, n
function {
  t.data.root.walkTree(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=8 closure=4 cpool=0 bc=2510B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: r
// locals: a, i, r#1, n, c, l, t
// closure: e, t, o, s
function {
  let a;
  a = [];
  let i;
  for (const i of r.data.getList("mo")) {
    let l;
    let c;
    let n;
    let r#1;
    if ((i.getProperty("relationsCombined"))) goto L_1f7;
    if ((!i.parent)) goto L_1f7;
    if (!(i.parent)) goto L_15f;
    if ((!e.default.isType(i.parent, "mrow"))) goto L_1f7;
    if (((e.default.getTexClass(i) !== t.TEXCLASS.REL))) continue;
    r#1 = undefined;
    n = i.parent.childNodes;
    c = (n.indexOf(i) + 1);
    l = e.default.getProperty(i, "variantForm");
    if (!((c < n.length))) goto L_8ff;
    r#1 = n[c];
    if (!(n[c])) goto L_8ff;
    if (!(e.default.isType(r#1, "mo"))) goto L_8ff;
    if (!((e.default.getTexClass(r#1) === t.TEXCLASS.REL))) goto L_8ff;
    if (((l !== e.default.getProperty(r#1, "variantForm")))) goto L_42d;
    if (!(!o(i, r#1))) goto L_583;
    if ((i.attributes.hasExplicit("rspace"))) goto L_4d8;
    e.default.setAttribute(i, "rspace", "0pt");
    if ((r#1.attributes.hasExplicit("lspace"))) goto L_57f;
    e.default.setAttribute(r#1, "lspace", "0pt");
    goto L_8ff;
    e.default.appendChildren(i, e.default.getChildren(r#1));
    s(["stretchy", "rspace"], i, r#1);
    let t;
    for (const t of r#1.getPropertyNames()) {
      i.setProperty(t, r#1.getProperty(t));
      // [栈深重同步 3 -> 6]
    }
    if (!(r#1.attributes.get("data-latex"))) goto L_7f6;
    i.attributes.set("data-latex", (i.attributes.get("data-latex") + r#1.attributes.get("data-latex")));
    n.splice(c, 1);
    a.push(r#1);
    r#1.parent = null;
    r#1.setProperty("relationsCombined", true);
    i.setProperty("texClass", t.TEXCLASS.REL);
    goto L_2c4;
    i.attributes.setInherited("form", i.getForms()[0]);
  }
  r.data.removeFromList("mo", a);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=110B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t
// locals: e
// closure: a
function {
  let e;
  e = t.data;
  if ((e.error)) goto L_6d;
  a(e, "sub", "sup");
  a(e, "under", "over");
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=86B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t
// locals: e
// closure: i
function {
  let e;
  e = t.data;
  i(e, "munderover", "msubsup");
  i(e, "munder", "msub");
  i(e, "mover", "msup");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=175B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t
function {
  t.data.root.setInheritedAttributes({}, t.math.display, 0, false);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=47B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t
function {
  return ("data-latex" !== t.substring(0, 10));
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=113B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: e
// closure: o, t
function {
  return o.attributes.set(e, t.get(e));   // tail call
}

// fn <atom:0>  args=1 vars=8 closure=0 cpool=2 bc=780B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: t
// locals: e, r, s, t#1, r#1, e#1, o
function {
  let r;
  let e;
  e = t.data;
  r = [];
  let s;
  for (const s of e.getList("mstyle")) {
    let e#1;
    let t#1;
    if (!((1 !== s.childNodes[0].childNodes.length))) goto L_b9;
    // close_loc t#1
   continue;
    t#1 = s.attributes;
    let r#1;
    for (const r#1 of ["displaystyle", "scriptlevel"]) {
      if (!((t#1.getExplicit(r#1) === t#1.getInherited(r#1)))) goto L_177;
      t#1.unset(r#1);
      // [栈深重同步 3 -> 6]
    }
    e#1 = t#1.getExplicitNames();
    if (!((0 === e#1.filter(function <atom:0>).length))) goto L_2d0;
    let o;
    o = s.childNodes[0].childNodes[0];
    e#1.forEach(function <atom:0>);
    s.parent.replaceChild(o, s);
    r.push(s);
    // close_loc o
    // close_loc t#1
  }
  e.removeFromList("mstyle", r);
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=12 bc=184B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// args: require, module, exports
// locals: t, e, r, s, o, a, i, n, c
function {
  s = function s;
  o = function o;
  a = function a;
  i = function i;
  n = function n;
  let c;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  t = require("../../core/MmlTree/MmlNode");
  e = require("./NodeUtil");
  r = require("./TexConstants");
  c = {cleanStretchy: function <atom:0>, cleanAttributes: function <atom:0>, combineRelations: function <atom:0>, cleanSubSup: function <atom:0>, moveLimits: function <atom:0>, setInherited: function <atom:0>, checkScriptlevel: function <atom:0>};
  exports.default = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/FilterUtil
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
