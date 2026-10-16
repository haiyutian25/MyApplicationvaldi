// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=211B file=widgets/src/components/animation/AnimatableVisibilityView
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
  this.state = {hidden: !this.viewModel.viewModel, viewModel: this.viewModel.viewModel};
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=447B file=widgets/src/components/animation/AnimatableVisibilityView
// locals: this
// closure: e, i
function {
  this = this;
  if (!(this.state.viewModel)) goto L_1be;
  e.beginComponent(this.viewModel.componentClass, i, undefined, undefined);
  e.setViewModelProperties(this.state.viewModel);
  e.setViewModelProperty("hidden", this.state.hidden);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=44B file=widgets/src/components/animation/AnimatableVisibilityView
// closure: this
function {
  return this.setState({viewModel: undefined});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=130B file=widgets/src/components/animation/AnimatableVisibilityView
// closure: this
function {
  return this.setStateAnimated({hidden: true}, {duration: this.viewModel.animationDuration, completion: function <atom:0>});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=118B file=widgets/src/components/animation/AnimatableVisibilityView
// closure: this
function {
  return this.setStateAnimated({hidden: false}, {duration: this.viewModel.animationDuration});   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=2 bc=468B file=widgets/src/components/animation/AnimatableVisibilityView
// args: e
// locals: i, this
function {
  this = this;
  let i;
  if (!(!e)) goto L_a;
  return;
  i = (undefined === this.viewModel.viewModel);
  if (!((this.state.hidden !== i))) goto L_165;
  if (!(i)) goto L_cc;
  goto L_1d3;
  // [栈深重同步 1 -> 0]
  this.setState({viewModel: this.viewModel.viewModel});
  goto L_1d3;
  // [栈深重同步 1 -> 0]
  this.setState({viewModel: this.viewModel.viewModel});
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=287B file=widgets/src/components/animation/AnimatableVisibilityView
// args: require, module, exports
// locals: e, i, t, AnimatableVisibilityView, <class_fields_init>, AnimatableVisibilityView#1
function {
  let AnimatableVisibilityView#1;
  let t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DEFAULT_MODAL_ANIMATION_DURATION = undefined;
  exports.AnimatableVisibilityView = undefined;
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeComponentPrototype(undefined, "6ACvT7AUst2Zi3GR");
  t = require("valdi_core/src/Component");
  exports.DEFAULT_MODAL_ANIMATION_DURATION = 0.3;
  let AnimatableVisibilityView;
  let <class_fields_init>;
  class AnimatableVisibilityView extends t.StatefulComponent { ... }
  <proto:AnimatableVisibilityView>.onRender = function <atom:0>;
  <proto:AnimatableVisibilityView>.onViewModelUpdate = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AnimatableVisibilityView>;
  AnimatableVisibilityView = function <atom:0>;
  // close_loc <class_fields_init>
  AnimatableVisibilityView#1 = function <atom:0>;
  exports.AnimatableVisibilityView = AnimatableVisibilityView#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/animation/AnimatableVisibilityView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
