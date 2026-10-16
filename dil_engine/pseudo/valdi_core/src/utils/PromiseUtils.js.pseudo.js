// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=30B file=valdi_core/src/utils/PromiseUtils
// args: e, i
// closure: r, t
function {
  if (!(e)) goto L_8;
  goto L_1d;
  // [栈深重同步 1 -> 0]
  if ((i)) goto L_1c;
  t(new Error("No data returned"));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=1 bc=5B file=valdi_core/src/utils/PromiseUtils
// args: r, t
// closure: e
function {
  e(function <atom:0>);
  return;
}

// fn r  args=1 vars=1 closure=0 cpool=1 bc=12B file=valdi_core/src/utils/PromiseUtils
// args: e
function {
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=25B file=valdi_core/src/utils/PromiseUtils
// args: r, t
// locals: i
// closure: e
function {
  try { // catch -> L_c
  r(e());
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_18
  t(i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn t  args=1 vars=1 closure=0 cpool=1 bc=12B file=valdi_core/src/utils/PromiseUtils
// args: e
function {
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=3B file=valdi_core/src/utils/PromiseUtils
// closure: r
function {
  r();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=10B file=valdi_core/src/utils/PromiseUtils
// args: r
// closure: e
function {
  setTimeout(function <atom:0>, e);
  return;
}

// fn i  args=1 vars=1 closure=0 cpool=1 bc=12B file=valdi_core/src/utils/PromiseUtils
// args: e
function {
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=3B file=valdi_core/src/utils/PromiseUtils
// closure: t
function {
  t();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=41B file=valdi_core/src/utils/PromiseUtils
// args: t
// closure: e, r
function {
  e.setTimeoutInterruptible(function <atom:0>, r);
  return;
}

// fn s  args=1 vars=1 closure=1 cpool=1 bc=12B file=valdi_core/src/utils/PromiseUtils
// args: r
// closure: e
function {
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=27B file=valdi_core/src/utils/PromiseUtils
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.promise = null;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=valdi_core/src/utils/PromiseUtils
// locals: this
function {
  this = this;
  return (null !== this.promise);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=13B file=valdi_core/src/utils/PromiseUtils
// args: e
// closure: this
function {
  this.promise = null;
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=53B file=valdi_core/src/utils/PromiseUtils
// args: e
// closure: this
function {
  this.promise = null;
  return Promise.reject(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=2 bc=165B file=valdi_core/src/utils/PromiseUtils
// args: e
// locals: this
function {
  this = this;
  if ((this.promise)) goto L_81;
  this.promise = e().then(function <atom:0>).catch(function <atom:0>);
  e().then(function <atom:0>).catch(function <atom:0>);
  return this.promise;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=27B file=valdi_core/src/utils/PromiseUtils
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.promise = null;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=valdi_core/src/utils/PromiseUtils
// locals: this
function {
  this = this;
  this.promise = null;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=89B file=valdi_core/src/utils/PromiseUtils
// args: e
// locals: this
function {
  this = this;
  if ((this.promise)) goto L_35;
  this.promise = e();
  e();
  return this.promise;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=10 bc=308B file=valdi_core/src/utils/PromiseUtils
// args: require, module, exports
// locals: e, r, t, i, s, PromiseDeduper, <class_fields_init>, PromiseDeduper#1, PromiseCache, <class_fields_init>#1, PromiseCache#1
function {
  r = function r;
  t = function t;
  i = function i;
  s = function s;
  let PromiseCache#1;
  let PromiseDeduper#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.promisify = undefined;
  exports.promisifyProducer = undefined;
  exports.wait = undefined;
  exports.waitInterruptible = undefined;
  exports.PromiseDeduper = undefined;
  exports.PromiseCache = undefined;
  e = require("../SetTimeout");
  exports.promisify = r;
  exports.promisifyProducer = t;
  exports.wait = i;
  exports.waitInterruptible = s;
  let PromiseDeduper;
  let <class_fields_init>;
  class PromiseDeduper extends undefined { ... }
  <proto:PromiseDeduper>.isPerforming = function <atom:0>;
  <proto:PromiseDeduper>.performIfNeeded = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PromiseDeduper>;
  PromiseDeduper = function <atom:0>;
  // close_loc <class_fields_init>
  PromiseDeduper#1 = function <atom:0>;
  exports.PromiseDeduper = PromiseDeduper#1;
  let PromiseCache;
  let <class_fields_init>#1;
  class PromiseCache extends undefined { ... }
  <proto:PromiseCache>.invalidate = function <atom:0>;
  <proto:PromiseCache>.performIfNeeded = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:PromiseCache>;
  PromiseCache = function <atom:0>;
  // close_loc <class_fields_init>#1
  PromiseCache#1 = function <atom:0>;
  exports.PromiseCache = PromiseCache#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/PromiseUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
