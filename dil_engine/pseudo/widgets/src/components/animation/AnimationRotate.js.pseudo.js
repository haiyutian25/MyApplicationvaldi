// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=68B file=widgets/src/components/animation/AnimationRotate
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
  this.state = {tick: 0};
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=200B file=widgets/src/components/animation/AnimationRotate
// closure: this, t, i
function {
  this.setStateAnimated({tick: (this.state.tick + 1)}, {duration: (t / 1000), curve: i.AnimationCurve.Linear});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=99B file=widgets/src/components/animation/AnimationRotate
// locals: t, this
// closure: i
function {
  this = this;
  let t;
  t = (1000 / this.viewModel.revolutionPerSecond);
  this.ticker = setInterval(function <atom:0>, t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=43B file=widgets/src/components/animation/AnimationRotate
// locals: this
function {
  this = this;
  clearInterval(this.ticker);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=397B file=widgets/src/components/animation/AnimationRotate
// locals: i, this
// closure: t, e
function {
  this = this;
  let i;
  i = (Math.PI * this.state.tick);
  t.beginRender(e, undefined);
  t.setAttributeStyle("style", this.viewModel.rotatingContainerStyle);
  t.setAttributeNumber("rotation", i);
  t.renderUnnamedSlot(this);
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=289B file=widgets/src/components/animation/AnimationRotate
// args: require, module, exports
// locals: t, e, i, o, AnimationRotate, <class_fields_init>, AnimationRotate#1
function {
  let AnimationRotate#1;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AnimationRotate = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", undefined, "po24CcT7B1SX8TXL");
  i = require("valdi_core/src/AnimationOptions");
  o = require("valdi_core/src/Component");
  let AnimationRotate;
  let <class_fields_init>;
  class AnimationRotate extends o.StatefulComponent { ... }
  <proto:AnimationRotate>.onCreate = function <atom:0>;
  <proto:AnimationRotate>.onDestroy = function <atom:0>;
  <proto:AnimationRotate>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AnimationRotate>;
  AnimationRotate = function <atom:0>;
  // close_loc <class_fields_init>
  AnimationRotate#1 = function <atom:0>;
  exports.AnimationRotate = AnimationRotate#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/animation/AnimationRotate
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
