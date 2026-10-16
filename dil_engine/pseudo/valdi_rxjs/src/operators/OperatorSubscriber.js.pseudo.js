// fn e  args=5 vars=5 closure=1 cpool=0 bc=15B file=valdi_rxjs/src/operators/OperatorSubscriber
// args: r, e, s, t, i
// closure: OperatorSubscriber
function {
  return new OperatorSubscriber(r, e, s, t, i);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=59B file=valdi_rxjs/src/operators/OperatorSubscriber
// args: s
// locals: t
// closure: e, r
function {
  try { // catch -> L_b
  e(s);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_3a
  r.error(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=120B file=valdi_rxjs/src/operators/OperatorSubscriber
// args: e
// locals: e#1, this
// closure: t, r
function {
  this = this;
  try { // catch -> L_14
  t(e);
  <?>;
  // gosub (finally 块) 80
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  e#1 = <?>;
  try { // catch -> L_4a
  r.error(e#1);
  <?>;
  // gosub (finally 块) 80
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 80
  throw <?>;
  this.unsubscribe();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=119B file=valdi_rxjs/src/operators/OperatorSubscriber
// locals: e, this
// closure: s, r
function {
  this = this;
  try { // catch -> L_13
  s();
  <?>;
  // gosub (finally 块) 79
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_49
  r.error(e);
  <?>;
  // gosub (finally 块) 79
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 79
  throw <?>;
  this.unsubscribe();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=6 vars=10 closure=1 cpool=3 bc=163B file=valdi_rxjs/src/operators/OperatorSubscriber
// args: r, e, s, t, i, c
// locals: this.active_func, new.target, this, <home_object>
// closure: <class_fields_init>
function {
  <home_object> = <special_object 4>;
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(r);
  if (!(<class_fields_init>)) goto L_25;
  <class_fields_init>.call(this);
  new new.target(r);
  this.onFinalize = i;
  this.shouldUnsubscribe = c;
  if (!(e)) goto L_4f;
  goto L_5a;
  // [栈深重同步 2 -> 1]
  this._next = get_super_value(this, super, "_next");
  if (!(t)) goto L_6d;
  goto L_78;
  // [栈深重同步 2 -> 1]
  this._error = get_super_value(this, super, "_error");
  if (!(s)) goto L_8b;
  goto L_96;
  // [栈深重同步 2 -> 1]
  this._complete = get_super_value(this, super, "_complete");
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=203B file=valdi_rxjs/src/operators/OperatorSubscriber
// locals: r, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if ((!this.shouldUnsubscribe)) goto L_51;
  if (!(this.shouldUnsubscribe())) goto L_ca;
  let r;
  if (((undefined === undefined))) goto L_82;
  r = <to_object>(undefined).closed;
  <to_object>(undefined);
  goto L_86;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_5b;
  // [栈深重同步 1 -> 0]
  super["unsubscribe"].call(this);
  if (!(!r)) goto L_c9;
  if (!((this.onFinalize == null))) goto L_c6;
  this.onFinalize;
  this;
  goto L_c9;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=187B file=valdi_rxjs/src/operators/OperatorSubscriber
// args: require, module, exports
// locals: r, e, OperatorSubscriber, <class_fields_init>, OperatorSubscriber#1
function {
  e = function e;
  let OperatorSubscriber#1;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createOperatorSubscriber = undefined;
  exports.OperatorSubscriber = undefined;
  r = require("../Subscriber");
  exports.createOperatorSubscriber = e;
  let OperatorSubscriber;
  let <class_fields_init>;
  class OperatorSubscriber extends r.Subscriber { ... }
  <proto:OperatorSubscriber>.unsubscribe = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OperatorSubscriber>;
  OperatorSubscriber = function <atom:0>;
  // close_loc <class_fields_init>
  OperatorSubscriber#1 = function <atom:0>;
  exports.OperatorSubscriber = OperatorSubscriber#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/OperatorSubscriber
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
