// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=168B file=valdi_rxjs/src/scheduler/AsyncScheduler
// args: s, t
// locals: s#1, t#1, this.active_func, new.target, this
// closure: e, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let t#1;
  let s#1;
  s#1 = s;
  if (!((t === undefined))) goto L_5e;
  t;
  t = e.Scheduler.now;
  t#1 = e.Scheduler.now;
  this = new new.target(s, t);
  if (!(<class_fields_init>)) goto L_78;
  <class_fields_init>.call(this);
  new new.target(s, t);
  this.actions = [];
  this._active = false;
  this._scheduled = undefined;
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=408B file=valdi_rxjs/src/scheduler/AsyncScheduler
// args: e
// locals: s, t, this
function {
  this = this;
  let t;
  let s;
  if (((undefined === undefined))) goto L_34;
  s = <to_object>(undefined).actions;
  <to_object>(undefined);
  goto L_38;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  if (!(this._active)) goto L_86;
  s.push(e);
  return;
  t = undefined;
  this._active = true;
  t = e.execute(e.state, e.delay);
  if ((e.execute(e.state, e.delay))) goto L_130;
  e = s.shift();
  if ((s.shift())) goto L_94;
  this._active = false;
  if (!(t)) goto L_197;
  e = s.shift();
  if (!(s.shift())) goto L_193;
  e.unsubscribe();
  goto L_141;
  throw t;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=161B file=valdi_rxjs/src/scheduler/AsyncScheduler
// args: require, module, exports
// locals: e, AsyncScheduler, <class_fields_init>, AsyncScheduler#1
function {
  let AsyncScheduler#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AsyncScheduler = undefined;
  e = require("../Scheduler");
  let AsyncScheduler;
  let <class_fields_init>;
  class AsyncScheduler extends e.Scheduler { ... }
  <proto:AsyncScheduler>.flush = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AsyncScheduler>;
  AsyncScheduler = function <atom:0>;
  // close_loc <class_fields_init>
  AsyncScheduler#1 = function <atom:0>;
  exports.AsyncScheduler = AsyncScheduler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/AsyncScheduler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
