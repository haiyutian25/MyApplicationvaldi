// fn e  args=2 vars=2 closure=0 cpool=0 bc=44B file=widgets/src/styles/TextStyleFont
// args: t, o
function {
  return "".concat(t, " ", o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=785B file=widgets/src/styles/TextStyleFont
// args: o
// closure: t
function {
  o.TITLE_1 = t.systemBoldFont(34);
  o.TITLE_2 = t.systemBoldFont(28);
  o.TITLE_3 = t.systemBoldFont(22);
  o.TITLE_4 = t.systemBoldFont(20);
  o.HEADLINE = t.systemBoldFont(18);
  o.BODY = t.systemFont(16);
  o.BODY_EMPHASIS = t.systemBoldFont(16);
  o.BODY_BOLD = t.systemBoldFont(16);
  o.SUBHEADLINE = t.systemFont(14);
  o.SUBHEADLINE_EMPHASIS = t.systemBoldFont(14);
  o.CAPTION = t.systemFont(12);
  o.CAPTION_EMPHASIS = t.systemBoldFont(12);
  o.CAPTION_BOLD = t.systemBoldFont(12);
  o.FOOTNOTE = t.systemFont(10);
  o.FOOTNOTE_EMPHASIS = t.systemBoldFont(10);
  o.FOOTNOTE_BOLD = t.systemBoldFont(10);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=638B file=widgets/src/styles/TextStyleFont
// args: o
// closure: t
function {
  o.TITLE_1 = t.systemBoldFont(34);
  o.TITLE_2 = t.systemBoldFont(28);
  o.TITLE_3 = t.systemBoldFont(22);
  o.TITLE_4 = t.systemBoldFont(20);
  o.HEADLINE = t.systemBoldFont(18);
  o.BODY = t.systemFont(16);
  o.BODY_EMPHASIS = t.systemBoldFont(16);
  o.SUBHEADLINE = t.systemFont(14);
  o.SUBHEADLINE_EMPHASIS = t.systemBoldFont(14);
  o.CAPTION = t.systemFont(12);
  o.CAPTION_EMPHASIS = t.systemBoldFont(12);
  o.FOOTNOTE = t.systemFont(10);
  o.FOOTNOTE_EMPHASIS = t.systemBoldFont(10);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=160B file=widgets/src/styles/TextStyleFont
// args: require, module, exports
// locals: t, o, s, e
function {
  e = function e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextStyleFont = undefined;
  exports.TextStyleFontNonDynamic = undefined;
  exports.clampedTextStyleFont = undefined;
  t = require("valdi_core/src/SystemFont");
  if ((o)) goto L_7b;
  o = {};
  exports.TextStyleFont = {};
  !function <atom:0>({});
  if ((s)) goto L_92;
  s = {};
  exports.TextStyleFontNonDynamic = {};
  function <atom:0>({});
  exports.clampedTextStyleFont = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/styles/TextStyleFont
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
