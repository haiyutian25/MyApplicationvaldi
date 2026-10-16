// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=35B file=foundation/src/Announcer
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.listenerInstances = new Set();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=132B file=foundation/src/Announcer
// args: e
// locals: n, this
function {
  this = this;
  let n;
  for (const n of Array.from(this.listenerInstances)) {
    n.listener(e);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=74B file=foundation/src/Announcer
// closure: this, s
function {
  this.listenerInstances.delete(s);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=130B file=foundation/src/Announcer
// args: n
// locals: s, this
// closure: e
function {
  this = this;
  let s;
  s = {listener: n};
  this.listenerInstances.add(s);
  return new e.default(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=foundation/src/Announcer
// locals: this
function {
  this = this;
  this.listenerInstances.clear();
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=142B file=foundation/src/Announcer
// args: require, module, exports
// locals: e, Announcer, <class_fields_init>, Announcer#1
function {
  let Announcer#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Announcer = undefined;
  e = require("foundation/src/impl/CallbackCancelable");
  let Announcer;
  let <class_fields_init>;
  class Announcer extends undefined { ... }
  <proto:Announcer>.announce = function <atom:0>;
  <proto:Announcer>.addListener = function <atom:0>;
  <proto:Announcer>.clear = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Announcer>;
  Announcer = function <atom:0>;
  // close_loc <class_fields_init>
  Announcer#1 = function <atom:0>;
  exports.Announcer = Announcer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/Announcer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
