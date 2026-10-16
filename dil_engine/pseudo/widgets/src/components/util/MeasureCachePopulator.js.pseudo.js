// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=107B file=widgets/src/components/util/MeasureCachePopulator
// args: e
// closure: this
function {
  this.viewModel.measureCache.populate(e);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=76B file=widgets/src/components/util/MeasureCachePopulator
// locals: this, this.active_func, new.target, arguments
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
  this.state = {};
  this.onMeasured = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=45B file=widgets/src/components/util/MeasureCachePopulator
// args: e
// closure: this
function {
  this.setState({componentSize: e});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=393B file=widgets/src/components/util/MeasureCachePopulator
// args: e
// locals: this
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  if (!((undefined.measureCache !== this.viewModel.measureCache))) goto L_188;
  this.setState({componentSize: undefined});
  if (!((this.subscription == null))) goto L_ce;
  this.subscription;
  goto L_f2;
  undefined.unsubscribe();
  this.subscription = this.viewModel.measureCache.observable$.subscribe(function <atom:0>);
  this.viewModel.measureCache.observable$.subscribe(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=732B file=widgets/src/components/util/MeasureCachePopulator
// locals: this
// closure: e, r, o
function {
  this = this;
  if (!(this.state.componentSize)) goto L_f7;
  goto L_2db;
  // [栈深重同步 1 -> 0]
  e.beginComponent(r.ComponentMeasurer, o, undefined, undefined);
  e.setViewModelProperty("roundToPoints", this.viewModel.measureCache.roundToPoints);
  e.setViewModelProperty("onMeasured", this.onMeasured);
  e.setUnnamedSlot(this.viewModel.children.measure);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=288B file=widgets/src/components/util/MeasureCachePopulator
// args: require, module, exports
// locals: e, o, t, s, r, MeasureCachePopulator, <class_fields_init>, MeasureCachePopulator#1
function {
  let MeasureCachePopulator#1;
  let r;
  let s;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MeasureCachePopulator = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "lLsbw7v_Q1xIk_I_");
  t = require("valdi_core/src/CompilerIntrinsics");
  s = require("valdi_core/src/Component");
  r = require("./ComponentMeasurer");
  let MeasureCachePopulator;
  let <class_fields_init>;
  class MeasureCachePopulator extends s.StatefulComponent { ... }
  <proto:MeasureCachePopulator>.onViewModelUpdate = function <atom:0>;
  <proto:MeasureCachePopulator>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MeasureCachePopulator>;
  MeasureCachePopulator = function <atom:0>;
  // close_loc <class_fields_init>
  MeasureCachePopulator#1 = function <atom:0>;
  exports.MeasureCachePopulator = MeasureCachePopulator#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/util/MeasureCachePopulator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
