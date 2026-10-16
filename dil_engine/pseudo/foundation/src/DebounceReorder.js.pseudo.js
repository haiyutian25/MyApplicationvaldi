// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=70B file=foundation/src/DebounceReorder
// args: e, o
function {
  return (e.priority - o.priority);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=foundation/src/DebounceReorder
// args: e
// closure: t
function {
  return t(e.value);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=2 bc=79B file=foundation/src/DebounceReorder
// args: e
// closure: t
function {
  e.sort(function <atom:0>);
  return e.forEach(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=1 bc=70B file=foundation/src/DebounceReorder
// args: o, r, t
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.debouncer = new e.Debounce(o, r, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=86B file=foundation/src/DebounceReorder
// args: e, o
// locals: this
function {
  this = this;
  this.debouncer.schedule({priority: e, value: o});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=foundation/src/DebounceReorder
// locals: this
function {
  this = this;
  this.debouncer.stop();
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=134B file=foundation/src/DebounceReorder
// args: require, module, exports
// locals: e, DebounceReorder, <class_fields_init>, DebounceReorder#1
function {
  let DebounceReorder#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DebounceReorder = undefined;
  e = require("./Debounce");
  let DebounceReorder;
  let <class_fields_init>;
  class DebounceReorder extends undefined { ... }
  <proto:DebounceReorder>.schedule = function <atom:0>;
  <proto:DebounceReorder>.stop = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DebounceReorder>;
  DebounceReorder = function <atom:0>;
  // close_loc <class_fields_init>
  DebounceReorder#1 = function <atom:0>;
  exports.DebounceReorder = DebounceReorder#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/DebounceReorder
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
