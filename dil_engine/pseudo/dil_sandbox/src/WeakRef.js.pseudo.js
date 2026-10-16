// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=dil_sandbox/src/WeakRef
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.value = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=dil_sandbox/src/WeakRef
// locals: this
function {
  this = this;
  return this.value;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=165B file=dil_sandbox/src/WeakRef
// args: require, module, exports
// locals: StrongWeakRef, <class_fields_init>, StrongWeakRef#1, e
function {
  let e;
  let StrongWeakRef#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WeakRef = undefined;
  let StrongWeakRef;
  let <class_fields_init>;
  class StrongWeakRef extends undefined { ... }
  <proto:StrongWeakRef>.deref = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:StrongWeakRef>;
  StrongWeakRef = function <atom:0>;
  // close_loc <class_fields_init>
  StrongWeakRef#1 = function <atom:0>;
  e = globalThis.WeakRef;
  if (!((e == null))) goto L_9b;
  e;
  exports.WeakRef = StrongWeakRef#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/WeakRef
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
