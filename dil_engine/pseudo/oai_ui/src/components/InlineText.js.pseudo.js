// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=oai_ui/src/components/InlineText
// args: e
function {
  e.Text = "text";
  e.Link = "link";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=oai_ui/src/components/InlineText
function {
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=oai_ui/src/components/InlineText
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.handleAttributedTextContainerTap = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=110B file=oai_ui/src/components/InlineText
// args: e
// closure: s
function {
  if (!((e.kind === s.Link))) goto L_6d;
  return (undefined !== e.onPress);
}

// fn <atom:0>  args=0 vars=10 closure=8 cpool=1 bc=2962B file=oai_ui/src/components/InlineText
// locals: r, o, u, c, b, h, p, v, e, this
// closure: s, i, n, l, d, e, t, a
function {
  this = this;
  let v;
  let p;
  let h;
  let b;
  let c;
  let u;
  let o;
  let r;
  if (!((this.viewModel.typography == null))) goto L_11a;
  this.viewModel.typography;
  if (!((this.viewModel.size == null))) goto L_119;
  this.viewModel.size;
  r = i.resolveOAITextStyle(i.OAITextSize.BodyMedium);
  o = n.resolveOAITypography(r, {font: this.viewModel.font, lineHeight: this.viewModel.lineHeight, lineHeightMultiple: this.viewModel.lineHeightMultiple});
  if (!((this.viewModel.color == null))) goto L_2ae;
  this.viewModel.color;
  u = i.OAIColor.TextTertiary;
  if (!((this.viewModel.linkColor == null))) goto L_33d;
  this.viewModel.linkColor;
  c = i.OAIColor.TextAccent;
  b = o.font;
  h = new l.AttributedTextBuilder();
  p = d(this.viewModel.spans);
  if (!((undefined === p))) goto L_44b;
  v = this.viewModel.spans.some(function <atom:0>);
  let e;
  for (const e of this.viewModel.spans) {
    if (!((e.kind === s.Link))) goto L_5c0;
    if (!((undefined === p))) goto L_5b5;
    goto L_5b6;
    // [栈深重同步 8 -> 7]
    goto L_61c;
    // [栈深重同步 4 -> 3]
    h.append(e.text, {color: u, font: b});
  }
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", a.label);
  e.setAttributeNumber("letterSpacing", r.letterSpacing);
  if (!((undefined === p))) goto L_72b;
  goto L_730;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityCategory", "link");
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  if (!((undefined === p))) goto L_849;
  goto L_84e;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "leaf");
  e.setAttributeString("color", u);
  e.setAttributeString("font", b);
  e.setAttributeNumber("lineHeight", o.lineHeight);
  e.setAttribute("lineHeightScalesWithFont", o.lineHeightScalesWithFont);
  e.setAttributeNumber("lineHeightMultiple", o.lineHeightMultiple);
  if (!((this.viewModel.numberOfLines == null))) goto L_a18;
  this.viewModel.numberOfLines;
  e.setAttributeNumber("numberOfLines", 0);
  e.setAttributeString("textAlign", this.viewModel.align);
  if (!((p == null))) goto L_ac1;
  p;
  goto L_ae2;
  if (!((undefined.onPress == null))) goto L_b12;
  undefined.onPress;
  if (!(v)) goto L_b11;
  goto L_b12;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", undefined);
  e.setAttribute("value", h.build());
  e.endRender();
  return;
}

// fn d  args=1 vars=1 closure=1 cpool=0 bc=84B file=oai_ui/src/components/InlineText
// args: e
// closure: s
function {
  if (!((1 === e.length))) goto L_53;
  if (!((e[0].kind === s.Link))) goto L_53;
  return e[0];
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=4 bc=419B file=oai_ui/src/components/InlineText
// args: require, module, exports
// locals: e, t, i, n, r, o, l, s, InlineText, <class_fields_init>, InlineText#1, d, a
function {
  d = function d;
  let a;
  let InlineText#1;
  let l;
  let o;
  let r;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.InlineTextSpanKind = undefined;
  exports.InlineText = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("label", ["width", "100%"], "GNz8ueYLYrrV9DWI");
  i = require("oai_core/src/OAITokens");
  n = require("oai_core/src/OAITypography");
  r = require("valdi_core/src/Component");
  o = require("valdi_core/src/Style");
  l = require("valdi_core/src/utils/AttributedTextBuilder");
  if ((s)) goto L_116;
  s = {};
  exports.InlineTextSpanKind = {};
  !function <atom:0>({});
  let InlineText;
  let <class_fields_init>;
  class InlineText extends r.Component { ... }
  <proto:InlineText>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:InlineText>;
  InlineText = function <atom:0>;
  // close_loc <class_fields_init>
  InlineText#1 = function <atom:0>;
  exports.InlineText = InlineText#1;
  a = {label: new o.Style({flexShrink: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/InlineText
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
