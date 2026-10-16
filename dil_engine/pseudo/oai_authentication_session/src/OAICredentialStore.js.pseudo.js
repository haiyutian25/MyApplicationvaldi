// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=28B file=oai_authentication_session/src/OAICredentialStore
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.isPersistent = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=oai_authentication_session/src/OAICredentialStore
// locals: this
function {
  this = this;
  return Promise.resolve(this.credential);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=54B file=oai_authentication_session/src/OAICredentialStore
// args: e
// locals: this
function {
  this = this;
  this.credential = e;
  return Promise.resolve();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=54B file=oai_authentication_session/src/OAICredentialStore
// locals: this
function {
  this = this;
  this.credential = undefined;
  return Promise.resolve();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=28B file=oai_authentication_session/src/OAICredentialStore
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.isPersistent = false;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=55B file=oai_authentication_session/src/OAICredentialStore
function {
  return Promise.reject(new Error("Secure native credential storage is unavailable."));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=55B file=oai_authentication_session/src/OAICredentialStore
// args: e
function {
  return Promise.reject(new Error("Secure native credential storage is unavailable."));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=41B file=oai_authentication_session/src/OAICredentialStore
function {
  return Promise.resolve();   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=50B file=oai_authentication_session/src/OAICredentialStore
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.store = e;
  this.isPersistent = true;
  this.options = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=357B file=oai_authentication_session/src/OAICredentialStore
// locals: this
// closure: t, r
function {
  this = this;
  if (!((this.options == null))) goto L_2c;
  this.options;
  goto L_59;
  if (!((undefined.checkOperation == null))) goto L_56;
  undefined.checkOperation;
  undefined;
  goto L_59;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  if (!((this.options == null))) goto L_85;
  this.options;
  goto L_a6;
  if (!((undefined !== undefined.lifecycle))) goto L_164;
  if (!(!t.isApplicationForeground(this.options.lifecycle.getState()))) goto L_164;
  throw new r.PersistentStoreTemporarilyUnavailableError();
  return;
}

// fn <atom:0>  args=0 vars=7 closure=2 cpool=0 bc=896B file=oai_authentication_session/src/OAICredentialStore
// locals: e, t, r, o, i, n, this
// closure: s, a
function {
  this = this;
  let n;
  let i;
  let r;
  let t;
  let e;
  this.checkAdmission();
  e = (await this.store.exists(s));
  this.checkAdmission();
  if (!(!e)) goto L_b4;
  return undefined; // async
  t = (await this.store.fetchString(s));
  r = undefined;
  this.checkAdmission();
  try { // catch -> L_162
  r = JSON.parse(t);
  JSON.parse(t);
  <?>;
  goto L_178;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_177
  throw new Error("The encrypted authentication credential could not be decoded.");
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((("object" != typeof r))) goto L_1bb;
  if (((null === r))) goto L_1bb;
  if (!(Array.isArray(r))) goto L_1cc;
  throw new Error("The encrypted authentication credential has an invalid format.");
  i = r;
  if ((("string" != typeof i.accessToken))) goto L_2a5;
  if (((0 === i.accessToken.trim().length))) goto L_2a5;
  if (!((undefined !== i.accountId))) goto L_2b6;
  if (!(("string" != typeof i.accountId))) goto L_2b6;
  throw new Error("The encrypted authentication credential has an invalid format.");
  n = a(i.session);
  if (!((undefined === n))) goto L_312;
  goto L_31b;
  // [栈深重同步 2 -> 1]
  null;
  {session: n};
  if (!(("string" == typeof i.accountId))) goto L_379;
  goto L_37a;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {accessToken: i.accessToken}; // async
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=159B file=oai_authentication_session/src/OAICredentialStore
// args: e
// locals: this
// closure: s
function {
  this = this;
  this.checkAdmission();
  (await this.store.storeString(s, JSON.stringify(e)));
  return undefined; // async
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=240B file=oai_authentication_session/src/OAICredentialStore
// locals: e, this
// closure: s
function {
  this = this;
  let e;
  this.checkAdmission();
  e = (await this.store.exists(s));
  this.checkAdmission();
  if (!(e)) goto L_ed;
  (await this.store.remove(s));
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=289B file=oai_authentication_session/src/OAICredentialStore
// args: e
function {
  if (((null === e))) goto L_11f;
  if ((("object" != typeof e))) goto L_11f;
  if ((("string" != typeof e.id))) goto L_11f;
  if ((("string" != typeof e.name))) goto L_11f;
  if (!((undefined !== e.accountUserId))) goto L_ca;
  if ((("string" != typeof e.accountUserId))) goto L_11f;
  if (!((undefined !== e.planLabel))) goto L_11f;
  return !("string" != typeof e.planLabel);
}

// fn a  args=1 vars=2 closure=1 cpool=1 bc=529B file=oai_authentication_session/src/OAICredentialStore
// args: t
// locals: r
// closure: e
function {
  let r;
  if (!((undefined === t))) goto L_9;
  return;
  r = t;
  if (!((null !== r))) goto L_1ba;
  if (!((1 === r.version))) goto L_1ba;
  if (!(("string" == typeof r.baseUrl))) goto L_1ba;
  if (!(("number" == typeof r.expiresAt))) goto L_1ba;
  if (!(Number.isFinite(r.expiresAt))) goto L_1ba;
  if (!(Array.isArray(r.accounts))) goto L_1ba;
  if (!((0 !== r.accounts.length))) goto L_1ba;
  if (!(r.accounts.every(function <atom:0>))) goto L_1ba;
  return r;
  if (!(e.isLoggingEnabled)) goto L_210;
  console.warn("Saved account metadata requires account validation.");
  return;
}

// fn c  args=1 vars=4 closure=9 cpool=0 bc=951B file=oai_authentication_session/src/OAICredentialStore
// args: s
// locals: a, e, c
// closure: t, r, i, e, OAIMemoryCredentialStore, OAIEncryptedCredentialStore, n, o, OAIUnavailableCredentialStore
function {
  let a;
  if (!((s == null))) goto L_c;
  s;
  goto L_2d;
  a = undefined.lifecycle;
  if (!((undefined !== a))) goto L_ad;
  if (!(!t.isApplicationForeground(a.getState()))) goto L_ad;
  throw new r.PersistentStoreTemporarilyUnavailableError();
  if (!(i.Device.isWeb())) goto L_156;
  if (!(e.isLoggingEnabled)) goto L_14d;
  console.warn("Browser authentication remains in memory because secure native credential storage is unavailable.");
  return new OAIMemoryCredentialStore();
  if (!(i.Device.isAndroid())) goto L_23d;
  let e;
  e = Number(i.Device.getSystemVersion());
  if ((!Number.isInteger(e))) goto L_22c;
  if (!((e < 23))) goto L_23d;
  throw new Error("Secure authentication requires Android API level 23 or newer.");
  try { // catch -> L_326
  if (!((undefined === a))) goto L_2d3;
  goto L_318;
  // [栈深重同步 7 -> 6]
  return new OAIEncryptedCredentialStore(new r.PersistentStore(n, {disableBatchWrites: true, enableEncryption: true, userId: o, accessPolicy: r.PersistentStoreAccessPolicy.ForegroundOnly}), s);
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_3b6
  if (!((c instanceof r.PersistentStoreTemporarilyUnavailableError))) goto L_356;
  throw c;
  if (!(e.isLoggingEnabled)) goto L_3ac;
  console.warn("Secure native credential storage is unavailable; authentication will fail closed.");
  return new OAIUnavailableCredentialStore();
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=15 bc=437B file=oai_authentication_session/src/OAICredentialStore
// args: require, module, exports
// locals: e, t, r, i, n, o, s, OAIMemoryCredentialStore, <class_fields_init>, OAIMemoryCredentialStore#1, OAIUnavailableCredentialStore, <class_fields_init>#1, OAIUnavailableCredentialStore#1, OAIEncryptedCredentialStore, <class_fields_init>#2, OAIEncryptedCredentialStore#1, a, c
function {
  a = function a;
  c = function c;
  let OAIEncryptedCredentialStore#1;
  let OAIUnavailableCredentialStore#1;
  let OAIMemoryCredentialStore#1;
  let s;
  let o;
  let n;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAIMemoryCredentialStore = undefined;
  exports.OAIUnavailableCredentialStore = undefined;
  exports.OAIEncryptedCredentialStore = undefined;
  exports.createOAICredentialStore = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/ApplicationState");
  r = require("persistence/src/PersistentStore");
  i = require("valdi_core/src/Device");
  n = "com.openai.valdi.authenticated_session";
  o = "authenticated-session-bootstrap";
  s = "credential";
  let OAIMemoryCredentialStore;
  let <class_fields_init>;
  class OAIMemoryCredentialStore extends undefined { ... }
  <proto:OAIMemoryCredentialStore>.load = function <atom:0>;
  <proto:OAIMemoryCredentialStore>.save = function <atom:0>;
  <proto:OAIMemoryCredentialStore>.clear = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OAIMemoryCredentialStore>;
  OAIMemoryCredentialStore = function <atom:0>;
  // close_loc <class_fields_init>
  OAIMemoryCredentialStore#1 = function <atom:0>;
  exports.OAIMemoryCredentialStore = OAIMemoryCredentialStore#1;
  let OAIUnavailableCredentialStore;
  let <class_fields_init>#1;
  class OAIUnavailableCredentialStore extends undefined { ... }
  <proto:OAIUnavailableCredentialStore>.load = function <atom:0>;
  <proto:OAIUnavailableCredentialStore>.save = function <atom:0>;
  <proto:OAIUnavailableCredentialStore>.clear = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:OAIUnavailableCredentialStore>;
  OAIUnavailableCredentialStore = function <atom:0>;
  // close_loc <class_fields_init>#1
  OAIUnavailableCredentialStore#1 = function <atom:0>;
  exports.OAIUnavailableCredentialStore = OAIUnavailableCredentialStore#1;
  let OAIEncryptedCredentialStore;
  let <class_fields_init>#2;
  class OAIEncryptedCredentialStore extends undefined { ... }
  <proto:OAIEncryptedCredentialStore>.checkAdmission = function <atom:0>;
  <proto:OAIEncryptedCredentialStore>.load = function <atom:0>;
  <proto:OAIEncryptedCredentialStore>.save = function <atom:0>;
  <proto:OAIEncryptedCredentialStore>.clear = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:OAIEncryptedCredentialStore>;
  OAIEncryptedCredentialStore = function <atom:0>;
  // close_loc <class_fields_init>#2
  OAIEncryptedCredentialStore#1 = function <atom:0>;
  exports.OAIEncryptedCredentialStore = OAIEncryptedCredentialStore#1;
  exports.createOAICredentialStore = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_authentication_session/src/OAICredentialStore
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
