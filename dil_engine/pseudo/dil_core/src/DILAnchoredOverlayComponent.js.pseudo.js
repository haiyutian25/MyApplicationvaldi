// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
function {
  e.Hidden = 0;
  e[0] = "Hidden";
  e.Measuring = 1;
  e[1] = "Measuring";
  e.Entering = 2;
  e[2] = "Entering";
  e.Visible = 3;
  e[3] = "Visible";
  e.Exiting = 4;
  e[4] = "Exiting";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=230B file=dil_core/src/DILAnchoredOverlayComponent
// closure: this
function {
  if (!((undefined === this.viewModel.presenter.getOverlayAtDepth((this.viewModel.depth + 1))))) goto L_e5;
  this.setState({hasNestedOverlay: false});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=109B file=dil_core/src/DILAnchoredOverlayComponent
// closure: this
function {
  this.updatePopupBinding(this.state.renderedOverlay);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=381B file=dil_core/src/DILAnchoredOverlayComponent
// locals: e
// closure: this
function {
  let e;
  e = this.viewModel.presenter.getOverlayAtDepth(this.viewModel.depth);
  if (!((undefined !== e))) goto L_17c;
  if (!((e.onDismiss == null))) goto L_eb;
  e.onDismiss;
  e;
  goto L_ee;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.viewModel.presenter.dismissOverlay(e.anchorRef);
  return;
}

// fn <atom:0>  args=1 vars=10 closure=6 cpool=0 bc=1205B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// locals: t, i, r, n, o, s, a, h, l
// closure: this, S, A, g, b, d
function {
  let l;
  let h;
  let a;
  let s;
  let o;
  let n;
  let r;
  let i;
  let t;
  t = this.state.renderedOverlay;
  i = this.overlaySurfaceRef.single();
  r = {width: e.width, height: e.height};
  if (((undefined === t))) goto L_108;
  if (!((undefined === i))) goto L_10b;
  return;
  n = t.anchorRef.single();
  if (!((undefined === n))) goto L_15c;
  return;
  o = i.parent;
  s = S(o);
  a = A(t, n, s, r);
  if (!((undefined === o))) goto L_1b1;
  goto L_1b9;
  // [栈深重同步 1 -> 0]
  h = g(s, o);
  b(i, {x: (a.left - h.x), y: (a.top - h.y)});
  l = this.pointerRef.single();
  if (!((undefined !== l))) goto L_489;
  l.setAttribute("width", (r.width + (2 * d.TOOLTIP_POINTER_HEIGHT)));
  l.setAttribute("height", (r.height + (2 * d.TOOLTIP_POINTER_HEIGHT)));
  l.setAttribute("path", d.makeDILTooltipPointer(a.side, a.anchorOffset, r.width, r.height));
  this.startEnterAnimation(i);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=8 cpool=4 bc=387B file=dil_core/src/DILAnchoredOverlayComponent
// locals: this, this.active_func, new.target, arguments
// closure: S, A, g, b, d, <class_fields_init>, l, u
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
  this.overlayRootRef = new l.ElementRef();
  this.overlaySurfaceRef = new l.ElementRef();
  this.overlayDismissRef = new l.ElementRef();
  this.pointerRef = new l.ElementRef();
  this.state = {active: false, hasNestedOverlay: false, phase: u.Hidden, renderedOverlay: undefined};
  this.handleNestedOverlayHidden = function <atom:0>;
  this.refreshPopupBinding = function <atom:0>;
  this.handleDismiss = function <atom:0>;
  this.handleAnchoredOverlayLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=958B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!((undefined !== e))) goto L_53;
  e.presenter.detachRenderer(this);
  if (!((e == null))) goto L_5d;
  e;
  goto L_7e;
  if (!((undefined.presenter !== this.viewModel.presenter))) goto L_200;
  if (!((this.popupBinding == null))) goto L_f3;
  this.popupBinding;
  goto L_117;
  undefined.dispose();
  this.popupBinding = this.viewModel.presenter.bindOverlay({root: this.overlayRootRef, dismissLayer: this.overlayDismissRef, surface: this.overlaySurfaceRef});
  this.viewModel.presenter.bindOverlay({root: this.overlayRootRef, dismissLayer: this.overlayDismissRef, surface: this.overlaySurfaceRef});
  this.viewModel.presenter.attachRenderer(this);
  t = this.viewModel.presenter.getOverlayAtDepth(this.viewModel.depth);
  if (!((undefined !== t))) goto L_3bd;
  this.cancelActiveAnimation();
  this.setOverlayState(this.initialOverlayPhase(t), t);
  this.showNestedOverlayIfNeeded();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=347B file=dil_core/src/DILAnchoredOverlayComponent
// locals: this
function {
  this = this;
  if (!((this.popupBinding == null))) goto L_2c;
  this.popupBinding;
  goto L_50;
  undefined.dispose();
  if (!((this.state.renderedOverlay == null))) goto L_9c;
  this.state.renderedOverlay;
  goto L_cb;
  if (!((undefined.onActiveChange == null))) goto L_c6;
  undefined.onActiveChange;
  undefined;
  goto L_cb;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, false);
  this.cancelActiveAnimation();
  this.viewModel.presenter.detachRenderer(this);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=499B file=dil_core/src/DILAnchoredOverlayComponent
// locals: e, this
function {
  this = this;
  let e;
  e = this.viewModel.presenter.getOverlayAtDepth(this.viewModel.depth);
  if (!((this.state.renderedOverlay == null))) goto L_fb;
  this.state.renderedOverlay;
  goto L_11c;
  if (!((e == null))) goto L_127;
  e;
  goto L_148;
  if (!((undefined.anchorRef === undefined.anchorRef))) goto L_175;
  this.updateActiveOverlay(e);
  if (!((undefined !== e))) goto L_1cd;
  this.showOverlay(e);
  this.showNestedOverlayIfNeeded();
  return;
  this.hideOverlay();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=532B file=dil_core/src/DILAnchoredOverlayComponent
// locals: this
// closure: u
function {
  this = this;
  if (!(!this.state.hasNestedOverlay)) goto L_213;
  if (!((undefined !== this.viewModel.presenter.getOverlayAtDepth((this.viewModel.depth + 1))))) goto L_213;
  if (!((this.state.phase === u.Entering))) goto L_1e3;
  this.cancelActiveAnimation();
  this.setState({hasNestedOverlay: true, phase: u.Visible});
  return undefined;
  this.setState({hasNestedOverlay: true});
  return undefined;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=578B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// locals: t, this
// closure: u
function {
  this = this;
  let t;
  t = this.state;
  if (!((t.renderedOverlay == null))) goto L_54;
  t.renderedOverlay;
  goto L_75;
  if (!((undefined.anchorRef === e.anchorRef))) goto L_1cf;
  if (!((t.phase !== u.Hidden))) goto L_1cf;
  if (!((t.phase !== u.Exiting))) goto L_1cf;
  if (!((t.phase === u.Visible))) goto L_241;
  goto L_241;
  // [栈深重同步 1 -> 0]
  this.cancelActiveAnimation();
  this.setOverlayState(this.initialOverlayPhase(e), e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=108B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// closure: u
function {
  if (!((undefined === e.renderNativePresentation))) goto L_49;
  return u.Measuring;
  return u.Visible;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=55B file=dil_core/src/DILAnchoredOverlayComponent
// closure: t, R, y
function {
  t.setAttribute("opacity", 0);
  R(t, y);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=98B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// closure: this, i
function {
  if ((e)) goto L_61;
  if (!((this.activeAnimation === i))) goto L_3b;
  this.activeAnimation = undefined;
  undefined;
  this.clearRenderedOverlay();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=2 bc=558B file=dil_core/src/DILAnchoredOverlayComponent
// locals: e, t, i, this
// closure: R, y, u, O
function {
  this = this;
  let i;
  let t;
  let e;
  e = this.state;
  if (!((undefined === e.renderedOverlay))) goto L_57;
  return;
  if (!((e.phase === u.Exiting))) goto L_a1;
  return;
  this.cancelActiveAnimation();
  this.setOverlayState(u.Exiting, e.renderedOverlay);
  t = this.overlaySurfaceRef.single();
  if (!((undefined === t))) goto L_1a8;
  this.clearRenderedOverlay();
  return;
  i = this.createAnimation(O, function <atom:0>);
  this.activeAnimation = i;
  i.start().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=443B file=dil_core/src/DILAnchoredOverlayComponent
// locals: this
// closure: u
function {
  this = this;
  if (!((this.state.phase === u.Exiting))) goto L_1ba;
  if (!((undefined === this.viewModel.presenter.getOverlayAtDepth(this.viewModel.depth)))) goto L_1ba;
  this.setOverlayState(u.Hidden, undefined);
  if (!((this.viewModel.onHidden == null))) goto L_1b7;
  this.viewModel.onHidden;
  this.viewModel;
  goto L_1ba;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=dil_core/src/DILAnchoredOverlayComponent
// closure: n
function {
  n.renderNativePresentation();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=9 cpool=1 bc=1531B file=dil_core/src/DILAnchoredOverlayComponent
// locals: n, o, t, r, this
// closure: e, DILAnchoredOverlayContextProvider, t, x, p, i, C, DILAnchoredOverlayComponent, r
function {
  this = this;
  let o;
  let n;
  n = this.state.renderedOverlay;
  if (!((undefined === n))) goto L_56;
  return;
  o = n.anchorRef.single();
  if (!((undefined !== o))) goto L_5fa;
  if (!((undefined !== n.renderNativePresentation))) goto L_1d5;
  e.beginComponent(DILAnchoredOverlayContextProvider, t, undefined, undefined);
  if ((e.hasContext())) goto L_17f;
  e.setContext(this.makeScopedContext(n));
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  goto L_41f;
  let r;
  let t;
  t = x(this.overlayRootRef.single());
  r = p.resolveDILAnchoredOverlaySurfaceConstraints(t, n);
  e.beginRender(i, undefined);
  e.setAttributeRef(this.overlayRootRef);
  e.setAttributeStyle("style", C.overlayRoot);
  if (!((true === n.tooltip))) goto L_372;
  goto L_373;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", undefined);
  e.setAttributeNumber("height", x(o).height);
  this.renderAnchoredOverlay(n, r);
  e.endRender();
  if (!(this.state.hasNestedOverlay)) goto L_5f9;
  e.beginComponent(DILAnchoredOverlayComponent, r, "nested-overlay", undefined);
  e.setViewModelProperty("depth", (this.viewModel.depth + 1));
  e.setViewModelProperty("onHidden", this.handleNestedOverlayHidden);
  e.setViewModelProperty("presenter", this.viewModel.presenter);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=369B file=dil_core/src/DILAnchoredOverlayComponent
// closure: e, s, this, d
function {
  e.beginRender(s, undefined);
  e.setAttributeRef(this.pointerRef);
  e.setAttributeNumber("left", -d.TOOLTIP_POINTER_HEIGHT);
  e.setAttributeNumber("top", -d.TOOLTIP_POINTER_HEIGHT);
  e.setAttribute("touchEnabled", false);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=dil_core/src/DILAnchoredOverlayComponent
// closure: t
function {
  t.renderBody();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=8 cpool=2 bc=1698B file=dil_core/src/DILAnchoredOverlayComponent
// args: t, i
// locals: r, this
// closure: e, s, d, n, C, o, DILAnchoredOverlayContextProvider, a
function {
  this = this;
  let r;
  r = (true === t.tooltip);
  if (!((true === t.dismissible))) goto L_194;
  e.beginRender(n, undefined);
  e.setAttributeRef(this.overlayDismissRef);
  e.setAttributeStyle("style", C.overlayDismissLayer);
  e.setAttributeFunction("onTap", this.handleDismiss);
  e.endRender();
  e.beginRender(o, undefined);
  e.setAttributeRef(this.overlaySurfaceRef);
  e.setAttributeFunction("onLayoutComplete", this.refreshPopupBinding);
  if (!(r)) goto L_2ae;
  goto L_2d2;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", C.overlaySurface);
  if (!(r)) goto L_30b;
  goto L_33e;
  // [栈深重同步 4 -> 3]
  if (!((true === t.translucent))) goto L_339;
  goto L_33e;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", "surface-elevated");
  e.setAttributeNumber("width", i.width);
  e.setAttributeNumber("minWidth", i.minWidth);
  e.setAttributeNumber("maxWidth", i.maxWidth);
  e.setAttributeNumber("opacity", this.getSurfaceOpacity());
  e.setAttributeNumber("scaleX", this.getSurfaceScale());
  e.setAttributeNumber("scaleY", this.getSurfaceScale());
  e.setAttributeFunction("onLayout", this.handleAnchoredOverlayLayout);
  if (!(r)) goto L_57e;
  function <atom:0>();
  e.beginComponent(DILAnchoredOverlayContextProvider, a, undefined, undefined);
  if ((e.hasContext())) goto L_627;
  e.setContext(this.makeScopedContext(t));
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=511B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== this.scopedContext))) goto L_bb;
  if (!((this.scopedContextAnchor === e.anchorRef))) goto L_bb;
  if (((this.scopedContextParent === this.context))) goto L_1db;
  this.scopedContextAnchor = e.anchorRef;
  this.scopedContextParent = this.context;
  null;
  this.context;
  this.scopedContext = {anchoredOverlayPresenter: this.viewModel.presenter.scopedPresenter(e.anchorRef)};
  {anchoredOverlayPresenter: this.viewModel.presenter.scopedPresenter(e.anchorRef)};
  return this.scopedContext;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=226B file=dil_core/src/DILAnchoredOverlayComponent
// locals: this
// closure: u
function {
  this = this;
  if (((this.state.phase === u.Measuring))) goto L_91;
  if (!((this.state.phase === u.Entering))) goto L_93;
  return 0;
  if (((this.state.phase === u.Visible))) goto L_df;
  if (!((this.state.phase === u.Exiting))) goto L_e1;
  return 1;
  this.state.phase;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=228B file=dil_core/src/DILAnchoredOverlayComponent
// locals: this
// closure: u, y
function {
  this = this;
  if (((this.state.phase === u.Measuring))) goto L_91;
  if (!((this.state.phase === u.Entering))) goto L_95;
  return y;
  if (((this.state.phase === u.Visible))) goto L_e1;
  if (!((this.state.phase === u.Exiting))) goto L_e3;
  return 1;
  this.state.phase;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=418B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// locals: this
function {
  this = this;
  if (!((this.popupBinding == null))) goto L_2d;
  this.popupBinding;
  goto L_1a1;
  if (!((undefined !== e))) goto L_19d;
  if (!((undefined === e.renderNativePresentation))) goto L_19d;
  goto L_19e;
  // [栈深重同步 3 -> 2]
  undefined.update(undefined);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=702B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// locals: t, this
function {
  this = this;
  let t;
  this.updatePopupBinding(e);
  t = this.isActiveOverlay(e);
  if (!((this.state.active === t))) goto L_138;
  if (!((this.state.renderedOverlay == null))) goto L_ec;
  this.state.renderedOverlay;
  goto L_10d;
  if (!((e == null))) goto L_116;
  e;
  goto L_137;
  if (((undefined.anchorRef === undefined.anchorRef))) goto L_2bd;
  if (!((this.state.renderedOverlay == null))) goto L_18a;
  this.state.renderedOverlay;
  goto L_1ab;
  if (!((e == null))) goto L_1b4;
  e;
  goto L_1d5;
  if (!((undefined.anchorRef !== undefined.anchorRef))) goto L_254;
  if (!((this.state.renderedOverlay == null))) goto L_225;
  this.state.renderedOverlay;
  goto L_254;
  if (!((undefined.onActiveChange == null))) goto L_24f;
  undefined.onActiveChange;
  undefined;
  goto L_254;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, false);
  this.setState({active: t});
  if (!((e == null))) goto L_28d;
  e;
  goto L_2bd;
  if (!((undefined.onActiveChange == null))) goto L_2b7;
  undefined.onActiveChange;
  undefined;
  goto L_2bd;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=49B file=dil_core/src/DILAnchoredOverlayComponent
// closure: e, R
function {
  e.setAttribute("opacity", 1);
  R(e, 1);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=325B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// locals: t
// closure: this, i, u
function {
  let t;
  if (!(e)) goto L_7;
  return;
  if (!((this.activeAnimation === i))) goto L_3d;
  this.activeAnimation = undefined;
  undefined;
  t = this.state;
  if (!((t.phase === u.Entering))) goto L_144;
  if (!((undefined !== t.renderedOverlay))) goto L_144;
  this.setOverlayState(u.Visible, t.renderedOverlay);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=2 bc=439B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// locals: t, i, this
// closure: R, u, m
function {
  this = this;
  let i;
  let t;
  t = this.state;
  if (((t.phase !== u.Measuring))) goto L_9c;
  if (!((undefined === t.renderedOverlay))) goto L_9f;
  return;
  this.cancelActiveAnimation();
  this.setOverlayState(u.Entering, t.renderedOverlay);
  i = this.createAnimation(m, function <atom:0>);
  this.activeAnimation = i;
  i.start().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=dil_core/src/DILAnchoredOverlayComponent
// locals: this
function {
  this = this;
  if (!((this.activeAnimation == null))) goto L_2c;
  this.activeAnimation;
  goto L_50;
  undefined.cancel();
  this.activeAnimation = undefined;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=92B file=dil_core/src/DILAnchoredOverlayComponent
// args: e, t
// locals: this
function {
  this = this;
  this.updateActiveOverlay(t);
  this.setState({phase: e, renderedOverlay: t});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=192B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== e))) goto L_bf;
  if (!((this.viewModel.presenter.getActiveOverlay() == null))) goto L_7b;
  this.viewModel.presenter.getActiveOverlay();
  goto L_9c;
  return (undefined.anchorRef === e.anchorRef);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=43B file=dil_core/src/DILAnchoredOverlayComponent
// locals: this
// closure: e
function {
  this = this;
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_core/src/DILAnchoredOverlayComponent
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

// fn A  args=4 vars=7 closure=3 cpool=0 bc=235B file=dil_core/src/DILAnchoredOverlayComponent
// args: e, t, i, r
// locals: n, o, s
// closure: g, P, p
function {
  let s;
  let o;
  let n;
  n = g(i, t);
  if (!((i == null))) goto L_17;
  i;
  goto L_38;
  if (!((undefined.frame == null))) goto L_40;
  undefined.frame;
  o = P;
  null;
  t.frame;
  s = {x: n.x, y: n.y};
  return p.resolveDILAnchoredOverlayLayout(o, s, r, e);   // tail call
}

// fn g  args=2 vars=2 closure=1 cpool=0 bc=382B file=dil_core/src/DILAnchoredOverlayComponent
// args: e, t
// closure: c
function {
  if (!((undefined === e))) goto L_9a;
  return {x: t.frame.x, y: t.frame.y};
  if (!((c.RenderedElementUtils.relativePositionTo(e, t) == null))) goto L_17d;
  c.RenderedElementUtils.relativePositionTo(e, t);
  return {x: t.frame.x, y: t.frame.y};
}

// fn b  args=2 vars=2 closure=0 cpool=0 bc=154B file=dil_core/src/DILAnchoredOverlayComponent
// args: e, t
function {
  e.setAttribute("translationX", t.x);
  e.setAttribute("translationY", t.y);
  return;
}

// fn R  args=2 vars=2 closure=0 cpool=0 bc=88B file=dil_core/src/DILAnchoredOverlayComponent
// args: e, t
function {
  e.setAttribute("scaleX", t);
  e.setAttribute("scaleY", t);
  return;
}

// fn w  args=1 vars=1 closure=0 cpool=0 bc=49B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
function {
  if (!((e == null))) goto L_9;
  e;
  goto L_2a;
  if (!((undefined.parent == null))) goto L_30;
  undefined.parent;
  return e;
}

// fn S  args=1 vars=1 closure=2 cpool=0 bc=82B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// closure: c, w
function {
  if (!((c.RenderedElementUtils.rootElementWithFrame(e) == null))) goto L_51;
  c.RenderedElementUtils.rootElementWithFrame(e);
  return w(e);
}

// fn x  args=1 vars=1 closure=2 cpool=0 bc=53B file=dil_core/src/DILAnchoredOverlayComponent
// args: e
// closure: S, P
function {
  if (!((S(e) == null))) goto L_b;
  S(e);
  goto L_2c;
  if (!((undefined.frame == null))) goto L_34;
  undefined.frame;
  return P;
}

// fn <atom:0>  args=3 vars=37 closure=0 cpool=37 bc=1512B file=dil_core/src/DILAnchoredOverlayComponent
// args: require, module, exports
// locals: e, t, i, r, n, o, s, a, d, h, l, v, c, p, u, DILAnchoredOverlayComponent, <class_fields_init>, DILAnchoredOverlayComponent#1, DILAnchoredOverlayContextProvider, <class_fields_init>#1, DILAnchoredOverlayContextProvider#1, y, f, m, O, A, g, b, R, w, S, x, P, C
function {
  A = function A;
  g = function g;
  b = function b;
  R = function R;
  w = function w;
  S = function S;
  x = function x;
  let C;
  let P;
  let O;
  let m;
  let f;
  let y;
  let DILAnchoredOverlayContextProvider#1;
  let DILAnchoredOverlayComponent#1;
  let p;
  let c;
  let v;
  let l;
  let h;
  let d;
  let a;
  let s;
  let o;
  let n;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILAnchoredOverlayComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "L9UXaJ5mlD2oJtFn");
  i = e.makeNodePrototype("view", undefined, "FPK5VrmydG6mW-L1");
  r = e.makeComponentPrototype(undefined, "IB0fcUEDY5YODLWq");
  n = e.makeNodePrototype("view", undefined, "gdsGyqeaF-WGBsz8");
  o = e.makeNodePrototype("view", undefined, "XzoSqiYd_c8RiKtr");
  s = e.makeNodePrototype("shape", ["position", "absolute", "fillColor", "#000000"], "oiaNz43_WawZElhd");
  a = e.makeComponentPrototype(undefined, "S7VyU4vrSguGSkoh");
  d = require("./DILTooltipGeometry");
  h = require("valdi_core/src/Component");
  l = require("valdi_core/src/ElementRef");
  v = require("valdi_core/src/Style");
  c = require("valdi_core/src/utils/RenderedElementUtils");
  p = require("./DILAnchoredOverlayPlacement");
  if ((u)) goto L_27b;
  u = {};
  !function <atom:0>({});
  let DILAnchoredOverlayComponent;
  let <class_fields_init>;
  class DILAnchoredOverlayComponent extends h.StatefulComponent { ... }
  <proto:DILAnchoredOverlayComponent>.onViewModelUpdate = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.onDestroy = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.refreshAnchoredOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.showNestedOverlayIfNeeded = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.showOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.initialOverlayPhase = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.hideOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.clearRenderedOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.onRender = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.renderAnchoredOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.makeScopedContext = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.getSurfaceOpacity = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.getSurfaceScale = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.updatePopupBinding = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.updateActiveOverlay = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.startEnterAnimation = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.cancelActiveAnimation = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.setOverlayState = function <atom:0>;
  <proto:DILAnchoredOverlayComponent>.isActiveOverlay = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILAnchoredOverlayComponent>;
  DILAnchoredOverlayComponent = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILAnchoredOverlayComponent
  DILAnchoredOverlayComponent#1 = function <atom:0>;
  exports.DILAnchoredOverlayComponent = DILAnchoredOverlayComponent#1;
  let DILAnchoredOverlayContextProvider;
  let <class_fields_init>#1;
  class DILAnchoredOverlayContextProvider extends h.Component { ... }
  <proto:DILAnchoredOverlayContextProvider>.onRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILAnchoredOverlayContextProvider>;
  DILAnchoredOverlayContextProvider = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILAnchoredOverlayContextProvider#1 = function <atom:0>;
  y = 0.95;
  f = "0 10 15 rgba(0, 0, 0, 0.14)";
  m = {duration: 0.35, controlPoints: [0.19, 1, 0.22, 1], beginFromCurrentState: true};
  O = {duration: 0.2, controlPoints: [0.8, 0, 0.4, 1], beginFromCurrentState: true};
  P = {x: 0, y: 0, width: 0, height: 0};
  C = {overlayRoot: new v.Style({position: "absolute", top: 0, right: 0, bottom: 0, left: 0, width: "100%", height: "100%", backgroundColor: "transparent", ignoreParentViewport: true, limitToViewport: false}), overlayDismissLayer: new v.Style({position: "absolute", top: 0, right: 0, bottom: 0, left: 0, backgroundColor: "transparent"}), overlaySurface: new v.Style({position: "absolute", top: 0, left: 0, flexDirection: "column", overflow: "scroll", borderRadius: 12, borderColor: "alpha-10", borderWidth: 1, boxShadow: f}), tooltipSurface: new v.Style({accessibilityNavigation: "passthrough", position: "absolute", top: 0, left: 0, flexDirection: "column", overflow: "visible", borderRadius: d.TOOLTIP_CORNER_RADIUS})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILAnchoredOverlayComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
