// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=80B file=valdi_rxjs/src/testing/HotObservable
// args: e, s
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target();
  if (!(<class_fields_init>)) goto L_21;
  <class_fields_init>.call(this);
  new new.target();
  this.messages = e;
  this.subscriptions = [];
  this.scheduler = s;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=valdi_rxjs/src/testing/HotObservable
// closure: r, i
function {
  r.logUnsubscribedFrame(i);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=1 bc=238B file=valdi_rxjs/src/testing/HotObservable
// args: e
// locals: r, i, t, this, <home_object>
// closure: s
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  let i;
  let r;
  r = this;
  i = r.logSubscribedFrame();
  t = new s.Subscription();
  t.add(new s.Subscription(function <atom:0>));
  t.add(super["_subscribe"].call(this, e));
  return t;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=44B file=valdi_rxjs/src/testing/HotObservable
// closure: t, s, e
function {
  t.observeNotification(s, e);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=1 bc=206B file=valdi_rxjs/src/testing/HotObservable
// locals: s, i
// closure: t, e, r
function {
  let i;
  let s;
  if (((undefined === undefined))) goto L_55;
  s = <to_object>(undefined).notification;
  i = <to_object>(undefined).frame;
  <to_object>(undefined);
  goto L_80;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_b;
  // [栈深重同步 1 -> 0]
  e.scheduler.schedule(function <atom:0>, i);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=86B file=valdi_rxjs/src/testing/HotObservable
// locals: e, s, r, this
// closure: t
function {
  this = this;
  let s;
  let e;
  e = this;
  s = e.messages.length;
  let r;
  r = 0;
  // close_loc r
  if (!((r < s))) goto L_52;
  function <atom:0>();
  // close_loc r
  r = <r_new>;
  (r++);
  goto L_38;
  // close_loc r
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=296B file=valdi_rxjs/src/testing/HotObservable
// args: require, module, exports
// locals: e, s, r, i, t, HotObservable, <class_fields_init>, HotObservable#1
function {
  let HotObservable#1;
  let t;
  let i;
  let r;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HotObservable = undefined;
  e = require("../Subject");
  s = require("../Subscription");
  r = require("./SubscriptionLoggable");
  i = require("../util/applyMixins");
  t = require("../Notification");
  let HotObservable;
  let <class_fields_init>;
  class HotObservable extends e.Subject { ... }
  <proto:HotObservable>._subscribe = function <atom:0>;
  <proto:HotObservable>.setup = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HotObservable>;
  HotObservable = function <atom:0>;
  // close_loc <class_fields_init>
  HotObservable#1 = function <atom:0>;
  exports.HotObservable = HotObservable#1;
  i.applyMixins(HotObservable#1, [r.SubscriptionLoggable]);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/testing/HotObservable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
