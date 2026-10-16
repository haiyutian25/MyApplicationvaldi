// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=89B file=widgets/src/components/util/FocusableComponentRef
// args: o
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = o;
  this.componentRef = new e.ComponentRef();
  this.focusNextCreated = false;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=283B file=widgets/src/components/util/FocusableComponentRef
// args: e
// locals: e#1, e#2, this
function {
  this = this;
  if (!(e)) goto L_91;
  let e#1;
  e#1 = this.componentRef.single();
  if (!(e#1)) goto L_82;
  goto L_8f;
  // [栈深重同步 1 -> 0]
  this.focusNextCreated = true;
  true;
  return;
  let e#2;
  for (const e#2 of this.componentRef.all()) {
    e#2.setFocused(false);
  }
  this.focusNextCreated = false;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=widgets/src/components/util/FocusableComponentRef
// closure: e
function {
  e.setFocused(true);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=359B file=widgets/src/components/util/FocusableComponentRef
// args: e, s
// locals: this
// closure: o, t
function {
  this = this;
  if (!(this.focusNextCreated)) goto L_11e;
  this.focusNextCreated = false;
  if (!((this.options == null))) goto L_61;
  this.options;
  goto L_82;
  if (!(undefined.delayBeforeFocusingOnIOS)) goto L_f7;
  if (!(o.Device.isIOS())) goto L_f7;
  goto L_11e;
  // [栈深重同步 1 -> 0]
  e.setFocused(true);
  return this.componentRef.onComponentDidCreate(e, s);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=74B file=widgets/src/components/util/FocusableComponentRef
// args: e, o
// locals: this
function {
  this = this;
  return this.componentRef.onComponentWillDestroy(e, o);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=166B file=widgets/src/components/util/FocusableComponentRef
// args: require, module, exports
// locals: e, o, t, FocusableComponentRef, <class_fields_init>, FocusableComponentRef#1
function {
  let FocusableComponentRef#1;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FocusableComponentRef = undefined;
  e = require("valdi_core/src/ComponentRef");
  o = require("valdi_core/src/Device");
  t = require("valdi_core/src/SetTimeout");
  let FocusableComponentRef;
  let <class_fields_init>;
  class FocusableComponentRef extends undefined { ... }
  <proto:FocusableComponentRef>.setFocused = function <atom:0>;
  <proto:FocusableComponentRef>.onComponentDidCreate = function <atom:0>;
  <proto:FocusableComponentRef>.onComponentWillDestroy = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FocusableComponentRef>;
  FocusableComponentRef = function <atom:0>;
  // close_loc <class_fields_init>
  FocusableComponentRef#1 = function <atom:0>;
  exports.FocusableComponentRef = FocusableComponentRef#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/util/FocusableComponentRef
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
