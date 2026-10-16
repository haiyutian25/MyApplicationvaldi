// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=chatgpt_maps/src/MapPlaceCardLoadingNotes
function {
  return "�";
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=385B file=chatgpt_maps/src/MapPlaceCardLoadingNotes
// args: o
// closure: e, n, b, s
function {
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", b.lineSlot);
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", b.bar);
  e.setAttributeString("width", ((100 * o) + "%"));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=2 bc=734B file=chatgpt_maps/src/MapPlaceCardLoadingNotes
// closure: e, n, b, s, t, p, i, a, d, r
function {
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", b.lines);
  e.beginComponent(p.Text, i, undefined, undefined);
  e.setViewModelProperty("typography", a.DesignTypography.Subheadline);
  e.setViewModelProperty("value", d.map(function <atom:0>).join("
"));
  e.endComponent();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", b.bars);
  d.map(function <atom:0>);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=13 cpool=1 bc=519B file=chatgpt_maps/src/MapPlaceCardLoadingNotes
// locals: d, this
// closure: e, n, b, s, t, p, i, a, r, u, l, o, m
function {
  this = this;
  let d;
  d = u.slice(0, this.viewModel.lineLimit);
  if (!((0 !== d.length))) goto L_206;
  e.beginComponent(l.Shimmer, o, undefined, undefined);
  e.setViewModelProperty("enabled", !this.viewModel.reduceMotion);
  e.setViewModelProperty("accessibilityLabel", m.default.mapsCardLoadingNotes());
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_maps/src/MapPlaceCardLoadingNotes
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

// fn <atom:0>  args=3 vars=22 closure=0 cpool=2 bc=983B file=chatgpt_maps/src/MapPlaceCardLoadingNotes
// args: require, module, exports
// locals: e, o, t, i, r, n, s, d, a, l, p, y, c, m, MapPlaceCardLoadingNotes, <class_fields_init>, MapPlaceCardLoadingNotes#1, u, b
function {
  let b;
  let u;
  let MapPlaceCardLoadingNotes#1;
  let m;
  let c;
  let y;
  let p;
  let l;
  let a;
  let d;
  let s;
  let n;
  let r;
  let i;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapPlaceCardLoadingNotes = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "CKVrItroBIWsHPs0");
  t = e.makeNodePrototype("layout", undefined, "Yv1v4sba7PstvIP0");
  i = e.makeComponentPrototype(["opacity", 0, "numberOfLines", 0], "nQk-v_p_mo5xAmDc");
  r = e.makeNodePrototype("layout", undefined, "HZgS1-IVaRCIbqBA");
  n = e.makeNodePrototype("layout", undefined, "IUMUH3mwoCUo4eRn");
  s = e.makeNodePrototype("view", undefined, "4soGM_hsWeO8Gg-x");
  d = require("oai_core/src/OAITokens");
  a = require("oai_core/src/OAITypography");
  l = require("oai_ui/src/components/Shimmer");
  p = require("oai_ui/src/components/Text");
  y = require("valdi_core/src/Component");
  c = require("valdi_core/src/Style");
  m = require("./Strings");
  let MapPlaceCardLoadingNotes;
  let <class_fields_init>;
  class MapPlaceCardLoadingNotes extends y.Component { ... }
  <proto:MapPlaceCardLoadingNotes>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MapPlaceCardLoadingNotes>;
  MapPlaceCardLoadingNotes = function <atom:0>;
  // close_loc <class_fields_init>
  MapPlaceCardLoadingNotes#1 = function <atom:0>;
  exports.MapPlaceCardLoadingNotes = MapPlaceCardLoadingNotes#1;
  u = [1, (2 / 3), (1 / 3)];
  b = {lines: new c.Style({width: "100%", accessibilityNavigation: "ignored"}), bars: new c.Style({position: "absolute", top: 0, bottom: 0, left: 0, right: 0}), lineSlot: new c.Style({flexGrow: 1, flexBasis: 0, justifyContent: "center"}), bar: new c.Style({height: "60%", backgroundColor: d.OAIColor.BgTertiary, borderRadius: 4})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_maps/src/MapPlaceCardLoadingNotes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
