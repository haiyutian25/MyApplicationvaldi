// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=24B file=valdi_core/src/utils/LazyPromise
// args: e
// closure: this
function {
  this.value = e;
  this.importFn = undefined;
  return e;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=168B file=valdi_core/src/utils/LazyPromise
// locals: e, this
function {
  this = this;
  let e;
  e = this.value;
  if (!((undefined !== e))) goto L_5c;
  return Promise.resolve(e);
  return this.importFn().then(function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=38B file=valdi_core/src/utils/LazyPromise
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.value = undefined;
  this.importFn = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=valdi_core/src/utils/LazyPromise
// closure: this, e
function {
  return this.promise.then(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=12B file=valdi_core/src/utils/LazyPromise
// args: e
// locals: this
// closure: LazyPromise
function {
  this = this;
  return new LazyPromise(function <atom:0>);
}

// fn e  args=1 vars=1 closure=1 cpool=0 bc=9B file=valdi_core/src/utils/LazyPromise
// args: e
// closure: LazyPromise
function {
  return new LazyPromise(e);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=127B file=valdi_core/src/utils/LazyPromise
// args: require, module, exports
// locals: LazyPromise, <class_fields_init>, LazyPromise#1, e
function {
  e = function e;
  let LazyPromise#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.lazyPromise = undefined;
  let LazyPromise;
  let <class_fields_init>;
  class LazyPromise extends undefined { ... }
  <proto:LazyPromise>.promise = function <atom:0>;
  <proto:LazyPromise>.then = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LazyPromise>;
  LazyPromise = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc LazyPromise
  LazyPromise#1 = function <atom:0>;
  exports.lazyPromise = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/LazyPromise
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
