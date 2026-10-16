// fn <atom:0>  args=0 vars=4 closure=7 cpool=0 bc=1691B file=widgets/src/components/section/SectionHeader
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, b, p, S, v, m, h
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
  this.theme = b.Theme.from(this.context.themeType);
  this.style = {container: new p.Style({padding: "0 ".concat(S.Subscreen.GUTTER_SIZE), marginBottom: v.Spacing.SM, marginLeft: 2}), row: new p.Style({flexDirection: "row", alignItems: "center"}), labels: new p.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1}), title: new p.Style({flexDirection: "row"}), titleLabel: new p.Style({font: m.TextStyleFont.BODY_EMPHASIS, color: this.theme.applyTo(h.SemanticColor.Text.PRIMARY), flexShrink: 1, accessibilityId: "section-title", accessibilityCategory: "header"}), titleSlot: new p.Style({flexGrow: 1, flexShrink: 1, flexDirection: "row"}), subtitle: new p.Style({font: m.TextStyleFont.CAPTION, color: this.theme.applyTo(h.SemanticColor.Text.TERTIARY), marginTop: 2, numberOfLines: 1, accessibilityId: "section-subtitle"}), description: new p.Style({font: m.TextStyleFont.CAPTION, color: this.theme.applyTo(h.SemanticColor.Text.TERTIARY), marginTop: 2, width: "100%", numberOfLines: 3, accessibilityId: "section-description"})};
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=1120B file=widgets/src/components/section/SectionHeader
// locals: r, this
// closure: e, t, o, i, n
function {
  this = this;
  let r;
  r = this.viewModel;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", this.style.container);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", this.style.row);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", this.style.labels);
  this.onRenderTitle(r.title, r.titleColor);
  this.onRenderSubtitle(r.subtitle);
  e.endRender();
  this.onRenderActionButton();
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", this.style.row);
  this.onRenderDescription(r.description);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=0 bc=835B file=widgets/src/components/section/SectionHeader
// args: t, o
// locals: this
// closure: e, r, l, s
function {
  this = this;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", this.style.title);
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", this.style.titleLabel);
  e.setAttributeString("value", t);
  e.setAttributeString("color", o);
  e.setAttributeNumber("numberOfLines", this.viewModel.titleMaxLines);
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", this.style.titleSlot);
  e.renderUnnamedSlot(this);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=297B file=widgets/src/components/section/SectionHeader
// args: t
// locals: this
// closure: e, d
function {
  this = this;
  if (!(t)) goto L_fb;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", this.style.subtitle);
  e.setAttributeString("value", t);
  goto L_128;
  // [栈深重同步 1 -> 0]
  e.renderNamedSlot("subtitle", this);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=297B file=widgets/src/components/section/SectionHeader
// args: t
// locals: this
// closure: e, y
function {
  this = this;
  if (!(t)) goto L_fb;
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", this.style.description);
  e.setAttributeString("value", t);
  goto L_128;
  // [栈深重同步 1 -> 0]
  e.renderNamedSlot("description", this);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=1003B file=widgets/src/components/section/SectionHeader
// locals: t, o, this
// closure: e, R, a, c
function {
  this = this;
  let o;
  let t;
  if (((undefined === undefined))) goto L_57;
  t = <to_object>(undefined).actionButton;
  o = <to_object>(undefined).actionButtonRenderFn;
  <to_object>(undefined);
  goto L_7c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_3df;
  if (!(("pill_button" === t.type))) goto L_272;
  e.beginComponent(R.SectionHeaderActionButton, a, undefined, undefined);
  e.setViewModelProperty("label", t.label);
  e.setViewModelProperty("onTap", t.onTap);
  e.setViewModelProperty("type", t.type);
  e.setViewModelProperty("icon", t.icon);
  goto L_3ea;
  // [栈深重同步 1 -> 0]
  e.beginComponent(R.SectionHeaderActionButton, c, undefined, undefined);
  e.setViewModelProperty("label", t.label);
  e.setViewModelProperty("onTap", t.onTap);
  e.setViewModelProperty("type", t.type);
  goto L_3ea;
  // [栈深重同步 1 -> 0]
  if (!(o)) goto L_3ea;
  o();
  return;
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=6 bc=917B file=widgets/src/components/section/SectionHeader
// args: require, module, exports
// locals: e, t, o, i, n, r, l, s, d, y, a, c, u, p, b, S, m, h, v, R, SectionHeader, <class_fields_init>, SectionHeader#1
function {
  let SectionHeader#1;
  let R;
  let v;
  let h;
  let m;
  let S;
  let b;
  let p;
  let u;
  let c;
  let a;
  let y;
  let d;
  let s;
  let l;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SectionHeader = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "mvJIt3ah9On90kqX");
  o = e.makeNodePrototype("layout", undefined, "TU3fsn18fGVhhQ2-");
  i = e.makeNodePrototype("layout", undefined, "Eyz7xJfQ6LlKGfIO");
  n = e.makeNodePrototype("layout", undefined, "hG9Xfgp0qkLwW2Mc");
  r = e.makeNodePrototype("layout", undefined, "rOhBAb7Z4aZwhbeC");
  l = e.makeNodePrototype("label", undefined, "dH7rmtd1R9CqwiMX");
  s = e.makeNodePrototype("layout", undefined, "0zStFrhjSr_5sS_5");
  d = e.makeNodePrototype("label", undefined, "EdQMQj5n9T5ii4Ro");
  y = e.makeNodePrototype("label", undefined, "391fu9uNTjIIT9j-");
  a = e.makeComponentPrototype(undefined, "bLlvI9veR81ZurwN");
  c = e.makeComponentPrototype(undefined, "5lgo59u8jyZc9t5x");
  u = require("valdi_core/src/Component");
  p = require("valdi_core/src/Style");
  b = require("widgets/src/Theme");
  S = require("widgets/src/components/subscreen/Subscreen");
  m = require("widgets/src/styles/TextStyleFont");
  h = require("widgets/src/styles/semanticColors");
  v = require("widgets/src/styles/spacing");
  R = require("./header/SectionHeaderActionButton");
  let SectionHeader;
  let <class_fields_init>;
  class SectionHeader extends u.Component { ... }
  <proto:SectionHeader>.onRender = function <atom:0>;
  <proto:SectionHeader>.onRenderTitle = function <atom:0>;
  <proto:SectionHeader>.onRenderSubtitle = function <atom:0>;
  <proto:SectionHeader>.onRenderDescription = function <atom:0>;
  <proto:SectionHeader>.onRenderActionButton = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SectionHeader>;
  SectionHeader = function <atom:0>;
  // close_loc <class_fields_init>
  SectionHeader#1 = function <atom:0>;
  exports.SectionHeader = SectionHeader#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/SectionHeader
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
