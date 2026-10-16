// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_wallet/src/WalletCardArtwork
// args: e
function {
  e.Loading = 0;
  e[0] = "Loading";
  e.Loaded = 1;
  e[1] = "Loaded";
  e.Failed = 2;
  e[2] = "Failed";
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=120B file=chatgpt_wallet/src/WalletCardArtwork
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, c
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
  this.state = {status: c.Loading, displayedUrl: undefined};
  this.loadGeneration = 0;
  return this;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=813B file=chatgpt_wallet/src/WalletCardArtwork
// args: e
// locals: t, o, e#1, this
// closure: c
function {
  this = this;
  let o;
  let t;
  t = this.viewModel.card;
  if (!((e == null))) goto L_55;
  e;
  goto L_97;
  o = (undefined.card.id === t.id);
  if ((!o)) goto L_1d8;
  if (!((e == null))) goto L_d1;
  e;
  goto L_113;
  if (((undefined.card.artworkUrl !== t.artworkUrl))) goto L_1d8;
  if (!((e == null))) goto L_148;
  e;
  goto L_169;
  if (!((undefined.card !== t))) goto L_32c;
  if (!((this.state.status === c.Failed))) goto L_32c;
  let e#1;
  this.loadGeneration = (this.loadGeneration + 1);
  if (!(o)) goto L_27f;
  if (!((undefined !== t.artworkUrl))) goto L_27f;
  goto L_280;
  // [栈深重同步 1 -> 0]
  e#1 = undefined;
  if (!((undefined !== e#1))) goto L_2f9;
  if (!((e#1 === t.artworkUrl))) goto L_2f9;
  goto L_31b;
  // [栈深重同步 4 -> 3]
  this.setState({status: c.Loading, displayedUrl: e#1});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=266B file=chatgpt_wallet/src/WalletCardArtwork
// closure: t, l, r, this
function {
  t.beginComponent(l.WalletCardBrandIcon, r, undefined, undefined);
  t.setViewModelProperty("brand", this.viewModel.card.brand);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_wallet/src/WalletCardArtwork
// args: e
// closure: this
function {
  return this.renderArtwork(e);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=2 bc=693B file=chatgpt_wallet/src/WalletCardArtwork
// locals: e, i, a, this
// closure: t, l, r, c, o, h
function {
  this = this;
  let a;
  let i;
  let e;
  e = this.viewModel.card.artworkUrl;
  i = this.state.displayedUrl;
  if (!((undefined !== i))) goto L_c3;
  goto L_c6;
  // [栈深重同步 1 -> 0]
  a = [];
  if (!((undefined !== e))) goto L_175;
  if (!((e !== i))) goto L_175;
  if (!((this.state.status !== c.Failed))) goto L_175;
  a.push(e);
  t.beginRender(o, this.viewModel.card.id);
  t.setAttributeStyle("style", h.container);
  if (!((undefined === i))) goto L_262;
  function <atom:0>();
  a.forEach(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=42B file=chatgpt_wallet/src/WalletCardArtwork
// args: t
// closure: this, e, o
function {
  return this.onArtworkLoad(e, o, t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=1 bc=539B file=chatgpt_wallet/src/WalletCardArtwork
// args: e
// locals: o, this
// closure: t, i, h, d, a
function {
  this = this;
  let o;
  o = this.loadGeneration;
  t.beginRender(i, e);
  t.setAttributeStyle("style", h.artwork);
  if (!((e === this.state.displayedUrl))) goto L_118;
  goto L_119;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", 0);
  t.beginComponent(d.Image, a, undefined, undefined);
  t.setViewModelProperty("src", e);
  t.setViewModelProperty("onAssetLoad", function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=528B file=chatgpt_wallet/src/WalletCardArtwork
// args: t, o, r
// locals: this
// closure: c, e
function {
  this = this;
  if ((this.isDestroyed())) goto L_20f;
  if (((t !== this.viewModel.card.artworkUrl))) goto L_20f;
  if (((o !== this.loadGeneration))) goto L_20f;
  if (((this.state.status !== c.Loading))) goto L_20f;
  if ((r)) goto L_18e;
  if (!(e.isLoggingEnabled)) goto L_18e;
  console.warn("Unable to load Wallet card artwork; using brand fallback.");
  if (!(r)) goto L_1d9;
  goto L_1fb;
  // [栈深重同步 4 -> 3]
  if (!(r)) goto L_206;
  goto L_207;
  // [栈深重同步 4 -> 3]
  this.setState({status: c.Failed, displayedUrl: undefined});
  return;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=6 bc=736B file=chatgpt_wallet/src/WalletCardArtwork
// args: require, module, exports
// locals: e, t, o, r, i, a, d, s, n, l, c, WalletCardArtwork, <class_fields_init>, WalletCardArtwork#1, h
function {
  let h;
  let WalletCardArtwork#1;
  let l;
  let n;
  let s;
  let d;
  let a;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletCardArtwork = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeNodePrototype("layout", undefined, "1uM68qt7ojoq4pfc");
  r = t.makeComponentPrototype(undefined, "krPUWKq27jYBc8AZ");
  i = t.makeNodePrototype("view", undefined, "pAAOZfx2xa5oj2DM");
  a = t.makeComponentPrototype(["width", 28, "height", 18, "objectFit", "contain"], "IH9Fb7rU7WCKv1Ak");
  d = require("oai_ui/src/components/Image");
  s = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  l = require("./WalletCardBrandIcon");
  if ((c)) goto L_1c9;
  c = {};
  !function <atom:0>({});
  let WalletCardArtwork;
  let <class_fields_init>;
  class WalletCardArtwork extends s.StatefulComponent { ... }
  <proto:WalletCardArtwork>.onViewModelUpdate = function <atom:0>;
  <proto:WalletCardArtwork>.onRender = function <atom:0>;
  <proto:WalletCardArtwork>.renderArtwork = function <atom:0>;
  <proto:WalletCardArtwork>.onArtworkLoad = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletCardArtwork>;
  WalletCardArtwork = function <atom:0>;
  // close_loc <class_fields_init>
  WalletCardArtwork#1 = function <atom:0>;
  exports.WalletCardArtwork = WalletCardArtwork#1;
  h = {container: new n.Style({width: 28, height: 28, flexShrink: 0, alignItems: "center", justifyContent: "center", accessibilityNavigation: "ignored"}), artwork: new n.Style({position: "absolute", width: 28, height: 18})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletCardArtwork
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
