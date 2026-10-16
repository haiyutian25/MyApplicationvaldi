// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=45B file=dil_widgets/src/widgets/YouTubeEmbed
// args: e
// closure: this
function {
  if ((e)) goto L_2c;
  this.useFallbackThumbnail();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=107B file=dil_widgets/src/widgets/YouTubeEmbed
// args: e, t
// closure: this
function {
  if (((e <= 0))) goto L_6a;
  if (((t <= 0))) goto L_6a;
  if (!((120 === e))) goto L_43;
  if (!((90 === t))) goto L_43;
  goto L_6a;
  // [栈深重同步 1 -> 0]
  this.finishThumbnailLoading();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=245B file=dil_widgets/src/widgets/YouTubeEmbed
// args: t
// closure: N, this, e
function {
  if (!(N(t))) goto L_79;
  if (!((this.context == null))) goto L_32;
  this.context;
  goto L_f4;
  goto L_f4;
  // [栈深重同步 1 -> 0]
  if (!(e.isLoggingEnabled)) goto L_f4;
  console.warn("Ignoring external URL from YouTube embed: ".concat(t));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=429B file=dil_widgets/src/widgets/YouTubeEmbed
// args: e
// locals: e#1, t
// closure: D, this
function {
  let t;
  if (!((e === D))) goto L_f8;
  if (!(!this.playerErrorDispatched)) goto L_f7;
  let e#1;
  if (!((this.viewModel.onPlayerErrorAction == null))) goto L_88;
  this.viewModel.onPlayerErrorAction;
  this.viewModel;
  goto L_8b;
  // [栈深重同步 1 -> 2]
  e#1 = <?>.call(undefined);
  if (!((undefined !== e#1))) goto L_f6;
  this.playerErrorDispatched = true;
  if (!((this.context == null))) goto L_cf;
  this.context;
  goto L_f6;
  undefined.dispatchActionPayload(e#1);
  return;
  t = Number(e);
  if (!(!this.state.durationSeconds)) goto L_1ac;
  if (!((t > 0))) goto L_1ac;
  this.setState({durationSeconds: Math.round(t)});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=166B file=dil_widgets/src/widgets/YouTubeEmbed
// closure: this
function {
  if ((this.isDestroyed())) goto L_a5;
  if (((undefined !== this.state.durationSeconds))) goto L_a5;
  this.setState({durationShimmerReady: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=148B file=dil_widgets/src/widgets/YouTubeEmbed
// closure: this
function {
  if ((this.state.durationShimmerReady)) goto L_93;
  this.renderer.onNextDraw(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=5 bc=205B file=dil_widgets/src/widgets/YouTubeEmbed
// locals: this, this.active_func, new.target, arguments
// closure: N, e, D, <class_fields_init>, R
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
  this.state = {thumbnailSettled: false};
  this.playerErrorDispatched = false;
  this.thumbnailRef = new R.ElementRef();
  this.onThumbnailAssetLoad = function <atom:0>;
  this.onThumbnailImageDecoded = function <atom:0>;
  this.onOpenExternalUrl = function <atom:0>;
  this.onPlayerMessage = function <atom:0>;
  this.onDurationLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=283B file=dil_widgets/src/widgets/YouTubeEmbed
// args: e
// locals: this
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  if (!((undefined.videoId === this.viewModel.videoId))) goto L_e2;
  if (!((e == null))) goto L_7d;
  e;
  goto L_9e;
  if (((undefined.showThumbnail === this.viewModel.showThumbnail))) goto L_11a;
  this.setState({thumbnailSettled: false, durationShimmerReady: false});
  return;
}

// fn <atom:0>  args=0 vars=7 closure=14 cpool=0 bc=1884B file=dil_widgets/src/widgets/YouTubeEmbed
// locals: e, o, r, a, d, s, this
// closure: _, L, I, x, t, i, O, k, P, n, U, q, F, D
function {
  this = this;
  let s;
  let d;
  let a;
  let r;
  let o;
  let e;
  e = _(this.viewModel.videoId);
  if (!((undefined === e))) goto L_64;
  return;
  o = this.baseViewAttributes;
  L.DIL_BOX_ATTRIBUTES.apply(this.viewModel, o);
  r = I.DIL_BACKGROUND_ATTRIBUTES.apply(this.viewModel, o);
  if (!((undefined === o.aspectRatio))) goto L_1a0;
  o.aspectRatio = x;
  x;
  if (!((undefined === o.width))) goto L_1dd;
  o.width = "100%";
  "100%";
  if (!((undefined === o.borderRadius))) goto L_217;
  o.borderRadius = 8;
  8;
  if ((r)) goto L_231;
  o.backgroundColor = "gray-900";
  "gray-900";
  o.slowClipping = true;
  a = (true === this.viewModel.showThumbnail);
  d = (undefined !== this.viewModel.onPlayerErrorAction);
  if ((a)) goto L_2da;
  s = d;
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", O.embed);
  t.setAttributes(o);
  if (!((this.viewModel.title == null))) goto L_3f9;
  this.viewModel.title;
  t.setAttributeString("accessibilityLabel", k);
  if (!(a)) goto L_451;
  if (!(!!this.hasClickHandler)) goto L_457;
  t.setAttribute("touchEnabled", undefined);
  t.beginComponent(P.WebView, n, "".concat(a, ":", d), undefined);
  t.setViewModelProperty("allowsFullscreenContent", true);
  if (!((this.viewModel.title == null))) goto L_585;
  this.viewModel.title;
  t.setViewModelProperty("html", U(e, k, s));
  t.setViewModelProperty("baseUrl", q);
  t.setViewModelProperty("reloadCrossfade", true);
  if (!(s)) goto L_63f;
  goto L_640;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onMessage", undefined);
  t.setViewModelProperty("onOpenExternalUrl", this.onOpenExternalUrl);
  if (!(s)) goto L_6d6;
  if (!(d)) goto L_6cf;
  goto L_6d0;
  // [栈深重同步 5 -> 4]
  goto L_6d7;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("postLoadJavaScript", undefined);
  t.endComponent();
  if (!(a)) goto L_733;
  this.renderThumbnail(e);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=553B file=dil_widgets/src/widgets/YouTubeEmbed
// closure: t, p, O, this, f, b
function {
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", O.durationLoading);
  t.setAttributeFunction("onLayoutComplete", this.onDurationLayout);
  if (!(this.state.durationShimmerReady)) goto L_200;
  t.beginComponent(f.DILTextLoadingLine, b, undefined, undefined);
  t.setViewModelProperty("loadingType", f.DILTextLoadingType.Placeholder);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=8 closure=20 cpool=2 bc=3025B file=dil_widgets/src/widgets/YouTubeEmbed
// args: e
// locals: i, n, w, v, R, S, this
// closure: t, p, O, f, b, C, g, o, r, a, d, s, l, T, u, h, c, m, A, y
function {
  this = this;
  let S;
  let R;
  let v;
  let w;
  let n;
  let i;
  i = this.state.durationSeconds;
  if (!((undefined !== i))) goto L_f2;
  goto L_f3;
  // [栈深重同步 1 -> 0]
  n = undefined;
  w = "".concat(C, e, "/hqdefault.jpg");
  if (!((this.thumbnailRef.single() == null))) goto L_172;
  this.thumbnailRef.single();
  goto L_19b;
  v = undefined.getAttribute("src");
  if (!((v === w))) goto L_1aa;
  goto L_1d8;
  // [栈深重同步 1 -> 0]
  R = "".concat(C, e, "/maxresdefault.jpg");
  if (!((this.context == null))) goto L_22c;
  this.context;
  goto L_24d;
  S = g.isDILAssetSourceAllowed(R, undefined.assetURLAuthorization);
  t.beginRender(o, e);
  t.setAttributeRef(this.thumbnailRef);
  t.setAttributeStyle("style", O.thumbnail);
  if (!(S)) goto L_34b;
  goto L_34c;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("src", undefined);
  if (!((this.context == null))) goto L_3c8;
  this.context;
  goto L_3e9;
  t.setAttribute("allowedUrlRegexes", g.getDILAssetURLRegexes(undefined.assetURLAuthorization));
  t.setAttributeFunction("onAssetLoad", this.onThumbnailAssetLoad);
  t.setAttributeFunction("onImageDecoded", this.onThumbnailImageDecoded);
  t.endRender();
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", O.providerBadge);
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", O.providerBadgeBlur);
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", O.providerBadgeTint);
  t.endRender();
  t.endRender();
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", O.providerIconBackdrop);
  t.endRender();
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", O.providerIcon);
  t.setAttribute("src", T.resolveIconAsset("youtube-logo"));
  t.endRender();
  t.beginRender(u, undefined);
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", O.durationSizer);
  if (!((n == null))) goto L_8fd;
  n;
  t.setAttributeString("value", "0:00");
  t.endRender();
  if (!((undefined !== n))) goto L_a09;
  t.beginRender(c, undefined);
  t.setAttributeStyle("style", O.duration);
  t.setAttributeString("value", n);
  goto L_a0c;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.endRender();
  t.endRender();
  if (!(S)) goto L_bd0;
  if (!(!this.state.thumbnailSettled)) goto L_bd0;
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", O.thumbnailLoadingCover);
  t.beginComponent(A.LoadingBlock, y, undefined, undefined);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=827B file=dil_widgets/src/widgets/YouTubeEmbed
// locals: e, t, i, this
// closure: g
function {
  this = this;
  let t;
  let e;
  if ((this.isDestroyed())) goto L_77;
  if (!((true !== this.viewModel.showThumbnail))) goto L_7a;
  return;
  e = this.thumbnailRef.single();
  if (!((undefined === e))) goto L_c9;
  return;
  t = e.getAttribute("src");
  if (!(("string" == typeof t))) goto L_2d6;
  if (!(t.endsWith("/maxresdefault.jpg"))) goto L_2d6;
  let i;
  i = t.replace("maxresdefault.jpg", "hqdefault.jpg");
  if (!((this.context == null))) goto L_1bc;
  this.context;
  goto L_1dd;
  if (!(!g.isDILAssetSourceAllowed(i, undefined.assetURLAuthorization))) goto L_208;
  this.finishThumbnailLoading();
  return;
  if (!((this.context == null))) goto L_27f;
  this.context;
  goto L_2a0;
  e.setAttribute("allowedUrlRegexes", g.getDILAssetURLRegexes(undefined.assetURLAuthorization));
  e.setAttribute("src", i);
  return;
  if (!(("string" == typeof t))) goto L_339;
  if (!(t.endsWith("/hqdefault.jpg"))) goto L_339;
  this.finishThumbnailLoading();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=89B file=dil_widgets/src/widgets/YouTubeEmbed
// locals: this
function {
  this = this;
  if ((this.isDestroyed())) goto L_58;
  this.setState({thumbnailSettled: true});
  return;
}

// fn _  args=1 vars=1 closure=1 cpool=0 bc=55B file=dil_widgets/src/widgets/YouTubeEmbed
// args: e
// closure: E
function {
  if (!(("string" == typeof e))) goto L_36;
  if (!(E.test(e))) goto L_36;
  return e;
  return;
}

// fn B  args=1 vars=1 closure=1 cpool=0 bc=46B file=dil_widgets/src/widgets/YouTubeEmbed
// args: e
// closure: M
function {
  return "".concat(M, e, "?playsinline=1&rel=0");   // tail call
}

// fn N  args=1 vars=1 closure=0 cpool=4 bc=89B file=dil_widgets/src/widgets/YouTubeEmbed
// args: e
function {
  if ((new RegExp("^https:\\/\\/(?:[A-Za-z0-9-]+\\.)?youtube\\.com(?:[/:?#]|$)").test(e))) goto L_58;
  return new RegExp("^https:\\/\\/youtu\\.be(?:[/:?#]|$)").test(e);
}

// fn U  args=3 vars=3 closure=3 cpool=0 bc=76B file=dil_widgets/src/widgets/YouTubeEmbed
// args: e, t, i
// closure: V, B, $
function {
  if (!(i)) goto L_3b;
  goto L_3c;
  // [栈深重同步 6 -> 5]
  return "<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="referrer" content="strict-origin-when-cross-origin">
    <style>
      html,
      body {
        background: transparent;
        height: 100%;
        margin: 0;
        overflow: hidden;
        padding: 0;
        width: 100%;
      }

      iframe {
        border: 0;
        height: 100%;
        inset: 0;
        position: absolute;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <iframe
      allow="".concat(V, ""
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      src="", B(e), "", ""
      title="", $(t), ""
    ></iframe>
  </body>
</html>");   // tail call
}

// fn F  args=2 vars=2 closure=0 cpool=0 bc=102B file=dil_widgets/src/widgets/YouTubeEmbed
// args: e, t
function {
  return "(() => {
  const iframe = document.querySelector("iframe");
  const origin = "https://www.youtube.com";
  if (!iframe) return;
  let player;
  let playerReady = false;
  let canPreload = ".concat(t, ";
  let didPreload = false;
  let preloadTimer;
  const stopPreload = () => {
    canPreload = false;
    document.removeEventListener("visibilitychange", startPreload);
    if (preloadTimer === undefined) return;
    window.clearTimeout(preloadTimer);
    preloadTimer = undefined;
    player.stopVideo();
  };
  const reportDuration = (duration) => {
    if (typeof duration !== "number" || !Number.isFinite(duration) || duration <= 0) return;
    stopPreload();
    window.Valdi.postMessage(String(duration));
  };
  const startPreload = () => {
    if (!canPreload || !playerReady || document.visibilityState !== "visible") return;
    const state = player.getPlayerState();
    if ((state !== -1 && state !== 5) || player.getCurrentTime() !== 0) return;
    // A detached WKWebView can be ready while its document is still hidden.
    // Wait for attachment before starting the bounded metadata load.
    canPreload = false;
    didPreload = true;
    document.removeEventListener("visibilitychange", startPreload);
    preloadTimer = window.setTimeout(stopPreload, 4000);
    player.mute();
    player.playVideo();
  };
  document.addEventListener("visibilitychange", startPreload);
  window.addEventListener("message", (event) => {
    if (event.origin !== origin || event.source !== iframe.contentWindow) return;
    try {
      const message = JSON.parse(event.data);
      reportDuration(message?.info?.duration);
    } catch {
      // YouTube may send unrelated non-JSON messages; these are not player errors.
    }
  });
  window.addEventListener("pagehide", stopPreload);
  // The API owns the listening handshake, including startup error subscriptions.
  const attachPlayer = () => {
    player = new window.YT.Player(iframe, {
      events: {
        onReady: () => {
          playerReady = true;
          reportDuration(player.getDuration());
          startPreload();
        },
        onStateChange: (event) => {
          // Stop playback even if it starts after the timeout.
          if (didPreload && preloadTimer === undefined && event.data === 1) {
            player.stopVideo();
          }
        },
        onError: () => {
          stopPreload();
          if (", (undefined !== e), ") window.Valdi.postMessage(", JSON.stringify(e), ");
        }
      }
    });
  };
  if (window.YT?.Player) {
    attachPlayer();
  } else {
    window.onYouTubeIframeAPIReady = attachPlayer;
    const script = document.createElement("script");
    script.src = origin + "/iframe_api";
    script.onerror = () => console.warn("Unable to load YouTube player API");
    document.head.appendChild(script);
  }
})();");   // tail call
}

// fn $  args=1 vars=1 closure=0 cpool=8 bc=185B file=dil_widgets/src/widgets/YouTubeEmbed
// args: e
function {
  return e.replace(new RegExp("&"), "&amp;").replace(new RegExp("\""), "&quot;").replace(new RegExp("<"), "&lt;").replace(new RegExp(">"), "&gt;");   // tail call
}

// fn <atom:0>  args=3 vars=49 closure=0 cpool=17 bc=2809B file=dil_widgets/src/widgets/YouTubeEmbed
// args: require, module, exports
// locals: e, t, i, n, o, r, a, d, s, l, u, h, c, p, b, m, y, g, w, v, f, R, S, P, T, A, L, I, E, D, x, k, M, C, q, V, YouTubeEmbed, <class_fields_init>, YouTubeEmbed#1, _, B, N, U, F, $, O
function {
  _ = function _;
  B = function B;
  N = function N;
  U = function U;
  F = function F;
  $ = function $;
  let O;
  let YouTubeEmbed#1;
  let V;
  let q;
  let C;
  let M;
  let k;
  let x;
  let D;
  let E;
  let I;
  let L;
  let A;
  let T;
  let P;
  let S;
  let R;
  let f;
  let v;
  let w;
  let g;
  let y;
  let m;
  let b;
  let p;
  let c;
  let h;
  let u;
  let l;
  let s;
  let d;
  let a;
  let r;
  let o;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YouTubeEmbed = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("view", undefined, "5-O3msb5G_Agw81g");
  n = t.makeComponentPrototype(["width", "100%", "height", "100%"], "dLx-VFZCFFCmVaoo");
  o = t.makeNodePrototype("image", undefined, "ZMz_0CVMx9F6xEHt");
  r = t.makeNodePrototype("view", undefined, "2DrzZrr6ErHRPb2Q");
  a = t.makeNodePrototype("blur", undefined, "yCV-ybH2VPuV4kdl");
  d = t.makeNodePrototype("view", undefined, "hYbeJGuEOKsI8Zq7");
  s = t.makeNodePrototype("view", undefined, "xPbjbnd9Iuxsi0tC");
  l = t.makeNodePrototype("image", undefined, "WJhLUMbKOkmqc8rw");
  u = t.makeNodePrototype("layout", ["flexDirection", "row"], "tibJBq7Wq5mBmmLq");
  h = t.makeNodePrototype("label", undefined, "pHKHASRugKIeFf6c");
  c = t.makeNodePrototype("label", undefined, "rpR6ehqHoaX3_q5I");
  p = t.makeNodePrototype("view", undefined, "lqC6c4bkqS6duqhr");
  b = t.makeComponentPrototype(["animationDelayMs", 0, "borderRadius", 6, "height", 12, "width", "100%"], "jPRFpZNEBiSfkzKK");
  m = t.makeNodePrototype("view", undefined, "8-1Pq28i3BxmqZqX");
  y = t.makeComponentPrototype(["width", "100%", "height", "100%", "radius", "none", "background", "surface-tertiary", "duration", 1000], "iurwUVF77MDHDQQ-");
  g = require("dil_core/src/DILAssetURLAuthorization");
  w = require("dil_core/src/DILComponent");
  v = require("dil_core/src/typography/DILDynamicFont");
  f = require("dil_text/src/DILTextLoadingLine");
  R = require("valdi_core/src/ElementRef");
  S = require("valdi_core/src/Style");
  P = require("../webview/WebView");
  T = require("./Icon");
  A = require("./LoadingBlock");
  L = require("./attributes/DILBoxAttributes");
  I = require("./attributes/DILBackgroundAttributes");
  E = new RegExp("^[A-Za-z0-9_-]{11}$");
  D = "youtube-player-error";
  x = (16 / 9);
  k = "YouTube video player";
  M = "https://www.youtube.com/embed/";
  C = "https://img.youtube.com/vi/";
  q = "https://cdn.platform.openai.com/deployments/widgets/index.html";
  V = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  let YouTubeEmbed;
  let <class_fields_init>;
  class YouTubeEmbed extends w.DILStatefulComponent { ... }
  <proto:YouTubeEmbed>.onViewModelUpdate = function <atom:0>;
  <proto:YouTubeEmbed>.onRender = function <atom:0>;
  <proto:YouTubeEmbed>.renderThumbnail = function <atom:0>;
  <proto:YouTubeEmbed>.useFallbackThumbnail = function <atom:0>;
  <proto:YouTubeEmbed>.finishThumbnailLoading = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:YouTubeEmbed>;
  YouTubeEmbed = function <atom:0>;
  // close_loc <class_fields_init>
  YouTubeEmbed#1 = function <atom:0>;
  exports.YouTubeEmbed = YouTubeEmbed#1;
  YouTubeEmbed#1.dilV2Properties = ["aspectRatio", "maxWidth", "showThumbnail", "title", "videoId", "width"];
  // append([], 0, w.DIL_COMPONENT_PROPERTIES)
  // append([], w.DIL_COMPONENT_PROPERTIES, L.DIL_BOX_ATTRIBUTE_PROPERTIES)
  // append([], L.DIL_BOX_ATTRIBUTE_PROPERTIES, I.DIL_BACKGROUND_ATTRIBUTE_PROPERTIES)
  [][I.DIL_BACKGROUND_ATTRIBUTE_PROPERTIES] = "onPlayerErrorAction";
  [][("onPlayerErrorAction" ++)] = "showThumbnail";
  [][("showThumbnail" ++)] = "title";
  [][("title" ++)] = "videoId";
  ("videoId" ++);
  YouTubeEmbed#1.properties = [];
  O = {embed: new S.Style({minHeight: 120, flexShrink: 0}), thumbnail: new S.Style({backgroundColor: "surface-tertiary", height: "100%", left: 0, objectFit: "cover", position: "absolute", scaleX: 1.01, scaleY: 1.01, top: 0, touchEnabled: false, width: "100%"}), thumbnailLoadingCover: new S.Style({backgroundColor: "surface", height: "100%", left: 0, position: "absolute", top: 0, touchEnabled: false, width: "100%", zIndex: 3}), providerBadge: new S.Style({alignItems: "center", borderRadius: 999, bottom: 8, flexDirection: "row", gap: 4, left: 8, minHeight: 24, paddingBottom: 4, paddingLeft: 4, paddingRight: 8, paddingTop: 4, position: "absolute", touchEnabled: false}), providerBadgeBlur: new S.Style({blurStyle: "systemUltraThinMaterialDark", borderRadius: 999, height: "100%", left: 0, position: "absolute", top: 0, touchEnabled: false, width: "100%"}), providerBadgeTint: new S.Style({backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: 999, height: "100%", touchEnabled: false, width: "100%"}), providerIconBackdrop: new S.Style({backgroundColor: "white", height: 6, left: 9, position: "absolute", width: 6}), providerIcon: new S.Style({height: 16, objectFit: "contain", tint: "red-500", width: 16}), durationSizer: new S.Style({accessibilityNavigation: "ignored", font: v.dynamicMediumSystemFontForSize(12), opacity: 0}), duration: new S.Style({color: "white", font: v.dynamicMediumSystemFontForSize(12), left: 0, numberOfLines: 1, position: "absolute", top: 0}), durationLoading: new S.Style({accessibilityNavigation: "ignored", height: "100%", justifyContent: "center", left: 0, limitToViewport: false, opacity: 0.2, position: "absolute", top: 0, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/YouTubeEmbed
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
