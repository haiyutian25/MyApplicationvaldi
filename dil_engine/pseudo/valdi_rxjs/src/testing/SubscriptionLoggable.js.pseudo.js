// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=29B file=valdi_rxjs/src/testing/SubscriptionLoggable
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.subscriptions = [];
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=221B file=valdi_rxjs/src/testing/SubscriptionLoggable
// locals: this
// closure: s
function {
  this = this;
  this.subscriptions.push(new s.SubscriptionLog(this.scheduler.now()));
  return (this.subscriptions.length - 1);
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=202B file=valdi_rxjs/src/testing/SubscriptionLoggable
// args: i
// locals: o, e, this
// closure: s
function {
  this = this;
  let e;
  let o;
  o = this.subscriptions;
  e = o[i];
  o[i] = new s.SubscriptionLog(e.subscribedFrame, this.scheduler.now());
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=134B file=valdi_rxjs/src/testing/SubscriptionLoggable
// args: require, module, exports
// locals: s, SubscriptionLoggable, <class_fields_init>, SubscriptionLoggable#1
function {
  let SubscriptionLoggable#1;
  let s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscriptionLoggable = undefined;
  s = require("./SubscriptionLog");
  let SubscriptionLoggable;
  let <class_fields_init>;
  class SubscriptionLoggable extends undefined { ... }
  <proto:SubscriptionLoggable>.logSubscribedFrame = function <atom:0>;
  <proto:SubscriptionLoggable>.logUnsubscribedFrame = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscriptionLoggable>;
  SubscriptionLoggable = function <atom:0>;
  // close_loc <class_fields_init>
  SubscriptionLoggable#1 = function <atom:0>;
  exports.SubscriptionLoggable = SubscriptionLoggable#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/testing/SubscriptionLoggable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
