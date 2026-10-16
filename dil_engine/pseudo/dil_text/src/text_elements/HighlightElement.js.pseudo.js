// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=dil_text/src/text_elements/HighlightElement
// args: e
function {
  e.Blue = "blue";
  e.Green = "green";
  e.Orange = "orange";
  e.Pink = "pink";
  return;
}

// fn o  args=2 vars=2 closure=2 cpool=0 bc=191B file=dil_text/src/text_elements/HighlightElement
// args: r, n
// closure: i, e
function {
  n.pushBackgroundColor(i(r));
  n.pushBackgroundPadding(e.DIL_HIGHLIGHT_BACKGROUND_PADDING);
  n.pushBackgroundBorderRadius(e.DIL_HIGHLIGHT_BACKGROUND_BORDER_RADIUS);
  return 3;
}

// fn i  args=1 vars=1 closure=2 cpool=0 bc=271B file=dil_text/src/text_elements/HighlightElement
// args: e
// closure: n, t
function {
  if (!((e === n.Green))) goto L_4e;
  return t[n.Green];
  if (!((e === n.Orange))) goto L_9b;
  return t[n.Orange];
  if (!((e === n.Pink))) goto L_e8;
  return t[n.Pink];
  return t[n.Blue];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_text/src/text_elements/HighlightElement
function {
  return "atomic";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_text/src/text_elements/HighlightElement
function {
  return false;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=39B file=dil_text/src/text_elements/HighlightElement
// args: e, r, n
// closure: o
function {
  return o(e.color, r);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=6 bc=376B file=dil_text/src/text_elements/HighlightElement
// args: require, module, exports
// locals: e, r, n, t, o, i
function {
  o = function o;
  i = function i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HighlightElement = undefined;
  exports.pushDILHighlightStyle = undefined;
  e = require("../rendering/DILTextTypography");
  r = ["value", "key", "color"];
  if ((n)) goto L_83;
  n = {};
  !function <atom:0>({});
  {}[n.Blue] = "blue-a50";
  "blue-a50";
  {}[n.Green] = "green-a50";
  "green-a50";
  {}[n.Orange] = "orange-a50";
  "orange-a50";
  {}[n.Pink] = "pink-a50";
  "pink-a50";
  t = {};
  exports.HighlightElement = {properties: r, dilV2Properties: [], resolveTextSelectionBehavior: function <atom:0>, createsParagraph: function <atom:0>, pushStyle: function <atom:0>};
  exports.pushDILHighlightStyle = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/text_elements/HighlightElement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
