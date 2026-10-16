// fn <atom:0>  args=10 vars=11 closure=2 cpool=0 bc=188B file=dil_widgets/src/animation/DILAnimator
// args: e, i, n, a, s, r, h, o, u, l
// locals: this
// closure: <class_fields_init>, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.id = e;
  this.key = i;
  this.kindValue = n;
  this.phaseValue = a;
  this.layoutValue = s;
  this.usesContainerLayoutTransitionValue = r;
  this.animatingDimensionValue = h;
  this.initialValue = o;
  this.enterValue = u;
  this.exitValue = l;
  this.elementRef = new t.ElementRef();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return this.kindValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return this.phaseValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return this.layoutValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=191B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  if (!(("initial" === this.phaseValue))) goto L_4f;
  return this.initialValue;
  if (!(("exiting" === this.phaseValue))) goto L_9c;
  return this.exitValue;
  return this.enterValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=114B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  if (!(("exiting" === this.phaseValue))) goto L_4f;
  return this.enterValue;
  return this.transition;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return this.enterValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return this.exitValue;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  this.exitValue = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=43B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return ("absolute" === this.layoutValue);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return this.usesContainerLayoutTransitionValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=151B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  if ((this.animatingDimensionValue)) goto L_96;
  if (!(!this.usesContainerLayoutTransitionValue)) goto L_96;
  return this.isCollapsedDimensionPhase(this.transition);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  this.phaseValue = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  this.layoutValue = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  this.usesContainerLayoutTransitionValue = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  this.animatingDimensionValue = t;
  return;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=47B file=dil_widgets/src/animation/DILAnimator
// args: t, e, i, n
// locals: this
function {
  this = this;
  this.kindValue = t;
  this.initialValue = e;
  this.enterValue = i;
  this.exitValue = n;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=94B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  if ((("initial" === this.phaseValue))) goto L_56;
  if (!(("exiting" === this.phaseValue))) goto L_5d;
  return (undefined !== t);
}

// fn <atom:0>  args=5 vars=6 closure=1 cpool=0 bc=73B file=dil_widgets/src/animation/DILAnimator
// args: t, e, i, n, a
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.version = t;
  this.enteringBranch = e;
  this.exitingBranch = i;
  this.shouldRunEnterTransition = n;
  this.usesContainerLayoutTransition = a;
  return;
}

