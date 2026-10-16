// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_sandbox/src/DILSandboxCommand
// args: e
// closure: s
function {
  s = e;
  e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=94B file=dil_sandbox/src/DILSandboxCommand
// closure: this, o
function {
  this.complete(new Error("Timed out waiting ".concat(o, "ms for DIL input to complete.")));
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=2 bc=109B file=dil_sandbox/src/DILSandboxCommand
// args: o, t
// locals: s, this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let s;
  s = undefined;
  this.result = new Promise(function <atom:0>);
  this.resolve = s;
  this.timeout = new e.DILSandboxTimeout(function <atom:0>, o, t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=dil_sandbox/src/DILSandboxCommand
// args: e
// locals: this
function {
  this = this;
  this.timeout.setBackgrounded(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=112B file=dil_sandbox/src/DILSandboxCommand
// args: e
// locals: this
function {
  this = this;
  this.timeout.dispose();
  this.resolve(e);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=134B file=dil_sandbox/src/DILSandboxCommand
// args: require, module, exports
// locals: e, DILSandboxCommand, <class_fields_init>, DILSandboxCommand#1
function {
  let DILSandboxCommand#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxCommand = undefined;
  e = require("./DILSandboxTimeout");
  let DILSandboxCommand;
  let <class_fields_init>;
  class DILSandboxCommand extends undefined { ... }
  <proto:DILSandboxCommand>.setBackgrounded = function <atom:0>;
  <proto:DILSandboxCommand>.complete = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxCommand>;
  DILSandboxCommand = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxCommand#1 = function <atom:0>;
  exports.DILSandboxCommand = DILSandboxCommand#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxCommand
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
