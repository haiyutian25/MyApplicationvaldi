// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=39B file=valdi_core/src/LazyImport
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.loader = t;
  this.didLoad = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=136B file=valdi_core/src/LazyImport
// locals: this
function {
  this = this;
  if ((this.didLoad)) goto L_64;
  this.module = this.loader();
  this.didLoad = true;
  true;
  return this.module;
}

// fn t  args=1 vars=1 closure=1 cpool=0 bc=9B file=valdi_core/src/LazyImport
// args: t
// closure: LazyImportImpl
function {
  return new LazyImportImpl(t);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=116B file=valdi_core/src/LazyImport
// args: require, module, exports
// locals: LazyImportImpl, <class_fields_init>, LazyImportImpl#1, t
function {
  t = function t;
  let LazyImportImpl#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.lazyImport = undefined;
  let LazyImportImpl;
  let <class_fields_init>;
  class LazyImportImpl extends undefined { ... }
  <proto:LazyImportImpl>.get = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LazyImportImpl>;
  LazyImportImpl = function <atom:0>;
  // close_loc <class_fields_init>
  LazyImportImpl#1 = function <atom:0>;
  exports.lazyImport = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/LazyImport
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
