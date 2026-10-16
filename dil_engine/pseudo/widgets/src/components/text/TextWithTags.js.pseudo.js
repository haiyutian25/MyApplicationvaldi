// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=widgets/src/components/text/TextWithTags
// args: t
function {
  t.Left = "left";
  t.Center = "center";
  t.Right = "right";
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=262B file=widgets/src/components/text/TextWithTags
// locals: t, n, this
// closure: a, e, i
function {
  this = this;
  let n;
  let t;
  t = this.viewModel.alignment;
  if (!(t)) goto L_5a;
  goto L_5b;
  // [栈深重同步 1 -> 0]
  n = undefined;
  e.beginRender(i, undefined);
  e.setAttributeString("justifyContent", n);
  this.onRenderRouting();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=304B file=widgets/src/components/text/TextWithTags
// locals: t, e, t#1, this
function {
  this = this;
  let t;
  t = this.viewModel;
  if (!(t.disallowAttributedTextRendering)) goto L_51;
  return true;
  let e;
  for (const e of t.chunks) {
    let t#1;
    t#1 = this.getTagStyle(e.key);
    if (!(t#1)) continue;
    if ((t#1.accessibilityId)) goto L_11b;
    if (!(t#1.letterSpacing)) continue;
    return true;
    // [栈深重同步 0 -> 3]
  }
  return false;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=118B file=widgets/src/components/text/TextWithTags
// locals: this
function {
  this = this;
  if (!(this.needsMultipleLabels())) goto L_50;
  goto L_75;
  // [栈深重同步 1 -> 0]
  this.onRenderTextUsingAttributedText();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=2 cpool=0 bc=1359B file=widgets/src/components/text/TextWithTags
// locals: t, i, r, t#1, this
// closure: e, n
function {
  this = this;
  let i;
  let t;
  t = this.viewModel;
  i = t.baseStyle;
  let r;
  for (const r of t.chunks) {
    let t#1;
    t#1 = this.getTagStyle(r.key);
    if (!(r.text)) goto L_544;
    e.beginRender(n, undefined);
    e.setAttributeString("value", r.text);
    if (!((t#1 == null))) goto L_1a8;
    t#1;
    goto L_1c9;
    e.setAttributeString("accessibilityId", undefined.accessibilityId);
    if (!((t#1 == null))) goto L_201;
    t#1;
    goto L_222;
    if (!((undefined.font == null))) goto L_253;
    undefined.font;
    if (!((i == null))) goto L_232;
    i;
    goto L_253;
    e.setAttributeString("font", undefined.font);
    if (!((t#1 == null))) goto L_28b;
    t#1;
    goto L_2ac;
    if (!((undefined.color == null))) goto L_2dd;
    undefined.color;
    if (!((i == null))) goto L_2bc;
    i;
    goto L_2dd;
    e.setAttributeString("color", undefined.color);
    if (!((t#1 == null))) goto L_315;
    t#1;
    goto L_336;
    if (!((undefined.textDecoration == null))) goto L_367;
    undefined.textDecoration;
    if (!((i == null))) goto L_346;
    i;
    goto L_367;
    e.setAttributeString("textDecoration", undefined.textDecoration);
    if (!((t#1 == null))) goto L_39f;
    t#1;
    goto L_3c0;
    if (!((undefined.onTap == null))) goto L_3f1;
    undefined.onTap;
    if (!((i == null))) goto L_3d0;
    i;
    goto L_3f1;
    e.setAttributeFunction("onTap", undefined.onTap);
    e.setAttributeString("textAlign", this.getTextAlign());
    e.setAttributeNumber("numberOfLines", this.numberOfLines());
    if (!((t#1 == null))) goto L_4cf;
    t#1;
    goto L_4f0;
    if (!((undefined.letterSpacing == null))) goto L_519;
    undefined.letterSpacing;
    e.setAttributeNumber("letterSpacing", i.letterSpacing);
    e.endRender();
  }
  return;
}

// fn <atom:0>  args=0 vars=6 closure=3 cpool=0 bc=1404B file=widgets/src/components/text/TextWithTags
// locals: t, i, e, t#1, n, this
// closure: s, e, r
function {
  this = this;
  let n;
  let i;
  let t;
  t = this.viewModel;
  i = new s.AttributedTextBuilder();
  let e;
  for (const e of t.chunks) {
    let t#1;
    t#1 = this.getTagStyle(e.key);
    if (!(t#1)) goto L_1cd;
    goto L_218;
    // [栈深重同步 4 -> 3]
    i.appendText(e.text);
  }
  n = t.baseStyle;
  e.beginRender(r, undefined);
  e.setAttribute("value", i.build());
  e.setAttributeString("color", n.color);
  e.setAttributeString("textDecoration", n.textDecoration);
  e.setAttributeString("font", n.font);
  e.setAttributeString("accessibilityId", n.accessibilityId);
  e.setAttributeFunction("onTap", n.onTap);
  e.setAttributeString("textAlign", this.getTextAlign());
  e.setAttributeNumber("numberOfLines", this.numberOfLines());
  e.setAttributeNumber("letterSpacing", n.letterSpacing);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=181B file=widgets/src/components/text/TextWithTags
// args: e
// locals: i, this
// closure: t
function {
  this = this;
  if (!(e)) goto L_b4;
  let i;
  i = this.viewModel.tagsByKey[e];
  if ((i)) goto L_af;
  if (!(t.isLoggingEnabled)) goto L_af;
  console.error("Xml string's tag was not found in the tagsByKey mapping", e);
  return i;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=88B file=widgets/src/components/text/TextWithTags
// locals: t, this
// closure: u
function {
  this = this;
  let t;
  t = this.viewModel.alignment;
  if (!(t)) goto L_56;
  return u[t];
  return undefined;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=141B file=widgets/src/components/text/TextWithTags
// locals: this
function {
  this = this;
  if (!(this.viewModel.numberOfLines)) goto L_8b;
  return this.viewModel.numberOfLines;
  return 0;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/text/TextWithTags
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
  return this;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=10 bc=809B file=widgets/src/components/text/TextWithTags
// args: require, module, exports
// locals: t, e, i, n, r, o, s, l, TextWithTags, <class_fields_init>, TextWithTags#1, a, u
function {
  let u;
  let a;
  let TextWithTags#1;
  let s;
  let o;
  let r;
  let n;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextWithTagsAlignment = undefined;
  exports.TextWithTags = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeNodePrototype("layout", ["flexDirection", "row", "flexWrap", "wrap"], "dnft1HVVDc7joeFZ");
  n = e.makeNodePrototype("label", undefined, "o1ZYsBBJiyOYWLaV");
  r = e.makeNodePrototype("label", undefined, "iVQgc5Er1l5ZIPsk");
  o = require("valdi_core/src/Component");
  s = require("valdi_core/src/utils/AttributedTextBuilder");
  if ((l)) goto L_199;
  l = {};
  exports.TextWithTagsAlignment = {};
  !function <atom:0>({});
  let TextWithTags;
  let <class_fields_init>;
  class TextWithTags extends o.Component { ... }
  <proto:TextWithTags>.onRender = function <atom:0>;
  <proto:TextWithTags>.needsMultipleLabels = function <atom:0>;
  <proto:TextWithTags>.onRenderRouting = function <atom:0>;
  <proto:TextWithTags>.onRenderTextUsingMultipleLabels = function <atom:0>;
  <proto:TextWithTags>.onRenderTextUsingAttributedText = function <atom:0>;
  <proto:TextWithTags>.getTagStyle = function <atom:0>;
  <proto:TextWithTags>.getTextAlign = function <atom:0>;
  <proto:TextWithTags>.numberOfLines = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextWithTags>;
  TextWithTags = function <atom:0>;
  // close_loc <class_fields_init>
  TextWithTags#1 = function <atom:0>;
  exports.TextWithTags = TextWithTags#1;
  {}[l.Left] = "flex-start";
  "flex-start";
  {}[l.Center] = "center";
  "center";
  {}[l.Right] = "flex-end";
  "flex-end";
  a = {};
  {}[l.Left] = "left";
  "left";
  {}[l.Center] = "center";
  "center";
  {}[l.Right] = "right";
  "right";
  u = {};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/text/TextWithTags
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
