// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=11B file=oai_platform_services/src/Celsius
// closure: AccountCelsiusService, e
function {
  return new AccountCelsiusService(e);
}

// fn r  args=1 vars=2 closure=3 cpool=1 bc=187B file=oai_platform_services/src/Celsius
// args: s
// locals: e
// closure: AccountCelsiusService, e, i
function {
  if (!(e.isVersionAtLeast(263))) goto L_ac;
  let e;
  e = s.celsiusService;
  if (!((undefined !== e))) goto L_a9;
  return i.accountContainerFor(s).resolve(AccountCelsiusService, function <atom:0>);   // tail call
  // close_loc e
  throw new Error("Celsius requires the celsius.v1 host capability");
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=58B file=oai_platform_services/src/Celsius
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.service = e;
  this.subscriptions = new Set();
  this.disposed = false;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=156B file=oai_platform_services/src/Celsius
// closure: r, this, o, c, t
function {
  if (!(r)) goto L_9b;
  r = false;
  false;
  this.subscriptions.delete(o);
  try { // catch -> L_8f
  c.cancel();
  <?>;
  // gosub (finally 块) 149
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 149
  throw <?>;
  t();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=46B file=oai_platform_services/src/Celsius
// args: e
// closure: r, i
function {
  if (!(r)) goto L_2d;
  i.onStateChanged(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=46B file=oai_platform_services/src/Celsius
// args: e
// closure: r, i
function {
  if (!(r)) goto L_2d;
  i.onMessages(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=45B file=oai_platform_services/src/Celsius
// closure: r, i
function {
  if (!(r)) goto L_2c;
  i.onInvalidated();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=86B file=oai_platform_services/src/Celsius
// args: e
// closure: r, o, i
function {
  if (!(r)) goto L_55;
  o.cancel();
  i.onError(e);
  return;
}

// fn <atom:0>  args=2 vars=8 closure=1 cpool=5 bc=353B file=oai_platform_services/src/Celsius
// args: e, i
// locals: r, t, o, c, n, this
// closure: s
function {
  this = this;
  let c;
  let o;
  let t;
  let r;
  if (!(this.disposed)) goto L_43;
  throw new Error("Cannot subscribe using an inactive Celsius account");
  r = true;
  t = s.protectNativeRefsForCurrentContextId();
  o = {cancel: function <atom:0>};
  c = undefined;
  try { // catch -> L_102
  c = this.service.subscribe(e, {onStateChanged: function <atom:0>, onMessages: function <atom:0>, onInvalidated: function <atom:0>, onError: function <atom:0>});
  this.service.subscribe(e, {onStateChanged: function <atom:0>, onMessages: function <atom:0>, onInvalidated: function <atom:0>, onError: function <atom:0>});
  <?>;
  goto L_112;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_111
  t();
  throw n;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.subscriptions.add(o);
  return o;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=102B file=oai_platform_services/src/Celsius
// locals: e, this
function {
  this = this;
  this.disposed = true;
  let e;
  for (const e of this.subscriptions) {
    e.cancel();
  }
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=160B file=oai_platform_services/src/Celsius
// args: require, module, exports
// locals: e, s, i, r, AccountCelsiusService, <class_fields_init>, AccountCelsiusService#1
function {
  r = function r;
  let AccountCelsiusService#1;
  let i;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.celsiusFor = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  s = require("valdi_core/src/NativeReferences");
  i = require("./AccountContainer");
  exports.celsiusFor = r;
  let AccountCelsiusService;
  let <class_fields_init>;
  class AccountCelsiusService extends undefined { ... }
  <proto:AccountCelsiusService>.subscribe = function <atom:0>;
  <proto:AccountCelsiusService>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AccountCelsiusService>;
  AccountCelsiusService = function <atom:0>;
  // close_loc <class_fields_init>
  AccountCelsiusService#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/Celsius
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
