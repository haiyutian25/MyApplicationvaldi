// fn <atom:0>  args=0 vars=0 closure=64 cpool=0 bc=4206B file=dil_widgets/src/WidgetsRegistry
// closure: t, i, a, r, d, n, s, g, W, D, c, C, l, m, F, u, I, R, w, v, y, We, _, p, E, P, T, q, k, L, S, h, A, B, b, M, G, O, N, H, V, f, z, Y, j, X, J, U, K, Q, Z, $, ee, re, te, ie, oe, ae, de, se, ge, ne, ce, Ce
function {
  null;
  t.INTRINSICS_WIDGETS_MAP;
  null;
  i.DIL_TEXT_WIDGETS_MAP;
  {Animate: a.AnimateWidgetFactory, Animate.Item: a.AnimateItemWidgetFactory, AnimateGroup: a.AnimateGroupWidgetFactory, AudioPlayer: r.makeWidgetFactoryForComponentClass(d.AudioPlayer), BaseCarousel: n.BaseCarouselWidgetFactory, BaseCarousel.Item: s.BaseCarouselItemWidgetFactory, BaseCarousel.MediaItem: g.BaseCarouselMediaItemWidgetFactory, Carousel: n.BaseCarouselWidgetFactory, Carousel.Item: s.BaseCarouselItemWidgetFactory, Carousel.MediaItem: g.BaseCarouselMediaItemWidgetFactory, Badge: W.BadgeWidgetFactory, Basic: D.makeDILFlexContainerWidgetFactory(c.Basic), Box: C.BoxWidgetFactory, Button: r.makeWidgetFactoryForComponentClass(l.Button), Card: m.CardWidgetFactory, CardCarousel: F.CardCarouselWidgetFactory, CardLinkItem: r.makeWidgetFactoryForComponentClass(u.CardLinkItem), Celebration: r.makeWidgetFactoryForComponentClass(I.Celebration), Chart: R.ChartWebWidgetRendererFactory, Checkbox: r.makeWidgetFactoryForComponentClass(w.Checkbox), Cite: v.InlineWidgetFactory}[y.CLIENT_DEFINED_WIDGET_TYPE] = We;
  We;
  return {Animate: a.AnimateWidgetFactory, Animate.Item: a.AnimateItemWidgetFactory, AnimateGroup: a.AnimateGroupWidgetFactory, AudioPlayer: r.makeWidgetFactoryForComponentClass(d.AudioPlayer), BaseCarousel: n.BaseCarouselWidgetFactory, BaseCarousel.Item: s.BaseCarouselItemWidgetFactory, BaseCarousel.MediaItem: g.BaseCarouselMediaItemWidgetFactory, Carousel: n.BaseCarouselWidgetFactory, Carousel.Item: s.BaseCarouselItemWidgetFactory, Carousel.MediaItem: g.BaseCarouselMediaItemWidgetFactory, Badge: W.BadgeWidgetFactory, Basic: D.makeDILFlexContainerWidgetFactory(c.Basic), Box: C.BoxWidgetFactory, Button: r.makeWidgetFactoryForComponentClass(l.Button), Card: m.CardWidgetFactory, CardCarousel: F.CardCarouselWidgetFactory, CardLinkItem: r.makeWidgetFactoryForComponentClass(u.CardLinkItem), Celebration: r.makeWidgetFactoryForComponentClass(I.Celebration), Chart: R.ChartWebWidgetRendererFactory, Checkbox: r.makeWidgetFactoryForComponentClass(w.Checkbox), Cite: v.InlineWidgetFactory, ChartsWidgetV2: We, Col: D.makeDILFlexContainerWidgetFactory(_.Col), DatePicker: p.DatePickerWidgetFactory, Divider: E.DividerWidgetFactory, Favicon: P.FaviconWidgetFactory, Flow: T.FlowWidgetFactory, Flow.Item: r.makeWidgetFactoryForComponentClass(q.FlowItem), FootballLocationIndicator: r.makeWidgetFactoryForComponentClass(k.FootballLocationIndicator), FollowUpActionBar: r.makeWidgetFactoryForComponentClass(L.FollowUpActionBar), Form: r.makeWidgetFactoryForComponentClass(S.Form), Grid: r.makeWidgetFactoryForComponentClass(h.Grid), Grid.Item: D.makeDILInlineTextFlexContainerWidgetFactory(A.GridItem), HorizontalSwipeSurface: r.makeWidgetFactoryForComponentClass(B.HorizontalSwipeSurface), Icon: b.IconWidgetFactory, Image: M.ImageWidgetFactory, Inline: v.InlineWidgetFactory, Input: r.makeWidgetFactoryForComponentClass(G.Input), Item: O.ItemWidgetFactory, List: O.ListWidgetFactory, List.Item: O.ItemWidgetFactory, List.Marker: O.ListMarkerWidgetFactory, ListView: N.ListViewWidgetFactory, ListViewItem: N.ListViewItemWidgetFactory, LoadingDot: r.makeWidgetFactoryForComponentClass(H.LoadingDot), LoadingBlock: r.makeWidgetFactoryForComponentClass(V.LoadingBlock), LoadingIndicator: r.makeWidgetFactoryForComponentClass(f.LoadingIndicator), Map: r.makeWidgetFactoryForComponentClass(z.DILMap), OverflowRow: Y.OverflowRowWidgetFactory, Popover: j.PopoverWidgetFactory, Popover.Content: j.PopoverContentWidgetFactory, Popover.Trigger: j.PopoverTriggerWidgetFactory, Pressable: X.PressableWidgetFactory, PulseIndicator: r.makeWidgetFactoryForComponentClass(J.PulseIndicator), PieChart: U.PieChartWebWidgetRendererFactory, RadioGroup: r.makeWidgetFactoryForComponentClass(K.RadioGroup), Row: D.makeDILFlexContainerWidgetFactory(Q.Row), RunInterval: r.makeWidgetFactoryForComponentClass(Z.RunInterval), SearchImage: $.SearchImageWidgetFactory, Response: D.makeDILFlexContainerWidgetFactory(c.Basic), SegmentedControl: ee.SegmentedControlWidgetFactory, Select: re.SelectWidgetFactory, Slider: r.makeWidgetFactoryForComponentClass(te.Slider), Spacer: r.makeWidgetFactoryForComponentClass(ie.Spacer), SpeechSynthesizer: oe.SpeechSynthesizerWidgetFactory, StockChart: We, Table: ae.TableWidgetFactory, Table.Cell: ae.TableCellWidgetFactory, Table.Row: ae.TableRowWidgetFactory, Table.Section: ae.TableSectionWidgetFactory, Svg: r.makeWidgetFactoryForComponentClass(de.Svg), Textarea: r.makeWidgetFactoryForComponentClass(se.Textarea), Transition: ge.TransitionWidgetFactory, YouTubeEmbed: r.makeWidgetFactoryForComponentClass(ne.YouTubeEmbed), ValdiChart: ce, ValdiPieChart: Ce, WeatherChart: We, WeatherWidget: We, WeatherWidgetWithSource: We};
}

