// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=51B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.renderer = n;
  this.nextAnimationId = 1;
  this.scheduledAnimations = [];
  return;
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=0 bc=377B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n, t, i, o
// locals: s, e, this
// closure: a
function {
  this = this;
  let e;
  let s;
  s = this.nextAnimationId;
  e = Math.max(0, Math.round(t));
  this.nextAnimationId = (this.nextAnimationId + 1);
  this.scheduledAnimations.push({animation: o, animationOptions: i, animationOptionsKey: a(i, e), durationMs: e, id: s, startMs: Math.max(0, Math.round(n))});
  return s;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n
// closure: this
function {
  return this.startAnimationGroup(n);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/animation/KeyFrameAnimator
function {
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=2 bc=213B file=dil_widgets/src/animation/KeyFrameAnimator
// locals: n, this
// closure: i
function {
  this = this;
  let n;
  n = i(this.scheduledAnimations);
  if (!((0 === n.length))) goto L_5c;
  return Promise.resolve();
  return Promise.all(n.map(function <atom:0>)).then(function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=40B file=dil_widgets/src/animation/KeyFrameAnimator
// closure: this, n, t
function {
  this.runAnimationGroup(n, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=43B file=dil_widgets/src/animation/KeyFrameAnimator
// args: t
// closure: this, n
function {
  setTimeout(function <atom:0>, n.startMs);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=14B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n
// locals: this
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=130B file=dil_widgets/src/animation/KeyFrameAnimator
// locals: t
// closure: n
function {
  let t;
  for (const t of n.animations) {
    if (!((t.animation.prepare == null))) goto L_77;
    t.animation.prepare;
    t.animation;
    goto L_7a;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=102B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n
// closure: a, t
function {
  if (!((n.animation.cleanup == null))) goto L_4c;
  n.animation.cleanup;
  n.animation;
  goto L_4f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  a = (a - 1);
  (a - 1);
  if (!((0 === a))) goto L_65;
  t();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=61B file=dil_widgets/src/animation/KeyFrameAnimator
// locals: n
// closure: i, this, s
function {
  let n;
  for (const n of i) {
    this.runMatchingAnimationGroup(n, s);
  }
  return;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=3 bc=267B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n, t
// locals: i, a, s, e, this
// closure: o
function {
  this = this;
  let e;
  let s;
  let a;
  let i;
  this.renderer.batchUpdates(function <atom:0>);
  i = o(n.animations);
  a = n.animations.length;
  s = function <atom:0>;
  e = function <atom:0>;
  if (!((i.length > 1))) goto L_106;
  goto L_10a;
  // [栈深重同步 1 -> 0]
  e();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=54B file=dil_widgets/src/animation/KeyFrameAnimator
// locals: n
// closure: t, i
function {
  let n;
  for (const n of t.animations) {
    i(n);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=87B file=dil_widgets/src/animation/KeyFrameAnimator
// closure: t, i, a, this
function {
  if ((a)) goto L_56;
  a = true;
  true;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=121B file=dil_widgets/src/animation/KeyFrameAnimator
// locals: n
// closure: t
function {
  let n;
  for (const n of t.animations) {
    n.animation.animate();
  }
  return;
}

// fn <atom:0>  args=2 vars=9 closure=1 cpool=2 bc=654B file=dil_widgets/src/animation/KeyFrameAnimator
// args: t, i
// locals: n, o, a, s, e, r, this
// closure: n
function {
  this = this;
  let r;
  let e;
  let s;
  let a;
  let o;
  if (!((undefined === t.animationOptions))) goto L_df;
  let n;
  for (const n of t.animations) {
    n.animation.animate();
    this.scheduleCompletion(n, i);
  }
  return;
  o = t.animations[0];
  a = false;
  s = function <atom:0>;
  e = function <atom:0>;
  if (!((0 === o.durationMs))) goto L_1e6;
  this.renderer.batchUpdates(e);
  if (!((t.animationOptions.completion == null))) goto L_1da;
  t.animationOptions.completion;
  t.animationOptions;
  goto L_1df;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, false);
  s();
  return;
  r = n(t.animationOptions, o, s);
  this.renderer.animate(r, e);
  setTimeout(s, o.durationMs);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=18B file=dil_widgets/src/animation/KeyFrameAnimator
// closure: i, t, n
function {
  if ((i)) goto L_11;
  i = true;
  true;
  t(n);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=105B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n, t
// locals: i, o
function {
  let o;
  let i;
  i = false;
  o = function <atom:0>;
  if (!((n.durationMs > 0))) goto L_64;
  goto L_68;
  // [栈深重同步 1 -> 0]
  o();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=51B file=dil_widgets/src/animation/KeyFrameAnimator
// args: t
// closure: n, i
function {
  if (!((n.completion == null))) goto L_2b;
  n.completion;
  n;
  goto L_2f;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t);
  i();
  return;
}

// fn n  args=3 vars=3 closure=0 cpool=1 bc=63B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n, t, i
function {
  null;
  n;
  return {duration: (t.durationMs / 1000), completion: function <atom:0>};
}

// fn t  args=2 vars=2 closure=0 cpool=0 bc=211B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n, t
function {
  if (!((n.startMs !== t.startMs))) goto L_8d;
  return (n.startMs - t.startMs);
  return (n.id - t.id);
}

// fn i  args=1 vars=6 closure=1 cpool=0 bc=369B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n
// locals: i, o, a, s, t
// closure: t
function {
  let s;
  let a;
  let o;
  let i;
  // append([], 0, n)
  n;
  i = [].sort(t);
  o = [];
  a = undefined;
  s = [];
  let t;
  for (const t of i) {
    if (!((undefined !== a))) goto L_80;
    if (((t.startMs === a))) goto L_f6;
    if (!((undefined !== a))) goto L_c5;
    o.push({animations: s, startMs: a});
    s = [];
    [];
    a = t.startMs;
    t.startMs;
    s.push(t);
  }
  if (!((undefined !== a))) goto L_16c;
  o.push({animations: s, startMs: a});
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=72B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n
// closure: i
function {
  return (n.animationOptionsKey === i.animationOptionsKey);
}

// fn o  args=1 vars=5 closure=0 cpool=1 bc=387B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n
// locals: t, i, n#1, o
function {
  let t;
  t = [];
  let i;
  // close_loc i
  for (const i of n) {
    let n#1;
    n#1 = t.findIndex(function <atom:0>);
    if (!((-1 !== n#1))) goto L_ea;
    let o;
    o = t[n#1];
    // append([], 0, o.animations)
    [][o.animations] = i;
    (i ++);
    t[n#1] = {animationOptionsKey: o.animationOptionsKey, animationOptions: o.animationOptions, animations: []};
    // close_loc i
   continue;
    t.push({animationOptionsKey: i.animationOptionsKey, animationOptions: i.animationOptions, animations: [i]});
    // close_loc i
  }
  // close_loc i
  return t;
}

// fn a  args=2 vars=2 closure=2 cpool=0 bc=177B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n, t
// closure: s, e
function {
  if (!((undefined === n))) goto L_3e;
  return ["none", String(t)].join(",");
  return ["preset", String(t), String(n.beginFromCurrentState), String(s(n)), String(e(n))].join(",");
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=46B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n
function {
  if (!(("crossfade" in n))) goto L_2c;
  return n.crossfade;
  return undefined;
}

// fn e  args=1 vars=1 closure=0 cpool=0 bc=46B file=dil_widgets/src/animation/KeyFrameAnimator
// args: n
function {
  if (!(("curve" in n))) goto L_2c;
  return n.curve;
  return undefined;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=14 bc=182B file=dil_widgets/src/animation/KeyFrameAnimator
// args: require, module, exports
// locals: KeyFrameAnimator, <class_fields_init>, KeyFrameAnimator#1, n, t, i, o, a, s, e
function {
  n = function n;
  t = function t;
  i = function i;
  o = function o;
  a = function a;
  s = function s;
  e = function e;
  let KeyFrameAnimator#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.KeyFrameAnimator = undefined;
  let KeyFrameAnimator;
  let <class_fields_init>;
  class KeyFrameAnimator extends undefined { ... }
  <proto:KeyFrameAnimator>.addAnimation = function <atom:0>;
  <proto:KeyFrameAnimator>.start = function <atom:0>;
  <proto:KeyFrameAnimator>.startAnimationGroup = function <atom:0>;
  <proto:KeyFrameAnimator>.runAnimationGroup = function <atom:0>;
  <proto:KeyFrameAnimator>.runMatchingAnimationGroup = function <atom:0>;
  <proto:KeyFrameAnimator>.scheduleCompletion = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:KeyFrameAnimator>;
  KeyFrameAnimator = function <atom:0>;
  // close_loc <class_fields_init>
  KeyFrameAnimator#1 = function <atom:0>;
  exports.KeyFrameAnimator = KeyFrameAnimator#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/animation/KeyFrameAnimator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
