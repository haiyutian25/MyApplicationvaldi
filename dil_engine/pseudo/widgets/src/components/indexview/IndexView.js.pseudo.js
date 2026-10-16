// fn <atom:0>  args=1 vars=21 closure=4 cpool=0 bc=1684B file=widgets/src/components/indexview/IndexView
// args: e
// locals: t, o, i, n, r, s, d, c, u, h, m, y, b, e#1, t#1, i#1, n#1, r#1, s#1, l
// closure: this, g, l, a
function {
  let b;
  let y;
  let m;
  let h;
  let u;
  let c;
  let d;
  let s;
  let r;
  let n;
  let i;
  let o;
  let t;
  if (!((2 === e.state))) goto L_84;
  this.setState({selected: null, touched: false});
  return;
  if (!((0 === e.state))) goto L_e1;
  this.setState({selected: null, touched: true});
  t = this.root.single();
  if (!(!t)) goto L_132;
  return;
  o = this.viewModel;
  i = o.symbols;
  n = t.frame.height;
  r = (e.y / n);
  s = g.clamp(Math.floor((r * i.length)), 0, (i.length - 1));
  d = i[s];
  if (!((s === this.state.selected))) goto L_29e;
  return;
  l.Device.performHapticFeedback("selection");
  this.setState({selected: s});
  c = o.onTouch;
  if (!(c)) goto L_351;
  c(d);
  u = o.indexViewHandler.getRef(d);
  if (!(!u)) goto L_3a6;
  return;
  h = u.all();
  if (!((h.length <= 0))) goto L_3d8;
  return;
  m = o.scrollViewHandler;
  y = m.scrollView;
  b = m.scrollViewFrame;
  if (!(y)) goto L_693;
  if (!(b)) goto L_693;
  let e#1;
  e#1 = a.RenderedElementUtils.relativePositionTo(y, h[0]);
  if (!(e#1)) goto L_693;
  let l;
  let s#1;
  let r#1;
  let n#1;
  let i#1;
  let t#1;
  if (!((o.extraOffsetX == null))) goto L_4f3;
  o.extraOffsetX;
  t#1 = 0;
  if (!((o.extraOffsetY == null))) goto L_51f;
  o.extraOffsetY;
  i#1 = 0;
  n#1 = (m.getContentWidth() - b.width);
  r#1 = (m.getContentHeight() - b.height);
  s#1 = g.clamp((e#1.x + t#1), 0, n#1);
  l = g.clamp((e#1.y + i#1), 0, r#1);
  m.scrollTo(s#1, l, false);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=1 bc=141B file=widgets/src/components/indexview/IndexView
// locals: this, this.active_func, new.target, arguments
// closure: g, l, a, <class_fields_init>, d
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
  this.state = {selected: null, touched: false};
  this.root = new d.ElementRef();
  this.onTouch = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=796B file=widgets/src/components/indexview/IndexView
// locals: i, this
// closure: h, e, t, S, o
function {
  this = this;
  let i;
  if (!(this.state.touched)) goto L_b2;
  goto L_b3;
  // [栈深重同步 1 -> 0]
  i = undefined;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", S.root);
  e.setAttribute("lazyLayout", true);
  e.beginRender(o, undefined);
  e.setAttributeRef(this.root);
  e.setAttributeStyle("style", S.box);
  e.setAttributeString("backgroundColor", i);
  e.setAttributeFunction("onTouch", this.onTouch);
  this.onRenderSymbols();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=2 cpool=0 bc=321B file=widgets/src/components/indexview/IndexView
// locals: t, o, n, r, this
// closure: e, i
function {
  this = this;
  let o;
  let t;
  t = this.state.selected;
  o = this.viewModel.symbols;
  let n;
  n = 0;
  if (!((n < o.length))) goto L_140;
  let r;
  r = o[n];
  e.beginRender(i, undefined);
  this.onRenderSymbol(r, (n === t));
  e.endRender();
  n = <n_new>;
  (n++);
  goto L_98;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=611B file=widgets/src/components/indexview/IndexView
// args: t, o
// closure: e, n, S, r
function {
  if (!(t.image)) goto L_146;
  e.beginRender(n, undefined);
  if (!(o)) goto L_a5;
  goto L_c9;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", S.imageDisabled);
  e.setAttribute("src", t.image);
  goto L_262;
  // [栈深重同步 1 -> 0]
  e.beginRender(r, undefined);
  if (!(o)) goto L_1c4;
  goto L_1e8;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", S.labelDisabled);
  e.setAttributeString("value", t.label);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=4 bc=1767B file=widgets/src/components/indexview/IndexView
// args: require, module, exports
// locals: e, t, o, i, n, r, s, l, d, c, a, u, h, m, g, y, b, S, IndexView, <class_fields_init>, IndexView#1
function {
  let IndexView#1;
  let S;
  let b;
  let y;
  let g;
  let m;
  let h;
  let u;
  let a;
  let c;
  let d;
  let l;
  let s;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IndexView = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "neexVsdJmMaa6_g-");
  o = e.makeNodePrototype("view", ["touchAreaExtension", 8], "Z3D_dzYjWm9hIH44");
  i = e.makeNodePrototype("layout", ["flexBasis", 1, "flexGrow", 1, "justifyContent", "center", "alignItems", "center"], "jCyjmvbjJPjZBcpy");
  n = e.makeNodePrototype("image", undefined, "hBnQXK4EwL9-kDY5");
  r = e.makeNodePrototype("label", undefined, "tOvbU3m2rH8yGubE");
  s = require("valdi_core/src/Component");
  l = require("valdi_core/src/Device");
  d = require("valdi_core/src/ElementRef");
  c = require("valdi_core/src/Style");
  a = require("valdi_core/src/utils/RenderedElementUtils");
  u = require("widgets/src/styles/TextStyleFont");
  h = require("widgets/src/styles/semanticColors");
  m = require("widgets/src/styles/spacing");
  g = require("foundation/src/number");
  y = new c.Style({font: u.TextStyleFontNonDynamic.CAPTION, textAlign: "center"});
  b = new c.Style({height: 10, width: 10});
  S = {root: new c.Style({minWidth: 16, accessibilityNavigation: "ignored", height: "100%"}), box: new c.Style({paddingTop: m.Spacing.XS, paddingBottom: m.Spacing.XS, height: "100%", flexDirection: "column", justifyContent: "space-around", alignContent: "center", alignItems: "center", borderRadius: "50%"}), labelSelected: y.extend({color: h.SemanticColor.Text.PRIMARY}), labelDisabled: y.extend({color: h.SemanticColor.Text.TERTIARY}), imageSelected: b.extend({tint: h.SemanticColor.Text.PRIMARY}), imageDisabled: b.extend({tint: h.SemanticColor.Text.TERTIARY})};
  let IndexView;
  let <class_fields_init>;
  class IndexView extends s.StatefulComponent { ... }
  <proto:IndexView>.onRender = function <atom:0>;
  <proto:IndexView>.onRenderSymbols = function <atom:0>;
  <proto:IndexView>.onRenderSymbol = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:IndexView>;
  IndexView = function <atom:0>;
  // close_loc <class_fields_init>
  IndexView#1 = function <atom:0>;
  exports.IndexView = IndexView#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/indexview/IndexView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
