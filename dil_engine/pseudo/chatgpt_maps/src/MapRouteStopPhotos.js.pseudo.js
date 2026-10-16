// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=353B file=chatgpt_maps/src/MapRouteStopPhotos
// args: o
// closure: e, i, r, n, this
function {
  e.beginComponent(i.Image, r, o, undefined);
  e.setViewModelProperty("src", o);
  e.setViewModelProperty("accessibilityLabel", n.default.mapsPlacePhoto(this.viewModel.title));
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=515B file=chatgpt_maps/src/MapRouteStopPhotos
// locals: this
// closure: e, i, r, n, o, d, t
function {
  this = this;
  if (!((0 !== this.viewModel.urls.length))) goto L_202;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", d.gallery);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", d.photos);
  this.viewModel.urls.forEach(function <atom:0>);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_maps/src/MapRouteStopPhotos
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

// fn <atom:0>  args=3 vars=15 closure=0 cpool=2 bc=572B file=chatgpt_maps/src/MapRouteStopPhotos
// args: require, module, exports
// locals: e, o, t, r, i, s, l, n, MapRouteStopPhotos, <class_fields_init>, MapRouteStopPhotos#1, d
function {
  let d;
  let MapRouteStopPhotos#1;
  let n;
  let l;
  let s;
  let i;
  let r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapRouteStopPhotos = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeNodePrototype("scroll", undefined, "I2ZM7UraMmI5DSP1");
  t = e.makeNodePrototype("layout", undefined, "DOnKXN3lXVgmBndV");
  r = e.makeComponentPrototype(["width", 144, "height", 108, "radius", 12], "JTzVgeuf9lpBWdYz");
  i = require("oai_ui/src/components/Image");
  s = require("valdi_core/src/Component");
  l = require("valdi_core/src/Style");
  n = require("./Strings");
  let MapRouteStopPhotos;
  let <class_fields_init>;
  class MapRouteStopPhotos extends s.Component { ... }
  <proto:MapRouteStopPhotos>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MapRouteStopPhotos>;
  MapRouteStopPhotos = function <atom:0>;
  // close_loc <class_fields_init>
  MapRouteStopPhotos#1 = function <atom:0>;
  exports.MapRouteStopPhotos = MapRouteStopPhotos#1;
  d = {photos: new l.Style({flexDirection: "row", gap: 12}), gallery: new l.Style({horizontal: true, showsHorizontalScrollIndicator: false, height: 108, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_maps/src/MapRouteStopPhotos
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
