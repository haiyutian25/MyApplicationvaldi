// fn <atom:0>  args=0 vars=5 closure=9 cpool=0 bc=1807B file=dil_widgets/src/widgets/Map
// locals: t, a, c, u, this
// closure: n, i, l, e, r, p, d, o, s
function {
  this = this;
  let u;
  let c;
  let a;
  let t;
  t = this.baseViewAttributes;
  n.DIL_BOX_ATTRIBUTES.apply(this.viewModel, t);
  t.backgroundColor = i.resolveDILBackgroundColor(this.viewModel.background, "surface-secondary");
  if (!((t.borderRadius == null))) goto L_14a;
  t.borderRadius;
  t.borderRadius = 8;
  if (!((t.height == null))) goto L_182;
  t.height;
  t.height = 220;
  if (!((t.width == null))) goto L_1bc;
  t.width;
  t.width = "100%";
  if (!((true === this.viewModel.frame))) goto L_22f;
  t.borderColor = "alpha-06";
  t.borderWidth = 1;
  1;
  a = l.normalizeMapMarkers(this.viewModel.markers);
  c = l.normalizeMapRoutes(this.viewModel.routes);
  u = l.resolveMapViewport({initialViewState: this.viewModel.initialViewState, markers: a, routes: c});
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", p.root);
  e.setAttributes(t);
  e.beginComponent(d.MapSurface, o, undefined, undefined);
  if (!((1 === a.length))) goto L_4e4;
  goto L_4e9;
  // [栈深重同步 8 -> 7]
  e.setViewModelProperty("accessibilityLabel", "Map with ".concat(a.length, " ", "markers"));
  if ((("dark" === this.viewModel.theme))) goto L_5fc;
  if (!((undefined === this.viewModel.theme))) goto L_5fc;
  e.setViewModelProperty("darkTheme", s.Device.isDarkMode());
  e.setViewModelProperty("interactive", true);
  e.setViewModelProperty("markers", a);
  e.setViewModelProperty("routes", c);
  e.setViewModelProperty("viewport", u);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Map
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

// fn <atom:0>  args=3 vars=17 closure=0 cpool=2 bc=591B file=dil_widgets/src/widgets/Map
// args: require, module, exports
// locals: e, r, o, t, i, s, a, d, l, n, DILMap, <class_fields_init>, DILMap#1, p
function {
  let p;
  let DILMap#1;
  let n;
  let l;
  let d;
  let a;
  let s;
  let i;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILMap = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = e.makeNodePrototype("view", undefined, "PT4KfE4yrWm3PqgW");
  o = e.makeComponentPrototype(undefined, "8o2eHHUplzNqbLs2");
  t = require("dil_core/src/DILComponent");
  i = require("dil_core/src/colors/DILColor");
  s = require("valdi_core/src/Device");
  a = require("valdi_core/src/Style");
  d = require("../maps/MapSurface");
  l = require("../maps/MapTypes");
  n = require("./attributes/DILBoxAttributes");
  let DILMap;
  let <class_fields_init>;
  class DILMap extends t.DILComponent { ... }
  <proto:DILMap>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILMap>;
  DILMap = function <atom:0>;
  // close_loc <class_fields_init>
  DILMap#1 = function <atom:0>;
  exports.DILMap = DILMap#1;
  // append([], 0, t.DIL_COMPONENT_PROPERTIES)
  // append([], t.DIL_COMPONENT_PROPERTIES, n.DIL_BOX_ATTRIBUTE_PROPERTIES)
  [][n.DIL_BOX_ATTRIBUTE_PROPERTIES] = "background";
  [][("background" ++)] = "flush";
  [][("flush" ++)] = "frame";
  [][("frame" ++)] = "initialViewState";
  [][("initialViewState" ++)] = "markers";
  [][("markers" ++)] = "routes";
  ("routes" ++);
  DILMap#1.properties = [];
  p = {root: new a.Style({flexDirection: "column", flexShrink: 0, slowClipping: true})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Map
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
