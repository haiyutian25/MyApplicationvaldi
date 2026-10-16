// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=50B file=widgets/src/components/pickers/DatePicker
// locals: this
function {
  this = this;
  this.platformViewModel = this.getPlatformViewModel();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=207B file=widgets/src/components/pickers/DatePicker
// locals: this
// closure: e, t
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttribute("canAlwaysScrollVertical", true);
  e.setAttributes(this.platformViewModel);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=65B file=widgets/src/components/pickers/DatePicker
// args: t
// locals: o
// closure: e
function {
  let o;
  o = {date: new Date((1000 * t.dateSeconds))};
  e(o);
  return;
}

// fn <atom:0>  args=0 vars=9 closure=0 cpool=1 bc=469B file=widgets/src/components/pickers/DatePicker
// locals: e, t, o, i, r, s, a, n, this
function {
  this = this;
  let n;
  let a;
  let s;
  let r;
  let i;
  let o;
  let t;
  let e;
  if (((undefined === undefined))) goto L_d7;
  e = <to_object>(undefined).onChange;
  t = <to_object>(undefined).date;
  o = <to_object>(undefined).minimumDate;
  i = <to_object>(undefined).maximumDate;
  r = <to_object>(undefined).color;
  <to_object>(undefined);
  goto L_fe;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_23;
  // [栈深重同步 1 -> 0]
  if (!(o)) goto L_130;
  s = (o.getTime() / 1000);
  if (!(i)) goto L_164;
  a = (i.getTime() / 1000);
  n = undefined;
  if (!(e)) goto L_17b;
  n = function <atom:0>;
  function <atom:0>;
  if (!(t)) goto L_1bf;
  return {minimumDateSeconds: s, maximumDateSeconds: a, dateSeconds: (t.getTime() / 1000), onChange: n, color: r};
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/pickers/DatePicker
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

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=299B file=widgets/src/components/pickers/DatePicker
// args: require, module, exports
// locals: e, t, o, DatePicker, <class_fields_init>, DatePicker#1
function {
  let DatePicker#1;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DatePicker = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "SCComposerDatePicker", "androidClass", "com.snap.composer.views.ComposerDatePicker"], "DJoWzxzd3onVp9ky");
  o = require("valdi_core/src/Component");
  let DatePicker;
  let <class_fields_init>;
  class DatePicker extends o.Component { ... }
  <proto:DatePicker>.onViewModelUpdate = function <atom:0>;
  <proto:DatePicker>.onRender = function <atom:0>;
  <proto:DatePicker>.getPlatformViewModel = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DatePicker>;
  DatePicker = function <atom:0>;
  // close_loc <class_fields_init>
  DatePicker#1 = function <atom:0>;
  exports.DatePicker = DatePicker#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/pickers/DatePicker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
