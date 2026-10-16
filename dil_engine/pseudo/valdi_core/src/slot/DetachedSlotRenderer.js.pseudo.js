// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=184B file=valdi_core/src/slot/DetachedSlotRenderer
// args: e
// locals: this
function {
  this = this;
  if (!(e)) goto L_4e;
  e.detachedSlot.detachRenderer(this);
  this.viewModel.detachedSlot.attachRenderer(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=107B file=valdi_core/src/slot/DetachedSlotRenderer
// locals: this
function {
  this = this;
  this.viewModel.detachedSlot.detachRenderer(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=107B file=valdi_core/src/slot/DetachedSlotRenderer
// locals: this
function {
  this = this;
  this.viewModel.detachedSlot.onRendererReady(this);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/slot/DetachedSlotRenderer
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

// fn <atom:0>  args=3 vars=8 closure=0 cpool=4 bc=222B file=valdi_core/src/slot/DetachedSlotRenderer
// args: require, module, exports
// locals: e, t, DetachedSlotRenderer, <class_fields_init>, DetachedSlotRenderer#1
function {
  let DetachedSlotRenderer#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DetachedSlotRenderer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = require("../Component");
  let DetachedSlotRenderer;
  let <class_fields_init>;
  class DetachedSlotRenderer extends t.Component { ... }
  <proto:DetachedSlotRenderer>.onViewModelUpdate = function <atom:0>;
  <proto:DetachedSlotRenderer>.onDestroy = function <atom:0>;
  <proto:DetachedSlotRenderer>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DetachedSlotRenderer>;
  DetachedSlotRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DetachedSlotRenderer#1 = function <atom:0>;
  exports.DetachedSlotRenderer = DetachedSlotRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/slot/DetachedSlotRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
