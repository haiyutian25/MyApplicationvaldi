// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_text/src/text_elements/CodeElement
function {
  return false;
}

// fn <atom:0>  args=3 vars=3 closure=3 cpool=0 bc=467B file=dil_text/src/text_elements/CodeElement
// args: t, s, n
// closure: r, o, e
function {
  s.pushColor(r.resolveDILTextColor(undefined, "emphasis"));
  s.pushBackgroundColor("color-surface-tertiary");
  s.pushBackgroundPadding(o.DIL_CODE_BACKGROUND_PADDING);
  s.pushBackgroundBorderRadius(o.DIL_CODE_BACKGROUND_BORDER_RADIUS);
  n.pushFontStyle("sm", "normal", false, e.DILFontRole.Text);
  s.pushFont(o.DIL_CODE_FONT);
  return 5;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=169B file=dil_text/src/text_elements/CodeElement
// args: require, module, exports
// locals: e, r, o, t
function {
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CodeElement = undefined;
  e = require("../rendering/DILTextFont");
  r = require("../rendering/DILTextColor");
  o = require("../rendering/DILTextTypography");
  t = ["value", "key"];
  exports.CodeElement = {properties: t, dilV2Properties: [], createsParagraph: function <atom:0>, pushStyle: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/text_elements/CodeElement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
