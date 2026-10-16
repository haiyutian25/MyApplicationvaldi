// fn <atom:0>  args=3 vars=16 closure=0 cpool=0 bc=1051B file=dil_text/src/DILTextRegistry
// args: require, module, exports
// locals: e, t, r, n, i, d, l, o, m, a, x, T, g
function {
  let g;
  let T;
  let x;
  let a;
  let m;
  let o;
  let l;
  let d;
  let i;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_TEXT_WIDGETS_MAP = undefined;
  e = require("./code/CodeWidgetRenderer");
  t = require("./math/DILMathWidgetRenderer");
  r = require("./markdown/MarkdownWidgetRendererFactory");
  n = require("./rendering/DILWidgetTextRendererFactory");
  i = require("./shimmer/ShimmerTextWidgetRenderer");
  d = require("./text_elements/BoldElement");
  l = require("./text_elements/CaptionElement");
  o = require("./text_elements/HighlightElement");
  m = require("./text_elements/ItalicElement");
  a = require("./text_elements/LabelElement");
  x = require("./text_elements/TextElement");
  T = require("./text_elements/TitleElement");
  g = require("./text_elements/UnderlineElement");
  exports.DIL_TEXT_WIDGETS_MAP = {Text: new n.DILWidgetTextRendererFactory(x.TextElement), Title: new n.DILWidgetTextRendererFactory(T.TitleElement), Caption: new n.DILWidgetTextRendererFactory(l.CaptionElement), Bold: new n.DILWidgetTextRendererFactory(d.BoldElement), Code: e.CodeWidgetFactory, Highlight: new n.DILWidgetTextRendererFactory(o.HighlightElement), Italic: new n.DILWidgetTextRendererFactory(m.ItalicElement), Label: new n.DILWidgetTextRendererFactory(a.LabelElement), Markdown: new r.MarkdownWidgetRendererFactory(), Math: t.DILTextMathWidgetFactory, ShimmerText: new i.ShimmerTextWidgetRendererFactory(), Underline: new n.DILWidgetTextRendererFactory(g.UnderlineElement)};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/DILTextRegistry
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
