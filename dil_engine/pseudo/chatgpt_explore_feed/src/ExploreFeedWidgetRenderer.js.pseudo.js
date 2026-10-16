// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=86B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// args: e
// closure: a, d
function {
  if (!((a.getProperty(e) == null))) goto L_55;
  a.getProperty(e);
  return d.getProperty(e);
}

// fn <atom:0>  args=4 vars=4 closure=5 cpool=0 bc=54B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// args: e, r, d, a
// closure: V, n, t, i, o
function {
  return V(n.create(e, r, d, a), t, i, o);   // tail call
}

// fn S  args=3 vars=8 closure=2 cpool=2 bc=542B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// args: e, t, o
// locals: r, i, n, d, a
// closure: V, m
function {
  let r;
  r = {};
  let i;
  // close_loc i
  for (const i of Object.keys(e)) {
    let a;
    let d;
    let n;
    n = e[i];
    if (!((n.propertiesSchema == null))) goto L_be;
    n.propertiesSchema;
    d = new m.DILPropertiesSchema(n.properties);
    a = new m.DILPropertiesSchema(["logging_metadata", "isHidden"]);
    // append([], 0, n.properties)
    [][n.properties] = "logging_metadata";
    [][("logging_metadata" ++)] = "isHidden";
    ("isHidden" ++);
    // append([], 0, d.staticPropertyNames)
    // append([], d.staticPropertyNames, a.staticPropertyNames)
    a.staticPropertyNames;
    // append([], 0, d.dynamicPropertyNames)
    // append([], d.dynamicPropertyNames, a.dynamicPropertyNames)
    a.dynamicPropertyNames;
    r[i] = {properties: [], propertiesSchema: {staticPropertyNames: [], dynamicPropertyNames: [], getProperty: function <atom:0>}, create: function <atom:0>};
    // close_loc a
    // close_loc d
    // close_loc n
    // close_loc i
  }
  // close_loc i
  return r;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// closure: R
function {
  return R.animateInitialContent;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=1 bc=378B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// locals: e
// closure: R, V, P, m, _, g, h, y, M
function {
  let e;
  if (!(("Markdown" === V))) goto L_d4;
  goto L_f8;
  // [栈深重同步 1 -> 0]
  if (!(R.animateInitialContent)) goto L_16b;
  goto L_16e;
  // [栈深重同步 1 -> 0]
  e = h;
  M(_, e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=5B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// closure: E
function {
  E();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=287B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// closure: E, q, e, C, t, x, f, I
function {
  if (!(q)) goto L_11a;
  e.beginComponent(C.FeedItemActionScope, t, undefined, undefined);
  e.setViewModelProperty("node", {id: x, logging_metadata: f});
  e.setViewModelProperty("runWithActionContext", I);
  e.setUnnamedSlot(function <atom:0>);
  goto L_11e;
  // [栈深重同步 1 -> 0]
  E();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=5B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// closure: F
function {
  F();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=308B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// closure: F, D, e, a, o, R
function {
  if (!((undefined !== D))) goto L_12f;
  e.beginComponent(a.ExploreFeedClickScope, o, undefined, undefined);
  e.setViewModelProperty("unit", D);
  e.setViewModelProperty("onClicked", R.onClicked);
  e.setUnnamedSlot(function <atom:0>);
  goto L_133;
  // [栈深重同步 1 -> 0]
  F();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=5B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// closure: B
function {
  B();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=387B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// closure: B, q, e, v, r, R, D
function {
  if (!(q)) goto L_17e;
  e.beginComponent(v.FeedItemVisibilityObserver, r, undefined, undefined);
  e.setViewModelProperty("tracker", R.visibilityTracker);
  e.setViewModelProperty("geometryGeneration", R.visibilityGeneration);
  e.setViewModelProperty("unit", D);
  e.setUnnamedSlot(function <atom:0>);
  goto L_182;
  // [栈深重同步 1 -> 0]
  B();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=5B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// closure: O
function {
  O();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=5B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// closure: O
function {
  O();
  return;
}

// fn <atom:0>  args=2 vars=15 closure=26 cpool=6 bc=2036B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// args: _, h
// locals: R, f, x, q, D, L, A, E, F, B, O, W, N
// closure: V, P, m, g, y, M, e, C, t, I, a, o, v, r, S, b, w, l, u, k, c, p, i, d, s, n
function {
  let N;
  let W;
  let O;
  let B;
  let F;
  let E;
  let A;
  let L;
  let D;
  let q;
  let x;
  let f;
  let R;
  R = S();
  f = m.props.getPropertyValueAsMap("logging_metadata", _);
  if (!((m.props.nodeIdProperty == null))) goto L_c4;
  m.props.nodeIdProperty;
  goto L_e9;
  x = undefined.getValue(_);
  if (!(("string" == typeof x))) goto L_18c;
  if (!((x.trim().length > 0))) goto L_18c;
  if (!((undefined !== f))) goto L_18c;
  if (!(("number" == typeof f.feed_position))) goto L_18c;
  q = ("string" == typeof f.display_type);
  if (!(q)) goto L_219;
  if (!((undefined !== R.feedId))) goto L_219;
  goto L_21a;
  // [栈深重同步 1 -> 0]
  D = undefined;
  if (!((undefined !== D))) goto L_273;
  if (!(w.has(V))) goto L_273;
  goto L_274;
  // [栈深重同步 1 -> 0]
  L = undefined;
  if (!(("Card" === V))) goto L_398;
  if (!((false === m.props.getPropertyValueAsBoolean("shadow", _)))) goto L_398;
  if (!((m.props.getPropertyValueAsMap("style", _) == null))) goto L_32a;
  m.props.getPropertyValueAsMap("style", _);
  goto L_34b;
  if (!((undefined.boxShadow === l.EXPLORE_CARD_BOX_SHADOW))) goto L_398;
  goto L_399;
  // [栈深重同步 1 -> 0]
  A = undefined;
  E = u.createReusableCallback(function <atom:0>);
  F = u.createReusableCallback(function <atom:0>);
  B = u.createReusableCallback(function <atom:0>);
  O = u.createReusableCallback(function <atom:0>);
  W = m.props.getPropertyValue("isHidden", _);
  if (!((x == null))) goto L_514;
  x;
  N = "".concat(k, ":", c.getDILEachIndexPath(h).join("."), ":", "");
  if ((w.has(V))) goto L_54a;
  if (!((undefined !== A))) goto L_721;
  e.beginComponent(p.ExploreWidgetRoot, i, N, undefined);
  e.setViewModelProperty("unit", D);
  e.setViewModelProperty("loggingMetadata", f);
  e.setViewModelProperty("menu", L);
  e.setViewModelProperty("boxShadow", A);
  if (((W instanceof d.DILWidgetBinding))) goto L_6c1;
  if (!(("boolean" == typeof W))) goto L_6c8;
  goto L_6c9;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("isHidden", undefined);
  e.setUnnamedSlot(function <atom:0>);
  goto L_7f3;
  // [栈深重同步 1 -> 0]
  e.beginComponent(s.DILRootContainerProvider, n, N, undefined);
  e.setViewModelProperty("value", undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn V  args=4 vars=6 closure=21 cpool=1 bc=106B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// args: m, S, V, I
// locals: M, k
// closure: P, g, y, e, C, t, a, o, v, r, b, w, l, u, c, p, i, d, s, n, _
function {
  let k;
  let M;
  M = m.onRender.bind(m);
  _ = <__new>;
  k = ("feed-item-visibility-" + (_++));
  m.onRender = function <atom:0>;
  return m;
}

// fn <atom:0>  args=3 vars=27 closure=0 cpool=2 bc=610B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// args: require, module, exports
// locals: e, t, o, r, i, n, d, a, s, p, l, c, m, g, y, u, P, C, v, b, S, _, V, w
function {
  S = function S;
  V = function V;
  let w;
  let _;
  let b;
  let v;
  let C;
  let P;
  let u;
  let y;
  let g;
  let m;
  let c;
  let l;
  let p;
  let s;
  let a;
  let d;
  let n;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.exploreFeedWidgets = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "jFbFE1Joowx3T2zf");
  o = e.makeComponentPrototype(undefined, "6heXRh-BodJA_PLt");
  r = e.makeComponentPrototype(undefined, "brar0EB_lPkq-VHP");
  i = e.makeComponentPrototype(undefined, "oO0_gN0lkCegsDul");
  n = e.makeComponentPrototype(undefined, "9WFc0NSLdfoBVttS");
  d = require("dil_cel/src/WidgetBinding");
  a = require("./ExploreFeedClickScope");
  s = require("dil_widgets/src/widgets/RootContainer");
  p = require("./ExploreWidgetMenu");
  l = require("./ExploreFeedCardAppearance");
  c = require("dil_compiler/src/intrinsics/Each");
  m = require("dil_compiler/src/DILPropertiesSchema");
  g = require("dil_compiler/src/DILStreamingRenderState");
  y = require("dil_renderer/src/DILRenderer");
  u = require("valdi_core/src/utils/Callback");
  P = require("valdi_core/src/Remember");
  C = require("./FeedItemActionScope");
  v = require("./FeedItemVisibilityObserver");
  b = require("./FeedItemVisibilityMetadata");
  exports.exploreFeedWidgets = S;
  _ = 0;
  w = new Set(["Card", "Basic", "Box", "Col", "Row", "Pressable", "BaseCarousel.Item", "Carousel.Item"]);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
