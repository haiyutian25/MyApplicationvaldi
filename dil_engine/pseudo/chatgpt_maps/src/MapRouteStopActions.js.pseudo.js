// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=465B file=chatgpt_maps/src/MapRouteStopActions
// args: e
// locals: t
// closure: this
function {
  let t;
  t = this.viewModel;
  if (!((e === "details"))) goto L_a2;
  this.context.onSelect(t.rowID);
  goto L_1d0;
  if (!((e === "maps"))) goto L_124;
  if (!((this.context.onOpenStopDirections == null))) goto L_f9;
  this.context.onOpenStopDirections;
  this.context;
  goto L_120;
  // [栈深重同步 2 -> 3]
  <?>.call(undefined, t.rowID);
  goto L_1d0;
  if (!((e === "website"))) goto L_1d0;
  if (!((undefined !== t.websiteURL))) goto L_1cf;
  if (!((this.context.onOpenLink == null))) goto L_1a8;
  this.context.onOpenLink;
  this.context;
  goto L_1cf;
  // [栈深重同步 2 -> 3]
  <?>.call(undefined, t.websiteURL);
  e;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=chatgpt_maps/src/MapRouteStopActions
// locals: this, this.active_func, new.target, arguments
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
  this.selectAction = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=82B file=chatgpt_maps/src/MapRouteStopActions
// closure: this, m
function {
  if (!((this.context.onShare == null))) goto L_4b;
  this.context.onShare;
  this.context;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, m);
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=400B file=chatgpt_maps/src/MapRouteStopActions
// closure: e, i, S, u, n, l
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", S.actionSurface);
  e.beginComponent(u.Icon, n, undefined, undefined);
  e.setViewModelProperty("src", l.default.share);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=2 bc=411B file=chatgpt_maps/src/MapRouteStopActions
// closure: this, m, e, i, S, u, n, l, y, o, b, v
function {
  e.beginComponent(y.Pressable, o, undefined, undefined);
  e.setViewModelProperty("style", S.actionTarget);
  e.setViewModelProperty("accessibilityLabel", b.default.mapsSharePlace(v));
  e.setViewModelProperty("onPress", function <atom:0>);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=565B file=chatgpt_maps/src/MapRouteStopActions
// closure: e, d, S, a, u, c, l
function {
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", S.actionTarget);
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", S.actionSurface);
  e.beginComponent(u.Icon, c, undefined, undefined);
  e.setViewModelProperty("src", l.default.ellipsis);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=16 cpool=2 bc=1367B file=chatgpt_maps/src/MapRouteStopActions
// locals: m, v, this
// closure: e, i, S, u, n, l, y, o, b, d, a, c, t, s, p, r
function {
  this = this;
  let v;
  let m;
  if (((undefined === undefined))) goto L_57;
  m = <to_object>(undefined).rowID;
  v = <to_object>(undefined).title;
  <to_object>(undefined);
  goto L_7c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", S.actions);
  if (((undefined === this.context.onShare))) goto L_145;
  function <atom:0>();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", S.menu);
  e.beginComponent(p.NativeMenu, r, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", b.default.mapsPlaceActions(v));
  if (!((undefined === this.context.onOpenStopDirections))) goto L_35d;
  goto L_3b8;
  // [栈深重同步 6 -> 5]
  // append([{id: "details", title: b.default.mapsViewPlace()}], 1, [{id: "maps", title: b.default.mapsOpenInMaps()}])
  if (!((undefined === this.viewModel.websiteURL))) goto L_405;
  goto L_460;
  // [栈深重同步 6 -> 5]
  // append([{id: "details", title: b.default.mapsViewPlace()}], [{id: "maps", title: b.default.mapsOpenInMaps()}], [{id: "website", title: b.default.mapsVisitWebsite()}])
  [{id: "website", title: b.default.mapsVisitWebsite()}];
  e.setViewModelProperty("actions", [{id: "details", title: b.default.mapsViewPlace()}]);
  e.setViewModelProperty("onSelect", this.selectAction);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=2 bc=1161B file=chatgpt_maps/src/MapRouteStopActions
// args: require, module, exports
// locals: e, t, o, i, n, s, r, d, a, c, l, p, u, m, y, v, w, b, MapRouteStopActions, <class_fields_init>, MapRouteStopActions#1, S
function {
  let S;
  let MapRouteStopActions#1;
  let b;
  let w;
  let v;
  let y;
  let m;
  let u;
  let p;
  let l;
  let c;
  let a;
  let d;
  let r;
  let s;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapRouteStopActions = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "Kn3eGC45sFV9MFDU");
  o = e.makeComponentPrototype(undefined, "OfEUYgplrJ4czM_W");
  i = e.makeNodePrototype("view", undefined, "3dqoKB6xwBSL8zbo");
  n = e.makeComponentPrototype(["size", 20], "GrK390GqK3jRmSeP");
  s = e.makeNodePrototype("layout", undefined, "s8shN1mY-ax0-bfQ");
  r = e.makeComponentPrototype(undefined, "PiUTGYKnmvvWmo3g");
  d = e.makeNodePrototype("view", undefined, "jRHi2iU2h9xh-hqH");
  a = e.makeNodePrototype("view", undefined, "w3gcDQsMObsFzBlE");
  c = e.makeComponentPrototype(["size", 20], "ZAeIEUWss0MwN20c");
  l = require("dil_icon_assets/res");
  p = require("native_menu/src/NativeMenu");
  u = require("oai_ui/src/components/Icon");
  m = require("oai_core/src/OAITokens");
  y = require("oai_ui/src/components/Pressable");
  v = require("valdi_core/src/Component");
  w = require("valdi_core/src/Style");
  b = require("./Strings");
  let MapRouteStopActions;
  let <class_fields_init>;
  class MapRouteStopActions extends v.Component { ... }
  <proto:MapRouteStopActions>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MapRouteStopActions>;
  MapRouteStopActions = function <atom:0>;
  // close_loc <class_fields_init>
  MapRouteStopActions#1 = function <atom:0>;
  exports.MapRouteStopActions = MapRouteStopActions#1;
  S = {menu: new w.Style({width: 44, flexShrink: 0}), actionTarget: new w.Style({width: 44, height: 44, alignItems: "center", justifyContent: "center"}), actionSurface: new w.Style({width: 36, height: 36, borderRadius: 12, backgroundColor: m.OAIColor.BgTertiary, alignItems: "center", justifyContent: "center"}), actions: new w.Style({flexDirection: "row", alignItems: "center", flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_maps/src/MapRouteStopActions
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
