// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_rxjs/src/scheduler/VirtualTimeScheduler
// closure: this
function {
  return this.frame;
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=1 bc=111B file=valdi_rxjs/src/scheduler/VirtualTimeScheduler
// args: e, t
// locals: e#1, t#1, this, this.active_func, new.target
// closure: VirtualAction, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let t#1;
  let e#1;
  if (!((e === undefined))) goto L_1b;
  e;
  e = VirtualAction;
  e#1 = VirtualAction;
  if (!((t === undefined))) goto L_26;
  t;
  t = (1 / 0);
  t#1 = (1 / 0);
  this = new new.target(e, function <atom:0>);
  if (!(<class_fields_init>)) goto L_42;
  <class_fields_init>.call(this);
  new new.target(e, function <atom:0>);
  this.maxFrames = t;
  this.frame = 0;
  this.index = -1;
  return this;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=467B file=valdi_rxjs/src/scheduler/VirtualTimeScheduler
// locals: e, t, i, r, this
function {
  this = this;
  let r;
  let i;
  let t;
  let e;
  if (((undefined === undefined))) goto L_5e;
  e = <to_object>(undefined).actions;
  t = <to_object>(undefined).maxFrames;
  <to_object>(undefined);
  goto L_63;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_14;
  // [栈深重同步 1 -> 0]
  i = undefined;
  r = undefined;
  r = e[0];
  if (!(e[0])) goto L_172;
  if (!((r.delay <= t))) goto L_172;
  e.shift();
  this.frame = r.delay;
  i = r.execute(r.state, r.delay);
  if (!(!r.execute(r.state, r.delay))) goto L_172;
  goto L_67;
  if (!(i)) goto L_1d2;
  r = e.shift();
  if (!(e.shift())) goto L_1ce;
  r.unsubscribe();
  goto L_177;
  throw i;
  return;
}

// fn <atom:0>  args=3 vars=9 closure=1 cpool=0 bc=189B file=valdi_rxjs/src/scheduler/VirtualTimeScheduler
// args: e, t, i
// locals: e#1, t#1, i#1, this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let i#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((i === undefined))) goto L_4f;
  i;
  e#1.index = (e#1.index + 1);
  i = (e#1.index + 1);
  i#1 = (e#1.index + 1);
  this = new new.target(e, t);
  if (!(<class_fields_init>)) goto L_6a;
  <class_fields_init>.call(this);
  new new.target(e, t);
  this.scheduler = e;
  this.work = t;
  this.index = i;
  this.active = true;
  e.index = i;
  this.index = i;
  return this;
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=365B file=valdi_rxjs/src/scheduler/VirtualTimeScheduler
// args: e, i
// locals: e#1, i#1, t, this, <home_object>
// closure: VirtualAction, t
function {
  <home_object> = <special_object 4>;
  this = this;
  let i#1;
  let e#1;
  e#1 = e;
  if (!((i === undefined))) goto L_16;
  i;
  i = 0;
  i#1 = 0;
  if (!(Number.isFinite(i))) goto L_127;
  let t;
  if (!(!this.id)) goto L_7d;
  return super["schedule"](e, i);   // tail call
  this.active = false;
  t = new VirtualAction(this.scheduler, this.work);
  this.add(t);
  return t.schedule(e, i);   // tail call
  return t.Subscription.EMPTY;
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=244B file=valdi_rxjs/src/scheduler/VirtualTimeScheduler
// args: e, t, i
// locals: e#1, t#1, i#1, r, this
// closure: VirtualAction
function {
  this = this;
  let i#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((i === undefined))) goto L_18;
  i;
  i = 0;
  i#1 = 0;
  let r;
  this.delay = (e.frame + i);
  if (((undefined === undefined))) goto L_77;
  r = <to_object>(undefined).actions;
  <to_object>(undefined);
  goto L_7b;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_50;
  // [栈深重同步 1 -> 0]
  r.push(this);
  r.sort(VirtualAction.sortActions);
  return true;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=23B file=valdi_rxjs/src/scheduler/VirtualTimeScheduler
// args: e, t, i
// locals: e#1, t#1, i#1
function {
  let i#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((i === undefined))) goto L_15;
  i;
  i = 0;
  i#1 = 0;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=59B file=valdi_rxjs/src/scheduler/VirtualTimeScheduler
// args: e, t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((true === this.active))) goto L_3a;
  return super["_execute"](e, t);   // tail call
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=297B file=valdi_rxjs/src/scheduler/VirtualTimeScheduler
// args: e, t
function {
  if (!((e.delay === t.delay))) goto L_de;
  if (!((e.index === t.index))) goto L_93;
  return 0;
  if (!((e.index > t.index))) goto L_dc;
  return 1;
  return -1;
  if (!((e.delay > t.delay))) goto L_127;
  return 1;
  return -1;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=8 bc=332B file=valdi_rxjs/src/scheduler/VirtualTimeScheduler
// args: require, module, exports
// locals: e, t, i, VirtualTimeScheduler, <class_fields_init>, VirtualTimeScheduler#1, VirtualAction, <class_fields_init>#1, VirtualAction#1
function {
  let VirtualAction#1;
  let VirtualTimeScheduler#1;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.VirtualTimeScheduler = undefined;
  exports.VirtualAction = undefined;
  e = require("./AsyncAction");
  t = require("../Subscription");
  i = require("./AsyncScheduler");
  let VirtualTimeScheduler;
  let <class_fields_init>;
  class VirtualTimeScheduler extends i.AsyncScheduler { ... }
  <proto:VirtualTimeScheduler>.flush = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:VirtualTimeScheduler>;
  VirtualTimeScheduler = function <atom:0>;
  // close_loc <class_fields_init>
  VirtualTimeScheduler#1 = function <atom:0>;
  exports.VirtualTimeScheduler = VirtualTimeScheduler#1;
  VirtualTimeScheduler#1.frameTimeFactor = 10;
  let VirtualAction;
  let <class_fields_init>#1;
  class VirtualAction extends e.AsyncAction { ... }
  <proto:VirtualAction>.schedule = function <atom:0>;
  <proto:VirtualAction>.requestAsyncId = function <atom:0>;
  <proto:VirtualAction>.recycleAsyncId = function <atom:0>;
  <proto:VirtualAction>._execute = function <atom:0>;
  function <atom:0>.sortActions = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:VirtualAction>;
  VirtualAction = function <atom:0>;
  // close_loc <class_fields_init>#1
  // close_loc VirtualAction
  VirtualAction#1 = function <atom:0>;
  exports.VirtualAction = VirtualAction#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/VirtualTimeScheduler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
