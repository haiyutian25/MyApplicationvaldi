// fn s  args=1 vars=1 closure=1 cpool=0 bc=78B file=dil_text/src/text_elements/TextElement
// args: i
// closure: e
function {
  return e.resolveDILTextColor(i.color, "prose");   // tail call
}

// fn g  args=2 vars=2 closure=2 cpool=0 bc=357B file=dil_text/src/text_elements/TextElement
// args: e, i
// closure: h, t
function {
  if (!((e.size == null))) goto L_78;
  e.size;
  if (!((true === e.inline))) goto L_73;
  goto L_78;
  // [栈深重同步 3 -> 2]
  if (!((e.italic == null))) goto L_cc;
  e.italic;
  if (!((true === e.inline))) goto L_cc;
  if (!((true === e.inline))) goto L_11c;
  if (!((undefined === e.size))) goto L_11c;
  goto L_161;
  // [栈深重同步 6 -> 5]
  i.pushFontStyle("md", h(e), undefined, t.DILFontRole.Text);
  return;
}

// fn h  args=1 vars=1 closure=0 cpool=0 bc=165B file=dil_text/src/text_elements/TextElement
// args: e
function {
  if (!((undefined !== e.weight))) goto L_49;
  return e.weight;
  if (!((true === e.strong))) goto L_76;
  return "semibold";
  if (!((true === e.inline))) goto L_9f;
  return undefined;
  return "normal";
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=dil_text/src/text_elements/TextElement
// args: e
function {
  return (true !== e.inline);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=83B file=dil_text/src/text_elements/TextElement
// args: e
// closure: o
function {
  if (!((e.size == null))) goto L_50;
  e.size;
  return o.resolveDILTextLineHeightRatio("md");   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=105B file=dil_text/src/text_elements/TextElement
// args: e
// locals: i
// closure: n, g, s
function {
  let i;
  i = new n.DILTextFontResolver();
  g(e, i);
  return {color: s(e), font: i.resolveFont()};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=120B file=dil_text/src/text_elements/TextElement
// args: e
// closure: o
function {
  if (!((e.size == null))) goto L_74;
  e.size;
  return o.resolveDILTextLoadingBlockHeight(o.resolveDILTextFontSize("md"));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=83B file=dil_text/src/text_elements/TextElement
// args: e
// closure: o
function {
  if (!((e.size == null))) goto L_50;
  e.size;
  return o.resolveDILTextLineHeight("md");   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=4 cpool=0 bc=479B file=dil_text/src/text_elements/TextElement
// args: e, t, n
// locals: o, l
// closure: s, g, i, r
function {
  let l;
  let o;
  o = 0;
  t.pushColor(s(e));
  o = <o_new>;
  (o++);
  g(e, n);
  t.pushFont(n.resolveFont());
  o = <o_new>;
  (o++);
  l = i.readTextDecorationFromValue(e.lineThrough, e.underline);
  if (!(l)) goto L_132;
  t.pushTextDecoration(l);
  o = <o_new>;
  (o++);
  if (!(e.highlight)) goto L_1da;
  if (!(("string" == typeof e.highlight))) goto L_1d2;
  goto L_1d3;
  // [栈深重同步 3 -> 2]
  o = (o + r.pushDILHighlightStyle(undefined, t));
  (o + r.pushDILHighlightStyle(undefined, t));
  return o;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=9 bc=543B file=dil_text/src/text_elements/TextElement
// args: require, module, exports
// locals: e, i, t, n, o, r, l, s, g, h
function {
  s = function s;
  g = function g;
  h = function h;
  let l;
  let r;
  let o;
  let n;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextElement = undefined;
  e = require("../rendering/DILTextColor");
  i = require("../rendering/DILTextProperties");
  t = require("../rendering/DILTextFont");
  n = require("../rendering/DILTextFontResolver");
  o = require("../rendering/DILTextTypography");
  r = require("./HighlightElement");
  l = ["value", "selectable", "color", "editable", "size", "weight", "width", "textAlign", "truncate", "maxLines", "minLines", "inline", "wrap", "italic", "lineThrough", "strong", "underline", "preserveWhitespace", "__dilStringTextNode", "isLoading", "loadingType", "loadingWidth", "loadingLineCount"];
  exports.TextElement = {properties: l, dilV2Properties: ["selectable", "color", "highlight", "inline", "italic", "lineThrough", "maxLines", "minLines", "preserveWhitespace", "size", "strong", "tabularNums", "textAlign", "truncate", "underline", "value", "weight", "width"], autoSpacingRole: "text", inheritsTextSize: true, tableTypographyRole: t.DILFontRole.Text, createsParagraph: function <atom:0>, resolveLineHeightMultiple: function <atom:0>, resolveNativeStyle: function <atom:0>, resolveLoadingBlockHeight: function <atom:0>, resolveLoadingLineHeight: function <atom:0>, pushStyle: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/text_elements/TextElement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
