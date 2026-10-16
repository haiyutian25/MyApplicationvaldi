// fn n  args=1 vars=1 closure=1 cpool=0 bc=78B file=dil_text/src/text_elements/CaptionElement
// args: e
// closure: t
function {
  return (t.resolveDILCaptionLineHeight(e) / t.resolveDILCaptionFontSize(e));
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=45B file=dil_text/src/text_elements/CaptionElement
// args: e
function {
  if (!((e.size == null))) goto L_2c;
  e.size;
  return "lg";
}

// fn l  args=4 vars=4 closure=2 cpool=0 bc=345B file=dil_text/src/text_elements/CaptionElement
// args: t, i, n, r
// closure: e, o
function {
  n.pushColor(e.resolveDILTextColor(t.color, "secondary"));
  if (!((t.weight == null))) goto L_c1;
  t.weight;
  r.pushFontStyle(i, "normal", false, o.DILFontRole.Caption);
  n.pushFont(r.resolveFont());
  return 2;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=dil_text/src/text_elements/CaptionElement
// args: e
function {
  return false;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_text/src/text_elements/CaptionElement
// args: e
// closure: n
function {
  return n(e.size);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=110B file=dil_text/src/text_elements/CaptionElement
// args: e
// closure: t
function {
  return t.resolveDILTextLoadingBlockHeight(t.resolveDILCaptionFontSize(e.size));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=112B file=dil_text/src/text_elements/CaptionElement
// args: e
// closure: t
function {
  return Math.round(t.resolveDILCaptionLineHeight(e.size));   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=41B file=dil_text/src/text_elements/CaptionElement
// args: e, o, t
// closure: l
function {
  return l(e, e.size, o, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=7B file=dil_text/src/text_elements/CaptionElement
// args: e
// closure: n, r
function {
  return n(r(e));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=dil_text/src/text_elements/CaptionElement
// args: e
// closure: t, r
function {
  return t.resolveDILTextLoadingBlockHeight(t.resolveDILCaptionFontSize(r(e)));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=81B file=dil_text/src/text_elements/CaptionElement
// args: e
// closure: t, r
function {
  return Math.round(t.resolveDILCaptionLineHeight(r(e)));   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=10B file=dil_text/src/text_elements/CaptionElement
// args: e, o, t
// closure: l, r
function {
  return l(e, r(e), o, t);   // tail call
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=12 bc=490B file=dil_text/src/text_elements/CaptionElement
// args: require, module, exports
// locals: e, o, t, i, n, r, l
function {
  n = function n;
  r = function r;
  l = function l;
  let i;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CaptionElement = undefined;
  exports.DILV2CaptionElement = undefined;
  e = require("../rendering/DILTextColor");
  o = require("../rendering/DILTextFont");
  t = require("../rendering/DILTextTypography");
  i = ["value", "selectable", "color", "size", "weight", "width", "textAlign", "truncate", "maxLines", "isLoading", "loadingType", "loadingWidth", "loadingLineCount"];
  exports.CaptionElement = {properties: i, dilV2Properties: ["selectable", "color", "maxLines", "size", "textAlign", "truncate", "weight"], tableTypographyRole: o.DILFontRole.Caption, createsParagraph: function <atom:0>, resolveLineHeightMultiple: function <atom:0>, resolveLoadingBlockHeight: function <atom:0>, resolveLoadingLineHeight: function <atom:0>, pushStyle: function <atom:0>};
  null;
  exports.CaptionElement;
  exports.DILV2CaptionElement = {resolveLineHeightMultiple: function <atom:0>, resolveLoadingBlockHeight: function <atom:0>, resolveLoadingLineHeight: function <atom:0>, pushStyle: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/text_elements/CaptionElement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
