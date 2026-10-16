// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=220B file=widgets/src/components/util/WithKeyboardPadding
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, i
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
  this.state = {keyboardHeight: i.Application.getKeyboardHeight()};
  this.keyboardLastHeight = this.state.keyboardHeight;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=239B file=widgets/src/components/util/WithKeyboardPadding
// args: e
// locals: t
// closure: this, a, d
function {
  if (!((this.viewModel.animated == null))) goto L_4a;
  this.viewModel.animated;
  if (!(true)) goto L_b6;
  let t;
  if (!((e > this.keyboardLastHeight))) goto L_7a;
  goto L_7d;
  // [栈深重同步 1 -> 0]
  t = d;
  this.setStateAnimated({keyboardHeight: e}, {duration: t});
  goto L_e3;
  this.setState({keyboardHeight: e});
  this.keyboardLastHeight = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=87B file=widgets/src/components/util/WithKeyboardPadding
// locals: this
// closure: a, d, i
function {
  this = this;
  this.keyboardCancelable = i.Application.observeKeyboardHeight(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=widgets/src/components/util/WithKeyboardPadding
// locals: this
function {
  this = this;
  if (!((this.keyboardCancelable == null))) goto L_2c;
  this.keyboardCancelable;
  goto L_50;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=448B file=widgets/src/components/util/WithKeyboardPadding
// locals: i, o, this
// closure: e, t
function {
  this = this;
  let o;
  let i;
  if (!((this.viewModel.enabled == null))) goto L_52;
  this.viewModel.enabled;
  i = true;
  if (!((this.viewModel.paddingOffset == null))) goto L_9c;
  this.viewModel.paddingOffset;
  o = 0;
  e.beginRender(t, undefined);
  if (!(i)) goto L_16a;
  goto L_16b;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingBottom", undefined);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=6 bc=303B file=widgets/src/components/util/WithKeyboardPadding
// args: require, module, exports
// locals: e, t, i, o, a, d, WithKeyboardPadding, <class_fields_init>, WithKeyboardPadding#1
function {
  let WithKeyboardPadding#1;
  let d;
  let a;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WithKeyboardPadding = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "ZzOKMutJuS4RRprs");
  i = require("valdi_core/src/Application");
  o = require("valdi_core/src/Component");
  a = 0.3;
  d = 0.2;
  let WithKeyboardPadding;
  let <class_fields_init>;
  class WithKeyboardPadding extends o.StatefulComponent { ... }
  <proto:WithKeyboardPadding>.onCreate = function <atom:0>;
  <proto:WithKeyboardPadding>.onDestroy = function <atom:0>;
  <proto:WithKeyboardPadding>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WithKeyboardPadding>;
  WithKeyboardPadding = function <atom:0>;
  // close_loc <class_fields_init>
  WithKeyboardPadding#1 = function <atom:0>;
  exports.WithKeyboardPadding = WithKeyboardPadding#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/util/WithKeyboardPadding
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
