// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=156B file=widgets/src/components/subscreen/Subscreen
// args: e
// closure: this, B, Subscreen
function {
  this.setState({fading: B.clamp((e.y / Subscreen.fadeDistance), 0, 1)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=142B file=widgets/src/components/subscreen/Subscreen
// args: e
// closure: this
function {
  this.scrollRegionWillChange(e.regionY, e.regionHeight, e.newRegionHeight);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=widgets/src/components/subscreen/Subscreen
// closure: this
function {
  this.scrollRegionDidChange();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=3 bc=374B file=widgets/src/components/subscreen/Subscreen
// locals: this, this.active_func, new.target, arguments
// closure: B, Subscreen, <class_fields_init>, y, R
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
  this.scrollTopElement = new y.ElementRef();
  this.scrollBottomElement = new y.ElementRef();
  this.state = {fading: 0};
  this.theme = R.Theme.from(this.context.themeType);
  this.scrollViewListener = {onScroll: function <atom:0>, onScrollRegionWillChange: function <atom:0>, onScrollRegionDidChange: function <atom:0>};
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=323B file=widgets/src/components/subscreen/Subscreen
// locals: this
function {
  this = this;
  if (!((this.viewModel == null))) goto L_2d;
  this.viewModel;
  goto L_4e;
  this.scrollViewHandler = undefined.scrollViewHandler;
  if (!(this.scrollViewHandler)) goto L_142;
  this.scrollSubscription = this.scrollViewHandler.subscribeListener(this.scrollViewListener);
  this.scrollViewHandler.setAttribute("id", "scrollView");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=widgets/src/components/subscreen/Subscreen
// locals: this
function {
  this = this;
  if (!((this.scrollSubscription == null))) goto L_2c;
  this.scrollSubscription;
  goto L_50;
  undefined.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=335B file=widgets/src/components/subscreen/Subscreen
// closure: e, o, k, f, i, v
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", k);
  e.beginComponent(f.FadeImage, i, undefined, undefined);
  e.setViewModelProperty("src", v.themeBackgroundImage());
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=9 closure=17 cpool=1 bc=2600B file=widgets/src/components/subscreen/Subscreen
// locals: u, h, b, g, m, S, y, p, this
// closure: e, o, k, f, i, v, C, t, E, r, A, s, l, n, d, a, c
function {
  this = this;
  let p;
  let y;
  let S;
  let m;
  let g;
  let b;
  let h;
  let u;
  if (!((this.viewModel == null))) goto L_44;
  this.viewModel;
  u = {};
  if (!((u.backgroundColor == null))) goto L_118;
  u.backgroundColor;
  h = this.theme.applyTo(C.SemanticColor.Background.SUBSCREEN);
  b = u.backgroundOpacity;
  g = this.headerOpacity();
  m = this.headerBoxShadow();
  S = this.headerBackgroundColor();
  y = u.backgroundBorderRadius;
  p = u.headerBackgroundBorderRadius;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", E.root);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", k);
  e.setAttributeNumber("opacity", b);
  e.setAttributeString("backgroundColor", h);
  e.setAttribute("borderRadius", y);
  e.endRender();
  if (!(this.viewModel.themingEnabled)) goto L_426;
  A.when(v.isCustomTheme(), function <atom:0>);
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", E.header);
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", k);
  e.setAttributeNumber("opacity", g);
  e.setAttributeString("boxShadow", m);
  e.setAttributeString("backgroundColor", S);
  e.setAttribute("borderRadius", p);
  e.endRender();
  e.renderNamedSlot("footer", this);
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", E.body);
  this.renderScrollView();
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", k);
  this.renderScrollBar();
  e.renderNamedSlot("floating", this);
  e.endRender();
  e.endRender();
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", E.header);
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", k);
  e.setAttributeNumber("opacity", g);
  e.setAttributeString("boxShadow", m);
  e.setAttributeString("backgroundColor", S);
  e.setAttribute("borderRadius", p);
  e.endRender();
  e.renderNamedSlot("header", this);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=11 closure=5 cpool=0 bc=2692B file=widgets/src/components/subscreen/Subscreen
// locals: t, r, o, i, s, l, n, d, a, c, this
// closure: p, e, u, h, b
function {
  this = this;
  let c;
  let a;
  let d;
  let n;
  let l;
  let s;
  let i;
  let o;
  let r;
  let t;
  if (!((this.viewModel == null))) goto L_4a;
  this.viewModel;
  t = {};
  r = t.scrollViewDismissKeyboardOnDrag;
  o = t.scrollViewShowsScrollIndicator;
  i = t.scrollViewBouncesFromDragAtStart;
  s = t.scrollViewBouncesFromDragAtEnd;
  if (!((t.scrollViewBouncesVerticalWithSmallContent == null))) goto L_10b;
  t.scrollViewBouncesVerticalWithSmallContent;
  l = true;
  if (!((t.scrollViewAccessibilityId == null))) goto L_13b;
  t.scrollViewAccessibilityId;
  n = "scroll-view";
  d = t.scrollViewViewportExtension;
  if (!((t.scrollEnabled == null))) goto L_18e;
  t.scrollEnabled;
  a = true;
  c = t.decelerationRate;
  if (!((undefined !== t.customScrollConfig))) goto L_69c;
  this.customViewPrototype = p.jsx.beginRenderCustomView(this.customViewPrototype, t.customScrollConfig.iosClass, t.customScrollConfig.androidClass);
  p.jsx.setAttributeBool("bouncesVerticalWithSmallContent", l);
  p.jsx.setAttributeBool("dismissKeyboardOnDrag", r);
  p.jsx.setAttributeBool("showsVerticalScrollIndicator", o);
  p.jsx.setAttributeBool("bouncesFromDragAtStart", i);
  p.jsx.setAttributeBool("bouncesFromDragAtEnd", s);
  p.jsx.setAttributeNumber("viewportExtensionTop", d);
  p.jsx.setAttributeNumber("viewportExtensionBottom", d);
  p.jsx.setAttributeBool("scrollEnabled", a);
  p.jsx.setAttributeRef(t.scrollViewHandler);
  p.jsx.setAttributeString("decelerationRate", c);
  e.renderUnnamedSlot(this);
  goto L_a83;
  // [栈深重同步 1 -> 0]
  e.beginRender(u, undefined);
  e.setAttributeRef(t.scrollViewHandler);
  e.setAttributeString("accessibilityId", n);
  e.setAttribute("bouncesVerticalWithSmallContent", l);
  e.setAttribute("dismissKeyboardOnDrag", r);
  e.setAttribute("showsVerticalScrollIndicator", o);
  e.setAttribute("bouncesFromDragAtStart", i);
  e.setAttribute("bouncesFromDragAtEnd", s);
  e.setAttributeNumber("viewportExtensionTop", d);
  e.setAttributeNumber("viewportExtensionBottom", d);
  e.setAttribute("scrollEnabled", a);
  e.setAttributeString("decelerationRate", c);
  e.beginRender(h, undefined);
  e.setAttributeRef(this.scrollTopElement);
  e.endRender();
  e.renderUnnamedSlot(this);
  e.beginRender(b, undefined);
  e.setAttributeRef(this.scrollBottomElement);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=0 bc=800B file=widgets/src/components/subscreen/Subscreen
// locals: t, r, this
// closure: e, g, Subscreen, x, m
function {
  this = this;
  let r;
  let t;
  t = this.scrollViewHandler;
  r = this.viewModel.scrollBarHandler;
  if (!(t)) goto L_31f;
  if (!(r)) goto L_31f;
  e.beginRender(g, undefined);
  e.setAttributeNumber("top", Subscreen.floatingGutter);
  e.setAttributeNumber("bottom", Subscreen.floatingGutter);
  e.setAttributeNumber("left", 9);
  e.setAttributeNumber("right", 9);
  e.beginComponent(x.ScrollBar, m, undefined, undefined);
  e.setViewModelProperty("scrollViewHandler", t);
  e.setViewModelProperty("scrollBarHandler", r);
  e.setViewModelProperty("scrollBarCenterOffset", this.viewModel.scrollBarCenterOffset);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=494B file=widgets/src/components/subscreen/Subscreen
// locals: e, t
// closure: this
function {
  let t;
  let e;
  e = this.scrollTopElement.getAppliedAttribute("height");
  if ((!e)) goto L_5f;
  if (!((0 === e))) goto L_62;
  return;
  if (!((this.scrollViewHandler == null))) goto L_8c;
  this.scrollViewHandler;
  goto L_ad;
  if ((undefined.scrollY)) goto L_b2;
  t = 0;
  this.scrollTopElement.setAttribute("height", 0);
  this.scrollBottomElement.setAttribute("height", 0);
  if (!(this.scrollViewHandler)) goto L_1ed;
  this.scrollViewHandler.scrollTo(0, Math.max((t - e), 0), false);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=75B file=widgets/src/components/subscreen/Subscreen
// locals: this
function {
  this = this;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=308B file=widgets/src/components/subscreen/Subscreen
// args: e, t, r
// locals: o, i, s, this
function {
  this = this;
  let s;
  let i;
  let o;
  if (!((r > t))) goto L_11;
  return;
  if (!((this.scrollViewHandler == null))) goto L_3b;
  this.scrollViewHandler;
  goto L_5c;
  if ((undefined.scrollY)) goto L_61;
  o = 0;
  if (!((e > o))) goto L_6a;
  return;
  if (!(((e + r) > o))) goto L_74;
  return;
  i = (t - r);
  s = (o - i);
  if (!((s < 0))) goto L_e4;
  i = (i + s);
  (i + s);
  this.scrollBottomElement.setAttribute("height", -s);
  this.scrollTopElement.setAttribute("height", i);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=88B file=widgets/src/components/subscreen/Subscreen
// locals: this
function {
  this = this;
  if (!((this.viewModel == null))) goto L_2c;
  this.viewModel;
  goto L_4d;
  if (!((undefined.headerStyling == null))) goto L_57;
  undefined.headerStyling;
  return "hovering";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=117B file=widgets/src/components/subscreen/Subscreen
// locals: this
function {
  this = this;
  if (!(("alwaysHovering" === this.headerStyling()))) goto L_31;
  return 1;
  return this.state.fading;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=149B file=widgets/src/components/subscreen/Subscreen
// locals: e, this
function {
  this = this;
  let e;
  if (!(("sticky" === this.headerStyling()))) goto L_33;
  return;
  e = (this.headerOpacity() / 10);
  if (!(e)) goto L_93;
  return "0px 2px 11px rgba(0, 0, 0, ".concat(e, ")");
  return undefined;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=1023B file=widgets/src/components/subscreen/Subscreen
// locals: this
// closure: v, C
function {
  this = this;
  if (!(this.viewModel.headerBackgroundColor)) goto L_15f;
  return v.colorWithThemedOverride(this.theme.applyTo(this.viewModel.headerBackgroundColor), C.SemanticColor.Flat.CLEAR);
  if (!(("sticky" === this.headerStyling()))) goto L_2c7;
  return v.colorWithThemedOverride(this.theme.applyTo(C.SemanticColor.Background.SUBSCREEN), C.SemanticColor.Flat.CLEAR);
  return v.colorWithThemedOverride(this.theme.applyTo(C.SemanticColor.Background.MAIN), C.SemanticColor.Flat.CLEAR);
}

// fn <atom:0>  args=3 vars=36 closure=0 cpool=12 bc=1645B file=widgets/src/components/subscreen/Subscreen
// args: require, module, exports
// locals: e, t, r, o, i, s, l, n, d, a, c, u, h, b, g, m, S, y, p, w, A, v, R, C, B, f, x, V, Subscreen, <class_fields_init>, Subscreen#1, k, E
function {
  let E;
  let k;
  let Subscreen#1;
  let V;
  let x;
  let f;
  let B;
  let C;
  let R;
  let v;
  let A;
  let w;
  let p;
  let y;
  let S;
  let m;
  let g;
  let b;
  let h;
  let u;
  let c;
  let a;
  let d;
  let n;
  let l;
  let s;
  let i;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Subscreen = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", ["id", "subscreen"], "EHAv4Dp0ruS9qt7C");
  r = e.makeNodePrototype("view", ["id", "background"], "4z26quPcjvl8bdZI");
  o = e.makeNodePrototype("layout", undefined, "7FjssWg53RL-AIoB");
  i = e.makeComponentPrototype(["height", "100%", "width", "100%"], "jPKV5v7vAdoHeHpg");
  s = e.makeNodePrototype("layout", undefined, "PkihnD674g954DNJ");
  l = e.makeNodePrototype("view", ["id", "footerBackground"], "SeVx5PlDyLcsBBO-");
  n = e.makeNodePrototype("view", undefined, "XSn8E8jVxYaL4b8t");
  d = e.makeNodePrototype("layout", ["lazyLayout", true], "pKnod9f0tOfDrfg8");
  a = e.makeNodePrototype("layout", undefined, "uJoigDQwxYFa_75r");
  c = e.makeNodePrototype("view", ["id", "headerBackground"], "Bdb1gs4SqCbYL2ql");
  u = e.makeNodePrototype("scroll", ["height", "100%", "width", "100%"], "ck1zKHqBrhppfPxx");
  h = e.makeNodePrototype("layout", undefined, "mfFG8fu-lrPqnh5J");
  b = e.makeNodePrototype("layout", undefined, "zTvxpKL4AM0RjAb-");
  g = e.makeNodePrototype("layout", ["position", "absolute"], "QMKBEfX3vFheSdi1");
  m = e.makeComponentPrototype(undefined, "Q97hSDYpYAJNtQue");
  S = require("valdi_core/src/Component");
  y = require("valdi_core/src/ElementRef");
  p = require("valdi_core/src/JSXBootstrap");
  w = require("valdi_core/src/Style");
  A = require("valdi_core/src/utils/When");
  v = require("widgets/src/InitSemanticColors");
  R = require("widgets/src/Theme");
  C = require("widgets/src/styles/semanticColors");
  B = require("foundation/src/number");
  f = require("../image/FadeImage");
  x = require("../scroll/scrollbar/ScrollBar");
  V = 9;
  let Subscreen;
  let <class_fields_init>;
  class Subscreen extends S.StatefulComponent { ... }
  <proto:Subscreen>.onCreate = function <atom:0>;
  <proto:Subscreen>.onDestroy = function <atom:0>;
  <proto:Subscreen>.onRender = function <atom:0>;
  <proto:Subscreen>.renderScrollView = function <atom:0>;
  <proto:Subscreen>.renderScrollBar = function <atom:0>;
  <proto:Subscreen>.scrollRegionDidChange = function <atom:0>;
  <proto:Subscreen>.scrollRegionWillChange = function <atom:0>;
  <proto:Subscreen>.headerStyling = function <atom:0>;
  <proto:Subscreen>.headerOpacity = function <atom:0>;
  <proto:Subscreen>.headerBoxShadow = function <atom:0>;
  <proto:Subscreen>.headerBackgroundColor = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Subscreen>;
  Subscreen = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Subscreen
  Subscreen#1 = function <atom:0>;
  exports.Subscreen = Subscreen#1;
  Subscreen#1.GUTTER_SIZE = 14;
  Subscreen#1.fadeDistance = 20;
  Subscreen#1.floatingGutter = 55;
  k = new w.Style({position: "absolute", bottom: 0, left: 0, right: 0, top: 0});
  E = {root: k.extend({flexDirection: "column-reverse"}), body: new w.Style({flexGrow: 1, flexShrink: 1, accessibilityPriority: 10}), header: new w.Style({accessibilityPriority: 100})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/subscreen/Subscreen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
