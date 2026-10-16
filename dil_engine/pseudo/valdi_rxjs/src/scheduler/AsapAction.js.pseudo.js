// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=67B file=valdi_rxjs/src/scheduler/AsapAction
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

// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=324B file=valdi_rxjs/src/scheduler/AsapAction
// args: e, i, t
// locals: e#1, i#1, t#1, this, <home_object>
// closure: s
function {
  <home_object> = <special_object 4>;
  this = this;
  let t#1;
  let i#1;
  let e#1;
  e#1 = e;
  i#1 = i;
  if (!((t === undefined))) goto L_1b;
  t;
  t = 0;
  t#1 = 0;
  if (!((null !== t))) goto L_37;
  if (!((t > 0))) goto L_37;
  return super["requestAsyncId"].call(this, e, i, t);
  e.actions.push(this);
  if ((e._scheduled)) goto L_143;
  e._scheduled = s.immediateProvider.setImmediate(e.flush.bind(e, undefined));
  return s.immediateProvider.setImmediate(e.flush.bind(e, undefined));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_rxjs/src/scheduler/AsapAction
// args: e
// closure: i
function {
  return (e.id === i);
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=1 bc=264B file=valdi_rxjs/src/scheduler/AsapAction
// args: e, i, t
// locals: e#1, i#1, t#1, this, <home_object>
// closure: s
function {
  <home_object> = <special_object 4>;
  this = this;
  let t#1;
  let i#1;
  let e#1;
  e#1 = e;
  i#1 = i;
  if (!((t === undefined))) goto L_1b;
  t;
  t = 0;
  t#1 = 0;
  if (!((null != t))) goto L_26;
  if (((t > 0))) goto L_53;
  if (!((null == t))) goto L_65;
  if (!((this.delay > 0))) goto L_65;
  return super["recycleAsyncId"](e, i, t);   // tail call
  if ((e.actions.some(function <atom:0>))) goto L_107;
  s.immediateProvider.clearImmediate(i);
  e._scheduled = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=181B file=valdi_rxjs/src/scheduler/AsapAction
// args: require, module, exports
// locals: e, s, AsapAction, <class_fields_init>, AsapAction#1
function {
  let AsapAction#1;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AsapAction = undefined;
  e = require("./AsyncAction");
  s = require("./immediateProvider");
  let AsapAction;
  let <class_fields_init>;
  class AsapAction extends e.AsyncAction { ... }
  <proto:AsapAction>.requestAsyncId = function <atom:0>;
  <proto:AsapAction>.recycleAsyncId = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AsapAction>;
  AsapAction = function <atom:0>;
  // close_loc <class_fields_init>
  AsapAction#1 = function <atom:0>;
  exports.AsapAction = AsapAction#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/AsapAction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
