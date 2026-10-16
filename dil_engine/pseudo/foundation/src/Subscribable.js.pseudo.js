// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=29B file=foundation/src/Subscribable
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.listeners = [];
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=159B file=foundation/src/Subscribable
// locals: e
// closure: this, s
function {
  let e;
  e = this.listeners.indexOf(s);
  if (!((-1 != e))) goto L_9e;
  this.listeners.splice(e, 1);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=88B file=foundation/src/Subscribable
// args: s
// locals: this
function {
  this = this;
  this.listeners.push(s);
  return {unsubscribe: function <atom:0>};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=foundation/src/Subscribable
// locals: this
function {
  this = this;
  return this.listeners;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=123B file=foundation/src/Subscribable
// args: require, module, exports
// locals: Subscribable, <class_fields_init>, Subscribable#1
function {
  let Subscribable#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Subscribable = undefined;
  let Subscribable;
  let <class_fields_init>;
  class Subscribable extends undefined { ... }
  <proto:Subscribable>.subscribe = function <atom:0>;
  <proto:Subscribable>.subscribers = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Subscribable>;
  Subscribable = function <atom:0>;
  // close_loc <class_fields_init>
  Subscribable#1 = function <atom:0>;
  exports.Subscribable = Subscribable#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/Subscribable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
