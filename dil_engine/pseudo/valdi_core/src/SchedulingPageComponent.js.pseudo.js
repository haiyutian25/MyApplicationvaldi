// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=75B file=valdi_core/src/SchedulingPageComponent
// closure: this
function {
  return this.onCreateNonCritical.call(this);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=46B file=valdi_core/src/SchedulingPageComponent
// closure: this, t
function {
  return t.trace("onCreateNonCritical", function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=163B file=valdi_core/src/SchedulingPageComponent
// locals: this, this.active_func, new.target, arguments
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.schedulingStrategy = 1;
  this.boundOnCreateCritical = this.onCreateCritical.bind(this);
  this.boundOnCreateNonCritical = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=valdi_core/src/SchedulingPageComponent
// closure: this
function {
  this.boundOnCreateCritical();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=119B file=valdi_core/src/SchedulingPageComponent
// locals: this
// closure: t
function {
  this = this;
  t.trace("onCreateCritical", function <atom:0>);
  this.scheduleWithStrategy(this.boundOnCreateNonCritical);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=268B file=valdi_core/src/SchedulingPageComponent
// args: e
// locals: this
function {
  this = this;
  if (!((2 === this.schedulingStrategy))) goto L_72;
  goto L_10b;
  // [栈深重同步 1 -> 0]
  if (!((1 === this.schedulingStrategy))) goto L_e1;
  goto L_10b;
  // [栈深重同步 1 -> 0]
  if (!((0 === this.schedulingStrategy))) goto L_10b;
  e();
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=189B file=valdi_core/src/SchedulingPageComponent
// args: require, module, exports
// locals: e, t, SchedulingPageComponent, <class_fields_init>, SchedulingPageComponent#1
function {
  let SchedulingPageComponent#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SchedulingPageComponent = undefined;
  require("valdi_tsx/src/JSX");
  e = require("./Component");
  t = require("./utils/Trace");
  let SchedulingPageComponent;
  let <class_fields_init>;
  class SchedulingPageComponent extends e.StatefulComponent { ... }
  <proto:SchedulingPageComponent>.onCreate = function <atom:0>;
  <proto:SchedulingPageComponent>.scheduleWithStrategy = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SchedulingPageComponent>;
  SchedulingPageComponent = function <atom:0>;
  // close_loc <class_fields_init>
  SchedulingPageComponent#1 = function <atom:0>;
  exports.SchedulingPageComponent = SchedulingPageComponent#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/SchedulingPageComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
