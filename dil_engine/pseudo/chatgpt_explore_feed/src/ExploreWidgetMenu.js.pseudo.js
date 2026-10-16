// fn <atom:0>  args=1 vars=6 closure=5 cpool=0 bc=1003B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// args: o
// locals: n, d, s, r, a
// closure: this, e, ExploreWidgetMenu, t, i
function {
  let a;
  let r;
  let s;
  let d;
  let n;
  if (((undefined === undefined))) goto L_a7;
  n = <to_object>(undefined).boxShadow;
  d = <to_object>(undefined).menu;
  s = <to_object>(undefined).unit;
  r = <to_object>(undefined).isHidden;
  <to_object>(undefined);
  goto L_cf;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  if (!((undefined === n))) goto L_da;
  goto L_185;
  // [栈深重同步 1 -> 0]
  null;
  o;
  null;
  o.attributes;
  if (!((o.attributes.borderRadius == null))) goto L_17b;
  o.attributes.borderRadius;
  a = {attributes: {boxShadow: n, borderRadius: o.previewCornerRadius}};
  if (!((undefined !== d))) goto L_322;
  if (!((undefined !== s))) goto L_322;
  e.beginComponent(ExploreWidgetMenu, t, undefined, undefined);
  e.setViewModelProperty("container", a);
  e.setViewModelProperty("unit", s);
  e.setViewModelProperty("loggingMetadata", this.viewModel.loggingMetadata);
  e.setViewModelProperty("isHidden", r);
  e.setViewModelProperties(d);
  goto L_3ea;
  // [栈深重同步 1 -> 0]
  e.beginRender(i, undefined);
  e.setAttributes(a.attributes);
  a.renderContent(undefined);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=1 bc=74B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// locals: this, this.active_func, new.target, arguments
// closure: e, ExploreWidgetMenu, t, i, <class_fields_init>
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
  this.container = {render: function <atom:0>};
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=244B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// locals: this
// closure: e, p, o
function {
  this = this;
  e.beginComponent(p.DILRootContainerProvider, o, undefined, undefined);
  e.setViewModelProperty("value", this.container);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_explore_feed/src/ExploreWidgetMenu
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=154B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// closure: v
function {
  if (!(v.Device.isAndroid())) goto L_99;
  v.Device.performHapticFeedback("long_press");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=204B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// args: e
// closure: this
function {
  if ((this.hidden)) goto L_36;
  this.frame = e;
  e;
  if (!((this.viewModel.container.attributes.onLayout == null))) goto L_c7;
  this.viewModel.container.attributes.onLayout;
  this.viewModel.container.attributes;
  goto L_cb;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=3 closure=14 cpool=0 bc=1698B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// locals: t, i, o
// closure: this, S, u, e, d, A, f, s, h, P, M, r, C, m
function {
  let o;
  let i;
  let t;
  if (!((this.frame == null))) goto L_35;
  this.frame;
  goto L_56;
  if (!((undefined.height == null))) goto L_e5;
  undefined.height;
  t = this.viewModel.container.attributes.height;
  if (!(("number" == typeof t))) goto L_fb;
  i = (t < S);
  o = u.resolveDILTextColor("tertiary");
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", A.hiddenContent);
  if (((undefined !== this.frame))) goto L_315;
  if (!((undefined !== this.viewModel.container.attributes.height))) goto L_31e;
  if (!(("auto" !== this.viewModel.container.attributes.height))) goto L_31e;
  goto L_323;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("position", "relative");
  if (!(i)) goto L_35c;
  goto L_361;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("flexDirection", "column");
  e.beginComponent(f.Icon, s, undefined, undefined);
  e.setViewModelProperty("src", h.default.suggestionHidden);
  e.setViewModelProperty("size", P);
  e.setViewModelProperty("color", o);
  e.endComponent();
  e.beginComponent(M.Text, r, undefined, undefined);
  e.setViewModelProperty("value", C.default.suggestionHidden());
  e.setViewModelProperty("color", o);
  e.setViewModelProperty("typography", m.DesignTypography.Subheadline);
  if (!(i)) goto L_649;
  goto L_64e;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("width", "100%");
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=17 cpool=4 bc=1369B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// locals: this, this.active_func, new.target, arguments
// closure: v, S, u, e, d, A, f, s, h, P, M, r, C, m, <class_fields_init>, x, l
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
  this.state = {binding: undefined, hidden: undefined};
  this.select = function <atom:0>;
  this.onLongPress = function <atom:0>;
  this.feedbackActions = [{id: x.ExploreFeedFeedbackPreference.Up, title: C.default.feedbackMore(), iconAsset: l.default.thumbUp}, {id: x.ExploreFeedFeedbackPreference.Down, title: C.default.feedbackLess(), iconAsset: l.default.thumbDown}];
  this.hideAction = {id: "notInterested", title: C.default.suggestionHide(), iconAsset: l.default.xCircle, destructive: true};
  this.debugAction = {id: "debug", title: "Debug (internal)", iconAsset: l.default.infoCircle};
  this.actions = [this.hideAction];
  // append([], 0, this.feedbackActions)
  [][this.feedbackActions] = {id: "addFeedback", title: C.default.feedbackAdd(), iconAsset: l.default.pencilText};
  [][({id: "addFeedback", title: C.default.feedbackAdd(), iconAsset: l.default.pencilText} ++)] = this.hideAction;
  (this.hideAction ++);
  this.actionsWithFreeformFeedback = [];
  this.hiddenActions = [{id: "showSuggestion", title: C.default.suggestionShow(), iconAsset: l.default.eye}];
  this.handleLayout = function <atom:0>;
  this.renderHiddenContent = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=610B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// args: e
// locals: t
// closure: this
function {
  let t;
  if (!((e == null))) goto L_c;
  e;
  goto L_2d;
  if (!((this.state.binding == null))) goto L_78;
  this.state.binding;
  goto L_99;
  if (!((undefined.accountId === undefined.accountId))) goto L_17a;
  if (!((e == null))) goto L_aa;
  e;
  goto L_ec;
  if (!((this.state.binding == null))) goto L_137;
  this.state.binding;
  goto L_179;
  t = (undefined.item.id === undefined.item.id);
  this.bindSelection(e, this.viewModel.unit);
  if (!(t)) goto L_258;
  goto L_259;
  // [栈深重同步 4 -> 3]
  this.setState({binding: e, hidden: undefined});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=145B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// locals: this
function {
  this = this;
  this.registerDisposable(this.viewModel.binding.subscribe(function <atom:0>));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=423B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// args: e
// locals: this
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_4d;
  if (!((undefined.unit.id !== this.viewModel.unit.id))) goto L_fa;
  null;
  this.state;
  this.state = {hidden: undefined};
  this.frame = undefined;
  undefined;
  this.bindSelection(this.state.binding, this.viewModel.unit);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=82B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// closure: t, r, this
function {
  if (!(r)) goto L_4d;
  goto L_4e;
  // [栈深重同步 3 -> 2]
  t.renderContent(undefined);
  return;
}

// fn <atom:0>  args=0 vars=9 closure=4 cpool=1 bc=3298B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// locals: t, i, o, d, s, r, a, c, this
// closure: e, g, n, C
function {
  this = this;
  let c;
  let a;
  let r;
  let s;
  let d;
  let o;
  let i;
  let t;
  if (((undefined === undefined))) goto L_8d;
  t = <to_object>(undefined).container;
  i = <to_object>(undefined).menuContext;
  o = <to_object>(undefined).menuRef;
  <to_object>(undefined);
  goto L_b4;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_20;
  // [栈深重同步 1 -> 0]
  d = t.attributes;
  s = this.state.binding;
  r = this.hidden;
  if (!(r)) goto L_16e;
  goto L_1e6;
  // [栈深重同步 1 -> 0]
  if (!((s == null))) goto L_17a;
  s;
  goto L_19b;
  if (!((undefined === undefined.onAddFeedback))) goto L_1c3;
  goto L_1e6;
  // [栈深重同步 1 -> 0]
  a = this.actionsWithFreeformFeedback;
  if (!(r)) goto L_2d4;
  if (((undefined === d.width))) goto L_2d4;
  if ((("auto" === d.width))) goto L_2d4;
  if (!((d.flexGrow == null))) goto L_27a;
  d.flexGrow;
  if (((0 > 0))) goto L_2d4;
  if (!((undefined !== d.flexBasis))) goto L_2d4;
  c = ("auto" !== d.flexBasis);
  e.beginComponent(g.NativeContextMenu, n, undefined, o);
  if ((e.hasContext())) goto L_3ac;
  null;
  this.context;
  null;
  i;
  e.setContext({});
  if (!((s == null))) goto L_407;
  s;
  goto L_428;
  if (!((s == null))) goto L_433;
  s;
  goto L_475;
  e.setViewModelProperty("contentId", JSON.stringify([undefined.accountId, undefined.item.id, this.viewModel.unit.id]));
  if (!((s == null))) goto L_519;
  s;
  goto L_53a;
  if (!((undefined !== undefined.onDebug))) goto L_56b;
  // append([this.debugAction], 1, a)
  a;
  goto L_56e;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("actions", a);
  if (!((s == null))) goto L_5a7;
  s;
  goto L_5c8;
  e.setViewModelProperty("disabled", (undefined === undefined.onFeedbackSelected));
  e.setViewModelProperty("onSelect", this.select);
  e.setViewModelProperty("onLongPress", this.onLongPress);
  null;
  d;
  if (!(c)) goto L_743;
  if (!((this.frame == null))) goto L_6f7;
  this.frame;
  goto L_718;
  if (!((undefined.width == null))) goto L_767;
  undefined.width;
  goto L_767;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_7e8;
  if (!((this.frame == null))) goto L_79c;
  this.frame;
  goto L_7bd;
  if (!((undefined.height == null))) goto L_80c;
  undefined.height;
  goto L_80c;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_819;
  goto L_83d;
  // [栈深重同步 5 -> 4]
  if (!(c)) goto L_84a;
  goto L_86e;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_87f;
  goto L_8a3;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_8b0;
  goto L_8d4;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_8e1;
  goto L_905;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_912;
  goto L_936;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_943;
  goto L_967;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_974;
  goto L_998;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_9a9;
  goto L_9cd;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_9de;
  goto L_a02;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_a56;
  goto L_a7a;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_a87;
  goto L_aab;
  // [栈深重同步 5 -> 4]
  if (!(r)) goto L_ab8;
  goto L_adc;
  // [栈深重同步 5 -> 4]
  e.setViewModelProperty("attributes", {onLayout: this.handleLayout, width: d.width, height: d.height, flexGrow: d.flexGrow, flexShrink: d.flexShrink, flexBasis: d.flexBasis, onTap: d.onTap, onTouch: d.onTouch, onTouchStart: d.onTouchStart, onTouchEnd: d.onTouchEnd, onHover: d.onHover, accessibilityCategory: d.accessibilityCategory, accessibilityNavigation: d.accessibilityNavigation, accessibilityLabel: d.accessibilityLabel, accessibilityHint: d.accessibilityHint, accessibilityValue: d.accessibilityValue});
  e.setViewModelProperty("previewCornerRadius", t.previewCornerRadius);
  if (!((t.attributes.accessibilityId == null))) goto L_c8c;
  t.attributes.accessibilityId;
  if (!((s == null))) goto L_bdd;
  s;
  goto L_c1f;
  e.setViewModelProperty("accessibilityId", "chatgpt.explore.feedback.".concat(undefined.item.id, ".", this.viewModel.unit.id));
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=238B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// locals: e, this
// closure: a
function {
  this = this;
  let e;
  e = this.viewModel.isHidden;
  if (!((e instanceof a.DILWidgetBinding))) goto L_9b;
  return e.asBoolean();
  if (!((this.state.hidden == null))) goto L_ed;
  this.state.hidden;
  if (!((e == null))) goto L_ed;
  e;
  return false;
}

// fn <atom:0>  args=1 vars=2 closure=7 cpool=0 bc=912B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// args: o
// locals: i
// closure: this, a, c, e, t, x, i
function {
  if (!(("debug" !== o))) goto L_32a;
  if ((("notInterested" === o))) goto L_1e;
  if (!(("showSuggestion" === o))) goto L_1c2;
  let i;
  i = ("notInterested" === o);
  if (!((this.viewModel.isHidden instanceof a.DILWidgetBinding))) goto L_12d;
  goto L_15b;
  // [栈深重同步 1 -> 0]
  this.setState({hidden: i});
  if (!((e == null))) goto L_165;
  e;
  goto L_1c0;
  if (!((undefined.onFeedbackSelected == null))) goto L_18f;
  undefined.onFeedbackSelected;
  undefined;
  goto L_1c0;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, {notInterested: i}, e.item, t);
  return;
  if (!(("addFeedback" !== o))) goto L_2cd;
  if (!((o !== x.ExploreFeedFeedbackPreference.Up))) goto L_260;
  if (((o !== x.ExploreFeedFeedbackPreference.Down))) goto L_328;
  if (!((e == null))) goto L_271;
  e;
  goto L_328;
  if (!((undefined.onFeedbackSelected == null))) goto L_29c;
  undefined.onFeedbackSelected;
  undefined;
  goto L_328;
  // [栈深重同步 1 -> 2]
  goto L_328;
  // [栈深重同步 1 -> 0]
  if (!((e == null))) goto L_2d6;
  e;
  goto L_328;
  if (!((undefined.onAddFeedback == null))) goto L_300;
  undefined.onAddFeedback;
  undefined;
  goto L_328;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e.item, t);
  return;
  if (!((undefined !== i))) goto L_38e;
  if (!((e == null))) goto L_33c;
  e;
  goto L_38e;
  if (!((undefined.onDebug == null))) goto L_366;
  undefined.onDebug;
  undefined;
  goto L_38e;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e.item, i);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=1 bc=86B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// args: e, t
// locals: i, this
// closure: a, c, x
function {
  this = this;
  let i;
  i = this.viewModel.loggingMetadata;
  this.select = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=36 closure=0 cpool=8 bc=1408B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// args: require, module, exports
// locals: e, t, i, o, n, d, s, r, a, c, l, h, u, p, g, b, v, w, y, m, f, M, x, C, ExploreWidgetRoot, <class_fields_init>, ExploreWidgetRoot#1, ExploreWidgetMenu, <class_fields_init>#1, ExploreWidgetMenu#1, P, S, A
function {
  let A;
  let S;
  let P;
  let ExploreWidgetMenu#1;
  let ExploreWidgetRoot#1;
  let C;
  let x;
  let M;
  let f;
  let m;
  let y;
  let w;
  let v;
  let b;
  let g;
  let p;
  let u;
  let h;
  let l;
  let c;
  let a;
  let r;
  let s;
  let d;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreWidgetRoot = undefined;
  exports.ExploreWidgetMenu = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "_vSEzQoAVlrd3NsG");
  i = e.makeNodePrototype("view", undefined, "5ePMb0ScsslglVAp");
  o = e.makeComponentPrototype(undefined, "oLUluXG_yQGw9hlT");
  n = e.makeComponentPrototype(undefined, "0nWLQUBysdVSmUDn");
  d = e.makeNodePrototype("layout", undefined, "7BvoGNDFNvXvbv_p");
  s = e.makeComponentPrototype(undefined, "hxvfKqYEN1OmtbLK");
  r = e.makeComponentPrototype(["align", "center", "numberOfLines", 0], "pLqQ5Gn7Mcq3IBCZ");
  a = require("dil_cel/src/WidgetBinding");
  c = require("dil_widgets/src/widgets/DILWidgetBindingActions");
  l = require("dil_icon_assets/res");
  h = require("chatgpt_explore_feed/res");
  u = require("dil_core/src/colors/DILColor");
  p = require("dil_widgets/src/widgets/RootContainer");
  g = require("native_menu/src/NativeContextMenu");
  b = require("valdi_core/src/Component");
  v = require("valdi_core/src/Device");
  w = require("valdi_core/src/Style");
  y = require("oai_core/src/OAITokens");
  m = require("oai_core/src/OAITypography");
  f = require("oai_ui/src/components/Icon");
  M = require("oai_ui/src/components/Text");
  x = require("./ExploreFeedFeedback");
  C = require("./Strings");
  let ExploreWidgetRoot;
  let <class_fields_init>;
  class ExploreWidgetRoot extends b.Component { ... }
  <proto:ExploreWidgetRoot>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreWidgetRoot>;
  ExploreWidgetRoot = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreWidgetRoot#1 = function <atom:0>;
  exports.ExploreWidgetRoot = ExploreWidgetRoot#1;
  let ExploreWidgetMenu;
  let <class_fields_init>#1;
  class ExploreWidgetMenu extends b.StatefulComponent { ... }
  <proto:ExploreWidgetMenu>.onCreate = function <atom:0>;
  <proto:ExploreWidgetMenu>.onViewModelUpdate = function <atom:0>;
  <proto:ExploreWidgetMenu>.onRender = function <atom:0>;
  <proto:ExploreWidgetMenu>.hidden = function <atom:0>;
  <proto:ExploreWidgetMenu>.bindSelection = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ExploreWidgetMenu>;
  ExploreWidgetMenu = function <atom:0>;
  // close_loc <class_fields_init>#1
  ExploreWidgetMenu#1 = function <atom:0>;
  exports.ExploreWidgetMenu = ExploreWidgetMenu#1;
  P = 24;
  S = (((P + y.OAISpacing.One) + (2 * m.DesignTypography.Subheadline.lineHeight)) + (2 * y.OAISpacing.Two));
  A = {hiddenContent: new w.Style({position: "absolute", top: 0, right: 0, bottom: 0, left: 0, alignItems: "center", justifyContent: "center", gap: y.OAISpacing.One, padding: y.OAISpacing.Two})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreWidgetMenu
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
