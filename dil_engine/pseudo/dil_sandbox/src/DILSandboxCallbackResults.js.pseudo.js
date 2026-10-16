// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=68B file=dil_sandbox/src/DILSandboxCallbackResults
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.contextId = e;
  this.post = t;
  this.pending = new Map();
  this.nextId = 1;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=91B file=dil_sandbox/src/DILSandboxCallbackResults
// closure: this, s, c
function {
  this.pending.delete(s);
  c(new Error("DIL callback result timed out."));
  return;
}

// fn <atom:0>  args=2 vars=4 closure=7 cpool=1 bc=363B file=dil_sandbox/src/DILSandboxCallbackResults
// args: n, c
// locals: d, l
// closure: this, s, o, t, i, r, e
function {
  let d;
  d = setTimeout(function <atom:0>, o);
  this.pending.set(s, {resolve: n, reject: c, timeout: d});
  try { // catch -> L_e5
  this.post({kind: 6, contextId: this.contextId, functionId: t, args: i, interactionId: r, completionId: s});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  l = <?>;
  try { // catch -> L_16a
  this.pending.delete(s);
  clearTimeout(d);
  c(e.toDILSandboxError(l));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=1 bc=283B file=dil_sandbox/src/DILSandboxCallbackResults
// args: t, i, r, o
// locals: s, this
// closure: e
function {
  this = this;
  let s;
  if (!((undefined !== this.failure))) goto L_76;
  return Promise.reject(this.failure);   // tail call
  if ((!Number.isFinite(o))) goto L_a8;
  if (!((o <= 0))) goto L_e1;
  return Promise.reject(new Error("DIL callback result timeout must be positive."));   // tail call
  this.nextId = <this.nextId_new>;
  s = (this.nextId++);
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=538B file=dil_sandbox/src/DILSandboxCallbackResults
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!((e.contextId !== this.contextId))) goto L_4d;
  return;
  t = this.pending.get(e.completionId);
  if (!((undefined !== t))) goto L_219;
  this.pending.delete(e.completionId);
  clearTimeout(t.timeout);
  if (!((undefined === e.error))) goto L_1c7;
  goto L_219;
  // [栈深重同步 1 -> 0]
  t.reject(new Error(e.error));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=52B file=dil_sandbox/src/DILSandboxCallbackResults
// args: e
// locals: this
function {
  this = this;
  this.failure = e;
  this.reset(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=240B file=dil_sandbox/src/DILSandboxCallbackResults
// args: e
// locals: t, this
function {
  this = this;
  let t;
  for (const t of this.pending.values()) {
    clearTimeout(t.timeout);
    t.reject(e);
  }
  this.pending.clear();
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=5 bc=150B file=dil_sandbox/src/DILSandboxCallbackResults
// args: require, module, exports
// locals: e, DILSandboxCallbackResults, <class_fields_init>, DILSandboxCallbackResults#1
function {
  let DILSandboxCallbackResults#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxCallbackResults = undefined;
  e = require("./DILSandboxError");
  let DILSandboxCallbackResults;
  let <class_fields_init>;
  class DILSandboxCallbackResults extends undefined { ... }
  <proto:DILSandboxCallbackResults>.invoke = function <atom:0>;
  <proto:DILSandboxCallbackResults>.receive = function <atom:0>;
  <proto:DILSandboxCallbackResults>.dispose = function <atom:0>;
  <proto:DILSandboxCallbackResults>.reset = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxCallbackResults>;
  DILSandboxCallbackResults = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxCallbackResults#1 = function <atom:0>;
  exports.DILSandboxCallbackResults = DILSandboxCallbackResults#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxCallbackResults
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
