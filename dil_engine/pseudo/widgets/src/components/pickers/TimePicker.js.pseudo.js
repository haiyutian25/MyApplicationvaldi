// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=50B file=widgets/src/components/pickers/TimePicker
// locals: this
function {
  this = this;
  this.platformViewModel = this.getPlatformViewModel();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=207B file=widgets/src/components/pickers/TimePicker
// locals: this
// closure: e, o
function {
  this = this;
  e.beginRender(o, undefined);
  e.setAttribute("canAlwaysScrollVertical", true);
  e.setAttributes(this.platformViewModel);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=97B file=widgets/src/components/pickers/TimePicker
// args: o
// locals: r
// closure: e
function {
  let r;
  r = {hourOfDay: o.hourOfDay, minuteOfHour: o.minuteOfHour};
  e({pickedTime: r});
  return;
}

// fn <atom:0>  args=0 vars=6 closure=0 cpool=1 bc=355B file=widgets/src/components/pickers/TimePicker
// locals: e, o, r, i, t, this
function {
  this = this;
  let t;
  let i;
  let r;
  let o;
  let e;
  if (((undefined === undefined))) goto L_aa;
  e = <to_object>(undefined).onChange;
  o = <to_object>(undefined).time;
  r = <to_object>(undefined).intervalMinutes;
  i = <to_object>(undefined).color;
  <to_object>(undefined);
  goto L_d1;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!(e)) goto L_e6;
  t = function <atom:0>;
  function <atom:0>;
  if (!((o == null))) goto L_f3;
  o;
  goto L_114;
  if (!((o == null))) goto L_124;
  o;
  goto L_145;
  return {hourOfDay: undefined.hourOfDay, minuteOfHour: undefined.minuteOfHour, intervalMinutes: r, onChange: t, color: i};
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/pickers/TimePicker
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
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
  return this;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=299B file=widgets/src/components/pickers/TimePicker
// args: require, module, exports
// locals: e, o, r, TimePicker, <class_fields_init>, TimePicker#1
function {
  let TimePicker#1;
  let r;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TimePicker = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeNodePrototype("custom-view", ["iosClass", "SCComposerTimePicker", "androidClass", "com.snap.composer.views.ComposerTimePicker"], "pLO4hmNex6eHSO0I");
  r = require("valdi_core/src/Component");
  let TimePicker;
  let <class_fields_init>;
  class TimePicker extends r.Component { ... }
  <proto:TimePicker>.onViewModelUpdate = function <atom:0>;
  <proto:TimePicker>.onRender = function <atom:0>;
  <proto:TimePicker>.getPlatformViewModel = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TimePicker>;
  TimePicker = function <atom:0>;
  // close_loc <class_fields_init>
  TimePicker#1 = function <atom:0>;
  exports.TimePicker = TimePicker#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/pickers/TimePicker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
