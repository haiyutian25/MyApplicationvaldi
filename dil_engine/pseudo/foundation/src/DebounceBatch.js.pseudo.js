// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=foundation/src/DebounceBatch
// args: e
function {
  return e.value;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=foundation/src/DebounceBatch
// args: e
function {
  return e.completion;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=54B file=foundation/src/DebounceBatch
// args: e, o
// locals: t, s
// closure: c
function {
  let t;
  t = 0;
  if (!((t < c.length))) goto L_35;
  let s;
  s = c[t];
  if (!(e)) goto L_27;
  goto L_28;
  // [栈深重同步 2 -> 1]
  s(undefined, o);
  t = <t_new>;
  (t++);
  goto L_5;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=3 bc=94B file=foundation/src/DebounceBatch
// args: e
// locals: o, c
// closure: t
function {
  let c;
  let o;
  o = e.map(function <atom:0>);
  c = e.map(function <atom:0>);
  t(o, function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=1 bc=70B file=foundation/src/DebounceBatch
// args: o, c, t
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.debouncer = new e.Debounce(o, c, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=86B file=foundation/src/DebounceBatch
// args: e, o
// locals: this
function {
  this = this;
  this.debouncer.schedule({value: e, completion: o});
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=12B file=foundation/src/DebounceBatch
// args: e, t
// closure: o, c
function {
  if (!(e)) goto L_8;
  goto L_b;
  // [栈深重同步 1 -> 0]
  c(t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=41B file=foundation/src/DebounceBatch
// args: o, c
// closure: this, e
function {
  this.schedule(e, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=14B file=foundation/src/DebounceBatch
// args: e
// locals: this
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=foundation/src/DebounceBatch
// locals: this
function {
  this = this;
  this.debouncer.stop();
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=142B file=foundation/src/DebounceBatch
// args: require, module, exports
// locals: e, DebounceBatch, <class_fields_init>, DebounceBatch#1
function {
  let DebounceBatch#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DebounceBatch = undefined;
  e = require("./Debounce");
  let DebounceBatch;
  let <class_fields_init>;
  class DebounceBatch extends undefined { ... }
  <proto:DebounceBatch>.schedule = function <atom:0>;
  <proto:DebounceBatch>.schedulePromise = function <atom:0>;
  <proto:DebounceBatch>.stop = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DebounceBatch>;
  DebounceBatch = function <atom:0>;
  // close_loc <class_fields_init>
  DebounceBatch#1 = function <atom:0>;
  exports.DebounceBatch = DebounceBatch#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/DebounceBatch
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
