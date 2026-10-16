// fn <atom:0>  args=0 vars=5 closure=8 cpool=0 bc=804B file=dil_widgets/src/DILInlineError
// locals: n, i, d, l, this
// closure: w, h, R, e, t, T, r, o
function {
  this = this;
  let l;
  let d;
  let i;
  let n;
  n = this.viewModel.error;
  i = w(n);
  d = h(n);
  l = R(n);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", T.root);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", T.eyebrow);
  e.endRender();
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", T.message);
  e.setAttributeString("value", n.message);
  e.endRender();
  this.renderSummaryTiles(i);
  this.renderRows(d);
  this.renderSections(l);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=653B file=dil_widgets/src/DILInlineError
// args: t
// closure: e, i, T, d, l
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", T.summaryTile);
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", T.summaryLabel);
  e.setAttributeString("value", t.label);
  e.endRender();
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", T.summaryValue);
  e.setAttributeString("value", t.value);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=1 bc=205B file=dil_widgets/src/DILInlineError
// args: t
// closure: e, i, T, d, l, n
function {
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", T.summaryGrid);
  t.map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=676B file=dil_widgets/src/DILInlineError
// args: t
// locals: r
// closure: e, s, T, a, u
function {
  let r;
  for (const r of t) {
    e.beginRender(s, undefined);
    e.setAttributeStyle("style", T.row);
    e.beginRender(a, undefined);
    e.setAttributeStyle("style", T.rowLabel);
    e.setAttributeString("value", r.label);
    e.endRender();
    e.beginRender(u, undefined);
    e.setAttributeStyle("style", T.rowValue);
    e.setAttributeString("value", r.value);
    e.endRender();
    e.endRender();
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=841B file=dil_widgets/src/DILInlineError
// args: t
// locals: r
// closure: e, y, T, c, b, m
function {
  let r;
  for (const r of t) {
    e.beginRender(y, undefined);
    e.setAttributeStyle("style", T.section);
    e.beginRender(c, undefined);
    e.setAttributeStyle("style", T.sectionTitle);
    e.setAttributeString("value", r.title);
    e.endRender();
    e.beginRender(b, undefined);
    e.setAttributeStyle("style", T.codeBlock);
    e.beginRender(m, undefined);
    e.setAttributeStyle("style", T.codeText);
    e.setAttributeString("value", r.value);
    e.endRender();
    e.endRender();
    e.endRender();
  }
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/DILInlineError
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
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
  return this;
}

// fn w  args=1 vars=2 closure=1 cpool=0 bc=331B file=dil_widgets/src/DILInlineError
// args: e
// locals: t
// closure: k
function {
  let t;
  t = [];
  k(t, "Phase", e.details.phase);
  k(t, "Type", e.details.nodeType);
  k(t, "Error", e.name);
  if (!((e.details.sourceError == null))) goto L_124;
  e.details.sourceError;
  goto L_145;
  k(t, "Source", undefined.name);
  return t;
}

// fn h  args=1 vars=2 closure=1 cpool=0 bc=364B file=dil_widgets/src/DILInlineError
// args: e
// locals: t
// closure: A
function {
  let t;
  t = [];
  A(t, "Node", e.details.nodePath);
  A(t, "Prop", e.details.propName);
  A(t, "CEL", e.details.expression);
  if (!((e.details.sourceError == null))) goto L_145;
  e.details.sourceError;
  goto L_166;
  A(t, "Cause", undefined.message);
  return t;
}

// fn R  args=1 vars=5 closure=6 cpool=0 bc=380B file=dil_widgets/src/DILInlineError
// args: e
// locals: t, r, o, n
// closure: x, N, F, f, L, g
function {
  let n;
  let o;
  let r;
  let t;
  t = [];
  r = x(e.details.node);
  if (!((undefined !== r))) goto L_99;
  t.push({title: "Node summary", value: r});
  o = N(e.details.node);
  if (!((undefined !== o))) goto L_128;
  t.push({title: "Failed node JSON", value: F(o, f)});
  n = L(e);
  if (!((undefined !== n))) goto L_177;
  t.push({title: "Stack", value: F(n, g)});
  return t;
}

// fn k  args=3 vars=3 closure=0 cpool=0 bc=66B file=dil_widgets/src/DILInlineError
// args: e, t, r
function {
  if (!((undefined !== r))) goto L_41;
  if (!((0 !== r.length))) goto L_41;
  e.push({label: t, value: r});
  return;
}

// fn A  args=3 vars=3 closure=0 cpool=0 bc=66B file=dil_widgets/src/DILInlineError
// args: e, t, r
function {
  if (!((undefined !== r))) goto L_41;
  if (!((0 !== r.length))) goto L_41;
  e.push({label: t, value: r});
  return;
}

// fn x  args=1 vars=5 closure=1 cpool=0 bc=776B file=dil_widgets/src/DILInlineError
// args: e
// locals: t, r, o, n
// closure: P
function {
  let n;
  let o;
  let r;
  let t;
  if (!((undefined === e))) goto L_12;
  return;
  if (!(("string" == typeof e))) goto L_47;
  return "kind: text
length: ".concat(e.length);   // tail call
  if (((null === e))) goto L_84;
  if ((("object" != typeof e))) goto L_84;
  if (!(Array.isArray(e))) goto L_e9;
  if (!(Array.isArray(e))) goto L_df;
  goto L_e6;
  // [栈深重同步 3 -> 2]
  return "kind: ".concat(String(e));   // tail call
  t = e;
  r = Object.keys(t);
  if (!((0 === r.length))) goto L_14d;
  goto L_179;
  // [栈深重同步 3 -> 2]
  o = ["fields: ".concat(r.join(", "))];
  n = t.children;
  if (!(Array.isArray(n))) goto L_2db;
  o.push("children: ".concat(n.length));
  if (!((n.length > 0))) goto L_2db;
  o.push("child types: ".concat(n.map(P).join(", ")));
  return o.join("
");   // tail call
}

// fn N  args=1 vars=2 closure=0 cpool=0 bc=114B file=dil_widgets/src/DILInlineError
// args: e
// locals: t
function {
  if (!((undefined !== e))) goto L_71;
  try { // catch -> L_38
  return JSON.stringify(e, undefined, 2);
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_70
  return "Unable to serialize failed node: ".concat(String(t));
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn P  args=1 vars=2 closure=0 cpool=0 bc=150B file=dil_widgets/src/DILInlineError
// args: e
// locals: t
function {
  let t;
  if (!(("string" == typeof e))) goto L_13;
  return "text";
  if (!((null === e))) goto L_1e;
  return "null";
  if (!(Array.isArray(e))) goto L_50;
  return "array";
  if (!(("object" != typeof e))) goto L_5d;
  return typeof e;
  t = e.type;
  if (!(("string" == typeof t))) goto L_90;
  return t;
  return "object";
}

// fn L  args=1 vars=2 closure=1 cpool=0 bc=162B file=dil_widgets/src/DILInlineError
// args: e
// locals: t
// closure: O
function {
  let t;
  t = O(e.stack);
  if (!((undefined !== t))) goto L_33;
  return t;
  if (!((e.details.sourceError == null))) goto L_7f;
  e.details.sourceError;
  goto L_a0;
  return O(undefined.message);
}

// fn O  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_widgets/src/DILInlineError
// args: e
function {
  if (!((undefined !== e))) goto L_d;
  if (!((0 !== e.length))) goto L_d;
  return e;
  return;
}

// fn F  args=2 vars=2 closure=0 cpool=0 bc=90B file=dil_widgets/src/DILInlineError
// args: e, t
function {
  if (!((e.length <= t))) goto L_8;
  return e;
  return "".concat(e.slice(0, t), "
...");
}

// fn <atom:0>  args=3 vars=38 closure=0 cpool=16 bc=2460B file=dil_widgets/src/DILInlineError
// args: require, module, exports
// locals: e, t, r, o, n, i, d, l, s, a, u, y, c, b, m, v, p, S, f, g, DILInlineError, <class_fields_init>, DILInlineError#1, w, h, R, k, A, x, N, P, L, O, F, T
function {
  w = function w;
  h = function h;
  R = function R;
  k = function k;
  A = function A;
  x = function x;
  N = function N;
  P = function P;
  L = function L;
  O = function O;
  F = function F;
  let T;
  let DILInlineError#1;
  let g;
  let f;
  let S;
  let p;
  let v;
  let m;
  let b;
  let c;
  let y;
  let u;
  let a;
  let s;
  let l;
  let d;
  let i;
  let n;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILInlineError = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "blO56rgQpCfsuNO6");
  r = e.makeNodePrototype("label", ["value", "DIL render failed"], "6BSJ94o4Y4_UH7GE");
  o = e.makeNodePrototype("label", undefined, "YxiG072k5C0WPkYP");
  n = e.makeNodePrototype("view", undefined, "Mxpk46HitXZGad3g");
  i = e.makeNodePrototype("view", undefined, "6YGn90BkwxOaUGPN");
  d = e.makeNodePrototype("label", undefined, "bF05YB9KaKtsCXo1");
  l = e.makeNodePrototype("label", undefined, "AIk0ESf79WDboE3X");
  s = e.makeNodePrototype("view", undefined, "flGENIxLfHJVODa9");
  a = e.makeNodePrototype("label", undefined, "qV69PBqZzNKqVpZj");
  u = e.makeNodePrototype("label", undefined, "YlsPXGZZPOQe_cZT");
  y = e.makeNodePrototype("view", undefined, "SWLUrvH4ka2TYTng");
  c = e.makeNodePrototype("label", undefined, "dOd0a_jURi1CmbYJ");
  b = e.makeNodePrototype("view", undefined, "ywbMcDoRjJUbnY0d");
  m = e.makeNodePrototype("label", undefined, "qBONb8XOTRAeG2cN");
  v = require("dil_core/src/typography/DILDynamicFont");
  p = require("valdi_core/src/Component");
  S = require("valdi_core/src/Style");
  f = 1200;
  g = 1600;
  let DILInlineError;
  let <class_fields_init>;
  class DILInlineError extends p.Component { ... }
  <proto:DILInlineError>.onRender = function <atom:0>;
  <proto:DILInlineError>.renderSummaryTiles = function <atom:0>;
  <proto:DILInlineError>.renderRows = function <atom:0>;
  <proto:DILInlineError>.renderSections = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILInlineError>;
  DILInlineError = function <atom:0>;
  // close_loc <class_fields_init>
  DILInlineError#1 = function <atom:0>;
  exports.DILInlineError = DILInlineError#1;
  T = {root: new S.Style({minWidth: 240, maxWidth: 640, padding: 12, gap: 6, backgroundColor: "color-surface-elevated", borderColor: "color-border-danger-outline", borderWidth: 1, borderRadius: 8}), eyebrow: new S.Style({numberOfLines: 1, color: "color-text-danger", font: v.dynamicBoldSystemFontForSize(12)}), message: new S.Style({numberOfLines: 0, color: "color-text-prose", font: v.dynamicSystemFontForSize(13)}), summaryGrid: new S.Style({width: "100%", flexDirection: "row", flexWrap: "wrap", gap: 6}), summaryTile: new S.Style({minWidth: 112, padding: 8, backgroundColor: "alpha-05", borderRadius: 6, flexGrow: 1}), summaryLabel: new S.Style({numberOfLines: 1, color: "color-text-secondary", font: v.dynamicBoldSystemFontForSize(10)}), summaryValue: new S.Style({numberOfLines: 2, color: "color-text-prose", font: v.dynamicSystemFontForSize(11)}), row: new S.Style({width: "100%", flexDirection: "row", gap: 8}), rowLabel: new S.Style({width: 46, numberOfLines: 1, color: "color-text-secondary", font: v.dynamicBoldSystemFontForSize(11)}), rowValue: new S.Style({flexGrow: 1, flexShrink: 1, numberOfLines: 0, color: "color-text-prose", font: v.dynamicSystemFontForSize(11)}), section: new S.Style({width: "100%", gap: 4}), sectionTitle: new S.Style({numberOfLines: 1, color: "color-text-secondary", font: v.dynamicBoldSystemFontForSize(11)}), codeBlock: new S.Style({width: "100%", padding: 8, backgroundColor: "alpha-05", borderRadius: 6}), codeText: new S.Style({numberOfLines: 0, color: "color-text-prose", font: v.unscaledFont("monospace", 10)})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILInlineError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
