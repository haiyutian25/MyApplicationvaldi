// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=49B file=worker/src/internal/ManagedWorker
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.script = e;
  this.keepAliveDelayMs = t;
  this._useCount = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=161B file=worker/src/internal/ManagedWorker
// locals: this
// closure: t
function {
  this = this;
  if ((this._worker)) goto L_7d;
  this._worker = new t.default(this.script);
  new t.default(this.script);
  return this._worker;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=138B file=worker/src/internal/ManagedWorker
// locals: this
function {
  this = this;
  this._useCount = (this._useCount ++);
  if (!(this._destroyTimeout)) goto L_89;
  clearTimeout(this._destroyTimeout);
  this._destroyTimeout = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=worker/src/internal/ManagedWorker
// closure: this
function {
  this.dispose();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=44B file=worker/src/internal/ManagedWorker
// closure: this
function {
  return setTimeout(function <atom:0>, this.keepAliveDelayMs);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=175B file=worker/src/internal/ManagedWorker
// locals: this
// closure: e
function {
  this = this;
  this._useCount = (this._useCount --);
  if (((0 !== this._useCount))) goto L_ae;
  if ((this._destroyTimeout)) goto L_ae;
  this._destroyTimeout = e.withGlobalNativeRefs(function <atom:0>);
  e.withGlobalNativeRefs(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=25B file=worker/src/internal/ManagedWorker
// locals: this
function {
  this = this;
  this._worker = undefined;
  this._destroyTimeout = undefined;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=5 bc=162B file=worker/src/internal/ManagedWorker
// args: require, module, exports
// locals: e, t, ManagedWorker, <class_fields_init>, ManagedWorker#1
function {
  let ManagedWorker#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ManagedWorker = undefined;
  e = require("valdi_core/src/NativeReferences");
  t = require("worker/src/Worker");
  let ManagedWorker;
  let <class_fields_init>;
  class ManagedWorker extends undefined { ... }
  <proto:ManagedWorker>.worker = function <atom:0>;
  <proto:ManagedWorker>.onUsed = function <atom:0>;
  <proto:ManagedWorker>.onUnused = function <atom:0>;
  <proto:ManagedWorker>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ManagedWorker>;
  ManagedWorker = function <atom:0>;
  // close_loc <class_fields_init>
  ManagedWorker#1 = function <atom:0>;
  exports.ManagedWorker = ManagedWorker#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=worker/src/internal/ManagedWorker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
