// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=101B file=dil_text/src/list/DILListItem
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, F
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
  this.customMarkerRef = new F.ElementRef();
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=12 cpool=0 bc=2720B file=dil_text/src/list/DILListItem
// locals: d, s, this
// closure: ue, ve, e, t, ye, r, V, i, o, le, he, n
function {
  this = this;
  let s;
  let d;
  if (!((true === this.viewModel.customMarker))) goto L_77;
  this.renderCustomMarkerItem();
  return;
  if (!(("checkbox" === this.viewModel.marker))) goto L_e9;
  this.renderCheckboxItem();
  return;
  if (!(("decimal" === this.viewModel.marker))) goto L_1a6;
  if (!(("solid" === this.viewModel.connector))) goto L_1a6;
  this.renderConnectedDecimalItem();
  return;
  d = ue(this.viewModel.marker, this.viewModel.itemIndex);
  s = this.viewModel.baseViewAttributes;
  if (!((undefined !== d))) goto L_2a8;
  if (!(ve(d))) goto L_2a8;
  this.renderDiscItem();
  return;
  if (!((undefined === d))) goto L_3ac;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", ye.markerlessItem);
  e.setAttributes(s);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", ye.listItem);
  if (!((this.viewModel.markerGap == null))) goto L_49d;
  this.viewModel.markerGap;
  e.setAttributeNumber("gap", V);
  e.setAttributes(s);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", ye.textMarkerLane);
  e.setAttributeNumber("minWidth", this.viewModel.markerWidth);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", ye.marker);
  if (!((this.viewModel.markerWeight == null))) goto L_743;
  this.viewModel.markerWeight;
  if (!(("decimal" === this.viewModel.marker))) goto L_742;
  goto L_743;
  // [栈深重同步 7 -> 6]
  e.setAttribute("value", le(d, this.viewModel.markerColor, undefined, this.viewModel.markerFontSize));
  if (!(this.viewModel.useTextLineHeightForMarker)) goto L_804;
  goto L_805;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("lineHeightMultiple", undefined);
  e.setAttributeNumber("marginTop", this.viewModel.markerMarginTop);
  e.endRender();
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", ye.itemContent);
  e.setAttribute("gap", this.viewModel.contentGap);
  e.setAttribute("rowGap", this.viewModel.contentGap);
  e.renderUnnamedSlot(this);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=334B file=dil_text/src/list/DILListItem
// closure: e, l, ye, i, be, this
function {
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", ye.hollowBulletConnector);
  e.setAttributeNumber("marginLeft", (i - 1));
  e.setAttributeNumber("bottom", be(this.viewModel.connectorGap, 0));
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=281B file=dil_text/src/list/DILListItem
// closure: e, u, ye, me, this
function {
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", ye.hollowBulletMarker);
  e.setAttributeString("borderColor", me(this.viewModel.markerColor));
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=281B file=dil_text/src/list/DILListItem
// closure: e, m, ye, me, this
function {
  e.beginRender(m, undefined);
  e.setAttributeStyle("style", ye.solidDiscMarker);
  e.setAttributeString("backgroundColor", me(this.viewModel.markerColor));
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=448B file=dil_text/src/list/DILListItem
// closure: e, b, ye, h, me, this
function {
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", ye.discMarkerSlot);
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", ye.discMarker);
  e.setAttributeString("backgroundColor", me(this.viewModel.markerColor));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=8 closure=16 cpool=4 bc=2078B file=dil_text/src/list/DILListItem
// locals: t, r, i, o, n, c, w, this
// closure: e, l, ye, be, u, me, m, b, h, d, V, s, z, Y, a, v
function {
  this = this;
  let w;
  let c;
  let n;
  let o;
  let i;
  let r;
  let t;
  t = this.viewModel.baseViewAttributes;
  r = this.shouldRenderConnector();
  i = this.viewModel.connectedBulletOffset;
  if (!(("solid" === this.viewModel.connector))) goto L_11c;
  o = (undefined !== i);
  if (!(o)) goto L_127;
  goto L_16b;
  // [栈深重同步 1 -> 0]
  n = this.viewModel.discMarkerOffset;
  if ((r)) goto L_180;
  if ((o)) goto L_180;
  c = (undefined !== n);
  if (!(o)) goto L_18c;
  w = r;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", ye.listItem);
  e.setAttribute("extendViewportWithChildren", w);
  if (!((this.viewModel.markerGap == null))) goto L_2b0;
  this.viewModel.markerGap;
  e.setAttributeNumber("gap", V);
  e.setAttributes(t);
  e.beginRender(s, undefined);
  if (!(r)) goto L_35f;
  goto L_383;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", ye.markerLane);
  if (!((this.viewModel.markerWidth == null))) goto L_3fc;
  this.viewModel.markerWidth;
  e.setAttributeNumber("width", z);
  e.setAttribute("extendViewportWithChildren", w);
  this.renderMarkerLaneSpacer();
  if (!(o)) goto L_468;
  if (!(r)) goto L_491;
  goto L_491;
  // [栈深重同步 1 -> 0]
  this.renderConnectorLine(Y);
  e.beginRender(a, undefined);
  if (!(c)) goto L_512;
  goto L_536;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", ye.markerOverlay);
  if (!(c)) goto L_56d;
  goto L_56e;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("height", undefined);
  e.setAttributeNumber("left", n);
  if (!((undefined === n))) goto L_5d5;
  goto L_5d9;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("right", -n);
  if (!(o)) goto L_5e7;
  goto L_5f4;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_5f1;
  goto L_5f4;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  e.endRender();
  e.endRender();
  e.beginRender(v, undefined);
  e.setAttributeStyle("style", ye.itemContent);
  e.setAttribute("gap", this.viewModel.contentGap);
  e.setAttribute("rowGap", this.viewModel.contentGap);
  e.renderUnnamedSlot(this);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=12 cpool=0 bc=2105B file=dil_text/src/list/DILListItem
// locals: t, r, i, this
// closure: e, c, ye, V, w, z, Y, y, k, le, he, p
function {
  this = this;
  let i;
  let r;
  let t;
  t = this.viewModel.baseViewAttributes;
  r = this.shouldRenderConnector();
  if (!((this.viewModel.itemIndex == null))) goto L_c3;
  this.viewModel.itemIndex;
  i = String(1);
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", ye.listItem);
  e.setAttribute("extendViewportWithChildren", r);
  if (!((this.viewModel.markerGap == null))) goto L_1e6;
  this.viewModel.markerGap;
  e.setAttributeNumber("gap", V);
  e.setAttributes(t);
  e.beginRender(w, undefined);
  if (!(r)) goto L_295;
  goto L_2b9;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", ye.markerLane);
  if (!((this.viewModel.markerWidth == null))) goto L_331;
  this.viewModel.markerWidth;
  e.setAttributeNumber("width", z);
  e.setAttribute("extendViewportWithChildren", r);
  this.renderConnectorLine(Y);
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", ye.markerSlotOverlay);
  e.setAttributeNumber("height", Y);
  e.beginRender(k, undefined);
  e.setAttributeStyle("style", ye.connectedDecimalMarkerLabel);
  e.setAttribute("value", le(i, this.viewModel.markerColor, this.viewModel.markerWeight, this.viewModel.markerFontSize));
  e.setAttributeNumber("lineHeightMultiple", he(i));
  e.endRender();
  e.endRender();
  e.endRender();
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", ye.itemContent);
  e.setAttribute("gap", this.viewModel.contentGap);
  e.setAttribute("rowGap", this.viewModel.contentGap);
  e.renderUnnamedSlot(this);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=15 cpool=0 bc=2149B file=dil_text/src/list/DILListItem
// locals: t, r, i, this
// closure: e, g, ye, V, A, z, Y, S, M, oe, ie, R, de, ne, C
function {
  this = this;
  let i;
  let r;
  let t;
  t = this.viewModel.baseViewAttributes;
  r = (true === this.viewModel.checked);
  i = this.shouldRenderConnector();
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", ye.checkboxItem);
  if (!((this.viewModel.markerGap == null))) goto L_1ad;
  this.viewModel.markerGap;
  e.setAttributeNumber("gap", V);
  e.setAttributes(t);
  e.beginRender(A, undefined);
  if (!(i)) goto L_25c;
  goto L_280;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", ye.markerLane);
  if (!((this.viewModel.markerWidth == null))) goto L_2f8;
  this.viewModel.markerWidth;
  e.setAttributeNumber("width", z);
  this.renderMarkerLaneSpacer();
  this.renderConnectorLine(Y);
  e.beginRender(S, undefined);
  if (!(i)) goto L_3cb;
  goto L_3ef;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", ye.markerOverlay);
  if (!(i)) goto L_426;
  goto L_427;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("height", undefined);
  if (!(r)) goto L_53a;
  e.beginRender(M, undefined);
  e.setAttributeStyle("style", ye.checkboxCheckedMarker);
  e.setAttribute("src", oe);
  e.setAttributeString("accessibilityLabel", ie);
  goto L_63e;
  // [栈深重同步 1 -> 0]
  e.beginRender(R, undefined);
  e.setAttributeStyle("style", ye.checkboxUncheckedMarker);
  e.setAttribute("src", de);
  e.setAttributeString("accessibilityLabel", ne);
  e.endRender();
  e.endRender();
  e.endRender();
  e.beginRender(C, undefined);
  e.setAttributeStyle("style", ye.itemContent);
  e.setAttribute("gap", this.viewModel.contentGap);
  e.setAttribute("rowGap", this.viewModel.contentGap);
  e.renderUnnamedSlot(this);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=7 closure=10 cpool=0 bc=2601B file=dil_text/src/list/DILListItem
// locals: t, r, i, o, n, d, this
// closure: ce, we, Y, e, N, ye, f, x, I, L
function {
  this = this;
  let d;
  let n;
  let o;
  let i;
  let r;
  let t;
  t = this.viewModel.baseViewAttributes;
  r = ce(this.viewModel.markerSize);
  if (!((this.viewModel.markerContentSize == null))) goto L_ed;
  this.viewModel.markerContentSize;
  i = r;
  if (!((this.viewModel.markerGap == null))) goto L_17d;
  this.viewModel.markerGap;
  o = we(this.viewModel.markerSize);
  if (!((r == null))) goto L_189;
  r;
  n = Y;
  d = this.shouldRenderConnector();
  if (!((undefined !== i))) goto L_2fe;
  this.customMarkerRef.setAttribute("width", i);
  this.customMarkerRef.setAttribute("height", i);
  this.customMarkerRef.setAttribute("maxWidth", i);
  this.customMarkerRef.setAttribute("maxHeight", i);
  e.beginRender(N, undefined);
  e.setAttributeStyle("style", ye.listItem);
  e.setAttributeNumber("gap", o);
  e.setAttribute("extendViewportWithChildren", d);
  e.setAttributes(t);
  e.beginRender(f, undefined);
  if (!(d)) goto L_487;
  goto L_4ab;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", ye.markerLane);
  e.setAttributeNumber("width", r);
  e.setAttributeNumber("minHeight", r);
  e.setAttribute("extendViewportWithChildren", d);
  this.renderMarkerLaneSpacer();
  this.renderConnectorLine(n);
  e.beginRender(x, undefined);
  e.setAttributeStyle("style", ye.markerSlotOverlay);
  e.setAttributeNumber("height", n);
  e.beginRender(I, undefined);
  e.setAttributeStyle("style", ye.customMarkerSlot);
  e.setAttributeNumber("width", r);
  e.setAttributeNumber("height", r);
  e.renderNamedSlot("marker", this, this.customMarkerRef);
  e.endRender();
  e.endRender();
  e.endRender();
  e.beginRender(L, undefined);
  e.setAttributeStyle("style", ye.itemContent);
  e.setAttribute("gap", this.viewModel.contentGap);
  e.setAttributeNumber("minHeight", r);
  if (!((undefined === r))) goto L_935;
  goto L_93a;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("justifyContent", "center");
  e.setAttribute("rowGap", this.viewModel.contentGap);
  e.renderUnnamedSlot(this);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=272B file=dil_text/src/list/DILListItem
// closure: e, D, ye, le, Q, he
function {
  e.beginRender(D, undefined);
  e.setAttributeStyle("style", ye.markerLaneSpacer);
  e.setAttribute("value", le(Q, undefined, undefined, undefined));
  e.setAttributeNumber("lineHeightMultiple", he(Q));
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=0 bc=615B file=dil_text/src/list/DILListItem
// args: t
// locals: r, i, this
// closure: $, e, P, ye, be
function {
  this = this;
  let i;
  let r;
  if (!(!this.shouldRenderConnector())) goto L_31;
  return;
  if (!((this.viewModel.connectorClearance == null))) goto L_7a;
  this.viewModel.connectorClearance;
  r = 6;
  if (!(("checkbox" === this.viewModel.marker))) goto L_113;
  if (!((true !== this.viewModel.customMarker))) goto L_113;
  goto L_114;
  // [栈深重同步 1 -> 0]
  i = 0;
  e.beginRender(P, undefined);
  e.setAttributeStyle("style", ye.connectorLine);
  e.setAttributeNumber("top", (t + r));
  e.setAttributeNumber("bottom", (be(this.viewModel.connectorGap, r) - i));
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=230B file=dil_text/src/list/DILListItem
// locals: this
function {
  this = this;
  if (!(("solid" === this.viewModel.connector))) goto L_e5;
  if (!((true === this.viewModel.hasNextItem))) goto L_e5;
  return ("none" !== this.viewModel.marker);
}

// fn le  args=4 vars=4 closure=2 cpool=0 bc=26B file=dil_text/src/list/DILListItem
// args: e, t, r, i
// closure: ae, J
function {
  if (!((r == null))) goto L_e;
  r;
  if (!((i == null))) goto L_17;
  i;
  return ae(e, t, "normal", J);   // tail call
}

// fn ae  args=4 vars=6 closure=4 cpool=0 bc=605B file=dil_text/src/list/DILListItem
// args: e, t, r, i
// locals: o, n
// closure: O, q, _, U
function {
  let n;
  let o;
  o = new O.AttributedTextBuilder();
  n = new q.DILTextFontResolver();
  n.pushFontStyle(i, r, false, _.DILFontRole.Text);
  o.pushColor(U.resolveDILTextColor(t, "prose"));
  o.pushFont(n.resolveFont());
  o.appendText(e);
  o.pop();
  o.pop();
  if (!((n.pushedFontStyleCount > 0))) goto L_236;
  n.popFontStyle();
  goto L_1e4;
  return o.build();   // tail call
}

// fn ue  args=2 vars=2 closure=0 cpool=0 bc=76B file=dil_text/src/list/DILListItem
// args: e, t
function {
  if (!((undefined !== e))) goto L_4b;
  if (!(("none" !== e))) goto L_4b;
  if (!(("decimal" === e))) goto L_49;
  if (!((t == null))) goto L_40;
  t;
  return "".concat(1, ".");
  return e;
  return;
}

// fn me  args=1 vars=1 closure=1 cpool=0 bc=45B file=dil_text/src/list/DILListItem
// args: e
// closure: U
function {
  return U.resolveDILTextColor(e, "prose");   // tail call
}

// fn be  args=2 vars=2 closure=1 cpool=0 bc=54B file=dil_text/src/list/DILListItem
// args: e, t
// closure: G
function {
  if (!(("number" == typeof e))) goto L_e;
  goto L_34;
  // [栈深重同步 2 -> 1]
  return (t - G.resolveDILSpacingUnits(1));
}

// fn he  args=1 vars=1 closure=3 cpool=0 bc=45B file=dil_text/src/list/DILListItem
// args: e
// closure: Y, j, J
function {
  return (Y / j.resolveDILTextFontSize(J));
}

// fn ve  args=1 vars=1 closure=0 cpool=0 bc=41B file=dil_text/src/list/DILListItem
// args: e
function {
  if ((("-" === e))) goto L_28;
  if ((("*" === e))) goto L_28;
  if ((("+" === e))) goto L_28;
  return ("disc" === e);
}

// fn ce  args=1 vars=1 closure=1 cpool=0 bc=12B file=dil_text/src/list/DILListItem
// args: e
// closure: se
function {
  if (!((undefined !== e))) goto L_b;
  return se[e];
  return;
}

// fn we  args=1 vars=1 closure=2 cpool=0 bc=28B file=dil_text/src/list/DILListItem
// args: e
// closure: B, V
function {
  if ((("lg" === e))) goto L_12;
  if (!(("xl" === e))) goto L_18;
  return B;
  return V;
}

// fn <atom:0>  args=3 vars=78 closure=0 cpool=19 bc=4332B file=dil_text/src/list/DILListItem
// args: require, module, exports
// locals: e, t, r, i, o, n, d, s, l, a, u, m, b, h, v, c, w, y, k, p, g, A, S, M, R, C, N, f, x, I, L, D, P, W, G, T, F, H, O, U, q, _, j, V, B, Y, z, Q, K, X, J, E, Z, $, ee, te, re, ie, oe, ne, de, se, DILListItemComponent, <class_fields_init>, DILListItemComponent#1, le, ae, ue, me, be, he, ve, ce, we, ye
function {
  le = function le;
  ae = function ae;
  ue = function ue;
  me = function me;
  be = function be;
  he = function he;
  ve = function ve;
  ce = function ce;
  we = function we;
  let ye;
  let DILListItemComponent#1;
  let se;
  let de;
  let ne;
  let oe;
  let ie;
  let re;
  let te;
  let ee;
  let $;
  let Z;
  let E;
  let J;
  let X;
  let K;
  let Q;
  let z;
  let Y;
  let B;
  let V;
  let j;
  let _;
  let q;
  let U;
  let O;
  let H;
  let F;
  let T;
  let G;
  let W;
  let P;
  let D;
  let L;
  let I;
  let x;
  let f;
  let N;
  let C;
  let R;
  let M;
  let S;
  let A;
  let g;
  let p;
  let k;
  let y;
  let w;
  let c;
  let v;
  let h;
  let b;
  let m;
  let u;
  let a;
  let l;
  let s;
  let d;
  let n;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILListItemComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "1TaegT7wSCBAd03n");
  r = e.makeNodePrototype("view", undefined, "CMpp8q7oFYvDgQV9");
  i = e.makeNodePrototype("view", undefined, "HTNC694Sjs_so1wK");
  o = e.makeNodePrototype("label", undefined, "suCQpzIoITZ3tMai");
  n = e.makeNodePrototype("view", undefined, "_GtuNeFuoYBwi8Tl");
  d = e.makeNodePrototype("view", undefined, "HWne59CpUvCXq9Tg");
  s = e.makeNodePrototype("view", undefined, "WYwbGBFQO-i8s6_y");
  l = e.makeNodePrototype("view", undefined, "0z54wEw-DhMMa9cX");
  a = e.makeNodePrototype("view", undefined, "xxo-KD1b2qu5PslN");
  u = e.makeNodePrototype("view", undefined, "XXy-Z8HaOYrDGlwv");
  m = e.makeNodePrototype("view", undefined, "W-eCF96xlg500KWU");
  b = e.makeNodePrototype("view", undefined, "DXuax7HWzcN0U8dn");
  h = e.makeNodePrototype("view", undefined, "BPMuP_5Vlb2H9YyT");
  v = e.makeNodePrototype("view", undefined, "tIWQg501ggs5hlEr");
  c = e.makeNodePrototype("view", undefined, "CrOJw3g4Qo2nJqR6");
  w = e.makeNodePrototype("view", undefined, "GtwCbymc8YYKCYIW");
  y = e.makeNodePrototype("view", undefined, "yAsAcNtI31q63FTA");
  k = e.makeNodePrototype("label", undefined, "9xHjLeMIUUCFpab2");
  p = e.makeNodePrototype("view", undefined, "nQefpFGPFHVhfTEw");
  g = e.makeNodePrototype("view", undefined, "a43puzcGONiosOXx");
  A = e.makeNodePrototype("view", undefined, "5s5xiAv0DhKHeuW2");
  S = e.makeNodePrototype("view", undefined, "L_W88YL63a6we3je");
  M = e.makeNodePrototype("image", ["tint", "color-text-prose"], "JhQYA_1Bp-whYyYJ");
  R = e.makeNodePrototype("image", ["tint", "color-text-prose"], "N-lD91UIvGarI_rn");
  C = e.makeNodePrototype("view", undefined, "5DdKI8ub65kK-25U");
  N = e.makeNodePrototype("view", undefined, "4zDofq3dCkKNU8QZ");
  f = e.makeNodePrototype("view", undefined, "QrrYyMMgdqrt7FnV");
  x = e.makeNodePrototype("view", undefined, "micOCG9vJCEq-7yz");
  I = e.makeNodePrototype("view", undefined, "z0clwQFAHQhN4gXb");
  L = e.makeNodePrototype("view", undefined, "WOrR6RB_hv_-sKq1");
  D = e.makeNodePrototype("label", undefined, "mYfq31HOjor_muQi");
  P = e.makeNodePrototype("view", undefined, "G5H5e8Jw5SO3HZlF");
  W = require("dil_icon_assets/src/IconAssets");
  G = require("dil_core/src/layout/DILSpacing");
  T = require("valdi_core/src/Component");
  F = require("valdi_core/src/ElementRef");
  H = require("valdi_core/src/Style");
  O = require("valdi_core/src/utils/AttributedTextBuilder");
  U = require("../rendering/DILTextColor");
  q = require("../rendering/DILTextFontResolver");
  _ = require("../rendering/DILTextFont");
  j = require("../rendering/DILTextTypography");
  V = G.resolveDILSpacingUnits(2);
  B = G.resolveDILSpacingUnits(4);
  Y = j.resolveDILTextLineHeight("md");
  z = G.resolveDILSpacingUnits(6);
  Q = "M";
  K = 6;
  X = G.resolveDILSpacingUnits(3);
  J = "md";
  E = 9;
  Z = 20;
  $ = G.resolveDILSpacingUnits(1);
  ee = 2;
  te = "alpha-10";
  re = 6;
  ie = "check-circle-filled";
  oe = W.getIconAsset(ie);
  ne = "empty-circle";
  de = W.getIconAsset(ne);
  se = {md: 24, lg: 64, xl: 72};
  let DILListItemComponent;
  let <class_fields_init>;
  class DILListItemComponent extends T.Component { ... }
  <proto:DILListItemComponent>.onRender = function <atom:0>;
  <proto:DILListItemComponent>.renderDiscItem = function <atom:0>;
  <proto:DILListItemComponent>.renderConnectedDecimalItem = function <atom:0>;
  <proto:DILListItemComponent>.renderCheckboxItem = function <atom:0>;
  <proto:DILListItemComponent>.renderCustomMarkerItem = function <atom:0>;
  <proto:DILListItemComponent>.renderMarkerLaneSpacer = function <atom:0>;
  <proto:DILListItemComponent>.renderConnectorLine = function <atom:0>;
  <proto:DILListItemComponent>.shouldRenderConnector = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILListItemComponent>;
  DILListItemComponent = function <atom:0>;
  // close_loc <class_fields_init>
  DILListItemComponent#1 = function <atom:0>;
  exports.DILListItemComponent = DILListItemComponent#1;
  ye = {listItem: new H.Style({alignItems: "flex-start", flexDirection: "row", width: "100%"}), checkboxItem: new H.Style({alignItems: "flex-start", flexDirection: "row", paddingBottom: $, width: "100%"}), markerLane: new H.Style({alignItems: "center", flexShrink: 0, justifyContent: "center", minHeight: Y, position: "relative"}), markerLaneWithConnector: new H.Style({alignItems: "center", alignSelf: "stretch", flexShrink: 0, justifyContent: "center", minHeight: Y, position: "relative"}), textMarkerLane: new H.Style({alignItems: "flex-end", flexShrink: 0, justifyContent: "center", minHeight: Y, minWidth: z}), marker: new H.Style({numberOfLines: 1, textAlign: "right"}), discMarkerSlot: new H.Style({alignItems: "center", justifyContent: "center", width: X}), discMarker: new H.Style({borderRadius: "100%", height: 6, width: 6}), solidDiscMarker: new H.Style({borderRadius: "100%", height: 9, width: 9}), hollowBulletMarker: new H.Style({borderRadius: "100%", borderWidth: 1.5, height: 8, width: 8}), hollowBulletConnector: new H.Style({backgroundColor: te, borderRadius: "100%", left: "50%", position: "absolute", top: Y, width: 2}), customMarkerSlot: new H.Style({alignItems: "center", justifyContent: "center"}), markerLaneSpacer: new H.Style({numberOfLines: 1, opacity: 0}), markerOverlay: new H.Style({alignItems: "flex-end", bottom: 0, justifyContent: "center", left: 0, position: "absolute", right: 0, top: 0}), markerSlotOverlay: new H.Style({alignItems: "center", justifyContent: "center", left: 0, position: "absolute", right: 0, top: 0}), connectedDecimalMarkerLabel: new H.Style({numberOfLines: 1, textAlign: "center", width: z}), connectorLine: new H.Style({backgroundColor: te, borderRadius: "100%", left: "50%", marginLeft: -1, position: "absolute", width: 2}), checkboxCheckedMarker: new H.Style({flexShrink: 0, height: Z, marginTop: 2, objectFit: "contain", width: Z}), checkboxUncheckedMarker: new H.Style({flexShrink: 0, height: Z, marginTop: 2, objectFit: "contain", width: Z}), itemContent: new H.Style({flexDirection: "column", minWidth: 0, flexGrow: 1, flexShrink: 1}), markerlessItem: new H.Style({minWidth: 0, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/list/DILListItem
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
