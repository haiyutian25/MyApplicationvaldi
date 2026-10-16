// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=69B file=worker/src/Worker
// args: e
// locals: this
// closure: <class_fields_init>, t, o
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.nativeWorker = t.createWorker(o, e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=112B file=worker/src/Worker
// args: e
// locals: this
function {
  this = this;
  if (!(this.nativeWorker)) goto L_6f;
  this.nativeWorker.setOnMessage(e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=113B file=worker/src/Worker
// args: e, r
// locals: this
function {
  this = this;
  if (!(this.nativeWorker)) goto L_70;
  this.nativeWorker.postMessage(e, r);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=124B file=worker/src/Worker
// locals: this
function {
  this = this;
  if (!(this.nativeWorker)) goto L_7b;
  this.nativeWorker.terminate();
  this.nativeWorker = null;
  null;
  return;
}

// fn i  args=0 vars=0 closure=0 cpool=0 bc=29B file=worker/src/Worker
function {
  if (!(!("document" in globalThis))) goto L_1c;
  return ("undefined" != typeof location);
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=5 bc=312B file=worker/src/Worker
// args: require, module, exports
// locals: e, r, t, o, Worker, <class_fields_init>, Worker#1, i
function {
  i = function i;
  let Worker#1;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Worker = undefined;
  exports.inWorker = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider");
  r = require("valdi_core/src/ModuleLoaderGlobal");
  t = e.getValdiRuntime();
  o = r.getModuleLoader(module).package;
  let Worker;
  let <class_fields_init>;
  class Worker extends undefined { ... }
  <proto:Worker>.onmessage = function <atom:0>;
  <proto:Worker>.postMessage = function <atom:0>;
  <proto:Worker>.terminate = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Worker>;
  Worker = function <atom:0>;
  // close_loc <class_fields_init>
  Worker#1 = function <atom:0>;
  exports.Worker = Worker#1;
  exports.default = Worker#1;
  exports.inWorker = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=worker/src/Worker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
