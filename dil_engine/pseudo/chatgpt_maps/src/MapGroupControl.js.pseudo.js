// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=149B file=chatgpt_maps/src/MapGroupControl
// args: e
// closure: this
function {
  if (!((e !== this.viewModel.selectedID))) goto L_94;
  this.context.onSelect(e);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=chatgpt_maps/src/MapGroupControl
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
  this.selectGroup = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=72B file=chatgpt_maps/src/MapGroupControl
// args: e
// closure: y
function {
  return (e.id === y.selectedID);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=156B file=chatgpt_maps/src/MapGroupControl
// args: e
// closure: y
function {
  return {id: e.id, title: e.title, selected: (e.id === y.selectedID)};
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=0 bc=830B file=chatgpt_maps/src/MapGroupControl
// closure: e, i, C, u, n, v, s, m, d, p, c
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", C.pill);
  e.beginComponent(u.Text, n, undefined, undefined);
  e.setViewModelProperty("value", v.title);
  e.setViewModelProperty("typography", s.DesignTypography.CompactSubheadlineMedium);
  e.endComponent();
  e.beginComponent(m.Icon, d, undefined, undefined);
  e.setViewModelProperty("src", p.default.chevronDown);
  e.setViewModelProperty("color", c.OAIColor.IconPrimary);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=16 cpool=2 bc=609B file=chatgpt_maps/src/MapGroupControl
// closure: y, e, i, C, u, n, v, s, m, d, p, c, t, l, r, this
function {
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", C.container);
  e.beginComponent(l.NativeMenu, r, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", v.title);
  e.setViewModelProperty("actions", y.options.map(function <atom:0>));
  e.setViewModelProperty("onSelect", this.selectGroup);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=15 cpool=2 bc=516B file=chatgpt_maps/src/MapGroupControl
// locals: y, v, this
// closure: e, i, C, u, n, s, m, d, p, c, t, l, r, a, o
function {
  this = this;
  let v;
  let y;
  y = this.viewModel;
  v = y.options.find(function <atom:0>);
  if (!((undefined !== v))) goto L_203;
  e.beginComponent(a.OAITheme, o, undefined, undefined);
  if (!(y.isDarkMode)) goto L_169;
  goto L_1ae;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("mode", a.OAIThemeMode.Light);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=3 bc=982B file=chatgpt_maps/src/MapGroupControl
// args: require, module, exports
// locals: e, o, t, r, i, n, d, s, p, l, a, c, m, u, y, v, MapGroupControl, <class_fields_init>, MapGroupControl#1, C
function {
  let C;
  let MapGroupControl#1;
  let v;
  let y;
  let u;
  let m;
  let c;
  let a;
  let l;
  let p;
  let s;
  let d;
  let n;
  let i;
  let r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapGroupControl = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "BqDbsNMI4pjRF1Yr");
  t = e.makeNodePrototype("layout", undefined, "pleopf5uVHs8VS3K");
  r = e.makeComponentPrototype(["accessibilityId", "map-groups"], "O4polIn-nTIEDQ2M");
  i = e.makeNodePrototype("view", undefined, "kM5Quepmj66-vy75");
  n = e.makeComponentPrototype(undefined, "Wf4vHGAY4_VWVA9B");
  d = e.makeComponentPrototype(["size", 16], "FKFbLHJ1ZKvQleEU");
  s = require("oai_core/src/OAITypography");
  p = require("dil_icon_assets/res");
  l = require("native_menu/src/NativeMenu");
  a = require("oai_core/src/OAITheme");
  c = require("oai_core/src/OAITokens");
  m = require("oai_ui/src/components/Icon");
  u = require("oai_ui/src/components/Text");
  y = require("valdi_core/src/Component");
  v = require("valdi_core/src/Style");
  let MapGroupControl;
  let <class_fields_init>;
  class MapGroupControl extends y.Component { ... }
  <proto:MapGroupControl>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MapGroupControl>;
  MapGroupControl = function <atom:0>;
  // close_loc <class_fields_init>
  MapGroupControl#1 = function <atom:0>;
  exports.MapGroupControl = MapGroupControl#1;
  C = {container: new v.Style({alignSelf: "flex-start", justifyContent: "center"}), pill: new v.Style({flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 4, paddingLeft: 16, paddingRight: 12, paddingTop: 6, paddingBottom: 6, borderRadius: 100, borderWidth: 0.5, borderColor: c.OAIColor.BorderLight, backgroundColor: c.OAIColor.BgPrimary, minHeight: 36})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_maps/src/MapGroupControl
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
