// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=chatgpt_maps/src/MapRouteStopsContent
// closure: p
function {
  p.reconfigureDILColorPalettes();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=541B file=chatgpt_maps/src/MapRouteStopsContent
// args: o
// closure: e, v, d, this
function {
  e.beginComponent(v.MapRouteStopItem, d, o.id, undefined);
  if ((e.hasContext())) goto L_e6;
  e.setContext(this.context);
  e.setViewModelProperty("row", o);
  e.setViewModelProperty("locale", this.viewModel.locale);
  e.setViewModelProperty("isDarkMode", this.viewModel.isDarkMode);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=9 cpool=1 bc=742B file=chatgpt_maps/src/MapRouteStopsContent
// args: o
// closure: e, v, d, this, r, C, m, i, l
function {
  e.beginRender(r, o.id);
  e.setAttributeStyle("style", C.section);
  if (((undefined === o.title))) goto L_274;
  e.beginComponent(m.Text, i, undefined, undefined);
  e.setViewModelProperty("value", o.title);
  e.setViewModelProperty("typography", l.Typography.Subheadline);
  e.setViewModelProperty("tone", m.TextTone.Secondary);
  e.endComponent();
  o.rows.forEach(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=384B file=chatgpt_maps/src/MapRouteStopsContent
// closure: e, u, s, this
function {
  e.beginComponent(u.MapRouteSummaryPanel, s, undefined, undefined);
  if ((e.hasContext())) goto L_ec;
  e.setContext({onOpenDirections: this.context.onOpenDirections});
  e.setViewModelProperties(this.viewModel.summary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=13 cpool=2 bc=513B file=chatgpt_maps/src/MapRouteStopsContent
// closure: e, v, d, this, r, C, m, i, l, u, s, t, n
function {
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", C.scroll);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", C.content);
  this.viewModel.sections.forEach(function <atom:0>);
  if (((undefined === this.viewModel.summary))) goto L_1b0;
  function <atom:0>();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=14 cpool=1 bc=419B file=chatgpt_maps/src/MapRouteStopsContent
// locals: this
// closure: e, v, d, r, C, m, i, l, u, s, t, n, a, o
function {
  this = this;
  e.beginComponent(a.OAITheme, o, undefined, undefined);
  if (!(this.viewModel.isDarkMode)) goto L_108;
  goto L_14d;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("mode", a.OAIThemeMode.Light);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_maps/src/MapRouteStopsContent
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

// fn <atom:0>  args=3 vars=23 closure=0 cpool=3 bc=887B file=chatgpt_maps/src/MapRouteStopsContent
// args: require, module, exports
// locals: e, o, t, n, r, i, d, s, p, a, l, m, y, c, u, v, MapRouteStopsContent, <class_fields_init>, MapRouteStopsContent#1, C
function {
  let C;
  let MapRouteStopsContent#1;
  let v;
  let u;
  let c;
  let y;
  let m;
  let l;
  let a;
  let p;
  let s;
  let d;
  let i;
  let r;
  let n;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapRouteStopsContent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "Z7mQt2HaMRkr8sgB");
  t = e.makeNodePrototype("scroll", undefined, "UwxYZR4m7dl_rg91");
  n = e.makeNodePrototype("layout", undefined, "v0ff_pCnA5IrlvyC");
  r = e.makeNodePrototype("layout", undefined, "QGh4Z9iLnkgUJ5Jw");
  i = e.makeComponentPrototype(["numberOfLines", 0], "V6P2I6eNDaPjZ2Vh");
  d = e.makeComponentPrototype(undefined, "yNCKMhWkyI1VCyKw");
  s = e.makeComponentPrototype(undefined, "fnPBuCRFlSXf9woZ");
  p = require("dil_core/src/colors/DILColorsInit");
  a = require("oai_core/src/OAITheme");
  l = require("oai_core/src/OAITypography");
  m = require("oai_ui/src/components/Text");
  y = require("valdi_core/src/Component");
  c = require("valdi_core/src/Style");
  u = require("./MapRouteSummaryPanel");
  v = require("./MapRouteStopItem");
  let MapRouteStopsContent;
  let <class_fields_init>;
  class MapRouteStopsContent extends y.Component { ... }
  <proto:MapRouteStopsContent>.onCreate = function <atom:0>;
  <proto:MapRouteStopsContent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MapRouteStopsContent>;
  MapRouteStopsContent = function <atom:0>;
  // close_loc <class_fields_init>
  MapRouteStopsContent#1 = function <atom:0>;
  exports.MapRouteStopsContent = MapRouteStopsContent#1;
  C = {scroll: new c.Style({width: "100%", height: "100%"}), content: new c.Style({paddingLeft: 24, paddingRight: 24, paddingTop: 20, paddingBottom: 16, gap: 16}), section: new c.Style({gap: 16, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_maps/src/MapRouteStopsContent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
