// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=57B file=dil_sandbox/src/DILSandboxHostActionRequests
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.contextId = e;
  this.nextRequestId = 1;
  this.pending = new Map();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=93B file=dil_sandbox/src/DILSandboxHostActionRequests
// args: e
// closure: this, n, s, t
function {
  this.pending.set(n, {sourceGeneration: s, discardOnInvalidate: t, resolve: e});
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=1 bc=82B file=dil_sandbox/src/DILSandboxHostActionRequests
// args: s, t
// locals: n, o, this
// closure: e
function {
  this = this;
  let o;
  let n;
  this.nextRequestId = <this.nextRequestId_new>;
  n = (this.nextRequestId++);
  o = new e(function <atom:0>);
  return {requestId: n, result: o};
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=804B file=dil_sandbox/src/DILSandboxHostActionRequests
// args: e
// locals: s, this
function {
  this = this;
  let s;
  s = this.pending.get(e.requestId);
  if (!((e.contextId === this.contextId))) goto L_323;
  if (!((undefined !== s))) goto L_323;
  if (!((s.sourceGeneration === e.sourceGeneration))) goto L_323;
  this.pending.delete(e.requestId);
  if (!(e.result.success)) goto L_1ee;
  goto L_1f3;
  // [栈深重同步 4 -> 3]
  if (!((undefined === e.result.dataJSON))) goto L_2d2;
  goto L_31b;
  // [栈深重同步 4 -> 3]
  null;
  {dataJSON: e.result.dataJSON};
  s.resolve({status: "error", response: e.result.response, statusMessage: e.result.statusMessage});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=257B file=dil_sandbox/src/DILSandboxHostActionRequests
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.pending.values()) {
    if ((e.discardOnInvalidate)) goto L_b3;
    e.resolve({status: "error", statusMessage: "The widget changed before the action completed."});
  }
  this.pending.clear();
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=140B file=dil_sandbox/src/DILSandboxHostActionRequests
// args: require, module, exports
// locals: e, DILSandboxHostActionRequests, <class_fields_init>, DILSandboxHostActionRequests#1
function {
  let DILSandboxHostActionRequests#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxHostActionRequests = undefined;
  e = Promise;
  let DILSandboxHostActionRequests;
  let <class_fields_init>;
  class DILSandboxHostActionRequests extends undefined { ... }
  <proto:DILSandboxHostActionRequests>.begin = function <atom:0>;
  <proto:DILSandboxHostActionRequests>.complete = function <atom:0>;
  <proto:DILSandboxHostActionRequests>.invalidate = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxHostActionRequests>;
  DILSandboxHostActionRequests = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxHostActionRequests#1 = function <atom:0>;
  exports.DILSandboxHostActionRequests = DILSandboxHostActionRequests#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxHostActionRequests
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
