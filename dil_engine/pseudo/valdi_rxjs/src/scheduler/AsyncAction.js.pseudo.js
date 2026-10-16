// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=81B file=valdi_rxjs/src/scheduler/AsyncAction
// args: e, s
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e, s);
  if (!(<class_fields_init>)) goto L_23;
  <class_fields_init>.call(this);
  new new.target(e, s);
  this.scheduler = e;
  this.work = s;
  this.pending = false;
  return this;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=372B file=valdi_rxjs/src/scheduler/AsyncAction
// args: e, s
// locals: e#1, s#1, t, i, this
function {
  this = this;
  let s#1;
  let e#1;
  e#1 = e;
  if (!((s === undefined))) goto L_13;
  s;
  s = 0;
  s#1 = 0;
  let i;
  let t;
  if (!(this.closed)) goto L_42;
  return this;
  this.state = e;
  t = this.id;
  i = this.scheduler;
  if (!((null != t))) goto L_d8;
  this.id = this.recycleAsyncId(i, t, s);
  this.recycleAsyncId(i, t, s);
  this.pending = true;
  this.delay = s;
  if ((this.id)) goto L_168;
  this.id = this.requestAsyncId(i, this.id, s);
  return this;
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=169B file=valdi_rxjs/src/scheduler/AsyncAction
// args: e, t, i
// locals: e#1, t#1, i#1, this
// closure: s
function {
  this = this;
  let i#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((i === undefined))) goto L_17;
  i;
  i = 0;
  i#1 = 0;
  return s.intervalProvider.setInterval(e.flush.bind(e, this), i);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=182B file=valdi_rxjs/src/scheduler/AsyncAction
// args: e, t, i
// locals: e#1, t#1, i#1, this
// closure: s
function {
  this = this;
  let i#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((i === undefined))) goto L_17;
  i;
  i = 0;
  i#1 = 0;
  if (!((null != i))) goto L_6c;
  if (!((this.delay === i))) goto L_6c;
  if (!((false === this.pending))) goto L_6c;
  return t;
  s.intervalProvider.clearInterval(t);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=305B file=valdi_rxjs/src/scheduler/AsyncAction
// args: e, s
// locals: t, this
function {
  this = this;
  let t;
  if (!(this.closed)) goto L_2a;
  return;
  this.pending = false;
  t = this._execute(e, s);
  if (!(t)) goto L_67;
  return t;
  if (!((false === this.pending))) goto L_130;
  if (!((null != this.id))) goto L_130;
  this.id = this.recycleAsyncId(this.scheduler, this.id, null);
  this.recycleAsyncId(this.scheduler, this.id, null);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=149B file=valdi_rxjs/src/scheduler/AsyncAction
// args: e, s
// locals: t, i, r, this
function {
  this = this;
  let i;
  let t;
  t = undefined;
  i = false;
  try { // catch -> L_3c
  this.work(e);
  <?>;
  goto L_65;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_64
  i = true;
  true;
  if ((r)) goto L_5c;
  t = new Error("Scheduled action threw falsy error");
  new Error("Scheduled action threw falsy error");
  <?>;
  goto L_65;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(i)) goto L_94;
  this.unsubscribe();
  return t;
  return;
}

// fn <atom:0>  args=0 vars=5 closure=1 cpool=0 bc=366B file=valdi_rxjs/src/scheduler/AsyncAction
// locals: e, s, i, this, <home_object>
// closure: t
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(!this.closed)) goto L_16d;
  let i;
  let s;
  let e;
  if (((undefined === undefined))) goto L_86;
  e = <to_object>(undefined).id;
  s = <to_object>(undefined).scheduler;
  <to_object>(undefined);
  goto L_8a;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_3c;
  // [栈深重同步 1 -> 0]
  if (((undefined === undefined))) goto L_b6;
  i = <to_object>(undefined).actions;
  <to_object>(undefined);
  goto L_bc;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_8f;
  // [栈深重同步 1 -> 0]
  this.scheduler = null;
  this.state = null;
  this.work = null;
  this.pending = false;
  t.arrRemove(i, this);
  if (!((null != e))) goto L_153;
  this.id = this.recycleAsyncId(s, e, null);
  this.recycleAsyncId(s, e, null);
  this.delay = null;
  super["unsubscribe"].call(this);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=7 bc=225B file=valdi_rxjs/src/scheduler/AsyncAction
// args: require, module, exports
// locals: e, s, t, AsyncAction, <class_fields_init>, AsyncAction#1
function {
  let AsyncAction#1;
  let t;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AsyncAction = undefined;
  e = require("./Action");
  s = require("./intervalProvider");
  t = require("../util/arrRemove");
  let AsyncAction;
  let <class_fields_init>;
  class AsyncAction extends e.Action { ... }
  <proto:AsyncAction>.schedule = function <atom:0>;
  <proto:AsyncAction>.requestAsyncId = function <atom:0>;
  <proto:AsyncAction>.recycleAsyncId = function <atom:0>;
  <proto:AsyncAction>.execute = function <atom:0>;
  <proto:AsyncAction>._execute = function <atom:0>;
  <proto:AsyncAction>.unsubscribe = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AsyncAction>;
  AsyncAction = function <atom:0>;
  // close_loc <class_fields_init>
  AsyncAction#1 = function <atom:0>;
  exports.AsyncAction = AsyncAction#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/AsyncAction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
