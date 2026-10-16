// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=67B file=valdi_rxjs/src/scheduler/AnimationFrameAction
// args: e, i
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e, i);
  if (!(<class_fields_init>)) goto L_23;
  <class_fields_init>.call(this);
  new new.target(e, i);
  this.scheduler = e;
  this.work = i;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=valdi_rxjs/src/scheduler/AnimationFrameAction
// closure: e
function {
  return e.flush(undefined);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=1 bc=251B file=valdi_rxjs/src/scheduler/AnimationFrameAction
// args: e, n, r
// locals: e#1, n#1, r#1, this, <home_object>
// closure: i
function {
  <home_object> = <special_object 4>;
  this = this;
  let r#1;
  let n#1;
  let e#1;
  e#1 = e;
  n#1 = n;
  if (!((r === undefined))) goto L_1b;
  r;
  r = 0;
  r#1 = 0;
  if (!((null !== r))) goto L_37;
  if (!((r > 0))) goto L_37;
  return super["requestAsyncId"].call(this, e, n, r);
  e.actions.push(this);
  if ((e._scheduled)) goto L_fa;
  e._scheduled = i.animationFrameProvider.requestAnimationFrame(function <atom:0>);
  return i.animationFrameProvider.requestAnimationFrame(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_rxjs/src/scheduler/AnimationFrameAction
// args: e
// closure: n
function {
  return (e.id === n);
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=1 bc=264B file=valdi_rxjs/src/scheduler/AnimationFrameAction
// args: e, n, r
// locals: e#1, n#1, r#1, this, <home_object>
// closure: i
function {
  <home_object> = <special_object 4>;
  this = this;
  let r#1;
  let n#1;
  let e#1;
  e#1 = e;
  n#1 = n;
  if (!((r === undefined))) goto L_1b;
  r;
  r = 0;
  r#1 = 0;
  if (!((null != r))) goto L_26;
  if (((r > 0))) goto L_53;
  if (!((null == r))) goto L_65;
  if (!((this.delay > 0))) goto L_65;
  return super["recycleAsyncId"](e, n, r);   // tail call
  if ((e.actions.some(function <atom:0>))) goto L_107;
  i.animationFrameProvider.cancelAnimationFrame(n);
  e._scheduled = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=181B file=valdi_rxjs/src/scheduler/AnimationFrameAction
// args: require, module, exports
// locals: e, i, AnimationFrameAction, <class_fields_init>, AnimationFrameAction#1
function {
  let AnimationFrameAction#1;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AnimationFrameAction = undefined;
  e = require("./AsyncAction");
  i = require("./animationFrameProvider");
  let AnimationFrameAction;
  let <class_fields_init>;
  class AnimationFrameAction extends e.AsyncAction { ... }
  <proto:AnimationFrameAction>.requestAsyncId = function <atom:0>;
  <proto:AnimationFrameAction>.recycleAsyncId = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AnimationFrameAction>;
  AnimationFrameAction = function <atom:0>;
  // close_loc <class_fields_init>
  AnimationFrameAction#1 = function <atom:0>;
  exports.AnimationFrameAction = AnimationFrameAction#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/AnimationFrameAction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
