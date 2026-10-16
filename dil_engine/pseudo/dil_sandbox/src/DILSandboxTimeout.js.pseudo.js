// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=88B file=dil_sandbox/src/DILSandboxTimeout
// args: t, e, i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.onTimeout = t;
  this.timeoutMs = e;
  this.disposed = false;
  this.setBackgrounded(i);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=76B file=dil_sandbox/src/DILSandboxTimeout
// closure: this
function {
  this.dispose();
  this.onTimeout();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=44B file=dil_sandbox/src/DILSandboxTimeout
// closure: this
function {
  return setTimeout(function <atom:0>, this.timeoutMs);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=148B file=dil_sandbox/src/DILSandboxTimeout
// args: e
// locals: this
// closure: t
function {
  this = this;
  if ((this.disposed)) goto L_93;
  clearTimeout(this.timeoutId);
  this.timeoutId = undefined;
  if ((e)) goto L_93;
  this.timeoutId = t.withGlobalNativeRefs(function <atom:0>);
  t.withGlobalNativeRefs(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=67B file=dil_sandbox/src/DILSandboxTimeout
// locals: this
function {
  this = this;
  this.disposed = true;
  clearTimeout(this.timeoutId);
  this.timeoutId = undefined;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=134B file=dil_sandbox/src/DILSandboxTimeout
// args: require, module, exports
// locals: t, DILSandboxTimeout, <class_fields_init>, DILSandboxTimeout#1
function {
  let DILSandboxTimeout#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxTimeout = undefined;
  t = require("valdi_core/src/NativeReferences");
  let DILSandboxTimeout;
  let <class_fields_init>;
  class DILSandboxTimeout extends undefined { ... }
  <proto:DILSandboxTimeout>.setBackgrounded = function <atom:0>;
  <proto:DILSandboxTimeout>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxTimeout>;
  DILSandboxTimeout = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxTimeout#1 = function <atom:0>;
  exports.DILSandboxTimeout = DILSandboxTimeout#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxTimeout
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
