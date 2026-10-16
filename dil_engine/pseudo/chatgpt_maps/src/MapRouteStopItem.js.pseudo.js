// fn <atom:0>  args=0 vars=3 closure=10 cpool=0 bc=1363B file=chatgpt_maps/src/MapRouteStopItem
// locals: d, l, this
// closure: q, e, t, _, o, r, L, n, R, i
function {
  this = this;
  let l;
  let d;
  d = this.viewModel.row;
  l = q(d, this.viewModel.locale);
  e.beginRender(t, d.id);
  e.setAttributeStyle("style", _.row);
  this.renderStopDetails(d, l);
  if (((undefined === d.outgoingLeg))) goto L_52a;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", _.leg);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", _.rule);
  e.endRender();
  e.beginComponent(L.Text, n, undefined, undefined);
  e.setViewModelProperty("value", d.outgoingLeg);
  e.setViewModelProperty("typography", R.DesignTypography.Footnote);
  e.setViewModelProperty("tone", L.TextTone.Secondary);
  e.endComponent();
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", _.rule);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=104B file=chatgpt_maps/src/MapRouteStopItem
// closure: this, t
function {
  return this.context.onSelect(t.id);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=39B file=chatgpt_maps/src/MapRouteStopItem
// closure: this, o
function {
  this.renderTitle(o);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=2 bc=289B file=chatgpt_maps/src/MapRouteStopItem
// closure: this, t, o, e, A, p
function {
  e.beginComponent(A.Pressable, p, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", o.accessibilityLabel);
  e.setViewModelProperty("onPress", function <atom:0>);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=481B file=chatgpt_maps/src/MapRouteStopItem
// closure: e, h, y, this, t, o
function {
  e.beginComponent(h.MapRouteStopActions, y, undefined, undefined);
  if ((e.hasContext())) goto L_c5;
  e.setContext(this.context);
  e.setViewModelProperty("rowID", t.id);
  e.setViewModelProperty("title", o.title);
  e.setViewModelProperty("websiteURL", t.websiteURL);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=524B file=chatgpt_maps/src/MapRouteStopItem
// closure: e, c, this, S, m, t
function {
  e.beginRender(c, undefined);
  if (!(this.viewModel.isDarkMode)) goto L_a1;
  goto L_a6;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("colorPaletteName", "light");
  e.beginComponent(S.DILMarkdownComponent, m, undefined, undefined);
  e.setViewModelProperty("markdown", t.notes);
  e.setViewModelProperty("onOpenLink", this.context.onOpenLink);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=17 cpool=3 bc=1259B file=chatgpt_maps/src/MapRouteStopItem
// args: t, o
// locals: this
// closure: e, A, p, h, y, c, S, m, d, _, l, k, s, M, a, P, u
function {
  this = this;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", _.place);
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", _.header);
  if (!(t.currentLocation)) goto L_20f;
  e.beginComponent(k.Icon, s, undefined, undefined);
  e.setViewModelProperty("src", M.default.navigation);
  e.endComponent();
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", _.copy);
  if (!(t.currentLocation)) goto L_2d9;
  goto L_2dc;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  e.endRender();
  if ((t.currentLocation)) goto L_32e;
  function <atom:0>();
  e.endRender();
  if ((t.currentLocation)) goto L_496;
  e.beginComponent(P.MapRouteStopPhotos, u, undefined, undefined);
  e.setViewModelProperty("title", o.title);
  e.setViewModelProperty("urls", t.imageURLs);
  e.endComponent();
  if (((undefined === t.notes))) goto L_4c2;
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=553B file=chatgpt_maps/src/MapRouteStopItem
// args: t
// locals: this
// closure: e, g, _, L, v, R
function {
  this = this;
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", _.copy);
  e.beginComponent(L.Text, v, undefined, undefined);
  e.setViewModelProperty("value", t.title);
  e.setViewModelProperty("typography", R.DesignTypography.Headline);
  e.endComponent();
  this.renderMetadata(t.metadata);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=0 bc=849B file=chatgpt_maps/src/MapRouteStopItem
// args: t
// locals: o, r, e
// closure: R, I, e, b, _
function {
  let r;
  let o;
  if (!((0 === t.length))) goto L_d;
  return;
  o = R.resolveOAITypography(R.DesignTypography.Body, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  r = new I.AttributedTextBuilder();
  let e;
  for (const e of t) {
    r.append(e.text, {font: o.font, color: e.color});
  }
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", _.details);
  e.setAttribute("value", r.build());
  e.setAttributeString("font", o.font);
  e.setAttributeNumber("lineHeight", o.lineHeight);
  e.setAttributeNumber("lineHeightMultiple", o.lineHeightMultiple);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_maps/src/MapRouteStopItem
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

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=194B file=chatgpt_maps/src/MapRouteStopItem
// args: e
// closure: n, C
function {
  if (!((0 !== e.length))) goto L_c1;
  if (!((n.length > 0))) goto L_91;
  n.push({text: " � ", color: C.OAIColor.TextSecondary});
  // append([], 0, e)
  e;
  n.push.apply(n, []);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_maps/src/MapRouteStopItem
// args: e
function {
  return e.text;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_maps/src/MapRouteStopItem
// args: e
function {
  return e.text;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=12B file=chatgpt_maps/src/MapRouteStopItem
// args: e
function {
  if (!((undefined !== e))) goto L_b;
  return (e.length > 0);
}

// fn q  args=2 vars=7 closure=3 cpool=4 bc=856B file=chatgpt_maps/src/MapRouteStopItem
// args: e, t
// locals: o, r, n, i, d
// closure: C, w, x
function {
  let d;
  let i;
  let n;
  let r;
  let o;
  if (!(e.currentLocation)) goto L_7d;
  goto L_9f;
  // [栈深重同步 1 -> 0]
  o = e.title;
  r = x.presentMapPlace(e.facts, t);
  // append([], 0, r.details)
  r.details;
  n = [];
  i = function <atom:0>;
  if (!((undefined !== e.routeContext))) goto L_1bd;
  i([{text: e.routeContext, color: C.OAIColor.TextSecondary}]);
  i(r.secondaryDetails);
  d = [o, r.details.map(function <atom:0>).join(""), r.secondaryDetails.map(function <atom:0>).join(""), e.routeContext].filter(function <atom:0>).join(", ");
  return {title: o, metadata: n, accessibilityLabel: d};
}

// fn <atom:0>  args=3 vars=40 closure=0 cpool=7 bc=1936B file=chatgpt_maps/src/MapRouteStopItem
// args: require, module, exports
// locals: e, t, o, r, n, i, d, l, s, a, p, y, u, c, m, g, v, b, w, h, P, x, M, S, C, R, k, A, L, T, f, I, MapRouteStopItem, <class_fields_init>, MapRouteStopItem#1, q, _
function {
  q = function q;
  let _;
  let MapRouteStopItem#1;
  let I;
  let f;
  let T;
  let L;
  let A;
  let k;
  let R;
  let C;
  let S;
  let M;
  let x;
  let P;
  let h;
  let w;
  let b;
  let v;
  let g;
  let m;
  let c;
  let u;
  let y;
  let p;
  let a;
  let s;
  let l;
  let d;
  let i;
  let n;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapRouteStopItem = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "o_dOj51rFut-qsZN");
  o = e.makeNodePrototype("layout", undefined, "5tx__EWEN-LWDzRu");
  r = e.makeNodePrototype("view", undefined, "MTYxEn-vdh5KR0wY");
  n = e.makeComponentPrototype(["numberOfLines", 0], "hKwKaH_buGPyw5C-");
  i = e.makeNodePrototype("view", undefined, "qyWKuMig8Te4dnuz");
  d = e.makeNodePrototype("layout", undefined, "m-QUw2PdLdt-6vWp");
  l = e.makeNodePrototype("layout", undefined, "hedJFupPbQxn0zEq");
  s = e.makeComponentPrototype(["size", 24], "QaHu0hQ14E0BTf5Q");
  a = e.makeNodePrototype("layout", undefined, "79J1eOxZ0qLXCd1T");
  p = e.makeComponentPrototype(undefined, "HsU65todZys-N5FP");
  y = e.makeComponentPrototype(undefined, "3d3qUcpPulbOGZiH");
  u = e.makeComponentPrototype(undefined, "t2vEn0Tb3jlE9Xm2");
  c = e.makeNodePrototype("view", undefined, "FdsbvjsZJUnARy3r");
  m = e.makeComponentPrototype(undefined, "VxWygTR6Qnw2L6gr");
  g = e.makeNodePrototype("layout", undefined, "1YQWrF5I8OfN6yy8");
  v = e.makeComponentPrototype(["numberOfLines", 0], "X2ysAJxjoWKhIwVB");
  b = e.makeNodePrototype("label", undefined, "dc39MbcaS2Ich_9a");
  w = require("./Strings");
  h = require("./MapRouteStopActions");
  P = require("./MapRouteStopPhotos");
  x = require("./MapPlaceFacts");
  M = require("dil_icon_assets/res");
  S = require("dil_text/src/markdown/DILMarkdownComponent");
  C = require("oai_core/src/OAITokens");
  R = require("oai_core/src/OAITypography");
  k = require("oai_ui/src/components/Icon");
  A = require("oai_ui/src/components/Pressable");
  L = require("oai_ui/src/components/Text");
  T = require("valdi_core/src/Component");
  f = require("valdi_core/src/Style");
  I = require("valdi_core/src/utils/AttributedTextBuilder");
  let MapRouteStopItem;
  let <class_fields_init>;
  class MapRouteStopItem extends T.Component { ... }
  <proto:MapRouteStopItem>.onRender = function <atom:0>;
  <proto:MapRouteStopItem>.renderStopDetails = function <atom:0>;
  <proto:MapRouteStopItem>.renderTitle = function <atom:0>;
  <proto:MapRouteStopItem>.renderMetadata = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MapRouteStopItem>;
  MapRouteStopItem = function <atom:0>;
  // close_loc <class_fields_init>
  MapRouteStopItem#1 = function <atom:0>;
  exports.MapRouteStopItem = MapRouteStopItem#1;
  _ = {row: new f.Style({gap: 12, width: "100%"}), place: new f.Style({gap: 12, width: "100%"}), header: new f.Style({flexDirection: "row", alignItems: "center", gap: 12}), copy: new f.Style({flexGrow: 1, flexShrink: 1, gap: 4}), details: new f.Style({numberOfLines: 0, color: C.OAIColor.TextPrimary, flexShrink: 1}), leg: new f.Style({flexDirection: "row", alignItems: "center", gap: 12, paddingTop: 12, paddingBottom: 12}), rule: new f.Style({height: 0.5, flexGrow: 1, backgroundColor: C.OAIColor.BorderLight})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_maps/src/MapRouteStopItem
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
