// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=170B file=dil_widgets/src/webview/WebView
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
  this.loaded = false;
  this.loadedInterceptsExternalLinks = false;
  this.pendingLoadId = 0;
  this.pendingLoaded = false;
  this.pendingTransitionStarted = false;
  this.pendingContainerRef = new c.ElementRef();
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=274B file=dil_widgets/src/webview/WebView
// locals: e, this
// closure: C, L
function {
  this = this;
  let e;
  e = C();
  if (!((undefined !== e))) goto L_96;
  this.controller = e;
  e.setListener(this.createWebViewListener(e));
  goto L_111;
  // [栈深重同步 1 -> 0]
  if ((this.isAvailable())) goto L_111;
  if (!((this.viewModel.onLoadFailed == null))) goto L_10b;
  this.viewModel.onLoadFailed;
  this.viewModel;
  goto L_111;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=1107B file=dil_widgets/src/webview/WebView
// args: e
// locals: this
function {
  this = this;
  if (!((undefined === this.viewModel.document))) goto L_42d;
  if (!((e == null))) goto L_56;
  e;
  goto L_77;
  if (!((undefined === undefined.document))) goto L_42d;
  if (!((e == null))) goto L_86;
  e;
  goto L_a7;
  if (((undefined.baseUrl !== this.viewModel.baseUrl))) goto L_2c0;
  if (!((e == null))) goto L_fb;
  e;
  goto L_11c;
  if (((undefined.html !== this.viewModel.html))) goto L_2c0;
  if (!((e == null))) goto L_170;
  e;
  goto L_191;
  if (((undefined.url !== this.viewModel.url))) goto L_2c0;
  if (!((e == null))) goto L_1e5;
  e;
  goto L_206;
  if (((undefined.allowsFullscreenContent !== this.viewModel.allowsFullscreenContent))) goto L_2c0;
  if (!((e == null))) goto L_258;
  e;
  goto L_279;
  if (!(((undefined !== undefined.onOpenExternalUrl) != (undefined !== this.viewModel.onOpenExternalUrl)))) goto L_389;
  if (!((undefined !== e))) goto L_361;
  if (!((true === this.viewModel.reloadCrossfade))) goto L_361;
  if (!(this.loaded)) goto L_361;
  goto L_452;
  // [栈深重同步 1 -> 0]
  goto L_452;
  // [栈深重同步 1 -> 0]
  if (!((e == null))) goto L_392;
  e;
  goto L_3b3;
  if (!((undefined.postLoadJavaScript !== this.viewModel.postLoadJavaScript))) goto L_452;
  this.loadedPostLoadJavaScript = undefined;
  goto L_452;
  // [栈深重同步 1 -> 0]
  this.loadContent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=290B file=dil_widgets/src/webview/WebView
// locals: this
function {
  this = this;
  if (!((this.documentLoader == null))) goto L_2c;
  this.documentLoader;
  goto L_50;
  undefined.dispose();
  this.disposePendingController();
  if (!((this.controller == null))) goto L_a1;
  this.controller;
  goto L_c6;
  undefined.setListener(undefined);
  if (!((this.controller == null))) goto L_f1;
  this.controller;
  goto L_115;
  undefined.dispose();
  this.controller = undefined;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=296B file=dil_widgets/src/webview/WebView
// args: e
// locals: t, this
// closure: h, S
function {
  this = this;
  let t;
  if (!((undefined !== this.viewModel.document))) goto L_4d;
  return;
  t = this.controller;
  if (!((undefined !== t))) goto L_127;
  if (!(h.isVersionAtLeast(56))) goto L_cf;
  goto L_127;
  // [栈深重同步 1 -> 0]
  t.evaluateJavaScript("window.postMessage(".concat(S(e), ", '*');"));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=dil_widgets/src/webview/WebView
// locals: this
function {
  this = this;
  return (undefined !== this.controller);
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=1549B file=dil_widgets/src/webview/WebView
// locals: this
// closure: t, i, b
function {
  this = this;
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", b.root);
  t.setAttributeString("accessibilityCategory", this.viewModel.accessibilityCategory);
  t.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  t.setAttributeNumber("aspectRatio", this.viewModel.aspectRatio);
  t.setAttribute("flexBasis", this.viewModel.flexBasis);
  t.setAttributeNumber("flexGrow", this.viewModel.flexGrow);
  t.setAttributeNumber("flexShrink", this.viewModel.flexShrink);
  t.setAttribute("height", this.viewModel.height);
  t.setAttribute("maxHeight", this.viewModel.maxHeight);
  t.setAttribute("maxWidth", this.viewModel.maxWidth);
  t.setAttribute("minHeight", this.viewModel.minHeight);
  t.setAttribute("minWidth", this.viewModel.minWidth);
  t.setAttribute("width", this.viewModel.width);
  this.renderWebViewContent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=0 bc=1234B file=dil_widgets/src/webview/WebView
// locals: this
// closure: exports, t, o, b, n, L, s, d, l
function {
  this = this;
  if (!(!exports.WEB_VIEW_AVAILABLE)) goto L_1a5;
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", b.fallback);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", b.fallbackLabel);
  t.setAttributeString("value", L);
  t.endRender();
  t.endRender();
  return;
  if (!((undefined !== this.controller))) goto L_2c3;
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", b.webView);
  t.setAttribute("controller", this.controller);
  t.endRender();
  if (!((undefined !== this.pendingController))) goto L_4d1;
  t.beginRender(d, undefined);
  t.setAttributeRef(this.pendingContainerRef);
  t.setAttributeStyle("style", b.pendingContainer);
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", b.webView);
  t.setAttribute("controller", this.pendingController);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=0 bc=3537B file=dil_widgets/src/webview/WebView
// locals: e, t, i, this
// closure: exports, C, h, u, A
function {
  this = this;
  let i;
  let t;
  let e;
  this.disposePendingController();
  e = this.viewModel.document;
  if (!((undefined === e))) goto L_7f;
  goto L_d2;
  // [栈深重同步 1 -> 0]
  if (!(exports.WEB_VIEW_DOCUMENT_AVAILABLE)) goto L_cd;
  goto L_d2;
  // [栈深重同步 1 -> 0]
  t = "Local document preview is not available in this runtime.";
  if (!((undefined !== t))) goto L_293;
  if (!((this.documentLoader == null))) goto L_107;
  this.documentLoader;
  goto L_12b;
  undefined.dispose();
  this.documentLoader = undefined;
  this.loadedDocument = undefined;
  if (!((this.controller == null))) goto L_16c;
  this.controller;
  goto L_191;
  undefined.setListener(undefined);
  if (!((this.controller == null))) goto L_1bc;
  this.controller;
  goto L_1e0;
  undefined.dispose();
  this.controller = undefined;
  this.loaded = false;
  this.loadedHtml = undefined;
  this.loadedUrl = undefined;
  this.loadedPostLoadJavaScript = undefined;
  this.scheduleRender();
  if (!((this.viewModel.onLoadFailed == null))) goto L_28b;
  this.viewModel.onLoadFailed;
  this.viewModel;
  goto L_291;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t);
  return;
  i = this.controller;
  if (!((undefined === i))) goto L_354;
  i = C();
  C();
  this.controller = i;
  if (!((undefined !== i))) goto L_354;
  i.setListener(this.createWebViewListener(i));
  this.scheduleRender();
  if (!((undefined !== i))) goto L_dd0;
  if (!((undefined !== e))) goto L_4e9;
  if (!(h.isVersionAtLeast(238))) goto L_4e9;
  if (!((this.loadedDocument === e))) goto L_3bf;
  return;
  if (!((this.documentLoader == null))) goto L_3e9;
  this.documentLoader;
  goto L_40d;
  undefined.dispose();
  this.documentLoader = new u.WebViewDocumentLoader(e);
  this.loadedDocument = e;
  this.loaded = false;
  this.loadedHtml = undefined;
  this.loadedUrl = undefined;
  this.loadedPostLoadJavaScript = undefined;
  i.loadDocument(this.documentLoader.source);
  return;
  if (!((undefined !== this.documentLoader))) goto L_59a;
  i.stopLoading();
  this.documentLoader.dispose();
  this.documentLoader = undefined;
  this.loadedDocument = undefined;
  undefined;
  if (!((undefined !== this.viewModel.html))) goto L_a23;
  if (!((this.loadedAllowsFullscreenContent === this.viewModel.allowsFullscreenContent))) goto L_78e;
  if (!((this.loadedBaseUrl === this.viewModel.baseUrl))) goto L_78e;
  if (!((this.loadedHtml === this.viewModel.html))) goto L_78e;
  if (!((this.loadedInterceptsExternalLinks === (undefined !== this.viewModel.onOpenExternalUrl)))) goto L_78e;
  return;
  this.loaded = false;
  this.loadedPostLoadJavaScript = undefined;
  i.load(A(this.viewModel.allowsFullscreenContent, this.viewModel.baseUrl, this.viewModel.html, (undefined !== this.viewModel.onOpenExternalUrl)));
  this.loadedAllowsFullscreenContent = this.viewModel.allowsFullscreenContent;
  this.loadedBaseUrl = this.viewModel.baseUrl;
  this.loadedHtml = this.viewModel.html;
  this.loadedUrl = undefined;
  this.loadedInterceptsExternalLinks = (undefined !== this.viewModel.onOpenExternalUrl);
  return;
  if (((undefined === this.viewModel.url))) goto L_dcf;
  if (!((this.loadedAllowsFullscreenContent === this.viewModel.allowsFullscreenContent))) goto L_bae;
  if (!((this.loadedInterceptsExternalLinks === (undefined !== this.viewModel.onOpenExternalUrl)))) goto L_bae;
  if (((this.loadedUrl === this.viewModel.url))) goto L_dcf;
  this.loaded = false;
  this.loadedPostLoadJavaScript = undefined;
  i.load({allowsFullscreenContent: this.viewModel.allowsFullscreenContent, interceptsExternalLinks: (undefined !== this.viewModel.onOpenExternalUrl), url: this.viewModel.url});
  this.loadedAllowsFullscreenContent = this.viewModel.allowsFullscreenContent;
  this.loadedBaseUrl = undefined;
  this.loadedUrl = this.viewModel.url;
  this.loadedHtml = undefined;
  this.loadedInterceptsExternalLinks = (undefined !== this.viewModel.onOpenExternalUrl);
  (undefined !== this.viewModel.onOpenExternalUrl);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=381B file=dil_widgets/src/webview/WebView
// locals: e, t, i, this
// closure: M, C, E
function {
  this = this;
  let i;
  let t;
  let e;
  e = this.createContent();
  if (!(M(this.pendingContent, e))) goto L_5b;
  return;
  this.disposePendingController();
  t = C();
  if (!((undefined === t))) goto L_8c;
  return;
  i = (this.pendingLoadId + 1);
  this.pendingContent = e;
  this.pendingController = t;
  this.pendingLoadId = i;
  this.pendingLoaded = false;
  this.pendingLoadedPostLoadJavaScript = undefined;
  this.pendingTransitionStarted = false;
  t.setListener(this.createPendingWebViewListener(t, i));
  this.scheduleRender();
  E(t, e);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=349B file=dil_widgets/src/webview/WebView
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  e = this.controller;
  t = this.viewModel.postLoadJavaScript;
  if (!((undefined !== e))) goto L_15c;
  if (!((undefined === this.viewModel.document))) goto L_15c;
  if (!((undefined !== t))) goto L_15c;
  if (!(this.loaded)) goto L_15c;
  if (!((this.loadedPostLoadJavaScript !== t))) goto L_15c;
  e.evaluateJavaScript(t);
  this.loadedPostLoadJavaScript = t;
  t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=438B file=dil_widgets/src/webview/WebView
// locals: this
function {
  this = this;
  return {allowsFullscreenContent: this.viewModel.allowsFullscreenContent, baseUrl: this.viewModel.baseUrl, html: this.viewModel.html, postLoadJavaScript: this.viewModel.postLoadJavaScript, url: this.viewModel.url, interceptsExternalLinks: (undefined !== this.viewModel.onOpenExternalUrl)};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=80B file=dil_widgets/src/webview/WebView
// args: t
// closure: this, e
function {
  if (!((this.controller === e))) goto L_4f;
  this.handleMessage(e, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=133B file=dil_widgets/src/webview/WebView
// args: t
// closure: this, e
function {
  if (!((this.controller === e))) goto L_84;
  this.loaded = false;
  if (!((this.viewModel.onLoadFailed == null))) goto L_80;
  this.viewModel.onLoadFailed;
  this.viewModel;
  goto L_84;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=173B file=dil_widgets/src/webview/WebView
// closure: this, e
function {
  if (!((this.controller === e))) goto L_ac;
  this.loaded = true;
  this.evaluatePostLoadJavaScript();
  if (!((this.viewModel.onLoadCompleted == null))) goto L_a9;
  this.viewModel.onLoadCompleted;
  this.viewModel;
  goto L_ac;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=121B file=dil_widgets/src/webview/WebView
// args: t
// closure: this, e
function {
  if (!((this.controller === e))) goto L_78;
  if (!((this.viewModel.onOpenExternalUrl == null))) goto L_74;
  this.viewModel.onOpenExternalUrl;
  this.viewModel;
  goto L_78;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=4 bc=52B file=dil_widgets/src/webview/WebView
// args: e
// locals: this
function {
  this = this;
  return {onMessage: function <atom:0>, onLoadFailed: function <atom:0>, onLoadCompleted: function <atom:0>, onOpenExternalUrl: function <atom:0>};
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=80B file=dil_widgets/src/webview/WebView
// args: i
// closure: this, t, e
function {
  if (!((this.pendingLoadId === t))) goto L_4f;
  this.handleMessage(e, i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=200B file=dil_widgets/src/webview/WebView
// args: e
// closure: this, t
function {
  if (!((this.pendingLoadId === t))) goto L_c7;
  this.disposePendingController();
  this.scheduleRender();
  if (!((this.viewModel.onLoadFailed == null))) goto L_c3;
  this.viewModel.onLoadFailed;
  this.viewModel;
  goto L_c7;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=91B file=dil_widgets/src/webview/WebView
// closure: this, t
function {
  if (!((this.pendingLoadId === t))) goto L_5a;
  this.pendingLoaded = true;
  this.handlePendingLoadCompleted(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=121B file=dil_widgets/src/webview/WebView
// args: e
// closure: this, t
function {
  if (!((this.pendingLoadId === t))) goto L_78;
  if (!((this.viewModel.onOpenExternalUrl == null))) goto L_74;
  this.viewModel.onOpenExternalUrl;
  this.viewModel;
  goto L_78;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=4 bc=52B file=dil_widgets/src/webview/WebView
// args: e, t
// locals: this
function {
  this = this;
  return {onMessage: function <atom:0>, onLoadFailed: function <atom:0>, onLoadCompleted: function <atom:0>, onOpenExternalUrl: function <atom:0>};
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=241B file=dil_widgets/src/webview/WebView
// args: e, t
// locals: i, this
function {
  this = this;
  let i;
  if (!((undefined !== this.viewModel.document))) goto L_4d;
  return;
  if (!((this.viewModel.onMessage == null))) goto L_99;
  this.viewModel.onMessage;
  this.viewModel;
  goto L_9d;
  // [栈深重同步 1 -> 2]
  i = <?>.call(undefined, t);
  if (!((undefined !== i))) goto L_f0;
  e.evaluateJavaScript(i.javaScript);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=462B file=dil_widgets/src/webview/WebView
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (((this.pendingLoadId !== e))) goto L_79;
  if (((undefined === this.pendingController))) goto L_79;
  if (!((undefined === this.pendingContent))) goto L_7c;
  return;
  if (!(!this.pendingLoaded)) goto L_a2;
  return;
  t = this.pendingContent.postLoadJavaScript;
  if (!((undefined !== t))) goto L_174;
  if (!((this.pendingLoadedPostLoadJavaScript !== t))) goto L_174;
  this.pendingController.evaluateJavaScript(t);
  this.pendingLoadedPostLoadJavaScript = t;
  t;
  if ((this.pendingTransitionStarted)) goto L_1cd;
  this.pendingTransitionStarted = true;
  this.promotePendingController(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=77B file=dil_widgets/src/webview/WebView
// closure: this
function {
  this.pendingContainerRef.setAttribute("opacity", 1);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=1225B file=dil_widgets/src/webview/WebView
// args: e
// locals: this
// closure: w, r
function {
  this = this;
  (await this.animatePromise({duration: w, curve: r.AnimationCurve.EaseOut, beginFromCurrentState: true}, function <atom:0>));
  if (!((this.pendingLoadId === e))) goto L_4c6;
  if (!((undefined !== this.pendingController))) goto L_4c6;
  if (!((undefined !== this.pendingContent))) goto L_4c6;
  if (!((this.controller == null))) goto L_130;
  this.controller;
  goto L_155;
  undefined.setListener(undefined);
  if (!((this.controller == null))) goto L_180;
  this.controller;
  goto L_1a4;
  undefined.dispose();
  this.controller = this.pendingController;
  this.controller.setListener(this.createWebViewListener(this.controller));
  this.loaded = true;
  this.loadedAllowsFullscreenContent = this.pendingContent.allowsFullscreenContent;
  this.loadedBaseUrl = this.pendingContent.baseUrl;
  this.loadedHtml = this.pendingContent.html;
  this.loadedPostLoadJavaScript = this.pendingLoadedPostLoadJavaScript;
  this.loadedUrl = this.pendingContent.url;
  this.loadedInterceptsExternalLinks = this.pendingContent.interceptsExternalLinks;
  this.pendingContent = undefined;
  this.pendingController = undefined;
  this.pendingLoaded = false;
  this.pendingLoadedPostLoadJavaScript = undefined;
  this.pendingTransitionStarted = false;
  this.scheduleRender();
  if (!((this.viewModel.onLoadCompleted == null))) goto L_4c3;
  this.viewModel.onLoadCompleted;
  this.viewModel;
  goto L_4c6;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=264B file=dil_widgets/src/webview/WebView
// locals: this
function {
  this = this;
  this.pendingLoadId = (this.pendingLoadId + 1);
  if (!((this.pendingController == null))) goto L_59;
  this.pendingController;
  goto L_7e;
  undefined.setListener(undefined);
  if (!((this.pendingController == null))) goto L_a9;
  this.pendingController;
  goto L_cd;
  undefined.dispose();
  this.pendingLoaded = false;
  this.pendingContent = undefined;
  this.pendingController = undefined;
  this.pendingLoadedPostLoadJavaScript = undefined;
  this.pendingTransitionStarted = false;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=2 bc=619B file=dil_widgets/src/webview/WebView
// args: e
// locals: this
function {
  this = this;
  if (((undefined !== this.viewModel.html))) goto L_20e;
  if (((undefined !== this.viewModel.url))) goto L_20e;
  if (((undefined !== this.viewModel.baseUrl))) goto L_20e;
  if (((undefined !== this.viewModel.onMessage))) goto L_20e;
  if (((undefined !== this.viewModel.postLoadJavaScript))) goto L_20e;
  if (((true === this.viewModel.reloadCrossfade))) goto L_20e;
  if (!((true === this.viewModel.allowsFullscreenContent))) goto L_216;
  return "Document mode cannot be combined with HTML, URL, scripting or crossfade options.";
  if (!(new RegExp("^\\/(?!\\/)[^?#\\\\]*$").test(e.entryPath))) goto L_265;
  return undefined;
  return "Document entryPath must be a rooted encoded URL pathname.";
}

// fn m  args=0 vars=2 closure=3 cpool=0 bc=179B file=dil_widgets/src/webview/WebView
// locals: e, t
// closure: require, e, L
function {
  try { // catch -> L_53
  let e;
  e = require("valdi_webview/src/WebViewNative", true);
  if (!(("function" != typeof e.createNativeController))) goto L_4e;
  throw new Error("valdi_webview/src/WebViewNative does not export createNativeController");
  return e;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_b2
  if (!(e.isLoggingEnabled)) goto L_ae;
  console.error(L, t);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn C  args=0 vars=0 closure=1 cpool=0 bc=47B file=dil_widgets/src/webview/WebView
// closure: g
function {
  if (!((g == null))) goto L_a;
  g;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.createNativeController();
}

// fn M  args=2 vars=2 closure=0 cpool=0 bc=411B file=dil_widgets/src/webview/WebView
// args: e, t
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_2a;
  if (!((undefined.allowsFullscreenContent === t.allowsFullscreenContent))) goto L_19a;
  if (!((e == null))) goto L_5d;
  e;
  goto L_7e;
  if (!((undefined.baseUrl === t.baseUrl))) goto L_19a;
  if (!((e == null))) goto L_b1;
  e;
  goto L_d2;
  if (!((undefined.html === t.html))) goto L_19a;
  if (!((e == null))) goto L_105;
  e;
  goto L_126;
  if (!((undefined.interceptsExternalLinks === t.interceptsExternalLinks))) goto L_19a;
  if (!((e == null))) goto L_156;
  e;
  goto L_177;
  return (undefined.url === t.url);
}

// fn E  args=2 vars=2 closure=1 cpool=0 bc=420B file=dil_widgets/src/webview/WebView
// args: e, t
// closure: A
function {
  if (!((undefined === t.html))) goto L_f2;
  if (!((undefined !== t.url))) goto L_1a3;
  goto L_1a3;
  // [栈深重同步 1 -> 0]
  e.load(A(t.allowsFullscreenContent, t.baseUrl, t.html, t.interceptsExternalLinks));
  return;
}

// fn A  args=4 vars=4 closure=0 cpool=0 bc=26B file=dil_widgets/src/webview/WebView
// args: e, t, i, o
function {
  return {allowsFullscreenContent: e, baseUrl: t, html: i, interceptsExternalLinks: o};
}

// fn S  args=1 vars=1 closure=0 cpool=4 bc=134B file=dil_widgets/src/webview/WebView
// args: e
function {
  return JSON.stringify(e).replace(new RegExp("\\u2028"), "\u2028").replace(new RegExp("\\u2029"), "\u2029");   // tail call
}

// fn <atom:0>  args=3 vars=31 closure=0 cpool=26 bc=1617B file=dil_widgets/src/webview/WebView
// args: require, module, exports
// locals: e, t, i, o, n, s, d, l, r, a, h, v, c, p, u, w, L, g, WebView, <class_fields_init>, WebView#1, b, m, C, M, E, A, S
function {
  m = function m;
  C = function C;
  M = function M;
  E = function E;
  A = function A;
  S = function S;
  let b;
  let WebView#1;
  let g;
  let L;
  let w;
  let u;
  let p;
  let c;
  let v;
  let h;
  let a;
  let r;
  let l;
  let d;
  let s;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WEB_VIEW_AVAILABLE = undefined;
  exports.WEB_VIEW_DOCUMENT_AVAILABLE = undefined;
  exports.WebView = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("view", undefined, "TFGUdd27FoSUCUEQ");
  o = t.makeNodePrototype("view", undefined, "AnfxeZGH458pik-v");
  n = t.makeNodePrototype("label", undefined, "QYsYfXPX-qZuydha");
  s = t.makeNodePrototype("webview", undefined, "QZmGExWeg9ERK4Of");
  d = t.makeNodePrototype("view", ["opacity", 0], "0aQ48qscoWBainQ3");
  l = t.makeNodePrototype("webview", undefined, "FuffGXpjQ_mbKGQ3");
  r = require("valdi_core/src/AnimationOptions");
  a = require("valdi_core/src/Component");
  h = require("valdi_core/src/CompilerIntrinsics");
  v = require("valdi_core/src/Device");
  c = require("valdi_core/src/ElementRef");
  p = require("valdi_core/src/Style");
  u = require("./WebViewDocument");
  w = 0.18;
  L = "WebView is not available in this runtime.";
  g = m();
  exports.WEB_VIEW_AVAILABLE = (undefined !== g);
  if (!(exports.WEB_VIEW_AVAILABLE)) goto L_3d5;
  if ((v.Device.isIOS())) goto L_35c;
  if (!(v.Device.isAndroid())) goto L_3d5;
  if (!(!v.Device.isWeb())) goto L_3d5;
  exports.WEB_VIEW_DOCUMENT_AVAILABLE = h.isVersionAtLeast(238);
  let WebView;
  let <class_fields_init>;
  class WebView extends a.Component { ... }
  <proto:WebView>.onCreate = function <atom:0>;
  <proto:WebView>.onViewModelUpdate = function <atom:0>;
  <proto:WebView>.onDestroy = function <atom:0>;
  <proto:WebView>.postMessage = function <atom:0>;
  <proto:WebView>.isAvailable = function <atom:0>;
  <proto:WebView>.onRender = function <atom:0>;
  <proto:WebView>.renderWebViewContent = function <atom:0>;
  <proto:WebView>.loadContent = function <atom:0>;
  <proto:WebView>.loadContentWithCrossfade = function <atom:0>;
  <proto:WebView>.evaluatePostLoadJavaScript = function <atom:0>;
  <proto:WebView>.createContent = function <atom:0>;
  <proto:WebView>.createWebViewListener = function <atom:0>;
  <proto:WebView>.createPendingWebViewListener = function <atom:0>;
  <proto:WebView>.handleMessage = function <atom:0>;
  <proto:WebView>.handlePendingLoadCompleted = function <atom:0>;
  <proto:WebView>.promotePendingController = function <atom:0>;
  <proto:WebView>.disposePendingController = function <atom:0>;
  <proto:WebView>.documentError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WebView>;
  WebView = function <atom:0>;
  // close_loc <class_fields_init>
  WebView#1 = function <atom:0>;
  exports.WebView = WebView#1;
  b = {root: new p.Style({flexShrink: 0}), webView: new p.Style({bottom: 0, left: 0, position: "absolute", right: 0, top: 0}), pendingContainer: new p.Style({bottom: 0, left: 0, position: "absolute", right: 0, top: 0}), fallback: new p.Style({alignItems: "center", backgroundColor: "gray-100", bottom: 0, justifyContent: "center", left: 0, padding: 16, position: "absolute", right: 0, top: 0}), fallbackLabel: new p.Style({color: "gray-700", font: "system 14 medium", textAlign: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/webview/WebView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
