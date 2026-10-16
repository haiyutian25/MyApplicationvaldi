// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=76B file=dil_widgets/src/maps/NativeMapWebViewSurface
// args: e
function {
  e.MapClicked = "mapClicked";
  e.MarkerSelected = "markerSelected";
  e.NearbySearch = "nearbySearch";
  e.Status = "status";
  e.Viewport = "viewport";
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=898B file=dil_widgets/src/maps/NativeMapWebViewSurface
// args: t
// locals: a, r
// closure: e, p, this
function {
  let a;
  a = undefined;
  try { // catch -> L_3c
  a = JSON.parse(t);
  JSON.parse(t);
  <?>;
  goto L_9e;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_9d
  if (!(e.isLoggingEnabled)) goto L_99;
  console.warn("Ignoring an invalid message from the bundled Places map WebView.", r);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((a.type === p.MapClicked))) goto L_13d;
  if (!((this.viewModel.onMapClick == null))) goto L_136;
  this.viewModel.onMapClick;
  this.viewModel;
  goto L_139;
  // [栈深重同步 2 -> 3]
  <?>.call(undefined);
  goto L_381;
  if (!((a.type === p.MarkerSelected))) goto L_20e;
  if (!(("string" == typeof a.markerId))) goto L_20a;
  if (!((this.viewModel.onMarkerSelect == null))) goto L_1e3;
  this.viewModel.onMarkerSelect;
  this.viewModel;
  goto L_20a;
  // [栈深重同步 2 -> 3]
  <?>.call(undefined, a.markerId);
  goto L_381;
  if (!((a.type === p.NearbySearch))) goto L_262;
  this.handleNearbySearch(a);
  goto L_381;
  if (!((a.type === p.Status))) goto L_2b6;
  this.handleStatus(a);
  goto L_381;
  if (!((a.type === p.Viewport))) goto L_32a;
  this.handleViewport(a.viewport);
  goto L_381;
  if (!(e.isLoggingEnabled)) goto L_380;
  console.warn("Ignoring an unsupported message from the bundled Places map WebView.");
  a.type;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=76B file=dil_widgets/src/maps/NativeMapWebViewSurface
// locals: this, this.active_func, new.target, arguments
// closure: e, p, <class_fields_init>
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
  this.initialUrl = "";
  this.handleMessage = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=203B file=dil_widgets/src/maps/NativeMapWebViewSurface
// locals: this
// closure: l, n
function {
  this = this;
  this.initialUrl = l(this.viewModel);
  if (!((this.viewModel.onStatusChange == null))) goto L_7c;
  this.viewModel.onStatusChange;
  this.viewModel;
  goto L_ca;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=651B file=dil_widgets/src/maps/NativeMapWebViewSurface
// locals: this
// closure: t, a, h, s, r, m
function {
  this = this;
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", h.root);
  if (!((this.viewModel.accessibilityLabel == null))) goto L_f5;
  this.viewModel.accessibilityLabel;
  t.setAttributeString("accessibilityLabel", "Interactive map");
  t.beginComponent(s.WebView, r, undefined, undefined);
  t.setViewModelProperty("onMessage", this.handleMessage);
  t.setViewModelProperty("postLoadJavaScript", m(this.viewModel));
  t.setViewModelProperty("url", this.initialUrl);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=457B file=dil_widgets/src/maps/NativeMapWebViewSurface
// args: e
// locals: t, this
// closure: b
function {
  this = this;
  let t;
  if ((("number" != typeof e.requestKey))) goto L_57;
  if (!(!b(e.status))) goto L_5a;
  return;
  if (!(("string" == typeof e.message))) goto L_aa;
  goto L_ab;
  // [栈深重同步 2 -> 1]
  if (!(Array.isArray(e.places))) goto L_121;
  goto L_122;
  // [栈深重同步 2 -> 1]
  t = {message: undefined, places: undefined, requestKey: e.requestKey, status: e.status};
  if (!((this.viewModel.onNearbySearchResult == null))) goto L_1c2;
  this.viewModel.onNearbySearchResult;
  this.viewModel;
  goto L_1c8;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=254B file=dil_widgets/src/maps/NativeMapWebViewSurface
// args: e
// locals: t, this
// closure: S
function {
  this = this;
  let t;
  if (!(!S(e.status))) goto L_2d;
  return;
  if (!(("string" == typeof e.message))) goto L_7d;
  goto L_7e;
  // [栈深重同步 2 -> 1]
  t = {message: undefined, status: e.status};
  if (!((this.viewModel.onStatusChange == null))) goto L_f7;
  this.viewModel.onStatusChange;
  this.viewModel;
  goto L_fd;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=606B file=dil_widgets/src/maps/NativeMapWebViewSurface
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if ((("object" != typeof e))) goto L_14;
  if (!((null === e))) goto L_17;
  return;
  t = e;
  if (!(("number" == typeof t.latitude))) goto L_25d;
  if (!(("number" == typeof t.longitude))) goto L_25d;
  if (!(("number" == typeof t.latitudeSpan))) goto L_25d;
  if (!(("number" == typeof t.longitudeSpan))) goto L_25d;
  if (!(("number" == typeof t.zoom))) goto L_25d;
  if (!((this.viewModel.onViewportChange == null))) goto L_160;
  this.viewModel.onViewportChange;
  this.viewModel;
  goto L_25d;
  // [栈深重同步 1 -> 2]
  return;
}

// fn l  args=1 vars=2 closure=2 cpool=0 bc=1140B file=dil_widgets/src/maps/NativeMapWebViewSurface
// args: e
// locals: t
// closure: g, d
function {
  let t;
  if (!((e.bottomPadding == null))) goto L_19e;
  e.bottomPadding;
  t = ["zoom=".concat(encodeURIComponent(String(e.viewport.zoom))), "markers=".concat(encodeURIComponent(encodeURIComponent(JSON.stringify(e.markers)))), "interactive=".concat(e.interactive), "bottomPadding=".concat(encodeURIComponent(String(0))), "focusVerticalFraction=0.35", "showUserLocation=false", "darkTheme=".concat(e.darkTheme), "mapStyleUrl=".concat(encodeURIComponent(g(e.darkTheme)))];
  if ((e.viewport.fitBounds)) goto L_41a;
  t.push("latitude=".concat(encodeURIComponent(String(e.viewport.center.latitude))));
  t.push("longitude=".concat(encodeURIComponent(String(e.viewport.center.longitude))));
  return "".concat(d, "?", t.join("&"));   // tail call
}

// fn m  args=1 vars=2 closure=1 cpool=0 bc=460B file=dil_widgets/src/maps/NativeMapWebViewSurface
// args: e
// locals: t
// closure: g
function {
  let t;
  if (!((e.bottomPadding == null))) goto L_2c;
  e.bottomPadding;
  if (!((e.fitBoundsRequestKey == null))) goto L_80;
  e.fitBoundsRequestKey;
  t = {bottomPadding: 0, darkTheme: e.darkTheme, fitBoundsRequestKey: 0, focusedMarkerId: e.focusedMarkerId, markers: e.markers, nearbySearchRequest: e.nearbySearchRequest, routes: e.routes, styleUrl: g(e.darkTheme), viewport: e.viewport};
  return "window.ValdiMapBridge.configure(".concat(JSON.stringify(t), ");");   // tail call
}

// fn g  args=1 vars=1 closure=2 cpool=0 bc=11B file=dil_widgets/src/maps/NativeMapWebViewSurface
// args: e
// closure: c, u
function {
  if (!(e)) goto L_7;
  return c;
  return u;
}

// fn S  args=1 vars=1 closure=1 cpool=0 bc=303B file=dil_widgets/src/maps/NativeMapWebViewSurface
// args: e
// closure: n
function {
  if (((e === n.MapSurfaceStatus.Loading))) goto L_12e;
  if (((e === n.MapSurfaceStatus.Ready))) goto L_12e;
  if (((e === n.MapSurfaceStatus.Unavailable))) goto L_12e;
  return (e === n.MapSurfaceStatus.Error);
}

// fn b  args=1 vars=1 closure=1 cpool=0 bc=303B file=dil_widgets/src/maps/NativeMapWebViewSurface
// args: e
// closure: n
function {
  if (((e === n.MapNearbySearchStatus.Loading))) goto L_12e;
  if (((e === n.MapNearbySearchStatus.Success))) goto L_12e;
  if (((e === n.MapNearbySearchStatus.Unavailable))) goto L_12e;
  return (e === n.MapNearbySearchStatus.Error);
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=12 bc=685B file=dil_widgets/src/maps/NativeMapWebViewSurface
// args: require, module, exports
// locals: e, t, a, r, i, o, s, n, d, u, c, p, NativeMapWebViewSurface, <class_fields_init>, NativeMapWebViewSurface#1, l, m, g, S, b, h
function {
  l = function l;
  m = function m;
  g = function g;
  S = function S;
  b = function b;
  let h;
  let NativeMapWebViewSurface#1;
  let c;
  let u;
  let d;
  let n;
  let s;
  let o;
  let i;
  let r;
  let a;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NativeMapMessageType = undefined;
  exports.NativeMapWebViewSurface = undefined;
  exports.createNativeMapWebViewUrl = undefined;
  exports.createNativeMapUpdateScript = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  a = t.makeNodePrototype("view", undefined, "YjOuHLuGgT-xtaNi");
  r = t.makeComponentPrototype(["accessibilityCategory", "image", "flexGrow", 1, "height", "100%", "width", "100%"], "XdNiOS6zUg_GLiiw");
  i = require("valdi_core/src/Component");
  o = require("valdi_core/src/Style");
  s = require("../webview/WebView");
  n = require("./MapTypes");
  d = "file:///android_asset/dil_map/mapbox.html";
  u = "mapbox://styles/oai-data/cmk79jyx4003001r05n5kfi00";
  c = "mapbox://styles/oai-data/cmkycbw49005e01skfrn19pqb";
  if ((p)) goto L_1ca;
  p = {};
  exports.NativeMapMessageType = {};
  !function <atom:0>({});
  let NativeMapWebViewSurface;
  let <class_fields_init>;
  class NativeMapWebViewSurface extends i.Component { ... }
  <proto:NativeMapWebViewSurface>.onCreate = function <atom:0>;
  <proto:NativeMapWebViewSurface>.onRender = function <atom:0>;
  <proto:NativeMapWebViewSurface>.handleNearbySearch = function <atom:0>;
  <proto:NativeMapWebViewSurface>.handleStatus = function <atom:0>;
  <proto:NativeMapWebViewSurface>.handleViewport = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeMapWebViewSurface>;
  NativeMapWebViewSurface = function <atom:0>;
  // close_loc <class_fields_init>
  NativeMapWebViewSurface#1 = function <atom:0>;
  exports.NativeMapWebViewSurface = NativeMapWebViewSurface#1;
  exports.createNativeMapWebViewUrl = l;
  exports.createNativeMapUpdateScript = m;
  h = {root: new o.Style({accessibilityCategory: "image", flexGrow: 1, height: "100%", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/maps/NativeMapWebViewSurface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
