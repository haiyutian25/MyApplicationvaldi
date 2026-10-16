// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=74B file=foundation/src/Debounce
// args: e, t, s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.queue = [];
  this.interruptible = e;
  this.delayMs = t;
  this.handler = s;
  this.closed = false;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=foundation/src/Debounce
// closure: this
function {
  this.flush();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=313B file=foundation/src/Debounce
// args: t
// locals: this
// closure: e
function {
  this = this;
  if ((this.closed)) goto L_138;
  this.queue.push(t);
  if (!(this.timeout)) goto L_c1;
  clearTimeout(this.timeout);
  this.timeout = e.setTimeoutConfigurable(this.interruptible, function <atom:0>, this.delayMs);
  e.setTimeoutConfigurable(this.interruptible, function <atom:0>, this.delayMs);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=88B file=foundation/src/Debounce
// locals: this
function {
  this = this;
  this.handler(this.queue);
  this.queue = [];
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=143B file=foundation/src/Debounce
// locals: this
function {
  this = this;
  this.closed = true;
  this.flush();
  if (!(this.timeout)) goto L_82;
  clearTimeout(this.timeout);
  this.timeout = undefined;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=142B file=foundation/src/Debounce
// args: require, module, exports
// locals: e, Debounce, <class_fields_init>, Debounce#1
function {
  let Debounce#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Debounce = undefined;
  e = require("valdi_core/src/SetTimeout");
  let Debounce;
  let <class_fields_init>;
  class Debounce extends undefined { ... }
  <proto:Debounce>.schedule = function <atom:0>;
  <proto:Debounce>.flush = function <atom:0>;
  <proto:Debounce>.stop = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Debounce>;
  Debounce = function <atom:0>;
  // close_loc <class_fields_init>
  Debounce#1 = function <atom:0>;
  exports.Debounce = Debounce#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/Debounce
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
