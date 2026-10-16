// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=61B file=valdi_rxjs/src/Subscription
// args: i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.initialTeardown = i;
  this.closed = false;
  this._parentage = null;
  this._finalizers = null;
  return;
}

// fn <atom:0>  args=0 vars=9 closure=3 cpool=0 bc=808B file=valdi_rxjs/src/Subscription
// locals: s, o, i, c, t, a, i#1, e, this
// closure: i, r, n
function {
  this = this;
  let s;
  s = undefined;
  if (!(!this.closed)) goto L_327;
  let a;
  let c;
  let o;
  this.closed = true;
  if (((undefined === undefined))) goto L_73;
  o = <to_object>(undefined)._parentage;
  <to_object>(undefined);
  goto L_78;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_4c;
  // [栈深重同步 1 -> 0]
  if (!(o)) goto L_120;
  this._parentage = null;
  if (!(Array.isArray(o))) goto L_f6;
  let i;
  for (const i of o) {
    i.remove(this);
  }
  goto L_120;
  o.remove(this);
  if (((undefined === undefined))) goto L_14c;
  c = <to_object>(undefined).initialTeardown;
  <to_object>(undefined);
  goto L_151;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_125;
  // [栈深重同步 1 -> 0]
  if (!(i.isFunction(c))) goto L_1eb;
  try { // catch -> L_188
  c();
  <?>;
  goto L_1eb;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_1ea
  if (!((t instanceof r.UnsubscriptionError))) goto L_1dd;
  goto L_1e2;
  // [栈深重同步 1 -> 0]
  s = [t];
  [t];
  <?>;
  goto L_1eb;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (((undefined === undefined))) goto L_218;
  a = <to_object>(undefined)._finalizers;
  <to_object>(undefined);
  goto L_21d;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1f0;
  // [栈深重同步 1 -> 0]
  if (!(a)) goto L_2f6;
  this._finalizers = null;
  let i#1;
  for (const i#1 of a) {
    try { // catch -> L_24c
    n(i#1);
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    e = <?>;
    try { // catch -> L_2ec
    if (!((s == null))) goto L_25e;
    s;
    s = [];
    [];
    if (!((e instanceof r.UnsubscriptionError))) goto L_2bf;
    // append([], 0, s)
    // append([], s, e.errors)
    e.errors;
    s = [];
    goto L_2e8;
    // [栈深重同步 4 -> 3]
    s.push(e);
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  if (!(s)) goto L_327;
  throw new r.UnsubscriptionError(s);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=274B file=valdi_rxjs/src/Subscription
// args: i
// locals: this
// closure: n, Subscription
function {
  this = this;
  if (!(i)) goto L_111;
  if (!((i !== this))) goto L_111;
  if (!(this.closed)) goto L_39;
  n(i);
  return;
  if (!((i instanceof Subscription))) goto L_b6;
  if ((i.closed)) goto L_8c;
  if (!(i._hasParent(this))) goto L_8f;
  return;
  i._addParent(this);
  if (!((this._finalizers == null))) goto L_e1;
  this._finalizers;
  this._finalizers = [];
  [].push(i);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=151B file=valdi_rxjs/src/Subscription
// args: i
// locals: r, this
function {
  this = this;
  let r;
  if (((undefined === undefined))) goto L_31;
  r = <to_object>(undefined)._parentage;
  <to_object>(undefined);
  goto L_35;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a;
  // [栈深重同步 1 -> 0]
  if (((r === i))) goto L_96;
  if (!(Array.isArray(r))) goto L_96;
  return r.includes(i);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=171B file=valdi_rxjs/src/Subscription
// args: i
// locals: r, this
function {
  this = this;
  let r;
  if (((undefined === undefined))) goto L_31;
  r = <to_object>(undefined)._parentage;
  <to_object>(undefined);
  goto L_35;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a;
  // [栈深重同步 1 -> 0]
  if (!(Array.isArray(r))) goto L_92;
  r.push(i);
  goto L_a1;
  // [栈深重同步 2 -> 1]
  if (!(r)) goto L_a0;
  goto L_a1;
  // [栈深重同步 2 -> 1]
  this._parentage = i;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=164B file=valdi_rxjs/src/Subscription
// args: i
// locals: r, this
// closure: s
function {
  this = this;
  let r;
  if (((undefined === undefined))) goto L_31;
  r = <to_object>(undefined)._parentage;
  <to_object>(undefined);
  goto L_35;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a;
  // [栈深重同步 1 -> 0]
  if (!((r === i))) goto L_4a;
  this._parentage = null;
  goto L_a3;
  // [栈深重同步 1 -> 0]
  if (!(Array.isArray(r))) goto L_a3;
  s.arrRemove(r, i);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=150B file=valdi_rxjs/src/Subscription
// args: i
// locals: r, this
// closure: s, Subscription
function {
  this = this;
  let r;
  if (((undefined === undefined))) goto L_31;
  r = <to_object>(undefined)._finalizers;
  <to_object>(undefined);
  goto L_35;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_65;
  s.arrRemove(r, i);
  if (!((i instanceof Subscription))) goto L_95;
  i._removeParent(this);
  return;
}

// fn t  args=1 vars=1 closure=2 cpool=0 bc=259B file=valdi_rxjs/src/Subscription
// args: r
// closure: Subscription, i
function {
  if (((r instanceof Subscription))) goto L_102;
  if (!(r)) goto L_102;
  if (!(("closed" in r))) goto L_102;
  if (!(i.isFunction(r.remove))) goto L_102;
  if (!(i.isFunction(r.add))) goto L_102;
  return i.isFunction(r.unsubscribe);
}

// fn n  args=1 vars=1 closure=1 cpool=0 bc=82B file=valdi_rxjs/src/Subscription
// args: r
// closure: i
function {
  if (!(i.isFunction(r))) goto L_2c;
  goto L_51;
  // [栈深重同步 1 -> 0]
  r.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=29B file=valdi_rxjs/src/Subscription
// locals: i
// closure: Subscription
function {
  let i;
  i = new Subscription();
  i.closed = true;
  return i;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=10 bc=296B file=valdi_rxjs/src/Subscription
// args: require, module, exports
// locals: i, r, s, Subscription, <class_fields_init>, Subscription#1, t, n
function {
  t = function t;
  n = function n;
  let Subscription#1;
  let s;
  let r;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Subscription = undefined;
  exports.EMPTY_SUBSCRIPTION = undefined;
  exports.isSubscription = undefined;
  i = require("./util/isFunction");
  r = require("./util/UnsubscriptionError");
  s = require("./util/arrRemove");
  let Subscription;
  let <class_fields_init>;
  class Subscription extends undefined { ... }
  <proto:Subscription>.unsubscribe = function <atom:0>;
  <proto:Subscription>.add = function <atom:0>;
  <proto:Subscription>._hasParent = function <atom:0>;
  <proto:Subscription>._addParent = function <atom:0>;
  <proto:Subscription>._removeParent = function <atom:0>;
  <proto:Subscription>.remove = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Subscription>;
  Subscription = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Subscription
  Subscription#1 = function <atom:0>;
  exports.Subscription = Subscription#1;
  Subscription#1.EMPTY = function <atom:0>();
  exports.EMPTY_SUBSCRIPTION = Subscription#1.EMPTY;
  exports.isSubscription = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/Subscription
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
