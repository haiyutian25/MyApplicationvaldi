// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_widgets/src/widgets/SearchImage
// closure: this
function {
  return this.getContentElement();   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=106B file=dil_widgets/src/widgets/SearchImage
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, u
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
  this.pressFeedback = new u.DILPressFeedback(this, function <atom:0>);
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=174B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["applyAdditionalContainerAttributes"].call(this, e);
  e.ref = this.getContentRef();
  this.pressFeedback.applyAttributes(e, (undefined !== this.onTap));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=435B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: t
// closure: this
function {
  let t;
  if (((e.width <= 0))) goto L_4f;
  if (!((e.height <= 0))) goto L_52;
  return;
  t = this.state.measuredAspectRatio;
  if (!((t == null))) goto L_a3;
  t;
  goto L_c4;
  if (!((undefined.width === e.width))) goto L_132;
  if (((t.height === e.height))) goto L_1b2;
  this.setState({measuredAspectRatio: {width: e.width, height: e.height}});
  return;
}

// fn <atom:0>  args=1 vars=8 closure=5 cpool=0 bc=1628B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: t, e#1, i, o, r, e#2, t#1
// closure: this, W, C, Z, Y
function {
  let r;
  let o;
  let i;
  let t;
  t = this.settlementSourceKey;
  if (!((this.viewModel.onAssetLoad == null))) goto L_7f;
  this.viewModel.onAssetLoad;
  this.viewModel;
  goto L_83;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e);
  if ((this.isDestroyed())) goto L_d7;
  if (!((t !== this.settlementSourceKey))) goto L_da;
  return;
  if (!(this.viewModel.renderLoadedOverlay)) goto L_1aa;
  if (!(W(this.viewModel))) goto L_1aa;
  if (!(e)) goto L_1a1;
  goto L_1a2;
  // [栈深重同步 4 -> 3]
  this.setState({loadedCropSource: undefined});
  if (!(e)) goto L_324;
  let e#1;
  if (!((this.loadMetrics == null))) goto L_1e0;
  this.loadMetrics;
  goto L_249;
  undefined.finish(C.DILImageLoadOutcome.Loaded);
  e#1 = this.resolveSource();
  if (!((undefined !== e#1))) goto L_2f8;
  if (!((this.state.loadedSource !== e#1))) goto L_2f8;
  this.setState({loadedSource: e#1});
  this.reportOutcome(true);
  return;
  i = this.viewModel.searchImage;
  if (((null === i))) goto L_37d;
  if (!(("object" != typeof i))) goto L_380;
  return;
  o = Z(i);
  r = this.resolveSource();
  if (!((undefined !== r))) goto L_65b;
  if (!((undefined !== o))) goto L_563;
  if (!((r === o))) goto L_563;
  if (!((this.state.failedContentURL !== o))) goto L_563;
  let t#1;
  let e#2;
  e#2 = Y(i);
  if (!((undefined !== e#2))) goto L_43c;
  t#1 = (e#2 !== o);
  if (!(t#1)) goto L_49b;
  if (!(this.loadMetrics)) goto L_49b;
  this.loadMetrics.fallbackUsed = true;
  goto L_4c2;
  // [栈深重同步 1 -> 0]
  this.finishFailedLoad();
  if (!(this.shouldHideFailedSource)) goto L_527;
  if (!(!t#1)) goto L_527;
  goto L_528;
  // [栈深重同步 4 -> 3]
  null;
  {};
  this.setState({failedContentURL: o});
  if ((t#1)) goto L_561;
  this.reportOutcome(false);
  return;
  this.finishFailedLoad();
  if (!(this.shouldHideFailedSource)) goto L_630;
  if (!((this.state.failedSource !== r))) goto L_630;
  this.setState({failedSource: r});
  this.reportOutcome(false);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=542B file=dil_widgets/src/widgets/SearchImage
// locals: t, i
// closure: e, this
function {
  let i;
  let t;
  if (!(e)) goto L_50;
  goto L_95;
  // [栈深重同步 1 -> 0]
  t = this.viewModel.onError;
  if (!((undefined !== t))) goto L_a3;
  t();
  return;
  if (!(e)) goto L_ed;
  goto L_132;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.onErrorAction == null))) goto L_13a;
  this.viewModel.onErrorAction;
  goto L_13b;
  i = undefined();
  if (!((null != i))) goto L_21d;
  if (!((this.context == null))) goto L_175;
  this.context;
  goto L_21d;
  if (!((i.patchState == null))) goto L_215;
  i.patchState;
  undefined.dispatchActionPayload({updateState: i.updateState, replaceState: i.replaceState, patchState: []});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=138B file=dil_widgets/src/widgets/SearchImage
// args: e
// closure: this, p
function {
  if ((this.isDestroyed())) goto L_89;
  if (((undefined !== this.reportedOutcome))) goto L_89;
  this.reportedOutcome = e;
  p.runWithoutDILUserInteraction(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=3 bc=104B file=dil_widgets/src/widgets/SearchImage
// locals: this, this.active_func, new.target, arguments
// closure: W, C, Z, Y, p, <class_fields_init>
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
  this.state = {};
  this.handleImageLayout = function <atom:0>;
  this.handleAssetLoad = function <atom:0>;
  this.reportOutcome = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=193B file=dil_widgets/src/widgets/SearchImage
// locals: e, this
function {
  this = this;
  let e;
  if (!(this.viewModel.preload)) goto L_4b;
  return;
  e = this.context;
  if (!((this.ownedLoadMetrics == null))) goto L_c0;
  this.ownedLoadMetrics;
  if (!((e == null))) goto L_9f;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.imageLoadMetrics;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=333B file=dil_widgets/src/widgets/SearchImage
// locals: this
// closure: C
function {
  this = this;
  if ((this.viewModel.preload)) goto L_f2;
  if ((!this.viewModel.trackImageLoad)) goto L_f2;
  if ((this.loadMetrics)) goto L_f2;
  this.ownedLoadMetrics = new C.DILImageLoadMetrics("search-image");
  new C.DILImageLoadMetrics("search-image");
  null;
  this.context;
  this.progressiveContext = {imageLoadMetrics: this.loadMetrics};
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=dil_widgets/src/widgets/SearchImage
// locals: this
function {
  this = this;
  if (!((this.ownedLoadMetrics == null))) goto L_2c;
  this.ownedLoadMetrics;
  goto L_50;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=1077B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: t, i, this, <home_object>
// closure: $, ee
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let t;
  super["onViewModelUpdate"].call(this, e);
  t = JSON.stringify([$(this.viewModel), ee(this.viewModel), (true === this.viewModel.upgradeToFullRes)]);
  if (!((t !== this.settlementSourceKey))) goto L_122;
  this.settlementSourceKey = t;
  this.reportedOutcome = undefined;
  this.cachedAssetLoadHandler = undefined;
  undefined;
  if (((undefined === e))) goto L_274;
  if (!(($(e) === $(this.viewModel)))) goto L_243;
  if (!((ee(e) === ee(this.viewModel)))) goto L_243;
  if (!((e.searchImage == null))) goto L_1b5;
  e.searchImage;
  goto L_1d6;
  if (!((this.viewModel.searchImage == null))) goto L_221;
  this.viewModel.searchImage;
  goto L_242;
  if (((undefined.is_sensitive === undefined.is_sensitive))) goto L_274;
  this.setState({revealed: false});
  if (!((undefined !== this.state.loadedSource))) goto L_35a;
  if (!((this.state.loadedSource !== this.resolveSource()))) goto L_35a;
  this.setState({loadedSource: undefined});
  i = this.viewModel.searchImage;
  if (!((null !== i))) goto L_434;
  if (!(("object" == typeof i))) goto L_434;
  if (!((undefined === $(this.viewModel)))) goto L_434;
  if (!((undefined === ee(this.viewModel)))) goto L_434;
  this.reportOutcome(false);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=dil_widgets/src/widgets/SearchImage
// closure: e, this
function {
  e.renderNamedSlot("fallback", this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/widgets/SearchImage
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=48B file=dil_widgets/src/widgets/SearchImage
// closure: e, this, l
function {
  if (!(l)) goto L_2c;
  goto L_2f;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=dil_widgets/src/widgets/SearchImage
// closure: e, this
function {
  e.renderNamedSlot("fallback", this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/widgets/SearchImage
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=213B file=dil_widgets/src/widgets/SearchImage
// closure: e, this, r, te, l
function {
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", te.overlay);
  if (!(l)) goto L_a9;
  goto L_ac;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=17 cpool=2 bc=2131B file=dil_widgets/src/widgets/SearchImage
// closure: e, this, r, te, l, x, o, d, a, m, b, n, h, y, v, c, g
function {
  e.beginComponent(x.Image, o, undefined, undefined);
  e.setViewModelProperty("limitToViewport", d);
  e.setViewModelProperty("obscured", a);
  if (!((this.viewModel.alt == null))) goto L_18e;
  this.viewModel.alt;
  if (!((this.viewModel.searchImage == null))) goto L_16d;
  this.viewModel.searchImage;
  goto L_18e;
  e.setViewModelProperty("alt", undefined.title);
  e.setViewModelProperty("aspectRatio", m.sourceAspectRatio);
  e.setViewModelProperty("fit", b);
  e.setViewModelProperty("hasFallback", this.viewModel.hasFallback);
  e.setViewModelProperty("hasOverlay", false);
  e.setViewModelProperty("hoverZoom", this.viewModel.hoverZoom);
  e.setViewModelProperty("frameHovered", this.viewModel.frameHovered);
  e.setViewModelProperty("useLoadingFrame", this.viewModel.useLoadingFrame);
  e.setViewModelProperty("streamingAnimation", this.viewModel.streamingAnimation);
  e.setViewModelProperty("onAssetLoad", this.onAssetLoad);
  if (!(this.viewModel.renderLoadedOverlay)) goto L_534;
  goto L_535;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onClick", undefined);
  if (!(this.viewModel.renderLoadedOverlay)) goto L_5ac;
  goto L_5ad;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onClickAction", undefined);
  e.setViewModelProperty("imageLoadMetrics", this.loadMetrics);
  e.setViewModelProperty("position", y);
  e.setViewModelProperty("src", v);
  e.setViewModelProperty("theme", this.viewModel.theme);
  e.setNamedSlot("fallback", function <atom:0>);
  e.endComponent();
  if (!(c)) goto L_731;
  function <atom:0>();
  if (!((undefined !== v))) goto L_852;
  if (!((v === this.state.loadedCropSource))) goto L_852;
  if (!((this.context == null))) goto L_7dd;
  this.context;
  goto L_7fe;
  if (!(g.isDILAssetSourceAllowed(v, undefined.assetURLAuthorization))) goto L_852;
  if (!((this.viewModel.renderLoadedOverlay == null))) goto L_84f;
  this.viewModel.renderLoadedOverlay;
  this.viewModel;
  goto L_852;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=dil_widgets/src/widgets/SearchImage
// closure: e, this
function {
  e.renderNamedSlot("fallback", this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/widgets/SearchImage
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=48B file=dil_widgets/src/widgets/SearchImage
// closure: e, this, l
function {
  if (!(l)) goto L_2c;
  goto L_2f;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  return;
}

// fn <atom:0>  args=0 vars=16 closure=19 cpool=5 bc=13382B file=dil_widgets/src/widgets/SearchImage
// locals: d, l, a, n, h, c, v, w, M, u, p, m, y, b, P, this
// closure: e, r, te, x, o, g, ProgressiveSearchImage, t, T, Z, _, R, W, D, SearchImageCropFrame, i, O, s, H
function {
  this = this;
  let P;
  let b;
  let y;
  let m;
  let p;
  let u;
  let M;
  let w;
  let v;
  let c;
  let h;
  let n;
  let a;
  let l;
  let d;
  if (!(!this.viewModel.preload)) goto L_1f1;
  if (!((undefined === this.viewModel.onLoad))) goto L_1f1;
  if (!((undefined === this.viewModel.onError))) goto L_1f1;
  if (!((undefined === this.viewModel.onLoadAction))) goto L_1f1;
  if (!((undefined === this.viewModel.onErrorAction))) goto L_1f1;
  d = this.viewModel.limitToViewport;
  if (!((this.context == null))) goto L_21f;
  this.context;
  goto L_240;
  if (!((true === undefined.sensitiveImageBlurEnabled))) goto L_303;
  if (!((this.viewModel.searchImage == null))) goto L_296;
  this.viewModel.searchImage;
  goto L_2b7;
  if (!((true === undefined.is_sensitive))) goto L_303;
  l = (true !== this.state.revealed);
  if ((l)) goto L_352;
  a = (true === this.viewModel.obscured);
  if (!(a)) goto L_35b;
  goto L_39f;
  // [栈深重同步 1 -> 0]
  n = this.viewModel.onClick;
  if (!(a)) goto L_3a9;
  goto L_460;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.onClickAction == null))) goto L_460;
  this.viewModel.onClickAction;
  if (!((undefined === this.viewModel.onClick))) goto L_45f;
  goto L_460;
  // [栈深重同步 1 -> 0]
  h = undefined;
  if ((l)) goto L_4ad;
  c = this.viewModel.hasOverlay;
  if (!((true === this.viewModel.upgradeToFullRes))) goto L_14ae;
  e.beginComponent(ProgressiveSearchImage, t, undefined, undefined);
  if ((e.hasContext())) goto L_5a0;
  e.setContext(this.progressiveContext);
  e.setViewModelProperty("limitToViewport", d);
  e.setViewModelProperty("alt", this.viewModel.alt);
  e.setViewModelProperty("obscured", a);
  e.setViewModelProperty("aspectRatio", this.viewModel.aspectRatio);
  e.setViewModelProperty("autoSpacing", this.viewModel.autoSpacing);
  e.setViewModelProperty("background", this.viewModel.background);
  e.setViewModelProperty("fillContainer", this.viewModel.fillContainer);
  e.setViewModelProperty("fit", this.viewModel.fit);
  e.setViewModelProperty("flex", this.viewModel.flex);
  e.setViewModelProperty("flowGalleryContext", this.viewModel.flowGalleryContext);
  e.setViewModelProperty("frame", this.viewModel.frame);
  e.setViewModelProperty("galleryIndex", this.viewModel.galleryIndex);
  e.setViewModelProperty("hasFallback", this.viewModel.hasFallback);
  e.setViewModelProperty("hasOverlay", c);
  e.setViewModelProperty("renderLoadedOverlay", this.viewModel.renderLoadedOverlay);
  e.setViewModelProperty("height", this.viewModel.height);
  e.setViewModelProperty("hideOnFailure", this.viewModel.hideOnFailure);
  e.setViewModelProperty("hoverZoom", this.viewModel.hoverZoom);
  e.setViewModelProperty("margin", this.viewModel.margin);
  e.setViewModelProperty("maxHeight", this.viewModel.maxHeight);
  e.setViewModelProperty("maxSize", this.viewModel.maxSize);
  e.setViewModelProperty("maxWidth", this.viewModel.maxWidth);
  e.setViewModelProperty("minHeight", this.viewModel.minHeight);
  e.setViewModelProperty("minSize", this.viewModel.minSize);
  e.setViewModelProperty("minWidth", this.viewModel.minWidth);
  e.setViewModelProperty("onClick", n);
  e.setViewModelProperty("onClickAction", h);
  e.setViewModelProperty("onAssetLoad", this.reportOutcome);
  if (!(!a)) goto L_110c;
  e.setViewModelProperty("openInLightbox", this.viewModel.openInLightbox);
  e.setViewModelProperty("position", this.viewModel.position);
  e.setViewModelProperty("radius", this.viewModel.radius);
  e.setViewModelProperty("searchImage", this.viewModel.searchImage);
  e.setViewModelProperty("size", this.viewModel.size);
  e.setViewModelProperty("theme", this.viewModel.theme);
  e.setViewModelProperty("useLoadingFrame", this.viewModel.useLoadingFrame);
  e.setViewModelProperty("width", this.viewModel.width);
  e.setNamedSlot("fallback", function <atom:0>);
  e.setNamedSlot("default", function <atom:0>);
  e.endComponent();
  return;
  v = this.resolveSource();
  w = this.viewModel.searchImage;
  if (!(w)) goto L_158f;
  if (!(("object" == typeof w))) goto L_158f;
  if (!(T(w))) goto L_1569;
  if (!((v === Z(w)))) goto L_1569;
  goto L_1590;
  // [栈深重同步 1 -> 0]
  goto L_1590;
  // [栈深重同步 1 -> 0]
  M = undefined;
  if (!((this.state.measuredAspectRatio == null))) goto L_1602;
  this.state.measuredAspectRatio;
  u = _(this.viewModel);
  if (!((u == null))) goto L_1636;
  u;
  goto L_1657;
  if (!(undefined.width)) goto L_16ca;
  if (!(u.height)) goto L_16ca;
  goto L_16cb;
  // [栈深重同步 3 -> 2]
  p = R.resolveImageCrop(M, undefined, this.viewModel.contentCropFit);
  if (!(p)) goto L_171a;
  goto L_1741;
  // [栈深重同步 1 -> 0]
  m = W(this.viewModel);
  y = D(this.viewModel, this.state.measuredAspectRatio, (undefined !== m));
  if (!((this.viewModel.fit == null))) goto L_1803;
  this.viewModel.fit;
  b = "cover";
  if (!((undefined === v))) goto L_1855;
  if (((true !== this.viewModel.useLoadingFrame))) goto L_18cd;
  if (!((undefined !== v))) goto L_18d0;
  if (!(this.shouldHideFailedSource)) goto L_18d0;
  if (!((v === this.state.failedSource))) goto L_18d0;
  return;
  if (!((undefined !== v))) goto L_1921;
  P = (v === this.state.loadedSource);
  if (!((undefined !== m))) goto L_2381;
  e.beginComponent(SearchImageCropFrame, i, undefined, undefined);
  if (!((this.viewModel.aspectRatio == null))) goto L_19f3;
  this.viewModel.aspectRatio;
  e.setViewModelProperty("aspectRatio", m.targetAspectRatio);
  e.setViewModelProperty("autoSpacing", this.viewModel.autoSpacing);
  e.setViewModelProperty("background", this.viewModel.background);
  if (!(this.viewModel.frame)) goto L_1b4d;
  goto L_1b4e;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("border", undefined);
  e.setViewModelProperty("clip", true);
  e.setViewModelProperty("flex", this.viewModel.flex);
  e.setViewModelProperty("height", this.viewModel.height);
  e.setViewModelProperty("margin", this.viewModel.margin);
  e.setViewModelProperty("maxHeight", this.viewModel.maxHeight);
  e.setViewModelProperty("maxSize", this.viewModel.maxSize);
  e.setViewModelProperty("maxWidth", this.viewModel.maxWidth);
  e.setViewModelProperty("minHeight", this.viewModel.minHeight);
  e.setViewModelProperty("minSize", this.viewModel.minSize);
  e.setViewModelProperty("minWidth", this.viewModel.minWidth);
  if (!(this.viewModel.renderLoadedOverlay)) goto L_1fec;
  goto L_1fef;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onClick", n);
  if (!(this.viewModel.renderLoadedOverlay)) goto L_2065;
  goto L_2068;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onClickAction", h);
  e.setViewModelProperty("onVisibleAction", this.viewModel.onVisibleAction);
  e.setViewModelProperty("onVisibleWhen", P);
  if (!((this.viewModel.radius == null))) goto L_2184;
  this.viewModel.radius;
  e.setViewModelProperty("radius", "md");
  e.setViewModelProperty("size", this.viewModel.size);
  e.setViewModelProperty("theme", this.viewModel.theme);
  if (!((this.viewModel.width == null))) goto L_232a;
  this.viewModel.width;
  if (!((this.viewModel.size == null))) goto L_232a;
  this.viewModel.size;
  e.setViewModelProperty("width", "100%");
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
  e.beginComponent(x.Image, s, undefined, undefined);
  e.setViewModelProperty("limitToViewport", d);
  e.setViewModelProperty("obscured", a);
  if (!((this.viewModel.alt == null))) goto L_2511;
  this.viewModel.alt;
  if (!((this.viewModel.searchImage == null))) goto L_24f0;
  this.viewModel.searchImage;
  goto L_2511;
  e.setViewModelProperty("alt", undefined.title);
  if (!((this.viewModel.aspectRatio == null))) goto L_25bb;
  this.viewModel.aspectRatio;
  if (!(p)) goto L_25ba;
  if (!((M == null))) goto L_2597;
  M;
  goto L_25bb;
  goto L_25bb;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("aspectRatio", undefined);
  e.setViewModelProperty("autoSpacing", this.viewModel.autoSpacing);
  e.setViewModelProperty("background", this.viewModel.background);
  e.setViewModelProperty("containOutsideAspectRatio", this.viewModel.containOutsideAspectRatio);
  e.setViewModelProperty("bitmapBlendMode", this.viewModel.bitmapBlendMode);
  e.setViewModelProperty("contentCrop", p);
  e.setViewModelProperty("fit", b);
  e.setViewModelProperty("flex", this.viewModel.flex);
  e.setViewModelProperty("frame", this.viewModel.frame);
  e.setViewModelProperty("height", this.viewModel.height);
  e.setViewModelProperty("hasFallback", this.viewModel.hasFallback);
  e.setViewModelProperty("hasOverlay", c);
  e.setViewModelProperty("hoverZoom", this.viewModel.hoverZoom);
  e.setViewModelProperty("frameHovered", this.viewModel.frameHovered);
  e.setViewModelProperty("renderLoadedOverlay", this.viewModel.renderLoadedOverlay);
  e.setViewModelProperty("useLoadingFrame", this.viewModel.useLoadingFrame);
  e.setViewModelProperty("streamingAnimation", this.viewModel.streamingAnimation);
  e.setViewModelProperty("margin", this.viewModel.margin);
  e.setViewModelProperty("maxHeight", this.viewModel.maxHeight);
  e.setViewModelProperty("maxSize", this.viewModel.maxSize);
  e.setViewModelProperty("maxWidth", this.viewModel.maxWidth);
  e.setViewModelProperty("minHeight", this.viewModel.minHeight);
  e.setViewModelProperty("minSize", this.viewModel.minSize);
  e.setViewModelProperty("minWidth", this.viewModel.minWidth);
  e.setViewModelProperty("onAssetLoad", this.onAssetLoad);
  e.setViewModelProperty("onVisibleAction", this.viewModel.onVisibleAction);
  e.setViewModelProperty("onVisibleWhen", P);
  e.setViewModelProperty("imageLoadMetrics", this.loadMetrics);
  e.setViewModelProperty("onClick", n);
  e.setViewModelProperty("onClickAction", h);
  if (((undefined !== p))) goto L_311d;
  if (!(H(this.viewModel))) goto L_3144;
  goto L_3145;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onLayout", undefined);
  e.setViewModelProperty("position", y);
  e.setViewModelProperty("radius", this.viewModel.radius);
  e.setViewModelProperty("size", this.viewModel.size);
  e.setViewModelProperty("src", v);
  e.setViewModelProperty("theme", this.viewModel.theme);
  if (!((this.viewModel.width == null))) goto L_33bc;
  this.viewModel.width;
  if (!((this.viewModel.size == null))) goto L_33bc;
  this.viewModel.size;
  e.setViewModelProperty("width", "100%");
  e.setNamedSlot("fallback", function <atom:0>);
  e.setNamedSlot("default", function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=167B file=dil_widgets/src/widgets/SearchImage
// args: i
// closure: this, e, t
function {
  if ((this.isDestroyed())) goto L_a6;
  if (((e !== this.resolveSource()))) goto L_a6;
  if (((this.cachedAssetLoadHandler !== t))) goto L_a6;
  this.handleAssetLoad(i);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=1 bc=198B file=dil_widgets/src/widgets/SearchImage
// locals: e, t, this
function {
  this = this;
  let e;
  e = this.resolveSource();
  if (((undefined === this.cachedAssetLoadHandler))) goto L_79;
  if (!((this.cachedAssetLoadSource !== e))) goto L_a3;
  let t;
  this.cachedAssetLoadSource = e;
  t = function <atom:0>;
  this.cachedAssetLoadHandler = t;
  // close_loc t
  return this.cachedAssetLoadHandler;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=361B file=dil_widgets/src/widgets/SearchImage
// locals: this
// closure: C
function {
  this = this;
  if (!((this.loadMetrics == null))) goto L_2d;
  this.loadMetrics;
  goto L_168;
  if (!((this.loadMetrics.sourceState === C.DILImageSourceState.Blocked))) goto L_120;
  goto L_165;
  // [栈深重同步 3 -> 2]
  undefined.finish(C.DILImageLoadOutcome.LoadError);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=147B file=dil_widgets/src/widgets/SearchImage
// locals: this
function {
  this = this;
  if (!((true === this.viewModel.hideOnFailure))) goto L_92;
  return (true !== this.viewModel.hasFallback);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_widgets/src/widgets/SearchImage
// closure: this
function {
  return this.makeLightboxPayload();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=207B file=dil_widgets/src/widgets/SearchImage
// locals: this
// closure: z
function {
  this = this;
  if (!((true === this.viewModel.openInLightbox))) goto L_ce;
  if (!((undefined !== z(this.viewModel)))) goto L_ce;
  if (!((undefined === this.cachedLightboxAction))) goto L_aa;
  this.cachedLightboxAction = function <atom:0>;
  function <atom:0>;
  return this.cachedLightboxAction;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=230B file=dil_widgets/src/widgets/SearchImage
// locals: e, t, i, this
// closure: Z, Y, T
function {
  this = this;
  let i;
  let t;
  let e;
  e = this.viewModel.searchImage;
  if (((null === e))) goto L_62;
  if (!(("object" != typeof e))) goto L_65;
  return;
  t = Z(e);
  i = Y(e);
  if (!(T(e))) goto L_e2;
  if (((undefined === t))) goto L_d8;
  if (!((t === this.state.failedContentURL))) goto L_de;
  if (!((undefined !== i))) goto L_de;
  if (!((i !== t))) goto L_de;
  return i;
  return t;
  return i;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=180B file=dil_widgets/src/widgets/SearchImage
// closure: this, t, $, i, ee
function {
  if ((this.isDestroyed())) goto L_b3;
  if (((t !== $(this.viewModel)))) goto L_b3;
  if (((i !== ee(this.viewModel)))) goto L_b3;
  this.setState({revealed: true});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=9 cpool=1 bc=569B file=dil_widgets/src/widgets/SearchImage
// locals: t, i, this
// closure: $, ee, e, d, te, A, S, I, l
function {
  this = this;
  let i;
  let t;
  t = $(this.viewModel);
  i = ee(this.viewModel);
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", te.reveal);
  e.setAttributeString("accessibilityLabel", A.default.showSensitiveImage());
  e.setAttribute("onTap", S.createReusableCallback(function <atom:0>));
  e.beginComponent(I.Icon, l, undefined, undefined);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=301B file=dil_widgets/src/widgets/SearchImage
// locals: e, t, this
// closure: z
function {
  this = this;
  let t;
  let e;
  e = this.viewModel.flowGalleryContext;
  t = z(this.viewModel);
  if (!((undefined !== e))) goto L_12c;
  if (!((undefined !== t))) goto L_12c;
  if (!((undefined === e.lightboxSource))) goto L_f7;
  goto L_121;
  // [栈深重同步 3 -> 2]
  null;
  {source: e.lightboxSource};
  return {handler: "client", type: "open_image_lightbox", payload: {images: e.images, selected_index: t}};
  return;
}

// fn z  args=1 vars=3 closure=0 cpool=0 bc=249B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: t, i
function {
  let i;
  let t;
  t = e.galleryIndex;
  if (!((e.flowGalleryContext == null))) goto L_53;
  e.flowGalleryContext;
  goto L_74;
  i = undefined.images;
  if (((undefined === e.searchImage))) goto L_f1;
  if (((undefined === i))) goto L_f1;
  if (((undefined === t))) goto L_f1;
  if ((!Number.isInteger(t))) goto L_f1;
  if (((t < 0))) goto L_f1;
  if (!(!(t >= i.length))) goto L_f8;
  return t;
  return;
}

// fn D  args=3 vars=5 closure=5 cpool=0 bc=305B file=dil_widgets/src/widgets/SearchImage
// args: e, t, i
// locals: o, r
// closure: j, N, K, G, _
function {
  let r;
  let o;
  o = j(e.searchImage);
  if (((undefined !== o))) goto L_35;
  if (!(i)) goto L_91;
  if (!((K(e.searchImage) == null))) goto L_88;
  K(e.searchImage);
  goto L_92;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!((undefined !== e.position))) goto L_106;
  if (!(("center" !== e.position))) goto L_106;
  return e.position;
  if (!((r == null))) goto L_130;
  r;
  return e.position;
}

// fn H  args=1 vars=1 closure=2 cpool=0 bc=337B file=dil_widgets/src/widgets/SearchImage
// args: e
// closure: j, y
function {
  if (!((undefined !== j(e.searchImage)))) goto L_150;
  if (!((undefined === y.resolveDILAspectRatio(e.aspectRatio)))) goto L_150;
  if ((("number" != typeof e.width))) goto L_fb;
  if ((("number" != typeof e.height))) goto L_fb;
  if (!((0 === e.height))) goto L_150;
  if ((("number" != typeof e.size))) goto L_150;
  return (0 === e.size);
}

// fn _  args=2 vars=5 closure=2 cpool=0 bc=494B file=dil_widgets/src/widgets/SearchImage
// args: e, t
// locals: e#1, t#1, i
// closure: y, k
function {
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_10;
  t;
  t = undefined;
  t#1 = undefined;
  let i;
  i = y.resolveDILAspectRatio(e.aspectRatio);
  if (!((undefined !== i))) goto L_73;
  return {width: i, height: 1};
  if (!(("number" == typeof e.width))) goto L_142;
  if (!(("number" == typeof e.height))) goto L_142;
  if (!((0 !== e.height))) goto L_142;
  return {width: e.width, height: e.height};
  if (!(("number" == typeof e.size))) goto L_1e3;
  if (!((0 !== e.size))) goto L_1e3;
  return {width: e.size, height: e.size};
  if (!((undefined !== t))) goto L_1ea;
  return t;
  return k;
}

// fn N  args=3 vars=4 closure=1 cpool=0 bc=213B file=dil_widgets/src/widgets/SearchImage
// args: e, t, i
// locals: o
// closure: U
function {
  let o;
  o = U(e, t, i);
  if (!((undefined !== o))) goto L_d4;
  return "".concat(o.xPercent.toFixed(1), "% ", o.yPercent.toFixed(1), "%");   // tail call
  return;
}

// fn W  args=1 vars=6 closure=6 cpool=1 bc=614B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: t, i, o, r, s
// closure: K, G, _, U, j, E
function {
  let s;
  let r;
  let o;
  let i;
  let t;
  if (((undefined !== e.aspectRatio))) goto L_15d;
  if (((undefined !== e.height))) goto L_15d;
  if (((undefined !== e.size))) goto L_15d;
  if (((undefined !== e.containOutsideAspectRatio))) goto L_15d;
  if (!((undefined !== e.fit))) goto L_10b;
  if ((("cover" !== e.fit))) goto L_15d;
  if (!((undefined !== e.position))) goto L_160;
  if (!(("center" !== e.position))) goto L_160;
  return;
  if (!((K(e.searchImage) == null))) goto L_1ad;
  K(e.searchImage);
  t = G(e.searchImage);
  i = _(e);
  o = U(j(e.searchImage), t, i);
  if (((undefined === t))) goto L_1f8;
  if (((undefined === i))) goto L_1f8;
  if (!((undefined === o))) goto L_1fb;
  return;
  r = E(t);
  s = E(i);
  if (((undefined === r))) goto L_250;
  if (((undefined === s))) goto L_250;
  if (((r >= s))) goto L_250;
  if (!((o.yPercent > 0.1))) goto L_254;
  return undefined;
  return {sourceAspectRatio: r, targetAspectRatio: s};
}

// fn U  args=3 vars=15 closure=5 cpool=3 bc=559B file=dil_widgets/src/widgets/SearchImage
// args: e, t, i
// locals: o, r, s, d, l, a, n, h, c, v, e#1, t#1
// closure: E, B, X, Q, q
function {
  let v;
  let c;
  let h;
  let n;
  let a;
  let l;
  let d;
  let s;
  let r;
  let o;
  if (!((t == null))) goto L_27;
  t;
  goto L_48;
  o = undefined.width;
  if (!((t == null))) goto L_52;
  t;
  goto L_73;
  r = undefined.height;
  if (!((i == null))) goto L_7d;
  i;
  goto L_9e;
  s = undefined.width;
  if (!((i == null))) goto L_a8;
  i;
  goto L_c9;
  d = undefined.height;
  if (((undefined === o))) goto L_105;
  if (((undefined === r))) goto L_105;
  if (((undefined === s))) goto L_105;
  if (((undefined === d))) goto L_105;
  if (((0 === o))) goto L_105;
  if (((0 === r))) goto L_105;
  if (!((0 === d))) goto L_108;
  return;
  l = E({width: o, height: r});
  a = E({width: s, height: d});
  if (((undefined === l))) goto L_140;
  if (!((undefined === a))) goto L_143;
  return;
  if (!((Math.abs((l - a)) < 1e-06))) goto L_179;
  return;
  if (!((undefined === e))) goto L_198;
  if (!((l < a))) goto L_196;
  return {xPercent: 50, yPercent: 0};
  return undefined;
  if (!((B(X(e)) == null))) goto L_1a4;
  B(X(e));
  n = 0.5;
  if (!((B(Q(e)) == null))) goto L_1b2;
  B(Q(e));
  h = 0.5;
  c = 50;
  v = 50;
  if (!((l > a))) goto L_1e8;
  c = q(((((n * l) - (a / 2)) / (l - a)) * 100));
  q(((((n * l) - (a / 2)) / (l - a)) * 100));
  goto L_21d;
  let t#1;
  let e#1;
  e#1 = (1 / l);
  t#1 = (1 / a);
  v = q(((((h * e#1) - (t#1 / 2)) / (e#1 - t#1)) * 100));
  q(((((h * e#1) - (t#1 / 2)) / (e#1 - t#1)) * 100));
  return {xPercent: c, yPercent: v};
}

// fn E  args=1 vars=3 closure=0 cpool=0 bc=129B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: t, i
function {
  let i;
  let t;
  if (!((e == null))) goto L_f;
  e;
  goto L_30;
  t = undefined.width;
  if (!((e == null))) goto L_3a;
  e;
  goto L_5b;
  i = undefined.height;
  if (!((undefined !== t))) goto L_80;
  if (!((undefined !== i))) goto L_80;
  if (!((0 !== t))) goto L_80;
  if (!((0 !== i))) goto L_80;
  return (t / i);
  return;
}

// fn q  args=1 vars=1 closure=0 cpool=0 bc=86B file=dil_widgets/src/widgets/SearchImage
// args: e
function {
  return Math.max(0, Math.min(100, e));   // tail call
}

// fn B  args=1 vars=1 closure=0 cpool=0 bc=18B file=dil_widgets/src/widgets/SearchImage
// args: e
function {
  if (!((undefined !== e))) goto L_11;
  if (!((e > 1))) goto L_f;
  return (e / 100);
  return e;
  return;
}

// fn G  args=1 vars=1 closure=0 cpool=0 bc=89B file=dil_widgets/src/widgets/SearchImage
// args: e
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_2a;
  if (!((undefined.content_size == null))) goto L_58;
  undefined.content_size;
  if (!((e == null))) goto L_37;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.contentSize;
}

// fn T  args=1 vars=2 closure=3 cpool=0 bc=82B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: t
// closure: Z, Y, F
function {
  let t;
  t = Z(e);
  if (((undefined === Y(e)))) goto L_51;
  if (!((undefined !== t))) goto L_51;
  if (!((t.length <= F))) goto L_51;
  return t.startsWith("data:image/webp;base64,");
}

// fn Z  args=1 vars=1 closure=1 cpool=0 bc=72B file=dil_widgets/src/widgets/SearchImage
// args: e
// closure: J
function {
  return J(e.content_url, e.contentUrl);   // tail call
}

// fn j  args=1 vars=1 closure=0 cpool=0 bc=89B file=dil_widgets/src/widgets/SearchImage
// args: e
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_2a;
  if (!((undefined.thumbnail_crop_info == null))) goto L_58;
  undefined.thumbnail_crop_info;
  if (!((e == null))) goto L_37;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.thumbnailCropInfo;
}

// fn K  args=1 vars=1 closure=0 cpool=0 bc=89B file=dil_widgets/src/widgets/SearchImage
// args: e
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_2a;
  if (!((undefined.thumbnail_size == null))) goto L_58;
  undefined.thumbnail_size;
  if (!((e == null))) goto L_37;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.thumbnailSize;
}

// fn Y  args=1 vars=1 closure=1 cpool=0 bc=72B file=dil_widgets/src/widgets/SearchImage
// args: e
// closure: J
function {
  return J(e.thumbnail_url, e.thumbnailUrl);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=17B file=dil_widgets/src/widgets/SearchImage
// args: e
function {
  if (!(("string" == typeof e))) goto L_10;
  return (e.length > 0);
}

// fn J  args=1 vars=1 closure=0 cpool=1 bc=42B file=dil_widgets/src/widgets/SearchImage
// args: e
function {
  e = ...0;
  return ...0.find(function <atom:0>);   // tail call
}

// fn X  args=1 vars=1 closure=0 cpool=0 bc=89B file=dil_widgets/src/widgets/SearchImage
// args: e
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_2a;
  if (!((undefined.center_x_percent == null))) goto L_58;
  undefined.center_x_percent;
  if (!((e == null))) goto L_37;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.centerXPercent;
}

// fn Q  args=1 vars=1 closure=0 cpool=0 bc=89B file=dil_widgets/src/widgets/SearchImage
// args: e
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_2a;
  if (!((undefined.center_y_percent == null))) goto L_58;
  undefined.center_y_percent;
  if (!((e == null))) goto L_37;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.centerYPercent;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=158B file=dil_widgets/src/widgets/SearchImage
// args: e
// closure: this, x
function {
  if (!((e !== this.state.hovered))) goto L_9d;
  this.setStateAnimated({hovered: e}, x.IMAGE_HOVER_ANIMATION);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=89B file=dil_widgets/src/widgets/SearchImage
// locals: this, this.active_func, new.target, arguments
// closure: x, <class_fields_init>
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
  this.state = {};
  this.sourceGeneration = 0;
  this.handleHover = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=59B file=dil_widgets/src/widgets/SearchImage
// locals: this
function {
  this = this;
  null;
  this.context;
  this.bitmapContext = {imageLoadMetrics: undefined};
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=dil_widgets/src/widgets/SearchImage
// locals: this
function {
  this = this;
  if (!((this.context == null))) goto L_2b;
  this.context;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.imageLoadMetrics;
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=0 bc=322B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: t, i, o, r, this
// closure: $, ee
function {
  this = this;
  let r;
  let o;
  let i;
  let t;
  if (!((undefined === e))) goto L_15;
  return;
  t = $(e);
  i = ee(e);
  o = $(this.viewModel);
  r = ee(this.viewModel);
  if (!((t === o))) goto L_7b;
  if (((i === r))) goto L_141;
  this.sourceGeneration = (this.sourceGeneration ++);
  if (!((i == null))) goto L_de;
  i;
  if (!((r == null))) goto L_e9;
  r;
  if (!((t === o))) goto L_132;
  goto L_133;
  // [栈深重同步 4 -> 3]
  this.setState({thumbnailResult: undefined, fullResult: undefined});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=270B file=dil_widgets/src/widgets/SearchImage
// closure: e, c, te, d, this, t, r, M
function {
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", te.bitmapLayer);
  if (!(d)) goto L_ae;
  goto L_af;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0);
  this.renderBitmap(t, true, r, M);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=211B file=dil_widgets/src/widgets/SearchImage
// closure: e, v, te, this
function {
  e.beginRender(v, undefined);
  e.setAttributeStyle("style", te.overlay);
  e.renderNamedSlot("fallback", this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=206B file=dil_widgets/src/widgets/SearchImage
// closure: e, w, te, this
function {
  e.beginRender(w, undefined);
  e.setAttributeStyle("style", te.overlay);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=10 closure=15 cpool=3 bc=4623B file=dil_widgets/src/widgets/SearchImage
// locals: t, i, o, r, s, d, l, e, M, this
// closure: e, c, te, v, w, $, ee, g, C, a, y, b, V, n, h
function {
  this = this;
  let M;
  let l;
  let d;
  let s;
  let r;
  let o;
  let i;
  let t;
  t = $(this.viewModel);
  i = ee(this.viewModel);
  if (!((i == null))) goto L_76;
  i;
  o = t;
  if (!((undefined !== i))) goto L_90;
  if (!((undefined !== t))) goto L_90;
  r = (i !== t);
  if (!((false === this.state.thumbnailResult))) goto L_12b;
  if ((!r)) goto L_12b;
  s = (false === this.state.fullResult);
  if (!((true === this.state.fullResult))) goto L_1ec;
  if (!((this.context == null))) goto L_1ca;
  this.context;
  goto L_1eb;
  d = g.isDILAssetSourceAllowed(t, undefined.assetURLAuthorization);
  l = this.loadMetrics;
  if (!(l)) goto L_3ee;
  let e;
  if (!(r)) goto L_270;
  if (!((undefined !== this.state.thumbnailResult))) goto L_270;
  goto L_273;
  // [栈深重同步 1 -> 0]
  e = o;
  if (!((undefined === e))) goto L_2d1;
  l.sourceState = C.DILImageSourceState.Missing;
  goto L_3ed;
  // [栈深重同步 1 -> 0]
  if (!((this.context == null))) goto L_323;
  this.context;
  goto L_344;
  if (!(g.isDILAssetSourceAllowed(e, undefined.assetURLAuthorization))) goto L_39b;
  l.sourceState = C.DILImageSourceState.Ready;
  goto L_3ed;
  // [栈深重同步 1 -> 0]
  l.sourceState = C.DILImageSourceState.Blocked;
  C.DILImageSourceState.Blocked;
  if (!(s)) goto L_484;
  if (!(this.viewModel.hideOnFailure)) goto L_484;
  if (!(!this.viewModel.hasFallback)) goto L_484;
  return;
  M = this.sourceGeneration;
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", te.frame);
  e.setAttributeNumber("aspectRatio", y.resolveDILAspectRatio(this.viewModel.aspectRatio));
  e.setAttributeString("backgroundColor", b.resolveDILBackgroundColor(this.viewModel.background));
  if (!(this.viewModel.frame)) goto L_6c8;
  goto L_6c9;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", undefined);
  if (!(this.viewModel.frame)) goto L_73f;
  goto L_740;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  if (!((this.viewModel.width == null))) goto L_804;
  this.viewModel.width;
  if (!(this.viewModel.fillContainer)) goto L_803;
  goto L_804;
  // [栈深重同步 4 -> 3]
  e.setAttribute("width", undefined);
  if (!((this.viewModel.height == null))) goto L_8c8;
  this.viewModel.height;
  if (!(this.viewModel.fillContainer)) goto L_8c7;
  goto L_8c8;
  // [栈深重同步 4 -> 3]
  e.setAttribute("height", undefined);
  e.setAttribute("minWidth", this.viewModel.minWidth);
  e.setAttribute("minHeight", this.viewModel.minHeight);
  e.setAttribute("maxWidth", this.viewModel.maxWidth);
  e.setAttribute("maxHeight", this.viewModel.maxHeight);
  if (!((this.viewModel.radius == null))) goto L_b2b;
  this.viewModel.radius;
  e.setAttribute("borderRadius", y.resolveDILRadius("md"));
  if (!((l == null))) goto L_b64;
  l;
  goto L_b85;
  e.setAttributeFunction("onVisibilityChanged", undefined.setVisible);
  if (!(V.Device.isWeb())) goto L_c6a;
  if (!((true === this.viewModel.hoverZoom))) goto L_c6a;
  goto L_c6b;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onHover", undefined);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", te.accessibleImage);
  if (!((this.viewModel.alt == null))) goto L_dcb;
  this.viewModel.alt;
  if (!((this.viewModel.searchImage == null))) goto L_daa;
  this.viewModel.searchImage;
  goto L_dcb;
  e.setAttributeString("accessibilityLabel", undefined.title);
  if (!(s)) goto L_e4a;
  if (!(this.viewModel.hasFallback)) goto L_e4a;
  goto L_e4f;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "leaf");
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", te.firstLayer);
  if ((d)) goto L_f49;
  if (!(s)) goto L_f4e;
  if (!(this.viewModel.hasFallback)) goto L_f4e;
  goto L_f4f;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 1);
  this.renderBitmap(o, false, r, M);
  e.endRender();
  if (!(r)) goto L_1001;
  if (!((undefined !== this.state.thumbnailResult))) goto L_1001;
  function <atom:0>();
  e.endRender();
  if (!(s)) goto L_107c;
  if (!(this.viewModel.hasFallback)) goto L_107c;
  function <atom:0>();
  if (!(this.viewModel.hasOverlay)) goto L_10c8;
  function <atom:0>();
  if ((d)) goto L_1192;
  if (!((true === this.state.thumbnailResult))) goto L_1192;
  if (!((this.context == null))) goto L_1170;
  this.context;
  goto L_1191;
  if (!(g.isDILAssetSourceAllowed(o, undefined.assetURLAuthorization))) goto L_11e6;
  if (!((this.viewModel.renderLoadedOverlay == null))) goto L_11e3;
  this.viewModel.renderLoadedOverlay;
  this.viewModel;
  goto L_11e6;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=890B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: t
// closure: this, r, C, i, o
function {
  let t;
  if ((this.isDestroyed())) goto L_50;
  if (!((r !== this.sourceGeneration))) goto L_53;
  return;
  t = this.loadMetrics;
  if (!(e)) goto L_f1;
  if (!((t == null))) goto L_85;
  t;
  goto L_23f;
  goto L_23f;
  // [栈深重同步 1 -> 0]
  if ((i)) goto L_fa;
  if (!(!o)) goto L_229;
  if (!((t == null))) goto L_10b;
  t;
  goto L_23f;
  if (!((t.sourceState === C.DILImageSourceState.Blocked))) goto L_1df;
  goto L_224;
  // [栈深重同步 3 -> 2]
  goto L_23f;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_23f;
  t.fallbackUsed = true;
  true;
  if ((e)) goto L_24e;
  if ((i)) goto L_24e;
  if (!(!o)) goto L_2ef;
  if (!((this.viewModel.onAssetLoad == null))) goto L_2a1;
  this.viewModel.onAssetLoad;
  this.viewModel;
  goto L_2ef;
  // [栈深重同步 1 -> 2]
  if ((e)) goto L_2ec;
  <?>.call(undefined, (true === this.state.thumbnailResult));
  if ((this.isDestroyed())) goto L_379;
  if (((r !== this.sourceGeneration))) goto L_379;
  if (!(i)) goto L_36f;
  goto L_376;
  // [栈深重同步 3 -> 2]
  this.setState({thumbnailResult: e});
  return;
}

// fn <atom:0>  args=4 vars=5 closure=5 cpool=1 bc=3961B file=dil_widgets/src/widgets/SearchImage
// args: t, i, o, r
// locals: this
// closure: C, e, SearchImage, M, S
function {
  this = this;
  if (!(i)) goto L_36;
  goto L_3b;
  // [栈深重同步 5 -> 4]
  e.beginComponent(SearchImage, M, "thumbnail", undefined);
  if ((e.hasContext())) goto L_b4;
  e.setContext(this.bitmapContext);
  e.setViewModelProperty("limitToViewport", this.viewModel.limitToViewport);
  e.setViewModelProperty("alt", this.viewModel.alt);
  e.setViewModelProperty("obscured", this.viewModel.obscured);
  e.setViewModelProperty("aspectRatio", this.viewModel.aspectRatio);
  e.setViewModelProperty("autoSpacing", this.viewModel.autoSpacing);
  e.setViewModelProperty("background", this.viewModel.background);
  e.setViewModelProperty("fit", this.viewModel.fit);
  e.setViewModelProperty("flex", this.viewModel.flex);
  e.setViewModelProperty("flowGalleryContext", this.viewModel.flowGalleryContext);
  e.setViewModelProperty("galleryIndex", this.viewModel.galleryIndex);
  e.setViewModelProperty("hoverZoom", this.viewModel.hoverZoom);
  e.setViewModelProperty("frameHovered", this.state.hovered);
  e.setViewModelProperty("margin", this.viewModel.margin);
  e.setViewModelProperty("maxHeight", this.viewModel.maxHeight);
  e.setViewModelProperty("maxSize", this.viewModel.maxSize);
  e.setViewModelProperty("maxWidth", this.viewModel.maxWidth);
  e.setViewModelProperty("minHeight", this.viewModel.minHeight);
  e.setViewModelProperty("minSize", this.viewModel.minSize);
  e.setViewModelProperty("minWidth", this.viewModel.minWidth);
  e.setViewModelProperty("onClick", this.viewModel.onClick);
  e.setViewModelProperty("onClickAction", this.viewModel.onClickAction);
  e.setViewModelProperty("openInLightbox", this.viewModel.openInLightbox);
  e.setViewModelProperty("position", this.viewModel.position);
  e.setViewModelProperty("radius", this.viewModel.radius);
  e.setViewModelProperty("size", this.viewModel.size);
  e.setViewModelProperty("theme", this.viewModel.theme);
  null;
  this.viewModel.searchImage;
  e.setViewModelProperty("searchImage", {is_sensitive: false, content_url: t, contentUrl: null, thumbnail_url: null, thumbnailUrl: null});
  if (((undefined !== this.viewModel.height))) goto L_d5f;
  if (!(this.viewModel.fillContainer)) goto L_d68;
  goto L_d69;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("height", undefined);
  e.setViewModelProperty("frame", false);
  e.setViewModelProperty("hasFallback", false);
  e.setViewModelProperty("hasOverlay", false);
  e.setViewModelProperty("hideOnFailure", false);
  e.setViewModelProperty("trackImageLoad", false);
  e.setViewModelProperty("upgradeToFullRes", false);
  if (!(!i)) goto L_ef9;
  e.setViewModelProperty("useLoadingFrame", this.viewModel.useLoadingFrame);
  e.setViewModelProperty("onAssetLoad", S.createReusableCallback(function <atom:0>));
  e.endComponent();
  return;
}

// fn $  args=1 vars=2 closure=0 cpool=0 bc=136B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: t
function {
  let t;
  t = e.searchImage;
  if (!((t == null))) goto L_31;
  t;
  goto L_52;
  if ((undefined.content_url)) goto L_87;
  if (!((t == null))) goto L_61;
  t;
  goto L_82;
  if ((undefined.contentUrl)) goto L_87;
  return undefined;
}

// fn ee  args=1 vars=2 closure=0 cpool=0 bc=136B file=dil_widgets/src/widgets/SearchImage
// args: e
// locals: t
function {
  let t;
  t = e.searchImage;
  if (!((t == null))) goto L_31;
  t;
  goto L_52;
  if ((undefined.thumbnail_url)) goto L_87;
  if (!((t == null))) goto L_61;
  t;
  goto L_82;
  if ((undefined.thumbnailUrl)) goto L_87;
  return undefined;
}

// fn <atom:0>  args=3 vars=68 closure=0 cpool=42 bc=2503B file=dil_widgets/src/widgets/SearchImage
// args: require, module, exports
// locals: e, t, i, o, r, s, d, l, a, n, h, c, v, w, M, u, p, m, y, g, b, P, V, f, S, L, I, A, x, R, C, k, O, F, SearchImageCropFrame, <class_fields_init>, SearchImageCropFrame#1, SearchImage, <class_fields_init>#1, SearchImage#1, z, D, H, _, N, W, U, E, q, B, G, T, Z, j, K, Y, J, X, Q, ProgressiveSearchImage, <class_fields_init>#2, ProgressiveSearchImage#1, $, ee, te
function {
  z = function z;
  D = function D;
  H = function H;
  _ = function _;
  N = function N;
  W = function W;
  U = function U;
  E = function E;
  q = function q;
  B = function B;
  G = function G;
  T = function T;
  Z = function Z;
  j = function j;
  K = function K;
  Y = function Y;
  J = function J;
  X = function X;
  Q = function Q;
  $ = function $;
  ee = function ee;
  let te;
  let ProgressiveSearchImage#1;
  let SearchImage#1;
  let SearchImageCropFrame#1;
  let F;
  let O;
  let k;
  let C;
  let R;
  let x;
  let A;
  let I;
  let L;
  let S;
  let f;
  let V;
  let P;
  let b;
  let g;
  let y;
  let m;
  let p;
  let u;
  let M;
  let w;
  let v;
  let c;
  let h;
  let n;
  let a;
  let l;
  let d;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SearchImage = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "9bpOH8jUbFd7vPmG");
  i = e.makeComponentPrototype(undefined, "zo83VYkcUsppacx8");
  o = e.makeComponentPrototype(["radius", "none", "width", "100%"], "pxH9gkPK6W5Rb3-A");
  r = e.makeNodePrototype("view", undefined, "w42qKnGIDsZzb_gO");
  s = e.makeComponentPrototype(undefined, "ZcC1OtJ6RIRnuL7v");
  d = e.makeNodePrototype("view", undefined, "XbIIZ64xmCPatnv9");
  l = e.makeComponentPrototype(["name", "eye-off", "size", "lg", "color", "white"], "yNYNmAttMHdp-z3o");
  a = e.makeNodePrototype("view", undefined, "SUgwuvGs5ELrwueO");
  n = e.makeNodePrototype("view", undefined, "NGA85RszXeSFnryA");
  h = e.makeNodePrototype("view", undefined, "_YAE-mQia1rQ-6RZ");
  c = e.makeNodePrototype("view", undefined, "BJ6N26sso2s-ujDE");
  v = e.makeNodePrototype("view", undefined, "mWcxbkxLxKDsAwjS");
  w = e.makeNodePrototype("view", undefined, "wglygDM7YOlCs6aQ");
  M = e.makeComponentPrototype(["width", "100%"], "NUsejy-qtAIzfE9z");
  u = require("dil_core/src/DILPressFeedback");
  p = require("dil_renderer/src/DILUserInteraction");
  m = require("dil_core/src/DILComponent");
  y = require("dil_core/src/layout/DILLayout");
  g = require("dil_core/src/DILAssetURLAuthorization");
  b = require("dil_core/src/colors/DILColor");
  P = require("valdi_core/src/Component");
  V = require("valdi_core/src/Device");
  f = require("valdi_core/src/Style");
  S = require("valdi_core/src/utils/Callback");
  L = require("./Box");
  I = require("./Icon");
  A = require("../Strings");
  x = require("./Image");
  R = require("./ImagePresentation");
  C = require("../DILImageLoadMetrics");
  k = {width: 16, height: 9};
  O = {color: "alpha-06", size: 1};
  F = 2097152;
  let SearchImageCropFrame;
  let <class_fields_init>;
  class SearchImageCropFrame extends L.Box { ... }
  <proto:SearchImageCropFrame>.applyAdditionalContainerAttributes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SearchImageCropFrame>;
  SearchImageCropFrame = function <atom:0>;
  // close_loc <class_fields_init>
  SearchImageCropFrame#1 = function <atom:0>;
  let SearchImage;
  let <class_fields_init>#1;
  class SearchImage extends m.DILStatefulComponent { ... }
  <proto:SearchImage>.loadMetrics = function <atom:0>;
  <proto:SearchImage>.onCreate = function <atom:0>;
  <proto:SearchImage>.onDestroy = function <atom:0>;
  <proto:SearchImage>.onViewModelUpdate = function <atom:0>;
  <proto:SearchImage>.onRender = function <atom:0>;
  <proto:SearchImage>.onAssetLoad = function <atom:0>;
  <proto:SearchImage>.finishFailedLoad = function <atom:0>;
  <proto:SearchImage>.shouldHideFailedSource = function <atom:0>;
  <proto:SearchImage>.lightboxAction = function <atom:0>;
  <proto:SearchImage>.resolveSource = function <atom:0>;
  <proto:SearchImage>.renderReveal = function <atom:0>;
  <proto:SearchImage>.makeLightboxPayload = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:SearchImage>;
  SearchImage = function <atom:0>;
  // close_loc <class_fields_init>#1
  SearchImage#1 = function <atom:0>;
  exports.SearchImage = SearchImage#1;
  SearchImage#1.dilV2Properties = ["alt", "aspectRatio", "background", "bitmapBlendMode", "containOutsideAspectRatio", "contentCropFit", "fallback", "fit", "frame", "height", "hideOnFailure", "maxHeight", "maxWidth", "minHeight", "minWidth", "onError", "onLoad", "position", "preload", "radius", "searchImage", "upgradeToFullRes", "width"];
  // append([], 0, m.DIL_COMPONENT_PROPERTIES)
  [][m.DIL_COMPONENT_PROPERTIES] = "alt";
  [][("alt" ++)] = "aspectRatio";
  [][("aspectRatio" ++)] = "background";
  [][("background" ++)] = "fit";
  [][("fit" ++)] = "flex";
  [][("flex" ++)] = "flush";
  [][("flush" ++)] = "frame";
  [][("frame" ++)] = "galleryIndex";
  [][("galleryIndex" ++)] = "height";
  [][("height" ++)] = "hideOnFailure";
  [][("hideOnFailure" ++)] = "hoverZoom";
  [][("hoverZoom" ++)] = "margin";
  [][("margin" ++)] = "maxHeight";
  [][("maxHeight" ++)] = "maxSize";
  [][("maxSize" ++)] = "maxWidth";
  [][("maxWidth" ++)] = "minHeight";
  [][("minHeight" ++)] = "minSize";
  [][("minSize" ++)] = "minWidth";
  [][("minWidth" ++)] = "openInLightbox";
  [][("openInLightbox" ++)] = "onLoadAction";
  [][("onLoadAction" ++)] = "onErrorAction";
  [][("onErrorAction" ++)] = "position";
  [][("position" ++)] = "preload";
  [][("preload" ++)] = "radius";
  [][("radius" ++)] = "searchImage";
  [][("searchImage" ++)] = "size";
  [][("size" ++)] = "upgradeToFullRes";
  [][("upgradeToFullRes" ++)] = "width";
  ("width" ++);
  SearchImage#1.properties = [];
  let ProgressiveSearchImage;
  let <class_fields_init>#2;
  class ProgressiveSearchImage extends P.StatefulComponent { ... }
  <proto:ProgressiveSearchImage>.onCreate = function <atom:0>;
  <proto:ProgressiveSearchImage>.loadMetrics = function <atom:0>;
  <proto:ProgressiveSearchImage>.onViewModelUpdate = function <atom:0>;
  <proto:ProgressiveSearchImage>.onRender = function <atom:0>;
  <proto:ProgressiveSearchImage>.renderBitmap = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:ProgressiveSearchImage>;
  ProgressiveSearchImage = function <atom:0>;
  // close_loc <class_fields_init>#2
  ProgressiveSearchImage#1 = function <atom:0>;
  te = {reveal: new f.Style({width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.12)", alignItems: "center", justifyContent: "center", accessibilityCategory: "button", accessibilityNavigation: "leaf", accessibilityId: "dil.search-image.reveal"}), frame: new f.Style({position: "relative", slowClipping: true}), accessibleImage: new f.Style({width: "100%", height: "100%", touchEnabled: false, accessibilityCategory: "image"}), firstLayer: new f.Style({width: "100%", height: "100%", accessibilityNavigation: "ignored"}), bitmapLayer: new f.Style({position: "absolute", top: 0, bottom: 0, left: 0, right: 0, touchEnabled: false, accessibilityNavigation: "ignored"}), overlay: new f.Style({position: "absolute", top: 0, bottom: 0, left: 0, right: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/SearchImage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
