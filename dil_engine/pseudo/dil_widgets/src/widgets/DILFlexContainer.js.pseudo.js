// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=444B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
// locals: e, i, o, r
// closure: this, F
function {
  let r;
  let o;
  let i;
  let e;
  e = this.viewModel.containerGutter;
  if (((undefined === e))) goto L_cf;
  if ((!Number.isFinite(t.width))) goto L_cf;
  if (!((t.width <= 0))) goto L_d2;
  return;
  i = F(e.left);
  o = F(e.right);
  if (((undefined === i))) goto L_12e;
  if (!((undefined === o))) goto L_131;
  return;
  r = ((t.width + i) + o);
  if (!((this.getFlushScrollableViewportWidth() !== r))) goto L_1bb;
  this.setState({flushScrollableViewportWidth: r});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=279B file=dil_widgets/src/widgets/DILFlexContainer
// locals: t, e
// closure: this, B
function {
  let e;
  let t;
  t = this.scrollContentRef.single();
  if (!((undefined === t))) goto L_57;
  return;
  e = B(t);
  if (!((e !== this.appliedHorizontalStaticContentWidth))) goto L_e8;
  this.appliedHorizontalStaticContentWidth = e;
  this.scrollRef.setAttribute("staticContentWidth", e);
  this.onHorizontalScrollContentLayoutComplete(t, e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=95B file=dil_widgets/src/widgets/DILFlexContainer
// locals: t
// closure: this
function {
  let t;
  t = this.getContentElement();
  if (!((undefined !== t))) goto L_5e;
  this.onContentLayoutComplete(t);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=3 bc=247B file=dil_widgets/src/widgets/DILFlexContainer
// locals: this, this.active_func, new.target, arguments
// closure: F, B, <class_fields_init>, b
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
  this.scrollRef = new b.ElementRef();
  this.scrollContentRef = new b.ElementRef();
  this.tableCellBlockRef = new b.ElementRef();
  this.handleFlushScrollableViewportLayout = function <atom:0>;
  this.handleHorizontalScrollContentLayoutComplete = function <atom:0>;
  this.handleObservedContentLayoutComplete = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=152B file=dil_widgets/src/widgets/DILFlexContainer
// locals: t, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  t = get_super_value(this, super, "baseViewAttributes");
  if (!((this.viewModel.ariaLabel == null))) goto L_8b;
  this.viewModel.ariaLabel;
  if (!((this.viewModel["aria-label"] == null))) goto L_8b;
  this.viewModel["aria-label"];
  t.accessibilityLabel = undefined;
  return t;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/DILFlexContainer
// locals: this
function {
  this = this;
  return (true === this.viewModel.scrollable);
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=0 bc=671B file=dil_widgets/src/widgets/DILFlexContainer
// locals: i, this
// closure: s, t, e, k, h
function {
  this = this;
  let i;
  i = s.resolveDILRootContainerRenderer();
  if (!((undefined !== this.viewModel.parentTableCellAlignment))) goto L_274;
  if (!((undefined === this.getAlignSelf()))) goto L_274;
  t.beginRender(e, undefined);
  t.setAttributeRef(this.tableCellBlockRef);
  t.setAttributeStyle("style", k.tableCellBlock);
  t.setAttributeString("justifyContent", h.resolveDILJustification(this.viewModel.parentTableCellAlignment));
  this.renderContainer(this.fillsTableCell(), i);
  goto L_29e;
  // [栈深重同步 1 -> 0]
  this.renderContainer(false, i);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/widgets/DILFlexContainer
// closure: t, this
function {
  t.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=85B file=dil_widgets/src/widgets/DILFlexContainer
// closure: t, this, d
function {
  if (!((undefined === d.renderChildren))) goto L_2d;
  goto L_54;
  // [栈深重同步 1 -> 0]
  d.renderChildren();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=17 cpool=1 bc=1695B file=dil_widgets/src/widgets/DILFlexContainer
// closure: t, this, d, f, l, h, i, y, k, O, e, a, N, o, s, r, _
function {
  this.containerAttributes = f.completeDILResolvedAttributes(l, this.containerAttributes);
  this.scrollContentAttributes = f.completeDILResolvedAttributes(h, this.scrollContentAttributes);
  t.beginRender(i, undefined);
  if (!(y)) goto L_121;
  goto L_122;
  // [栈深重同步 3 -> 2]
  t.setAttributeRef(undefined);
  t.setAttributeStyle("style", k.scrollContainer);
  t.setAttributes(l);
  t.setAttribute("accessibilityStateDisabled", O);
  t.setAttributeString("alignSelf", this.getAlignSelf());
  if (!(e)) goto L_255;
  goto L_279;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("flexGrow", l.flexGrow);
  if (!(e)) goto L_2ae;
  goto L_2d2;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("flexShrink", l.flexShrink);
  if (!(e)) goto L_30b;
  goto L_32f;
  // [栈深重同步 4 -> 3]
  t.setAttribute("flexBasis", l.flexBasis);
  if ((("horizontal" === a))) goto L_36a;
  t.setAttribute("canAlwaysScrollHorizontal", undefined);
  t.setAttribute("horizontal", ("horizontal" === a));
  t.setAttributeNumber("opacity", this.getOpacity());
  t.setAttribute("scrollEnabled", true);
  t.setAttribute("width", N);
  t.beginRender(o, undefined);
  if (!(y)) goto L_4ce;
  goto L_4cf;
  // [栈深重同步 3 -> 2]
  t.setAttributeRef(undefined);
  t.setAttributes(h);
  if (!(y)) goto L_550;
  goto L_551;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onLayoutComplete", undefined);
  t.beginComponent(s.DILRootContainerProvider, r, undefined, undefined);
  t.setViewModelProperty("value", undefined);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  this.renderBorderOverlays(_);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=135B file=dil_widgets/src/widgets/DILFlexContainer
// args: e
// closure: d, t, this, _
function {
  if (!((e == null))) goto L_2b;
  e;
  e = d.renderChildren;
  d.renderChildren;
  if (!((undefined === e))) goto L_5b;
  goto L_5d;
  // [栈深重同步 1 -> 0]
  e();
  this.renderBorderOverlays(_);
  return;
}

// fn <atom:0>  args=2 vars=31 closure=24 cpool=2 bc=4514B file=dil_widgets/src/widgets/DILFlexContainer
// args: e, l
// locals: d, u, p, b, v, w, y, L, R, F, B, G, _, l#1, a, h, c, w#1, A, y#1, O, P, N, W, i, o, r, n, this
// closure: t, f, i, k, o, s, r, c, h, A, g, I, m, T, E, S, x, C, D, n, W, P, N, a
function {
  this = this;
  let _;
  let G;
  let B;
  let F;
  let R;
  let L;
  let y;
  let w;
  let v;
  let b;
  let p;
  let u;
  let d;
  d = this.viewModel;
  if (!(d.flush)) goto L_77;
  goto L_c2;
  // [栈深重同步 1 -> 0]
  u = c.resolveOptionalDILPadding(this.getPadding());
  p = this.getFlexDirection();
  b = h.resolveDILAlignment(this.getAlign());
  v = h.resolveDILWrap(d.wrap);
  w = this.getGap();
  if (((undefined !== w))) goto L_1b9;
  if (!(A(d))) goto L_1c0;
  goto L_1e6;
  // [栈深重同步 1 -> 0]
  y = this.getAutoGap();
  L = c.resolveOptionalDILSpacing(y);
  if (!((c.resolveOptionalDILSpacing(d.columnGap) == null))) goto L_271;
  c.resolveOptionalDILSpacing(d.columnGap);
  if (!(("row" === p))) goto L_270;
  goto L_271;
  // [栈深重同步 1 -> 0]
  R = undefined;
  if (!((c.resolveOptionalDILSpacing(d.rowGap) == null))) goto L_2d2;
  c.resolveOptionalDILSpacing(d.rowGap);
  if (!(("column" === p))) goto L_2d1;
  goto L_2d2;
  // [栈深重同步 1 -> 0]
  F = undefined;
  B = h.resolveDILJustification(d.justify);
  if (!((d.parentFlexDirection == null))) goto L_34b;
  d.parentFlexDirection;
  G = p;
  _ = h.resolveDILBorderSides(d.border);
  if (!(d.scrollable)) goto L_b27;
  let W;
  let N;
  let P;
  let O;
  let y#1;
  let A;
  let w#1;
  let c;
  let h;
  let a;
  let l#1;
  null;
  this.baseViewAttributes;
  l#1 = {flexBasis: undefined, flexGrow: undefined, flexShrink: undefined};
  g.DIL_BOX_ATTRIBUTES.apply(d, l#1);
  I(l#1, d);
  m.DIL_BACKGROUND_ATTRIBUTES.apply(d, l#1);
  this.applyAdditionalContainerAttributes(l#1);
  this.applyAdditionalScrollContainerAttributes(l#1);
  T(l#1, G);
  E(l#1, G);
  a = S(p, d.style);
  h = {paddingLeft: undefined, paddingRight: undefined};
  c = (true === d.bleed);
  if (!(c)) goto L_5d1;
  if (!((undefined !== d.containerGutter))) goto L_5d1;
  w#1 = ("horizontal" === a);
  if (!(("horizontal" === a))) goto L_60a;
  A = ("scrollable-margin" === d.scrollableContentGutterMode);
  if (!(c)) goto L_759;
  if (!((undefined !== d.containerGutter))) goto L_759;
  x.applyDILFlushContainerGutterAttributes(l#1, d.containerGutter);
  if (!(A)) goto L_70d;
  x.applyDILFlushScrollableContentGutterMarginAttributes(h, d.containerGutter);
  goto L_759;
  // [栈深重同步 1 -> 0]
  x.applyDILFlushScrollableContentGutterAttributes(h, d.containerGutter);
  if (!(this.hasExplicitShrinkProtectedSize())) goto L_792;
  l#1.flexShrink = 0;
  0;
  h.flexDirection = p;
  if (!((undefined !== b))) goto L_7bb;
  h.alignItems = b;
  b;
  if (!((undefined !== v))) goto L_7d5;
  h.flexWrap = v;
  v;
  if (!((undefined !== L))) goto L_7ef;
  h.gap = L;
  L;
  if (!((undefined !== R))) goto L_809;
  h.columnGap = R;
  R;
  if (!((undefined !== F))) goto L_823;
  h.rowGap = F;
  F;
  if (!((undefined !== B))) goto L_83d;
  h.justifyContent = B;
  B;
  if (!(("horizontal" === a))) goto L_85d;
  h.minWidth = "100%";
  "100%";
  if (!((undefined !== u))) goto L_892;
  C.applyResolvedDILPaddingAttributes(h, u);
  this.applyAdditionalScrollContentAttributes(h);
  y#1 = ("horizontal" === a);
  O = this.getAccessibilityStateDisabled();
  if (!(w#1)) goto L_953;
  if (!(A)) goto L_953;
  if (!((l#1.width == null))) goto L_952;
  l#1.width;
  P = ("100%" === this.getDefaultWidth());
  if (!(P)) goto L_9d2;
  goto L_9d3;
  // [栈深重同步 5 -> 4]
  N = D(l#1.width, this.getDefaultWidth(), w#1, undefined);
  W = function <atom:0>;
  if (!(P)) goto L_b0f;
  t.beginRender(n, undefined);
  t.setAttributeFunction("onLayout", this.handleFlushScrollableViewportLayout);
  if (!((l#1.width == null))) goto L_add;
  l#1.width;
  t.setAttribute("width", this.getDefaultWidth());
  W();
  goto L_b13;
  // [栈深重同步 1 -> 0]
  W();
  // close_loc N
  // close_loc O
  // close_loc y#1
  // close_loc h
  // close_loc a
  // close_loc l#1
  return;
  let n;
  let r;
  let o;
  let i;
  null;
  this.baseViewAttributes;
  i = {flexBasis: undefined, flexGrow: undefined, flexShrink: undefined};
  g.DIL_BOX_ATTRIBUTES.apply(d, i);
  I(i, d);
  m.DIL_BACKGROUND_ATTRIBUTES.apply(d, i);
  this.applyAdditionalContainerAttributes(i);
  T(i, G);
  E(i, G);
  if (!(this.shouldUseIntrinsicHeightForPercentHeight(i))) goto L_c90;
  W(i, d);
  if (!(this.shouldUseIntrinsicFlexBasisForFlexibleContent())) goto L_cc5;
  P(i, d);
  if (!(this.shouldAvoidFlexGrowForIntrinsicFlexibleContent(i))) goto L_cfd;
  N(i, d);
  if (!(d.flush)) goto L_d9c;
  if (!((undefined !== d.containerGutter))) goto L_d9c;
  x.applyDILFlushContainerGutterAttributes(i, d.containerGutter);
  if (!(this.hasExplicitShrinkProtectedSize())) goto L_dd5;
  i.flexShrink = 0;
  0;
  if (!((undefined !== u))) goto L_e0a;
  C.applyResolvedDILPaddingAttributes(i, u);
  o = this.getAccessibilityStateDisabled();
  if (!((b == null))) goto L_e5f;
  b;
  r = i.alignItems;
  n = this.shouldObserveContentLayout();
  this.containerAttributes = f.completeDILResolvedAttributes(i, this.containerAttributes);
  if (!(n)) goto L_f32;
  goto L_f33;
  // [栈深重同步 4 -> 3]
  null;
  i;
  if (!(e)) goto L_faa;
  goto L_fce;
  // [栈深重同步 4 -> 3]
  if (!(e)) goto L_fd9;
  goto L_ffd;
  // [栈深重同步 4 -> 3]
  if (!(e)) goto L_100c;
  goto L_1030;
  // [栈深重同步 4 -> 3]
  if (!(n)) goto L_1087;
  goto L_1088;
  // [栈深重同步 4 -> 3]
  if (!((i.width == null))) goto L_110f;
  i.width;
  if (!(("number" == typeof i.borderRadius))) goto L_116c;
  goto L_116d;
  // [栈深重同步 3 -> 2]
  s.renderDILRootContainer({attributes: {ref: undefined, style: k.flexContainer, accessibilityStateDisabled: o, alignItems: r, alignSelf: this.getAlignSelf(), flexGrow: i.flexGrow, flexShrink: i.flexShrink, flexBasis: i.flexBasis, flexDirection: p, flexWrap: v, gap: L, columnGap: R, justifyContent: B, onLayoutComplete: undefined, opacity: this.getOpacity(), rowGap: F, width: this.getDefaultWidth()}, previewCornerRadius: undefined, renderContent: a.createReusableCallback(function <atom:0>)}, l);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=115B file=dil_widgets/src/widgets/DILFlexContainer
// locals: this
function {
  this = this;
  if (!((this.tableCellBlockRef.single() == null))) goto L_4f;
  this.tableCellBlockRef.single();
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.children[0];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_widgets/src/widgets/DILFlexContainer
// locals: this
function {
  this = this;
  return this.viewModel.gap;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_widgets/src/widgets/DILFlexContainer
// locals: this
function {
  this = this;
  return this.viewModel.padding;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/DILFlexContainer
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_widgets/src/widgets/DILFlexContainer
// locals: this
function {
  this = this;
  return this.viewModel.align;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/DILFlexContainer
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/DILFlexContainer
function {
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=164B file=dil_widgets/src/widgets/DILFlexContainer
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.viewModel.width == null))) goto L_90;
  this.viewModel.width;
  t = this.viewModel.size;
  if (((undefined === t))) goto L_a3;
  return ("auto" === t);
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/DILFlexContainer
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=dil_widgets/src/widgets/DILFlexContainer
function {
  return "100%";
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=dil_widgets/src/widgets/DILFlexContainer
// locals: this
function {
  this = this;
  return this.scrollRef.single();   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/DILFlexContainer
function {
  return false;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=dil_widgets/src/widgets/DILFlexContainer
// locals: this
function {
  this = this;
  if (!((this.contentRef == null))) goto L_2b;
  this.contentRef;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.single();
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=128B file=dil_widgets/src/widgets/DILFlexContainer
// locals: this
// closure: b
function {
  this = this;
  if (!((this.contentRef == null))) goto L_5c;
  this.contentRef;
  this.contentRef = new b.ElementRef();
  new b.ElementRef();
  return this.contentRef;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=dil_widgets/src/widgets/DILFlexContainer
// locals: this
function {
  this = this;
  if (!((this.state == null))) goto L_2b;
  this.state;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.flushScrollableViewportWidth;
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=0 bc=390B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
// locals: e, i, o, i#1, this
// closure: G, DILFlexContainer
function {
  this = this;
  let i;
  let e;
  e = G(t.marginRight);
  if (!((undefined === e))) goto L_36;
  return;
  i = this.renderer.getComponentVirtualNode(this).parent;
  if (!((undefined !== i))) goto L_185;
  let o;
  o = i.element;
  if (!((undefined !== o))) goto L_159;
  if (!((o.emittingComponent instanceof DILFlexContainer))) goto L_159;
  let i#1;
  i#1 = G(o.getAttribute("marginRight"));
  if (!((undefined !== i#1))) goto L_159;
  if (!((i#1 < 0))) goto L_159;
  t.marginRight = (e - i#1);
  return;
  i = i.parent;
  i.parent;
  goto L_a1;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=557B file=dil_widgets/src/widgets/DILFlexContainer
// locals: t, e, i, this
// closure: _
function {
  this = this;
  let i;
  let e;
  let t;
  t = this.getFlexDirection();
  e = this.viewModel;
  if (!((e.parentFlexDirection == null))) goto L_80;
  e.parentFlexDirection;
  i = t;
  if (!(!_(e.size))) goto L_d3;
  if ((!!_(e.minSize))) goto L_22c;
  if (!((null == e.flex))) goto L_22c;
  if ((("row" !== i))) goto L_167;
  if (((true !== e.parentHasFlexibleMainAxisSize))) goto L_167;
  if (!(!_(e.width))) goto L_22c;
  if ((("row" !== t))) goto L_1a2;
  if ((!!_(e.width))) goto L_22c;
  if (!(("row" === i))) goto L_22c;
  if (!(_(e.width))) goto L_206;
  return (null == e.minWidth);
  return _(e.minWidth);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=275B file=dil_widgets/src/widgets/DILFlexContainer
// locals: this
function {
  this = this;
  if (!((undefined !== this.viewModel.flex))) goto L_112;
  if ((("row" === this.getFlexDirection()))) goto L_112;
  if (!(("column" === this.viewModel.parentFlexDirection))) goto L_112;
  return (0 !== this.viewModel.minHeight);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
function {
  return false;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
function {
  return false;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=320B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
// locals: this
function {
  this = this;
  if (!((undefined !== t))) goto L_13f;
  this.renderBorderOverlay("top", t.top);
  this.renderBorderOverlay("right", t.right);
  this.renderBorderOverlay("bottom", t.bottom);
  this.renderBorderOverlay("left", t.left);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=5 cpool=0 bc=603B file=dil_widgets/src/widgets/DILFlexContainer
// args: e, i
// locals: o, r
// closure: u, z, t, l, k
function {
  let r;
  let o;
  if (((undefined === i))) goto L_b4;
  if (((undefined === i.width))) goto L_b4;
  if (((0 === i.width))) goto L_b4;
  if ((("none" === i.style))) goto L_b4;
  if (!(("hidden" === i.style))) goto L_b7;
  return;
  o = u.resolveDILBorderColor(i.color, "default");
  if (!((undefined === o))) goto L_10c;
  return;
  r = z(e, i.width);
  t.beginRender(l, "dil-border-".concat(e));
  t.setAttributeStyle("style", k.borderOverlay);
  t.setAttributes(r);
  t.setAttributeString("backgroundColor", o);
  t.endRender();
  return;
}

// fn A  args=1 vars=1 closure=0 cpool=0 bc=77B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
function {
  if (((undefined !== t.columnGap))) goto L_4c;
  return (undefined !== t.rowGap);
}

// fn S  args=2 vars=5 closure=2 cpool=0 bc=181B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e
// locals: i, o, r
// closure: p, y
function {
  let r;
  let o;
  let i;
  i = p.getDILStyleOverflowAxes(e);
  o = y(i.x);
  r = y(i.y);
  if (!(o)) goto L_8f;
  if (!(!r)) goto L_8f;
  return "horizontal";
  if (!(r)) goto L_a0;
  if (!(!o)) goto L_a0;
  return "vertical";
  if (!(("row" === t))) goto L_af;
  return "horizontal";
  return "vertical";
}

// fn y  args=1 vars=1 closure=0 cpool=0 bc=19B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
function {
  if ((("auto" === t))) goto L_12;
  return ("scroll" === t);
}

// fn I  args=2 vars=3 closure=1 cpool=0 bc=208B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e
// locals: i
// closure: L
function {
  let i;
  i = e.horizontalScrollItemViewportWidth;
  if (((undefined === i))) goto L_cf;
  if ((!Number.isFinite(i))) goto L_cf;
  if (((i <= 0))) goto L_cf;
  t.width = L(t.width, i);
  t.minWidth = L(t.minWidth, i);
  L(t.minWidth, i);
  return;
}

// fn L  args=2 vars=5 closure=2 cpool=0 bc=165B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e
// locals: i, o, r
// closure: R, w
function {
  let r;
  let o;
  let i;
  i = R(t);
  if (!((undefined === i))) goto L_16;
  return t;
  o = ((e * i) / 100);
  r = Math.min(w, e);
  return Math.round(Math.max(o, r));   // tail call
}

// fn R  args=1 vars=2 closure=0 cpool=0 bc=169B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
// locals: e
function {
  let e;
  if ((("string" != typeof t))) goto L_3a;
  if (!(!t.endsWith("%"))) goto L_3d;
  return;
  e = Number(t.slice(0, -1));
  if ((!Number.isFinite(e))) goto L_a1;
  if (!((e <= 0))) goto L_a5;
  return undefined;
  return e;
}

// fn D  args=4 vars=5 closure=0 cpool=0 bc=52B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e, i, o
// locals: r
function {
  let r;
  if (!((t == null))) goto L_a;
  t;
  r = e;
  if (!(i)) goto L_20;
  if (!(("100%" === r))) goto L_20;
  if (!((undefined !== o))) goto L_20;
  return o;
  if (!(i)) goto L_30;
  if (!(("100%" === r))) goto L_30;
  return undefined;
  return r;
}

// fn F  args=1 vars=3 closure=0 cpool=0 bc=322B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
// locals: e, i
function {
  let i;
  let e;
  if (!(("number" == typeof t))) goto L_40;
  if (!(Number.isFinite(t))) goto L_3e;
  return t;
  return undefined;
  if (!(t.trim().endsWith("px"))) goto L_de;
  goto L_103;
  // [栈深重同步 1 -> 0]
  e = t.trim();
  i = Number(e);
  if (!(Number.isFinite(i))) goto L_140;
  return i;
  return undefined;
}

// fn B  args=1 vars=7 closure=1 cpool=0 bc=466B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
// locals: e, i, n, t#1, o, r
// closure: G
function {
  let r;
  let o;
  let i;
  let e;
  e = t.frame.width;
  i = t.children;
  let n;
  n = 0;
  if (!((n < i.length))) goto L_136;
  let t#1;
  t#1 = i[n].frame;
  e = Math.max(e, (t#1.x + t#1.width));
  Math.max(e, (t#1.x + t#1.width));
  n = <n_new>;
  (n++);
  goto L_78;
  o = G(t.getAttribute("marginLeft"));
  r = G(t.getAttribute("marginRight"));
  if (!((o == null))) goto L_1c4;
  o;
  if (!((r == null))) goto L_1ce;
  r;
  return Math.ceil(((e + 0) + 0));   // tail call
}

// fn G  args=1 vars=3 closure=0 cpool=0 bc=342B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
// locals: e, i
function {
  let i;
  let e;
  if (!(("number" == typeof t))) goto L_40;
  if (!(Number.isFinite(t))) goto L_3e;
  return t;
  return undefined;
  if (!(("string" != typeof t))) goto L_4b;
  return;
  if (!(t.trim().endsWith("px"))) goto L_e9;
  goto L_10e;
  // [栈深重同步 1 -> 0]
  e = t.trim();
  if (!((0 === e.length))) goto L_118;
  return;
  i = Number(e);
  if (!(Number.isFinite(i))) goto L_154;
  return i;
  return undefined;
}

// fn _  args=1 vars=1 closure=0 cpool=0 bc=26B file=dil_widgets/src/widgets/DILFlexContainer
// args: t
function {
  if (!((null != t))) goto L_19;
  if (!(("number" == typeof t))) goto L_15;
  return (0 !== t);
  return (t.length > 0);
}

// fn E  args=2 vars=3 closure=1 cpool=0 bc=32B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e
// locals: i
// closure: O
function {
  let i;
  i = O(t, e);
  if (!((undefined !== i))) goto L_1f;
  t.flexBasis = i;
  i;
  return;
}

// fn O  args=2 vars=2 closure=0 cpool=0 bc=161B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e
function {
  if (!((undefined === t.flexBasis))) goto L_a0;
  if (!(("row" === e))) goto L_9e;
  if (!((undefined !== t.minWidth))) goto L_9e;
  if (!((undefined === t.width))) goto L_9e;
  return t.minWidth;
  return undefined;
  return;
}

// fn T  args=2 vars=2 closure=0 cpool=0 bc=308B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e
function {
  if (((0 === t.flexBasis))) goto L_50;
  if (!(("0%" === t.flexBasis))) goto L_133;
  if (!((0 === t.flexGrow))) goto L_133;
  if (!((0 === t.flexShrink))) goto L_133;
  if ((("row" !== e))) goto L_dc;
  if (!((undefined === t.width))) goto L_123;
  if (!(("column" === e))) goto L_133;
  if (!((undefined !== t.height))) goto L_133;
  t.flexBasis = "auto";
  goto L_133;
  // [栈深重同步 1 -> 0]
  t.flexBasis = "auto";
  "auto";
  return;
}

// fn P  args=2 vars=2 closure=0 cpool=0 bc=184B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e
function {
  if (((undefined === t.flexGrow))) goto L_b7;
  if (((undefined !== e.minSize))) goto L_b7;
  if (!((0 !== t.flexBasis))) goto L_a3;
  if ((("0%" !== t.flexBasis))) goto L_b7;
  t.flexBasis = "auto";
  "auto";
  return;
}

// fn N  args=2 vars=2 closure=0 cpool=0 bc=137B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e
function {
  if (!((undefined !== t.flexGrow))) goto L_88;
  if (!((undefined === e.minSize))) goto L_88;
  if (!(("auto" === t.flexBasis))) goto L_88;
  t.flexGrow = 0;
  0;
  return;
}

// fn W  args=2 vars=4 closure=0 cpool=0 bc=272B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e
// locals: i, o
function {
  let o;
  let i;
  i = (undefined !== t.aspectRatio);
  if (((undefined !== e.minHeight))) goto L_c7;
  if (((undefined !== e.maxHeight))) goto L_c7;
  if (((undefined !== t.minHeight))) goto L_c7;
  o = (undefined !== t.maxHeight);
  if ((("100%" !== t.height))) goto L_10f;
  if (!(!i)) goto L_ff;
  if ((o)) goto L_10f;
  t.height = undefined;
  undefined;
  return;
}

// fn z  args=2 vars=3 closure=0 cpool=0 bc=202B file=dil_widgets/src/widgets/DILFlexContainer
// args: t, e
// locals: i
function {
  let i;
  i = {};
  if ((("top" === t))) goto L_17;
  if (!(("bottom" === t))) goto L_43;
  i.height = e;
  i.left = 0;
  i.right = 0;
  goto L_6b;
  // [栈深重同步 1 -> 0]
  i.bottom = 0;
  i.top = 0;
  i.width = e;
  e;
  if (!(("top" === t))) goto L_85;
  i.top = 0;
  goto L_c5;
  // [栈深重同步 1 -> 0]
  if (!(("right" === t))) goto L_9e;
  i.right = 0;
  goto L_c5;
  // [栈深重同步 1 -> 0]
  if (!(("bottom" === t))) goto L_b7;
  i.bottom = 0;
  goto L_c5;
  // [栈深重同步 1 -> 0]
  i.left = 0;
  0;
  return i;
}

// fn <atom:0>  args=3 vars=47 closure=0 cpool=50 bc=1877B file=dil_widgets/src/widgets/DILFlexContainer
// args: require, module, exports
// locals: t, e, i, o, r, n, l, s, a, d, u, h, c, p, b, v, f, g, m, C, x, w, DILFlexContainer, <class_fields_init>, DILFlexContainer#1, A, S, y, I, L, R, D, F, B, G, _, E, O, T, P, N, W, z, k
function {
  A = function A;
  S = function S;
  y = function y;
  I = function I;
  L = function L;
  R = function R;
  D = function D;
  F = function F;
  B = function B;
  G = function G;
  _ = function _;
  E = function E;
  O = function O;
  T = function T;
  P = function P;
  N = function N;
  W = function W;
  z = function z;
  let k;
  let DILFlexContainer#1;
  let w;
  let x;
  let C;
  let m;
  let g;
  let f;
  let v;
  let b;
  let p;
  let c;
  let h;
  let u;
  let d;
  let a;
  let s;
  let l;
  let n;
  let r;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_FLEX_CONTAINER_PROPERTIES = undefined;
  exports.DIL_V2_STACK_PROPERTIES = undefined;
  exports.DILFlexContainer = undefined;
  exports.resolveDILFlexContainerScrollAxis = undefined;
  exports.resolveNumericContainerGutterValue = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("layout", undefined, "jLZdwWG0v8w5c7n3");
  i = t.makeNodePrototype("scroll", undefined, "XIdW3iBtArzLDHFN");
  o = t.makeNodePrototype("layout", undefined, "HSn1XuSYWuWhA3Tk");
  r = t.makeComponentPrototype(undefined, "o_QFJZCCNtQs9GdN");
  n = t.makeNodePrototype("layout", undefined, "SNKY3piYzGmggeBI");
  l = t.makeNodePrototype("view", undefined, "vpgbkc_CqF5bNgFB");
  s = require("./RootContainer");
  a = require("valdi_core/src/utils/Callback");
  d = require("dil_core/src/DILComponent");
  u = require("dil_core/src/colors/DILColor");
  h = require("dil_core/src/layout/DILLayout");
  c = require("dil_core/src/layout/DILSpacing");
  p = require("dil_core/src/style/DILStyle");
  b = require("valdi_core/src/ElementRef");
  v = require("valdi_core/src/Style");
  f = require("./attributes/DILResolvedAttributes");
  g = require("./attributes/DILBoxAttributes");
  m = require("./attributes/DILBackgroundAttributes");
  C = require("./attributes/DILSpacingAttributes");
  x = require("./DILContainerGutter");
  // append([], 0, g.DIL_BOX_ATTRIBUTE_PROPERTIES)
  // append([], g.DIL_BOX_ATTRIBUTE_PROPERTIES, m.DIL_BACKGROUND_ATTRIBUTE_PROPERTIES)
  [][m.DIL_BACKGROUND_ATTRIBUTE_PROPERTIES] = "aria-label";
  [][("aria-label" ++)] = "ariaLabel";
  [][("ariaLabel" ++)] = "align";
  [][("align" ++)] = "columnGap";
  [][("columnGap" ++)] = "flush";
  [][("flush" ++)] = "gap";
  [][("gap" ++)] = "justify";
  [][("justify" ++)] = "padding";
  [][("padding" ++)] = "rowGap";
  [][("rowGap" ++)] = "scrollable";
  [][("scrollable" ++)] = "wrap";
  ("wrap" ++);
  exports.DIL_FLEX_CONTAINER_PROPERTIES = [];
  exports.DIL_V2_STACK_PROPERTIES = ["align", "ariaHidden", "ariaLabel", "aspectRatio", "background", "border", "clip", "direction", "disableAutoSpacing", "flex", "flush", "gap", "height", "justify", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "padding", "radius", "role", "scrollable", "size", "theme", "width", "wrap"];
  w = 200;
  let DILFlexContainer;
  let <class_fields_init>;
  class DILFlexContainer extends d.DILStatefulComponent { ... }
  <proto:DILFlexContainer>.baseViewAttributes = function <atom:0>;
  <proto:DILFlexContainer>.viewportUsesContentCoordinates = function <atom:0>;
  <proto:DILFlexContainer>.onRender = function <atom:0>;
  <proto:DILFlexContainer>.renderContainer = function <atom:0>;
  <proto:DILFlexContainer>.getTableCellContentElement = function <atom:0>;
  <proto:DILFlexContainer>.getGap = function <atom:0>;
  <proto:DILFlexContainer>.getPadding = function <atom:0>;
  <proto:DILFlexContainer>.getAutoGap = function <atom:0>;
  <proto:DILFlexContainer>.getAlign = function <atom:0>;
  <proto:DILFlexContainer>.getAccessibilityStateDisabled = function <atom:0>;
  <proto:DILFlexContainer>.getAlignSelf = function <atom:0>;
  <proto:DILFlexContainer>.fillsTableCell = function <atom:0>;
  <proto:DILFlexContainer>.getOpacity = function <atom:0>;
  <proto:DILFlexContainer>.getDefaultWidth = function <atom:0>;
  <proto:DILFlexContainer>.applyAdditionalContainerAttributes = function <atom:0>;
  <proto:DILFlexContainer>.applyAdditionalScrollContainerAttributes = function <atom:0>;
  <proto:DILFlexContainer>.applyAdditionalScrollContentAttributes = function <atom:0>;
  <proto:DILFlexContainer>.getScrollElement = function <atom:0>;
  <proto:DILFlexContainer>.onHorizontalScrollContentLayoutComplete = function <atom:0>;
  <proto:DILFlexContainer>.shouldObserveContentLayout = function <atom:0>;
  <proto:DILFlexContainer>.onContentLayoutComplete = function <atom:0>;
  <proto:DILFlexContainer>.getContentElement = function <atom:0>;
  <proto:DILFlexContainer>.getContentRef = function <atom:0>;
  <proto:DILFlexContainer>.getFlushScrollableViewportWidth = function <atom:0>;
  <proto:DILFlexContainer>.applyAncestorTrailingViewportOverflow = function <atom:0>;
  <proto:DILFlexContainer>.hasExplicitShrinkProtectedSize = function <atom:0>;
  <proto:DILFlexContainer>.shouldUseIntrinsicFlexBasisForFlexibleContent = function <atom:0>;
  <proto:DILFlexContainer>.shouldUseIntrinsicHeightForPercentHeight = function <atom:0>;
  <proto:DILFlexContainer>.shouldAvoidFlexGrowForIntrinsicFlexibleContent = function <atom:0>;
  <proto:DILFlexContainer>.renderBorderOverlays = function <atom:0>;
  <proto:DILFlexContainer>.renderBorderOverlay = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILFlexContainer>;
  DILFlexContainer = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILFlexContainer
  DILFlexContainer#1 = function <atom:0>;
  exports.DILFlexContainer = DILFlexContainer#1;
  // append([], 0, d.DIL_COMPONENT_PROPERTIES)
  // append([], d.DIL_COMPONENT_PROPERTIES, exports.DIL_FLEX_CONTAINER_PROPERTIES)
  exports.DIL_FLEX_CONTAINER_PROPERTIES;
  DILFlexContainer#1.properties = [];
  DILFlexContainer#1.dilV2Properties = exports.DIL_V2_STACK_PROPERTIES;
  DILFlexContainer#1.usesDILParentFlexDirection = true;
  DILFlexContainer#1.usesDILParentFlexibility = true;
  DILFlexContainer#1.usesDILTableCellSizing = true;
  exports.resolveDILFlexContainerScrollAxis = S;
  exports.resolveNumericContainerGutterValue = F;
  k = {tableCellBlock: new v.Style({width: "100%", flexDirection: "row", alignItems: "flex-start"}), borderOverlay: new v.Style({position: "absolute", touchEnabled: false, zIndex: 1}), flexContainer: new v.Style({minWidth: 0, minHeight: 0, flexShrink: 1, overflow: "visible"}), scrollContainer: new v.Style({minWidth: 0, minHeight: 0, flexShrink: 1, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DILFlexContainer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
