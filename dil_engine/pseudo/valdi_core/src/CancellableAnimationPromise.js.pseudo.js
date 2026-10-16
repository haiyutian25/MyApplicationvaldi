// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/CancellableAnimationPromise
// args: e, t, i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.renderer = e;
  this.options = t;
  this.animations = i;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=96B file=valdi_core/src/CancellableAnimationPromise
// args: t
// closure: this, e
function {
  if (!((this.options.completion == null))) goto L_4c;
  this.options.completion;
  this.options;
  goto L_50;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t);
  this.cancelled = t;
  e(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=167B file=valdi_core/src/CancellableAnimationPromise
// args: e
// closure: this
function {
  null;
  this.options;
  this.cancelToken = this.renderer.animate({completion: function <atom:0>}, this.animations);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=77B file=valdi_core/src/CancellableAnimationPromise
// locals: this
function {
  this = this;
  if (!(this.started)) goto L_35;
  throw new Error("Tried to start Animation twice");
  this.started = true;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=160B file=valdi_core/src/CancellableAnimationPromise
// locals: this
function {
  this = this;
  if (!((undefined !== this.cancelToken))) goto L_9f;
  this.renderer.cancelAnimation(this.cancelToken);
  this.cancelToken = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=83B file=valdi_core/src/CancellableAnimationPromise
// locals: this
function {
  this = this;
  if (!(this.started)) goto L_28;
  return 0;
  if (!((true === this.cancelled))) goto L_51;
  return 1;
  return 2;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=4 bc=131B file=valdi_core/src/CancellableAnimationPromise
// args: require, module, exports
// locals: CancellableAnimationPromise, <class_fields_init>, CancellableAnimationPromise#1
function {
  let CancellableAnimationPromise#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CancellableAnimationPromise = undefined;
  let CancellableAnimationPromise;
  let <class_fields_init>;
  class CancellableAnimationPromise extends undefined { ... }
  <proto:CancellableAnimationPromise>.start = function <atom:0>;
  <proto:CancellableAnimationPromise>.cancel = function <atom:0>;
  <proto:CancellableAnimationPromise>.getState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CancellableAnimationPromise>;
  CancellableAnimationPromise = function <atom:0>;
  // close_loc <class_fields_init>
  CancellableAnimationPromise#1 = function <atom:0>;
  exports.CancellableAnimationPromise = CancellableAnimationPromise#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/CancellableAnimationPromise
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
