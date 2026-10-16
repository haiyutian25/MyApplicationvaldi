// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=41B file=coreutils/src/SerialTaskQueue
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.ready = true;
  this.pendingTasks = [];
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=112B file=coreutils/src/SerialTaskQueue
// args: s
// locals: this
function {
  this = this;
  this.pendingTasks.push(s);
  this.flushTasks();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=50B file=coreutils/src/SerialTaskQueue
// closure: this
function {
  this.ready = true;
  this.flushTasks();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=172B file=coreutils/src/SerialTaskQueue
// locals: s, this
function {
  this = this;
  if (!(this.ready)) goto L_ab;
  if (!(this.pendingTasks.length)) goto L_ab;
  let s;
  s = this.pendingTasks.shift();
  this.ready = false;
  s(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=123B file=coreutils/src/SerialTaskQueue
// args: require, module, exports
// locals: SerialTaskQueue, <class_fields_init>, SerialTaskQueue#1
function {
  let SerialTaskQueue#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SerialTaskQueue = undefined;
  let SerialTaskQueue;
  let <class_fields_init>;
  class SerialTaskQueue extends undefined { ... }
  <proto:SerialTaskQueue>.enqueueTask = function <atom:0>;
  <proto:SerialTaskQueue>.flushTasks = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SerialTaskQueue>;
  SerialTaskQueue = function <atom:0>;
  // close_loc <class_fields_init>
  SerialTaskQueue#1 = function <atom:0>;
  exports.SerialTaskQueue = SerialTaskQueue#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=coreutils/src/SerialTaskQueue
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
