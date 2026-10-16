// fn e  args=2 vars=2 closure=0 cpool=0 bc=218B file=dil_widgets/src/widgets/attributes/DILSpacingAttributes
// args: t, e
function {
  if (!(("number" != typeof e))) goto L_cd;
  if (!(("string" != typeof e))) goto L_cd;
  t.paddingTop = e.top;
  t.paddingRight = e.right;
  t.paddingBottom = e.bottom;
  t.paddingLeft = e.left;
  goto L_d9;
  // [栈深重同步 1 -> 0]
  t.padding = e;
  e;
  return;
}

// fn o  args=2 vars=2 closure=0 cpool=0 bc=218B file=dil_widgets/src/widgets/attributes/DILSpacingAttributes
// args: t, e
function {
  if (!(("number" != typeof e))) goto L_cd;
  if (!(("string" != typeof e))) goto L_cd;
  t.marginTop = e.top;
  t.marginRight = e.right;
  t.marginBottom = e.bottom;
  t.marginLeft = e.left;
  goto L_d9;
  // [栈深重同步 1 -> 0]
  t.margin = e;
  e;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=94B file=dil_widgets/src/widgets/attributes/DILSpacingAttributes
// args: o, r
// locals: i
// closure: t, e
function {
  let i;
  i = t.resolveOptionalDILPadding(o.padding);
  if (!((undefined !== i))) goto L_5d;
  e(r, i);
  return true;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=136B file=dil_widgets/src/widgets/attributes/DILSpacingAttributes
// args: e, r
// locals: i
// closure: t, o
function {
  let i;
  i = t.resolveOptionalDILMargin(e.margin);
  if (!((undefined !== i))) goto L_87;
  if ((("number" == typeof i))) goto L_6c;
  if (!(("string" == typeof i))) goto L_7e;
  r.margin = i;
  return true;
  o(r, i);
  return true;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=4 bc=204B file=dil_widgets/src/widgets/attributes/DILSpacingAttributes
// args: require, module, exports
// locals: t, e, o
function {
  e = function e;
  o = function o;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_PADDING_ATTRIBUTES = undefined;
  exports.DIL_MARGIN_ATTRIBUTES = undefined;
  exports.applyResolvedDILPaddingAttributes = undefined;
  exports.applyResolvedDILMarginAttributes = undefined;
  t = require("dil_core/src/layout/DILSpacing");
  exports.DIL_PADDING_ATTRIBUTES = {attributeNames: ["padding"], apply: function <atom:0>};
  exports.DIL_MARGIN_ATTRIBUTES = {attributeNames: ["margin"], apply: function <atom:0>};
  exports.applyResolvedDILPaddingAttributes = e;
  exports.applyResolvedDILMarginAttributes = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/attributes/DILSpacingAttributes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
