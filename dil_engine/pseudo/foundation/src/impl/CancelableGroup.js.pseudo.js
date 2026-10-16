// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=150B file=foundation/src/impl/CancelableGroup
// args: e
// closure: this
function {
  if (!(this.canceled)) goto L_4c;
  e.cancel();
  return this;
  this.cancelables.push(e);
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=154B file=foundation/src/impl/CancelableGroup
// args: c
// closure: this, e
function {
  this.add(new e.default(c.cancel));
  return Promise.resolve(c);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=120B file=foundation/src/impl/CancelableGroup
// locals: e, c
// closure: this
function {
  let e;
  this.canceled = true;
  e = this.cancelables;
  this.cancelables = [];
  let c;
  for (const c of e) {
    c.cancel();
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=3 bc=85B file=foundation/src/impl/CancelableGroup
// args: c
// locals: this
// closure: e, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  c = ...0;
  this.canceled = false;
  this.add = function <atom:0>;
  this.addCancelablePromise = function <atom:0>;
  this.cancel = function <atom:0>;
  // append([], 0, c)
  c;
  this.cancelables = [];
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=foundation/src/impl/CancelableGroup
// locals: this
function {
  this = this;
  return this.canceled;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=115B file=foundation/src/impl/CancelableGroup
// args: require, module, exports
// locals: e, CancelableGroup, <class_fields_init>, CancelableGroup#1
function {
  let CancelableGroup#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  e = require("./CallbackCancelable");
  let CancelableGroup;
  let <class_fields_init>;
  class CancelableGroup extends undefined { ... }
  <proto:CancelableGroup>.isCanceled = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CancelableGroup>;
  CancelableGroup = function <atom:0>;
  // close_loc <class_fields_init>
  CancelableGroup#1 = function <atom:0>;
  exports.default = CancelableGroup#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/impl/CancelableGroup
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
