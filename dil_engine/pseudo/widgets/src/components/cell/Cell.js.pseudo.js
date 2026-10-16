// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=106B file=widgets/src/components/cell/Cell
// args: e
function {
  e.AccessoryLeft = "accessory-left";
  e.Default = "default";
  e.AccessoryTitle = "accessory-title";
  e.AccessoryIdentity = "accessory-identity";
  e.AccessoryRight = "accessory-right";
  e.Title = "title";
  e.Subtitle = "subtitle";
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=153B file=widgets/src/components/cell/Cell
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, b
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
  this.identityAccessoryRef = new b.ElementRef();
  this.rightAccessoryRef = new b.ElementRef();
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=314B file=widgets/src/components/cell/Cell
// locals: this
function {
  this = this;
  this.identityAccessoryRef.setAttribute("marginRight", 6);
  this.identityAccessoryRef.setAttribute("alignSelf", "flex-start");
  this.rightAccessoryRef.setAttribute("marginLeft", 6);
  this.rightAccessoryRef.setAttribute("marginRight", 3);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=75B file=widgets/src/components/cell/Cell
// closure: e, h, this
function {
  e.renderNamedSlot(h.AccessoryTitle, this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=638B file=widgets/src/components/cell/Cell
// closure: e, h, this, u, A, s
function {
  if (!(u.title)) goto L_233;
  e.beginComponent(A.DefaultCellTitle, s, undefined, undefined);
  e.setViewModelProperty("title", u.title);
  e.setViewModelProperty("numTitleLines", u.numTitleLines);
  e.setViewModelProperty("textColor", u.titleColor);
  e.setViewModelProperty("font", u.titleFont);
  e.setNamedSlot(h.AccessoryTitle, function <atom:0>);
  goto L_27d;
  // [栈深重同步 1 -> 0]
  e.renderNamedSlot(h.Title, this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=279B file=widgets/src/components/cell/Cell
// closure: e, n, g, S
function {
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", g.style.label.identity);
  e.setAttribute("value", S);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=312B file=widgets/src/components/cell/Cell
// closure: e, d, g
function {
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", g.style.label.delimiter);
  e.setAttributeString("value", g.SUBTITLE_DELIMITER);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=279B file=widgets/src/components/cell/Cell
// closure: e, a, g, C
function {
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", g.style.label.identity);
  e.setAttribute("value", C);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=3 bc=482B file=widgets/src/components/cell/Cell
// closure: e, n, g, S, d, a, C, l, h, this, m
function {
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", g.style.container.wrappable);
  e.renderNamedSlot(h.AccessoryIdentity, this, this.identityAccessoryRef);
  m.when(S, function <atom:0>);
  if (!(S)) goto L_18b;
  m.when(C, function <atom:0>);
  m.when(C, function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=657B file=widgets/src/components/cell/Cell
// closure: this, e, p, y, u, h
function {
  if (!(this.viewModel.subtitle)) goto L_244;
  e.beginComponent(p.DefaultCellSubtitle, y, undefined, undefined);
  e.setViewModelProperty("subtitle", this.viewModel.subtitle);
  e.setViewModelProperty("numSubtitleLines", this.viewModel.numSubtitleLines);
  e.setViewModelProperty("color", u.subtitleColor);
  e.setViewModelProperty("font", u.subtitleFont);
  goto L_290;
  // [栈深重同步 1 -> 0]
  e.renderNamedSlot(h.Subtitle, this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=327B file=widgets/src/components/cell/Cell
// closure: e, c, g, P, N
function {
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", g.style.label.reason);
  e.setAttributeNumber("numberOfLines", P);
  e.setAttributeString("value", N);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=14 closure=17 cpool=4 bc=2279B file=widgets/src/components/cell/Cell
// locals: u, b, R, f, v, S, C, N, P, w, L, M, k, this
// closure: e, h, A, s, n, g, d, a, l, m, p, y, c, t, i, r, o
function {
  this = this;
  let k;
  let M;
  let L;
  let w;
  let P;
  let N;
  let C;
  let S;
  let v;
  let f;
  let R;
  let b;
  let u;
  if (!((this.viewModel == null))) goto L_53;
  this.viewModel;
  u = {};
  if (!((u.accessoryWidth == null))) goto L_7f;
  u.accessoryWidth;
  b = 48;
  if (!((u.accessoryAlign == null))) goto L_ae;
  u.accessoryAlign;
  R = "flex-start";
  if (!((u.accessoryLeftAlign == null))) goto L_dd;
  u.accessoryLeftAlign;
  f = "center";
  if (!((u.accessoryMarginRight == null))) goto L_109;
  u.accessoryMarginRight;
  v = 11;
  S = u.identityTitle;
  C = u.meta;
  if (!((u.reason == null))) goto L_183;
  u.reason;
  goto L_1a7;
  N = undefined.toLocaleUpperCase();
  if ((u.numReasonLines)) goto L_1d2;
  P = 1;
  if (!((u.packing == null))) goto L_242;
  u.packing;
  w = g.CellPacking.Large70;
  L = g.packingRootMinHeights[w];
  M = g.packingRootHorizontalPaddings[w];
  k = g.packingRootVerticalPaddings[w];
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", g.style.container.root);
  e.setAttributeNumber("minHeight", L);
  e.setAttributeNumber("paddingTop", k);
  e.setAttributeNumber("paddingBottom", k);
  e.setAttributeNumber("paddingLeft", M);
  e.setAttributeNumber("paddingRight", M);
  e.beginRender(i, undefined);
  e.setAttributeString("alignSelf", f);
  e.renderNamedSlot(h.AccessoryLeft, this);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeNumber("width", b);
  e.setAttributeStyle("style", g.style.container.accessory);
  e.setAttributeString("alignSelf", R);
  e.setAttributeNumber("marginRight", v);
  e.renderNamedSlot(h.Default, this);
  e.endRender();
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", g.style.container.labels);
  function <atom:0>();
  if ((S)) goto L_7f5;
  m.when(C, function <atom:0>);
  function <atom:0>();
  m.when(N, function <atom:0>);
  e.endRender();
  e.renderNamedSlot(h.AccessoryRight, this, this.rightAccessoryRef);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=4 bc=917B file=widgets/src/components/cell/Cell
// args: require, module, exports
// locals: e, t, i, r, o, s, l, n, d, a, y, c, u, b, m, g, p, A, h, Cell, <class_fields_init>, Cell#1
function {
  let Cell#1;
  let A;
  let p;
  let g;
  let m;
  let b;
  let u;
  let c;
  let y;
  let a;
  let d;
  let n;
  let l;
  let s;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CellSlotType = undefined;
  exports.Cell = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "hEhlyEWRbpcGIe7A");
  i = e.makeNodePrototype("layout", undefined, "jYY-1raiNe4fVaYc");
  r = e.makeNodePrototype("layout", undefined, "LXCnAlJu8HZuZM2I");
  o = e.makeNodePrototype("layout", undefined, "ygptLNGUt3D28lC-");
  s = e.makeComponentPrototype(undefined, "Sip31GAPfiaCy1PC");
  l = e.makeNodePrototype("layout", undefined, "Zkom3ndFQmzMEKrc");
  n = e.makeNodePrototype("label", undefined, "wMAKojjswYMZ4cf-");
  d = e.makeNodePrototype("label", undefined, "hhuJgfI-NcYXBpJf");
  a = e.makeNodePrototype("label", undefined, "eLP2RCbz6oI19VdR");
  y = e.makeComponentPrototype(undefined, "ZqULQ7KHk6zku4qW");
  c = e.makeNodePrototype("label", ["accessibilityId", "result-reason"], "VLbBGJhGTm77xAB5");
  u = require("valdi_core/src/Component");
  b = require("valdi_core/src/ElementRef");
  m = require("valdi_core/src/utils/When");
  g = require("./style");
  p = require("./subtitle/DefaultCellSubtitle");
  A = require("./title/DefaultCellTitle");
  if ((h)) goto L_337;
  h = {};
  exports.CellSlotType = {};
  !function <atom:0>({});
  let Cell;
  let <class_fields_init>;
  class Cell extends u.Component { ... }
  <proto:Cell>.onCreate = function <atom:0>;
  <proto:Cell>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Cell>;
  Cell = function <atom:0>;
  // close_loc <class_fields_init>
  Cell#1 = function <atom:0>;
  exports.Cell = Cell#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/cell/Cell
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
