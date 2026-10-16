// fn <atom:0>  args=0 vars=2 closure=9 cpool=0 bc=1694B file=dil_widgets/src/widgets/CardLinkItem
// locals: i, this
// closure: a, l, o, s, e, t, b, r, c
function {
  this = this;
  let i;
  i = this.baseViewAttributes;
  a.applyDILBackgroundAttributes(this.viewModel, i, l);
  if ((o.DIL_PADDING_ATTRIBUTES.apply(this.viewModel, i))) goto L_135;
  o.applyResolvedDILPaddingAttributes(i, s.resolveDILPadding(4));
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", b.card);
  e.setAttributes(i);
  e.setAttribute("accessibilityCategory", "link");
  e.setAttributeString("accessibilityLabel", this.viewModel.hrefLabel);
  e.setAttribute("borderRadius", r.resolveDILRadius(this.viewModel.radius));
  if (!((this.viewModel.height == null))) goto L_3c9;
  this.viewModel.height;
  e.setAttribute("height", this.viewModel.size);
  e.setAttribute("maxHeight", this.viewModel.maxHeight);
  e.setAttribute("maxWidth", this.viewModel.maxWidth);
  e.setAttribute("minHeight", this.viewModel.minHeight);
  e.setAttribute("minWidth", this.viewModel.minWidth);
  if (!((this.viewModel.width == null))) goto L_649;
  this.viewModel.width;
  if (!((this.viewModel.size == null))) goto L_649;
  this.viewModel.size;
  e.setAttribute("width", c);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/CardLinkItem
function {
  return true;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=88B file=dil_widgets/src/widgets/CardLinkItem
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if ((get_super_value(this, super, "isTappable"))) goto L_57;
  return (undefined !== this.viewModel.href);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=311B file=dil_widgets/src/widgets/CardLinkItem
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(this.hasClickHandler)) goto L_38;
  goto L_136;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== this.viewModel.href))) goto L_136;
  if (!((this.context == null))) goto L_af;
  this.context;
  goto L_136;
  undefined.dispatchActionPayload({handler: "client", type: "open_url", payload: {url: this.viewModel.href}});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/CardLinkItem
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

// fn <atom:0>  args=3 vars=20 closure=0 cpool=5 bc=630B file=dil_widgets/src/widgets/CardLinkItem
// args: require, module, exports
// locals: e, t, i, r, s, d, a, o, l, h, n, u, c, CardLinkItem, <class_fields_init>, CardLinkItem#1, b
function {
  let b;
  let CardLinkItem#1;
  let c;
  let u;
  let n;
  let h;
  let l;
  let o;
  let a;
  let d;
  let s;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CardLinkItem = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "qLQvdeS1NxVjffxr");
  i = require("dil_core/src/DILComponent");
  r = require("dil_core/src/layout/DILLayout");
  s = require("dil_core/src/layout/DILSpacing");
  d = require("valdi_core/src/Style");
  a = require("./attributes/DILBackgroundAttributes");
  o = require("./attributes/DILSpacingAttributes");
  l = "surface-elevated";
  h = "alpha-10";
  n = 4;
  u = 8;
  c = 200;
  let CardLinkItem;
  let <class_fields_init>;
  class CardLinkItem extends i.DILComponent { ... }
  <proto:CardLinkItem>.onRender = function <atom:0>;
  <proto:CardLinkItem>.hasButtonAccessibility = function <atom:0>;
  <proto:CardLinkItem>.isTappable = function <atom:0>;
  <proto:CardLinkItem>.handleTap = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CardLinkItem>;
  CardLinkItem = function <atom:0>;
  // close_loc <class_fields_init>
  CardLinkItem#1 = function <atom:0>;
  exports.CardLinkItem = CardLinkItem#1;
  // append([], 0, i.DIL_COMPONENT_PROPERTIES)
  [][i.DIL_COMPONENT_PROPERTIES] = "background";
  [][("background" ++)] = "height";
  [][("height" ++)] = "href";
  [][("href" ++)] = "hrefLabel";
  [][("hrefLabel" ++)] = "maxHeight";
  [][("maxHeight" ++)] = "maxWidth";
  [][("maxWidth" ++)] = "minHeight";
  [][("minHeight" ++)] = "minWidth";
  [][("minWidth" ++)] = "padding";
  [][("padding" ++)] = "radius";
  [][("radius" ++)] = "size";
  [][("size" ++)] = "width";
  ("width" ++);
  CardLinkItem#1.properties = [];
  b = {card: new d.Style({flexDirection: "column", gap: 8, flexShrink: 0, borderColor: h, borderWidth: 1, borderRadius: 8, accessibilityCategory: "link"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/CardLinkItem
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
