// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=63B file=foundation/src/Timer
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.startMs = this.nowMs();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=50B file=foundation/src/Timer
// locals: this
function {
  this = this;
  this.startMs = this.nowMs();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=foundation/src/Timer
// locals: this
function {
  this = this;
  return (this.nowMs() - this.startMs);
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=45B file=foundation/src/Timer
function {
  return new Date().getTime();   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=4 bc=131B file=foundation/src/Timer
// args: require, module, exports
// locals: Timer, <class_fields_init>, Timer#1
function {
  let Timer#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Timer = undefined;
  let Timer;
  let <class_fields_init>;
  class Timer extends undefined { ... }
  <proto:Timer>.reset = function <atom:0>;
  <proto:Timer>.elapsedMs = function <atom:0>;
  <proto:Timer>.nowMs = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Timer>;
  Timer = function <atom:0>;
  // close_loc <class_fields_init>
  Timer#1 = function <atom:0>;
  exports.Timer = Timer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/Timer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
