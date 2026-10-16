// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_text/src/text_elements/LabelElement
function {
  return false;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=83B file=dil_text/src/text_elements/LabelElement
// args: e
// closure: r
function {
  if (!((e.size == null))) goto L_50;
  e.size;
  return r.resolveDILTextLineHeightRatio("sm");   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=388B file=dil_text/src/text_elements/LabelElement
// args: r, o, l
// closure: e, t
function {
  o.pushColor(e.resolveDILTextColor(r.color, "secondary"));
  if (!((r.size == null))) goto L_c0;
  r.size;
  if (!((r.weight == null))) goto L_ec;
  r.weight;
  l.pushFontStyle("sm", "medium", false, t.DILFontRole.Text);
  o.pushFont(l.resolveFont());
  return 2;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=251B file=dil_text/src/text_elements/LabelElement
// args: require, module, exports
// locals: e, t, r, o
function {
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LabelElement = undefined;
  e = require("../rendering/DILTextColor");
  t = require("../rendering/DILTextFont");
  r = require("../rendering/DILTextTypography");
  o = ["value", "selectable", "color", "fieldName", "size", "textAlign", "weight", "key"];
  exports.LabelElement = {properties: o, dilV2Properties: ["selectable", "color", "htmlFor", "size", "textAlign", "truncate", "weight", "width"], createsParagraph: function <atom:0>, resolveLineHeightMultiple: function <atom:0>, pushStyle: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/text_elements/LabelElement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
