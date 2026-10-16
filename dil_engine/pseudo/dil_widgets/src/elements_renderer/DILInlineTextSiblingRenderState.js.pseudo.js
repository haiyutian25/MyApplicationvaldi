// fn i  args=1 vars=2 closure=1 cpool=0 bc=117B file=dil_widgets/src/elements_renderer/DILInlineTextSiblingRenderState
// args: e
// locals: i
// closure: t
function {
  let i;
  i = e.renderState;
  if (!((undefined === i))) goto L_2f;
  return e;
  null;
  e;
  return {renderState: i.withProperty(t, {hasOutput: false, hasTrailingCollapsibleWhitespace: false})};
}

// fn n  args=1 vars=2 closure=2 cpool=0 bc=113B file=dil_widgets/src/elements_renderer/DILInlineTextSiblingRenderState
// args: e
// locals: i
// closure: l, t
function {
  let i;
  i = e.renderState;
  if (((undefined === i))) goto L_34;
  if (!((undefined === l(e)))) goto L_38;
  return e;
  null;
  e;
  return {renderState: i.withProperty(t, false)};
}

// fn r  args=1 vars=2 closure=1 cpool=0 bc=137B file=dil_widgets/src/elements_renderer/DILInlineTextSiblingRenderState
// args: t
// locals: e
// closure: l
function {
  let e;
  if (!((undefined === t.renderState))) goto L_2c;
  return true;
  e = l(t);
  if (!((e == null))) goto L_3d;
  e;
  goto L_5e;
  if (!((true === undefined.hasOutput))) goto L_88;
  return !e.hasTrailingCollapsibleWhitespace;
}

// fn s  args=3 vars=4 closure=3 cpool=0 bc=126B file=dil_widgets/src/elements_renderer/DILInlineTextSiblingRenderState
// args: t, e, i
// locals: n
// closure: l, u, a
function {
  let n;
  n = l(t);
  if (!((undefined !== n))) goto L_7d;
  if (!(u(e))) goto L_3a;
  n.hasOutput = true;
  if (!(i)) goto L_2e;
  n.hasTrailingCollapsibleWhitespace = a(e);
  goto L_7d;
  // [栈深重同步 1 -> 0]
  if (!(n.hasOutput)) goto L_7d;
  if (!(i)) goto L_7d;
  if (!(a(e))) goto L_7d;
  n.hasTrailingCollapsibleWhitespace = true;
  true;
  return;
}

// fn o  args=2 vars=5 closure=1 cpool=0 bc=181B file=dil_widgets/src/elements_renderer/DILInlineTextSiblingRenderState
// args: t, e
// locals: i, n, r
// closure: l
function {
  let r;
  let n;
  let i;
  i = l(t);
  if (!((undefined === i))) goto L_18;
  e();
  return;
  n = i.hasOutput;
  r = i.hasTrailingCollapsibleWhitespace;
  i.hasOutput = false;
  i.hasTrailingCollapsibleWhitespace = false;
  try { // catch -> L_8f
  e();
  <?>;
  // gosub (finally 块) 149
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 149
  throw <?>;
  i.hasOutput = n;
  i.hasTrailingCollapsibleWhitespace = r;
  // ret (finally 块) 
  return;
}

// fn l  args=1 vars=2 closure=1 cpool=0 bc=110B file=dil_widgets/src/elements_renderer/DILInlineTextSiblingRenderState
// args: e
// locals: i
// closure: t
function {
  let i;
  if (!((e.renderState == null))) goto L_2d;
  e.renderState;
  goto L_54;
  i = undefined.getProperty(t);
  if (!((null !== i))) goto L_6c;
  if (!(("object" == typeof i))) goto L_6c;
  return i;
  return undefined;
}

// fn u  args=1 vars=2 closure=2 cpool=0 bc=172B file=dil_widgets/src/elements_renderer/DILInlineTextSiblingRenderState
// args: t
// locals: e
// closure: e, u
function {
  if (!(("string" == typeof t))) goto L_32;
  return e.test(t);   // tail call
  if (!(!Array.isArray(t))) goto L_62;
  return false;
  let e;
  e = 0;
  if (!((e < t.length))) goto L_a9;
  if (((17 === t[e]))) goto L_83;
  if (!((12 === t[e]))) goto L_88;
  return true;
  if (!((1 === t[e]))) goto L_9f;
  if (!(u(t[(e + 1)]))) goto L_9f;
  return true;
  e = <e_new>;
  (e++);
  goto L_67;
  return false;
}

// fn a  args=1 vars=3 closure=1 cpool=0 bc=223B file=dil_widgets/src/elements_renderer/DILInlineTextSiblingRenderState
// args: t
// locals: e, i
// closure: a
function {
  if (!(("string" == typeof t))) goto L_63;
  if ((t.endsWith(" "))) goto L_62;
  return t.endsWith("
");
  if (!(!Array.isArray(t))) goto L_93;
  return false;
  let e;
  e = (t.length - 1);
  if (!((e >= 0))) goto L_dc;
  let i;
  i = t[e];
  if (((17 === i))) goto L_bb;
  if (!((12 === i))) goto L_c0;
  return false;
  if (!((1 === i))) goto L_d2;
  return a(t[(e + 1)]);   // tail call
  e = <e_new>;
  (e--);
  goto L_9b;
  return false;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=10 bc=224B file=dil_widgets/src/elements_renderer/DILInlineTextSiblingRenderState
// args: require, module, exports
// locals: t, e, i, n, r, s, o, l, u, a
function {
  i = function i;
  n = function n;
  r = function r;
  s = function s;
  o = function o;
  l = function l;
  u = function u;
  a = function a;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderOptionsWithDILInlineTextSiblings = undefined;
  exports.renderOptionsWithoutDILInlineTextSiblings = undefined;
  exports.hasDILInlineTextSiblings = undefined;
  exports.recordDILInlineTextSiblingOutput = undefined;
  exports.renderWithoutDILInlineTextSiblingOutput = undefined;
  t = Symbol("DIL inline text siblings");
  e = new RegExp("[^ \\t\\f\\r]");
  exports.renderOptionsWithDILInlineTextSiblings = i;
  exports.renderOptionsWithoutDILInlineTextSiblings = n;
  exports.hasDILInlineTextSiblings = r;
  exports.recordDILInlineTextSiblingOutput = s;
  exports.renderWithoutDILInlineTextSiblingOutput = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILInlineTextSiblingRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
