// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=67B file=valdi_rxjs/src/scheduler/QueueAction
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
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=138B file=valdi_rxjs/src/scheduler/QueueAction
// args: e, s
// locals: e#1, s#1, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let s#1;
  let e#1;
  e#1 = e;
  if (!((s === undefined))) goto L_15;
  s;
  s = 0;
  s#1 = 0;
  if (!((s > 0))) goto L_2a;
  return super["schedule"].call(this, e, s);
  this.delay = s;
  this.state = e;
  this.scheduler.flush(this);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=103B file=valdi_rxjs/src/scheduler/QueueAction
// args: e, s
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (((s > 0))) goto L_2e;
  if (!(this.closed)) goto L_3f;
  return super["execute"].call(this, e, s);
  return this._execute(e, s);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=0 bc=141B file=valdi_rxjs/src/scheduler/QueueAction
// args: e, s, t
// locals: e#1, s#1, t#1, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let t#1;
  let s#1;
  let e#1;
  e#1 = e;
  s#1 = s;
  if (!((t === undefined))) goto L_1b;
  t;
  t = 0;
  t#1 = 0;
  if (!((null != t))) goto L_26;
  if (((t > 0))) goto L_53;
  if (!((null == t))) goto L_66;
  if (!((this.delay > 0))) goto L_66;
  return super["requestAsyncId"].call(this, e, s, t);
  return e.flush(this);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=177B file=valdi_rxjs/src/scheduler/QueueAction
// args: require, module, exports
// locals: e, QueueAction, <class_fields_init>, QueueAction#1
function {
  let QueueAction#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.QueueAction = undefined;
  e = require("./AsyncAction");
  let QueueAction;
  let <class_fields_init>;
  class QueueAction extends e.AsyncAction { ... }
  <proto:QueueAction>.schedule = function <atom:0>;
  <proto:QueueAction>.execute = function <atom:0>;
  <proto:QueueAction>.requestAsyncId = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:QueueAction>;
  QueueAction = function <atom:0>;
  // close_loc <class_fields_init>
  QueueAction#1 = function <atom:0>;
  exports.QueueAction = QueueAction#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/QueueAction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
