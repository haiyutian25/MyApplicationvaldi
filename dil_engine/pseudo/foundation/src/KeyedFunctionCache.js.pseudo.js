// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=35B file=foundation/src/KeyedFunctionCache
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.cache = new Map();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=171B file=foundation/src/KeyedFunctionCache
// args: e
// locals: t, this
// closure: CachingKeyedFunctionFactory
function {
  this = this;
  let t;
  t = undefined;
  if (!((this.lastUsedFn === e))) goto L_51;
  goto L_5a;
  // [栈深重同步 1 -> 0]
  t = new Map();
  new Map();
  this.cache = new Map();
  this.lastUsedFn = e;
  return new CachingKeyedFunctionFactory(t, this.cache, e);
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=foundation/src/KeyedFunctionCache
// args: e, t, c
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.prevCache = e;
  this.newCache = t;
  this.fn = c;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=233B file=foundation/src/KeyedFunctionCache
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.prevCache.get(e) == null))) goto L_99;
  this.prevCache.get(e);
  t = this.fn.bind(null, e);
  this.newCache.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=151B file=foundation/src/KeyedFunctionCache
// args: require, module, exports
// locals: KeyedFunctionCache, <class_fields_init>, KeyedFunctionCache#1, CachingKeyedFunctionFactory, <class_fields_init>#1, CachingKeyedFunctionFactory#1
function {
  let CachingKeyedFunctionFactory#1;
  let KeyedFunctionCache#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.KeyedFunctionCache = undefined;
  let KeyedFunctionCache;
  let <class_fields_init>;
  class KeyedFunctionCache extends undefined { ... }
  <proto:KeyedFunctionCache>.for = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:KeyedFunctionCache>;
  KeyedFunctionCache = function <atom:0>;
  // close_loc <class_fields_init>
  KeyedFunctionCache#1 = function <atom:0>;
  exports.KeyedFunctionCache = KeyedFunctionCache#1;
  let CachingKeyedFunctionFactory;
  let <class_fields_init>#1;
  class CachingKeyedFunctionFactory extends undefined { ... }
  <proto:CachingKeyedFunctionFactory>.bindKey = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:CachingKeyedFunctionFactory>;
  CachingKeyedFunctionFactory = function <atom:0>;
  // close_loc <class_fields_init>#1
  CachingKeyedFunctionFactory#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/KeyedFunctionCache
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
