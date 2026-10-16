// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=38B file=valdi_core/src/StringCache
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.interner = e;
  this.cache = {};
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=140B file=valdi_core/src/StringCache
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.cache[e];
  if (((undefined !== t))) goto L_87;
  t = this.interner(e);
  this.interner(e);
  this.cache[e] = t;
  t;
  return t;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=115B file=valdi_core/src/StringCache
// args: require, module, exports
// locals: StringCache, <class_fields_init>, StringCache#1
function {
  let StringCache#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.StringCache = undefined;
  let StringCache;
  let <class_fields_init>;
  class StringCache extends undefined { ... }
  <proto:StringCache>.get = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:StringCache>;
  StringCache = function <atom:0>;
  // close_loc <class_fields_init>
  StringCache#1 = function <atom:0>;
  exports.StringCache = StringCache#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/StringCache
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
