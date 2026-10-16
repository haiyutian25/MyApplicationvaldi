// fn o  args=1 vars=1 closure=0 cpool=0 bc=38B file=web_platform/src/Storage
// args: e
function {
  return "".concat(e);   // tail call
}

// fn n  args=1 vars=3 closure=0 cpool=0 bc=128B file=web_platform/src/Storage
// args: e
// locals: t, e#1
function {
  try { // catch -> L_9
  return e();
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_7f
  let e#1;
  if (!((t instanceof Error))) goto L_3f;
  goto L_40;
  // [栈深重同步 1 -> 0]
  e#1 = undefined;
  if ((("SecurityError" === e#1))) goto L_57;
  if (!(("QuotaExceededError" === e#1))) goto L_7d;
  if (!(("SecurityError" === e#1))) goto L_71;
  goto L_76;
  // [栈深重同步 3 -> 2]
  throw new DOMException("The storage operation could not be completed", e#1);
  throw t;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=42B file=web_platform/src/Storage
// args: e
// locals: this
// closure: <class_fields_init>, r
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  if (!((undefined === e))) goto L_23;
  throw new TypeError("Illegal constructor");
  this[r] = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=web_platform/src/Storage
// closure: this, r
function {
  return this[r].getLength();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=8B file=web_platform/src/Storage
// locals: this
// closure: r, n
function {
  this = this;
  return n(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=52B file=web_platform/src/Storage
// closure: this, r, t
function {
  if (!((this[r].keys()[t] == null))) goto L_33;
  this[r].keys()[t];
  return null;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=16B file=web_platform/src/Storage
// args: e
// locals: t, this
// closure: r, n
function {
  this = this;
  let t;
  t = (+e >>> 0);
  return n(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=44B file=web_platform/src/Storage
// closure: this, r, t
function {
  return this[r].getItem(t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=15B file=web_platform/src/Storage
// args: e
// locals: t, this
// closure: r, o, n
function {
  this = this;
  let t;
  t = o(e);
  return n(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=50B file=web_platform/src/Storage
// closure: this, r, a, s, t
function {
  return this[r].setItem(a, s, t);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=1 bc=21B file=web_platform/src/Storage
// args: e, l
// locals: a, s, this
// closure: r, t, o, n
function {
  this = this;
  let s;
  let a;
  a = o(e);
  s = o(l);
  n(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=44B file=web_platform/src/Storage
// closure: this, r, t
function {
  return this[r].removeItem(t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=14B file=web_platform/src/Storage
// args: e
// locals: t, this
// closure: r, o, n
function {
  this = this;
  let t;
  t = o(e);
  n(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=web_platform/src/Storage
// closure: this, r
function {
  return this[r].clear();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=7B file=web_platform/src/Storage
// locals: this
// closure: r, n
function {
  this = this;
  n(function <atom:0>);
  return;
}

// fn l  args=2 vars=4 closure=0 cpool=0 bc=474B file=web_platform/src/Storage
// args: e, t
// locals: r, t#1
function {
  Object.defineProperty(e, "name", {value: t, configurable: true});
  Object.defineProperty(e.prototype, Symbol.toStringTag, {value: t, configurable: true});
  let r;
  for (const r of Object.getOwnPropertyNames(e.prototype)) {
    if (!(("constructor" !== r))) continue;
    let t#1;
    t#1 = Object.getOwnPropertyDescriptor(e.prototype, r);
    null;
    t#1;
    Object.defineProperty(e.prototype, r, {enumerable: true});
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=45B file=web_platform/src/Storage
// closure: e, r
function {
  if (!((e.getItem(r) == null))) goto L_2c;
  e.getItem(r);
  return undefined;
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=1 bc=107B file=web_platform/src/Storage
// args: t, r, o
// closure: e, n
function {
  if ((("symbol" == typeof r))) goto L_37;
  if (!(Reflect.has(t, r))) goto L_66;
  return Reflect.get(t, r, o);
  return n(function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=44B file=web_platform/src/Storage
// closure: e, a, u, t
function {
  return e.setItem(a, u, t);   // tail call
}

// fn <atom:0>  args=4 vars=5 closure=5 cpool=1 bc=81B file=web_platform/src/Storage
// args: r, a, s, i
// locals: u
// closure: e, t, l, o, n
function {
  let u;
  if ((("symbol" == typeof a))) goto L_14;
  if (!((i !== l))) goto L_43;
  return Reflect.set(r, a, s, i);   // tail call
  u = o(s);
  n(function <atom:0>);
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=web_platform/src/Storage
// closure: e, r
function {
  return (null !== e.getItem(r));
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=64B file=web_platform/src/Storage
// args: t, r
// closure: e, n
function {
  if ((Reflect.has(t, r))) goto L_3f;
  if (!(("string" == typeof r))) goto L_3f;
  return n(function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=web_platform/src/Storage
// closure: e, r
function {
  return e.removeItem(r);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=109B file=web_platform/src/Storage
// args: t, r
// closure: e, n
function {
  if ((("symbol" == typeof r))) goto L_37;
  if (!(Reflect.has(t, r))) goto L_65;
  return Reflect.deleteProperty(t, r);
  n(function <atom:0>);
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=web_platform/src/Storage
// closure: e
function {
  return e.keys();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=web_platform/src/Storage
// args: e
// closure: r
function {
  return (e !== r);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=2 bc=92B file=web_platform/src/Storage
// args: t
// closure: e, r, n
function {
  // append([], 0, n(function <atom:0>))
  // append([], n(function <atom:0>), Reflect.ownKeys(t).filter(function <atom:0>))
  Reflect.ownKeys(t).filter(function <atom:0>);
  return [];
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=web_platform/src/Storage
// closure: e, o
function {
  return e.getItem(o);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=1 bc=156B file=web_platform/src/Storage
// args: t, o
// locals: l
// closure: e, r, n
function {
  let l;
  if (!((o === r))) goto L_b;
  return;
  if ((("symbol" == typeof o))) goto L_42;
  if (!(Reflect.has(t, o))) goto L_6f;
  return Reflect.getOwnPropertyDescriptor(t, o);   // tail call
  l = n(function <atom:0>);
  if (!((null === l))) goto L_7d;
  return undefined;
  return {value: l, writable: true, enumerable: true, configurable: true};
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=44B file=web_platform/src/Storage
// closure: e, l, s, t
function {
  return e.setItem(l, s, t);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=4 cpool=1 bc=166B file=web_platform/src/Storage
// args: r, l, a
// locals: s
// closure: e, t, o, n
function {
  let s;
  if (!(("symbol" == typeof l))) goto L_39;
  return Reflect.defineProperty(r, l, a);   // tail call
  if (((true !== a.configurable))) goto L_74;
  if ((("get" in a))) goto L_74;
  if (!(("set" in a))) goto L_79;
  return false;
  s = o(a.value);
  n(function <atom:0>);
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=web_platform/src/Storage
function {
  return false;
}

// fn a  args=1 vars=2 closure=5 cpool=8 bc=110B file=web_platform/src/Storage
// args: e
// locals: l
// closure: n, t, o, r, ValdiStorage
function {
  let l;
  l = new Proxy(new ValdiStorage(e), {get: function <atom:0>, set: function <atom:0>, has: function <atom:0>, deleteProperty: function <atom:0>, ownKeys: function <atom:0>, getOwnPropertyDescriptor: function <atom:0>, defineProperty: function <atom:0>, preventExtensions: function <atom:0>});
  return l;
}

// fn s  args=1 vars=1 closure=1 cpool=0 bc=11B file=web_platform/src/Storage
// args: e
// closure: o
function {
  if (!((null == e))) goto L_7;
  return null;
  return o(e);
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=32B file=web_platform/src/Storage
// args: e
// closure: ValdiStorage
function {
  if (!((null == e))) goto L_7;
  return null;
  if (!(!(e instanceof ValdiStorage))) goto L_1e;
  throw new TypeError("Invalid storage area");
  return e;
}

// fn <atom:0>  args=2 vars=15 closure=5 cpool=0 bc=613B file=web_platform/src/Storage
// args: t, r
// locals: n, l, a, u, c, g, f, b, d, y, this.active_func, new.target, this
// closure: o, s, i, e, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let y;
  let d;
  let b;
  let f;
  let g;
  let c;
  let u;
  let a;
  let l;
  let n;
  n = o(t);
  if (!((null != r))) goto L_56;
  if (!(("object" != typeof r))) goto L_56;
  if (!(("function" != typeof r))) goto L_56;
  throw new TypeError("StorageEventInit must be a dictionary");
  if (!((r == null))) goto L_5f;
  r;
  goto L_80;
  l = !!undefined.bubbles;
  if (!((r == null))) goto L_8c;
  r;
  goto L_ad;
  a = !!undefined.cancelable;
  if (!((r == null))) goto L_b9;
  r;
  goto L_da;
  u = !!undefined.composed;
  if (!((r == null))) goto L_e7;
  r;
  goto L_108;
  c = s(undefined.key);
  if (!((r == null))) goto L_115;
  r;
  goto L_136;
  g = s(undefined.newValue);
  if (!((r == null))) goto L_143;
  r;
  goto L_164;
  f = s(undefined.oldValue);
  if (!((r == null))) goto L_171;
  r;
  goto L_192;
  b = i(undefined.storageArea);
  if (!((r == null))) goto L_19e;
  r;
  goto L_1bf;
  d = undefined.url;
  if (!((undefined === d))) goto L_1cb;
  goto L_1f3;
  // [栈深重同步 1 -> 0]
  y = e.usvString(d);
  this = new new.target(n, {bubbles: l, cancelable: a, composed: u});
  if (!(<class_fields_init>)) goto L_22a;
  <class_fields_init>.call(this);
  new new.target(n, {bubbles: l, cancelable: a, composed: u});
  this.state = {key: c, oldValue: f, newValue: g, url: y, storageArea: b};
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=web_platform/src/Storage
// locals: this
function {
  this = this;
  return this.state.key;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=web_platform/src/Storage
// locals: this
function {
  this = this;
  return this.state.oldValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=web_platform/src/Storage
// locals: this
function {
  this = this;
  return this.state.newValue;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=web_platform/src/Storage
// locals: this
function {
  this = this;
  return this.state.url;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=web_platform/src/Storage
// locals: this
function {
  this = this;
  return this.state.storageArea;
}

// fn <atom:0>  args=8 vars=13 closure=3 cpool=0 bc=254B file=web_platform/src/Storage
// args: e, t, r, n, l, a, u, c
// locals: g, f, b, d, this
// closure: o, s, i
function {
  this = this;
  let d;
  let b;
  let f;
  let g;
  g = o(e);
  f = !!t;
  b = !!r;
  if (!((undefined === u))) goto L_42;
  goto L_47;
  // [栈深重同步 2 -> 1]
  d = {key: s(n), oldValue: s(l), newValue: s(a), url: o(u), storageArea: i(c)};
  if (!((0 === this.eventPhase))) goto L_fd;
  Object.assign(this, {type: g, bubbles: f, cancelable: b, target: null, defaultPrevented: false, isTrusted: false, cancelBubble: false, returnValue: true, immediateStopped: false});
  this.state = d;
  d;
  return;
}

// fn <atom:0>  args=3 vars=3 closure=3 cpool=0 bc=50B file=web_platform/src/Storage
// args: e, r, n
// closure: o, ValdiStorageEvent, t
function {
  o(new ValdiStorageEvent("storage", {key: e, oldValue: r, newValue: n, url: "", storageArea: t}));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=98B file=web_platform/src/Storage
// args: e
// closure: n
function {
  if (!((n == null))) goto L_d;
  n;
  goto L_37;
  if (!((false === undefined.call(globalThis, e)))) goto L_61;
  e.preventDefault();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=web_platform/src/Storage
// closure: n
function {
  return n;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=159B file=web_platform/src/Storage
// args: e
// locals: t
// closure: n, l
function {
  let t;
  if (!(("function" == typeof e))) goto L_10;
  goto L_11;
  // [栈深重同步 1 -> 0]
  t = null;
  if (!((null === n))) goto L_53;
  if (!((null !== t))) goto L_53;
  goto L_96;
  // [栈深重同步 1 -> 0]
  if (!((null !== n))) goto L_96;
  if (!((null === t))) goto L_96;
  globalThis.removeEventListener("storage", l);
  n = t;
  t;
  return;
}

// fn u  args=1 vars=6 closure=3 cpool=4 bc=562B file=web_platform/src/Storage
// args: e
// locals: t, r, o, n, l
// closure: ValdiStorageEvent, a, ValdiStorage
function {
  let l;
  let n;
  let o;
  let r;
  let t;
  if (!((undefined !== globalThis.Storage))) goto L_3a;
  return;
  if (((undefined === e.local))) goto L_86;
  if (!((undefined === e.session))) goto L_89;
  return;
  t = a(e.local);
  r = a(e.session);
  o = e.installEventTarget();
  e.local.setOnChange(function <atom:0>);
  globalThis.Storage = ValdiStorage;
  globalThis.StorageEvent = ValdiStorageEvent;
  Object.defineProperties(globalThis, {localStorage: {value: t, enumerable: true, configurable: true}, sessionStorage: {value: r, enumerable: true, configurable: true}});
  n = null;
  l = function <atom:0>;
  Object.defineProperty(globalThis, "onstorage", {get: function <atom:0>, set: function <atom:0>, enumerable: true, configurable: true});
  return;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=21 bc=518B file=web_platform/src/Storage
// args: require, module, exports
// locals: e, t, r, o, n, ValdiStorage, <class_fields_init>, ValdiStorage#1, l, a, s, i, ValdiStorageEvent, <class_fields_init>#1, ValdiStorageEvent#1, u
function {
  o = function o;
  n = function n;
  l = function l;
  a = function a;
  s = function s;
  i = function i;
  u = function u;
  let ValdiStorageEvent#1;
  let ValdiStorage#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.installStorage = undefined;
  e = require("./WebIDL");
  t = 5242880;
  r = Symbol("storageBackend");
  let ValdiStorage;
  let <class_fields_init>;
  class ValdiStorage extends undefined { ... }
  <proto:ValdiStorage>.length = function <atom:0>;
  <proto:ValdiStorage>.key = function <atom:0>;
  <proto:ValdiStorage>.getItem = function <atom:0>;
  <proto:ValdiStorage>.setItem = function <atom:0>;
  <proto:ValdiStorage>.removeItem = function <atom:0>;
  <proto:ValdiStorage>.clear = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ValdiStorage>;
  ValdiStorage = function <atom:0>;
  // close_loc <class_fields_init>
  ValdiStorage#1 = function <atom:0>;
  l(ValdiStorage#1, "Storage");
  let ValdiStorageEvent;
  let <class_fields_init>#1;
  class ValdiStorageEvent extends Event { ... }
  <proto:ValdiStorageEvent>.key = function <atom:0>;
  <proto:ValdiStorageEvent>.oldValue = function <atom:0>;
  <proto:ValdiStorageEvent>.newValue = function <atom:0>;
  <proto:ValdiStorageEvent>.url = function <atom:0>;
  <proto:ValdiStorageEvent>.storageArea = function <atom:0>;
  <proto:ValdiStorageEvent>.initStorageEvent = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ValdiStorageEvent>;
  ValdiStorageEvent = function <atom:0>;
  // close_loc <class_fields_init>#1
  ValdiStorageEvent#1 = function <atom:0>;
  l(ValdiStorageEvent#1, "StorageEvent");
  Object.defineProperty(ValdiStorageEvent#1, "length", {value: 1, configurable: true});
  Object.defineProperty(ValdiStorageEvent#1.prototype.initStorageEvent, "length", {value: 1, configurable: true});
  exports.installStorage = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=web_platform/src/Storage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
