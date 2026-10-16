// fn <atom:0>  args=0 vars=4 closure=3 cpool=0 bc=556B file=dil_widgets/src/animation/DILAnimatedContainer
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, o, d
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
  this.containerRef = new o.ElementRef();
  this.animator = new d.DILAnimator(this.viewModel.currentAnimateItemKey, this.viewModel.kind, this.viewModel.initial, this.viewModel.enter, this.viewModel.exit, this.shouldRunInitialTransition());
  this.state = {revision: 0};
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=160B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: this, i
function {
  if (!(!this.isDestroyed())) goto L_9f;
  if (!(this.animator.hasBranch(i))) goto L_9f;
  this.scheduleEnterTransition(i);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=317B file=dil_widgets/src/animation/DILAnimatedContainer
// locals: i, this
// closure: n
function {
  this = this;
  let i;
  this.timer = n.resolveDILTimer();
  i = this.animator.getBranch(this.viewModel.currentAnimateItemKey);
  if (!((i == null))) goto L_ce;
  i;
  goto L_ef;
  if (!(("initial" === undefined.phase))) goto L_13c;
  this.renderer.onNextDraw(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=55B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: this, i
function {
  if (!((this.mountedUpdateAnimation === i))) goto L_36;
  this.mountedUpdateAnimation = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=127B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: u, t, e, this
function {
  if (!((this.viewModel.dimension == null))) goto L_77;
  this.viewModel.dimension;
  return u.applyTransitionAttributes(t, e, "height", "entered");   // tail call
}

// fn <atom:0>  args=1 vars=7 closure=1 cpool=2 bc=1675B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i
// locals: t, e, n, i#1, t#1, this
// closure: u
function {
  this = this;
  let t#1;
  if (!((undefined === i))) goto L_c;
  return;
  if (!((this.viewModel.currentAnimateItemKey === this.animator.currentKey))) goto L_601;
  let t;
  this.animator.updateCurrentBranchTransitions(this.viewModel.kind, this.viewModel.initial, this.viewModel.enter, this.viewModel.exit);
  this.pendingTransitionTarget = undefined;
  t = this.animator.currentBranch();
  if (!((true === this.viewModel.animateUpdates))) goto L_5d9;
  if (!((t == null))) goto L_2a5;
  t;
  goto L_2c6;
  if (!(("entered" === undefined.phase))) goto L_5d9;
  let n;
  let e;
  if (!((this.viewModel.enter == null))) goto L_31c;
  this.viewModel.enter;
  e = {};
  n = u.readTransitionNumber(e, "duration", u.defaultEnterDurationMs(this.viewModel.kind));
  if (!((0 === n))) goto L_49e;
  if (!((this.mountedUpdateAnimation == null))) goto L_3e9;
  this.mountedUpdateAnimation;
  goto L_40d;
  undefined.cancel();
  this.mountedUpdateAnimation = undefined;
  if (!((this.viewModel.dimension == null))) goto L_492;
  this.viewModel.dimension;
  u.applyTransitionAttributes(t, e, "height", "entered");
  goto L_5d6;
  if (!(!u.haveSameVisualTransition(i.enter, this.viewModel.enter))) goto L_5d6;
  let i#1;
  null;
  u.visualTransitionAnimationOptions(n, e, "entered");
  i#1 = this.createAnimation({completion: function <atom:0>}, function <atom:0>);
  this.mountedUpdateAnimation = i#1;
  i#1.start();
  // close_loc i#1
  // close_loc e
  this.refreshRender();
  return;
  t#1 = this.transitionTargetFromViewModel();
  if (!((undefined === this.activeTransitionVersion))) goto L_67b;
  goto L_68a;
  // [栈深重同步 1 -> 0]
  this.pendingTransitionTarget = t#1;
  t#1;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=dil_widgets/src/animation/DILAnimatedContainer
// locals: this
function {
  this = this;
  if (!((this.mountedUpdateAnimation == null))) goto L_2c;
  this.mountedUpdateAnimation;
  goto L_50;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=364B file=dil_widgets/src/animation/DILAnimatedContainer
// locals: this
function {
  this = this;
  return {currentAnimateItemKey: this.viewModel.currentAnimateItemKey, enter: this.viewModel.enter, exit: this.viewModel.exit, initial: this.viewModel.initial, kind: this.viewModel.kind};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=74B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: this, o
function {
  this.finishTransition(o.version);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=115B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: this, i
function {
  if (!(this.animator.completeExit(i))) goto L_72;
  this.refreshRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=2 bc=638B file=dil_widgets/src/animation/DILAnimatedContainer
// locals: i, t, t#1
// closure: this, o, a, r, s
function {
  let t#1;
  let i;
  if ((this.isDestroyed())) goto L_76;
  if (!((this.activeTransitionVersion !== o.version))) goto L_79;
  return;
  this.scheduleTimeout(function <atom:0>, (a + 1));
  i = o.exitingBranch;
  if (!((undefined !== i))) goto L_1ff;
  let t;
  t = o.enteringBranch;
  if (!(o.usesContainerLayoutTransition)) goto L_1a8;
  if (!((undefined !== t))) goto L_1a8;
  goto L_1fe;
  // [栈深重同步 1 -> 0]
  this.animateBranchPhase(i, "exiting", s, i.kind, function <atom:0>);
  t#1 = o.enteringBranch;
  if (!((undefined !== t#1))) goto L_27d;
  if (!(o.shouldRunEnterTransition)) goto L_27d;
  this.scheduleEnterTransition(t#1);
  return;
}

// fn <atom:0>  args=1 vars=9 closure=2 cpool=1 bc=1079B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i
// locals: t, e, n, r, s, o, a, this
// closure: l, m
function {
  this = this;
  let a;
  let o;
  let s;
  let r;
  let n;
  let e;
  let t;
  this.containerLayoutTransition = undefined;
  if (!((this.containerRef.single() == null))) goto L_73;
  this.containerRef.single();
  goto L_94;
  t = undefined.frame;
  e = this.animator.currentBranch();
  if (!((e == null))) goto L_e8;
  e;
  goto L_156;
  if (!((undefined.elementRef.single() == null))) goto L_135;
  undefined.elementRef.single();
  goto L_156;
  n = undefined.frame;
  r = l(t, n);
  if (!((e == null))) goto L_170;
  e;
  goto L_191;
  if (!(("Animate" === undefined.kind))) goto L_1f1;
  if (!(("Animate" === i.kind))) goto L_1f1;
  e.exitTransition = i.exit;
  i.exit;
  if (!((e == null))) goto L_1fd;
  e;
  goto L_21e;
  s = undefined.exitTransition;
  if (!((t == null))) goto L_31c;
  t;
  goto L_33d;
  if (!((t == null))) goto L_348;
  t;
  goto L_369;
  o = this.animator.transitionTo(i.currentAnimateItemKey, i.kind, i.initial, i.enter, i.exit, s, undefined.width, undefined.height);
  this.activeTransitionVersion = o.version;
  this.refreshRender();
  a = m(o, i.kind);
  this.renderer.onNextDraw(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=729B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  if ((this.isDestroyed())) goto L_55;
  if (!((this.activeTransitionVersion !== i))) goto L_58;
  return;
  this.activeTransitionVersion = undefined;
  t = this.containerLayoutTransition;
  if (!((t == null))) goto L_93;
  t;
  goto L_b4;
  if (!((true === undefined.resizeCompleted))) goto L_107;
  this.completeContainerResize(t, t.resizeVersion, false);
  e = this.pendingTransitionTarget;
  this.pendingTransitionTarget = undefined;
  if (!((undefined !== e))) goto L_2d7;
  if (!((e.currentAnimateItemKey === this.animator.currentKey))) goto L_2ac;
  this.animator.updateCurrentBranchTransitions(e.kind, e.initial, e.enter, e.exit);
  this.refreshRender();
  return undefined;
  this.startTransitionToTarget(e);
  return undefined;
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i
// closure: this
function {
  this.renderBranch(i);
  return null;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=1 bc=995B file=dil_widgets/src/animation/DILAnimatedContainer
// locals: e, this
// closure: r, i, t, v
function {
  this = this;
  let e;
  e = {};
  if (!((undefined !== this.viewModel.autoSpacing))) goto L_bb;
  r.applyDILAutoSpacingAttributes(e, this.viewModel.autoSpacing);
  i.beginRender(t, "container");
  i.setAttributeRef(this.containerRef);
  i.setAttributeStyle("style", v.container);
  i.setAttributes(e);
  i.setAttributeNumber("width", this.animator.containerWidth);
  i.setAttributeNumber("height", this.animator.containerHeight);
  if (!((this.viewModel.hideOverflow == null))) goto L_346;
  this.viewModel.hideOverflow;
  if ((!!this.animator.hasClippedBranch)) goto L_34d;
  i.setAttribute("slowClipping", undefined);
  this.animator.branches.map(function <atom:0>);
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=146B file=dil_widgets/src/animation/DILAnimatedContainer
// locals: this
function {
  this = this;
  if (!((false === this.viewModel.preventInitialTransition))) goto L_91;
  return (undefined !== this.viewModel.initial);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=221B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: this, i
function {
  if (!(this.animator.isCurrentBranch(i))) goto L_dc;
  this.animator.completeEnter(i.key);
  this.refreshRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=116B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i
// locals: this
function {
  this = this;
  this.animateBranchPhase(i, "entered", i.enterTransition, i.kind, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=272B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: h, this, i, o, r
function {
  if ((h)) goto L_10f;
  if ((this.isDestroyed())) goto L_10f;
  if (!(this.animator.hasBranch(i))) goto L_109;
  h = true;
  true;
  if (!(o)) goto L_fa;
  this.animator.setBranchAnimatingDimension(i.key, false);
  if (!((r == null))) goto L_106;
  r;
  goto L_10f;
  goto L_10f;
  // [栈深重同步 1 -> 0]
  h = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=122B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: u, i, e, this, t
function {
  if (!((this.viewModel.dimension == null))) goto L_73;
  this.viewModel.dimension;
  u.applyTransitionAttributes(i, e, "height", t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=5B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: d
function {
  d();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=2 bc=445B file=dil_widgets/src/animation/DILAnimatedContainer
// locals: n
// closure: u, i, e, this, t, d, o, a
function {
  let n;
  if (!(!this.animator.hasBranch(i))) goto L_4e;
  return;
  i.setPhase(t);
  this.animator.setBranchAnimatingDimension(i.key, o);
  n = function <atom:0>;
  if (!((0 === a))) goto L_142;
  this.renderer.batchUpdates(n);
  d();
  return;
  this.animatePromise(u.visualTransitionAnimationOptions(a, e, t), n).then(function <atom:0>);
  return;
}

// fn <atom:0>  args=5 vars=13 closure=1 cpool=2 bc=615B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i, t, e, n, r
// locals: s, o, a, h, d, m, l, this
// closure: u
function {
  this = this;
  let l;
  let m;
  let d;
  let h;
  let a;
  let o;
  let s;
  if (!(("exiting" === t))) goto L_49;
  goto L_6f;
  // [栈深重同步 1 -> 0]
  s = u.defaultEnterDurationMs(n);
  if (!((undefined === e))) goto L_f9;
  if (!(this.animator.hasBranch(i))) goto L_f7;
  i.setPhase(t);
  if (!((r == null))) goto L_f6;
  r;
  goto L_f7;
  undefined();
  return;
  if (!(!i.usesContainerLayoutTransition)) goto L_151;
  if ((i.isCollapsedDimensionPhase(e))) goto L_151;
  o = ("exiting" === t);
  a = u.readTransitionNumber(e, "duration", s);
  h = false;
  d = function <atom:0>;
  m = function <atom:0>;
  l = u.readTransitionNumber(e, "delay", 0);
  if (!((undefined !== r))) goto L_206;
  if (!((a > 0))) goto L_206;
  this.scheduleTimeout(d, (l + a));
  if (!((l > 0))) goto L_23c;
  goto L_266;
  // [栈深重同步 1 -> 0]
  this.scheduleTimeout(m, 0);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=112B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i, t
// locals: this
function {
  this = this;
  this.registerDisposable(this.timer.setTimeout(i, t));
  return;
}

// fn <atom:0>  args=0 vars=4 closure=8 cpool=0 bc=676B file=dil_widgets/src/animation/DILAnimatedContainer
// locals: e, a, h, d
// closure: this, i, t, u, r, s, n, o
function {
  let d;
  let h;
  let a;
  let e;
  if ((this.isDestroyed())) goto L_7e;
  if (!(!this.animator.canCommitContainerLayoutTransition(i, t))) goto L_81;
  return;
  e = t.enterTransition;
  a = u.readOptionalTransitionDuration(e, u.defaultEnterDurationMs(t.kind));
  h = u.readOptionalTransitionDuration(r, u.defaultExitDurationMs(s));
  if (!((this.viewModel.dimension == null))) goto L_1bf;
  this.viewModel.dimension;
  d = {version: i, branch: t, dimension: "height", adjustment: n, endTimeMs: (o + Math.max(a, h)), targetSize: undefined, resizeVersion: 0, resizeCompleted: false};
  this.containerLayoutTransition = d;
  this.updateContainerSize(d);
  if (!((undefined === d.targetSize))) goto L_2a3;
  this.completeContainerResize(d, 0, true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=113B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: this, e
function {
  if (!(this.animator.completeExit(e))) goto L_70;
  this.refreshRender();
  return;
}

// fn <atom:0>  args=6 vars=8 closure=1 cpool=2 bc=460B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i, t, e, n, r, s
// locals: o, this
// closure: u
function {
  this = this;
  let o;
  if (!(this.isDestroyed())) goto L_2d;
  return;
  if (!(!this.animator.canCommitContainerLayoutTransition(i, t))) goto L_79;
  return;
  this.animator.startContainerLayoutTransition(t.key);
  this.refreshRender();
  o = this.timer.now();
  this.renderer.onLayoutComplete(function <atom:0>);
  this.animateBranchPhase(e, "exiting", r, s, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=43B file=dil_widgets/src/animation/DILAnimatedContainer
// args: t
// closure: this, i, r
function {
  this.completeContainerResize(i, r, t);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=1 bc=834B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i
// locals: t, e, n, r, s, this
function {
  this = this;
  let s;
  let r;
  let n;
  let e;
  let t;
  if (!((i.branch.elementRef.single() == null))) goto L_81;
  i.branch.elementRef.single();
  goto L_a2;
  t = undefined.frame;
  if (!((undefined === t))) goto L_ab;
  return;
  e = i.dimension;
  if (!(("width" === e))) goto L_143;
  goto L_1ab;
  // [栈深重同步 1 -> 0]
  n = (t.height + i.adjustment.height);
  if ((!Number.isFinite(n))) goto L_20c;
  if (((n < 0))) goto L_20c;
  if (!((n === i.targetSize))) goto L_20f;
  return;
  i.targetSize = n;
  i.resizeCompleted = false;
  i.resizeVersion = (i.resizeVersion ++);
  r = (i.resizeVersion ++);
  s = Math.max(0, (i.endTimeMs - this.timer.now()));
  this.animateContainerToSize(e, n, s).then(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=488B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i, t, e
// locals: this
function {
  this = this;
  if (!(!this.isDestroyed())) goto L_1e7;
  if (!((this.containerLayoutTransition === i))) goto L_1e7;
  if (!((i.resizeVersion === t))) goto L_1e7;
  if (!(this.animator.canCommitContainerLayoutTransition(i.version, i.branch))) goto L_1e7;
  i.resizeCompleted = true;
  if ((e)) goto L_16c;
  if (!((this.activeTransitionVersion !== i.version))) goto L_1e7;
  this.containerLayoutTransition = undefined;
  this.animator.clearContainerLayoutTransition();
  this.refreshRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=372B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i
// locals: t, this
function {
  this = this;
  let t;
  t = this.containerLayoutTransition;
  if (!(!this.isDestroyed())) goto L_173;
  if (!((undefined !== t))) goto L_173;
  if (!((this.activeTransitionVersion === t.version))) goto L_173;
  if (!((t.branch === i))) goto L_173;
  if (!(this.animator.canCommitContainerLayoutTransition(t.version, i))) goto L_173;
  this.updateContainerSize(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=237B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: this, i, t
function {
  this.animator.setContainerSizeOverride(i, t);
  if (!(("width" === i))) goto L_a0;
  goto L_ec;
  // [栈深重同步 1 -> 0]
  this.containerRef.setAttribute("height", t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i
// closure: r
function {
  r = i;
  i;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=2 bc=141B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i, t, e
// locals: n, r, this
// closure: u
function {
  this = this;
  let r;
  let n;
  n = function <atom:0>;
  if (!((e <= 0))) goto L_1d;
  n();
  return false; // async
  r = false;
  null;
  u.animationOptions(e);
  (await this.animatePromise({beginFromCurrentState: true, completion: function <atom:0>}, n));
  return r; // async
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=dil_widgets/src/animation/DILAnimatedContainer
// closure: this, t
function {
  return this.onBranchLayout(t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=1 bc=1143B file=dil_widgets/src/animation/DILAnimatedContainer
// args: t
// locals: n, this
// closure: u, i, e, v, h
function {
  this = this;
  let n;
  n = t.usesContainerLayoutTransition;
  if (!(("exiting" !== t.phase))) goto L_110;
  if (!((this.viewModel.dimension == null))) goto L_eb;
  this.viewModel.dimension;
  u.applyTransitionAttributes(t, t.renderTransition, "height", t.phase);
  i.beginRender(e, t.key);
  i.setAttributeRef(t.elementRef);
  if (!(t.isAbsolute)) goto L_21c;
  goto L_2df;
  // [栈深重同步 4 -> 3]
  if (!(n)) goto L_2bb;
  if (!(("width" === this.viewModel.dimension))) goto L_295;
  goto L_2df;
  // [栈深重同步 4 -> 3]
  goto L_2df;
  // [栈深重同步 4 -> 3]
  i.setAttributeStyle("style", v.entry);
  if (!(n)) goto L_33a;
  goto L_33b;
  // [栈深重同步 4 -> 3]
  i.setAttribute("onLayout", undefined);
  if (!((this.viewModel.hideOverflow == null))) goto L_3d2;
  this.viewModel.hideOverflow;
  if ((!!t.clipsDimension)) goto L_3d9;
  i.setAttribute("slowClipping", undefined);
  if (!((this.viewModel.renderAnimateItem == null))) goto L_429;
  this.viewModel.renderAnimateItem;
  this.viewModel;
  goto L_44e;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t.key);
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=156B file=dil_widgets/src/animation/DILAnimatedContainer
// locals: this
function {
  this = this;
  if ((this.isDestroyed())) goto L_9b;
  this.setState({revision: (this.state.revision + 1)});
  return;
}

// fn m  args=2 vars=4 closure=1 cpool=0 bc=530B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i, t
// locals: e, n
// closure: u
function {
  let n;
  let e;
  if (!((undefined !== i.enteringBranch))) goto L_e6;
  if (!(i.shouldRunEnterTransition)) goto L_e6;
  goto L_e7;
  // [栈深重同步 1 -> 0]
  e = 0;
  if (!((undefined === i.exitingBranch))) goto L_112;
  goto L_1e2;
  // [栈深重同步 1 -> 0]
  n = u.readOptionalTransitionDuration(i.exitingBranch.exitTransition, u.defaultExitDurationMs(i.exitingBranch.kind));
  return Math.max(e, n);   // tail call
}

// fn l  args=2 vars=2 closure=1 cpool=0 bc=184B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i, t
// closure: c
function {
  if (!((i == null))) goto L_b;
  i;
  goto L_2c;
  if (!((t == null))) goto L_35;
  t;
  goto L_56;
  if (!((i == null))) goto L_66;
  i;
  goto L_87;
  if (!((t == null))) goto L_90;
  t;
  goto L_b1;
  return {width: c(undefined.width, undefined.width), height: c(undefined.height, undefined.height)};
}

// fn c  args=2 vars=2 closure=0 cpool=0 bc=104B file=dil_widgets/src/animation/DILAnimatedContainer
// args: i, t
function {
  if (!((undefined !== i))) goto L_66;
  if (!((undefined !== t))) goto L_66;
  if (!(Number.isFinite(i))) goto L_66;
  if (!(Number.isFinite(t))) goto L_66;
  return (i - t);
  return 0;
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=22 bc=922B file=dil_widgets/src/animation/DILAnimatedContainer
// args: require, module, exports
// locals: i, t, e, n, r, s, o, a, h, d, u, DILAnimatedContainer, <class_fields_init>, DILAnimatedContainer#1, m, l, c, v
function {
  m = function m;
  l = function l;
  c = function c;
  let v;
  let DILAnimatedContainer#1;
  let u;
  let d;
  let h;
  let a;
  let o;
  let s;
  let r;
  let n;
  let e;
  let t;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILAnimatedContainer = undefined;
  i = require("valdi_core/src/JSX").jsx;
  t = i.makeNodePrototype("view", undefined, "yuNpryIQRdsD5v4u");
  e = i.makeNodePrototype("view", undefined, "ScIOz2HHnE92cuXE");
  n = require("dil_core/src/DILTimer");
  r = require("dil_core/src/layout/DILAutoSpacingAttributes");
  s = require("valdi_core/src/Component");
  o = require("valdi_core/src/ElementRef");
  a = require("valdi_core/src/Style");
  h = require("valdi_core/src/utils/Callback");
  d = require("./DILAnimator");
  u = require("./DILTransitionAttributes");
  let DILAnimatedContainer;
  let <class_fields_init>;
  class DILAnimatedContainer extends s.StatefulComponent { ... }
  <proto:DILAnimatedContainer>.onCreate = function <atom:0>;
  <proto:DILAnimatedContainer>.onViewModelUpdate = function <atom:0>;
  <proto:DILAnimatedContainer>.onDestroy = function <atom:0>;
  <proto:DILAnimatedContainer>.transitionTargetFromViewModel = function <atom:0>;
  <proto:DILAnimatedContainer>.startTransitionToTarget = function <atom:0>;
  <proto:DILAnimatedContainer>.finishTransition = function <atom:0>;
  <proto:DILAnimatedContainer>.onRender = function <atom:0>;
  <proto:DILAnimatedContainer>.shouldRunInitialTransition = function <atom:0>;
  <proto:DILAnimatedContainer>.scheduleEnterTransition = function <atom:0>;
  <proto:DILAnimatedContainer>.animateBranchPhase = function <atom:0>;
  <proto:DILAnimatedContainer>.scheduleTimeout = function <atom:0>;
  <proto:DILAnimatedContainer>.commitContainerLayoutTransition = function <atom:0>;
  <proto:DILAnimatedContainer>.updateContainerSize = function <atom:0>;
  <proto:DILAnimatedContainer>.completeContainerResize = function <atom:0>;
  <proto:DILAnimatedContainer>.onBranchLayout = function <atom:0>;
  <proto:DILAnimatedContainer>.animateContainerToSize = function <atom:0>;
  <proto:DILAnimatedContainer>.renderBranch = function <atom:0>;
  <proto:DILAnimatedContainer>.refreshRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILAnimatedContainer>;
  DILAnimatedContainer = function <atom:0>;
  // close_loc <class_fields_init>
  DILAnimatedContainer#1 = function <atom:0>;
  exports.DILAnimatedContainer = DILAnimatedContainer#1;
  v = {container: new a.Style({position: "relative", minWidth: 0, minHeight: 0, flexShrink: 1}), entry: new a.Style({minWidth: 0, minHeight: 0, flexShrink: 1}), measuredEntry: new a.Style({minWidth: 0, minHeight: 0, flexShrink: 0}), widthEntry: new a.Style({minWidth: 0, minHeight: 0, flexShrink: 0, alignSelf: "flex-start"}), absoluteEntry: new a.Style({position: "absolute", top: 0, left: 0, right: 0, minWidth: 0, minHeight: 0, flexShrink: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/animation/DILAnimatedContainer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
