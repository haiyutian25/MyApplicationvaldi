// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=widgets/src/components/card/CollapsibleCard
// args: e
function {
  e.Expanding = 0;
  e[0] = "Expanding";
  e.ExpandedFully = 1;
  e[1] = "ExpandedFully";
  e.ExpandedPartially = 2;
  e[2] = "ExpandedPartially";
  e.Collapsing = 3;
  e[3] = "Collapsing";
  e.Collapsed = 4;
  e[4] = "Collapsed";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=344B file=widgets/src/components/card/CollapsibleCard
// closure: this, E
function {
  if (!((this.state.collapseState === E.ExpandedFully))) goto L_96;
  this.collapse();
  goto L_157;
  if (((this.state.collapseState === E.Collapsed))) goto L_e2;
  if (!((this.state.collapseState === E.ExpandedPartially))) goto L_10c;
  this.expand();
  goto L_157;
  if (((this.state.collapseState === E.Expanding))) goto L_157;
  (this.state.collapseState === E.Collapsing);
  this.state.collapseState;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=355B file=widgets/src/components/card/CollapsibleCard
// args: e
// closure: this, E
function {
  if (!((this.state.collapseState === E.Collapsed))) goto L_9c;
  this.collapsedCardHeight = e.height;
  goto L_162;
  if (((this.state.collapseState === E.ExpandedFully))) goto L_134;
  if (((this.state.collapseState === E.ExpandedPartially))) goto L_134;
  if (((this.state.collapseState === E.Collapsing))) goto L_134;
  if (!((this.state.collapseState === E.Expanding))) goto L_162;
  this.uncollapsedCardHeight = e.height;
  this.state.collapseState;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=2 bc=161B file=widgets/src/components/card/CollapsibleCard
// locals: this, this.active_func, new.target, arguments
// closure: E, <class_fields_init>
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
  this.state = {collapseState: E.Collapsed, expandedCount: 0};
  this.collapsedCardHeight = 0;
  this.uncollapsedCardHeight = 0;
  this.onTapExpandOrCollapse = function <atom:0>;
  this.onLayoutCard = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=312B file=widgets/src/components/card/CollapsibleCard
// closure: e, d, k, r, A, h
function {
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", k);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", A);
  e.setAttributeString("value", h);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=20 cpool=1 bc=1444B file=widgets/src/components/card/CollapsibleCard
// locals: t
// closure: e, d, k, r, A, h, this, v, i, c, n, R, s, H, w, a, N, l, f, p
function {
  let t;
  t = this.getButtonLabel();
  if ((this.viewModel.cardBackgroundHidden)) goto L_140;
  e.beginComponent(v.HorizontalRule, i, undefined, undefined);
  e.setViewModelProperty("color", c.dividerColor);
  e.endComponent();
  e.beginRender(n, undefined);
  e.setAttributeString("accessibilityId", c.viewMoreAccessibilityId);
  e.setAttributeStyle("style", R);
  e.setAttributeFunction("onTap", this.onTapExpandOrCollapse);
  e.setAttributeString("accessibilityLabel", t);
  e.setAttributeString("backgroundColor", c.expandCardBackgroundColor);
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", H);
  w.when(h, function <atom:0>);
  e.endRender();
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", N);
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", f);
  e.setAttributeString("value", t);
  e.setAttributeString("color", c.expandTextColor);
  e.endRender();
  e.endRender();
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", H);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=21 cpool=1 bc=560B file=widgets/src/components/card/CollapsibleCard
// closure: e, d, k, r, A, h, this, v, i, c, n, R, s, H, w, a, N, l, f, p, o
function {
  e.beginRender(o, undefined);
  e.setAttributeFunction("onLayout", this.onLayoutCard);
  e.setAttributeNumber("height", this.getCardHeight());
  e.setAttribute("slowClipping", this.getNeedsClipping());
  this.renderRows(c.rowHeight, c.renderFunctions, c.componentDefs);
  e.endRender();
  w.when(this.getShouldShowButton(), function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=20 cpool=1 bc=714B file=widgets/src/components/card/CollapsibleCard
// locals: c, h, this
// closure: e, d, k, r, A, v, i, n, R, s, H, w, a, N, l, f, p, o, b, t
function {
  this = this;
  let h;
  let c;
  if (!((this.viewModel == null))) goto L_30;
  this.viewModel;
  c = {};
  h = this.getPromptNewLabel();
  e.beginComponent(b.Card, t, undefined, undefined);
  if (!(this.viewModel.cardBackgroundHidden)) goto L_15d;
  goto L_181;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("shadow", c.shadow);
  e.setViewModelProperty("backgroundColor", c.backgroundColor);
  e.setViewModelProperty("borderWidth", c.borderWidth);
  e.setViewModelProperty("borderColor", c.borderColor);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=146B file=widgets/src/components/card/CollapsibleCard
// locals: this
function {
  this = this;
  return (this.getNumberOfEntries() <= (this.getMaxNumCollapsedComponents() + this.state.expandedCount));
}

// fn <atom:0>  args=3 vars=4 closure=4 cpool=0 bc=575B file=widgets/src/components/card/CollapsibleCard
// args: t, o, i
// locals: this
// closure: e, v, c, h
function {
  this = this;
  if (!((t > 0))) goto L_13f;
  if (!(!this.viewModel.cardBackgroundHidden)) goto L_13f;
  e.beginComponent(v.HorizontalRule, c, undefined, undefined);
  e.setViewModelProperty("color", this.viewModel.dividerColor);
  e.endComponent();
  if (!(o)) goto L_16a;
  o.renderFunction();
  return;
  if (!(!i)) goto L_17d;
  throw new Error("Neither component defs or render functions set");
  e.beginComponent(i.componentClass, h, undefined, undefined);
  e.setViewModelProperties(i.viewModel);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=261B file=widgets/src/components/card/CollapsibleCard
// args: e, t, o
// locals: i, n, s, d, this
function {
  this = this;
  let i;
  i = 0;
  if (!((i < this.getCountVisible()))) goto L_104;
  let d;
  let s;
  let n;
  n = undefined;
  s = undefined;
  d = undefined;
  if (!(e)) goto L_7d;
  s = e[i];
  e[i];
  n = s.key;
  goto L_b4;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_b4;
  d = t[i];
  t[i];
  n = d.key;
  d.key;
  if ((n)) goto L_e7;
  n = i.toString();
  i.toString();
  o(i, n, s, d);
  i = <i_new>;
  (i++);
  goto L_8;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=41B file=widgets/src/components/card/CollapsibleCard
// closure: this, o, n, s
function {
  this.renderRow(o, n, s);
  return;
}

// fn <atom:0>  args=4 vars=4 closure=5 cpool=1 bc=223B file=widgets/src/components/card/CollapsibleCard
// args: o, i, n, s
// closure: this, e, y, g, t
function {
  e.beginComponent(y.Lazy, g, i, undefined);
  if (!((o > 0))) goto L_86;
  goto L_89;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("height", t);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=4 vars=4 closure=3 cpool=0 bc=125B file=widgets/src/components/card/CollapsibleCard
// args: t, o, i, n
// closure: e, u, this
function {
  e.beginRender(u, o);
  this.renderRow(t, i, n);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=4 closure=4 cpool=2 bc=92B file=widgets/src/components/card/CollapsibleCard
// args: t, o, i
// locals: this
// closure: e, y, g, u
function {
  this = this;
  if (!((undefined !== t))) goto L_32;
  goto L_5b;
  // [栈深重同步 1 -> 0]
  this.forEachRow(o, i, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=298B file=widgets/src/components/card/CollapsibleCard
// locals: e, t
// closure: this, E
function {
  let t;
  let e;
  this.setState({collapseState: E.Collapsed, expandedCount: 0});
  if (((undefined === undefined))) goto L_86;
  e = <to_object>(undefined).onCollapse;
  <to_object>(undefined);
  goto L_ab;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_5f;
  // [栈深重同步 1 -> 0]
  if (!(e)) goto L_b6;
  e();
  t = this.viewModel.scrollViewHandler;
  if (!(t)) goto L_129;
  t.notifyRegionDidChange();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=75B file=widgets/src/components/card/CollapsibleCard
// locals: this
// closure: E
function {
  this = this;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=196B file=widgets/src/components/card/CollapsibleCard
// closure: this, E
function {
  if (!(this.getIsFullyVisible())) goto L_76;
  goto L_c3;
  // [栈深重同步 1 -> 0]
  this.setState({collapseState: E.ExpandedPartially});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=1 bc=327B file=widgets/src/components/card/CollapsibleCard
// locals: e, this
// closure: E, P
function {
  this = this;
  let e;
  this.setStateAnimatedPromise({collapseState: E.Expanding, expandedCount: (this.state.expandedCount + this.getNumExpandingIncrement())}, P).then(function <atom:0>);
  if (((undefined === undefined))) goto L_116;
  e = <to_object>(undefined).onExpand;
  <to_object>(undefined);
  goto L_13b;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_ef;
  // [栈深重同步 1 -> 0]
  if (!(e)) goto L_146;
  e();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=432B file=widgets/src/components/card/CollapsibleCard
// locals: e, t
// closure: this, E
function {
  let t;
  let e;
  this.setState({collapseState: E.Collapsing});
  if (((undefined === undefined))) goto L_80;
  e = <to_object>(undefined).onWillCollapse;
  <to_object>(undefined);
  goto L_a5;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_59;
  // [栈深重同步 1 -> 0]
  if (!(e)) goto L_f4;
  e(this.uncollapsedCardHeight, this.collapsedCardHeight);
  t = this.viewModel.scrollViewHandler;
  if (!(t)) goto L_1af;
  t.notifyRegionWillChange(0, 0, 0, this.uncollapsedCardHeight, 0, this.collapsedCardHeight);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=widgets/src/components/card/CollapsibleCard
// closure: this
function {
  this.onCollapsed();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=2 bc=83B file=widgets/src/components/card/CollapsibleCard
// locals: this
// closure: E, P
function {
  this = this;
  this.animatePromise(P, function <atom:0>).then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=296B file=widgets/src/components/card/CollapsibleCard
// locals: this
// closure: E
function {
  this = this;
  if (!((this.state.collapseState === E.Collapsing))) goto L_8e;
  return this.collapsedCardHeight;
  if (((this.state.collapseState === E.ExpandedFully))) goto L_126;
  if (((this.state.collapseState === E.ExpandedPartially))) goto L_126;
  if (((this.state.collapseState === E.Collapsed))) goto L_126;
  if (!((this.state.collapseState === E.Expanding))) goto L_127;
  this.state.collapseState;
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=266B file=widgets/src/components/card/CollapsibleCard
// locals: this
// closure: E
function {
  this = this;
  if (((this.state.collapseState === E.Collapsing))) goto L_91;
  if (!((this.state.collapseState === E.Expanding))) goto L_94;
  return true;
  if (((this.state.collapseState === E.ExpandedFully))) goto L_106;
  if (((this.state.collapseState === E.ExpandedPartially))) goto L_106;
  if (!((this.state.collapseState === E.Collapsed))) goto L_109;
  return false;
  this.state.collapseState;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=widgets/src/components/card/CollapsibleCard
// locals: this
function {
  this = this;
  if (!((this.viewModel.maxNumCollapsedComponents == null))) goto L_4d;
  this.viewModel.maxNumCollapsedComponents;
  return (1 / 0);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=widgets/src/components/card/CollapsibleCard
// locals: this
function {
  this = this;
  if (!((this.viewModel.numExpandingIncrement == null))) goto L_4d;
  this.viewModel.numExpandingIncrement;
  return (1 / 0);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=185B file=widgets/src/components/card/CollapsibleCard
// locals: this
function {
  this = this;
  return Math.min(this.getNumberOfEntries(), (this.getMaxNumCollapsedComponents() + this.state.expandedCount));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=widgets/src/components/card/CollapsibleCard
// locals: this
function {
  this = this;
  return (this.getNumberOfEntries() > this.getMaxNumCollapsedComponents());
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=473B file=widgets/src/components/card/CollapsibleCard
// locals: e, this
function {
  this = this;
  if (!(this.getIsFullyVisible())) goto L_6d;
  return this.viewModel.collapseText;
  if (!(this.viewModel.displayViewMoreCount)) goto L_195;
  if (!(this.viewModel.expandTextTemplate)) goto L_195;
  let e;
  e = (this.getNumberOfEntries() - this.getCountVisible());
  return this.viewModel.expandTextTemplate(e);   // tail call
  return this.viewModel.expandText;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=111B file=widgets/src/components/card/CollapsibleCard
// locals: this
function {
  this = this;
  if (!(this.getIsFullyVisible())) goto L_2b;
  return "";
  return this.viewModel.expandTextInBadge;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=159B file=widgets/src/components/card/CollapsibleCard
// locals: e, t, this
function {
  this = this;
  let t;
  let e;
  if (((undefined === undefined))) goto L_57;
  e = <to_object>(undefined).componentDefs;
  t = <to_object>(undefined).renderFunctions;
  <to_object>(undefined);
  goto L_7c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  if (!(t)) goto L_86;
  return t.length;
  if (!(e)) goto L_90;
  return e.length;
  throw new Error("Neither componentDefs or Render Function set.");
}

// fn <atom:0>  args=3 vars=38 closure=0 cpool=20 bc=2513B file=widgets/src/components/card/CollapsibleCard
// args: require, module, exports
// locals: e, t, o, i, n, s, d, r, a, l, p, c, h, g, u, C, y, m, w, b, v, S, x, M, E, P, CollapsibleCard, <class_fields_init>, CollapsibleCard#1, R, N, f, H, k, A
function {
  let A;
  let k;
  let H;
  let f;
  let N;
  let R;
  let CollapsibleCard#1;
  let P;
  let M;
  let x;
  let S;
  let v;
  let b;
  let w;
  let m;
  let y;
  let C;
  let u;
  let g;
  let h;
  let c;
  let p;
  let l;
  let a;
  let r;
  let d;
  let s;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CollapsibleCard = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "4rPHpotb7Djg3XiF");
  o = e.makeNodePrototype("view", undefined, "8cQIruhO2Ml__KXh");
  i = e.makeComponentPrototype(undefined, "q-aVi032KFU_144k");
  n = e.makeNodePrototype("view", ["accessibilityCategory", "button"], "bGLvs_GErtLCRXVp");
  s = e.makeNodePrototype("layout", undefined, "9VPs8wPyTPvnDIi9");
  d = e.makeNodePrototype("view", undefined, "JGzDHYeiH9zLEyqZ");
  r = e.makeNodePrototype("label", undefined, "YyGPx-9kzeoYsZCz");
  a = e.makeNodePrototype("layout", undefined, "XNOrafGzpAj_0ErG");
  l = e.makeNodePrototype("label", undefined, "RjTlqZqfHW1HZzpo");
  p = e.makeNodePrototype("layout", undefined, "uHHP5zvgVxZQupNk");
  c = e.makeComponentPrototype(undefined, "aNRMH0RxwWIZeM17");
  h = e.makeComponentPrototype(undefined, "ma86BVW1hm42sWTM");
  g = e.makeComponentPrototype(["width", "100%"], "c-evnHppP7KiIMOp");
  u = e.makeNodePrototype("layout", undefined, "-rVivuhtyX-tmK45");
  C = require("valdi_core/src/Component");
  y = require("valdi_core/src/Lazy");
  m = require("valdi_core/src/Style");
  w = require("valdi_core/src/utils/When");
  b = require("widgets/src/components/card/Card");
  v = require("widgets/src/components/rules/HorizontalRule");
  S = require("widgets/src/styles/TextStyleFont");
  x = require("widgets/src/styles/semanticColors");
  M = require("widgets/src/styles/spacing");
  if ((E)) goto L_3fc;
  E = {};
  !function <atom:0>({});
  P = {duration: 0.2};
  let CollapsibleCard;
  let <class_fields_init>;
  class CollapsibleCard extends C.StatefulComponent { ... }
  <proto:CollapsibleCard>.onRender = function <atom:0>;
  <proto:CollapsibleCard>.getIsFullyVisible = function <atom:0>;
  <proto:CollapsibleCard>.renderRow = function <atom:0>;
  <proto:CollapsibleCard>.forEachRow = function <atom:0>;
  <proto:CollapsibleCard>.renderRows = function <atom:0>;
  <proto:CollapsibleCard>.onCollapsed = function <atom:0>;
  <proto:CollapsibleCard>.expand = function <atom:0>;
  <proto:CollapsibleCard>.collapse = function <atom:0>;
  <proto:CollapsibleCard>.getCardHeight = function <atom:0>;
  <proto:CollapsibleCard>.getNeedsClipping = function <atom:0>;
  <proto:CollapsibleCard>.getMaxNumCollapsedComponents = function <atom:0>;
  <proto:CollapsibleCard>.getNumExpandingIncrement = function <atom:0>;
  <proto:CollapsibleCard>.getCountVisible = function <atom:0>;
  <proto:CollapsibleCard>.getShouldShowButton = function <atom:0>;
  <proto:CollapsibleCard>.getButtonLabel = function <atom:0>;
  <proto:CollapsibleCard>.getPromptNewLabel = function <atom:0>;
  <proto:CollapsibleCard>.getNumberOfEntries = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CollapsibleCard>;
  CollapsibleCard = function <atom:0>;
  // close_loc <class_fields_init>
  CollapsibleCard#1 = function <atom:0>;
  exports.CollapsibleCard = CollapsibleCard#1;
  R = new m.Style({flexDirection: "row", alignItems: "center", justifyContent: "center", minHeight: 42});
  N = new m.Style({paddingTop: 10, paddingBottom: 10, paddingLeft: M.Spacing.SM, paddingRight: M.Spacing.SM});
  f = new m.Style({font: S.TextStyleFont.SUBHEADLINE_EMPHASIS, color: x.SemanticColor.Text.PRIMARY});
  H = new m.Style({paddingTop: M.Spacing.SM, paddingBottom: M.Spacing.SM});
  k = new m.Style({backgroundColor: x.SemanticColor.Brand.PRIMARY, borderRadius: 4, paddingTop: M.Spacing.XXS, paddingBottom: M.Spacing.XXS, paddingLeft: M.Spacing.XS, paddingRight: M.Spacing.XS});
  A = new m.Style({font: S.TextStyleFont.BODY});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/card/CollapsibleCard
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
