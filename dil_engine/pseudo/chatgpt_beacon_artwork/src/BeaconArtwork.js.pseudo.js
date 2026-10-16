// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_beacon_artwork/src/BeaconArtwork
// args: t
function {
  t.Absent = 0;
  t[0] = "Absent";
  t.Loading = 1;
  t[1] = "Loading";
  t.Ready = 2;
  t[2] = "Ready";
  t.Failed = 3;
  t[3] = "Failed";
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=76B file=chatgpt_beacon_artwork/src/BeaconArtwork
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
  this.generation = 0;
  this.failed = false;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=667B file=chatgpt_beacon_artwork/src/BeaconArtwork
// closure: this, i, t, d
function {
  if (!(this.isCurrent(i))) goto L_29a;
  if (!(t.isLoggingEnabled)) goto L_85;
  console.warn("[BeaconArtwork] Artwork decode deadline exceeded");
  if (!((this.state == null))) goto L_d3;
  this.state;
  goto L_f4;
  if (!((undefined.animation === d.Loading))) goto L_13d;
  goto L_188;
  // [栈深重同步 4 -> 3]
  if (!((this.state == null))) goto L_167;
  this.state;
  goto L_188;
  if (!((this.state == null))) goto L_1b7;
  this.state;
  goto L_1d8;
  if (!((undefined.poster === d.Loading))) goto L_221;
  goto L_26c;
  // [栈深重同步 4 -> 3]
  if (!((this.state == null))) goto L_24b;
  this.state;
  goto L_26c;
  this.setState({animation: undefined.animation, poster: undefined.poster});
  this.finishLoad();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=3 bc=783B file=chatgpt_beacon_artwork/src/BeaconArtwork
// args: e
// locals: i, o, a, this
// closure: t, d, r
function {
  this = this;
  let a;
  let o;
  let i;
  if (!((e == null))) goto L_14;
  e;
  goto L_35;
  if (!((undefined.artworkUrl === this.viewModel.artworkUrl))) goto L_7c;
  return;
  this.clearDeadline();
  this.generation = (this.generation ++);
  i = (this.generation ++);
  this.failed = false;
  o = this.viewModel.artworkUrl;
  a = o.split(new RegExp("[?#]"), 1)[0].toLowerCase().endsWith(".png");
  if (!(a)) goto L_1a6;
  goto L_1a9;
  // [栈深重同步 2 -> 1]
  this.animationUrl = o;
  if (!(a)) goto L_1bd;
  goto L_1c4;
  // [栈深重同步 2 -> 1]
  this.posterUrl = r[o];
  if (!(this.animationUrl)) goto L_238;
  goto L_25a;
  // [栈深重同步 4 -> 3]
  if (!(this.posterUrl)) goto L_2a7;
  goto L_2c9;
  // [栈深重同步 4 -> 3]
  this.setState({animation: d.Absent, poster: d.Absent});
  if (!(this.posterUrl)) goto L_30e;
  this.deadline = setTimeout(function <atom:0>, 10000);
  setTimeout(function <atom:0>, 10000);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=84B file=chatgpt_beacon_artwork/src/BeaconArtwork
// locals: this
function {
  this = this;
  this.generation = (this.generation ++);
  this.clearDeadline();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=56B file=chatgpt_beacon_artwork/src/BeaconArtwork
// args: e
// closure: this, t
function {
  if ((e)) goto L_37;
  this.onFailed("poster", t, "load failed");
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=47B file=chatgpt_beacon_artwork/src/BeaconArtwork
// args: e, i
// closure: this, t
function {
  return this.onDecoded("poster", t, e, i);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=2 bc=559B file=chatgpt_beacon_artwork/src/BeaconArtwork
// closure: this, t, e, o, g, d, n
function {
  e.beginRender(o, "poster:".concat(t));
  e.setAttributeStyle("style", g);
  if (!((this.state == null))) goto L_da;
  this.state;
  goto L_fb;
  if (!((undefined.animation === d.Ready))) goto L_125;
  goto L_126;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 1);
  e.setAttributeString("objectFit", n);
  e.setAttributeString("src", this.posterUrl);
  e.setAttributeFunction("onAssetLoad", function <atom:0>);
  e.setAttributeFunction("onImageDecoded", function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=56B file=chatgpt_beacon_artwork/src/BeaconArtwork
// args: e
// closure: this, t
function {
  if ((e)) goto L_37;
  this.onFailed("animation", t, "load failed");
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=47B file=chatgpt_beacon_artwork/src/BeaconArtwork
// args: e, i
// closure: this, t
function {
  return this.onDecoded("animation", t, e, i);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=2 bc=821B file=chatgpt_beacon_artwork/src/BeaconArtwork
// closure: this, t, e, a, h, d, n
function {
  e.beginRender(a, this.animationUrl);
  e.setAttributeStyle("style", h);
  if (!(this.posterUrl)) goto L_13f;
  if (!((this.state == null))) goto L_f4;
  this.state;
  goto L_115;
  if (!((undefined.animation !== d.Ready))) goto L_13f;
  goto L_140;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 1);
  if (!(this.viewModel.isPlaying)) goto L_1b5;
  goto L_1b6;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("advanceRate", 0);
  if (!(this.viewModel.isPlaying)) goto L_22b;
  goto L_22c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("currentTime", 0);
  e.setAttributeString("objectFit", n);
  e.setAttributeString("src", this.animationUrl);
  e.setAttributeFunction("onAssetLoad", function <atom:0>);
  e.setAttributeFunction("onImageDecoded", function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=8 cpool=2 bc=612B file=chatgpt_beacon_artwork/src/BeaconArtwork
// locals: t, n, this
// closure: e, o, g, d, a, h, i, l
function {
  this = this;
  let n;
  let t;
  if (!(this.failed)) goto L_2d;
  return;
  t = this.generation;
  if (!(("cover" === this.viewModel.objectFit))) goto L_a2;
  goto L_a7;
  // [栈深重同步 1 -> 0]
  n = "contain";
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", l);
  if (!(this.posterUrl)) goto L_19f;
  if (!((this.state == null))) goto L_154;
  this.state;
  goto L_175;
  if (!((undefined.poster !== d.Failed))) goto L_19f;
  function <atom:0>();
  if (!(this.animationUrl)) goto L_23b;
  if (!((this.state == null))) goto L_1f0;
  this.state;
  goto L_211;
  if (!((undefined.animation !== d.Failed))) goto L_23b;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=120B file=chatgpt_beacon_artwork/src/BeaconArtwork
// args: t
// locals: this
function {
  this = this;
  if (!((t === this.generation))) goto L_77;
  if (!(!this.failed)) goto L_77;
  return !this.isDestroyed();
}

// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=601B file=chatgpt_beacon_artwork/src/BeaconArtwork
// args: t, e, i, o
// locals: this
// closure: d
function {
  this = this;
  if (!(this.isCurrent(e))) goto L_258;
  if (!((this.state == null))) goto L_59;
  this.state;
  goto L_5b;
  if (!((undefined[t] === d.Loading))) goto L_258;
  if (!(Number.isFinite(i))) goto L_22c;
  if (!((i > 0))) goto L_22c;
  if (!(Number.isFinite(o))) goto L_22c;
  if (!((o > 0))) goto L_22c;
  {}[t] = d.Ready;
  d.Ready;
  this.setState({});
  if (!(("animation" !== t))) goto L_1b8;
  if (!((this.state == null))) goto L_174;
  this.state;
  goto L_195;
  if (((undefined.animation === d.Ready))) goto L_204;
  this.context.onReady(i, o);
  goto L_258;
  // [栈深重同步 1 -> 0]
  this.onFailed(t, e, "invalid dimensions");
  return;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=377B file=chatgpt_beacon_artwork/src/BeaconArtwork
// args: e, i, o
// locals: this
// closure: d, t
function {
  this = this;
  if (!(this.isCurrent(i))) goto L_178;
  if (!((this.state == null))) goto L_59;
  this.state;
  goto L_5b;
  if (!((undefined[e] !== d.Failed))) goto L_178;
  if (!(t.isLoggingEnabled)) goto L_106;
  console.warn("[BeaconArtwork] ".concat(e, ": ", o));
  {}[e] = d.Failed;
  d.Failed;
  this.setState({});
  this.finishLoad();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=559B file=chatgpt_beacon_artwork/src/BeaconArtwork
// locals: t, e, i, this
// closure: d
function {
  this = this;
  let i;
  let e;
  let t;
  t = this.state;
  if (!(!t)) goto L_35;
  return;
  if (((undefined === undefined))) goto L_84;
  e = <to_object>(undefined).animation;
  i = <to_object>(undefined).poster;
  <to_object>(undefined);
  goto L_8a;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_3a;
  // [栈深重同步 1 -> 0]
  if (((e === d.Ready))) goto L_104;
  if (!((e !== d.Loading))) goto L_104;
  if (!((i !== d.Loading))) goto L_12d;
  this.clearDeadline();
  if (!((e !== d.Ready))) goto L_22e;
  if (!((e !== d.Loading))) goto L_22e;
  if (!((i !== d.Ready))) goto L_22e;
  if (!((i !== d.Loading))) goto L_22e;
  this.failed = true;
  this.context.onFailure();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=96B file=chatgpt_beacon_artwork/src/BeaconArtwork
// locals: this
function {
  this = this;
  if (!((undefined !== this.deadline))) goto L_5f;
  clearTimeout(this.deadline);
  this.deadline = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=10 bc=820B file=chatgpt_beacon_artwork/src/BeaconArtwork
// args: require, module, exports
// locals: t, e, i, o, a, n, s, r, d, BeaconArtwork, <class_fields_init>, BeaconArtwork#1, l, c, h, g
function {
  let g;
  let h;
  let c;
  let l;
  let BeaconArtwork#1;
  let r;
  let s;
  let n;
  let a;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BeaconArtwork = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeNodePrototype("view", undefined, "UESDMiXZ25-cg8te");
  o = e.makeNodePrototype("image", undefined, "VETVcctjZ5qH-hOa");
  a = e.makeNodePrototype("animatedimage", undefined, "V7I2Z8ypPK3wasFg");
  n = require("valdi_core/src/Component");
  s = require("valdi_core/src/Style");
  r = {https://cdn.openai.com/chatgpt/clients/beacon/home-takeover/astra/v1/astra-dark-0d681e11d4ab.json: "https://cdn.openai.com/chatgpt/clients/beacon/home-takeover/astra/v1/astra-dark-poster-68209a77f684.png", https://cdn.openai.com/chatgpt/clients/beacon/home-takeover/astra/v1/astra-light-0d640a1a9083.json: "https://cdn.openai.com/chatgpt/clients/beacon/home-takeover/astra/v1/astra-light-poster-b57d6b88b7f7.png"};
  if ((d)) goto L_18d;
  d = {};
  !function <atom:0>({});
  let BeaconArtwork;
  let <class_fields_init>;
  class BeaconArtwork extends n.StatefulComponent { ... }
  <proto:BeaconArtwork>.onViewModelUpdate = function <atom:0>;
  <proto:BeaconArtwork>.onDestroy = function <atom:0>;
  <proto:BeaconArtwork>.onRender = function <atom:0>;
  <proto:BeaconArtwork>.isCurrent = function <atom:0>;
  <proto:BeaconArtwork>.onDecoded = function <atom:0>;
  <proto:BeaconArtwork>.onFailed = function <atom:0>;
  <proto:BeaconArtwork>.finishLoad = function <atom:0>;
  <proto:BeaconArtwork>.clearDeadline = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BeaconArtwork>;
  BeaconArtwork = function <atom:0>;
  // close_loc <class_fields_init>
  BeaconArtwork#1 = function <atom:0>;
  exports.BeaconArtwork = BeaconArtwork#1;
  l = new s.Style({accessibilityNavigation: "ignored", height: "100%", width: "100%", touchEnabled: false});
  c = 8;
  h = new s.Style({accessibilityNavigation: "ignored", position: "absolute", top: 0, left: 0, right: 0, bottom: 8, loop: true, touchEnabled: false});
  g = new s.Style({accessibilityNavigation: "ignored", position: "absolute", top: 0, left: 0, right: 0, bottom: 8, touchEnabled: false});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_beacon_artwork/src/BeaconArtwork
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
