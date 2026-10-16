// fn <atom:0>  args=2 vars=4 closure=6 cpool=0 bc=402B file=personalization_settings_ui/src/PersonalizationPetThumbnail
// args: t, o
// locals: i, s
// closure: m, h, g, p, e, this
function {
  let s;
  let i;
  i = Math.round(((((o / t) * m) * h) / g));
  s = (((t / (m * h)) * i) * g);
  if (((t <= 0))) goto L_c4;
  if ((!Number.isFinite(i))) goto L_c4;
  if (((i < p))) goto L_c4;
  if (!((Math.abs((o - s)) > 1))) goto L_15a;
  if (!(e.isLoggingEnabled)) goto L_121;
  console.warn("Pet spritesheet has unsupported dimensions", t, o);
  this.setState({loaded: false, failed: true});
  return;
  this.setState({rows: i, loaded: true});
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=151B file=personalization_settings_ui/src/PersonalizationPetThumbnail
// args: t, o
// closure: e, this
function {
  if ((t)) goto L_96;
  if (!(e.isLoggingEnabled)) goto L_5f;
  console.warn("Could not load pet spritesheet", o);
  this.setState({loaded: false, failed: true});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=2 bc=112B file=personalization_settings_ui/src/PersonalizationPetThumbnail
// locals: this, this.active_func, new.target, arguments
// closure: m, h, g, p, e, <class_fields_init>
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
  this.state = {rows: p, loaded: false, failed: false};
  this.onImageDecoded = function <atom:0>;
  this.onAssetLoad = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=881B file=personalization_settings_ui/src/PersonalizationPetThumbnail
// closure: t, s, v, n, this, r, b
function {
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", v.frame);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", v.image);
  t.setAttributeString("src", this.viewModel.src);
  t.setAttributeString("height", r.remFromPoints((b * this.state.rows)));
  if (!(this.state.loaded)) goto L_27a;
  goto L_27b;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", 0);
  t.setAttributeFunction("onImageDecoded", this.onImageDecoded);
  t.setAttributeFunction("onAssetLoad", this.onAssetLoad);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=1 bc=709B file=personalization_settings_ui/src/PersonalizationPetThumbnail
// locals: this
// closure: t, s, v, n, r, b, o, l, i, d
function {
  this = this;
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", v.container);
  if ((this.state.loaded)) goto L_208;
  t.beginComponent(l.Icon, i, undefined, undefined);
  t.setViewModelProperty("src", d.default.openaiLogoBold);
  t.setViewModelProperty("size", r.remFromPoints(b));
  t.endComponent();
  if (((undefined === this.viewModel.src))) goto L_29c;
  if ((this.state.failed)) goto L_29c;
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=2 bc=1134B file=personalization_settings_ui/src/PersonalizationPetThumbnail
// args: require, module, exports
// locals: e, t, o, i, s, n, r, a, d, l, c, u, PersonalizationPetThumbnail, <class_fields_init>, PersonalizationPetThumbnail#1, m, p, h, g, b, P, v
function {
  let v;
  let P;
  let b;
  let g;
  let h;
  let p;
  let m;
  let PersonalizationPetThumbnail#1;
  let u;
  let c;
  let l;
  let d;
  let a;
  let r;
  let n;
  let s;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PersonalizationPetThumbnail = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeNodePrototype("layout", undefined, "zQ6bT0q2K5PERqc1");
  i = t.makeComponentPrototype(undefined, "RgNSFjXj9y7mobAh");
  s = t.makeNodePrototype("view", undefined, "clE-7ZhVx3E4uxiY");
  n = t.makeNodePrototype("image", undefined, "GdGBD9cVs2kzNAOu");
  r = require("oai_core/src/OAIAttributes");
  a = require("oai_ui/src/components/settings/SettingsTheme");
  d = require("dil_icon_assets/res");
  l = require("oai_ui/src/components/Icon");
  c = require("valdi_core/src/Component");
  u = require("valdi_core/src/Style");
  let PersonalizationPetThumbnail;
  let <class_fields_init>;
  class PersonalizationPetThumbnail extends c.StatefulComponent { ... }
  <proto:PersonalizationPetThumbnail>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PersonalizationPetThumbnail>;
  PersonalizationPetThumbnail = function <atom:0>;
  // close_loc <class_fields_init>
  PersonalizationPetThumbnail#1 = function <atom:0>;
  exports.PersonalizationPetThumbnail = PersonalizationPetThumbnail#1;
  m = 8;
  p = 9;
  h = 192;
  g = 208;
  b = a.SettingsAppearance.preview.companionSize;
  P = ((b * h) / g);
  v = {container: new u.Style({width: r.remFromPoints(b), height: r.remFromPoints(b), alignItems: "center", justifyContent: "center"}), frame: new u.Style({width: r.remFromPoints(P), height: r.remFromPoints(b), position: "absolute", slowClipping: true}), image: new u.Style({accessibilityId: "personalization-settings-pet-artwork", width: r.remFromPoints((P * m)), position: "absolute", left: 0, top: 0, objectFit: "fill"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=personalization_settings_ui/src/PersonalizationPetThumbnail
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
