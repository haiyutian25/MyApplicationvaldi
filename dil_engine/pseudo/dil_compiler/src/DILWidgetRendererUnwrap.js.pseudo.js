// fn <atom:0>  args=2 vars=5 closure=5 cpool=0 bc=340B file=dil_compiler/src/DILWidgetRendererUnwrap
// args: e, d
// locals: c, a, t
// closure: n, r, t, i, o
function {
  let a;
  let c;
  if (!(n)) goto L_c;
  return;
  c = r(e);
  if ((d)) goto L_98;
  if ((("Each" === e.name))) goto L_98;
  if ((("ListView" === e.name))) goto L_98;
  a = ("AnimateGroup" === e.name);
  if (!((c == null))) goto L_a4;
  c;
  goto L_c5;
  if (!((undefined.stateScope === t))) goto L_e7;
  if ((a)) goto L_d5;
  if (!((undefined !== i))) goto L_df;
  n = true;
  true;
  return;
  i = c;
  c;
  let t;
  for (const t of e.children) {
    if ((a)) goto L_14b;
    if (!((c == null))) goto L_129;
    c;
    goto L_14a;
    o(t, (undefined !== undefined.stateScope));
  }
  return;
}

// fn i  args=2 vars=5 closure=1 cpool=1 bc=41B file=dil_compiler/src/DILWidgetRendererUnwrap
// args: e, t
// locals: i, n, o
// closure: r
function {
  let o;
  let n;
  let i;
  i = undefined;
  n = false;
  o = function <atom:0>;
  o(e, false);
  if (!(n)) goto L_25;
  return undefined;
  return i;
}

// fn n  args=1 vars=3 closure=1 cpool=0 bc=43B file=dil_compiler/src/DILWidgetRendererUnwrap
// args: e
// locals: t, e#1
// closure: d
function {
  let t;
  t = e;
  if (!((undefined !== t))) goto L_2a;
  let e#1;
  e#1 = d(t);
  if (!((undefined === e#1))) goto L_20;
  return t;
  t = e#1;
  e#1;
  goto L_5;
  return;
}

// fn r  args=1 vars=2 closure=2 cpool=0 bc=138B file=dil_compiler/src/DILWidgetRendererUnwrap
// args: i
// locals: n
// closure: e, t
function {
  let n;
  n = i;
  if (!((n instanceof e.DILDiagnosticWidgetRenderer))) goto L_5a;
  n = n.inner;
  n.inner;
  goto L_5;
  if (!((n instanceof t.DILInitialStateScopeWidgetRenderer))) goto L_88;
  return n;
  return undefined;
}

// fn o  args=2 vars=4 closure=2 cpool=0 bc=234B file=dil_compiler/src/DILWidgetRendererUnwrap
// args: i, n
// locals: r, o
// closure: t, e
function {
  let o;
  let r;
  r = i;
  o = n;
  if (!((r instanceof t.DILInitialStateScopeWidgetRenderer))) goto L_8f;
  o = r.makeScopedCELScope(o);
  r.makeScopedCELScope(o);
  r = r.inner;
  r.inner;
  goto L_a;
  if (!(!(r instanceof e.DILDiagnosticWidgetRenderer))) goto L_be;
  return o;
  r = r.inner;
  r.inner;
  goto L_a;
}

// fn d  args=1 vars=1 closure=2 cpool=0 bc=119B file=dil_compiler/src/DILWidgetRendererUnwrap
// args: i
// closure: e, t
function {
  if (((i instanceof e.DILDiagnosticWidgetRenderer))) goto L_50;
  if (!((i instanceof t.DILInitialStateScopeWidgetRenderer))) goto L_75;
  return i.inner;
  return undefined;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=5 bc=187B file=dil_compiler/src/DILWidgetRendererUnwrap
// args: require, module, exports
// locals: e, t, i, n, r, o, d
function {
  i = function i;
  n = function n;
  r = function r;
  o = function o;
  d = function d;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.findDILWidgetStateScope = undefined;
  exports.unwrapDILWidgetRenderer = undefined;
  exports.getDILInitialStateScopeWidgetRenderer = undefined;
  exports.makeScopedDILWidgetRendererCELScope = undefined;
  e = require("./DILDiagnosticWidgetRenderer");
  t = require("./DILInitialStateScopeWidgetRenderer");
  exports.findDILWidgetStateScope = i;
  exports.unwrapDILWidgetRenderer = n;
  exports.getDILInitialStateScopeWidgetRenderer = r;
  exports.makeScopedDILWidgetRendererCELScope = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILWidgetRendererUnwrap
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
