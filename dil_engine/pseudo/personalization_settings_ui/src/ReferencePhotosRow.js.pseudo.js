// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=357B file=personalization_settings_ui/src/ReferencePhotosRow
// closure: e, r, b, this, o
function {
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", b.thumbnails);
  this.renderThumbnail(o.faceThumbnailUrl, false);
  this.renderThumbnail(o.fullBodyThumbnailUrl, (undefined !== o.faceThumbnailUrl));
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=11 cpool=1 bc=1100B file=personalization_settings_ui/src/ReferencePhotosRow
// locals: o
// closure: e, r, b, this, t, p, i, u, n, g, l
function {
  let o;
  o = this.viewModel.photos;
  if (!((undefined !== o))) goto L_44b;
  e.beginRender(t, undefined);
  if (!(o.loading)) goto L_122;
  e.beginComponent(p.ActivityIndicator, i, undefined, undefined);
  goto L_423;
  // [栈深重同步 1 -> 0]
  if (!((undefined === o.faceThumbnailUrl))) goto L_420;
  if (!((undefined === o.fullBodyThumbnailUrl))) goto L_420;
  e.beginComponent(u.Text, n, undefined, undefined);
  e.setViewModelProperty("value", g.default.personalizationSettingsAddPhoto());
  e.setViewModelProperty("typography", l.SettingsAppearance.preview.emptyTypography);
  e.setViewModelProperty("color", l.SettingsAppearance.preview.emptyColor);
  e.setViewModelProperty("opacity", l.SettingsAppearance.preview.emptyOpacity);
  goto L_423;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=11 cpool=1 bc=63B file=personalization_settings_ui/src/ReferencePhotosRow
// locals: this, this.active_func, new.target, arguments
// closure: e, r, b, t, p, i, u, n, g, l, <class_fields_init>
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
  this.renderPreviews = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=7 cpool=0 bc=1160B file=personalization_settings_ui/src/ReferencePhotosRow
// locals: t, this
// closure: e, v, o, h, g, m, l
function {
  this = this;
  let t;
  t = this.viewModel.photos;
  e.beginComponent(v.SettingsActionRow, o, undefined, undefined);
  e.setViewModelProperty("appearance", v.SettingsActionRowAppearance.NavigationLink);
  e.setViewModelProperty("contentLayout", v.SettingsActionRowContentLayout.Adaptive);
  if (!((undefined === t))) goto L_1b1;
  goto L_1b6;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("accessibilityValue", h(t));
  if (!((t == null))) goto L_1ee;
  t;
  goto L_20f;
  e.setViewModelProperty("disabled", undefined.loading);
  e.setViewModelProperty("label", g.default.personalizationSettingsReferencePhotos());
  e.setViewModelProperty("onPress", this.viewModel.onPress);
  e.setViewModelProperty("position", m.SettingsRowPosition.Only);
  if (!((undefined === t))) goto L_39d;
  goto L_3bf;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("trailingContent", this.renderPreviews);
  if (!((undefined === t))) goto L_3f6;
  goto L_45c;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("verticalInset", l.SettingsAppearance.preview.verticalInset);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=6 cpool=0 bc=510B file=personalization_settings_ui/src/ReferencePhotosRow
// args: o, t
// closure: e, s, l, c, a, P
function {
  if (!((undefined !== o))) goto L_1fd;
  e.beginRender(s, undefined);
  if (!(t)) goto L_ca;
  goto L_cb;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("marginLeft", 0);
  e.beginComponent(c.Image, a, undefined, undefined);
  e.setViewModelProperty("src", o);
  e.setViewModelProperty("width", P);
  e.setViewModelProperty("height", P);
  e.endComponent();
  e.endRender();
  return;
}

// fn h  args=1 vars=1 closure=1 cpool=0 bc=444B file=personalization_settings_ui/src/ReferencePhotosRow
// args: e
// closure: g
function {
  if (!((undefined !== e.faceThumbnailUrl))) goto L_95;
  if (!((undefined !== e.fullBodyThumbnailUrl))) goto L_95;
  return g.default.personalizationSettingsBothPhotos();
  if (!((undefined !== e.faceThumbnailUrl))) goto L_104;
  return g.default.personalizationSettingsFacePhoto();
  if (!((undefined !== e.fullBodyThumbnailUrl))) goto L_173;
  return g.default.personalizationSettingsFullBodyPhoto();
  return g.default.personalizationSettingsAddPhoto();
}

// fn <atom:0>  args=3 vars=27 closure=0 cpool=4 bc=921B file=personalization_settings_ui/src/ReferencePhotosRow
// args: require, module, exports
// locals: e, o, t, i, n, r, s, a, d, l, p, c, u, v, m, y, w, g, ReferencePhotosRow, <class_fields_init>, ReferencePhotosRow#1, h, P, b
function {
  h = function h;
  let b;
  let P;
  let ReferencePhotosRow#1;
  let g;
  let w;
  let y;
  let m;
  let v;
  let u;
  let c;
  let p;
  let l;
  let d;
  let a;
  let s;
  let r;
  let n;
  let i;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ReferencePhotosRow = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(["accessibilityId", "personalization-settings-reference-photos"], "sZZK-RQ1yMz7j9GP");
  t = e.makeNodePrototype("layout", undefined, "ke8p1dR8Xi5G7HOV");
  i = e.makeComponentPrototype(undefined, "bAJvO5O-eLvwlup_");
  n = e.makeComponentPrototype(undefined, "Kp4_te1ZhcwUjDXa");
  r = e.makeNodePrototype("layout", undefined, "wpNvWvm7AQfJvfbE");
  s = e.makeNodePrototype("layout", undefined, "JY3qF9JF99JMTRua");
  a = e.makeComponentPrototype(["radius", "50%"], "OtAZ3m4RmB6278YW");
  d = require("oai_core/src/OAIAttributes");
  l = require("oai_ui/src/components/settings/SettingsTheme");
  p = require("oai_ui/src/components/ActivityIndicator");
  c = require("oai_ui/src/components/Image");
  u = require("oai_ui/src/components/Text");
  v = require("oai_ui/src/components/settings/SettingsActionRow");
  m = require("oai_ui/src/components/settings/SettingsRow");
  y = require("valdi_core/src/Component");
  w = require("valdi_core/src/Style");
  g = require("./Strings");
  let ReferencePhotosRow;
  let <class_fields_init>;
  class ReferencePhotosRow extends y.Component { ... }
  <proto:ReferencePhotosRow>.onRender = function <atom:0>;
  <proto:ReferencePhotosRow>.renderThumbnail = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ReferencePhotosRow>;
  ReferencePhotosRow = function <atom:0>;
  // close_loc <class_fields_init>
  ReferencePhotosRow#1 = function <atom:0>;
  exports.ReferencePhotosRow = ReferencePhotosRow#1;
  P = d.remFromPoints(l.SettingsAppearance.preview.imageSize);
  b = {thumbnails: new w.Style({flexDirection: "row"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=personalization_settings_ui/src/ReferencePhotosRow
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
