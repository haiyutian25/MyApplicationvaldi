// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_widgets/src/widgets/Image
// args: e
function {
  e.Pending = 0;
  e[0] = "Pending";
  e.Loaded = 1;
  e[1] = "Loaded";
  e.Failed = 2;
  e[2] = "Failed";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=150B file=dil_widgets/src/widgets/Image
// closure: this
function {
  if (!((this.pressRef.single() == null))) goto L_95;
  this.pressRef.single();
  return this.imagePressRef.single();
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=115B file=dil_widgets/src/widgets/Image
// closure: this, n
function {
  this.setState({revealAnimation: n.DILStreamingAnimation.Disabled});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=156B file=dil_widgets/src/widgets/Image
// args: e
// closure: this, exports
function {
  if (!((e !== this.state.hovered))) goto L_9b;
  this.setStateAnimated({hovered: e}, exports.IMAGE_HOVER_ANIMATION);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=3 bc=392B file=dil_widgets/src/widgets/Image
// locals: this, this.active_func, new.target, arguments
// closure: n, exports, <class_fields_init>, S, c, h
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
  this.state = {loadState: S.Pending, revealAnimation: n.DILStreamingAnimation.Disabled};
  this.pressRef = new c.ElementRef();
  this.imagePressRef = new c.ElementRef();
  this.pressFeedback = new h.DILPressFeedback(this, function <atom:0>);
  this.hasStreamingFrame = false;
  this.sourceAllowed = true;
  this.handleColorRevealComplete = function <atom:0>;
  this.handleHover = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=130B file=dil_widgets/src/widgets/Image
// locals: this
// closure: L
function {
  this = this;
  if (!(this.viewModel.trackImageLoad)) goto L_81;
  this.ownedLoadMetrics = new L.DILImageLoadMetrics("image");
  new L.DILImageLoadMetrics("image");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=dil_widgets/src/widgets/Image
// locals: this
function {
  this = this;
  if (!((this.ownedLoadMetrics == null))) goto L_2c;
  this.ownedLoadMetrics;
  goto L_50;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=109B file=dil_widgets/src/widgets/Image
// locals: this
function {
  this = this;
  if (!((this.ownedLoadMetrics == null))) goto L_6c;
  this.ownedLoadMetrics;
  return this.viewModel.imageLoadMetrics;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/Image
function {
  return false;
}

// fn <atom:0>  args=1 vars=8 closure=7 cpool=0 bc=1563B file=dil_widgets/src/widgets/Image
// args: e
// locals: t, i, o, s, a, this, <home_object>
// closure: y, R, x, l, n, L, S
function {
  <home_object> = <special_object 4>;
  this = this;
  let a;
  let s;
  let o;
  let i;
  let t;
  super["onViewModelUpdate"].call(this, e);
  t = y(this.viewModel);
  if (!((undefined !== e))) goto L_5c;
  if (!(R(y(e), t))) goto L_5c;
  return;
  if (!((this.context == null))) goto L_8d;
  this.context;
  goto L_ae;
  this.sourceAllowed = x(t, undefined.assetURLAuthorization);
  if (!((this.context == null))) goto L_109;
  this.context;
  goto L_12a;
  this.sourceURLRegexes = l.getDILAssetURLRegexes(undefined.assetURLAuthorization);
  if (!((this.viewModel.streamingAnimation == null))) goto L_1c2;
  this.viewModel.streamingAnimation;
  i = n.DILStreamingAnimation.Disabled;
  o = (i !== n.DILStreamingAnimation.Disabled);
  if ((this.hasStreamingFrame)) goto L_243;
  this.hasStreamingFrame = o;
  o;
  if (!((undefined !== e))) goto L_250;
  s = (undefined === y(e));
  a = this.loadMetrics;
  if (!(a)) goto L_406;
  if (!((undefined !== t))) goto L_3b7;
  if (!(("" !== t))) goto L_3b7;
  if ((("object" != typeof t))) goto L_2fe;
  if ((("path" in t))) goto L_2fe;
  if ((t.light)) goto L_2fe;
  if (!(t.dark)) goto L_3b7;
  if (!(this.sourceAllowed)) goto L_370;
  goto L_3fc;
  // [栈深重同步 2 -> 1]
  goto L_3fc;
  // [栈深重同步 2 -> 1]
  a.sourceState = L.DILImageSourceState.Missing;
  L.DILImageSourceState.Missing;
  this.sourceAspectRatio = undefined;
  if (!(o)) goto L_46b;
  goto L_4fb;
  // [栈深重同步 4 -> 3]
  if (!(s)) goto L_4b6;
  goto L_4fb;
  // [栈深重同步 4 -> 3]
  this.setState({loadState: S.Pending, revealAnimation: n.DILStreamingAnimation.Disabled});
  if ((this.sourceAllowed)) goto L_61a;
  if (!((this.ownedLoadMetrics == null))) goto L_559;
  this.ownedLoadMetrics;
  goto L_5c2;
  undefined.finish(L.DILImageLoadOutcome.Blocked);
  if (!((this.viewModel.onAssetLoad == null))) goto L_610;
  this.viewModel.onAssetLoad;
  this.viewModel;
  goto L_61a;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=dil_widgets/src/widgets/Image
// closure: e, this
function {
  e.renderNamedSlot("fallback", this);
  return;
}

// fn <atom:0>  args=0 vars=23 closure=12 cpool=1 bc=4044B file=dil_widgets/src/widgets/Image
// locals: i, o, s, a, r, d, n, l, h, c, u, g, p, w, b, A, M, L, f, D, R, i#1, this
// closure: e, y, S, v, N, C, F, m, I, k, t, O
function {
  this = this;
  let R;
  let D;
  let f;
  let L;
  let M;
  let A;
  let b;
  let w;
  let p;
  let g;
  let u;
  let c;
  let h;
  let l;
  let n;
  let d;
  let r;
  let a;
  let s;
  let o;
  let i;
  i = y(this.viewModel);
  o = this.sourceAllowed;
  if ((!o)) goto L_fb;
  s = (this.state.loadState === S.Failed);
  if (!((true === this.viewModel.hideOnFailure))) goto L_194;
  if (!(s)) goto L_194;
  if (!((true !== this.viewModel.hasFallback))) goto L_194;
  return;
  if (!((this.viewModel.size == null))) goto L_22b;
  this.viewModel.size;
  if (!(this.viewModel.fillContainer)) goto L_22a;
  goto L_22b;
  // [栈深重同步 1 -> 0]
  a = undefined;
  if (!((this.viewModel.width == null))) goto L_278;
  this.viewModel.width;
  r = a;
  if (!((this.viewModel.height == null))) goto L_2c6;
  this.viewModel.height;
  d = a;
  n = v.resolveDILAspectRatio(this.viewModel.aspectRatio);
  if (!((this.viewModel.radius == null))) goto L_3a5;
  this.viewModel.radius;
  l = v.resolveDILRadius("md");
  h = v.resolveDILFlex(this.viewModel.flex);
  if (!(this.usesNativeImageDefaults)) goto L_43d;
  goto L_44f;
  // [栈深重同步 1 -> 0]
  if (!((d == null))) goto L_44f;
  d;
  c = N(r, n);
  if (!((this.viewModel.maxHeight == null))) goto L_4de;
  this.viewModel.maxHeight;
  u = this.viewModel.maxSize;
  if (!((this.viewModel.maxWidth == null))) goto L_56d;
  this.viewModel.maxWidth;
  g = this.viewModel.maxSize;
  p = this.viewModel.minHeight;
  w = this.viewModel.minWidth;
  if (!(this.usesNativeImageDefaults)) goto L_625;
  goto L_687;
  // [栈深重同步 1 -> 0]
  if (!((r == null))) goto L_687;
  r;
  if (!((C(c, n) == null))) goto L_687;
  C(c, n);
  b = F(this.viewModel.aspectRatio, c);
  null;
  this.baseViewAttributes;
  if (!(this.viewModel.frame)) goto L_778;
  goto L_779;
  // [栈深重同步 2 -> 1]
  if (!(this.viewModel.frame)) goto L_7c7;
  goto L_7c8;
  // [栈深重同步 2 -> 1]
  if (!((this.viewModel.minSize == null))) goto L_84a;
  this.viewModel.minSize;
  if (!((h == null))) goto L_829;
  h;
  goto L_84a;
  if (!((h == null))) goto L_85a;
  h;
  goto L_87b;
  if (!((h == null))) goto L_88b;
  h;
  goto L_8ac;
  if (!(m.Device.isWeb())) goto L_9da;
  if (!((true === this.viewModel.hoverZoom))) goto L_9da;
  goto L_9db;
  // [栈深重同步 2 -> 1]
  if (!((this.loadMetrics == null))) goto L_a0b;
  this.loadMetrics;
  goto L_a2c;
  A = {accessibilityLabel: this.viewModel.alt, aspectRatio: n, backgroundColor: this.imageBackground, borderColor: undefined, borderWidth: undefined, borderRadius: l, flexBasis: undefined.basis, flexGrow: undefined.grow, flexShrink: undefined.shrink, height: c, maxHeight: u, maxWidth: g, minHeight: p, minWidth: w, onLayout: this.viewModel.onLayout, onHover: undefined, onVisibilityChanged: undefined.setVisible, width: b};
  I.DIL_MARGIN_ATTRIBUTES.apply(this.viewModel, A);
  this.pressFeedback.applyAttributes(A, (undefined !== this.onTap));
  if (!(o)) goto L_b28;
  goto L_b29;
  // [栈深重同步 1 -> 0]
  M = undefined;
  L = this.usesLoadingFrame;
  if (!(s)) goto L_b9e;
  f = (true === this.viewModel.hasFallback);
  D = (true === this.viewModel.hasOverlay);
  R = this.viewModel.renderLoadedOverlay;
  if ((L)) goto L_d32;
  if ((f)) goto L_d32;
  if ((D)) goto L_d32;
  if ((this.viewModel.contentCrop)) goto L_d32;
  if (!(m.Device.isWeb())) goto L_d2b;
  if (((true === this.viewModel.hoverZoom))) goto L_d32;
  if (!(R)) goto L_f9c;
  let i#1;
  if (!(R)) goto L_d65;
  goto L_d66;
  // [栈深重同步 1 -> 0]
  i#1 = undefined;
  if (!(R)) goto L_d8e;
  A.onTap = undefined;
  A.accessibilityNavigation = "passthrough";
  "passthrough";
  e.beginRender(t, undefined);
  e.setAttributeRef(this.pressRef);
  e.setAttributeStyle("style", O.frame);
  e.setAttributes(A);
  if (!(f)) goto L_e8c;
  goto L_ec5;
  // [栈深重同步 1 -> 0]
  if (!(L)) goto L_ebf;
  this.renderFrameContent(A, M, o, i#1);
  if (!(D)) goto L_ef3;
  this.renderOverlay();
  if (!(o)) goto L_f72;
  if (!((this.state.loadState === S.Loaded))) goto L_f72;
  if (!((R == null))) goto L_f71;
  R;
  goto L_f72;
  undefined();
  e.endRender();
  return;
  this.renderImageElement(A, M, false, undefined);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=9 cpool=0 bc=1632B file=dil_widgets/src/widgets/Image
// args: t, a, r, d
// locals: i, this
// closure: S, e, i, O, A, o, n, s, H
function {
  this = this;
  if (!(r)) goto L_25c;
  if (!((this.state.loadState === S.Pending))) goto L_25c;
  e.beginRender(i, "loading");
  e.setAttributeStyle("style", O.loadingSurface);
  e.beginComponent(A.LoadingBlock, o, undefined, undefined);
  if (!((this.state.revealAnimation === n.DILStreamingAnimation.Neutral))) goto L_204;
  goto L_209;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("background", "color-background-info-surface");
  e.endComponent();
  e.endRender();
  if (((undefined !== a))) goto L_266;
  if (!(!r)) goto L_65f;
  let i;
  i = this.viewModel.contentCrop;
  if (!(i)) goto L_624;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", O.crop);
  e.setAttributeString("left", "".concat(i.viewport.left, "%"));
  e.setAttributeString("top", "".concat(i.viewport.top, "%"));
  e.setAttributeString("width", "".concat(i.viewport.width, "%"));
  e.setAttributeString("height", "".concat(i.viewport.height, "%"));
  this.renderImageElement({onTap: d}, a, true, i.image);
  goto L_65e;
  // [栈深重同步 1 -> 0]
  null;
  H(t);
  this.renderImageElement({onTap: d}, a, true, undefined);
  return;
}

// fn <atom:0>  args=4 vars=13 closure=11 cpool=1 bc=4269B file=dil_widgets/src/widgets/Image
// args: t, i, o, s
// locals: d, l, h, c, u, v, g, p, this
// closure: P, O, m, S, e, a, D, n, b, f, r
function {
  this = this;
  let p;
  let g;
  let v;
  let u;
  let c;
  let h;
  let l;
  let d;
  d = this.viewModel.containOutsideAspectRatio;
  l = this.sourceAspectRatio;
  if (!((undefined !== d))) goto L_ea;
  if (!((undefined !== l))) goto L_ea;
  if (((l <= d.min))) goto L_ea;
  h = (l >= d.max);
  if (!(s)) goto L_f5;
  goto L_16a;
  // [栈深重同步 1 -> 0]
  if (!(h)) goto L_102;
  goto L_146;
  // [栈深重同步 2 -> 1]
  c = P(this.viewModel.fit, this.usesNativeImageDefaults);
  if (!((this.viewModel.position == null))) goto L_1e1;
  this.viewModel.position;
  if (!(this.usesNativeImageDefaults)) goto L_1dc;
  goto L_1e1;
  // [栈深重同步 1 -> 0]
  u = "center";
  if (!(("darken" === this.viewModel.bitmapBlendMode))) goto L_254;
  goto L_255;
  // [栈深重同步 1 -> 0]
  v = undefined;
  if (!(s)) goto L_281;
  goto L_31f;
  // [栈深重同步 1 -> 0]
  if (!(this.usesNativeImageDefaults)) goto L_2d2;
  if (!(o)) goto L_2cf;
  goto L_31f;
  // [栈深重同步 1 -> 0]
  goto L_31f;
  // [栈深重同步 1 -> 0]
  if (!(o)) goto L_2fb;
  goto L_31f;
  // [栈深重同步 1 -> 0]
  g = O.image;
  if (!(o)) goto L_4bc;
  if (!(m.Device.isWeb())) goto L_4bc;
  if (!((true === this.viewModel.hoverZoom))) goto L_4bc;
  if (!((this.viewModel.frameHovered == null))) goto L_44d;
  this.viewModel.frameHovered;
  if (!(this.state.hovered)) goto L_4bc;
  if (!((this.state.loadState === S.Loaded))) goto L_4bc;
  goto L_4bd;
  // [栈深重同步 1 -> 0]
  p = undefined;
  e.beginRender(a, "image");
  if (!(o)) goto L_519;
  goto L_53c;
  // [栈深重同步 3 -> 2]
  e.setAttributeRef(this.imagePressRef);
  e.setAttributeStyle("style", g);
  e.setAttributes(t);
  if (!(s)) goto L_613;
  goto L_614;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("left", undefined);
  if (!(s)) goto L_692;
  goto L_693;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("top", undefined);
  if (!(s)) goto L_711;
  goto L_733;
  // [栈深重同步 4 -> 3]
  e.setAttribute("width", t.width);
  if (!(s)) goto L_7b1;
  goto L_7d3;
  // [栈深重同步 4 -> 3]
  e.setAttribute("height", t.height);
  if (!(o)) goto L_806;
  goto L_828;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onVisibilityChanged", t.onVisibilityChanged);
  e.setAttribute("limitToViewport", this.viewModel.limitToViewport);
  e.setAttribute("allowedUrlRegexes", this.sourceURLRegexes);
  e.setAttribute("src", i);
  if (!(this.viewModel.obscured)) goto L_98f;
  goto L_990;
  // [栈深重同步 4 -> 3]
  e.setAttribute("filter", undefined);
  e.setAttributeString("bitmapDarkenColor", v);
  e.setAttributeNumber("scaleX", p);
  e.setAttributeNumber("scaleY", p);
  e.setAttributeString("objectFit", c);
  e.setAttributeString("objectPosition", u);
  e.setAttributeFunction("onAssetLoad", this.onAssetLoad);
  e.setAttributeFunction("onImageDecoded", this.onImageDecoded);
  e.endRender();
  if (!((true !== this.viewModel.obscured))) goto L_10ac;
  if (!((this.context == null))) goto L_bc7;
  this.context;
  goto L_be8;
  if (((true === undefined.enhancedStreamingAnimationsEnabled))) goto L_c7a;
  if (!((this.state.revealAnimation === n.DILStreamingAnimation.Neutral))) goto L_10ac;
  if (!(o)) goto L_10ac;
  if (!((this.state.loadState === S.Loaded))) goto L_10ac;
  if (!((this.state.revealAnimation !== n.DILStreamingAnimation.Disabled))) goto L_10ac;
  if (!(b.ImageFilters.supportsNormalizedColorMatrixBias())) goto L_10ac;
  if (!((this.context == null))) goto L_e04;
  this.context;
  goto L_e25;
  if (!((true !== undefined.disableStreamingAnimations))) goto L_10ac;
  if (!((undefined !== i))) goto L_10ac;
  e.beginComponent(f.DILImageColorReveal, r, undefined, undefined);
  e.setViewModelProperty("streamingAnimation", this.state.revealAnimation);
  e.setViewModelProperty("source", i);
  e.setViewModelProperty("allowedUrlRegexes", this.sourceURLRegexes);
  e.setViewModelProperty("onComplete", this.handleColorRevealComplete);
  e.setViewModelProperty("objectFit", c);
  e.setViewModelProperty("objectPosition", u);
  e.setViewModelProperty("placement", s);
  e.setViewModelProperty("bitmapDarkenColor", v);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=225B file=dil_widgets/src/widgets/Image
// locals: this
// closure: M, g
function {
  this = this;
  if ((("darken" !== this.viewModel.bitmapBlendMode))) goto L_74;
  if (!(M.supportsBitmapDarkenColor())) goto L_df;
  return g.resolveDILBackgroundColor(this.viewModel.background);
  return undefined;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=208B file=dil_widgets/src/widgets/Image
// locals: this
// closure: e, d, O
function {
  this = this;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", O.overlay);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=0 bc=360B file=dil_widgets/src/widgets/Image
// args: t, i
// locals: o
// closure: this, R, e, y
function {
  let o;
  if ((this.isDestroyed())) goto L_56;
  if (!(!R(e, y(this.viewModel)))) goto L_59;
  return;
  if (!(Number.isFinite(t))) goto L_c0;
  if (!(Number.isFinite(i))) goto L_c0;
  if (!((t > 0))) goto L_c0;
  if (!((i > 0))) goto L_c0;
  goto L_c1;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!((o !== this.sourceAspectRatio))) goto L_167;
  this.sourceAspectRatio = o;
  if (!((undefined !== this.viewModel.containOutsideAspectRatio))) goto L_167;
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=1 bc=187B file=dil_widgets/src/widgets/Image
// locals: e, this
// closure: R, y
function {
  this = this;
  let e;
  e = y(this.viewModel);
  if (!((undefined !== this.cachedDecodeHandler))) goto L_79;
  if ((R(this.cachedDecodeHandlerSource, e))) goto L_97;
  this.cachedDecodeHandlerSource = e;
  this.cachedDecodeHandler = function <atom:0>;
  function <atom:0>;
  return this.cachedDecodeHandler;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=111B file=dil_widgets/src/widgets/Image
// locals: this
function {
  this = this;
  if (((true === this.viewModel.useLoadingFrame))) goto L_6e;
  return this.hasStreamingFrame;
}

// fn <atom:0>  args=2 vars=2 closure=6 cpool=0 bc=519B file=dil_widgets/src/widgets/Image
// args: t, i
// closure: this, R, e, y, S, L
function {
  if (!(!this.isDestroyed())) goto L_206;
  if (!(R(e, y(this.viewModel)))) goto L_206;
  if (!(t)) goto L_a9;
  goto L_cd;
  // [栈深重同步 4 -> 3]
  this.setState({loadState: S.Failed});
  if (!((this.ownedLoadMetrics == null))) goto L_101;
  this.ownedLoadMetrics;
  goto L_1b4;
  if (!(t)) goto L_16c;
  goto L_1b1;
  // [栈深重同步 3 -> 2]
  undefined.finish(L.DILImageLoadOutcome.LoadError);
  if (!((this.viewModel.onAssetLoad == null))) goto L_201;
  this.viewModel.onAssetLoad;
  this.viewModel;
  goto L_206;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=1 bc=712B file=dil_widgets/src/widgets/Image
// locals: e, this
// closure: R, y, S, L, m
function {
  this = this;
  let e;
  if ((this.usesLoadingFrame)) goto L_1cb;
  if (((true === this.viewModel.hideOnFailure))) goto L_1cb;
  if (((true === this.viewModel.hasFallback))) goto L_1cb;
  if (!(m.Device.isWeb())) goto L_15a;
  if (((true === this.viewModel.hoverZoom))) goto L_1cb;
  if (((undefined !== this.viewModel.renderLoadedOverlay))) goto L_1cb;
  if (!(!(undefined !== this.loadMetrics))) goto L_212;
  return this.viewModel.onAssetLoad;
  e = y(this.viewModel);
  if (!((undefined !== this.cachedLoadHandler))) goto L_286;
  if ((R(this.cachedLoadHandlerSource, e))) goto L_2a4;
  this.cachedLoadHandlerSource = e;
  this.cachedLoadHandler = function <atom:0>;
  function <atom:0>;
  return this.cachedLoadHandler;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/Image
function {
  return true;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Image
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

// fn y  args=1 vars=1 closure=0 cpool=0 bc=233B file=dil_widgets/src/widgets/Image
// args: e
function {
  if (!((undefined !== e.src))) goto L_49;
  return e.src;
  if (((undefined !== e.light))) goto L_95;
  if (!((undefined !== e.dark))) goto L_e7;
  return {light: e.light, dark: e.dark};
  return undefined;
}

// fn R  args=2 vars=2 closure=0 cpool=0 bc=233B file=dil_widgets/src/widgets/Image
// args: e, t
function {
  if (((e === t))) goto L_e8;
  if (!((undefined !== e))) goto L_e8;
  if (!((undefined !== t))) goto L_e8;
  if (!(("string" != typeof e))) goto L_e8;
  if (!(("string" != typeof t))) goto L_e8;
  if (!(!("path" in e))) goto L_e8;
  if (!(!("path" in t))) goto L_e8;
  if (!((e.light === t.light))) goto L_e8;
  return (e.dark === t.dark);
}

// fn x  args=2 vars=2 closure=1 cpool=0 bc=217B file=dil_widgets/src/widgets/Image
// args: e, t
// closure: l
function {
  if (((undefined === e))) goto L_1a;
  if ((("string" == typeof e))) goto L_1a;
  if (!(("path" in e))) goto L_44;
  return l.isDILAssetSourceAllowed(e, t);
  if (!(l.isDILAssetSourceAllowed(e.light, t))) goto L_d8;
  return l.isDILAssetSourceAllowed(e.dark, t);
}

// fn k  args=1 vars=1 closure=1 cpool=0 bc=300B file=dil_widgets/src/widgets/Image
// args: e
// closure: p
function {
  if (!(e)) goto L_12b;
  if ((("string" == typeof e))) goto L_19;
  if (!(("path" in e))) goto L_1d;
  return e;
  if (!((undefined !== e.light))) goto L_e1;
  if (!((undefined !== e.dark))) goto L_e1;
  return p.makeThemableAsset({light: e.light, dark: e.dark});
  if (!((e.light == null))) goto L_12a;
  e.light;
  return e.dark;
  return;
}

// fn F  args=2 vars=2 closure=0 cpool=0 bc=17B file=dil_widgets/src/widgets/Image
// args: e, t
function {
  if (!((undefined !== e))) goto L_10;
  if (!((undefined === t))) goto L_10;
  return "100%";
  return;
}

// fn C  args=2 vars=2 closure=0 cpool=0 bc=18B file=dil_widgets/src/widgets/Image
// args: e, t
function {
  if (!((undefined === t))) goto L_11;
  if (!(("number" == typeof e))) goto L_11;
  return e;
  return;
}

// fn N  args=2 vars=2 closure=0 cpool=0 bc=18B file=dil_widgets/src/widgets/Image
// args: e, t
function {
  if (!((undefined === t))) goto L_11;
  if (!(("number" == typeof e))) goto L_11;
  return e;
  return;
}

// fn P  args=2 vars=2 closure=0 cpool=0 bc=32B file=dil_widgets/src/widgets/Image
// args: e, t
function {
  if (!(("scale-down" === e))) goto L_f;
  return "contain";
  if (!((e == null))) goto L_1f;
  e;
  if (!(t)) goto L_1a;
  return undefined;
  return "cover";
}

// fn H  args=1 vars=1 closure=0 cpool=0 bc=275B file=dil_widgets/src/widgets/Image
// args: e
function {
  return {aspectRatio: e.aspectRatio, height: e.height, maxHeight: e.maxHeight, maxWidth: e.maxWidth, minHeight: e.minHeight, minWidth: e.minWidth, width: e.width};
}

// fn <atom:0>  args=3 vars=45 closure=0 cpool=26 bc=1988B file=dil_widgets/src/widgets/Image
// args: require, module, exports
// locals: e, t, i, o, s, a, r, d, n, l, h, c, m, u, v, g, p, w, b, I, A, M, L, f, S, Image, <class_fields_init>, Image#1, D, NativeImage, <class_fields_init>#1, NativeImage#1, y, R, x, k, F, C, N, P, H, O
function {
  y = function y;
  R = function R;
  x = function x;
  k = function k;
  F = function F;
  C = function C;
  N = function N;
  P = function P;
  H = function H;
  let O;
  let NativeImage#1;
  let D;
  let Image#1;
  let f;
  let L;
  let M;
  let A;
  let I;
  let b;
  let w;
  let p;
  let g;
  let v;
  let u;
  let m;
  let c;
  let h;
  let l;
  let n;
  let d;
  let r;
  let a;
  let s;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IMAGE_HOVER_ANIMATION = undefined;
  exports.Image = undefined;
  exports.NativeImage = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "391rCOhumYXGE9gx");
  i = e.makeNodePrototype("view", undefined, "xl8AT6FvhuYt_i9u");
  o = e.makeComponentPrototype(["duration", 1000, "height", "100%", "radius", "none", "width", "100%"], "wqNOp2-2b6KAgJh2");
  s = e.makeNodePrototype("view", undefined, "mXWlwyCDways5Oow");
  a = e.makeNodePrototype("image", undefined, "c5Iw1H7Rks9awBiI");
  r = e.makeComponentPrototype(undefined, "EP905tDpHQQyf2gE");
  d = e.makeNodePrototype("view", undefined, "BDFdovD0Q0V7lgld");
  n = require("dil_renderer/src/DILRenderer");
  l = require("dil_core/src/DILAssetURLAuthorization");
  h = require("dil_core/src/DILPressFeedback");
  c = require("valdi_core/src/ElementRef");
  m = require("valdi_core/src/Device");
  u = require("dil_core/src/DILComponent");
  v = require("dil_core/src/layout/DILLayout");
  g = require("dil_core/src/colors/DILColor");
  p = require("valdi_core/src/Asset");
  w = require("valdi_core/src/Style");
  b = require("valdi_core/src/utils/ImageFilter");
  I = require("./attributes/DILSpacingAttributes");
  A = require("./LoadingBlock");
  M = require("./ImageCapabilities");
  L = require("../DILImageLoadMetrics");
  f = require("./DILImageColorReveal");
  exports.IMAGE_HOVER_ANIMATION = {stiffness: 700, damping: 82};
  if ((S)) goto L_336;
  S = {};
  function <atom:0>({});
  let Image;
  let <class_fields_init>;
  class Image extends u.DILStatefulComponent { ... }
  <proto:Image>.onCreate = function <atom:0>;
  <proto:Image>.onDestroy = function <atom:0>;
  <proto:Image>.loadMetrics = function <atom:0>;
  <proto:Image>.usesNativeImageDefaults = function <atom:0>;
  <proto:Image>.onViewModelUpdate = function <atom:0>;
  <proto:Image>.onRender = function <atom:0>;
  <proto:Image>.renderFrameContent = function <atom:0>;
  <proto:Image>.renderImageElement = function <atom:0>;
  <proto:Image>.imageBackground = function <atom:0>;
  <proto:Image>.renderOverlay = function <atom:0>;
  <proto:Image>.onImageDecoded = function <atom:0>;
  <proto:Image>.usesLoadingFrame = function <atom:0>;
  <proto:Image>.onAssetLoad = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Image>;
  Image = function <atom:0>;
  // close_loc <class_fields_init>
  Image#1 = function <atom:0>;
  exports.Image = Image#1;
  Image#1.usesDILParentFlexDirection = true;
  Image#1.dilV2Properties = ["alt", "aspectRatio", "containOutsideAspectRatio", "fallback", "fit", "frame", "height", "hideOnFailure", "maxHeight", "maxWidth", "minHeight", "minWidth", "position", "radius", "size", "src", "width"];
  // append([], 0, u.DIL_COMPONENT_PROPERTIES)
  [][u.DIL_COMPONENT_PROPERTIES] = "alt";
  [][("alt" ++)] = "aspectRatio";
  [][("aspectRatio" ++)] = "background";
  [][("background" ++)] = "fit";
  [][("fit" ++)] = "flex";
  [][("flex" ++)] = "frame";
  [][("frame" ++)] = "height";
  [][("height" ++)] = "hideOnFailure";
  [][("hideOnFailure" ++)] = "margin";
  [][("margin" ++)] = "maxHeight";
  [][("maxHeight" ++)] = "maxSize";
  [][("maxSize" ++)] = "maxWidth";
  [][("maxWidth" ++)] = "minHeight";
  [][("minHeight" ++)] = "minSize";
  [][("minSize" ++)] = "minWidth";
  [][("minWidth" ++)] = "position";
  [][("position" ++)] = "radius";
  [][("radius" ++)] = "size";
  [][("size" ++)] = "src";
  [][("src" ++)] = "width";
  ("width" ++);
  Image#1.properties = [];
  D = b.ImageFilters.blur(20);
  let NativeImage;
  let <class_fields_init>#1;
  class NativeImage extends Image#1 { ... }
  <proto:NativeImage>.usesNativeImageDefaults = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:NativeImage>;
  NativeImage = function <atom:0>;
  // close_loc <class_fields_init>#1
  NativeImage#1 = function <atom:0>;
  exports.NativeImage = NativeImage#1;
  O = {crop: new w.Style({position: "absolute", slowClipping: true, zIndex: 1}), positionedImage: new w.Style({position: "absolute"}), image: new w.Style({flexShrink: 0}), framedImage: new w.Style({position: "relative", zIndex: 1}), framedLegacyImage: new w.Style({flexShrink: 0, position: "relative", zIndex: 1}), frame: new w.Style({position: "relative", slowClipping: true}), loadingSurface: new w.Style({bottom: 0, left: 0, position: "absolute", right: 0, top: 0, touchEnabled: false, zIndex: 0}), overlay: new w.Style({bottom: 0, left: 0, position: "absolute", right: 0, top: 0, zIndex: 2})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Image
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
