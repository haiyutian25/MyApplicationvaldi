// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=39B file=valdi_rxjs/src/scheduler/Action
// args: e, t
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
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=21B file=valdi_rxjs/src/scheduler/Action
// args: e, t
// locals: e#1, t#1, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_12;
  t;
  t = 0;
  t#1 = 0;
  return this;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=161B file=valdi_rxjs/src/scheduler/Action
// args: require, module, exports
// locals: e, Action, <class_fields_init>, Action#1
function {
  let Action#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Action = undefined;
  e = require("../Subscription");
  let Action;
  let <class_fields_init>;
  class Action extends e.Subscription { ... }
  <proto:Action>.schedule = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Action>;
  Action = function <atom:0>;
  // close_loc <class_fields_init>
  Action#1 = function <atom:0>;
  exports.Action = Action#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/Action
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
