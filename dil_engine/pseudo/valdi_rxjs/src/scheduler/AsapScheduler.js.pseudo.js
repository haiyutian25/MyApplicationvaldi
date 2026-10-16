// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=525B file=valdi_rxjs/src/scheduler/AsapScheduler
// args: e
// locals: s, t, i, this
function {
  this = this;
  let i;
  let t;
  let s;
  this._active = true;
  s = this._scheduled;
  this._scheduled = undefined;
  if (((undefined === undefined))) goto L_71;
  t = <to_object>(undefined).actions;
  <to_object>(undefined);
  goto L_75;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_4a;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if ((e)) goto L_a3;
  e = t.shift();
  i = e.execute(e.state, e.delay);
  if ((e.execute(e.state, e.delay))) goto L_173;
  e = t[0];
  if (!(t[0])) goto L_16e;
  if (!((e.id === s))) goto L_16e;
  if ((t.shift())) goto L_a4;
  this._active = false;
  if (!(i)) goto L_20c;
  e = t[0];
  if (!(t[0])) goto L_208;
  if (!((e.id === s))) goto L_208;
  if (!(t.shift())) goto L_208;
  e.unsubscribe();
  goto L_187;
  throw i;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_rxjs/src/scheduler/AsapScheduler
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=161B file=valdi_rxjs/src/scheduler/AsapScheduler
// args: require, module, exports
// locals: e, AsapScheduler, <class_fields_init>, AsapScheduler#1
function {
  let AsapScheduler#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AsapScheduler = undefined;
  e = require("./AsyncScheduler");
  let AsapScheduler;
  let <class_fields_init>;
  class AsapScheduler extends e.AsyncScheduler { ... }
  <proto:AsapScheduler>.flush = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AsapScheduler>;
  AsapScheduler = function <atom:0>;
  // close_loc <class_fields_init>
  AsapScheduler#1 = function <atom:0>;
  exports.AsapScheduler = AsapScheduler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/AsapScheduler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
