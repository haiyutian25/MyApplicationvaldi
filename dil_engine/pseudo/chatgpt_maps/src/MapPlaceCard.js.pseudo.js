// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=64B file=chatgpt_maps/src/MapPlaceCard
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
  this.notes = [];
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=560B file=chatgpt_maps/src/MapPlaceCard
// args: e
// locals: t, this
// closure: P
function {
  this = this;
  let t;
  t = this.viewModel;
  if (((undefined === e))) goto L_c4;
  if (((e.notes !== t.notes))) goto L_c4;
  if (!((e.currentLocation !== t.currentLocation))) goto L_140;
  this.notes = P.parseMapPlaceCardNotes(t.notes, t.currentLocation);
  P.parseMapPlaceCardNotes(t.notes, t.currentLocation);
  this.presentation = P.presentMapPlaceCard(t, this.notes);
  if (!((this.context == null))) goto L_1bf;
  this.context;
  goto L_22f;
  if (!((undefined.onAccessibilityLabelChanged == null))) goto L_1e9;
  undefined.onAccessibilityLabelChanged;
  undefined;
  goto L_22f;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=241B file=chatgpt_maps/src/MapPlaceCard
// closure: e, o, C, this
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", C.card);
  this.renderHeader();
  this.renderNotesSection();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=419B file=chatgpt_maps/src/MapPlaceCard
// locals: this
// closure: e, o, C, c, t
function {
  this = this;
  e.beginComponent(c.OAITheme, t, undefined, undefined);
  if (!(this.viewModel.isDarkMode)) goto L_108;
  goto L_14d;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("mode", c.OAIThemeMode.Light);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=890B file=chatgpt_maps/src/MapPlaceCard
// locals: t, this
// closure: e, i, C, M, r
function {
  this = this;
  let t;
  t = this.viewModel;
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", C.header);
  e.beginComponent(M.MapPlaceCardImage, r, undefined, undefined);
  if (!(t.currentLocation)) goto L_14a;
  goto L_16e;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("urls", t.imageURLs);
  e.setViewModelProperty("currentLocation", t.currentLocation);
  e.setViewModelProperty("size", t.imageSize);
  if (!((this.context == null))) goto L_267;
  this.context;
  goto L_288;
  e.setViewModelProperty("onLoaded", undefined.onImageLoaded);
  if (!((this.context == null))) goto L_2df;
  this.context;
  goto L_300;
  e.setViewModelProperty("onFailed", undefined.onImageFailed);
  e.endComponent();
  this.renderPlaceDetails();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=7 cpool=0 bc=1280B file=chatgpt_maps/src/MapPlaceCard
// locals: t, this
// closure: e, n, C, h, a, m, d
function {
  this = this;
  let t;
  t = this.presentation;
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", C.copy);
  if (((undefined === t.routeContext))) goto L_27f;
  e.beginComponent(h.Text, a, undefined, undefined);
  e.setViewModelProperty("value", t.routeContext);
  e.setViewModelProperty("typography", m.DesignTypography.CompactSubheadline);
  e.setViewModelProperty("tone", h.TextTone.Secondary);
  e.endComponent();
  e.beginComponent(h.Text, d, undefined, undefined);
  e.setViewModelProperty("value", t.title);
  e.setViewModelProperty("typography", m.DesignTypography.CompactSubheadlineMedium);
  e.endComponent();
  this.renderMetadata(t.place.details, t.place.detailsLineLimit);
  this.renderMetadata(t.place.secondaryDetails, 1);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=500B file=chatgpt_maps/src/MapPlaceCard
// locals: this
// closure: e, y, s
function {
  this = this;
  if (!((this.notes.length > 0))) goto L_51;
  goto L_1f3;
  // [栈深重同步 1 -> 0]
  if (!(this.presentation.showsLoadingNotes)) goto L_1f3;
  e.beginComponent(y.MapPlaceCardLoadingNotes, s, undefined, undefined);
  e.setViewModelProperty("lineLimit", this.viewModel.notesLineLimit);
  e.setViewModelProperty("reduceMotion", this.viewModel.reduceMotion);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=7 cpool=0 bc=993B file=chatgpt_maps/src/MapPlaceCard
// args: t, o
// locals: i, r, e
// closure: m, A, v, e, l, C, u
function {
  let r;
  let i;
  if (!((0 === t.length))) goto L_d;
  return;
  i = m.resolveOAITypography(m.DesignTypography.CompactSubheadline, A);
  r = new v.AttributedTextBuilder();
  let e;
  for (const e of t) {
    r.append(e.text, {color: e.color, font: i.font});
  }
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", C.metadata);
  e.setAttributeString("color", u.OAIColor.TextPrimary);
  e.setAttributeString("font", i.font);
  e.setAttributeNumber("lineHeight", i.lineHeight);
  e.setAttributeNumber("lineHeightMultiple", i.lineHeightMultiple);
  e.setAttributeNumber("numberOfLines", o);
  e.setAttribute("value", r.build());
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=6 closure=7 cpool=0 bc=1488B file=chatgpt_maps/src/MapPlaceCard
// locals: t, o, i, e, r, this
// closure: m, A, v, e, p, C, u
function {
  this = this;
  let i;
  let o;
  let t;
  t = m.resolveOAITypography(m.DesignTypography.Subheadline, A);
  o = m.resolveOAITypography(m.DesignTypography.SubheadlineMedium, A);
  i = new v.AttributedTextBuilder();
  let e;
  for (const e of this.notes) {
    let r;
    if (!(e.bold)) goto L_18b;
    goto L_1af;
    // [栈深重同步 4 -> 3]
    r = t.font;
    if (!(e.italic)) goto L_26f;
    r = r.replace("system-medium", "system-medium-italic");
    r.replace("system-medium", "system-medium-italic");
    if ((e.bold)) goto L_26f;
    r = r.replace("system", "system-italic");
    r.replace("system", "system-italic");
    if (!(e.link)) goto L_2ee;
    goto L_2ef;
    // [栈深重同步 8 -> 7]
    i.append(e.text, {font: r, textDecoration: undefined});
  }
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", C.metadata);
  e.setAttributeString("color", u.OAIColor.TextSecondary);
  e.setAttributeString("font", t.font);
  e.setAttributeNumber("lineHeight", t.lineHeight);
  e.setAttributeNumber("lineHeightMultiple", t.lineHeightMultiple);
  e.setAttributeNumber("numberOfLines", this.viewModel.notesLineLimit);
  e.setAttribute("value", i.build());
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=29 closure=0 cpool=8 bc=1397B file=chatgpt_maps/src/MapPlaceCard
// args: require, module, exports
// locals: e, t, o, i, r, n, a, d, s, l, p, c, u, m, y, h, b, g, v, M, P, MapPlaceCard, <class_fields_init>, MapPlaceCard#1, A, C
function {
  let C;
  let A;
  let MapPlaceCard#1;
  let P;
  let M;
  let v;
  let g;
  let b;
  let h;
  let y;
  let m;
  let u;
  let c;
  let p;
  let l;
  let s;
  let d;
  let a;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapPlaceCard = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "HbEEhBMA2zhOfDwN");
  o = e.makeNodePrototype("layout", undefined, "PR6HINgGTXPBGalv");
  i = e.makeNodePrototype("layout", undefined, "UoSatmGXAckuka8z");
  r = e.makeComponentPrototype(undefined, "650O9Sr0iB35q3ZK");
  n = e.makeNodePrototype("layout", undefined, "XTG9KJ8fA8WcKakV");
  a = e.makeComponentPrototype(["numberOfLines", 0], "opI9BmdfgdIWkQWP");
  d = e.makeComponentPrototype(["numberOfLines", 1], "vbKhwbmbcEz0LQuu");
  s = e.makeComponentPrototype(undefined, "hHzoo3bltcVceU5n");
  l = e.makeNodePrototype("label", undefined, "oocpvbl52uwOOb3P");
  p = e.makeNodePrototype("label", undefined, "qlGfiNr-qKlKBoad");
  c = require("oai_core/src/OAITheme");
  u = require("oai_core/src/OAITokens");
  m = require("oai_core/src/OAITypography");
  y = require("./MapPlaceCardLoadingNotes");
  h = require("oai_ui/src/components/Text");
  b = require("valdi_core/src/Component");
  g = require("valdi_core/src/Style");
  v = require("valdi_core/src/utils/AttributedTextBuilder");
  M = require("./MapPlaceCardImage");
  P = require("./MapPlaceCardPresentation");
  let MapPlaceCard;
  let <class_fields_init>;
  class MapPlaceCard extends b.Component { ... }
  <proto:MapPlaceCard>.onViewModelUpdate = function <atom:0>;
  <proto:MapPlaceCard>.onRender = function <atom:0>;
  <proto:MapPlaceCard>.renderHeader = function <atom:0>;
  <proto:MapPlaceCard>.renderPlaceDetails = function <atom:0>;
  <proto:MapPlaceCard>.renderNotesSection = function <atom:0>;
  <proto:MapPlaceCard>.renderMetadata = function <atom:0>;
  <proto:MapPlaceCard>.renderFormattedNotes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MapPlaceCard>;
  MapPlaceCard = function <atom:0>;
  // close_loc <class_fields_init>
  MapPlaceCard#1 = function <atom:0>;
  exports.MapPlaceCard = MapPlaceCard#1;
  A = {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined};
  C = {card: new g.Style({padding: u.OAISpacing.OneAndHalf, gap: u.OAISpacing.OneAndHalf, width: "100%"}), header: new g.Style({flexDirection: "row", alignItems: "center", gap: u.OAISpacing.OneAndHalf}), copy: new g.Style({flexGrow: 1, flexShrink: 1}), metadata: new g.Style({flexShrink: 1, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_maps/src/MapPlaceCard
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
