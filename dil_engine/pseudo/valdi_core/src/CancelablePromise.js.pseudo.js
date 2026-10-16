// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=valdi_core/src/CancelablePromise
// args: s, n
// closure: e
function {
  return e.then(s, n);   // tail call
}

// fn e  args=2 vars=2 closure=0 cpool=1 bc=20B file=valdi_core/src/CancelablePromise
// args: e, s
function {
  return {cancel: s, then: function <atom:0>};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=valdi_core/src/CancelablePromise
// locals: this
function {
  this = this;
  return (true === this._canceled);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=valdi_core/src/CancelablePromise
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=296B file=valdi_core/src/CancelablePromise
// args: e
// locals: this
function {
  this = this;
  if (!(this._canceled)) goto L_2b;
  goto L_127;
  // [栈深重同步 1 -> 0]
  if (!(this._onCancels)) goto L_11b;
  if (!(Array.isArray(this._onCancels))) goto L_e8;
  goto L_127;
  // [栈深重同步 1 -> 0]
  this._onCancels = [this._onCancels, e];
  goto L_127;
  // [栈深重同步 1 -> 0]
  this._onCancels = e;
  e;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=184B file=valdi_core/src/CancelablePromise
// locals: e, s, this
function {
  this = this;
  if (!(!this._canceled)) goto L_b7;
  let e;
  this._canceled = true;
  e = this._onCancels;
  if (!(!e)) goto L_63;
  return;
  this._onCancels = undefined;
  if (!(Array.isArray(e))) goto L_b2;
  let s;
  for (const s of e) {
    s();
  }
  return;
  e();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=valdi_core/src/CancelablePromise
// locals: this
function {
  this = this;
  this._onCancels = undefined;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=94B file=valdi_core/src/CancelablePromise
// args: e
// locals: s, this
function {
  this = this;
  let s;
  s = e;
  s.cancel = this.cancel.bind(this);
  return s;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=7 bc=172B file=valdi_core/src/CancelablePromise
// args: require, module, exports
// locals: e, PromiseCanceler, <class_fields_init>, PromiseCanceler#1
function {
  e = function e;
  let PromiseCanceler#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.promiseToCancelablePromise = undefined;
  exports.PromiseCanceler = undefined;
  exports.promiseToCancelablePromise = e;
  let PromiseCanceler;
  let <class_fields_init>;
  class PromiseCanceler extends undefined { ... }
  <proto:PromiseCanceler>.canceled = function <atom:0>;
  <proto:PromiseCanceler>.onCancel = function <atom:0>;
  <proto:PromiseCanceler>.cancel = function <atom:0>;
  <proto:PromiseCanceler>.clear = function <atom:0>;
  <proto:PromiseCanceler>.toCancelablePromise = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PromiseCanceler>;
  PromiseCanceler = function <atom:0>;
  // close_loc <class_fields_init>
  PromiseCanceler#1 = function <atom:0>;
  exports.PromiseCanceler = PromiseCanceler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/CancelablePromise
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
