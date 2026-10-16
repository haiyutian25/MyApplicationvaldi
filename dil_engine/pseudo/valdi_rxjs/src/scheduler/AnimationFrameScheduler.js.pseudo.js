// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=525B file=valdi_rxjs/src/scheduler/AnimationFrameScheduler
// args: e
// locals: t, i, s, this
function {
  this = this;
  let s;
  let i;
  let t;
  this._active = true;
  t = this._scheduled;
  this._scheduled = undefined;
  if (((undefined === undefined))) goto L_71;
  i = <to_object>(undefined).actions;
  <to_object>(undefined);
  goto L_75;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_4a;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if ((e)) goto L_a3;
  e = i.shift();
  s = e.execute(e.state, e.delay);
  if ((e.execute(e.state, e.delay))) goto L_173;
  e = i[0];
  if (!(i[0])) goto L_16e;
  if (!((e.id === t))) goto L_16e;
  if ((i.shift())) goto L_a4;
  this._active = false;
  if (!(s)) goto L_20c;
  e = i[0];
  if (!(i[0])) goto L_208;
  if (!((e.id === t))) goto L_208;
  if (!(i.shift())) goto L_208;
  e.unsubscribe();
  goto L_187;
  throw s;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_rxjs/src/scheduler/AnimationFrameScheduler
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=161B file=valdi_rxjs/src/scheduler/AnimationFrameScheduler
// args: require, module, exports
// locals: e, AnimationFrameScheduler, <class_fields_init>, AnimationFrameScheduler#1
function {
  let AnimationFrameScheduler#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AnimationFrameScheduler = undefined;
  e = require("./AsyncScheduler");
  let AnimationFrameScheduler;
  let <class_fields_init>;
  class AnimationFrameScheduler extends e.AsyncScheduler { ... }
  <proto:AnimationFrameScheduler>.flush = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AnimationFrameScheduler>;
  AnimationFrameScheduler = function <atom:0>;
  // close_loc <class_fields_init>
  AnimationFrameScheduler#1 = function <atom:0>;
  exports.AnimationFrameScheduler = AnimationFrameScheduler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/AnimationFrameScheduler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
