// fn l  args=1 vars=1 closure=1 cpool=0 bc=78B file=dil_text/src/text_elements/TitleElement
// args: t
// closure: e
function {
  return e.resolveDILTextColor(t.color, "prose");   // tail call
}

// fn n  args=2 vars=2 closure=1 cpool=0 bc=187B file=dil_text/src/text_elements/TitleElement
// args: e, i
// closure: t
function {
  if (!((e.weight == null))) goto L_70;
  e.weight;
  i.pushFontStyle(e.size, "semibold", false, t.DILFontRole.Title);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=dil_text/src/text_elements/TitleElement
// args: e
function {
  return true;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=dil_text/src/text_elements/TitleElement
// args: e
// closure: o
function {
  return o.resolveDILTitleLineHeightRatio(e.size);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=181B file=dil_text/src/text_elements/TitleElement
// args: e
// locals: t
// closure: i, n, l, o
function {
  let t;
  t = new i.DILTextFontResolver();
  n(e, t);
  return {color: l(e), font: t.resolveFont(), letterSpacing: o.resolveDILTitleLetterSpacing(e.size)};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=110B file=dil_text/src/text_elements/TitleElement
// args: e
// closure: o
function {
  return o.resolveDILTextLoadingBlockHeight(o.resolveDILTitleFontSize(e.size));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=dil_text/src/text_elements/TitleElement
// args: e
// closure: o
function {
  return o.resolveDILTitleLineHeight(e.size);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=123B file=dil_text/src/text_elements/TitleElement
// args: e, t, i
// closure: l, n
function {
  t.pushColor(l(e));
  n(e, i);
  t.pushFont(i.resolveFont());
  return 2;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=8 bc=427B file=dil_text/src/text_elements/TitleElement
// args: require, module, exports
// locals: e, t, i, o, r, l, n
function {
  l = function l;
  n = function n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TitleElement = undefined;
  e = require("../rendering/DILTextColor");
  t = require("../rendering/DILTextFont");
  i = require("../rendering/DILTextFontResolver");
  o = require("../rendering/DILTextTypography");
  r = ["value", "selectable", "color", "editable", "size", "weight", "width", "textAlign", "truncate", "maxLines", "isLoading", "loadingType", "loadingWidth", "loadingLineCount"];
  exports.TitleElement = {properties: r, dilV2Properties: ["selectable", "color", "italic", "maxLines", "size", "tabularNums", "textAlign", "truncate", "weight", "width"], accessibilityCategory: "header", tableTypographyRole: t.DILFontRole.Title, createsParagraph: function <atom:0>, resolveLineHeightMultiple: function <atom:0>, resolveNativeStyle: function <atom:0>, resolveLoadingBlockHeight: function <atom:0>, resolveLoadingLineHeight: function <atom:0>, pushStyle: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/text_elements/TitleElement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