// fn Ie  args=2 vars=2 closure=4 cpool=0 bc=126B file=dil_widgets/src/WidgetsRegistry
// args: e, r
// closure: exports, ue, Fe, le
function {
  if (!((e === exports.DIL_CHART_RENDERER_MODE_HOST_NATIVE))) goto L_31;
  if (!(r)) goto L_2d;
  return ue;
  return Fe;
  if (!((e === exports.DIL_CHART_RENDERER_MODE_VALDI))) goto L_5b;
  return le;
  return exports.DIL_WIDGETS_MAP;
}

// fn <atom:0>  args=3 vars=74 closure=0 cpool=2 bc=1722B file=dil_widgets/src/WidgetsRegistry
// args: require, module, exports
// locals: e, r, t, i, o, a, d, s, g, n, c, C, W, l, F, u, I, m, R, w, y, _, p, E, D, T, q, L, S, k, P, h, A, B, x, b, M, v, G, O, N, H, V, f, z, Y, U, j, X, J, K, Q, Z, $, ee, re, te, ie, oe, ae, de, se, ge, ne, ce, Ce, We, le, Fe, ue, Ie
function {
  Ie = function Ie;
  let ue;
  let Fe;
  let le;
  let We;
  let Ce;
  let ce;
  let ne;
  let ge;
  let se;
  let de;
  let ae;
  let oe;
  let ie;
  let te;
  let re;
  let ee;
  let $;
  let Z;
  let Q;
  let K;
  let J;
  let X;
  let j;
  let U;
  let Y;
  let z;
  let f;
  let V;
  let H;
  let N;
  let O;
  let G;
  let v;
  let M;
  let b;
  let x;
  let B;
  let A;
  let h;
  let P;
  let k;
  let S;
  let L;
  let q;
  let T;
  let D;
  let E;
  let p;
  let _;
  let y;
  let w;
  let R;
  let m;
  let I;
  let u;
  let F;
  let l;
  let W;
  let C;
  let c;
  let n;
  let g;
  let s;
  let d;
  let a;
  let o;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_WIDGETS_MAP = undefined;
  exports.DIL_CHART_RENDERER_MODE_WEB = undefined;
  exports.DIL_CHART_RENDERER_MODE_VALDI = undefined;
  exports.DIL_CHART_RENDERER_MODE_HOST_NATIVE = undefined;
  exports.getDILWidgetsMap = undefined;
  e = require("dil_charts/src/widgets");
  r = require("dil_compiler/src/ComponentWidgetFactory");
  t = require("dil_compiler/src/DILIntrinsicWidgets");
  i = require("dil_text/src/DILTextRegistry");
  o = require("valdi_core/src/utils/Trace");
  a = require("./widgets/AnimateWidgetRenderer");
  d = require("./widgets/AudioPlayer");
  s = require("./widgets/BaseCarouselItemWidgetRenderer");
  g = require("./widgets/BaseCarouselMediaItemWidgetRenderer");
  n = require("./widgets/BaseCarouselWidgetRenderer");
  c = require("./widgets/Basic");
  C = require("./widgets/BoxWidgetRenderer");
  W = require("./widgets/BadgeWidgetRenderer");
  l = require("./widgets/Button");
  require("./widgets/Card");
  F = require("./widgets/CardCarouselWidgetRenderer");
  u = require("./widgets/CardLinkItem");
  I = require("./widgets/Celebration");
  m = require("./widgets/CardWidgetRenderer");
  R = require("./widgets/ChartWebWidgetRenderer");
  w = require("./widgets/Checkbox");
  y = require("./widgets/ClientDefinedWidget");
  _ = require("./widgets/Col");
  p = require("./widgets/DatePickerWidgetRenderer");
  E = require("./widgets/DividerWidgetRenderer");
  D = require("./widgets/DILFlexContainerWidgetRenderer");
  T = require("./widgets/FlowWidgetRenderer");
  q = require("./widgets/FlowItem");
  L = require("./widgets/FollowUpActionBar");
  S = require("./widgets/Form");
  k = require("./widgets/FootballLocationIndicator");
  P = require("./widgets/FaviconWidgetRenderer");
  h = require("./widgets/Grid");
  A = require("./widgets/GridItem");
  B = require("./widgets/HorizontalSwipeSurface");
  x = require("./widgets/ChartWidgetRenderer");
  b = require("./widgets/IconWidgetRenderer");
  M = require("./widgets/ImageWidgetRenderer");
  v = require("./widgets/InlineWidgetRenderer");
  G = require("./widgets/Input");
  O = require("./widgets/ListWidgetRenderer");
  N = require("./widgets/ListViewWidgetRenderer");
  H = require("./widgets/LoadingDot");
  V = require("./widgets/LoadingBlock");
  f = require("./widgets/LoadingIndicator");
  z = require("./widgets/Map");
  Y = require("./widgets/OverflowRowWidgetRenderer");
  U = require("./widgets/PieChartWebWidgetRenderer");
  j = require("./widgets/PopoverWidgetRenderer");
  X = require("./widgets/PressableWidgetRenderer");
  J = require("./widgets/PulseIndicator");
  K = require("./widgets/RadioGroup");
  Q = require("./widgets/Row");
  Z = require("./widgets/RunInterval");
  $ = require("./widgets/SearchImageWidgetRenderer");
  ee = require("./widgets/SegmentedControlWidgetRenderer");
  re = require("./widgets/SelectWidgetRenderer");
  te = require("./widgets/Slider");
  ie = require("./widgets/Spacer");
  oe = require("./widgets/SpeechSynthesizerWidgetRenderer");
  ae = require("./widgets/TableWidgetRenderer");
  de = require("./widgets/Svg");
  se = require("./widgets/Textarea");
  ge = require("./widgets/TransitionWidgetRenderer");
  ne = require("./widgets/YouTubeEmbed");
  ce = r.makeWidgetFactoryForComponentClass(e.ValdiChart);
  Ce = r.makeWidgetFactoryForComponentClass(e.ValdiPieChart);
  We = r.makeWidgetFactoryForComponentClass(y.ClientDefinedWidget);
  exports.DIL_WIDGETS_MAP = o.trace("WidgetsRegistry.createDIL_WIDGETS_MAP", function <atom:0>);
  null;
  exports.DIL_WIDGETS_MAP;
  le = {Chart: ce, PieChart: Ce};
  null;
  exports.DIL_WIDGETS_MAP;
  Fe = {Chart: x.makeChartWidgetRendererFactory("Chart", R.CHART_WIDGET_PROPERTIES, R.CHART_WEB_WIDGET_RENDERER_OPTIONS, false), PieChart: x.makeChartWidgetRendererFactory("PieChart", U.PIE_CHART_WIDGET_PROPERTIES, U.PIE_CHART_WEB_WIDGET_RENDERER_OPTIONS, false)};
  null;
  Fe;
  ue = {Chart: x.makeChartWidgetRendererFactory("Chart", R.CHART_WIDGET_PROPERTIES, R.CHART_WEB_WIDGET_RENDERER_OPTIONS, true)};
  exports.DIL_CHART_RENDERER_MODE_WEB = "web";
  exports.DIL_CHART_RENDERER_MODE_VALDI = "valdi";
  exports.DIL_CHART_RENDERER_MODE_HOST_NATIVE = "hostNative";
  exports.getDILWidgetsMap = Ie;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/WidgetsRegistry
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
