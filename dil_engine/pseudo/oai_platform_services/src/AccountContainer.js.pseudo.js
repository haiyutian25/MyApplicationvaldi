// fn o  args=1 vars=2 closure=1 cpool=0 bc=235B file=oai_platform_services/src/AccountContainer
// args: s
// locals: t
// closure: e
function {
  try { // catch -> L_8a
  try { // catch -> L_5b
  s.service.dispose();
  <?>;
  // gosub (finally 块) 97
  undefined;
  goto L_88;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 97
  throw <?>;
  s.releaseNativeRefs();
  // ret (finally 块) 
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_ea
  if (!(e.isLoggingEnabled)) goto L_e7;
  console.warn("Failed to dispose an account-scoped service", t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=47B file=oai_platform_services/src/AccountContainer
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.services = new Map();
  this.disposed = false;
  return;
}

// fn <atom:0>  args=2 vars=8 closure=2 cpool=0 bc=410B file=oai_platform_services/src/AccountContainer
// args: e, s
// locals: t, i, n, a, c, this
// closure: r, o
function {
  this = this;
  let c;
  let n;
  let i;
  let t;
  if (!(this.disposed)) goto L_43;
  throw new Error("Cannot resolve services from an inactive account scope");
  t = this.services.get(e);
  if (!((undefined !== t))) goto L_b8;
  return t.service;
  i = r.protectNativeRefsForCurrentContextId();
  n = undefined;
  try { // catch -> L_ef
  n = s();
  s();
  <?>;
  goto L_fd;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_fc
  i();
  throw a;
  // [栈深重同步 0 -> 1]
  throw <?>;
  c = {service: n, releaseNativeRefs: i};
  if (!(this.disposed)) goto L_14a;
  o(c);
  throw new Error("Cannot resolve services from an inactive account scope");
  this.services.set(e, c);
  return n;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=215B file=oai_platform_services/src/AccountContainer
// locals: e, this
// closure: o
function {
  this = this;
  if (!(!this.disposed)) goto L_d6;
  this.disposed = true;
  let e;
  for (const e of this.services.values()) {
    o(e);
  }
  this.services.clear();
  return;
}

// fn c  args=1 vars=2 closure=2 cpool=0 bc=108B file=oai_platform_services/src/AccountContainer
// args: e
// locals: s
// closure: t, l
function {
  if (!(t.isVersionAtLeast(64))) goto L_5d;
  let s;
  s = e.accountScope;
  if (!((undefined !== s))) goto L_5d;
  return l(s);   // tail call
  throw new Error("Account-scoped services require the account_scope.v1 host capability");
}

// fn a  args=1 vars=1 closure=1 cpool=0 bc=80B file=oai_platform_services/src/AccountContainer
// args: e
// closure: t
function {
  if (!(t.isVersionAtLeast(64))) goto L_4f;
  return (undefined !== e.accountScope);
}

// fn l  args=1 vars=4 closure=2 cpool=0 bc=431B file=oai_platform_services/src/AccountContainer
// args: e
// locals: s, t, i
// closure: n, AccountContainerEntry
function {
  let t;
  let s;
  s = n.get(e.identifier);
  if (!((undefined !== s))) goto L_7c;
  return s.container;
  t = new AccountContainerEntry(e.identifier);
  n.set(e.identifier, t);
  try { // catch -> L_124
  t.observe(e);
  <?>;
  goto L_155;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_154
  t.release();
  throw i;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(t.isReleased)) goto L_18a;
  throw new Error("Cannot resolve an inactive account scope");
  return t.container;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=93B file=oai_platform_services/src/AccountContainer
// locals: e
// closure: n
function {
  let e;
  for (const e of n.values()) {
    e.release();
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=56B file=oai_platform_services/src/AccountContainer
// args: e
// locals: this
// closure: <class_fields_init>, AccountContainerOwner
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.identifier = e;
  this.container = new AccountContainerOwner();
  this.released = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=oai_platform_services/src/AccountContainer
// locals: this
function {
  this = this;
  return this.released;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=43B file=oai_platform_services/src/AccountContainer
// args: e
// closure: this
function {
  if ((e)) goto L_2a;
  this.release();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=126B file=oai_platform_services/src/AccountContainer
// args: s
// closure: e, this
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Failed to observe native account lifetime", s);
  this.release();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=oai_platform_services/src/AccountContainer
// closure: this
function {
  return this.release();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=3 bc=180B file=oai_platform_services/src/AccountContainer
// closure: this, e, s, t
function {
  return s.convertBridgeObservableToObservable(t.lifetime.observeIsActive()).subscribe({next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>});   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=137B file=oai_platform_services/src/AccountContainer
// args: t
// locals: i, this
// closure: e, s, r
function {
  this = this;
  let i;
  i = r.withGlobalNativeRefs(function <atom:0>);
  if (!(this.released)) goto L_7a;
  goto L_88;
  // [栈深重同步 1 -> 0]
  this.subscription = i;
  i;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=475B file=oai_platform_services/src/AccountContainer
// locals: s, this
// closure: n, e
function {
  this = this;
  if (!(!this.released)) goto L_1da;
  this.released = true;
  if (!((n.get(this.identifier) === this))) goto L_ce;
  n.delete(this.identifier);
  try { // catch -> L_126
  if (!((this.subscription == null))) goto L_fe;
  this.subscription;
  goto L_122;
  undefined.unsubscribe();
  <?>;
  goto L_188;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_187
  if (!(e.isLoggingEnabled)) goto L_183;
  console.warn("Failed to stop observing native account lifetime", s);
  <?>;
  goto L_188;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.subscription = undefined;
  this.container.dispose();
  return;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=12 bc=435B file=oai_platform_services/src/AccountContainer
// args: require, module, exports
// locals: e, s, t, i, r, o, AccountContainerOwner, <class_fields_init>, AccountContainerOwner#1, n, c, a, l, AccountContainerEntry, <class_fields_init>#1, AccountContainerEntry#1
function {
  o = function o;
  c = function c;
  a = function a;
  l = function l;
  let AccountContainerEntry#1;
  let n;
  let AccountContainerOwner#1;
  let r;
  let i;
  let t;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.accountContainerFor = undefined;
  exports.supportsAccountScopedServices = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  s = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  t = require("valdi_core/src/CompilerIntrinsics");
  i = require("valdi_core/src/ModuleLoaderGlobal");
  r = require("valdi_core/src/NativeReferences");
  let AccountContainerOwner;
  let <class_fields_init>;
  class AccountContainerOwner extends undefined { ... }
  <proto:AccountContainerOwner>.resolve = function <atom:0>;
  <proto:AccountContainerOwner>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AccountContainerOwner>;
  AccountContainerOwner = function <atom:0>;
  // close_loc <class_fields_init>
  AccountContainerOwner#1 = function <atom:0>;
  n = new Map();
  i.getModuleLoader(module).onHotReload(module, module.path, function <atom:0>);
  exports.accountContainerFor = c;
  exports.supportsAccountScopedServices = a;
  let AccountContainerEntry;
  let <class_fields_init>#1;
  class AccountContainerEntry extends undefined { ... }
  <proto:AccountContainerEntry>.isReleased = function <atom:0>;
  <proto:AccountContainerEntry>.observe = function <atom:0>;
  <proto:AccountContainerEntry>.release = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AccountContainerEntry>;
  AccountContainerEntry = function <atom:0>;
  // close_loc <class_fields_init>#1
  AccountContainerEntry#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/AccountContainer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