// fn <atom:0>  args=6 vars=8 closure=1 cpool=0 bc=130B file=dil_widgets/src/animation/DILAnimator
// args: t, e, i, n, a, s
// locals: r, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let r;
  this.nextBranchIdValue = 0;
  this.transitionVersionValue = 0;
  if (!(s)) goto L_34;
  goto L_39;
  // [栈深重同步 1 -> 0]
  r = "entered";
  this.currentKeyValue = t;
  this.branchesValue = [this.createBranch(t, e, r, i, n, a)];
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return this.currentKeyValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return this.branchesValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return this.containerWidthValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return this.containerHeightValue;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=dil_widgets/src/animation/DILAnimator
// args: t
function {
  return t.clipsDimension;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=155B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  if (((undefined !== this.containerWidthValue))) goto L_9a;
  if (((undefined !== this.containerHeightValue))) goto L_9a;
  return this.branchesValue.some(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// args: e
// closure: t
function {
  return (e.key === t);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=74B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  return this.branchesValue.find(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=dil_widgets/src/animation/DILAnimator
// args: e
// closure: t
function {
  return (e.id === t.id);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=74B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  return this.branchesValue.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=114B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  if (!((this.currentKeyValue === t.key))) goto L_71;
  return this.hasBranch(t);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/animation/DILAnimator
// locals: this
function {
  this = this;
  return this.getBranch(this.currentKeyValue);   // tail call
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=122B file=dil_widgets/src/animation/DILAnimator
// args: t, e, i, n
// locals: this
function {
  this = this;
  if (!((this.getBranch(this.currentKeyValue) == null))) goto L_51;
  this.getBranch(this.currentKeyValue);
  goto L_79;
  undefined.setTransitions(t, e, i, n);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=dil_widgets/src/animation/DILAnimator
// args: e
// closure: u, t
function {
  if (!((e.key !== u))) goto L_4e;
  return (e.key !== t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=dil_widgets/src/animation/DILAnimator
// args: e
// closure: t
function {
  return (e.key !== t);
}

// fn <atom:0>  args=8 vars=15 closure=1 cpool=2 bc=902B file=dil_widgets/src/animation/DILAnimator
// args: t, e, i, n, a, s, r, h
// locals: o, u, l, c, V, d, this
// closure: DILAnimatorTransition
function {
  this = this;
  let d;
  let V;
  let c;
  let l;
  let u;
  let o;
  this.clearContainerLayoutTransition();
  this.transitionVersionValue = (this.transitionVersionValue + 1);
  o = this.transitionVersionValue;
  u = this.currentKeyValue;
  l = this.getBranch(u);
  if (!((undefined === i))) goto L_e8;
  goto L_ed;
  // [栈深重同步 1 -> 0]
  c = "initial";
  V = this.createBranch(t, e, c, i, n, a);
  this.currentKeyValue = t;
  if (((undefined === l))) goto L_13a;
  if (!((undefined === s))) goto L_1c6;
  // append([], 0, this.branchesValue.filter(function <atom:0>))
  [][this.branchesValue.filter(function <atom:0>)] = V;
  (V ++);
  this.branchesValue = [];
  if (!(("initial" === c))) goto L_1b5;
  goto L_1b6;
  // [栈深重同步 4 -> 3]
  return new DILAnimatorTransition(o, undefined, undefined, ("initial" === c), false);
  l.setPhase("exiting");
  d = ("Animate" === l.kind);
  if (!(d)) goto L_2f4;
  l.setLayout("absolute");
  l.setUsesContainerLayoutTransition(true);
  V.setLayout("absolute");
  V.setUsesContainerLayoutTransition(true);
  this.containerWidthValue = r;
  this.containerHeightValue = h;
  h;
  // append([], 0, this.branchesValue.filter(function <atom:0>))
  [][this.branchesValue.filter(function <atom:0>)] = V;
  (V ++);
  this.branchesValue = [];
  if ((d)) goto L_36b;
  if (!(("initial" === c))) goto L_372;
  goto L_373;
  // [栈深重同步 4 -> 3]
  return new DILAnimatorTransition(o, undefined, l, ("initial" === c), d);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=90B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  if (!((this.getBranch(t) == null))) goto L_30;
  this.getBranch(t);
  goto L_59;
  undefined.setLayout("flow");
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=154B file=dil_widgets/src/animation/DILAnimator
// args: t, e
// locals: this
function {
  this = this;
  if (!((this.transitionVersionValue === t))) goto L_99;
  if (!(this.hasBranch(e))) goto L_99;
  return (this.currentKeyValue === e.key);
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=38B file=dil_widgets/src/animation/DILAnimator
// args: t, e
// locals: this
function {
  this = this;
  if (!(("width" === t))) goto L_19;
  this.containerWidthValue = e;
  goto L_25;
  // [栈深重同步 1 -> 0]
  this.containerHeightValue = e;
  e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=114B file=dil_widgets/src/animation/DILAnimator
// locals: t, this
function {
  this = this;
  this.containerWidthValue = undefined;
  this.containerHeightValue = undefined;
  let t;
  for (const t of this.branchesValue) {
    t.setUsesContainerLayoutTransition(false);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=138B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.getBranch(t);
  if (!((undefined !== e))) goto L_89;
  if (!((this.currentKeyValue === t))) goto L_89;
  e.setPhase("entered");
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=161B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  if ((!this.hasBranch(t))) goto L_72;
  if (!(!(this.currentKeyValue === t.key))) goto L_a0;
  this.removeBranch(t);
  return true;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=86B file=dil_widgets/src/animation/DILAnimator
// args: t, e
// locals: this
function {
  this = this;
  if (!((this.getBranch(t) == null))) goto L_30;
  this.getBranch(t);
  goto L_55;
  undefined.setAnimatingDimension(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=dil_widgets/src/animation/DILAnimator
// args: e
// closure: t
function {
  return (e.id !== t.id);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=85B file=dil_widgets/src/animation/DILAnimator
// args: t
// locals: this
function {
  this = this;
  this.branchesValue = this.branchesValue.filter(function <atom:0>);
  return;
}

// fn <atom:0>  args=6 vars=8 closure=1 cpool=0 bc=115B file=dil_widgets/src/animation/DILAnimator
// args: t, e, i, n, a, s
// locals: r, this
// closure: DILAnimatorBranch
function {
  this = this;
  let r;
  r = this.nextBranchIdValue;
  this.nextBranchIdValue = (this.nextBranchIdValue + 1);
  return new DILAnimatorBranch(r, t, e, i, "flow", false, false, n, a, s);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=40 bc=520B file=dil_widgets/src/animation/DILAnimator
// args: require, module, exports
// locals: t, DILAnimatorBranch, <class_fields_init>, DILAnimatorBranch#1, DILAnimatorTransition, <class_fields_init>#1, DILAnimatorTransition#1, DILAnimator, <class_fields_init>#2, DILAnimator#1
function {
  let DILAnimator#1;
  let DILAnimatorTransition#1;
  let DILAnimatorBranch#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILAnimatorBranch = undefined;
  exports.DILAnimatorTransition = undefined;
  exports.DILAnimator = undefined;
  t = require("valdi_core/src/ElementRef");
  let DILAnimatorBranch;
  let <class_fields_init>;
  class DILAnimatorBranch extends undefined { ... }
  <proto:DILAnimatorBranch>.kind = function <atom:0>;
  <proto:DILAnimatorBranch>.phase = function <atom:0>;
  <proto:DILAnimatorBranch>.layout = function <atom:0>;
  <proto:DILAnimatorBranch>.transition = function <atom:0>;
  <proto:DILAnimatorBranch>.renderTransition = function <atom:0>;
  <proto:DILAnimatorBranch>.enterTransition = function <atom:0>;
  <proto:DILAnimatorBranch>.exitTransition = function <atom:0>;
  <proto:DILAnimatorBranch>.exitTransition = function <atom:0>;
  <proto:DILAnimatorBranch>.isAbsolute = function <atom:0>;
  <proto:DILAnimatorBranch>.usesContainerLayoutTransition = function <atom:0>;
  <proto:DILAnimatorBranch>.clipsDimension = function <atom:0>;
  <proto:DILAnimatorBranch>.setPhase = function <atom:0>;
  <proto:DILAnimatorBranch>.setLayout = function <atom:0>;
  <proto:DILAnimatorBranch>.setUsesContainerLayoutTransition = function <atom:0>;
  <proto:DILAnimatorBranch>.setAnimatingDimension = function <atom:0>;
  <proto:DILAnimatorBranch>.setTransitions = function <atom:0>;
  <proto:DILAnimatorBranch>.isCollapsedDimensionPhase = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILAnimatorBranch>;
  DILAnimatorBranch = function <atom:0>;
  // close_loc <class_fields_init>
  DILAnimatorBranch#1 = function <atom:0>;
  exports.DILAnimatorBranch = DILAnimatorBranch#1;
  let DILAnimatorTransition;
  let <class_fields_init>#1;
  class DILAnimatorTransition extends undefined { ... }
  <class_fields_init>#1 = undefined;
  <proto:DILAnimatorTransition>;
  DILAnimatorTransition = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILAnimatorTransition#1 = function <atom:0>;
  exports.DILAnimatorTransition = DILAnimatorTransition#1;
  let DILAnimator;
  let <class_fields_init>#2;
  class DILAnimator extends undefined { ... }
  <proto:DILAnimator>.currentKey = function <atom:0>;
  <proto:DILAnimator>.branches = function <atom:0>;
  <proto:DILAnimator>.containerWidth = function <atom:0>;
  <proto:DILAnimator>.containerHeight = function <atom:0>;
  <proto:DILAnimator>.hasClippedBranch = function <atom:0>;
  <proto:DILAnimator>.getBranch = function <atom:0>;
  <proto:DILAnimator>.hasBranch = function <atom:0>;
  <proto:DILAnimator>.isCurrentBranch = function <atom:0>;
  <proto:DILAnimator>.currentBranch = function <atom:0>;
  <proto:DILAnimator>.updateCurrentBranchTransitions = function <atom:0>;
  <proto:DILAnimator>.transitionTo = function <atom:0>;
  <proto:DILAnimator>.startContainerLayoutTransition = function <atom:0>;
  <proto:DILAnimator>.canCommitContainerLayoutTransition = function <atom:0>;
  <proto:DILAnimator>.setContainerSizeOverride = function <atom:0>;
  <proto:DILAnimator>.clearContainerLayoutTransition = function <atom:0>;
  <proto:DILAnimator>.completeEnter = function <atom:0>;
  <proto:DILAnimator>.completeExit = function <atom:0>;
  <proto:DILAnimator>.setBranchAnimatingDimension = function <atom:0>;
  <proto:DILAnimator>.removeBranch = function <atom:0>;
  <proto:DILAnimator>.createBranch = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:DILAnimator>;
  DILAnimator = function <atom:0>;
  // close_loc <class_fields_init>#2
  DILAnimator#1 = function <atom:0>;
  exports.DILAnimator = DILAnimator#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/animation/DILAnimator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
