// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_maps/src/MapRouteSummaryPanel
// args: e
function {
  e.Driving = 0;
  e[0] = "Driving";
  e.Walking = 1;
  e[1] = "Walking";
  e.Cycling = 2;
  e[2] = "Cycling";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=115B file=chatgpt_maps/src/MapRouteSummaryPanel
// closure: t, this
function {
  if (!(t.compact)) goto L_4d;
  goto L_72;
  // [栈深重同步 1 -> 0]
  this.renderFullSummary();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=1 bc=426B file=chatgpt_maps/src/MapRouteSummaryPanel
// locals: t, this
// closure: e, v, o
function {
  this = this;
  let t;
  t = this.viewModel;
  e.beginComponent(v.OAITheme, o, undefined, undefined);
  if (!(t.isDarkMode)) goto L_10f;
  goto L_154;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("mode", v.OAIThemeMode.Light);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=825B file=chatgpt_maps/src/MapRouteSummaryPanel
// closure: e, g, n, c, b, r, this, P, i
function {
  e.beginComponent(g.Icon, n, undefined, undefined);
  e.setViewModelProperty("src", c.default.clock);
  e.endComponent();
  e.beginComponent(b.Text, r, undefined, undefined);
  if (!((this.viewModel.duration == null))) goto L_1b0;
  this.viewModel.duration;
  e.setViewModelProperty("value", "");
  e.setViewModelProperty("typography", P.Typography.SubheadlineMedium);
  e.endComponent();
  e.beginComponent(g.Icon, i, undefined, undefined);
  e.setViewModelProperty("src", c.default.chevronDown);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=12 cpool=1 bc=598B file=chatgpt_maps/src/MapRouteSummaryPanel
// locals: this
// closure: e, g, n, c, b, r, P, i, M, t, x, w
function {
  this = this;
  e.beginComponent(M.Pressable, t, undefined, undefined);
  e.setViewModelProperty("style", x.badge);
  if (!((this.viewModel.duration == null))) goto L_138;
  this.viewModel.duration;
  e.setViewModelProperty("accessibilityLabel", "".concat("", ", ", w.default.mapsRouteStops()));
  if (!((this.context == null))) goto L_1df;
  this.context;
  goto L_200;
  e.setViewModelProperty("onPress", undefined.onOpenStops);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=401B file=chatgpt_maps/src/MapRouteSummaryPanel
// args: o, t
// closure: e, b, l, P
function {
  e.beginComponent(b.Text, l, String(t), undefined);
  e.setViewModelProperty("value", o);
  e.setViewModelProperty("typography", P.Typography.Subheadline);
  e.setViewModelProperty("tone", b.TextTone.Secondary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=466B file=chatgpt_maps/src/MapRouteSummaryPanel
// closure: e, b, y, w, P, C
function {
  e.beginComponent(b.Text, y, undefined, undefined);
  e.setViewModelProperty("value", w.default.mapsOpenRoute());
  e.setViewModelProperty("typography", P.Typography.SubheadlineMedium);
  e.setViewModelProperty("color", C.OAIColor.TextInverse);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=483B file=chatgpt_maps/src/MapRouteSummaryPanel
// closure: e, b, y, w, P, C, M, m, x, this
function {
  e.beginComponent(M.Pressable, m, undefined, undefined);
  e.setViewModelProperty("style", x.button);
  e.setViewModelProperty("accessibilityLabel", w.default.mapsOpenRoute());
  if (!((this.context == null))) goto L_16c;
  this.context;
  goto L_18d;
  e.setViewModelProperty("onPress", undefined.onOpenDirections);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=401B file=chatgpt_maps/src/MapRouteSummaryPanel
// args: o, t
// closure: e, b, u, P
function {
  e.beginComponent(b.Text, u, String(t), undefined);
  e.setViewModelProperty("value", o);
  e.setViewModelProperty("typography", P.Typography.Caption);
  e.setViewModelProperty("tone", b.TextTone.Secondary);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=17 cpool=3 bc=1312B file=chatgpt_maps/src/MapRouteSummaryPanel
// locals: o, t, this
// closure: e, b, l, P, y, w, C, M, m, x, u, p, a, d, s, T, k
function {
  this = this;
  let t;
  let o;
  o = this.viewModel;
  if (!((o.directions == null))) goto L_59;
  o.directions;
  goto L_7a;
  t = (true === undefined.canOpen);
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", x.summary);
  if (((undefined === o.title))) goto L_261;
  e.beginComponent(b.Text, a, undefined, undefined);
  e.setViewModelProperty("value", o.title);
  e.setViewModelProperty("typography", P.Typography.Title3Semibold);
  e.endComponent();
  if (((undefined === o.narrative))) goto L_3ca;
  e.beginComponent(b.Text, d, undefined, undefined);
  e.setViewModelProperty("value", o.narrative);
  e.setViewModelProperty("typography", P.Typography.Body);
  e.endComponent();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", x.metrics);
  T(o).forEach(function <atom:0>);
  e.endRender();
  if (!(t)) goto L_4a8;
  function <atom:0>();
  k(o.directions).forEach(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_maps/src/MapRouteSummaryPanel
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

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=chatgpt_maps/src/MapRouteSummaryPanel
// args: e
function {
  return (undefined !== e);
}

// fn T  args=1 vars=1 closure=1 cpool=1 bc=145B file=chatgpt_maps/src/MapRouteSummaryPanel
// args: e
// closure: V
function {
  return [V(e.mode), e.distance, e.duration].filter(function <atom:0>);   // tail call
}

// fn k  args=1 vars=2 closure=1 cpool=0 bc=411B file=chatgpt_maps/src/MapRouteSummaryPanel
// args: e
// locals: o
// closure: w
function {
  let o;
  o = [];
  if (!((e == null))) goto L_11;
  e;
  goto L_32;
  if (!((undefined !== undefined.googleMapsStopLimit))) goto L_d1;
  o.push(w.default.mapsRouteGoogleStopLimit(String(e.googleMapsStopLimit)));
  if (!((e == null))) goto L_dc;
  e;
  goto L_fd;
  if (!((undefined !== undefined.requiredAppleMapsVersion))) goto L_196;
  o.push(w.default.mapsRouteAppleVersionLimit(e.requiredAppleMapsVersion));
  return o;
}

// fn V  args=1 vars=1 closure=2 cpool=0 bc=337B file=chatgpt_maps/src/MapRouteSummaryPanel
// args: e
// closure: S, w
function {
  if (!((e === S.Driving))) goto L_6f;
  return w.default.mapsRouteDrive();   // tail call
  if (!((e === S.Walking))) goto L_dd;
  return w.default.mapsRouteWalk();   // tail call
  if (!((e === S.Cycling))) goto L_14b;
  return w.default.mapsRouteCycle();   // tail call
  if (!((e === undefined))) goto L_150;
  e;
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn <atom:0>  args=3 vars=35 closure=0 cpool=8 bc=1621B file=chatgpt_maps/src/MapRouteSummaryPanel
// args: require, module, exports
// locals: e, o, t, n, r, i, p, a, d, s, l, m, y, u, c, g, v, C, P, M, b, w, f, h, S, MapRouteSummaryPanel, <class_fields_init>, MapRouteSummaryPanel#1, T, k, V, x
function {
  T = function T;
  k = function k;
  V = function V;
  let x;
  let MapRouteSummaryPanel#1;
  let h;
  let f;
  let w;
  let b;
  let M;
  let P;
  let C;
  let v;
  let g;
  let c;
  let u;
  let y;
  let m;
  let l;
  let s;
  let d;
  let a;
  let p;
  let i;
  let r;
  let n;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapRouteTravelMode = undefined;
  exports.MapRouteSummaryPanel = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "pUdoaWRgoqLbkY1g");
  t = e.makeComponentPrototype(undefined, "Iqyk6JcDW6B-CEYr");
  n = e.makeComponentPrototype(["size", 16], "_Y_FjyxfUfzSwN92");
  r = e.makeComponentPrototype(undefined, "mUYbJfeMGblPEap8");
  i = e.makeComponentPrototype(["size", 16], "skfpJuM6QB7r6XEM");
  p = e.makeNodePrototype("layout", undefined, "ysfcwujnpdLQ4fe5");
  a = e.makeComponentPrototype(["numberOfLines", 0], "9i_H40-YLsXFpomb");
  d = e.makeComponentPrototype(["numberOfLines", 0], "jxhGCvziq2JAVCDx");
  s = e.makeNodePrototype("layout", undefined, "rTKIndeRORYLMH-C");
  l = e.makeComponentPrototype(undefined, "_vJtbRNcOnwPkWzm");
  m = e.makeComponentPrototype(undefined, "NkEXJn7fA5BCZ4ED");
  y = e.makeComponentPrototype(["numberOfLines", 0], "6NL4XbmeFIfjTv76");
  u = e.makeComponentPrototype(["numberOfLines", 0], "eYCEkN3DPgBzpeQD");
  c = require("dil_icon_assets/res");
  g = require("oai_ui/src/components/Icon");
  v = require("oai_core/src/OAITheme");
  C = require("oai_core/src/OAITokens");
  P = require("oai_core/src/OAITypography");
  M = require("oai_ui/src/components/Pressable");
  b = require("oai_ui/src/components/Text");
  w = require("./Strings");
  f = require("valdi_core/src/Component");
  h = require("valdi_core/src/Style");
  if ((S)) goto L_3dd;
  S = {};
  exports.MapRouteTravelMode = {};
  !function <atom:0>({});
  let MapRouteSummaryPanel;
  let <class_fields_init>;
  class MapRouteSummaryPanel extends f.Component { ... }
  <proto:MapRouteSummaryPanel>.onRender = function <atom:0>;
  <proto:MapRouteSummaryPanel>.renderCompactSummary = function <atom:0>;
  <proto:MapRouteSummaryPanel>.renderFullSummary = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MapRouteSummaryPanel>;
  MapRouteSummaryPanel = function <atom:0>;
  // close_loc <class_fields_init>
  MapRouteSummaryPanel#1 = function <atom:0>;
  exports.MapRouteSummaryPanel = MapRouteSummaryPanel#1;
  x = {summary: new h.Style({width: "100%", gap: 12, paddingTop: 8, paddingBottom: 8}), metrics: new h.Style({flexDirection: "row", flexWrap: "wrap", columnGap: 12, rowGap: 4}), button: new h.Style({alignSelf: "flex-start", minHeight: 44, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 100, backgroundColor: C.OAIColor.InteractiveBgPrimaryDefault, justifyContent: "center"}), badge: new h.Style({flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start", paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, borderRadius: 100, backgroundColor: C.OAIColor.BgPrimary})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_maps/src/MapRouteSummaryPanel
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
