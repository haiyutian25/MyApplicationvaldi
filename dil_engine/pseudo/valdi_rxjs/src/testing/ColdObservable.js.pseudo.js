// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=valdi_rxjs/src/testing/ColdObservable
// closure: r, i
function {
  r.logUnsubscribedFrame(i);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=1 bc=221B file=valdi_rxjs/src/testing/ColdObservable
// args: e
// locals: r, i, t, this
// closure: s
function {
  this = this;
  let t;
  let i;
  let r;
  r = this;
  i = r.logSubscribedFrame();
  t = new s.Subscription();
  t.add(new s.Subscription(function <atom:0>));
  r.scheduleMessages(e);
  return t;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=1 bc=82B file=valdi_rxjs/src/testing/ColdObservable
// args: e, r
// locals: this.active_func, new.target, this
// closure: s, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(function <atom:0>);
  if (!(<class_fields_init>)) goto L_23;
  <class_fields_init>.call(this);
  new new.target(function <atom:0>);
  this.messages = e;
  this.subscriptions = [];
  this.scheduler = r;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=168B file=valdi_rxjs/src/testing/ColdObservable
// args: e
// locals: s, r
// closure: t
function {
  let r;
  let s;
  if (((undefined === undefined))) goto L_78;
  s = <to_object>(<to_object>(undefined).message).notification;
  <to_object>(<to_object>(undefined).message);
  r = <to_object>(undefined).subscriber;
  <to_object>(undefined);
  goto L_7c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_b;
  // [栈深重同步 1 -> 0]
  t.observeNotification(s, r);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=1 bc=273B file=valdi_rxjs/src/testing/ColdObservable
// args: e
// locals: s, r, s#1, this
// closure: t
function {
  this = this;
  let s;
  s = this.messages.length;
  let r;
  r = 0;
  if (!((r < s))) goto L_110;
  let s#1;
  s#1 = this.messages[r];
  e.add(this.scheduler.schedule(function <atom:0>, s#1.frame, {message: s#1, subscriber: e}));
  r = <r_new>;
  (r++);
  goto L_2e;
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=288B file=valdi_rxjs/src/testing/ColdObservable
// args: require, module, exports
// locals: e, s, r, i, t, ColdObservable, <class_fields_init>, ColdObservable#1
function {
  let ColdObservable#1;
  let t;
  let i;
  let r;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ColdObservable = undefined;
  e = require("../Observable");
  s = require("../Subscription");
  r = require("./SubscriptionLoggable");
  i = require("../util/applyMixins");
  t = require("../Notification");
  let ColdObservable;
  let <class_fields_init>;
  class ColdObservable extends e.Observable { ... }
  <proto:ColdObservable>.scheduleMessages = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ColdObservable>;
  ColdObservable = function <atom:0>;
  // close_loc <class_fields_init>
  ColdObservable#1 = function <atom:0>;
  exports.ColdObservable = ColdObservable#1;
  i.applyMixins(ColdObservable#1, [r.SubscriptionLoggable]);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/testing/ColdObservable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
