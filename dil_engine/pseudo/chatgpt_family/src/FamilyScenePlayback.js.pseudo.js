// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=87B file=chatgpt_family/src/FamilyScenePlayback
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.driver = t;
  this.generation = 0;
  this.started = false;
  this.settled = false;
  this.destroyed = false;
  this.cancellations = [];
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=65B file=chatgpt_family/src/FamilyScenePlayback
// locals: this
function {
  this = this;
  this.cancel();
  this.started = false;
  this.settled = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=53B file=chatgpt_family/src/FamilyScenePlayback
// locals: this
function {
  this = this;
  this.cancel();
  this.settled = true;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=120B file=chatgpt_family/src/FamilyScenePlayback
// closure: this, n, r
function {
  if ((this.destroyed)) goto L_77;
  if (((n !== this.generation))) goto L_77;
  r.changes();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=350B file=chatgpt_family/src/FamilyScenePlayback
// locals: t
// closure: this, n, r
function {
  let t;
  if ((this.destroyed)) goto L_4f;
  if (!((n !== this.generation))) goto L_52;
  return;
  if (!((r.prepare == null))) goto L_7f;
  r.prepare;
  r;
  goto L_82;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  t = this.driver.animate(r.durationSeconds, function <atom:0>, r.controlPoints);
  this.cancellations.push(t);
  return;
}

// fn <atom:0>  args=4 vars=8 closure=0 cpool=1 bc=827B file=chatgpt_family/src/FamilyScenePlayback
// args: t, e, s, i
// locals: a, n, r, this
function {
  this = this;
  let n;
  let a;
  if (!(this.destroyed)) goto L_2d;
  return;
  if (!(!t.laidOut)) goto L_cb;
  this.cancel();
  if ((this.settled)) goto L_c1;
  this.settled = this.started;
  return;
  if (!(t.active)) goto L_113;
  a = t.visible;
  if ((t.reducedMotion)) goto L_13e;
  if (!(!a)) goto L_1e5;
  this.cancel();
  i();
  if ((this.settled)) goto L_1db;
  if ((this.started)) goto L_1db;
  this.settled = t.reducedMotion;
  return;
  if (!(this.settled)) goto L_20d;
  i();
  return;
  if (!(this.started)) goto L_232;
  return;
  this.started = true;
  if (!((s == null))) goto L_247;
  s;
  goto L_248;
  undefined();
  n = this.generation;
  let r;
  // close_loc r
  for (const r of e) {
    this.cancellations.push(this.driver.schedule(r.delayMilliseconds, function <atom:0>));
    // close_loc r
  }
  // close_loc r
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=123B file=chatgpt_family/src/FamilyScenePlayback
// locals: this
function {
  this = this;
  this.cancel();
  if ((this.settled)) goto L_71;
  this.settled = this.started;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=52B file=chatgpt_family/src/FamilyScenePlayback
// locals: this
function {
  this = this;
  this.destroyed = true;
  this.cancel();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=154B file=chatgpt_family/src/FamilyScenePlayback
// locals: t, e, this
function {
  this = this;
  let t;
  this.generation = (this.generation ++);
  t = this.cancellations;
  this.cancellations = [];
  let e;
  for (const e of t) {
    e.cancel();
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=chatgpt_family/src/FamilyScenePlayback
// closure: s
function {
  return clearTimeout(s);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=26B file=chatgpt_family/src/FamilyScenePlayback
// args: t, e
// locals: s
function {
  let s;
  s = setTimeout(e, t);
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=122B file=chatgpt_family/src/FamilyScenePlayback
// args: e, s, i
// locals: a
// closure: t
function {
  let a;
  if (!((i == null))) goto L_3d;
  i;
  a = t.createAnimation({duration: e, controlPoints: [(1 / 3), 1, (2 / 3), 1], beginFromCurrentState: true}, s);
  a.start();
  return a;
}

// fn t  args=1 vars=1 closure=1 cpool=2 bc=33B file=chatgpt_family/src/FamilyScenePlayback
// args: t
// closure: FamilyScenePlayback
function {
  return new FamilyScenePlayback({schedule: function <atom:0>, animate: function <atom:0>});
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=8 bc=180B file=chatgpt_family/src/FamilyScenePlayback
// args: require, module, exports
// locals: FamilyScenePlayback, <class_fields_init>, FamilyScenePlayback#1, t
function {
  t = function t;
  let FamilyScenePlayback#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FamilyScenePlayback = undefined;
  exports.createFamilyScenePlayback = undefined;
  let FamilyScenePlayback;
  let <class_fields_init>;
  class FamilyScenePlayback extends undefined { ... }
  <proto:FamilyScenePlayback>.reset = function <atom:0>;
  <proto:FamilyScenePlayback>.settle = function <atom:0>;
  <proto:FamilyScenePlayback>.update = function <atom:0>;
  <proto:FamilyScenePlayback>.invalidateLayout = function <atom:0>;
  <proto:FamilyScenePlayback>.destroy = function <atom:0>;
  <proto:FamilyScenePlayback>.cancel = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FamilyScenePlayback>;
  FamilyScenePlayback = function <atom:0>;
  // close_loc <class_fields_init>
  FamilyScenePlayback#1 = function <atom:0>;
  exports.FamilyScenePlayback = FamilyScenePlayback#1;
  exports.createFamilyScenePlayback = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_family/src/FamilyScenePlayback
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
