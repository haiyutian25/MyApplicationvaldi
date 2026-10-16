// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=325B file=dil_widgets/src/maps/MapSurface
// locals: this
// closure: c, b
function {
  this = this;
  if ((c.Device.isWeb())) goto L_144;
  if ((c.Device.isAndroid())) goto L_144;
  if (!((this.viewModel.onStatusChange == null))) goto L_ec;
  this.viewModel.onStatusChange;
  this.viewModel;
  goto L_144;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=267B file=dil_widgets/src/maps/MapSurface
// locals: this
// closure: c
function {
  this = this;
  if (!(c.Device.isWeb())) goto L_74;
  goto L_10a;
  // [栈深重同步 1 -> 0]
  if (!(c.Device.isAndroid())) goto L_e5;
  goto L_10a;
  // [栈深重同步 1 -> 0]
  this.renderUnavailableSurface();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=1857B file=dil_widgets/src/maps/MapSurface
// locals: this
// closure: e, t, v
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", v.browserSurface);
  if (!((this.viewModel.accessibilityLabel == null))) goto L_f5;
  this.viewModel.accessibilityLabel;
  e.setAttributeString("accessibilityLabel", "Interactive map");
  e.setAttributeNumber("bottomPadding", this.viewModel.bottomPadding);
  e.setAttribute("darkTheme", this.viewModel.darkTheme);
  e.setAttributeString("focusedMarkerId", this.viewModel.focusedMarkerId);
  e.setAttribute("interactive", this.viewModel.interactive);
  e.setAttribute("markers", this.viewModel.markers);
  e.setAttribute("nearbySearchRequest", this.viewModel.nearbySearchRequest);
  e.setAttributeFunction("onMapClick", this.viewModel.onMapClick);
  e.setAttributeFunction("onMarkerSelect", this.viewModel.onMarkerSelect);
  e.setAttributeFunction("onNearbySearchResult", this.viewModel.onNearbySearchResult);
  e.setAttributeFunction("onStatusChange", this.viewModel.onStatusChange);
  e.setAttributeFunction("onViewportChange", this.viewModel.onViewportChange);
  e.setAttribute("routes", this.viewModel.routes);
  e.setAttribute("viewport", this.viewModel.viewport);
  e.setAttributeNumber("fitBoundsRequestKey", this.viewModel.fitBoundsRequestKey);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=197B file=dil_widgets/src/maps/MapSurface
// locals: this
// closure: e, u, i
function {
  this = this;
  e.beginComponent(u.NativeMapWebViewSurface, i, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=660B file=dil_widgets/src/maps/MapSurface
// closure: e, r, v, a, o, n
function {
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", v.unavailableSurface);
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", v.unavailableIcon);
  e.endRender();
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", v.unavailableTitle);
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", v.unavailableDetail);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/maps/MapSurface
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

// fn <atom:0>  args=3 vars=20 closure=0 cpool=6 bc=1227B file=dil_widgets/src/maps/MapSurface
// args: require, module, exports
// locals: e, t, i, r, a, o, n, s, l, c, d, u, b, MapSurface, <class_fields_init>, MapSurface#1, v
function {
  let v;
  let MapSurface#1;
  let b;
  let u;
  let d;
  let c;
  let l;
  let s;
  let n;
  let o;
  let a;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapSurface = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["webClass", "DILMapView"], "nuwW7MSfByh6IBHK");
  i = e.makeComponentPrototype(undefined, "5y1OnLk1AmmyugyS");
  r = e.makeNodePrototype("view", ["accessibilityLabel", "Interactive maps are not available on this device"], "7XO8wN5HmwcEMeFb");
  a = e.makeNodePrototype("label", ["value", "⌁"], "4Yp-_nc0CUfE-m-x");
  o = e.makeNodePrototype("label", ["value", "Map unavailable on this device"], "yAnawjJNsKxc0KPD");
  n = e.makeNodePrototype("label", ["value", "Places and coordinates are still available below."], "5KK8fDD0wJazJFme");
  s = require("dil_core/src/typography/DILDynamicFont");
  l = require("valdi_core/src/Component");
  c = require("valdi_core/src/Device");
  d = require("valdi_core/src/Style");
  u = require("./NativeMapWebViewSurface");
  b = require("./MapTypes");
  let MapSurface;
  let <class_fields_init>;
  class MapSurface extends l.Component { ... }
  <proto:MapSurface>.onCreate = function <atom:0>;
  <proto:MapSurface>.onRender = function <atom:0>;
  <proto:MapSurface>.renderBrowserSurface = function <atom:0>;
  <proto:MapSurface>.renderNativeWebViewSurface = function <atom:0>;
  <proto:MapSurface>.renderUnavailableSurface = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MapSurface>;
  MapSurface = function <atom:0>;
  // close_loc <class_fields_init>
  MapSurface#1 = function <atom:0>;
  exports.MapSurface = MapSurface#1;
  v = {browserSurface: new d.Style({accessibilityCategory: "image", flexGrow: 1, height: "100%", width: "100%"}), unavailableDetail: new d.Style({color: "color-text-secondary", font: s.dynamicSystemFontForSize(12), textAlign: "center"}), unavailableIcon: new d.Style({color: "color-text-secondary", font: s.dynamicSystemFontForSize(28)}), unavailableSurface: new d.Style({accessibilityCategory: "image", alignItems: "center", backgroundColor: "color-surface-secondary", flexDirection: "column", flexGrow: 1, gap: 8, height: "100%", justifyContent: "center", padding: 16, width: "100%"}), unavailableTitle: new d.Style({color: "color-text-prose", font: s.dynamicSystemFontForSize(15), textAlign: "center"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/maps/MapSurface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
