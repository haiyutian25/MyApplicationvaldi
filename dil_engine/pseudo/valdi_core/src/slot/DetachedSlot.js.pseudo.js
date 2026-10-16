// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=29B file=valdi_core/src/slot/DetachedSlot
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.renderers = [];
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=138B file=valdi_core/src/slot/DetachedSlot
// args: e
// locals: r, this
function {
  this = this;
  this.renderFn = e;
  let r;
  for (const r of this.renderers) {
    r.renderer.renderComponent(r, undefined);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=valdi_core/src/slot/DetachedSlot
// args: e
// locals: this
function {
  this = this;
  this.renderers.push(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=161B file=valdi_core/src/slot/DetachedSlot
// args: e
// locals: r, this
function {
  this = this;
  let r;
  r = this.renderers.indexOf(e);
  if (!((r >= 0))) goto L_a0;
  this.renderers.splice(r, 1);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=valdi_core/src/slot/DetachedSlot
// args: e
// locals: this
function {
  this = this;
  if (!(this.renderFn)) goto L_4d;
  this.renderFn();
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=5 bc=139B file=valdi_core/src/slot/DetachedSlot
// args: require, module, exports
// locals: DetachedSlot, <class_fields_init>, DetachedSlot#1
function {
  let DetachedSlot#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DetachedSlot = undefined;
  let DetachedSlot;
  let <class_fields_init>;
  class DetachedSlot extends undefined { ... }
  <proto:DetachedSlot>.slotted = function <atom:0>;
  <proto:DetachedSlot>.attachRenderer = function <atom:0>;
  <proto:DetachedSlot>.detachRenderer = function <atom:0>;
  <proto:DetachedSlot>.onRendererReady = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DetachedSlot>;
  DetachedSlot = function <atom:0>;
  // close_loc <class_fields_init>
  DetachedSlot#1 = function <atom:0>;
  exports.DetachedSlot = DetachedSlot#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/slot/DetachedSlot
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
