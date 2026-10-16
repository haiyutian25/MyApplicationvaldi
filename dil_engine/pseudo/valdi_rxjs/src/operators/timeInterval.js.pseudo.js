// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=109B file=valdi_rxjs/src/operators/timeInterval
// args: e
// locals: t, n
// closure: i, s, r, TimeInterval
function {
  let n;
  let t;
  t = i.now();
  n = (t - s);
  s = t;
  t;
  r.next(new TimeInterval(e, n));
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=1 bc=119B file=valdi_rxjs/src/operators/timeInterval
// args: e, r
// locals: s
// closure: i, TimeInterval, t
function {
  let s;
  s = i.now();
  e.subscribe(t.createOperatorSubscriber(r, function <atom:0>));
  return;
}

// fn i  args=1 vars=2 closure=4 cpool=1 bc=88B file=valdi_rxjs/src/operators/timeInterval
// args: i
// locals: i#1
// closure: TimeInterval, t, e, r
function {
  let i#1;
  if (!((i === undefined))) goto L_2e;
  i;
  i = e.asyncScheduler;
  i#1 = e.asyncScheduler;
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=valdi_rxjs/src/operators/timeInterval
// args: e, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.value = e;
  this.interval = r;
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=168B file=valdi_rxjs/src/operators/timeInterval
// args: require, module, exports
// locals: e, r, t, i, TimeInterval, <class_fields_init>, TimeInterval#1
function {
  i = function i;
  let TimeInterval#1;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.timeInterval = undefined;
  exports.TimeInterval = undefined;
  e = require("../scheduler/async");
  r = require("../util/lift");
  t = require("./OperatorSubscriber");
  exports.timeInterval = i;
  let TimeInterval;
  let <class_fields_init>;
  class TimeInterval extends undefined { ... }
  <class_fields_init> = undefined;
  <proto:TimeInterval>;
  TimeInterval = function <atom:0>;
  // close_loc <class_fields_init>
  TimeInterval#1 = function <atom:0>;
  exports.TimeInterval = TimeInterval#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/timeInterval
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
