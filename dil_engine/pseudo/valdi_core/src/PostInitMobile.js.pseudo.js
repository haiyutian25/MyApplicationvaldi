// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=valdi_core/src/PostInitMobile
// args: e, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.timeout = r;
  this.handler = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=138B file=valdi_core/src/PostInitMobile
// locals: this
// closure: s
function {
  this = this;
  this.handler = undefined;
  if (!(this.currentTaskId)) goto L_89;
  s.unscheduleWorkItem(this.currentTaskId);
  this.currentTaskId = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=valdi_core/src/PostInitMobile
// closure: this
function {
  this.tick();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=168B file=valdi_core/src/PostInitMobile
// locals: this
// closure: s
function {
  this = this;
  if ((!this.handler)) goto L_4b;
  if (!(!this.currentTaskId)) goto L_a7;
  this.currentTaskId = s.scheduleWorkItem(function <atom:0>, this.timeout);
  return true;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=189B file=valdi_core/src/PostInitMobile
// locals: e, this
// closure: s
function {
  this = this;
  if (!(this.handler)) goto L_8c;
  try { // catch -> L_54
  this.handler();
  <?>;
  goto L_8c;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_8b
  s.onUncaughtError("TimerCallback", e);
  <?>;
  goto L_8c;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.currentTaskId = undefined;
  this.schedule();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=45B file=valdi_core/src/PostInitMobile
// args: e
// closure: s
function {
  return s.onUncaughtError("AbortSignal", e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=83B file=valdi_core/src/PostInitMobile
// closure: e
function {
  e.load("valdi_core/src/AbortControllerNative", true).initializeNativeAbortController();
  return;
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=102B file=valdi_core/src/PostInitMobile
// args: e, r, t
// closure: s
function {
  t = ...2;
  if (!(t.length)) goto L_5c;
  // append([undefined], 1, t)
  t;
  goto L_5d;
  // [栈深重同步 3 -> 2]
  if ((r)) goto L_63;
  return s.scheduleWorkItem(e, 0);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=valdi_core/src/PostInitMobile
// args: e
// closure: s
function {
  s.unscheduleWorkItem(e);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=118B file=valdi_core/src/PostInitMobile
// args: e, r, t
// locals: o
// closure: Timer
function {
  t = ...2;
  let o;
  if (!(t.length)) goto L_3f;
  // append([undefined], 1, t)
  t;
  goto L_40;
  // [栈深重同步 3 -> 2]
  if ((r)) goto L_46;
  o = new Timer(e, 0);
  o.schedule();
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=47B file=valdi_core/src/PostInitMobile
// args: e
// closure: Timer
function {
  if (!((e instanceof Timer))) goto L_2e;
  e.invalidate();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=147B file=valdi_core/src/PostInitMobile
// locals: r
// closure: e, o
function {
  let r;
  r = e.load("coreutils/src/unicode/TextCoding", true);
  o.TextDecoder = r.TextDecoder;
  o.TextEncoder = r.TextEncoder;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=86B file=valdi_core/src/PostInitMobile
// closure: l, s
function {
  l.load("valdi_core/src/InstallWebPlatform", true).installWebPlatform(s);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/PostInitMobile
function {
  return;
}

// fn l  args=0 vars=5 closure=7 cpool=9 bc=1394B file=valdi_core/src/PostInitMobile
// locals: o, e, e#1, e#2, l
// closure: s, Timer, e, r, t, i, n
function {
  let l;
  let o;
  o = globalThis;
  e.installAbortController(function <atom:0>);
  if (!((s.apiVersion >= 221))) goto L_b8;
  let e;
  e = o.moduleLoader;
  e.onModuleRegistered("valdi_core/src/AbortSignalNative", function <atom:0>);
  // close_loc e
  o.console = new r.Console(s.outputLog);
  if (!(t.isVersionAtLeast(278))) goto L_21b;
  let e#1;
  e#1 = o.moduleLoader;
  o.ResizeObserver = e#1.load("valdi_core/src/ResizeObserver", true).ResizeObserver;
  o.IntersectionObserver = e#1.load("valdi_core/src/IntersectionObserver", true).IntersectionObserver;
  if ((o.realTimingFunctions)) goto L_330;
  o.realTimingFunctions = {setTimeout: o.setTimeout, clearTimeout: o.clearTimeout, setInterval: o.setInterval, clearInterval: o.clearInterval};
  o.setTimeout = function <atom:0>;
  o.clearTimeout = function <atom:0>;
  o.setInterval = function <atom:0>;
  o.clearInterval = function <atom:0>;
  function <atom:0>;
  if (!(i.arePromiseUtterlyBroken(s.getCurrentPlatform))) goto L_3a3;
  i.polyfillPromise();
  o.__tsn_async_helper = n.__tsn_async_helper;
  o.__tsn_get_iterator = n.__tsn_get_iterator;
  o.__tsn_get_async_iterator = n.__tsn_get_async_iterator;
  o.__tsn_async_generator_helper = n.__tsn_async_generator_helper;
  if ((!o.TextDecoder)) goto L_4b2;
  if (!(!o.TextEncoder)) goto L_50e;
  let e#2;
  e#2 = o.moduleLoader;
  e#2.onModuleRegistered("coreutils/src/unicode/UnicodeNative", function <atom:0>);
  // close_loc e#2
  l = o.moduleLoader;
  l.onModuleRegistered("web_platform/src/BlobNative", function <atom:0>);
  o.onmessage = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=5 bc=247B file=valdi_core/src/PostInitMobile
// args: require, module, exports
// locals: e, r, t, o, i, n, s, Timer, <class_fields_init>, Timer#1, l
function {
  l = function l;
  let Timer#1;
  let s;
  let n;
  let i;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.postInitMobile = undefined;
  e = require("./AbortController");
  r = require("valdi_core/src/Console");
  t = require("./CompilerIntrinsics");
  o = require("./ValdiRuntimeProvider");
  i = require("./PromisePolyfill");
  n = require("./TsnHelper");
  s = o.getValdiRuntime();
  let Timer;
  let <class_fields_init>;
  class Timer extends undefined { ... }
  <proto:Timer>.invalidate = function <atom:0>;
  <proto:Timer>.schedule = function <atom:0>;
  <proto:Timer>.tick = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Timer>;
  Timer = function <atom:0>;
  // close_loc <class_fields_init>
  Timer#1 = function <atom:0>;
  exports.postInitMobile = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/PostInitMobile
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
