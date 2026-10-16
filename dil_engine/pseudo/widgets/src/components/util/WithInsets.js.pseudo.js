// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=92B file=widgets/src/components/util/WithInsets
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
  this.state = {insets: {top: 0, bottom: 0, left: 0, right: 0}};
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=1232B file=widgets/src/components/util/WithInsets
// locals: s, i, o, this
// closure: e, t
function {
  this = this;
  let o;
  let i;
  let s;
  s = this.state.insets;
  if (((undefined === undefined))) goto L_85;
  if (!((<to_object>(undefined).insetType === undefined))) goto L_81;
  <to_object>(undefined).insetType;
  i = "padding";
  <to_object>(undefined);
  goto L_aa;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_54;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel == null))) goto L_102;
  this.viewModel;
  goto L_123;
  if (!(undefined.ignoreTop)) goto L_128;
  goto L_14c;
  // [栈深重同步 3 -> 2]
  {}["".concat(i, "Top")] = s.top;
  s.top;
  if (!((this.viewModel == null))) goto L_1a5;
  this.viewModel;
  goto L_1c6;
  if (!(undefined.ignoreBottom)) goto L_1cb;
  goto L_1ef;
  // [栈深重同步 3 -> 2]
  {}["".concat(i, "Bottom")] = s.bottom;
  s.bottom;
  if (!((this.viewModel == null))) goto L_248;
  this.viewModel;
  goto L_269;
  if (!(undefined.ignoreLeft)) goto L_26e;
  goto L_292;
  // [栈深重同步 3 -> 2]
  {}["".concat(i, "Left")] = s.left;
  s.left;
  if (!((this.viewModel == null))) goto L_2eb;
  this.viewModel;
  goto L_30c;
  if (!(undefined.ignoreRight)) goto L_311;
  goto L_335;
  // [栈深重同步 3 -> 2]
  {}["".concat(i, "Right")] = s.right;
  s.right;
  o = {};
  e.beginRender(t, undefined);
  if (!((this.viewModel == null))) goto L_3b7;
  this.viewModel;
  goto L_3d8;
  e.setAttributeNumber("flexShrink", undefined.flexShrink);
  if (!((this.viewModel == null))) goto L_42f;
  this.viewModel;
  goto L_450;
  e.setAttributeNumber("flexGrow", undefined.flexGrow);
  e.setAttributes(o);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=widgets/src/components/util/WithInsets
// closure: this
function {
  this.onInsetsChanged();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=125B file=widgets/src/components/util/WithInsets
// locals: this
// closure: i
function {
  this = this;
  this.onInsetsChanged();
  this.deviceInsetObserver = i.Device.observeDisplayInsetChange(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=111B file=widgets/src/components/util/WithInsets
// locals: this
function {
  this = this;
  if (!(this.deviceInsetObserver)) goto L_6e;
  this.deviceInsetObserver.cancel();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=508B file=widgets/src/components/util/WithInsets
// locals: e, this
// closure: o, i
function {
  this = this;
  let e;
  if (!(this.viewModel)) goto L_6e;
  if ((this.viewModel.resolveFn)) goto L_96;
  e = o.identity;
  this.setState({insets: e({top: i.Device.getDisplayTopInset(), bottom: i.Device.getDisplayBottomInset(), left: i.Device.getDisplayLeftInset(), right: i.Device.getDisplayRightInset()})});
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=5 bc=309B file=widgets/src/components/util/WithInsets
// args: require, module, exports
// locals: e, t, s, i, o, WithInsets, <class_fields_init>, WithInsets#1
function {
  let WithInsets#1;
  let o;
  let i;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WithInsets = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "x1EO7wXgv1nJgq0d");
  s = require("valdi_core/src/Component");
  i = require("valdi_core/src/Device");
  o = require("foundation/src/function");
  let WithInsets;
  let <class_fields_init>;
  class WithInsets extends s.StatefulComponent { ... }
  <proto:WithInsets>.onRender = function <atom:0>;
  <proto:WithInsets>.onCreate = function <atom:0>;
  <proto:WithInsets>.onDestroy = function <atom:0>;
  <proto:WithInsets>.onInsetsChanged = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WithInsets>;
  WithInsets = function <atom:0>;
  // close_loc <class_fields_init>
  WithInsets#1 = function <atom:0>;
  exports.WithInsets = WithInsets#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/util/WithInsets
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
