// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=47B file=dil_widgets/src/animation/FlashcardStack
// args: e
// closure: this
function {
  this.width = e.width;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=150B file=dil_widgets/src/animation/FlashcardStack
// closure: this
function {
  this.setPreviewProgress(0);
  this.clearGradingFeedback(this.viewModel.activeKey);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=5 bc=1457B file=dil_widgets/src/animation/FlashcardStack
// args: e
// locals: t
// closure: this, y, I
function {
  if (((e.phase === y.HorizontalSwipePhase.Started))) goto L_d7;
  this.dragging = (e.phase === y.HorizontalSwipePhase.Changed);
  if (!(this.dragging)) goto L_1f7;
  let t;
  if (!((e.direction === y.HorizontalSwipeDirection.Left))) goto L_179;
  goto L_17a;
  // [栈深重同步 1 -> 0]
  t = 1;
  this.reportSwipeProgress((t * Math.round((16 * e.progress))));
  goto L_220;
  this.reportSwipeProgress(0);
  if ((this.state.moving)) goto L_588;
  if (!(this.viewModel.reducedMotion)) goto L_2b9;
  goto L_2db;
  // [栈深重同步 2 -> 1]
  this.dragProgress = e.progress;
  if (((e.phase !== y.HorizontalSwipePhase.Cancelled))) goto L_395;
  if (!(this.viewModel.reducedMotion)) goto L_4c5;
  this.cancelPreviewAnimation();
  this.setPreviewProgress(this.dragProgress);
  goto L_588;
  // [栈深重同步 1 -> 0]
  this.cancelPreviewAnimation();
  this.previewAnimation = this.createAnimation({beginFromCurrentState: true, controlPoints: [0.25, 0.1, 0.25, 1], duration: 0.15}, function <atom:0>);
  this.previewAnimation.start();
  this.reportBusy();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=195B file=dil_widgets/src/animation/FlashcardStack
// closure: this
function {
  if ((this.state.moving)) goto L_c2;
  if ((this.flipping)) goto L_c2;
  if (!((this.viewModel.onSwipeLeft == null))) goto L_bf;
  this.viewModel.onSwipeLeft;
  this.viewModel;
  goto L_c2;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=195B file=dil_widgets/src/animation/FlashcardStack
// closure: this
function {
  if ((this.state.moving)) goto L_c2;
  if ((this.flipping)) goto L_c2;
  if (!((this.viewModel.onSwipeRight == null))) goto L_bf;
  this.viewModel.onSwipeRight;
  this.viewModel;
  goto L_c2;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=4 bc=408B file=dil_widgets/src/animation/FlashcardStack
// locals: this, this.active_func, new.target, arguments
// closure: y, I, <class_fields_init>, w
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
  this.state = {outgoing: undefined, moving: false, flipping: false, shuffling: false};
  this.cardRefs = new Map();
  this.gradingRefs = new Map();
  this.nextRef = new w.ElementRef();
  this.bottomShadowRef = new w.ElementRef();
  this.generation = 0;
  this.width = 320;
  this.flipping = false;
  this.dragging = false;
  this.dragProgress = 0;
  this.reportedSwipeProgress = 0;
  this.busy = false;
  this.flipCallbacks = new Map();
  this.layout = function <atom:0>;
  this.drag = function <atom:0>;
  this.swipeLeft = function <atom:0>;
  this.swipeRight = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=1423B file=dil_widgets/src/animation/FlashcardStack
// args: e
// locals: t, i, this
function {
  this = this;
  if (!((undefined === e))) goto L_ae;
  if (!((this.viewModel.onInteractionChange == null))) goto L_56;
  this.viewModel.onInteractionChange;
  this.viewModel;
  goto L_5b;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, false);
  if (!((this.viewModel.onSwipeProgress == null))) goto L_a8;
  this.viewModel.onSwipeProgress;
  this.viewModel;
  goto L_ac;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, 0);
  return;
  if ((this.viewModel.reducedMotion)) goto L_138;
  if (!(this.viewModel.disabled)) goto L_2ad;
  if (!(!e.reducedMotion)) goto L_1a7;
  if ((this.viewModel.reducedMotion)) goto L_282;
  if (!(!e.disabled)) goto L_218;
  if ((this.viewModel.disabled)) goto L_282;
  if (!((e.activeKey !== this.viewModel.activeKey))) goto L_2ab;
  this.settle();
  return;
  if (!((e.activeKey !== this.viewModel.activeKey))) goto L_58e;
  let i;
  let t;
  this.cancel();
  this.flipping = false;
  t = this.viewModel.restoreDirection;
  i = this.viewModel.dismissDirection;
  if (!(!t)) goto L_531;
  if (!((undefined !== e.shuffleKey))) goto L_531;
  if (!((undefined !== this.viewModel.shuffleKey))) goto L_531;
  if (!((e.shuffleKey !== this.viewModel.shuffleKey))) goto L_531;
  if (!((this.viewModel.cardCount == null))) goto L_505;
  this.viewModel.cardCount;
  if (!((0 > 1))) goto L_531;
  goto L_58d;
  // [栈深重同步 1 -> 0]
  if ((t)) goto L_53b;
  if (!(i)) goto L_568;
  goto L_58d;
  // [栈深重同步 1 -> 0]
  this.settle();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=104B file=dil_widgets/src/animation/FlashcardStack
// locals: this
function {
  this = this;
  this.cancel();
  this.dragging = false;
  this.flipping = false;
  this.setBusy(false);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=358B file=dil_widgets/src/animation/FlashcardStack
// locals: this
function {
  this = this;
  this.generation = (this.generation ++);
  if (!((undefined !== this.shuffleTimer))) goto L_8b;
  clearTimeout(this.shuffleTimer);
  this.shuffleTimer = undefined;
  undefined;
  if (!((this.animation == null))) goto L_b6;
  this.animation;
  goto L_da;
  undefined.cancel();
  this.animation = undefined;
  if (!((this.shuffleRiseAnimation == null))) goto L_110;
  this.shuffleRiseAnimation;
  goto L_134;
  undefined.cancel();
  this.shuffleRiseAnimation = undefined;
  this.cancelPreviewAnimation();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=dil_widgets/src/animation/FlashcardStack
// locals: this
function {
  this = this;
  if (!((this.previewAnimation == null))) goto L_2c;
  this.previewAnimation;
  goto L_50;
  undefined.cancel();
  this.previewAnimation = undefined;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=1219B file=dil_widgets/src/animation/FlashcardStack
// locals: e, t, t#1, this
function {
  this = this;
  let e;
  this.cancel();
  this.dragging = false;
  this.dragProgress = 0;
  this.reportSwipeProgress(0);
  e = this.cardRefFor(this.viewModel.activeKey);
  e.setAttribute("translationX", 0);
  this.setCardProgress(e, 1);
  e.setAttribute("opacity", 1);
  e.setAttribute("zIndex", 3);
  this.setPreviewProgress(0);
  this.clearGradingFeedback(this.viewModel.activeKey);
  this.setState({outgoing: undefined, moving: false, flipping: this.flipping, shuffling: false});
  let t;
  for (const t of this.flipCallbacks.keys()) {
    if (!((t !== this.viewModel.activeKey))) goto L_35a;
    this.flipCallbacks.delete(t);
  }
  let t#1;
  for (const t#1 of this.cardRefs.keys()) {
    if (!((t#1 !== this.viewModel.activeKey))) goto L_493;
    this.cardRefs.delete(t#1);
    this.gradingRefs.delete(t#1);
  }
  this.reportBusy();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=134B file=dil_widgets/src/animation/FlashcardStack
// args: e
// locals: this
function {
  this = this;
  if (!((this.busy !== e))) goto L_85;
  this.busy = e;
  if (!((this.viewModel.onInteractionChange == null))) goto L_81;
  this.viewModel.onInteractionChange;
  this.viewModel;
  goto L_85;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=183B file=dil_widgets/src/animation/FlashcardStack
// locals: this
function {
  this = this;
  if ((this.dragging)) goto L_b3;
  if ((this.flipping)) goto L_b3;
  this.setBusy(this.state.moving);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=210B file=dil_widgets/src/animation/FlashcardStack
// args: e
// locals: t, this
// closure: w
function {
  this = this;
  let t;
  t = this.cardRefs.get(e);
  if (!((undefined === t))) goto L_cd;
  t = new w.ElementRef();
  new w.ElementRef();
  this.cardRefs.set(e, t);
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=338B file=dil_widgets/src/animation/FlashcardStack
// args: e
// locals: t, this
// closure: w, y
function {
  this = this;
  let t;
  t = this.gradingRefs.get(e);
  if (!((undefined === t))) goto L_14d;
  t = {layer: new w.ElementRef(), borders: new w.ElementRef(), direction: y.HorizontalSwipeDirection.None};
  {layer: new w.ElementRef(), borders: new w.ElementRef(), direction: y.HorizontalSwipeDirection.None};
  this.gradingRefs.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=0 bc=562B file=dil_widgets/src/animation/FlashcardStack
// args: e, t, i
// locals: r, this
// closure: y, z
function {
  this = this;
  let r;
  r = this.gradingFor(e);
  if (!((t !== y.HorizontalSwipeDirection.None))) goto L_196;
  if (!((r.direction !== t))) goto L_196;
  if (!((t === y.HorizontalSwipeDirection.Left))) goto L_160;
  goto L_184;
  // [栈深重同步 4 -> 3]
  r.borders.setAttribute("borderColor", z.right);
  r.direction = t;
  t;
  if (!((t === y.HorizontalSwipeDirection.None))) goto L_22d;
  goto L_22e;
  // [栈深重同步 4 -> 3]
  r.layer.setAttribute("opacity", i);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=116B file=dil_widgets/src/animation/FlashcardStack
// args: e
// locals: this
function {
  this = this;
  this.gradingFor(e).layer.setAttribute("opacity", 0);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=134B file=dil_widgets/src/animation/FlashcardStack
// args: e
// locals: this
function {
  this = this;
  if (!((this.reportedSwipeProgress !== e))) goto L_85;
  this.reportedSwipeProgress = e;
  if (!((this.viewModel.onSwipeProgress == null))) goto L_81;
  this.viewModel.onSwipeProgress;
  this.viewModel;
  goto L_85;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=167B file=dil_widgets/src/animation/FlashcardStack
// args: t
// closure: this, e
function {
  if (!((this.viewModel.activeKey === e))) goto L_a6;
  this.flipping = t;
  this.setState({flipping: t});
  this.reportBusy();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=177B file=dil_widgets/src/animation/FlashcardStack
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.flipCallbacks.get(e);
  if (!((undefined === t))) goto L_ac;
  t = function <atom:0>;
  function <atom:0>;
  this.flipCallbacks.set(e, t);
  return t;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=2 bc=150B file=dil_widgets/src/animation/FlashcardStack
// args: e, t
// closure: m, S
function {
  e.setAttribute("scaleX", (0.96 + (0.04 * t)));
  e.setAttribute("rotation", (m * (1 - t)));
  e.setAttribute("translationY", (S * (1 - t)));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=2 bc=160B file=dil_widgets/src/animation/FlashcardStack
// args: e
// locals: this
function {
  this = this;
  if (!((this.viewModel.cardCount == null))) goto L_4b;
  this.viewModel.cardCount;
  if (!((0 < 2))) goto L_51;
  return 0;
  if (!(this.viewModel.isMobile)) goto L_98;
  return 1;
  return (0.9 + (0.1 * e));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=266B file=dil_widgets/src/animation/FlashcardStack
// args: e
// locals: this
function {
  this = this;
  this.setCardProgress(this.nextRef, e);
  this.nextRef.setAttribute("opacity", this.previewOpacity(e));
  this.bottomShadowRef.setAttribute("opacity", e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=208B file=dil_widgets/src/animation/FlashcardStack
// closure: this, i, t
function {
  if ((this.isDestroyed())) goto L_cf;
  if (((i !== this.generation))) goto L_cf;
  if (!(t)) goto L_7e;
  goto L_7f;
  // [栈深重同步 3 -> 2]
  this.setPreviewProgress(0);
  this.bottomShadowRef.setAttribute("opacity", 0);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=135B file=dil_widgets/src/animation/FlashcardStack
// closure: this, i, s, o, t
function {
  if ((this.isDestroyed())) goto L_86;
  if (((i !== this.generation))) goto L_86;
  this.animateMove(i, s, o, (undefined !== t));
  return;
}

// fn <atom:0>  args=2 vars=10 closure=3 cpool=4 bc=1818B file=dil_widgets/src/animation/FlashcardStack
// args: e, t
// locals: i, r, s, o, e#1, i#1, t#1, this
// closure: u, M, y
function {
  this = this;
  let o;
  let s;
  let r;
  let i;
  i = this.generation;
  r = this.dragProgress;
  s = this.cardRefFor(this.viewModel.activeKey);
  if (!(t)) goto L_c8;
  goto L_110;
  // [栈深重同步 1 -> 0]
  o = this.cardRefFor(e.activeKey);
  this.dragging = false;
  this.dragProgress = 0;
  if (!(t)) goto L_3f3;
  let i#1;
  let e#1;
  if (!(("left" === t))) goto L_142;
  goto L_143;
  // [栈深重同步 1 -> 0]
  if (!(u.Device.isRTL())) goto L_190;
  goto L_191;
  // [栈深重同步 2 -> 1]
  e#1 = (1 * 1);
  if (!(this.viewModel.isMobile)) goto L_200;
  goto L_202;
  // [栈深重同步 2 -> 1]
  i#1 = (this.width + 32);
  this.setCardProgress(s, 1);
  s.setAttribute("translationX", (e#1 * i#1));
  s.setAttribute("rotation", (e#1 * M));
  if (!(this.viewModel.isMobile)) goto L_30a;
  goto L_30b;
  // [栈深重同步 4 -> 3]
  s.setAttribute("opacity", 0);
  this.setPreviewProgress(1);
  this.bottomShadowRef.setAttribute("opacity", 0);
  this.clearGradingFeedback(this.viewModel.activeKey);
  goto L_616;
  let t#1;
  s.setAttribute("translationX", 0);
  this.setCardProgress(s, r);
  s.setAttribute("opacity", (0.9 + (0.1 * r)));
  if (!((o == null))) goto L_492;
  o;
  goto L_4bc;
  undefined.setAttribute("opacity", 1);
  this.setPreviewProgress(0);
  t#1 = this.viewModel.dismissDirection;
  if (!(t#1)) goto L_615;
  if (!(("left" === t#1))) goto L_5cc;
  goto L_611;
  // [栈深重同步 4 -> 3]
  this.setGradingFeedback(e.activeKey, y.HorizontalSwipeDirection.Right, 1);
  if (!(t)) goto L_640;
  goto L_641;
  // [栈深重同步 4 -> 3]
  this.setState({outgoing: e, moving: true, flipping: false, shuffling: false});
  this.reportBusy();
  this.renderer.onRenderComplete(function <atom:0>);
  this.renderer.onNextDraw(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=224B file=dil_widgets/src/animation/FlashcardStack
// closure: t, this, i, r
function {
  t.setAttribute("translationX", 0);
  this.setCardProgress(t, 1);
  t.setAttribute("opacity", 1);
  if (!((i == null))) goto L_89;
  i;
  goto L_b3;
  undefined.setAttribute("opacity", 0);
  if (!(r)) goto L_df;
  this.setPreviewProgress(0);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=2 cpool=3 bc=258B file=dil_widgets/src/animation/FlashcardStack
// args: e, t, i, r
// locals: s, this
// closure: P, A
function {
  this = this;
  let s;
  if (!(r)) goto L_37;
  goto L_3a;
  // [栈深重同步 4 -> 3]
  if (!(r)) goto L_46;
  goto L_48;
  // [栈深重同步 4 -> 3]
  s = this.createAnimation({beginFromCurrentState: true, controlPoints: A, duration: 0.24}, function <atom:0>);
  this.animation = s;
  (await s.start());
  if ((this.isDestroyed())) goto L_ff;
  if (((e !== this.generation))) goto L_ff;
  this.settle();
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=141B file=dil_widgets/src/animation/FlashcardStack
// closure: this, t, i, r
function {
  if ((this.isDestroyed())) goto L_8c;
  if (((t !== this.generation))) goto L_8c;
  this.shuffleTimer = undefined;
  this.animateShuffle(t, i, r);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=191B file=dil_widgets/src/animation/FlashcardStack
// locals: e
// closure: this, t, i, r
function {
  let e;
  if ((this.isDestroyed())) goto L_52;
  if (!((t !== this.generation))) goto L_55;
  return;
  e = function <atom:0>;
  if (!(this.viewModel.isMobile)) goto L_ba;
  this.shuffleTimer = setTimeout(e, 96);
  goto L_be;
  // [栈深重同步 1 -> 0]
  e();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=1 bc=999B file=dil_widgets/src/animation/FlashcardStack
// args: e
// locals: t, i, r, this
function {
  this = this;
  let r;
  let i;
  let t;
  t = this.generation;
  i = this.cardRefFor(this.viewModel.activeKey);
  r = this.cardRefFor(e.activeKey);
  this.dragging = false;
  this.dragProgress = 0;
  this.reportSwipeProgress(0);
  i.setAttribute("translationX", 0);
  i.setAttribute("opacity", 1);
  i.setAttribute("zIndex", 3);
  this.setCardProgress(i, 0);
  r.setAttribute("translationX", 0);
  r.setAttribute("opacity", 1);
  r.setAttribute("zIndex", 4);
  this.setCardProgress(r, 1);
  this.clearGradingFeedback(e.activeKey);
  this.clearGradingFeedback(this.viewModel.activeKey);
  this.setState({outgoing: e, moving: true, flipping: false, shuffling: true});
  this.reportBusy();
  this.renderer.onNextDraw(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=39B file=dil_widgets/src/animation/FlashcardStack
// closure: this, t
function {
  return this.setCardProgress(t, 1);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=100B file=dil_widgets/src/animation/FlashcardStack
// closure: i, r, s, o
function {
  i.setAttribute("translationX", (r * s));
  i.setAttribute("rotation", (r * o));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=84B file=dil_widgets/src/animation/FlashcardStack
// closure: i, this
function {
  i.setAttribute("translationX", 0);
  this.setCardProgress(i, 0);
  return;
}

// fn <atom:0>  args=3 vars=11 closure=7 cpool=6 bc=918B file=dil_widgets/src/animation/FlashcardStack
// args: e, t, i
// locals: r, s, o, n, a, d, h, this
// closure: u, k, R, D, C, K, F
function {
  this = this;
  let h;
  let d;
  let a;
  let n;
  let o;
  let s;
  let r;
  if (!(u.Device.isRTL())) goto L_65;
  goto L_66;
  // [栈深重同步 1 -> 0]
  r = 1;
  if (!(this.viewModel.isMobile)) goto L_b2;
  goto L_b5;
  // [栈深重同步 1 -> 0]
  s = R;
  if (!(this.viewModel.isMobile)) goto L_101;
  goto L_104;
  // [栈深重同步 1 -> 0]
  o = C;
  n = this.createAnimation({beginFromCurrentState: true, controlPoints: K, duration: 0.3}, function <atom:0>);
  this.shuffleRiseAnimation = n;
  a = n.start();
  d = this.createAnimation({beginFromCurrentState: true, controlPoints: F, duration: 0.135}, function <atom:0>);
  this.animation = d;
  (await d.start());
  if ((this.isDestroyed())) goto L_243;
  if (!((e !== this.generation))) goto L_247;
  return undefined; // async
  i.setAttribute("zIndex", 2);
  h = this.createAnimation({beginFromCurrentState: true, controlPoints: F, duration: 0.165}, function <atom:0>);
  this.animation = h;
  (await Promise.all([a, h.start()]));
  if ((this.isDestroyed())) goto L_393;
  if (((e !== this.generation))) goto L_393;
  this.settle();
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=79B file=dil_widgets/src/animation/FlashcardStack
// locals: this
// closure: x, N
function {
  this = this;
  if (!(this.viewModel.isMobile)) goto L_4b;
  return x;
  return N;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=359B file=dil_widgets/src/animation/FlashcardStack
// args: i
// locals: r, this
// closure: e, t, G
function {
  this = this;
  let r;
  r = this.gradingFor(i);
  e.beginRender(t, undefined);
  e.setAttributeRef(r.layer);
  e.setAttributeStyle("style", G.grading);
  this.renderGradingBorders(r.borders);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=215B file=dil_widgets/src/animation/FlashcardStack
// args: t
// locals: r
// closure: T, e, i
function {
  let r;
  r = 0;
  if (!((r < T.length))) goto L_d6;
  e.beginRender(i, String(r));
  e.setAttributeRef(t);
  e.setAttributeStyle("style", T[r]);
  e.endRender();
  r = <r_new>;
  (r++);
  goto L_5;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=718B file=dil_widgets/src/animation/FlashcardStack
// closure: e, f, o, t, x, N, this
function {
  e.beginComponent(f.FlashcardFlip, o, undefined, undefined);
  e.setViewModelProperty("activeKey", t.activeKey);
  e.setViewModelProperty("flipped", t.flipped);
  e.setViewModelProperty("reducedMotion", t.reducedMotion);
  e.setViewModelProperty("renderFace", t.renderFace);
  if (!(t.isMobile)) goto L_1df;
  goto L_1e2;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("boxShadow", N);
  e.setViewModelProperty("onInteractionChange", this.flipInteractionFor(t.activeKey));
  e.endComponent();
  this.renderGradingFeedback(t.activeKey);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=9 cpool=1 bc=1775B file=dil_widgets/src/animation/FlashcardStack
// args: t, i
// locals: n, this
// closure: e, f, o, x, N, y, r, G, s
function {
  this = this;
  let n;
  if (!(i)) goto L_12e;
  if (!(!this.state.shuffling)) goto L_12e;
  if (!(("left" === this.viewModel.dismissDirection))) goto L_e7;
  goto L_173;
  // [栈深重同步 1 -> 0]
  goto L_173;
  // [栈深重同步 1 -> 0]
  n = y.HorizontalSwipeDirection.None;
  e.beginRender(r, t.activeKey);
  e.setAttributeRef(this.cardRefFor(t.activeKey));
  e.setAttributeStyle("style", G.cardLayer);
  if (!(!i)) goto L_2b1;
  e.setAttribute("touchEnabled", undefined);
  if (!(i)) goto L_2e8;
  goto L_2e9;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", undefined);
  e.beginComponent(y.HorizontalSwipeSurface, s, undefined, undefined);
  if ((this.viewModel.disabled)) goto L_417;
  if ((this.flipping)) goto L_417;
  e.setViewModelProperty("disabled", this.state.moving);
  e.setViewModelProperty("dismissDirection", n);
  e.setViewModelProperty("reducedMotion", this.viewModel.reducedMotion);
  e.setViewModelProperty("rotateWhileDragging", true);
  if (!(i)) goto L_519;
  goto L_53b;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onDrag", this.drag);
  if (!(!i)) goto L_5d5;
  if (!(this.viewModel.onSwipeLeft)) goto L_5d5;
  goto L_5d6;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onSwipeLeft", undefined);
  if (!(!i)) goto L_670;
  if (!(this.viewModel.onSwipeRight)) goto L_670;
  goto L_671;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onSwipeRight", undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=296B file=dil_widgets/src/animation/FlashcardStack
// closure: e, l, G, i, this
function {
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", G.preview);
  e.setAttributeNumber("opacity", i);
  if (!((this.viewModel.renderPreview == null))) goto L_fb;
  this.viewModel.renderPreview;
  this.viewModel;
  goto L_ff;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, 2);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=296B file=dil_widgets/src/animation/FlashcardStack
// closure: e, g, G, i, this
function {
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", G.preview);
  e.setAttributeNumber("opacity", i);
  if (!((this.viewModel.renderPreview == null))) goto L_fb;
  this.viewModel.renderPreview;
  this.viewModel;
  goto L_ff;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, 1);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=11 cpool=2 bc=2053B file=dil_widgets/src/animation/FlashcardStack
// locals: t, i, r, this
// closure: e, l, G, g, p, V, n, a, d, h, c
function {
  this = this;
  let r;
  let i;
  let t;
  if (!((this.viewModel.cardCount == null))) goto L_54;
  this.viewModel.cardCount;
  t = 0;
  if (!(this.state.flipping)) goto L_9d;
  goto L_9e;
  // [栈深重同步 1 -> 0]
  i = 1;
  r = p.resolveDILBackgroundColor(V);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", G.stack);
  e.setAttributeFunction("onLayout", this.layout);
  e.beginRender(a, "bottom");
  e.setAttributeStyle("style", G.bottom);
  if (!((t > 2))) goto L_248;
  goto L_249;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0);
  e.beginRender(d, undefined);
  e.setAttributeRef(this.bottomShadowRef);
  e.setAttributeStyle("style", G.bottomShadow);
  e.setAttributeString("backgroundColor", r);
  e.setAttributeString("boxShadow", this.cardShadow);
  e.endRender();
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", G.bottomSurface);
  e.setAttributeString("backgroundColor", r);
  e.endRender();
  if (!((t > 2))) goto L_49c;
  function <atom:0>();
  e.endRender();
  e.beginRender(c, "next");
  e.setAttributeRef(this.nextRef);
  e.setAttributeStyle("style", G.next);
  if (!(this.state.shuffling)) goto L_601;
  goto L_627;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", this.previewOpacity(0));
  e.setAttributeString("backgroundColor", r);
  e.setAttributeString("boxShadow", this.cardShadow);
  if (!((t > 1))) goto L_6b6;
  function <atom:0>();
  e.endRender();
  this.renderCard(this.viewModel, false);
  if (!((undefined !== this.state.outgoing))) goto L_7dc;
  this.renderCard(this.state.outgoing, true);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=3 bc=219B file=dil_widgets/src/animation/FlashcardStack
// args: e, t
// locals: i
// closure: b
function {
  let i;
  i = (3 * t);
  return new b.Style({position: "absolute", left: i, right: i, top: i, bottom: i, borderWidth: 3.1, borderRadius: Math.max(0, (32 - i)), opacity: (0.14 * Math.exp((-0.5 * ((i / 14) ** 2)))), touchEnabled: false});
}

// fn <atom:0>  args=3 vars=46 closure=0 cpool=42 bc=2352B file=dil_widgets/src/animation/FlashcardStack
// args: require, module, exports
// locals: e, t, i, r, s, o, n, a, d, h, l, c, g, p, v, u, w, b, y, f, m, S, M, P, A, R, C, k, D, F, K, x, N, V, z, I, FlashcardStack, <class_fields_init>, FlashcardStack#1, L, H, T, G
function {
  let G;
  let T;
  let H;
  let L;
  let FlashcardStack#1;
  let I;
  let z;
  let V;
  let N;
  let x;
  let K;
  let F;
  let D;
  let k;
  let C;
  let R;
  let A;
  let P;
  let M;
  let S;
  let m;
  let f;
  let y;
  let b;
  let w;
  let u;
  let v;
  let p;
  let g;
  let c;
  let l;
  let h;
  let d;
  let a;
  let n;
  let o;
  let s;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FlashcardStack = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "HK1nfQ2A14UOoeU1");
  i = e.makeNodePrototype("view", undefined, "uVcs7CND0CsrQ0ZV");
  r = e.makeNodePrototype("view", undefined, "DFPNRU2RiKDIEMrr");
  s = e.makeComponentPrototype(undefined, "Rdl1hqE2aBIf6an7");
  o = e.makeComponentPrototype(undefined, "s7Twq-Zhq71YSVaL");
  n = e.makeNodePrototype("view", undefined, "biLbUPlFZc090QTz");
  a = e.makeNodePrototype("view", undefined, "IgvD87E07TZobtei");
  d = e.makeNodePrototype("view", undefined, "uTtADpAAWxH_mV67");
  h = e.makeNodePrototype("view", undefined, "RE58q029wO7HDzGZ");
  l = e.makeNodePrototype("view", undefined, "3141SV1eTD7dTkyO");
  c = e.makeNodePrototype("view", undefined, "QUqJtG6Y046eAcwl");
  g = e.makeNodePrototype("view", undefined, "VDs-sDoVxtiCT6Wk");
  p = require("dil_core/src/colors/DILColor");
  v = require("valdi_core/src/Component");
  u = require("valdi_core/src/Device");
  w = require("valdi_core/src/ElementRef");
  b = require("valdi_core/src/Style");
  y = require("../widgets/HorizontalSwipeSurface");
  f = require("./FlashcardFlip");
  m = ((-1.25 * Math.PI) / 180);
  S = 12;
  M = ((6 * Math.PI) / 180);
  P = [0.22, 0.61, 0.36, 1];
  A = [0.25, 0.8, 0.25, 1];
  R = 40;
  C = ((2.5 * Math.PI) / 180);
  k = 18;
  D = ((0.9 * Math.PI) / 180);
  F = [0.42, 0, 0.58, 1];
  K = [0, 0, 0.58, 1];
  x = "complex 0 10 30 rgba(0, 0, 0, 0.07)";
  N = "complex 0 0 8 rgba(0, 0, 0, 0.05)";
  V = {light: "gray-0", dark: "gray-200"};
  z = {left: "#ee7c37", right: "#53b559"};
  I = (112 / 180);
  let FlashcardStack;
  let <class_fields_init>;
  class FlashcardStack extends v.StatefulComponent { ... }
  <proto:FlashcardStack>.onViewModelUpdate = function <atom:0>;
  <proto:FlashcardStack>.onDestroy = function <atom:0>;
  <proto:FlashcardStack>.cancel = function <atom:0>;
  <proto:FlashcardStack>.cancelPreviewAnimation = function <atom:0>;
  <proto:FlashcardStack>.settle = function <atom:0>;
  <proto:FlashcardStack>.setBusy = function <atom:0>;
  <proto:FlashcardStack>.reportBusy = function <atom:0>;
  <proto:FlashcardStack>.cardRefFor = function <atom:0>;
  <proto:FlashcardStack>.gradingFor = function <atom:0>;
  <proto:FlashcardStack>.setGradingFeedback = function <atom:0>;
  <proto:FlashcardStack>.clearGradingFeedback = function <atom:0>;
  <proto:FlashcardStack>.reportSwipeProgress = function <atom:0>;
  <proto:FlashcardStack>.flipInteractionFor = function <atom:0>;
  <proto:FlashcardStack>.setCardProgress = function <atom:0>;
  <proto:FlashcardStack>.previewOpacity = function <atom:0>;
  <proto:FlashcardStack>.setPreviewProgress = function <atom:0>;
  <proto:FlashcardStack>.move = function <atom:0>;
  <proto:FlashcardStack>.animateMove = function <atom:0>;
  <proto:FlashcardStack>.shuffle = function <atom:0>;
  <proto:FlashcardStack>.animateShuffle = function <atom:0>;
  <proto:FlashcardStack>.cardShadow = function <atom:0>;
  <proto:FlashcardStack>.renderGradingFeedback = function <atom:0>;
  <proto:FlashcardStack>.renderGradingBorders = function <atom:0>;
  <proto:FlashcardStack>.renderCard = function <atom:0>;
  <proto:FlashcardStack>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FlashcardStack>;
  FlashcardStack = function <atom:0>;
  // close_loc <class_fields_init>
  FlashcardStack#1 = function <atom:0>;
  exports.FlashcardStack = FlashcardStack#1;
  FlashcardStack#1.dilV2Properties = ["activeKey", "disabled", "dismissDirection", "flipped", "isMobile", "onInteractionChange", "onSwipeLeft", "onSwipeProgress", "onSwipeRight", "reducedMotion", "restoreDirection", "shuffleKey"];
  L = new b.Style({position: "absolute", width: "100%", height: "100%", borderRadius: 32, borderWidth: 0.5, borderColor: "color-border-subtle", scaleX: 0.96, rotation: m, translationY: S, transformOrigin: "50% 100%", touchEnabled: false, accessibilityNavigation: "ignored"});
  H = new b.Style({position: "absolute", width: "100%", height: "100%", borderRadius: 32});
  T = Array.from({length: 12}, function <atom:0>);
  G = {stack: new b.Style({width: "100%", height: "100%"}), cardLayer: new b.Style({position: "absolute", width: "100%", height: "100%", minWidth: 0, transformOrigin: "50% 50%"}), preview: new b.Style({width: "100%", height: "100%", minWidth: 0}), grading: new b.Style({position: "absolute", width: "100%", height: "100%", opacity: 0, touchEnabled: false, accessibilityNavigation: "ignored"}), bottom: L.extend({borderWidth: 0}), bottomSurface: H.extend({borderWidth: 0.5, borderColor: "color-border-subtle"}), bottomShadow: H.extend({opacity: 0}), next: L};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/animation/FlashcardStack
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
