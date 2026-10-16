// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=widgets/src/components/util/ComponentMeasurer
// closure: this
function {
  this.onLayoutCompleted();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=155B file=widgets/src/components/util/ComponentMeasurer
// locals: this
function {
  this = this;
  if (!((this.viewModel.children == null))) goto L_4e;
  this.viewModel.children;
  this.viewModel;
  goto L_51;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.renderer.onLayoutComplete(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=665B file=widgets/src/components/util/ComponentMeasurer
// locals: e, t, o, this
function {
  this = this;
  let t;
  let e;
  if (!(this.isDestroyed())) goto L_30;
  return;
  e = 0;
  t = 0;
  let o;
  for (const o of this.renderer.getComponentRootElements(this, true)) {
    e = (e + o.frame.width);
    (e + o.frame.width);
    t = (t + o.frame.height);
    (t + o.frame.height);
  }
  if (!(this.viewModel.roundToPoints)) goto L_1d2;
  e = Math.ceil(e);
  Math.ceil(e);
  t = Math.ceil(t);
  Math.ceil(t);
  if (!((e === this.lastFrameWidth))) goto L_223;
  if (((t === this.lastFrameHeight))) goto L_298;
  this.lastFrameWidth = e;
  this.lastFrameHeight = t;
  this.viewModel.onMeasured({width: e, height: t});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/util/ComponentMeasurer
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

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=214B file=widgets/src/components/util/ComponentMeasurer
// args: require, module, exports
// locals: e, t, ComponentMeasurer, <class_fields_init>, ComponentMeasurer#1
function {
  let ComponentMeasurer#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ComponentMeasurer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = require("valdi_core/src/Component");
  let ComponentMeasurer;
  let <class_fields_init>;
  class ComponentMeasurer extends t.Component { ... }
  <proto:ComponentMeasurer>.onRender = function <atom:0>;
  <proto:ComponentMeasurer>.onLayoutCompleted = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ComponentMeasurer>;
  ComponentMeasurer = function <atom:0>;
  // close_loc <class_fields_init>
  ComponentMeasurer#1 = function <atom:0>;
  exports.ComponentMeasurer = ComponentMeasurer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/util/ComponentMeasurer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
