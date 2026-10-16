// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=148B file=chatgpt_maps/src/MapPlaceCardImage
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
  this.state = {candidateIndex: 0};
  this.loadGeneration = 0;
  this.loadStartedAt = Date.now();
  this.didFinishLoading = false;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=275B file=chatgpt_maps/src/MapPlaceCardImage
// args: e
// locals: this
// closure: c
function {
  this = this;
  if (!((undefined !== e))) goto L_112;
  if (!(!c(e.urls, this.viewModel.urls))) goto L_112;
  this.loadGeneration = (this.loadGeneration ++);
  this.loadStartedAt = Date.now();
  this.didFinishLoading = false;
  this.setState({candidateIndex: 0});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=540B file=chatgpt_maps/src/MapPlaceCardImage
// closure: e, r, i, this, d, n, u
function {
  e.beginComponent(r.Icon, i, undefined, undefined);
  if (!(this.viewModel.currentLocation)) goto L_106;
  goto L_14b;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("src", d.default.cameraOff);
  e.setViewModelProperty("color", n.OAIColor.IconTertiary);
  e.setViewModelProperty("size", (0.4 * u));
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=47B file=chatgpt_maps/src/MapPlaceCardImage
// args: e
// closure: this, c, s, l
function {
  return this.handleCandidateLoad(c, s, l, e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=359B file=chatgpt_maps/src/MapPlaceCardImage
// closure: this, c, s, l, e, a, o, u
function {
  e.beginComponent(a.Image, o, "".concat(c, ":", s), undefined);
  e.setViewModelProperty("src", l);
  e.setViewModelProperty("width", u);
  e.setViewModelProperty("height", u);
  e.setViewModelProperty("onAssetLoad", function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=9 cpool=2 bc=506B file=chatgpt_maps/src/MapPlaceCardImage
// locals: s, l, c, u, this
// closure: e, r, i, d, n, a, o, t, h
function {
  this = this;
  let u;
  let c;
  let l;
  let s;
  s = this.state.candidateIndex;
  l = this.viewModel.urls[s];
  c = this.loadGeneration;
  u = this.viewModel.size;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", h);
  e.setAttributeNumber("width", u);
  e.setAttributeNumber("height", u);
  if (!((undefined === l))) goto L_1ce;
  goto L_1d1;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=0 bc=661B file=chatgpt_maps/src/MapPlaceCardImage
// args: e, t, i, o
// locals: d, n, this
function {
  this = this;
  let n;
  let d;
  if (!(!this.isDestroyed())) goto L_c9;
  if (!((e === this.loadGeneration))) goto L_c9;
  if (!((t === this.state.candidateIndex))) goto L_c9;
  if (!(!!this.didFinishLoading)) goto L_cd;
  return;
  if (!(o)) goto L_182;
  this.didFinishLoading = true;
  if (!((this.viewModel.onLoaded == null))) goto L_12b;
  this.viewModel.onLoaded;
  this.viewModel;
  goto L_180;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, i, t, ((Date.now() - this.loadStartedAt) / 1000));
  return;
  d = (t + 1);
  n = (d === this.viewModel.urls.length);
  this.loadStartedAt = Date.now();
  this.setState({candidateIndex: d});
  if (!(n)) goto L_294;
  this.didFinishLoading = true;
  if (!((this.viewModel.onFailed == null))) goto L_290;
  this.viewModel.onFailed;
  this.viewModel;
  goto L_294;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_maps/src/MapPlaceCardImage
// args: e, i
// closure: t
function {
  return (e === t[i]);
}

// fn c  args=2 vars=2 closure=0 cpool=1 bc=49B file=chatgpt_maps/src/MapPlaceCardImage
// args: e, t
function {
  if (!((e.length === t.length))) goto L_30;
  return e.every(function <atom:0>);
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=5 bc=613B file=chatgpt_maps/src/MapPlaceCardImage
// args: require, module, exports
// locals: e, t, i, o, d, n, r, a, s, l, MapPlaceCardImage, <class_fields_init>, MapPlaceCardImage#1, c, h
function {
  c = function c;
  let h;
  let MapPlaceCardImage#1;
  let l;
  let s;
  let a;
  let r;
  let n;
  let d;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapPlaceCardImage = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "E9mfPh9WZdXzDPoY");
  i = e.makeComponentPrototype(undefined, "NLGsMDIRRslsR012");
  o = e.makeComponentPrototype(["radius", 16], "2xu7wT4oLNYeIn0D");
  d = require("dil_icon_assets/res");
  n = require("oai_core/src/OAITokens");
  r = require("oai_ui/src/components/Icon");
  a = require("oai_ui/src/components/Image");
  s = require("valdi_core/src/Component");
  l = require("valdi_core/src/Style");
  let MapPlaceCardImage;
  let <class_fields_init>;
  class MapPlaceCardImage extends s.StatefulComponent { ... }
  <proto:MapPlaceCardImage>.onViewModelUpdate = function <atom:0>;
  <proto:MapPlaceCardImage>.onRender = function <atom:0>;
  <proto:MapPlaceCardImage>.handleCandidateLoad = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MapPlaceCardImage>;
  MapPlaceCardImage = function <atom:0>;
  // close_loc <class_fields_init>
  MapPlaceCardImage#1 = function <atom:0>;
  exports.MapPlaceCardImage = MapPlaceCardImage#1;
  h = new l.Style({accessibilityNavigation: "ignored", backgroundColor: n.OAIColor.BgTertiary, borderRadius: 16, flexShrink: 0, alignItems: "center", justifyContent: "center"});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_maps/src/MapPlaceCardImage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
