// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=90B file=valdi_rxjs/src/Scheduler
// args: e, r
// locals: e#1, r#1, this
// closure: <class_fields_init>, Scheduler
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let r#1;
  let e#1;
  e#1 = e;
  if (!((r === undefined))) goto L_42;
  r;
  r = Scheduler.now;
  r#1 = Scheduler.now;
  this.schedulerActionCtor = e;
  this.now = r;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=102B file=valdi_rxjs/src/Scheduler
// args: e, r, t
// locals: e#1, r#1, t#1, this
function {
  this = this;
  let t#1;
  let r#1;
  let e#1;
  e#1 = e;
  if (!((r === undefined))) goto L_15;
  r;
  r = 0;
  r#1 = 0;
  t#1 = t;
  return new this.schedulerActionCtor(this, e).schedule(t, r);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=210B file=valdi_rxjs/src/Scheduler
// args: require, module, exports
// locals: e, Scheduler, <class_fields_init>, Scheduler#1
function {
  let Scheduler#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Scheduler = undefined;
  e = require("./scheduler/dateTimestampProvider");
  let Scheduler;
  let <class_fields_init>;
  class Scheduler extends undefined { ... }
  <proto:Scheduler>.schedule = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Scheduler>;
  Scheduler = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Scheduler
  Scheduler#1 = function <atom:0>;
  exports.Scheduler = Scheduler#1;
  Scheduler#1.now = e.dateTimestampProvider.now;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/Scheduler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
