// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=widgets/src/components/pickers/PickerView
// args: e
// closure: this
function {
  return this.onItemSelected(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=widgets/src/components/pickers/PickerView
// args: e
// closure: this
function {
  return this.onItemHighlight(e);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=419B file=widgets/src/components/pickers/PickerView
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, w, u
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
  this.state = {selectedIndex: this.viewModel.index};
  this.scrollViewHandler = new w.ScrollViewHandler();
  this.scrollViewSnapController = new u.ScrollViewSnapController(this.scrollViewHandler, {type: 0, align: 1, flingMaxDistanceY: 17});
  this.scrollViewSnapSubscription = this.scrollViewSnapController.startSnapping({onAnchorSnap: function <atom:0>, onAnchorScroll: function <atom:0>});
  this.initialLayout = true;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=199B file=widgets/src/components/pickers/PickerView
// closure: this
function {
  if (!(this.initialLayout)) goto L_c6;
  if (!((this.state.selectedIndex == null))) goto L_b5;
  this.state.selectedIndex;
  this.scrollViewSnapController.doSnapNowToIndex(0);
  this.initialLayout = false;
  false;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=widgets/src/components/pickers/PickerView
// closure: this, i
function {
  return this.onTap(i);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=392B file=widgets/src/components/pickers/PickerView
// closure: this, i, e, s, C, d, t, o
function {
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", C.view);
  e.setAttributeFunction("onTap", function <atom:0>);
  e.beginRender(d, undefined);
  e.setAttributeString("value", t);
  e.setAttributeStyle("style", o);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=9 cpool=1 bc=667B file=widgets/src/components/pickers/PickerView
// args: t, i
// locals: o
// closure: this, e, s, C, d, S, r, g, l
function {
  let o;
  if (!((i === this.state.highlightedIndex))) goto L_df;
  goto L_103;
  // [栈深重同步 1 -> 0]
  o = C.label;
  e.beginRender(r, t);
  e.setAttributeStyle("style", C.item);
  e.beginComponent(g.ScrollViewSnapAnchor, l, undefined, undefined);
  e.setViewModelProperty("controller", this.scrollViewSnapController);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=15 cpool=2 bc=1456B file=widgets/src/components/pickers/PickerView
// locals: h, this
// closure: e, s, C, d, S, r, g, l, v, t, i, o, n, a, c
function {
  this = this;
  let h;
  h = ((this.viewModel.height - v) / 2);
  e.beginRender(t, undefined);
  e.setAttributeNumber("height", this.viewModel.height);
  e.setAttributeStyle("style", C.container);
  e.setAttributeFunction("onLayoutComplete", function <atom:0>);
  e.beginRender(i, undefined);
  e.setAttributeRef(this.scrollViewHandler);
  e.setAttributeNumber("fadingEdgeLength", (this.viewModel.height / 3));
  e.setAttributeStyle("style", C.scrollView);
  e.beginRender(o, undefined);
  e.setAttributeNumber("height", h);
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", C.scrollInnerContainer);
  this.viewModel.labels.forEach(function <atom:0>);
  e.beginRender(a, undefined);
  e.setAttributeNumber("height", h);
  e.endRender();
  e.endRender();
  e.endRender();
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", C.selectionBox);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=148B file=widgets/src/components/pickers/PickerView
// locals: this
function {
  this = this;
  if (!((this.state.selectedIndex == null))) goto L_8e;
  this.state.selectedIndex;
  this.scrollViewSnapController.doSnapNowToIndex(0, false);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=widgets/src/components/pickers/PickerView
// locals: this
function {
  this = this;
  this.scrollViewSnapSubscription.unsubscribe();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=192B file=widgets/src/components/pickers/PickerView
// args: e
// locals: this
function {
  this = this;
  if (!((this.state.selectedIndex !== e))) goto L_bf;
  this.viewModel.onChange(e);
  this.setState({selectedIndex: e});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=274B file=widgets/src/components/pickers/PickerView
// args: e
// locals: this
// closure: p
function {
  this = this;
  if (!((this.state.highlightedIndex !== e))) goto L_111;
  if (!((undefined !== this.state.highlightedIndex))) goto L_e4;
  p.Device.performHapticFeedback("selection");
  this.setState({highlightedIndex: e});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=76B file=widgets/src/components/pickers/PickerView
// args: e
// locals: this
function {
  this = this;
  this.scrollViewSnapController.doSnapNowToIndex(e, true);
  return;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=7 bc=2115B file=widgets/src/components/pickers/PickerView
// args: require, module, exports
// locals: e, t, i, o, n, r, l, s, d, a, c, h, p, S, w, g, u, y, b, m, v, PickerView, <class_fields_init>, PickerView#1, C
function {
  let C;
  let PickerView#1;
  let v;
  let m;
  let b;
  let y;
  let u;
  let g;
  let w;
  let S;
  let p;
  let h;
  let c;
  let a;
  let d;
  let s;
  let l;
  let r;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PickerView = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "Es6i_LEQmBkCXb-S");
  i = e.makeNodePrototype("scroll", undefined, "xEVHW4ahLDtlWLL6");
  o = e.makeNodePrototype("view", undefined, "oMB0aYJyKIZFxmC9");
  n = e.makeNodePrototype("view", undefined, "UQQmtpngI18ALcZt");
  r = e.makeNodePrototype("layout", undefined, "Pq0p_mz98iFCAFm2");
  l = e.makeComponentPrototype(undefined, "j8LuRzleXrJuLfs_");
  s = e.makeNodePrototype("view", undefined, "Crbq7am9mlOIkt3p");
  d = e.makeNodePrototype("label", undefined, "8781TcURxl_NWdeU");
  a = e.makeNodePrototype("view", undefined, "0h8qXVwOInqyRyXj");
  c = e.makeNodePrototype("view", undefined, "QbHIdL2uTYtXm0qo");
  h = require("valdi_core/src/Component");
  p = require("valdi_core/src/Device");
  S = require("valdi_core/src/Style");
  w = require("widgets/src/components/scroll/ScrollViewHandler");
  g = require("widgets/src/components/scroll/snap/ScrollViewSnapAnchor");
  u = require("widgets/src/components/scroll/snap/ScrollViewSnapController");
  y = require("widgets/src/styles/semanticColors");
  b = require("widgets/src/styles/spacing");
  m = require("valdi_core/src/SystemFont");
  v = 34;
  let PickerView;
  let <class_fields_init>;
  class PickerView extends h.StatefulComponent { ... }
  <proto:PickerView>.onRender = function <atom:0>;
  <proto:PickerView>.onCreate = function <atom:0>;
  <proto:PickerView>.onDestroy = function <atom:0>;
  <proto:PickerView>.onItemSelected = function <atom:0>;
  <proto:PickerView>.onItemHighlight = function <atom:0>;
  <proto:PickerView>.onTap = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PickerView>;
  PickerView = function <atom:0>;
  // close_loc <class_fields_init>
  PickerView#1 = function <atom:0>;
  exports.PickerView = PickerView#1;
  C = {scrollView: new S.Style({width: "100%", showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false}), scrollInnerContainer: new S.Style({display: "flex", width: "100%", alignItems: "center"}), container: new S.Style({width: "100%"}), item: new S.Style({width: "100%", margin: 0, paddingLeft: b.Spacing.SM, paddingRight: b.Spacing.SM}), label: new S.Style({font: m.systemFont(18), color: y.SemanticColor.Text.SECONDARY}), highlightedLabel: new S.Style({color: y.SemanticColor.Text.PRIMARY}), view: new S.Style({padding: b.Spacing.SM, width: "100%", alignItems: "center"}), selectionBox: new S.Style({position: "absolute", width: "100%", height: "14%", top: "43%", zIndex: -1, background: y.SemanticColor.Background.OBJECT, borderColor: y.SemanticColor.Background.MAIN, borderRadius: 12})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/pickers/PickerView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
