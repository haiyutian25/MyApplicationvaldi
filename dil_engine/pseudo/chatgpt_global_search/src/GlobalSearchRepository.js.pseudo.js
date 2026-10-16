// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=57B file=chatgpt_global_search/src/GlobalSearchRepository
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.api = e;
  this.cache = new Map();
  this.queryCounter = 0;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=76B file=chatgpt_global_search/src/GlobalSearchRepository
// args: t, r
// locals: this
// closure: e
function {
  this = this;
  return this.cache.get(e(t, r));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=chatgpt_global_search/src/GlobalSearchRepository
// closure: c
function {
  c.cancel();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=80B file=chatgpt_global_search/src/GlobalSearchRepository
// args: t
// closure: this, e, s, r
function {
  this.cache.set(e(s, r), t);
  return t;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=2 bc=349B file=chatgpt_global_search/src/GlobalSearchRepository
// args: t, r
// locals: s, o, c, this
// closure: e
function {
  this = this;
  let c;
  let o;
  let s;
  s = t.trim();
  this.queryCounter = <this.queryCounter_new>;
  o = "valdi-search-".concat(Date.now(), "-", (this.queryCounter++));
  c = this.api.search(s, r, o);
  return {cancel: function <atom:0>, result: c.result.then(function <atom:0>)};
}

// fn e  args=2 vars=2 closure=0 cpool=0 bc=116B file=chatgpt_global_search/src/GlobalSearchRepository
// args: e, t
function {
  return "".concat(t, ":", e.trim().toLowerCase());   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=126B file=chatgpt_global_search/src/GlobalSearchRepository
// args: require, module, exports
// locals: GlobalSearchRepository, <class_fields_init>, GlobalSearchRepository#1, e
function {
  e = function e;
  let GlobalSearchRepository#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.GlobalSearchRepository = undefined;
  let GlobalSearchRepository;
  let <class_fields_init>;
  class GlobalSearchRepository extends undefined { ... }
  <proto:GlobalSearchRepository>.cachedResults = function <atom:0>;
  <proto:GlobalSearchRepository>.search = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:GlobalSearchRepository>;
  GlobalSearchRepository = function <atom:0>;
  // close_loc <class_fields_init>
  GlobalSearchRepository#1 = function <atom:0>;
  exports.GlobalSearchRepository = GlobalSearchRepository#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_global_search/src/GlobalSearchRepository
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
