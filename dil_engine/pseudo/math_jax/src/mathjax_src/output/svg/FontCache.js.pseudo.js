// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=79B file=math_jax/src/mathjax_src/output/svg/FontCache
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.cache = new Map();
  this.defs = null;
  this.localID = "";
  this.nextID = 0;
  this.jax = t;
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=584B file=math_jax/src/mathjax_src/output/svg/FontCache
// args: t, e, s
// locals: a, this
function {
  this = this;
  let a;
  if ((this.jax.font.getVariant(t).cacheID)) goto L_bb;
  a = (((("MJX-" + this.localID) + "") + "-") + e);
  if ((this.cache.has(a))) goto L_243;
  this.cache.set(a, s);
  this.jax.adaptor.append(this.defs, this.jax.svg("path", {id: a, d: s}));
  return a;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/output/svg/FontCache
// locals: this
function {
  this = this;
  this.localID = "";
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=90B file=math_jax/src/mathjax_src/output/svg/FontCache
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_d;
  t;
  t = null;
  t#1 = null;
  if (!((t == null))) goto L_42;
  t;
  this.nextID = (this.nextID ++);
  if (!(("" === t))) goto L_4a;
  goto L_4f;
  // [栈深重同步 3 -> 2]
  this.localID = ((this.nextID ++) + "-");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=107B file=math_jax/src/mathjax_src/output/svg/FontCache
// locals: this
function {
  this = this;
  this.cache = new Map();
  this.defs = this.jax.svg("defs");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/output/svg/FontCache
// locals: this
function {
  this = this;
  return this.defs;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=6 bc=147B file=math_jax/src/mathjax_src/output/svg/FontCache
// args: require, module, exports
// locals: FontCache, <class_fields_init>, FontCache#1
function {
  let FontCache#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FontCache = undefined;
  let FontCache;
  let <class_fields_init>;
  class FontCache extends undefined { ... }
  <proto:FontCache>.cachePath = function <atom:0>;
  <proto:FontCache>.clearLocalID = function <atom:0>;
  <proto:FontCache>.useLocalID = function <atom:0>;
  <proto:FontCache>.clearCache = function <atom:0>;
  <proto:FontCache>.getCache = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FontCache>;
  FontCache = function <atom:0>;
  // close_loc <class_fields_init>
  FontCache#1 = function <atom:0>;
  exports.FontCache = FontCache#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/FontCache
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
