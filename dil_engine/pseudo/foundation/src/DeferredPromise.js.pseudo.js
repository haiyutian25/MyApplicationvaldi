// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=151B file=foundation/src/DeferredPromise
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, DeferredPromiseTimeoutError
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.message = e;
  this.name = "DeferredPromiseTimeoutError";
  Object.setPrototypeOf(this, DeferredPromiseTimeoutError.prototype);
  return this;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=12B file=foundation/src/DeferredPromise
// args: e, o
// closure: r, t
function {
  r = e;
  e;
  t = o;
  o;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=foundation/src/DeferredPromise
// args: e
// closure: this, r
function {
  return this.finalize(r, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=foundation/src/DeferredPromise
// args: e
// closure: this, t
function {
  return this.finalize(t, e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=92B file=foundation/src/DeferredPromise
// closure: this, DeferredPromiseTimeoutError, e
function {
  this.reject(new DeferredPromiseTimeoutError("Promise timed out after ".concat(e, "ms")));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=4 bc=110B file=foundation/src/DeferredPromise
// args: e
// locals: r, t, this
// closure: DeferredPromiseTimeoutError, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let t;
  let r;
  r = undefined;
  t = undefined;
  this.resolved = false;
  this.promise = new Promise(function <atom:0>);
  this.resolve = function <atom:0>;
  this.reject = function <atom:0>;
  if (!((undefined !== e))) goto L_6d;
  this.timeoutId = setTimeout(function <atom:0>, e);
  setTimeout(function <atom:0>, e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=148B file=foundation/src/DeferredPromise
// args: e, r
// locals: this
function {
  this = this;
  if ((this.resolved)) goto L_93;
  this.resolved = true;
  if (!(this.timeoutId)) goto L_8f;
  clearTimeout(this.timeoutId);
  this.timeoutId = undefined;
  undefined;
  e(r);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=74B file=foundation/src/DeferredPromise
// args: e, r
// locals: this
function {
  this = this;
  return this.promise.then(e, r);   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=182B file=foundation/src/DeferredPromise
// args: require, module, exports
// locals: DeferredPromiseTimeoutError, <class_fields_init>, DeferredPromiseTimeoutError#1, DeferredPromise, <class_fields_init>#1, DeferredPromise#1
function {
  let DeferredPromise#1;
  let DeferredPromiseTimeoutError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DeferredPromiseTimeoutError = undefined;
  exports.DeferredPromise = undefined;
  let DeferredPromiseTimeoutError;
  let <class_fields_init>;
  class DeferredPromiseTimeoutError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:DeferredPromiseTimeoutError>;
  DeferredPromiseTimeoutError = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DeferredPromiseTimeoutError
  DeferredPromiseTimeoutError#1 = function <atom:0>;
  exports.DeferredPromiseTimeoutError = DeferredPromiseTimeoutError#1;
  let DeferredPromise;
  let <class_fields_init>#1;
  class DeferredPromise extends undefined { ... }
  <proto:DeferredPromise>.finalize = function <atom:0>;
  <proto:DeferredPromise>.then = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DeferredPromise>;
  DeferredPromise = function <atom:0>;
  // close_loc <class_fields_init>#1
  DeferredPromise#1 = function <atom:0>;
  exports.DeferredPromise = DeferredPromise#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/DeferredPromise
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
